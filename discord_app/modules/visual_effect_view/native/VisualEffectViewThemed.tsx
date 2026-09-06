// discord_app/modules/visual_effect_view/native/VisualEffectViewThemed.tsx
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import VisualEffectViewDefault from "VisualEffectView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
