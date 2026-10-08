// === Module 12135: DescriptionEllipsis ===

// Module 12135 (DescriptionEllipsis)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { topicEllipsis: null, topicEllipsisDot: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, marginTop: 4, height: 12, width: 24 };
obj2.topicEllipsis = size;
const size1 = { backgroundColor: nativeDefault.colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
obj2.topicEllipsisDot = size1;
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DescriptionEllipsis(arg0) {
  const cResult = c.c(17);
  ({ style, dotStyle } = arg0);
  const tmp2 = closure_5();
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.topicEllipsis) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === dotStyle) {
      if (cResult[4] === tmp2.topicEllipsisDot) {
        let tmp4 = cResult[5];
      }
      if (cResult[6] === dotStyle) {
        if (cResult[7] === tmp2.topicEllipsisDot) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] === dotStyle) {
          if (cResult[10] === tmp2.topicEllipsisDot) {
            let tmp12 = cResult[11];
          }
          if (cResult[12] === tmp3) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp12) {
                  let tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
          }
          const obj2 = { style: tmp3, children: null };
          const items = [tmp4, tmp8, tmp12];
          obj2.children = items;
          const tmp19 = React4(View, obj2);
          cResult[12] = tmp3;
          cResult[13] = tmp4;
          cResult[14] = tmp8;
          cResult[15] = tmp12;
          cResult[16] = tmp19;
          tmp16 = tmp19;
        }
        const obj3 = { style: null };
        const items1 = [tmp2.topicEllipsisDot, dotStyle];
        obj3.style = items1;
        const tmp15 = React3(View, obj3);
        cResult[9] = dotStyle;
        cResult[10] = tmp2.topicEllipsisDot;
        cResult[11] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { style: null };
      const items2 = [tmp2.topicEllipsisDot, dotStyle];
      obj4.style = items2;
      const tmp11 = React3(View, obj4);
      cResult[6] = dotStyle;
      cResult[7] = tmp2.topicEllipsisDot;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
    const obj5 = { style: null };
    const items3 = [tmp2.topicEllipsisDot, dotStyle];
    obj5.style = items3;
    const tmp7 = React3(View, obj5);
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
}) : (function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.topicEllipsis, dotStyle.style];
  obj.style = items;
  const obj2 = { style: null };
  const items1 = [tmp.topicEllipsisDot, dotStyle];
  obj2.style = items1;
  const items2 = [React3(View, obj2), , ];
  const obj3 = { style: null };
  const items3 = [tmp.topicEllipsisDot, dotStyle];
  obj3.style = items3;
  items2[1] = React3(View, obj3);
  const obj4 = { style: null };
  const items4 = [tmp.topicEllipsisDot, dotStyle];
  obj4.style = items4;
  items2[2] = React3(View, obj4);
  obj.children = items2;
  return React4(View, obj);
});