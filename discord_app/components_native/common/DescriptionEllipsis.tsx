// === Module 12047: DescriptionEllipsis ===

// Module 12047 (DescriptionEllipsis)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
let size1;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { topicEllipsis: size, topicEllipsisDot: size1 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
createStyles = createStyles.createStyles;
size1 = { backgroundColor: nativeDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let dotStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  const obj = react2;
  const cResult = obj.c(17);
  ({ style, dotStyle } = arg0);
  const tmp2 = closure_5();
  if (cResult[0] === style) {
    let tmp3;
    if (cResult[1] === tmp2.topicEllipsis) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === dotStyle) {
      let tmp4;
      if (cResult[4] === tmp2.topicEllipsisDot) {
        tmp4 = cResult[5];
      }
      if (cResult[6] === dotStyle) {
        let tmp8;
        if (cResult[7] === tmp2.topicEllipsisDot) {
          tmp8 = cResult[8];
        }
        if (cResult[9] === dotStyle) {
          let tmp12;
          if (cResult[10] === tmp2.topicEllipsisDot) {
            tmp12 = cResult[11];
          }
          if (cResult[12] === tmp3) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === tmp8) {
                let tmp16;
                if (cResult[15] === tmp12) {
                  tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
          }
          const obj2 = { style: tmp3, children: items };
          items = [tmp4, tmp8, tmp12];
          const tmp19 = React3(View, obj2);
          cResult[12] = tmp3;
          cResult[13] = tmp4;
          cResult[14] = tmp8;
          cResult[15] = tmp12;
          cResult[16] = tmp19;
          tmp16 = tmp19;
        }
        const obj3 = { style: items1 };
        items1 = [tmp2.topicEllipsisDot, dotStyle];
        const tmp15 = _false(View, obj3);
        cResult[9] = dotStyle;
        cResult[10] = tmp2.topicEllipsisDot;
        cResult[11] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { style: items2 };
      items2 = [tmp2.topicEllipsisDot, dotStyle];
      const tmp11 = _false(View, obj4);
      cResult[6] = dotStyle;
      cResult[7] = tmp2.topicEllipsisDot;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
    const obj5 = { style: items3 };
    items3 = [tmp2.topicEllipsisDot, dotStyle];
    const tmp7 = _false(View, obj5);
    cResult[3] = dotStyle;
    cResult[4] = tmp2.topicEllipsisDot;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const items4 = [tmp2.topicEllipsis, style];
  cResult[0] = style;
  cResult[1] = tmp2.topicEllipsis;
  cResult[2] = items4;
  tmp3 = items4;
}) : ((dotStyle) => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  dotStyle = dotStyle.dotStyle;
  const style = dotStyle.style;
  const tmp = closure_5();
  const obj = { style: items, children: items2 };
  items = [tmp.topicEllipsis, style];
  const obj2 = { style: items1 };
  items1 = [tmp.topicEllipsisDot, dotStyle];
  items2 = [_false(View, obj2), , ];
  const obj3 = { style: items3 };
  items3 = [tmp.topicEllipsisDot, dotStyle];
  items2[1] = _false(View, obj3);
  const obj4 = { style: items4 };
  items4 = [tmp.topicEllipsisDot, dotStyle];
  items2[2] = _false(View, obj4);
  return React3(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default tmp5;