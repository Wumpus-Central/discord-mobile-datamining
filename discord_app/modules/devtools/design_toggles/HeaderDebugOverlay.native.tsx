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
fn(4560);
let createStyles = {
  tintWash: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.15 },
  badgeContainer: { position: "absolute", bottom: 2, right: 4, pointerEvents: "none" },
  badge: null,
  "color-os-drawn": null,
  "color-custom-drawn": null,
  "color-js-stack": null,
  "color-sheet": null,
  "color-bespoke": null,
};
createStyles = { paddingHorizontal: 4, paddingVertical: 1, borderRadius: nativeDefault.radii.xs };
createStyles.badge = createStyles;
createStyles["color-os-drawn"] = { backgroundColor: nativeDefault.colors.TEXT_LINK };
let obj1 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
createStyles["color-custom-drawn"] = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
let obj2 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
createStyles["color-js-stack"] = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles["color-sheet"] = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj4 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
createStyles["color-bespoke"] = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_8 = createStyles.createStyles(createStyles);
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
    let obj = { children: null };
    obj = { style: null };
    const items = [tmp3.tintWash, tmp8];
    obj.style = items;
    const items1 = [React4(View, obj)];
    obj = { style: tmp3.badgeContainer, children: null };
    const obj1 = { style: null, children: null };
    const items2 = [tmp3.badge, tmp8];
    obj1.style = items2;
    const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp6 };
    obj1.children = React4(Text_Text.Text, obj2);
    obj.children = React4(View, obj1);
    items1[1] = React4(View, obj);
    obj.children = items1;
    return timestampProducer(hasOwnProperty, obj);
  } else {
    return null;
  }
  tmp2 = useDesignToggleDefault("show_header_debug_info");
}
