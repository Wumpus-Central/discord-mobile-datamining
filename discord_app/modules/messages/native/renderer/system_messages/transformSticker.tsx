// discord_app/modules/messages/native/renderer/system_messages/transformSticker.tsx
import set from "../../../../../../_runtime/00002_set.js";
import STICKER_PICKER_TAB_PANEL_ID from "../../../../stickers/StickersConstants.tsx";

const StickerAnimationSettings = STICKER_PICKER_TAB_PANEL_ID.StickerAnimationSettings;
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp5Result1) {
  const AnimateStickers = require("../../../../user_settings/UserSettings.tsx").AnimateStickers;
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
      const intl = tmp5Result1(closure_1_1[4]).intl;
      return intl.formatToPlainString(tmp5Result1(closure_1_1[4]).t.rk6pOw, { stickerName: tmp5Result1.name });
    },
    cheap: null,
  };
  let intl = tmp(1114).intl;
  obj[1] = intl.string(require("../../../../../intl/index.native.tsx").t["fT+Yjp"]);
  obj.accessibilityLabel = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
  const intl2 = tmp(1114).intl;
  obj.accessibilityHint = intl2.string(require("../../../../../intl/index.native.tsx").t.GCEruV);
  return obj;
};
