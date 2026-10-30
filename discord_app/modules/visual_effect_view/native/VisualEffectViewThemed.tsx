// discord_app/modules/visual_effect_view/native/VisualEffectViewThemed.tsx
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import VisualEffectViewDefault from "VisualEffectView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
