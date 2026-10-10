// discord_app/modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import _modDef13453 from "../../../../_runtime/metro/13453__.js";
import getDisplayNameStylesFontNameDefault from "../../display_name_styles/getDisplayNameStylesFontName.tsx";
import DisplayNameStylesColorSwatchDefault from "../../display_name_styles/native/DisplayNameStylesColorSwatch.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
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
      const cResult = user(isTryItOut[9]).c(39);
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
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { bypassAutoDismiss: true };
          cResult[2] = obj4;
          let tmp9 = obj4;
        } else {
          tmp9 = cResult[2];
        }
        const tmp11 = _slicedToArray(tmp(tmp2[13]).useSelectedDismissibleContent(cResult[1], tmp9), 2);
        closure_5 = tmp12;
        const tmpResult = tmp(tmp2[13]);
        const guildMemberOrUserPendingDisplayNameStyles = tmp(tmp2[14]).useGuildMemberOrUserPendingDisplayNameStyles(
          user,
          guildId,
        );
        let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
        if (isTryItOut) {
          tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
        }
        if (cResult[3] === guildId) {
          if (cResult[4] === tryItOutDisplayNameStyles) {
            if (cResult[5] === user.id) {
              let tmp14 = cResult[6];
            }
            const tmp16 = guildId(tmp2[15])(tmp14);
            closure_6 = tmp16;
            let effectId;
            if (tmp16 != null) {
              effectId = tmp16.effectId;
            }
            if (effectId == null) {
              effectId = tmp(tmp2[17]).DisplayNameEffect.SOLID;
            }
            let str2 = tmp(tmp2[16]).useDisplayNameStylesEffectConfig(effectId);
            if (cResult[7] === guildId) {
              if (cResult[8] === isTryItOut) {
                if (cResult[9] === tmp12) {
                  if (cResult[10] === nativeStackNavigation) {
                    let tmp19 = cResult[11];
                  }
                  if (null != tmp16) {
                    if (cResult[13] !== tmp16.fontId) {
                      const intl2 = tmp(tmp2[19]).intl;
                      const stringResult = intl2.string(tmp15(tmp2[20])(tmp16.fontId));
                      cResult[13] = tmp16.fontId;
                      cResult[14] = stringResult;
                      let tmp22 = stringResult;
                    } else {
                      tmp22 = cResult[14];
                    }
                    const _HermesInternal = HermesInternal;
                    str2 = "";
                    const combined = "" + tmp22 + " + " + str2.name;
                  } else {
                    const _Symbol2 = Symbol;
                    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl = tmp(tmp2[19]).intl;
                      const stringResult1 = intl.string(tmp(tmp2[19]).t.PoWNfe);
                      cResult[12] = stringResult1;
                      let tmp20 = stringResult1;
                    } else {
                      tmp20 = cResult[12];
                    }
                    if (cResult[15] === tmp16) {
                      if (cResult[16] === guildId) {
                        if (cResult[17] === tmp4.ggContainer) {
                          if (cResult[18] === tmp4.noneIcon) {
                            if (cResult[19] === user.id) {
                              let tmp25 = cResult[20];
                            }
                            if (cResult[21] !== tmp16) {
                              const fn2 = function k() {
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
                              };
                              cResult[21] = tmp16;
                              cResult[22] = fn2;
                              let tmp26 = fn2;
                            } else {
                              tmp26 = cResult[22];
                            }
                            const _Symbol3 = Symbol;
                            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl3 = tmp(tmp2[19]).intl;
                              const stringResult2 = intl3.string(tmp15(tmp2[25])["86GtGH"]);
                              cResult[23] = stringResult2;
                              let tmp27 = stringResult2;
                            } else {
                              tmp27 = cResult[23];
                            }
                            const tmp29 =
                              tmp11[0] ===
                              tmp(tmp2[12]).DismissibleContent
                                .DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
                            if (cResult[24] !== tmp29) {
                              const obj5 = { showPremiumIcon: true, showNewBadge: tmp29 };
                              const tmp32 = jsx(tmp(tmp2[26]).UserProfileEditFormLabelBadges, {
                                showPremiumIcon: true,
                                showNewBadge: tmp29,
                              });
                              cResult[24] = tmp29;
                              cResult[25] = tmp32;
                              let tmp30 = tmp32;
                            } else {
                              tmp30 = cResult[25];
                            }
                            if (cResult[26] !== tmp20) {
                              const obj6 = { text: tmp20 };
                              cResult[26] = tmp20;
                              cResult[27] = obj6;
                              let tmp33 = obj6;
                            } else {
                              tmp33 = cResult[27];
                            }
                            if (cResult[28] !== tmp25) {
                              const tmp25Result = tmp25();
                              cResult[28] = tmp25;
                              cResult[29] = tmp25Result;
                              let tmp34 = tmp25Result;
                            } else {
                              tmp34 = cResult[29];
                            }
                            if (cResult[30] !== tmp26) {
                              const tmp26Result = tmp26();
                              cResult[30] = tmp26;
                              cResult[31] = tmp26Result;
                              let tmp36 = tmp26Result;
                            } else {
                              tmp36 = cResult[31];
                            }
                            if (cResult[32] === tmp20) {
                              if (cResult[33] === tmp19) {
                                if (cResult[34] === tmp30) {
                                  if (cResult[35] === tmp33) {
                                    if (cResult[36] === tmp34) {
                                      if (cResult[37] === tmp36) {
                                        let tmp38 = cResult[38];
                                      }
                                      return tmp38;
                                    }
                                  }
                                }
                              }
                            }
                            class Y {
                              constructor() {
                                obj = closure_1(closure_2[18]);
                                trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                                obj1 = { guildId, isTryItOut };
                                navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                                tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                                return;
                              }
                            }
                            tmp40[0] = tmp27;
                            tmp40[1] = tmp30;
                            tmp40[2] = tmp20;
                            tmp40[3] = tmp33;
                            tmp40[4] = tmp19;
                            tmp40[5] = tmp34;
                            tmp40[6] = tmp36;
                            const tmp41 = jsx(tmp(tmp2[26]).UserProfileEditFormButton, tmp40);
                            cResult[32] = tmp20;
                            cResult[33] = tmp19;
                            cResult[34] = tmp30;
                            cResult[35] = tmp33;
                            cResult[36] = tmp34;
                            cResult[37] = tmp36;
                            cResult[38] = tmp41;
                            tmp38 = tmp41;
                          }
                        }
                      }
                    }
                    const fn = function x() {
                      if (null == closure_6) {
                        const obj2 = { source: _modDef13453, style: closure_3.noneIcon };
                        let tmp10 = jsx(native.Icon, { source: _modDef13453, style: closure_3.noneIcon });
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
                    };
                    cResult[15] = tmp16;
                    cResult[16] = guildId;
                    cResult[17] = tmp4.ggContainer;
                    class Y {
                      constructor() {
                        obj = closure_1(closure_2[18]);
                        trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                        obj1 = { guildId, isTryItOut };
                        navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                        tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                        return;
                      }
                    }
                    cResult[19] = user.id;
                    cResult[20] = fn;
                    tmp25 = fn;
                  }
                }
              }
            }
            class Y {
              constructor() {
                obj = closure_1(closure_2[18]);
                trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                obj1 = { guildId, isTryItOut };
                navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                return;
              }
            }
            cResult[7] = guildId;
            cResult[8] = isTryItOut;
            cResult[9] = tmp12;
            cResult[10] = nativeStackNavigation;
            cResult[11] = Y;
            tmp19 = Y;
            const tmpResult4 = tmp(tmp2[16]);
          }
        }
        const obj7 = {
          userId: user.id,
          guildId,
          pendingDisplayNameStyles: tryItOutDisplayNameStyles,
          ignoreDisabledStylesSetting: true,
        };
        cResult[3] = guildId;
        cResult[4] = tryItOutDisplayNameStyles;
        cResult[5] = user.id;
        cResult[6] = obj7;
        tmp14 = obj7;
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
      let tmp6 = _slicedToArray(
        user(isTryItOut[13]).useSelectedDismissibleContent(items1, { bypassAutoDismiss: true }),
        2,
      );
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
          const obj2 = { source: _modDef13453, style: closure_3.noneIcon };
          let tmp10 = jsx(native.Icon, { source: _modDef13453, style: closure_3.noneIcon });
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
