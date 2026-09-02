// === Module 7916: transformSticker ===

// Module 7916 (transformSticker)
import set from "set" /* 2 */;
import STICKER_PICKER_TAB_PANEL_ID from "STICKER_PICKER_TAB_PANEL_ID" /* 4169 */;

const StickerAnimationSettings = STICKER_PICKER_TAB_PANEL_ID.StickerAnimationSettings;
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/transformSticker.tsx");

export const transformSticker = function transformSticker(tmp5Result1) {
  const AnimateStickers = _require(4166).AnimateStickers;
  _require = tmp5Result1;
  let obj = {};
  const setting = AnimateStickers.getSetting();
  const merged = Object.assign(tmp5Result1);
  let str = tmp5Result1.id;
  if (str == null) {
    str = "";
  }
  obj.asset = str;
  let tmpResult = tmp(4852);
  obj = { isPreview: !tmp5 };
  let str2 = tmpResult.getStickerAssetUrl(tmp5Result1, obj);
  if (str2 == null) {
    str2 = "";
  }
  obj.url = str2;
  const NativeLottieRenderMode = tmp(7917).NativeLottieRenderMode;
  obj.renderMode = setting === StickerAnimationSettings.ALWAYS_ANIMATE ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
  tmpResult = tmp(7869);
  obj = {
    expensive() {
      const intl = tmp5Result1(closure_1_1[4]).intl;
      return intl.formatToPlainString(tmp5Result1(closure_1_1[4]).t.rk6pOw, { stickerName: tmp5Result1.name });
    },
    cheap: null
  };
  let intl = tmp(1233).intl;
  obj[1] = intl.string(_require(1233).t["fT+Yjp"]);
  obj.accessibilityLabel = tmpResult.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
  const intl2 = tmp(1233).intl;
  obj.accessibilityHint = intl2.string(_require(1233).t.GCEruV);
  return obj;
};