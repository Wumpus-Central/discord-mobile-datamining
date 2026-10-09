// discord_app/modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useDesignToggleDefault from "useDesignToggle.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const dependencyMap = {
  "os-drawn": "OS-Drawn",
  "custom-drawn": "Custom-Drawn",
  "js-stack": "JS Stack",
  sheet: "Sheet",
  bespoke: "Bespoke",
};
const createStyles = fn(5091);
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
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2["color-sheet"] = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj7 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2["color-bespoke"] = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj8 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useHeaderDebugOverlay(arg0, arg1) {
      const cResult = c.c(17);
      const tmp5 = closure_8();
      if (tmp4) {
        let tmp8 = arg1;
        const _HermesInternal = HermesInternal;
        const tmp10 = tmp5["color-" + arg0];
        if (arg1 == null) {
          tmp8 = dependencyMap[arg0];
        }
        if (cResult[0] === tmp10) {
          if (cResult[1] === tmp5.tintWash) {
            let tmp13 = cResult[2];
          }
          if (cResult[3] === tmp10) {
            if (cResult[4] === tmp5.badge) {
              let tmp17 = cResult[5];
            }
            if (cResult[6] !== tmp8) {
              const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp8 };
              const tmp20 = React4(Text_Text.Text, obj2);
              cResult[6] = tmp8;
              cResult[7] = tmp20;
              let tmp18 = tmp20;
            } else {
              tmp18 = cResult[7];
            }
            if (cResult[8] === tmp17) {
              if (cResult[9] === tmp18) {
                let tmp21 = cResult[10];
              }
              if (cResult[11] === tmp5.badgeContainer) {
                if (cResult[12] === tmp21) {
                  let tmp25 = cResult[13];
                }
                if (cResult[14] === tmp13) {
                  if (cResult[15] === tmp25) {
                    let tmp29 = cResult[16];
                  }
                  return tmp29;
                }
                const obj3 = { children: null };
                const items = [tmp13, tmp25];
                obj3.children = items;
                const tmp32 = timestampProducer(hasOwnProperty, obj3);
                cResult[14] = tmp13;
                cResult[15] = tmp25;
                cResult[16] = tmp32;
                tmp29 = tmp32;
              }
              const obj4 = { style: tmp5.badgeContainer, children: tmp21 };
              const tmp28 = React4(View, obj4);
              cResult[11] = tmp5.badgeContainer;
              cResult[12] = tmp21;
              cResult[13] = tmp28;
              tmp25 = tmp28;
            }
            const obj5 = { style: tmp17, children: tmp18 };
            const tmp24 = React4(View, obj5);
            cResult[8] = tmp17;
            cResult[9] = tmp18;
            cResult[10] = tmp24;
            tmp21 = tmp24;
          }
          const items1 = [tmp5.badge, tmp10];
          cResult[3] = tmp10;
          cResult[4] = tmp5.badge;
          cResult[5] = items1;
          tmp17 = items1;
        }
        const obj6 = { style: null };
        const items2 = [tmp5.tintWash, tmp10];
        obj6.style = items2;
        const tmp16 = React4(View, obj6);
        cResult[0] = tmp10;
        cResult[1] = tmp5.tintWash;
        cResult[2] = tmp16;
        tmp13 = tmp16;
      } else {
        return null;
      }
      tmp4 = useDesignToggleDefault("show_header_debug_info");
    }
  : function useHeaderDebugOverlay(arg0, arg1) {
      const tmp3 = closure_8();
      if (tmp2) {
        let tmp6 = arg1;
        const _HermesInternal = HermesInternal;
        const tmp8 = tmp3["color-" + arg0];
        if (arg1 == null) {
          tmp6 = dependencyMap[arg0];
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
    };
