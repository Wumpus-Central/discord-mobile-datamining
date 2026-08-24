// === Module 8217: transform ===

// Module 8217 (transform)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import apexExperiment from "apexExperiment" /* 8177 */;
import closure_2 from "noop" /* 19 */;
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID" /* 4069 */;

require = arg1;
function transform(id, isPreview) {
  let obj = {};
  const merged = Object.assign(id);
  let str = id.id;
  if (str == null) {
    str = "";
  }
  obj.asset = str;
  obj = { isPreview: !isPreview };
  let str2 = getStickerExtensionFromFormatType.getStickerAssetUrl(id, obj);
  if (str2 == null) {
    str2 = "";
  }
  obj.url = str2;
  const NativeLottieRenderMode = tmp2(8218).NativeLottieRenderMode;
  obj.renderMode = isPreview ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  const intl = tmp2(1236).intl;
  if (arg2) {
    let stringResult = intl.string(tmp2(1236).t["fT+Yjp"]);
  } else {
    obj = { stickerName: null };
    obj[0] = id.name;
    stringResult = intl.formatToPlainString(tmp2(1236).t.rk6pOw, obj);
  }
  obj.accessibilityLabel = stringResult;
  const intl2 = tmp2(1236).intl;
  obj.accessibilityHint = intl2.string(getSystemLocale.t.GCEruV);
  return obj;
}
let result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export default function useTransformedSticker(sticker) {
  sticker = sticker.sticker;
  const isStickerReplyEnabled = sticker.isStickerReplyEnabled;
  let React;
  StickerAnimationSettings = undefined;
  const AnimateStickers = sticker(isStickerReplyEnabled[5]).AnimateStickers;
  let tmp = AnimateStickers.useSetting() === StickerAnimationSettings.ALWAYS_ANIMATE;
  React = tmp;
  const result = sticker(isStickerReplyEnabled[6]).shouldSkipAccessibilityLabels();
  StickerAnimationSettings = result;
  const items = [tmp, isStickerReplyEnabled, result, sticker];
  return React.useMemo(() => {
    let tmp;
    if (isStickerReplyEnabled) {
      tmp = closure_1_4(sticker, closure_2, c3);
    }
    return tmp;
  }, items);
};
export const transformSticker = function transformSticker(tmp5Result1) {
  const AnimateStickers = explicitContentFromProto.AnimateStickers;
  const setting = AnimateStickers.getSetting();
  return transform(tmp5Result1, setting === StickerAnimationSettings.ALWAYS_ANIMATE, apexExperiment.shouldSkipAccessibilityLabels());
};