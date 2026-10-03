// === Module 10748: OrbCheckoutAmountTag ===

// Module 10748 (OrbCheckoutAmountTag)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import OrbsIcon from "OrbsIcon" /* 8491 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { orbAmountTag: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, orbsIcon: { width: 14, height: 14 } };
let closure_5 = createStyles.createStyles(obj);
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((orbAmount) => {
  const cResult = c.c(11);
  orbAmount = orbAmount.orbAmount;
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.orbsIcon) {
    const obj2 = { size: "custom", color: "icon-strong", style: tmp4.orbsIcon };
    const tmp7 = React3(OrbsIcon.OrbsIcon, obj2);
    cResult[0] = tmp4.orbsIcon;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== orbAmount) {
    if (null == orbAmount) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.pfChQr);
    } else {
      const intl = util.intl;
      const obj3 = { orbAmount };
      stringResult = intl.formatToPlainString(util.t.W4DfeF, obj3);
    }
    cResult[2] = orbAmount;
    cResult[3] = stringResult;
  } else {
    let str = "--";
    if (null != orbAmount) {
      str = orbAmount;
    }
    if (cResult[4] === cResult[3]) {
      if (cResult[5] === str) {
        let tmp13 = cResult[6];
      }
      if (cResult[7] === tmp4.orbAmountTag) {
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp13) {
            let tmp16 = cResult[10];
          }
          return tmp16;
        }
      }
      const obj4 = { style: tmp4.orbAmountTag, children: null };
      const items = [tmp5, tmp13];
      obj4.children = items;
      const tmp19 = React4(View, obj4);
      cResult[7] = tmp4.orbAmountTag;
      cResult[8] = tmp5;
      cResult[9] = tmp13;
      cResult[10] = tmp19;
      tmp16 = tmp19;
    }
    const obj5 = { variant: "text-md/semibold", accessibilityLabel: cResult[3], children: str };
    const tmp15 = React3(Text_Text.Text, obj5);
    cResult[4] = cResult[3];
    cResult[5] = str;
    cResult[6] = tmp15;
    tmp13 = tmp15;
  }
}) : ((orbAmount) => {
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_5();
  const obj = { style: tmp.orbAmountTag, children: null };
  const items = [React3(OrbsIcon.OrbsIcon, { size: "custom", color: "icon-strong", style: tmp.orbsIcon }), ];
  if (null == orbAmount) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.pfChQr);
  } else {
    const intl = util.intl;
    const obj3 = { orbAmount };
    stringResult = intl.formatToPlainString(util.t.W4DfeF, obj3);
  }
  const obj4 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: null };
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj4.children = str;
  items[1] = React3(Text_Text.Text, obj4);
  obj.children = items;
  return React4(View, obj);
});