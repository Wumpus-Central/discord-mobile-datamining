// discord_app/modules/stage_channels/native/components/SpeakerTile.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import StageTileTypes from "../../StageTileTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
const View = fn(17).View;
const ParticipantTypes = fn(5632).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
const result1 = obj.HALF * 1.7777777777777777;
const createStyles = fn(4971);
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
const ColorUtils = fn(4968);
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
    ? function SpeakerTile(channel) {
        const cResult = channel(user[10]).c(66);
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
            if (null != stateFromStores) {
              if (stateFromStores.type === ParticipantTypes.USER) {
                let tmp14 = blocked;
                if (!blocked) {
                  tmp14 = ignored;
                }
                if (cResult[8] === channel) {
                  if (cResult[9] === stateFromStores) {
                    let tmp15 = cResult[10];
                    let tmp16 = cResult[11];
                    let tmp17 = cResult[12];
                  }
                  if (cResult[13] === size) {
                    if (cResult[14] === tmp4) {
                      if (cResult[16] === isScreenLandscape) {
                        if (cResult[17] === size) {
                          if (cResult[18] === width) {
                            if (cResult[20] === tmp4.container) {
                              if (cResult[21] === tmp21) {
                                if (cResult[22] === tmp23) {
                                  let tmp26 = cResult[23];
                                }
                                if (cResult[24] === size) {
                                  if (cResult[25] === tmp4) {
                                    if (cResult[27] === channel.guild_id) {
                                      if (cResult[28] === user) {
                                        let tmp30 = cResult[29];
                                      }
                                      if (cResult[30] !== tmp14) {
                                        let obj3 = tmp14;
                                        if (tmp14) {
                                          obj3 = { opacity: 0.5 };
                                        }
                                        cResult[30] = tmp14;
                                        cResult[31] = obj3;
                                        let tmp32 = obj3;
                                      } else {
                                        tmp32 = cResult[31];
                                      }
                                      if (cResult[32] === stateFromStores.speaking) {
                                        if (cResult[33] === tmp28) {
                                          if (cResult[34] === tmp30) {
                                            if (cResult[35] === tmp32) {
                                              let tmp33 = cResult[36];
                                            }
                                            if (cResult[37] === channel.id) {
                                              if (cResult[38] === user.id) {
                                                let tmp37 = cResult[39];
                                                let tmp38 = cResult[40];
                                              }
                                              if (cResult[41] === tmp4.avatarContainer) {
                                                if (cResult[42] === tmp33) {
                                                  if (cResult[43] === tmp37) {
                                                    if (cResult[44] === tmp38) {
                                                      let tmp42 = cResult[45];
                                                    }
                                                    if (cResult[46] === blocked) {
                                                      if (cResult[47] === ignored) {
                                                        if (cResult[48] === tmp14) {
                                                          if (cResult[49] === tmp4.blocked) {
                                                            if (cResult[50] === tmp4.restricted) {
                                                              let tmp46 = cResult[51];
                                                            }
                                                            if (cResult[52] === tmp16) {
                                                              if (cResult[53] === tmp4.nameplateText) {
                                                                let tmp55 = cResult[54];
                                                              }
                                                              if (cResult[55] === tmp4.nameplateContainer) {
                                                                if (cResult[56] === tmp46) {
                                                                  if (cResult[57] === tmp55) {
                                                                    let tmp58 = cResult[58];
                                                                  }
                                                                  if (cResult[59] === tmp15) {
                                                                    if (cResult[60] === tmp12) {
                                                                      if (cResult[61] === tmp42) {
                                                                        if (cResult[62] === tmp58) {
                                                                          if (cResult[63] === tmp17) {
                                                                            if (cResult[64] === tmp26) {
                                                                              let tmp62 = cResult[65];
                                                                            }
                                                                            return tmp62;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj4 = {
                                                                    accessibilityLabel: tmp17,
                                                                    accessibilityRole: "button",
                                                                    style: tmp26,
                                                                    onPress: tmp12,
                                                                    children: null,
                                                                  };
                                                                  const items1 = [tmp42, tmp58];
                                                                  obj4.children = items1;
                                                                  const tmp64 = closure_8(tmp15, obj4);
                                                                  cResult[59] = tmp15;
                                                                  cResult[60] = tmp12;
                                                                  cResult[61] = tmp42;
                                                                  cResult[62] = tmp58;
                                                                  cResult[63] = tmp17;
                                                                  cResult[64] = tmp26;
                                                                  cResult[65] = tmp64;
                                                                  tmp62 = tmp64;
                                                                }
                                                              }
                                                              const obj5 = {
                                                                style: tmp4.nameplateContainer,
                                                                children: null,
                                                              };
                                                              const items2 = [tmp46, tmp55];
                                                              obj5.children = items2;
                                                              const tmp61 = closure_8(View, obj5);
                                                              cResult[55] = tmp4.nameplateContainer;
                                                              cResult[56] = tmp46;
                                                              cResult[57] = tmp55;
                                                              cResult[58] = tmp61;
                                                              tmp58 = tmp61;
                                                            }
                                                            const obj6 = {
                                                              lineClamp: 1,
                                                              style: tmp4.nameplateText,
                                                              variant: "text-sm/medium",
                                                              color: "text-overlay-light",
                                                              children: tmp16,
                                                            };
                                                            const tmp57 = closure_7(tmp(tmp2[23]).Text, obj6);
                                                            cResult[52] = tmp16;
                                                            cResult[53] = tmp4.nameplateText;
                                                            cResult[54] = tmp57;
                                                            tmp55 = tmp57;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let tmp48Result = tmp14;
                                                    if (tmp14) {
                                                      const items3 = [tmp4.restricted];
                                                      let blocked1 = null;
                                                      if (blocked) {
                                                        blocked1 = tmp4.blocked;
                                                      }
                                                      const obj7 = { style: null, children: null };
                                                      items3[1] = blocked1;
                                                      obj7.style = items3;
                                                      let tmp51 = blocked;
                                                      if (blocked) {
                                                        const obj8 = {
                                                          source: tmp5(tmp2[21]),
                                                          size: tmp(tmp2[19]).Icon.Sizes.EXTRA_SMALL,
                                                          color: tmp5(tmp2[6]).unsafe_rawColors.RED_400,
                                                        };
                                                        tmp51 = closure_7(tmp(tmp2[19]).Icon, obj8);
                                                      }
                                                      const items4 = [tmp51];
                                                      let tmp53 = ignored;
                                                      if (ignored) {
                                                        const obj9 = {
                                                          source: tmp5(tmp2[22]),
                                                          size: tmp(tmp2[19]).Icon.Sizes.EXTRA_SMALL,
                                                        };
                                                        tmp53 = closure_7(tmp(tmp2[19]).Icon, obj9);
                                                      }
                                                      items4[1] = tmp53;
                                                      obj7.children = items4;
                                                      tmp48Result = closure_8(View, obj7);
                                                    }
                                                    cResult[46] = blocked;
                                                    cResult[47] = ignored;
                                                    cResult[48] = tmp14;
                                                    cResult[49] = tmp4.blocked;
                                                    cResult[50] = tmp4.restricted;
                                                    cResult[51] = tmp48Result;
                                                    tmp46 = tmp48Result;
                                                  }
                                                }
                                              }
                                              const obj10 = { style: tmp27, children: null };
                                              const items5 = [tmp33, tmp37, tmp38];
                                              obj10.children = items5;
                                              const tmp45 = closure_8(View, obj10);
                                              cResult[41] = tmp4.avatarContainer;
                                              cResult[42] = tmp33;
                                              cResult[43] = tmp37;
                                              cResult[44] = tmp38;
                                              cResult[45] = tmp45;
                                              tmp42 = tmp45;
                                            }
                                            const obj11 = { userId: user.id, channelId: channel.id };
                                            const tmp40 = closure_7(tmp(tmp2[20]).VoiceStatus, obj11);
                                            const obj12 = { userId: user.id, channelId: channel.id };
                                            const tmp41 = closure_7(tmp(tmp2[20]).ModeratorStatus, obj12);
                                            cResult[37] = channel.id;
                                            cResult[38] = user.id;
                                            cResult[39] = tmp40;
                                            cResult[40] = tmp41;
                                            tmp38 = tmp41;
                                            tmp37 = tmp40;
                                          }
                                        }
                                      }
                                      const obj13 = {
                                        style: tmp28,
                                        url: tmp30,
                                        speaking: stateFromStores.speaking,
                                        animate: true,
                                        size: tmp(tmp2[19]).AvatarSizes.XLARGE,
                                        isStageCall: true,
                                        avatarStyle: tmp32,
                                      };
                                      const tmp36 = closure_7(tmp5(tmp2[18]), obj13);
                                      cResult[32] = stateFromStores.speaking;
                                      cResult[33] = tmp28;
                                      cResult[34] = tmp30;
                                      cResult[35] = tmp32;
                                      cResult[36] = tmp36;
                                      tmp33 = tmp36;
                                      const tmp5Result = tmp5(tmp2[18]);
                                    }
                                    const avatarURL = user.getAvatarURL(channel.guild_id, 64);
                                    cResult[27] = channel.guild_id;
                                    cResult[28] = user;
                                    cResult[29] = avatarURL;
                                    tmp30 = avatarURL;
                                  }
                                }
                                if (size === tmp(tmp2[8]).StageTileSize.THIRD) {
                                  const items6 = [tmp4.imageBackground, { paddingBottom: 12 }];
                                  let items7 = items6;
                                } else {
                                  items7 = [tmp4.imageBackground];
                                }
                                cResult[24] = size;
                                cResult[25] = tmp4;
                                cResult[26] = items7;
                              }
                            }
                            const items8 = [tmp20, tmp21, cResult[19]];
                            cResult[20] = tmp4.container;
                            cResult[21] = tmp21;
                            cResult[22] = cResult[19];
                            cResult[23] = items8;
                            tmp26 = items8;
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
                        cResult[16] = isScreenLandscape;
                        cResult[17] = size;
                        cResult[18] = width;
                        cResult[19] = obj15;
                      }
                      const obj16 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
                    }
                  }
                  if (tmp(tmp2[8]).StageTileSize.FULL === size) {
                    let half = tmp4.full;
                    cResult[13] = size;
                    cResult[14] = tmp4;
                    cResult[15] = half;
                  } else if (tmp(tmp2[8]).StageTileSize.HALF !== size) {
                    half = tmp4.third;
                  }
                  half = tmp4.half;
                }
                const tmp18 = tmp5(tmp2[15])(channel, stateFromStores);
                const PressableOpacity = tmp(tmp2[16]).PressableOpacity;
                const intl = tmp(tmp2[17]).intl;
                const obj17 = { name: tmp18 };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[17]).t.ODlyvk, obj17);
                cResult[8] = channel;
                cResult[9] = stateFromStores;
                cResult[10] = PressableOpacity;
                cResult[11] = tmp18;
                cResult[12] = formatToPlainStringResult;
                tmp17 = formatToPlainStringResult;
                tmp16 = tmp18;
                tmp15 = PressableOpacity;
              }
            }
            return null;
          }
          const fn = function z() {
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
    : function SpeakerTile(channel) {
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
        if (null != stateFromStores) {
          if (stateFromStores.type === ParticipantTypes.USER) {
            let tmp10Result = blocked;
            if (!blocked) {
              tmp10Result = ignored;
            }
            const tmp9 = tmp2(tmp3[15])(channel, stateFromStores);
            const obj3 = {
              accessibilityLabel: null,
              accessibilityRole: "button",
              style: null,
              onPress: null,
              children: null,
            };
            const intl = tmp4(tmp3[17]).intl;
            const obj4 = { name: tmp9 };
            obj3.accessibilityLabel = intl.formatToPlainString(tmp4(tmp3[17]).t.ODlyvk, obj4);
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
              obj3.onPress = tmp7;
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
                animate: true,
                size: tmp4(tmp3[19]).AvatarSizes.XLARGE,
                isStageCall: true,
                avatarStyle: null,
              };
              let obj10 = tmp10Result;
              if (tmp10Result) {
                obj10 = { opacity: 0.5 };
              }
              obj9.avatarStyle = obj10;
              const items6 = [closure_7(tmp2(tmp3[18]), obj9), ,];
              const obj11 = { userId: user.id, channelId: channel.id };
              items6[1] = closure_7(tmp4(tmp3[20]).VoiceStatus, obj11);
              const obj12 = { userId: user.id, channelId: channel.id };
              items6[2] = closure_7(tmp4(tmp3[20]).ModeratorStatus, obj12);
              obj8.children = items6;
              const items7 = [closure_8(View, obj8)];
              const obj13 = { style: tmp.nameplateContainer, children: null };
              if (tmp10Result) {
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
                    source: tmp2(tmp3[21]),
                    size: tmp4(tmp3[19]).Icon.Sizes.EXTRA_SMALL,
                    color: tmp2(tmp3[6]).unsafe_rawColors.RED_400,
                  };
                  blocked = closure_7(tmp4(tmp3[19]).Icon, obj15);
                }
                const items9 = [blocked];
                if (ignored) {
                  const obj16 = { source: tmp2(tmp3[22]), size: tmp4(tmp3[19]).Icon.Sizes.EXTRA_SMALL };
                  ignored = closure_7(tmp4(tmp3[19]).Icon, obj16);
                }
                items9[1] = ignored;
                obj14.children = items9;
                tmp10Result = closure_8(View, obj14);
              }
              const items10 = [tmp10Result];
              const obj17 = {
                lineClamp: 1,
                style: tmp.nameplateText,
                variant: "text-sm/medium",
                color: "text-overlay-light",
                children: tmp9,
              };
              items10[1] = closure_7(tmp4(tmp3[23]).Text, obj17);
              obj13.children = items10;
              items7[1] = closure_8(View, obj13);
              obj3.children = items7;
              return closure_8(tmp4(tmp3[16]).PressableOpacity, obj3);
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
