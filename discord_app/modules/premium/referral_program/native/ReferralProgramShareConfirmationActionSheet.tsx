// discord_app/modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import nameFromUserDefault from "../../../../utils/UserUtils.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function SharedUser(user) {
  user = user.user;
  const tmp = callback3();
  let obj = nameFromUserDefault;
  const name = obj.getName(user);
  const tmp6 = user.trialCreationResult === user(7198).CreateReferralStatus.FAIL;
  obj = { style: tmp.recipientRow, children: null };
  const items = [tmp.avatarContainer];
  let erroredAvatar = tmp6;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  obj = { style: items, size: tmp5(1297).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" };
  items[1] = erroredAvatar;
  const items1 = [closure_5(user(1297).Avatar, obj), ,];
  if (tmp6) {
    obj1 = { children: null };
    const obj2 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
    obj2[2] = tmp.recipientDisplayName;
    obj2[3] = name;
    const items2 = [tmp9(tmp5(4474).Text, obj2)];
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp5(1236).intl;
    const obj4 = { userName: null };
    obj4[0] = name;
    obj3[2] = intl.format(tmp5(1236).t.RO3T4B, obj4);
    items2[1] = tmp9(tmp5(4474).Text, obj3);
    obj1[0] = items2;
    let tmp9Result = tmp7(closure_6, obj1);
  } else {
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj5[2] = tmp.recipientDisplayName;
    obj5[3] = name;
    tmp9Result = tmp9(tmp5(4474).Text, obj5);
  }
  items1[1] = tmp9Result;
  const obj6 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
  const intl2 = tmp5(1236).intl;
  obj6[2] = intl2.string(user(1236).t["g33r/P"]);
  obj6[3] = closure_5(user(5020).ChatIcon, { size: "xs", color: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT });
  obj6[4] = function onPress() {
    let obj = closure_1_1(closure_1_2[12]);
    obj.hideActionSheet();
    obj = { recipientIds: user.id };
    closure_1_1(closure_1_2[13]).openPrivateChannel(obj);
  };
  items1[2] = closure_5(user(4928).Button, obj6);
  obj[1] = items1;
  return closure_7(View, obj);
}
const View = get_ActivityIndicator.View;
const HelpdeskArticles = ME.HelpdeskArticles;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = {
  content: null,
  headerAsset: null,
  header: null,
  subheader: null,
  recipientContainer: null,
  recipientRow: null,
  recipientDisplayName: null,
  erroredAvatar: null,
  avatarContainer: null,
};
obj = { paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { alignSelf: "center" };
obj[2] = {
  marginTop: ThemesDefault.space.PX_16,
  alignSelf: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
  textAlign: "center",
};
let obj1 = {
  marginTop: ThemesDefault.space.PX_16,
  alignSelf: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
  textAlign: "center",
};
obj[3] = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
let obj2 = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8 };
obj[4] = { gap: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_16, paddingBottom: 21 };
let obj3 = { gap: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_16, paddingBottom: 21 };
obj[5] = {
  flexDirection: "row",
  alignItems: "center",
  padding: ThemesDefault.space.PX_12,
  gap: ThemesDefault.space.PX_12,
  borderRadius: ThemesDefault.radii.md,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_MUTED,
};
obj[6] = { flex: 1 };
obj[7] = { opacity: 0.5 };
obj[8] = { alignSelf: "center", justifyContent: "center" };
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  padding: ThemesDefault.space.PX_12,
  gap: ThemesDefault.space.PX_12,
  borderRadius: ThemesDefault.radii.md,
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_MUTED,
};
const result = set.fileFinishedImporting(
  "modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx",
);

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  require = trialCreationResult;
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
  obj1 = combinedDefault;
  obj[0] = obj1.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  obj = {
    startExpanded: true,
    contentStyles: tmp.content,
    header: callback(tmp5(5621).BottomSheetTitleHeader, { title: null }),
    children: null,
  };
  obj = { children: null };
  obj1 = { style: tmp.headerAsset, children: callback(tmp5(6256).FistBumpSpotIllustration, {}) };
  const items = [
    callback(View, obj1),
    callback(tmp5(4474).Text, {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.header,
      children: stringResult,
    }),
    ,
  ];
  const formatResult = intl3.format(tmp5(1236).t.AwGSWl, obj);
  const obj2 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style: tmp.header,
    children: stringResult,
  };
  items[2] = callback(tmp5(4474).Text, {
    variant: "text-md/medium",
    color: "text-default",
    style: tmp.subheader,
    children: intl3.format(tmp5(1236).t.AwGSWl, obj),
  });
  const obj4 = { style: tmp.recipientContainer, children: null };
  arr = Array.from(trialCreationResult.selectedUsers);
  obj4[1] = arr.map((id) =>
    closure_1_5(closure_1_9, { user: id, trialCreationResult: trialCreationResult.get(id.id) }, id.id),
  );
  items[3] = callback(View, obj4);
  obj[0] = items;
  obj[3] = callback2(tmp5(4926).Stack, obj);
  return callback(tmp5(5622).BottomSheet, obj);
}
