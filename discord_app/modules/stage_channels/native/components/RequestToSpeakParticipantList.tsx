// === Module 9585: RequestToSpeakParticipantList ===

// Module 9585 (RequestToSpeakParticipantList)
import nativeDefault from "native" /* 587 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8074 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { paddingVertical: 4, flexDirection: "column", minHeight: 288, flex: 1 }, listContainer: { paddingVertical: 4, flexDirection: "column", flex: 1 }, participantItemContainer: { padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, touchableContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, participantAvatarContainer: { paddingLeft: 4 }, participantNameplateContainer: { paddingHorizontal: 16, flex: 1 }, participantNameplateText: { fontSize: 16, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, marginTop: 0, marginBottom: 0, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, participantActionContainer: { flexDirection: "row", paddingRight: 4 }, participantActionIcon: null, emptyContainer: null, emptyParticipant: null, emptyTitle: null, emptyBody: null };
let obj3 = { fontSize: 16, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, marginTop: 0, marginBottom: 0, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.participantActionIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.emptyContainer = { flex: 1, alignItems: "center", justifyContent: "center" };
obj2.emptyParticipant = { flex: 1, height: 64 };
obj2.emptyTitle = { textAlign: "center", marginTop: 16, marginBottom: 8 };
obj2.emptyBody = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((participant) => {
  const cResult = participant(analyticsLocations[7]).c(54);
  participant = participant.participant;
  channel = participant.channel;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp4 = closure_6();
  analyticsLocations = channel(analyticsLocations[8])().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === channel.id) {
      if (cResult[2] === participant.user.id) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] !== participant) {
        const result = tmp(tmp2[10]).participantMemberInfo(participant);
        cResult[4] = participant;
        cResult[5] = result;
        let tmp7 = result;
        const tmpResult = tmp(tmp2[10]);
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === participant.user.username) {
        if (cResult[7] === tmp7) {
          let obj3 = cResult[8];
        }
        const joined = obj3.join(", ");
        if (cResult[9] === channel.guild_id) {
          if (cResult[10] === participant.user) {
            let tmp11 = cResult[11];
          }
          if (cResult[12] === tmp4.participantAvatarContainer) {
            if (cResult[13] === tmp11) {
              let tmp14 = cResult[14];
            }
            const member = participant.member;
            let colorString;
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
              let tmp20 = obj2;
            } else {
              tmp20 = cResult[16];
            }
            if (cResult[17] === tmp4.participantNameplateText) {
              if (cResult[18] === tmp20) {
                let tmp21 = cResult[19];
              }
              if (cResult[20] === participant.user.username) {
                if (cResult[21] === tmp21) {
                  let tmp22 = cResult[22];
                }
                if (cResult[23] !== participant) {
                  const result1 = tmp(tmp2[10]).participantMemberInfo(participant);
                  cResult[23] = participant;
                  cResult[24] = result1;
                  let tmp25 = result1;
                  const tmpResult2 = tmp(tmp2[10]);
                } else {
                  tmp25 = cResult[24];
                }
                if (cResult[25] !== tmp25) {
                  const obj4 = { variant: "text-xs/medium", color: "text-default", children: tmp25 };
                  const tmp29 = closure_4(tmp(tmp2[12]).Text, obj4);
                  cResult[25] = tmp25;
                  cResult[26] = tmp29;
                  let tmp27 = tmp29;
                } else {
                  tmp27 = cResult[26];
                }
                if (cResult[27] === tmp4.participantNameplateContainer) {
                  if (cResult[28] === tmp22) {
                    if (cResult[29] === tmp27) {
                      let tmp30 = cResult[30];
                    }
                    if (cResult[31] === tmp6) {
                      if (cResult[32] === tmp4.touchableContainer) {
                        if (cResult[33] === tmp30) {
                          if (cResult[34] === joined) {
                            if (cResult[35] === tmp14) {
                              let tmp34 = cResult[36];
                            }
                            const _Symbol = Symbol;
                            if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl = tmp(tmp2[14]).intl;
                              const stringResult = intl.string(tmp(tmp2[14]).t.f0T7hI);
                              cResult[37] = stringResult;
                              let tmp38 = stringResult;
                            } else {
                              tmp38 = cResult[37];
                            }
                            const tmp40 = participant.rtsState === tmp(tmp2[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                            if (cResult[38] === onGrantRequest) {
                              if (cResult[39] === tmp4.participantActionIcon) {
                                if (cResult[40] === tmp40) {
                                  let tmp41 = cResult[41];
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl2 = tmp(tmp2[14]).intl;
                                  const stringResult1 = intl2.string(tmp(tmp2[14]).t.moABMy);
                                  cResult[42] = stringResult1;
                                  let tmp45 = stringResult1;
                                } else {
                                  tmp45 = cResult[42];
                                }
                                if (cResult[43] === onDenyRequest) {
                                  if (cResult[44] === tmp4.participantActionIcon) {
                                    let tmp47 = cResult[45];
                                  }
                                  if (cResult[46] === tmp4.participantActionContainer) {
                                    if (cResult[47] === tmp41) {
                                      if (cResult[48] === tmp47) {
                                        let tmp51 = cResult[49];
                                      }
                                      if (cResult[50] === tmp4.participantItemContainer) {
                                        if (cResult[51] === tmp34) {
                                          if (cResult[52] === tmp51) {
                                            let tmp55 = cResult[53];
                                          }
                                          return tmp55;
                                        }
                                      }
                                      const obj5 = { style: tmp4.participantItemContainer, children: null };
                                      const items = [tmp34, tmp51];
                                      obj5.children = items;
                                      const tmp58 = closure_5(View, obj5);
                                      cResult[50] = tmp4.participantItemContainer;
                                      cResult[51] = tmp34;
                                      cResult[52] = tmp51;
                                      cResult[53] = tmp58;
                                      tmp55 = tmp58;
                                    }
                                  }
                                  const obj6 = { style: tmp4.participantActionContainer, children: null };
                                  const items1 = [tmp41, tmp47];
                                  obj6.children = items1;
                                  const tmp54 = closure_5(View, obj6);
                                  cResult[46] = tmp4.participantActionContainer;
                                  cResult[47] = tmp41;
                                  cResult[48] = tmp47;
                                  cResult[49] = tmp54;
                                  tmp51 = tmp54;
                                }
                                const obj7 = { accessibilityLabel: tmp45, containerStyle: tmp4.participantActionIcon, source: tmp5(tmp2[18]), onPress: onDenyRequest };
                                const tmp50 = closure_4(tmp5(tmp2[16]), obj7);
                                cResult[43] = onDenyRequest;
                                cResult[44] = tmp4.participantActionIcon;
                                cResult[45] = tmp50;
                                tmp47 = tmp50;
                                const tmp5Result = tmp5(tmp2[16]);
                              }
                            }
                            const obj8 = { accessibilityLabel: tmp38, containerStyle: tmp4.participantActionIcon, source: tmp5(tmp2[17]), onPress: onGrantRequest, disabled: tmp40 };
                            const tmp44 = closure_4(tmp5(tmp2[16]), obj8);
                            cResult[38] = onGrantRequest;
                            cResult[39] = tmp4.participantActionIcon;
                            cResult[40] = tmp40;
                            cResult[41] = tmp44;
                            tmp41 = tmp44;
                            const tmp5Result2 = tmp5(tmp2[16]);
                          }
                        }
                      }
                    }
                    const obj9 = { onPress: tmp6, accessibilityLabel: joined, accessibilityRole: "button", style: tmp10, children: null };
                    const items2 = [tmp14, tmp30];
                    obj9.children = items2;
                    const tmp36 = closure_5(tmp(tmp2[13]).PressableOpacity, obj9);
                    cResult[31] = tmp6;
                    cResult[32] = tmp4.touchableContainer;
                    cResult[33] = tmp30;
                    cResult[34] = joined;
                    cResult[35] = tmp14;
                    cResult[36] = tmp36;
                    tmp34 = tmp36;
                  }
                }
                const obj10 = { style: tmp4.participantNameplateContainer, children: null };
                const items3 = [tmp22, tmp27];
                obj10.children = items3;
                const tmp33 = closure_5(View, obj10);
                cResult[27] = tmp4.participantNameplateContainer;
                cResult[28] = tmp22;
                cResult[29] = tmp27;
                cResult[30] = tmp33;
                tmp30 = tmp33;
              }
              const obj11 = { style: tmp21, numberOfLines: 1, children: participant.user.username };
              const tmp24 = closure_4(tmp(tmp2[11]).LegacyText, obj11);
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
        const obj13 = { user: participant.user, guildId: channel.guild_id, size: tmp(tmp2[11]).AvatarSizes.NORMAL };
        const tmp13 = closure_4(tmp(tmp2[11]).Avatar, obj13);
        cResult[9] = channel.guild_id;
        cResult[10] = participant.user;
        cResult[11] = tmp13;
        tmp11 = tmp13;
      }
      const items5 = [participant.user.username, tmp7];
      cResult[6] = participant.user.username;
      cResult[7] = tmp7;
      cResult[8] = items5;
      obj3 = items5;
    }
  }
  const fn = function o() {
    showUserProfileActionSheetDefault({ userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  };
  cResult[0] = analyticsLocations;
  cResult[1] = channel.id;
  cResult[2] = participant.user.id;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = participant(analyticsLocations[7]);
}) : ((participant) => {
  participant = participant.participant;
  channel = participant.channel;
  let analyticsLocations;
  ({ onGrantRequest, onDenyRequest } = participant);
  const tmp = closure_6();
  analyticsLocations = channel(analyticsLocations[8])().analyticsLocations;
  const obj = { style: tmp.participantItemContainer, children: null };
  const obj2 = {
    onPress() {
      showUserProfileActionSheetDefault({ userId: participant.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
    },
    accessibilityLabel: null,
    accessibilityRole: "button",
    style: null,
    children: null
  };
  const items = [participant.user.username, participant(analyticsLocations[10]).participantMemberInfo(participant)];
  obj2.accessibilityLabel = items.join(", ");
  obj2.style = tmp.touchableContainer;
  const obj4 = { style: tmp.participantAvatarContainer, children: null };
  const obj3 = participant(analyticsLocations[10]);
  obj4.children = closure_4(participant(analyticsLocations[11]).Avatar, { user: participant.user, guildId: channel.guild_id, size: participant(analyticsLocations[11]).AvatarSizes.NORMAL });
  const items1 = [closure_4(View, obj4), ];
  const obj6 = { style: tmp.participantNameplateContainer, children: null };
  const items2 = [tmp.participantNameplateText, ];
  const member = participant.member;
  let colorString;
  if (member != null) {
    colorString = member.colorString;
  }
  if (colorString == null) {
    colorString = tmp.participantNameplateText.color;
  }
  items2[1] = { color: colorString };
  const items3 = [closure_4(participant(analyticsLocations[11]).LegacyText, { style: items2, numberOfLines: 1, children: participant.user.username }), ];
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: null };
  const obj5 = { user: participant.user, guildId: channel.guild_id, size: participant(analyticsLocations[11]).AvatarSizes.NORMAL };
  const obj7 = { style: items2, numberOfLines: 1, children: participant.user.username };
  obj8.children = participant(analyticsLocations[10]).participantMemberInfo(participant);
  items3[1] = closure_4(participant(analyticsLocations[12]).Text, obj8);
  obj6.children = items3;
  items1[1] = closure_5(View, obj6);
  obj2.children = items1;
  const items4 = [closure_5(participant(analyticsLocations[13]).PressableOpacity, obj2), ];
  const obj9 = { style: tmp.participantActionContainer, children: null };
  const obj10 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null, disabled: null };
  const tmp6Result = participant(analyticsLocations[10]);
  const intl = tmp6(tmp3[14]).intl;
  obj10.accessibilityLabel = intl.string(participant(analyticsLocations[14]).t.f0T7hI);
  obj10.containerStyle = tmp.participantActionIcon;
  obj10.source = channel(analyticsLocations[17]);
  obj10.onPress = onGrantRequest;
  obj10.disabled = participant.rtsState === participant(analyticsLocations[15]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const items5 = [closure_4(channel(analyticsLocations[16]), obj10), ];
  const obj11 = { accessibilityLabel: null, containerStyle: null, source: null, onPress: null };
  const tmp2Result = channel(analyticsLocations[16]);
  const intl2 = tmp6(tmp3[14]).intl;
  obj11.accessibilityLabel = intl2.string(participant(analyticsLocations[14]).t.moABMy);
  obj11.containerStyle = tmp.participantActionIcon;
  obj11.source = channel(analyticsLocations[18]);
  obj11.onPress = onDenyRequest;
  items5[1] = closure_4(channel(analyticsLocations[16]), obj11);
  obj9.children = items5;
  items4[1] = closure_5(View, obj9);
  obj.children = items4;
  return closure_5(View, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakParticipantList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(sortedRequestToSpeakParticipants[7]).c(34);
  channel = channel.channel;
  const tmp4 = closure_6();
  importDefault = tmp4;
  let obj = channel(sortedRequestToSpeakParticipants[7]);
  sortedRequestToSpeakParticipants = channel(sortedRequestToSpeakParticipants[19]).useSortedRequestToSpeakParticipants(channel.id);
  if (cResult[0] !== channel) {
    const fn = function o(user) {
      StageChannelActionCreators.setUserSuppress(channel, user.user.id, false);
    };
    cResult[0] = channel;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  closure_3 = tmp5;
  if (cResult[2] !== channel) {
    const fn2 = function x(user) {
      StageChannelActionCreators.setUserSuppress(channel, user.user.id, true);
    };
    cResult[2] = channel;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  closure_4 = tmp6;
  if (0 === sortedRequestToSpeakParticipants.length) {
    const _Symbol = Symbol;
    ({ container, emptyContainer, emptyTitle } = tmp4);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[14]).intl;
      const stringResult = intl.string(tmp(tmp2[14]).t["7R24mX"]);
      cResult[4] = stringResult;
      let tmp17 = stringResult;
    } else {
      tmp17 = cResult[4];
    }
    if (cResult[5] !== tmp4.emptyTitle) {
      const obj3 = { style: emptyTitle, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp17 };
      const tmp21 = closure_4(tmp(tmp2[12]).Text, obj3);
      cResult[5] = tmp4.emptyTitle;
      cResult[6] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[14]).intl;
      const stringResult1 = intl2.string(tmp(tmp2[14]).t.Rpr2s0);
      cResult[7] = stringResult1;
      let tmp22 = stringResult1;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== tmp4.emptyBody) {
      const obj4 = { style: tmp4.emptyBody, variant: "text-sm/medium", color: "text-default", children: tmp22 };
      const tmp26 = closure_4(tmp(tmp2[12]).Text, obj4);
      cResult[8] = tmp4.emptyBody;
      cResult[9] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[9];
    }
    if (cResult[10] === tmp4.emptyContainer) {
      if (cResult[11] === tmp24) {
        if (cResult[12] === tmp19) {
          let tmp27 = cResult[13];
        }
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp27) {
            let tmp31 = cResult[16];
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
    const obj6 = { style: emptyContainer, children: null };
    const items = [tmp19, tmp24];
    obj6.children = items;
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
            if (cResult[21] === tmp4.emptyParticipant) {
              let tmp7 = cResult[22];
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
              if (cResult[26] === tmp8) {
                let tmp9 = cResult[27];
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
                let tmp11 = items1;
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
              const tmp15 = closure_4(require("FastList"), obj7);
              cResult[30] = tmp7;
              cResult[31] = tmp9;
              cResult[32] = tmp11;
              cResult[33] = tmp15;
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
  let obj2 = channel(sortedRequestToSpeakParticipants[19]);
}) : ((channel) => {
  channel = channel.channel;
  let sortedRequestToSpeakParticipants;
  const tmp = closure_6();
  importDefault = tmp;
  sortedRequestToSpeakParticipants = channel(sortedRequestToSpeakParticipants[19]).useSortedRequestToSpeakParticipants(channel.id);
  if (0 === sortedRequestToSpeakParticipants.length) {
    let obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.emptyContainer, children: null };
    const obj4 = { style: tmp.emptyTitle, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(tmp3[14]).intl;
    obj4.children = intl.string(tmp2(tmp3[14]).t["7R24mX"]);
    const items = [closure_4(tmp2(tmp3[12]).Text, obj4), ];
    const obj5 = { style: tmp.emptyBody, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[14]).intl;
    obj5.children = intl2.string(tmp2(tmp3[14]).t.Rpr2s0);
    items[1] = closure_4(tmp2(tmp3[12]).Text, obj5);
    obj3.children = items;
    obj2.children = closure_5(View, obj3);
    let tmp6 = closure_4(View, obj2);
  } else {
    const obj6 = { style: null, itemSize: 64, renderItem: null, keyboardShouldPersistTaps: "always", sections: null };
    const items1 = [tmp.listContainer, ];
    const obj7 = { height: channel.height };
    items1[1] = obj7;
    obj6.style = items1;
    obj6.renderItem = function renderItem(arg0, arg1) {
      channel = tmp;
      if (null == sortedRequestToSpeakParticipants[arg1]) {
        const obj2 = { style: emptyParticipant.emptyParticipant };
        let tmp5 = closure_1_4(View, obj2);
      } else {
        const obj = {
          participant: tmp,
          channel,
          onGrantRequest() {
              StageChannelActionCreators.setUserSuppress(channel, closure_0.user.id, false);
            },
          onDenyRequest() {
              StageChannelActionCreators.setUserSuppress(channel, closure_0.user.id, true);
            }
        };
        tmp5 = closure_1_4(closure_1_7, obj, tmp.user.id);
      }
      return tmp5;
    };
    const items2 = [sortedRequestToSpeakParticipants.length + 1];
    obj6.sections = items2;
    tmp6 = closure_4(require("FastList"), obj6);
  }
  return tmp6;
});