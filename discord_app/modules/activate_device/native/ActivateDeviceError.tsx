// discord_app/modules/activate_device/native/ActivateDeviceError.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef9268 from "../../../../_runtime/metro/09268__.js";
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let obj = { children: null };
  obj = { source: _modDef9268, style: closure_8().image };
  const items = [hasOwnProperty(React3, obj), ,];
  obj = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  const obj1 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style: ActivateDeviceSharedStylesDefault.centerText,
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t["3dgwPD"]);
  const items1 = [hasOwnProperty(Text_Text.Text, obj1)];
  const obj2 = {
    variant: "text-md/medium",
    color: "text-default",
    style: ActivateDeviceSharedStylesDefault.centerText,
    children: null,
  };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t["/GAO1P"]);
  items1[1] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items1;
  items[1] = timestampProducer(React4, obj);
  const obj3 = { size: "lg", text: null, onPress: null, grow: true };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["5911Lb"]);
  obj3.onPress = onRetry.onRetry;
  items[2] = hasOwnProperty(components_Button_Button.Button, obj3);
  obj.children = items;
  return timestampProducer(React5, obj);
};
