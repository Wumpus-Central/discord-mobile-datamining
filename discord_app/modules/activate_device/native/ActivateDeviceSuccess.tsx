// === Module 14153: ActivateDeviceSuccess ===

// Module 14153 (ActivateDeviceSuccess)
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import FastImageDefault from "FastImage" /* 5804 */;
import scopes2 from "scopes" /* 9330 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 14152 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4756);
let closure_7 = createStyles.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = function ActivateDeviceSuccess(onComplete) {
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
};