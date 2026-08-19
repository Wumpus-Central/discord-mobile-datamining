// _runtime/00088_Dimensions.js
import EventEmitterDefault from "00089_EventEmitter.js";
import getConstantsDefault from "00100_getConstants.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00092__isNativeReflectConstruct.js";

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
const tmp3 = new EventEmitterDefault();
importDefaultResult1.addListener("didUpdateDimensions", (arg0) => {
  const result = importDefaultResultResult.set(arg0);
});
let result = importDefaultResultResult.set(getConstantsDefault.getConstants().Dimensions);

export default importDefaultResultResult;