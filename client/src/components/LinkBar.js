import React, { useState } from "react";

const LinkBar = () => {
  const [shortenedLink, setShortenedLink] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let input = document.getElementsByClassName("link")[0];
  let msg = document.getElementsByClassName("error-msg")[0];

  const updateInputValue = (e) => {
    // if (input.classList.contains("active")) {
    //   input.classList.remove("active");
    //   msg.classList.remove("active");
    // }
    setInputValue(e.target.value);
  };

  const copyToClipboard = (value, id) => {
    navigator.clipboard.writeText(value);
    const button = document.getElementById(id);
    button.style.backgroundColor = "hsl(257, 27%, 26%)";
    button.innerHTML = "Copied!";
  };

  const addNewLink = (longLink) => {
    fetch("http://localhost:5001/api/url/shorten", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: longLink,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.longUrl == "") {
          let input = document.getElementsByClassName("link")[0];
          let msg = document.getElementsByClassName("error-msg")[0];
          input.classList.add("active");
          msg.classList.add("active");
        } else {
          let shortLink = data.shortUrl;
          let link = { shortLink, longLink };
          setShortenedLink([...shortenedLink, link]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            className="link"
            value={inputValue}
            onChange={(e) => updateInputValue(e)}
            type="text"
            name="url"
            placeholder="Shorten a link here"
          />
          <p className="error-msg">Please add a valid link</p>
          <input
            className="shorten"
            type="button"
            value="Shorten it!"
            onClick={() => addNewLink(inputValue)}
          />
        </form>

        {shortenedLink.map((link, index) => {
          return (
            <div className="result" key={index}>
              <p>{link.longLink}</p>
              <div className="copy">
                <a href={link.shortLink} target="_blank">
                  {link.shortLink}
                </a>
                <button
                  id={index}
                  onClick={() => copyToClipboard(link.shortLink, index)}
                >
                  Copy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LinkBar;
