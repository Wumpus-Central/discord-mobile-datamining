// discord_app/modules/safety_flows/native/UpdateAppScreen.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
({ NativeModules: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, buttonContainer: null };
obj = { flexDirection: "column", justifyContent: "center", gap: require("Themes").space.PX_8 };
obj[0] = obj;
obj[1] = { marginTop: require("Themes").space.PX_8 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { marginTop: require("Themes").space.PX_8 };
const result = require("createCacheKey").fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default function UpdateAppScreen() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "heading-lg/semibold", children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../SafetyFlows.messages.js").yxqMCD);
  const items = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), , ];
  obj = { variant: "text-md/normal", color: "text-muted", children: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl2.string(require("../SafetyFlows.messages.js").VBZJJg);
  items[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  const obj1 = { style: tmp.buttonContainer, children: null };
  const obj2 = {
    onPress() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    },
    text: null,
    variant: "primary",
    size: "md"
  };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[1] = intl3.string(require("../SafetyFlows.messages.js").o4D6fm);
  obj1[1] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj2);
  items[2] = callback(closure_4, obj1);
  obj[1] = items;
  return callback2(closure_4, obj);
};