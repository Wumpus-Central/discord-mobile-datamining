// === Module 15777: ? ===

// Module 15777
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "participantFromServer" /* 1386 */;
import closure_6 from "isSubscriptionGated" /* 1983 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import closure_8 from "getUncachedChannelPermissions" /* 4091 */;
import closure_9 from "generateOldThreadCutoff" /* 4463 */;
import closure_10 from "updateUserGuildSettingsInternal" /* 4669 */;
import hairlineWidth from "hairlineWidth" /* 10162 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
let c3 = importAllResult;
({ CHANNEL_MARGIN_VERTICAL: unpackModuleId, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = hairlineWidth);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { container: null, selected: null, selectedBorder: null, row: null, rowWithSubtitle: null, channelLabel: null, channelLabelText: null };
  obj = { position: "relative", marginVertical: closure_11, marginHorizontal: 8, borderRadius: ThemesDefault.modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 };
  obj[0] = obj;
  obj = { backgroundColor: ThemesDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj[1] = obj;
  obj[2] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderRadius: ThemesDefault.modules.mobile.CHANNEL_ITEM_RADIUS };
  obj[3] = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj[4] = { flexGrow: 1, paddingVertical: 6 };
  obj[5] = { flexDirection: "column", flex: 1 };
  const obj2 = { textAlign: "left", flex: 1, lineHeight: closure_12, opacity: null };
  let num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  obj2[3] = num;
  obj[6] = obj2;
  return obj;
});
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  let id;
  let guild_id;
  const tmp = callback2(muted, selected);
  id = channel.id;
  guild_id = channel.guild_id;
  const ref = guild_id.useRef(null);
  let obj = channel(id[16]);
  const items = [closure_7, closure_6, closure_8, closure_9, closure_10, closure_5];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = channel(id[17]);
    const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_1_7, closure_1_6, closure_1_8);
    obj = { hasUnread: closure_1_9.hasUnread(id), mentionCount: closure_1_9.getMentionCount(id), resolvedUnreadSetting: closure_1_10.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
    ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
    let num = 0;
    if (null != channel) {
      num = 0;
      if (null != tmp2.id) {
        num = 0;
        if ("" !== tmp2.id) {
          const embeddedActivitiesForChannel = closure_1_5.getEmbeddedActivitiesForChannel(tmp2.id);
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
    obj[3] = num;
    obj[4] = isSubscriptionGated;
    obj[5] = needSubscriptionToAccess;
    return obj;
  }, items1);
  ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } = stateFromStoresObject);
  const items2 = [id, guild_id];
  const items3 = [id, isSuggestedSection];
  const callback = guild_id.useCallback(() => {
    isSuggestedSection(id[18]).preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let obj = channel(id[19]);
    let tmp3;
    if (isSuggestedSection) {
      obj = { source: null };
      obj[0] = isSuggestedSection(id[20]).CHANNEL_LIST_SUGGESTED_SECTION;
      tmp3 = obj;
    }
    obj.transitionToChannel(id, tmp3);
  }, items3);
  let tmp9 = hasUnread;
  callback2 = guild_id.useCallback(() => {
    const result = channel(id[21]).openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp9 = !muted;
  }
  let tmp3Result = tmp3(tmp4[22]);
  const channelMode = tmp3Result.getChannelMode({ muted, selected, unread: tmp9, resolvedUnreadSetting, mentionCount, locked: false, channel });
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
  const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  obj = { experimental_useNativeText: true, lineClamp: 1, style: tmp.channelLabelText };
  const tmp16 = isSuggestedSection(id[24])(channel);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj.children = tmp16;
  const tmp19 = callback(channel(id[25]).Text, obj);
  const tmp3Result4 = channel(id[15]);
  const children = [callback(isSuggestedSection(id[27]), { unread: tmp9, resolvedUnreadSetting }), , ];
  obj = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
  const items6 = [tmp.container, ];
  const tmp21 = isSuggestedSection(id[26]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  obj[3] = items6;
  obj1 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  let num = 0;
  const tmp22 = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp.selected;
  if (isActivitiesInTextEnabled) {
    num = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj1[3] = num;
  obj1[4] = isSubscriptionGated;
  obj1[5] = needSubscriptionToAccess;
  obj[6] = isSuggestedSection(id[29])(obj1);
  obj[7] = { selected };
  let tmp17Result = channelMode === tmp3(tmp4[15]).ChannelModes.SELECTED;
  if (tmp17Result) {
    const obj2 = { style: null };
    obj2[0] = tmp.selectedBorder;
    tmp17Result = tmp17(View, obj2);
  }
  const items7 = [tmp17Result, ];
  const obj3 = { ref, style: items8, children: null };
  items8 = [tmp.row, null != subtitle && tmp.rowWithSubtitle];
  const items9 = [BaseChannelIconResult, , ];
  let tmp20Result = tmp19;
  if (null != subtitle) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.channelLabel;
    const items10 = [tmp19, ];
    const obj5 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(tmp3(tmp4[15]).getChannelSubtitleTextProps(channelMode));
    const tmp3Result5 = tmp3(tmp4[15]);
    obj5.children = tmp3(tmp4[30]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = tmp17(tmp3(tmp4[25]).Text, obj5);
    obj4[1] = items10;
    tmp20Result = tmp20(tmp26, obj4);
    const tmp3Result6 = tmp3(tmp4[30]);
  }
  items9[1] = tmp20Result;
  items9[2] = callback(isSuggestedSection(id[31]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  obj3[2] = items9;
  items7[1] = closure_14(View, obj3);
  obj[8] = items7;
  children[1] = closure_14(channel(id[28]).AnimatedPressableHighlight, obj);
  if (selected) {
    const obj6 = { targetRef: null, channelType: null };
    obj6[0] = ref;
    obj6[1] = channel.type;
    selected = tmp17(tmp15(tmp4[32]), obj6);
  }
  children[2] = selected;
  return closure_14(tmp21, { children });
});
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;