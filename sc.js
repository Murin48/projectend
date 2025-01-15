// แสดงปุ่มเมื่อเลื่อนลงมา
window.onscroll = function() {
    toggleBackToTopButton();
  };
  
  function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  
  // เลื่อนกลับไปด้านบน
  document.getElementById("backToTop").onclick = function() {
    scrollToTop();
  };
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  