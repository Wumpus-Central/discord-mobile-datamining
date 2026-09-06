// === Module 13241: transformStickers ===

// Module 13241 (transformStickers)
import util from "util" /* 1114 */;
import StickersUtils from "StickersUtils" /* 4899 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  const messageStickers = StickersUtils.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    const name = id;
    let obj = StickersUtils;
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(closure_1_0, dependencyMap);
    obj = {};
    const merged = Object.assign(id);
    let str = id.id;
    if (str == null) {
      str = "";
    }
    obj.asset = str;
    let tmpResult = tmp(4899);
    obj = { isPreview: !shouldAnimateStickerResult };
    let str2 = tmpResult.getStickerAssetUrl(id, obj);
    if (str2 == null) {
      str2 = "";
    }
    obj.url = str2;
    obj.width = 160;
    obj.height = 160;
    const NativeLottieRenderMode = tmp(7999).NativeLottieRenderMode;
    obj.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    tmpResult = tmp(7951);
    const obj1 = {
      expensive() {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.rk6pOw, { stickerName: name.name });
      },
      cheap: null
    };
    let intl = tmp(1114).intl;
    obj1.cheap = intl.string(util.t["fT+Yjp"]);
    obj.accessibilityLabel = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj1);
    const intl2 = tmp(1114).intl;
    obj.accessibilityHint = intl2.string(util.t.GCEruV);
    return obj;
  });
};