// === Module 12700: ContactSyncInviteFriends ===

// Module 12700 (ContactSyncInviteFriends)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import FastImageDefault from "FastImage" /* 5587 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import _modDef12701 from "module_12701" /* 12701 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const UserUtilsDefault = tmp(4404);
require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, art: { marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, button: null };
createStyles = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles.button = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default function ContactSyncInviteFriends() {
  let tmp = closure_10();
  let obj = require("initialize");
  const items = [UserStore];
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.art, source: _modDef12701 };
  const items1 = [closure_7(FastImageDefault, obj1), , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = require("util").intl;
  obj2.children = intl.string(require("util").t.ZxBpLf);
  items1[1] = closure_7(require("Text/Text").Text, obj2);
  const obj3 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.string(require("util").t["fXtCJ+"]);
  items1[2] = closure_7(require("Text/Text").Text, obj3);
  obj.children = items1;
  const items2 = [closure_8(View, obj), ];
  const obj4 = { style: tmp.button, children: null };
  const obj5 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj5.text = intl3.string(require("util").t["6Qgrev"]);
  obj5.onPress = function onPress() {
    const obj = { friend_add_type: "Invite", source_page: constants2.CONTACT_SYNC_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
    const intl = util.intl;
    let str = "";
    if (null != closure_0) {
      str = UserUtilsDefault.getUserTag(tmp6);
      const tmpResult = UserUtilsDefault;
    }
    const formatToPlainStringResult = intl.formatToPlainString(util.t["6E9a1J"], { url: "https://discord.com/", username: str });
    const tmp3 = constants2;
    showShareActionSheet.showShareActionSheet({ message: formatToPlainStringResult }, tmp3.CONTACT_SYNC_MODAL);
  };
  obj4.children = closure_7(require("components/Button/Button").Button, obj5);
  items2[1] = closure_7(View, obj4);
  obj.children = items2;
  return closure_8(closure_9, obj);
};