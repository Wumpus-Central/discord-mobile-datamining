// === Module 11183: AudienceTile ===

// Module 11183 (AudienceTile)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5416 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7492 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj = { touchableContainer: { overflow: "visible" }, container: { alignItems: "center" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 }, raisedHandContainer: null, activeBackground: null, raisedHand: null, nameplateContainer: null, usernameText: null, faded: null };
let size = { position: "absolute", top: -8, right: 0, height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 12, borderWidth: 2, borderColor: nativeDefault.unsafe_rawColors.PRIMARY_800, backgroundColor: nativeDefault.colors.WHITE };
obj.raisedHandContainer = size;
obj.activeBackground = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.raisedHand = { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" };
obj.nameplateContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.usernameText = { fontSize: 14, color: nativeDefault.colors.WHITE };
obj.faded = { opacity: 0.5 };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function RaisedHandIcon(rtsState) {
  const cResult = c.c(9);
  const tmp4 = styles();
  let activeBackground = rtsState.rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (activeBackground) {
    let PRIMARY_800 = unsafe_rawColors.WHITE;
    let tmp6 = importDefault;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp6 = importDefault;
  }
  if (activeBackground) {
    activeBackground = tmp4.activeBackground;
  }
  if (cResult[0] === tmp4.raisedHandContainer) {
    if (cResult[1] === activeBackground) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === PRIMARY_800) {
      if (cResult[4] === tmp4.raisedHand) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp8) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj2 = { style: tmp7, children: tmp8 };
      const tmp14 = hasOwnProperty(View, obj2);
      cResult[6] = tmp7;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { style: tmp4.raisedHand, source: tmp6(11015), color: PRIMARY_800 };
    const tmp10 = hasOwnProperty(native.Icon, obj3);
    cResult[3] = PRIMARY_800;
    cResult[4] = tmp4.raisedHand;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const items = [tmp4.raisedHandContainer, activeBackground];
  cResult[0] = tmp4.raisedHandContainer;
  cResult[1] = activeBackground;
  cResult[2] = items;
  tmp7 = items;
}) : (function RaisedHandIcon(rtsState) {
  const tmp = styles();
  let activeBackground = rtsState.rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (activeBackground) {
    let PRIMARY_800 = unsafe_rawColors.WHITE;
    let tmp5 = importDefault;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp5 = importDefault;
  }
  const items = [tmp.raisedHandContainer, ];
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  const obj = { style: items, children: hasOwnProperty(native.Icon, { style: tmp.raisedHand, source: tmp5(11015), color: PRIMARY_800 }) };
  items[1] = activeBackground;
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = fn(558);
function getTileWidthStyle(width) {
  return (width - 46) / 4;
}
let obj4 = { fontSize: 14, color: nativeDefault.colors.WHITE };
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AudienceTile(channel) {
  const cResult = channel(576).c(70);
  channel = channel.channel;
  ({ participant, theme } = channel);
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const tmp4 = styles();
  const diff = user(1497)().width - 46;
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    let tmp7 = guildId;
  } else {
    tmp7 = cResult[1];
  }
  dependencyMap = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp7) {
    if (cResult[4] === user.id) {
      let tmp11 = cResult[5];
      let tmp12 = cResult[6];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp9, tmp11, tmp12);
    if (cResult[7] !== rtsState) {
      const result = tmp(5950).isRequestedToSpeakAll(rtsState);
      cResult[7] = rtsState;
      cResult[8] = result;
      let tmp14 = result;
      const tmpResult3 = tmp(5950);
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === channel.id) {
      if (cResult[10] === user.id) {
        let tmp16 = cResult[11];
      }
      if (cResult[12] === blocked) {
        if (cResult[13] === channel.id) {
          if (cResult[14] === tmp7) {
            if (cResult[15] === ignored) {
              if (cResult[16] === user) {
                let tmp17 = cResult[17];
                let tmp18 = cResult[18];
                let tmp19 = cResult[19];
                let tmp20 = cResult[20];
              }
              const result1 = diff / 4;
              if (cResult[21] !== result1) {
                const obj2 = { width: result1 };
                cResult[21] = result1;
                cResult[22] = obj2;
                let tmp25 = obj2;
              } else {
                tmp25 = cResult[22];
              }
              if (cResult[23] === tmp4.container) {
                if (cResult[24] === tmp4.touchableContainer) {
                  if (cResult[25] === tmp25) {
                    let tmp26 = cResult[26];
                  }
                  let faded = tmp18;
                  if (tmp18) {
                    faded = tmp4.faded;
                  }
                  if (cResult[27] === tmp7) {
                    if (cResult[28] === faded) {
                      if (cResult[29] === user) {
                        let tmp29 = cResult[30];
                      }
                      if (cResult[31] === rtsState) {
                        if (cResult[32] === tmp14) {
                          let tmp32 = cResult[33];
                        }
                        if (cResult[34] === tmp4.avatarContainer) {
                          if (cResult[35] === tmp29) {
                            if (cResult[36] === tmp32) {
                              let tmp36 = cResult[37];
                            }
                            if (cResult[38] !== blocked) {
                              let tmp41 = blocked;
                              if (blocked) {
                                tmp41 = closure_5(tmp(11163).BlockedStatus, {});
                              }
                              cResult[38] = blocked;
                              cResult[39] = tmp41;
                              let tmp40 = tmp41;
                            } else {
                              tmp40 = cResult[39];
                            }
                            if (cResult[40] !== ignored) {
                              let tmp44 = ignored;
                              if (ignored) {
                                tmp44 = closure_5(tmp(11163).IgnoredStatus, {});
                              }
                              cResult[40] = ignored;
                              cResult[41] = tmp44;
                              let tmp43 = tmp44;
                            } else {
                              tmp43 = cResult[41];
                            }
                            if (cResult[42] === stateFromStores) {
                              if (cResult[43] === tmp18) {
                                if (cResult[44] === result1) {
                                  let tmp46 = cResult[45];
                                }
                                if (cResult[46] !== theme) {
                                  if (null == theme) {
                                    cResult[46] = theme;
                                    cResult[47] = tmp49;
                                    let tmp48 = tmp49;
                                  } else {
                                    const tmpResult4 = tmp(4969);
                                    tmp5(587).unsafe_rawColors;
                                    const isThemeDarkResult = tmp(4969).isThemeDark(theme);
                                    const unsafe_rawColors = { color: null };
                                    unsafe_rawColors.color = tmp(4969).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
                                    const tmp51 = tmp(4969).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
                                  }
                                } else {
                                  tmp48 = cResult[47];
                                }
                                if (cResult[48] === tmp4.usernameText) {
                                  if (cResult[49] === tmp46) {
                                    if (cResult[50] === tmp48) {
                                      let tmp53 = cResult[51];
                                    }
                                    if (cResult[52] === tmp19) {
                                      if (cResult[53] === tmp53) {
                                        let tmp54 = cResult[54];
                                      }
                                      if (cResult[55] !== stateFromStores) {
                                        let tmp58 = stateFromStores;
                                        if (stateFromStores) {
                                          const obj3 = { source: tmp5(11184), size: tmp(1200).Icon.Sizes.SMALL, color: tmp5(587).unsafe_rawColors.GUILD_BOOSTING_PINK };
                                          tmp58 = closure_5(tmp(1200).Icon, obj3);
                                        }
                                        cResult[55] = stateFromStores;
                                        cResult[56] = tmp58;
                                        let tmp57 = tmp58;
                                      } else {
                                        tmp57 = cResult[56];
                                      }
                                      if (cResult[57] === tmp4.nameplateContainer) {
                                        if (cResult[58] === tmp40) {
                                          if (cResult[59] === tmp43) {
                                            if (cResult[60] === tmp54) {
                                              if (cResult[61] === tmp57) {
                                                let tmp60 = cResult[62];
                                              }
                                              if (cResult[63] === tmp17) {
                                                if (cResult[64] === tmp16) {
                                                  if (cResult[65] === tmp26) {
                                                    if (cResult[66] === tmp36) {
                                                      if (cResult[67] === tmp60) {
                                                        if (cResult[68] === tmp20) {
                                                          let tmp64 = cResult[69];
                                                        }
                                                        return tmp64;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj4 = { accessibilityLabel: tmp20, style: tmp26, accessibilityRole: "button", onPress: tmp16, children: null };
                                              const items1 = [tmp36, tmp60];
                                              obj4.children = items1;
                                              const tmp66 = closure_6(tmp17, obj4);
                                              cResult[63] = tmp17;
                                              cResult[64] = tmp16;
                                              cResult[65] = tmp26;
                                              cResult[66] = tmp36;
                                              cResult[67] = tmp60;
                                              cResult[68] = tmp20;
                                              cResult[69] = tmp66;
                                              tmp64 = tmp66;
                                            }
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp4.nameplateContainer, children: null };
                                      const items2 = [tmp40, tmp43, tmp54, tmp57];
                                      obj5.children = items2;
                                      const tmp63 = closure_6(View, obj5);
                                      cResult[57] = tmp4.nameplateContainer;
                                      cResult[58] = tmp40;
                                      cResult[59] = tmp43;
                                      cResult[60] = tmp54;
                                      cResult[61] = tmp57;
                                      cResult[62] = tmp63;
                                      tmp60 = tmp63;
                                    }
                                    const obj6 = { style: tmp53, numberOfLines: 1, children: tmp19 };
                                    const tmp56 = closure_5(tmp(1200).LegacyText, obj6);
                                    cResult[52] = tmp19;
                                    cResult[53] = tmp53;
                                    cResult[54] = tmp56;
                                    tmp54 = tmp56;
                                  }
                                }
                                const items3 = [tmp4.usernameText, tmp46, tmp48];
                                cResult[48] = tmp4.usernameText;
                                cResult[49] = tmp46;
                                cResult[50] = tmp48;
                                cResult[51] = items3;
                                tmp53 = items3;
                              }
                            }
                            let tmp47 = stateFromStores;
                            if (!stateFromStores) {
                              tmp47 = tmp18;
                            }
                            if (tmp47) {
                              let num41 = 1;
                              if (stateFromStores) {
                                num41 = 1;
                                if (tmp18) {
                                  num41 = 2;
                                }
                              }
                              const obj7 = { maxWidth: result1 - 18 * num41 };
                              tmp47 = obj7;
                            }
                            cResult[42] = stateFromStores;
                            cResult[43] = tmp18;
                            cResult[44] = result1;
                            cResult[45] = tmp47;
                            tmp46 = tmp47;
                          }
                        }
                        const obj8 = { style: tmp4.avatarContainer, children: null };
                        const items4 = [tmp29, tmp32];
                        obj8.children = items4;
                        const tmp39 = closure_6(View, obj8);
                        cResult[34] = tmp4.avatarContainer;
                        cResult[35] = tmp29;
                        cResult[36] = tmp32;
                        cResult[37] = tmp39;
                        tmp36 = tmp39;
                      }
                      let tmp33 = tmp14;
                      if (tmp14) {
                        const obj9 = { rtsState };
                        tmp33 = closure_5(closure_8, obj9);
                      }
                      cResult[31] = rtsState;
                      cResult[32] = tmp14;
                      cResult[33] = tmp33;
                      tmp32 = tmp33;
                    }
                  }
                  const obj10 = { user, guildId: tmp7, size: tmp(1200).AvatarSizes.LARGE, style: faded };
                  const tmp31 = closure_5(tmp(1200).CutoutableAvatarImage, obj10);
                  cResult[27] = tmp7;
                  cResult[28] = faded;
                  cResult[29] = user;
                  cResult[30] = tmp31;
                  tmp29 = tmp31;
                }
              }
              const items5 = [, , ];
              ({ touchableContainer: arr3[0], container: arr3[1] } = tmp4);
              items5[2] = tmp25;
              cResult[23] = tmp4.container;
              cResult[24] = tmp4.touchableContainer;
              cResult[25] = tmp25;
              cResult[26] = items5;
              tmp26 = items5;
            }
          }
        }
      }
      const name = tmp5(5409).getName(tmp7, channel.id, user);
      let tmp22 = blocked;
      if (!blocked) {
        tmp22 = ignored;
      }
      const LegacyPressable = tmp(6334).LegacyPressable;
      const intl = tmp(1126).intl;
      const obj11 = { name };
      const tmp5Result = tmp5(5409);
      cResult[12] = blocked;
      cResult[13] = channel.id;
      cResult[14] = tmp7;
      cResult[15] = ignored;
      cResult[16] = user;
      cResult[17] = LegacyPressable;
      cResult[18] = tmp22;
      cResult[19] = name;
      class R {
        constructor() {
          tmp2 = null != closure_2;
          if (tmp2) {
            tmp3 = closure_4;
            tmp4 = user;
            member = closure_4.getMember(tmp, user.id);
            premiumSince = undefined;
            if (member != null) {
              premiumSince = member.premiumSince;
            }
            tmp2 = null != premiumSince;
          }
          return Boolean(tmp2);
        }
      }
      tmp18 = tmp22;
      tmp20 = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj11);
      tmp19 = name;
      tmp17 = LegacyPressable;
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj11);
    }
    function handlePress() {
      StageChannelModalActionCreators.showUserProfile({ userId: user.id, channelId: channel.id });
    }
    cResult[9] = channel.id;
    cResult[10] = user.id;
    cResult[11] = handlePress;
    tmp16 = handlePress;
    const tmpResult = tmp(504);
  }
  class R {
    constructor() {
      tmp2 = null != closure_2;
      if (tmp2) {
        tmp3 = closure_4;
        tmp4 = user;
        member = closure_4.getMember(tmp, user.id);
        premiumSince = undefined;
        if (member != null) {
          premiumSince = member.premiumSince;
        }
        tmp2 = null != premiumSince;
      }
      return Boolean(tmp2);
    }
  }
  const items6 = [tmp7, user.id];
  cResult[3] = tmp7;
  cResult[4] = user.id;
  cResult[5] = R;
  cResult[6] = items6;
  tmp12 = items6;
  tmp11 = R;
  const obj = channel(576);
}) : (function AudienceTile(channel) {
  channel = channel.channel;
  const participant = channel.participant;
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const theme = channel.theme;
  let guildId;
  const tmp = styles();
  const diff = user(guildId[11])().width - 46;
  guildId = channel.getGuildId();
  const items = [GuildMemberStore];
  const items1 = [guildId, user.id];
  let stateFromStores = channel(guildId[12]).useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    if (tmp2) {
      const member = GuildMemberStore.getMember(tmp, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return Boolean(tmp2);
  }, items1);
  const obj = channel(guildId[12]);
  let result = channel(guildId[13]).isRequestedToSpeakAll(rtsState);
  const obj2 = channel(guildId[13]);
  const name = user(guildId[15]).getName(guildId, channel.id, user);
  let tmp10 = blocked;
  if (!blocked) {
    tmp10 = ignored;
  }
  const result1 = diff / 4;
  const obj4 = { accessibilityLabel: null, style: null, accessibilityRole: "button", onPress: null, children: null };
  const intl = tmp6(tmp3[17]).intl;
  obj4.accessibilityLabel = intl.formatToPlainString(channel(guildId[17]).t.QLMGhv, { name });
  const items2 = [, , ];
  ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
  items2[2] = { width: result1 };
  obj4.style = items2;
  obj4.onPress = function handlePress() {
    StageChannelModalActionCreators.showUserProfile({ userId: user.id, channelId: channel.id });
  };
  const obj5 = { style: tmp.avatarContainer, children: null };
  const obj6 = { user, guildId, size: channel(guildId[9]).AvatarSizes.LARGE, style: null };
  let faded = tmp10;
  if (tmp10) {
    faded = tmp.faded;
  }
  obj6.style = faded;
  const items3 = [closure_5(channel(guildId[9]).CutoutableAvatarImage, obj6), ];
  if (result) {
    const obj7 = { rtsState };
    result = closure_5(closure_8, obj7);
  }
  items3[1] = result;
  obj5.children = items3;
  const items4 = [closure_6(View, obj5), ];
  const obj8 = { style: tmp.nameplateContainer, children: null };
  if (blocked) {
    blocked = closure_5(tmp6(tmp3[18]).BlockedStatus, {});
  }
  const items5 = [blocked, , , ];
  if (ignored) {
    ignored = closure_5(tmp6(tmp3[18]).IgnoredStatus, {});
  }
  items5[1] = ignored;
  const items6 = [tmp.usernameText, , ];
  let tmp16 = stateFromStores;
  if (!stateFromStores) {
    tmp16 = tmp10;
  }
  if (tmp16) {
    let num2 = 1;
    if (stateFromStores) {
      num2 = 1;
      if (tmp10) {
        num2 = 2;
      }
    }
    const obj9 = { maxWidth: result1 - 18 * num2 };
    tmp16 = obj9;
  }
  items6[1] = tmp16;
  if (null == theme) {
    const obj10 = { style: null, numberOfLines: 1, children: null };
    items6[2] = tmp17;
    obj10.style = items6;
    obj10.children = name;
    items5[2] = closure_5(tmp6(tmp3[9]).LegacyText, obj10);
    if (stateFromStores) {
      const obj11 = { source: tmp2(tmp3[20]), size: tmp6(tmp3[9]).Icon.Sizes.SMALL, color: tmp2(tmp3[5]).unsafe_rawColors.GUILD_BOOSTING_PINK };
      stateFromStores = closure_5(tmp6(tmp3[9]).Icon, obj11);
    }
    items5[3] = stateFromStores;
    obj8.children = items5;
    items4[1] = closure_6(View, obj8);
    obj4.children = items4;
    return closure_6(tmp6(tmp3[16]).LegacyPressable, obj4);
  } else {
    const tmp6Result = tmp6(tmp3[19]);
    tmp2(tmp3[5]).unsafe_rawColors;
    const isThemeDarkResult = tmp6(tmp3[19]).isThemeDark(theme);
    const unsafe_rawColors = { color: null };
    unsafe_rawColors.color = tmp6(tmp3[19]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
    const tmp19 = tmp6(tmp3[19]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
  }
  const obj3 = user(guildId[15]);
}));
export const useAudienceTileStyles = styles;
export { getTileWidthStyle };