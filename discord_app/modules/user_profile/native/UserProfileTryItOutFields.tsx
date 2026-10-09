// === Module 14848: UserProfileTryItOutFields ===

// Module 14848 (UserProfileTryItOutFields)
import nativeDefault from "native" /* 587 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6678 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8299 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(8291).TrackUserProfileEditActions;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { gap: nativeDefault.space.PX_24 } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { gap: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutFields(currentUser) {
  const cResult = currentUser(initialTarget[8]).c(66);
  currentUser = currentUser.currentUser;
  const mode = currentUser.mode;
  initialTarget = currentUser.initialTarget;
  const tmp4 = closure_9();
  let obj = currentUser(initialTarget[8]);
  const navigation = currentUser(initialTarget[9]).useNavigation();
  let obj2 = currentUser(initialTarget[9]);
  ({ primaryColor, secondaryColor, avatarColors } = mode(initialTarget[10])(currentUser));
  if (cResult[0] === currentUser.id) {
    if (cResult[1] === navigation) {
      let tmp8 = cResult[2];
    }
    closure_4 = tmp8;
    if (cResult[3] !== navigation) {
      const fn2 = function f() {
        navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
      };
      cResult[3] = navigation;
      cResult[4] = fn2;
      let tmp9 = fn2;
    } else {
      tmp9 = cResult[4];
    }
    closure_5 = tmp9;
    if (cResult[5] === avatarColors) {
      if (cResult[6] === primaryColor) {
        if (cResult[7] === secondaryColor) {
          let tmp10 = cResult[8];
        }
        const tmp11 = tmp6(tmp2[14])(tmp10);
        const openPrimaryColorPicker = tmp11.openPrimaryColorPicker;
        const openSecondaryColorPicker = tmp11.openSecondaryColorPicker;
        if (cResult[9] !== currentUser) {
          const obj3 = { user: currentUser, isTryItOut: true };
          cResult[9] = currentUser;
          cResult[10] = obj3;
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[10];
        }
        const tmp13 = tmp6(tmp2[15])(tmp12);
        closure_8 = tmp13;
        if (cResult[11] !== currentUser) {
          const obj4 = { user: currentUser, isTryItOut: true };
          cResult[11] = currentUser;
          cResult[12] = obj4;
          let tmp14 = obj4;
        } else {
          tmp14 = cResult[12];
        }
        const tmp15 = tmp6(tmp2[16])(tmp14);
        closure_9 = tmp15;
        navigation.useRef(false);
        if (cResult[13] === initialTarget) {
          if (cResult[14] === mode) {
            if (cResult[15] === tmp15) {
              if (cResult[16] === tmp13) {
                if (cResult[17] === tmp9) {
                  if (cResult[18] === openPrimaryColorPicker) {
                    if (cResult[19] === openSecondaryColorPicker) {
                      let tmp16 = cResult[20];
                      let tmp17 = cResult[21];
                    }
                    const effect = obj6.useEffect(tmp16, tmp17);
                    const _Symbol = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(tmp2[17]).intl;
                      const stringResult = intl.string(tmp6(tmp2[18])["86GtGH"]);
                      cResult[22] = stringResult;
                      let tmp20 = stringResult;
                    } else {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] === "edit" === mode) {
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp9) {
                          let tmp23 = cResult[26];
                        }
                        if (cResult[27] === currentUser) {
                          if (cResult[28] === tmp23) {
                            let tmp24 = cResult[29];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl2 = tmp(tmp2[17]).intl;
                            const stringResult1 = intl2.string(tmp(tmp2[17]).t.DMeO2X);
                            cResult[30] = stringResult1;
                            let tmp27 = stringResult1;
                          } else {
                            tmp27 = cResult[30];
                          }
                          if (cResult[31] === tmp22) {
                            if (cResult[32] === tmp8) {
                              if (cResult[33] === openPrimaryColorPicker) {
                                let tmp29 = cResult[34];
                              }
                              if (cResult[35] === tmp22) {
                                if (cResult[36] === tmp8) {
                                  if (cResult[37] === openSecondaryColorPicker) {
                                    let tmp30 = cResult[38];
                                  }
                                  if (cResult[39] === primaryColor) {
                                    if (cResult[40] === secondaryColor) {
                                      if (cResult[41] === tmp29) {
                                        if (cResult[42] === tmp30) {
                                          let tmp31 = cResult[43];
                                        }
                                        const _Symbol3 = Symbol;
                                        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                          const intl3 = tmp(tmp2[17]).intl;
                                          const stringResult2 = intl3.string(tmp(tmp2[17]).t.Vgdusv);
                                          cResult[44] = stringResult2;
                                          let tmp34 = stringResult2;
                                        } else {
                                          tmp34 = cResult[44];
                                        }
                                        if (cResult[45] === tmp22) {
                                          if (cResult[46] === tmp8) {
                                            if (cResult[47] === tmp13) {
                                              let tmp36 = cResult[48];
                                            }
                                            if (cResult[49] === currentUser) {
                                              if (cResult[50] === tmp36) {
                                                let tmp37 = cResult[51];
                                              }
                                              const _Symbol4 = Symbol;
                                              if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                                const intl4 = tmp(tmp2[17]).intl;
                                                const stringResult3 = intl4.string(tmp(tmp2[17]).t.Dt3ZUr);
                                                cResult[52] = stringResult3;
                                                let tmp40 = stringResult3;
                                              } else {
                                                tmp40 = cResult[52];
                                              }
                                              if (cResult[53] === tmp22) {
                                                if (cResult[54] === tmp8) {
                                                  if (cResult[55] === tmp15) {
                                                    let tmp42 = cResult[56];
                                                  }
                                                  if (cResult[57] === currentUser) {
                                                    if (cResult[58] === tmp42) {
                                                      let tmp43 = cResult[59];
                                                    }
                                                    if (cResult[60] === tmp4.container) {
                                                      if (cResult[61] === tmp24) {
                                                        if (cResult[62] === tmp31) {
                                                          if (cResult[63] === tmp37) {
                                                            if (cResult[64] === tmp43) {
                                                              let tmp46 = cResult[65];
                                                            }
                                                            return tmp46;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj5 = { style: tmp4.container, children: null };
                                                    const items = [tmp24, tmp31, tmp37, tmp43];
                                                    obj5.children = items;
                                                    const tmp49 = closure_8(closure_4, obj5);
                                                    cResult[60] = tmp4.container;
                                                    class Y {
                                                      constructor() {
                                                        if ("edit" === mode) {
                                                          if (!closure_10.current) {
                                                            tmp = initialTarget;
                                                            str = "display-name-styles";
                                                            if ("display-name-styles" === initialTarget) {
                                                              tmp10 = closure_5;
                                                              tmp11 = closure_5();
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
                                                                      tmp2 = closure_9;
                                                                      tmp3 = closure_9();
                                                                    } else {
                                                                      return;
                                                                    }
                                                                  }
                                                                }
                                                                tmp4 = closure_8;
                                                                tmp5 = closure_8();
                                                              }
                                                            }
                                                            flag = true;
                                                            tmp12.current = true;
                                                          }
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    cResult[62] = tmp31;
                                                    cResult[63] = tmp37;
                                                    cResult[64] = tmp43;
                                                    cResult[65] = tmp49;
                                                    tmp46 = tmp49;
                                                  }
                                                  const obj7 = { heading: tmp40, showNitroIcon: true, children: null };
                                                  const obj8 = { user: currentUser, onPress: tmp42 };
                                                  obj7.children = openSecondaryColorPicker(tmp(tmp2[23]).TryItOutEditableTileAvatarButton, obj8);
                                                  cResult[57] = currentUser;
                                                  cResult[58] = tmp42;
                                                  class Y {
                                                    constructor() {
                                                      if ("edit" === mode) {
                                                        if (!closure_10.current) {
                                                          tmp = initialTarget;
                                                          str = "display-name-styles";
                                                          if ("display-name-styles" === initialTarget) {
                                                            tmp10 = closure_5;
                                                            tmp11 = closure_5();
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
                                                                    tmp2 = closure_9;
                                                                    tmp3 = closure_9();
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                              tmp4 = closure_8;
                                                              tmp5 = closure_8();
                                                            }
                                                          }
                                                          flag = true;
                                                          tmp12.current = true;
                                                        }
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  tmp43 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj7);
                                                  const tmp45 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj7);
                                                }
                                              }
                                              let fn7 = tmp15;
                                              if (!tmp22) {
                                                fn7 = () => closure_4("avatar");
                                              }
                                              cResult[53] = tmp22;
                                              cResult[54] = tmp8;
                                              cResult[55] = tmp15;
                                              cResult[56] = fn7;
                                              tmp42 = fn7;
                                            }
                                            const obj9 = { heading: tmp34, showNitroIcon: true, children: null };
                                            const obj10 = { user: currentUser, onPress: tmp36 };
                                            obj9.children = openSecondaryColorPicker(tmp6(tmp2[22]), obj10);
                                            cResult[49] = currentUser;
                                            cResult[50] = tmp36;
                                            class Y {
                                              constructor() {
                                                if ("edit" === mode) {
                                                  if (!closure_10.current) {
                                                    tmp = initialTarget;
                                                    str = "display-name-styles";
                                                    if ("display-name-styles" === initialTarget) {
                                                      tmp10 = closure_5;
                                                      tmp11 = closure_5();
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
                                                              tmp2 = closure_9;
                                                              tmp3 = closure_9();
                                                            } else {
                                                              return;
                                                            }
                                                          }
                                                        }
                                                        tmp4 = closure_8;
                                                        tmp5 = closure_8();
                                                      }
                                                    }
                                                    flag = true;
                                                    tmp12.current = true;
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            tmp37 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj9);
                                            const tmp39 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj9);
                                          }
                                        }
                                        let fn6 = tmp13;
                                        if (!tmp22) {
                                          fn6 = () => closure_4("banner");
                                        }
                                        cResult[45] = tmp22;
                                        cResult[46] = tmp8;
                                        cResult[47] = tmp13;
                                        cResult[48] = fn6;
                                        tmp36 = fn6;
                                      }
                                    }
                                  }
                                  const obj11 = { heading: tmp27, showNitroIcon: true, children: null };
                                  const obj12 = { primaryColor, secondaryColor, onPressPrimary: tmp29, onPressSecondary: tmp30 };
                                  obj11.children = openSecondaryColorPicker(tmp6(tmp2[21]), obj12);
                                  const tmp33 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj11);
                                  cResult[39] = primaryColor;
                                  class Y {
                                    constructor() {
                                      if ("edit" === mode) {
                                        if (!closure_10.current) {
                                          tmp = initialTarget;
                                          str = "display-name-styles";
                                          if ("display-name-styles" === initialTarget) {
                                            tmp10 = closure_5;
                                            tmp11 = closure_5();
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
                                                    tmp2 = closure_9;
                                                    tmp3 = closure_9();
                                                  } else {
                                                    return;
                                                  }
                                                }
                                              }
                                              tmp4 = closure_8;
                                              tmp5 = closure_8();
                                            }
                                          }
                                          flag = true;
                                          tmp12.current = true;
                                        }
                                      }
                                      return;
                                    }
                                  }
                                  cResult[41] = tmp29;
                                  cResult[42] = tmp30;
                                  cResult[43] = tmp33;
                                  tmp31 = tmp33;
                                }
                              }
                              let fn5 = openSecondaryColorPicker;
                              if (!tmp22) {
                                fn5 = () => closure_4("theme-secondary");
                              }
                              cResult[35] = tmp22;
                              cResult[36] = tmp8;
                              cResult[37] = openSecondaryColorPicker;
                              cResult[38] = fn5;
                              tmp30 = fn5;
                            }
                          }
                          let fn4 = openPrimaryColorPicker;
                          if (!tmp22) {
                            fn4 = () => closure_4("theme-primary");
                          }
                          cResult[31] = tmp22;
                          cResult[32] = tmp8;
                          cResult[33] = openPrimaryColorPicker;
                          cResult[34] = fn4;
                          tmp29 = fn4;
                        }
                        const obj13 = { heading: tmp20, showNitroIcon: true, children: null };
                        const obj14 = { user: currentUser, onPress: tmp23 };
                        obj13.children = openSecondaryColorPicker(tmp6(tmp2[20]), obj14);
                        cResult[27] = currentUser;
                        cResult[28] = tmp23;
                        class Y {
                          constructor() {
                            if ("edit" === mode) {
                              if (!closure_10.current) {
                                tmp = initialTarget;
                                str = "display-name-styles";
                                if ("display-name-styles" === initialTarget) {
                                  tmp10 = closure_5;
                                  tmp11 = closure_5();
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
                                          tmp2 = closure_9;
                                          tmp3 = closure_9();
                                        } else {
                                          return;
                                        }
                                      }
                                    }
                                    tmp4 = closure_8;
                                    tmp5 = closure_8();
                                  }
                                }
                                flag = true;
                                tmp12.current = true;
                              }
                            }
                            return;
                          }
                        }
                        tmp24 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj13);
                        const tmp26 = openSecondaryColorPicker(tmp(tmp2[19]).EditableTileGroup, obj13);
                      }
                    }
                    let fn3 = tmp9;
                    if ("edit" !== mode) {
                      fn3 = () => closure_4("display-name-styles");
                    }
                    cResult[23] = "edit" === mode;
                    class Y {
                      constructor() {
                        if ("edit" === mode) {
                          if (!closure_10.current) {
                            tmp = initialTarget;
                            str = "display-name-styles";
                            if ("display-name-styles" === initialTarget) {
                              tmp10 = closure_5;
                              tmp11 = closure_5();
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
                                      tmp2 = closure_9;
                                      tmp3 = closure_9();
                                    } else {
                                      return;
                                    }
                                  }
                                }
                                tmp4 = closure_8;
                                tmp5 = closure_8();
                              }
                            }
                            flag = true;
                            tmp12.current = true;
                          }
                        }
                        return;
                      }
                    }
                    cResult[25] = tmp9;
                    cResult[26] = fn3;
                    tmp23 = fn3;
                  }
                }
              }
            }
          }
        }
        class Y {
          constructor() {
            if ("edit" === mode) {
              if (!closure_10.current) {
                tmp = initialTarget;
                str = "display-name-styles";
                if ("display-name-styles" === initialTarget) {
                  tmp10 = closure_5;
                  tmp11 = closure_5();
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
                          tmp2 = closure_9;
                          tmp3 = closure_9();
                        } else {
                          return;
                        }
                      }
                    }
                    tmp4 = closure_8;
                    tmp5 = closure_8();
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
        cResult[13] = initialTarget;
        cResult[14] = mode;
        cResult[15] = tmp15;
        cResult[16] = tmp13;
        cResult[17] = tmp9;
        cResult[18] = openPrimaryColorPicker;
        cResult[19] = openSecondaryColorPicker;
        cResult[20] = Y;
        cResult[21] = items1;
        tmp17 = items1;
        tmp16 = Y;
        obj6 = navigation;
      }
    }
    const obj15 = { primaryColor, secondaryColor, avatarColors, onChangeColors: tmp(tmp2[13]).setTryItOutThemeColors };
    cResult[5] = avatarColors;
    cResult[6] = primaryColor;
    cResult[7] = secondaryColor;
    cResult[8] = obj15;
    tmp10 = obj15;
  }
  const fn = function y(initialTarget) {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: currentUser.id, action: closure_5.ENTER_TRY_OUT_PREMIUM_PREVIEW });
    const obj2 = { userId: currentUser.id, action: closure_5.ENTER_TRY_OUT_PREMIUM_PREVIEW };
    UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, { initialTarget });
  };
  cResult[0] = currentUser.id;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function UserProfileTryItOutFields(currentUser) {
  currentUser = currentUser.currentUser;
  const mode = currentUser.mode;
  const initialTarget = currentUser.initialTarget;
  let fn5;
  const tmp = fn5();
  const navigation = currentUser(initialTarget[9]).useNavigation();
  const tmp6 = mode(initialTarget[10])(currentUser);
  ({ primaryColor, secondaryColor } = tmp6);
  const items = [navigation, currentUser.id];
  closure_4 = navigation.useCallback((initialTarget) => {
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: currentUser.id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW });
    const obj2 = { userId: currentUser.id, action: constants.ENTER_TRY_OUT_PREMIUM_PREVIEW };
    UserSettingsModalActionCreatorsDefault.setSection(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT, { initialTarget });
  }, items);
  const items1 = [navigation];
  let fn = navigation.useCallback(() => {
    navigation.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, { isTryItOut: true });
  }, items1);
  let obj2 = { primaryColor, secondaryColor, avatarColors: tmp6.avatarColors, onChangeColors: null };
  let obj = currentUser(initialTarget[9]);
  obj2.onChangeColors = currentUser(initialTarget[13]).setTryItOutThemeColors;
  const tmp7Result = mode(initialTarget[14])(obj2);
  let fn2 = tmp7Result.openPrimaryColorPicker;
  let fn3 = tmp7Result.openSecondaryColorPicker;
  let fn4 = mode(initialTarget[15])({ user: currentUser, isTryItOut: true });
  fn5 = mode(initialTarget[16])({ user: currentUser, isTryItOut: true });
  navigation.useRef(false);
  const items2 = [mode, initialTarget, fn, fn2, fn3, fn4, fn5];
  const effect = navigation.useEffect(() => {
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
  }, items2);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { heading: null, showNitroIcon: true, children: null };
  const intl = currentUser(initialTarget[17]).intl;
  obj4.heading = intl.string(mode(initialTarget[18])["86GtGH"]);
  const obj5 = { user: currentUser, onPress: null };
  const tmp11 = fn4;
  const tmp12 = closure_4;
  const tmp7 = mode(initialTarget[14]);
  if ("edit" !== mode) {
    fn = () => closure_4("display-name-styles");
  }
  obj5.onPress = fn;
  obj4.children = fn3(mode(initialTarget[20]), obj5);
  const items3 = [fn3(currentUser(initialTarget[19]).EditableTileGroup, obj4), , , ];
  const obj6 = { heading: null, showNitroIcon: true, children: null };
  const intl2 = tmp2(tmp3[17]).intl;
  obj6.heading = intl2.string(currentUser(initialTarget[17]).t.DMeO2X);
  const obj7 = { primaryColor, secondaryColor, onPressPrimary: null, onPressSecondary: null };
  const tmp14 = mode(initialTarget[20]);
  if ("edit" !== mode) {
    fn2 = () => closure_4("theme-primary");
  }
  obj7.onPressPrimary = fn2;
  if ("edit" !== mode) {
    fn3 = () => closure_4("theme-secondary");
  }
  obj7.onPressSecondary = fn3;
  obj6.children = fn3(mode(initialTarget[21]), obj7);
  items3[1] = fn3(currentUser(initialTarget[19]).EditableTileGroup, obj6);
  const obj8 = { heading: null, showNitroIcon: true, children: null };
  const intl3 = tmp2(tmp3[17]).intl;
  obj8.heading = intl3.string(currentUser(initialTarget[17]).t.Vgdusv);
  const obj9 = { user: currentUser, onPress: null };
  const tmp5Result = mode(initialTarget[21]);
  if ("edit" !== mode) {
    fn4 = () => closure_4("banner");
  }
  obj9.onPress = fn4;
  obj8.children = fn3(mode(initialTarget[22]), obj9);
  items3[2] = fn3(currentUser(initialTarget[19]).EditableTileGroup, obj8);
  const obj10 = { heading: null, showNitroIcon: true, children: null };
  const intl4 = tmp2(tmp3[17]).intl;
  obj10.heading = intl4.string(currentUser(initialTarget[17]).t.Dt3ZUr);
  const obj11 = { user: currentUser, onPress: null };
  if ("edit" !== mode) {
    fn5 = () => closure_4("avatar");
  }
  obj11.onPress = fn5;
  obj10.children = fn3(currentUser(initialTarget[23]).TryItOutEditableTileAvatarButton, obj11);
  items3[3] = fn3(currentUser(initialTarget[19]).EditableTileGroup, obj10);
  obj3.children = items3;
  return tmp11(tmp12, obj3);
});