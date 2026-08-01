// === Module 87: PixelRatio ===

// Module 87 (PixelRatio)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const PixelRatio = arg1;
class PixelRatio {
  constructor() {
    tmp = outer1_2(this, PixelRatio);
    return;
  }
}
const items = [
  {
    key: "get",
    value: function get() {
      return PixelRatio(88).default.get("window").scale;
    }
  },
  {
    key: "getFontScale",
    value: function getFontScale() {
      let fontScale = PixelRatio(88).default.get("window").fontScale;
      if (!fontScale) {
        fontScale = PixelRatio.get();
      }
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

export default _createClass(PixelRatio, null, items);