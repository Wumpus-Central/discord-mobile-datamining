// === Module 18095: StreamFullAlert ===

// Module 18095 (StreamFullAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertDefault from "Alert" /* 5790 */;
import AVError from "AVError" /* 9131 */;
import AssetRegistryDefault from "AssetRegistry" /* 18096 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let intl3;
  let items;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp21;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AVError;
    const errorInfo = tmpResult.getErrorInfo(AVError.AVError.STREAM_FULL);
    let errorCode;
    if (errorInfo != null) {
      errorCode = errorInfo.errorCode;
    }
    const intl = intl4.intl;
    const obj2 = { errorCode };
    const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, obj2);
    cResult[0] = formatToPlainStringResult;
    first = formatToPlainStringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult = intl2.string(intl4.t.GzjdO5);
    cResult[1] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", style: closure_6.body, children: intl3.string(intl4.t.VVZDBL) };
    const Text = Text_Text.Text;
    intl3 = intl4.intl;
    const tmp16 = React3(Text, obj3);
    const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: first };
    const tmp17 = React3(Text_Text.Text, obj4);
    const obj5 = { source: AssetRegistryDefault, style: closure_6.image };
    const tmp20 = React3(Image, obj5);
    cResult[2] = tmp16;
    cResult[3] = tmp17;
    cResult[4] = tmp20;
    tmp13 = tmp20;
    tmp12 = tmp17;
    tmp11 = tmp16;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const obj6 = { title: tmp9, children: items };
    const tmp24 = AlertDefault;
    const merged = Object.assign(arg0);
    items = [tmp11, tmp12, tmp13];
    const tmp28 = hasOwnProperty(tmp24, obj6);
    cResult[5] = arg0;
    cResult[6] = tmp28;
    tmp21 = tmp28;
  } else {
    tmp21 = cResult[6];
  }
  return tmp21;
}) : ((arg0) => {
  let intl2;
  let intl3;
  let items;
  const obj = AVError;
  const errorInfo = obj.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = intl4.intl;
  const obj2 = { title: intl2.string(intl4.t.GzjdO5), children: items };
  const formatToPlainStringResult = intl.formatToPlainString(intl4.t.ejOT95, { errorCode });
  const tmp6 = AlertDefault;
  const merged = Object.assign(arg0);
  intl2 = intl4.intl;
  const obj3 = { variant: "text-md/normal", style: closure_6.body, children: intl3.string(intl4.t.VVZDBL) };
  const Text = Text_Text.Text;
  intl3 = intl4.intl;
  items = [React3(Text, obj3), , ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  items[1] = React3(Text_Text.Text, obj4);
  const obj5 = { source: AssetRegistryDefault, style: closure_6.image };
  items[2] = React3(Image, obj5);
  return hasOwnProperty(tmp6, obj2);
});
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default tmp4;