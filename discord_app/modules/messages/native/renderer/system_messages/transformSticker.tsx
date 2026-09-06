// discord_app/modules/messages/native/renderer/system_messages/transformSticker.tsx
import util from "../../../../../intl/index.native.tsx";
import StickersConstants from "../../../../stickers/StickersConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp5Result1) {
  const AnimateStickers = require("UserSettings").AnimateStickers;
  _require = tmp5Result1;
  let obj = {};
  const setting = AnimateStickers.getSetting();
  const merged = Object.assign(tmp5Result1);
  let str = tmp5Result1.id;
  if (str == null) {
    str = "";
  }
  obj.asset = str;
  let tmpResult = tmp(4899);
  obj = { isPreview: !tmp5 };
  let str2 = tmpResult.getStickerAssetUrl(tmp5Result1, obj);
  if (str2 == null) {
    str2 = "";
  }
  obj.url = str2;
  const NativeLottieRenderMode = tmp(7999).NativeLottieRenderMode;
  obj.renderMode =
    setting === StickerAnimationSettings.ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  tmpResult = tmp(7951);
  obj = {
    expensive() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.rk6pOw, { stickerName: tmp5Result1.name });
    },
    cheap: null,
  };
  let intl = tmp(1114).intl;
  obj.cheap = intl.string(require("util").t["fT+Yjp"]);
  obj.accessibilityLabel = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
  const intl2 = tmp(1114).intl;
  obj.accessibilityHint = intl2.string(require("util").t.GCEruV);
  return obj;
};
