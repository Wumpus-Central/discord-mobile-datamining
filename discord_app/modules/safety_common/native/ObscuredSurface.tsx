// discord_app/modules/safety_common/native/ObscuredSurface.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ImageWarningIcon2 from "../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import ObscuredSurfaceContext from "../ObscuredSurfaceContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obscured;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { position: "relative", overflow: "hidden" },
  content: { pointerEvents: "none", userSelect: "none" },
  cover: obj2,
  warning: obj3,
};
obj2 = { position: "absolute", inset: 0, zIndex: 1, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = {
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
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (obscured) => {
      let children;
      let description;
      let heading;
      let items;
      let items1;
      let obj7;
      const obj = react2;
      const cResult = obj.c(23);
      ({ heading, description, children } = obscured);
      obscured = obscured.obscured;
      const tmp4 = closure_6();
      let tmp5 = children;
      if (obscured) {
        if (cResult[0] === children) {
          let tmp6;
          let tmp10;
          let tmp15;
          let tmp19;
          let tmp22;
          let tmp25;
          let tmp28;
          if (cResult[1] === tmp4.content) {
            tmp6 = cResult[2];
          }
          if (cResult[3] !== tmp4.cover) {
            const obj2 = { style: tmp4.cover };
            const tmp13 = React3(View, obj2);
            cResult[3] = tmp4.cover;
            cResult[4] = tmp13;
            tmp10 = tmp13;
          } else {
            tmp10 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
            const ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
            const tmp18 = React3(ImageWarningIcon, obj3);
            cResult[5] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[5];
          }
          if (cResult[6] !== heading) {
            let stringResult = heading;
            if (heading == null) {
              const intl = intl3.intl;
              stringResult = intl.string(intl3.t.xC8Saf);
            }
            cResult[6] = heading;
            cResult[7] = stringResult;
            tmp19 = stringResult;
          } else {
            tmp19 = cResult[7];
          }
          if (cResult[8] !== tmp19) {
            const obj4 = { variant: "heading-md/semibold", color: "text-strong", children: tmp19 };
            const tmp24 = React3(Text_Text.Text, obj4);
            cResult[8] = tmp19;
            cResult[9] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[9];
          }
          if (cResult[10] !== description) {
            let stringResult1 = description;
            if (description == null) {
              const intl2 = intl3.intl;
              stringResult1 = intl2.string(intl3.t["0fc/DG"]);
            }
            cResult[10] = description;
            cResult[11] = stringResult1;
            tmp25 = stringResult1;
          } else {
            tmp25 = cResult[11];
          }
          if (cResult[12] !== tmp25) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: tmp25 };
            const tmp30 = React3(Text_Text.Text, obj5);
            cResult[12] = tmp25;
            cResult[13] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          if (cResult[14] === tmp4.warning) {
            if (cResult[15] === tmp22) {
              let tmp31;
              if (cResult[16] === tmp28) {
                tmp31 = cResult[17];
              }
              if (cResult[18] === tmp4.container) {
                if (cResult[19] === tmp6) {
                  if (cResult[20] === tmp10) {
                    let tmp35;
                    if (cResult[21] === tmp31) {
                      tmp35 = cResult[22];
                    }
                    tmp5 = tmp35;
                  }
                }
              }
              const obj6 = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: hasOwnProperty(View, obj7) };
              const Provider = ObscuredSurfaceContext.ObscuredSurfaceContext.Provider;
              obj7 = { style: tmp4.container, children: items };
              items = [tmp6, tmp10, tmp31];
              const tmp39 = React3(Provider, obj6);
              cResult[18] = tmp4.container;
              cResult[19] = tmp6;
              cResult[20] = tmp10;
              cResult[21] = tmp31;
              cResult[22] = tmp39;
              tmp35 = tmp39;
            }
          }
          const obj8 = { style: tmp4.warning, children: items1 };
          items1 = [tmp15, tmp22, tmp28];
          const tmp34 = hasOwnProperty(View, obj8);
          cResult[14] = tmp4.warning;
          cResult[15] = tmp22;
          cResult[16] = tmp28;
          cResult[17] = tmp34;
          tmp31 = tmp34;
        }
        const obj9 = {
          style: tmp4.content,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          accessible: false,
          "aria-hidden": true,
          children,
        };
        const tmp9 = React3(View, obj9);
        cResult[0] = children;
        cResult[1] = tmp4.content;
        cResult[2] = tmp9;
        tmp6 = tmp9;
      }
      return tmp5;
    }
  : (obscured) => {
      let children;
      let description;
      let heading;
      let items;
      let items1;
      let obj2;
      ({ heading, description, children } = obscured);
      obscured = obscured.obscured;
      const tmp = closure_6();
      let tmp3Result = children;
      if (obscured) {
        const obj = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: hasOwnProperty(View, obj2) };
        const Provider = ObscuredSurfaceContext.ObscuredSurfaceContext.Provider;
        obj2 = { style: tmp.container, children: items };
        const obj3 = {
          style: tmp.content,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          accessible: false,
          "aria-hidden": true,
          children,
        };
        items = [React3(View, obj3), ,];
        const obj4 = { style: tmp.cover };
        items[1] = React3(View, obj4);
        const obj5 = { style: tmp.warning, children: items1 };
        const obj6 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
        const ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
        items1 = [React3(ImageWarningIcon, obj6), ,];
        const Text = Text_Text.Text;
        if (heading == null) {
          const intl = intl3.intl;
          heading = intl.string(intl3.t.xC8Saf);
        }
        const obj7 = { variant: "heading-md/semibold", color: "text-strong", children: heading };
        items1[1] = React3(Text, obj7);
        const Text2 = Text_Text.Text;
        if (description == null) {
          const intl2 = intl3.intl;
          description = intl2.string(intl3.t["0fc/DG"]);
        }
        const obj8 = { variant: "text-sm/normal", color: "text-muted", children: description };
        items1[2] = React3(Text2, obj8);
        items[2] = hasOwnProperty(View, obj5);
        tmp3Result = React3(Provider, obj);
      }
      return tmp3Result;
    };
const result = size.fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default tmp5;
