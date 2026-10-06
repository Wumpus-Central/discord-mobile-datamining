// === Module 6018: HeaderDebugOverlay ===

// Module 6018 (HeaderDebugOverlay)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import useDesignToggleDefault from "useDesignToggle" /* 6019 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { "os-drawn": "OS-Drawn", "custom-drawn": "Custom-Drawn", "js-stack": "JS Stack", sheet: "Sheet", bespoke: "Bespoke" };
let createStyles = createStyles_mod;
let obj = { tintWash: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.15 }, badgeContainer: { position: "absolute", bottom: 2, right: 4, pointerEvents: "none" }, badge: obj2, "color-os-drawn": obj3, "color-custom-drawn": obj4, "color-js-stack": obj5, "color-sheet": obj6, "color-bespoke": { backgroundColor: nativeDefault.colors.STATUS_WARNING } };
obj2 = { paddingHorizontal: 4, paddingVertical: 1, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj4 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let items;
  let items2;
  const obj = react2;
  const cResult = obj.c(17);
  const tmp4 = useDesignToggleDefault("show_header_debug_info");
  const tmp5 = closure_8();
  if (tmp4) {
    let tmp8 = arg1;
    const _HermesInternal = HermesInternal;
    const tmp10 = tmp5["color-" + arg0];
    if (arg1 == null) {
      tmp8 = closure_7[arg0];
    }
    if (cResult[0] === tmp10) {
      let tmp13;
      if (cResult[1] === tmp5.tintWash) {
        tmp13 = cResult[2];
      }
      if (cResult[3] === tmp10) {
        let tmp17;
        let tmp18;
        if (cResult[4] === tmp5.badge) {
          tmp17 = cResult[5];
        }
        if (cResult[6] !== tmp8) {
          const obj2 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp8 };
          const tmp20 = React3(Text_Text.Text, obj2);
          cResult[6] = tmp8;
          cResult[7] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] === tmp17) {
          let tmp21;
          if (cResult[9] === tmp18) {
            tmp21 = cResult[10];
          }
          if (cResult[11] === tmp5.badgeContainer) {
            let tmp25;
            if (cResult[12] === tmp21) {
              tmp25 = cResult[13];
            }
            if (cResult[14] === tmp13) {
              let tmp29;
              if (cResult[15] === tmp25) {
                tmp29 = cResult[16];
              }
              return tmp29;
            }
            const obj3 = { children: items };
            items = [tmp13, tmp25];
            const tmp32 = metroRequire(hasOwnProperty, obj3);
            cResult[14] = tmp13;
            cResult[15] = tmp25;
            cResult[16] = tmp32;
            tmp29 = tmp32;
          }
          const obj4 = { style: tmp5.badgeContainer, children: tmp21 };
          const tmp28 = React3(View, obj4);
          cResult[11] = tmp5.badgeContainer;
          cResult[12] = tmp21;
          cResult[13] = tmp28;
          tmp25 = tmp28;
        }
        const obj5 = { style: tmp17, children: tmp18 };
        const tmp24 = React3(View, obj5);
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
    const obj6 = { style: items2 };
    items2 = [tmp5.tintWash, tmp10];
    const tmp16 = React3(View, obj6);
    cResult[0] = tmp10;
    cResult[1] = tmp5.tintWash;
    cResult[2] = tmp16;
    tmp13 = tmp16;
  } else {
    return null;
  }
}) : ((arg0, arg1) => {
  let items;
  let items1;
  let items2;
  let obj4;
  let obj5;
  const tmp2 = useDesignToggleDefault("show_header_debug_info");
  const tmp3 = closure_8();
  if (tmp2) {
    let tmp6 = arg1;
    const _HermesInternal = HermesInternal;
    const tmp8 = tmp3["color-" + arg0];
    if (arg1 == null) {
      tmp6 = closure_7[arg0];
    }
    const obj2 = { style: items };
    items = [tmp3.tintWash, tmp8];
    const obj = { children: items1 };
    items1 = [React3(View, obj2), ];
    const obj3 = { style: tmp3.badgeContainer, children: React3(View, obj4) };
    obj4 = { style: items2, children: React3(Text_Text.Text, obj5) };
    items2 = [tmp3.badge, tmp8];
    obj5 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp6 };
    items1[1] = React3(View, obj3);
    return metroRequire(hasOwnProperty, obj);
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default tmp5;