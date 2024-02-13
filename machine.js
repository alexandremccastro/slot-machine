class Machine {
  /**
   * @type {Slot[]}
   */
  #slots = [];

  slotItems = [
    [
      {
        value: 1,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 2,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 3,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 4,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 5,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 0,
        background: colors.WHITE,
        color: colors.PINK,
      },
      {
        value: 6,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 7,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 8,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 9,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 10,
        background: colors.PINK,
        color: colors.WHITE,
      },
    ],
    [
      {
        value: 10,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 9,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 8,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 7,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 6,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 0,
        background: colors.WHITE,
        color: colors.PINK,
      },
      {
        value: 5,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 4,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 3,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 2,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 1,
        background: colors.PINK,
        color: colors.WHITE,
      },
    ],
    [
      {
        value: 1,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 3,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 5,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 7,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 9,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 0,
        background: colors.WHITE,
        color: colors.PINK,
      },
      {
        value: 2,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 4,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 6,
        background: colors.PINK,
        color: colors.WHITE,
      },
      {
        value: 8,
        background: colors.GREY,
        color: colors.WHITE,
      },
      {
        value: 10,
        background: colors.PINK,
        color: colors.WHITE,
      },
    ],
  ];

  constructor(width, height) {
    this.width = width;
    this.height = height;

    for (let i = 0; i < this.slotItems.length; i++) {
      const offsetX = (width / 3) * i;
      const elementSize = width / 3 - 30;
      const slot = new Slot(offsetX, elementSize, this.slotItems[i], height);
      this.#slots.push(slot);

      slot.rollTo(0, true);
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx
   */
  render(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 1; i <= 2; i++) {
      ctx.beginPath();
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.lineWidth = 2;
      ctx.moveTo((this.width / 3) * i, 0);
      ctx.lineTo((this.width / 3) * i, this.height);
      ctx.stroke();
    }

    for (const slot of this.#slots) {
      slot.draw(ctx);
    }

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(255, 255, 0, .25)";
    ctx.moveTo(5, this.height / 2);
    ctx.lineTo(this.width - 5, this.height / 2);
    ctx.stroke();
  }

  roll(positions) {
    for (let i = 0; i < this.#slots.length; i++) {
      setTimeout(() => {
        this.#slots[i].rollTo(positions[i]);
      }, (i + 1) * 100);
    }
  }
}
