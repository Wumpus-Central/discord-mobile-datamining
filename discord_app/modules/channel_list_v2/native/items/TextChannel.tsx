// === Module 16558: TextChannel ===

// Module 16558 (TextChannel)
import nativeDefault from "native" /* 576 */;
import RoutingSourcesDefault from "RoutingSources" /* 1113 */;
import transitionToChannel from "transitionToChannel" /* 4767 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5219 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11176 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import GatedChannelStore from "GatedChannelStore" /* 2097 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(10373);
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4756);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  const obj = { container: { position: "relative", marginVertical, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 }, selected: null, selectedBorder: null, row: null, rowWithSubtitle: null, channelLabel: null, channelLabelText: null };
  const obj2 = { position: "relative", marginVertical, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 };
  obj.selected = { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  const rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS };
  obj.selectedBorder = rect;
  obj.row = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj.rowWithSubtitle = { flexGrow: 1, paddingVertical: 6 };
  obj.channelLabel = { flexDirection: "column", flex: 1 };
  const obj4 = { textAlign: "left", flex: 1, lineHeight, opacity: null };
  let num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  obj4.opacity = num;
  obj.channelLabelText = obj4;
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
  const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
  const items1 = [channel, id];
  const stateFromStoresObject = channel(id[16]).useStateFromStoresObject(items, () => {
    const channelRoleSubscriptionStatus = useChannelRoleSubscriptionStatus.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
    const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
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
    obj2.embeddedActivitiesCount = num;
    obj2.isSubscriptionGated = isSubscriptionGated;
    obj2.needSubscriptionToAccess = needSubscriptionToAccess;
    return obj2;
  }, items1);
  ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
  const items2 = [id, guild_id];
  const items3 = [id, isSuggestedSection];
  const callback = guild_id.useCallback(() => {
    ChannelActionCreatorsDefault.preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let tmp3;
    if (isSuggestedSection) {
      const obj2 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
      tmp3 = obj2;
    }
    transitionToChannel.transitionToChannel(id, tmp3);
  }, items3);
  let tmp9 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp9 = !muted;
  }
  let obj = channel(id[16]);
  const channelMode = channel(id[22]).getChannelMode({ muted, selected, unread: tmp9, resolvedUnreadSetting, mentionCount, locked: false, channel });
  const tmp3Result = channel(id[22]);
  const isActivitiesInTextEnabled = channel(id[23]).useIsActivitiesInTextEnabled(id);
  if (channel.isRulesChannel) {
    let channelIcon = isSuggestedSection(tmp4[12]);
    let BookCheckIcon = tmp3(tmp4[13]).BookCheckIcon;
  } else {
    channelIcon = tmp3(tmp4[14]).getChannelIcon(channel, { isRulesChannel: false });
    const tmp3Result9 = tmp3(tmp4[14]);
    BookCheckIcon = tmp3(tmp4[14]).getChannelIconComponent(channel, { isRulesChannel: false });
    const tmp3Result10 = tmp3(tmp4[14]);
  }
  const tmp3Result8 = channel(id[23]);
  const tmp3Result11 = channel(id[15]);
  const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  let obj2 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText };
  const tmp16 = isSuggestedSection(id[24])(channel);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj2.children = tmp16;
  const tmp19 = closure_13(channel(id[25]).Text, obj2);
  const tmp3Result12 = channel(id[15]);
  const children = [closure_13(isSuggestedSection(id[27]), { unread: tmp9, resolvedUnreadSetting }), , ];
  const obj3 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
  const items6 = [tmp.container, ];
  const tmp21 = isSuggestedSection(id[26]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  obj3.style = items6;
  const obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  let num = 0;
  const tmp22 = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  if (isActivitiesInTextEnabled) {
    num = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj4.embeddedActivitiesCount = num;
  obj4.isSubscriptionGated = isSubscriptionGated;
  obj4.needSubscriptionToAccess = needSubscriptionToAccess;
  obj3.accessibilityLabel = isSuggestedSection(id[29])(obj4);
  obj3.accessibilityState = { selected };
  let tmp17Result = channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED;
  if (tmp17Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp17Result = closure_13(View, obj5);
  }
  const items7 = [tmp17Result, ];
  const obj6 = { ref, style: null, children: null };
  const items8 = [tmp.row, null != subtitle && tmp.rowWithSubtitle];
  obj6.style = items8;
  const items9 = [BaseChannelIconResult, , ];
  let tmp20Result = tmp19;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: null };
    const items10 = [tmp19, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(tmp3(tmp4[15]).getChannelSubtitleTextProps(channelMode));
    const tmp3Result13 = tmp3(tmp4[15]);
    obj8.children = tmp3(tmp4[30]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = closure_13(tmp3(tmp4[25]).Text, obj8);
    obj7.children = items10;
    tmp20Result = closure_14(View, obj7);
    const tmp3Result14 = tmp3(tmp4[30]);
  }
  items9[1] = tmp20Result;
  items9[2] = closure_13(isSuggestedSection(id[31]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  obj6.children = items9;
  items7[1] = closure_14(View, obj6);
  obj3.children = items7;
  children[1] = closure_14(channel(id[28]).AnimatedPressableHighlight, obj3);
  if (selected) {
    const obj9 = { targetRef: ref, channelType: channel.type };
    selected = closure_13(isSuggestedSection(tmp4[32]), obj9);
  }
  children[2] = selected;
  return closure_14(tmp21, { children });
});