const INSTANCES = (function () {
  const totalInstances = [];
  return {
    save: function (instance) {
      return totalInstances.push(instance);
    },
    all: function () {
      return totalInstances;
    },
  };
})();

export class DragAndDrop {
  /** @param {HTMLElement} element */
  constructor(element) {
    this._offsetx = null;
    this._offsety = null;
    this._movendo = false;
    this.element = element
    this._mousedownhandle = this._mouseDownHandler.bind(this);
    this._mousemovehandle = this._mouseMoveHandler.bind(this);
    this._mouseuphandle = this._mouseUpHandler.bind(this);
    this._touchendhandle = this._touchEndHandler.bind(this);
    this.element.addEventListener('mousedown', this._mousedownhandle);
    this.element.addEventListener('touchmove', this._mousemovehandle);
    this.element.addEventListener('touchend', this._touchendhandle);
    INSTANCES.save(this);
  }

  _mouseDownHandler(e) {
    // Attach the listeners to `document`
    document.addEventListener('mousemove', this._mousemovehandle);
    document.addEventListener('mouseup', this._mouseuphandle);
  };

  _mouseMoveHandler(e) {
    let box2xnew = e.pageX
    let box2ynew = e.pageY
    
    if (e.type === "touchmove") {
      const touchLocation = e.targetTouches[0];
      box2xnew = touchLocation.pageX;
      box2ynew = touchLocation.pageY;
    } else {
      box2xnew = e.pageX
      box2ynew = e.pageY
    }
    
    const box2x = this.element.offsetLeft
    const box2y = this.element.offsetTop
    
    if (!this._movendo) {
      this._offsetx = box2xnew - box2x
      this._offsety = box2ynew - box2y
    }
    this._movendo = true;
    
    this.element.style.left = (box2xnew - this._offsetx) + 'px';
    this.element.style.top = (box2ynew - this._offsety) + 'px';
  };

  _mouseUpHandler() {
    // Remove the handlers of `mousemove` and `mouseup`
    this._offsetx = null;
    this._offsety = null;
    this._movendo = false;
    document.removeEventListener('mousemove', this._mousemovehandle);
    document.removeEventListener('mouseup', this._mouseuphandle);
  };

  _touchEndHandler(e) {
    this._offsetx = null;
    this._offsety = null;
    this._movendo = false;
  }

  static get INSTANCES() {
    return INSTANCES.all();
  }

}
