// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import registerAssetDefault from "../../../../../_runtime/14748_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, body: null, centerText: null, headerImage: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { width: 87, height: 87 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = callback3();
  let obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["NX+WJN"]);
  obj[1] = onClose.onClose;
  obj[2] = tmp.container;
  obj = { style: tmp.body, children: null };
  obj = { source: registerAssetDefault, style: tmp.headerImage };
  const items = [callback(closure_4, obj), callback(Button.Spacer, { size: 27 }), , , ];
  obj1 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.oPV2cy);
  items[2] = callback(Text.Text, obj1);
  items[3] = callback(Button.Spacer, { size: 12 });
  const obj2 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl3 = getSystemLocale.intl;
  obj2[3] = intl3.string(getSystemLocale.t.DdRizV);
  items[4] = callback(Text.Text, obj2);
  obj[1] = items;
  obj[3] = callback2(closure_3, obj);
  return callback(componentDidMountDefault, obj);
};