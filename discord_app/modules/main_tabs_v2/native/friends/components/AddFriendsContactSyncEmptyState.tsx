// === Module 16121: AddFriendsContactSyncEmptyState ===

// Module 16121 (AddFriendsContactSyncEmptyState)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4376 */;
import Button from "Button" /* 4815 */;
import _uploadContacts from "_uploadContacts" /* 12236 */;
import registerAssetDefault from "registerAsset" /* 12249 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null, headerImage: null, title: null, subtitle: null, subtitleText: null, trailing: null };
createCacheKey = { alignItems: "center", marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 135, width: 216, marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_16 };
let obj1 = { height: 135, width: 216, marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_8, width: "100%", textAlign: "center" };
let obj2 = { marginBottom: ThemesDefault.space.PX_8, width: "100%", textAlign: "center" };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_48, width: "100%", alignContent: "center" };
createCacheKey[4] = { textAlign: "center" };
const obj3 = { marginBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_48, width: "100%", alignContent: "center" };
createCacheKey[5] = { width: "100%", paddingBottom: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_12 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj4 = { width: "100%", paddingBottom: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.content, children: null };
  obj = { resizeMode: "contain", style: tmp.headerImage, source: registerAssetDefault };
  const items = [callback(closure_4, obj), , , ];
  obj = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["/G+nci"]);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.subtitle, children: null };
  const obj2 = { style: tmp.subtitleText, variant: "text-sm/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.format(getSystemLocale.t.OXdOPf, { learnMoreHook: _uploadContacts.handleOpenLearnMoreLink });
  obj1[1] = callback(Text.Text, obj2);
  items[2] = callback(closure_3, obj1);
  const obj4 = { style: tmp.trailing, children: null };
  const obj5 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj5[2] = intl3.string(getSystemLocale.t.QUXSpo);
  obj5[3] = function onPress() {
    callback(table[10]).openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj4[1] = callback(Button.Button, obj5);
  items[3] = callback(closure_3, obj4);
  obj[1] = items;
  return callback2(closure_3, obj);
};