// discord_app/modules/safety_common/native/ObscuredSurface.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const util = tmp(1126);
const Text_Text = tmp(4886);
const ImageWarningIcon = tmp(5865);
const ObscuredSurfaceContext = tmp(8356);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { position: "relative", overflow: "hidden" },
  content: { pointerEvents: "none", userSelect: "none" },
  cover: { position: "absolute", inset: 0, zIndex: 1, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND },
  warning: null,
};
let obj3 = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND,
};
obj2.warning = {
  position: "absolute",
  insetInlineStart: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  textAlign: "center",
  userSelect: "none",
  zIndex: 2,
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  position: "absolute",
  insetInlineStart: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
  textAlign: "center",
  userSelect: "none",
  zIndex: 2,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (obscured) => {
      const cResult = c.c(23);
      ({ heading, description, children } = obscured);
      let container = closure_6();
      if (!obscured.obscured) {
        return children;
      } else {
        if (cResult[0] === children) {
          if (cResult[1] === container.content) {
            let tmp4 = cResult[2];
          }
          if (cResult[3] !== container.cover) {
            const obj2 = { style: container.cover };
            const tmp11 = React4(View, obj2);
            cResult[3] = container.cover;
            cResult[4] = tmp11;
            let tmp8 = tmp11;
          } else {
            tmp8 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
            const tmp16 = React4(ImageWarningIcon.ImageWarningIcon, obj3);
            cResult[5] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[5];
          }
          if (cResult[6] !== heading) {
            let stringResult = heading;
            if (heading == null) {
              const intl = util.intl;
              stringResult = intl.string(util.t.xC8Saf);
            }
            cResult[6] = heading;
            cResult[7] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[7];
          }
          if (cResult[8] !== tmp17) {
            const obj4 = { variant: "heading-md/semibold", color: "text-strong", children: tmp17 };
            const tmp22 = React4(Text_Text.Text, obj4);
            cResult[8] = tmp17;
            cResult[9] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[9];
          }
          if (cResult[10] !== description) {
            let stringResult1 = description;
            if (description == null) {
              const intl2 = util.intl;
              stringResult1 = intl2.string(util.t["0fc/DG"]);
            }
            cResult[10] = description;
            cResult[11] = stringResult1;
            let tmp23 = stringResult1;
          } else {
            tmp23 = cResult[11];
          }
          if (cResult[12] !== tmp23) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: tmp23 };
            const tmp28 = React4(Text_Text.Text, obj5);
            cResult[12] = tmp23;
            cResult[13] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[13];
          }
          if (cResult[14] === container.warning) {
            if (cResult[15] === tmp20) {
              if (cResult[16] === tmp26) {
                let tmp29 = cResult[17];
              }
              if (cResult[18] === container.container) {
                if (cResult[19] === tmp4) {
                  if (cResult[20] === tmp8) {
                  }
                }
              }
              const obj6 = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: null };
              const obj7 = { style: container.container, children: null };
              const items = [tmp4, tmp8, tmp29];
              obj7.children = items;
              obj6.children = hasOwnProperty(View, obj7);
              const tmp35 = React4(ObscuredSurfaceContext.ObscuredSurfaceContext.Provider, obj6);
              container = container.container;
              cResult[18] = container;
              cResult[19] = tmp4;
              cResult[20] = tmp8;
              cResult[21] = tmp29;
              cResult[22] = tmp35;
            }
          }
          const obj8 = { style: container.warning, children: null };
          const items1 = [tmp13, tmp20, tmp26];
          obj8.children = items1;
          const tmp32 = hasOwnProperty(View, obj8);
          cResult[14] = container.warning;
          cResult[15] = tmp20;
          cResult[16] = tmp26;
          cResult[17] = tmp32;
          tmp29 = tmp32;
        }
        const obj9 = {
          style: container.content,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          accessible: false,
          "aria-hidden": true,
          children,
        };
        const tmp7 = React4(View, obj9);
        cResult[0] = children;
        cResult[1] = container.content;
        cResult[2] = tmp7;
        tmp4 = tmp7;
      }
    }
  : (obscured) => {
      ({ heading, description, children } = obscured);
      const tmp = closure_6();
      let tmp3Result = children;
      if (obscured.obscured) {
        const obj = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: null };
        const obj2 = { style: tmp.container, children: null };
        const obj3 = {
          style: tmp.content,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          accessible: false,
          "aria-hidden": true,
          children,
        };
        const items = [React4(View, obj3), ,];
        const obj4 = { style: tmp.cover };
        items[1] = React4(View, obj4);
        const obj5 = { style: tmp.warning, children: null };
        const obj6 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
        const items1 = [React4(ImageWarningIcon.ImageWarningIcon, obj6), ,];
        if (heading == null) {
          const intl = util.intl;
          heading = intl.string(util.t.xC8Saf);
        }
        const obj7 = { variant: "heading-md/semibold", color: "text-strong", children: heading };
        items1[1] = React4(Text_Text.Text, obj7);
        if (description == null) {
          const intl2 = util.intl;
          description = intl2.string(util.t["0fc/DG"]);
        }
        const obj8 = { variant: "text-sm/normal", color: "text-muted", children: description };
        items1[2] = React4(Text_Text.Text, obj8);
        obj5.children = items1;
        items[2] = hasOwnProperty(View, obj5);
        obj2.children = items;
        obj.children = hasOwnProperty(View, obj2);
        tmp3Result = React4(ObscuredSurfaceContext.ObscuredSurfaceContext.Provider, obj);
      }
      return tmp3Result;
    };
