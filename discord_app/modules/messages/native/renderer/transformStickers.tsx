// discord_app/modules/messages/native/renderer/transformStickers.tsx
import util from "../../../../intl/index.native.tsx";
import StickersUtils from "../../../stickers/StickersUtils.tsx";
import getAccessibilityLabelOrCheapFallbackUnsafe from "../../../a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx";
import NativeLottieView from "../../../stickers/native/NativeLottieView.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    let tmpResult = StickersUtils;
    obj = { isPreview: !shouldAnimateStickerResult };
    let str2 = tmpResult.getStickerAssetUrl(id, obj);
    if (str2 == null) {
      str2 = "";
    }
    obj.url = str2;
    obj.width = 160;
    obj.height = 160;
    const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
    obj.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    tmpResult = getAccessibilityLabelOrCheapFallbackUnsafe;
    const obj1 = {
      expensive() {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.rk6pOw, { stickerName: name.name });
      },
      cheap: null,
    };
    let intl = util.intl;
    obj1.cheap = intl.string(util.t["fT+Yjp"]);
    obj.accessibilityLabel = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj1);
    const intl2 = util.intl;
    obj.accessibilityHint = intl2.string(util.t.GCEruV);
    return obj;
  });
}
