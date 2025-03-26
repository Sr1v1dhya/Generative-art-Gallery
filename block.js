class block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.color = 90;
  }
  display() {
    noFill();
    stroke(this.color);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    //Draw rect until the angle is 45 then draw x
    if (this.angle > 30 && this.angle < 50) {
      this.drawRect();
    } else {
      this.drawX();
    }
    pop();
  }
  move() {
    let distance;
    //only rotate if the mouse is moving
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist(mouseX, mouseY, this.x, this.y);
      if (distance < distMouse) {
        this.angle += 1;
        this.color = 255;
      }
    }
    // dont stop rotating even if the mouse has moved away until 90 deg
    if (this.angle > 0 && this.angle < 90) {
      this.angle += 1;
      if (this.color > 70) {
        this.color -= 3;
      }
      //just dont move when none of the above conditions apply
    } else {
      this.angle = 0;
      this.color = 70;
    }
  }

  drawRect() {
    rect(0, 0, size - offset, size - offset);
  }

  drawX() {
    let margin = -size / 2;
    line(
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2,
      margin + size - offset / 2
    );
    line(
      margin + size - offset / 2,
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2
    );
  }
}
