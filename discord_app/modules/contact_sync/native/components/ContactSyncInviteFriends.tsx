// === Module 11922: ContactSyncInviteFriends ===

// Module 11922 (ContactSyncInviteFriends)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import preloadDefault from "preload" /* 5454 */;
import registerAssetDefault from "registerAsset" /* 11923 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
noopAll;
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
createCacheKey = { container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }, art: { marginBottom: 16 }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, button: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
createCacheKey[4] = createCacheKey;
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default function ContactSyncInviteFriends() {
  let tmp = callback3();
  let obj = _require(589);
  const items = [closure_4];
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.art, source: registerAssetDefault };
  const items1 = [callback(preloadDefault, obj1), , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = _require(1236).intl;
  obj2[4] = intl.string(_require(1236).t.ZxBpLf);
  items1[1] = callback(_require(4739).Text, obj2);
  const obj3 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = _require(1236).intl;
  obj3[3] = intl2.string(_require(1236).t["fXtCJ+"]);
  items1[2] = callback(_require(4739).Text, obj3);
  obj[1] = items1;
  const items2 = [callback2(View, obj), ];
  const obj4 = { style: tmp.button, children: null };
  const obj5 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = _require(1236).intl;
  obj5[2] = intl3.string(_require(1236).t["6Qgrev"]);
  obj5[3] = function onPress() {
    let obj = closure_1_1(closure_1_2[13]);
    obj = { friend_add_type: "Invite", source_page: closure_1_6.CONTACT_SYNC_MODAL };
    obj.track(closure_1_5.FRIEND_ADD_VIEWED, obj);
    const intl = callback(closure_1_2[11]).intl;
    let str = "";
    if (null != callback) {
      str = tmp(tmp2[14]).getUserTag(tmp6);
      const tmpResult = tmp(tmp2[14]);
    }
    const formatToPlainStringResult = intl.formatToPlainString(callback(closure_1_2[11]).t["6E9a1J"], { url: "https://discord.com/", username: str });
    tmp = closure_1_1;
    const tmp3 = closure_1_6;
    const tmp5 = callback;
    callback(closure_1_2[15]).showShareActionSheet({ message: formatToPlainStringResult }, tmp3.CONTACT_SYNC_MODAL);
  };
  obj4[1] = callback(_require(4750).Button, obj5);
  items2[1] = callback(View, obj4);
  obj[0] = items2;
  return callback2(closure_9, obj);
};