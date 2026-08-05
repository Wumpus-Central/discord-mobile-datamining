// discord_app/modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
import { PixelRatio } from "get ActivityIndicator";
import { GUILD_ITEM_SIZE } from "GUILD_ITEM_SIZE";

const result = require("Button").fileFinishedImporting("modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx");

export default function computeGuildsBarCutout(containerSize) {
  containerSize = containerSize.containerSize;
  if (containerSize === undefined) {
    containerSize = GUILD_ITEM_SIZE;
  }
  let BADGE_SIZE = containerSize.width;
  if (BADGE_SIZE === undefined) {
    BADGE_SIZE = require("../../../../design/void/native.tsx") /* Button */.BADGE_SIZE;
  }
  let BADGE_SIZE2 = containerSize.height;
  if (BADGE_SIZE2 === undefined) {
    BADGE_SIZE2 = require("../../../../design/void/native.tsx") /* Button */.BADGE_SIZE;
  }
  let BADGE_PADDING = containerSize.padding;
  if (BADGE_PADDING === undefined) {
    BADGE_PADDING = require("../../../../design/void/native.tsx") /* Button */.BADGE_PADDING;
  }
  const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(BADGE_SIZE + 2 * BADGE_PADDING);
  const roundToNearestPixelResult1 = PixelRatio.roundToNearestPixel(BADGE_SIZE2 + 2 * BADGE_PADDING);
  const obj = { shape: null, x: 0, y: 0, width: null, height: null, cornerRadius: null };
  obj[0] = require("../../../../design/components/Icon/native/ClipView.tsx") /* SolidCutout */.CutoutShape.RoundedRect;
  obj[3] = roundToNearestPixelResult;
  obj[4] = roundToNearestPixelResult1;
  obj[5] = PixelRatio.roundToNearestPixel(Math.min(roundToNearestPixelResult, roundToNearestPixelResult1) / 2);
  if ("top-right" === containerSize.position) {
    obj.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    obj.y = -BADGE_PADDING;
  } else {
    obj.x = containerSize - roundToNearestPixelResult + BADGE_PADDING;
    obj.y = containerSize - roundToNearestPixelResult1 + BADGE_PADDING;
  }
  return obj;
};