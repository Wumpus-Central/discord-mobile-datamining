// === Module 87: ? ===

// Module 87
import _createClassDefault from "_createClass" /* 42 */;
import _mod88 from "module_88" /* 88 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class PixelRatio {
  constructor() {
    _classCallCheck(this, PixelRatio);
  }
}
const entry = {
  key: "get",
  value: function get() {
    const _default = _mod88.default;
    return _default.get("window").scale;
  }
};
const items = [
  entry,
  {
    key: "getFontScale",
    value: function getFontScale() {
      const _default = _mod88.default;
      const fontScale = _default.get("window").fontScale || PixelRatio.get();
      return fontScale;
    }
  },
  {
    key: "getPixelSizeForLayoutSize",
    value: function getPixelSizeForLayoutSize(width) {
      return Math.round(width * PixelRatio.get());
    }
  },
  {
    key: "roundToNearestPixel",
    value: function roundToNearestPixel(arg0) {
      const value = PixelRatio.get();
      return Math.round(arg0 * value) / value;
    }
  },
  {
    key: "startDetecting",
    value: function startDetecting() {

    }
  }
];

export default _createClassDefault(PixelRatio, null, items);