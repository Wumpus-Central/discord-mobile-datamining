// === Module 16873: ThreadChannelUserList ===

// Module 16873 (ThreadChannelUserList)
import Fragment from "Fragment" /* 21 */;
import throttleDefault from "throttle" /* 550 */;
import Constants from "Constants" /* 1085 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const RelationshipTypes = Constants.RelationshipTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function ThreadChannelUserList(channelId) {
  let disableBottomSafeZone;
  let disableStickySections;
  let insetEnd;
  let listStyleOverride;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const onUserPress = channelId.onUserPress;
  let closure_6;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  const analyticsLocations = guildId(onUserPress[7])().analyticsLocations;
  let obj = channelId(onUserPress[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = channelId(onUserPress[9]);
  const threadMemberListSections = obj2.useThreadMemberListSections(channelId, stateFromStores);
  const items1 = [threadMemberListSections];
  const obj3 = channelId(onUserPress[8]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp3 = guildId(onUserPress[10])();
  closure_6 = tmp3;
  let closure_7 = analyticsLocations.useRef(0);
  let closure_8 = analyticsLocations.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  const memo = analyticsLocations.useMemo(() => {
    let ref;
    let ref2;
    let rowHeight;
    return throttleDefault(() => {
      if (null != threadMemberListSections.getChannel(channelId)) {
        const obj2 = { guildId, channelId, y: ref2.current, height: ref.current, rowHeight };
        const obj = channelId(onUserPress[12]);
        const result = obj.subscribeChannelDimensions(obj2);
      }
    }, 50);
  }, items2);
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
    let obj;
    if (null != threadMemberListSections[arg0]) {
      const label = tmp.label;
      if (null != label) {
        if (0 !== threadMemberListSections[arg0].userIds.length) {
          const element = { type: "section", props: obj };
          const _HermesInternal = HermesInternal;
          obj = { title: "" + label + " \u2014 " + threadMemberListSections[arg0].userIds.length };
          return element;
        }
      }
    }
  }, items6);
  const callback3 = analyticsLocations.useCallback((arg0, arg1) => {
    let colorString;
    let colorStrings;
    let element1;
    let member;
    let nick;
    let obj2;
    let sourceAnalyticsLocations;
    const userIds = threadMemberListSections[arg0].userIds;
    const user = UserStore.getUser(userIds[arg1]);
    if (null != user) {
      member = GuildMemberStore.getMember(guildId, user.id);
    }
    if (null != user) {
      let obj = {
        type: RelationshipTypes.NONE,
        user,
        guildId,
        nickname: nick,
        usernameColor: colorString,
        roleColors: colorStrings,
        isNameplatedRow: true,
        canShowDisplayNameStylesFont: true,
        onPress(id) {
            if (closure_1_2 != null) {
              tmp();
            }
            const obj = { userId: id.id, sourceAnalyticsLocations, channelId };
            guildId(onUserPress[14])(obj);
          },
        start: 0 === arg1,
        end: arg1 === userIds.length - 1
      };
      nick = undefined;
      if (member != null) {
        nick = member.nick;
      }
      if (nick == null) {
        const obj4 = UserUtilsDefault;
        nick = obj4.getGlobalName(user);
      }
      colorString = undefined;
      if (member != null) {
        colorString = member.colorString;
      }
      colorStrings = undefined;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      const element = { type: "user", props: obj };
      element1 = element;
    } else {
      element1 = { type: "placeholder", props: obj2 };
      obj2 = { start: 0 === arg1, end: arg1 === userIds.length - 1 };
    }
    return element1;
  }, items7);
  let obj4 = { sections: threadMemberListSections.map((userIds) => userIds.userIds.length), getItemProps: callback3, getSectionProps: callback2, onLayout: callback, onScroll: callback1, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd };
  const UsersFastList = channelId(onUserPress[15]).UsersFastList;
  return memo(UsersFastList, obj4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx");

export default memoResult;