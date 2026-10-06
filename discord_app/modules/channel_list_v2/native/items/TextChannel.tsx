// === Module 16194: TextChannel ===

// Module 16194 (TextChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import RoutingSourcesDefault from "RoutingSources" /* 1124 */;
import transitionToChannel2 from "transitionToChannel" /* 4907 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5804 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11711 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const View = react_native.View;
({ CHANNEL_MARGIN_VERTICAL: unpackModuleId, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let obj4;
  let rect;
  const obj = { container: { position: "relative", marginVertical: unpackModuleId, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 }, selected: { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED }, selectedBorder: rect, row: { padding: 8, flexDirection: "row", alignItems: "center" }, rowWithSubtitle: { flexGrow: 1, paddingVertical: 6 }, channelLabel: { flexDirection: "column", flex: 1 }, channelLabelText: obj4 };
  ({ position: "relative", marginVertical: unpackModuleId, marginHorizontal: 8, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED });
  rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS };
  obj4 = { textAlign: "left", flex: 1, lineHeight, opacity: num };
  num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  return obj;
});
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let hasUnread;
  let id;
  let isSubscriptionGated;
  let isSuggestedSection;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  const tmp2 = id;
  let obj = channel(id[17]);
  const cResult = obj.c(71);
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const isRulesChannel = channel.isRulesChannel;
  let tmp4 = closure_15(muted, selected);
  id = channel.id;
  const guild_id = channel.guild_id;
  guild_id.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    let tmp13;
    let tmp14;
    if (cResult[2] === id) {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    const tmpResult = channel(tmp2[19]);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp13, tmp14);
    ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
    if (cResult[5] === id) {
      if (cResult[8] === id) {
        let channelIcon;
        let BookCheckIcon;
        if (cResult[11] !== id) {
          class V {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          cResult[11] = id;
          cResult[12] = V;
        } else {
          class V {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
        }
        let obj2 = { muted, selected, unread: hasUnread && !muted, resolvedUnreadSetting, mentionCount: null, locked: false, channel };
        const tmp19 = hasUnread && !muted;
        const tmpResult6 = channel(tmp2[24]);
        class P {
          constructor() {
            const obj = ChannelActionCreatorsDefault;
            obj.preload(guild_id, id);
          }
        }
        const channelMode = tmpResult6.getChannelMode(obj2);
        const tmpResult7 = channel(tmp2[25]);
        const isActivitiesInTextEnabled = tmpResult7.useIsActivitiesInTextEnabled(id);
        if (isRulesChannel) {
          class V {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          channelIcon = isSuggestedSection(tmp2[12]);
          BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
        } else {
          class V {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
          channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
          const tmpResult8 = channel(tmp2[14]);
          BookCheckIcon = tmpResult8.getChannelIconComponent(channel, { isRulesChannel: false });
        }
        const obj3 = { mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon };
        const tmpResult9 = channel(tmp2[15]);
        tmpResult9.BaseChannelIcon(obj3);
        const tmp25 = isSuggestedSection(tmp2[26])(channel);
        const channelLabelText = tmp4.channelLabelText;
        const tmpResult10 = channel(tmp2[15]);
        const channelNameTextProps = tmpResult10.useChannelNameTextProps(channelMode);
        if (cResult[13] === tmp25) {
          class V {
            constructor() {
              const obj = openChannelLongPressActionSheet;
              const result = obj.openChannelLongPressActionSheet(id);
            }
          }
        }
        const obj4 = { experimental_useNativeText: true, lineClamp: 1, style: channelLabelText, children: tmp25 };
        class S {
          constructor() {
            let isSubscriptionGated;
            let needSubscriptionToAccess;
            let num;
            const obj = useChannelRoleSubscriptionStatus;
            const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
            const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
            ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
            num = 0;
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
            return obj2;
          }
        }
        const Text = tmp(tmp2[27]).Text;
        const merged = Object.assign(channelNameTextProps);
        cResult[13] = tmp25;
        cResult[14] = tmp4.channelLabelText;
        cResult[15] = channelNameTextProps;
        cResult[16] = closure_13(Text, obj4);
        const tmp31 = closure_13(Text, obj4);
      }
      const fn = function j() {
        let tmp4;
        const transitionToChannel = transitionToChannel2.transitionToChannel;
        transitionToChannel2;
        if (isSuggestedSection) {
          tmp4 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
          const obj = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
        }
        transitionToChannel(id, tmp4);
      };
      cResult[8] = id;
      cResult[9] = isSuggestedSection;
      cResult[10] = fn;
      class P {
        constructor() {
          const obj = ChannelActionCreatorsDefault;
          obj.preload(guild_id, id);
        }
      }
    }
    class P {
      constructor() {
        const obj = ChannelActionCreatorsDefault;
        obj.preload(guild_id, id);
      }
    }
    let num2 = 5;
    cResult[5] = id;
    cResult[6] = guild_id;
    cResult[7] = P;
  }
  class S {
    constructor() {
      let isSubscriptionGated;
      let needSubscriptionToAccess;
      let num;
      const obj = useChannelRoleSubscriptionStatus;
      const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
      const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
      ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
      num = 0;
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
      return obj2;
    }
  }
  const items1 = [channel, id];
  cResult[1] = channel;
  cResult[2] = id;
  cResult[3] = S;
  cResult[4] = items1;
  tmp14 = items1;
  tmp13 = S;
}) : ((channel) => {
  let BookCheckIcon;
  let channelIcon;
  let hasUnread;
  let isSubscriptionGated;
  let isSuggestedSection;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let num;
  let obj4;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  let tmp15Result;
  let tmp16;
  let tmp3Result14;
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  const isRulesChannel = channel.isRulesChannel;
  const tmp = closure_15(muted, selected);
  const id = channel.id;
  const guild_id = channel.guild_id;
  const ref = guild_id.useRef(null);
  let tmp4 = id;
  let obj = channel(id[19]);
  const items = [ChannelStore, GatedChannelStore, PermissionStore, ReadStateStore, UserGuildSettingsStore, EmbeddedActivitiesStore];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isSubscriptionGated;
    let needSubscriptionToAccess;
    let num;
    const obj = useChannelRoleSubscriptionStatus;
    const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore);
    const obj2 = { hasUnread: ReadStateStore.hasUnread(id), mentionCount: ReadStateStore.getMentionCount(id), resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
    ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
    num = 0;
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
    return obj2;
  }, items1);
  ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
  const items2 = [id, guild_id];
  const embeddedActivitiesCount = stateFromStoresObject.embeddedActivitiesCount;
  const items3 = [id, isSuggestedSection];
  const callback = guild_id.useCallback(() => {
    const obj = ChannelActionCreatorsDefault;
    obj.preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let tmp4;
    const transitionToChannel = transitionToChannel2.transitionToChannel;
    transitionToChannel2;
    if (isSuggestedSection) {
      tmp4 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
      const obj = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
    }
    transitionToChannel(id, tmp4);
  }, items3);
  let tmp9 = hasUnread;
  const callback2 = guild_id.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp9 = !muted;
  }
  const tmp3Result = channel(tmp4[24]);
  const channelMode = tmp3Result.getChannelMode({ muted, selected, unread: tmp9, resolvedUnreadSetting, mentionCount, locked: false, channel });
  const tmp3Result8 = channel(tmp4[25]);
  const isActivitiesInTextEnabled = tmp3Result8.useIsActivitiesInTextEnabled(id);
  if (isRulesChannel) {
    channelIcon = isSuggestedSection(tmp4[12]);
    BookCheckIcon = tmp3(tmp4[13]).BookCheckIcon;
  } else {
    const tmp3Result9 = channel(tmp4[14]);
    channelIcon = tmp3Result9.getChannelIcon(channel, { isRulesChannel: false });
    const tmp3Result10 = channel(tmp4[14]);
    BookCheckIcon = tmp3Result10.getChannelIconComponent(channel, { isRulesChannel: false });
  }
  const tmp3Result11 = channel(tmp4[15]);
  let obj2 = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText, children: tmp16 };
  const BaseChannelIconResult = tmp3Result11.BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  tmp16 = isSuggestedSection(tmp4[26])(channel);
  const Text = tmp3(tmp4[27]).Text;
  const tmp3Result12 = channel(tmp4[15]);
  const merged = Object.assign(tmp3Result12.useChannelNameTextProps(channelMode));
  const tmp19 = closure_13(Text, obj2);
  const children = [, , ];
  const tmp21 = isSuggestedSection(tmp4[34]);
  children[0] = closure_13(isSuggestedSection(tmp4[28]), { unread: tmp9, resolvedUnreadSetting });
  const obj3 = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: items6, accessible: true, accessibilityRole: "button", accessibilityLabel: tmp15Result(obj4), accessibilityState: { selected }, children: items7 };
  items6 = [tmp.container, ];
  const AnimatedPressableHighlight = tmp3(tmp4[32]).AnimatedPressableHighlight;
  items6[1] = channelMode === channel(tmp4[15]).ChannelModes.SELECTED && tmp.selected;
  obj4 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: num, isSubscriptionGated, needSubscriptionToAccess };
  num = 0;
  channelMode === channel(tmp4[15]).ChannelModes.SELECTED && tmp.selected;
  tmp15Result = isSuggestedSection(tmp4[29]);
  if (isActivitiesInTextEnabled) {
    num = embeddedActivitiesCount;
  }
  let tmp17Result = channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED;
  if (tmp17Result) {
    const obj5 = { style: tmp.selectedBorder };
    tmp17Result = closure_13(View, obj5);
  }
  items7 = [tmp17Result, ];
  const obj6 = { ref, style: items8, children: items9 };
  items8 = [tmp.row, null != subtitle && tmp.rowWithSubtitle];
  items9 = [BaseChannelIconResult, , ];
  let tmp20Result = tmp19;
  if (null != subtitle) {
    const obj7 = { style: tmp.channelLabel, children: items10 };
    items10 = [tmp19, ];
    const obj8 = { experimental_useNativeText: true, lineClamp: 1, children: tmp3Result14.getChannelSubtitleData(subtitle).subtitle };
    const Text2 = tmp3(tmp4[27]).Text;
    const tmp3Result13 = channel(tmp4[15]);
    const merged1 = Object.assign(tmp3Result13.getChannelSubtitleTextProps(channelMode));
    tmp3Result14 = channel(tmp4[30]);
    items10[1] = closure_13(Text2, obj8);
    tmp20Result = closure_14(View, obj7);
  }
  items9[1] = tmp20Result;
  items9[2] = closure_13(isSuggestedSection(tmp4[31]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  items7[1] = closure_14(View, obj6);
  children[1] = closure_14(AnimatedPressableHighlight, obj3);
  if (selected) {
    const obj9 = { targetRef: ref, channelType: channel.type };
    selected = closure_13(isSuggestedSection(tmp4[33]), obj9);
  }
  children[2] = selected;
  return closure_14(tmp21, { children });
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;