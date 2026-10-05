// _runtime/metro/00087__.js
import _createClassDefault from "00042__createClass.js";
import _mod88 from "00088__.js";
import _classCallCheck from "00041__classCallCheck.js";

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
  },
};
const items = [
  entry,
  {
    key: "getFontScale",
    value: function getFontScale() {
      const _default = _mod88.default;
      const fontScale = _default.get("window").fontScale || PixelRatio.get();
      return fontScale;
    },
  },
  {
    key: "getPixelSizeForLayoutSize",
    value: function getPixelSizeForLayoutSize(width) {
      return Math.round(width * PixelRatio.get());
    },
  },
  {
    key: "roundToNearestPixel",
    value: function roundToNearestPixel(arg0) {
      const value = PixelRatio.get();
      return Math.round(arg0 * value) / value;
    },
  },
  {
    key: "startDetecting",
    value: function startDetecting() {},
  },
];

export default _createClassDefault(PixelRatio, null, items);
