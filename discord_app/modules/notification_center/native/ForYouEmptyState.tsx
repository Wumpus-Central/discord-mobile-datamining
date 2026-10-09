// === Module 16812: ForYouEmptyState ===

// Module 16812 (ForYouEmptyState)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import MailboxSpotIllustration from "MailboxSpotIllustration" /* 16813 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ image: { marginBottom: 16 }, container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" }, headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 }, text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouEmptyState(height) {
  const cResult = c.c(22);
  height = height.height;
  const tmp4 = closure_5();
  if (cResult[0] !== height) {
    const obj2 = { height };
    cResult[0] = height;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = React3(MailboxSpotIllustration.MailboxSpotIllustration, { scale: 0.75 });
      cResult[5] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4.image) {
      const obj3 = { style: tmp4.image, children: tmp8 };
      const tmp14 = React3(View, obj3);
      cResult[6] = tmp4.image;
      cResult[7] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[7];
    }
    if (cResult[8] === tmp4.headerText) {
      if (cResult[9] === tmp4.text) {
        let tmp15 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.MwjTvn);
        cResult[11] = stringResult;
        let tmp16 = stringResult;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== tmp15) {
        const obj4 = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp15, children: tmp16 };
        const tmp20 = React3(Text_Text.Text, obj4);
        cResult[12] = tmp15;
        cResult[13] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[13];
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.AKBgPy);
        cResult[14] = stringResult1;
        let tmp21 = stringResult1;
      } else {
        tmp21 = cResult[14];
      }
      if (cResult[15] !== tmp4.text) {
        const obj5 = { color: "text-default", variant: "text-md/medium", style: tmp4.text, children: tmp21 };
        const tmp25 = React3(Text_Text.Text, obj5);
        cResult[15] = tmp4.text;
        cResult[16] = tmp25;
        let tmp23 = tmp25;
      } else {
        tmp23 = cResult[16];
      }
      if (cResult[17] === tmp23) {
        if (cResult[18] === tmp6) {
          if (cResult[19] === tmp11) {
            if (cResult[20] === tmp18) {
              let tmp26 = cResult[21];
            }
            return tmp26;
          }
        }
      }
      const obj6 = { style: tmp6, children: null };
      const items = [tmp11, tmp18, tmp23];
      obj6.children = items;
      const tmp29 = React4(View, obj6);
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
}) : (function ForYouEmptyState(height) {
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.container, { height: height.height }];
  obj.style = items;
  const items1 = [React3(View, { style: tmp.image, children: React3(MailboxSpotIllustration.MailboxSpotIllustration, { scale: 0.75 }) }), , ];
  const obj3 = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
  const items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  obj3.style = items2;
  const intl = util.intl;
  obj3.children = intl.string(util.t.MwjTvn);
  items1[1] = React3(Text_Text.Text, obj3);
  const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.AKBgPy);
  items1[2] = React3(Text_Text.Text, obj4);
  obj.children = items1;
  return React4(View, obj);
});