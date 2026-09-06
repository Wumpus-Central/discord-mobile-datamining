// discord_app/modules/safety_flows/native/UpdateAppScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2690 from "../SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ NativeModules: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: null, buttonContainer: null };
obj = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj.container = obj;
obj.buttonContainer = { marginTop: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  const tmp = closure_7();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "heading-lg/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef2690.yxqMCD);
  const items = [hasOwnProperty(Text_Text.Text, obj), ,];
  obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(_modDef2690.VBZJJg);
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  const obj1 = { style: tmp.buttonContainer, children: null };
  const obj2 = {
    onPress() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    },
    text: null,
    variant: "primary",
    size: "md",
  };
  const intl3 = util.intl;
  obj2.text = intl3.string(_modDef2690.o4D6fm);
  obj1.children = hasOwnProperty(components_Button_Button.Button, obj2);
  items[2] = hasOwnProperty(React4, obj1);
  obj.children = items;
  return timestampProducer(React4, obj);
}
