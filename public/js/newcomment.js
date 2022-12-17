const newCommentFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the New Post form

  const comment_content = document
    .querySelector("#comment-content")
    .value.trim();

  if (comment_content) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment_content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".new-comment")
  .addEventListener("submit", newCommentFormHandler);
