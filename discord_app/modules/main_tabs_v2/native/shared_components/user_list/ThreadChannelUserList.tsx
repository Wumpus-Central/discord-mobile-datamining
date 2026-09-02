// === Module 16502: ? ===

// Module 16502
import importAllResult from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "trackCommunicationDisabled" /* 1991 */;
import closure_6 from "createGuildRecordFromRust" /* 1908 */;
import closure_7 from "mergeGuildAvatar" /* 1921 */;
import { RelationshipTypes } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ThreadChannelUserList(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const onUserPress = channelId.onUserPress;
  let analyticsLocations;
  let threadMemberListSections;
  let stateFromStores1;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let memo;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  analyticsLocations = guildId(onUserPress[7])().analyticsLocations;
  let obj = channelId(onUserPress[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  threadMemberListSections = channelId(onUserPress[9]).useThreadMemberListSections(channelId, stateFromStores);
  const obj2 = channelId(onUserPress[9]);
  const items1 = [threadMemberListSections];
  stateFromStores1 = channelId(onUserPress[8]).useStateFromStores(items1, () => threadMemberListSections.getChannel(channelId));
  const tmp3 = guildId(onUserPress[10])();
  closure_6 = tmp3;
  closure_7 = analyticsLocations.useRef(0);
  closure_8 = analyticsLocations.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  memo = analyticsLocations.useMemo(() => guildId(onUserPress[11])(() => {
    if (null != closure_1_4.getChannel(closure_0)) {
      let obj = closure_1_0(closure_1_2[12]);
      obj = { guildId: null, channelId: null, y: null, height: null, rowHeight: null };
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
          let obj = { type: "section", props: null };
          obj = { title: null };
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
        closure_1_1(closure_1_2[14])({ userId: id.id, sourceAnalyticsLocations: closure_3, channelId: closure_0 });
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
  obj = { sections: threadMemberListSections.map((userIds) => userIds.userIds.length), getItemProps: callback3, getSectionProps: callback2, onLayout: callback, onScroll: callback1, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd };
  return memo(channelId(onUserPress[15]).UsersFastList, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx");

export default memoResult;