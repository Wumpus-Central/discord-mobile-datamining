// discord_app/modules/media/native/Caption.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import native from "../../../design/void/native.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = {
  captionText: { fontFamily: Constants.Fonts.PRIMARY_BOLD, color: nativeDefault.colors.WHITE, fontSize: 12 },
  labelContainer: null,
};
const rect = {
  backgroundColor: null,
  borderRadius: null,
  paddingHorizontal: 8,
  paddingVertical: 2,
  position: "absolute",
  right: 6,
  bottom: 6,
};
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5);
rect.borderRadius = nativeDefault.radii.xs;
obj.labelContainer = rect;
let closure_4 = createStyles.createStyles(obj);
let obj2 = { fontFamily: Constants.Fonts.PRIMARY_BOLD, color: nativeDefault.colors.WHITE, fontSize: 12 };
const result = size.fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = ReactCompilerGating.isReactCompilerEnabled()
  ? function Caption(arg0) {
      const cResult = c.c(12);
      ({ label, style, textStyle } = arg0);
      const tmp4 = closure_4();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.labelContainer) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.captionText) {
          if (cResult[4] === textStyle) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === label) {
            if (cResult[7] === tmp6) {
              let tmp7 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp7) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
            const obj2 = { style: tmp5, children: tmp7 };
            const tmp13 = <View style={tmp5}>{tmp7}</View>;
            cResult[9] = tmp5;
            cResult[10] = tmp7;
            cResult[11] = tmp13;
            tmp10 = tmp13;
          }
          const obj3 = { style: tmp6, children: label };
          const tmp9 = jsx(native.LegacyText, { style: tmp6, children: label });
          cResult[6] = label;
          cResult[7] = tmp6;
          cResult[8] = tmp9;
          tmp7 = tmp9;
        }
        const items = [tmp4.captionText, textStyle];
        cResult[3] = tmp4.captionText;
        cResult[4] = textStyle;
        cResult[5] = items;
        tmp6 = items;
      }
      const items1 = [tmp4.labelContainer, style];
      cResult[0] = style;
      cResult[1] = tmp4.labelContainer;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : function Caption(arg0) {
      ({ label, style, textStyle } = arg0);
      const tmp = closure_4();
      const obj = { style: null, children: null };
      const items = [tmp.labelContainer, style];
      obj.style = items;
      const obj2 = { style: null, children: label };
      const items1 = [tmp.captionText, textStyle];
      obj2.style = items1;
      obj.children = jsx(native.LegacyText, { style: null, children: label });
      return <View style={null}>{null}</View>;
    };
