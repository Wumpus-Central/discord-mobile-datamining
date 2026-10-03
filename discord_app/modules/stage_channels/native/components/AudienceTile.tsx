// discord_app/modules/stage_channels/native/components/AudienceTile.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useAudienceRequestToSpeakState from "../../useAudienceRequestToSpeakState.tsx";
import StageChannelModalActionCreators from "../../StageChannelModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj = {
  touchableContainer: { overflow: "visible" },
  container: { alignItems: "center" },
  avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 },
  raisedHandContainer: null,
  activeBackground: null,
  raisedHand: null,
  nameplateContainer: null,
  usernameText: null,
  faded: null,
};
let size = {
  position: "absolute",
  top: -8,
  right: 0,
  height: 24,
  width: 24,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 12,
  borderWidth: 2,
  borderColor: nativeDefault.unsafe_rawColors.PRIMARY_800,
  backgroundColor: nativeDefault.colors.WHITE,
};
obj.raisedHandContainer = size;
obj.activeBackground = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.raisedHand = { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" };
obj.nameplateContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.usernameText = { fontSize: 14, color: nativeDefault.colors.WHITE };
obj.faded = { opacity: 0.5 };
const styles = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (rtsState) => {
      const cResult = c.c(9);
      const tmp4 = styles();
      let activeBackground =
        rtsState.rtsState ===
        useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
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
        const obj3 = { style: tmp4.raisedHand, source: tmp6(9599), color: PRIMARY_800 };
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
    }
  : (rtsState) => {
      const tmp = styles();
      let activeBackground =
        rtsState.rtsState ===
        useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      if (activeBackground) {
        let PRIMARY_800 = unsafe_rawColors.WHITE;
        let tmp5 = importDefault;
      } else {
        PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
        tmp5 = importDefault;
      }
      const items = [tmp.raisedHandContainer];
      if (activeBackground) {
        activeBackground = tmp.activeBackground;
      }
      const obj = {
        style: items,
        children: hasOwnProperty(native.Icon, { style: tmp.raisedHand, source: tmp5(9599), color: PRIMARY_800 }),
      };
      items[1] = activeBackground;
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = fn(558);
function getTileWidthStyle(width) {
  return (width - 46) / 4;
}
let obj4 = { fontSize: 14, color: nativeDefault.colors.WHITE };
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(576).c(72);
        channel = channel.channel;
        ({ participant, theme } = channel);
        const user = participant.user;
        ({ rtsState, blocked, ignored } = participant);
        const tmp4 = styles();
        const diff = user(1484)().width - 46;
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
            const result = tmp(5582).isRequestedToSpeakAll(rtsState);
            cResult[7] = rtsState;
            class H {
              constructor() {
                obj = closure_0(closure_2[14]);
                obj1 = { userId: user.id, channelId: channel.id };
                showUserProfileResult = obj.showUserProfile(obj1);
                return;
              }
            }
            let tmp14 = result;
            const tmpResult3 = tmp(5582);
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
                      class H {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          obj1 = { userId: user.id, channelId: channel.id };
                          showUserProfileResult = obj.showUserProfile(obj1);
                          return;
                        }
                      }
                      let tmp25 = obj2;
                    } else {
                      tmp25 = cResult[22];
                    }
                    if (cResult[23] === tmp4.container) {
                      if (cResult[24] === tmp4.touchableContainer) {
                        if (cResult[25] === tmp25) {
                          let tmp26 = cResult[26];
                        }
                        class H {
                          constructor() {
                            obj = closure_0(closure_2[14]);
                            obj1 = { userId: user.id, channelId: channel.id };
                            showUserProfileResult = obj.showUserProfile(obj1);
                            return;
                          }
                        }
                        if (cResult[27] === tmp7) {
                          if (cResult[28] === tmp30) {
                            if (cResult[29] === user) {
                              let tmp31 = cResult[30];
                            }
                            if (cResult[31] === rtsState) {
                              if (cResult[32] === tmp14) {
                                let tmp34 = cResult[33];
                              }
                              if (cResult[34] === tmp4.avatarContainer) {
                                if (cResult[35] === tmp31) {
                                  if (cResult[36] === tmp34) {
                                    let tmp38 = cResult[37];
                                  }
                                  if (cResult[38] !== tmp4.nameplateContainer) {
                                    const items1 = [tmp4.nameplateContainer];
                                    cResult[38] = tmp4.nameplateContainer;
                                    class H {
                                      constructor() {
                                        obj = closure_0(closure_2[14]);
                                        obj1 = { userId: user.id, channelId: channel.id };
                                        showUserProfileResult = obj.showUserProfile(obj1);
                                        return;
                                      }
                                    }
                                    let tmp42 = items1;
                                  } else {
                                    tmp42 = cResult[39];
                                  }
                                  if (cResult[40] !== blocked) {
                                    let tmp44 = blocked;
                                    if (blocked) {
                                      tmp44 = closure_5(tmp(9734).BlockedStatus, {});
                                    }
                                    cResult[40] = blocked;
                                    class H {
                                      constructor() {
                                        obj = closure_0(closure_2[14]);
                                        obj1 = { userId: user.id, channelId: channel.id };
                                        showUserProfileResult = obj.showUserProfile(obj1);
                                        return;
                                      }
                                    }
                                    let tmp43 = tmp44;
                                  } else {
                                    tmp43 = cResult[41];
                                  }
                                  if (cResult[42] !== ignored) {
                                    let tmp47 = ignored;
                                    if (ignored) {
                                      tmp47 = closure_5(tmp(9734).IgnoredStatus, {});
                                    }
                                    cResult[42] = ignored;
                                    class H {
                                      constructor() {
                                        obj = closure_0(closure_2[14]);
                                        obj1 = { userId: user.id, channelId: channel.id };
                                        showUserProfileResult = obj.showUserProfile(obj1);
                                        return;
                                      }
                                    }
                                    let tmp46 = tmp47;
                                  } else {
                                    tmp46 = cResult[43];
                                  }
                                  if (cResult[44] === stateFromStores) {
                                    if (cResult[45] === tmp18) {
                                      if (cResult[46] === result1) {
                                        let tmp49 = cResult[47];
                                      }
                                      if (cResult[48] !== theme) {
                                        if (null == theme) {
                                          cResult[48] = theme;
                                          cResult[49] = tmp52;
                                          let tmp51 = tmp52;
                                        } else {
                                          const tmpResult4 = tmp(4729);
                                          tmp5(587).unsafe_rawColors;
                                          const unsafe_rawColors = { color: null };
                                          class H {
                                            constructor() {
                                              obj = closure_0(closure_2[14]);
                                              obj1 = { userId: user.id, channelId: channel.id };
                                              showUserProfileResult = obj.showUserProfile(obj1);
                                              return;
                                            }
                                          }
                                          const isThemeDarkResult = tmp(4729).isThemeDark(theme);
                                        }
                                      } else {
                                        tmp51 = cResult[49];
                                      }
                                      if (cResult[50] === tmp4.usernameText) {
                                        if (cResult[51] === tmp49) {
                                          if (cResult[52] === tmp51) {
                                            let tmp56 = cResult[53];
                                          }
                                          if (cResult[54] === tmp19) {
                                            if (cResult[55] === tmp56) {
                                              let tmp57 = cResult[56];
                                            }
                                            if (cResult[57] !== stateFromStores) {
                                              let tmp61 = stateFromStores;
                                              if (stateFromStores) {
                                                const obj3 = {
                                                  source: tmp5(4825),
                                                  size: tmp(1188).Icon.Sizes.SMALL,
                                                  color: null,
                                                };
                                                class H {
                                                  constructor() {
                                                    obj = closure_0(closure_2[14]);
                                                    obj1 = { userId: user.id, channelId: channel.id };
                                                    showUserProfileResult = obj.showUserProfile(obj1);
                                                    return;
                                                  }
                                                }
                                                tmp61 = closure_5(tmp(1188).Icon, obj3);
                                              }
                                              cResult[57] = stateFromStores;
                                              class H {
                                                constructor() {
                                                  obj = closure_0(closure_2[14]);
                                                  obj1 = { userId: user.id, channelId: channel.id };
                                                  showUserProfileResult = obj.showUserProfile(obj1);
                                                  return;
                                                }
                                              }
                                              let tmp60 = tmp61;
                                            } else {
                                              tmp60 = cResult[58];
                                            }
                                            if (cResult[59] === tmp42) {
                                              if (cResult[60] === tmp43) {
                                                if (cResult[61] === tmp46) {
                                                  if (cResult[62] === tmp57) {
                                                    if (cResult[63] === tmp60) {
                                                      let tmp63 = cResult[64];
                                                    }
                                                    if (cResult[65] === tmp17) {
                                                      if (cResult[66] === tmp16) {
                                                        if (cResult[67] === tmp26) {
                                                          if (cResult[68] === tmp38) {
                                                            if (cResult[69] === tmp63) {
                                                              if (cResult[70] === tmp20) {
                                                                let tmp68 = cResult[71];
                                                              }
                                                              return tmp68;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj4 = {
                                                      accessibilityLabel: tmp20,
                                                      style: null,
                                                      accessibilityRole: "button",
                                                      onPress: null,
                                                      children: null,
                                                    };
                                                    class H {
                                                      constructor() {
                                                        obj = closure_0(closure_2[14]);
                                                        obj1 = { userId: user.id, channelId: channel.id };
                                                        showUserProfileResult = obj.showUserProfile(obj1);
                                                        return;
                                                      }
                                                    }
                                                    obj4.onPress = tmp16;
                                                    const items2 = [tmp38, tmp63];
                                                    obj4.children = items2;
                                                    const tmp70 = closure_6(tmp17, obj4);
                                                    cResult[65] = tmp17;
                                                    cResult[66] = tmp16;
                                                    cResult[67] = tmp26;
                                                    cResult[68] = tmp38;
                                                    cResult[69] = tmp63;
                                                    cResult[70] = tmp20;
                                                    cResult[71] = tmp70;
                                                    tmp68 = tmp70;
                                                  }
                                                }
                                              }
                                            }
                                            class H {
                                              constructor() {
                                                obj = closure_0(closure_2[14]);
                                                obj1 = { userId: user.id, channelId: channel.id };
                                                showUserProfileResult = obj.showUserProfile(obj1);
                                                return;
                                              }
                                            }
                                            tmp66[0] = tmp42;
                                            const items3 = [tmp43, tmp46, tmp57, tmp60];
                                            tmp66[1] = items3;
                                            const tmp67 = closure_6(View, tmp66);
                                            cResult[59] = tmp42;
                                            cResult[60] = tmp43;
                                            cResult[61] = tmp46;
                                            cResult[62] = tmp57;
                                            cResult[63] = tmp60;
                                            cResult[64] = tmp67;
                                            tmp63 = tmp67;
                                          }
                                          const obj5 = { style: tmp56, numberOfLines: 1, children: null };
                                          class H {
                                            constructor() {
                                              obj = closure_0(closure_2[14]);
                                              obj1 = { userId: user.id, channelId: channel.id };
                                              showUserProfileResult = obj.showUserProfile(obj1);
                                              return;
                                            }
                                          }
                                          const tmp59 = closure_5(tmp(1188).LegacyText, obj5);
                                          cResult[54] = tmp19;
                                          cResult[55] = tmp56;
                                          cResult[56] = tmp59;
                                          tmp57 = tmp59;
                                        }
                                      }
                                      const items4 = [tmp4.usernameText, ,];
                                      class H {
                                        constructor() {
                                          obj = closure_0(closure_2[14]);
                                          obj1 = { userId: user.id, channelId: channel.id };
                                          showUserProfileResult = obj.showUserProfile(obj1);
                                          return;
                                        }
                                      }
                                      items4[2] = tmp51;
                                      cResult[50] = tmp4.usernameText;
                                      cResult[51] = tmp49;
                                      cResult[52] = tmp51;
                                      cResult[53] = items4;
                                      tmp56 = items4;
                                    }
                                  }
                                  class H {
                                    constructor() {
                                      obj = closure_0(closure_2[14]);
                                      obj1 = { userId: user.id, channelId: channel.id };
                                      showUserProfileResult = obj.showUserProfile(obj1);
                                      return;
                                    }
                                  }
                                  if (!stateFromStores) {
                                    let tmp50 = tmp18;
                                  }
                                  if (tmp50) {
                                    class H {
                                      constructor() {
                                        obj = closure_0(closure_2[14]);
                                        obj1 = { userId: user.id, channelId: channel.id };
                                        showUserProfileResult = obj.showUserProfile(obj1);
                                        return;
                                      }
                                    }
                                    tmp50 = { maxWidth: null };
                                    const obj6 = { maxWidth: null };
                                  }
                                  cResult[44] = stateFromStores;
                                  cResult[45] = tmp18;
                                  cResult[46] = result1;
                                  cResult[47] = tmp50;
                                  tmp49 = tmp50;
                                }
                              }
                              const obj7 = { style: null, children: null };
                              class H {
                                constructor() {
                                  obj = closure_0(closure_2[14]);
                                  obj1 = { userId: user.id, channelId: channel.id };
                                  showUserProfileResult = obj.showUserProfile(obj1);
                                  return;
                                }
                              }
                              const items5 = [tmp31, tmp34];
                              obj7.children = items5;
                              const tmp41 = closure_6(View, obj7);
                              cResult[34] = tmp4.avatarContainer;
                              cResult[35] = tmp31;
                              cResult[36] = tmp34;
                              cResult[37] = tmp41;
                              tmp38 = tmp41;
                            }
                            let tmp35 = tmp14;
                            if (tmp14) {
                              const obj8 = { rtsState };
                              tmp35 = closure_5(closure_8, obj8);
                            }
                            class H {
                              constructor() {
                                obj = closure_0(closure_2[14]);
                                obj1 = { userId: user.id, channelId: channel.id };
                                showUserProfileResult = obj.showUserProfile(obj1);
                                return;
                              }
                            }
                            cResult[32] = tmp14;
                            cResult[33] = tmp35;
                            tmp34 = tmp35;
                          }
                        }
                        const obj9 = { user, guildId: tmp7, size: tmp(1188).AvatarSizes.LARGE, style: tmp18 };
                        const tmp33 = closure_5(tmp(1188).CutoutableAvatarImage, obj9);
                        cResult[27] = tmp7;
                        cResult[28] = tmp18;
                        cResult[29] = user;
                        cResult[30] = tmp33;
                        tmp31 = tmp33;
                      }
                    }
                    class H {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        obj1 = { userId: user.id, channelId: channel.id };
                        showUserProfileResult = obj.showUserProfile(obj1);
                        return;
                      }
                    }
                    ({ touchableContainer: tmp27[0], container: tmp27[1] } = tmp4);
                    tmp27[2] = tmp25;
                    cResult[23] = tmp4.container;
                    cResult[24] = tmp4.touchableContainer;
                    cResult[25] = tmp25;
                    cResult[26] = tmp27;
                    tmp26 = tmp27;
                  }
                }
              }
            }
            const name = tmp5(5042).getName(tmp7, channel.id, user);
            class H {
              constructor() {
                obj = closure_0(closure_2[14]);
                obj1 = { userId: user.id, channelId: channel.id };
                showUserProfileResult = obj.showUserProfile(obj1);
                return;
              }
            }
            const LegacyPressable = tmp(6140).LegacyPressable;
            const intl = tmp(1126).intl;
            const obj10 = { name };
            const tmp5Result = tmp5(5042);
            cResult[12] = blocked;
            cResult[13] = channel.id;
            cResult[14] = tmp7;
            cResult[15] = ignored;
            cResult[16] = user;
            cResult[17] = LegacyPressable;
            cResult[18] = blocked;
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
            tmp18 = blocked;
            tmp20 = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj10);
            tmp19 = name;
            tmp17 = LegacyPressable;
            const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.QLMGhv, obj10);
          }
          class H {
            constructor() {
              obj = closure_0(closure_2[14]);
              obj1 = { userId: user.id, channelId: channel.id };
              showUserProfileResult = obj.showUserProfile(obj1);
              return;
            }
          }
          cResult[9] = channel.id;
          cResult[10] = user.id;
          cResult[11] = H;
          tmp16 = H;
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
      }
    : (channel) => {
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
        let stateFromStores = channel(guildId[12]).useStateFromStores(
          items,
          () => {
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
          },
          items1,
        );
        const obj = channel(guildId[12]);
        let result = channel(guildId[13]).isRequestedToSpeakAll(rtsState);
        const obj2 = channel(guildId[13]);
        const name = user(guildId[15]).getName(guildId, channel.id, user);
        let tmp10 = blocked;
        if (!blocked) {
          tmp10 = ignored;
        }
        const result1 = diff / 4;
        const obj4 = {
          accessibilityLabel: null,
          style: null,
          accessibilityRole: "button",
          onPress: null,
          children: null,
        };
        const intl = tmp6(tmp3[17]).intl;
        obj4.accessibilityLabel = intl.formatToPlainString(channel(guildId[17]).t.QLMGhv, { name });
        const items2 = [, ,];
        ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
        items2[2] = { width: result1 };
        obj4.style = items2;
        obj4.onPress = function onPress() {
          StageChannelModalActionCreators.showUserProfile({ userId: user.id, channelId: channel.id });
        };
        const obj5 = { style: tmp.avatarContainer, children: null };
        const obj6 = { user, guildId, size: channel(guildId[9]).AvatarSizes.LARGE, style: null };
        let faded = tmp10;
        if (tmp10) {
          faded = tmp.faded;
        }
        obj6.style = faded;
        const items3 = [closure_5(channel(guildId[9]).CutoutableAvatarImage, obj6)];
        if (result) {
          const obj7 = { rtsState };
          result = closure_5(closure_8, obj7);
        }
        items3[1] = result;
        obj5.children = items3;
        const items4 = [closure_6(View, obj5)];
        const obj8 = { style: null, children: null };
        const items5 = [tmp.nameplateContainer];
        obj8.style = items5;
        if (blocked) {
          blocked = closure_5(tmp6(tmp3[18]).BlockedStatus, {});
        }
        const items6 = [blocked, , ,];
        if (ignored) {
          ignored = closure_5(tmp6(tmp3[18]).IgnoredStatus, {});
        }
        items6[1] = ignored;
        const items7 = [tmp.usernameText, ,];
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
        items7[1] = tmp16;
        if (null == theme) {
          const obj10 = { style: null, numberOfLines: 1, children: null };
          items7[2] = tmp17;
          obj10.style = items7;
          obj10.children = name;
          items6[2] = closure_5(tmp6(tmp3[9]).LegacyText, obj10);
          if (stateFromStores) {
            const obj11 = {
              source: tmp2(tmp3[20]),
              size: tmp6(tmp3[9]).Icon.Sizes.SMALL,
              color: tmp2(tmp3[5]).unsafe_rawColors.GUILD_BOOSTING_PINK,
            };
            stateFromStores = closure_5(tmp6(tmp3[9]).Icon, obj11);
          }
          items6[3] = stateFromStores;
          obj8.children = items6;
          items4[1] = closure_6(View, obj8);
          obj4.children = items4;
          return closure_6(tmp6(tmp3[16]).LegacyPressable, obj4);
        } else {
          const tmp6Result = tmp6(tmp3[19]);
          tmp2(tmp3[5]).unsafe_rawColors;
          const isThemeDarkResult = tmp6(tmp3[19]).isThemeDark(theme);
          const unsafe_rawColors = { color: null };
          unsafe_rawColors.color = tmp6(tmp3[19]).isThemeDark(theme)
            ? unsafe_rawColors.WHITE
            : unsafe_rawColors.PRIMARY_860;
          const tmp19 = tmp6(tmp3[19]).isThemeDark(theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
        }
        const obj3 = user(guildId[15]);
      },
);
export const useAudienceTileStyles = styles;
export { getTileWidthStyle };
