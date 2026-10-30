// === Module 8810: VisualEffectViewThemed ===

// Module 8810 (VisualEffectViewThemed)
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5595 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewThemed.tsx");

export default function VisualEffectViewThemed(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const tmp4 = useThemeDefault();
  let str = "dark";
  if (obj.isThemeLight(tmp4)) {
    str = "light";
  }
  obj = shared;
  const obj2 = { ref: ref.ref, blurTheme: str };
  const merged1 = Object.assign(merged);
  return jsx(VisualEffectViewDefault, { ref: ref.ref, blurTheme: str });
};