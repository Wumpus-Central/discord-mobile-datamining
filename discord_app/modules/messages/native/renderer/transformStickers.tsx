// discord_app/modules/messages/native/renderer/transformStickers.tsx
import { apexExperiment } from "../../../a11y/native/AccessibilityLabelOptimizationExperiment.tsx";
import { getStickerExtensionFromFormatType } from "../../../stickers/StickersUtils.tsx";
const result = require("NativeLottieView").fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  let dependencyMap;
  let require;
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  let closure_2;
  closure_2 = apexExperiment /* apexExperiment */.shouldSkipAccessibilityLabels();
  let obj = apexExperiment /* apexExperiment */;
  const messageStickers = getStickerExtensionFromFormatType /* getStickerExtensionFromFormatType */.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    let obj = outer1_0(outer1_1[1]);
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(closure_0, closure_1);
    obj = {};
    const merged = Object.assign(id);
    let str = id.id;
    if (str == null) {
      str = "";
    }
    obj.asset = str;
    obj = { isPreview: !shouldAnimateStickerResult };
    let str2 = outer1_0(outer1_1[1]).getStickerAssetUrl(id, obj);
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
      const obj1 = { stickerName: null };
      obj1[0] = id.name;
      stringResult = intl.formatToPlainString(tmp(tmp2[3]).t.rk6pOw, obj1);
    }
    obj.accessibilityLabel = stringResult;
    const intl2 = tmp(tmp2[3]).intl;
    obj.accessibilityHint = intl2.string(outer1_0(outer1_1[3]).t.GCEruV);
    return obj;
  });
};