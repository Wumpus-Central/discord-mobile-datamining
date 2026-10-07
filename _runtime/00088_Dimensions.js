// _runtime/00088_Dimensions.js
import EventEmitterDefault from "00089_EventEmitter.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _isNativeReflectConstruct from "metro/00092__.js";
import get from "metro/00100__.js";

const Dimensions = importDefault;
let closure_4 = new EventEmitterDefault();
let c5 = false;
class Dimensions {
  constructor() {
    tmp = closure_3(this, Dimensions);
    return;
  }
}
const entry = {
  key: "get",
  value: function get(arg0) {
    Dimensions(38)(dependencyMap[arg0], `No dimension set for key ${arg0}`);
    return dependencyMap[arg0];
  },
};
const items = [
  entry,
  {
    key: "set",
    value: function set(screenPhysicalPixels) {
      ({ screen, window: _window, windowPhysicalPixels } = screenPhysicalPixels);
      if (windowPhysicalPixels) {
        const size = {
          width: windowPhysicalPixels.width / windowPhysicalPixels.scale,
          height: windowPhysicalPixels.height / windowPhysicalPixels.scale,
          scale: null,
          fontScale: null,
        };
        ({ scale: obj.scale, fontScale: obj.fontScale } = windowPhysicalPixels);
        _window = size;
      }
      screenPhysicalPixels = screenPhysicalPixels.screenPhysicalPixels;
      if (screenPhysicalPixels) {
        const size1 = {
          width: screenPhysicalPixels.width / screenPhysicalPixels.scale,
          height: screenPhysicalPixels.height / screenPhysicalPixels.scale,
          scale: null,
          fontScale: null,
        };
        ({ scale: obj2.scale, fontScale: obj2.fontScale } = screenPhysicalPixels);
        screen = size1;
      } else if (null == screen) {
        screen = _window;
      }
      closure_2 = { window: _window, screen };
      if (c5) {
        closure_4.emit("change", closure_2);
      } else {
        c5 = true;
      }
    },
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      Dimensions(38)("change" === arg0, 'Trying to subscribe to unknown event: "%s"', arg0);
      return closure_4.addListener(arg0, arg1);
    },
  },
];
const importDefaultResultResult = _createClass(Dimensions, null, items);
const metroRequire = importDefaultResultResult;
_isNativeReflectConstruct.addListener("didUpdateDimensions", (arg0) => {
  const result = importDefaultResultResult.set(arg0);
});
let result = importDefaultResultResult.set(get.getConstants().Dimensions);

export default importDefaultResultResult;
