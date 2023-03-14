let scene=document.getElementById('scene');
let text = document.getElementById('text');
let parallaxInstanceScene= new Parallax(scene);
let parallaxInstanceText= new Parallax(text);
parallaxInstanceScene.friction(0.2, 0.2);