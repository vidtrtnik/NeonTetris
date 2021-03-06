var wy3d_Input = undefined;

class wy3d_Key {
  constructor(name, keyCode) {
    this.name = name;
    this.keyCode = keyCode;
    this.stateN = false;
    this.state = false;
    this.pState = false;
  }

  getState() {
    if (this.state == false && this.pState == true) {
      this.pState = this.state;
      return false;
    }

    if (this.state == true && this.pState == false) {
      this.pState = this.state;
      return true;
    }

    return false;
  }

  getStateN() {
    return this.stateN;
  }

  keyUp() {
    this.pState == this.state;
    this.state = false;
    this.stateN = false;
  }

  keyDown() {
    this.pState == this.state;
    this.state = true;
    this.stateN = true;
  }
}

class wy3d_InputClass {
  constructor() {
    this.KEYS = [];
    var up = new wy3d_Key("up", 38);
    var down = new wy3d_Key("down", 40);
    var left = new wy3d_Key("left", 37);
    var right = new wy3d_Key("right", 39);
    var space = new wy3d_Key("space", 32);
    var enter = new wy3d_Key("enter", 13);
    var k1 = new wy3d_Key("1", 49);
    var k2 = new wy3d_Key("2", 50);
    var kF = new wy3d_Key("F", 70);
    var kG = new wy3d_Key("G", 71);
    var kP = new wy3d_Key("P", 80);

    this.KEYS.push(up);
    this.KEYS.push(down);
    this.KEYS.push(left);
    this.KEYS.push(right);
    this.KEYS.push(space);
    this.KEYS.push(enter);
    this.KEYS.push(k1);
    this.KEYS.push(k2);
    this.KEYS.push(kF);
    this.KEYS.push(kG);
    this.KEYS.push(kP);

    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  }

  isDown(name) {
    for (var i = 0; i < this.KEYS.length; i++) {
      var key = this.KEYS[i];
      if (key.name == name)
        return key.getState();
    }
  }

  get(name) {
    for (var i = 0; i < this.KEYS.length; i++) {
      var key = this.KEYS[i];
      if (key.name == name)
        return key.getStateN();
    }
  }
}

function wy3d_InitializeInput(controllerType) {
  return new wy3d_InputClass();
}

function keyDownHandler(event) {
  for (var i = 0; i < wy3d_Input.KEYS.length; i++) {
    var key = wy3d_Input.KEYS[i];
    if (key.keyCode == event.keyCode)
      key.keyDown();

  }
}

function keyUpHandler(event) {
  for (var i = 0; i < wy3d_Input.KEYS.length; i++) {
    var key = wy3d_Input.KEYS[i];
    if (key.keyCode == event.keyCode)
      key.keyUp();
  }
}
