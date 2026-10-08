// discord_app/modules/channel_list_v2/native/items/ThreadChannel.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import inlineStyles from "../../../../../_runtime/07550_inlineStyles.js";
import showLongPressForumPostActionSheetDefault from "../../../action_sheet/native/components/showLongPressForumPostActionSheet.tsx";
import showThreadLongPressActionSheetDefault from "../../../threads/native/components/showThreadLongPressActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(11776);
({ getScaledChannelRowHeight: map1, CHANNEL_MARGIN_VERTICAL } = RedesignChannelListConstants);
const Permissions = fn(1085).Permissions;
const UnreadSetting = fn(5972).UnreadSetting;
let closure_16 = fn(1125).OpenThreadAnalyticsLocations;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  container: {
    marginVertical: CHANNEL_MARGIN_VERTICAL,
    marginStart: 2,
    marginEnd: 8,
    borderRadius: nativeDefault.radii.md,
    flex: 1,
  },
  threadRow: { flex: 0, flexDirection: "row", alignSelf: "stretch" },
  unreadContainer: { width: 8, alignItems: "flex-start", justifyContent: "flex-start" },
  spineSpacer: { width: 28 },
  unreadIcon: null,
  threadLineSegment: null,
};
let size = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  marginLeft: -4,
  marginTop: 12,
};
obj.unreadIcon = size;
let obj3 = {
  marginVertical: CHANNEL_MARGIN_VERTICAL,
  marginStart: 2,
  marginEnd: 8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
obj.threadLineSegment = {
  backgroundColor: nativeDefault.colors.SPINE_DEFAULT,
  width: 2,
  position: "absolute",
  left: 23,
};
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_21 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SpineCurveSvg(color) {
        const cResult = c.c(7);
        color = color.color;
        const sum = __initData2(color.fontScale) / 2 - 16 + 2;
        if (cResult[0] !== sum) {
          const rect = { position: "absolute", left: 23, top: sum };
          cResult[0] = sum;
          cResult[1] = rect;
          let tmp5 = rect;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] !== color) {
          const obj2 = {
            fill: color,
            d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z",
          };
          const tmp8 = constants(inlineStyles.Path, obj2);
          cResult[2] = color;
          cResult[3] = tmp8;
          let tmp6 = tmp8;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp6) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
        const tmp10 = constants(inlineStylesDefault, { width: 12, height: 16, style: tmp5, children: tmp6 });
        cResult[4] = tmp5;
        cResult[5] = tmp6;
        cResult[6] = tmp10;
        tmp9 = tmp10;
      }
    : function SpineCurveSvg(arg0) {
        ({ color, fontScale } = arg0);
        const size = { width: 12, height: 16, style: null, children: null };
        const rect = { position: "absolute", left: 23, top: __initData2(fontScale) / 2 - 16 + 2 };
        size.style = rect;
        size.children = constants(inlineStyles.Path, {
          fill: color,
          d: "M11 16C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H8C2.47715 14 2 8.52285 2 3V0H0V3H0.00542736C0 9.5 1.49449 16 8 16H11Z",
        });
        return constants(inlineStylesDefault, size);
      },
);
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ThreadChannel(channel) {
      const cResult = channel(ownerId[18]).c(76);
      channel = channel.channel;
      ({ selected, threadIndex } = channel);
      ({ threadId, threadCount } = channel);
      const tmp4 = closure_20();
      const id = channel.id;
      ownerId = undefined;
      if (channel != null) {
        ownerId = channel.ownerId;
      }
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      let obj = channel(ownerId[18]);
      const fontScale = channel(ownerId[20]).useFontScale();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          ChannelStore,
          parentChannel,
          UserStore,
          SortedVoiceStateStore,
          VoiceStateStore,
          ReadStateStore,
          SelectedChannelStore,
          PermissionStore,
        ];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel) {
        if (cResult[2] === id) {
          if (cResult[3] === ownerId) {
            if (cResult[4] === parent_id) {
              let tmp17 = cResult[5];
            }
            const stateFromStoresObject = tmp(tmp2[21]).useStateFromStoresObject(first, tmp17);
            const user = stateFromStoresObject.user;
            parentChannel = stateFromStoresObject.parentChannel;
            ({ voiceStates, hasVideo, isLocked, muted, unread, mentionCount, isMentionLowImportance } =
              stateFromStoresObject);
            let num4 = 0;
            const diff = threadCount - 1;
            if (0 === threadIndex) {
              num4 = 2;
            }
            let str = "100%";
            if (threadIndex === diff) {
              const _Math = Math;
              const _Math2 = Math;
              str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
            }
            let num7 = 0;
            if (0 === threadIndex) {
              num7 = id(tmp2[16]).radii.round;
            }
            let num8 = 0;
            if (0 === threadIndex) {
              num8 = id(tmp2[16]).radii.round;
            }
            let num9 = 0;
            if (threadIndex === diff) {
              num9 = id(tmp2[16]).radii.round;
            }
            let num10 = 0;
            if (threadIndex === diff) {
              num10 = id(tmp2[16]).radii.round;
            }
            if (cResult[6] === num4) {
              if (cResult[7] === str) {
                if (cResult[8] === num7) {
                  if (cResult[9] === num8) {
                    if (cResult[10] === num9) {
                      if (cResult[11] === num10) {
                        let tmp26 = cResult[12];
                      }
                      if (cResult[13] === tmp4.threadLineSegment) {
                        if (cResult[14] === tmp26) {
                          let tmp27 = cResult[15];
                        }
                        let num21 = 0;
                        if (null != voiceStates) {
                          num21 = voiceStates.length;
                        }
                        if (cResult[16] === channel) {
                          if (cResult[17] === hasVideo) {
                            if (cResult[18] === isLocked) {
                              if (cResult[19] === selected) {
                                let tmp31 = cResult[20];
                              }
                              const tmp33 = id(tmp2[22])(tmp31);
                              if (cResult[21] !== channel) {
                                function ce() {
                                  transitionToChannel.transitionToThread(channel, { source: constants.CHANNEL_LIST });
                                }
                                cResult[21] = channel;
                                cResult[22] = ce;
                                let tmp34 = ce;
                              } else {
                                tmp34 = cResult[22];
                              }
                              if (cResult[23] === channel) {
                                if (cResult[24] === parentChannel) {
                                  if (cResult[25] === user) {
                                    let tmp35 = cResult[26];
                                  }
                                  if (cResult[27] === fontScale) {
                                    if (cResult[28] === tmp4.threadLineSegment.backgroundColor) {
                                      let tmp36 = cResult[29];
                                    }
                                    if (cResult[30] === tmp4.unreadIcon) {
                                      if (cResult[31] === unread) {
                                        let tmp41 = cResult[32];
                                      }
                                      if (cResult[33] === tmp4.unreadContainer) {
                                        if (cResult[34] === tmp41) {
                                          let tmp45 = cResult[35];
                                        }
                                        if (cResult[36] !== tmp4.spineSpacer) {
                                          const obj2 = { style: tmp4.spineSpacer };
                                          const tmp52 = closure_17(user, obj2);
                                          cResult[36] = tmp4.spineSpacer;
                                          cResult[37] = tmp52;
                                          let tmp49 = tmp52;
                                        } else {
                                          tmp49 = cResult[37];
                                        }
                                        if (cResult[38] === channel) {
                                          if (cResult[39] === mentionCount) {
                                            if (cResult[40] === unread) {
                                              let tmp54 = cResult[41];
                                            }
                                            if (cResult[42] !== selected) {
                                              const obj3 = { selected };
                                              cResult[42] = selected;
                                              cResult[43] = obj3;
                                              let tmp56 = obj3;
                                            } else {
                                              tmp56 = cResult[43];
                                            }
                                            if (cResult[44] === channel) {
                                              if (cResult[45] === num21) {
                                                if (cResult[46] === hasVideo) {
                                                  if (cResult[47] === isMentionLowImportance) {
                                                    if (cResult[48] === mentionCount) {
                                                      if (cResult[49] === tmp33) {
                                                        if (cResult[51] === channel) {
                                                          if (cResult[52] === tmp63) {
                                                            if (cResult[53] === voiceStates) {
                                                              let tmp64 = cResult[54];
                                                            }
                                                            if (cResult[55] === channel) {
                                                              if (cResult[56] === tmp35) {
                                                                if (cResult[57] === tmp34) {
                                                                  if (cResult[58] === selected) {
                                                                    if (cResult[59] === muted) {
                                                                      if (cResult[60] === tmp4.container) {
                                                                        if (cResult[61] === tmp54) {
                                                                          if (cResult[62] === tmp56) {
                                                                            if (cResult[63] === tmp57) {
                                                                              if (cResult[64] === tmp64) {
                                                                                if (cResult[65] === unread) {
                                                                                  let tmp71 = cResult[66];
                                                                                }
                                                                                if (cResult[67] === tmp4.threadRow) {
                                                                                  if (cResult[68] === tmp45) {
                                                                                    if (cResult[69] === tmp49) {
                                                                                      if (cResult[70] === tmp71) {
                                                                                        let tmp75 = cResult[71];
                                                                                      }
                                                                                      if (cResult[72] === tmp27) {
                                                                                        if (cResult[73] === tmp36) {
                                                                                          if (cResult[74] === tmp75) {
                                                                                            let tmp79 = cResult[75];
                                                                                          }
                                                                                          return tmp79;
                                                                                        }
                                                                                      }
                                                                                      const obj4 = { children: null };
                                                                                      const items1 = [
                                                                                        tmp27,
                                                                                        tmp36,
                                                                                        tmp75,
                                                                                      ];
                                                                                      obj4.children = items1;
                                                                                      const tmp82 = closure_18(
                                                                                        closure_19,
                                                                                        obj4,
                                                                                      );
                                                                                      cResult[72] = tmp27;
                                                                                      cResult[73] = tmp36;
                                                                                      cResult[74] = tmp75;
                                                                                      cResult[75] = tmp82;
                                                                                      tmp79 = tmp82;
                                                                                    }
                                                                                  }
                                                                                }
                                                                                const obj5 = {
                                                                                  style: tmp40,
                                                                                  children: null,
                                                                                };
                                                                                const items2 = [tmp45, tmp49, tmp71];
                                                                                obj5.children = items2;
                                                                                const tmp78 = closure_18(user, obj5);
                                                                                cResult[67] = tmp4.threadRow;
                                                                                cResult[68] = tmp45;
                                                                                cResult[69] = tmp49;
                                                                                cResult[70] = tmp71;
                                                                                cResult[71] = tmp78;
                                                                                tmp75 = tmp78;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const obj6 = {
                                                              onPress: tmp34,
                                                              onLongPress: tmp35,
                                                              style: tmp53,
                                                              accessible: true,
                                                              accessibilityRole: "button",
                                                              accessibilityLabel: tmp54,
                                                              accessibilityState: tmp56,
                                                              channel,
                                                              selected,
                                                              muted,
                                                              unread,
                                                              resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES,
                                                              hideIcon: true,
                                                              channelInfo: tmp57,
                                                              children: tmp64,
                                                            };
                                                            const tmp74 = closure_17(tmp32(tmp2[32]), obj6);
                                                            cResult[55] = channel;
                                                            cResult[56] = tmp35;
                                                            cResult[57] = tmp34;
                                                            cResult[58] = selected;
                                                            cResult[59] = muted;
                                                            cResult[60] = tmp4.container;
                                                            cResult[61] = tmp54;
                                                            cResult[62] = tmp56;
                                                            cResult[63] = tmp57;
                                                            cResult[64] = tmp64;
                                                            cResult[65] = unread;
                                                            cResult[66] = tmp74;
                                                            tmp71 = tmp74;
                                                          }
                                                        }
                                                        if (0 === voiceStates.length) {
                                                          cResult[51] = channel;
                                                          cResult[52] = tmp63;
                                                          cResult[53] = voiceStates;
                                                          cResult[54] = null;
                                                          tmp64 = null;
                                                        } else {
                                                          if (!tmp63) {
                                                            if (1 !== voiceStates.length) {
                                                              const obj7 = {
                                                                users: null,
                                                                max: 8,
                                                                guildId: null,
                                                                renderIcon: false,
                                                                noPadding: true,
                                                              };
                                                              const tmp32Result = tmp32(tmp2[30]);
                                                              const obj8 = {
                                                                channels: null,
                                                                selectedChannelId: null,
                                                                selectedVoiceChannelId: null,
                                                                voiceStates: null,
                                                              };
                                                              const items3 = [channel];
                                                              obj8.channels = items3;
                                                              const obj9 = {};
                                                              obj9[channel.id] = voiceStates;
                                                              obj8.voiceStates = obj9;
                                                              obj7.users = tmp(tmp2[31]).computeSummarizedVoiceUsers(
                                                                obj8,
                                                              );
                                                              obj7.guildId = channel.guild_id;
                                                              let tmp68 = closure_17(tmp32Result, obj7);
                                                              const tmpResult4 = tmp(tmp2[31]);
                                                            }
                                                          }
                                                          const obj10 = { channel, collapsed: false, voiceStates };
                                                          tmp68 = closure_17(tmp32(tmp2[29]), obj10);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            if (0 === mentionCount) {
                                              let tmp60 = null;
                                              if (tmp33) {
                                                const obj11 = { userCount: num21, video: hasVideo, channel };
                                                tmp60 = closure_17(tmp(tmp2[27]).ConnectedUserLimit, obj11);
                                              }
                                              let tmp59 = tmp60;
                                            } else {
                                              const obj12 = { value: mentionCount, isMentionLowImportance };
                                              tmp59 = closure_17(tmp(tmp2[28]).Badge, obj12);
                                            }
                                            cResult[44] = channel;
                                            cResult[45] = num21;
                                            cResult[46] = hasVideo;
                                            cResult[47] = isMentionLowImportance;
                                            cResult[48] = mentionCount;
                                            cResult[49] = tmp33;
                                            cResult[50] = tmp59;
                                          }
                                        }
                                        const obj13 = { channel, unread, mentionCount };
                                        const tmp55 = tmp32(tmp2[26])(obj13);
                                        cResult[38] = channel;
                                        cResult[39] = mentionCount;
                                        cResult[40] = unread;
                                        cResult[41] = tmp55;
                                        tmp54 = tmp55;
                                      }
                                      const obj14 = { style: tmp4.unreadContainer, children: tmp41 };
                                      const tmp48 = closure_17(user, obj14);
                                      cResult[33] = tmp4.unreadContainer;
                                      cResult[34] = tmp41;
                                      cResult[35] = tmp48;
                                      tmp45 = tmp48;
                                    }
                                    let tmp42 = unread;
                                    if (unread) {
                                      const obj15 = { style: tmp4.unreadIcon };
                                      tmp42 = closure_17(user, obj15);
                                    }
                                    cResult[30] = tmp4.unreadIcon;
                                    cResult[31] = unread;
                                    cResult[32] = tmp42;
                                    tmp41 = tmp42;
                                  }
                                  const obj16 = { color: tmp4.threadLineSegment.backgroundColor, fontScale };
                                  const tmp39 = closure_17(closure_21, obj16);
                                  cResult[27] = fontScale;
                                  cResult[28] = tmp4.threadLineSegment.backgroundColor;
                                  cResult[29] = tmp39;
                                  tmp36 = tmp39;
                                }
                              }
                              function he() {
                                if (channel.isForumPost()) {
                                  if (null != user) {
                                    if (null != parentChannel) {
                                      if (parentChannel.isForumLikeChannel()) {
                                        showLongPressForumPostActionSheetDefault(channel, parentChannel);
                                      }
                                    }
                                  }
                                }
                                showThreadLongPressActionSheetDefault(channel.id);
                              }
                              cResult[23] = channel;
                              cResult[24] = parentChannel;
                              cResult[25] = user;
                              cResult[26] = he;
                              tmp35 = he;
                            }
                          }
                        }
                        const obj17 = { channel, locked: isLocked, video: hasVideo, selected };
                        cResult[16] = channel;
                        cResult[17] = hasVideo;
                        cResult[18] = isLocked;
                        cResult[19] = selected;
                        cResult[20] = obj17;
                        tmp31 = obj17;
                      }
                      const obj18 = { style: null };
                      const items4 = [tmp4.threadLineSegment, tmp26];
                      obj18.style = items4;
                      const tmp30 = closure_17(user, obj18);
                      cResult[13] = tmp4.threadLineSegment;
                      cResult[14] = tmp26;
                      cResult[15] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                }
              }
            }
            const obj19 = {
              top: num4,
              height: str,
              borderTopRightRadius: num7,
              borderTopLeftRadius: num8,
              borderBottomRightRadius: num9,
              borderBottomLeftRadius: num10,
            };
            cResult[6] = num4;
            cResult[7] = str;
            cResult[8] = num7;
            cResult[9] = num8;
            cResult[10] = num9;
            cResult[11] = num10;
            cResult[12] = obj19;
            tmp26 = obj19;
            const tmpResult3 = tmp(tmp2[21]);
          }
        }
      }
      const fn = function p() {
        const isMutedResult = JoinedThreadsStore.isMuted(id);
        const obj = {
          user: UserStore.getUser(ownerId),
          parentChannel: ChannelStore.getChannel(parent_id),
          voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel),
          hasVideo: VoiceStateStore.hasVideo(channel.id),
          isLocked: !PermissionStore.can(Permissions.CONNECT, channel),
          muted: isMutedResult,
          unread: null,
          mentionCount: null,
          isMentionLowImportance: null,
          selectedVoiceChannelId: null,
        };
        let hasUnreadResult = !isMutedResult;
        if (!isMutedResult) {
          hasUnreadResult = ReadStateStore.hasUnread(id);
        }
        obj.unread = hasUnreadResult;
        obj.mentionCount = ReadStateStore.getMentionCount(id);
        obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(id);
        obj.selectedVoiceChannelId = SelectedChannelStore.getVoiceChannelId();
        return obj;
      };
      cResult[1] = channel;
      cResult[2] = id;
      cResult[3] = ownerId;
      cResult[4] = parent_id;
      cResult[5] = fn;
      tmp17 = fn;
      const tmpResult = channel(ownerId[20]);
    }
  : function ThreadChannel(channel) {
      channel = channel.channel;
      ({ selected, threadIndex } = channel);
      const threadCount = channel.threadCount;
      let parent_id;
      let fontScale;
      let user;
      let parentChannel;
      const tmp = closure_20();
      noop = tmp;
      const id = channel.id;
      let ownerId;
      if (channel != null) {
        ownerId = channel.ownerId;
      }
      parent_id = undefined;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      let obj = threadCount;
      fontScale = channel(threadCount[20]).useFontScale();
      const obj2 = channel(threadCount[20]);
      const items = [
        parent_id,
        ownerId,
        UserStore,
        SortedVoiceStateStore,
        VoiceStateStore,
        user,
        parentChannel,
        fontScale,
      ];
      const stateFromStoresObject = channel(threadCount[21]).useStateFromStoresObject(items, () => {
        const isMutedResult = JoinedThreadsStore.isMuted(id);
        const obj = {
          user: UserStore.getUser(ownerId),
          parentChannel: ChannelStore.getChannel(parent_id),
          voiceStates: SortedVoiceStateStore.getVoiceStatesForChannel(channel),
          hasVideo: VoiceStateStore.hasVideo(channel.id),
          isLocked: !PermissionStore.can(Permissions.CONNECT, channel),
          muted: isMutedResult,
          unread: null,
          mentionCount: null,
          isMentionLowImportance: null,
          selectedVoiceChannelId: null,
        };
        let hasUnreadResult = !isMutedResult;
        if (!isMutedResult) {
          hasUnreadResult = ReadStateStore.hasUnread(id);
        }
        obj.unread = hasUnreadResult;
        obj.mentionCount = ReadStateStore.getMentionCount(id);
        obj.isMentionLowImportance = ReadStateStore.getIsMentionLowImportance(id);
        obj.selectedVoiceChannelId = SelectedChannelStore.getVoiceChannelId();
        return obj;
      });
      user = stateFromStoresObject.user;
      parentChannel = stateFromStoresObject.parentChannel;
      ({ voiceStates, hasVideo, unread, mentionCount } = stateFromStoresObject);
      const items1 = [threadIndex, threadCount, fontScale, tmp.threadLineSegment];
      ({ isLocked, muted, isMentionLowImportance, selectedVoiceChannelId } = stateFromStoresObject);
      let num = 0;
      const memo = noop.useMemo(() => {
        const style = [threadLineSegment.threadLineSegment];
        let num = 0;
        const diff = threadCount - 1;
        if (0 === threadIndex) {
          num = 2;
        }
        const obj = {
          top: num,
          height: null,
          borderTopRightRadius: null,
          borderTopLeftRadius: null,
          borderBottomRightRadius: null,
          borderBottomLeftRadius: null,
        };
        let str = "100%";
        if (threadIndex === diff) {
          const _Math = Math;
          const _Math2 = Math;
          str = Math.ceil(Math.max(8, 1.2 * fontScale * 8));
        }
        obj.height = str;
        let num4 = 0;
        if (0 === threadIndex) {
          num4 = nativeDefault.radii.round;
        }
        obj.borderTopRightRadius = num4;
        let num5 = 0;
        if (0 === threadIndex) {
          num5 = nativeDefault.radii.round;
        }
        obj.borderTopLeftRadius = num5;
        let num6 = 0;
        if (threadIndex === diff) {
          num6 = nativeDefault.radii.round;
        }
        obj.borderBottomRightRadius = num6;
        let num7 = 0;
        if (threadIndex === diff) {
          num7 = nativeDefault.radii.round;
        }
        obj.borderBottomLeftRadius = num7;
        style[1] = obj;
        return constants(View, { style });
      }, items1);
      if (null != voiceStates) {
        num = voiceStates.length;
      }
      let tmp8 = threadIndex;
      const items2 = [channel];
      const obj3 = channel(threadCount[21]);
      const items3 = [channel, user, parentChannel];
      const callback = obj4.useCallback(() => {
        transitionToChannel.transitionToThread(channel, { source: constants.CHANNEL_LIST });
      }, items2);
      const items4 = [memo, ,];
      const callback1 = obj4.useCallback(() => {
        if (channel.isForumPost()) {
          if (null != user) {
            if (null != parentChannel) {
              if (parentChannel.isForumLikeChannel()) {
                showLongPressForumPostActionSheetDefault(channel, parentChannel);
              }
            }
          }
        }
        showThreadLongPressActionSheetDefault(channel.id);
      }, items3);
      items4[1] = closure_17(closure_21, { color: tmp.threadLineSegment.backgroundColor, fontScale });
      const obj6 = { style: tmp.threadRow, children: null };
      const obj7 = { style: tmp.unreadContainer, children: null };
      let tmp14Result = unread;
      if (unread) {
        const obj8 = { style: tmp.unreadIcon };
        tmp14Result = closure_17(tmp15, obj8);
      }
      obj7.children = tmp14Result;
      const items5 = [closure_17(id, obj7), closure_17(id, { style: tmp.spineSpacer })];
      const obj10 = {
        onPress: callback,
        onLongPress: callback1,
        style: tmp.container,
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityState: null,
        channel: null,
        selected: null,
        muted: null,
        unread: null,
        resolvedUnreadSetting: null,
        hideIcon: true,
        channelInfo: null,
        children: null,
      };
      const obj5 = { color: tmp.threadLineSegment.backgroundColor, fontScale };
      const obj9 = { style: tmp.spineSpacer };
      const tmp9 = threadIndex(obj[22])({ channel, locked: isLocked, video: hasVideo, selected });
      obj10.accessibilityLabel = tmp8(obj[26])({ channel, unread, mentionCount });
      obj10.accessibilityState = { selected };
      obj10.channel = channel;
      obj10.selected = selected;
      obj10.muted = muted;
      obj10.unread = unread;
      obj10.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
      if (0 === mentionCount) {
        let tmp14Result4 = null;
        if (tmp9) {
          const obj11 = { userCount: num, video: hasVideo, channel };
          tmp14Result4 = closure_17(tmp4(obj[27]).ConnectedUserLimit, obj11);
        }
        let tmp14Result5 = tmp14Result4;
      } else {
        const obj12 = { value: mentionCount, isMentionLowImportance };
        tmp14Result5 = closure_17(tmp4(obj[28]).Badge, obj12);
      }
      obj10.channelInfo = tmp14Result5;
      if (0 === voiceStates.length) {
        const obj13 = { children: null };
        obj10.children = null;
        items5[2] = closure_17(tmp8Result, obj10);
        obj6.children = items5;
        items4[2] = closure_18(tmp15, obj6);
        obj13.children = items4;
        return closure_18(closure_19, obj13);
      } else {
        if (selectedVoiceChannelId !== channel.threadId) {
          if (1 !== voiceStates.length) {
            const obj14 = { users: null, max: 8, guildId: null, renderIcon: false, noPadding: true };
            const tmp8Result2 = tmp8(obj[30]);
            const obj15 = { channels: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
            const items6 = [channel];
            obj15.channels = items6;
            const obj16 = {};
            obj16[channel.id] = voiceStates;
            obj15.voiceStates = obj16;
            obj14.users = tmp4(obj[31]).computeSummarizedVoiceUsers(obj15);
            obj14.guildId = channel.guild_id;
            let tmp14Result6 = closure_17(tmp8Result2, obj14);
            const tmp4Result = tmp4(obj[31]);
          }
        }
        tmp8 = tmp8(obj[29]);
        obj = { channel, collapsed: false, voiceStates };
        tmp14Result6 = closure_17(tmp8, obj);
      }
      tmp8Result = tmp8(obj[32]);
    };
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.SPINE_DEFAULT, width: 2, position: "absolute", left: 23 };
size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/ThreadChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectedThreadChannel(threadId) {
      const cResult = threadId(576).c(9);
      threadId = threadId.threadId;
      ({ threadIndex, threadCount, selected } = threadId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== threadId) {
        const fn = function o() {
          return ChannelStore.getChannel(threadId);
        };
        cResult[1] = threadId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = threadId(576);
      const stateFromStores = threadId(504).useStateFromStores(first, tmp6);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === selected) {
            if (cResult[5] === threadCount) {
              if (cResult[6] === threadId) {
              }
            }
          }
        }
        const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
        const tmp11 = closure_17(closure_22, obj2);
        cResult[3] = stateFromStores;
        cResult[4] = selected;
        cResult[5] = threadCount;
        cResult[6] = threadId;
        cResult[7] = threadIndex;
        cResult[8] = tmp11;
      }
      const tmpResult = threadId(504);
    }
  : function ConnectedThreadChannel(threadId) {
      threadId = threadId.threadId;
      ({ threadIndex, threadCount, selected } = threadId);
      const items = [ChannelStore];
      const stateFromStores = threadId(504).useStateFromStores(items, () => ChannelStore.getChannel(threadId));
      let tmp2 = null;
      if (null != stateFromStores) {
        const obj2 = { channel: stateFromStores, threadId, threadIndex, threadCount, selected };
        tmp2 = closure_17(closure_22, obj2);
      }
      return tmp2;
    };
