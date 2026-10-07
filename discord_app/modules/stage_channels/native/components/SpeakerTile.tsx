// discord_app/modules/stage_channels/native/components/SpeakerTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import StageTileTypes from "../../StageTileTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(4917).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
const result1 = obj.HALF * 1.7777777777777777;
const createStyles = fn(4896);
let obj2 = {
  container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 },
  full: { height: obj.FULL },
  half: { height: obj.HALF },
  third: { height: obj.THIRD },
  avatarContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: nativeDefault.radii.sm,
  },
  imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" },
  nameplateContainer: null,
  nameplateText: null,
  restricted: null,
  blocked: null,
};
let obj5 = {
  position: "absolute",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  bottom: 4,
  marginHorizontal: 4,
  paddingVertical: 4,
  paddingHorizontal: 8,
  backgroundColor: null,
  borderRadius: 6,
};
const ColorUtils = fn(4733);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3);
obj2.nameplateContainer = obj5;
let obj4 = {
  flex: 1,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
obj2.nameplateText = { color: nativeDefault.colors.WHITE };
let size = {
  borderRadius: nativeDefault.radii.sm,
  width: 16,
  height: 16,
  justifyContent: "center",
  alignItems: "center",
  marginEnd: 4,
};
obj2.restricted = size;
let obj6 = { color: nativeDefault.colors.WHITE };
obj2.blocked = { backgroundColor: nativeDefault.colors.WHITE };
const styles = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
function getSizeStyle(size, speakerTileStyles) {
  if (StageTileTypes.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (StageTileTypes.StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
}
function getTileWidthStyle(arg0, arg1, arg2) {
  const StageTileSize = StageTileTypes.StageTileSize;
  if (arg2) {
    const obj2 = { maxWidth: arg0 === StageTileSize.FULL ? result : result1 };
  } else {
    if (arg0 === StageTileSize.THIRD) {
      const obj3 = { maxWidth: (arg1 - 36) / 3 };
      let obj = obj3;
    } else {
      obj = { flex: 1 };
    }
    return obj;
  }
}
let obj8 = { backgroundColor: nativeDefault.colors.WHITE };
size = fn(2);
const result2 = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(user[10]).c(70);
        channel = channel.channel;
        const participant = channel.participant;
        const size = channel.size;
        const tmp4 = styles();
        const width = participant(user[11])().width;
        const obj = channel(user[10]);
        const isScreenLandscape = channel(user[12]).useIsScreenLandscape();
        user = participant.user;
        ({ blocked, ignored } = participant);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelRTCStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.id) {
          if (cResult[2] === participant.id) {
            let tmp9 = cResult[3];
            let tmp10 = cResult[4];
          }
          const stateFromStores = tmp(tmp2[13]).useStateFromStores(first, tmp9, tmp10);
          if (cResult[5] === channel.id) {
            if (cResult[6] === user.id) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] === channel.guild_id) {
              if (cResult[9] === user.id) {
                let tmp13 = cResult[10];
              }
              const avatarSpeakingColor = tmp(tmp2[15]).useAvatarSpeakingColor(tmp13);
              if (null != stateFromStores) {
                if (stateFromStores.type === ParticipantTypes.USER) {
                  let tmp16 = blocked;
                  if (!blocked) {
                    tmp16 = ignored;
                  }
                  if (cResult[11] === channel) {
                    if (cResult[12] === stateFromStores) {
                      let tmp17 = cResult[13];
                      let tmp18 = cResult[14];
                      let tmp19 = cResult[15];
                    }
                    if (cResult[16] === size) {
                      if (cResult[17] === tmp4) {
                        if (cResult[19] === isScreenLandscape) {
                          if (cResult[20] === size) {
                            if (cResult[21] === width) {
                              if (cResult[23] === tmp4.container) {
                                if (cResult[24] === tmp23) {
                                  if (cResult[25] === tmp25) {
                                    let tmp28 = cResult[26];
                                  }
                                  if (cResult[27] === size) {
                                    if (cResult[28] === tmp4) {
                                      if (cResult[30] === channel.guild_id) {
                                        if (cResult[31] === user) {
                                          let tmp32 = cResult[32];
                                        }
                                        if (cResult[33] !== tmp16) {
                                          let obj3 = tmp16;
                                          if (tmp16) {
                                            obj3 = { opacity: 0.5 };
                                          }
                                          cResult[33] = tmp16;
                                          cResult[34] = obj3;
                                          let tmp34 = obj3;
                                        } else {
                                          tmp34 = cResult[34];
                                        }
                                        if (cResult[35] === stateFromStores.speaking) {
                                          if (cResult[36] === avatarSpeakingColor) {
                                            if (cResult[37] === tmp30) {
                                              if (cResult[38] === tmp32) {
                                                if (cResult[39] === tmp34) {
                                                  let tmp35 = cResult[40];
                                                }
                                                if (cResult[41] === channel.id) {
                                                  if (cResult[42] === user.id) {
                                                    let tmp39 = cResult[43];
                                                    let tmp40 = cResult[44];
                                                  }
                                                  if (cResult[45] === tmp4.avatarContainer) {
                                                    if (cResult[46] === tmp35) {
                                                      if (cResult[47] === tmp39) {
                                                        if (cResult[48] === tmp40) {
                                                          let tmp44 = cResult[49];
                                                        }
                                                        if (cResult[50] === blocked) {
                                                          if (cResult[51] === ignored) {
                                                            if (cResult[52] === tmp16) {
                                                              if (cResult[53] === tmp4.blocked) {
                                                                if (cResult[54] === tmp4.restricted) {
                                                                  let tmp48 = cResult[55];
                                                                }
                                                                if (cResult[56] === tmp18) {
                                                                  if (cResult[57] === tmp4.nameplateText) {
                                                                    let tmp57 = cResult[58];
                                                                  }
                                                                  if (cResult[59] === tmp4.nameplateContainer) {
                                                                    if (cResult[60] === tmp48) {
                                                                      if (cResult[61] === tmp57) {
                                                                        let tmp60 = cResult[62];
                                                                      }
                                                                      if (cResult[63] === tmp17) {
                                                                        if (cResult[64] === tmp12) {
                                                                          if (cResult[65] === tmp28) {
                                                                            if (cResult[66] === tmp44) {
                                                                              if (cResult[67] === tmp60) {
                                                                                if (cResult[68] === tmp19) {
                                                                                  let tmp64 = cResult[69];
                                                                                }
                                                                                return tmp64;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj4 = {
                                                                        accessibilityLabel: tmp19,
                                                                        accessibilityRole: "button",
                                                                        style: tmp28,
                                                                        onPress: tmp12,
                                                                        children: null,
                                                                      };
                                                                      const items1 = [tmp44, tmp60];
                                                                      obj4.children = items1;
                                                                      const tmp66 = closure_8(tmp17, obj4);
                                                                      cResult[63] = tmp17;
                                                                      cResult[64] = tmp12;
                                                                      cResult[65] = tmp28;
                                                                      cResult[66] = tmp44;
                                                                      cResult[67] = tmp60;
                                                                      cResult[68] = tmp19;
                                                                      cResult[69] = tmp66;
                                                                      tmp64 = tmp66;
                                                                    }
                                                                  }
                                                                  const obj5 = {
                                                                    style: tmp4.nameplateContainer,
                                                                    children: null,
                                                                  };
                                                                  const items2 = [tmp48, tmp57];
                                                                  obj5.children = items2;
                                                                  const tmp63 = closure_8(View, obj5);
                                                                  cResult[59] = tmp4.nameplateContainer;
                                                                  cResult[60] = tmp48;
                                                                  cResult[61] = tmp57;
                                                                  cResult[62] = tmp63;
                                                                  tmp60 = tmp63;
                                                                }
                                                                const obj6 = {
                                                                  lineClamp: 1,
                                                                  style: tmp4.nameplateText,
                                                                  variant: "text-sm/medium",
                                                                  color: "text-overlay-light",
                                                                  children: tmp18,
                                                                };
                                                                const tmp59 = closure_7(tmp(tmp2[24]).Text, obj6);
                                                                cResult[56] = tmp18;
                                                                cResult[57] = tmp4.nameplateText;
                                                                cResult[58] = tmp59;
                                                                tmp57 = tmp59;
                                                              }
                                                            }
                                                          }
                                                        }
                                                        let tmp50Result = tmp16;
                                                        if (tmp16) {
                                                          const items3 = [tmp4.restricted];
                                                          let blocked1 = null;
                                                          if (blocked) {
                                                            blocked1 = tmp4.blocked;
                                                          }
                                                          const obj7 = { style: null, children: null };
                                                          items3[1] = blocked1;
                                                          obj7.style = items3;
                                                          let tmp53 = blocked;
                                                          if (blocked) {
                                                            const obj8 = {
                                                              source: tmp5(tmp2[22]),
                                                              size: tmp(tmp2[20]).Icon.Sizes.EXTRA_SMALL,
                                                              color: tmp5(tmp2[6]).unsafe_rawColors.RED_400,
                                                            };
                                                            tmp53 = closure_7(tmp(tmp2[20]).Icon, obj8);
                                                          }
                                                          const items4 = [tmp53];
                                                          let tmp55 = ignored;
                                                          if (ignored) {
                                                            const obj9 = {
                                                              source: tmp5(tmp2[23]),
                                                              size: tmp(tmp2[20]).Icon.Sizes.EXTRA_SMALL,
                                                            };
                                                            tmp55 = closure_7(tmp(tmp2[20]).Icon, obj9);
                                                          }
                                                          items4[1] = tmp55;
                                                          obj7.children = items4;
                                                          tmp50Result = closure_8(View, obj7);
                                                        }
                                                        cResult[50] = blocked;
                                                        cResult[51] = ignored;
                                                        cResult[52] = tmp16;
                                                        cResult[53] = tmp4.blocked;
                                                        cResult[54] = tmp4.restricted;
                                                        cResult[55] = tmp50Result;
                                                        tmp48 = tmp50Result;
                                                      }
                                                    }
                                                  }
                                                  const obj10 = { style: tmp29, children: null };
                                                  const items5 = [tmp35, tmp39, tmp40];
                                                  obj10.children = items5;
                                                  const tmp47 = closure_8(View, obj10);
                                                  cResult[45] = tmp4.avatarContainer;
                                                  cResult[46] = tmp35;
                                                  cResult[47] = tmp39;
                                                  cResult[48] = tmp40;
                                                  cResult[49] = tmp47;
                                                  tmp44 = tmp47;
                                                }
                                                const obj11 = { userId: user.id, channelId: channel.id };
                                                const tmp42 = closure_7(tmp(tmp2[21]).VoiceStatus, obj11);
                                                const obj12 = { userId: user.id, channelId: channel.id };
                                                const tmp43 = closure_7(tmp(tmp2[21]).ModeratorStatus, obj12);
                                                cResult[41] = channel.id;
                                                cResult[42] = user.id;
                                                cResult[43] = tmp42;
                                                cResult[44] = tmp43;
                                                tmp40 = tmp43;
                                                tmp39 = tmp42;
                                              }
                                            }
                                          }
                                        }
                                        const obj13 = {
                                          style: tmp30,
                                          url: tmp32,
                                          speaking: stateFromStores.speaking,
                                          speakingColor: avatarSpeakingColor,
                                          animate: true,
                                          size: tmp(tmp2[20]).AvatarSizes.XLARGE,
                                          isStageCall: true,
                                          avatarStyle: tmp34,
                                        };
                                        const tmp38 = closure_7(tmp5(tmp2[19]), obj13);
                                        cResult[35] = stateFromStores.speaking;
                                        cResult[36] = avatarSpeakingColor;
                                        cResult[37] = tmp30;
                                        cResult[38] = tmp32;
                                        cResult[39] = tmp34;
                                        cResult[40] = tmp38;
                                        tmp35 = tmp38;
                                        const tmp5Result = tmp5(tmp2[19]);
                                      }
                                      const avatarURL = user.getAvatarURL(channel.guild_id, 64);
                                      cResult[30] = channel.guild_id;
                                      cResult[31] = user;
                                      cResult[32] = avatarURL;
                                      tmp32 = avatarURL;
                                    }
                                  }
                                  if (size === tmp(tmp2[8]).StageTileSize.THIRD) {
                                    const items6 = [tmp4.imageBackground, { paddingBottom: 12 }];
                                    let items7 = items6;
                                  } else {
                                    items7 = [tmp4.imageBackground];
                                  }
                                  cResult[27] = size;
                                  cResult[28] = tmp4;
                                  cResult[29] = items7;
                                }
                              }
                              const items8 = [tmp22, tmp23, cResult[22]];
                              cResult[23] = tmp4.container;
                              cResult[24] = tmp23;
                              cResult[25] = cResult[22];
                              cResult[26] = items8;
                              tmp28 = items8;
                            }
                          }
                        }
                        const StageTileSize = tmp(tmp2[8]).StageTileSize;
                        if (!isScreenLandscape) {
                          if (size === StageTileSize.THIRD) {
                            const obj14 = { maxWidth: (width - 36) / 3 };
                            let obj15 = obj14;
                          } else {
                            obj15 = { flex: 1 };
                          }
                          cResult[19] = isScreenLandscape;
                          cResult[20] = size;
                          cResult[21] = width;
                          cResult[22] = obj15;
                        }
                        const obj16 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
                      }
                    }
                    if (tmp(tmp2[8]).StageTileSize.FULL === size) {
                      let half = tmp4.full;
                      cResult[16] = size;
                      cResult[17] = tmp4;
                      cResult[18] = half;
                    } else if (tmp(tmp2[8]).StageTileSize.HALF !== size) {
                      half = tmp4.third;
                    }
                    half = tmp4.half;
                  }
                  const tmp20 = tmp5(tmp2[16])(channel, stateFromStores);
                  const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
                  const intl = tmp(tmp2[18]).intl;
                  const obj17 = { name: tmp20 };
                  const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[18]).t.ODlyvk, obj17);
                  cResult[11] = channel;
                  cResult[12] = stateFromStores;
                  cResult[13] = PressableOpacity;
                  cResult[14] = tmp20;
                  cResult[15] = formatToPlainStringResult;
                  tmp19 = formatToPlainStringResult;
                  tmp18 = tmp20;
                  tmp17 = PressableOpacity;
                }
              }
              return null;
            }
            const obj18 = { userId: user.id, guildId: channel.guild_id };
            cResult[8] = channel.guild_id;
            cResult[9] = user.id;
            cResult[10] = obj18;
            tmp13 = obj18;
          }
          const fn = function b() {
            StageChannelModalActionCreators.showUserProfile({ userId: user.id, channelId: channel.id });
          };
          cResult[5] = channel.id;
          cResult[6] = user.id;
          cResult[7] = fn;
          tmp12 = fn;
          const tmpResult = tmp(tmp2[13]);
        }
        class S {
          constructor() {
            return closure_5.getParticipant(channel.id, participant.id);
          }
        }
        const items9 = [channel.id, participant.id];
        cResult[1] = channel.id;
        cResult[2] = participant.id;
        cResult[3] = S;
        cResult[4] = items9;
        tmp10 = items9;
        tmp9 = S;
        const obj2 = channel(user[12]);
      }
    : (channel) => {
        channel = channel.channel;
        const participant = channel.participant;
        const size = channel.size;
        const tmp = styles();
        const user = participant.user;
        ({ blocked, ignored } = participant);
        const isScreenLandscape = channel(user[12]).useIsScreenLandscape();
        const obj = channel(user[12]);
        const items = [ChannelRTCStore];
        const items1 = [channel.id, participant.id];
        const stateFromStores = channel(user[13]).useStateFromStores(
          items,
          () => ChannelRTCStore.getParticipant(channel.id, participant.id),
          items1,
        );
        const items2 = [channel.id, user.id];
        const callback = noop.useCallback(() => {
          StageChannelModalActionCreators.showUserProfile({ userId: user.id, channelId: channel.id });
        }, items2);
        channel(user[15]);
        if (null != stateFromStores) {
          if (stateFromStores.type === ParticipantTypes.USER) {
            let tmp12Result = blocked;
            if (!blocked) {
              tmp12Result = ignored;
            }
            const tmp11 = tmp2(tmp3[16])(channel, stateFromStores);
            const obj3 = {
              accessibilityLabel: null,
              accessibilityRole: "button",
              style: null,
              onPress: null,
              children: null,
            };
            const intl = tmp4(tmp3[18]).intl;
            const obj4 = { name: tmp11 };
            obj3.accessibilityLabel = intl.formatToPlainString(tmp4(tmp3[18]).t.ODlyvk, obj4);
            const items3 = [tmp.container, ,];
            if (tmp4(tmp3[8]).StageTileSize.FULL === size) {
              let full = tmp.full;
            } else {
              full = tmp4(tmp3[8]).StageTileSize.HALF === size ? tmp.half : tmp.third;
            }
            items3[1] = full;
            const StageTileSize = tmp4(tmp3[8]).StageTileSize;
            if (isScreenLandscape) {
              const obj5 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
            } else {
              if (size === StageTileSize.THIRD) {
                const obj6 = { maxWidth: (participant(user[11])().width - 36) / 3 };
                let obj7 = obj6;
              } else {
                obj7 = { flex: 1 };
              }
              items3[2] = obj7;
              obj3.style = items3;
              obj3.onPress = callback;
              const obj8 = { style: tmp.avatarContainer, children: null };
              if (size === tmp4(tmp3[8]).StageTileSize.THIRD) {
                const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
                let items5 = items4;
              } else {
                items5 = [tmp.imageBackground];
              }
              const obj9 = {
                style: items5,
                url: user.getAvatarURL(channel.guild_id, 64),
                speaking: stateFromStores.speaking,
                speakingColor: tmp9,
                animate: true,
                size: tmp4(tmp3[20]).AvatarSizes.XLARGE,
                isStageCall: true,
                avatarStyle: null,
              };
              let obj10 = tmp12Result;
              if (tmp12Result) {
                obj10 = { opacity: 0.5 };
              }
              obj9.avatarStyle = obj10;
              const items6 = [closure_7(tmp2(tmp3[19]), obj9), ,];
              const obj11 = { userId: user.id, channelId: channel.id };
              items6[1] = closure_7(tmp4(tmp3[21]).VoiceStatus, obj11);
              const obj12 = { userId: user.id, channelId: channel.id };
              items6[2] = closure_7(tmp4(tmp3[21]).ModeratorStatus, obj12);
              obj8.children = items6;
              const items7 = [closure_8(View, obj8)];
              const obj13 = { style: tmp.nameplateContainer, children: null };
              if (tmp12Result) {
                const items8 = [tmp.restricted];
                let blocked1 = null;
                if (blocked) {
                  blocked1 = tmp.blocked;
                }
                const obj14 = { style: null, children: null };
                items8[1] = blocked1;
                obj14.style = items8;
                if (blocked) {
                  const obj15 = {
                    source: tmp2(tmp3[22]),
                    size: tmp4(tmp3[20]).Icon.Sizes.EXTRA_SMALL,
                    color: tmp2(tmp3[6]).unsafe_rawColors.RED_400,
                  };
                  blocked = closure_7(tmp4(tmp3[20]).Icon, obj15);
                }
                const items9 = [blocked];
                if (ignored) {
                  const obj16 = { source: tmp2(tmp3[23]), size: tmp4(tmp3[20]).Icon.Sizes.EXTRA_SMALL };
                  ignored = closure_7(tmp4(tmp3[20]).Icon, obj16);
                }
                items9[1] = ignored;
                obj14.children = items9;
                tmp12Result = closure_8(View, obj14);
              }
              const items10 = [tmp12Result];
              const obj17 = {
                lineClamp: 1,
                style: tmp.nameplateText,
                variant: "text-sm/medium",
                color: "text-overlay-light",
                children: tmp11,
              };
              items10[1] = closure_7(tmp4(tmp3[24]).Text, obj17);
              obj13.children = items10;
              items7[1] = closure_8(View, obj13);
              obj3.children = items7;
              return closure_8(tmp4(tmp3[17]).PressableOpacity, obj3);
            }
          }
        }
        return null;
      },
);
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export { getSizeStyle };
export { getTileWidthStyle };
