// ฟังก์ชันสำหรับเพิ่มคะแนนเมื่อคลิกปุ่ม
function addScore() {
    // เรียกดูคะแนนปัจจุบันจาก LocalStorage
    let currentScore = localStorage.getItem('score');
    
    // ถ้าไม่มีคะแนนใน LocalStorage ให้กำหนดค่าเริ่มต้นเป็น 0
    if (!currentScore) {
      currentScore = 0;
    }
    
    // เพิ่มคะแนน
    currentScore++;
    
    // อัปเดตคะแนนใน LocalStorage
    localStorage.setItem('score', currentScore);
    
    // แสดงคะแนนใหม่
    displayScore(currentScore);
  }
  
  // ฟังก์ชันสำหรับแสดงคะแนน
  function displayScore(score) {
    // แสดงคะแนนในตำแหน่งที่ต้องการ
    document.getElementById('score').innerText = score;
  }
  
  // เมื่อโหลดหน้าเว็บเสร็จสิ้น ตรวจสอบว่ามีคะแนนใน LocalStorage หรือไม่และแสดงออกทางหน้าจอ
  window.onload = function() {
    let currentScore = localStorage.getItem('score');
    
    if (currentScore) {
      displayScore(currentScore);
    } else {
      // ถ้าไม่มีคะแนนใน LocalStorage ให้แสดงค่าเริ่มต้นเป็น 0
      displayScore(0);
    }
  }
  
  // เพิ่ม Event Listener ให้กับปุ่มเพื่อเรียกใช้ฟังก์ชัน addScore เมื่อคลิก
  document.getElementById('addButton').addEventListener('click', addScore);
  