// _runtime/metro/00266__.js
import _createClassDefault from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import 00126__ from "00126__.js";

const require = globalThis.__r;
let size;

class IntersectionObserverEntry {
  constructor(_nativeEntry, _target) {
    _classCallCheck(this, IntersectionObserverEntry);
    this._nativeEntry = _nativeEntry;
    this._target = _target;
  }
}
const items = [, , , , , , , ];
const obj = {
  key: "boundingClientRect",
  get() {
    const targetRect = this._nativeEntry.targetRect;
    const tmp = new require("00125__.js")(targetRect[0], targetRect[1], targetRect[2], targetRect[3]);
    return tmp;
  }
};
items[0] = obj;
items[1] = {
  key: "intersectionRatio",
  get() {
    let boundingClientRect;
    let intersectionRect;
    ({ intersectionRect, boundingClientRect } = this);
    if (0 !== boundingClientRect.width) {
      if (0 !== boundingClientRect.height) {
        const _Math = Math;
        return Math.min(intersectionRect.width * intersectionRect.height / (boundingClientRect.width * boundingClientRect.height), 1);
      }
    }
    return 0;
  }
};
items[2] = {
  key: "rnRootIntersectionRatio",
  get() {
    const intersectionRect = this.intersectionRect;
    const rootRect = this._nativeEntry.rootRect;
    size = new require("00125__.js")(rootRect[0], rootRect[1], rootRect[2], rootRect[3]);
    if (0 !== size.width) {
      if (0 !== size.height) {
        const _Math = Math;
        return Math.min(intersectionRect.width * intersectionRect.height / (size.width * size.height), 1);
      }
    }
    return 0;
  }
};
items[3] = {
  key: "intersectionRect",
  get() {
    let tmp3;
    const intersectionRect = this._nativeEntry.intersectionRect;
    if (null == intersectionRect) {
      const self3 = this;
      const self4 = this;
      tmp3 = new require("00125__.js")();
    } else {
      const self = this;
      const self2 = this;
      tmp3 = new require("00125__.js")(intersectionRect[0], intersectionRect[1], intersectionRect[2], intersectionRect[3]);
    }
    return tmp3;
  }
};
items[4] = {
  key: "isIntersecting",
  get() {
    return this._nativeEntry.isIntersectingAboveThresholds;
  }
};
items[5] = {
  key: "rootBounds",
  get() {
    const rootRect = this._nativeEntry.rootRect;
    const tmp = new require("00125__.js")(rootRect[0], rootRect[1], rootRect[2], rootRect[3]);
    return tmp;
  }
};
items[6] = {
  key: "target",
  get() {
    return this._target;
  }
};
items[7] = {
  key: "time",
  get() {
    return this._nativeEntry.time;
  }
};
const tmp2 = _createClassDefault(IntersectionObserverEntry, items);
let closure_3 = tmp2;
module_126.setPlatformObject(tmp2);

export default tmp2;
export const createIntersectionObserverEntry = function createIntersectionObserverEntry(arg0, arg1) {
  const tmp = new closure_3(arg0, arg1);
  return tmp;
};