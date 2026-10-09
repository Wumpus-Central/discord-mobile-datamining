// discord_app/modules/main_tabs_v2/native/you_bar/YouBarName.tsx
import c from "../../../../../_runtime/00576_c.js";
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
const View = fn(17).View;
const ActivityTypes = fn(1085).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: { flexDirection: "row", gap: nativeDefault.space.PX_4 }, statusEmoji: { width: 16, height: 16 }, usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 }, username: { flexShrink: 1 }, guildTag: { marginLeft: 2, flexShrink: 0 }, statusText: { flexShrink: 1 } };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function Username(arg0) {
  const cResult = c.c(12);
  ({ userId, username } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === tmp4.username) {
    if (cResult[1] === userId) {
      if (cResult[2] === username) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4.guildTag) {
        if (cResult[5] === userId) {
          let tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = __initData(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
          cResult[7] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] === tmp4.usernameRow) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp7) {
              let tmp15 = cResult[11];
            }
            return tmp15;
          }
        }
        const obj2 = { style: tmp4.usernameRow, children: null };
        const items = [tmp5, tmp7, tmp12];
        obj2.children = items;
        const tmp18 = __initData2(View, obj2);
        cResult[8] = tmp4.usernameRow;
        cResult[9] = tmp5;
        cResult[10] = tmp7;
        cResult[11] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { userId, disabledTooltip: true, containerStyles: tmp4.guildTag };
      const tmp10 = __initData(GuildTagDefault, obj3);
      cResult[4] = tmp4.guildTag;
      cResult[5] = userId;
      cResult[6] = tmp10;
      tmp7 = tmp10;
    }
  }
  const tmp6 = __initData(UsernameWithEffectsDefault, { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp4.username, style: tmp4.username });
  cResult[0] = tmp4.username;
  cResult[1] = userId;
  cResult[2] = username;
  cResult[3] = tmp6;
  tmp5 = tmp6;
  const obj4 = { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp4.username, style: tmp4.username };
}) : (function Username(userId) {
  userId = userId.userId;
  const tmp = closure_15();
  const obj = { style: tmp.usernameRow, children: null };
  const items = [__initData(UsernameWithEffectsDefault, { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username }), __initData(GuildTagDefault, { userId, disabledTooltip: true, containerStyles: tmp.guildTag }), __initData(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" })];
  obj.children = items;
  return __initData2(View, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouName(userId) {
  const cResult = userId(576).c(24);
  userId = userId.userId;
  const username = userId.username;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(tmp5, C);
  const tmpResult = userId(504);
  const customStatusActivity = userId(10478).useCustomStatusActivity();
  const tmpResult4 = userId(10478);
  state = undefined;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(10209).useGameMentionsAsPlainText(state);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore, , , , , ];
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    items1[1] = ApplicationStreamingStore;
    items1[2] = RelationshipStore;
    items1[3] = ChannelStore;
    items1[4] = PermissionStore;
    items1[5] = VoiceStateStore;
    cResult[2] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === userId) {
      let tmp18 = cResult[5];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp12, tmp18);
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    let obj2 = { username, userId };
    const tmp23 = closure_12(closure_16, obj2);
    cResult[6] = userId;
    cResult[7] = username;
    cResult[8] = tmp23;
    const tmpResult6 = tmp(504);
  }
  class M {
    constructor() {
      activities = closure_7.getActivities(userId);
      found = activities.filter(() => { ... });
      obj = closure_0(closure_2[21]);
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_8;
      discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
      obj2 = closure_0(closure_2[22]);
      obj1 = { userId };
      obj6 = { ChannelStore: closure_5, PermissionStore: closure_6, VoiceStateStore: closure_10 };
      obj7 = { activities: found, status: closure_1, applicationStream: discoverableApplicationStream, voiceChannel: obj2.getVisibleUserVoiceActivity(obj1, obj6).voiceChannel };
      return closure_1(closure_2[23])(obj7);
    }
  }
  cResult[3] = stateFromStores;
  cResult[4] = userId;
  cResult[5] = M;
  tmp18 = M;
  const tmpResult5 = userId(10209);
}) : (function YouName(username) {
  const userId = username.userId;
  const tmp = closure_15();
  let items = [SelfPresenceStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => status.getStatus());
  let obj = userId(504);
  const customStatusActivity = userId(10478).useCustomStatusActivity();
  let obj2 = userId(10478);
  state = undefined;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(10209).useGameMentionsAsPlainText(state);
  let obj3 = userId(10209);
  const items1 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  let obj4 = { style: tmp.userText, children: null };
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    const items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(userId, items);
    const obj3 = { userId };
    const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
    return shouldShowActivityStatusDefault({ activities: found, status: stateFromStores, applicationStream: discoverableApplicationStream, voiceChannel: useUserVoiceActivity.getVisibleUserVoiceActivity({ userId }, { ChannelStore, PermissionStore, VoiceStateStore }).voiceChannel });
  });
  const items2 = [closure_12(closure_16, { username: username.username, userId }), ];
  const obj5 = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    const obj6 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    let tmp9Result = closure_12(stateFromStores(10205), obj6);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result2 = null;
    if (null != emoji) {
      const obj7 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp11Result2 = closure_12(stateFromStores(10227), obj7);
    }
    const items3 = [tmp11Result2, ];
    const obj8 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: null };
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      humanizeStatusResult = tmp2(4923).humanizeStatus(stateFromStores);
      const tmp2Result2 = tmp2(4923);
    }
    const obj9 = { children: null };
    obj8.children = humanizeStatusResult;
    items3[1] = closure_12(tmp2(5087).Text, obj8);
    obj9.children = items3;
    tmp9Result = closure_13(closure_14, obj9);
  }
  obj5.children = tmp9Result;
  items2[1] = closure_12(View, obj5);
  obj4.children = items2;
  return closure_13(View, obj4);
}));