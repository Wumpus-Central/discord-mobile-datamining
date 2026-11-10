// === Module 19634: useDockBoxShadow ===

// Module 19634 (useDockBoxShadow)
import ColorUtils from "ColorUtils" /* 5139 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useDockBoxShadow.tsx");

export default function useDockBoxShadow(SHADOW_MEDIUM) {
  let obj = shadowOffset(shadowRadius[1]);
  const nativeStyles = SHADOW_MEDIUM[obj.useThemeContext(obj).theme].nativeStyles;
  shadowOffset = nativeStyles.shadowOffset;
  shadowRadius = nativeStyles.shadowRadius;
  const shadowColor = nativeStyles.shadowColor;
  const shadowOpacity = nativeStyles.shadowOpacity;
  items = [shadowOffset, shadowRadius, shadowColor, shadowOpacity];
  return shadowColor.useMemo(() => {
    const obj = { offsetX: shadowOffset.width, offsetY: shadowOffset.height, blurRadius: shadowRadius, color: ColorUtils.hexWithOpacity(shadowColor, shadowOpacity) };
    items = [obj];
    return items;
  }, items);
};