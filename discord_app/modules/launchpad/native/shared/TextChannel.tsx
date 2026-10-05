// discord_app/modules/launchpad/native/shared/TextChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import useChannelRoleSubscriptionStatusDefault from "../../../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import useEmbeddedAppsForChannelDefault from "../../../activities/useEmbeddedAppsForChannel.tsx";
import useMessagePreviewsDefault from "../../../main_tabs_v2/useMessagePreviews.tsx";
import ChannelItemEmbeddedActivitiesDefault from "../../../guild_sidebar/native/ChannelItemEmbeddedActivities.tsx";
import renderChannelItemDefault from "renderChannelItem.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import UnreadBadgeDefault from "UnreadBadge.tsx";
import shared_renderChannelBadgeDefault from "renderChannelBadge.tsx";
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper.tsx";
import usePressUnderlayColorDefault from "../../../main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActiveJoinedThreadsStore from "../../../threads/ActiveJoinedThreadsStore.tsx";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const getThemedRippleConfig = fn(1192).getThemedRippleConfig;
const UnreadSetting = fn(5072).UnreadSetting;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles(() => {
  const obj = { pressable: { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 }, selectedBorder: null, rowSelected: null };
  const rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md };
  obj.selectedBorder = rect;
  const obj2 = { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 };
  obj.rowSelected = { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(47);
  channel = channel.channel;
  ({ muted, navigationReplace, selected } = channel);
  let tmp4 = undefined !== muted;
  ({ subtitle, showGuildBadgeIcon } = channel);
  if (tmp4) {
    tmp4 = muted;
  }
  const isForumLikeChannelResult = channel.isForumLikeChannel();
  const obj = channel(576);
  const channelUnreadBadgeState = channel(16285).useChannelUnreadBadgeState(channel, tmp4);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp8 = closure_12(tmp4, unread);
  const tmpResult = channel(16285);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActiveJoinedThreadsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.guild_id) {
    if (cResult[2] === channel.id) {
      let tmp11 = cResult[3];
    }
    const _Symbol = Symbol;
    const stateFromStores = tmp(504).useStateFromStores(first, tmp11);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ChannelStore];
      cResult[4] = items1;
      let tmp13 = items1;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== channel.parent_id) {
      const fn2 = function k() {
        return ChannelStore.getChannel(channel.parent_id);
      };
      cResult[5] = channel.parent_id;
      cResult[6] = fn2;
      let tmp15 = fn2;
    } else {
      tmp15 = cResult[6];
    }
    const tmpResult13 = tmp(504);
    const stateFromStores1 = tmp(504).useStateFromStores(tmp13, tmp15);
    useChannelNameDefault(stateFromStores1);
    const tmpResult14 = tmp(504);
    const unreadThreadsCountForParent = tmp(7528).useUnreadThreadsCountForParent(channel.guild_id, channel.id);
    let tmp21 = unread;
    if (unread) {
      tmp21 = !tmp4;
    }
    if (cResult[7] !== tmp21) {
      const obj2 = { unread: tmp21 };
      cResult[7] = tmp21;
      cResult[8] = obj2;
      let tmp22 = obj2;
    } else {
      tmp22 = cResult[8];
    }
    const tmp23 = useMessagePreviewsDefault(channel, tmp22);
    const tmpResult15 = tmp(7528);
    const isChannelSpoilerGated = tmp(6832).useIsChannelSpoilerGated(channel);
    const tmpResult16 = tmp(6832);
    const _Symbol2 = Symbol;
    const fontScale = tmp(5602).useFontScale();
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [LocaleStore];
      class X {
        constructor() {
          return closure_1_6.locale;
        }
      }
      cResult[9] = items2;
      cResult[10] = X;
      let tmp27 = X;
      let tmp26 = items2;
    } else {
      tmp26 = cResult[9];
      tmp27 = cResult[10];
    }
    const tmpResult17 = tmp(5602);
    const stateFromStores2 = tmp(504).useStateFromStores(tmp26, tmp27);
    const tmp30 = usePressUnderlayColorDefault();
    const tmpResult18 = tmp(504);
    ({ isSubscriptionGated, needSubscriptionToAccess } = useChannelRoleSubscriptionStatusDefault(channel.id));
    const tmp32 = useEmbeddedAppsForChannelDefault(channel);
    if (null != tmp23) {
      if (!isChannelSpoilerGated) {
        if (cResult[11] === channel) {
          if (cResult[12] === tmp23) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === "text-muted") {
                let result = cResult[15];
              }
            }
          }
        }
        const obj3 = { channel: null, message: null, color: "text-muted", muted: null, layout: null };
        class X {
          constructor() {
            return closure_1_6.locale;
          }
        }
        obj3.message = tmp23;
        obj3.muted = tmp4;
        obj3.layout = tmp(7514).ChannelListLayoutTypes.COMPACT;
        const tmp35 = closure_10(tmp(12488).ChannelRowPreview, obj3);
        cResult[11] = channel;
        cResult[12] = tmp23;
        cResult[13] = tmp4;
        cResult[14] = "text-muted";
        cResult[15] = tmp35;
        result = tmp35;
      }
      tmp(9000);
      class X {
        constructor() {
          return closure_1_6.locale;
        }
      }
      if (cResult[16] === tmp32) {
        if (cResult[17] === tmp38) {
          let tmp39 = cResult[18];
        }
        const tmp17Result = renderChannelPressableWrapperDefault;
        const PressableHighlight = tmp(5909).PressableHighlight;
        class X {
          constructor() {
            return closure_1_6.locale;
          }
        }
        if (tmp5) {
          const rowSelected = tmp8.rowSelected;
        }
        if (cResult[19] === tmp8.pressable) {
          if (cResult[20] === rowSelected) {
            let tmp43 = cResult[21];
          }
          if (cResult[22] !== tmp30) {
            { color: null }.color = tmp30;
            class X {
              constructor() {
                return closure_1_6.locale;
              }
            }
            cResult[22] = tmp30;
            cResult[23] = tmp46;
            let tmp44 = tmp46;
            const obj4 = { color: null };
          } else {
            tmp44 = cResult[23];
          }
          tmp(17405);
          class X {
            constructor() {
              return closure_1_6.locale;
            }
          }
          if (cResult[24] === channel) {
            if (cResult[25] === mentionCount) {
              if (cResult[26] === unread) {
                let tmp49 = cResult[27];
              }
              if (cResult[28] === tmp5) {
                if (cResult[29] === tmp8.selectedBorder) {
                  let tmp51 = cResult[30];
                }
                if (cResult[31] === tmp4) {
                  if (cResult[32] === resolvedUnreadSetting) {
                    if (cResult[33] === unread) {
                      let tmp53 = cResult[34];
                    }
                    const obj5 = { channel, channelCategoryName: null, subtitle: null, hasActiveThreads: null, unreadBadge: null, mentionBadge: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null, channelName: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: null, end: null };
                    class X {
                      constructor() {
                        return closure_1_6.locale;
                      }
                    }
                    obj5.subtitle = result;
                    obj5.hasActiveThreads = tmpResult12.useHasActiveThreads(channel).hasActiveThreads;
                    obj5.unreadBadge = tmp53;
                    const tmp17Result3 = renderChannelItemDefault;
                    if (newChannel) {
                      newChannel = optInEnabled;
                    }
                    const obj6 = { newChannel, mentionCount, isMentionLowImportance, postsWithUnreadsCount: null, newPostCount: null, locale: null };
                    let tmp59;
                    if (isForumLikeChannelResult) {
                      if (unreadThreadsCountForParent > 0) {
                        if (!tmp4) {
                          if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
                            tmp59 = unreadThreadsCountForParent;
                          }
                        }
                      }
                    }
                    obj6.postsWithUnreadsCount = tmp59;
                    let tmp61;
                    if (isForumLikeChannelResult) {
                      if (unreadThreadsCountForParent > 0) {
                        if (!tmp4) {
                          tmp61 = stateFromStores;
                        }
                      }
                    }
                    obj6.newPostCount = tmp61;
                    obj6.locale = stateFromStores2;
                    obj5.mentionBadge = shared_renderChannelBadgeDefault(obj6);
                    obj5.unread = unread;
                    obj5.resolvedUnreadSetting = resolvedUnreadSetting;
                    obj5.mentionCount = mentionCount;
                    obj5.muted = tmp4;
                    obj5.channelName = useChannelNameDefault(channel);
                    obj5.fontScale = fontScale;
                    obj5.isSubscriptionGated = isSubscriptionGated;
                    obj5.needSubscriptionToAccess = needSubscriptionToAccess;
                    obj5.showGuildBadgeIcon = showGuildBadgeIcon;
                    let tmp62 = null;
                    if (tmp37) {
                      tmp62 = tmp39;
                    }
                    obj5.end = tmp62;
                    const tmp17Result1Result = tmp17Result3(obj5);
                    if (cResult[35] === PressableHighlight) {
                      if (cResult[36] === tmp30) {
                        if (cResult[37] === tmp43) {
                          if (cResult[38] === tmp44) {
                            if (cResult[39] === tmp48) {
                              if (cResult[40] === tmp49) {
                                if (cResult[41] === tmp51) {
                                  if (cResult[42] === tmp17Result1Result) {
                                    let tmp64 = cResult[43];
                                  }
                                  if (cResult[44] === tmp17Result) {
                                    if (cResult[45] === tmp64) {
                                      let tmp73 = cResult[46];
                                    }
                                    return tmp73;
                                  }
                                  const tmp17ResultResult = tmp17Result(tmp64);
                                  class X {
                                    constructor() {
                                      return closure_1_6.locale;
                                    }
                                  }
                                  cResult[44] = tmp17Result;
                                  cResult[45] = tmp64;
                                  cResult[46] = tmp17ResultResult;
                                  tmp73 = tmp17ResultResult;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj7 = { style: tmp43, underlayColor: tmp30, androidRippleConfig: tmp44 };
                    const merged = Object.assign(tmp48);
                    const merged1 = Object.assign(tmp49);
                    const items3 = [tmp51, tmp17Result1Result];
                    obj7.children = items3;
                    const tmp72 = closure_11(PressableHighlight, obj7);
                    cResult[35] = PressableHighlight;
                    cResult[36] = tmp30;
                    cResult[37] = tmp43;
                    cResult[38] = tmp44;
                    cResult[39] = tmp48;
                    cResult[40] = tmp49;
                    cResult[41] = tmp51;
                    cResult[42] = tmp17Result1Result;
                    cResult[43] = tmp72;
                    tmp64 = tmp72;
                    const tmp17Result4 = shared_renderChannelBadgeDefault;
                  }
                }
                class X {
                  constructor() {
                    return closure_1_6.locale;
                  }
                }
                tmp55[0] = unread;
                tmp55[1] = resolvedUnreadSetting;
                tmp55[2] = tmp4;
                const tmp56 = closure_10(UnreadBadgeDefault, tmp55);
                cResult[31] = tmp4;
                cResult[32] = resolvedUnreadSetting;
                cResult[33] = unread;
                cResult[34] = tmp56;
                tmp53 = tmp56;
              }
              class X {
                constructor() {
                  return closure_1_6.locale;
                }
              }
              cResult[28] = tmp5;
              cResult[29] = tmp8.selectedBorder;
              cResult[30] = tmp5;
              tmp51 = tmp52;
            }
          }
          const obj8 = { channel, unread, mentionCount };
          const channelAccessibilityProps = tmp(16831).getChannelAccessibilityProps(obj8);
          cResult[24] = channel;
          cResult[25] = mentionCount;
          cResult[26] = unread;
          cResult[27] = channelAccessibilityProps;
          tmp49 = channelAccessibilityProps;
          const tmpResult21 = tmp(16831);
        }
        const items4 = [tmp8.pressable, rowSelected];
        cResult[19] = tmp8.pressable;
        cResult[20] = rowSelected;
        cResult[21] = items4;
        tmp43 = items4;
      }
      if (tmp38) {
        { embeddedApps: null }.embeddedApps = tmp32;
        class X {
          constructor() {
            return closure_1_6.locale;
          }
        }
        const obj9 = { embeddedApps: null };
      }
      cResult[16] = tmp32;
      cResult[17] = tmp38;
      cResult[18] = null;
      tmp39 = tmp40;
    }
    const tmp31 = useChannelRoleSubscriptionStatusDefault(channel.id);
    const obj10 = { subtitle, muted: tmp4, channelId: channel.id, guildId: channel.guild_id };
    result = tmp(17404).renderChannelSubtitle(obj10);
    const tmpResult22 = tmp(17404);
  }
  const fn = function v() {
    return ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id);
  };
  cResult[1] = channel.guild_id;
  cResult[2] = channel.id;
  cResult[3] = fn;
  tmp11 = fn;
  tmpResult12 = channel(6772);
}) : ((subtitle) => {
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
  const channelUnreadBadgeState = channel(16285).useChannelUnreadBadgeState(channel, flag);
  ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
  ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
  const tmp5 = closure_12(flag, unread);
  let obj = channel(16285);
  const obj2 = channel(6772);
  const items = [ActiveJoinedThreadsStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id));
  const obj3 = channel(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
  const obj4 = channel(504);
  const tmp9 = arr4(5043)(stateFromStores1);
  const unreadThreadsCountForParent = channel(7528).useUnreadThreadsCountForParent(channel.guild_id, channel.id);
  let tmp12 = unread;
  const tmp2Result = channel(7528);
  if (unread) {
    tmp12 = !flag;
  }
  const tmp8ResultResult = arr4(15137)(channel, { unread: tmp12 });
  const tmp8Result = arr4(15137);
  const isChannelSpoilerGated = channel(6832).useIsChannelSpoilerGated(channel);
  const tmp2Result8 = channel(6832);
  const fontScale = channel(5602).useFontScale();
  const tmp2Result9 = channel(5602);
  const items2 = [LocaleStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => locale.locale);
  const tmp17 = arr4(17402)();
  const tmp2Result10 = channel(504);
  ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(5797)(channel.id));
  arr4 = tmp8(11673)(channel);
  if (null != tmp8ResultResult) {
    if (!isChannelSpoilerGated) {
      const obj5 = { channel, message: tmp8ResultResult, color: "text-muted", muted: flag, layout: tmp2(7514).ChannelListLayoutTypes.COMPACT };
      let result = closure_10(tmp2(12488).ChannelRowPreview, obj5);
    }
    dependencyMap = tmp22;
    const items3 = [arr4.length > 0, arr4];
    const isActivitiesInTextEnabled = tmp2(9000).useIsActivitiesInTextEnabled(channel.id);
    const memo = noop.useMemo(() => {
      let tmp = null;
      if (closure_2) {
        const obj = { embeddedApps: arr4 };
        tmp = v65535(ChannelItemEmbeddedActivitiesDefault, obj);
      }
      return tmp;
    }, items3);
    const tmp2Result11 = tmp2(9000);
    const items4 = [tmp5.pressable, ];
    let rowSelected;
    if (selected) {
      rowSelected = tmp5.rowSelected;
    }
    const obj6 = { style: null, underlayColor: null, androidRippleConfig: null };
    items4[1] = rowSelected;
    obj6.style = items4;
    obj6.underlayColor = tmp17;
    const obj7 = { color: tmp17 };
    obj6.androidRippleConfig = getThemedRippleConfig(obj7);
    const tmp8Result4 = tmp8(17400);
    const merged = Object.assign(tmp2(17405).useTextChannelPressEvents(channel, flag2));
    const tmp2Result12 = tmp2(17405);
    const obj8 = { channel, unread, mentionCount };
    const merged1 = Object.assign(tmp2(16831).getChannelAccessibilityProps(obj8));
    if (selected) {
      const obj9 = { style: tmp5.selectedBorder, pointerEvents: "none" };
      selected = closure_10(View, obj9);
    }
    const items5 = [selected, ];
    const obj10 = { channel, channelCategoryName: tmp9, subtitle: result, hasActiveThreads: obj2.useHasActiveThreads(channel).hasActiveThreads, unreadBadge: null, mentionBadge: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null, channelName: null, fontScale: null, isSubscriptionGated: null, needSubscriptionToAccess: null, showGuildBadgeIcon: null, end: null };
    const tmp2Result13 = tmp2(16831);
    const obj11 = { unread, resolvedUnreadSetting, muted: flag };
    obj10.unreadBadge = closure_10(tmp8(17398), obj11);
    const tmp8Result5 = tmp8(16831);
    if (newChannel) {
      newChannel = optInEnabled;
    }
    const obj12 = { newChannel, mentionCount, isMentionLowImportance, postsWithUnreadsCount: null, newPostCount: null, locale: null };
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
    obj12.postsWithUnreadsCount = tmp38;
    let tmp40;
    if (isForumLikeChannelResult) {
      if (unreadThreadsCountForParent > 0) {
        if (!flag) {
          tmp40 = stateFromStores;
        }
      }
    }
    obj12.newPostCount = tmp40;
    obj12.locale = stateFromStores2;
    obj10.mentionBadge = tmp8(17399)(obj12);
    obj10.unread = unread;
    obj10.resolvedUnreadSetting = resolvedUnreadSetting;
    obj10.mentionCount = mentionCount;
    obj10.muted = flag;
    obj10.channelName = tmp8(5043)(channel);
    obj10.fontScale = fontScale;
    obj10.isSubscriptionGated = isSubscriptionGated;
    obj10.needSubscriptionToAccess = needSubscriptionToAccess;
    obj10.showGuildBadgeIcon = showGuildBadgeIcon;
    let tmp41 = null;
    if (isActivitiesInTextEnabled) {
      tmp41 = memo;
    }
    obj10.end = tmp41;
    items5[1] = tmp8Result5(obj10);
    obj6.children = items5;
    return tmp8Result4(closure_11(tmp2(5909).PressableHighlight, obj6));
  }
  const tmp18 = arr4(5797)(channel.id);
  result = channel(17404).renderChannelSubtitle({ subtitle: subtitle.subtitle, muted: flag, channelId: channel.id, guildId: channel.guild_id });
  const tmp2Result14 = channel(17404);
}));