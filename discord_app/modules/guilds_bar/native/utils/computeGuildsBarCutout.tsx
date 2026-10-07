// discord_app/modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import native from "../../../../design/void/native.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import GuildsBarConstants from "../GuildsBarConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const PixelRatio = _mod17.PixelRatio;
const GUILD_ITEM_SIZE = GuildsBarConstants.GUILD_ITEM_SIZE;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx");

export default function computeGuildsBarCutout(containerSize) {
  containerSize = containerSize.containerSize;
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
  const size = {
    shape: ClipView.CutoutShape.RoundedRect,
    x: 0,
    y: 0,
    width: roundToNearestPixelResult,
    height: roundToNearestPixelResult1,
    cornerRadius: PixelRatio.roundToNearestPixel(Math.min(roundToNearestPixelResult, roundToNearestPixelResult1) / 2),
  };
  if ("top-right" === containerSize.position) {
    size.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    size.y = -BADGE_PADDING;
  } else {
    size.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    size.y = containerSize - roundToNearestPixelResult1 + BADGE_PADDING;
  }
  return size;
}
