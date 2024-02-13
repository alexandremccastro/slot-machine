class Item {
  /**
   *
   * @param {Number} x
   * @param {Number} x
   */
  constructor(size, config, x, y) {
    this.size = size;
    this.config = config;
    this.x = x;
    this.y = y;
    this.rotate = false;
    this.angle = 0;
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.save();
    ctx.beginPath();

    const centerX = this.x + this.size / 2 + 15;
    const centerY = this.y - this.size / 2;

    ctx.translate(centerX, centerY);
    ctx.rotate(this.angle);

    if (this.rotate) {
      this.angle += 0.01;
    }

    ctx.fillStyle = this.config.background;
    ctx.roundRect(
      (this.size / 2) * -1,
      (this.size / 2) * -1,
      this.size,
      this.size,
      8
    );
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = this.config.color;
    ctx.arc(0, 0, this.size * 0.4, 0, 45);
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "80px Roboto";
    ctx.fillStyle = this.config.color;
    ctx.fillText(this.config.value, -7, 28, 14);
    ctx.fill();

    ctx.restore();
  }

  beginRotation() {
    this.rotate = true;
  }

  getNum() {
    return this.config.value;
  }

  getY() {
    return this.y;
  }

  move(height, resetPoint, velocityY) {
    this.y += velocityY;

    if (this.y > height + resetPoint * -1) {
      this.y = resetPoint + velocityY;
    }
  }
}
