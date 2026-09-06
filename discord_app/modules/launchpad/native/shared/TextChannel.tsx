// discord_app/modules/launchpad/native/shared/TextChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelItemEmbeddedActivitiesDefault from "../../../guild_sidebar/native/ChannelItemEmbeddedActivities.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActiveJoinedThreadsStore from "../../../threads/ActiveJoinedThreadsStore.tsx";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const getThemedRippleConfig = fn(1182).getThemedRippleConfig;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles(() => {
  let obj = { pressable: null, selectedBorder: null, rowSelected: null };
  obj = { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 };
  obj.pressable = obj;
  const rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderRadius: nativeDefault.radii.md,
  };
  obj.selectedBorder = rect;
  obj = { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  obj.rowSelected = obj;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default noop.memo(function TextChannel(subtitle) {
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
  let obj = channel(16343);
  const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = closure_12(flag, unread);
  let obj1 = channel(7269);
  let obj2 = channel(504);
  const items = [ActiveJoinedThreadsStore];
  const stateFromStores = obj2.useStateFromStores(items, () =>
    ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id),
  );
  let obj3 = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  let tmp2Result = tmp2(7885);
  const unreadThreadsCountForParent = tmp2Result.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  let tmp8Result = tmp8(15317);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = tmp8Result(channel, { unread: tmp12 });
  tmp2Result = tmp2(7329);
  const isChannelSpoilerGated = tmp2Result.useIsChannelSpoilerGated(channel);
  const tmp9 = arr4(4713)(stateFromStores1);
  const fontScale = channel(4982).useFontScale();
  const tmp2Result1 = channel(4982);
  const items2 = [LocaleStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(16986)();
  const tmp2Result2 = channel(504);
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(5007)(channel.id));
  arr4 = tmp8(12059)(channel);
  if (null != tmp8ResultResult) {
    if (!isChannelSpoilerGated) {
      obj = {
        channel,
        message: tmp8ResultResult,
        color: "text-muted",
        muted: flag,
        layout: tmp2(7879).ChannelListLayoutTypes.COMPACT,
      };
      let result = closure_10(tmp2(10109).ChannelRowPreview, obj);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = tmp2(9546).useIsActivitiesInTextEnabled(channel.id);
    const memo = noop.useMemo(() => {
      let tmp = null;
      if (closure_2) {
        const obj = { embeddedApps: arr4 };
        tmp = closure_2_10(ChannelItemEmbeddedActivitiesDefault, obj);
      }
      return tmp;
    }, items3);
    tmp8Result = tmp8(16978);
    const items4 = [tmp5.pressable];
    let rowSelected;
    if (selected) {
      rowSelected = tmp5.rowSelected;
    }
    obj = { style: null, underlayColor: null, androidRippleConfig: null };
    items4[1] = rowSelected;
    obj.style = items4;
    obj.underlayColor = tmp17;
    obj1 = { color: tmp17 };
    obj.androidRippleConfig = getThemedRippleConfig(obj1);
    const tmp2Result3 = tmp2(9546);
    const merged = Object.assign(tmp2(16989).useTextChannelPressEvents(channel, flag2));
    const tmp2Result4 = tmp2(16989);
    obj2 = { channel, unread, mentionCount };
    const merged1 = Object.assign(tmp2(16990).getChannelAccessibilityProps(obj2));
    if (selected) {
      obj3 = { style: tmp5.selectedBorder, pointerEvents: "none" };
      selected = closure_10(View, obj3);
    }
    const items5 = [selected];
    const obj4 = {
      channel,
      channelCategoryName: tmp9,
      subtitle: result,
      hasActiveThreads: obj1.useHasActiveThreads(channel).hasActiveThreads,
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
    const tmp2Result5 = tmp2(16990);
    const obj5 = { unread, resolvedUnreadSetting, muted: flag };
    obj4.unreadBadge = closure_10(tmp8(16981), obj5);
    const tmp8Result1 = tmp8(16990);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    const obj6 = {
      newChannel,
      mentionCount,
      isMentionLowImportance,
      postsWithUnreadsCount: null,
      newPostCount: null,
      locale: null,
    };
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
    obj6.postsWithUnreadsCount = tmp38;
    let tmp40;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          tmp40 = stateFromStores;
        }
      }
    }
    obj6.newPostCount = tmp40;
    obj6.locale = stateFromStores2;
    obj4.mentionBadge = tmp8(16984)(obj6);
    obj4.unread = unread;
    obj4.resolvedUnreadSetting = resolvedUnreadSetting;
    obj4.mentionCount = mentionCount;
    obj4.muted = flag;
    obj4.channelName = tmp8(4713)(channel);
    obj4.fontScale = fontScale;
    obj4.isSubscriptionGated = isSubscriptionGated;
    obj4.needSubscriptionToAccess = needSubscriptionToAccess;
    obj4.showGuildBadgeIcon = showGuildBadgeIcon;
    let tmp41 = null;
    if (isActivitiesInTextEnabled) {
      tmp41 = memo;
    }
    obj4.end = tmp41;
    items5[1] = tmp8Result1(obj4);
    obj.children = items5;
    return tmp8Result(closure_11(tmp2(5123).PressableHighlight, obj));
  }
  const tmp18 = arr4(5007)(channel.id);
  result = channel(16988).renderChannelSubtitle({
    subtitle: subtitle.subtitle,
    muted: flag,
    channelId: channel.id,
    guildId: channel.guild_id,
  });
  const tmp2Result6 = channel(16988);
});
