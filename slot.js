class Slot {
  /**
   * @type {Item[]}
   */
  #elements = [];

  constructor(offsetX, elementSize, elementList, ctxHeight) {
    this.numberGap = 16;
    this.rolling = false;
    this.rollToPosition = 0;
    this.velocityY = 7;
    this.offsetX = offsetX;
    this.ctxHeight = ctxHeight;
    this.elementSize = elementSize;
    this.elementList = elementList;
    this.reseting = false;

    let totalHeight =
      (this.elementSize + this.numberGap) * this.elementList.length;

    let startPointY = ((totalHeight - ctxHeight) / 2) * -1;
    this.resetPoint = startPointY;

    for (const item of this.elementList) {
      this.#elements.push(new Item(this.elementSize, item, 0, startPointY));

      startPointY += this.elementSize + this.numberGap;
    }
  }

  rollTo(position, reseting = false) {
    this.velocityY = 7;
    this.rolling = true;
    this.rollToPosition = position;
    this.reseting = reseting;
  }

  reduceVelocity() {
    if (this.reseting == true) {
      this.reseting = false;
      this.velocityY = 2;
      this.rolling = false;
    } else {
      this.velocityY -= 1;

      if (this.velocityY == 2) {
        this.rolling = false;
      }
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.save();

    ctx.beginPath();
    ctx.translate(this.offsetX, 0);

    let reduceVelocity = false;

    for (const element of this.#elements) {
      if (this.rolling) {
        element.move(
          this.ctxHeight,
          this.resetPoint,
          this.velocityY,
          this.numberGap
        );

        if (
          element.getNum() == this.rollToPosition &&
          element.getY() >= this.ctxHeight - 145 - this.velocityY &&
          element.getY() <= this.ctxHeight - 145 + this.velocityY
        ) {
          reduceVelocity = true;
        }
      }

      element.draw(ctx);
    }

    if (reduceVelocity) this.reduceVelocity();

    ctx.restore();
  }
}
