// === Module 16434: UserProfileTryItOutFields ===

// Module 16434 (UserProfileTryItOutFields)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let UserSettingsSections = fn(1084).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(initialTarget) {
  const cResult = mode(fn[7]).c(55);
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  const tmp4 = closure_8();
  const obj = mode(fn[7]);
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(fn[8])(currentUser));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      mode(fn[9]).openUserSettings({ screen: closure_5.DISPLAY_NAME_STYLES, params: { isTryItOut: true } }, undefined, { pop: false });
    };
    cResult[0] = fn2;
    fn = fn2;
  } else {
    fn = cResult[0];
  }
  if (cResult[1] === avatarColors) {
    if (cResult[2] === primaryColor) {
      if (cResult[3] === secondaryColor) {
        let tmp7 = cResult[4];
      }
      const tmp8 = tmp5(tmp2[11])(tmp7);
      const openPrimaryColorPicker = tmp8.openPrimaryColorPicker;
      const openSecondaryColorPicker = tmp8.openSecondaryColorPicker;
      if (cResult[5] !== currentUser) {
        const obj2 = { user: currentUser, isTryItOut: true };
        cResult[5] = currentUser;
        cResult[6] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[6];
      }
      const tmp10 = tmp5(tmp2[12])(tmp9);
      UserSettingsSections = tmp10;
      if (cResult[7] !== currentUser) {
        const obj3 = { user: currentUser, isTryItOut: true };
        cResult[7] = currentUser;
        cResult[8] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[8];
      }
      const tmp12 = tmp5(tmp2[13])(tmp11);
      closure_6 = tmp12;
      const ref = openPrimaryColorPicker.useRef(false);
      if (cResult[9] === initialTarget) {
        if (cResult[10] === mode) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp10) {
              if (cResult[13] === openPrimaryColorPicker) {
                if (cResult[14] === openSecondaryColorPicker) {
                  let tmp13 = cResult[15];
                  let tmp14 = cResult[16];
                }
                const effect = obj5.useEffect(tmp13, tmp14);
                const _Symbol = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[14]).intl;
                  const stringResult = intl.string(tmp5(tmp2[15])["86GtGH"]);
                  cResult[17] = stringResult;
                  let tmp16 = stringResult;
                } else {
                  tmp16 = cResult[17];
                }
                if (cResult[18] !== ("edit" === mode)) {
                  if (!tmp18) {
                    fn = () => mode(fn[16]).openPremiumTryItOutModal("display-name-styles");
                  }
                  cResult[18] = tmp18;
                  cResult[19] = fn;
                  let tmp19 = fn;
                } else {
                  tmp19 = cResult[19];
                }
                if (cResult[20] === currentUser) {
                  if (cResult[21] === tmp19) {
                    let tmp20 = cResult[22];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[14]).intl;
                    const stringResult1 = intl2.string(tmp(tmp2[14]).t.DMeO2X);
                    cResult[23] = stringResult1;
                    let tmp23 = stringResult1;
                  } else {
                    tmp23 = cResult[23];
                  }
                  if (cResult[24] === tmp18) {
                    if (cResult[25] === openPrimaryColorPicker) {
                      let tmp25 = cResult[26];
                    }
                    if (cResult[27] === tmp18) {
                      if (cResult[28] === openSecondaryColorPicker) {
                        let tmp26 = cResult[29];
                      }
                      if (cResult[30] === primaryColor) {
                        if (cResult[31] === secondaryColor) {
                          if (cResult[32] === tmp25) {
                            if (cResult[33] === tmp26) {
                              let tmp27 = cResult[34];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = tmp(tmp2[14]).intl;
                              const stringResult2 = intl3.string(tmp(tmp2[14]).t.Vgdusv);
                              cResult[35] = stringResult2;
                              let tmp30 = stringResult2;
                            } else {
                              tmp30 = cResult[35];
                            }
                            if (cResult[36] === tmp18) {
                              if (cResult[37] === tmp10) {
                                let tmp32 = cResult[38];
                              }
                              if (cResult[39] === currentUser) {
                                if (cResult[40] === tmp32) {
                                  let tmp33 = cResult[41];
                                }
                                const _Symbol4 = Symbol;
                                if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                                  const intl4 = tmp(tmp2[14]).intl;
                                  const stringResult3 = intl4.string(tmp(tmp2[14]).t.Dt3ZUr);
                                  cResult[42] = stringResult3;
                                  let tmp36 = stringResult3;
                                } else {
                                  tmp36 = cResult[42];
                                }
                                if (cResult[43] === tmp18) {
                                  if (cResult[44] === tmp12) {
                                    let tmp38 = cResult[45];
                                  }
                                  if (cResult[46] === currentUser) {
                                    if (cResult[47] === tmp38) {
                                      let tmp39 = cResult[48];
                                    }
                                    if (cResult[49] === tmp4.container) {
                                      if (cResult[50] === tmp20) {
                                        if (cResult[51] === tmp27) {
                                          if (cResult[52] === tmp33) {
                                            if (cResult[53] === tmp39) {
                                              let tmp42 = cResult[54];
                                            }
                                            return tmp42;
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { style: tmp4.container, children: null };
                                    const items = [tmp20, tmp27, tmp33, tmp39];
                                    obj4.children = items;
                                    const tmp45 = ref(openSecondaryColorPicker, obj4);
                                    cResult[49] = tmp4.container;
                                    class N {
                                      constructor() {
                                        if ("edit" === mode) {
                                          if (!closure_7.current) {
                                            tmp = initialTarget;
                                            str = "display-name-styles";
                                            if ("display-name-styles" === initialTarget) {
                                              tmp10 = closure_2;
                                              tmp11 = closure_2();
                                            } else {
                                              str2 = "theme-primary";
                                              if ("theme-primary" === tmp) {
                                                tmp8 = openPrimaryColorPicker;
                                                tmp9 = openPrimaryColorPicker();
                                              } else {
                                                str3 = "theme-secondary";
                                                if ("theme-secondary" === tmp) {
                                                  tmp6 = openSecondaryColorPicker;
                                                  tmp7 = openSecondaryColorPicker();
                                                } else {
                                                  str4 = "banner";
                                                  if ("banner" !== tmp) {
                                                    str5 = "avatar";
                                                    if ("avatar" === tmp) {
                                                      tmp2 = closure_6;
                                                      tmp3 = closure_6();
                                                    } else {
                                                      return;
                                                    }
                                                  }
                                                }
                                                tmp4 = closure_5;
                                                tmp5 = closure_5();
                                              }
                                            }
                                            flag = true;
                                            tmp12.current = true;
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    cResult[51] = tmp27;
                                    cResult[52] = tmp33;
                                    cResult[53] = tmp39;
                                    cResult[54] = tmp45;
                                    tmp42 = tmp45;
                                  }
                                  const obj6 = { heading: tmp36, showNitroIcon: true, children: null };
                                  const obj7 = { user: currentUser, onPress: tmp38 };
                                  obj6.children = closure_6(tmp(tmp2[21]).TryItOutEditableTileAvatarButton, obj7);
                                  cResult[46] = currentUser;
                                  cResult[47] = tmp38;
                                  class N {
                                    constructor() {
                                      if ("edit" === mode) {
                                        if (!closure_7.current) {
                                          tmp = initialTarget;
                                          str = "display-name-styles";
                                          if ("display-name-styles" === initialTarget) {
                                            tmp10 = closure_2;
                                            tmp11 = closure_2();
                                          } else {
                                            str2 = "theme-primary";
                                            if ("theme-primary" === tmp) {
                                              tmp8 = openPrimaryColorPicker;
                                              tmp9 = openPrimaryColorPicker();
                                            } else {
                                              str3 = "theme-secondary";
                                              if ("theme-secondary" === tmp) {
                                                tmp6 = openSecondaryColorPicker;
                                                tmp7 = openSecondaryColorPicker();
                                              } else {
                                                str4 = "banner";
                                                if ("banner" !== tmp) {
                                                  str5 = "avatar";
                                                  if ("avatar" === tmp) {
                                                    tmp2 = closure_6;
                                                    tmp3 = closure_6();
                                                  } else {
                                                    return;
                                                  }
                                                }
                                              }
                                              tmp4 = closure_5;
                                              tmp5 = closure_5();
                                            }
                                          }
                                          flag = true;
                                          tmp12.current = true;
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  tmp39 = closure_6(tmp(tmp2[17]).EditableTileGroup, obj6);
                                  const tmp41 = closure_6(tmp(tmp2[17]).EditableTileGroup, obj6);
                                }
                                let fn6 = tmp12;
                                if (!tmp18) {
                                  fn6 = () => mode(fn[16]).openPremiumTryItOutModal("avatar");
                                }
                                cResult[43] = tmp18;
                                cResult[44] = tmp12;
                                cResult[45] = fn6;
                                tmp38 = fn6;
                              }
                              const obj8 = { heading: tmp30, showNitroIcon: true, children: null };
                              const obj9 = { user: currentUser, onPress: tmp32 };
                              obj8.children = closure_6(tmp5(tmp2[20]), obj9);
                              cResult[39] = currentUser;
                              cResult[40] = tmp32;
                              class N {
                                constructor() {
                                  if ("edit" === mode) {
                                    if (!closure_7.current) {
                                      tmp = initialTarget;
                                      str = "display-name-styles";
                                      if ("display-name-styles" === initialTarget) {
                                        tmp10 = closure_2;
                                        tmp11 = closure_2();
                                      } else {
                                        str2 = "theme-primary";
                                        if ("theme-primary" === tmp) {
                                          tmp8 = openPrimaryColorPicker;
                                          tmp9 = openPrimaryColorPicker();
                                        } else {
                                          str3 = "theme-secondary";
                                          if ("theme-secondary" === tmp) {
                                            tmp6 = openSecondaryColorPicker;
                                            tmp7 = openSecondaryColorPicker();
                                          } else {
                                            str4 = "banner";
                                            if ("banner" !== tmp) {
                                              str5 = "avatar";
                                              if ("avatar" === tmp) {
                                                tmp2 = closure_6;
                                                tmp3 = closure_6();
                                              } else {
                                                return;
                                              }
                                            }
                                          }
                                          tmp4 = closure_5;
                                          tmp5 = closure_5();
                                        }
                                      }
                                      flag = true;
                                      tmp12.current = true;
                                    }
                                  }
                                  return;
                                }
                              }
                              tmp33 = closure_6(tmp(tmp2[17]).EditableTileGroup, obj8);
                              const tmp35 = closure_6(tmp(tmp2[17]).EditableTileGroup, obj8);
                            }
                            let fn5 = tmp10;
                            if (!tmp18) {
                              fn5 = () => mode(fn[16]).openPremiumTryItOutModal("banner");
                            }
                            cResult[36] = tmp18;
                            cResult[37] = tmp10;
                            cResult[38] = fn5;
                            tmp32 = fn5;
                          }
                        }
                      }
                      const obj10 = { heading: tmp23, showNitroIcon: true, children: null };
                      const obj11 = { primaryColor, secondaryColor, onPressPrimary: tmp25, onPressSecondary: tmp26 };
                      obj10.children = closure_6(tmp5(tmp2[19]), obj11);
                      const tmp29 = closure_6(tmp(tmp2[17]).EditableTileGroup, obj10);
                      cResult[30] = primaryColor;
                      class N {
                        constructor() {
                          if ("edit" === mode) {
                            if (!closure_7.current) {
                              tmp = initialTarget;
                              str = "display-name-styles";
                              if ("display-name-styles" === initialTarget) {
                                tmp10 = closure_2;
                                tmp11 = closure_2();
                              } else {
                                str2 = "theme-primary";
                                if ("theme-primary" === tmp) {
                                  tmp8 = openPrimaryColorPicker;
                                  tmp9 = openPrimaryColorPicker();
                                } else {
                                  str3 = "theme-secondary";
                                  if ("theme-secondary" === tmp) {
                                    tmp6 = openSecondaryColorPicker;
                                    tmp7 = openSecondaryColorPicker();
                                  } else {
                                    str4 = "banner";
                                    if ("banner" !== tmp) {
                                      str5 = "avatar";
                                      if ("avatar" === tmp) {
                                        tmp2 = closure_6;
                                        tmp3 = closure_6();
                                      } else {
                                        return;
                                      }
                                    }
                                  }
                                  tmp4 = closure_5;
                                  tmp5 = closure_5();
                                }
                              }
                              flag = true;
                              tmp12.current = true;
                            }
                          }
                          return;
                        }
                      }
                      cResult[32] = tmp25;
                      cResult[33] = tmp26;
                      cResult[34] = tmp29;
                      tmp27 = tmp29;
                    }
                    let fn4 = openSecondaryColorPicker;
                    if (!tmp18) {
                      fn4 = () => mode(fn[16]).openPremiumTryItOutModal("theme-secondary");
                    }
                    cResult[27] = tmp18;
                    cResult[28] = openSecondaryColorPicker;
                    cResult[29] = fn4;
                    tmp26 = fn4;
                  }
                  let fn3 = openPrimaryColorPicker;
                  if (!tmp18) {
                    fn3 = () => mode(fn[16]).openPremiumTryItOutModal("theme-primary");
                  }
                  cResult[24] = tmp18;
                  cResult[25] = openPrimaryColorPicker;
                  cResult[26] = fn3;
                  tmp25 = fn3;
                }
                const obj12 = { heading: tmp16, showNitroIcon: true, children: null };
                const obj13 = { user: currentUser, onPress: null };
                class N {
                  constructor() {
                    if ("edit" === mode) {
                      if (!closure_7.current) {
                        tmp = initialTarget;
                        str = "display-name-styles";
                        if ("display-name-styles" === initialTarget) {
                          tmp10 = closure_2;
                          tmp11 = closure_2();
                        } else {
                          str2 = "theme-primary";
                          if ("theme-primary" === tmp) {
                            tmp8 = openPrimaryColorPicker;
                            tmp9 = openPrimaryColorPicker();
                          } else {
                            str3 = "theme-secondary";
                            if ("theme-secondary" === tmp) {
                              tmp6 = openSecondaryColorPicker;
                              tmp7 = openSecondaryColorPicker();
                            } else {
                              str4 = "banner";
                              if ("banner" !== tmp) {
                                str5 = "avatar";
                                if ("avatar" === tmp) {
                                  tmp2 = closure_6;
                                  tmp3 = closure_6();
                                } else {
                                  return;
                                }
                              }
                            }
                            tmp4 = closure_5;
                            tmp5 = closure_5();
                          }
                        }
                        flag = true;
                        tmp12.current = true;
                      }
                    }
                    return;
                  }
                }
                obj12.children = closure_6(tmp5(tmp2[18]), obj13);
                const tmp22 = closure_6(tmp(tmp2[17]).EditableTileGroup, obj12);
                cResult[20] = currentUser;
                cResult[21] = tmp19;
                cResult[22] = tmp22;
                tmp20 = tmp22;
              }
            }
          }
        }
      }
      class N {
        constructor() {
          if ("edit" === mode) {
            if (!closure_7.current) {
              tmp = initialTarget;
              str = "display-name-styles";
              if ("display-name-styles" === initialTarget) {
                tmp10 = closure_2;
                tmp11 = closure_2();
              } else {
                str2 = "theme-primary";
                if ("theme-primary" === tmp) {
                  tmp8 = openPrimaryColorPicker;
                  tmp9 = openPrimaryColorPicker();
                } else {
                  str3 = "theme-secondary";
                  if ("theme-secondary" === tmp) {
                    tmp6 = openSecondaryColorPicker;
                    tmp7 = openSecondaryColorPicker();
                  } else {
                    str4 = "banner";
                    if ("banner" !== tmp) {
                      str5 = "avatar";
                      if ("avatar" === tmp) {
                        tmp2 = closure_6;
                        tmp3 = closure_6();
                      } else {
                        return;
                      }
                    }
                  }
                  tmp4 = closure_5;
                  tmp5 = closure_5();
                }
              }
              flag = true;
              tmp12.current = true;
            }
          }
          return;
        }
      }
      const items1 = [mode, initialTarget, fn, openPrimaryColorPicker, openSecondaryColorPicker, tmp10, tmp12];
      cResult[9] = initialTarget;
      cResult[10] = mode;
      cResult[11] = tmp12;
      cResult[12] = tmp10;
      cResult[13] = openPrimaryColorPicker;
      cResult[14] = openSecondaryColorPicker;
      cResult[15] = N;
      cResult[16] = items1;
      tmp14 = items1;
      tmp13 = N;
      obj5 = openPrimaryColorPicker;
    }
  }
  const obj14 = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(fn[10]).setTryItOutThemeColors };
  cResult[1] = avatarColors;
  cResult[2] = primaryColor;
  cResult[3] = secondaryColor;
  cResult[4] = obj14;
  tmp7 = obj14;
}) : (function UserProfileTryItOutFields(initialTarget) {
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  let onPress;
  let fn2;
  const tmp4 = initialTarget(onPress[8])(currentUser);
  ({ primaryColor, secondaryColor } = tmp4);
  onPress = fn2.useCallback(() => {
    mode(fn[9]).openUserSettings({ screen: fn4.DISPLAY_NAME_STYLES, params: { isTryItOut: true } }, undefined, { pop: false });
  }, []);
  const obj = { primaryColor, secondaryColor, avatarColors: tmp4.avatarColors, onChangeColors: null };
  const tmp = closure_8();
  obj.onChangeColors = mode(onPress[10]).setTryItOutThemeColors;
  const tmp5Result = initialTarget(onPress[11])(obj);
  fn2 = tmp5Result.openPrimaryColorPicker;
  let fn3 = tmp5Result.openSecondaryColorPicker;
  let fn4 = initialTarget(onPress[12])({ user: currentUser, isTryItOut: true });
  let fn5 = initialTarget(onPress[13])({ user: currentUser, isTryItOut: true });
  const ref = fn2.useRef(false);
  const items = [mode, initialTarget, onPress, fn2, fn3, fn4, fn5];
  const effect = fn2.useEffect(() => {
    if ("edit" === mode) {
      if (!ref.current) {
        if ("display-name-styles" === initialTarget) {
          fn();
        } else if ("theme-primary" === initialTarget) {
          fn2();
        } else {
          if ("theme-secondary" === initialTarget) {
            fn3();
          } else if ("banner" !== initialTarget) {
            if ("avatar" === initialTarget) {
              fn5();
            }
          }
          fn4();
        }
        tmp12.current = true;
      }
    }
  }, items);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { heading: null, showNitroIcon: true, children: null };
  const intl = mode(onPress[14]).intl;
  obj3.heading = intl.string(initialTarget(onPress[15])["86GtGH"]);
  const obj4 = { user: currentUser, onPress: null };
  const tmp10 = ref;
  const tmp11 = fn3;
  const tmp5 = initialTarget(onPress[11]);
  if ("edit" !== mode) {
    onPress = () => mode(fn[16]).openPremiumTryItOutModal("display-name-styles");
  }
  obj4.onPress = onPress;
  obj3.children = fn5(initialTarget(onPress[18]), obj4);
  const items1 = [fn5(mode(onPress[17]).EditableTileGroup, obj3), , , ];
  const obj5 = { heading: null, showNitroIcon: true, children: null };
  const intl2 = tmp6(tmp3[14]).intl;
  obj5.heading = intl2.string(mode(onPress[14]).t.DMeO2X);
  const obj6 = { primaryColor, secondaryColor, onPressPrimary: null, onPressSecondary: null };
  const tmp13 = initialTarget(onPress[18]);
  if ("edit" !== mode) {
    fn2 = () => mode(fn[16]).openPremiumTryItOutModal("theme-primary");
  }
  obj6.onPressPrimary = fn2;
  if ("edit" !== mode) {
    fn3 = () => mode(fn[16]).openPremiumTryItOutModal("theme-secondary");
  }
  obj6.onPressSecondary = fn3;
  obj5.children = fn5(initialTarget(onPress[19]), obj6);
  items1[1] = fn5(mode(onPress[17]).EditableTileGroup, obj5);
  const obj7 = { heading: null, showNitroIcon: true, children: null };
  const intl3 = tmp6(tmp3[14]).intl;
  obj7.heading = intl3.string(mode(onPress[14]).t.Vgdusv);
  const obj8 = { user: currentUser, onPress: null };
  const tmp2Result = initialTarget(onPress[19]);
  if ("edit" !== mode) {
    fn4 = () => mode(fn[16]).openPremiumTryItOutModal("banner");
  }
  obj8.onPress = fn4;
  obj7.children = fn5(initialTarget(onPress[20]), obj8);
  items1[2] = fn5(mode(onPress[17]).EditableTileGroup, obj7);
  const obj9 = { heading: null, showNitroIcon: true, children: null };
  const intl4 = tmp6(tmp3[14]).intl;
  obj9.heading = intl4.string(mode(onPress[14]).t.Dt3ZUr);
  const obj10 = { user: currentUser, onPress: null };
  if ("edit" !== mode) {
    fn5 = () => mode(fn[16]).openPremiumTryItOutModal("avatar");
  }
  obj10.onPress = fn5;
  obj9.children = fn5(mode(onPress[21]).TryItOutEditableTileAvatarButton, obj10);
  items1[3] = fn5(mode(onPress[17]).EditableTileGroup, obj9);
  obj2.children = items1;
  return tmp10(tmp11, obj2);
});