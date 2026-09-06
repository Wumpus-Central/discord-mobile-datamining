// discord_app/modules/channel_list_v2/native/items/TextChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RoutingSourcesDefault from "../../../routing/RoutingSources.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import useChannelRoleSubscriptionStatus from "../../../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import GatedChannelStore from "../../../channel/GatedChannelStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(10118);
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  let obj = {
    container: null,
    selected: null,
    selectedBorder: null,
    row: null,
    rowWithSubtitle: null,
    channelLabel: null,
    channelLabelText: null,
  };
  obj = {
    position: "relative",
    marginVertical,
    marginHorizontal: 8,
    borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS,
    flexGrow: 1,
  };
  obj.container = obj;
  obj = { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.selected = obj;
  const rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS,
  };
  obj.selectedBorder = rect;
  obj.row = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj.rowWithSubtitle = { flexGrow: 1, paddingVertical: 6 };
  obj.channelLabel = { flexDirection: "column", flex: 1 };
  const obj1 = { textAlign: "left", flex: 1, lineHeight, opacity: null };
  let num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  obj1.opacity = num;
  obj.channelLabelText = obj1;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const tmp = closure_15(muted, selected);
  const id = channel.id;
  const guild_id = channel.guild_id;
  const ref = guild_id.useRef(null);
  let obj = channel(id[16]);
  const items = [
    ChannelStore,
    GatedChannelStore,
    PermissionStore,
    ReadStateStore,
    UserGuildSettingsStore,
    EmbeddedActivitiesStore,
  ];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      let obj = useChannelRoleSubscriptionStatus;
      const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(
        id,
        ChannelStore,
        GatedChannelStore,
        PermissionStore,
      );
      obj = {
        hasUnread: ReadStateStore.hasUnread(id),
        mentionCount: ReadStateStore.getMentionCount(id),
        resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
        embeddedActivitiesCount: null,
        isSubscriptionGated: null,
        needSubscriptionToAccess: null,
      };
      ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
      let num = 0;
      if (null != channel) {
        num = 0;
        if (null != channel.id) {
          num = 0;
          if ("" !== channel.id) {
            const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            let num2;
            if (embeddedActivitiesForChannel != null) {
              num2 = embeddedActivitiesForChannel.length;
            }
            if (num2 == null) {
              num2 = 0;
            }
            num = num2;
          }
        }
      }
      obj.embeddedActivitiesCount = num;
      obj.isSubscriptionGated = isSubscriptionGated;
      obj.needSubscriptionToAccess = needSubscriptionToAccess;
      return obj;
    },
    items1,
  );
  ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } =
    stateFromStoresObject);
  const items2 = [id, guild_id];
  const items3 = [id, isSuggestedSection];
  const callback = guild_id.useCallback(() => {
    ChannelActionCreatorsDefault.preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let obj = transitionToChannel;
    let tmp3;
    if (isSuggestedSection) {
      obj = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
      tmp3 = obj;
    }
    obj.transitionToChannel(id, tmp3);
  }, items3);
  let tmp9 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp9 = !muted;
  }
  let tmp3Result = tmp3(tmp4[22]);
  const channelMode = tmp3Result.getChannelMode({
    muted,
    selected,
    unread: tmp9,
    resolvedUnreadSetting,
    mentionCount,
    locked: false,
    channel,
  });
  tmp3Result = tmp3(tmp4[23]);
  const isActivitiesInTextEnabled = tmp3Result.useIsActivitiesInTextEnabled(id);
  if (channel.isRulesChannel) {
    let channelIcon = isSuggestedSection(tmp4[12]);
    let BookCheckIcon = tmp3(tmp4[13]).BookCheckIcon;
  } else {
    channelIcon = tmp3(tmp4[14]).getChannelIcon(channel, { isRulesChannel: false });
    const tmp3Result1 = tmp3(tmp4[14]);
    BookCheckIcon = tmp3(tmp4[14]).getChannelIconComponent(channel, { isRulesChannel: false });
    const tmp3Result2 = tmp3(tmp4[14]);
  }
  const tmp3Result3 = channel(id[15]);
  const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({
    mode: channelMode,
    source: channelIcon,
    IconComponent: BookCheckIcon,
  });
  obj = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText };
  const tmp16 = isSuggestedSection(id[24])(channel);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj.children = tmp16;
  const tmp19 = closure_13(channel(id[25]).Text, obj);
  const tmp3Result4 = channel(id[15]);
  const children = [closure_13(isSuggestedSection(id[27]), { unread: tmp9, resolvedUnreadSetting }), ,];
  obj = {
    onPressIn: callback,
    onPress: callback1,
    onLongPress: callback2,
    style: null,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityState: null,
    children: null,
  };
  const items6 = [tmp.container];
  const tmp21 = isSuggestedSection(id[26]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  obj.style = items6;
  const obj1 = {
    channel,
    unread: hasUnread,
    mentionCount,
    embeddedActivitiesCount: null,
    isSubscriptionGated: null,
    needSubscriptionToAccess: null,
  };
  let num = 0;
  const tmp22 = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  if (isActivitiesInTextEnabled) {
    num = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj1.embeddedActivitiesCount = num;
  obj1.isSubscriptionGated = isSubscriptionGated;
  obj1.needSubscriptionToAccess = needSubscriptionToAccess;
  obj.accessibilityLabel = isSuggestedSection(id[29])(obj1);
  obj.accessibilityState = { selected };
  let tmp17Result = channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED;
  if (tmp17Result) {
    const obj2 = { style: tmp.selectedBorder };
    tmp17Result = closure_13(View, obj2);
  }
  const items7 = [tmp17Result];
  const obj3 = { ref, style: null, children: null };
  const items8 = [tmp.row, null != subtitle && tmp.rowWithSubtitle];
  obj3.style = items8;
  const items9 = [BaseChannelIconResult, ,];
  let tmp20Result = tmp19;
  if (null != subtitle) {
    const obj4 = { style: tmp.channelLabel, children: null };
    const items10 = [tmp19];
    const obj5 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(tmp3(tmp4[15]).getChannelSubtitleTextProps(channelMode));
    const tmp3Result5 = tmp3(tmp4[15]);
    obj5.children = tmp3(tmp4[30]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = closure_13(tmp3(tmp4[25]).Text, obj5);
    obj4.children = items10;
    tmp20Result = closure_14(View, obj4);
    const tmp3Result6 = tmp3(tmp4[30]);
  }
  items9[1] = tmp20Result;
  items9[2] = closure_13(isSuggestedSection(id[31]), {
    channel,
    isChannelSelected: selected,
    muted,
    isSubscriptionGated,
    needSubscriptionToAccess,
    enableActivities: isActivitiesInTextEnabled,
  });
  obj3.children = items9;
  items7[1] = closure_14(View, obj3);
  obj.children = items7;
  children[1] = closure_14(channel(id[28]).AnimatedPressableHighlight, obj);
  if (selected) {
    const obj6 = { targetRef: ref, channelType: channel.type };
    selected = closure_13(isSuggestedSection(tmp4[32]), obj6);
  }
  children[2] = selected;
  return closure_14(tmp21, { children });
});
