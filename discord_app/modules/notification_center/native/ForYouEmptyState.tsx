// === Module 16428: ForYouEmptyState ===

// Module 16428 (ForYouEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import MailboxSpotIllustration from "MailboxSpotIllustration" /* 16429 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let height;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ image: { marginBottom: 16 }, container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" }, headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 }, text: { textAlign: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((height) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(22);
  height = height.height;
  const tmp4 = closure_5();
  if (cResult[0] !== height) {
    const obj2 = { height };
    cResult[0] = height;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    let tmp6;
    let tmp8;
    let tmp11;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = _false(MailboxSpotIllustration.MailboxSpotIllustration, { scale: 0.75 });
      cResult[5] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4.image) {
      const obj3 = { style: tmp4.image, children: tmp8 };
      const tmp14 = _false(View, obj3);
      cResult[6] = tmp4.image;
      cResult[7] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === tmp4.headerText) {
      let tmp15;
      let tmp16;
      let tmp18;
      let tmp21;
      let tmp23;
      if (cResult[9] === tmp4.text) {
        tmp15 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.MwjTvn);
        cResult[11] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== tmp15) {
        const obj4 = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp15, children: tmp16 };
        const tmp20 = _false(Text_Text.Text, obj4);
        cResult[12] = tmp15;
        cResult[13] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[13];
      }
      const _Symbol3 = Symbol;
      const text = tmp4.text;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl3.intl;
        const stringResult1 = intl2.string(intl3.t.AKBgPy);
        cResult[14] = stringResult1;
        tmp21 = stringResult1;
      } else {
        tmp21 = cResult[14];
      }
      if (cResult[15] !== tmp4.text) {
        const obj5 = { color: "text-default", variant: "text-md/medium", style: text, children: tmp21 };
        const tmp25 = _false(Text_Text.Text, obj5);
        cResult[15] = tmp4.text;
        cResult[16] = tmp25;
        tmp23 = tmp25;
      } else {
        tmp23 = cResult[16];
      }
      if (cResult[17] === tmp23) {
        if (cResult[18] === tmp6) {
          if (cResult[19] === tmp11) {
            let tmp26;
            if (cResult[20] === tmp18) {
              tmp26 = cResult[21];
            }
            return tmp26;
          }
        }
      }
      const obj6 = { style: tmp6, children: items };
      items = [tmp11, tmp18, tmp23];
      const tmp29 = React3(View, obj6);
      cResult[17] = tmp23;
      cResult[18] = tmp6;
      cResult[19] = tmp11;
      cResult[20] = tmp18;
      cResult[21] = tmp29;
      tmp26 = tmp29;
    }
    const items1 = [, ];
    ({ text: arr2[0], headerText: arr2[1] } = tmp4);
    cResult[8] = tmp4.headerText;
    cResult[9] = tmp4.text;
    cResult[10] = items1;
    tmp15 = items1;
  }
  const items2 = [tmp4.container, tmp5];
  cResult[2] = tmp4.container;
  cResult[3] = tmp5;
  cResult[4] = items2;
  tmp6 = items2;
}) : ((height) => {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  height = height.height;
  const tmp = closure_5();
  const obj = { style: items, children: items1 };
  items = [tmp.container, { height }];
  items1 = [, , ];
  const obj2 = { style: tmp.image, children: _false(MailboxSpotIllustration.MailboxSpotIllustration, { scale: 0.75 }) };
  items1[0] = _false(View, obj2);
  const obj3 = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: intl.string(intl3.t.MwjTvn) };
  items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1[1] = _false(Text, obj3);
  const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: intl2.string(intl3.t.AKBgPy) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items1[2] = _false(Text2, obj4);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = tmp4;