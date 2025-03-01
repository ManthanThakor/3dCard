document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".masonry-grid");
  const items = document.querySelectorAll(".video-item");
  const filterButtons = document.querySelectorAll(".filter-buttons button");

  // Function to arrange items in Masonry layout
  function setMasonryLayout() {
    let columns = getComputedStyle(grid).columnCount; // Get column count
    let columnHeights = Array(columns).fill(0); // Initialize column heights

    items.forEach((item) => {
      if (!item.classList.contains("hidden")) {
        let minHeightColumn = columnHeights.indexOf(Math.min(...columnHeights));
        item.style.order = minHeightColumn;
        columnHeights[minHeightColumn] += item.offsetHeight;
      }
    });
  }

  // Apply animations when items load
  items.forEach((item) => {
    item.classList.add("loaded"); // Trigger fade-in animation
  });

  // Filtering Functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      items.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });

      setTimeout(setMasonryLayout, 400); // Wait for animation, then adjust layout
    });
  });

  // Run Masonry Layout Initially
  setMasonryLayout();
  window.addEventListener("resize", setMasonryLayout);
});
