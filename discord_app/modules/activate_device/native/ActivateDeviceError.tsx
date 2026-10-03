// === Module 13696: ActivateDeviceError ===

// Module 13696 (ActivateDeviceError)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import _modDef8762 from "module_8762" /* 8762 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13694 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = ReactCompilerGating.isReactCompilerEnabled() ? ((onRetry) => {
  const cResult = c.c(10);
  onRetry = onRetry.onRetry;
  const tmp4 = closure_8();
  if (cResult[0] !== tmp4.image) {
    const obj2 = { source: _modDef8762, style: tmp4.image };
    const tmp9 = hasOwnProperty(React3, obj2);
    cResult[0] = tmp4.image;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["3dgwPD"]);
    const tmp13 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
    const items = [tmp10, ];
    const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t["/GAO1P"]);
    items[1] = hasOwnProperty(Text_Text.Text, obj5);
    obj4.children = items;
    const tmp19 = timestampProducer(React4, obj4);
    cResult[3] = tmp19;
    let tmp14 = tmp19;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult = intl3.string(util.t["5911Lb"]);
    cResult[4] = stringResult;
    let tmp20 = stringResult;
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] !== onRetry) {
    const obj6 = { size: "lg", text: tmp20, onPress: onRetry, grow: true };
    const tmp24 = hasOwnProperty(components_Button_Button.Button, obj6);
    cResult[5] = onRetry;
    cResult[6] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp22) {
      let tmp25 = cResult[9];
    }
    return tmp25;
  }
  const obj7 = { children: null };
  const items1 = [tmp5, tmp14, tmp22];
  obj7.children = items1;
  const tmp26 = timestampProducer(React5, obj7);
  cResult[7] = tmp5;
  cResult[8] = tmp22;
  cResult[9] = tmp26;
  tmp25 = tmp26;
}) : ((onRetry) => {
  const obj = { children: null };
  const obj2 = { source: _modDef8762, style: closure_8().image };
  const items = [hasOwnProperty(React3, obj2), , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["3dgwPD"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["/GAO1P"]);
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = timestampProducer(React4, obj3);
  const obj6 = { size: "lg", text: null, onPress: null, grow: true };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["5911Lb"]);
  obj6.onPress = onRetry.onRetry;
  items[2] = hasOwnProperty(components_Button_Button.Button, obj6);
  obj.children = items;
  return timestampProducer(React5, obj);
});