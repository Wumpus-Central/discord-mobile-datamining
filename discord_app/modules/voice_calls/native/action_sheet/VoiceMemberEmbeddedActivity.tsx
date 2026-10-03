// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import handlePressJoinActivityDefault from "../../../activities/handlePressJoinActivity.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(6646).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const XSMALL = fn(1188).AvatarSizes.XSMALL;
const androidRippleConfig = fn(1192).getThemedRippleConfig({ foreground: true });
let size = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c14 = 1.7777777777777777;
const createStyles = fn(4890);
let obj = {
  voiceMemberItemRow: {
    paddingTop: 12,
    paddingBottom: 16,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-start",
  },
  innerRow: { paddingHorizontal: 16, alignItems: "center" },
  activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" },
  appIcon: size,
  appIconPlaceholder: null,
  centerGroup: null,
  applicationName: null,
  joinButton: null,
  joinButtonPill: null,
  joinButtonContainer: null,
  overflow: null,
  overflowBackgroundColor: null,
  overflowBackgroundColorActionSheet: null,
};
let obj3 = {};
const merged = Object.assign(size);
obj3.tintColor = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj.appIconPlaceholder = obj3;
obj.centerGroup = { flex: 1, paddingRight: 4 };
obj.applicationName = { lineHeight: 20 };
obj.joinButton = { alignSelf: "center" };
obj.joinButtonPill = { borderRadius: 100, paddingHorizontal: 24 };
obj.joinButtonContainer = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: "100%",
  paddingHorizontal: 16,
};
obj.overflow = { height: fn(1188).AVATAR_SIZE_MAP[XSMALL] };
let obj4 = { height: fn(1188).AVATAR_SIZE_MAP[XSMALL] };
obj.overflowBackgroundColor = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj.overflowBackgroundColorActionSheet = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_15 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
function calculateActivityRowHeight(bound) {
  return 40 + (bound - 32) / c14 + 12 + 16;
}
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onItemPress) => {
      const cResult = channelId(application[13]).c(97);
      ({ embeddedActivity, channelId } = onItemPress);
      onItemPress = onItemPress.onItemPress;
      const tmp4 = closure_15();
      if (cResult[0] !== embeddedActivity.applicationId) {
        const items = [embeddedActivity.applicationId];
        cResult[0] = embeddedActivity.applicationId;
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      application = stateFromStores(onItemPress(tmp2[14])(tmp5), 1)[0];
      if (cResult[2] !== embeddedActivity.userIds) {
        const _Array = Array;
        const mapped = Array.from(embeddedActivity.userIds).map((item) => user.getUser(item));
        let found = mapped.filter(channelId(tmp2[15]).isNotNullish);
        cResult[2] = embeddedActivity.userIds;
        cResult[3] = found;
        let tmp7 = found;
        const arr = Array.from(embeddedActivity.userIds);
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [handleCanJoin];
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== channelId) {
        const fn = function x() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[5] = channelId;
        cResult[6] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      let obj = channelId(application[13]);
      stateFromStores = channelId(application[16]).useStateFromStores(tmp10, tmp12);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [embeddedActivityJoinability];
        cResult[7] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[7];
      }
      let id;
      if (application != null) {
        id = application.id;
      }
      if (cResult[8] === id) {
        if (cResult[9] === stateFromStores) {
          let tmp17 = cResult[10];
        }
        const stateFromStores1 = channelId(tmp2[16]).useStateFromStores(tmp14, tmp17);
        if (cResult[11] !== embeddedActivity.location) {
          const embeddedActivityLocationGuildId = channelId(tmp2[17]).getEmbeddedActivityLocationGuildId(
            embeddedActivity.location,
          );
          cResult[11] = embeddedActivity.location;
          cResult[12] = embeddedActivityLocationGuildId;
          let tmp20 = embeddedActivityLocationGuildId;
          const tmpResult5 = channelId(tmp2[17]);
        } else {
          tmp20 = cResult[12];
        }
        const guildId = tmp20;
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const currentUser = UserStore.getCurrentUser();
          let id1;
          if (currentUser != null) {
            id1 = currentUser.id;
          }
          cResult[13] = id1;
          let tmp22 = id1;
        } else {
          tmp22 = cResult[13];
        }
        if (cResult[14] === application) {
          if (cResult[15] === channelId) {
            let tmp26 = cResult[16];
          }
          embeddedActivityJoinability = channelId(tmp2[18]).useEmbeddedActivityJoinability(tmp26);
          const _Math = Math;
          const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp6(tmp2[19])().width);
          if (cResult[17] !== bound) {
            const sum = 40 + (bound - 32) / c14 + 12 + 16;
            cResult[17] = bound;
            cResult[18] = sum;
            let tmp30 = sum;
          } else {
            tmp30 = cResult[18];
          }
          if (null != application) {
            if (null != stateFromStores1) {
              if (cResult[19] !== application) {
                let iconSource = application.getIconSource(32);
                if (iconSource == null) {
                  iconSource = tmp6(tmp2[20]);
                }
                class X {
                  constructor() {
                    tmp3 = closure_2;
                    tmp = onItemPress;
                    tmp2 = closure_3;
                    tmp4 = closure_4;
                    tmpResult = tmp(tmp2, tmp3, tmp4);
                    return;
                  }
                }
                cResult[19] = application;
                cResult[20] = iconSource;
                let tmp33 = iconSource;
              } else {
                tmp33 = cResult[20];
              }
              const name = application.name;
              if (cResult[21] === stateFromStores1) {
                if (cResult[22] === application) {
                  if (cResult[23] === stateFromStores) {
                    if (cResult[24] === onItemPress) {
                      let tmp35 = cResult[25];
                    }
                    handleCanJoin = tmp35;
                    if (cResult[26] === embeddedActivityJoinability) {
                      if (cResult[27] === tmp35) {
                        let tmp36 = cResult[28];
                      }
                      UserStore = tmp36;
                      if (cResult[29] !== bound) {
                        const diff = bound - 32;
                        const size1 = { width: null, height: null };
                        class W {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                            tmp = closure_1(closure_2[21])(obj);
                            return;
                          }
                        }
                        size1.height = diff / c14;
                        cResult[29] = bound;
                        cResult[30] = size1;
                        let size = size1;
                      } else {
                        size = cResult[30];
                      }
                      class W {
                        constructor() {
                          obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                          tmp = closure_1(closure_2[21])(obj);
                          return;
                        }
                      }
                      if (cResult[33] !== tmp36) {
                        function ee() {
                          user();
                        }
                        cResult[33] = tmp36;
                        class W {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                            tmp = closure_1(closure_2[21])(obj);
                            return;
                          }
                        }
                        cResult[34] = ee;
                        let tmp40 = ee;
                      } else {
                        tmp40 = cResult[34];
                      }
                      if (cResult[35] !== tmp30) {
                        let obj2 = { height: tmp30 };
                        class W {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                            tmp = closure_1(closure_2[21])(obj);
                            return;
                          }
                        }
                        cResult[36] = obj2;
                        let tmp41 = obj2;
                      } else {
                        tmp41 = cResult[36];
                      }
                      if (cResult[37] === tmp4.voiceMemberItemRow) {
                        if (cResult[38] === tmp41) {
                          let tmp42 = cResult[39];
                        }
                        if (cResult[40] === tmp4.activityDetails) {
                          if (cResult[41] === tmp4.innerRow) {
                            let tmp43 = cResult[42];
                          }
                          const tmp44 = tmp33 === tmp6(tmp2[20]) ? tmp4.appIconPlaceholder : tmp4.appIcon;
                          if (cResult[43] === tmp33) {
                            if (cResult[44] === tmp44) {
                              let tmp45 = cResult[45];
                            }
                            if (cResult[46] === name) {
                              if (cResult[47] === tmp4.applicationName) {
                                let tmp48 = cResult[48];
                              }
                              if (cResult[49] === tmp4.centerGroup) {
                                if (cResult[50] === tmp48) {
                                  let tmp52 = cResult[51];
                                }
                                const tmp55 = onItemPress.isActionSheet
                                  ? tmp4.overflowBackgroundColorActionSheet
                                  : tmp4.overflowBackgroundColor;
                                if (cResult[52] === tmp4.overflow) {
                                  if (cResult[53] === tmp55) {
                                    let tmp56 = cResult[54];
                                  }
                                  if (cResult[55] !== tmp20) {
                                    function se(user, arg1) {
                                      const obj = { user, guildId, size: XSMALL, cutout: null };
                                      let tmp5;
                                      if (!arg1) {
                                        const obj2 = {
                                          radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                                          direction: native.CutoutDirection.RIGHT,
                                          inset: -6,
                                        };
                                        tmp5 = obj2;
                                      }
                                      obj.cutout = tmp5;
                                      return v65535(native.CutoutableAvatarImage, obj);
                                    }
                                    cResult[55] = tmp20;
                                    class W {
                                      constructor() {
                                        obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                                        tmp = closure_1(closure_2[21])(obj);
                                        return;
                                      }
                                    }
                                    cResult[56] = se;
                                    let tmp58 = se;
                                  } else {
                                    tmp58 = cResult[56];
                                  }
                                  if (cResult[57] === tmp56) {
                                    if (cResult[58] === tmp58) {
                                      if (cResult[59] === tmp7) {
                                        let tmp59 = cResult[60];
                                      }
                                      if (cResult[61] === tmp43) {
                                        if (cResult[62] === tmp45) {
                                          if (cResult[63] === tmp52) {
                                            if (cResult[64] === tmp59) {
                                              let tmp61 = cResult[65];
                                            }
                                            if (cResult[66] !== size.height) {
                                              const obj3 = { height: size.height, justifyContent: "center" };
                                              class W {
                                                constructor() {
                                                  obj = {
                                                    embeddedActivityJoinability: closure_6,
                                                    handleCanJoin: closure_7,
                                                  };
                                                  tmp = closure_1(closure_2[21])(obj);
                                                  return;
                                                }
                                              }
                                              cResult[67] = obj3;
                                              let tmp64 = obj3;
                                            } else {
                                              tmp64 = cResult[67];
                                            }
                                            if (cResult[68] === tmp4.innerRow) {
                                              if (cResult[69] === tmp64) {
                                                let tmp65 = cResult[70];
                                              }
                                              if (cResult[71] === size.height) {
                                                if (cResult[72] === size.width) {
                                                  let tmp67 = cResult[73];
                                                }
                                                if (cResult[74] === application) {
                                                  if (cResult[75] === tmp67) {
                                                    let tmp68 = cResult[76];
                                                  }
                                                  if (cResult[77] === embeddedActivityJoinability) {
                                                    if (cResult[78] === tmp36) {
                                                      if (cResult[79] === tmp4.joinButton) {
                                                        if (cResult[80] === tmp4.joinButtonPill) {
                                                          let tmp72 = cResult[81];
                                                        }
                                                        if (cResult[82] === tmp4.joinButtonContainer) {
                                                          if (cResult[83] === tmp72) {
                                                            let tmp74 = cResult[84];
                                                          }
                                                          if (cResult[85] === tmp65) {
                                                            if (cResult[86] === tmp68) {
                                                              if (cResult[87] === tmp74) {
                                                                let tmp77 = cResult[88];
                                                              }
                                                              if (cResult[89] === tmp42) {
                                                                if (cResult[90] === tmp61) {
                                                                  if (cResult[91] === tmp77) {
                                                                    let tmp80 = cResult[92];
                                                                  }
                                                                  if (cResult[93] === tmp39) {
                                                                    if (cResult[94] === tmp40) {
                                                                      if (cResult[95] === tmp80) {
                                                                        let tmp83 = cResult[96];
                                                                      }
                                                                      return tmp83;
                                                                    }
                                                                  }
                                                                  class W {
                                                                    constructor() {
                                                                      obj = {
                                                                        embeddedActivityJoinability: closure_6,
                                                                        handleCanJoin: closure_7,
                                                                      };
                                                                      tmp = closure_1(closure_2[21])(obj);
                                                                      return;
                                                                    }
                                                                  }
                                                                  tmp85[1] = tmp39;
                                                                  tmp85[2] = closure_13;
                                                                  tmp85[3] = tmp40;
                                                                  tmp85[4] = tmp80;
                                                                  const tmp87 = closure_10(
                                                                    channelId(tmp2[26]).PressableOpacity,
                                                                    tmp85,
                                                                  );
                                                                  cResult[93] = tmp39;
                                                                  cResult[94] = tmp40;
                                                                  cResult[95] = tmp80;
                                                                  cResult[96] = tmp87;
                                                                  tmp83 = tmp87;
                                                                }
                                                              }
                                                              class W {
                                                                constructor() {
                                                                  obj = {
                                                                    embeddedActivityJoinability: closure_6,
                                                                    handleCanJoin: closure_7,
                                                                  };
                                                                  tmp = closure_1(closure_2[21])(obj);
                                                                  return;
                                                                }
                                                              }
                                                              const obj4 = { style: tmp42, children: null };
                                                              const items3 = [tmp61, tmp77];
                                                              obj4.children = items3;
                                                              const tmp82 = closure_11(guildId, obj4);
                                                              cResult[89] = tmp42;
                                                              cResult[90] = tmp61;
                                                              cResult[91] = tmp77;
                                                              cResult[92] = tmp82;
                                                              tmp80 = tmp82;
                                                            }
                                                          }
                                                          class W {
                                                            constructor() {
                                                              obj = {
                                                                embeddedActivityJoinability: closure_6,
                                                                handleCanJoin: closure_7,
                                                              };
                                                              tmp = closure_1(closure_2[21])(obj);
                                                              return;
                                                            }
                                                          }
                                                          const obj5 = { style: tmp65, children: null };
                                                          const items4 = [tmp68, tmp74];
                                                          obj5.children = items4;
                                                          const tmp79 = closure_11(guildId, obj5);
                                                          cResult[85] = tmp65;
                                                          cResult[86] = tmp68;
                                                          cResult[87] = tmp74;
                                                          cResult[88] = tmp79;
                                                          tmp77 = tmp79;
                                                        }
                                                        class W {
                                                          constructor() {
                                                            obj = {
                                                              embeddedActivityJoinability: closure_6,
                                                              handleCanJoin: closure_7,
                                                            };
                                                            tmp = closure_1(closure_2[21])(obj);
                                                            return;
                                                          }
                                                        }
                                                        const obj6 = {
                                                          style: tmp4.joinButtonContainer,
                                                          children: tmp72,
                                                        };
                                                        const tmp76 = closure_10(guildId, obj6);
                                                        cResult[82] = tmp4.joinButtonContainer;
                                                        cResult[83] = tmp72;
                                                        cResult[84] = tmp76;
                                                        tmp74 = tmp76;
                                                      }
                                                    }
                                                  }
                                                  class W {
                                                    constructor() {
                                                      obj = {
                                                        embeddedActivityJoinability: closure_6,
                                                        handleCanJoin: closure_7,
                                                      };
                                                      tmp = closure_1(closure_2[21])(obj);
                                                      return;
                                                    }
                                                  }
                                                  cResult[77] = embeddedActivityJoinability;
                                                  cResult[78] = tmp36;
                                                  cResult[79] = tmp4.joinButton;
                                                  cResult[80] = tmp4.joinButtonPill;
                                                  cResult[81] = null;
                                                  tmp72 = tmp73;
                                                }
                                                class W {
                                                  constructor() {
                                                    obj = {
                                                      embeddedActivityJoinability: closure_6,
                                                      handleCanJoin: closure_7,
                                                    };
                                                    tmp = closure_1(closure_2[21])(obj);
                                                    return;
                                                  }
                                                }
                                                tmp70[0] = application;
                                                tmp70[1] = tmp67;
                                                const tmp71 = closure_10(tmp6(tmp2[24]), tmp70);
                                                cResult[74] = application;
                                                cResult[75] = tmp67;
                                                cResult[76] = tmp71;
                                                tmp68 = tmp71;
                                              }
                                              const size2 = { position: "absolute", width: null, height: null };
                                              class W {
                                                constructor() {
                                                  obj = {
                                                    embeddedActivityJoinability: closure_6,
                                                    handleCanJoin: closure_7,
                                                  };
                                                  tmp = closure_1(closure_2[21])(obj);
                                                  return;
                                                }
                                              }
                                              size2.height = size.height;
                                              cResult[71] = size.height;
                                              cResult[72] = size.width;
                                              cResult[73] = size2;
                                              tmp67 = size2;
                                            }
                                            class W {
                                              constructor() {
                                                obj = {
                                                  embeddedActivityJoinability: closure_6,
                                                  handleCanJoin: closure_7,
                                                };
                                                tmp = closure_1(closure_2[21])(obj);
                                                return;
                                              }
                                            }
                                            tmp66[0] = tmp4.innerRow;
                                            tmp66[1] = tmp64;
                                            cResult[68] = tmp4.innerRow;
                                            cResult[69] = tmp64;
                                            cResult[70] = tmp66;
                                            tmp65 = tmp66;
                                          }
                                        }
                                      }
                                      class W {
                                        constructor() {
                                          obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                                          tmp = closure_1(closure_2[21])(obj);
                                          return;
                                        }
                                      }
                                      const obj7 = { style: tmp43, children: null };
                                      const items5 = [tmp45, tmp52, tmp59];
                                      obj7.children = items5;
                                      const tmp63 = closure_11(guildId, obj7);
                                      cResult[61] = tmp43;
                                      cResult[62] = tmp45;
                                      cResult[63] = tmp52;
                                      cResult[64] = tmp59;
                                      cResult[65] = tmp63;
                                      tmp61 = tmp63;
                                    }
                                  }
                                  class W {
                                    constructor() {
                                      obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                                      tmp = closure_1(closure_2[21])(obj);
                                      return;
                                    }
                                  }
                                  const obj8 = {
                                    offsetAmount: -6,
                                    overflowStyle: tmp56,
                                    overflowComponent: channelId(tmp2[9]).OverflowText,
                                    items: tmp7,
                                    max: 5,
                                    renderItem: tmp58,
                                  };
                                  const tmp60 = closure_10(channelId(tmp2[9]).SummarizedIconRow, obj8);
                                  cResult[57] = tmp56;
                                  cResult[58] = tmp58;
                                  cResult[59] = tmp7;
                                  cResult[60] = tmp60;
                                  tmp59 = tmp60;
                                }
                                class W {
                                  constructor() {
                                    obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                                    tmp = closure_1(closure_2[21])(obj);
                                    return;
                                  }
                                }
                                tmp57[0] = tmp4.overflow;
                                tmp57[1] = tmp55;
                                cResult[52] = tmp4.overflow;
                                cResult[53] = tmp55;
                                cResult[54] = tmp57;
                                tmp56 = tmp57;
                              }
                              class W {
                                constructor() {
                                  obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                                  tmp = closure_1(closure_2[21])(obj);
                                  return;
                                }
                              }
                              const obj9 = { style: tmp4.centerGroup, children: tmp48 };
                              const tmp54 = closure_10(guildId, obj9);
                              cResult[49] = tmp4.centerGroup;
                              cResult[50] = tmp48;
                              cResult[51] = tmp54;
                              tmp52 = tmp54;
                            }
                            class W {
                              constructor() {
                                obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                                tmp = closure_1(closure_2[21])(obj);
                                return;
                              }
                            }
                            tmp50[0] = tmp4.applicationName;
                            tmp50[3] = name;
                            const tmp51 = closure_10(channelId(tmp2[23]).Text, tmp50);
                            cResult[46] = name;
                            cResult[47] = tmp4.applicationName;
                            cResult[48] = tmp51;
                            tmp48 = tmp51;
                          }
                          class W {
                            constructor() {
                              obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                              tmp = closure_1(closure_2[21])(obj);
                              return;
                            }
                          }
                          const obj10 = { style: tmp44, source: tmp33 };
                          const tmp47 = closure_10(stateFromStores1, obj10);
                          cResult[43] = tmp33;
                          cResult[44] = tmp44;
                          cResult[45] = tmp47;
                          tmp45 = tmp47;
                        }
                        const items6 = [,];
                        class W {
                          constructor() {
                            obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                            tmp = closure_1(closure_2[21])(obj);
                            return;
                          }
                        }
                        items6[1] = tmp4.activityDetails;
                        cResult[40] = tmp4.activityDetails;
                        cResult[41] = tmp4.innerRow;
                        cResult[42] = items6;
                        tmp43 = items6;
                      }
                      const items7 = [tmp4.voiceMemberItemRow, tmp41];
                      cResult[37] = tmp4.voiceMemberItemRow;
                      cResult[38] = tmp41;
                      cResult[39] = items7;
                      tmp42 = items7;
                    }
                    class W {
                      constructor() {
                        obj = { embeddedActivityJoinability: closure_6, handleCanJoin: closure_7 };
                        tmp = closure_1(closure_2[21])(obj);
                        return;
                      }
                    }
                    cResult[26] = embeddedActivityJoinability;
                    cResult[27] = tmp35;
                    cResult[28] = W;
                    tmp36 = W;
                  }
                }
              }
              class X {
                constructor() {
                  tmp3 = closure_2;
                  tmp = onItemPress;
                  tmp2 = closure_3;
                  tmp4 = closure_4;
                  tmpResult = tmp(tmp2, tmp3, tmp4);
                  return;
                }
              }
              cResult[21] = stateFromStores1;
              cResult[22] = application;
              cResult[23] = stateFromStores;
              cResult[24] = onItemPress;
              cResult[25] = X;
              tmp35 = X;
            }
          }
          return null;
        }
        const obj11 = { userId: tmp22, channelId, application };
        cResult[14] = application;
        cResult[15] = channelId;
        cResult[16] = obj11;
        tmp26 = obj11;
        const tmpResult4 = channelId(tmp2[16]);
      }
      let id2;
      if (application != null) {
        id2 = application.id;
      }
      class N {
        constructor() {
          found = null;
          if (null != closure_3) {
            tmp3 = closure_6;
            embeddedActivitiesForChannel = closure_6.getEmbeddedActivitiesForChannel(tmp.id);
            found = embeddedActivitiesForChannel.find((applicationId) => {
              id = undefined;
              if (id != null) {
                id = id.id;
              }
              return applicationId.applicationId === id;
            });
          }
          return found;
        }
      }
      cResult[8] = id2;
      cResult[9] = stateFromStores;
      cResult[10] = N;
      tmp17 = N;
      const tmpResult = channelId(application[16]);
    }
  : (onItemPress) => {
      ({ embeddedActivity, channelId } = onItemPress);
      onItemPress = onItemPress.onItemPress;
      let application;
      _slicedToArray = undefined;
      embeddedActivityJoinability = undefined;
      handleCanJoin = function handleCanJoin() {
        onItemPress(closure_3, first, stateFromStores);
      };
      const tmp = closure_15();
      const items = [embeddedActivity.applicationId];
      application = _slicedToArray(onItemPress(application[14])(items), 1)[0];
      const mapped = Array.from(embeddedActivity.userIds).map((item) => user.getUser(item));
      let found = mapped.filter(channelId(application[15]).isNotNullish);
      const arr = Array.from(embeddedActivity.userIds);
      const items1 = [handleCanJoin];
      _slicedToArray = channelId(application[16]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
      let obj2 = channelId(application[16]);
      const items2 = [embeddedActivityJoinability];
      const stateFromStores = channelId(application[16]).useStateFromStores(items2, () => {
        let found = null;
        if (null != closure_3) {
          const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp.id);
          found = embeddedActivitiesForChannel.find((applicationId) => {
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            return applicationId.applicationId === id;
          });
        }
        return found;
      });
      const obj3 = channelId(application[16]);
      const guildId = channelId(application[17]).getEmbeddedActivityLocationGuildId(embeddedActivity.location);
      const obj4 = channelId(application[17]);
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      embeddedActivityJoinability = channelId(application[18]).useEmbeddedActivityJoinability({
        userId: id,
        channelId,
        application,
      });
      const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[19])().width);
      if (null != application) {
        if (null != stateFromStores) {
          let iconSource = application.getIconSource(32);
          if (iconSource == null) {
            iconSource = tmp2(tmp3[20]);
          }
          const name = application.name;
          const diff = bound - 32;
          const sum = 40 + tmp11 / c14 + 12 + 16;
          let obj = {
            accessibilityRole: "button",
            accessibilityLabel: null,
            androidRippleConfig: null,
            onPress: null,
            children: null,
          };
          const intl = channelId(tmp3[22]).intl;
          const obj6 = { applicationName: name };
          obj.accessibilityLabel = intl.formatToPlainString(channelId(tmp3[22]).t.Yw5Hr2, obj6);
          obj.androidRippleConfig = androidRippleConfig;
          obj.onPress = function onPress() {
            handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
          };
          const obj7 = { style: null, children: null };
          const items3 = [tmp.voiceMemberItemRow];
          const obj8 = { height: sum };
          items3[1] = obj8;
          obj7.style = items3;
          const obj9 = { style: null, children: null };
          const items4 = [,];
          ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
          obj9.style = items4;
          const obj10 = {
            style: iconSource === tmp2(tmp3[20]) ? tmp.appIconPlaceholder : tmp.appIcon,
            source: iconSource,
          };
          const items5 = [closure_10(stateFromStores, obj10), ,];
          const obj11 = { style: tmp.centerGroup, children: null };
          const obj12 = {
            style: tmp.applicationName,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: name,
          };
          obj11.children = closure_10(channelId(tmp3[23]).Text, obj12);
          items5[1] = closure_10(guildId, obj11);
          const items6 = [tmp.overflow];
          const result = diff / c14;
          const obj13 = {
            offsetAmount: -6,
            overflowStyle: null,
            overflowComponent: null,
            items: null,
            max: 5,
            renderItem: null,
          };
          items6[1] = onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
          obj13.overflowStyle = items6;
          obj13.overflowComponent = channelId(tmp3[9]).OverflowText;
          obj13.items = found;
          obj13.renderItem = function renderItem(user, arg1) {
            const obj = { user, guildId, size: XSMALL, cutout: null };
            let tmp5;
            if (!arg1) {
              const obj2 = {
                radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                direction: native.CutoutDirection.RIGHT,
                inset: -6,
              };
              tmp5 = obj2;
            }
            obj.cutout = tmp5;
            return v65535(native.CutoutableAvatarImage, obj);
          };
          items5[2] = closure_10(channelId(tmp3[9]).SummarizedIconRow, obj13);
          obj9.children = items5;
          const items7 = [closure_11(guildId, obj9)];
          const obj14 = { style: null, children: null };
          const items8 = [tmp.innerRow];
          const obj15 = { height: result, justifyContent: "center" };
          items8[1] = obj15;
          obj14.style = items8;
          const obj16 = { application, dimensionsStyle: null, borderRadius: 8, resizeMode: "contain" };
          const size = { position: "absolute", width: diff, height: result };
          obj16.dimensionsStyle = size;
          const items9 = [closure_10(tmp2(tmp3[24]), obj16)];
          const obj17 = { style: tmp.joinButtonContainer, children: null };
          let tmp16Result = null;
          if (embeddedActivityJoinability === channelId(tmp3[18]).EmbeddedActivityJoinability.CAN_JOIN) {
            const obj18 = {
              onPress() {
                handlePressJoinActivityDefault({ embeddedActivityJoinability, handleCanJoin });
              },
              style: null,
              pillStyle: null,
              text: null,
              variant: "secondary",
              size: "sm",
              shrink: true,
            };
            ({ joinButton: obj20.style, joinButtonPill: obj20.pillStyle } = tmp);
            const intl2 = channelId(tmp3[22]).intl;
            obj18.text = intl2.string(channelId(tmp3[22]).t["4i2vj+"]);
            tmp16Result = closure_10(channelId(tmp3[25]).BaseTextButton, obj18);
          }
          obj17.children = tmp16Result;
          items9[1] = closure_10(guildId, obj17);
          obj14.children = items9;
          items7[1] = closure_11(guildId, obj14);
          obj7.children = items7;
          obj.children = closure_11(guildId, obj7);
          return closure_10(channelId(tmp3[26]).PressableOpacity, obj);
        }
      }
      return null;
    };
export { calculateActivityRowHeight };
