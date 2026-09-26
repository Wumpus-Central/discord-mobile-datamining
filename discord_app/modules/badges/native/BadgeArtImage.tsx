// === Module 10766: BadgeArtImage ===

// Module 10766 (BadgeArtImage)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import FastImageDefault from "FastImage" /* 5899 */;
import APNGPlayer2 from "APNGPlayer" /* 8271 */;
import noop from "module_19" /* 19 */;

require = fn;
function ignoreSvgError() {

}
const View = fn(17).View;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default function BadgeArtImage(style) {
  ({ url, height, width } = style);
  if (width === undefined) {
    width = height;
  }
  ({ fallbackUrl, animated } = style);
  if (animated === undefined) {
    animated = false;
  }
  const size = { width, height };
  const obj = { style: null, "aria-hidden": true, children: null };
  const items = [size, style.style];
  obj.style = items;
  const formatted = url.split(/[?#]/)[0].toLowerCase();
  if (formatted.endsWith(".svg")) {
    let APNGPlayer = require;
    const size1 = { uri: url, width, height, onError: ignoreSvgError, fallback: null };
    if (null == fallbackUrl) {
      size1.fallback = undefined;
      let tmpResult = <tmp8 {...size1} />;
    } else {
      if (!animated) {
        const obj2 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
        const obj3 = { uri: fallbackUrl };
        obj2.source = obj3;
        obj2.style = size;
        obj2.enableAnimation = animated;
        let tmpResult2 = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
      } else {
        APNGPlayer(1364);
      }
      APNGPlayer = APNGPlayer(8271).APNGPlayer;
      const obj5 = { url: fallbackUrl, style: size, autoplay: true };
      tmpResult2 = <APNGPlayer url={fallbackUrl} style={size} autoplay />;
    }
  } else {
    if (animated) {
      if (obj4.isAndroid()) {
        const obj6 = { url, style: size, autoplay: true };
        tmpResult = jsx(APNGPlayer2.APNGPlayer, { url, style: size, autoplay: true });
      }
      obj4 = PlatformUtils;
    }
    const obj7 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
    const obj8 = { uri: url };
    obj7.source = obj8;
    obj7.style = size;
    obj7.enableAnimation = animated;
    tmpResult = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
  }
  obj.children = tmpResult;
  return <View style={null} aria-hidden>{null}</View>;
};
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;