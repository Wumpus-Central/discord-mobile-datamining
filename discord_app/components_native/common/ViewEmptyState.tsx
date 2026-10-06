// === Module 6557: ViewEmptyState ===

// Module 6557 (ViewEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, Image: c3 } = react_native);
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 36 }, emptyImage: { width: 170, height: 130 }, fixOpticalIllusion: { marginTop: -50, alignItems: "center" }, emptyLabel: obj2, emptyText: { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 13, marginTop: 8, marginHorizontal: 10, opacity: 0.6, fontWeight: "400" } };
obj2 = { textAlign: "center", marginTop: 32, opacity: 0.8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
let closure_6 = createStyles(obj);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let label;
  let source;
  let style;
  let text;
  const obj = react2;
  const cResult = obj.c(21);
  ({ source, label, text, style } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.emptyContainer) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === source) {
      let tmp6;
      if (cResult[4] === tmp4.emptyImage) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === label) {
        let tmp10;
        if (cResult[7] === tmp4.emptyLabel) {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp4.emptyLabel) {
          if (cResult[10] === tmp4.emptyText) {
            let tmp13;
            if (cResult[11] === text) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === tmp4.fixOpticalIllusion) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp10) {
                  let tmp16;
                  if (cResult[16] === tmp13) {
                    tmp16 = cResult[17];
                  }
                  if (cResult[18] === tmp5) {
                    let tmp20;
                    if (cResult[19] === tmp16) {
                      tmp20 = cResult[20];
                    }
                    return tmp20;
                  }
                  const obj2 = { style: tmp5, children: tmp16 };
                  const tmp23 = React3(React2, obj2);
                  cResult[18] = tmp5;
                  cResult[19] = tmp16;
                  cResult[20] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
            const obj3 = { style: tmp4.fixOpticalIllusion, children: items };
            items = [tmp6, tmp10, tmp13];
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
          const obj4 = { style: items1, children: text };
          items1 = [, ];
          ({ emptyLabel: arr2[0], emptyText: arr2[1] } = tmp4);
          tmp14 = React3(native.LegacyText, obj4);
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
        const LegacyText = native.LegacyText;
        tmp11 = React3(LegacyText, obj5);
      }
      cResult[6] = label;
      cResult[7] = tmp4.emptyLabel;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
    const obj6 = { resizeMode: "contain", source, style: tmp4.emptyImage };
    const tmp9 = React3(_false, obj6);
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
}) : ((arg0) => {
  let items;
  let items1;
  let items2;
  let label;
  let obj2;
  let source;
  let style;
  let text;
  ({ label, text } = arg0);
  ({ source, style } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: hasOwnProperty(React2, obj2) };
  items = [tmp.emptyContainer, style];
  obj2 = { style: tmp.fixOpticalIllusion, children: items1 };
  items1 = [, , ];
  const obj3 = { resizeMode: "contain", source, style: tmp.emptyImage };
  items1[0] = React3(_false, obj3);
  let tmp2Result = null;
  if (null != label) {
    const obj4 = { style: tmp.emptyLabel, children: label.toUpperCase() };
    const LegacyText = native.LegacyText;
    tmp2Result = React3(LegacyText, obj4);
  }
  items1[1] = tmp2Result;
  let tmp2Result2 = null;
  if (null != text) {
    const obj5 = { style: items2, children: text };
    items2 = [, ];
    ({ emptyLabel: arr3[0], emptyText: arr3[1] } = tmp);
    tmp2Result2 = React3(native.LegacyText, obj5);
  }
  items1[2] = tmp2Result2;
  return React3(React2, obj);
});
const result = size.fileFinishedImporting("components_native/common/ViewEmptyState.tsx");

export default tmp8;