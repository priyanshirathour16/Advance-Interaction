const likeCount = document.getElementById("like-count");
const commentCount = document.getElementById("comment-count");
const feedButton = document.querySelector("#linkidin-button");

likeCount.addEventListener("input", validateInput);
commentCount.addEventListener("input", validateInput);

function validateInput() {
  if (likeCount.value !== "" && commentCount.value !== "") {
    feedButton.disabled = false;
    feedButton.style.backgroundColor = "blue";
    feedButton.style.color = "white";
  } else {
    feedButton.disabled = true;
  }
}

feedButton.addEventListener("click", () => {
  const linkedinFeed = "https://www.linkedin.com/feed/";

  const linkedinWindow = window.open(linkedinFeed, "_blank");

  linkedinWindow.addEventListener("load", () => {
    const likeValue = parseInt(likeCount.value);
    const commentValue = parseInt(commentCount.value);
    const linkedinLikeButtons = linkedinWindow.document.querySelectorAll(
      ".reactions-react-button.feed-shared-social-action-bar__action-button"
    );

    for (let i = 0; i < likeValue; i++) {
      linkedinLikeButtons[i].click();
    }

    for (let i = 0; i < commentValue; i++) {
      linkedinWindow.document.querySelector(
        ".ql-editor.ql-blank > p"
      ).innerText = "CFBR";
      linkedinWindow.document
        .querySelector(".comments-comment-box__form")
        .click();
    }
  });
});
