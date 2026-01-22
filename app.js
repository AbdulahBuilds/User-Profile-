const btn = document.getElementById("followBtn");

btn.addEventListener("click", () => {
  const isFollowing = btn.textContent === "Following";

  btn.textContent = isFollowing ? "Follow" : "Following";

  btn.classList.toggle("bg-blue-600", isFollowing);
  btn.classList.toggle("bg-gray-500", !isFollowing);

  if (!isFollowing) {
    alert("You followed Abdullah");
  }
});
