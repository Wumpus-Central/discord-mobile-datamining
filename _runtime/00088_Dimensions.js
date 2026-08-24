// === Module 88: Dimensions ===

// Module 88 (Dimensions)
import EventEmitterDefault from "EventEmitter" /* 89 */;
import getConstantsDefault from "getConstants" /* 100 */;
import closure_3 from "_classCallCheck" /* 41 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_isNativeReflectConstruct" /* 92 */;

const Dimensions = importDefault;
let closure_4 = new EventEmitterDefault();
let c5 = false;
class Dimensions {
  constructor() {
    tmp = closure_3(this, Dimensions);
    return;
  }
}
const items = [
  {
    key: "get",
    value: function get(arg0) {
      Dimensions(38)(dependencyMap[arg0], `No dimension set for key ${arg0}`);
      return dependencyMap[arg0];
    }
  },
  {
    key: "set",
    value: function set(screenPhysicalPixels) {
      ({ screen, window: _window, windowPhysicalPixels } = screenPhysicalPixels);
      if (windowPhysicalPixels) {
        let obj = { width: null, height: null, scale: null, fontScale: null };
        obj[0] = windowPhysicalPixels.width / windowPhysicalPixels.scale;
        obj[1] = windowPhysicalPixels.height / windowPhysicalPixels.scale;
        ({ scale: obj[2], fontScale: obj[3] } = windowPhysicalPixels);
        _window = obj;
      }
      screenPhysicalPixels = screenPhysicalPixels.screenPhysicalPixels;
      if (screenPhysicalPixels) {
        obj = { width: null, height: null, scale: null, fontScale: null };
        obj[0] = screenPhysicalPixels.width / screenPhysicalPixels.scale;
        obj[1] = screenPhysicalPixels.height / screenPhysicalPixels.scale;
        ({ scale: obj2[2], fontScale: obj2[3] } = screenPhysicalPixels);
        screen = obj;
      } else if (null == screen) {
        screen = _window;
      }
      closure_2 = { window: _window, screen };
      if (c5) {
        closure_4.emit("change", closure_2);
      } else {
        c5 = true;
      }
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      Dimensions(38)("change" === arg0, "Trying to subscribe to unknown event: \"%s\"", arg0);
      return closure_4.addListener(arg0, arg1);
    }
  }
];
const importDefaultResultResult = importDefaultResult(Dimensions, null, items);
let obj = {
  key: "get",
  value: function get(arg0) {
    Dimensions(38)(dependencyMap[arg0], `No dimension set for key ${arg0}`);
    return dependencyMap[arg0];
  }
};
const tmp3 = new EventEmitterDefault();
importDefaultResult1.addListener("didUpdateDimensions", (arg0) => {
  const result = importDefaultResultResult.set(arg0);
});
let result = importDefaultResultResult.set(getConstantsDefault.getConstants().Dimensions);

export default importDefaultResultResult;