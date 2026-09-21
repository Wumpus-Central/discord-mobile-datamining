// === Module 17161: ThreadChannelUserList ===

// Module 17161 (ThreadChannelUserList)
import throttleDefault from "throttle" /* 550 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx");

export default noop.memo(function ThreadChannelUserList(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const onUserPress = channelId.onUserPress;
  closure_6 = undefined;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  const analyticsLocations = guildId(onUserPress[7])().analyticsLocations;
  const items = [closure_6];
  const stateFromStores = channelId(onUserPress[8]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = channelId(onUserPress[8]);
  const threadMemberListSections = channelId(onUserPress[9]).useThreadMemberListSections(channelId, stateFromStores);
  let obj2 = channelId(onUserPress[9]);
  const items1 = [threadMemberListSections];
  const stateFromStores1 = channelId(onUserPress[8]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp3 = guildId(onUserPress[10])();
  closure_6 = tmp3;
  closure_7 = analyticsLocations.useRef(0);
  closure_8 = analyticsLocations.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  const memo = analyticsLocations.useMemo(() => throttleDefault(() => {
    if (null != threadMemberListSections.getChannel(channelId)) {
      const obj2 = { guildId, channelId, y: ref2.current, height: ref.current, rowHeight };
      const result = channelId(onUserPress[12]).subscribeChannelDimensions(obj2);
      const obj = channelId(onUserPress[12]);
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
          const element = { type: "section", props: null };
          const obj = { title: null };
          const _HermesInternal = HermesInternal;
          obj.title = "" + label + " \u2014 " + length;
          element.props = obj;
          return element;
        }
      }
    }
  }, items6);
  const callback3 = analyticsLocations.useCallback((arg0, arg1) => {
    const userIds = threadMemberListSections[arg0].userIds;
    const user = UserStore.getUser(userIds[arg1]);
    if (null != user) {
      const member = GuildMemberStore.getMember(guildId, user.id);
    }
    if (null != user) {
      const obj = { type: RelationshipTypes.NONE, user, guildId, nickname: null, usernameColor: null, roleColors: null, isNameplatedRow: true, canShowDisplayNameStylesFont: true, onPress: null, start: null, end: null };
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      if (nick == null) {
        nick = UserUtilsDefault.getGlobalName(user);
      }
      obj.nickname = nick;
      let colorString;
      if (member != null) {
        colorString = member.colorString;
      }
      obj.usernameColor = colorString;
      let colorStrings;
      if (member != null) {
        colorStrings = member.colorStrings;
      }
      const element = { type: "user", props: null };
      obj.roleColors = colorStrings;
      obj.onPress = function onPress(id) {
        if (closure_1_2 != null) {
          tmp();
        }
        guildId(onUserPress[14])({ userId: id.id, sourceAnalyticsLocations, channelId });
      };
      obj.start = tmp5;
      obj.end = tmp6;
      element.props = obj;
      let element1 = element;
    } else {
      element1 = { type: "placeholder", props: null };
      const obj2 = { start: tmp5, end: tmp6 };
      element1.props = obj2;
    }
    return element1;
  }, items7);
  const obj3 = channelId(onUserPress[8]);
  return memo(channelId(onUserPress[15]).UsersFastList, { sections: threadMemberListSections.map((userIds) => userIds.userIds.length), getItemProps: callback3, getSectionProps: callback2, onLayout: callback, onScroll: callback1, disableStickySections, disableBackgroundOverlay: true, listStyleOverride, disableBottomSafeZone, insetEnd });
});