// === Module 12792: transformStickers ===

// Module 12792 (transformStickers)
import set from "set" /* 2 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import apexExperiment from "apexExperiment" /* 8177 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  closure_2 = undefined;
  closure_2 = apexExperiment.shouldSkipAccessibilityLabels();
  let obj = apexExperiment;
  const messageStickers = getStickerExtensionFromFormatType.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    let obj = closure_1_0(closure_1_1[1]);
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(closure_0, closure_1);
    obj = {};
    const merged = Object.assign(id);
    let str = id.id;
    if (str == null) {
      str = "";
    }
    obj.asset = str;
    obj = { isPreview: !shouldAnimateStickerResult };
    let str2 = closure_1_0(closure_1_1[1]).getStickerAssetUrl(id, obj);
    if (str2 == null) {
      str2 = "";
    }
    obj.url = str2;
    obj.width = 160;
    obj.height = 160;
    const NativeLottieRenderMode = tmp(tmp2[2]).NativeLottieRenderMode;
    obj.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    const intl = tmp(tmp2[3]).intl;
    if (closure_2) {
      let stringResult = intl.string(tmp(tmp2[3]).t["fT+Yjp"]);
    } else {
      obj1 = { stickerName: null };
      obj1[0] = id.name;
      stringResult = intl.formatToPlainString(tmp(tmp2[3]).t.rk6pOw, obj1);
    }
    obj.accessibilityLabel = stringResult;
    const intl2 = tmp(tmp2[3]).intl;
    obj.accessibilityHint = intl2.string(closure_1_0(closure_1_1[3]).t.GCEruV);
    return obj;
  });
};