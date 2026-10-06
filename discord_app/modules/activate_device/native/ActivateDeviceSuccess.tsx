// === Module 13715: ActivateDeviceSuccess ===

// Module 13715 (ActivateDeviceSuccess)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FastImageDefault from "FastImage" /* 5981 */;
import scopes2 from "scopes" /* 8752 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13714 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let data;
  let intl3;
  let items;
  let items1;
  let onComplete;
  let successImage;
  let tmp8;
  let tmpResult;
  let obj = react2;
  const cResult = obj.c(17);
  ({ data, onComplete, successImage } = arg0);
  const tmp4 = closure_7();
  if (null != data.twoWayLinkCode) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl5.intl;
      const stringResult = intl2.string(intl5.t.QhATl2);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    tmp8 = first;
  } else {
    const scopes = data.scopes;
    tmp8 = null;
    if (scopes.some((item) => {
      const obj = scopes2;
      return obj.isSocialLayerUmbrellaScope(item);
    })) {
      let tmp6;
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult1 = intl.string(intl5.t.vBPvK3);
        cResult[1] = stringResult1;
        tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
      }
      tmp8 = tmp6;
    }
  }
  if (cResult[2] === tmp4) {
    let tmp12;
    let tmp18;
    let tmp22;
    let tmp26;
    let tmp31;
    let tmp33;
    if (cResult[3] === successImage) {
      tmp12 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: intl3.string(intl5.t.qDtJmD) };
      const Text = Text_Text.Text;
      intl3 = intl5.intl;
      const tmp21 = React3(Text, obj2);
      cResult[5] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[5];
    }
    if (cResult[6] !== tmp8) {
      let tmp23 = null;
      if (null != tmp8) {
        const obj3 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: tmp8 };
        const Text2 = Text_Text.Text;
        tmp23 = React3(Text2, obj3);
      }
      cResult[6] = tmp8;
      cResult[7] = tmp23;
      tmp22 = tmp23;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== tmp22) {
      const obj4 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items };
      items = [tmp18, tmp22];
      const tmp30 = hasOwnProperty(View, obj4);
      cResult[8] = tmp22;
      cResult[9] = tmp30;
      tmp26 = tmp30;
    } else {
      tmp26 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl5.intl;
      const stringResult2 = intl4.string(intl5.t.cpT0Cq);
      cResult[10] = stringResult2;
      tmp31 = stringResult2;
    } else {
      tmp31 = cResult[10];
    }
    if (cResult[11] !== onComplete) {
      const obj5 = { size: "lg", text: tmp31, onPress: onComplete, grow: true };
      const tmp35 = React3(components_Button_Button.Button, obj5);
      cResult[11] = onComplete;
      cResult[12] = tmp35;
      tmp33 = tmp35;
    } else {
      tmp33 = cResult[12];
    }
    if (cResult[13] === tmp12) {
      if (cResult[14] === tmp26) {
        let tmp36;
        if (cResult[15] === tmp33) {
          tmp36 = cResult[16];
        }
        return tmp36;
      }
    }
    const obj6 = { children: items1 };
    items1 = [tmp12, tmp26, tmp33];
    const tmp39 = hasOwnProperty(metroRequire, obj6);
    cResult[13] = tmp12;
    cResult[14] = tmp26;
    cResult[15] = tmp33;
    cResult[16] = tmp39;
    tmp36 = tmp39;
  }
  let tmp13 = null;
  if (null != successImage) {
    const obj7 = { source: tmpResult.makeSource(successImage), style: tmp4.image, resizeMode: "contain" };
    const tmp16 = FastImageDefault;
    tmpResult = AvatarUtils;
    tmp13 = React3(tmp16, obj7);
  }
  cResult[2] = tmp4;
  cResult[3] = successImage;
  cResult[4] = tmp13;
  tmp12 = tmp13;
}) : ((onComplete) => {
  let data;
  let intl3;
  let intl4;
  let items1;
  let obj2;
  let stringResult;
  let successImage;
  ({ data, successImage } = onComplete);
  onComplete = onComplete.onComplete;
  const tmp = closure_7();
  if (null != data.twoWayLinkCode) {
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((item) => {
      const obj = scopes2;
      return obj.isSocialLayerUmbrellaScope(item);
    })) {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t.vBPvK3);
    }
  }
  let tmp9 = null;
  if (null != successImage) {
    let obj = { source: obj2.makeSource(successImage), style: tmp.image, resizeMode: "contain" };
    const tmp13 = FastImageDefault;
    obj2 = AvatarUtils;
    tmp9 = React3(tmp13, obj);
  }
  const items = [tmp9, , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items1 };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: intl3.string(intl5.t.qDtJmD) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items1 = [React3(Text, obj4), ];
  let tmp18Result = null;
  if (null != stringResult) {
    const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: stringResult };
    const Text2 = Text_Text.Text;
    tmp18Result = React3(Text2, obj5);
  }
  const obj6 = { children: items };
  items1[1] = tmp18Result;
  items[1] = hasOwnProperty(View, obj3);
  const obj7 = { size: "lg", text: intl4.string(intl5.t.cpT0Cq), onPress: onComplete, grow: true };
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[2] = React3(Button, obj7);
  return hasOwnProperty(metroRequire, obj6);
});
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = tmp4;