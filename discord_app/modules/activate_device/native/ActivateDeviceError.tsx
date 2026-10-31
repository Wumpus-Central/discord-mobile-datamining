// === Module 15710: ActivateDeviceError ===

// Module 15710 (ActivateDeviceError)
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef14620 from "module_14620" /* 14620 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 15708 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export function ActivateDeviceError(onRetry) {
  const obj = { children: null };
  const obj2 = { source: null, style: null };
  const tmp = closure_7();
  obj2.source = _modDef14620;
  obj2.style = tmp.image;
  const items = [React4(FastImageDefault, obj2), , ];
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["3dgwPD"]);
  const items1 = [React4(Text_Text.Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: ActivateDeviceSharedStylesDefault.centerText, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["/GAO1P"]);
  items1[1] = React4(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  const obj6 = { size: "lg", text: null, onPress: null, grow: true };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["5911Lb"]);
  obj6.onPress = onRetry.onRetry;
  items[2] = React4(components_Button_Button.Button, obj6);
  obj.children = items;
  return hasOwnProperty(timestampProducer, obj);
}