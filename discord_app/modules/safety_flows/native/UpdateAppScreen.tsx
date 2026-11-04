// === Module 20373: UpdateAppScreen ===

// Module 20373 (UpdateAppScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2963 from "module_2963" /* 2963 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

({ NativeModules: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { container: { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 }, buttonContainer: null };
let obj2 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj.buttonContainer = { marginTop: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { variant: "heading-lg/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2963.yxqMCD);
  items = [hasOwnProperty(Text_Text.Text, obj2), , ];
  const obj3 = { variant: "body-md/normal", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(_modDef2963.VBZJJg);
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = {
    onPress: function handlePress() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    },
    text: null,
    variant: "primary",
    size: "md"
  };
  const intl3 = util.intl;
  obj5.text = intl3.string(_modDef2963.o4D6fm);
  obj4.children = hasOwnProperty(components_Button_Button.Button, obj5);
  items[2] = hasOwnProperty(React4, obj4);
  obj.children = items;
  return timestampProducer(React4, obj);
};