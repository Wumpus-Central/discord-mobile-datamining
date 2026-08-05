// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, body: null, centerText: null, headerImage: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: 87, height: 87 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = createCacheKey();
  let obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["NX+WJN"]);
  obj[1] = onClose.onClose;
  obj[2] = tmp.container;
  obj = { style: tmp.body, children: null };
  obj = { source: require("../../../../../_runtime/14355_registerAsset.js"), style: tmp.headerImage };
  const items = [callback(closure_4, obj), callback(require("../../../../design/void/native.tsx") /* Button */.Spacer, { size: 27 }), , , ];
  const obj1 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.oPV2cy);
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  items[3] = callback(require("../../../../design/void/native.tsx") /* Button */.Spacer, { size: 12 });
  const obj2 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[3] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.DdRizV);
  items[4] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2);
  obj[1] = items;
  obj[3] = callback2(closure_3, obj);
  return callback(require("../../../../components_native/common/Alert.tsx"), obj);
};