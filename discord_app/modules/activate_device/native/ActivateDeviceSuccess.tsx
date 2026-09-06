// === Module 13885: ActivateDeviceSuccess ===

// Module 13885 (ActivateDeviceSuccess)
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import FastImageDefault from "FastImage" /* 5587 */;
import scopes2 from "scopes" /* 9238 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13884 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(4560);
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
    let obj = { source: null, style: null, resizeMode: "contain" };
    let obj1 = AvatarUtils;
    obj.source = obj1.makeSource(successImage);
    obj.style = tmp.image;
    tmp9 = React4(FastImageDefault, obj);
  }
  const items = [tmp9, , ];
  obj = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
  const intl3 = util.intl;
  obj.children = intl3.string(util.t.qDtJmD);
  const items1 = [React4(Text_Text.Text, obj), ];
  let tmp18Result = null;
  if (null != stringResult) {
    obj1 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: stringResult };
    tmp18Result = tmp18(tmp19(4556).Text, obj1);
  }
  const obj2 = { children: null };
  items1[1] = tmp18Result;
  obj.children = items1;
  items[1] = hasOwnProperty(View, obj);
  const obj3 = { size: "lg", text: null, onPress: null, grow: true };
  const intl4 = tmp19(1114).intl;
  obj3.text = intl4.string(util.t.cpT0Cq);
  obj3.onPress = onComplete.onComplete;
  items[2] = React4(components_Button_Button.Button, obj3);
  obj2.children = items;
  return hasOwnProperty(timestampProducer, obj2);
};