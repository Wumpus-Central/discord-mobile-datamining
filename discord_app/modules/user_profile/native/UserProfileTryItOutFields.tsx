// === Module 14907: UserProfileTryItOutFields ===

// Module 14907 (UserProfileTryItOutFields)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;

const require = fn;
let View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(initialTarget) {
  const cResult = mode(navigation[7]).c(63);
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  const tmp4 = closure_8();
  const obj = mode(navigation[7]);
  navigation = mode(navigation[8]).useNavigation();
  const obj2 = mode(navigation[8]);
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(navigation[9])(currentUser));
  const tmp8 = initialTarget(navigation[10])(currentUser.id);
  noop = tmp8;
  if (cResult[0] !== navigation) {
    const fn = function y() {
      navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  View = tmp9;
  if (cResult[2] === avatarColors) {
    if (cResult[3] === primaryColor) {
      if (cResult[4] === secondaryColor) {
        let tmp10 = cResult[5];
      }
      const tmp11 = tmp6(tmp2[12])(tmp10);
      const openPrimaryColorPicker = tmp11.openPrimaryColorPicker;
      const openSecondaryColorPicker = tmp11.openSecondaryColorPicker;
      if (cResult[6] !== currentUser) {
        const obj3 = { user: currentUser, isTryItOut: true };
        cResult[6] = currentUser;
        cResult[7] = obj3;
        let tmp12 = obj3;
      } else {
        tmp12 = cResult[7];
      }
      const tmp13 = tmp6(tmp2[13])(tmp12);
      closure_7 = tmp13;
      if (cResult[8] !== currentUser) {
        const obj4 = { user: currentUser, isTryItOut: true };
        cResult[8] = currentUser;
        cResult[9] = obj4;
        let tmp14 = obj4;
      } else {
        tmp14 = cResult[9];
      }
      const tmp15 = tmp6(tmp2[14])(tmp14);
      closure_8 = tmp15;
      noop.useRef(false);
      if (cResult[10] === initialTarget) {
        if (cResult[11] === mode) {
          if (cResult[12] === tmp15) {
            if (cResult[13] === tmp13) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === openPrimaryColorPicker) {
                  if (cResult[16] === openSecondaryColorPicker) {
                    let tmp16 = cResult[17];
                    let tmp17 = cResult[18];
                  }
                  const effect = obj6.useEffect(tmp16, tmp17);
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[15]).intl;
                    const stringResult = intl.string(tmp6(tmp2[16])["86GtGH"]);
                    cResult[19] = stringResult;
                    let tmp20 = stringResult;
                  } else {
                    tmp20 = cResult[19];
                  }
                  if (cResult[20] === "edit" === mode) {
                    if (cResult[21] === tmp8) {
                      if (cResult[22] === tmp9) {
                        let tmp23 = cResult[23];
                      }
                      if (cResult[24] === currentUser) {
                        if (cResult[25] === tmp23) {
                          let tmp24 = cResult[26];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(tmp2[15]).intl;
                          const stringResult1 = intl2.string(tmp(tmp2[15]).t.DMeO2X);
                          cResult[27] = stringResult1;
                          let tmp27 = stringResult1;
                        } else {
                          tmp27 = cResult[27];
                        }
                        if (cResult[28] === tmp22) {
                          if (cResult[29] === tmp8) {
                            if (cResult[30] === openPrimaryColorPicker) {
                              let tmp29 = cResult[31];
                            }
                            if (cResult[32] === tmp22) {
                              if (cResult[33] === tmp8) {
                                if (cResult[34] === openSecondaryColorPicker) {
                                  let tmp30 = cResult[35];
                                }
                                if (cResult[36] === primaryColor) {
                                  if (cResult[37] === secondaryColor) {
                                    if (cResult[38] === tmp29) {
                                      if (cResult[39] === tmp30) {
                                        let tmp31 = cResult[40];
                                      }
                                      const _Symbol3 = Symbol;
                                      if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                        const intl3 = tmp(tmp2[15]).intl;
                                        const stringResult2 = intl3.string(tmp(tmp2[15]).t.Vgdusv);
                                        cResult[41] = stringResult2;
                                        let tmp34 = stringResult2;
                                      } else {
                                        tmp34 = cResult[41];
                                      }
                                      if (cResult[42] === tmp22) {
                                        if (cResult[43] === tmp8) {
                                          if (cResult[44] === tmp13) {
                                            let tmp36 = cResult[45];
                                          }
                                          if (cResult[46] === currentUser) {
                                            if (cResult[47] === tmp36) {
                                              let tmp37 = cResult[48];
                                            }
                                            const _Symbol4 = Symbol;
                                            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(tmp2[15]).intl;
                                              const stringResult3 = intl4.string(tmp(tmp2[15]).t.Dt3ZUr);
                                              cResult[49] = stringResult3;
                                              let tmp40 = stringResult3;
                                            } else {
                                              tmp40 = cResult[49];
                                            }
                                            if (cResult[50] === tmp22) {
                                              if (cResult[51] === tmp8) {
                                                if (cResult[52] === tmp15) {
                                                  let tmp42 = cResult[53];
                                                }
                                                if (cResult[54] === currentUser) {
                                                  if (cResult[55] === tmp42) {
                                                    let tmp43 = cResult[56];
                                                  }
                                                  if (cResult[57] === tmp4.container) {
                                                    if (cResult[58] === tmp24) {
                                                      if (cResult[59] === tmp31) {
                                                        if (cResult[60] === tmp37) {
                                                          if (cResult[61] === tmp43) {
                                                            let tmp46 = cResult[62];
                                                          }
                                                          return tmp46;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj5 = { style: tmp4.container, children: null };
                                                  const items = [tmp24, tmp31, tmp37, tmp43];
                                                  obj5.children = items;
                                                  const tmp49 = closure_7(View, obj5);
                                                  cResult[57] = tmp4.container;
                                                  class D {
                                                    constructor() {
                                                      if ("edit" === mode) {
                                                        if (!closure_9.current) {
                                                          tmp = initialTarget;
                                                          str = "display-name-styles";
                                                          if ("display-name-styles" === initialTarget) {
                                                            tmp10 = closure_4;
                                                            tmp11 = closure_4();
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
                                                                    tmp2 = closure_8;
                                                                    tmp3 = closure_8();
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                              tmp4 = closure_7;
                                                              tmp5 = closure_7();
                                                            }
                                                          }
                                                          flag = true;
                                                          tmp12.current = true;
                                                        }
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  cResult[59] = tmp31;
                                                  cResult[60] = tmp37;
                                                  cResult[61] = tmp43;
                                                  cResult[62] = tmp49;
                                                  tmp46 = tmp49;
                                                }
                                                const obj7 = { heading: tmp40, showNitroIcon: true, children: null };
                                                const obj8 = { user: currentUser, onPress: tmp42 };
                                                obj7.children = openSecondaryColorPicker(tmp(tmp2[21]).TryItOutEditableTileAvatarButton, obj8);
                                                cResult[54] = currentUser;
                                                cResult[55] = tmp42;
                                                class D {
                                                  constructor() {
                                                    if ("edit" === mode) {
                                                      if (!closure_9.current) {
                                                        tmp = initialTarget;
                                                        str = "display-name-styles";
                                                        if ("display-name-styles" === initialTarget) {
                                                          tmp10 = closure_4;
                                                          tmp11 = closure_4();
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
                                                                  tmp2 = closure_8;
                                                                  tmp3 = closure_8();
                                                                } else {
                                                                  return;
                                                                }
                                                              }
                                                            }
                                                            tmp4 = closure_7;
                                                            tmp5 = closure_7();
                                                          }
                                                        }
                                                        flag = true;
                                                        tmp12.current = true;
                                                      }
                                                    }
                                                    return;
                                                  }
                                                }
                                                tmp43 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj7);
                                                const tmp45 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj7);
                                              }
                                            }
                                            let fn6 = tmp15;
                                            if (!tmp22) {
                                              fn6 = () => closure_3("avatar");
                                            }
                                            cResult[50] = tmp22;
                                            cResult[51] = tmp8;
                                            cResult[52] = tmp15;
                                            cResult[53] = fn6;
                                            tmp42 = fn6;
                                          }
                                          const obj9 = { heading: tmp34, showNitroIcon: true, children: null };
                                          const obj10 = { user: currentUser, onPress: tmp36 };
                                          obj9.children = openSecondaryColorPicker(tmp6(tmp2[20]), obj10);
                                          cResult[46] = currentUser;
                                          cResult[47] = tmp36;
                                          class D {
                                            constructor() {
                                              if ("edit" === mode) {
                                                if (!closure_9.current) {
                                                  tmp = initialTarget;
                                                  str = "display-name-styles";
                                                  if ("display-name-styles" === initialTarget) {
                                                    tmp10 = closure_4;
                                                    tmp11 = closure_4();
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
                                                            tmp2 = closure_8;
                                                            tmp3 = closure_8();
                                                          } else {
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      tmp4 = closure_7;
                                                      tmp5 = closure_7();
                                                    }
                                                  }
                                                  flag = true;
                                                  tmp12.current = true;
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          tmp37 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj9);
                                          const tmp39 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj9);
                                        }
                                      }
                                      let fn5 = tmp13;
                                      if (!tmp22) {
                                        fn5 = () => closure_3("banner");
                                      }
                                      cResult[42] = tmp22;
                                      cResult[43] = tmp8;
                                      cResult[44] = tmp13;
                                      cResult[45] = fn5;
                                      tmp36 = fn5;
                                    }
                                  }
                                }
                                const obj11 = { heading: tmp27, showNitroIcon: true, children: null };
                                const obj12 = { primaryColor, secondaryColor, onPressPrimary: tmp29, onPressSecondary: tmp30 };
                                obj11.children = openSecondaryColorPicker(tmp6(tmp2[19]), obj12);
                                const tmp33 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj11);
                                cResult[36] = primaryColor;
                                class D {
                                  constructor() {
                                    if ("edit" === mode) {
                                      if (!closure_9.current) {
                                        tmp = initialTarget;
                                        str = "display-name-styles";
                                        if ("display-name-styles" === initialTarget) {
                                          tmp10 = closure_4;
                                          tmp11 = closure_4();
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
                                                  tmp2 = closure_8;
                                                  tmp3 = closure_8();
                                                } else {
                                                  return;
                                                }
                                              }
                                            }
                                            tmp4 = closure_7;
                                            tmp5 = closure_7();
                                          }
                                        }
                                        flag = true;
                                        tmp12.current = true;
                                      }
                                    }
                                    return;
                                  }
                                }
                                cResult[38] = tmp29;
                                cResult[39] = tmp30;
                                cResult[40] = tmp33;
                                tmp31 = tmp33;
                              }
                            }
                            let fn4 = openSecondaryColorPicker;
                            if (!tmp22) {
                              fn4 = () => closure_3("theme-secondary");
                            }
                            cResult[32] = tmp22;
                            cResult[33] = tmp8;
                            cResult[34] = openSecondaryColorPicker;
                            cResult[35] = fn4;
                            tmp30 = fn4;
                          }
                        }
                        let fn3 = openPrimaryColorPicker;
                        if (!tmp22) {
                          fn3 = () => closure_3("theme-primary");
                        }
                        cResult[28] = tmp22;
                        cResult[29] = tmp8;
                        cResult[30] = openPrimaryColorPicker;
                        cResult[31] = fn3;
                        tmp29 = fn3;
                      }
                      const obj13 = { heading: tmp20, showNitroIcon: true, children: null };
                      const obj14 = { user: currentUser, onPress: tmp23 };
                      obj13.children = openSecondaryColorPicker(tmp6(tmp2[18]), obj14);
                      cResult[24] = currentUser;
                      cResult[25] = tmp23;
                      class D {
                        constructor() {
                          if ("edit" === mode) {
                            if (!closure_9.current) {
                              tmp = initialTarget;
                              str = "display-name-styles";
                              if ("display-name-styles" === initialTarget) {
                                tmp10 = closure_4;
                                tmp11 = closure_4();
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
                                        tmp2 = closure_8;
                                        tmp3 = closure_8();
                                      } else {
                                        return;
                                      }
                                    }
                                  }
                                  tmp4 = closure_7;
                                  tmp5 = closure_7();
                                }
                              }
                              flag = true;
                              tmp12.current = true;
                            }
                          }
                          return;
                        }
                      }
                      tmp24 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj13);
                      const tmp26 = openSecondaryColorPicker(tmp(tmp2[17]).EditableTileGroup, obj13);
                    }
                  }
                  let fn2 = tmp9;
                  if ("edit" !== mode) {
                    fn2 = () => closure_3("display-name-styles");
                  }
                  cResult[20] = "edit" === mode;
                  class D {
                    constructor() {
                      if ("edit" === mode) {
                        if (!closure_9.current) {
                          tmp = initialTarget;
                          str = "display-name-styles";
                          if ("display-name-styles" === initialTarget) {
                            tmp10 = closure_4;
                            tmp11 = closure_4();
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
                                    tmp2 = closure_8;
                                    tmp3 = closure_8();
                                  } else {
                                    return;
                                  }
                                }
                              }
                              tmp4 = closure_7;
                              tmp5 = closure_7();
                            }
                          }
                          flag = true;
                          tmp12.current = true;
                        }
                      }
                      return;
                    }
                  }
                  cResult[22] = tmp9;
                  cResult[23] = fn2;
                  tmp23 = fn2;
                }
              }
            }
          }
        }
      }
      class D {
        constructor() {
          if ("edit" === mode) {
            if (!closure_9.current) {
              tmp = initialTarget;
              str = "display-name-styles";
              if ("display-name-styles" === initialTarget) {
                tmp10 = closure_4;
                tmp11 = closure_4();
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
                        tmp2 = closure_8;
                        tmp3 = closure_8();
                      } else {
                        return;
                      }
                    }
                  }
                  tmp4 = closure_7;
                  tmp5 = closure_7();
                }
              }
              flag = true;
              tmp12.current = true;
            }
          }
          return;
        }
      }
      const items1 = [mode, initialTarget, tmp9, openPrimaryColorPicker, openSecondaryColorPicker, tmp13, tmp15];
      cResult[10] = initialTarget;
      cResult[11] = mode;
      cResult[12] = tmp15;
      cResult[13] = tmp13;
      cResult[14] = tmp9;
      cResult[15] = openPrimaryColorPicker;
      cResult[16] = openSecondaryColorPicker;
      cResult[17] = D;
      cResult[18] = items1;
      tmp17 = items1;
      tmp16 = D;
      obj6 = noop;
    }
  }
  const obj15 = { primaryColor, secondaryColor, avatarColors, onChangeColors: mode(navigation[11]).setTryItOutThemeColors };
  cResult[2] = avatarColors;
  cResult[3] = primaryColor;
  cResult[4] = secondaryColor;
  cResult[5] = obj15;
  tmp10 = obj15;
}) : (function UserProfileTryItOutFields(initialTarget) {
  ({ currentUser, mode } = initialTarget);
  initialTarget = initialTarget.initialTarget;
  let navigation;
  let fn5;
  const tmp = fn5();
  navigation = mode(navigation[8]).useNavigation();
  const obj = mode(navigation[8]);
  ({ primaryColor, secondaryColor, avatarColors } = initialTarget(navigation[9])(currentUser));
  noop = initialTarget(navigation[10])(currentUser.id);
  const items = [navigation];
  let onPress = noop.useCallback(() => {
    navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
  }, items);
  const obj2 = { primaryColor, secondaryColor, avatarColors, onChangeColors: null };
  const tmp6 = initialTarget(navigation[9])(currentUser);
  obj2.onChangeColors = mode(navigation[11]).setTryItOutThemeColors;
  const tmp7Result = initialTarget(navigation[12])(obj2);
  let fn2 = tmp7Result.openPrimaryColorPicker;
  let fn3 = tmp7Result.openSecondaryColorPicker;
  let fn4 = initialTarget(navigation[13])({ user: currentUser, isTryItOut: true });
  fn5 = initialTarget(navigation[14])({ user: currentUser, isTryItOut: true });
  noop.useRef(false);
  const items1 = [mode, initialTarget, onPress, fn2, fn3, fn4, fn5];
  const effect = noop.useEffect(() => {
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
  }, items1);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { heading: null, showNitroIcon: true, children: null };
  const intl = mode(navigation[15]).intl;
  obj4.heading = intl.string(initialTarget(navigation[16])["86GtGH"]);
  const obj5 = { user: currentUser, onPress: null };
  const tmp11 = fn4;
  const tmp12 = onPress;
  const tmp7 = initialTarget(navigation[12]);
  if ("edit" !== mode) {
    onPress = () => closure_3("display-name-styles");
  }
  obj5.onPress = onPress;
  obj4.children = fn3(initialTarget(navigation[18]), obj5);
  const items2 = [fn3(mode(navigation[17]).EditableTileGroup, obj4), , , ];
  const obj6 = { heading: null, showNitroIcon: true, children: null };
  const intl2 = tmp2(tmp3[15]).intl;
  obj6.heading = intl2.string(mode(navigation[15]).t.DMeO2X);
  const obj7 = { primaryColor, secondaryColor, onPressPrimary: null, onPressSecondary: null };
  const tmp14 = initialTarget(navigation[18]);
  if ("edit" !== mode) {
    fn2 = () => closure_3("theme-primary");
  }
  obj7.onPressPrimary = fn2;
  if ("edit" !== mode) {
    fn3 = () => closure_3("theme-secondary");
  }
  obj7.onPressSecondary = fn3;
  obj6.children = fn3(initialTarget(navigation[19]), obj7);
  items2[1] = fn3(mode(navigation[17]).EditableTileGroup, obj6);
  const obj8 = { heading: null, showNitroIcon: true, children: null };
  const intl3 = tmp2(tmp3[15]).intl;
  obj8.heading = intl3.string(mode(navigation[15]).t.Vgdusv);
  const obj9 = { user: currentUser, onPress: null };
  const tmp5Result = initialTarget(navigation[19]);
  if ("edit" !== mode) {
    fn4 = () => closure_3("banner");
  }
  obj9.onPress = fn4;
  obj8.children = fn3(initialTarget(navigation[20]), obj9);
  items2[2] = fn3(mode(navigation[17]).EditableTileGroup, obj8);
  const obj10 = { heading: null, showNitroIcon: true, children: null };
  const intl4 = tmp2(tmp3[15]).intl;
  obj10.heading = intl4.string(mode(navigation[15]).t.Dt3ZUr);
  const obj11 = { user: currentUser, onPress: null };
  if ("edit" !== mode) {
    fn5 = () => closure_3("avatar");
  }
  obj11.onPress = fn5;
  obj10.children = fn3(mode(navigation[21]).TryItOutEditableTileAvatarButton, obj11);
  items2[3] = fn3(mode(navigation[17]).EditableTileGroup, obj10);
  obj3.children = items2;
  return tmp11(tmp12, obj3);
});