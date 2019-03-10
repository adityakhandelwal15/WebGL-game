var cubeRotation = 0.0;
var p = [0, 0.1,0];

var c,head,body,leg1,leg2,hand1,hand2,grayscale = -1,game_over=0,obss3 = [],obs3_lane=[],takra_gaya3=[];
var x;
var r0;
var r1,c1,score=0,magnet_activated = 0,dist_magnet = 0,show_siren = 1,dist_siren = 0,takraya = [];
var r,w1,w2,t1,o1,show_flag = [],train_lane=[],badu = 1,obs2_lane=[],takra_gaya2=[],obs_lane=[];
var ar = [];
var cr = [];
var coin_lane = [],trains = [],aise_hi = 0;
var KeyboardHelper = { left: 37, up: 38, right: 39, down: 40 };
var player_pos = 0,high_jump=0,jump_hieght = 0.1;
var flag_up_down = 1,flag_going_up = 0,dist_h = 0,magnet;
var player2,gr,police,g2,bb,bb1,udao_re=0,dist = 0,obss=[],jump1,jump2,show_j = [];
var programInfo,programInfo1,programInfo2, shaderProgram,shaderProgram1,shaderProgram2,flag_flash = 0,dist_flash=0;


const canvas = document.querySelector('#glcanvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

var t = loadTexture(gl, 'ui.jpg');
var w = loadTexture(gl, 't.jpg');
var ww = loadTexture(gl, 'kl.jpeg');
var o = loadTexture(gl, 'obs.jpg');
var coll = loadTexture(gl, 'y.jpg');
var car = loadTexture(gl, 'vv.jpg');
var grass = loadTexture(gl, 'gr.jpg');
var boot = loadTexture(gl, '10.jpg');
var red = loadTexture(gl, 'rr.jpg');
var j = loadTexture(gl, 'j.png');
var mag = loadTexture(gl, 'mg.jpg');
var pp = loadTexture(gl, 'siren.jpg');
var pr = loadTexture(gl, 'pr.jpg');
var pol = loadTexture(gl, 'bl.jpg');
var s = loadTexture(gl, 'skin.png');
var bn = loadTexture(gl, 'klp.png');
var bk = loadTexture(gl, 'iop.png');
var puma = loadTexture(gl, 'puma.jpg');
main();

function main() {

  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  c = new cube(gl, [0, 0, -10.0]);
  // x = new cube(gl, [0, 0.0, -10.0]);
  track1 = new tracks(gl,[0, 0.0, -50.0]);
  g = new player(gl,[0, 0.0, -50.0]);
  r = new rail(gl,[0, 0.0, 1]);
  r0 = new rail(gl,[-0.1, 0.0, 1]);
  r1 = new rail(gl,[0.1, 0.0, 1]);
  gr = new rail(gl,[0.2, 0.0, 1]);
  gr2 = new rail(gl,[-0.2, 0.0, 1]);
  w1 = new wall(gl,[0.15, 0.0, 1]);
  w2 = new wall(gl,[-0.25, 0.0, 1]);
  t1 = new train(gl,[0.06, 0.0, -2]);
  c1 = new coin(gl,[0, 0.03, -0.5]);
  bb = new boots(gl,[-0.017, 0.02, -1.0]);
  bb1 = new boots(gl,[-0.017, 0.02, -5.5]);
  jump1 = new boots(gl,[-0.017, 0.02, -2.5]);
  jump2 = new boots(gl,[-0.017, 0.02, -8.5]);
  magnet = new boots(gl,[-0.017, 0.02, -4.5]);
  show_j.push(1);
  show_j.push(1);
  show_j.push(1);
  show_j.push(1);
  show_j.push(1);
  //  -0.135 ,-0.035, 0.065
  player1 = new player(gl,[-0.035 + player_pos * 0.1 , 0.0, -0.5]);
  player2 = new p2(gl,[-0.035 + player_pos * 0.1 , 0.0, -0.5]);
  police = new obstacle(gl,[-0.035 + player_pos * 0.1 , -0.08, -0.3]);
  head = new coin(gl,[0.02, 0.08, -0.3]);
  body = new boots(gl,[0, 0.04, -0.3]);
  leg1 = new legs(gl,[0.005, 0, -0.3]);
  leg2 = new legs(gl,[0.025, 0, -0.3]);
  hand1 = new legs(gl,[-0.005, 0.03, -0.3]);
  hand2 = new legs(gl,[0.035, 0.03, -0.3]);



  for (i = 0; i < 15; i++) {
    var ran = Math.floor((Math.random() * 120) + 0.1);
    var ran1 = Math.floor((Math.random() * 3));
    o1 = new obstacle(gl,[-0.15 + ran1*0.1 + 0.02, -0.02, -ran/10]);
    ar.push(o1);
    obs_lane.push(ran1-1);
    takraya.push(0);
  } 
  for (i = 0; i < 10; i++) {
    var ran = Math.floor((Math.random() * 100) + 0.1);
    var ran1 = Math.floor((Math.random() * 3));
    o1 = new obs2(gl,[-0.15 + ran1*0.1 + 0.02, -0.02, -ran/10]);
    obss.push(o1);
    obs2_lane.push(ran1-1);
    takra_gaya2.push(0);
  }
  for (i = 0; i < 10; i++) {
    var ran = Math.floor((Math.random() * 150) + 0.1);
    var ran1 = Math.floor((Math.random() * 3));
    o1 = new obs3(gl,[-0.15 + ran1*0.1 + 0.02, -0.02, -ran/10]);
    obss3.push(o1);
    obs3_lane.push(ran1-1);
    takra_gaya3.push(0);
  }
  for (i = 0; i < 100; i++) {
    var ran = Math.floor((Math.random() * 150) + 0.1);
    var ran1 = Math.floor((Math.random() * 3));
    cc = new coin(gl,[-0.15 + ran1*0.1 + 0.05, 0.03, -ran/10]);
    cr.push(cc);
    coin_lane.push(ran1-1);
    show_flag.push(1);
    // console.log(show_flag[i],ran1,-ran/10)
  }
  for (var i = 0; i < 5; i++) {
    var ran = Math.floor((Math.random() * 140) + 0.1);
    var ran1 = Math.floor((Math.random() * 3));
    o1 = new train(gl,[-0.15 + ran1*0.1, 0.0, -ran/10]);
    trains.push(o1);
    train_lane.push(ran1-1);
  }
  console.log(cr.length)
  //-0.25 ,-0.135,
  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;


    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;

    const vsSource2 = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;

      // Apply lighting effect

      highp vec3 ambientLight = vec3(0.5, 0.5, 0.5);
      vLighting = ambientLight;
    }
  `;

    const fsSource2 = `
    varying highp vec2 vTextureCoord;
    varying highp vec3 vLighting;

    uniform sampler2D uSampler;

    void main(void) {
      highp vec4 texelColor = texture2D(uSampler, vTextureCoord);

      gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);
    }
  `;



  // Fragment shader program


   const fsSource = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    }
  `;

  const fsSource1 = `
    varying highp vec2 vTextureCoord;

    uniform sampler2D uSampler;

    void main(void) {
      // gl_FragColor = texture2D(uSampler, vTextureCoord);
      precision highp float;
      vec4 color = texture2D(uSampler, vTextureCoord);
      float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      gl_FragColor = vec4(vec3(gray), 1.0);

    }
  `;
  
   shaderProgram = initShaderProgram(gl, vsSource, fsSource);
   shaderProgram1 = initShaderProgram(gl, vsSource, fsSource1);
   shaderProgram2 = initShaderProgram(gl, vsSource2, fsSource2);



  programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler'),
    },
  };

  programInfo1 = {
    program: shaderProgram1,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram1, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram1, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram1, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram1, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram1, 'uSampler'),
    },
  };

  programInfo2 = {
    program: shaderProgram2,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram2, 'aVertexPosition'),
      textureCoord: gl.getAttribLocation(shaderProgram2, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram2, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram2, 'uModelViewMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram2, 'uSampler'),
    },
  };
  var then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;
    

    if(!game_over && score + (aise_hi/10)<250 )
    {
        if(grayscale == -1)
          drawScene(gl, programInfo, deltaTime);
        else
          drawScene(gl, programInfo1, deltaTime);

    }

    if(game_over)
      document.getElementById('status').innerHTML = "Game Over!";
    else if(score + (aise_hi/10)>=250)
      document.getElementById('status').innerHTML = "Wooonnn!";

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
function keyDownHandler(event) {

    if (event.keyCode == 87 && badu == 1) {
      flag_going_up = 1;
    }
    if (event.keyCode == 71) {
      grayscale = grayscale * -1;
    }
    if(event.keyCode == 39) {
        rightPressed = true;
        if(player_pos<=0)
        {
          player_pos  = player_pos + 1;
          head.pos[0] = head.pos[0] + 0.1;
          body.pos[0] = body.pos[0] + 0.1;
          leg1.pos[0] = leg1.pos[0] + 0.1;
          leg2.pos[0] = leg2.pos[0] + 0.1;
          hand1.pos[0] = hand1.pos[0] + 0.1;
          hand2.pos[0] = hand2.pos[0] + 0.1;
        }

        player1.pos[0] = -0.035 + player_pos * 0.1 ;
        player2.pos[0] = -0.035 + player_pos * 0.1 ;
    


    }
    else if(event.keyCode == 37) {
        leftPressed = true;
        if(player_pos>=0){
        player_pos  = player_pos - 1;
        head.pos[0] = head.pos[0] - 0.1;
        body.pos[0] = body.pos[0] - 0.1;
        leg1.pos[0] = leg1.pos[0] - 0.1;
        leg2.pos[0] = leg2.pos[0] - 0.1;
        hand1.pos[0] = hand1.pos[0] - 0.1;
        hand2.pos[0] = hand2.pos[0] - 0.1;
      }
        player1.pos[0] = -0.035 + player_pos * 0.1 ;
        player2.pos[0] = -0.035 + player_pos * 0.1 ;


    }
    if(event.keyCode == 40) {
      flag_up_down = 0;
      badu = 0;
      downPressed = true;
    }
    else if(event.keyCode == 38) {
      flag_up_down = 1;
      badu = 1;
    }
}

function drawScene(gl, programInfo, deltaTime) {

  if (flag_flash) {
    dist_flash = dist_flash + 0.004;
    if(dist_flash>0.1)
    {
      dist_flash = 0;
      flag_flash = 0;
    }
  }
  if(!flag_flash)
  {
    dist_flash = dist_flash + 0.004;
    if(dist_flash>0.1)
    {
      dist_flash = 0;
      flag_flash = 1;
    }

  }
  police.pos[0] = player1.pos[0];

  if (show_siren) {
    dist_siren = dist_siren + 0.004;
    if (dist_siren > 1) {
      dist_siren = 0;
      show_siren = 0;
    }
  }
  if (magnet_activated) {
    dist_magnet = dist_magnet + 0.005;
    if (dist_magnet > 4) {
      magnet_activated = 0;
    }
  }
  player2.pos = player1.pos;
  aise_hi = aise_hi + 1;
  if (high_jump) {
    dist_h = dist_h + 0.004;
    if (dist_h>1) {
      high_jump = 0;
      dist_h = 0;
      jump_hieght = 0.1;
    }
  }

  if (udao_re == 1) {
    if (player1.pos[1]<0.2) {
      player1.pos[1] = player1.pos[1] + 0.004;
    }
    else
    {
      udao_re = 2;
    }
  }
  else if (udao_re == 2) {
    if (dist<1) {
      dist = dist + 0.004;
    }
    else
    {
      dist = 0;
      udao_re = 3;
    }
  }
  else if(udao_re == 3)
  {
    if (player1.pos[1]>0) {
      player1.pos[1] = player1.pos[1] - 0.004;
    }
    else
    {
      udao_re = 0;
    }
  }
  // console.log(player1.pos)
document.addEventListener('keydown', keyDownHandler, false);
document.getElementById('scc').innerHTML = score + (aise_hi/10);
document.getElementById('coin').innerHTML = score;



if (flag_going_up == 1) {
  if (player1.pos[1]<jump_hieght) {
    player1.pos[1] = player1.pos[1] + 0.004;
  }
  else
  {
    flag_going_up = -1;
  }
}
if (flag_going_up == -1) {
  if (player1.pos[1]>0) {
    player1.pos[1] = player1.pos[1] - 0.004;
  }
  else
  {
    flag_going_up = 0;
  }

}
  
  gl.clearColor(0.52, 0.8, 0.92, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);
    var cameraMatrix = mat4.create();
    p[2] = p[2]-0.004;
    player1.pos[2] = player1.pos[2] - 0.004;
    police.pos[2] =police.pos[2] - 0.004;
    head.pos[2] = head.pos[2] - 0.004;
    body.pos[2] = body.pos[2] - 0.004;
    leg1.pos[2] = leg1.pos[2] - 0.004;
    leg2.pos[2] = leg2.pos[2] - 0.004;
    hand1.pos[2] = hand1.pos[2] - 0.004;
    hand2.pos[2] = hand2.pos[2] - 0.004;
    // player2.pos[2] = player2.pos[2] - 0.004;
    mat4.translate(cameraMatrix, cameraMatrix, p);
    var cameraPosition = [
      cameraMatrix[12],
      cameraMatrix[13],
      cameraMatrix[14],
    ];

    var up = [0, 1, 0];

    mat4.lookAt(cameraMatrix, [player1.pos[0]+0.03,player1.pos[1]/2+0.1,player1.pos[2]+0.4],[0, 0.0, -10000] , up);
    // mat4.lookAt(cameraMatrix, [0,2,20] ,[0, 0.0, 0] , [0,1,0]);

    var viewMatrix = cameraMatrix;//mat4.create();

    //mat4.invert(viewMatrix, cameraMatrix);

    var viewProjectionMatrix = mat4.create();

    mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
  r.draw(gl, viewProjectionMatrix, programInfo, deltaTime,t);
  r0.draw(gl, viewProjectionMatrix, programInfo, deltaTime,t);
  gr.draw(gl, viewProjectionMatrix, programInfo, deltaTime,grass);
  gr2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,grass);
  r1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,t);
  if(grayscale == 1)
  {
    w1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,w);
    w2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,w);
  }
  else if(flag_flash)
  {
    w1.draw(gl, viewProjectionMatrix, programInfo2, deltaTime,w);
    w2.draw(gl, viewProjectionMatrix, programInfo2, deltaTime,w);
  }
  else
  {
    w1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,w);
    w2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,w);
  }
  


  if(show_j[0])
  bb.draw(gl, viewProjectionMatrix, programInfo, deltaTime,boot);
  if(show_j[1])
  bb1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,boot);
  if(show_j[2])
  jump1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,j);
  if(show_j[3])
  jump2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,j);
  if(show_j[4])
  magnet.draw(gl, viewProjectionMatrix, programInfo, deltaTime,mag);
  
  if(flag_up_down == 1)
    player1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,car);
  if(flag_up_down == 0)
    player2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,car);
  if(show_siren)
  {
  // police.draw(gl, viewProjectionMatrix, programInfo, deltaTime,pp);
  
  head.draw(gl, viewProjectionMatrix, programInfo, deltaTime,bk);
  body.draw(gl, viewProjectionMatrix, programInfo, deltaTime,pol);
  leg1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,bk);
  leg2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,bk);
  hand2.draw(gl, viewProjectionMatrix, programInfo, deltaTime,bk);
  hand1.draw(gl, viewProjectionMatrix, programInfo, deltaTime,bk);
  }

  for (var i = 0; i < ar.length; i++) {
    if(player1.pos[2]-ar[i].pos[2] < 0.0001 && player_pos == obs_lane[i] && badu == 1 && player1.pos[2]-ar[i].pos[2] > -0.01 
     && takraya[i] == 0 && udao_re == 0)
    {
      if (show_siren) {
        game_over = 1;
      }
      //Slow Down
      show_siren = 1;

      takraya[i] = 1;
      console.log('Aree lavda')
    }
  }

  for (var i = 0; i < ar.length; i++) {

    ar[i].draw(gl, viewProjectionMatrix, programInfo, deltaTime,o);
  }
  for (var i = 0; i < obss.length; i++) {
    if(player1.pos[2]-obss[i].pos[2] < 0.0001 && player_pos == obs2_lane[i] && badu == 1 && player1.pos[2]-obss[i].pos[2] > -0.01 
      && player1.pos[1]<=0.01 && takra_gaya2[i]==0 && udao_re == 0 )
    {
      if (show_siren) {
        game_over = 1;
      }
      //Slow Down
      show_siren = 1;

      takra_gaya2[i] = 1;
      console.log('Aree lavda')
    }
  }
  for (var i = 0; i < obss3.length; i++) {
    if(player1.pos[2]-obss3[i].pos[2] < 0.0001 && player_pos == obs3_lane[i] && player1.pos[2]-obss3[i].pos[2] > -0.01 
      && player1.pos[1]<=0.05 && takra_gaya3[i]==0 && udao_re == 0 )
    {
      if (show_siren) {
        game_over = 1;
      }
      //Slow Down
      show_siren = 1;

      takra_gaya3[i] = 1;
      console.log('Aree lavda')
    }
  }
  for (var i = 0; i < obss.length; i++) {

    obss[i].draw(gl, viewProjectionMatrix, programInfo, deltaTime,red);
  }
  for (var i = 0; i < obss3.length; i++) {

    obss3[i].draw(gl, viewProjectionMatrix, programInfo, deltaTime,puma);
  }
  for (var i = 0; i < trains.length; i++) {
    if(player1.pos[2]-trains[i].pos[2] < 0.04 && player_pos == train_lane[i] && player1.pos[2]-trains[i].pos[2] > -0.02 && player1.pos[1]<=0.12)
    {
      game_over = 1;
      // console.log('Gandit')
    }
  }
  for (var i = 0; i < trains.length; i++) {

    trains[i].draw(gl, viewProjectionMatrix, programInfo, deltaTime,ww);
  }
  for (var i = 0; i < cr.length; i++) {
    if(show_flag[i] == 1)
    cr[i].draw(gl, viewProjectionMatrix, programInfo, deltaTime,coll);
  }

  for (var i = 0; i < cr.length; i++) {
    if ((player1.pos[2]-cr[i].pos[2] < 0) && (player1.pos[2]-cr[i].pos[2] > -0.1) && (player_pos == coin_lane[i]) && show_flag[i] 
      && player1.pos[1]<0.01) {
      score = score + 1;
      show_flag[i] = 0;
    }
    if (magnet_activated ) {
      if ((player1.pos[2]-cr[i].pos[2] < 0.5) && (player1.pos[2]-cr[i].pos[2] > -0.01) && show_flag[i]) {
      score = score + 1;
      show_flag[i] = 0;
    }
    }
  }
  if ((player1.pos[2] < -1) && (player1.pos[2] > -1.01) && (player_pos == 0) && udao_re == 0 && show_j[0])
  {
    udao_re = 1;
    show_j[0] = 0;
  }
  if ((player1.pos[2] < -5.5) && (player1.pos[2] > -5.51) && (player_pos == 0) && udao_re == 0 && show_j[1])
  {
    show_j[1] = 0;
    udao_re = 1;
  }
  if ((player1.pos[2] < -2.5) && (player1.pos[2] > -2.51) && (player_pos == 0) && high_jump == 0 && show_j[2])
  {
    show_j[2] = 0;
    high_jump = 1;
    jump_hieght = 0.2;
    dist_h = 0;
  }
  if ((player1.pos[2] < -8.5) && (player1.pos[2] > -8.51) && (player_pos == 0) && high_jump == 0 && show_j[3])
  {
    show_j[3] = 0;
    jump_hieght = 0.2;
    high_jump = 1;
    dist_h = 0;

  }
  if ((player1.pos[2] < -4.5) && (player1.pos[2] > -4.51) && (player_pos == 0) && high_jump == 0 && show_j[4])
  {
    show_j[4] = 0;
    magnet_activated = 1;
  }
}
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
