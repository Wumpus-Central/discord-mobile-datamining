// === Module 12792: transformStickers ===

// Module 12792 (transformStickers)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import apexExperiment from "apexExperiment" /* 8177 */;
import NativeLottieView from "NativeLottieView" /* 8218 */;

const result = obj132.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  closure_2 = apexExperiment.shouldSkipAccessibilityLabels();
  const messageStickers = getStickerExtensionFromFormatType.getMessageStickers(message.message);
  return messageStickers.map((item, index) => {
    let obj = getStickerExtensionFromFormatType;
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(closure_0, closure_1);
    obj = {};
    const merged = Object.assign(item);
    let str = item.id;
    if (str == null) {
      str = "";
    }
    obj.asset = str;
    obj = { isPreview: !shouldAnimateStickerResult };
    let str2 = getStickerExtensionFromFormatType.getStickerAssetUrl(item, obj);
    if (str2 == null) {
      str2 = "";
    }
    obj.url = str2;
    obj.width = 160;
    obj.height = 160;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    obj.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    const intl = getSystemLocale.intl;
    if (closure_2) {
      let stringResult = intl.string(getSystemLocale.t["fT+Yjp"]);
    } else {
      obj1 = { stickerName: null };
      obj1[0] = item.name;
      stringResult = intl.formatToPlainString(getSystemLocale.t.rk6pOw, obj1);
    }
    obj.accessibilityLabel = stringResult;
    const intl2 = getSystemLocale.intl;
    obj.accessibilityHint = intl2.string(getSystemLocale.t.GCEruV);
    return obj;
  });
};