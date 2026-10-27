// === Module 15902: UserProfileDisplayNameStylesEditButton ===

// Module 15902 (UserProfileDisplayNameStylesEditButton)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10664 */;
import _modDef14533 from "module_14533" /* 14533 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 15907 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 15908 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1084);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const ContentDismissActionType = fn(4821).ContentDismissActionType;
const HexagonCampaignConstants = fn(4997);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c10, HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4972);
let obj2 = { ggContainer: null, noneIcon: null };
let size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
obj2.ggContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileDisplayNameStylesEditButton(user) {
  const cResult = user(isTryItOut[10]).c(42);
  user = user.user;
  const guildId = user.guildId;
  isTryItOut = user.isTryItOut;
  const tmp4 = closure_14();
  _slicedToArray = tmp4;
  let obj = user(isTryItOut[10]);
  const nativeStackNavigation = user(isTryItOut[11]).useNativeStackNavigation();
  let obj2 = user(isTryItOut[11]);
  const isDisplayNameStylesFlywheelSettersEnabled = user(isTryItOut[12]).useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  if (cResult[0] !== isDisplayNameStylesFlywheelSettersEnabled) {
    if (isDisplayNameStylesFlywheelSettersEnabled) {
      const items = [tmp(tmp2[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = isDisplayNameStylesFlywheelSettersEnabled;
    cResult[1] = items1;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { bypassAutoDismiss: true };
      cResult[2] = obj4;
      let tmp9 = obj4;
    } else {
      tmp9 = cResult[2];
    }
    [first] = tmp(tmp2[14]).useSelectedDismissibleContent(cResult[1], tmp9);
    closure_5 = tmp13;
    const tmpResult = tmp(tmp2[14]);
    const guildMemberOrUserPendingDisplayNameStyles = tmp(tmp2[15]).useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
    let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
    if (isTryItOut) {
      tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
    }
    if (cResult[3] === guildId) {
      if (cResult[4] === tryItOutDisplayNameStyles) {
        if (cResult[5] === user.id) {
          let tmp15 = cResult[6];
        }
        const tmp17 = guildId(tmp2[16])(tmp15);
        closure_6 = tmp17;
        let effectId;
        if (tmp17 != null) {
          effectId = tmp17.effectId;
        }
        if (effectId == null) {
          effectId = tmp(tmp2[18]).DisplayNameEffect.SOLID;
        }
        let str2 = tmp(tmp2[17]).useDisplayNameStylesEffectConfig(effectId);
        const tmpResult7 = tmp(tmp2[17]);
        let tmp22 = tmp(tmp2[19]).useHexagonCampaignPerkAvailability(constants3.DISPLAY_NAME_STYLE, "UserProfileDisplayNameStylesEditButton") === constants4.SELECTABLE;
        if (tmp22) {
          tmp22 = true !== isTryItOut;
        }
        if (tmp22) {
          let fontId;
          if (tmp17 != null) {
            fontId = tmp17.fontId;
          }
          tmp22 = fontId !== closure_10;
        }
        const tmpResult8 = tmp(tmp2[19]);
        const trackHexagonCampaignContentViewed = tmp(tmp2[20]).useTrackHexagonCampaignContentViewed(tmp(tmp2[21]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp(tmp2[20]).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp22);
        tmp(tmp2[22]);
        if (cResult[7] === guildId) {
          if (cResult[8] === isTryItOut) {
            if (cResult[9] === tmp13) {
              if (cResult[10] === nativeStackNavigation) {
                let tmp27 = cResult[11];
              }
              if (null != tmp17) {
                if (cResult[13] !== tmp17.fontId) {
                  const intl2 = tmp(tmp2[24]).intl;
                  const stringResult = intl2.string(tmp16(tmp2[25])(tmp17.fontId));
                  cResult[13] = tmp17.fontId;
                  cResult[14] = stringResult;
                  let tmp30 = stringResult;
                } else {
                  tmp30 = cResult[14];
                }
                const _HermesInternal = HermesInternal;
                str2 = "";
                const combined = "" + tmp30 + " + " + str2.name;
              } else {
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[24]).intl;
                  const stringResult1 = intl.string(tmp(tmp2[24]).t.PoWNfe);
                  cResult[12] = stringResult1;
                  let tmp28 = stringResult1;
                } else {
                  tmp28 = cResult[12];
                }
                if (cResult[15] === tmp17) {
                  if (cResult[16] === guildId) {
                    if (cResult[17] === tmp4.ggContainer) {
                      if (cResult[18] === tmp4.noneIcon) {
                        if (cResult[19] === user.id) {
                          let tmp33 = cResult[20];
                        }
                        if (cResult[21] !== tmp17) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          cResult[21] = tmp17;
                          cResult[22] = K;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        const _Symbol3 = Symbol;
                        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          const stringResult2 = obj11.string(tmp16(tmp2[30])["86GtGH"]);
                          cResult[23] = stringResult2;
                          const tmp35 = stringResult2;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (tmp22) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (!tmp22) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (cResult[24] !== tmp22) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          const obj5 = { showPremiumIcon: true, showNewBadge: tmp37 };
                          const tmp39 = jsx(tmp(tmp2[31]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp37 });
                          cResult[24] = tmp37;
                          cResult[25] = tmp39;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (cResult[26] !== tmp28) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          tmp41[0] = tmp28;
                          cResult[26] = tmp28;
                          cResult[27] = tmp41;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (cResult[28] !== tmp33) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          cResult[28] = tmp33;
                          cResult[29] = tmp43;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (cResult[30] !== K) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          cResult[30] = K;
                          cResult[31] = tmp45;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (cResult[32] !== tmp22) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                          if (tmp22) {
                            class K {
                              constructor() {
                                tmp = closure_6;
                                tmp3Result = null;
                                if (null != closure_6) {
                                  tmp4 = closure_1;
                                  tmp5 = closure_2;
                                  tmp3 = jsx;
                                  colors = undefined;
                                  tmp6 = closure_1(closure_2[29]);
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
                            const tmp47 = jsx(tmp16(tmp2[32]), {});
                          }
                          cResult[32] = tmp22;
                          cResult[33] = tmp47;
                          const tmp46 = tmp47;
                        } else {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        if (cResult[34] === tmp28) {
                          class K {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[29]);
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
                        const obj6 = { label: tmp35, labelTrailing: tmp38, buttonText: tmp28, accessibilityValue: tmp41, onPress: tmp27, leading: tmp43, trailing: tmp45, footer: null };
                        class U {
                          constructor() {
                            obj = closure_1(closure_2[23]);
                            trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                            obj1 = { guildId, isTryItOut };
                            navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                            tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                            return;
                          }
                        }
                        const tmp50 = jsx(tmp(tmp2[31]).UserProfileEditFormButton, { label: tmp35, labelTrailing: tmp38, buttonText: tmp28, accessibilityValue: tmp41, onPress: tmp27, leading: tmp43, trailing: tmp45, footer: null });
                        cResult[34] = tmp28;
                        cResult[35] = tmp27;
                        cResult[36] = tmp38;
                        cResult[37] = tmp41;
                        cResult[38] = tmp43;
                        cResult[39] = tmp45;
                        cResult[40] = tmp46;
                        cResult[41] = tmp50;
                      }
                    }
                  }
                }
                const fn = function $() {
                  if (null == closure_6) {
                    const obj2 = { source: _modDef14533, style: closure_3.noneIcon };
                    let tmp10 = jsx(native.Icon, { source: _modDef14533, style: closure_3.noneIcon });
                  } else {
                    const obj = { style: closure_3.ggContainer, children: null };
                    const obj3 = { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
                    obj.children = jsx(UsernameWithEffectsDefault, { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" });
                    tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
                  }
                  return tmp10;
                };
                cResult[15] = tmp17;
                cResult[16] = guildId;
                cResult[17] = tmp4.ggContainer;
                cResult[18] = tmp4.noneIcon;
                cResult[19] = user.id;
                cResult[20] = fn;
                tmp33 = fn;
              }
            }
          }
        }
        class U {
          constructor() {
            obj = closure_1(closure_2[23]);
            trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
            obj1 = { guildId, isTryItOut };
            navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
            tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
            return;
          }
        }
        cResult[7] = guildId;
        cResult[8] = isTryItOut;
        cResult[9] = tmp13;
        cResult[10] = nativeStackNavigation;
        cResult[11] = U;
        tmp27 = U;
        const tmpResult9 = tmp(tmp2[20]);
      }
    }
    const obj7 = { userId: user.id, guildId, pendingDisplayNameStyles: tryItOutDisplayNameStyles, ignoreDisabledStylesSetting: true };
    cResult[4] = tryItOutDisplayNameStyles;
    cResult[5] = user.id;
    cResult[6] = obj7;
    tmp15 = obj7;
    const tmpResult6 = tmp(tmp2[15]);
  }
  let obj3 = user(isTryItOut[12]);
}) : (function UserProfileDisplayNameStylesEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  closure_5 = undefined;
  closure_6 = undefined;
  let displayNameStylesEffectConfig;
  const tmp = closure_14();
  _slicedToArray = tmp;
  const nativeStackNavigation = user(isTryItOut[11]).useNativeStackNavigation();
  let obj = user(isTryItOut[11]);
  const isDisplayNameStylesFlywheelSettersEnabled = user(isTryItOut[12]).useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let obj2 = user(isTryItOut[12]);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp6 = _slicedToArray(user(isTryItOut[14]).useSelectedDismissibleContent(items1, { bypassAutoDismiss: true }), 2);
  closure_5 = tmp7;
  let obj3 = user(isTryItOut[14]);
  const guildMemberOrUserPendingDisplayNameStyles = user(isTryItOut[15]).useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  const obj4 = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  const tmp2Result = user(isTryItOut[15]);
  if (isTryItOut) {
    tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  }
  obj4.pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  const tmp10Result = guildId(isTryItOut[16])(obj4);
  closure_6 = tmp10Result;
  let tmp10 = guildId(isTryItOut[16]);
  let effectId;
  if (tmp10Result != null) {
    effectId = tmp10Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[18]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = user(isTryItOut[17]).useDisplayNameStylesEffectConfig(effectId);
  const tmp2Result5 = user(isTryItOut[17]);
  let tmp14 = user(isTryItOut[19]).useHexagonCampaignPerkAvailability(constants3.DISPLAY_NAME_STYLE, "UserProfileDisplayNameStylesEditButton") === constants4.SELECTABLE;
  if (tmp14) {
    tmp14 = true !== isTryItOut;
  }
  if (tmp14) {
    let fontId;
    if (tmp10Result != null) {
      fontId = tmp10Result.fontId;
    }
    tmp14 = fontId !== closure_10;
  }
  const tmp2Result6 = user(isTryItOut[19]);
  const trackHexagonCampaignContentViewed = user(isTryItOut[20]).useTrackHexagonCampaignContentViewed(tmp2(tmp3[21]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp2(tmp3[20]).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp14);
  const tmp2Result7 = user(isTryItOut[20]);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp6[1]];
  const hexagonCampaignHasVisitedDisplayNameStyles = user(isTryItOut[22]).useHexagonCampaignHasVisitedDisplayNameStyles();
  const items3 = [displayNameStylesEffectConfig, tmp10Result];
  const tmp2Result8 = user(isTryItOut[22]);
  const tmp20 = closure_5(() => {
    if (null == closure_6) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.PoWNfe);
    } else {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp10Result, guildId, user.id, tmp];
  const items5 = [tmp10Result];
  const tmp19 = nativeStackNavigation(() => {
    AnalyticsUtilsDefault.track(constants.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    nativeStackNavigation.navigate(constants2.DISPLAY_NAME_STYLES, { guildId, isTryItOut });
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const tmp21 = nativeStackNavigation(() => {
    if (null == closure_6) {
      const obj2 = { source: _modDef14533, style: closure_3.noneIcon };
      let tmp10 = jsx(native.Icon, { source: _modDef14533, style: closure_3.noneIcon });
    } else {
      const obj = { style: closure_3.ggContainer, children: null };
      const obj3 = { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
      obj.children = jsx(UsernameWithEffectsDefault, { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" });
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items4);
  const obj5 = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, footer: null };
  let intl = tmp2(tmp3[24]).intl;
  obj5.label = intl.string(guildId(isTryItOut[30])["86GtGH"]);
  let tmp24 = tmp14;
  if (tmp14) {
    tmp24 = !hexagonCampaignHasVisitedDisplayNameStyles;
  }
  if (!tmp24) {
    tmp24 = tmp6[0] === tmp2(tmp3[13]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
  }
  obj5.labelTrailing = jsx(user(isTryItOut[31]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp24 });
  obj5.buttonText = tmp20;
  obj5.accessibilityValue = { text: tmp20 };
  obj5.onPress = tmp19;
  obj5.leading = tmp21();
  obj5.trailing = nativeStackNavigation(() => {
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
  }, items5)();
  let tmp23Result;
  if (tmp14) {
    tmp23Result = jsx(tmp9(tmp3[32]), {});
  }
  obj5.footer = tmp23Result;
  return jsx(user(isTryItOut[31]).UserProfileEditFormButton, { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, footer: null });
});