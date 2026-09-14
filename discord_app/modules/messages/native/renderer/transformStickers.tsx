// === Module 13372: transformStickers ===

// Module 13372 (transformStickers)
import util from "util" /* 1114 */;
import StickersUtils from "StickersUtils" /* 4975 */;
import getAccessibilityLabelOrCheapFallbackUnsafe from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 8055 */;
import NativeLottieView from "NativeLottieView" /* 8103 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  const messageStickers = StickersUtils.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    const name = id;
    const shouldAnimateStickerResult = StickersUtils.shouldAnimateSticker(closure_1_0, dependencyMap);
    const obj2 = {};
    const merged = Object.assign(id);
    let str = id.id;
    if (str == null) {
      str = "";
    }
    obj2.asset = str;
    let str2 = StickersUtils.getStickerAssetUrl(id, { isPreview: !shouldAnimateStickerResult });
    if (str2 == null) {
      str2 = "";
    }
    obj2.url = str2;
    obj2.width = 160;
    obj2.height = 160;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    obj2.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    const obj3 = { isPreview: !shouldAnimateStickerResult };
    const tmpResult = StickersUtils;
    const obj4 = {
      expensive() {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.rk6pOw, { stickerName: name.name });
      },
      cheap: null
    };
    let intl = util.intl;
    obj4.cheap = intl.string(util.t["fT+Yjp"]);
    obj2.accessibilityLabel = getAccessibilityLabelOrCheapFallbackUnsafe.getAccessibilityLabelOrCheapFallbackUnsafe(obj4);
    const intl2 = util.intl;
    obj2.accessibilityHint = intl2.string(util.t.GCEruV);
    return obj2;
  });
};