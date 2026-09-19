// === Module 8255: transformSticker ===

// Module 8255 (transformSticker)
import util from "util" /* 1115 */;
import StickersConstants from "StickersConstants" /* 2022 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp5Result8) {
  const AnimateStickers = require("UserSettings").AnimateStickers;
  _require = tmp5Result8;
  const obj = {};
  const setting = AnimateStickers.getSetting();
  const merged = Object.assign(tmp5Result8);
  let str = tmp5Result8.id;
  if (str == null) {
    str = "";
  }
  obj.asset = str;
  let str2 = require("StickersUtils").getStickerAssetUrl(tmp5Result8, { isPreview: setting !== StickerAnimationSettings.ALWAYS_ANIMATE });
  if (str2 == null) {
    str2 = "";
  }
  obj.url = str2;
  const NativeLottieRenderMode = tmp(8256).NativeLottieRenderMode;
  obj.renderMode = setting === StickerAnimationSettings.ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  const obj2 = { isPreview: setting !== StickerAnimationSettings.ALWAYS_ANIMATE };
  const tmpResult = require("StickersUtils");
  const obj3 = {
    expensive() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.rk6pOw, { stickerName: tmp5Result8.name });
    },
    cheap: null
  };
  let intl = tmp(1115).intl;
  obj3.cheap = intl.string(require("util").t["fT+Yjp"]);
  obj.accessibilityLabel = require("getAccessibilityLabelOrCheapFallbackUnsafe").getAccessibilityLabelOrCheapFallbackUnsafe(obj3);
  const intl2 = tmp(1115).intl;
  obj.accessibilityHint = intl2.string(require("util").t.GCEruV);
  return obj;
};