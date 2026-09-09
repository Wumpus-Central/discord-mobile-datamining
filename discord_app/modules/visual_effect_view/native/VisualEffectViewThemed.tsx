// === Module 8271: VisualEffectViewThemed ===

// Module 8271 (VisualEffectViewThemed)
import shared from "shared" /* 4425 */;
import useThemeDefault from "useTheme" /* 4509 */;
import VisualEffectViewDefault from "VisualEffectView" /* 4979 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default noop.forwardRef(function VisualEffectViewThemed(arg0, ref) {
  let obj = shared;
  let str = "dark";
  if (obj.isThemeLight(tmp3)) {
    str = "light";
  }
  obj = { ref, blurTheme: str };
  tmp3 = useThemeDefault();
  const merged = Object.assign(arg0);
  return jsx(VisualEffectViewDefault, { ref, blurTheme: str });
});