// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import componentDidMountDefault from "../../../../../components_native/common/Alert.tsx";
import registerAssetDefault from "../../../../../../_runtime/07635_registerAsset.js";
import { Image } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { DownloadLinks } from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
  const tmp = callback3();
  let obj = {};
  const merged = Object.assign(onClose);
  const intl = getSystemLocale.intl;
  obj.confirmText = intl.string(getSystemLocale.t.b8siyY);
  const intl2 = getSystemLocale.intl;
  obj.cancelText = intl2.string(getSystemLocale.t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    return callback(table[7]).openURL(constants.IOS);
  };
  obj.onCancel = onClose.onClose;
  obj = { source: registerAssetDefault, style: tmp.headerImage };
  const items = [callback(Image, obj), , ];
  obj = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.kkjNHU);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = getSystemLocale.intl;
  obj1[3] = intl4.string(getSystemLocale.t.gnkqzQ);
  items[2] = callback(Text.Text, obj1);
  obj.children = items;
  return callback2(componentDidMountDefault, obj);
};