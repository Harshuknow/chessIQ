* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  color: white;
  background: linear-gradient(135deg, #1e1b4b, #312e81, #4c1d95);
  min-height: 100vh;
  overflow-x: hidden;
}

.floating {
  position: fixed;
  font-size: 60px;
  color: rgba(255, 215, 0, 0.2);
  z-index: 0;
  animation: float 6s ease-in-out infinite;
}

.piece1 { top: 10%; left: 5%; }
.piece2 { top: 20%; right: 8%; animation-delay: 1s; }
.piece3 { bottom: 20%; left: 8%; animation-delay: 2s; }
.piece4 { bottom: 10%; right: 5%; animation-delay: 3s; }

@keyframes float {
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

header {
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.08);
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 8%;
  align-items: center;
}

nav h1 {
  color: gold;
  font-size: 32px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-weight: bold;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.hero h2 {
  font-size: 64px;
  color: gold;
  text-shadow: 0 0 20px rgba(255,215,0,0.5);
}

.hero h3 {
  font-size: 34px;
  margin: 20px 0;
}

.hero p {
  font-size: 22px;
  max-width: 800px;
  margin: auto;
  line-height: 1.8;
}

.hero-buttons {
  margin-top: 35px;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 30px;
  text-decoration: none;
  margin: 8px;
  font-weight: bold;
  background: gold;
  color: black;
  transition: 0.3s;
  box-shadow: 0 0 20px rgba(255,215,0,0.4);
}

.btn:hover {
  transform: scale(1.08);
}

.secondary {
  background: rgba(255,255,255,0.1);
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
}

.section {
  padding: 80px 8%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.section h2 {
  font-size: 42px;
  margin-bottom: 50px;
  color: gold;
}

.cards {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.4s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 0 25px rgba(255,215,0,0.3);
}

.course-box {
  max-width: 500px;
  margin: auto;
  background: rgba(255,255,255,0.12);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
}

.course-box h3 {
  color: gold;
  font-size: 32px;
}

.course-box p {
  font-size: 28px;
  margin: 20px 0;
}

.course-box ul {
  list-style: none;
}

.course-box li {
  margin: 12px 0;
}

.join-section form {
  max-width: 600px;
  margin: auto;
  background: rgba(255,255,255,0.12);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
}

input, select, button {
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
}

button {
  background: gold;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

#statusMessage {
  margin-top: 10px;
  color: white;
}

.popup {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  color: black;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  width: 90%;
  max-width: 450px;

  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

.popup-content img {
  width: 250px;
  margin: 20px 0;
}

footer {
  text-align: center;
  padding: 30px;
  background: rgba(255,255,255,0.08);
}

@media (max-width:768px) {
  .hero h2 { font-size: 40px; }
  .hero h3 { font-size: 26px; }
  .hero p { font-size: 18px; }

  nav {
    flex-direction: column;
  }

  .nav-links {
    margin-top: 15px;
  }
}