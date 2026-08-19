// _runtime/00266_IntersectionObserverEntry.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import setPlatformObject from "00126_setPlatformObject.js";

const IntersectionObserverEntry = importDefault;
class IntersectionObserverEntry {
  constructor(arg0, arg1) {
    tmp = closure_2(this, IntersectionObserverEntry);
    this._nativeEntry = global;
    this._target = fn;
    return;
  }
}
const items = [
  {
    key: "boundingClientRect",
    get() {
      const targetRect = this._nativeEntry.targetRect;
      return new IntersectionObserverEntry(125)(targetRect[0], targetRect[1], targetRect[2], targetRect[3]);
    }
  },
  {
    key: "intersectionRatio",
    get() {
      ({ intersectionRect, boundingClientRect } = this);
      if (0 !== boundingClientRect.width) {
        if (0 !== boundingClientRect.height) {
          const _Math = Math;
          return Math.min(intersectionRect.width * intersectionRect.height / (boundingClientRect.width * boundingClientRect.height), 1);
        }
      }
      return 0;
    }
  },
  {
    key: "rnRootIntersectionRatio",
    get() {
      const intersectionRect = this.intersectionRect;
      const rootRect = this._nativeEntry.rootRect;
      const size = new IntersectionObserverEntry(125)(rootRect[0], rootRect[1], rootRect[2], rootRect[3]);
      if (0 !== size.width) {
        if (0 !== size.height) {
          const _Math = Math;
          return Math.min(intersectionRect.width * intersectionRect.height / (size.width * size.height), 1);
        }
      }
      return 0;
    }
  },
  {
    key: "intersectionRect",
    get() {
      const intersectionRect = this._nativeEntry.intersectionRect;
      if (null == intersectionRect) {
        let tmp5 = new IntersectionObserverEntry(125)();
      } else {
        tmp5 = new IntersectionObserverEntry(125)(intersectionRect[0], intersectionRect[1], intersectionRect[2], intersectionRect[3]);
      }
      return tmp5;
    }
  },
  {
    key: "isIntersecting",
    get() {
      return this._nativeEntry.isIntersectingAboveThresholds;
    }
  },
  {
    key: "rootBounds",
    get() {
      const rootRect = this._nativeEntry.rootRect;
      return new IntersectionObserverEntry(125)(rootRect[0], rootRect[1], rootRect[2], rootRect[3]);
    }
  },
  {
    key: "target",
    get() {
      return this._target;
    }
  },
  {
    key: "time",
    get() {
      return this._nativeEntry.time;
    }
  }
];
const tmp2 = _createClassDefault(IntersectionObserverEntry, items);
let closure_3 = tmp2;
setPlatformObject.setPlatformObject(tmp2);

export default tmp2;
export const createIntersectionObserverEntry = function createIntersectionObserverEntry(arg0, arg1) {
  return new closure_3(arg0, arg1);
};