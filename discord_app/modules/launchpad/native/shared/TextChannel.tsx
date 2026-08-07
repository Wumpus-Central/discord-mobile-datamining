// discord_app/modules/launchpad/native/shared/TextChannel.tsx
import importAllResult from "usePressUnderlayColor";
import { View } from "isChannelSpoilerGated";
import rebuild from "rebuild";
import _getSystemLocale from "_getSystemLocale";
import ensureGuildLoaded from "ensureGuildLoaded";
import { getThemedRippleConfig } from "semanticColor";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "useEmbeddedApps";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getLayoutStyle } from "getLayoutStyles.tsx";

let c10;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles(() => {
  let obj = { pressable: null, selectedBorder: null, rowSelected: null };
  obj = { flex: 1, borderRadius: getLayoutStyle().container.borderRadius, marginBottom: 1 };
  obj[0] = obj;
  obj = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: Themes.colors.BORDER_MUTED, borderRadius: Themes.radii.md };
  obj[1] = obj;
  obj[2] = { borderRadius: Themes.radii.md, backgroundColor: Themes.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(function TextChannel(subtitle) {
  let isMentionLowImportance;
  let isSubscriptionGated;
  let mentionCount;
  let needSubscriptionToAccess;
  let newChannel;
  let optInEnabled;
  let resolvedUnreadSetting;
  let selected;
  let showGuildBadgeIcon;
  let unread;
  const channel = subtitle.channel;
  let flag = subtitle.muted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = subtitle.navigationReplace;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ selected, showGuildBadgeIcon } = subtitle);
  if (selected === undefined) {
    selected = false;
  }
  let arr4;
  let dependencyMap;
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  let obj = channel(15381);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = callback2(flag, unread);
  let obj1 = channel(5829);
  let obj2 = channel(589);
  const items = [rebuild];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_5.getNewThreadCount(channel.guild_id, channel.id));
  let obj3 = channel(589);
  const items1 = [ensureGuildLoaded];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_7.getChannel(channel.parent_id));
  const tmp9 = arr4(4492)(stateFromStores1);
  let tmp2Result = tmp2(8343);
  const unreadThreadsCountForParent = tmp2Result.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  let tmp8Result = tmp8(14481);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = tmp8Result(channel, { unread: tmp12 });
  tmp2Result = tmp2(5884);
  const isChannelSpoilerGated = tmp2Result.useIsChannelSpoilerGated(channel);
  const fontScale = channel(4718).useFontScale();
  const tmp2Result1 = channel(4718);
  const items2 = [_getSystemLocale];
  const stateFromStores2 = channel(589).useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(15977)();
  const tmp2Result2 = channel(589);
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(4743)(channel.id));
  arr4 = tmp8(11379)(channel);
  if (null != tmp8ResultResult) {
    if (!isChannelSpoilerGated) {
      obj = { channel: null, message: null, color: "text-muted", muted: null, layout: null };
      obj[0] = channel;
      obj[1] = tmp8ResultResult;
      obj[3] = flag;
      obj[4] = tmp2(3979).ChannelListLayoutTypes.COMPACT;
      let result = callback(tmp2(9723).ChannelRowPreview, obj);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = tmp2(8277).useIsActivitiesInTextEnabled(channel.id);
    const memo = importAllResult.useMemo(() => {
      let tmp = null;
      if (_undefined) {
        const obj = { embeddedApps: null };
        obj[0] = arr4;
        tmp = outer1_10(arr4(_undefined[26]), obj);
      }
      return tmp;
    }, items3);
    tmp8Result = tmp8(15969);
    const items4 = [tmp5.pressable, ];
    let rowSelected;
    if (selected) {
      rowSelected = tmp5.rowSelected;
    }
    obj = { style: null, underlayColor: null, androidRippleConfig: null };
    items4[1] = rowSelected;
    obj[0] = items4;
    obj[1] = tmp17;
    obj1 = { color: null };
    obj1[0] = tmp17;
    obj[2] = getThemedRippleConfig(obj1);
    const tmp26 = closure_11;
    const tmp2Result3 = tmp2(8277);
    const merged = Object.assign(tmp2(15980).useTextChannelPressEvents(channel, flag2));
    const tmp2Result4 = tmp2(15980);
    obj2 = { channel: null, unread: null, mentionCount: null };
    obj2[0] = channel;
    obj2[1] = unread;
    obj2[2] = mentionCount;
    const merged1 = Object.assign(tmp2(15981).getChannelAccessibilityProps(obj2));
    if (selected) {
      obj3 = { style: null, pointerEvents: "none" };
      obj3[0] = tmp5.selectedBorder;
      selected = callback(View, obj3);
    }
    const items5 = [selected, ];
    const obj4 = { channel: null, channelCategoryName: null, subtitle: null, hasActiveThreads: null, unreadBadge: null, mentionBadge: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null, channelName: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: null, end: null };
    obj4[0] = channel;
    obj4[1] = tmp9;
    obj4[2] = result;
    obj4[3] = obj1.useHasActiveThreads(channel).hasActiveThreads;
    const tmp2Result5 = tmp2(15981);
    const obj5 = { unread: null, resolvedUnreadSetting: null, muted: null };
    obj5[0] = unread;
    obj5[1] = resolvedUnreadSetting;
    obj5[2] = flag;
    obj4[4] = callback(tmp8(15972), obj5);
    const tmp8Result1 = tmp8(15981);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    const obj6 = { newChannel: null, mentionCount: null, isMentionLowImportance: null, postsWithUnreadsCount: null, newPostCount: null, locale: null };
    obj6[0] = newChannel;
    obj6[1] = mentionCount;
    obj6[2] = isMentionLowImportance;
    let tmp38;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
            tmp38 = unreadThreadsCountForParent;
          }
        }
      }
    }
    obj6[3] = tmp38;
    let tmp40;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          tmp40 = stateFromStores;
        }
      }
    }
    obj6[4] = tmp40;
    obj6[5] = stateFromStores2;
    obj4[5] = tmp8(15975)(obj6);
    obj4[6] = unread;
    obj4[7] = resolvedUnreadSetting;
    obj4[8] = mentionCount;
    obj4[9] = flag;
    obj4[10] = tmp8(4492)(channel);
    obj4[11] = fontScale;
    obj4[12] = isSubscriptionGated;
    obj4[13] = needSubscriptionToAccess;
    obj4[14] = showGuildBadgeIcon;
    let tmp41 = null;
    if (isActivitiesInTextEnabled) {
      tmp41 = memo;
    }
    obj4[15] = tmp41;
    items5[1] = tmp8Result1(obj4);
    obj.children = items5;
    return tmp8Result(tmp26(tmp2(4844).PressableHighlight, obj));
  }
  const tmp18 = arr4(4743)(channel.id);
  result = channel(15979).renderChannelSubtitle({ subtitle: subtitle.subtitle, muted: flag, channelId: channel.id, guildId: channel.guild_id });
});
let result = require("rebuild").fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;