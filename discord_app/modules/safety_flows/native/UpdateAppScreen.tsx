// === Module 17096: UpdateAppScreen ===

// Module 17096 (UpdateAppScreen)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2597 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

({ NativeModules: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { flexDirection: "column", justifyContent: "center", gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
obj[1] = { marginTop: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  const tmp = callback3();
  let obj = { variant: "heading-lg/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(messagesProxyDefault.yxqMCD);
  const items = [callback(Text.Text, obj), , ];
  obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(messagesProxyDefault.VBZJJg);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.buttonContainer, children: null };
  const obj2 = {
    onPress() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    },
    text: null,
    variant: "primary",
    size: "md"
  };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(messagesProxyDefault.o4D6fm);
  obj1[1] = callback(Button.Button, obj2);
  items[2] = callback(closure_4, obj1);
  obj[1] = items;
  return callback2(closure_4, obj);
};