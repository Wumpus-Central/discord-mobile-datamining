// === Module 10761: OrbCheckoutAmountTag ===

// Module 10761 (OrbCheckoutAmountTag)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import OrbsIcon from "OrbsIcon" /* 8524 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let orbAmount;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { orbAmountTag: obj2, orbsIcon: { width: 14, height: 14 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((orbAmount) => {
  let items;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(11);
  orbAmount = orbAmount.orbAmount;
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.orbsIcon) {
    const obj2 = { size: "custom", color: "icon-strong", style: tmp4.orbsIcon };
    const tmp7 = _false(OrbsIcon.OrbsIcon, obj2);
    cResult[0] = tmp4.orbsIcon;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== orbAmount) {
    let stringResult;
    if (null == orbAmount) {
      const intl2 = intl3.intl;
      stringResult = intl2.string(intl3.t.pfChQr);
    } else {
      const intl = intl3.intl;
      const obj3 = { orbAmount };
      stringResult = intl.formatToPlainString(intl3.t.W4DfeF, obj3);
    }
    cResult[2] = orbAmount;
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  if (cResult[4] === tmp8) {
    let tmp11;
    if (cResult[5] === str) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp4.orbAmountTag) {
      if (cResult[8] === tmp5) {
        let tmp13;
        if (cResult[9] === tmp11) {
          tmp13 = cResult[10];
        }
        return tmp13;
      }
    }
    const obj4 = { style: tmp4.orbAmountTag, children: items };
    items = [tmp5, tmp11];
    const tmp16 = React3(View, obj4);
    cResult[7] = tmp4.orbAmountTag;
    cResult[8] = tmp5;
    cResult[9] = tmp11;
    cResult[10] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = _false(Text_Text.Text, { variant: "text-md/semibold", accessibilityLabel: tmp8, children: str });
  cResult[4] = tmp8;
  cResult[5] = str;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((orbAmount) => {
  let items;
  let str;
  let stringResult;
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_5();
  const obj = { style: tmp.orbAmountTag, children: items };
  items = [, ];
  const obj2 = { size: "custom", color: "icon-strong", style: tmp.orbsIcon };
  items[0] = _false(OrbsIcon.OrbsIcon, obj2);
  const Text = Text_Text.Text;
  if (null == orbAmount) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.pfChQr);
  } else {
    const intl = intl3.intl;
    const obj3 = { orbAmount };
    stringResult = intl.formatToPlainString(intl3.t.W4DfeF, obj3);
  }
  const obj4 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: str };
  str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  items[1] = _false(Text, obj4);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default tmp3;