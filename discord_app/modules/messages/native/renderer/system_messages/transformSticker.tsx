// === Module 8455: transformSticker ===

// Module 8455 (transformSticker)
import util from "util" /* 1113 */;
import StickersConstants from "StickersConstants" /* 4842 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export function transformSticker(tmp2Result4) {
  const AnimateStickers = require("UserSettings").AnimateStickers;
  _require = tmp2Result4;
  const obj = {};
  const setting = AnimateStickers.getSetting();
  const merged = Object.assign(tmp2Result4);
  let str = tmp2Result4.id;
  if (str == null) {
    str = "";
  }
  obj.asset = str;
  let str2 = require("StickersUtils").getStickerAssetUrl(tmp2Result4, { isPreview: setting !== StickerAnimationSettings.ALWAYS_ANIMATE });
  if (str2 == null) {
    str2 = "";
  }
  obj.url = str2;
  const NativeLottieRenderMode = tmp(8456).NativeLottieRenderMode;
  obj.renderMode = setting === StickerAnimationSettings.ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  const obj2 = { isPreview: setting !== StickerAnimationSettings.ALWAYS_ANIMATE };
  const tmpResult = require("StickersUtils");
  const obj3 = {
    expensive() {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.rk6pOw, { stickerName: tmp2Result4.name });
    },
    cheap: null
  };
  let intl = tmp(1113).intl;
  obj3.cheap = intl.string(require("util").t["fT+Yjp"]);
  obj.accessibilityLabel = require("getAccessibilityLabelOrCheapFallbackUnsafe").getAccessibilityLabelOrCheapFallbackUnsafe(obj3);
  const intl2 = tmp(1113).intl;
  obj.accessibilityHint = intl2.string(require("util").t.GCEruV);
  return obj;
}