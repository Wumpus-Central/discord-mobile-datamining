// === Module 9598: RequestToSpeakParticipantList ===

// Module 9598 (RequestToSpeakParticipantList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8107 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channel, importDefault, obj1, participant, tmp2, tmp3, tmp8;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 4, flexDirection: "column", minHeight: 288, flex: 1 }, listContainer: { paddingVertical: 4, flexDirection: "column", flex: 1 }, participantItemContainer: { padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, touchableContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, participantAvatarContainer: { paddingLeft: 4 }, participantNameplateContainer: { paddingHorizontal: 16, flex: 1 }, participantNameplateText: obj2, participantActionContainer: { flexDirection: "row", paddingRight: 4 }, participantActionIcon: obj3, emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, emptyParticipant: { flex: 1, height: 64 }, emptyTitle: { textAlign: "center", marginTop: 16, marginBottom: 8 }, emptyBody: { textAlign: "center" } };
obj2 = { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD, marginTop: 0, marginBottom: 0, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  let analyticsLocations;
  let items;
  let items1;
  let items2;
  let items3;
  let onDenyRequest;
  let onGrantRequest;
  let obj = participant(analyticsLocations[7]);
  const cResult = obj.c(54);
  participant = participant.participant;
  channel = participant.channel;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp4 = closure_6();
  analyticsLocations = channel(analyticsLocations[8])().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === channel.id) {
      let tmp6;
      let tmp7;
      if (cResult[2] === participant.user.id) {
        tmp6 = cResult[3];
      }
      const participantItemContainer = tmp4.participantItemContainer;
      const username = participant.user.username;
      if (cResult[4] !== participant) {
        const tmpResult = participant(analyticsLocations[10]);
        const result = tmpResult.participantMemberInfo(participant);
        cResult[4] = participant;
        cResult[5] = result;
        tmp7 = result;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === participant.user.username) {
        let obj3;
        if (cResult[7] === tmp7) {
          obj3 = cResult[8];
        }
        const joined = obj3.join(", ");
        if (cResult[9] === channel.guild_id) {
          let tmp11;
          if (cResult[10] === participant.user) {
            tmp11 = cResult[11];
          }
          if (cResult[12] === tmp4.participantAvatarContainer) {
            let tmp14;
            let tmp20;
            if (cResult[13] === tmp11) {
              tmp14 = cResult[14];
            }
            const member = participant.member;
            let colorString;
            const participantNameplateContainer = tmp4.participantNameplateContainer;
            if (member != null) {
              colorString = member.colorString;
            }
            if (colorString == null) {
              colorString = tmp4.participantNameplateText.color;
            }
            if (cResult[15] !== colorString) {
              const obj2 = { color: colorString };
              cResult[15] = colorString;
              cResult[16] = obj2;
              tmp20 = obj2;
            } else {
              tmp20 = cResult[16];
            }
            if (cResult[17] === tmp4.participantNameplateText) {
              let tmp21;
              if (cResult[18] === tmp20) {
                tmp21 = cResult[19];
              }
              if (cResult[20] === participant.user.username) {
                let tmp22;
                let tmp25;
                let tmp27;
                if (cResult[21] === tmp21) {
                  tmp22 = cResult[22];
                }
                if (cResult[23] !== participant) {
                  const tmpResult2 = participant(analyticsLocations[10]);
                  const result1 = tmpResult2.participantMemberInfo(participant);
                  cResult[23] = participant;
                  cResult[24] = result1;
                  tmp25 = result1;
                } else {
                  tmp25 = cResult[24];
                }
                if (cResult[25] !== tmp25) {
                  const obj4 = { variant: "text-xs/medium", color: "text-default", children: tmp25 };
                  const tmp29 = closure_4(participant(analyticsLocations[12]).Text, obj4);
                  cResult[25] = tmp25;
                  cResult[26] = tmp29;
                  tmp27 = tmp29;
                } else {
                  tmp27 = cResult[26];
                }
                if (cResult[27] === tmp4.participantNameplateContainer) {
                  if (cResult[28] === tmp22) {
                    let tmp30;
                    if (cResult[29] === tmp27) {
                      tmp30 = cResult[30];
                    }
                    if (cResult[31] === tmp6) {
                      if (cResult[32] === tmp4.touchableContainer) {
                        if (cResult[33] === tmp30) {
                          if (cResult[34] === joined) {
                            let tmp34;
                            let tmp38;
                            if (cResult[35] === tmp14) {
                              tmp34 = cResult[36];
                            }
                            const _Symbol = Symbol;
                            const participantActionContainer = tmp4.participantActionContainer;
                            if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp(tmp2[14]).intl;
                              const stringResult = intl.string(participant(analyticsLocations[14]).t.f0T7hI);
                              cResult[37] = stringResult;
                              tmp38 = stringResult;
                            } else {
                              tmp38 = cResult[37];
                            }
                            const tmp40 = participant.rtsState === participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                            if (cResult[38] === onGrantRequest) {
                              if (cResult[39] === tmp4.participantActionIcon) {
                                let tmp41;
                                let tmp45;
                                if (cResult[40] === tmp40) {
                                  tmp41 = cResult[41];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl2 = tmp(tmp2[14]).intl;
                                  const stringResult1 = intl2.string(participant(analyticsLocations[14]).t.moABMy);
                                  cResult[42] = stringResult1;
                                  tmp45 = stringResult1;
                                } else {
                                  tmp45 = cResult[42];
                                }
                                if (cResult[43] === onDenyRequest) {
                                  let tmp47;
                                  if (cResult[44] === tmp4.participantActionIcon) {
                                    tmp47 = cResult[45];
                                  }
                                  if (cResult[46] === tmp4.participantActionContainer) {
                                    if (cResult[47] === tmp41) {
                                      let tmp51;
                                      if (cResult[48] === tmp47) {
                                        tmp51 = cResult[49];
                                      }
                                      if (cResult[50] === tmp4.participantItemContainer) {
                                        if (cResult[51] === tmp34) {
                                          let tmp55;
                                          if (cResult[52] === tmp51) {
                                            tmp55 = cResult[53];
                                          }
                                          return tmp55;
                                        }
                                      }
                                      const obj5 = { style: participantItemContainer, children: items };
                                      items = [tmp34, tmp51];
                                      const tmp58 = closure_5(View, obj5);
                                      cResult[50] = tmp4.participantItemContainer;
                                      cResult[51] = tmp34;
                                      cResult[52] = tmp51;
                                      cResult[53] = tmp58;
                                      tmp55 = tmp58;
                                    }
                                  }
                                  const obj6 = { style: participantActionContainer, children: items1 };
                                  items1 = [tmp41, tmp47];
                                  const tmp54 = closure_5(View, obj6);
                                  cResult[46] = tmp4.participantActionContainer;
                                  cResult[47] = tmp41;
                                  cResult[48] = tmp47;
                                  cResult[49] = tmp54;
                                  tmp51 = tmp54;
                                }
                                const obj7 = { accessibilityLabel: tmp45, containerStyle: tmp4.participantActionIcon, source: channel(analyticsLocations[18]), onPress: onDenyRequest };
                                const tmp5Result = channel(analyticsLocations[16]);
                                const tmp50 = closure_4(tmp5Result, obj7);
                                cResult[43] = onDenyRequest;
                                cResult[44] = tmp4.participantActionIcon;
                                cResult[45] = tmp50;
                                tmp47 = tmp50;
                              }
                            }
                            const obj8 = { accessibilityLabel: tmp38, containerStyle: tmp4.participantActionIcon, source: channel(analyticsLocations[17]), onPress: onGrantRequest, disabled: tmp40 };
                            const tmp5Result2 = channel(analyticsLocations[16]);
                            const tmp44 = closure_4(tmp5Result2, obj8);
                            cResult[38] = onGrantRequest;
                            cResult[39] = tmp4.participantActionIcon;
                            cResult[40] = tmp40;
                            cResult[41] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                      }
                    }
                    const obj9 = { onPress: tmp6, accessibilityLabel: joined, accessibilityRole: "button", style: tmp10, children: items2 };
                    items2 = [tmp14, tmp30];
                    const tmp36 = closure_5(participant(analyticsLocations[13]).PressableOpacity, obj9);
                    cResult[31] = tmp6;
                    cResult[32] = tmp4.touchableContainer;
                    cResult[33] = tmp30;
                    cResult[34] = joined;
                    cResult[35] = tmp14;
                    cResult[36] = tmp36;
                    tmp34 = tmp36;
                  }
                }
                const obj10 = { style: participantNameplateContainer, children: items3 };
                items3 = [tmp22, tmp27];
                const tmp33 = closure_5(View, obj10);
                cResult[27] = tmp4.participantNameplateContainer;
                cResult[28] = tmp22;
                cResult[29] = tmp27;
                cResult[30] = tmp33;
                tmp30 = tmp33;
              }
              const obj11 = { style: tmp21, numberOfLines: 1, children: participant.user.username };
              const tmp24 = closure_4(participant(analyticsLocations[11]).LegacyText, obj11);
              cResult[20] = participant.user.username;
              cResult[21] = tmp21;
              cResult[22] = tmp24;
              tmp22 = tmp24;
            }
            const items4 = [tmp4.participantNameplateText, tmp20];
            cResult[17] = tmp4.participantNameplateText;
            cResult[18] = tmp20;
            cResult[19] = items4;
            tmp21 = items4;
          }
          const obj12 = { style: tmp4.participantAvatarContainer, children: tmp11 };
          const tmp17 = closure_4(View, obj12);
          cResult[12] = tmp4.participantAvatarContainer;
          cResult[13] = tmp11;
          cResult[14] = tmp17;
          tmp14 = tmp17;
        }
        const obj13 = { user: participant.user, guildId: channel.guild_id, size: participant(analyticsLocations[11]).AvatarSizes.NORMAL };
        const Avatar = tmp(tmp2[11]).Avatar;
        const tmp13 = closure_4(Avatar, obj13);
        cResult[9] = channel.guild_id;
        cResult[10] = participant.user;
        cResult[11] = tmp13;
        tmp11 = tmp13;
      }
      const items5 = [username, tmp7];
      cResult[6] = participant.user.username;
      cResult[7] = tmp7;
      cResult[8] = items5;
      obj3 = items5;
    }
  }
  const fn = function o() {
    const obj = { userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  };
  cResult[0] = analyticsLocations;
  cResult[1] = channel.id;
  cResult[2] = participant.user.id;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((participant) => {
  let Avatar;
  let intl;
  let intl2;
  let items;
  let items1;
  let items3;
  let items4;
  let items5;
  let obj5;
  let onDenyRequest;
  let onGrantRequest;
  let tmp6Result;
  participant = participant.participant;
  channel = participant.channel;
  let analyticsLocations;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = closure_6();
  analyticsLocations = channel(analyticsLocations[8])().analyticsLocations;
  let obj = { style: tmp.participantItemContainer, children: items4 };
  const obj2 = {
    onPress() {
      const obj = { userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    },
    accessibilityLabel: items.join(", "),
    accessibilityRole: "button",
    style: tmp.touchableContainer,
    children: items1
  };
  items = [participant.user.username, ];
  const PressableOpacity = participant(analyticsLocations[13]).PressableOpacity;
  const obj3 = participant(analyticsLocations[10]);
  items[1] = obj3.participantMemberInfo(participant);
  const obj4 = { style: tmp.participantAvatarContainer, children: closure_4(Avatar, obj5) };
  obj5 = { user: participant.user, guildId: channel.guild_id, size: participant(analyticsLocations[11]).AvatarSizes.NORMAL };
  Avatar = participant(analyticsLocations[11]).Avatar;
  items1 = [closure_4(View, obj4), ];
  const items2 = [tmp.participantNameplateText, ];
  const member = participant.member;
  let colorString;
  const obj6 = { style: tmp.participantNameplateContainer, children: items3 };
  const LegacyText = participant(analyticsLocations[11]).LegacyText;
  if (member != null) {
    colorString = member.colorString;
  }
  if (colorString == null) {
    colorString = tmp.participantNameplateText.color;
  }
  const obj7 = { style: items2, numberOfLines: 1, children: participant.user.username };
  items2[1] = { color: colorString };
  items3 = [closure_4(LegacyText, obj7), ];
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: tmp6Result.participantMemberInfo(participant) };
  const Text = tmp6(tmp3[12]).Text;
  tmp6Result = participant(analyticsLocations[10]);
  items3[1] = closure_4(Text, obj8);
  items1[1] = closure_5(View, obj6);
  items4 = [closure_5(PressableOpacity, obj2), ];
  const obj9 = { style: tmp.participantActionContainer, children: items5 };
  const obj10 = { accessibilityLabel: intl.string(participant(analyticsLocations[14]).t.f0T7hI), containerStyle: tmp.participantActionIcon, source: channel(analyticsLocations[17]), onPress: onGrantRequest, disabled: participant.rtsState === participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK };
  const tmp2Result = channel(analyticsLocations[16]);
  intl = tmp6(tmp3[14]).intl;
  items5 = [closure_4(tmp2Result, obj10), ];
  const obj11 = { accessibilityLabel: intl2.string(participant(analyticsLocations[14]).t.moABMy), containerStyle: tmp.participantActionIcon, source: channel(analyticsLocations[18]), onPress: onDenyRequest };
  const tmp2Result2 = channel(analyticsLocations[16]);
  intl2 = tmp6(tmp3[14]).intl;
  items5[1] = closure_4(tmp2Result2, obj11);
  items4[1] = closure_5(View, obj9);
  return closure_5(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let container;
  let emptyContainer;
  let emptyParticipant;
  let emptyTitle;
  let items;
  let sortedRequestToSpeakParticipants;
  let tmp5;
  let tmp6;
  const tmp = channel;
  let obj = channel(sortedRequestToSpeakParticipants[7]);
  const cResult = obj.c(34);
  channel = channel.channel;
  const tmp4 = closure_6();
  importDefault = tmp4;
  let obj2 = channel(sortedRequestToSpeakParticipants[19]);
  sortedRequestToSpeakParticipants = obj2.useSortedRequestToSpeakParticipants(channel.id);
  if (cResult[0] !== channel) {
    const fn = function o(user) {
      const obj = StageChannelActionCreators;
      obj.setUserSuppress(channel, user.user.id, false);
    };
    cResult[0] = channel;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let closure_3 = tmp5;
  if (cResult[2] !== channel) {
    const fn2 = function x(user) {
      const obj = StageChannelActionCreators;
      obj.setUserSuppress(channel, user.user.id, true);
    };
    cResult[2] = channel;
    cResult[3] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  let closure_4 = tmp6;
  if (0 === sortedRequestToSpeakParticipants.length) {
    let tmp17;
    let tmp19;
    let tmp22;
    let tmp24;
    const _Symbol = Symbol;
    ({ container, emptyContainer, emptyTitle } = tmp4);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[14]).intl;
      const stringResult = intl.string(tmp(sortedRequestToSpeakParticipants[14]).t["7R24mX"]);
      cResult[4] = stringResult;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[4];
    }
    if (cResult[5] !== tmp4.emptyTitle) {
      const obj3 = { style: emptyTitle, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp17 };
      const tmp21 = closure_4(tmp(sortedRequestToSpeakParticipants[12]).Text, obj3);
      cResult[5] = tmp4.emptyTitle;
      cResult[6] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[6];
    }
    const _Symbol2 = Symbol;
    const emptyBody = tmp4.emptyBody;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[14]).intl;
      const stringResult1 = intl2.string(tmp(sortedRequestToSpeakParticipants[14]).t.Rpr2s0);
      cResult[7] = stringResult1;
      tmp22 = stringResult1;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== tmp4.emptyBody) {
      const obj4 = { style: emptyBody, variant: "text-sm/medium", color: "text-default", children: tmp22 };
      const tmp26 = closure_4(tmp(sortedRequestToSpeakParticipants[12]).Text, obj4);
      cResult[8] = tmp4.emptyBody;
      cResult[9] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[9];
    }
    if (cResult[10] === tmp4.emptyContainer) {
      if (cResult[11] === tmp24) {
        let tmp27;
        if (cResult[12] === tmp19) {
          tmp27 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          let tmp31;
          if (cResult[15] === tmp27) {
            tmp31 = cResult[16];
          }
          return tmp31;
        }
        const obj5 = { style: container, children: tmp27 };
        const tmp34 = closure_4(closure_3, obj5);
        cResult[14] = tmp4.container;
        cResult[15] = tmp27;
        cResult[16] = tmp34;
        tmp31 = tmp34;
      }
    }
    const obj6 = { style: emptyContainer, children: items };
    items = [tmp19, tmp24];
    const tmp30 = closure_5(closure_3, obj6);
    cResult[10] = tmp4.emptyContainer;
    cResult[11] = tmp24;
    cResult[12] = tmp19;
    cResult[13] = tmp30;
    tmp27 = tmp30;
  } else {
    if (cResult[17] === channel) {
      if (cResult[18] === tmp6) {
        if (cResult[19] === tmp5) {
          if (cResult[20] === sortedRequestToSpeakParticipants) {
            let tmp7;
            if (cResult[21] === tmp4.emptyParticipant) {
              tmp7 = cResult[22];
            }
            class C {
              constructor(arg0, arg1) {
                tmp = closure_2[arg1];
                closure_0 = tmp;
                if (null == tmp) {
                  tmp6 = closure_4;
                  tmp7 = closure_3;
                  obj1 = { style: null };
                  tmp8 = closure_1;
                  obj1.style = closure_1.emptyParticipant;
                  tmp5 = closure_4(closure_3, obj1);
                } else {
                  tmp2 = closure_4;
                  tmp3 = closure_1_7;
                  obj = { participant: null, channel: null, onGrantRequest: null, onDenyRequest: null };
                  obj.participant = tmp;
                  tmp4 = closure_0;
                  obj.channel = closure_0;
                  obj.onGrantRequest = function onGrantRequest() {
                    return closure_3(closure_0);
                  };
                  obj.onDenyRequest = function onDenyRequest() {
                    return closure_4(closure_0);
                  };
                  tmp5 = closure_4(closure_1_7, obj, tmp.user.id);
                }
                return tmp5;
              }
            }
            if (cResult[25] === tmp4.listContainer) {
              let tmp9;
              let tmp11;
              if (cResult[26] === tmp8) {
                tmp9 = cResult[27];
              }
              class C {
                constructor(arg0, arg1) {
                  tmp = closure_2[arg1];
                  closure_0 = tmp;
                  if (null == tmp) {
                    tmp6 = closure_4;
                    tmp7 = closure_3;
                    obj1 = { style: null };
                    tmp8 = closure_1;
                    obj1.style = closure_1.emptyParticipant;
                    tmp5 = closure_4(closure_3, obj1);
                  } else {
                    tmp2 = closure_4;
                    tmp3 = closure_1_7;
                    obj = { participant: null, channel: null, onGrantRequest: null, onDenyRequest: null };
                    obj.participant = tmp;
                    tmp4 = closure_0;
                    obj.channel = closure_0;
                    obj.onGrantRequest = function onGrantRequest() {
                      return closure_3(closure_0);
                    };
                    obj.onDenyRequest = function onDenyRequest() {
                      return closure_4(closure_0);
                    };
                    tmp5 = closure_4(closure_1_7, obj, tmp.user.id);
                  }
                  return tmp5;
                }
              }
              const sum = sortedRequestToSpeakParticipants.length + 1;
              if (cResult[28] !== sum) {
                const items1 = [];
                class C {
                  constructor(arg0, arg1) {
                    tmp = closure_2[arg1];
                    closure_0 = tmp;
                    if (null == tmp) {
                      tmp6 = closure_4;
                      tmp7 = closure_3;
                      obj1 = { style: null };
                      tmp8 = closure_1;
                      obj1.style = closure_1.emptyParticipant;
                      tmp5 = closure_4(closure_3, obj1);
                    } else {
                      tmp2 = closure_4;
                      tmp3 = closure_1_7;
                      obj = { participant: null, channel: null, onGrantRequest: null, onDenyRequest: null };
                      obj.participant = tmp;
                      tmp4 = closure_0;
                      obj.channel = closure_0;
                      obj.onGrantRequest = function onGrantRequest() {
                        return closure_3(closure_0);
                      };
                      obj.onDenyRequest = function onDenyRequest() {
                        return closure_4(closure_0);
                      };
                      tmp5 = closure_4(closure_1_7, obj, tmp.user.id);
                    }
                    return tmp5;
                  }
                }
                cResult[28] = sum;
                cResult[29] = items1;
                tmp11 = items1;
              } else {
                tmp11 = cResult[29];
              }
              if (cResult[30] === tmp7) {
                if (cResult[31] === tmp9) {
                  class C {
                    constructor(arg0, arg1) {
                      tmp = closure_2[arg1];
                      closure_0 = tmp;
                      if (null == tmp) {
                        tmp6 = closure_4;
                        tmp7 = closure_3;
                        obj1 = { style: null };
                        tmp8 = closure_1;
                        obj1.style = closure_1.emptyParticipant;
                        tmp5 = closure_4(closure_3, obj1);
                      } else {
                        tmp2 = closure_4;
                        tmp3 = closure_1_7;
                        obj = { participant: null, channel: null, onGrantRequest: null, onDenyRequest: null };
                        obj.participant = tmp;
                        tmp4 = closure_0;
                        obj.channel = closure_0;
                        obj.onGrantRequest = function onGrantRequest() {
                          return closure_3(closure_0);
                        };
                        obj.onDenyRequest = function onDenyRequest() {
                          return closure_4(closure_0);
                        };
                        tmp5 = closure_4(closure_1_7, obj, tmp.user.id);
                      }
                      return tmp5;
                    }
                  }
                }
              }
              const obj7 = { style: tmp9, itemSize: 64, renderItem: tmp7, keyboardShouldPersistTaps: "always", sections: tmp11 };
              cResult[30] = tmp7;
              cResult[31] = tmp9;
              cResult[32] = tmp11;
              cResult[33] = closure_4(require("FastList"), obj7);
              const tmp15 = closure_4(require("FastList"), obj7);
            }
            const items2 = [tmp4.listContainer, tmp8];
            cResult[25] = tmp4.listContainer;
            cResult[26] = tmp8;
            cResult[27] = items2;
            tmp9 = items2;
          }
        }
      }
    }
    class C {
      constructor(arg0, arg1) {
        tmp = closure_2[arg1];
        closure_0 = tmp;
        if (null == tmp) {
          tmp6 = closure_4;
          tmp7 = closure_3;
          obj1 = { style: null };
          tmp8 = closure_1;
          obj1.style = closure_1.emptyParticipant;
          tmp5 = closure_4(closure_3, obj1);
        } else {
          tmp2 = closure_4;
          tmp3 = closure_1_7;
          obj = { participant: null, channel: null, onGrantRequest: null, onDenyRequest: null };
          obj.participant = tmp;
          tmp4 = closure_0;
          obj.channel = closure_0;
          obj.onGrantRequest = function onGrantRequest() {
            return closure_3(closure_0);
          };
          obj.onDenyRequest = function onDenyRequest() {
            return closure_4(closure_0);
          };
          tmp5 = closure_4(closure_1_7, obj, tmp.user.id);
        }
        return tmp5;
      }
    }
    cResult[17] = channel;
    cResult[18] = tmp6;
    cResult[19] = tmp5;
    cResult[20] = sortedRequestToSpeakParticipants;
    cResult[21] = tmp4.emptyParticipant;
    cResult[22] = C;
    tmp7 = C;
  }
}) : ((channel) => {
  let emptyParticipant;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj3;
  let tmp6;
  channel = channel.channel;
  let sortedRequestToSpeakParticipants;
  const height = channel.height;
  const tmp = closure_6();
  importDefault = tmp;
  let obj = channel(sortedRequestToSpeakParticipants[19]);
  sortedRequestToSpeakParticipants = obj.useSortedRequestToSpeakParticipants(channel.id);
  if (0 === sortedRequestToSpeakParticipants.length) {
    let obj2 = { style: tmp.container, children: closure_5(View, obj3) };
    obj3 = { style: tmp.emptyContainer, children: items };
    const obj4 = { style: tmp.emptyTitle, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(channel(sortedRequestToSpeakParticipants[14]).t["7R24mX"]) };
    const Text = tmp2(tmp3[12]).Text;
    intl = tmp2(tmp3[14]).intl;
    items = [closure_4(Text, obj4), ];
    const obj5 = { style: tmp.emptyBody, variant: "text-sm/medium", color: "text-default", children: intl2.string(channel(sortedRequestToSpeakParticipants[14]).t.Rpr2s0) };
    const Text2 = tmp2(tmp3[12]).Text;
    intl2 = tmp2(tmp3[14]).intl;
    items[1] = closure_4(Text2, obj5);
    tmp6 = closure_4(View, obj2);
  } else {
    let tmp5 = importDefault;
    const obj6 = {
      style: items1,
      itemSize: 64,
      renderItem(arg0, arg1) {
          let closure_0;
          let tmp5;
          channel = tmp;
          if (null == sortedRequestToSpeakParticipants[arg1]) {
            const obj2 = { style: emptyParticipant.emptyParticipant };
            tmp5 = closure_1_4(View, obj2);
          } else {
            let obj = {
              participant: sortedRequestToSpeakParticipants[arg1],
              channel,
              onGrantRequest() {
                  const obj = StageChannelActionCreators;
                  obj.setUserSuppress(channel, closure_0.user.id, false);
                },
              onDenyRequest() {
                  const obj = StageChannelActionCreators;
                  obj.setUserSuppress(channel, closure_0.user.id, true);
                }
            };
            tmp5 = closure_1_4(closure_1_7, obj, tmp.user.id);
          }
          return tmp5;
        },
      keyboardShouldPersistTaps: "always",
      sections: items2
    };
    items1 = [tmp.listContainer, ];
    const obj7 = { height };
    items1[1] = obj7;
    items2 = [sortedRequestToSpeakParticipants.length + 1];
    tmp6 = closure_4(require("FastList"), obj6);
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default tmp5;