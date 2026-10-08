// discord_app/modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import _modDef13308 from "../../../../_runtime/metro/13308__.js";
import getDisplayNameStylesFontNameDefault from "../../display_name_styles/getDisplayNameStylesFontName.tsx";
import DisplayNameStylesColorSwatchDefault from "../../display_name_styles/native/DisplayNameStylesColorSwatch.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { ggContainer: null, noneIcon: null };
let size = {
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 4,
};
obj2.ggContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileDisplayNameStylesEditButton(user) {
      const cResult = user(isTryItOut[9]).c(38);
      user = user.user;
      const guildId = user.guildId;
      isTryItOut = user.isTryItOut;
      const tmp4 = closure_11();
      _slicedToArray = tmp4;
      let obj = user(isTryItOut[9]);
      const nativeStackNavigation = user(isTryItOut[10]).useNativeStackNavigation();
      let obj2 = user(isTryItOut[10]);
      const isDisplayNameStylesFlywheelSettersEnabled = user(
        isTryItOut[11],
      ).useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
      if (cResult[0] !== isDisplayNameStylesFlywheelSettersEnabled) {
        if (isDisplayNameStylesFlywheelSettersEnabled) {
          const items = [tmp(tmp2[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = isDisplayNameStylesFlywheelSettersEnabled;
        cResult[1] = items1;
      } else {
        const tmp9 = _slicedToArray(tmp(tmp2[13]).useSelectedDismissibleContent(cResult[1], undefined, true), 2);
        closure_5 = tmp10;
        const tmpResult = tmp(tmp2[13]);
        const guildMemberOrUserPendingDisplayNameStyles = tmp(tmp2[14]).useGuildMemberOrUserPendingDisplayNameStyles(
          user,
          guildId,
        );
        let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
        if (isTryItOut) {
          tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
        }
        if (cResult[2] === guildId) {
          if (cResult[3] === tryItOutDisplayNameStyles) {
            if (cResult[4] === user.id) {
              let tmp12 = cResult[5];
            }
            const tmp14 = guildId(tmp2[15])(tmp12);
            closure_6 = tmp14;
            let effectId;
            if (tmp14 != null) {
              effectId = tmp14.effectId;
            }
            if (effectId == null) {
              effectId = tmp(tmp2[17]).DisplayNameEffect.SOLID;
            }
            let str = tmp(tmp2[16]).useDisplayNameStylesEffectConfig(effectId);
            if (cResult[6] === guildId) {
              if (cResult[7] === isTryItOut) {
                if (cResult[8] === tmp10) {
                  if (cResult[9] === nativeStackNavigation) {
                    let tmp17 = cResult[10];
                  }
                  if (null != tmp14) {
                    if (cResult[12] !== tmp14.fontId) {
                      const intl2 = tmp(tmp2[19]).intl;
                      const stringResult = intl2.string(tmp13(tmp2[20])(tmp14.fontId));
                      cResult[12] = tmp14.fontId;
                      cResult[13] = stringResult;
                      let tmp21 = stringResult;
                    } else {
                      tmp21 = cResult[13];
                    }
                    const _HermesInternal = HermesInternal;
                    str = "";
                    const combined = "" + tmp21 + " + " + str.name;
                  } else {
                    const _Symbol = Symbol;
                    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(tmp2[19]).intl;
                      const stringResult1 = intl.string(tmp(tmp2[19]).t.PoWNfe);
                      cResult[11] = stringResult1;
                      let tmp19 = stringResult1;
                    } else {
                      tmp19 = cResult[11];
                    }
                    if (cResult[14] === tmp14) {
                      if (cResult[15] === guildId) {
                        if (cResult[16] === tmp4.ggContainer) {
                          if (cResult[17] === tmp4.noneIcon) {
                            if (cResult[18] === user.id) {
                              let tmp25 = cResult[19];
                            }
                            if (cResult[20] !== tmp14) {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                              cResult[20] = tmp14;
                              cResult[21] = R;
                            } else {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                            }
                            const _Symbol2 = Symbol;
                            class W {
                              constructor() {
                                if (null == closure_6) {
                                  tmp11 = jsx;
                                  tmp12 = closure_0;
                                  tmp13 = closure_2;
                                  obj1 = { source: null, style: null };
                                  tmp14 = closure_1;
                                  tmp15 = closure_2;
                                  obj1.source = closure_1(closure_2[22]);
                                  tmp16 = closure_3;
                                  obj1.style = closure_3.noneIcon;
                                  tmp10 = jsx(closure_0(closure_2[21]).Icon, obj1);
                                } else {
                                  tmp2 = jsx;
                                  tmp3 = View;
                                  obj = { style: null, children: null };
                                  tmp4 = closure_3;
                                  obj.style = closure_3.ggContainer;
                                  tmp5 = jsx;
                                  tmp6 = closure_1;
                                  tmp7 = closure_2;
                                  obj4 = {
                                    userId: null,
                                    guildId: null,
                                    userName: "Gg",
                                    pendingDisplayNameStyles: null,
                                    ignoreDisabledStylesSetting: true,
                                    variant: "heading-xl/semibold",
                                  };
                                  tmp8 = user;
                                  obj4.userId = user.id;
                                  tmp9 = guildId;
                                  obj4.guildId = guildId;
                                  obj4.pendingDisplayNameStyles = tmp;
                                  obj.children = jsx(closure_1(closure_2[23]), obj4);
                                  tmp10 = jsx(View, obj);
                                }
                                return tmp10;
                              }
                            }
                            const tmp30 =
                              tmp9[0] ===
                              tmp(tmp2[12]).DismissibleContent
                                .DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
                            if (cResult[23] !== tmp30) {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                              const obj4 = { showPremiumIcon: true, showNewBadge: tmp30 };
                              const tmp32 = jsx(tmp(tmp2[26]).UserProfileEditFormLabelBadges, {
                                showPremiumIcon: true,
                                showNewBadge: tmp30,
                              });
                              cResult[23] = tmp30;
                              class W {
                                constructor() {
                                  if (null == closure_6) {
                                    tmp11 = jsx;
                                    tmp12 = closure_0;
                                    tmp13 = closure_2;
                                    obj1 = { source: null, style: null };
                                    tmp14 = closure_1;
                                    tmp15 = closure_2;
                                    obj1.source = closure_1(closure_2[22]);
                                    tmp16 = closure_3;
                                    obj1.style = closure_3.noneIcon;
                                    tmp10 = jsx(closure_0(closure_2[21]).Icon, obj1);
                                  } else {
                                    tmp2 = jsx;
                                    tmp3 = View;
                                    obj = { style: null, children: null };
                                    tmp4 = closure_3;
                                    obj.style = closure_3.ggContainer;
                                    tmp5 = jsx;
                                    tmp6 = closure_1;
                                    tmp7 = closure_2;
                                    obj4 = {
                                      userId: null,
                                      guildId: null,
                                      userName: "Gg",
                                      pendingDisplayNameStyles: null,
                                      ignoreDisabledStylesSetting: true,
                                      variant: "heading-xl/semibold",
                                    };
                                    tmp8 = user;
                                    obj4.userId = user.id;
                                    tmp9 = guildId;
                                    obj4.guildId = guildId;
                                    obj4.pendingDisplayNameStyles = tmp;
                                    obj.children = jsx(closure_1(closure_2[23]), obj4);
                                    tmp10 = jsx(View, obj);
                                  }
                                  return tmp10;
                                }
                              }
                              cResult[24] = tmp32;
                            } else {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                            }
                            if (cResult[25] !== tmp19) {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                              tmp34[0] = tmp19;
                              cResult[25] = tmp19;
                              cResult[26] = tmp34;
                              class W {
                                constructor() {
                                  if (null == closure_6) {
                                    tmp11 = jsx;
                                    tmp12 = closure_0;
                                    tmp13 = closure_2;
                                    obj1 = { source: null, style: null };
                                    tmp14 = closure_1;
                                    tmp15 = closure_2;
                                    obj1.source = closure_1(closure_2[22]);
                                    tmp16 = closure_3;
                                    obj1.style = closure_3.noneIcon;
                                    tmp10 = jsx(closure_0(closure_2[21]).Icon, obj1);
                                  } else {
                                    tmp2 = jsx;
                                    tmp3 = View;
                                    obj = { style: null, children: null };
                                    tmp4 = closure_3;
                                    obj.style = closure_3.ggContainer;
                                    tmp5 = jsx;
                                    tmp6 = closure_1;
                                    tmp7 = closure_2;
                                    obj4 = {
                                      userId: null,
                                      guildId: null,
                                      userName: "Gg",
                                      pendingDisplayNameStyles: null,
                                      ignoreDisabledStylesSetting: true,
                                      variant: "heading-xl/semibold",
                                    };
                                    tmp8 = user;
                                    obj4.userId = user.id;
                                    tmp9 = guildId;
                                    obj4.guildId = guildId;
                                    obj4.pendingDisplayNameStyles = tmp;
                                    obj.children = jsx(closure_1(closure_2[23]), obj4);
                                    tmp10 = jsx(View, obj);
                                  }
                                  return tmp10;
                                }
                              }
                            } else {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                            }
                            if (cResult[27] !== tmp25) {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                              cResult[27] = tmp25;
                              cResult[28] = tmp36;
                            } else {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                            }
                            if (cResult[29] !== R) {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                              cResult[29] = R;
                              cResult[30] = tmp38;
                            } else {
                              class R {
                                constructor() {
                                  tmp = closure_6;
                                  tmp3Result = null;
                                  if (null != closure_6) {
                                    tmp4 = closure_1;
                                    tmp5 = closure_2;
                                    tmp3 = jsx;
                                    colors = undefined;
                                    tmp6 = closure_1(closure_2[24]);
                                    if (tmp != null) {
                                      colors = tmp.colors;
                                    }
                                    if (colors == null) {
                                      colors = [];
                                    }
                                    obj = { colors: null, effectId: null };
                                    obj.colors = colors;
                                    effectId = undefined;
                                    if (tmp != null) {
                                      effectId = tmp.effectId;
                                    }
                                    obj.effectId = effectId;
                                    tmp3Result = tmp3(tmp6, obj);
                                  }
                                  return tmp3Result;
                                }
                              }
                            }
                            class M {
                              constructor() {
                                obj = closure_1(closure_2[18]);
                                trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                                obj1 = { guildId, isTryItOut };
                                navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                                tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                                return;
                              }
                            }
                            const obj5 = {
                              label: tmp29,
                              labelTrailing: tmp31,
                              buttonText: tmp19,
                              accessibilityValue: tmp33,
                              onPress: tmp17,
                              leading: tmp36,
                              trailing: tmp38,
                            };
                            const tmp41 = jsx(tmp(tmp2[26]).UserProfileEditFormButton, {
                              label: tmp29,
                              labelTrailing: tmp31,
                              buttonText: tmp19,
                              accessibilityValue: tmp33,
                              onPress: tmp17,
                              leading: tmp36,
                              trailing: tmp38,
                            });
                            cResult[31] = tmp19;
                            cResult[32] = tmp17;
                            cResult[33] = tmp31;
                            cResult[34] = tmp33;
                            cResult[35] = tmp36;
                            cResult[36] = tmp38;
                            cResult[37] = tmp41;
                          }
                        }
                      }
                    }
                    class W {
                      constructor() {
                        if (null == closure_6) {
                          tmp11 = jsx;
                          tmp12 = closure_0;
                          tmp13 = closure_2;
                          obj1 = { source: null, style: null };
                          tmp14 = closure_1;
                          tmp15 = closure_2;
                          obj1.source = closure_1(closure_2[22]);
                          tmp16 = closure_3;
                          obj1.style = closure_3.noneIcon;
                          tmp10 = jsx(closure_0(closure_2[21]).Icon, obj1);
                        } else {
                          tmp2 = jsx;
                          tmp3 = View;
                          obj = { style: null, children: null };
                          tmp4 = closure_3;
                          obj.style = closure_3.ggContainer;
                          tmp5 = jsx;
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj4 = {
                            userId: null,
                            guildId: null,
                            userName: "Gg",
                            pendingDisplayNameStyles: null,
                            ignoreDisabledStylesSetting: true,
                            variant: "heading-xl/semibold",
                          };
                          tmp8 = user;
                          obj4.userId = user.id;
                          tmp9 = guildId;
                          obj4.guildId = guildId;
                          obj4.pendingDisplayNameStyles = tmp;
                          obj.children = jsx(closure_1(closure_2[23]), obj4);
                          tmp10 = jsx(View, obj);
                        }
                        return tmp10;
                      }
                    }
                    cResult[14] = tmp14;
                    cResult[15] = guildId;
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[18]);
                        trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                        obj1 = { guildId, isTryItOut };
                        navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                        tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                        return;
                      }
                    }
                    cResult[17] = tmp4.noneIcon;
                    cResult[18] = user.id;
                    cResult[19] = W;
                    tmp25 = W;
                  }
                }
              }
            }
            class M {
              constructor() {
                obj = closure_1(closure_2[18]);
                trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                obj1 = { guildId, isTryItOut };
                navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                return;
              }
            }
            cResult[6] = guildId;
            cResult[7] = isTryItOut;
            cResult[8] = tmp10;
            cResult[9] = nativeStackNavigation;
            cResult[10] = M;
            tmp17 = M;
            tmp13 = guildId;
            const tmpResult4 = tmp(tmp2[16]);
          }
        }
        const obj6 = {
          userId: user.id,
          guildId,
          pendingDisplayNameStyles: tryItOutDisplayNameStyles,
          ignoreDisabledStylesSetting: true,
        };
        cResult[2] = guildId;
        cResult[3] = tryItOutDisplayNameStyles;
        cResult[4] = user.id;
        cResult[5] = obj6;
        tmp12 = obj6;
        const tmpResult3 = tmp(tmp2[14]);
      }
      let obj3 = user(isTryItOut[11]);
    }
  : function UserProfileDisplayNameStylesEditButton(user) {
      user = user.user;
      const guildId = user.guildId;
      const isTryItOut = user.isTryItOut;
      closure_5 = undefined;
      closure_6 = undefined;
      let displayNameStylesEffectConfig;
      const tmp = closure_11();
      _slicedToArray = tmp;
      const nativeStackNavigation = user(isTryItOut[10]).useNativeStackNavigation();
      let obj = user(isTryItOut[10]);
      const isDisplayNameStylesFlywheelSettersEnabled = user(
        isTryItOut[11],
      ).useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
      let obj2 = user(isTryItOut[11]);
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        const items = [tmp2(tmp3[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
        let items1 = items;
      } else {
        items1 = [];
      }
      let tmp6 = _slicedToArray(user(isTryItOut[13]).useSelectedDismissibleContent(items1, undefined, true), 2);
      closure_5 = tmp7;
      let obj3 = user(isTryItOut[13]);
      const guildMemberOrUserPendingDisplayNameStyles = user(
        isTryItOut[14],
      ).useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
      ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
      const obj4 = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
      const tmp2Result = user(isTryItOut[14]);
      const tmp9 = guildId;
      if (isTryItOut) {
        pendingDisplayNameStyles = tryItOutDisplayNameStyles;
      }
      obj4.pendingDisplayNameStyles = pendingDisplayNameStyles;
      const tmp10Result = guildId(isTryItOut[15])(obj4);
      closure_6 = tmp10Result;
      let tmp10 = guildId(isTryItOut[15]);
      let effectId;
      if (tmp10Result != null) {
        effectId = tmp10Result.effectId;
      }
      if (effectId == null) {
        effectId = tmp2(tmp3[17]).DisplayNameEffect.SOLID;
      }
      displayNameStylesEffectConfig = user(isTryItOut[16]).useDisplayNameStylesEffectConfig(effectId);
      const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp6[1]];
      const items3 = [displayNameStylesEffectConfig, tmp10Result];
      const tmp2Result2 = user(isTryItOut[16]);
      const tmp15 = closure_5(() => {
        if (null == closure_6) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.PoWNfe);
        } else {
          const intl = util.intl;
          const _HermesInternal = HermesInternal;
          stringResult =
            "" +
            intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) +
            " + " +
            displayNameStylesEffectConfig.name;
        }
        return stringResult;
      }, items3);
      const items4 = [tmp10Result, guildId, user.id, tmp];
      const items5 = [tmp10Result];
      const tmp14 = nativeStackNavigation(() => {
        AnalyticsUtilsDefault.track(constants.DISPLAY_NAME_STYLES_FROM_SETTINGS);
        nativeStackNavigation.navigate(constants2.DISPLAY_NAME_STYLES, { guildId, isTryItOut });
        closure_5(ContentDismissActionType.TAKE_ACTION);
      }, items2);
      const tmp16 = nativeStackNavigation(() => {
        if (null == closure_6) {
          const obj2 = { source: _modDef13308, style: closure_3.noneIcon };
          let tmp10 = jsx(native.Icon, { source: _modDef13308, style: closure_3.noneIcon });
        } else {
          const obj = { style: closure_3.ggContainer, children: null };
          const obj3 = {
            userId: user.id,
            guildId,
            userName: "Gg",
            pendingDisplayNameStyles: tmp,
            ignoreDisabledStylesSetting: true,
            variant: "heading-xl/semibold",
          };
          obj.children = jsx(UsernameWithEffectsDefault, {
            userId: user.id,
            guildId,
            userName: "Gg",
            pendingDisplayNameStyles: tmp,
            ignoreDisabledStylesSetting: true,
            variant: "heading-xl/semibold",
          });
          tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
        }
        return tmp10;
      }, items4);
      const obj5 = {
        label: null,
        labelTrailing: null,
        buttonText: null,
        accessibilityValue: null,
        onPress: null,
        leading: null,
        trailing: null,
      };
      let intl = tmp2(tmp3[19]).intl;
      obj5.label = intl.string(tmp9(isTryItOut[25])["86GtGH"]);
      const tmp17 = nativeStackNavigation(() => {
        let tmp3Result = null;
        if (null != closure_6) {
          let colors;
          if (closure_6 != null) {
            colors = closure_6.colors;
          }
          if (colors == null) {
            colors = [];
          }
          const obj = { colors, effectId: null };
          let effectId;
          if (closure_6 != null) {
            effectId = closure_6.effectId;
          }
          obj.effectId = effectId;
          tmp3Result = jsx(DisplayNameStylesColorSwatchDefault, { colors, effectId: null });
        }
        return tmp3Result;
      }, items5);
      obj5.labelTrailing = jsx(user(isTryItOut[26]).UserProfileEditFormLabelBadges, {
        showPremiumIcon: true,
        showNewBadge:
          tmp6[0] ===
          user(isTryItOut[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE,
      });
      obj5.buttonText = tmp15;
      obj5.accessibilityValue = { text: tmp15 };
      obj5.onPress = tmp14;
      obj5.leading = tmp16();
      obj5.trailing = tmp17();
      return jsx(user(isTryItOut[26]).UserProfileEditFormButton, {
        label: null,
        labelTrailing: null,
        buttonText: null,
        accessibilityValue: null,
        onPress: null,
        leading: null,
        trailing: null,
      });
    };
