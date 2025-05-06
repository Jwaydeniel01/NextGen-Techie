document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "Top 10 AI Tools to Try in 2025",
      content: "Explore powerful AI tools that are reshaping industries—from image generation to productivity boosters."
    },
    {
      title: "How 5G is Changing Mobile Development",
      content: "Faster connections mean faster apps. Here’s how 5G is transforming user experience and expectations."
    },
    {
      title: "Coding Tips for Beginners in 2025",
      content: "Start strong with beginner-friendly languages, tools, and tips tailored for today’s tech scene."
    }
  ];

  const blogSection = document.getElementById("blog-posts");
  posts.forEach(post => {
    const article = document.createElement("article");
    article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    blogSection.appendChild(article);
  });

  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    messageBox.textContent = "Thank you! Your message has been sent.";
    form.reset();
  });
});
