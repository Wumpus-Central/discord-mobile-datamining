// === Module 17403: TextChannel ===

// Module 17403 (TextChannel)
import nativeDefault from "native" /* 587 */;
import RoutingSourcesDefault from "RoutingSources" /* 1126 */;
import transitionToChannel from "transitionToChannel" /* 5669 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5951 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7360 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10620 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13684 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4799 */;
import GatedChannelStore from "GatedChannelStore" /* 4852 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import PermissionStore from "PermissionStore" /* 4880 */;
import ReadStateStore from "ReadStateStore" /* 6722 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6655 */;

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(11934);
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4945);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function TextChannel(channel) {
  const cResult = channel(id[17]).c(67);
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const tmp4 = closure_15(muted, selected);
  id = channel.id;
  const guild_id = channel.guild_id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === id) {
      let tmp12 = cResult[3];
      let tmp13 = cResult[4];
    }
    const stateFromStoresObject = tmp(tmp2[19]).useStateFromStoresObject(first, tmp12, tmp13);
    ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
    if (cResult[5] === id) {
      if (cResult[8] === id) {
        if (cResult[11] !== id) {
          class O {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          cResult[11] = id;
          cResult[12] = O;
        } else {
          class O {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        if (hasUnread) {
          class O {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
        }
        let obj2 = { muted, selected, unread: hasUnread, resolvedUnreadSetting: null, mentionCount: null, locked: false, channel: null };
        class R {
          constructor() {
            obj = closure_1(closure_2[20]);
            preloadResult = obj.preload(guild_id, id);
            obj2 = closure_0(closure_2[21]);
            result = obj2.preloadChannelAppFrame(id);
            return;
          }
        }
        obj2.mentionCount = mentionCount;
        obj2.channel = channel;
        const channelMode = tmp(tmp2[25]).getChannelMode(obj2);
        const tmpResult6 = tmp(tmp2[25]);
        const isActivitiesInTextEnabled = tmp(tmp2[26]).useIsActivitiesInTextEnabled(id);
        if (channel.isRulesChannel) {
          class O {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          let channelIcon = isSuggestedSection(tmp2[12]);
          let BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
        } else {
          class O {
            constructor() {
              obj = closure_0(closure_2[24]);
              result = obj.openChannelLongPressActionSheet(id);
              return;
            }
          }
          channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
          BookCheckIcon = tmp(tmp2[14]).getChannelIconComponent(channel, { isRulesChannel: false });
          const tmpResult8 = tmp(tmp2[14]);
        }
        const tmpResult7 = tmp(tmp2[26]);
        const obj3 = { mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon };
        tmp(tmp2[15]).BaseChannelIcon(obj3);
        const tmp24 = isSuggestedSection(tmp2[27])(channel);
        const tmpResult9 = tmp(tmp2[15]);
        const channelNameTextProps = tmp(tmp2[15]).useChannelNameTextProps(channelMode);
        class C {
          constructor() {
            obj = closure_0(closure_2[18]);
            channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_7, closure_6, closure_8);
            obj1 = { hasUnread: closure_9.hasUnread(id), mentionCount: closure_9.getMentionCount(id), resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
            ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
            tmp2 = channel;
            num = 0;
            if (null != channel) {
              num = 0;
              if (null != tmp2.id) {
                str = "";
                num = 0;
                if ("" !== tmp2.id) {
                  tmp3 = closure_5;
                  embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp2.id);
                  num2 = undefined;
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
            obj1.embeddedActivitiesCount = num;
            obj1.isSubscriptionGated = isSubscriptionGated;
            obj1.needSubscriptionToAccess = needSubscriptionToAccess;
            return obj1;
          }
        }
        const obj4 = { experimental_useNativeText: true, lineClamp: 1, style: tmp4.channelLabelText };
        const merged = Object.assign(channelNameTextProps);
        obj4.children = tmp24;
        const tmp31 = closure_13(tmp(tmp2[28]).Text, obj4);
        cResult[13] = tmp24;
        cResult[14] = tmp4.channelLabelText;
        cResult[15] = channelNameTextProps;
        cResult[16] = tmp31;
        const tmpResult10 = tmp(tmp2[15]);
      }
      const fn = function k() {
        let tmp3;
        if (isSuggestedSection) {
          const obj2 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
          tmp3 = obj2;
        }
        transitionToChannel.transitionToChannel(id, tmp3);
      };
      cResult[8] = id;
      cResult[9] = isSuggestedSection;
      cResult[10] = fn;
      class R {
        constructor() {
          obj = closure_1(closure_2[20]);
          preloadResult = obj.preload(guild_id, id);
          obj2 = closure_0(closure_2[21]);
          result = obj2.preloadChannelAppFrame(id);
          return;
        }
      }
    }
    class R {
      constructor() {
        obj = closure_1(closure_2[20]);
        preloadResult = obj.preload(guild_id, id);
        obj2 = closure_0(closure_2[21]);
        result = obj2.preloadChannelAppFrame(id);
        return;
      }
    }
    cResult[5] = id;
    cResult[6] = guild_id;
    cResult[7] = R;
    const tmpResult = tmp(tmp2[19]);
  }
  class C {
    constructor() {
      obj = closure_0(closure_2[18]);
      channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_7, closure_6, closure_8);
      obj1 = { hasUnread: closure_9.hasUnread(id), mentionCount: closure_9.getMentionCount(id), resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
      ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
      tmp2 = channel;
      num = 0;
      if (null != channel) {
        num = 0;
        if (null != tmp2.id) {
          str = "";
          num = 0;
          if ("" !== tmp2.id) {
            tmp3 = closure_5;
            embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp2.id);
            num2 = undefined;
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
      obj1.embeddedActivitiesCount = num;
      obj1.isSubscriptionGated = isSubscriptionGated;
      obj1.needSubscriptionToAccess = needSubscriptionToAccess;
      return obj1;
    }
  }
  const items1 = [channel, id];
  cResult[1] = channel;
  cResult[2] = id;
  cResult[3] = C;
  cResult[4] = items1;
  tmp13 = items1;
  tmp12 = C;
  let obj = channel(id[17]);
}) : (function TextChannel(channel) {
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const tmp = closure_15(muted, selected);
  const id = channel.id;
  const guild_id = channel.guild_id;
  const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
  const items1 = [channel, id];
  const stateFromStoresObject = channel(id[19]).useStateFromStoresObject(items, () => {
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
  let tmp8 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp8 = !muted;
  }
  let obj = channel(id[19]);
  const channelMode = channel(id[25]).getChannelMode({ muted, selected, unread: tmp8, resolvedUnreadSetting, mentionCount, locked: false, channel });
  const tmp2Result = channel(id[25]);
  const isActivitiesInTextEnabled = channel(id[26]).useIsActivitiesInTextEnabled(id);
  if (channel.isRulesChannel) {
    let channelIcon = isSuggestedSection(tmp3[12]);
    let BookCheckIcon = tmp2(tmp3[13]).BookCheckIcon;
  } else {
    channelIcon = tmp2(tmp3[14]).getChannelIcon(channel, { isRulesChannel: false });
    const tmp2Result9 = tmp2(tmp3[14]);
    BookCheckIcon = tmp2(tmp3[14]).getChannelIconComponent(channel, { isRulesChannel: false });
    const tmp2Result10 = tmp2(tmp3[14]);
  }
  const tmp2Result8 = channel(id[26]);
  const tmp2Result11 = channel(id[15]);
  const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  let obj2 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText };
  const tmp15 = isSuggestedSection(id[27])(channel);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj2.children = tmp15;
  const tmp18 = closure_13(channel(id[28]).Text, obj2);
  const tmp2Result12 = channel(id[15]);
  const items5 = [closure_13(isSuggestedSection(id[29]), { unread: tmp8, resolvedUnreadSetting }), ];
  const obj3 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
  const items6 = [tmp.container, ];
  const tmp20 = isSuggestedSection(id[34]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  obj3.style = items6;
  const obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  let num = 0;
  const tmp21 = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  if (isActivitiesInTextEnabled) {
    num = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj4.embeddedActivitiesCount = num;
  obj4.isSubscriptionGated = isSubscriptionGated;
  obj4.needSubscriptionToAccess = needSubscriptionToAccess;
  obj3.accessibilityLabel = isSuggestedSection(id[30])(obj4);
  obj3.accessibilityState = { selected };
  let tmp16Result = channelMode === tmp2(tmp3[15]).ChannelModes.SELECTED;
  if (tmp16Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp16Result = closure_13(View, obj5);
  }
  const items7 = [tmp16Result, ];
  const items8 = [tmp.row, ];
  const obj6 = { style: items8, children: null };
  items8[1] = null != subtitle && tmp.rowWithSubtitle;
  const items9 = [BaseChannelIconResult, , ];
  let tmp19Result = tmp18;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: null };
    const items10 = [tmp18, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(tmp2(tmp3[15]).getChannelSubtitleTextProps(channelMode));
    const tmp2Result13 = tmp2(tmp3[15]);
    obj8.children = tmp2(tmp3[31]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = closure_13(tmp2(tmp3[28]).Text, obj8);
    obj7.children = items10;
    tmp19Result = closure_14(View, obj7);
    const tmp2Result14 = tmp2(tmp3[31]);
  }
  const obj9 = { children: null };
  items9[1] = tmp19Result;
  items9[2] = closure_13(isSuggestedSection(id[32]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  obj6.children = items9;
  items7[1] = closure_14(View, obj6);
  obj3.children = items7;
  items5[1] = closure_14(channel(id[33]).AnimatedPressableHighlight, obj3);
  obj9.children = items5;
  return closure_14(tmp20, obj9);
}));