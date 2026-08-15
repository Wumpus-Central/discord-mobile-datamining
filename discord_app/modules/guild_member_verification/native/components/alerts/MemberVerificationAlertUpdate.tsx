// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { DownloadLinks } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/08542_registerAsset.js";
import { componentDidMount } from "../../../../../components_native/common/Alert.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const result = require("ME").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

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
  obj = { source: registerAsset, style: tmp.headerImage };
  const items = [callback(Image, obj), , ];
  obj = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.kkjNHU);
  items[1] = callback(Text.Text, obj);
  const obj1 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = getSystemLocale.intl;
  obj1[3] = intl4.string(getSystemLocale.t.gnkqzQ);
  items[2] = callback(Text.Text, obj1);
  obj.children = items;
  return callback2(componentDidMount, obj);
};