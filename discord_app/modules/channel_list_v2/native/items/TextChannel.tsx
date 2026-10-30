// === Module 18230: TextChannel ===

// Module 18230 (TextChannel)
import nativeDefault from "native" /* 575 */;
import RoutingSourcesDefault from "RoutingSources" /* 1112 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 6040 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10782 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 18231 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import GatedChannelStore from "GatedChannelStore" /* 4913 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(11027);
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  const obj = { container: { position: "relative", marginVertical, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 }, selected: null, selectedBorder: null, row: null, rowWithSubtitle: null, appSoundIcon: null, channelLabel: null, channelLabelText: null };
  const obj2 = { position: "relative", marginVertical, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 };
  obj.selected = { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  const rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS };
  obj.selectedBorder = rect;
  obj.row = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj.rowWithSubtitle = { flexGrow: 1, paddingVertical: 6 };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.appSoundIcon = { marginStart: nativeDefault.space.PX_4 };
  obj.channelLabel = { flexDirection: "column", flex: 1 };
  const obj5 = { textAlign: "left", flex: 1, lineHeight, opacity: null };
  let num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  obj5.opacity = num;
  obj.channelLabelText = obj5;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default noop.memo(function TextChannel(channel) {
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  let appSoundIcon = closure_15(muted, selected);
  const id = channel.id;
  const guild_id = channel.guild_id;
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
    const result = preloadChannelAppFrame.preloadChannelAppFrame(id);
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
  let tmp7 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp7 = !muted;
  }
  let obj = channel(id[16]);
  const channelMode = channel(id[23]).getChannelMode({ muted, selected, unread: tmp7, resolvedUnreadSetting, mentionCount, locked: false, channel });
  const tmpResult = channel(id[23]);
  const isActivitiesInTextEnabled = channel(id[24]).useIsActivitiesInTextEnabled(id);
  const tmpResult8 = channel(id[24]);
  ({ runningLabel, userMuted } = isSuggestedSection(id[25])(channel));
  if (userMuted) {
    let WaveformSlashIcon = tmp(tmp2[26]).WaveformSlashIcon;
  } else {
    WaveformSlashIcon = null;
    if (tmp12) {
      WaveformSlashIcon = tmp(tmp2[27]).WaveformIcon;
    }
  }
  if (channel.isRulesChannel) {
    let channelIcon = isSuggestedSection(tmp2[12]);
    let BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
  } else {
    channelIcon = tmp(tmp2[14]).getChannelIcon(channel, { isRulesChannel: false });
    const tmpResult9 = tmp(tmp2[14]);
    BookCheckIcon = tmp(tmp2[14]).getChannelIconComponent(channel, { isRulesChannel: false });
    const tmpResult10 = tmp(tmp2[14]);
  }
  const tmp11 = isSuggestedSection(id[25])(channel);
  const tmp14 = null != runningLabel;
  const tmpResult11 = channel(id[15]);
  const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon, isChannelLive: tmp14 });
  let obj2 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  let num = 0;
  const tmp17 = isSuggestedSection(id[28])(channel);
  if (isActivitiesInTextEnabled) {
    num = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj2.embeddedActivitiesCount = num;
  obj2.isSubscriptionGated = isSubscriptionGated;
  obj2.needSubscriptionToAccess = needSubscriptionToAccess;
  const tmp10Result1Result = isSuggestedSection(id[29])(obj2);
  const obj3 = { experimental_useNativeText: true, lineClamp: 1, style: appSoundIcon.channelLabelText };
  const tmp10Result3 = isSuggestedSection(id[29]);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj3.children = tmp17;
  const tmp22 = closure_13(channel(id[30]).Text, obj3);
  const tmpResult12 = channel(id[15]);
  const items5 = [closure_13(isSuggestedSection(id[32]), { unread: tmp7, resolvedUnreadSetting }), ];
  const obj4 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
  const items6 = [appSoundIcon.container, ];
  const tmp10Result4 = isSuggestedSection(id[31]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && appSoundIcon.selected;
  obj4.style = items6;
  let combined = tmp10Result1Result;
  if (null != runningLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tmp10Result1Result + ", " + runningLabel;
  }
  obj4.accessibilityLabel = combined;
  obj4.accessibilityState = { selected };
  let tmp20Result = channelMode === tmp(tmp2[15]).ChannelModes.SELECTED;
  if (tmp20Result) {
    const obj5 = { style: appSoundIcon.selectedBorder };
    tmp20Result = closure_13(View, obj5);
  }
  const items7 = [tmp20Result, ];
  const items8 = [appSoundIcon.row, ];
  const obj6 = { style: items8, children: null };
  items8[1] = null != subtitle && appSoundIcon.rowWithSubtitle;
  const items9 = [BaseChannelIconResult, , , ];
  let tmp23Result = tmp22;
  if (null != subtitle) {
    const obj7 = { style: appSoundIcon.channelLabel, children: null };
    const items10 = [tmp22, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(tmp(tmp2[15]).getChannelSubtitleTextProps(channelMode));
    const tmpResult13 = tmp(tmp2[15]);
    obj8.children = tmp(tmp2[34]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = closure_13(tmp(tmp2[30]).Text, obj8);
    obj7.children = items10;
    tmp23Result = closure_14(View, obj7);
    const tmpResult14 = tmp(tmp2[34]);
  }
  items9[1] = tmp23Result;
  if (null == WaveformSlashIcon) {
    const obj9 = { children: null };
    items9[2] = null;
    const obj10 = { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled };
    items9[3] = closure_13(isSuggestedSection(tmp2[35]), obj10);
    obj6.children = items9;
    items7[1] = closure_14(View, obj6);
    obj4.children = items7;
    items5[1] = closure_14(tmp(tmp2[33]).AnimatedPressableHighlight, obj4);
    obj9.children = items5;
    return closure_14(tmp10Result4, obj9);
  } else {
    isSuggestedSection(tmp2[11]).colors;
    const colors = { size: "xs", color: null, style: null };
    colors.color = userMuted ? colors.ICON_MUTED : colors.STATUS_POSITIVE;
    appSoundIcon = appSoundIcon.appSoundIcon;
    colors.style = appSoundIcon;
    closure_13(WaveformSlashIcon, colors);
    const tmp33 = userMuted ? colors.ICON_MUTED : colors.STATUS_POSITIVE;
  }
  const tmp25 = channelMode === channel(id[15]).ChannelModes.SELECTED && appSoundIcon.selected;
  const tmp31 = null != subtitle && appSoundIcon.rowWithSubtitle;
});