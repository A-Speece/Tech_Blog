const newPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the New Post form
  const blog_title = document.querySelector("#post-title").value.trim();

  const blog_content = document.querySelector("#post-content").value.trim();

  if (blog_title && blog_content) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ blog_title, blog_content }),
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
  .querySelector(".new-post")
  .addEventListener("submit", newPostFormHandler);
