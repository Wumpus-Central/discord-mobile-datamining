// === Module 8217: transform ===

// Module 8217 (transform)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import apexExperiment from "apexExperiment" /* 8177 */;
import NativeLottieView from "NativeLottieView" /* 8218 */;
import noop from "noop" /* 19 */;
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID" /* 4069 */;

require = fn;
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
  const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
  obj.renderMode = isPreview ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  const intl = getSystemLocale.intl;
  if (arg2) {
    let stringResult = intl.string(getSystemLocale.t["fT+Yjp"]);
  } else {
    obj = { stickerName: null };
    obj[0] = id.name;
    stringResult = intl.formatToPlainString(getSystemLocale.t.rk6pOw, obj);
  }
  obj.accessibilityLabel = stringResult;
  const intl2 = getSystemLocale.intl;
  obj.accessibilityHint = intl2.string(getSystemLocale.t.GCEruV);
  return obj;
}
let result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export default function useTransformedSticker(sticker) {
  sticker = sticker.sticker;
  const isStickerReplyEnabled = sticker.isStickerReplyEnabled;
  StickerAnimationSettings = undefined;
  const AnimateStickers = sticker(isStickerReplyEnabled[5]).AnimateStickers;
  let tmp = AnimateStickers.useSetting() === StickerAnimationSettings.ALWAYS_ANIMATE;
  const React = tmp;
  const result = sticker(isStickerReplyEnabled[6]).shouldSkipAccessibilityLabels();
  StickerAnimationSettings = result;
  const items = [tmp, isStickerReplyEnabled, result, sticker];
  return React.useMemo(() => {
    let tmp;
    if (isStickerReplyEnabled) {
      tmp = transform(sticker, closure_2, c3);
    }
    return tmp;
  }, items);
};
export const transformSticker = function transformSticker(tmp5Result1) {
  const AnimateStickers = explicitContentFromProto.AnimateStickers;
  const setting = AnimateStickers.getSetting();
  return transform(tmp5Result1, setting === StickerAnimationSettings.ALWAYS_ANIMATE, apexExperiment.shouldSkipAccessibilityLabels());
};