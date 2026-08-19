// discord_app/modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../../../stores/GuildStore.tsx";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { RelationshipTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ThreadChannelUserList(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const onUserPress = channelId.onUserPress;
  closure_6 = undefined;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  const analyticsLocations = guildId(onUserPress[7])().analyticsLocations;
  let obj = channelId(onUserPress[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const threadMemberListSections = channelId(onUserPress[9]).useThreadMemberListSections(channelId, stateFromStores);
  const obj2 = channelId(onUserPress[9]);
  const items1 = [threadMemberListSections];
  const stateFromStores1 = channelId(onUserPress[8]).useStateFromStores(items1, () => threadMemberListSections.getChannel(channelId));
  const tmp3 = guildId(onUserPress[10])();
  closure_6 = tmp3;
  closure_7 = analyticsLocations.useRef(0);
  closure_8 = analyticsLocations.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  const memo = analyticsLocations.useMemo(() => guildId(onUserPress[11])(() => {
    if (null != threadMemberListSections.getChannel(closure_0)) {
      channelId(onUserPress[12]);
      const obj = { guildId: null, channelId: null, y: null, height: null, rowHeight: null };
      obj[0] = closure_1;
      obj[1] = closure_0;
      obj[2] = ref2.current;
      obj[3] = ref.current;
      obj[4] = closure_6;
      const result = obj.subscribeChannelDimensions(obj);
    }
  }, 50), items2);
  const items3 = [memo];
  const items4 = [memo];
  const callback = analyticsLocations.useCallback((nativeEvent) => {
    closure_7.current = nativeEvent.nativeEvent.layout.height;
    memo();
  }, items3);
  const items5 = [stateFromStores1, memo];
  const callback1 = analyticsLocations.useCallback((nativeEvent) => {
    closure_8.current = nativeEvent.nativeEvent.contentOffset.y;
    memo();
  }, items4);
  const effect = analyticsLocations.useEffect(() => {
    if (null != stateFromStores1) {
      memo();
    }
  }, items5);
  const items6 = [threadMemberListSections];
  const items7 = [threadMemberListSections, guildId, onUserPress, analyticsLocations, channelId];
  const callback2 = analyticsLocations.useCallback((arg0) => {
    if (null != threadMemberListSections[arg0]) {
      const label = tmp.label;
      if (null != label) {
        if (0 !== length) {
          const obj = { title: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "" + label + " \u2014 " + length;
          obj[1] = obj;
          return obj;
        }
      }
    }
  }, items6);
  const callback3 = analyticsLocations.useCallback((arg0, arg1) => {
    const userIds = threadMemberListSections[arg0].userIds;
    user = user.getUser(userIds[arg1]);
    if (null != user) {
      const member = stateFromStores1.getMember(guildId, user.id);
    }
    if (null != user) {
      let obj = { type: null, user: null, guildId: null, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: true, canShowDisplayNameStylesFont: true, onPress: null, start: null, end: null };
      obj[0] = constants.NONE;
      obj[1] = user;
      obj[2] = guildId;
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      if (nick == null) {
        nick = guildId(onUserPress[13]).getGlobalName(user);
        const obj4 = guildId(onUserPress[13]);
      }
      obj[3] = nick;
      let colorString;
      if (member != null) {
        colorString = member.colorString;
      }
      obj[4] = colorString;
      let colorStrings;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      obj = { type: "user", props: null };
      obj[5] = colorStrings;
      obj[8] = function onPress(id) {
        if (closure_2 != null) {
          tmp();
        }
        guildId(onUserPress[14])({ userId: id.id, sourceAnalyticsLocations: closure_3, channelId: closure_0 });
      };
      obj[9] = tmp5;
      obj[10] = tmp6;
      obj[1] = obj;
    } else {
      obj = { type: "placeholder", props: null };
      obj1 = { start: null, end: null };
      obj1[0] = tmp5;
      obj1[1] = tmp6;
      obj[1] = obj1;
    }
    return obj;
  }, items7);
  obj = { sections: threadMemberListSections.map((item, index) => item.userIds.length), getItemProps: callback3, getSectionProps: callback2, onLayout: callback, onScroll: callback1, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd };
  return memo(channelId(onUserPress[15]).UsersFastList, obj);
});
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx");

export default memoResult;