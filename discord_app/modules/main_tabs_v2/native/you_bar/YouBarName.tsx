// discord_app/modules/main_tabs_v2/native/you_bar/YouBarName.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildTagDefault from "../../../guild_tag/native/GuildTag.tsx";
import useDiscoverableApplicationStream from "../../../blocking/useDiscoverableApplicationStream.tsx";
import useUserVoiceActivity from "../../../activity_status/useUserVoiceActivity.tsx";
import UsernameWithEffectsDefault from "../../../display_name_styles/native/UsernameWithEffects.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import shouldShowActivityStatusDefault from "../../../activity_status/shouldShowActivityStatus.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import SelfPresenceStore from "../../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
function Username(userId) {
  userId = userId.userId;
  const tmp = closure_15();
  const obj = { style: null, children: null };
  const items = [tmp.usernameRow];
  obj.style = items;
  const items1 = [
    closure_1_12(UsernameWithEffectsDefault, {
      userId,
      userName: userId.username,
      defaultColor: "mobile-text-heading-primary",
      variant: "heading-md/semibold",
      lineClamp: 1,
      ellipsizeMode: "tail",
      maxFontSizeMultiplier: 1.75,
      containerStyle: tmp.username,
      style: tmp.username,
    }),
    closure_1_12(GuildTagDefault, { userId, disabledTooltip: true, containerStyles: tmp.guildTag }),
    closure_1_12(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" }),
  ];
  obj.children = items1;
  return map1(View, obj);
}
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4866);
let obj = {
  userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 },
  statusRow: { flexDirection: "row", gap: nativeDefault.space.PX_4 },
  statusEmoji: { width: 16, height: 16 },
  usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 },
  username: { flexShrink: 1 },
  guildTag: { marginLeft: 2, flexShrink: 0 },
  statusText: { flexShrink: 1 },
};
let closure_15 = createStyles.createStyles(obj);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default noop.memo(function YouName(username) {
  const userId = username.userId;
  const tmp = closure_15();
  let items = [SelfPresenceStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => status.getStatus());
  let obj = userId(504);
  const customStatusActivity = userId(9018).useCustomStatusActivity();
  let obj2 = userId(9018);
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(10542).useGameMentionsAsPlainText(state);
  let obj3 = userId(10542);
  const items1 = [
    PresenceStore,
    ApplicationStreamingStore,
    RelationshipStore,
    ChannelStore,
    PermissionStore,
    VoiceStateStore,
  ];
  let obj4 = { style: tmp.userText, children: null };
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    const items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(
      userId,
      items,
    );
    const obj3 = { userId };
    const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
    return shouldShowActivityStatusDefault({
      activities: found,
      status: stateFromStores,
      applicationStream: discoverableApplicationStream,
      voiceChannel: useUserVoiceActivity.getVisibleUserVoiceActivity(
        { userId },
        { ChannelStore, PermissionStore, VoiceStateStore },
      ).voiceChannel,
    });
  });
  const items2 = [closure_12(Username, { username: username.username, userId })];
  const obj5 = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    const obj6 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    let tmp9Result = closure_12(stateFromStores(10538), obj6);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result2 = null;
    if (null != emoji) {
      const obj7 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp11Result2 = closure_12(stateFromStores(10556), obj7);
    }
    const items3 = [tmp11Result2];
    const obj8 = {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      ellipsizeMode: "tail",
      maxFontSizeMultiplier: 1.75,
      style: tmp.statusText,
      children: null,
    };
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      humanizeStatusResult = tmp2(4708).humanizeStatus(stateFromStores);
      const tmp2Result2 = tmp2(4708);
    }
    const obj9 = { children: null };
    obj8.children = humanizeStatusResult;
    items3[1] = closure_12(tmp2(4862).Text, obj8);
    obj9.children = items3;
    tmp9Result = closure_13(closure_14, obj9);
  }
  obj5.children = tmp9Result;
  items2[1] = closure_12(View, obj5);
  obj4.children = items2;
  return closure_13(View, obj4);
});
