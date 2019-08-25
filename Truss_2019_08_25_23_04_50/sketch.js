function setup() {
	createCanvas(800,800);

//create sliders
let dmin = 0.01;


  
s_Slider = createSlider(0,80,10);
s_Slider.position(20,40);
d_Slider = createSlider(1,50,20);
d_Slider.position(20,70);
slope_Slider = createSlider(0.1,1,0.1,0.05);
slope_Slider.position(20,100);
}

function draw(){
	background(255);
	let s = s_Slider.value();
	let d = d_Slider.value();
    let a = slope_Slider.value();
	let d1 = 150;
  
    text('NAME THAT PARAMETER',20,20);
  
	for (let i = 20; i<180; i=i+s) {
		point(2*i,d1);
		point(2*(i+s/2),d1+d+a*2*(i+s/2));
		line(2*i,d1,2*(i+s/2),d1+d+a*2*(i+s/2));
        
      beginShape();
      vertex(2*i,d1)
      vertex(2*(i+s),d1);
      endShape();}

	for(let j = 20+s/2; j<180-s/2; j=j+s){
		line(2*j,d1+d+a*2*j,2*(j+s/2),d1);
    
        beginShape();
        vertex(2*j,d1+d+a*2*j);
        vertex(2*(j+s),d1+d+a*2*(j+s));
        endShape();}
}