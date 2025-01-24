// การนับจำนวนผู้เข้าชมเว็บไซต์
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visitor-count').innerText = visitorCount;
