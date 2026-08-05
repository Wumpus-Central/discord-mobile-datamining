// discord_app/modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx
import { View } from "Stack";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";
import { nameFromUser } from "../../../../utils/UserUtils.tsx";

let c5;
let closure_6;
let error;
function SharedUser(user) {
  user = user.user;
  const tmp = callback3();
  let obj = nameFromUser;
  const name = obj.getName(user);
  const tmp6 = user.trialCreationResult === user(6810).CreateReferralStatus.FAIL;
  obj = { style: tmp.recipientRow, children: null };
  const items = [tmp.avatarContainer, ];
  let erroredAvatar = tmp6;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  obj = { style: items, size: tmp5(1297).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "Array" };
  items[1] = erroredAvatar;
  const items1 = [closure_5(user(1297).Avatar, obj), , ];
  if (tmp6) {
    const obj1 = { children: null };
    const obj2 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
    obj2[2] = tmp.recipientDisplayName;
    obj2[3] = name;
    const items2 = [tmp9(tmp5(4251).Text, obj2), ];
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp5(1236).intl;
    const obj4 = { userName: null };
    obj4[0] = name;
    obj3[2] = intl.format(tmp5(1236).t.RO3T4B, obj4);
    items2[1] = tmp9(tmp5(4251).Text, obj3);
    obj1[0] = items2;
    let tmp9Result = tmp7(closure_6, obj1);
  } else {
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj5[2] = tmp.recipientDisplayName;
    obj5[3] = name;
    tmp9Result = tmp9(tmp5(4251).Text, obj5);
  }
  items1[1] = tmp9Result;
  const obj6 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
  const intl2 = tmp5(1236).intl;
  obj6[2] = intl2.string(user(1236).t["g33r/P"]);
  const obj7 = { size: "xs", color: null };
  obj7[1] = Themes.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  obj6[3] = closure_5(user(4751).ChatIcon, obj7);
  obj6[4] = function onPress() {
    let obj = outer1_1(outer1_2[12]);
    obj.hideActionSheet();
    obj = { recipientIds: user.id };
    outer1_1(outer1_2[13]).openPrivateChannel(obj);
  };
  items1[2] = closure_5(user(4665).Button, obj6);
  obj[1] = items1;
  return closure_7(View, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { content: null, headerAsset: null, header: null, subheader: null, recipientContainer: null, recipientRow: null, recipientDisplayName: null, erroredAvatar: null, avatarContainer: null };
obj = { paddingHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { alignSelf: "center" };
obj[2] = { marginTop: require("Themes").space.PX_16, alignSelf: "center", paddingHorizontal: require("Themes").space.PX_8, textAlign: "center" };
let obj1 = { marginTop: require("Themes").space.PX_16, alignSelf: "center", paddingHorizontal: require("Themes").space.PX_8, textAlign: "center" };
obj[3] = { textAlign: "center", paddingHorizontal: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
let obj2 = { textAlign: "center", paddingHorizontal: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
obj[4] = { gap: require("Themes").space.PX_16, marginTop: require("Themes").space.PX_16, paddingBottom: 21 };
let obj3 = { gap: require("Themes").space.PX_16, marginTop: require("Themes").space.PX_16, paddingBottom: 21 };
obj[5] = { flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_12, gap: require("Themes").space.PX_12, borderRadius: require("Themes").radii.md, borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
obj[6] = { flex: 1 };
obj[7] = { opacity: 0.5 };
obj[8] = { alignSelf: "center", justifyContent: "center" };
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = { flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_12, gap: require("Themes").space.PX_12, borderRadius: require("Themes").radii.md, borderWidth: 1, borderColor: require("Themes").colors.BORDER_MUTED };
const result = require("jsxProd").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx");

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  const require = trialCreationResult;
  const tmp = callback3();
  let arr = Array.from(trialCreationResult.values());
  if (0 === arr.filter((arg0) => arg0 === trialCreationResult(table[6]).CreateReferralStatus.SUCCESS).length) {
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
  let obj1 = combined;
  obj[0] = obj1.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  obj = { startExpanded: true, contentStyles: tmp.content, header: null, children: null };
  obj[2] = callback(tmp5(5322).BottomSheetTitleHeader, { title: null });
  obj = { children: null };
  obj1 = { style: tmp.headerAsset, children: null };
  obj1[1] = callback(tmp5(5921).FistBumpSpotIllustration, {});
  const items = [callback(View, obj1), callback(tmp5(4251).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult }), , ];
  const formatResult = intl3.format(tmp5(1236).t.AwGSWl, obj);
  const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.header, children: stringResult };
  items[2] = callback(tmp5(4251).Text, { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: intl3.format(tmp5(1236).t.AwGSWl, obj) });
  const obj4 = { style: tmp.recipientContainer, children: null };
  arr = Array.from(trialCreationResult.selectedUsers);
  obj4[1] = arr.map((id) => outer1_5(outer1_9, { user: id, trialCreationResult: trialCreationResult.get(id.id) }, id.id));
  items[3] = callback(View, obj4);
  obj[0] = items;
  obj[3] = callback2(tmp5(4663).Stack, obj);
  return callback(tmp5(5323).BottomSheet, obj);
};