// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import FormConstants from "../../../../design/void/Form/native/FormConstants.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import handlePressJoinActivityDefault from "../../../activities/handlePressJoinActivity.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore_mod from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let applicationId, embeddedActivityJoinability, onItemPress, tmp3;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
let UserStore = UserStore_mod;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const XSMALL = native.AvatarSizes.XSMALL;
const androidRippleConfig = getThemedRippleConfig({ foreground: true });
let size = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c14 = 1.7777777777777777;
let createStyles = createStyles_mod;
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
  appIconPlaceholder: obj2,
  centerGroup: { flex: 1, paddingRight: 4 },
  applicationName: { lineHeight: 20 },
  joinButton: { alignSelf: "center" },
  joinButtonPill: { borderRadius: 100, paddingHorizontal: 24 },
  joinButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    paddingHorizontal: 16,
  },
  overflow: obj3,
  overflowBackgroundColor: obj4,
  overflowBackgroundColorActionSheet: obj5,
};
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
const merged = Object.assign(size);
obj3 = { height: native.AVATAR_SIZE_MAP[XSMALL] };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_15 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onItemPress) => {
      let application;
      let channelId;
      let embeddedActivity;
      let items3;
      let items4;
      let items5;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp5;
      let tmp7;
      let user;
      let obj = channelId(application[13]);
      const cResult = obj.c(97);
      ({ embeddedActivity, channelId } = onItemPress);
      onItemPress = onItemPress.onItemPress;
      const isActionSheet = onItemPress.isActionSheet;
      const tmp4 = closure_15();
      if (cResult[0] !== embeddedActivity.applicationId) {
        const items = [embeddedActivity.applicationId];
        cResult[0] = embeddedActivity.applicationId;
        cResult[1] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      application = stateFromStores(onItemPress(tmp2[14])(tmp5), 1)[0];
      if (cResult[2] !== embeddedActivity.userIds) {
        const _Array = Array;
        const arr = Array.from(embeddedActivity.userIds);
        const mapped = arr.map((item) => user.getUser(item));
        let found = mapped.filter(channelId(tmp2[15]).isNotNullish);
        cResult[2] = embeddedActivity.userIds;
        cResult[3] = found;
        tmp7 = found;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [handleCanJoin];
        cResult[4] = items1;
        tmp10 = items1;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== channelId) {
        const fn = function x() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[5] = channelId;
        cResult[6] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[6];
      }
      const tmpResult = channelId(tmp2[16]);
      stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [embeddedActivityJoinability];
        cResult[7] = items2;
        tmp14 = items2;
      } else {
        tmp14 = cResult[7];
      }
      let id;
      const tmp16 = cResult[8];
      if (application != null) {
        id = application.id;
      }
      if (tmp16 === id) {
        let tmp18;
        let tmp21;
        let tmp23;
        if (cResult[9] === stateFromStores) {
          tmp18 = cResult[10];
        }
        const tmpResult4 = channelId(application[16]);
        const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, tmp18);
        if (cResult[11] !== embeddedActivity.location) {
          const tmpResult5 = channelId(application[17]);
          const embeddedActivityLocationGuildId = tmpResult5.getEmbeddedActivityLocationGuildId(
            embeddedActivity.location,
          );
          cResult[11] = embeddedActivity.location;
          cResult[12] = embeddedActivityLocationGuildId;
          tmp21 = embeddedActivityLocationGuildId;
        } else {
          tmp21 = cResult[12];
        }
        const guildId = tmp21;
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const currentUser = UserStore.getCurrentUser();
          let id1;
          if (currentUser != null) {
            id1 = currentUser.id;
          }
          cResult[13] = id1;
          tmp23 = id1;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] === application) {
          let tmp27;
          let tmp31;
          if (cResult[15] === channelId) {
            tmp27 = cResult[16];
          }
          const tmpResult6 = channelId(application[18]);
          embeddedActivityJoinability = tmpResult6.useEmbeddedActivityJoinability(tmp27);
          const _Math = Math;
          const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp6(tmp2[19])().width);
          if (cResult[17] !== bound) {
            const sum = 40 + (bound - 32) / c14 + 12 + 16;
            cResult[17] = bound;
            cResult[18] = sum;
            tmp31 = sum;
          } else {
            tmp31 = cResult[18];
          }
          if (null != application) {
            if (null != stateFromStores1) {
              let tmp34;
              if (cResult[19] !== application) {
                let iconSource = application.getIconSource(32);
                if (iconSource == null) {
                  iconSource = tmp6(tmp2[20]);
                }
                class X {
                  constructor() {
                    onItemPress(stateFromStores, first, stateFromStores1);
                  }
                }
                cResult[19] = application;
                cResult[20] = iconSource;
                tmp34 = iconSource;
              } else {
                tmp34 = cResult[20];
              }
              const name = application.name;
              if (cResult[21] === stateFromStores1) {
                if (cResult[22] === application) {
                  if (cResult[23] === stateFromStores) {
                    let tmp36;
                    if (cResult[24] === onItemPress) {
                      tmp36 = cResult[25];
                    }
                    handleCanJoin = tmp36;
                    if (cResult[26] === embeddedActivityJoinability) {
                      let tmp37;
                      let tmp41;
                      let tmp42;
                      if (cResult[27] === tmp36) {
                        tmp37 = cResult[28];
                      }
                      UserStore = tmp37;
                      if (cResult[29] !== bound) {
                        const diff = bound - 32;
                        const size1 = { width: null, height: diff / c14 };
                        class W {
                          constructor() {
                            const obj = { embeddedActivityJoinability, handleCanJoin };
                            handlePressJoinActivityDefault(obj);
                          }
                        }
                        cResult[29] = bound;
                        cResult[30] = size1;
                        size = size1;
                      } else {
                        size = cResult[30];
                      }
                      class W {
                        constructor() {
                          const obj = { embeddedActivityJoinability, handleCanJoin };
                          handlePressJoinActivityDefault(obj);
                        }
                      }
                      if (cResult[33] !== tmp37) {
                        function ee() {
                          user();
                        }
                        cResult[33] = tmp37;
                        class W {
                          constructor() {
                            const obj = { embeddedActivityJoinability, handleCanJoin };
                            handlePressJoinActivityDefault(obj);
                          }
                        }
                        cResult[34] = ee;
                        tmp41 = ee;
                      } else {
                        tmp41 = cResult[34];
                      }
                      if (cResult[35] !== tmp31) {
                        let obj2 = { height: tmp31 };
                        class W {
                          constructor() {
                            const obj = { embeddedActivityJoinability, handleCanJoin };
                            handlePressJoinActivityDefault(obj);
                          }
                        }
                        cResult[36] = obj2;
                        tmp42 = obj2;
                      } else {
                        tmp42 = cResult[36];
                      }
                      if (cResult[37] === tmp4.voiceMemberItemRow) {
                        let tmp43;
                        if (cResult[38] === tmp42) {
                          tmp43 = cResult[39];
                        }
                        if (cResult[40] === tmp4.activityDetails) {
                          let tmp44;
                          if (cResult[41] === tmp4.innerRow) {
                            tmp44 = cResult[42];
                          }
                          const tmp45 = tmp34 === onItemPress(application[20]) ? tmp4.appIconPlaceholder : tmp4.appIcon;
                          if (cResult[43] === tmp34) {
                            let tmp46;
                            if (cResult[44] === tmp45) {
                              tmp46 = cResult[45];
                            }
                            if (cResult[46] === name) {
                              let tmp49;
                              if (cResult[47] === tmp4.applicationName) {
                                tmp49 = cResult[48];
                              }
                              if (cResult[49] === tmp4.centerGroup) {
                                let tmp53;
                                if (cResult[50] === tmp49) {
                                  tmp53 = cResult[51];
                                }
                                const tmp56 = isActionSheet
                                  ? tmp4.overflowBackgroundColorActionSheet
                                  : tmp4.overflowBackgroundColor;
                                if (cResult[52] === tmp4.overflow) {
                                  let tmp57;
                                  let tmp59;
                                  if (cResult[53] === tmp56) {
                                    tmp57 = cResult[54];
                                  }
                                  if (cResult[55] !== tmp21) {
                                    function se(user, arg1) {
                                      let tmp5;
                                      const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
                                      tmp5 = undefined;
                                      const CutoutableAvatarImage = native.CutoutableAvatarImage;
                                      if (!arg1) {
                                        tmp5 = {
                                          radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                                          direction: native.CutoutDirection.RIGHT,
                                          inset: -6,
                                        };
                                        const obj2 = {
                                          radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                                          direction: native.CutoutDirection.RIGHT,
                                          inset: -6,
                                        };
                                      }
                                      return authStore(CutoutableAvatarImage, obj);
                                    }
                                    cResult[55] = tmp21;
                                    class W {
                                      constructor() {
                                        const obj = { embeddedActivityJoinability, handleCanJoin };
                                        handlePressJoinActivityDefault(obj);
                                      }
                                    }
                                    cResult[56] = se;
                                    tmp59 = se;
                                  } else {
                                    tmp59 = cResult[56];
                                  }
                                  if (cResult[57] === tmp57) {
                                    if (cResult[58] === tmp59) {
                                      let tmp60;
                                      if (cResult[59] === tmp7) {
                                        tmp60 = cResult[60];
                                      }
                                      if (cResult[61] === tmp44) {
                                        if (cResult[62] === tmp46) {
                                          if (cResult[63] === tmp53) {
                                            let tmp62;
                                            let tmp65;
                                            if (cResult[64] === tmp60) {
                                              tmp62 = cResult[65];
                                            }
                                            if (cResult[66] !== size.height) {
                                              const obj3 = { height: size.height, justifyContent: "center" };
                                              class W {
                                                constructor() {
                                                  const obj = { embeddedActivityJoinability, handleCanJoin };
                                                  handlePressJoinActivityDefault(obj);
                                                }
                                              }
                                              cResult[67] = obj3;
                                              tmp65 = obj3;
                                            } else {
                                              tmp65 = cResult[67];
                                            }
                                            if (cResult[68] === tmp4.innerRow) {
                                              let tmp66;
                                              if (cResult[69] === tmp65) {
                                                tmp66 = cResult[70];
                                              }
                                              if (cResult[71] === size.height) {
                                                let tmp68;
                                                if (cResult[72] === size.width) {
                                                  tmp68 = cResult[73];
                                                }
                                                if (cResult[74] === application) {
                                                  let tmp69;
                                                  if (cResult[75] === tmp68) {
                                                    tmp69 = cResult[76];
                                                  }
                                                  if (cResult[77] === embeddedActivityJoinability) {
                                                    if (cResult[78] === tmp37) {
                                                      if (cResult[79] === tmp4.joinButton) {
                                                        let tmp73;
                                                        if (cResult[80] === tmp4.joinButtonPill) {
                                                          tmp73 = cResult[81];
                                                        }
                                                        if (cResult[82] === tmp4.joinButtonContainer) {
                                                          let tmp75;
                                                          if (cResult[83] === tmp73) {
                                                            tmp75 = cResult[84];
                                                          }
                                                          if (cResult[85] === tmp66) {
                                                            if (cResult[86] === tmp69) {
                                                              let tmp78;
                                                              if (cResult[87] === tmp75) {
                                                                tmp78 = cResult[88];
                                                              }
                                                              if (cResult[89] === tmp43) {
                                                                if (cResult[90] === tmp62) {
                                                                  let tmp81;
                                                                  if (cResult[91] === tmp78) {
                                                                    tmp81 = cResult[92];
                                                                  }
                                                                  if (cResult[93] === tmp40) {
                                                                    if (cResult[94] === tmp41) {
                                                                      let tmp84;
                                                                      if (cResult[95] === tmp81) {
                                                                        tmp84 = cResult[96];
                                                                      }
                                                                      return tmp84;
                                                                    }
                                                                  }
                                                                  class W {
                                                                    constructor() {
                                                                      const obj = {
                                                                        embeddedActivityJoinability,
                                                                        handleCanJoin,
                                                                      };
                                                                      handlePressJoinActivityDefault(obj);
                                                                    }
                                                                  }
                                                                  tmp86[1] = tmp40;
                                                                  tmp86[2] = closure_13;
                                                                  tmp86[3] = tmp41;
                                                                  tmp86[4] = tmp81;
                                                                  const tmp88 = closure_10(
                                                                    channelId(application[26]).PressableOpacity,
                                                                    tmp86,
                                                                  );
                                                                  cResult[93] = tmp40;
                                                                  cResult[94] = tmp41;
                                                                  cResult[95] = tmp81;
                                                                  cResult[96] = tmp88;
                                                                  tmp84 = tmp88;
                                                                }
                                                              }
                                                              class W {
                                                                constructor() {
                                                                  const obj = {
                                                                    embeddedActivityJoinability,
                                                                    handleCanJoin,
                                                                  };
                                                                  handlePressJoinActivityDefault(obj);
                                                                }
                                                              }
                                                              const obj4 = { style: tmp43, children: items3 };
                                                              items3 = [tmp62, tmp78];
                                                              const tmp83 = closure_11(guildId, obj4);
                                                              cResult[89] = tmp43;
                                                              cResult[90] = tmp62;
                                                              cResult[91] = tmp78;
                                                              cResult[92] = tmp83;
                                                              tmp81 = tmp83;
                                                            }
                                                          }
                                                          class W {
                                                            constructor() {
                                                              const obj = {
                                                                embeddedActivityJoinability,
                                                                handleCanJoin,
                                                              };
                                                              handlePressJoinActivityDefault(obj);
                                                            }
                                                          }
                                                          const obj5 = { style: tmp66, children: items4 };
                                                          items4 = [tmp69, tmp75];
                                                          const tmp80 = closure_11(guildId, obj5);
                                                          cResult[85] = tmp66;
                                                          cResult[86] = tmp69;
                                                          cResult[87] = tmp75;
                                                          cResult[88] = tmp80;
                                                          tmp78 = tmp80;
                                                        }
                                                        class W {
                                                          constructor() {
                                                            const obj = { embeddedActivityJoinability, handleCanJoin };
                                                            handlePressJoinActivityDefault(obj);
                                                          }
                                                        }
                                                        const obj6 = {
                                                          style: tmp4.joinButtonContainer,
                                                          children: tmp73,
                                                        };
                                                        const tmp77 = closure_10(guildId, obj6);
                                                        cResult[82] = tmp4.joinButtonContainer;
                                                        cResult[83] = tmp73;
                                                        cResult[84] = tmp77;
                                                        tmp75 = tmp77;
                                                      }
                                                    }
                                                  }
                                                  class W {
                                                    constructor() {
                                                      const obj = { embeddedActivityJoinability, handleCanJoin };
                                                      handlePressJoinActivityDefault(obj);
                                                    }
                                                  }
                                                  cResult[77] = embeddedActivityJoinability;
                                                  cResult[78] = tmp37;
                                                  cResult[79] = tmp4.joinButton;
                                                  cResult[80] = tmp4.joinButtonPill;
                                                  cResult[81] = null;
                                                  tmp73 = tmp74;
                                                }
                                                class W {
                                                  constructor() {
                                                    const obj = { embeddedActivityJoinability, handleCanJoin };
                                                    handlePressJoinActivityDefault(obj);
                                                  }
                                                }
                                                tmp71[0] = application;
                                                tmp71[1] = tmp68;
                                                const tmp72 = closure_10(onItemPress(application[24]), tmp71);
                                                cResult[74] = application;
                                                cResult[75] = tmp68;
                                                cResult[76] = tmp72;
                                                tmp69 = tmp72;
                                              }
                                              const size2 = { position: "absolute", width: null, height: size.height };
                                              class W {
                                                constructor() {
                                                  const obj = { embeddedActivityJoinability, handleCanJoin };
                                                  handlePressJoinActivityDefault(obj);
                                                }
                                              }
                                              cResult[71] = size.height;
                                              cResult[72] = size.width;
                                              cResult[73] = size2;
                                              tmp68 = size2;
                                            }
                                            class W {
                                              constructor() {
                                                const obj = { embeddedActivityJoinability, handleCanJoin };
                                                handlePressJoinActivityDefault(obj);
                                              }
                                            }
                                            tmp67[0] = tmp4.innerRow;
                                            tmp67[1] = tmp65;
                                            cResult[68] = tmp4.innerRow;
                                            cResult[69] = tmp65;
                                            cResult[70] = tmp67;
                                            tmp66 = tmp67;
                                          }
                                        }
                                      }
                                      class W {
                                        constructor() {
                                          const obj = { embeddedActivityJoinability, handleCanJoin };
                                          handlePressJoinActivityDefault(obj);
                                        }
                                      }
                                      const obj7 = { style: tmp44, children: items5 };
                                      items5 = [tmp46, tmp53, tmp60];
                                      const tmp64 = closure_11(guildId, obj7);
                                      cResult[61] = tmp44;
                                      cResult[62] = tmp46;
                                      cResult[63] = tmp53;
                                      cResult[64] = tmp60;
                                      cResult[65] = tmp64;
                                      tmp62 = tmp64;
                                    }
                                  }
                                  class W {
                                    constructor() {
                                      const obj = { embeddedActivityJoinability, handleCanJoin };
                                      handlePressJoinActivityDefault(obj);
                                    }
                                  }
                                  const obj8 = {
                                    offsetAmount: -6,
                                    overflowStyle: tmp57,
                                    overflowComponent: channelId(application[9]).OverflowText,
                                    items: tmp7,
                                    max: 5,
                                    renderItem: tmp59,
                                  };
                                  const SummarizedIconRow = channelId(tmp2[9]).SummarizedIconRow;
                                  const tmp61 = closure_10(SummarizedIconRow, obj8);
                                  cResult[57] = tmp57;
                                  cResult[58] = tmp59;
                                  cResult[59] = tmp7;
                                  cResult[60] = tmp61;
                                  tmp60 = tmp61;
                                }
                                class W {
                                  constructor() {
                                    const obj = { embeddedActivityJoinability, handleCanJoin };
                                    handlePressJoinActivityDefault(obj);
                                  }
                                }
                                tmp58[0] = tmp4.overflow;
                                tmp58[1] = tmp56;
                                cResult[52] = tmp4.overflow;
                                cResult[53] = tmp56;
                                cResult[54] = tmp58;
                                tmp57 = tmp58;
                              }
                              class W {
                                constructor() {
                                  const obj = { embeddedActivityJoinability, handleCanJoin };
                                  handlePressJoinActivityDefault(obj);
                                }
                              }
                              const obj9 = { style: tmp4.centerGroup, children: tmp49 };
                              const tmp55 = closure_10(guildId, obj9);
                              cResult[49] = tmp4.centerGroup;
                              cResult[50] = tmp49;
                              cResult[51] = tmp55;
                              tmp53 = tmp55;
                            }
                            class W {
                              constructor() {
                                const obj = { embeddedActivityJoinability, handleCanJoin };
                                handlePressJoinActivityDefault(obj);
                              }
                            }
                            tmp51[0] = tmp4.applicationName;
                            tmp51[3] = name;
                            const tmp52 = closure_10(channelId(application[23]).Text, tmp51);
                            cResult[46] = name;
                            cResult[47] = tmp4.applicationName;
                            cResult[48] = tmp52;
                            tmp49 = tmp52;
                          }
                          class W {
                            constructor() {
                              const obj = { embeddedActivityJoinability, handleCanJoin };
                              handlePressJoinActivityDefault(obj);
                            }
                          }
                          const obj10 = { style: tmp45, source: tmp34 };
                          const tmp48 = closure_10(stateFromStores1, obj10);
                          cResult[43] = tmp34;
                          cResult[44] = tmp45;
                          cResult[45] = tmp48;
                          tmp46 = tmp48;
                        }
                        const items6 = [,];
                        class W {
                          constructor() {
                            const obj = { embeddedActivityJoinability, handleCanJoin };
                            handlePressJoinActivityDefault(obj);
                          }
                        }
                        items6[1] = tmp4.activityDetails;
                        cResult[40] = tmp4.activityDetails;
                        cResult[41] = tmp4.innerRow;
                        cResult[42] = items6;
                        tmp44 = items6;
                      }
                      const items7 = [tmp4.voiceMemberItemRow, tmp42];
                      cResult[37] = tmp4.voiceMemberItemRow;
                      cResult[38] = tmp42;
                      cResult[39] = items7;
                      tmp43 = items7;
                    }
                    class W {
                      constructor() {
                        const obj = { embeddedActivityJoinability, handleCanJoin };
                        handlePressJoinActivityDefault(obj);
                      }
                    }
                    cResult[26] = embeddedActivityJoinability;
                    cResult[27] = tmp36;
                    cResult[28] = W;
                    tmp37 = W;
                  }
                }
              }
              class X {
                constructor() {
                  onItemPress(stateFromStores, first, stateFromStores1);
                }
              }
              cResult[21] = stateFromStores1;
              cResult[22] = application;
              cResult[23] = stateFromStores;
              cResult[24] = onItemPress;
              cResult[25] = X;
              tmp36 = X;
            }
          }
          return null;
        }
        const obj11 = { userId: tmp23, channelId, application };
        cResult[14] = application;
        cResult[15] = channelId;
        cResult[16] = obj11;
        tmp27 = obj11;
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
              applicationId = applicationId.applicationId;
              if (id != null) {
                id = id.id;
              }
              return applicationId === id;
            });
          }
          return found;
        }
      }
      cResult[8] = id2;
      cResult[9] = stateFromStores;
      cResult[10] = N;
      tmp18 = N;
    }
  : (onItemPress) => {
      let channelId;
      let closure_3;
      let embeddedActivity;
      let intl;
      let intl2;
      let items3;
      let items4;
      let items5;
      let items7;
      let items8;
      let items9;
      let obj11;
      let obj5;
      let obj6;
      let tmp17Result;
      let user;
      ({ embeddedActivity, channelId } = onItemPress);
      onItemPress = onItemPress.onItemPress;
      let application;
      _slicedToArray = undefined;
      embeddedActivityJoinability = undefined;
      handleCanJoin = function handleCanJoin() {
        onItemPress(closure_3, first, stateFromStores);
      };
      const isActionSheet = onItemPress.isActionSheet;
      const tmp = closure_15();
      const items = [embeddedActivity.applicationId];
      application = _slicedToArray(onItemPress(application[14])(items), 1)[0];
      const arr = Array.from(embeddedActivity.userIds);
      const mapped = arr.map((item) => user.getUser(item));
      let found = mapped.filter(channelId(application[15]).isNotNullish);
      let obj2 = channelId(application[16]);
      const items1 = [handleCanJoin];
      _slicedToArray = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
      const items2 = [embeddedActivityJoinability];
      const obj3 = channelId(application[16]);
      const stateFromStores = obj3.useStateFromStores(items2, () => {
        let found = null;
        if (null != closure_3) {
          const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp.id);
          found = embeddedActivitiesForChannel.find((applicationId) => {
            id = undefined;
            applicationId = applicationId.applicationId;
            if (id != null) {
              id = id.id;
            }
            return applicationId === id;
          });
        }
        return found;
      });
      const obj4 = channelId(application[17]);
      const guildId = obj4.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
      const useEmbeddedActivityJoinability = channelId(application[18]).useEmbeddedActivityJoinability;
      channelId(application[18]);
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      embeddedActivityJoinability = useEmbeddedActivityJoinability({ userId: id, channelId, application });
      const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[19])().width);
      if (null != application) {
        if (null != stateFromStores) {
          let iconSource = application.getIconSource(32);
          if (iconSource == null) {
            iconSource = tmp2(tmp3[20]);
          }
          const name = application.name;
          const diff = bound - 32;
          const sum = 40 + tmp12 / c14 + 12 + 16;
          let obj = {
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(channelId(application[22]).t.Yw5Hr2, obj5),
            androidRippleConfig,
            onPress() {
              const obj = { embeddedActivityJoinability, handleCanJoin };
              handlePressJoinActivityDefault(obj);
            },
            children: closure_11(guildId, obj6),
          };
          const PressableOpacity = channelId(tmp3[26]).PressableOpacity;
          intl = channelId(tmp3[22]).intl;
          obj6 = { style: items3, children: items7 };
          items3 = [tmp.voiceMemberItemRow];
          obj5 = { applicationName: name };
          const obj7 = { height: sum };
          items3[1] = obj7;
          const obj8 = { style: items4, children: items5 };
          items4 = [,];
          ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
          const obj9 = {
            style: iconSource === onItemPress(application[20]) ? tmp.appIconPlaceholder : tmp.appIcon,
            source: iconSource,
          };
          items5 = [closure_10(stateFromStores, obj9), ,];
          const obj10 = { style: tmp.centerGroup, children: closure_10(channelId(application[23]).Text, obj11) };
          obj11 = {
            style: tmp.applicationName,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: name,
          };
          items5[1] = closure_10(guildId, obj10);
          const items6 = [tmp.overflow];
          const result = diff / c14;
          items6[1] = isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
          const obj12 = {
            offsetAmount: -6,
            overflowStyle: items6,
            overflowComponent: channelId(application[9]).OverflowText,
            items: found,
            max: 5,
            renderItem(user, arg1) {
              let tmp5;
              const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
              tmp5 = undefined;
              const CutoutableAvatarImage = native.CutoutableAvatarImage;
              if (!arg1) {
                tmp5 = {
                  radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                  direction: native.CutoutDirection.RIGHT,
                  inset: -6,
                };
                const obj2 = {
                  radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3,
                  direction: native.CutoutDirection.RIGHT,
                  inset: -6,
                };
              }
              return authStore(CutoutableAvatarImage, obj);
            },
          };
          const SummarizedIconRow = channelId(tmp3[9]).SummarizedIconRow;
          items5[2] = closure_10(SummarizedIconRow, obj12);
          items7 = [closure_11(guildId, obj8)];
          const obj13 = { style: items8, children: items9 };
          items8 = [tmp.innerRow];
          const obj14 = { height: result, justifyContent: "center" };
          items8[1] = obj14;
          const obj15 = { application, dimensionsStyle: size, borderRadius: 8, resizeMode: "contain" };
          size = { position: "absolute", width: diff, height: result };
          items9 = [closure_10(onItemPress(application[24]), obj15)];
          const obj16 = { style: tmp.joinButtonContainer, children: tmp17Result };
          tmp17Result = null;
          if (embeddedActivityJoinability === channelId(application[18]).EmbeddedActivityJoinability.CAN_JOIN) {
            ({ joinButton: obj19.style, joinButtonPill: obj19.pillStyle } = tmp);
            const obj17 = {
              onPress() {
                const obj = { embeddedActivityJoinability, handleCanJoin };
                handlePressJoinActivityDefault(obj);
              },
              style: null,
              pillStyle: null,
              text: intl2.string(channelId(application[22]).t["4i2vj+"]),
              variant: "secondary",
              size: "sm",
              shrink: true,
            };
            const BaseTextButton = channelId(tmp3[25]).BaseTextButton;
            intl2 = channelId(tmp3[22]).intl;
            tmp17Result = closure_10(BaseTextButton, obj17);
          }
          items9[1] = closure_10(guildId, obj16);
          items7[1] = closure_11(guildId, obj13);
          return closure_10(PressableOpacity, obj);
        }
      }
      return null;
    };
function calculateActivityRowHeight(bound) {
  return 40 + (bound - 32) / c14 + 12 + 16;
}
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default tmp7;
export { calculateActivityRowHeight };
