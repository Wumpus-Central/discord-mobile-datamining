// === Module 16278: computeGuildsBarCutout ===

// Module 16278 (computeGuildsBarCutout)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1188 */;
import ClipView from "ClipView" /* 8502 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16262 */;
import size_mod from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const GUILD_ITEM_SIZE = GuildsBarConstants.GUILD_ITEM_SIZE;
let size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx");

export default function computeGuildsBarCutout(containerSize) {
  let roundToNearestPixelResult2;
  containerSize = containerSize.containerSize;
  const position = containerSize.position;
  if (containerSize === undefined) {
    containerSize = GUILD_ITEM_SIZE;
  }
  let BADGE_SIZE = containerSize.width;
  if (BADGE_SIZE === undefined) {
    BADGE_SIZE = native.BADGE_SIZE;
  }
  let BADGE_SIZE2 = containerSize.height;
  if (BADGE_SIZE2 === undefined) {
    BADGE_SIZE2 = native.BADGE_SIZE;
  }
  let BADGE_PADDING = containerSize.padding;
  if (BADGE_PADDING === undefined) {
    BADGE_PADDING = native.BADGE_PADDING;
  }
  const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(BADGE_SIZE + 2 * BADGE_PADDING);
  const roundToNearestPixelResult1 = PixelRatio.roundToNearestPixel(BADGE_SIZE2 + 2 * BADGE_PADDING);
  size = { shape: ClipView.CutoutShape.RoundedRect, x: 0, y: 0, width: roundToNearestPixelResult, height: roundToNearestPixelResult1, cornerRadius: roundToNearestPixelResult2 };
  roundToNearestPixelResult2 = PixelRatio.roundToNearestPixel(Math.min(roundToNearestPixelResult, roundToNearestPixelResult1) / 2);
  if ("top-right" === position) {
    size.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    size.y = -BADGE_PADDING;
  } else {
    size.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    size.y = containerSize - roundToNearestPixelResult1 + BADGE_PADDING;
  }
  return size;
};