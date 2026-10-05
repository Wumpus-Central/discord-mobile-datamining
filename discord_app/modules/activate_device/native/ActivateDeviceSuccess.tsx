// === Module 13697: ActivateDeviceSuccess ===

// Module 13697 (ActivateDeviceSuccess)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import FastImageDefault from "FastImage" /* 5974 */;
import scopes2 from "scopes" /* 8720 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13696 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ data, onComplete, successImage } = arg0);
  const tmp4 = closure_7();
  if (null != data.twoWayLinkCode) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult = intl2.string(util.t.QhATl2);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
  } else {
    const scopes = data.scopes;
    let tmp8 = null;
    if (scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item))) {
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult1 = intl.string(util.t.vBPvK3);
        cResult[1] = stringResult1;
        let tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
      }
      tmp8 = tmp6;
    }
    if (cResult[2] === tmp4) {
      if (cResult[3] === successImage) {
        let tmp13 = cResult[4];
      }
      const _Symbol3 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
        const intl3 = util.intl;
        obj2.children = intl3.string(util.t.qDtJmD);
        const tmp22 = React4(Text_Text.Text, obj2);
        cResult[5] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        let tmp24 = null;
        if (null != tmp8) {
          const obj3 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: tmp8 };
          tmp24 = React4(Text_Text.Text, obj3);
        }
        cResult[6] = tmp8;
        cResult[7] = tmp24;
        let tmp23 = tmp24;
      } else {
        tmp23 = cResult[7];
      }
      if (cResult[8] !== tmp23) {
        const obj4 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
        const items = [tmp19, tmp23];
        obj4.children = items;
        const tmp31 = hasOwnProperty(View, obj4);
        cResult[8] = tmp23;
        cResult[9] = tmp31;
        let tmp27 = tmp31;
      } else {
        tmp27 = cResult[9];
      }
      const _Symbol4 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const stringResult2 = intl4.string(util.t.cpT0Cq);
        cResult[10] = stringResult2;
        let tmp32 = stringResult2;
      } else {
        tmp32 = cResult[10];
      }
      if (cResult[11] !== onComplete) {
        const obj5 = { size: "lg", text: tmp32, onPress: onComplete, grow: true };
        const tmp36 = React4(components_Button_Button.Button, obj5);
        cResult[11] = onComplete;
        cResult[12] = tmp36;
        let tmp34 = tmp36;
      } else {
        tmp34 = cResult[12];
      }
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp27) {
          if (cResult[15] === tmp34) {
            let tmp37 = cResult[16];
          }
          return tmp37;
        }
      }
      const obj6 = { children: null };
      const items1 = [tmp13, tmp27, tmp34];
      obj6.children = items1;
      const tmp40 = hasOwnProperty(timestampProducer, obj6);
      cResult[13] = tmp13;
      cResult[14] = tmp27;
      cResult[15] = tmp34;
      cResult[16] = tmp40;
      tmp37 = tmp40;
    }
    let tmp14 = null;
    if (null != successImage) {
      const obj7 = { source: null, style: null, resizeMode: "contain" };
      const tmp17 = FastImageDefault;
      obj7.source = AvatarUtils.makeSource(successImage);
      obj7.style = tmp4.image;
      tmp14 = React4(tmp17, obj7);
      const tmpResult = AvatarUtils;
    }
    cResult[2] = tmp4;
    cResult[3] = successImage;
    cResult[4] = tmp14;
    tmp13 = tmp14;
  }
}) : ((onComplete) => {
  ({ data, successImage } = onComplete);
  if (null != data.twoWayLinkCode) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((item) => scopes2.isSocialLayerUmbrellaScope(item))) {
      const intl = util.intl;
      stringResult = intl.string(util.t.vBPvK3);
    }
  }
  let tmp9 = null;
  if (null != successImage) {
    const obj = { source: null, style: null, resizeMode: "contain" };
    const tmp13 = FastImageDefault;
    obj.source = AvatarUtils.makeSource(successImage);
    obj.style = tmp.image;
    tmp9 = React4(tmp13, obj);
  }
  const items = [tmp9, , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.qDtJmD);
  const items1 = [React4(Text_Text.Text, obj4), ];
  let tmp18Result = null;
  if (null != stringResult) {
    const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: stringResult };
    tmp18Result = React4(Text_Text.Text, obj5);
  }
  const obj6 = { children: null };
  items1[1] = tmp18Result;
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  const obj7 = { size: "lg", text: null, onPress: null, grow: true };
  const intl4 = util.intl;
  obj7.text = intl4.string(util.t.cpT0Cq);
  obj7.onPress = onComplete.onComplete;
  items[2] = React4(components_Button_Button.Button, obj7);
  obj6.children = items;
  return hasOwnProperty(timestampProducer, obj6);
});