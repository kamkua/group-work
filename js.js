// 音乐控制
document.addEventListener('DOMContentLoaded', function() {
  const musicToggle = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');
  
  // 初始状态检查（如果有本地存储记录）
  const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
  if (isMusicPlaying) {
    playMusic();
  }
  
  // 点击切换音乐
  musicToggle.addEventListener('click', function() {
    if (bgMusic.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  });
  
  // 播放音乐
  function playMusic() {
    bgMusic.play().catch(e => {
      console.log('自动播放失败:', e);
      // 提示用户点击播放
      musicToggle.innerHTML = '<i class="fa fa-exclamation-triangle"></i>';
      setTimeout(() => {
        musicToggle.innerHTML = '<i class="fa fa-music"></i>';
      }, 2000);
    });
    musicToggle.classList.add('playing');
    localStorage.setItem('musicPlaying', 'true');
  }
  
  // 暂停音乐
  function pauseMusic() {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
    localStorage.setItem('musicPlaying', 'false');
  }
  
  // 页面可见性变化时处理音乐
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      if (!bgMusic.paused) pauseMusic();
    } else {
      if (localStorage.getItem('musicPlaying') === 'true') {
        playMusic();
      }
    }
  });
});


        document.getElementById('petBtn').addEventListener('click', function() {
            const resultDiv = document.getElementById('petResult');
            resultDiv.style.display = 'block';
            this.textContent = '🐶 查看情感分析报告';
            this.classList.add('clicked');
        });
