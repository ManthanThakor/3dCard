window.addEventListener("load", function () {
  const grid = document.querySelector(".masonry-grid");
  const items = document.querySelectorAll(".video-item");

  function setMasonryLayout() {
    let columns = getComputedStyle(grid).columnCount;
    let columnHeights = Array(columns).fill(0);

    items.forEach((item) => {
      let minHeightColumn = columnHeights.indexOf(Math.min(...columnHeights));
      item.style.order = minHeightColumn;
      columnHeights[minHeightColumn] += item.offsetHeight;
    });
  }

  setMasonryLayout();
  window.addEventListener("resize", setMasonryLayout);
});
