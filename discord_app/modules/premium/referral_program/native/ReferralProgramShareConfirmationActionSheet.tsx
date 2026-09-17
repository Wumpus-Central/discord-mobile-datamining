// discord_app/modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function SharedUser(user) {
  user = user.user;
  const tmp = closure_8();
  const name = UserUtilsDefault.getName(user);
  const tmp6 = user.trialCreationResult === user(7567).CreateReferralStatus.FAIL;
  const obj2 = { style: tmp.recipientRow, children: null };
  const items = [tmp.avatarContainer];
  let erroredAvatar = tmp6;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  items[1] = erroredAvatar;
  const items1 = [
    closure_5(user(1177).Avatar, { style: items, size: user(1177).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" }),
    ,
  ];
  if (tmp6) {
    const obj4 = { children: null };
    const obj5 = { variant: "text-md/medium", color: "text-muted", style: tmp.recipientDisplayName, children: name };
    const items2 = [closure_5(tmp5(4636).Text, obj5)];
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp5(1115).intl;
    const obj7 = { userName: name };
    obj6.children = intl.format(tmp5(1115).t.RO3T4B, obj7);
    items2[1] = closure_5(tmp5(4636).Text, obj6);
    obj4.children = items2;
    let tmp9Result = closure_7(closure_6, obj4);
  } else {
    const obj8 = { variant: "text-md/medium", color: "text-strong", style: tmp.recipientDisplayName, children: name };
    tmp9Result = closure_5(tmp5(4636).Text, obj8);
  }
  items1[1] = tmp9Result;
  const obj9 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
  const intl2 = tmp5(1115).intl;
  obj9.text = intl2.string(user(1115).t["g33r/P"]);
  const obj3 = { style: items, size: user(1177).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "a" };
  obj9.icon = closure_5(user(5158).ChatIcon, {
    size: "xs",
    color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  });
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
  };
  items1[2] = closure_5(user(5062).Button, obj9);
  obj2.children = items1;
  return closure_7(View, obj2);
}
const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  content: { paddingHorizontal: nativeDefault.space.PX_16 },
  headerAsset: { alignSelf: "center" },
  header: null,
  subheader: null,
  recipientContainer: null,
  recipientRow: null,
  recipientDisplayName: null,
  erroredAvatar: null,
  avatarContainer: null,
};
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.header = {
  marginTop: nativeDefault.space.PX_16,
  alignSelf: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  textAlign: "center",
};
let obj3 = {
  marginTop: nativeDefault.space.PX_16,
  alignSelf: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  textAlign: "center",
};
obj.subheader = {
  textAlign: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj.recipientContainer = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
let obj5 = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
obj.recipientRow = {
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
obj.recipientDisplayName = { flex: 1 };
obj.erroredAvatar = { opacity: 0.5 };
obj.avatarContainer = { alignSelf: "center", justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting(
  "modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx",
);

export default function ReferralProgramShareConfirmationActionSheet(trialCreationResult) {
  require = trialCreationResult;
  const tmp = closure_8();
  if (0 === arr.filter((item) => item === trialCreationResult(dependencyMap[6]).CreateReferralStatus.SUCCESS).length) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["7VBEue"]);
    let tmp5 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.tKCltd);
    tmp5 = require;
  }
  const intl3 = tmp5(1115).intl;
  const obj = { helpdeskArticle: null };
  arr = Array.from(trialCreationResult.trialCreationResult.values());
  obj.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  const obj3 = {
    startExpanded: true,
    contentStyles: tmp.content,
    header: closure_5(tmp5(7263).BottomSheetTitleHeader, { title: null }),
    children: null,
  };
  const obj4 = { children: null };
  const formatResult = intl3.format(tmp5(1115).t.AwGSWl, obj);
  const items = [
    closure_5(View, { style: tmp.headerAsset, children: closure_5(tmp5(5780).FistBumpSpotIllustration, {}) }),
    closure_5(tmp5(4636).Text, {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.header,
      children: stringResult,
    }),
    closure_5(tmp5(4636).Text, {
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.subheader,
      children: formatResult,
    }),
  ];
  const obj8 = { style: tmp.recipientContainer, children: null };
  const obj5 = { style: tmp.headerAsset, children: closure_5(tmp5(5780).FistBumpSpotIllustration, {}) };
  const obj6 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style: tmp.header,
    children: stringResult,
  };
  const obj7 = { variant: "text-md/medium", color: "text-default", style: tmp.subheader, children: formatResult };
  obj8.children = Array.from(trialCreationResult.trialCreationResult.trialCreationResult.selectedUsers).map((user) =>
    hasOwnProperty(SharedUser, { user, trialCreationResult: trialCreationResult.get(user.id) }, user.id),
  );
  items[3] = closure_5(View, obj8);
  obj4.children = items;
  obj3.children = closure_7(tmp5(5060).Stack, obj4);
  return closure_5(tmp5(7264).BottomSheet, obj3);
}
