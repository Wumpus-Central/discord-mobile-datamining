// === Module 13082: transformStickers ===

// Module 13082 (transformStickers)
import intl3 from "intl" /* 1126 */;
import StickersUtils from "StickersUtils" /* 5428 */;
import getAccessibilityLabelOrCheapFallbackUnsafe2 from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 7610 */;
import NativeLottieView from "NativeLottieView" /* 7659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  message = message.message;
  let obj = StickersUtils;
  const messageStickers = obj.getMessageStickers(message);
  return messageStickers.map((id) => {
    let NativeLottieRenderMode;
    let getAccessibilityLabelOrCheapFallbackUnsafe;
    let intl;
    let intl2;
    let obj4;
    let str;
    let str2;
    let closure_0 = id;
    let obj = StickersUtils;
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(require, dependencyMap);
    const obj2 = { asset: str, url: str2, width: 160, height: 160, renderMode: shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe(obj4), accessibilityHint: intl2.string(intl3.t.GCEruV) };
    const merged = Object.assign(id);
    str = id.id;
    if (str == null) {
      str = "";
    }
    const obj3 = { isPreview: !shouldAnimateStickerResult };
    const tmpResult = StickersUtils;
    str2 = tmpResult.getStickerAssetUrl(id, obj3);
    if (str2 == null) {
      str2 = "";
    }
    NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    obj4 = {
      expensive() {
        const intl = closure_2_0(closure_2_1[3]).intl;
        const obj = { stickerName: name.name };
        return intl.formatToPlainString(closure_2_0(closure_2_1[3]).t.rk6pOw, obj);
      },
      cheap: intl.string(intl3.t["fT+Yjp"])
    };
    getAccessibilityLabelOrCheapFallbackUnsafe = getAccessibilityLabelOrCheapFallbackUnsafe2.getAccessibilityLabelOrCheapFallbackUnsafe;
    getAccessibilityLabelOrCheapFallbackUnsafe2;
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj2;
  });
};