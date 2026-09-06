// === Module 87: PixelRatio ===

// Module 87 (PixelRatio)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const PixelRatio = arg1;
class PixelRatio {
  constructor() {
    tmp = c2(this, PixelRatio);
    return;
  }
}
const entry = {
  key: "get",
  value: function get() {
    return PixelRatio(88).default.get("window").scale;
  }
};
const items = [
  entry,
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
      value = PixelRatio.get();
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