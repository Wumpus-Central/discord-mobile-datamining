// discord_app/modules/launchpad/native/shared/TextChannel.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FormConstants from "../../../../design/void/Form/native/FormConstants.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import useChannelRoleSubscriptionStatusDefault from "../../../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import useEmbeddedAppsForChannelDefault from "../../../activities/useEmbeddedAppsForChannel.tsx";
import useMessagePreviewsDefault from "../../../main_tabs_v2/useMessagePreviews.tsx";
import ChannelItemEmbeddedActivitiesDefault from "../../../guild_sidebar/native/ChannelItemEmbeddedActivities.tsx";
import renderChannelItemDefault from "renderChannelItem.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import UnreadBadgeDefault from "UnreadBadge.tsx";
import renderChannelBadgeDefault from "renderChannelBadge.tsx";
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper.tsx";
import usePressUnderlayColorDefault from "../../../main_tabs_v2/native/shared_components/util/usePressUnderlayColor.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ActiveJoinedThreadsStore from "../../../threads/ActiveJoinedThreadsStore.tsx";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel, dependencyMap;

let c10;
let unpackModuleId;
const View = react_native.View;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  let rect;
  const obj = {
    pressable: { flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 },
    selectedBorder: rect,
    rowSelected: { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED },
  };
  ({ flex: 1, borderRadius: getLayoutStylesDefault().container.borderRadius, marginBottom: 1 });
  rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderRadius: nativeDefault.radii.md,
  };
  ({ borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let first;
        let isMentionLowImportance;
        let isSubscriptionGated;
        let items3;
        let locale;
        let mentionCount;
        let muted;
        let navigationReplace;
        let needSubscriptionToAccess;
        let newChannel;
        let obj6;
        let optInEnabled;
        let resolvedUnreadSetting;
        let selected;
        let showGuildBadgeIcon;
        let subtitle;
        let tmp17Result4;
        let tmp59;
        let tmp61;
        let tmp62;
        let unread;
        const obj = channel(576);
        const cResult = obj.c(47);
        channel = channel.channel;
        ({ muted, navigationReplace, selected } = channel);
        let tmp4 = undefined !== muted;
        ({ subtitle, showGuildBadgeIcon } = channel);
        if (tmp4) {
          tmp4 = muted;
        }
        const id = channel.id;
        const isForumLikeChannelResult = channel.isForumLikeChannel();
        const guild_id = channel.guild_id;
        const tmpResult = channel(16325);
        const channelUnreadBadgeState = tmpResult.useChannelUnreadBadgeState(channel, tmp4);
        ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
        ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
        const tmp8 = closure_12(tmp4, unread);
        const tmpResult12 = channel(6782);
        const hasActiveThreads = tmpResult12.useHasActiveThreads(channel).hasActiveThreads;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ActiveJoinedThreadsStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.guild_id) {
          let tmp11;
          let tmp13;
          let tmp15;
          let tmp22;
          let tmp27;
          let tmp26;
          if (cResult[2] === channel.id) {
            tmp11 = cResult[3];
          }
          const _Symbol = Symbol;
          const tmpResult13 = channel(504);
          const stateFromStores = tmpResult13.useStateFromStores(first, tmp11);
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [ChannelStore];
            cResult[4] = items1;
            tmp13 = items1;
          } else {
            tmp13 = cResult[4];
          }
          if (cResult[5] !== channel.parent_id) {
            const fn2 = function k() {
              return ChannelStore.getChannel(channel.parent_id);
            };
            cResult[5] = channel.parent_id;
            cResult[6] = fn2;
            tmp15 = fn2;
          } else {
            tmp15 = cResult[6];
          }
          const tmpResult14 = channel(504);
          const stateFromStores1 = tmpResult14.useStateFromStores(tmp13, tmp15);
          useChannelNameDefault(stateFromStores1);
          const tmpResult15 = channel(7539);
          const unreadThreadsCountForParent = tmpResult15.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
          if (cResult[7] !== (unread && !tmp4)) {
            const obj2 = { unread: unread && !tmp4 };
            cResult[7] = unread && !tmp4;
            cResult[8] = obj2;
            tmp22 = obj2;
          } else {
            tmp22 = cResult[8];
          }
          const tmp23 = useMessagePreviewsDefault(channel, tmp22);
          const tmpResult16 = channel(6842);
          const isChannelSpoilerGated = tmpResult16.useIsChannelSpoilerGated(channel);
          const _Symbol2 = Symbol;
          const tmpResult17 = channel(5609);
          const fontScale = tmpResult17.useFontScale();
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [LocaleStore];
            class X {
              constructor() {
                return locale.locale;
              }
            }
            cResult[9] = items2;
            cResult[10] = X;
            tmp27 = X;
            tmp26 = items2;
          } else {
            tmp26 = cResult[9];
            tmp27 = cResult[10];
          }
          const tmpResult18 = channel(504);
          const stateFromStores2 = tmpResult18.useStateFromStores(tmp26, tmp27);
          const tmp30 = usePressUnderlayColorDefault();
          ({ isSubscriptionGated, needSubscriptionToAccess } = useChannelRoleSubscriptionStatusDefault(channel.id));
          useChannelRoleSubscriptionStatusDefault(channel.id);
          const tmp32 = useEmbeddedAppsForChannelDefault(channel);
          if (null != tmp23) {
            let result;
            if (!isChannelSpoilerGated) {
              if (cResult[11] === channel) {
                if (cResult[12] === tmp23) {
                  if (cResult[13] === tmp4) {
                    if (cResult[14] === "text-muted") {
                      result = cResult[15];
                    }
                  }
                }
              }
              const obj3 = {
                channel: null,
                message: tmp23,
                color: "text-muted",
                muted: tmp4,
                layout: channel(7525).ChannelListLayoutTypes.COMPACT,
              };
              class X {
                constructor() {
                  return locale.locale;
                }
              }
              const ChannelRowPreview = tmp(12503).ChannelRowPreview;
              const tmp35 = closure_10(ChannelRowPreview, obj3);
              cResult[11] = channel;
              cResult[12] = tmp23;
              cResult[13] = tmp4;
              cResult[14] = "text-muted";
              cResult[15] = tmp35;
              result = tmp35;
            }
            channel(9033);
            class X {
              constructor() {
                return locale.locale;
              }
            }
            if (cResult[16] === tmp32) {
              let tmp39;
              let rowSelected;
              if (cResult[17] === tmp38) {
                tmp39 = cResult[18];
              }
              const tmp17Result = renderChannelPressableWrapperDefault;
              const PressableHighlight = tmp(5916).PressableHighlight;
              class X {
                constructor() {
                  return locale.locale;
                }
              }
              if (undefined !== selected && selected) {
                rowSelected = tmp8.rowSelected;
              }
              if (cResult[19] === tmp8.pressable) {
                let tmp43;
                let tmp44;
                if (cResult[20] === rowSelected) {
                  tmp43 = cResult[21];
                }
                if (cResult[22] !== tmp30) {
                  class X {
                    constructor() {
                      return locale.locale;
                    }
                  }
                  cResult[22] = tmp30;
                  cResult[23] = tmp46;
                  tmp44 = tmp46;
                } else {
                  tmp44 = cResult[23];
                }
                channel(17434);
                class X {
                  constructor() {
                    return locale.locale;
                  }
                }
                if (cResult[24] === channel) {
                  if (cResult[25] === mentionCount) {
                    let tmp49;
                    if (cResult[26] === unread) {
                      tmp49 = cResult[27];
                    }
                    if (cResult[28] === (undefined !== selected && selected)) {
                      let tmp51;
                      if (cResult[29] === tmp8.selectedBorder) {
                        tmp51 = cResult[30];
                      }
                      if (cResult[31] === tmp4) {
                        if (cResult[32] === resolvedUnreadSetting) {
                          let tmp53;
                          if (cResult[33] === unread) {
                            tmp53 = cResult[34];
                          }
                          const obj5 = {
                            channel,
                            channelCategoryName: null,
                            subtitle: result,
                            hasActiveThreads,
                            unreadBadge: tmp53,
                            mentionBadge: tmp17Result4(obj6),
                            unread,
                            resolvedUnreadSetting,
                            mentionCount,
                            muted: tmp4,
                            channelName: useChannelNameDefault(channel),
                            fontScale,
                            isSubscriptionGated,
                            needSubscriptionToAccess,
                            showGuildBadgeIcon,
                            end: tmp62,
                          };
                          class X {
                            constructor() {
                              return locale.locale;
                            }
                          }
                          const tmp17Result3 = renderChannelItemDefault;
                          tmp17Result4 = renderChannelBadgeDefault;
                          if (newChannel) {
                            newChannel = optInEnabled;
                          }
                          obj6 = {
                            newChannel,
                            mentionCount,
                            isMentionLowImportance,
                            postsWithUnreadsCount: tmp59,
                            newPostCount: tmp61,
                            locale: stateFromStores2,
                          };
                          tmp59 = undefined;
                          if (isForumLikeChannelResult) {
                            if (unreadThreadsCountForParent > 0) {
                              if (!tmp4) {
                                if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
                                  tmp59 = unreadThreadsCountForParent;
                                }
                              }
                            }
                          }
                          tmp61 = undefined;
                          if (isForumLikeChannelResult) {
                            if (unreadThreadsCountForParent > 0) {
                              if (!tmp4) {
                                tmp61 = stateFromStores;
                              }
                            }
                          }
                          tmp62 = null;
                          if (tmp37) {
                            tmp62 = tmp39;
                          }
                          const tmp17Result1Result = tmp17Result3(obj5);
                          if (cResult[35] === PressableHighlight) {
                            if (cResult[36] === tmp30) {
                              if (cResult[37] === tmp43) {
                                if (cResult[38] === tmp44) {
                                  if (cResult[39] === tmp48) {
                                    if (cResult[40] === tmp49) {
                                      if (cResult[41] === tmp51) {
                                        let tmp64;
                                        if (cResult[42] === tmp17Result1Result) {
                                          tmp64 = cResult[43];
                                        }
                                        if (cResult[44] === tmp17Result) {
                                          let tmp73;
                                          if (cResult[45] === tmp64) {
                                            tmp73 = cResult[46];
                                          }
                                          return tmp73;
                                        }
                                        const tmp17ResultResult = tmp17Result(tmp64);
                                        class X {
                                          constructor() {
                                            return locale.locale;
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
                          const obj7 = {
                            style: tmp43,
                            underlayColor: tmp30,
                            androidRippleConfig: tmp44,
                            children: items3,
                          };
                          const merged = Object.assign(tmp48);
                          const merged1 = Object.assign(tmp49);
                          items3 = [tmp51, tmp17Result1Result];
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
                        }
                      }
                      class X {
                        constructor() {
                          return locale.locale;
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
                        return locale.locale;
                      }
                    }
                    cResult[28] = undefined !== selected && selected;
                    cResult[29] = tmp8.selectedBorder;
                    cResult[30] = undefined !== selected && selected;
                    tmp51 = tmp52;
                  }
                }
                const obj8 = { channel, unread, mentionCount };
                const tmpResult21 = channel(16852);
                const channelAccessibilityProps = tmpResult21.getChannelAccessibilityProps(obj8);
                cResult[24] = channel;
                cResult[25] = mentionCount;
                cResult[26] = unread;
                cResult[27] = channelAccessibilityProps;
                tmp49 = channelAccessibilityProps;
              }
              const items4 = [tmp8.pressable, rowSelected];
              cResult[19] = tmp8.pressable;
              cResult[20] = rowSelected;
              cResult[21] = items4;
              tmp43 = items4;
            }
            if (tmp38) {
              class X {
                constructor() {
                  return locale.locale;
                }
              }
            }
            cResult[16] = tmp32;
            cResult[17] = tmp38;
            cResult[18] = null;
            tmp39 = tmp40;
          }
          const obj10 = { subtitle, muted: tmp4, channelId: id, guildId: guild_id };
          const tmpResult22 = channel(17433);
          result = tmpResult22.renderChannelSubtitle(obj10);
        }
        const fn = function v() {
          return ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = channel.id;
        cResult[3] = fn;
        tmp11 = fn;
      }
    : (channel) => {
        let closure_2;
        let isMentionLowImportance;
        let isSubscriptionGated;
        let items5;
        let locale;
        let mentionCount;
        let needSubscriptionToAccess;
        let newChannel;
        let obj11;
        let obj12;
        let obj7;
        let optInEnabled;
        let resolvedUnreadSetting;
        let selected;
        let showGuildBadgeIcon;
        let tmp38;
        let tmp40;
        let tmp41;
        let tmp8Result6;
        let unread;
        channel = channel.channel;
        let flag = channel.muted;
        const subtitle = channel.subtitle;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = channel.navigationReplace;
        if (flag2 === undefined) {
          flag2 = false;
        }
        ({ selected, showGuildBadgeIcon } = channel);
        if (selected === undefined) {
          selected = false;
        }
        let arr4;
        dependencyMap = undefined;
        const id = channel.id;
        const isForumLikeChannelResult = channel.isForumLikeChannel();
        const guild_id = channel.guild_id;
        let obj = channel(16325);
        const channelUnreadBadgeState = obj.useChannelUnreadBadgeState(channel, flag);
        ({ newChannel, unread, resolvedUnreadSetting, mentionCount } = channelUnreadBadgeState);
        ({ optInEnabled, isMentionLowImportance } = channelUnreadBadgeState);
        const tmp5 = closure_12(flag, unread);
        const obj2 = channel(6782);
        const hasActiveThreads = obj2.useHasActiveThreads(channel).hasActiveThreads;
        const items = [ActiveJoinedThreadsStore];
        const obj3 = channel(504);
        const stateFromStores = obj3.useStateFromStores(items, () =>
          ActiveJoinedThreadsStore.getNewThreadCount(channel.guild_id, channel.id),
        );
        const items1 = [ChannelStore];
        const obj4 = channel(504);
        const stateFromStores1 = obj4.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
        const tmp9 = arr4(5049)(stateFromStores1);
        const tmp2Result = channel(7539);
        const unreadThreadsCountForParent = tmp2Result.useUnreadThreadsCountForParent(channel.guild_id, channel.id);
        let tmp12 = unread;
        const tmp8Result = arr4(15152);
        if (unread) {
          tmp12 = !flag;
        }
        const tmp8ResultResult = tmp8Result(channel, { unread: tmp12 });
        const tmp2Result8 = channel(6842);
        const isChannelSpoilerGated = tmp2Result8.useIsChannelSpoilerGated(channel);
        const tmp2Result9 = channel(5609);
        const fontScale = tmp2Result9.useFontScale();
        const items2 = [LocaleStore];
        const tmp2Result10 = channel(504);
        const stateFromStores2 = tmp2Result10.useStateFromStores(items2, () => locale.locale);
        const tmp17 = arr4(17431)();
        ({ isSubscriptionGated, needSubscriptionToAccess } = arr4(5804)(channel.id));
        arr4(5804)(channel.id);
        arr4 = tmp8(11687)(channel);
        if (null != tmp8ResultResult) {
          let result;
          if (!isChannelSpoilerGated) {
            const obj5 = {
              channel,
              message: tmp8ResultResult,
              color: "text-muted",
              muted: flag,
              layout: channel(7525).ChannelListLayoutTypes.COMPACT,
            };
            const ChannelRowPreview = tmp2(12503).ChannelRowPreview;
            result = closure_10(ChannelRowPreview, obj5);
          }
          dependencyMap = tmp22;
          const items3 = [arr4.length > 0, arr4];
          const tmp2Result11 = channel(9033);
          const isActivitiesInTextEnabled = tmp2Result11.useIsActivitiesInTextEnabled(channel.id);
          const memo = react.useMemo(() => {
            let tmp = null;
            if (closure_2) {
              const obj = { embeddedApps: arr4 };
              tmp = authStore(ChannelItemEmbeddedActivitiesDefault, obj);
            }
            return tmp;
          }, items3);
          const items4 = [tmp5.pressable];
          let rowSelected;
          const tmp8Result4 = arr4(17429);
          const PressableHighlight = tmp2(5916).PressableHighlight;
          if (selected) {
            rowSelected = tmp5.rowSelected;
          }
          items4[1] = rowSelected;
          const obj6 = {
            style: items4,
            underlayColor: tmp17,
            androidRippleConfig: getThemedRippleConfig(obj7),
            children: items5,
          };
          obj7 = { color: tmp17 };
          const tmp2Result12 = channel(17434);
          const merged = Object.assign(tmp2Result12.useTextChannelPressEvents(channel, flag2));
          const obj8 = { channel, unread, mentionCount };
          const tmp2Result13 = channel(16852);
          const merged1 = Object.assign(tmp2Result13.getChannelAccessibilityProps(obj8));
          if (selected) {
            const obj9 = { style: tmp5.selectedBorder, pointerEvents: "none" };
            selected = closure_10(View, obj9);
          }
          items5 = [selected];
          const obj10 = {
            channel,
            channelCategoryName: tmp9,
            subtitle: result,
            hasActiveThreads,
            unreadBadge: closure_10(arr4(17427), obj11),
            mentionBadge: tmp8Result6(obj12),
            unread,
            resolvedUnreadSetting,
            mentionCount,
            muted: flag,
            channelName: arr4(5049)(channel),
            fontScale,
            isSubscriptionGated,
            needSubscriptionToAccess,
            showGuildBadgeIcon,
            end: tmp41,
          };
          obj11 = { unread, resolvedUnreadSetting, muted: flag };
          const tmp8Result5 = arr4(16852);
          tmp8Result6 = arr4(17428);
          if (newChannel) {
            newChannel = optInEnabled;
          }
          obj12 = {
            newChannel,
            mentionCount,
            isMentionLowImportance,
            postsWithUnreadsCount: tmp38,
            newPostCount: tmp40,
            locale: stateFromStores2,
          };
          tmp38 = undefined;
          if (isForumLikeChannelResult) {
            if (unreadThreadsCountForParent > 0) {
              if (!flag) {
                if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
                  tmp38 = unreadThreadsCountForParent;
                }
              }
            }
          }
          tmp40 = undefined;
          if (isForumLikeChannelResult) {
            if (unreadThreadsCountForParent > 0) {
              if (!flag) {
                tmp40 = stateFromStores;
              }
            }
          }
          tmp41 = null;
          if (isActivitiesInTextEnabled) {
            tmp41 = memo;
          }
          items5[1] = tmp8Result5(obj10);
          return tmp8Result4(closure_11(PressableHighlight, obj6));
        }
        const tmp2Result14 = channel(17433);
        result = tmp2Result14.renderChannelSubtitle({ subtitle, muted: flag, channelId: id, guildId: guild_id });
      },
);
let result = size.fileFinishedImporting("modules/launchpad/native/shared/TextChannel.tsx");

export default memoResult;
