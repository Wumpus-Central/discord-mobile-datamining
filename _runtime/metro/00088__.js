// === Module 88: ? ===

// Module 88
import _modDef38 from "module_38" /* 38 */;
import _modDef89 from "module_89" /* 89 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import module_92 from "module_92" /* 92 */;
import get from "module_100" /* 100 */;

let closure_2, size;

let closure_4 = new _modDef89();
let c5 = false;
new _modDef89();
class Dimensions {
  constructor() {
    _classCallCheck(this, Dimensions);
  }
}
const entry = {
  key: "get",
  value: function get(arg0) {
    _modDef38(closure_2[arg0], `No dimension set for key ${arg0}`);
    return closure_2[arg0];
  }
};
const items = [
  entry,
  {
    key: "set",
    value: function set(screenPhysicalPixels) {
      let _window;
      let screen;
      let windowPhysicalPixels;
      ({ screen, window: _window, windowPhysicalPixels } = screenPhysicalPixels);
      if (windowPhysicalPixels) {
        size = { width: windowPhysicalPixels.width / windowPhysicalPixels.scale, height: windowPhysicalPixels.height / windowPhysicalPixels.scale, scale: null, fontScale: null };
        ({ scale: obj.scale, fontScale: obj.fontScale } = windowPhysicalPixels);
        _window = size;
      }
      screenPhysicalPixels = screenPhysicalPixels.screenPhysicalPixels;
      if (screenPhysicalPixels) {
        const size1 = { width: screenPhysicalPixels.width / screenPhysicalPixels.scale, height: screenPhysicalPixels.height / screenPhysicalPixels.scale, scale: null, fontScale: null };
        ({ scale: obj2.scale, fontScale: obj2.fontScale } = screenPhysicalPixels);
        screen = size1;
      } else if (null == screen) {
        screen = _window;
      }
      closure_2 = { window: _window, screen };
      const tmp2 = c5;
      if (tmp2) {
        closure_4.emit("change", closure_2);
      } else {
        c5 = true;
      }
    }
  },
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      _modDef38("change" === arg0, "Trying to subscribe to unknown event: \"%s\"", arg0);
      return closure_4.addListener(arg0, arg1);
    }
  }
];
const importDefaultResultResult = _createClass(Dimensions, null, items);
const metroRequire = importDefaultResultResult;
module_92.addListener("didUpdateDimensions", (arg0) => {
  const result = metroRequire.set(arg0);
});
const set = importDefaultResultResult.set;
let result = set(get.getConstants().Dimensions);

export default importDefaultResultResult;