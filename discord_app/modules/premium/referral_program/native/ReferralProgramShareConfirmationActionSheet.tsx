// === Module 12885: SharedUser ===

// Module 12885 (SharedUser)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef4770 from "module_4770" /* 4770 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

function SharedUser(user) {
  user = user.user;
  const tmp = callback3();
  let obj = nameFromUserDefault;
  const name = obj.getName(user);
  const tmp6 = user.trialCreationResult === user(7424).CreateReferralStatus.FAIL;
  obj = { style: tmp.recipientRow, children: null };
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp6;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  obj = { style: items, size: tmp5(1297).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "Array" };
  items[1] = erroredAvatar;
  const items1 = [callback(user(1297).Avatar, obj), , ];
  if (tmp6) {
    obj1 = { children: null };
    const obj2 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
    obj2[2] = tmp.recipientDisplayName;
    obj2[3] = name;
    const items2 = [callback(tmp5(4734).Text, obj2), ];
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp5(1236).intl;
    const obj4 = { userName: null };
    obj4[0] = name;
    obj3[2] = intl.format(tmp5(1236).t.RO3T4B, obj4);
    items2[1] = callback(tmp5(4734).Text, obj3);
    obj1[0] = items2;
    let tmp9Result = callback2(closure_6, obj1);
  } else {
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj5[2] = tmp.recipientDisplayName;
    obj5[3] = name;
    tmp9Result = callback(tmp5(4734).Text, obj5);
  }
  items1[1] = tmp9Result;
  const obj6 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
  const intl2 = tmp5(1236).intl;
  obj6[2] = intl2.string(user(1236).t["g33r/P"]);
  obj6[3] = callback(user(6867).ChatIcon, { size: "xs", color: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT });
  obj6[4] = function onPress() {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj.hideActionSheet();
    obj = { recipientIds: user.id };
    _modDef4770.openPrivateChannel(obj);
  };
  items1[2] = callback(user(4745).Button, obj6);
  obj[1] = items1;
  return callback2(View, obj);
}
const View = get_ActivityIndicator.View;
const HelpdeskArticles = ME.HelpdeskArticles;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { alignSelf: "center" };
obj[2] = { marginTop: ThemesDefault.space.PX_16, alignSelf: "center", paddingHorizontal: ThemesDefault.space.PX_8, textAlign: "center" };
obj[3] = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
obj[4] = { gap: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_16, paddingBottom: 21 };
obj[5] = { flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED };
obj[6] = { flex: 1 };
obj[7] = { opacity: 0.5 };
obj[8] = { alignSelf: "center", justifyContent: "center" };
let closure_8 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  require = trialCreationResult;
  const tmp = callback3();
  let arr = Array.from(trialCreationResult.values());
  if (0 === arr.filter((item, index) => item === trialCreationResult(table[6]).CreateReferralStatus.SUCCESS).length) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t["7VBEue"]);
    let tmp5 = require;
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.tKCltd);
    tmp5 = require;
  }
  const intl3 = tmp5(1236).intl;
  let obj = { helpdeskArticle: null };
  obj1 = combinedDefault;
  obj[0] = obj1.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  { startExpanded: true, contentStyles: tmp.content, header: callback(tmp5(6949).BottomSheetTitleHeader, { title: null }), children: null };
  obj = { children: null };
  obj1 = { style: tmp.headerAsset, children: callback(tmp5(5447).FistBumpSpotIllustration, {}) };
  const items = [callback(View, obj1), callback(tmp5(4734).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult }), , ];
  const formatResult = intl3.format(tmp5(1236).t.AwGSWl, obj);
  items[2] = callback(tmp5(4734).Text, { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: intl3.format(tmp5(1236).t.AwGSWl, obj) });
  const obj4 = { style: tmp.recipientContainer, children: null };
  arr = Array.from(trialCreationResult.selectedUsers);
  obj4[1] = arr.map((item, index) => closure_1_5(SharedUser, { user: item, trialCreationResult: trialCreationResult.get(item.id) }, item.id));
  items[3] = callback(View, obj4);
  obj[0] = items;
  obj[3] = callback2(tmp5(4733).Stack, obj);
  return callback(tmp5(6950).BottomSheet, obj);
};