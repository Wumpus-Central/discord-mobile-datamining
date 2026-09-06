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
  let obj = UserUtilsDefault;
  const name = obj.getName(user);
  const tmp6 = user.trialCreationResult === user(7453).CreateReferralStatus.FAIL;
  obj = { style: tmp.recipientRow, children: null };
  const items = [tmp.avatarContainer];
  let erroredAvatar = tmp6;
  if (tmp6) {
    erroredAvatar = tmp.erroredAvatar;
  }
  obj = { style: items, size: tmp5(1178).AvatarSizes.REFRESH_MEDIUM_32, user, guildId: "Array" };
  items[1] = erroredAvatar;
  const items1 = [closure_5(user(1178).Avatar, obj), ,];
  if (tmp6) {
    const obj1 = { children: null };
    const obj2 = { variant: "text-md/medium", color: "text-muted", style: tmp.recipientDisplayName, children: name };
    const items2 = [closure_5(tmp5(4556).Text, obj2)];
    const obj3 = { variant: "text-md/medium", color: "text-muted", children: null };
    const intl = tmp5(1114).intl;
    const obj4 = { userName: name };
    obj3.children = intl.format(tmp5(1114).t.RO3T4B, obj4);
    items2[1] = closure_5(tmp5(4556).Text, obj3);
    obj1.children = items2;
    let tmp9Result = closure_7(closure_6, obj1);
  } else {
    const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.recipientDisplayName, children: name };
    tmp9Result = closure_5(tmp5(4556).Text, obj5);
  }
  items1[1] = tmp9Result;
  const obj6 = { variant: "secondary", size: "sm", text: null, icon: null, onPress: null };
  const intl2 = tmp5(1114).intl;
  obj6.text = intl2.string(user(1114).t["g33r/P"]);
  obj6.icon = closure_5(user(5071).ChatIcon, {
    size: "xs",
    color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  });
  obj6.onPress = function onPress() {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { recipientIds: user.id };
    ChannelActionCreatorsDefault.openPrivateChannel(obj);
  };
  items1[2] = closure_5(user(4975).Button, obj6);
  obj.children = items1;
  return closure_7(View, obj);
}
const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
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
obj = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.content = obj;
obj.headerAsset = { alignSelf: "center" };
obj.header = {
  marginTop: nativeDefault.space.PX_16,
  alignSelf: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  textAlign: "center",
};
let obj1 = {
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
let obj2 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj.recipientContainer = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
let obj3 = { gap: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_16, paddingBottom: 21 };
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
  let arr = Array.from(trialCreationResult.values());
  if (0 === arr.filter((item) => item === trialCreationResult(dependencyMap[6]).CreateReferralStatus.SUCCESS).length) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["7VBEue"]);
    let tmp5 = require;
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.tKCltd);
    tmp5 = require;
  }
  const intl3 = tmp5(1114).intl;
  let obj = { helpdeskArticle: null };
  let obj1 = HelpdeskUtilsDefault;
  obj.helpdeskArticle = obj1.getArticleURL(HelpdeskArticles.REFERRAL_PROGRAM);
  obj = {
    startExpanded: true,
    contentStyles: tmp.content,
    header: closure_5(tmp5(7149).BottomSheetTitleHeader, { title: null }),
    children: null,
  };
  obj = { children: null };
  obj1 = { style: tmp.headerAsset, children: closure_5(tmp5(5692).FistBumpSpotIllustration, {}) };
  const items = [
    closure_5(View, obj1),
    closure_5(tmp5(4556).Text, {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.header,
      children: stringResult,
    }),
    ,
  ];
  const formatResult = intl3.format(tmp5(1114).t.AwGSWl, obj);
  const obj2 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style: tmp.header,
    children: stringResult,
  };
  items[2] = closure_5(tmp5(4556).Text, {
    variant: "text-md/medium",
    color: "text-default",
    style: tmp.subheader,
    children: intl3.format(tmp5(1114).t.AwGSWl, obj),
  });
  const obj4 = { style: tmp.recipientContainer, children: null };
  arr = Array.from(trialCreationResult.selectedUsers);
  obj4.children = arr.map((user) =>
    hasOwnProperty(SharedUser, { user, trialCreationResult: trialCreationResult.get(user.id) }, user.id),
  );
  items[3] = closure_5(View, obj4);
  obj.children = items;
  obj.children = closure_7(tmp5(4973).Stack, obj);
  return closure_5(tmp5(7150).BottomSheet, obj);
}
