// discord_app/components_native/common/ViewEmptyState.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import TextStyles from "../../modules/rebrand/native/TextStyles.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 },
  emptyImage: { width: 170, height: 130 },
  fixOpticalIllusion: { marginTop: -50, alignItems: "center" },
  emptyLabel: null,
  emptyText: null,
};
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textAlign = "center";
obj3.marginTop = 32;
obj3.opacity = 0.8;
obj2.emptyLabel = obj3;
obj2.emptyText = {
  fontFamily: Fonts.PRIMARY_MEDIUM,
  fontSize: 13,
  marginTop: 8,
  marginHorizontal: 10,
  opacity: 0.6,
  fontWeight: "400",
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ViewEmptyState(arg0) {
      const cResult = c.c(21);
      ({ source, label, text, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.emptyContainer) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === source) {
          if (cResult[4] === tmp4.emptyImage) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === label) {
            if (cResult[7] === tmp4.emptyLabel) {
              let tmp10 = cResult[8];
            }
            if (cResult[9] === tmp4.emptyLabel) {
              if (cResult[10] === tmp4.emptyText) {
                if (cResult[11] === text) {
                  let tmp13 = cResult[12];
                }
                if (cResult[13] === tmp4.fixOpticalIllusion) {
                  if (cResult[14] === tmp6) {
                    if (cResult[15] === tmp10) {
                      if (cResult[16] === tmp13) {
                        let tmp16 = cResult[17];
                      }
                      if (cResult[18] === tmp5) {
                        if (cResult[19] === tmp16) {
                          let tmp20 = cResult[20];
                        }
                        return tmp20;
                      }
                      const obj2 = { style: tmp5, children: tmp16 };
                      const tmp23 = React4(React2, obj2);
                      cResult[18] = tmp5;
                      cResult[19] = tmp16;
                      cResult[20] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                }
                const obj3 = { style: tmp4.fixOpticalIllusion, children: null };
                const items = [tmp6, tmp10, tmp13];
                obj3.children = items;
                const tmp19 = hasOwnProperty(React2, obj3);
                cResult[13] = tmp4.fixOpticalIllusion;
                cResult[14] = tmp6;
                cResult[15] = tmp10;
                cResult[16] = tmp13;
                cResult[17] = tmp19;
                tmp16 = tmp19;
              }
            }
            let tmp14 = null;
            if (null != text) {
              const obj4 = { style: null, children: null };
              const items1 = [,];
              ({ emptyLabel: arr2[0], emptyText: arr2[1] } = tmp4);
              obj4.style = items1;
              obj4.children = text;
              tmp14 = React4(native.LegacyText, obj4);
            }
            cResult[9] = tmp4.emptyLabel;
            cResult[10] = tmp4.emptyText;
            cResult[11] = text;
            cResult[12] = tmp14;
            tmp13 = tmp14;
          }
          let tmp11 = null;
          if (null != label) {
            const obj5 = { style: tmp4.emptyLabel, children: label.toUpperCase() };
            tmp11 = React4(native.LegacyText, obj5);
          }
          cResult[6] = label;
          cResult[7] = tmp4.emptyLabel;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        }
        const obj6 = { resizeMode: "contain", source, style: tmp4.emptyImage };
        const tmp9 = React4(React3, obj6);
        cResult[3] = source;
        cResult[4] = tmp4.emptyImage;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const items2 = [tmp4.emptyContainer, style];
      cResult[0] = style;
      cResult[1] = tmp4.emptyContainer;
      cResult[2] = items2;
      tmp5 = items2;
    }
  : function ViewEmptyState(arg0) {
      ({ label, text } = arg0);
      ({ source, style } = arg0);
      const tmp = closure_6();
      const obj = { style: null, children: null };
      const items = [tmp.emptyContainer, style];
      obj.style = items;
      const obj2 = { style: tmp.fixOpticalIllusion, children: null };
      const items1 = [React4(React3, { resizeMode: "contain", source, style: tmp.emptyImage }), ,];
      let tmp2Result = null;
      if (null != label) {
        const obj4 = { style: tmp.emptyLabel, children: label.toUpperCase() };
        tmp2Result = React4(native.LegacyText, obj4);
      }
      items1[1] = tmp2Result;
      let tmp2Result2 = null;
      if (null != text) {
        const obj5 = { style: null, children: null };
        const items2 = [,];
        ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
        obj5.style = items2;
        obj5.children = text;
        tmp2Result2 = React4(native.LegacyText, obj5);
      }
      items1[2] = tmp2Result2;
      obj2.children = items1;
      obj.children = hasOwnProperty(React2, obj2);
      return React4(React2, obj);
    };
