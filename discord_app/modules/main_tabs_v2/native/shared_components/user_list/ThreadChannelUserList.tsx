// discord_app/modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx
import throttleDefault from "../../../../../../_runtime/00550_throttle.js";
import UserUtilsDefault from "../../../../../utils/UserUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = fn;
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx",
);

export default noop.memo(function ThreadChannelUserList(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const onUserPress = channelId.onUserPress;
  closure_6 = undefined;
  ({ disableStickySections, listStyleOverride, disableBottomSafeZone, insetEnd } = channelId);
  const analyticsLocations = guildId(onUserPress[7])().analyticsLocations;
  let obj = channelId(onUserPress[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const threadMemberListSections = channelId(onUserPress[9]).useThreadMemberListSections(channelId, stateFromStores);
  const obj2 = channelId(onUserPress[9]);
  const items1 = [threadMemberListSections];
  const stateFromStores1 = channelId(onUserPress[8]).useStateFromStores(items1, () =>
    ChannelStore.getChannel(channelId),
  );
  const tmp3 = guildId(onUserPress[10])();
  closure_6 = tmp3;
  closure_7 = analyticsLocations.useRef(0);
  closure_8 = analyticsLocations.useRef(0);
  const items2 = [channelId, guildId, tmp3];
  const memo = analyticsLocations.useMemo(
    () =>
      throttleDefault(() => {
        if (null != threadMemberListSections.getChannel(channelId)) {
          channelId(onUserPress[12]);
          const obj = { guildId, channelId, y: ref2.current, height: ref.current, rowHeight };
          const result = obj.subscribeChannelDimensions(obj);
        }
      }, 50),
    items2,
  );
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
      let obj = {
        type: RelationshipTypes.NONE,
        user,
        guildId,
        nickname: null,
        usernameColor: null,
        roleColors: null,
        isNameplatedRow: true,
        canShowDisplayNameStylesFont: true,
        onPress: null,
        start: null,
        end: null,
      };
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
      obj = { start: tmp5, end: tmp6 };
      element1.props = obj;
    }
    return element1;
  }, items7);
  obj = {
    sections: threadMemberListSections.map((userIds) => userIds.userIds.length),
    getItemProps: callback3,
    getSectionProps: callback2,
    onLayout: callback,
    onScroll: callback1,
    disableStickySections,
    disableBackgroundOverlay: true,
    listStyleOverride,
    disableBottomSafeZone,
    insetEnd,
  };
  return memo(channelId(onUserPress[15]).UsersFastList, obj);
});
