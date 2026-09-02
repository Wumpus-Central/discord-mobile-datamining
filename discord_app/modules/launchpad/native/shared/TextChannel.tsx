// discord_app/modules/launchpad/native/shared/TextChannel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getLayoutStyleDefault from "getLayoutStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../threads/ActiveJoinedThreadsStore.tsx";
import closure_6 from "../../../user_settings/LocaleStore.tsx";
import closure_7 from "../../../../stores/ChannelStore.tsx";
import { getThemedRippleConfig } from "../../../../design/void/Form/native/FormConstants.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles(() => {
  let obj = { pressable: null, selectedBorder: null, rowSelected: null };
  obj = { flex: 1, borderRadius: getLayoutStyleDefault().container.borderRadius, marginBottom: 1 };
  obj[0] = obj;
  obj = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: ThemesDefault.colors.BORDER_MUTED,
    borderRadius: ThemesDefault.radii.md,
  };
  obj[1] = obj;
  obj[2] = { borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(function TextChannel(subtitle) {
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
  dependencyMap = undefined;
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  let obj = channel(16165);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = callback2(flag, unread);
  obj1 = channel(6124);
  let obj2 = channel(586);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () =>
    closure_1_5.getNewThreadCount(channel.guild_id, channel.id),
  );
  let obj3 = channel(586);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => closure_1_7.getChannel(channel.parent_id));
  const tmp9 = arr4(4674)(stateFromStores1);
  let tmp2Result = tmp2(7638);
  const unreadThreadsCountForParent = tmp2Result.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  let tmp8Result = tmp8(15142);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = tmp8Result(channel, { unread: tmp12 });
  tmp2Result = tmp2(6182);
  const isChannelSpoilerGated = tmp2Result.useIsChannelSpoilerGated(channel);
  const fontScale = channel(4935).useFontScale();
  const tmp2Result1 = channel(4935);
  const items2 = [closure_6];
  const stateFromStores2 = channel(586).useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(16802)();
  const tmp2Result2 = channel(586);
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(4960)(channel.id));
  arr4 = tmp8(11854)(channel);
  if (null != tmp8ResultResult) {
    if (!isChannelSpoilerGated) {
      obj = { channel: null, message: null, color: "text-muted", muted: null, layout: null };
      obj[0] = channel;
      obj[1] = tmp8ResultResult;
      obj[3] = flag;
      obj[4] = tmp2(4171).ChannelListLayoutTypes.COMPACT;
      let result = callback(tmp2(10214).ChannelRowPreview, obj);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = tmp2(8152).useIsActivitiesInTextEnabled(channel.id);
    const memo = importAllResult.useMemo(() => {
      let tmp = null;
      if (table) {
        const obj = { embeddedApps: null };
        obj[0] = arr4;
        tmp = closure_1_10(arr4(table[26]), obj);
      }
      return tmp;
    }, items3);
    tmp8Result = tmp8(16794);
    const items4 = [tmp5.pressable];
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
    const tmp2Result3 = tmp2(8152);
    const merged = Object.assign(tmp2(16805).useTextChannelPressEvents(channel, flag2));
    const tmp2Result4 = tmp2(16805);
    obj2 = { channel: null, unread: null, mentionCount: null };
    obj2[0] = channel;
    obj2[1] = unread;
    obj2[2] = mentionCount;
    const merged1 = Object.assign(tmp2(16806).getChannelAccessibilityProps(obj2));
    if (selected) {
      obj3 = { style: null, pointerEvents: "none" };
      obj3[0] = tmp5.selectedBorder;
      selected = callback(View, obj3);
    }
    const items5 = [selected];
    const obj4 = {
      channel: null,
      channelCategoryName: null,
      subtitle: null,
      hasActiveThreads: null,
      unreadBadge: null,
      mentionBadge: null,
      unread: null,
      resolvedUnreadSetting: null,
      mentionCount: null,
      muted: null,
      channelName: null,
      fontScale: null,
      isSubscriptionGated: null,
      needSubscriptionToAccess: null,
      showGuildBadgeIcon: null,
      end: null,
    };
    obj4[0] = channel;
    obj4[1] = tmp9;
    obj4[2] = result;
    obj4[3] = obj1.useHasActiveThreads(channel).hasActiveThreads;
    const tmp2Result5 = tmp2(16806);
    const obj5 = { unread: null, resolvedUnreadSetting: null, muted: null };
    obj5[0] = unread;
    obj5[1] = resolvedUnreadSetting;
    obj5[2] = flag;
    obj4[4] = callback(tmp8(16797), obj5);
    const tmp8Result1 = tmp8(16806);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    const obj6 = {
      newChannel: null,
      mentionCount: null,
      isMentionLowImportance: null,
      postsWithUnreadsCount: null,
      newPostCount: null,
      locale: null,
    };
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
    obj4[5] = tmp8(16800)(obj6);
    obj4[6] = unread;
    obj4[7] = resolvedUnreadSetting;
    obj4[8] = mentionCount;
    obj4[9] = flag;
    obj4[10] = tmp8(4674)(channel);
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
    return tmp8Result(tmp26(tmp2(5076).PressableHighlight, obj));
  }
  const tmp18 = arr4(4960)(channel.id);
  result = channel(16804).renderChannelSubtitle({
    subtitle: subtitle.subtitle,
    muted: flag,
    channelId: channel.id,
    guildId: channel.guild_id,
  });
});
let result = require("set").fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;
