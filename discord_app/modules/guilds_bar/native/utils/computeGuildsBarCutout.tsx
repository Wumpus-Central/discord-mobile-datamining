// discord_app/modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import Button from "../../../../design/void/native.tsx";
import SolidCutout from "../../../../design/components/Icon/native/ClipView.tsx";
import GUILD_ITEM_SIZE2 from "../GuildsBarConstants.tsx";

const PixelRatio = get_ActivityIndicator.PixelRatio;
const GUILD_ITEM_SIZE = GUILD_ITEM_SIZE2.GUILD_ITEM_SIZE;
const result = set.fileFinishedImporting("modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx");

export default function computeGuildsBarCutout(containerSize) {
  containerSize = containerSize.containerSize;
  if (containerSize === undefined) {
    containerSize = GUILD_ITEM_SIZE;
  }
  let BADGE_SIZE = containerSize.width;
  if (BADGE_SIZE === undefined) {
    BADGE_SIZE = Button.BADGE_SIZE;
  }
  let BADGE_SIZE2 = containerSize.height;
  if (BADGE_SIZE2 === undefined) {
    BADGE_SIZE2 = Button.BADGE_SIZE;
  }
  let BADGE_PADDING = containerSize.padding;
  if (BADGE_PADDING === undefined) {
    BADGE_PADDING = Button.BADGE_PADDING;
  }
  const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(BADGE_SIZE + 2 * BADGE_PADDING);
  const roundToNearestPixelResult1 = PixelRatio.roundToNearestPixel(BADGE_SIZE2 + 2 * BADGE_PADDING);
  const obj = { shape: SolidCutout.CutoutShape.RoundedRect, x: 0, y: 0, width: roundToNearestPixelResult, height: roundToNearestPixelResult1, cornerRadius: PixelRatio.roundToNearestPixel(Math.min(roundToNearestPixelResult, roundToNearestPixelResult1) / 2) };
  if ("top-right" === containerSize.position) {
    obj.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    obj.y = -BADGE_PADDING;
  } else {
    obj.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    obj.y = containerSize - roundToNearestPixelResult1 + BADGE_PADDING;
  }
  return obj;
};