// _runtime/00087_PixelRatio.js
import _createClassDefault from "metro/00042__createClass.js";
import closure_2 from "metro/00041__classCallCheck.js";

const PixelRatio = arg1;
class PixelRatio {
  constructor() {
    tmp = closure_2(this, PixelRatio);
    return;
  }
}
const items = [
  {
    key: "get",
    value: function get() {
      return PixelRatio(88).default.get("window").scale;
    },
  },
  {
    key: "getFontScale",
    value: function getFontScale() {
      let fontScale = PixelRatio(88).default.get("window").fontScale;
      if (!fontScale) {
        fontScale = PixelRatio.get();
      }
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
