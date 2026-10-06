// discord_app/modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecord from "../../../../records/GuildRecord.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap, guildId;

let c10;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
let closure_6 = GuildRecord.isGuildOwnerWithRequiredMfaLevel;
({ GuildFeatures: c10, MFALevels: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = {
  wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 },
  center: obj2,
  label: { textAlign: "center", marginBottom: 8 },
  image: { width: 295, height: 142, marginHorizontal: 35 },
  infoWrapper: { marginBottom: 40 },
  button: { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 },
};
obj2 = {
  alignItems: "center",
  flexDirection: "column",
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let closure_15 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_2;
      let first;
      let items2;
      let items3;
      let items4;
      let props;
      let tmp10;
      let tmp7;
      let tmp9;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(51);
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function p() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildSettingsStore];
        class V {
          constructor() {
            return props.getProps().mfaLevel;
          }
        }
        cResult[3] = items1;
        cResult[4] = V;
        tmp10 = V;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === stateFromStores1) {
          dependencyMap = cResult[7];
          class M {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                const obj = GuildSettingsActionCreatorsDefault;
                obj.updateMFALevel(obj2);
              }
            }
          }
        }
        if (cResult[9] === stateFromStores) {
          let tmp22;
          if (cResult[10] === tmp13) {
            tmp22 = cResult[11];
          }
          if (cResult[12] === contentContainerStyle) {
            let tmp23;
            let tmp28;
            let tmp31;
            if (cResult[13] === tmp4.wrapper) {
              tmp23 = cResult[14];
            }
            const _Symbol = Symbol;
            class M {
              constructor() {
                if (null != stateFromStores) {
                  const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                  const obj = GuildSettingsActionCreatorsDefault;
                  obj.updateMFALevel(obj2);
                }
              }
            }
            class V {
              constructor() {
                return props.getProps().mfaLevel;
              }
            }
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const string = tmp(1126).intl.string;
              class M {
                constructor() {
                  if (null != stateFromStores) {
                    const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                    const obj = GuildSettingsActionCreatorsDefault;
                    obj.updateMFALevel(obj2);
                  }
                }
              }
              class V {
                constructor() {
                  return props.getProps().mfaLevel;
                }
              }
              cResult[15] = tmp27;
            }
            if (cResult[16] !== tmp4.label) {
              let obj2 = {
                style: null,
                variant: "text-md/medium",
                color: "mobile-text-heading-primary",
                children: null,
              };
              class M {
                constructor() {
                  if (null != stateFromStores) {
                    const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                    const obj = GuildSettingsActionCreatorsDefault;
                    obj.updateMFALevel(obj2);
                  }
                }
              }
              class V {
                constructor() {
                  return props.getProps().mfaLevel;
                }
              }
              const tmp30 = closure_12(tmp(4892).Text, obj2);
              cResult[16] = tmp4.label;
              cResult[17] = tmp30;
              tmp28 = tmp30;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] !== tmp13) {
              const string2 = tmp(1126).intl.string;
              class M {
                constructor() {
                  if (null != stateFromStores) {
                    const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                    const obj = GuildSettingsActionCreatorsDefault;
                    obj.updateMFALevel(obj2);
                  }
                }
              }
              class V {
                constructor() {
                  return props.getProps().mfaLevel;
                }
              }
              cResult[18] = tmp13;
              cResult[19] = tmp32;
              tmp31 = tmp32;
            } else {
              tmp31 = cResult[19];
            }
            let str = "primary";
            if (tmp13) {
              str = "destructive";
            }
            if (cResult[20] === tmp22) {
              if (cResult[21] === tmp31) {
                if (cResult[22] === !tmp14) {
                  let tmp34;
                  if (cResult[23] === str) {
                    tmp34 = cResult[24];
                  }
                  if (cResult[25] === tmp4.button) {
                    let tmp37;
                    let features2;
                    let tmp41;
                    if (cResult[26] === tmp34) {
                      tmp37 = cResult[27];
                    }
                    class M {
                      constructor() {
                        if (null != stateFromStores) {
                          const obj2 = {
                            guildId: tmp.id,
                            level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                          };
                          const obj = GuildSettingsActionCreatorsDefault;
                          obj.updateMFALevel(obj2);
                        }
                      }
                    }
                    class V {
                      constructor() {
                        return props.getProps().mfaLevel;
                      }
                    }
                    if (stateFromStores != null) {
                      features2 = stateFromStores.features;
                    }
                    if (tmp39 !== features2) {
                      if (stateFromStores != null) {
                        const features3 = stateFromStores.features;
                        class M {
                          constructor() {
                            if (null != stateFromStores) {
                              const obj2 = {
                                guildId: tmp.id,
                                level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                              };
                              const obj = GuildSettingsActionCreatorsDefault;
                              obj.updateMFALevel(obj2);
                            }
                          }
                        }
                      }
                      class M {
                        constructor() {
                          if (null != stateFromStores) {
                            const obj2 = {
                              guildId: tmp.id,
                              level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                            };
                            const obj = GuildSettingsActionCreatorsDefault;
                            obj.updateMFALevel(obj2);
                          }
                        }
                      }
                      class V {
                        constructor() {
                          return props.getProps().mfaLevel;
                        }
                      }
                      let features1;
                      if (stateFromStores != null) {
                        features1 = stateFromStores.features;
                      }
                      cResult[28] = features1;
                      cResult[29] = tmp43;
                      tmp41 = tmp43;
                    } else {
                      tmp41 = cResult[29];
                    }
                    if (cResult[30] === tmp4.center) {
                      if (cResult[31] === tmp28) {
                        if (cResult[32] === tmp37) {
                          let tmp45;
                          let tmp49;
                          let tmp55;
                          let tmp59;
                          if (cResult[33] === tmp41) {
                            tmp45 = cResult[34];
                          }
                          if (cResult[35] !== tmp4.image) {
                            class M {
                              constructor() {
                                if (null != stateFromStores) {
                                  const obj2 = {
                                    guildId: tmp.id,
                                    level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                  };
                                  const obj = GuildSettingsActionCreatorsDefault;
                                  obj.updateMFALevel(obj2);
                                }
                              }
                            }
                            class V {
                              constructor() {
                                return props.getProps().mfaLevel;
                              }
                            }
                            tmp52[0] = stateFromStores(14594);
                            tmp52[1] = tmp4.image;
                            const tmp53 = closure_12(closure_5, tmp52);
                            cResult[35] = tmp4.image;
                            cResult[36] = tmp53;
                            tmp49 = tmp53;
                          } else {
                            tmp49 = cResult[36];
                          }
                          class M {
                            constructor() {
                              if (null != stateFromStores) {
                                const obj2 = {
                                  guildId: tmp.id,
                                  level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                };
                                const obj = GuildSettingsActionCreatorsDefault;
                                obj.updateMFALevel(obj2);
                              }
                            }
                          }
                          class V {
                            constructor() {
                              return props.getProps().mfaLevel;
                            }
                          }
                          if (tmp54 === Symbol.for("react.memo_cache_sentinel")) {
                            const obj3 = {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: obj9.format(tmp(1126).t["FK0+iX"], {}),
                            };
                            class M {
                              constructor() {
                                if (null != stateFromStores) {
                                  const obj2 = {
                                    guildId: tmp.id,
                                    level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                  };
                                  const obj = GuildSettingsActionCreatorsDefault;
                                  obj.updateMFALevel(obj2);
                                }
                              }
                            }
                            class V {
                              constructor() {
                                return props.getProps().mfaLevel;
                              }
                            }
                            const tmp58 = closure_12(tmp57, obj3);
                            cResult[37] = tmp58;
                            tmp55 = tmp58;
                          } else {
                            tmp55 = cResult[37];
                          }
                          if (cResult[38] !== tmp4.infoWrapper) {
                            class M {
                              constructor() {
                                if (null != stateFromStores) {
                                  const obj2 = {
                                    guildId: tmp.id,
                                    level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                  };
                                  const obj = GuildSettingsActionCreatorsDefault;
                                  obj.updateMFALevel(obj2);
                                }
                              }
                            }
                            class V {
                              constructor() {
                                return props.getProps().mfaLevel;
                              }
                            }
                            tmp62[1] = tmp55;
                            const tmp63 = closure_12(closure_4, tmp62);
                            cResult[38] = tmp4.infoWrapper;
                            cResult[39] = tmp63;
                            tmp59 = tmp63;
                          } else {
                            tmp59 = cResult[39];
                          }
                          if (cResult[40] === tmp4.center) {
                            if (cResult[41] === tmp49) {
                              let tmp64;
                              if (cResult[42] === tmp59) {
                                tmp64 = cResult[43];
                              }
                              if (cResult[44] === tmp45) {
                                if (cResult[45] === tmp64) {
                                  let tmp68;
                                  let tmp71;
                                  if (cResult[46] === tmp23) {
                                    tmp68 = cResult[47];
                                  }
                                  const _Symbol2 = Symbol;
                                  class M {
                                    constructor() {
                                      if (null != stateFromStores) {
                                        const obj2 = {
                                          guildId: tmp.id,
                                          level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                        };
                                        const obj = GuildSettingsActionCreatorsDefault;
                                        obj.updateMFALevel(obj2);
                                      }
                                    }
                                  }
                                  class V {
                                    constructor() {
                                      return props.getProps().mfaLevel;
                                    }
                                  }
                                  if (cResult[49] !== tmp68) {
                                    class M {
                                      constructor() {
                                        if (null != stateFromStores) {
                                          const obj2 = {
                                            guildId: tmp.id,
                                            level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                          };
                                          const obj = GuildSettingsActionCreatorsDefault;
                                          obj.updateMFALevel(obj2);
                                        }
                                      }
                                    }
                                    class V {
                                      constructor() {
                                        return props.getProps().mfaLevel;
                                      }
                                    }
                                    tmp75[0] = tmp68;
                                    tmp75[1] = tmp70;
                                    tmp74[0] = tmp75;
                                    const tmp76 = closure_13(closure_14, tmp74);
                                    cResult[49] = tmp68;
                                    cResult[50] = tmp76;
                                    tmp71 = tmp76;
                                  } else {
                                    tmp71 = cResult[50];
                                  }
                                  return tmp71;
                                }
                              }
                              class M {
                                constructor() {
                                  if (null != stateFromStores) {
                                    const obj2 = {
                                      guildId: tmp.id,
                                      level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                                    };
                                    const obj = GuildSettingsActionCreatorsDefault;
                                    obj.updateMFALevel(obj2);
                                  }
                                }
                              }
                              class V {
                                constructor() {
                                  return props.getProps().mfaLevel;
                                }
                              }
                              const obj4 = { style: tmp23, children: items2 };
                              items2 = [tmp45, tmp64];
                              const tmp69 = closure_13(closure_4, obj4);
                              cResult[44] = tmp45;
                              cResult[45] = tmp64;
                              cResult[46] = tmp23;
                              cResult[47] = tmp69;
                              tmp68 = tmp69;
                            }
                          }
                          const obj5 = { style: tmp4.center, children: items3 };
                          items3 = [tmp49, tmp59];
                          const tmp67 = closure_13(closure_4, obj5);
                          cResult[40] = tmp4.center;
                          cResult[41] = tmp49;
                          cResult[42] = tmp59;
                          cResult[43] = tmp67;
                          tmp64 = tmp67;
                        }
                      }
                    }
                    const obj6 = { style: tmp25, children: items4 };
                    items4 = [tmp28, tmp37, tmp41];
                    const tmp48 = closure_13(closure_4, obj6);
                    cResult[30] = tmp4.center;
                    cResult[31] = tmp28;
                    cResult[32] = tmp37;
                    cResult[33] = tmp41;
                    cResult[34] = tmp48;
                    tmp45 = tmp48;
                  }
                  class M {
                    constructor() {
                      if (null != stateFromStores) {
                        const obj2 = {
                          guildId: tmp.id,
                          level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED,
                        };
                        const obj = GuildSettingsActionCreatorsDefault;
                        obj.updateMFALevel(obj2);
                      }
                    }
                  }
                  class V {
                    constructor() {
                      return props.getProps().mfaLevel;
                    }
                  }
                  const obj7 = { style: tmp4.button, children: tmp34 };
                  const tmp38 = closure_12(closure_4, obj7);
                  cResult[25] = tmp4.button;
                  cResult[26] = tmp34;
                  cResult[27] = tmp38;
                  tmp37 = tmp38;
                }
              }
            }
            const obj8 = { text: tmp31, disabled: !tmp14, variant: str, onPress: tmp22, shrink: true };
            const tmp36 = closure_12(tmp(5601).Button, obj8);
            cResult[20] = tmp22;
            cResult[21] = tmp31;
            cResult[22] = !tmp14;
            cResult[23] = str;
            cResult[24] = tmp36;
            tmp34 = tmp36;
          }
          class M {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                const obj = GuildSettingsActionCreatorsDefault;
                obj.updateMFALevel(obj2);
              }
            }
          }
          class V {
            constructor() {
              return props.getProps().mfaLevel;
            }
          }
          tmp24[1] = contentContainerStyle;
          cResult[12] = contentContainerStyle;
          cResult[13] = tmp4.wrapper;
          cResult[14] = tmp24;
          tmp23 = tmp24;
        }
        class M {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateMFALevel(obj2);
            }
          }
        }
        class V {
          constructor() {
            return props.getProps().mfaLevel;
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = tmp13;
        cResult[11] = M;
        tmp22 = M;
      }
      const currentUser = UserStore.getCurrentUser();
      dependencyMap = tmp16;
      let mfaEnabled;
      if (currentUser != null) {
        mfaEnabled = currentUser.mfaEnabled;
      }
      const tmp18 = true === mfaEnabled && null != stateFromStores && closure_6(stateFromStores, currentUser);
      if (tmp18) {
        if (stateFromStores1 === constants2.ELEVATED) {
          const features = stateFromStores.features;
          class M {
            constructor() {
              if (null != stateFromStores) {
                const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
                const obj = GuildSettingsActionCreatorsDefault;
                obj.updateMFALevel(obj2);
              }
            }
          }
        }
        class M {
          constructor() {
            if (null != stateFromStores) {
              const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
              const obj = GuildSettingsActionCreatorsDefault;
              obj.updateMFALevel(obj2);
            }
          }
        }
      }
      cResult[5] = stateFromStores;
      cResult[6] = stateFromStores1;
      cResult[7] = stateFromStores1 === constants2.ELEVATED;
      cResult[8] = tmp18;
    }
  : (guildId) => {
      let Button;
      let Text3;
      let closure_2;
      let intl;
      let intl3;
      let intl4;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj13;
      let obj7;
      let props;
      let str;
      let stringResult;
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      const tmp = closure_15();
      let obj = guildId(504);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj2 = guildId(504);
      const items1 = [GuildSettingsStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => props.getProps().mfaLevel);
      const currentUser = UserStore.getCurrentUser();
      dependencyMap = tmp7;
      let mfaEnabled;
      if (currentUser != null) {
        mfaEnabled = currentUser.mfaEnabled;
      }
      let tmp9 = true === mfaEnabled && null != stateFromStores && closure_6(stateFromStores, currentUser);
      if (tmp9) {
        let tmp11 = !tmp7;
        if (stateFromStores1 === constants2.ELEVATED) {
          const features = stateFromStores.features;
          tmp11 = !features.has(constants.DISCOVERABLE);
        }
        tmp9 = tmp11;
      }
      const items2 = [stateFromStores, stateFromStores1 === constants2.ELEVATED];
      const obj3 = { style: items3, children: items5 };
      items3 = [tmp.wrapper, contentContainerStyle];
      const obj4 = { style: tmp.center, children: items4 };
      const callback = react.useCallback(() => {
        if (null != stateFromStores) {
          const obj2 = { guildId: tmp.id, level: closure_2 ? unpackModuleId.NONE : unpackModuleId.ELEVATED };
          const obj = GuildSettingsActionCreatorsDefault;
          obj.updateMFALevel(obj2);
        }
      }, items2);
      const obj5 = {
        style: tmp.label,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: intl.string(guildId(1126).t.Wi9LEV),
      };
      const Text = tmp2(4892).Text;
      intl = tmp2(1126).intl;
      items4 = [closure_12(Text, obj5), ,];
      const obj6 = { style: tmp.button, children: closure_12(Button, obj7) };
      Button = tmp2(5601).Button;
      const intl2 = tmp2(1126).intl;
      const string = intl2.string;
      const t = tmp2(1126).t;
      if (stateFromStores1 === constants2.ELEVATED) {
        stringResult = string(t["MP0Ho+"]);
      } else {
        stringResult = string(t.yZcYGa);
      }
      obj7 = { text: stringResult, disabled: !tmp9, variant: str, onPress: callback, shrink: true };
      str = "primary";
      if (stateFromStores1 === constants2.ELEVATED) {
        str = "destructive";
      }
      items4[1] = closure_12(closure_4, obj6);
      let hasItem;
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        hasItem = features2.has(constants.DISCOVERABLE);
      }
      let tmp17Result = null;
      if (hasItem) {
        const obj8 = {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          children: intl3.string(guildId(1126).t["KG1V/E"]),
        };
        const Text2 = tmp2(4892).Text;
        intl3 = tmp2(1126).intl;
        tmp17Result = closure_12(Text2, obj8);
      }
      const obj9 = { children: items7 };
      items4[2] = tmp17Result;
      items5 = [closure_13(closure_4, obj4)];
      const obj10 = { style: tmp.center, children: items6 };
      items6 = [,];
      const obj11 = { source: stateFromStores(14594), style: tmp.image, resizeMode: "contain" };
      items6[0] = closure_12(closure_5, obj11);
      const obj12 = { style: tmp.infoWrapper, children: closure_12(Text3, obj13) };
      obj13 = { variant: "text-sm/medium", color: "text-muted", children: intl4.format(guildId(1126).t["FK0+iX"], {}) };
      Text3 = tmp2(4892).Text;
      intl4 = tmp2(1126).intl;
      items6[1] = closure_12(closure_4, obj12);
      items5[1] = closure_13(closure_4, obj10);
      items7 = [closure_13(closure_4, obj3), closure_12(guildId(6543).NavScrim, {})];
      return closure_13(closure_14, obj9);
    };
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default tmp5;
