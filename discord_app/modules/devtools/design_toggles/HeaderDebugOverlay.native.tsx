// discord_app/modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useDesignToggleDefault from "useDesignToggle.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = {
  "os-drawn": "OS-Drawn",
  "custom-drawn": "Custom-Drawn",
  "js-stack": "JS Stack",
  sheet: "Sheet",
  bespoke: "Bespoke",
};
const createStyles = fn(4827);
let obj2 = {
  tintWash: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.15 },
  badgeContainer: { position: "absolute", bottom: 2, right: 4, pointerEvents: "none" },
  badge: { paddingHorizontal: 4, paddingVertical: 1, borderRadius: nativeDefault.radii.xs },
  "color-os-drawn": null,
  "color-custom-drawn": null,
  "color-js-stack": null,
  "color-sheet": null,
  "color-bespoke": null,
};
let obj3 = { paddingHorizontal: 4, paddingVertical: 1, borderRadius: nativeDefault.radii.xs };
obj2["color-os-drawn"] = { backgroundColor: nativeDefault.colors.TEXT_LINK };
let obj4 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj2["color-custom-drawn"] = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let obj5 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj2["color-js-stack"] = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2["color-sheet"] = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj7 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2["color-bespoke"] = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default function useHeaderDebugOverlay(arg0, arg1) {
  const tmp3 = closure_8();
  if (tmp2) {
    let tmp6 = arg1;
    const _HermesInternal = HermesInternal;
    const tmp8 = tmp3["color-" + arg0];
    if (arg1 == null) {
      tmp6 = closure_7[arg0];
    }
    const obj = { children: null };
    const obj2 = { style: null };
    const items = [tmp3.tintWash, tmp8];
    obj2.style = items;
    const items1 = [React4(View, obj2)];
    const obj3 = { style: tmp3.badgeContainer, children: null };
    const obj4 = { style: null, children: null };
    const items2 = [tmp3.badge, tmp8];
    obj4.style = items2;
    const obj5 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp6 };
    obj4.children = React4(Text_Text.Text, obj5);
    obj3.children = React4(View, obj4);
    items1[1] = React4(View, obj3);
    obj.children = items1;
    return timestampProducer(hasOwnProperty, obj);
  } else {
    return null;
  }
  tmp2 = useDesignToggleDefault("show_header_debug_info");
}
