// discord_app/modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildSettingsActionCreatorsDefault from "../../GuildSettingsActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

const require = fn;
const View = fn(17).View;
let closure_5 = fn(2082).isGuildOwnerWithRequiredMfaLevel;
const Constants = fn(1085);
({ GuildFeatures: closure_9, MFALevels: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  wrapper: { flex: 1, justifyContent: "space-between", paddingTop: 99 },
  center: {
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  },
  label: { textAlign: "center", marginBottom: 8 },
  image: { width: 295, height: 142, marginHorizontal: 35 },
  infoWrapper: { marginBottom: 40 },
  button: { alignSelf: "center", paddingHorizontal: 16, marginTop: 16 },
};
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  flexDirection: "column",
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsModalSecurity(guildId) {
      const cResult = guildId(576).c(51);
      guildId = guildId.guildId;
      const contentContainerStyle = guildId.contentContainerStyle;
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function h() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildSettingsStore];
        class T {
          constructor() {
            return closure_1_8.getProps().mfaLevel;
          }
        }
        cResult[3] = items1;
        cResult[4] = T;
        let tmp10 = T;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const tmpResult = guildId(504);
      const stateFromStores1 = guildId(504).useStateFromStores(tmp9, tmp10);
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === stateFromStores1) {
          dependencyMap = cResult[7];
          class D {
            constructor() {
              if (null == closure_1) {
                return;
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[13]);
                obj1 = { guildId: null, level: null };
                obj1.guildId = tmp.id;
                tmp4 = closure_2;
                tmp5 = MFALevels;
                obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                obj1 = obj.updateMFALevel(obj1);
              }
              return;
            }
          }
        }
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === tmp13) {
            let tmp22 = cResult[11];
          }
          if (cResult[12] === contentContainerStyle) {
            if (cResult[13] === tmp4.wrapper) {
              let tmp23 = cResult[14];
            }
            const _Symbol = Symbol;
            class D {
              constructor() {
                if (null == closure_1) {
                  return;
                } else {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[13]);
                  obj1 = { guildId: null, level: null };
                  obj1.guildId = tmp.id;
                  tmp4 = closure_2;
                  tmp5 = MFALevels;
                  obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                  obj1 = obj.updateMFALevel(obj1);
                }
                return;
              }
            }
            class T {
              constructor() {
                return closure_1_8.getProps().mfaLevel;
              }
            }
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const string = tmp(1126).intl.string;
              class D {
                constructor() {
                  if (null == closure_1) {
                    return;
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[13]);
                    obj1 = { guildId: null, level: null };
                    obj1.guildId = tmp.id;
                    tmp4 = closure_2;
                    tmp5 = MFALevels;
                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                    obj1 = obj.updateMFALevel(obj1);
                  }
                  return;
                }
              }
              class T {
                constructor() {
                  return closure_1_8.getProps().mfaLevel;
                }
              }
              cResult[15] = tmp27;
            }
            if (cResult[16] !== tmp4.label) {
              class D {
                constructor() {
                  if (null == closure_1) {
                    return;
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[13]);
                    obj1 = { guildId: null, level: null };
                    obj1.guildId = tmp.id;
                    tmp4 = closure_2;
                    tmp5 = MFALevels;
                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                    obj1 = obj.updateMFALevel(obj1);
                  }
                  return;
                }
              }
              class T {
                constructor() {
                  return closure_1_8.getProps().mfaLevel;
                }
              }
              const tmp30 = closure_11(tmp(5087).Text, {
                style: null,
                variant: "text-md/medium",
                color: "mobile-text-heading-primary",
                children: null,
              });
              cResult[16] = tmp4.label;
              cResult[17] = tmp30;
              let tmp28 = tmp30;
              let obj2 = {
                style: null,
                variant: "text-md/medium",
                color: "mobile-text-heading-primary",
                children: null,
              };
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] !== tmp13) {
              const string2 = tmp(1126).intl.string;
              class D {
                constructor() {
                  if (null == closure_1) {
                    return;
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[13]);
                    obj1 = { guildId: null, level: null };
                    obj1.guildId = tmp.id;
                    tmp4 = closure_2;
                    tmp5 = MFALevels;
                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                    obj1 = obj.updateMFALevel(obj1);
                  }
                  return;
                }
              }
              class T {
                constructor() {
                  return closure_1_8.getProps().mfaLevel;
                }
              }
              cResult[18] = tmp13;
              cResult[19] = tmp32;
            } else {
              class D {
                constructor() {
                  if (null == closure_1) {
                    return;
                  } else {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[13]);
                    obj1 = { guildId: null, level: null };
                    obj1.guildId = tmp.id;
                    tmp4 = closure_2;
                    tmp5 = MFALevels;
                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                    obj1 = obj.updateMFALevel(obj1);
                  }
                  return;
                }
              }
              class T {
                constructor() {
                  return closure_1_8.getProps().mfaLevel;
                }
              }
              if (cResult[20] === tmp22) {
                if (cResult[21] === tmp31) {
                  if (cResult[22] === tmp34) {
                    if (cResult[23] === tmp35) {
                      let tmp36 = cResult[24];
                    }
                    if (cResult[25] === tmp4.button) {
                      if (cResult[26] === tmp36) {
                        let tmp39 = cResult[27];
                      }
                      class D {
                        constructor() {
                          if (null == closure_1) {
                            return;
                          } else {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            obj = closure_1(closure_2[13]);
                            obj1 = { guildId: null, level: null };
                            obj1.guildId = tmp.id;
                            tmp4 = closure_2;
                            tmp5 = MFALevels;
                            obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                            obj1 = obj.updateMFALevel(obj1);
                          }
                          return;
                        }
                      }
                      class T {
                        constructor() {
                          return closure_1_8.getProps().mfaLevel;
                        }
                      }
                      if (stateFromStores != null) {
                        const features2 = stateFromStores.features;
                      }
                      if (tmp41 !== features2) {
                        if (stateFromStores != null) {
                          const features3 = stateFromStores.features;
                          class D {
                            constructor() {
                              if (null == closure_1) {
                                return;
                              } else {
                                tmp2 = closure_1;
                                tmp3 = closure_2;
                                obj = closure_1(closure_2[13]);
                                obj1 = { guildId: null, level: null };
                                obj1.guildId = tmp.id;
                                tmp4 = closure_2;
                                tmp5 = MFALevels;
                                obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                obj1 = obj.updateMFALevel(obj1);
                              }
                              return;
                            }
                          }
                        }
                        class D {
                          constructor() {
                            if (null == closure_1) {
                              return;
                            } else {
                              tmp2 = closure_1;
                              tmp3 = closure_2;
                              obj = closure_1(closure_2[13]);
                              obj1 = { guildId: null, level: null };
                              obj1.guildId = tmp.id;
                              tmp4 = closure_2;
                              tmp5 = MFALevels;
                              obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                              obj1 = obj.updateMFALevel(obj1);
                            }
                            return;
                          }
                        }
                        class T {
                          constructor() {
                            return closure_1_8.getProps().mfaLevel;
                          }
                        }
                        let features1;
                        if (stateFromStores != null) {
                          features1 = stateFromStores.features;
                        }
                        cResult[28] = features1;
                        cResult[29] = tmp45;
                        let tmp43 = tmp45;
                      } else {
                        tmp43 = cResult[29];
                      }
                      if (cResult[30] === tmp4.center) {
                        if (cResult[31] === tmp28) {
                          if (cResult[32] === tmp39) {
                            if (cResult[33] === tmp43) {
                              let tmp47 = cResult[34];
                            }
                            if (cResult[35] !== tmp4.image) {
                              class D {
                                constructor() {
                                  if (null == closure_1) {
                                    return;
                                  } else {
                                    tmp2 = closure_1;
                                    tmp3 = closure_2;
                                    obj = closure_1(closure_2[13]);
                                    obj1 = { guildId: null, level: null };
                                    obj1.guildId = tmp.id;
                                    tmp4 = closure_2;
                                    tmp5 = MFALevels;
                                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                    obj1 = obj.updateMFALevel(obj1);
                                  }
                                  return;
                                }
                              }
                              class T {
                                constructor() {
                                  return closure_1_8.getProps().mfaLevel;
                                }
                              }
                              tmp55[0] = stateFromStores(14963);
                              tmp55[1] = tmp4.image;
                              const tmp56 = closure_11(tmp54, tmp55);
                              cResult[35] = tmp4.image;
                              cResult[36] = tmp56;
                              let tmp51 = tmp56;
                            } else {
                              tmp51 = cResult[36];
                            }
                            class D {
                              constructor() {
                                if (null == closure_1) {
                                  return;
                                } else {
                                  tmp2 = closure_1;
                                  tmp3 = closure_2;
                                  obj = closure_1(closure_2[13]);
                                  obj1 = { guildId: null, level: null };
                                  obj1.guildId = tmp.id;
                                  tmp4 = closure_2;
                                  tmp5 = MFALevels;
                                  obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                  obj1 = obj.updateMFALevel(obj1);
                                }
                                return;
                              }
                            }
                            class T {
                              constructor() {
                                return closure_1_8.getProps().mfaLevel;
                              }
                            }
                            if (tmp57 === Symbol.for("react.memo_cache_sentinel")) {
                              const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
                              class D {
                                constructor() {
                                  if (null == closure_1) {
                                    return;
                                  } else {
                                    tmp2 = closure_1;
                                    tmp3 = closure_2;
                                    obj = closure_1(closure_2[13]);
                                    obj1 = { guildId: null, level: null };
                                    obj1.guildId = tmp.id;
                                    tmp4 = closure_2;
                                    tmp5 = MFALevels;
                                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                    obj1 = obj.updateMFALevel(obj1);
                                  }
                                  return;
                                }
                              }
                              class T {
                                constructor() {
                                  return closure_1_8.getProps().mfaLevel;
                                }
                              }
                              obj3.children = obj9.format(tmp(1126).t["FK0+iX"], {});
                              const tmp61 = closure_11(tmp60, obj3);
                              cResult[37] = tmp61;
                              let tmp58 = tmp61;
                            } else {
                              tmp58 = cResult[37];
                            }
                            if (cResult[38] !== tmp4.infoWrapper) {
                              class D {
                                constructor() {
                                  if (null == closure_1) {
                                    return;
                                  } else {
                                    tmp2 = closure_1;
                                    tmp3 = closure_2;
                                    obj = closure_1(closure_2[13]);
                                    obj1 = { guildId: null, level: null };
                                    obj1.guildId = tmp.id;
                                    tmp4 = closure_2;
                                    tmp5 = MFALevels;
                                    obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                    obj1 = obj.updateMFALevel(obj1);
                                  }
                                  return;
                                }
                              }
                              class T {
                                constructor() {
                                  return closure_1_8.getProps().mfaLevel;
                                }
                              }
                              tmp65[1] = tmp58;
                              const tmp66 = closure_11(View, tmp65);
                              cResult[38] = tmp4.infoWrapper;
                              cResult[39] = tmp66;
                              let tmp62 = tmp66;
                            } else {
                              tmp62 = cResult[39];
                            }
                            if (cResult[40] === tmp4.center) {
                              if (cResult[41] === tmp51) {
                                if (cResult[42] === tmp62) {
                                  let tmp67 = cResult[43];
                                }
                                if (cResult[44] === tmp47) {
                                  if (cResult[45] === tmp67) {
                                    if (cResult[46] === tmp23) {
                                      let tmp71 = cResult[47];
                                    }
                                    const _Symbol2 = Symbol;
                                    class D {
                                      constructor() {
                                        if (null == closure_1) {
                                          return;
                                        } else {
                                          tmp2 = closure_1;
                                          tmp3 = closure_2;
                                          obj = closure_1(closure_2[13]);
                                          obj1 = { guildId: null, level: null };
                                          obj1.guildId = tmp.id;
                                          tmp4 = closure_2;
                                          tmp5 = MFALevels;
                                          obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                          obj1 = obj.updateMFALevel(obj1);
                                        }
                                        return;
                                      }
                                    }
                                    class T {
                                      constructor() {
                                        return closure_1_8.getProps().mfaLevel;
                                      }
                                    }
                                    if (cResult[49] !== tmp71) {
                                      class D {
                                        constructor() {
                                          if (null == closure_1) {
                                            return;
                                          } else {
                                            tmp2 = closure_1;
                                            tmp3 = closure_2;
                                            obj = closure_1(closure_2[13]);
                                            obj1 = { guildId: null, level: null };
                                            obj1.guildId = tmp.id;
                                            tmp4 = closure_2;
                                            tmp5 = MFALevels;
                                            obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                            obj1 = obj.updateMFALevel(obj1);
                                          }
                                          return;
                                        }
                                      }
                                      class T {
                                        constructor() {
                                          return closure_1_8.getProps().mfaLevel;
                                        }
                                      }
                                      tmp78[0] = tmp71;
                                      tmp78[1] = tmp73;
                                      tmp77[0] = tmp78;
                                      const tmp79 = closure_12(closure_13, tmp77);
                                      cResult[49] = tmp71;
                                      cResult[50] = tmp79;
                                      let tmp74 = tmp79;
                                    } else {
                                      tmp74 = cResult[50];
                                    }
                                    return tmp74;
                                  }
                                }
                                class D {
                                  constructor() {
                                    if (null == closure_1) {
                                      return;
                                    } else {
                                      tmp2 = closure_1;
                                      tmp3 = closure_2;
                                      obj = closure_1(closure_2[13]);
                                      obj1 = { guildId: null, level: null };
                                      obj1.guildId = tmp.id;
                                      tmp4 = closure_2;
                                      tmp5 = MFALevels;
                                      obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                                      obj1 = obj.updateMFALevel(obj1);
                                    }
                                    return;
                                  }
                                }
                                class T {
                                  constructor() {
                                    return closure_1_8.getProps().mfaLevel;
                                  }
                                }
                                const obj4 = { style: tmp23, children: null };
                                const items2 = [tmp47, tmp67];
                                obj4.children = items2;
                                const tmp72 = closure_12(View, obj4);
                                cResult[44] = tmp47;
                                cResult[45] = tmp67;
                                cResult[46] = tmp23;
                                cResult[47] = tmp72;
                                tmp71 = tmp72;
                              }
                            }
                            const obj5 = { style: tmp4.center, children: null };
                            const items3 = [tmp51, tmp62];
                            obj5.children = items3;
                            const tmp70 = closure_12(View, obj5);
                            cResult[40] = tmp4.center;
                            cResult[41] = tmp51;
                            cResult[42] = tmp62;
                            cResult[43] = tmp70;
                            tmp67 = tmp70;
                          }
                        }
                      }
                      const obj6 = { style: tmp25, children: null };
                      const items4 = [tmp28, tmp39, tmp43];
                      obj6.children = items4;
                      const tmp50 = closure_12(View, obj6);
                      cResult[30] = tmp4.center;
                      cResult[31] = tmp28;
                      cResult[32] = tmp39;
                      cResult[33] = tmp43;
                      cResult[34] = tmp50;
                      tmp47 = tmp50;
                    }
                    class D {
                      constructor() {
                        if (null == closure_1) {
                          return;
                        } else {
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          obj = closure_1(closure_2[13]);
                          obj1 = { guildId: null, level: null };
                          obj1.guildId = tmp.id;
                          tmp4 = closure_2;
                          tmp5 = MFALevels;
                          obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                          obj1 = obj.updateMFALevel(obj1);
                        }
                        return;
                      }
                    }
                    class T {
                      constructor() {
                        return closure_1_8.getProps().mfaLevel;
                      }
                    }
                    const obj7 = { style: tmp4.button, children: tmp36 };
                    const tmp40 = closure_11(View, obj7);
                    cResult[25] = tmp4.button;
                    cResult[26] = tmp36;
                    cResult[27] = tmp40;
                    tmp39 = tmp40;
                  }
                }
              }
              const obj8 = { text: cResult[19], disabled: !tmp14, variant: tmp35, onPress: tmp22, shrink: true };
              const tmp38 = closure_11(tmp(5376).Button, obj8);
              cResult[20] = tmp22;
              cResult[21] = cResult[19];
              cResult[22] = !tmp14;
              cResult[23] = tmp35;
              cResult[24] = tmp38;
              tmp36 = tmp38;
            }
          }
          class D {
            constructor() {
              if (null == closure_1) {
                return;
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[13]);
                obj1 = { guildId: null, level: null };
                obj1.guildId = tmp.id;
                tmp4 = closure_2;
                tmp5 = MFALevels;
                obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                obj1 = obj.updateMFALevel(obj1);
              }
              return;
            }
          }
          class T {
            constructor() {
              return closure_1_8.getProps().mfaLevel;
            }
          }
          tmp24[1] = contentContainerStyle;
          cResult[12] = contentContainerStyle;
          cResult[13] = tmp4.wrapper;
          cResult[14] = tmp24;
          tmp23 = tmp24;
        }
        class D {
          constructor() {
            if (null == closure_1) {
              return;
            } else {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[13]);
              obj1 = { guildId: null, level: null };
              obj1.guildId = tmp.id;
              tmp4 = closure_2;
              tmp5 = MFALevels;
              obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
              obj1 = obj.updateMFALevel(obj1);
            }
            return;
          }
        }
        class T {
          constructor() {
            return closure_1_8.getProps().mfaLevel;
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = tmp13;
        cResult[11] = D;
        tmp22 = D;
      }
      const currentUser = UserStore.getCurrentUser();
      dependencyMap = tmp16;
      let mfaEnabled;
      if (currentUser != null) {
        mfaEnabled = currentUser.mfaEnabled;
      }
      let tmp18 = true === mfaEnabled && null != stateFromStores;
      if (tmp18) {
        tmp18 = closure_5(stateFromStores, currentUser);
      }
      if (tmp18) {
        if (tmp16) {
          const features = stateFromStores.features;
          class D {
            constructor() {
              if (null == closure_1) {
                return;
              } else {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[13]);
                obj1 = { guildId: null, level: null };
                obj1.guildId = tmp.id;
                tmp4 = closure_2;
                tmp5 = MFALevels;
                obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
                obj1 = obj.updateMFALevel(obj1);
              }
              return;
            }
          }
        }
        class D {
          constructor() {
            if (null == closure_1) {
              return;
            } else {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[13]);
              obj1 = { guildId: null, level: null };
              obj1.guildId = tmp.id;
              tmp4 = closure_2;
              tmp5 = MFALevels;
              obj1.level = closure_2 ? tmp5.NONE : tmp5.ELEVATED;
              obj1 = obj.updateMFALevel(obj1);
            }
            return;
          }
        }
      }
      cResult[5] = stateFromStores;
      cResult[6] = stateFromStores1;
      cResult[7] = stateFromStores1 === constants2.ELEVATED;
      cResult[8] = tmp18;
      tmp14 = tmp18;
      const tmpResult2 = guildId(504);
    }
  : function GuildSettingsModalSecurity(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_14();
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj = guildId(504);
      const items1 = [GuildSettingsStore];
      const stateFromStores1 = guildId(504).useStateFromStores(items1, () => props.getProps().mfaLevel);
      const currentUser = UserStore.getCurrentUser();
      dependencyMap = tmp7;
      let mfaEnabled;
      if (currentUser != null) {
        mfaEnabled = currentUser.mfaEnabled;
      }
      let tmp9 = true === mfaEnabled && null != stateFromStores;
      if (tmp9) {
        tmp9 = closure_5(stateFromStores, currentUser);
      }
      if (tmp9) {
        let tmp11 = !tmp7;
        if (tmp7) {
          const features = stateFromStores.features;
          tmp11 = !features.has(constants.DISCOVERABLE);
        }
        tmp9 = tmp11;
      }
      const items2 = [stateFromStores, stateFromStores1 === constants2.ELEVATED];
      const obj3 = { style: null, children: null };
      const items3 = [tmp.wrapper, guildId.contentContainerStyle];
      obj3.style = items3;
      const obj4 = { style: tmp.center, children: null };
      const callback = noop.useCallback(() => {
        if (null != stateFromStores) {
          let obj2 = { guildId: tmp.id, level: closure_2 ? constants2.NONE : constants2.ELEVATED };
          obj2 = GuildSettingsActionCreatorsDefault.updateMFALevel(obj2);
        }
      }, items2);
      const obj5 = {
        style: tmp.label,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = tmp2(1126).intl;
      obj5.children = intl.string(guildId(1126).t.Wi9LEV);
      const items4 = [closure_11(guildId(5087).Text, obj5), ,];
      const obj6 = { style: tmp.button, children: null };
      const intl2 = tmp2(1126).intl;
      const string = intl2.string;
      const t = tmp2(1126).t;
      if (stateFromStores1 === constants2.ELEVATED) {
        let stringResult = string(t["MP0Ho+"]);
      } else {
        stringResult = string(t.yZcYGa);
      }
      const obj7 = { text: stringResult, disabled: !tmp9, variant: null, onPress: null, shrink: true };
      let str = "primary";
      if (stateFromStores1 === constants2.ELEVATED) {
        str = "destructive";
      }
      obj7.variant = str;
      obj7.onPress = callback;
      obj6.children = closure_11(guildId(5376).Button, obj7);
      items4[1] = closure_11(View, obj6);
      let hasItem;
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        hasItem = features2.has(constants.DISCOVERABLE);
      }
      let tmp17Result = null;
      if (hasItem) {
        const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
        const intl3 = tmp2(1126).intl;
        obj8.children = intl3.string(tmp2(1126).t["KG1V/E"]);
        tmp17Result = closure_11(tmp2(5087).Text, obj8);
      }
      const obj9 = { children: null };
      items4[2] = tmp17Result;
      obj4.children = items4;
      const items5 = [closure_12(View, obj4)];
      const obj10 = { style: tmp.center, children: null };
      const obj11 = { source: null, style: null, resizeMode: "contain" };
      let obj2 = guildId(504);
      obj11.source = stateFromStores(14963);
      obj11.style = tmp.image;
      const items6 = [closure_11(stateFromStores(6163), obj11)];
      const obj12 = { style: tmp.infoWrapper, children: null };
      const obj13 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl4 = tmp2(1126).intl;
      obj13.children = intl4.format(guildId(1126).t["FK0+iX"], {});
      obj12.children = closure_11(guildId(5087).Text, obj13);
      items6[1] = closure_11(View, obj12);
      obj10.children = items6;
      items5[1] = closure_12(View, obj10);
      obj3.children = items5;
      const items7 = [closure_12(View, obj3), closure_11(guildId(6726).NavScrim, {})];
      obj9.children = items7;
      return closure_12(closure_13, obj9);
    };
