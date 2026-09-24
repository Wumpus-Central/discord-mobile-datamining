// discord_app/modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import StageChannelRoleStore from "../../StageChannelRoleStore.tsx";

require = fn;
function RestrictedUser(guildId) {
  ({ participant, channelId: require } = guildId);
  const tmp = closure_11();
  const user = participant.user;
  let speaker = participant.speaker;
  const items = [StageChannelRoleStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    StageChannelRoleStore.isModerator(user.id, require),
  );
  const items1 = [RelationshipStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => RelationshipStore.isBlocked(user.id));
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
  const obj3 = { style: tmp.userContainer, children: null };
  const obj4 = { style: tmp.avatarContainer, children: null };
  const items2 = [
    closure_9(native.CutoutableAvatarImage, {
      source: avatarSource,
      size: native.AvatarSizes.REFRESH_MEDIUM_32,
      style: tmp.avatar,
    }),
  ];
  if (speaker) {
    const obj6 = { style: null, children: null };
    const items3 = [tmp.iconContainer];
    obj6.style = items3;
    const obj7 = { style: tmp.icon, source: user(8977), color: user(576).unsafe_rawColors.WHITE };
    obj6.children = closure_9(native.Icon, obj7);
    speaker = closure_9(View, obj6);
  }
  items2[1] = speaker;
  obj4.children = items2;
  const items4 = [closure_10(View, obj4)];
  const obj8 = { style: tmp.flex, children: null };
  const obj9 = {
    variant: "text-sm/medium",
    color: "mobile-text-heading-primary",
    children: participant.user.toString(),
  };
  const items5 = [closure_9(Text_Text.Text, obj9)];
  const user2 = participant.user;
  const hasUniqueUsernameResult = user2.hasUniqueUsername();
  let tmp9Result = !hasUniqueUsernameResult;
  if (!hasUniqueUsernameResult) {
    const obj10 = { variant: "text-sm/medium", color: "text-default", children: null };
    const items6 = ["#", participant.user.discriminator];
    obj10.children = items6;
    tmp9Result = closure_10(Text_Text.Text, obj10);
  }
  items5[1] = tmp9Result;
  obj8.children = items5;
  const items7 = [closure_10(View, obj8)];
  const obj11 = { style: tmp.flex, children: null };
  const obj12 = { style: stateFromStores1 ? tmp.blocked : tmp.ignored, children: null };
  const intl4 = util.intl;
  const string = intl4.string;
  const t = util.t;
  if (stateFromStores1) {
    let stringResult1 = string(t["4bDptI"]);
  } else {
    stringResult1 = string(t.tFY5Zb);
  }
  const obj13 = { children: null };
  obj12.children = stringResult1;
  const items8 = [closure_9(native.LegacyText, obj12)];
  const obj14 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const items9 = [" ", "| ", stringResult];
  obj14.children = items9;
  items8[1] = closure_10(Text_Text.Text, obj14);
  obj11.children = items8;
  items7[1] = closure_10(View, obj11);
  obj13.children = items7;
  items4[1] = closure_10(View, obj13);
  obj3.children = items4;
  return closure_10(View, obj3);
}
function StageBlockedUsersActionSheetHeader(arg0) {
  ({ blockedUserCount, ignoredUserCount } = arg0);
  const tmp = closure_11();
  if (blockedUserCount > 0) {
    if (ignoredUserCount > 0) {
      const obj2 = { style: tmp.header, children: null };
      const obj3 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl3 = util.intl;
      obj3.children = intl3.string(util.t.Uzdyho);
      const items = [React7(Text_Text.Text, obj3)];
      const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl4 = util.intl;
      obj4.children = intl4.string(util.t["P/KFXz"]);
      items[1] = React7(Text_Text.Text, obj4);
      obj2.children = items;
      let obj9 = obj2;
    }
    return tmp2(tmp3, obj9);
  }
  if (ignoredUserCount > 0) {
    const obj = { style: tmp.header, children: null };
    const obj5 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-lg/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = util.intl;
    const obj6 = { number: ignoredUserCount };
    obj5.children = intl.format(util.t.wvygk8, obj6);
    const items1 = [React7(Text_Text.Text, obj5)];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj8 = { number: ignoredUserCount };
    obj7.children = intl2.format(util.t.Ri3o33, obj8);
    items1[1] = React7(Text_Text.Text, obj7);
    obj.children = items1;
    obj9 = obj;
  } else {
    obj9 = { style: tmp.header, children: null };
    const obj10 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-lg/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl5 = util.intl;
    const obj11 = { number: blockedUserCount };
    obj10.children = intl5.format(util.t.HviVA9, obj11);
    const items2 = [React7(Text_Text.Text, obj10)];
    const obj12 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = util.intl;
    const obj13 = { number: blockedUserCount };
    obj12.children = intl6.format(util.t["28qZMU"], obj13);
    items2[1] = React7(Text_Text.Text, obj12);
    obj9.children = items2;
  }
}
const View = fn(17).View;
let closure_8 = fn(5719).STAGE_BLOCKED_USERS_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { paddingHorizontal: 16 },
  header: { padding: 16 },
  title: { marginTop: 16, marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center", marginBottom: 16 },
  buttons: {
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 8,
    width: "100%",
  },
  avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4, marginEnd: 12 },
  avatar: { opacity: 0.5 },
  iconContainer: null,
  icon: null,
  flex: null,
  blocked: null,
  ignored: null,
};
let size = {
  position: "absolute",
  top: -4,
  right: 4,
  height: 16,
  width: 16,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.iconContainer = size;
obj2.icon = { height: 12, width: 12 };
obj2.flex = { display: "flex", flexDirection: "row" };
let obj3 = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: 16,
  paddingVertical: 8,
};
obj2.blocked = { color: nativeDefault.unsafe_rawColors.RED_400 };
let obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
obj2.ignored = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx");

export default function StageBlockedUsersActionSheet(channel) {
  channel = channel.channel;
  const onAccept = channel.onAccept;
  let items1;
  const tmp = closure_11();
  const tmp2 = items1(noop.useState(0), 2);
  dependencyMap = tmp2[1];
  const stageBlockedUsers = channel(8978).useStageBlockedUsers(channel.id);
  const obj = channel(8978);
  const stageIgnoredUsers = channel(8978).useStageIgnoredUsers(channel.id);
  const callback = noop.useCallback((nativeEvent) => {
    dependencyMap(nativeEvent.nativeEvent.layout.height);
  }, []);
  const obj3 = { bottom: true, style: tmp.buttons, onLayout: callback, children: null };
  const obj4 = { text: null, onPress: null };
  const intl = channel(1115).intl;
  obj4.text = intl.string(channel(1115).t.mbD50D);
  obj4.onPress = function onPress() {
    onAccept(channel);
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
  };
  const items = [closure_9(channel(5273).Button, obj4)];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl2 = channel(1115).intl;
  obj5.text = intl2.string(channel(1115).t.CZGqeT);
  obj5.onPress = function handleDismiss() {
    onAccept(4796).hideActionSheet(closure_1_8);
  };
  items[1] = closure_9(channel(5273).Button, obj5);
  obj3.children = items;
  items1 = [];
  const obj2 = channel(8978);
  HermesBuiltin.arraySpread(stageIgnoredUsers, HermesBuiltin.arraySpread(stageBlockedUsers, 0));
  const obj6 = {
    scrollable: true,
    header: closure_9(StageBlockedUsersActionSheetHeader, {
      blockedUserCount: stageBlockedUsers.length,
      ignoredUserCount: stageIgnoredUsers.length,
    }),
    footer: closure_10(channel(7456).SafeAreaPaddingView, obj3),
    children: null,
  };
  const obj7 = {
    inActionSheet: true,
    contentContainerStyle: tmp.container,
    accessibilityLabel: null,
    sections: null,
    renderItem: null,
    itemSize: null,
  };
  const tmp4 = closure_10(channel(7456).SafeAreaPaddingView, obj3);
  const intl3 = channel(1115).intl;
  obj7.accessibilityLabel = intl3.string(channel(1115).t["3VoRLH"]);
  const items2 = [items1.length];
  obj7.sections = items2;
  obj7.renderItem = function renderItem(arg0, arg1) {
    return React7(RestrictedUser, { participant: items1[arg1], guildId: channel.getGuildId(), channelId: channel.id });
  };
  obj7.itemSize = function itemSize() {
    return 48;
  };
  const items3 = [closure_9(onAccept(7405), obj7), closure_9(View, { style: { height: tmp2[0] } })];
  obj6.children = items3;
  return closure_10(channel(7483).BottomSheet, obj6);
}
