// === Module 8618: StageBlockedUsersActionSheet ===

// Module 8618 (StageBlockedUsersActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5421 */;

require = fn;
function RestrictedUser(guildId) {
  ({ participant, channelId: require } = guildId);
  const tmp = closure_11();
  const user = participant.user;
  let speaker = participant.speaker;
  let obj = initialize;
  const items = [StageChannelRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => StageChannelRoleStore.isModerator(user.id, require));
  let obj1 = initialize;
  const items1 = [RelationshipStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => RelationshipStore.isBlocked(user.id));
  const avatarSource = user.getAvatarSource(guildId.guildId);
  const intl = util.intl;
  if (speaker) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.LqMmG2);
  } else {
    stringResult = tmp7;
    if (stateFromStores) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.GMZqSi);
    }
  }
  obj = { style: tmp.userContainer, children: null };
  obj = { style: tmp.avatarContainer, children: null };
  obj1 = { source: avatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32, style: tmp.avatar };
  const items2 = [closure_9(native.CutoutableAvatarImage, obj1), ];
  if (speaker) {
    const obj2 = { style: null, children: null };
    const items3 = [tmp.iconContainer];
    obj2.style = items3;
    const obj3 = { style: tmp.icon, source: user(8619), color: user(576).unsafe_rawColors.WHITE };
    obj2.children = closure_9(native.Icon, obj3);
    speaker = closure_9(View, obj2);
  }
  items2[1] = speaker;
  obj.children = items2;
  const items4 = [closure_10(View, obj), ];
  const obj4 = { style: tmp.flex, children: null };
  const obj5 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: participant.user.toString() };
  const items5 = [closure_9(Text_Text.Text, obj5), ];
  const user2 = participant.user;
  const hasUniqueUsernameResult = user2.hasUniqueUsername();
  let tmp9Result = !hasUniqueUsernameResult;
  if (!hasUniqueUsernameResult) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
    const items6 = ["#", participant.user.discriminator];
    obj6.children = items6;
    tmp9Result = closure_10(Text_Text.Text, obj6);
  }
  items5[1] = tmp9Result;
  obj4.children = items5;
  const items7 = [closure_10(View, obj4), ];
  const obj7 = { style: tmp.flex, children: null };
  const obj8 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored, children: null };
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (stateFromStores1) {
    let stringResult1 = string(t["4bDptI"]);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  const obj9 = { children: null };
  obj8.children = stringResult1;
  const items8 = [closure_9(native.LegacyText, obj8), ];
  const obj10 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const items9 = [" ", "| ", stringResult];
  obj10.children = items9;
  items8[1] = closure_10(Text_Text.Text, obj10);
  obj7.children = items8;
  items7[1] = closure_10(View, obj7);
  obj9.children = items7;
  items4[1] = closure_10(View, obj9);
  obj.children = items4;
  return closure_10(View, obj);
}
function StageBlockedUsersActionSheetHeader(arg0) {
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = closure_11();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      let obj = { style: tmp.header, children: null };
      obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl3 = util.intl;
      obj.children = intl3.string(util.t.Uzdyho);
      const items = [React7(Text_Text.Text, obj), ];
      const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl4 = util.intl;
      obj1.children = intl4.string(util.t["P/KFXz"]);
      items[1] = React7(Text_Text.Text, obj1);
      obj.children = items;
      let obj6 = obj;
    }
    return tmp2(tmp3, obj6);
  }
  if (ignoredUserCount > 0) {
    obj = { style: tmp.header, children: null };
    const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    const obj3 = { number: ignoredUserCount };
    obj2.children = intl.format(util.t.wvygk8, obj3);
    const items1 = [React7(Text_Text.Text, obj2), ];
    const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj5 = { number: ignoredUserCount };
    obj4.children = intl2.format(util.t.Ri3o33, obj5);
    items1[1] = React7(Text_Text.Text, obj4);
    obj.children = items1;
    obj6 = obj;
  } else {
    obj6 = { style: tmp.header, children: null };
    const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl5 = util.intl;
    const obj8 = { number: blockedUserCount };
    obj7.children = intl5.format(util.t.HviVA9, obj8);
    const items2 = [React7(Text_Text.Text, obj7), ];
    const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = util.intl;
    const obj10 = { number: blockedUserCount };
    obj9.children = intl6.format(util.t["28qZMU"], obj10);
    items2[1] = React7(Text_Text.Text, obj9);
    obj6.children = items2;
  }
}
const View = fn(17).View;
let closure_8 = fn(5414).STAGE_BLOCKED_USERS_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: { paddingHorizontal: 16 }, header: { padding: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, description: { textAlign: "center", marginBottom: 16 }, buttons: null, userContainer: null, avatarContainer: null, avatar: null, iconContainer: null, icon: null, flex: null, blocked: null, ignored: null };
createStyles = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingVertical: 8 };
createStyles.buttons = createStyles;
createStyles.userContainer = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginVertical: 8, width: "100%" };
createStyles.avatarContainer = { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 };
createStyles.avatar = { opacity: 0.5 };
let size = { position: "absolute", top: -4, right: 4, height: 16, width: 16, alignItems: "center", justifyContent: "center", borderRadius: 8, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
createStyles.iconContainer = size;
createStyles.icon = { height: 12, width: 12 };
createStyles.flex = { display: "flex", flexDirection: "row" };
createStyles.blocked = { color: nativeDefault.unsafe_rawColors.RED_400 };
let obj1 = { color: nativeDefault.unsafe_rawColors.RED_400 };
createStyles.ignored = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default function StageBlockedUsersActionSheet(channel) {
  channel = channel.channel;
  const onAccept = channel.onAccept;
  let items1;
  const tmp = closure_11();
  const tmp2 = items1(noop.useState(0), 2);
  dependencyMap = tmp2[1];
  let obj = channel(8620);
  const stageBlockedUsers = obj.useStageBlockedUsers(channel.id);
  let obj1 = channel(8620);
  const stageIgnoredUsers = obj1.useStageIgnoredUsers(channel.id);
  const callback = noop.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { bottom: true, style: tmp.buttons, onLayout: callback, children: null };
  obj = { text: null, onPress: null };
  const intl = channel(1114).intl;
  obj.text = intl.string(channel(1114).t.mbD50D);
  obj.onPress = function onPress() {
    onAccept(channel);
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
  };
  const items = [closure_9(channel(4975).Button, obj), ];
  obj1 = { variant: "secondary", text: null, onPress: null };
  const intl2 = channel(1114).intl;
  obj1.text = intl2.string(channel(1114).t.CZGqeT);
  obj1.onPress = function handleDismiss() {
    onAccept(4527).hideActionSheet(closure_1_8);
  };
  items[1] = closure_9(channel(4975).Button, obj1);
  obj.children = items;
  items1 = [];
  HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
  const obj2 = { scrollable: true, header: closure_9(StageBlockedUsersActionSheetHeader, { blockedUserCount: stageBlockedUsers.length, ignoredUserCount: stageIgnoredUsers.length }), footer: closure_10(channel(7123).SafeAreaPaddingView, obj), children: null };
  const obj3 = { inActionSheet: true, contentContainerStyle: tmp.container, accessibilityLabel: null, sections: null, renderItem: null, itemSize: null };
  const tmp4 = closure_10(channel(7123).SafeAreaPaddingView, obj);
  const intl3 = channel(1114).intl;
  obj3.accessibilityLabel = intl3.string(channel(1114).t["3VoRLH"]);
  const items2 = [items1.length];
  obj3.sections = items2;
  obj3.renderItem = function renderItem(arg0, arg1) {
    return React7(RestrictedUser, { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id });
  };
  obj3.itemSize = function itemSize() {
    return 48;
  };
  const items3 = [closure_9(onAccept(7072), obj3), closure_9(View, { style: { height: tmp2[0] } })];
  obj2.children = items3;
  return closure_10(channel(7150).BottomSheet, obj2);
};