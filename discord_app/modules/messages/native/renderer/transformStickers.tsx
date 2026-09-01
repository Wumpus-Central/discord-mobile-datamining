// discord_app/modules/messages/native/renderer/transformStickers.tsx
import set from "../../../../../_runtime/00002_set.js";
import getStickerExtensionFromFormatType from "../../../stickers/StickersUtils.tsx";

const result = set.fileFinishedImporting("modules/messages/native/renderer/transformStickers.tsx");

export default function transformStickers(message) {
  ({ animateStickersSetting: require, isUserInteracting: dependencyMap } = message);
  const messageStickers = getStickerExtensionFromFormatType.getMessageStickers(message.message);
  return messageStickers.map((id) => {
    closure_0 = id;
    let obj = closure_1_0(closure_1_1[0]);
    const shouldAnimateStickerResult = obj.shouldAnimateSticker(closure_0, closure_1);
    obj = {};
    const merged = Object.assign(id);
    let str = id.id;
    if (str == null) {
      str = "";
    }
    obj.asset = str;
    let tmpResult = tmp(tmp2[0]);
    obj = { isPreview: !shouldAnimateStickerResult };
    let str2 = tmpResult.getStickerAssetUrl(id, obj);
    if (str2 == null) {
      str2 = "";
    }
    obj.url = str2;
    obj.width = 160;
    obj.height = 160;
    const NativeLottieRenderMode = tmp(tmp2[1]).NativeLottieRenderMode;
    obj.renderMode = shouldAnimateStickerResult ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
    tmpResult = tmp(tmp2[2]);
    obj1 = {
      expensive() {
        const intl = id(closure_1_1[3]).intl;
        return intl.formatToPlainString(id(closure_1_1[3]).t.rk6pOw, { stickerName: id.name });
      },
      cheap: null,
    };
    let intl = tmp(tmp2[3]).intl;
    obj1[1] = intl.string(closure_1_0(closure_1_1[3]).t["fT+Yjp"]);
    obj.accessibilityLabel = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj1);
    const intl2 = tmp(tmp2[3]).intl;
    obj.accessibilityHint = intl2.string(closure_1_0(closure_1_1[3]).t.GCEruV);
    return obj;
  });
}
