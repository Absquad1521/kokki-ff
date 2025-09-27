const symbols = ["🔥","✨","⚡","💀","🌟","💎","🩸","⚔️","🐉","✦","🖕🏻","💥","👊","💣","💯","💦"];

const fontStyles = [
  text => text.toUpperCase(),
  text => text.split('').reverse().join(''),
  text => text.split('').map(c => c+'•').join(''),
  text => text.split('').map(c => c+'̃').join(''),
];

const adjectives = ["Shadow","Fire","Ghost","Dark","Legend","Fury","Dragon"];
const nouns = ["Killer","Sniper","Blade","Hunter","Storm","Phantom"];

function createNicknameElement(nickname) {
  const p = document.createElement('p');
  p.textContent = nickname;
  p.className = 'nicknameItem';
  p.title = "Click to copy!";
  p.onclick = () => {
    navigator.clipboard.writeText(nickname);
    p.textContent = "✅ Copied!";
    setTimeout(() => { p.textContent = nickname; }, 800);
  };
  return p;
}

function getCount() {
  const count = parseInt(document.getElementById("countInput").value);
  return count > 0 ? count : 10; // unlimited
}

function generateNickname() {
  const input = document.getElementById("nicknameInput").value.trim();
  const output = document.getElementById("nicknameResult");
  const count = getCount();
  if(!input){ alert("Enter a name!"); return; }

  for(let i=0;i<count;i++){
    const styleFunc = fontStyles[Math.floor(Math.random()*fontStyles.length)];
    const symbolLeft = symbols[Math.floor(Math.random()*symbols.length)];
    const symbolRight = symbols[Math.floor(Math.random()*symbols.length)];
    let nicknameStyled = styleFunc(input);
    if(Math.random() > 0.5){
      const randomIndex = Math.floor(Math.random()*nicknameStyled.length);
      nicknameStyled = nicknameStyled.slice(0, randomIndex) + symbols[Math.floor(Math.random()*symbols.length)] + nicknameStyled.slice(randomIndex);
    }
    const nickname = `${symbolLeft}${nicknameStyled}${symbolRight}`;
    output.appendChild(createNicknameElement(nickname));
  }
}

function generateRandomNickname(){
  const output = document.getElementById("nicknameResult");
  const count = getCount();

  for(let i=0;i<count;i++){
    const adj = adjectives[Math.floor(Math.random()*adjectives.length)];
    const noun = nouns[Math.floor(Math.random()*nouns.length)];
    const symbolLeft = symbols[Math.floor(Math.random()*symbols.length)];
    const symbolRight = symbols[Math.floor(Math.random()*symbols.length)];
    let nicknameStyled = adj + noun;
    if(Math.random() > 0.5){
      const randomIndex = Math.floor(Math.random()*nicknameStyled.length);
      nicknameStyled = nicknameStyled.slice(0, randomIndex) + symbols[Math.floor(Math.random()*symbols.length)] + nicknameStyled.slice(randomIndex);
    }
    const nickname = `${symbolLeft}${nicknameStyled}${symbolRight}`;
    output.appendChild(createNicknameElement(nickname));
  }
}