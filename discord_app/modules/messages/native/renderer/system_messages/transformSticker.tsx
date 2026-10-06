// === Module 7669: transformSticker ===

// Module 7669 (transformSticker)
import intl3 from "intl" /* 1126 */;
import StickersConstants from "StickersConstants" /* 2031 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp5Result8) {
  let ALWAYS_ANIMATE;
  let NativeLottieRenderMode;
  let closure_0;
  let getAccessibilityLabelOrCheapFallbackUnsafe;
  let intl;
  let intl2;
  let obj3;
  let setting;
  let str;
  let str2;
  const AnimateStickers = require("UserSettings").AnimateStickers;
  _require = tmp5Result8;
  let obj = { asset: str, url: str2, renderMode: setting === ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL, accessibilityLabel: getAccessibilityLabelOrCheapFallbackUnsafe(obj3), accessibilityHint: intl2.string(require("intl").t.GCEruV) };
  setting = AnimateStickers.getSetting();
  ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  const merged = Object.assign(tmp5Result8);
  str = tmp5Result8.id;
  if (str == null) {
    str = "";
  }
  const obj2 = { isPreview: setting !== ALWAYS_ANIMATE };
  const tmpResult = require("StickersUtils");
  str2 = tmpResult.getStickerAssetUrl(tmp5Result8, obj2);
  if (str2 == null) {
    str2 = "";
  }
  NativeLottieRenderMode = tmp(7670).NativeLottieRenderMode;
  obj3 = {
    expensive() {
      const intl = intl3.intl;
      const obj = { stickerName: tmp5Result8.name };
      return intl.formatToPlainString(intl3.t.rk6pOw, obj);
    },
    cheap: intl.string(require("intl").t["fT+Yjp"])
  };
  getAccessibilityLabelOrCheapFallbackUnsafe = require("getAccessibilityLabelOrCheapFallbackUnsafe").getAccessibilityLabelOrCheapFallbackUnsafe;
  require("getAccessibilityLabelOrCheapFallbackUnsafe");
  intl = tmp(1126).intl;
  intl2 = tmp(1126).intl;
  return obj;
};