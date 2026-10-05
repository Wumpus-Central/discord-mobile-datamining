// discord_app/modules/stage_channels/native/components/SpeakerTile.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import StageTileTypes from "../../StageTileTypes.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils_mod from "../../../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let channel;

let ColorUtils;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
let c9 = result;
const result1 = obj.HALF * 1.7777777777777777;
let createStyles = createStyles_mod;
let obj2 = {
  container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 },
  full: { height: obj.FULL },
  half: { height: obj.HALF },
  third: { height: obj.THIRD },
  avatarContainer: obj3,
  imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" },
  nameplateContainer: obj4,
  nameplateText: obj5,
  restricted: size,
  blocked: obj6,
};
obj3 = {
  flex: 1,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
createStyles = createStyles.createStyles;
obj4 = {
  position: "absolute",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  bottom: 4,
  marginHorizontal: 4,
  paddingVertical: 4,
  paddingHorizontal: 8,
  backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3),
  borderRadius: 6,
};
ColorUtils = ColorUtils_mod;
obj5 = { color: nativeDefault.colors.WHITE };
size = {
  borderRadius: nativeDefault.radii.sm,
  width: 16,
  height: 16,
  justifyContent: "center",
  alignItems: "center",
  marginEnd: 4,
};
obj6 = { backgroundColor: nativeDefault.colors.WHITE };
const styles = createStyles(obj2);
const memo = react.memo;
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
  let obj;
  const StageTileSize = StageTileTypes.StageTileSize;
  const tmp = arg2;
  if (tmp) {
    obj = { maxWidth: arg0 === StageTileSize.FULL ? c9 : result1 };
    const obj2 = { maxWidth: arg0 === StageTileSize.FULL ? c9 : result1 };
  } else if (arg0 === StageTileSize.THIRD) {
    obj = { maxWidth: (arg1 - 36) / 3 };
    const obj3 = { maxWidth: (arg1 - 36) / 3 };
  } else {
    obj = { flex: 1 };
  }
  return obj;
}
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let blocked;
        let first;
        let ignored;
        let items1;
        let items2;
        let items4;
        let items5;
        let user;
        let obj = channel(user[10]);
        const cResult = obj.c(70);
        channel = channel.channel;
        const participant = channel.participant;
        size = channel.size;
        const tmp4 = styles();
        const width = participant(user[11])().width;
        let obj2 = channel(user[12]);
        const isScreenLandscape = obj2.useIsScreenLandscape();
        user = participant.user;
        ({ blocked, ignored } = participant);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelRTCStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.id) {
          let tmp9;
          let tmp10;
          if (cResult[2] === participant.id) {
            tmp9 = cResult[3];
            tmp10 = cResult[4];
          }
          const tmpResult = channel(user[13]);
          const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
          if (cResult[5] === channel.id) {
            let tmp12;
            if (cResult[6] === user.id) {
              tmp12 = cResult[7];
            }
            if (cResult[8] === channel.guild_id) {
              let tmp13;
              if (cResult[9] === user.id) {
                tmp13 = cResult[10];
              }
              const tmpResult2 = channel(user[15]);
              const avatarSpeakingColor = tmpResult2.useAvatarSpeakingColor(tmp13);
              if (null != stateFromStores) {
                if (stateFromStores.type === ParticipantTypes.USER) {
                  if (cResult[11] === channel) {
                    let tmp17;
                    let tmp18;
                    let tmp19;
                    let full;
                    if (cResult[12] === stateFromStores) {
                      tmp17 = cResult[13];
                      tmp18 = cResult[14];
                      tmp19 = cResult[15];
                    }
                    if (cResult[16] === size) {
                      let tmp23;
                      let obj15;
                      if (cResult[17] === tmp4) {
                        tmp23 = cResult[18];
                      }
                      if (cResult[19] === isScreenLandscape) {
                        if (cResult[20] === size) {
                          let tmp24;
                          if (cResult[21] === width) {
                            tmp24 = cResult[22];
                          }
                          if (cResult[23] === tmp4.container) {
                            if (cResult[24] === tmp23) {
                              let tmp25;
                              let items7;
                              if (cResult[25] === tmp24) {
                                tmp25 = cResult[26];
                              }
                              if (cResult[27] === size) {
                                let tmp27;
                                if (cResult[28] === tmp4) {
                                  tmp27 = cResult[29];
                                }
                                if (cResult[30] === channel.guild_id) {
                                  let tmp28;
                                  let tmp30;
                                  if (cResult[31] === user) {
                                    tmp28 = cResult[32];
                                  }
                                  if (cResult[33] !== (blocked || ignored)) {
                                    const tmp31 = (blocked || ignored) && { opacity: 0.5 };
                                    cResult[33] = blocked || ignored;
                                    cResult[34] = tmp31;
                                    tmp30 = tmp31;
                                  } else {
                                    tmp30 = cResult[34];
                                  }
                                  if (cResult[35] === stateFromStores.speaking) {
                                    if (cResult[36] === avatarSpeakingColor) {
                                      if (cResult[37] === tmp27) {
                                        if (cResult[38] === tmp28) {
                                          let tmp32;
                                          if (cResult[39] === tmp30) {
                                            tmp32 = cResult[40];
                                          }
                                          if (cResult[41] === channel.id) {
                                            let tmp36;
                                            let tmp37;
                                            if (cResult[42] === user.id) {
                                              tmp36 = cResult[43];
                                              tmp37 = cResult[44];
                                            }
                                            if (cResult[45] === tmp4.avatarContainer) {
                                              if (cResult[46] === tmp32) {
                                                if (cResult[47] === tmp36) {
                                                  let tmp41;
                                                  if (cResult[48] === tmp37) {
                                                    tmp41 = cResult[49];
                                                  }
                                                  if (cResult[50] === blocked) {
                                                    if (cResult[51] === ignored) {
                                                      if (cResult[52] === (blocked || ignored)) {
                                                        if (cResult[53] === tmp4.blocked) {
                                                          let tmp45;
                                                          if (cResult[54] === tmp4.restricted) {
                                                            tmp45 = cResult[55];
                                                          }
                                                          if (cResult[56] === tmp18) {
                                                            let tmp54;
                                                            if (cResult[57] === tmp4.nameplateText) {
                                                              tmp54 = cResult[58];
                                                            }
                                                            if (cResult[59] === tmp4.nameplateContainer) {
                                                              if (cResult[60] === tmp45) {
                                                                let tmp57;
                                                                if (cResult[61] === tmp54) {
                                                                  tmp57 = cResult[62];
                                                                }
                                                                if (cResult[63] === tmp17) {
                                                                  if (cResult[64] === tmp12) {
                                                                    if (cResult[65] === tmp25) {
                                                                      if (cResult[66] === tmp41) {
                                                                        if (cResult[67] === tmp57) {
                                                                          let tmp61;
                                                                          if (cResult[68] === tmp19) {
                                                                            tmp61 = cResult[69];
                                                                          }
                                                                          return tmp61;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                const obj3 = {
                                                                  accessibilityLabel: tmp19,
                                                                  accessibilityRole: "button",
                                                                  style: tmp25,
                                                                  onPress: tmp12,
                                                                  children: items1,
                                                                };
                                                                items1 = [tmp41, tmp57];
                                                                const tmp63 = closure_8(tmp17, obj3);
                                                                cResult[63] = tmp17;
                                                                cResult[64] = tmp12;
                                                                cResult[65] = tmp25;
                                                                cResult[66] = tmp41;
                                                                cResult[67] = tmp57;
                                                                cResult[68] = tmp19;
                                                                cResult[69] = tmp63;
                                                                tmp61 = tmp63;
                                                              }
                                                            }
                                                            const obj4 = {
                                                              style: tmp4.nameplateContainer,
                                                              children: items2,
                                                            };
                                                            items2 = [tmp45, tmp54];
                                                            const tmp60 = closure_8(View, obj4);
                                                            cResult[59] = tmp4.nameplateContainer;
                                                            cResult[60] = tmp45;
                                                            cResult[61] = tmp54;
                                                            cResult[62] = tmp60;
                                                            tmp57 = tmp60;
                                                          }
                                                          const obj5 = {
                                                            lineClamp: 1,
                                                            style: tmp4.nameplateText,
                                                            variant: "text-sm/medium",
                                                            color: "text-overlay-light",
                                                            children: tmp18,
                                                          };
                                                          const tmp56 = closure_7(channel(user[24]).Text, obj5);
                                                          cResult[56] = tmp18;
                                                          cResult[57] = tmp4.nameplateText;
                                                          cResult[58] = tmp56;
                                                          tmp54 = tmp56;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let tmp47Result = tmp16;
                                                  if (tmp47Result) {
                                                    const items3 = [tmp4.restricted];
                                                    let blocked1 = null;
                                                    if (blocked) {
                                                      blocked1 = tmp4.blocked;
                                                    }
                                                    const obj6 = { style: items3, children: items4 };
                                                    items3[1] = blocked1;
                                                    let tmp50 = blocked;
                                                    if (tmp50) {
                                                      const obj7 = {
                                                        source: participant(user[22]),
                                                        size: channel(user[20]).Icon.Sizes.EXTRA_SMALL,
                                                        color: participant(user[6]).unsafe_rawColors.RED_400,
                                                      };
                                                      const Icon = tmp(tmp2[20]).Icon;
                                                      tmp50 = closure_7(Icon, obj7);
                                                    }
                                                    items4 = [tmp50];
                                                    let tmp52 = ignored;
                                                    if (tmp52) {
                                                      const obj8 = {
                                                        source: participant(user[23]),
                                                        size: channel(user[20]).Icon.Sizes.EXTRA_SMALL,
                                                      };
                                                      const Icon2 = tmp(tmp2[20]).Icon;
                                                      tmp52 = closure_7(Icon2, obj8);
                                                    }
                                                    items4[1] = tmp52;
                                                    tmp47Result = closure_8(View, obj6);
                                                  }
                                                  cResult[50] = blocked;
                                                  cResult[51] = ignored;
                                                  cResult[52] = blocked || ignored;
                                                  cResult[53] = tmp4.blocked;
                                                  cResult[54] = tmp4.restricted;
                                                  cResult[55] = tmp47Result;
                                                  tmp45 = tmp47Result;
                                                }
                                              }
                                            }
                                            const obj9 = { style: tmp26, children: items5 };
                                            items5 = [tmp32, tmp36, tmp37];
                                            const tmp44 = closure_8(View, obj9);
                                            cResult[45] = tmp4.avatarContainer;
                                            cResult[46] = tmp32;
                                            cResult[47] = tmp36;
                                            cResult[48] = tmp37;
                                            cResult[49] = tmp44;
                                            tmp41 = tmp44;
                                          }
                                          const obj10 = { userId: user.id, channelId: channel.id };
                                          const tmp39 = closure_7(channel(user[21]).VoiceStatus, obj10);
                                          const obj11 = { userId: user.id, channelId: channel.id };
                                          const tmp40 = closure_7(channel(user[21]).ModeratorStatus, obj11);
                                          cResult[41] = channel.id;
                                          cResult[42] = user.id;
                                          cResult[43] = tmp39;
                                          cResult[44] = tmp40;
                                          tmp37 = tmp40;
                                          tmp36 = tmp39;
                                        }
                                      }
                                    }
                                  }
                                  const obj12 = {
                                    style: tmp27,
                                    url: tmp28,
                                    speaking: stateFromStores.speaking,
                                    speakingColor: avatarSpeakingColor,
                                    animate: true,
                                    size: channel(user[20]).AvatarSizes.XLARGE,
                                    isStageCall: true,
                                    avatarStyle: tmp30,
                                  };
                                  const tmp5Result = participant(user[19]);
                                  const tmp35 = closure_7(tmp5Result, obj12);
                                  cResult[35] = stateFromStores.speaking;
                                  cResult[36] = avatarSpeakingColor;
                                  cResult[37] = tmp27;
                                  cResult[38] = tmp28;
                                  cResult[39] = tmp30;
                                  cResult[40] = tmp35;
                                  tmp32 = tmp35;
                                }
                                const avatarURL = user.getAvatarURL(channel.guild_id, 64);
                                cResult[30] = channel.guild_id;
                                cResult[31] = user;
                                cResult[32] = avatarURL;
                                tmp28 = avatarURL;
                              }
                              if (size === channel(user[8]).StageTileSize.THIRD) {
                                const items6 = [tmp4.imageBackground, { paddingBottom: 12 }];
                                items7 = items6;
                              } else {
                                items7 = [tmp4.imageBackground];
                              }
                              cResult[27] = size;
                              cResult[28] = tmp4;
                              cResult[29] = items7;
                              tmp27 = items7;
                            }
                          }
                          const items8 = [tmp22, tmp23, tmp24];
                          cResult[23] = tmp4.container;
                          cResult[24] = tmp23;
                          cResult[25] = tmp24;
                          cResult[26] = items8;
                          tmp25 = items8;
                        }
                      }
                      const StageTileSize = tmp(tmp2[8]).StageTileSize;
                      if (isScreenLandscape) {
                        obj15 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
                        const obj13 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
                      } else if (size === StageTileSize.THIRD) {
                        obj15 = { maxWidth: (width - 36) / 3 };
                        const obj14 = { maxWidth: (width - 36) / 3 };
                      } else {
                        obj15 = { flex: 1 };
                      }
                      cResult[19] = isScreenLandscape;
                      cResult[20] = size;
                      cResult[21] = width;
                      cResult[22] = obj15;
                      tmp24 = obj15;
                    }
                    if (channel(user[8]).StageTileSize.FULL === size) {
                      full = tmp4.full;
                    } else {
                      full = tmp(tmp2[8]).StageTileSize.HALF === size ? tmp4.half : tmp4.third;
                    }
                    cResult[16] = size;
                    cResult[17] = tmp4;
                    cResult[18] = full;
                    tmp23 = full;
                  }
                  const tmp20 = participant(user[16])(channel, stateFromStores);
                  const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
                  const intl = tmp(tmp2[18]).intl;
                  const obj16 = { name: tmp20 };
                  const formatToPlainStringResult = intl.formatToPlainString(channel(user[18]).t.ODlyvk, obj16);
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
            const obj17 = { userId: user.id, guildId: channel.guild_id };
            cResult[8] = channel.guild_id;
            cResult[9] = user.id;
            cResult[10] = obj17;
            tmp13 = obj17;
          }
          const fn = function b() {
            const obj = StageChannelModalActionCreators;
            const obj2 = { userId: user.id, channelId: channel.id };
            obj.showUserProfile(obj2);
          };
          cResult[5] = channel.id;
          cResult[6] = user.id;
          cResult[7] = fn;
          tmp12 = fn;
        }
        class S {
          constructor() {
            return ChannelRTCStore.getParticipant(channel.id, participant.id);
          }
        }
        const items9 = [channel.id, participant.id];
        cResult[1] = channel.id;
        cResult[2] = participant.id;
        cResult[3] = S;
        cResult[4] = items9;
        tmp10 = items9;
        tmp9 = S;
      }
    : (channel) => {
        let blocked;
        let ignored;
        let intl;
        let items10;
        let items3;
        let items6;
        let items7;
        let items9;
        let obj4;
        channel = channel.channel;
        const participant = channel.participant;
        size = channel.size;
        let user;
        const tmp = styles();
        const width = participant(user[11])().width;
        let obj = channel(user[12]);
        user = participant.user;
        ({ blocked, ignored } = participant);
        const isScreenLandscape = obj.useIsScreenLandscape();
        let obj2 = channel(user[13]);
        const items = [ChannelRTCStore];
        const items1 = [channel.id, participant.id];
        const stateFromStores = obj2.useStateFromStores(
          items,
          () => ChannelRTCStore.getParticipant(channel.id, participant.id),
          items1,
        );
        const items2 = [channel.id, user.id];
        const callback = react.useCallback(() => {
          const obj = StageChannelModalActionCreators;
          const obj2 = { userId: user.id, channelId: channel.id };
          obj.showUserProfile(obj2);
        }, items2);
        channel(user[15]);
        if (null != stateFromStores) {
          if (stateFromStores.type === ParticipantTypes.USER) {
            let full;
            let obj7;
            let items5;
            let tmp12Result = blocked || ignored;
            const tmp11 = participant(user[16])(channel, stateFromStores);
            const obj3 = {
              accessibilityLabel: intl.formatToPlainString(channel(user[18]).t.ODlyvk, obj4),
              accessibilityRole: "button",
              style: items3,
              onPress: callback,
              children: items7,
            };
            const PressableOpacity = tmp4(tmp3[17]).PressableOpacity;
            intl = tmp4(tmp3[18]).intl;
            items3 = [tmp.container, ,];
            obj4 = { name: tmp11 };
            if (channel(user[8]).StageTileSize.FULL === size) {
              full = tmp.full;
            } else {
              full = tmp4(tmp3[8]).StageTileSize.HALF === size ? tmp.half : tmp.third;
            }
            items3[1] = full;
            const StageTileSize = tmp4(tmp3[8]).StageTileSize;
            if (isScreenLandscape) {
              obj7 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
              const obj5 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
            } else if (size === StageTileSize.THIRD) {
              obj7 = { maxWidth: (width - 36) / 3 };
              const obj6 = { maxWidth: (width - 36) / 3 };
            } else {
              obj7 = { flex: 1 };
            }
            items3[2] = obj7;
            const obj8 = { style: tmp.avatarContainer, children: items6 };
            const tmp2Result = participant(user[19]);
            if (size === channel(user[8]).StageTileSize.THIRD) {
              const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
              items5 = items4;
            } else {
              items5 = [tmp.imageBackground];
            }
            const obj9 = {
              style: items5,
              url: user.getAvatarURL(channel.guild_id, 64),
              speaking: stateFromStores.speaking,
              speakingColor: tmp9,
              animate: true,
              size: channel(user[20]).AvatarSizes.XLARGE,
              isStageCall: true,
              avatarStyle: tmp12Result && { opacity: 0.5 },
            };
            items6 = [closure_7(tmp2Result, obj9), ,];
            const obj10 = { userId: user.id, channelId: channel.id };
            items6[1] = closure_7(channel(user[21]).VoiceStatus, obj10);
            const obj11 = { userId: user.id, channelId: channel.id };
            items6[2] = closure_7(channel(user[21]).ModeratorStatus, obj11);
            items7 = [closure_8(View, obj8)];
            const obj12 = { style: tmp.nameplateContainer, children: items10 };
            if (tmp12Result) {
              const items8 = [tmp.restricted];
              let blocked1 = null;
              if (blocked) {
                blocked1 = tmp.blocked;
              }
              const obj13 = { style: items8, children: items9 };
              items8[1] = blocked1;
              if (blocked) {
                const obj14 = {
                  source: participant(user[22]),
                  size: channel(user[20]).Icon.Sizes.EXTRA_SMALL,
                  color: participant(user[6]).unsafe_rawColors.RED_400,
                };
                const Icon = tmp4(tmp3[20]).Icon;
                blocked = closure_7(Icon, obj14);
              }
              items9 = [blocked];
              if (ignored) {
                const obj15 = { source: participant(user[23]), size: channel(user[20]).Icon.Sizes.EXTRA_SMALL };
                const Icon2 = tmp4(tmp3[20]).Icon;
                ignored = closure_7(Icon2, obj15);
              }
              items9[1] = ignored;
              tmp12Result = closure_8(View, obj13);
            }
            items10 = [tmp12Result];
            const obj16 = {
              lineClamp: 1,
              style: tmp.nameplateText,
              variant: "text-sm/medium",
              color: "text-overlay-light",
              children: tmp11,
            };
            items10[1] = closure_7(channel(user[24]).Text, obj16);
            items7[1] = closure_8(View, obj12);
            return closure_8(PressableOpacity, obj3);
          }
        }
        return null;
      },
);
size = size_mod;
const result2 = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default memoResult;
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export { getSizeStyle };
export { getTileWidthStyle };
