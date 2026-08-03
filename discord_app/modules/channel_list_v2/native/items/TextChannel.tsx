import importAllResult from "module_4203";
import { View } from "initialize";
import participantFromServer from "participantFromServer";
import isSubscriptionGated from "isSubscriptionGated";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import hairlineWidth from "hairlineWidth";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ CHANNEL_MARGIN_VERTICAL: unpackModuleId, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = hairlineWidth);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0, arg1) => {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj = { container: null, selected: null, selectedBorder: null, row: null, rowWithSubtitle: null, channelLabel: null, channelLabelText: null };
  obj = { position: "relative", marginVertical: closure_11, marginHorizontal: 8, borderRadius: importDefault(712).modules.mobile.CHANNEL_ITEM_RADIUS, flexGrow: 1 };
  obj[0] = obj;
  obj = { backgroundColor: importDefault(712).colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj[1] = obj;
  const obj1 = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: null, borderRadius: null };
  let BORDER_MUTED;
  if (!flag) {
    BORDER_MUTED = tmp(712).colors.BORDER_MUTED;
  }
  obj1[6] = BORDER_MUTED;
  obj1[7] = importDefault(712).modules.mobile.CHANNEL_ITEM_RADIUS;
  obj[2] = obj1;
  obj[3] = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj[4] = { flexGrow: 1, paddingVertical: 6 };
  obj[5] = { flexDirection: "column", flex: 1 };
  const obj2 = { textAlign: "left", flex: 1, lineHeight: closure_12, opacity: null };
  let num2 = 1;
  if (arg0) {
    num2 = 1;
    if (!arg1) {
      num2 = 0.5;
    }
  }
  obj2[3] = num2;
  obj[6] = obj2;
  return obj;
});
const memoResult = importAllResult.memo((channel) => {
  let hasUnread;
  let isSubscriptionGated;
  let isSuggestedSection;
  let mentionCount;
  let muted;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let selected;
  let subtitle;
  channel = channel.channel;
  ({ muted, selected, subtitle, isSuggestedSection } = channel);
  let id;
  let guild_id;
  let tmp3 = callback2(muted, selected, isSuggestedSection(id[16])("TextChannel"));
  id = channel.id;
  guild_id = channel.guild_id;
  const ref = guild_id.useRef(null);
  let obj = channel(id[17]);
  const items = [ensureGuildLoaded, isSubscriptionGated, getUncachedChannelPermissions, generateOldThreadCutoff, updateUserGuildSettingsInternal, participantFromServer];
  const items1 = [channel, id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isSubscriptionGated;
    let needSubscriptionToAccess;
    let obj = channel(id[18]);
    const channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, outer1_7, outer1_6, outer1_8);
    obj = { hasUnread: outer1_9.hasUnread(id), mentionCount: outer1_9.getMentionCount(id), resolvedUnreadSetting: outer1_10.resolveUnreadSetting(channel), embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
    ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
    let num = 0;
    if (null != channel) {
      num = 0;
      if (null != tmp2.id) {
        num = 0;
        if ("" !== tmp2.id) {
          const embeddedActivitiesForChannel = outer1_5.getEmbeddedActivitiesForChannel(tmp2.id);
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
    isSuggestedSection(id[19]).preload(guild_id, id);
  }, items2);
  const items4 = [id];
  const callback1 = guild_id.useCallback(() => {
    let obj = channel(id[20]);
    let tmp3;
    if (isSuggestedSection) {
      obj = { source: null };
      obj[0] = isSuggestedSection(id[21]).CHANNEL_LIST_SUGGESTED_SECTION;
      tmp3 = obj;
    }
    obj.transitionToChannel(id, tmp3);
  }, items3);
  let tmp10 = hasUnread;
  callback2 = guild_id.useCallback(() => {
    const result = channel(id[22]).openChannelLongPressActionSheet(id);
  }, items4);
  if (hasUnread) {
    tmp10 = !muted;
  }
  let tmp5Result = tmp5(tmp2[23]);
  const channelMode = tmp5Result.getChannelMode({ muted, selected, unread: tmp10, resolvedUnreadSetting, mentionCount, locked: false, channel });
  tmp5Result = tmp5(tmp2[24]);
  const isActivitiesInTextEnabled = tmp5Result.useIsActivitiesInTextEnabled(id);
  if (channel.isRulesChannel) {
    let channelIcon = tmp(tmp2[12]);
    let BookCheckIcon = tmp5(tmp2[13]).BookCheckIcon;
  } else {
    channelIcon = tmp5(tmp2[14]).getChannelIcon(channel, { isRulesChannel: false });
    const tmp5Result1 = tmp5(tmp2[14]);
    BookCheckIcon = tmp5(tmp2[14]).getChannelIconComponent(channel, { isRulesChannel: false });
    const tmp5Result2 = tmp5(tmp2[14]);
  }
  const tmp5Result3 = channel(id[15]);
  const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({ mode: channelMode, source: channelIcon, IconComponent: BookCheckIcon });
  obj = { experimental_useNativeText: true, lineClamp: 1, style: tmp3.channelLabelText };
  const tmp15 = isSuggestedSection(id[25])(channel);
  const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
  obj.children = tmp15;
  const tmp18 = callback(channel(id[26]).Text, obj);
  const tmp5Result4 = channel(id[15]);
  const children = [callback(isSuggestedSection(id[28]), { unread: tmp10, resolvedUnreadSetting }), , ];
  obj = { onPressIn: callback, onPress: callback1, onLongPress: callback2, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
  const items6 = [tmp3.container, ];
  const tmpResult = isSuggestedSection(id[27]);
  items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp3.selected;
  obj[3] = items6;
  const obj1 = { channel, unread: hasUnread, mentionCount, embeddedActivitiesCount: null, isSubscriptionGated: null, needSubscriptionToAccess: null };
  let num = 0;
  const tmp21 = channelMode === channel(id[15]).ChannelModes.SELECTED && tmp3.selected;
  if (isActivitiesInTextEnabled) {
    num = stateFromStoresObject.embeddedActivitiesCount;
  }
  obj1[3] = num;
  obj1[4] = isSubscriptionGated;
  obj1[5] = needSubscriptionToAccess;
  obj[6] = isSuggestedSection(id[30])(obj1);
  obj[7] = { selected };
  let tmp16Result = channelMode === tmp5(tmp2[15]).ChannelModes.SELECTED;
  if (tmp16Result) {
    const obj2 = { style: null };
    obj2[0] = tmp3.selectedBorder;
    tmp16Result = tmp16(View, obj2);
  }
  const items7 = [tmp16Result, ];
  const obj3 = { ref, style: items8, children: null };
  items8 = [tmp3.row, null != subtitle && tmp3.rowWithSubtitle];
  const items9 = [BaseChannelIconResult, , ];
  let tmp19Result = tmp18;
  if (null != subtitle) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.channelLabel;
    const items10 = [tmp18, ];
    const obj5 = { experimental_useNativeText: true, lineClamp: 1 };
    const merged1 = Object.assign(tmp5(tmp2[15]).getChannelSubtitleTextProps(channelMode));
    const tmp5Result5 = tmp5(tmp2[15]);
    obj5.children = tmp5(tmp2[31]).getChannelSubtitleData(subtitle).subtitle;
    items10[1] = tmp16(tmp5(tmp2[26]).Text, obj5);
    obj4[1] = items10;
    tmp19Result = tmp19(tmp25, obj4);
    const tmp5Result6 = tmp5(tmp2[31]);
  }
  items9[1] = tmp19Result;
  items9[2] = callback(isSuggestedSection(id[32]), { channel, isChannelSelected: selected, muted, isSubscriptionGated, needSubscriptionToAccess, enableActivities: isActivitiesInTextEnabled });
  obj3[2] = items9;
  items7[1] = closure_14(View, obj3);
  obj[8] = items7;
  children[1] = closure_14(channel(id[29]).AnimatedPressableHighlight, obj);
  if (selected) {
    const obj6 = { targetRef: null, channelType: null };
    obj6[0] = ref;
    obj6[1] = channel.type;
    selected = tmp16(tmp(tmp2[33]), obj6);
  }
  children[2] = selected;
  return closure_14(tmpResult, { children });
});
let result = require("participantFromServer").fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default memoResult;