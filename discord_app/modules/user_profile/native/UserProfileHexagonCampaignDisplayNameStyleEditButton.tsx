// discord_app/modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2928 from "../../display_name_styles/intl/DisplayNameStyles.messages.js";
import useDisplayNameStylesDefault from "../../display_name_styles/hooks/useDisplayNameStyles.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumModalDefault from "../../../components_native/premium/openPremiumModal.tsx";
import PremiumFeaturesCards from "../../user_settings/premium/native/PremiumFeaturesCards.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import HexagonCampaignDisplayNameStylePromoDefault from "../../hexagon_campaign/native/HexagonCampaignDisplayNameStylePromo.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1087);
({
  AnalyticsObjects: closure_8,
  AnalyticsPages: closure_9,
  AnalyticsSections: c10,
  HorizontalGradient: closure_11,
} = Constants);
const HexagonCampaignConstants = fn(4994);
({
  HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: closure_12,
  HexagonCampaignPerk: map1,
  HexagonCampaignPerkAvailability: closure_14,
} = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
const createStyles = fn(4969);
let obj2 = {
  card: {
    flexGrow: 1,
    flexShrink: 1,
    borderColor: nativeDefault.colors.BORDER_STRONG,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
  },
  row: null,
  name: null,
  nameMask: null,
  nameMaskOpaque: null,
  nameMaskFade: null,
  nameMeasure: null,
  nameMeasureText: null,
  labelBadge: null,
};
let obj3 = {
  flexGrow: 1,
  flexShrink: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
};
obj2.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_16,
};
obj2.name = { flex: 1 };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.flexDirection = "row";
obj2.nameMask = obj5;
obj2.nameMaskOpaque = { flex: 1 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_16,
};
obj2.nameMaskFade = { width: nativeDefault.space.PX_32 };
obj2.nameMeasure = { position: "absolute", top: 0, left: 0, width: 10000, opacity: 0 };
obj2.nameMeasureText = { alignSelf: "flex-start" };
let obj6 = { width: nativeDefault.space.PX_32 };
obj2.labelBadge = { marginLeft: nativeDefault.space.PX_8 };
let closure_19 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { marginLeft: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
      const cResult = require("c").c(66);
      ({ user, disabled } = availability);
      let tmp4 = undefined !== disabled;
      if (tmp4) {
        tmp4 = disabled;
      }
      closure_19();
      _require = tmp6;
      let obj = require("c");
      const displayNameStylesPendingName = require("useDisplayNameStylesPendingName").useDisplayNameStylesPendingName(
        user,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1128).intl;
        const stringResult = intl.string(_modDef2928["86GtGH"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      const tmpResult = require("useDisplayNameStylesPendingName");
      pendingDisplayNameStyles =
        require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(
          user,
        ).pendingDisplayNameStyles;
      if (cResult[1] === pendingDisplayNameStyles) {
        if (cResult[2] === user.id) {
          let tmp11 = cResult[3];
        }
        const tmp13 = useDisplayNameStylesDefault(tmp11);
        if (cResult[4] !== tmp13) {
          let result = null != tmp13;
          if (result) {
            result = tmp(4996).isHexagonCampaignDisplayNameStyle(tmp13);
            const tmpResult5 = tmp(4996);
          }
          cResult[4] = tmp13;
          cResult[5] = result;
          let tmp14 = result;
        } else {
          tmp14 = cResult[5];
        }
        importDefault = tmp14;
        [tmp19, dependencyMap] = noop.useState(0);
        [, asyncGeneratorStep] = noop.useState(0);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor(arg0) {
              tmp = closure_2(availability.nativeEvent.layout.width);
              return;
            }
          }
          cResult[6] = G;
        } else {
          class G {
            constructor(arg0) {
              tmp = closure_2(availability.nativeEvent.layout.width);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor(arg0) {
              tmp = closure_3(availability.nativeEvent.layout.width);
              return;
            }
          }
          cResult[7] = J;
        } else {
          class J {
            constructor(arg0) {
              tmp = closure_3(availability.nativeEvent.layout.width);
              return;
            }
          }
        }
        if (cResult[8] === displayNameStylesPendingName) {
          class J {
            constructor(arg0) {
              tmp = closure_3(availability.nativeEvent.layout.width);
              return;
            }
          }
          [r10115, _slicedToArray] = obj6.useState(false);
          noop = obj6.useRef(false);
          closure_6 = obj6.useRef(true);
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
            cResult[11] = tmp30;
          } else {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
          }
          const tmp17Result = _slicedToArray(obj6.useState(false), 2);
          const unmountEffect = tmp(5261).useUnmountEffect(tmp30);
          if (!tmp4) {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
            _require = asyncGeneratorStep(async (arg0) => {
              if (ref === 2) {
                ref = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp6 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  ref = 2;
                  if (0 === v2) {
                    if (arg0 === 1) {
                      ref = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      ref = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      closure_2 = tmp3;
                      closure_129_0 = undefined;
                      if (!ref.current) {
                        if (closure_0) {
                          ref.current = true;
                          v2(true);
                          c3 = 1;
                          v2 = 2;
                          ref = 1;
                          const obj10 = {
                            value: closure_0(15828).ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE),
                            done: false,
                          };
                          return obj10;
                        } else {
                          const currentUser = t9.getCurrentUser();
                          displayNameStyles = undefined;
                          if (currentUser != null) {
                            displayNameStyles = currentUser.displayNameStyles;
                          }
                          if (null == displayNameStyles) {
                            displayNameStyles = null;
                          } else {
                            closure_0(4996);
                          }
                          const obj12 = { displayNameStyles };
                          closure_0(8651).setPendingChanges(obj12);
                          const obj8 = closure_0(8651);
                        }
                      }
                    }
                  } else {
                    if (1 === tmp7) {
                      c3 = 0;
                      closure_129_0 = false;
                    } else if (arg0 === 1) {
                      ref = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      ref = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      closure_129_0 = value;
                      c3 = 0;
                    }
                    if (ref2.current) {
                      ref.current = false;
                      v2(false);
                      if (!closure_129_0) {
                        const obj13 = { text: null };
                        const intl = closure_0(1128).intl;
                        obj13.text = intl.string(closure_0(1128).t.F8FvUy);
                        tmp52(5661).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj13);
                        const obj2 = tmp52(5661);
                      }
                    }
                    const result = closure_0(15828).saveHexagonCampaignPreviousDisplayNameStyles();
                    const obj4 = closure_0(15828);
                    const obj14 = { displayNameStyles };
                    closure_0(8651).setPendingChanges(obj14);
                    const obj5 = closure_0(8651);
                    const result1 = closure_0(15828).markHexagonCampaignPerkApplied(constants.DISPLAY_NAME_STYLE);
                    const obj7 = closure_0(15828);
                  }
                  ref = 3;
                } catch (tmp51) {
                  if (tmp4 === c3) {
                    ref = tmp2;
                    throw tmp51;
                  } else {
                    v2 = tmp;
                  }
                }
              }
            });
            function t9() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            cResult[12] = t9;
            const tmp32 = t9;
          } else {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
          }
          t9 = tmp32;
          const tmpResult6 = tmp(5261);
          const analyticsLocations = tmp12(7251)(tmp12(7276).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
          if (cResult[13] !== analyticsLocations) {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
            cResult[13] = analyticsLocations;
            cResult[14] = tmp35;
          } else {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
          }
          if (cResult[15] === tmp34) {
            class J {
              constructor(arg0) {
                tmp = closure_3(availability.nativeEvent.layout.width);
                return;
              }
            }
          }
          function ue() {
            if (closure_0) {
              tmp35();
            } else {
              t9(!closure_1);
            }
          }
          cResult[15] = tmp34;
          cResult[16] = tmp14;
          cResult[17] = tmp6;
          cResult[18] = ue;
          const tmp12Result = tmp12(7251);
        }
        let obj2 = {
          userId: user.id,
          userName: displayNameStylesPendingName,
          pendingDisplayNameStyles,
          ignoreDisabledStylesSetting: true,
          variant: "heading-xxl/semibold",
          lineClamp: 1,
          ellipsizeMode: "clip",
        };
        const tmp27 = closure_15(UsernameWithEffectsDefault, obj2);
        cResult[8] = displayNameStylesPendingName;
        cResult[9] = user.id;
        cResult[10] = tmp27;
        const tmp18 = _slicedToArray(noop.useState(0), 2);
      }
      let obj3 = { userId: user.id, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
      cResult[1] = pendingDisplayNameStyles;
      cResult[2] = user.id;
      cResult[3] = obj3;
      tmp11 = obj3;
      const tmpResult4 = require("ProfileCustomizationUtils");
    }
  : function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
      ({ user, disabled } = availability);
      if (disabled === undefined) {
        disabled = false;
      }
      importDefault = undefined;
      dependencyMap = undefined;
      asyncGeneratorStep = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      closure_6 = undefined;
      let callback2;
      let analyticsLocations;
      let callback3;
      const tmp = closure_19();
      _require = tmp2;
      const displayNameStylesPendingName = require("useDisplayNameStylesPendingName").useDisplayNameStylesPendingName(
        user,
      );
      let intl = require("util").intl;
      const stringResult = intl.string(_modDef2928["86GtGH"]);
      let obj = require("useDisplayNameStylesPendingName");
      let obj2 = require("ProfileCustomizationUtils");
      const tmp8 = useDisplayNameStylesDefault({
        userId: user.id,
        pendingDisplayNameStyles:
          require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(user)
            .pendingDisplayNameStyles,
        ignoreDisabledStylesSetting: true,
      });
      let result = null != tmp8;
      if (result) {
        result = tmp3(4996).isHexagonCampaignDisplayNameStyle(tmp8);
        const tmp3Result = tmp3(4996);
      }
      importDefault = result;
      let obj3 = {
        userId: user.id,
        pendingDisplayNameStyles:
          require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(user)
            .pendingDisplayNameStyles,
        ignoreDisabledStylesSetting: true,
      };
      [tmp11, c2] = noop.useState(0);
      const tmp10 = _slicedToArray(noop.useState(0), 2);
      [tmp13, c3] = noop.useState(0);
      const callback = noop.useCallback((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.layout.width);
      }, []);
      const callback1 = noop.useCallback((nativeEvent) => {
        _undefined2(nativeEvent.nativeEvent.layout.width);
      }, []);
      const tmp18 = closure_15(UsernameWithEffectsDefault, {
        userId: user.id,
        userName: displayNameStylesPendingName,
        pendingDisplayNameStyles,
        ignoreDisabledStylesSetting: true,
        variant: "heading-xxl/semibold",
        lineClamp: 1,
        ellipsizeMode: "clip",
      });
      let obj4 = {
        userId: user.id,
        userName: displayNameStylesPendingName,
        pendingDisplayNameStyles,
        ignoreDisabledStylesSetting: true,
        variant: "heading-xxl/semibold",
        lineClamp: 1,
        ellipsizeMode: "clip",
      };
      const tmp12 = _slicedToArray(noop.useState(0), 2);
      [tmp20, c4] = noop.useState(false);
      noop = noop.useRef(false);
      closure_6 = noop.useRef(true);
      const tmp19 = _slicedToArray(noop.useState(false), 2);
      const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
        closure_6.current = false;
      });
      if (!disabled) {
        disabled = tmp20;
      }
      _require = asyncGeneratorStep(async (arg0) => {
        if (ref === 2) {
          ref = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            ref = 2;
            if (0 === v2) {
              if (arg0 === 1) {
                ref = 3;
                throw value;
              } else if (arg0 === 2) {
                ref = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_2 = tmp3;
                closure_1 = tmp7;
                closure_129_0 = undefined;
                if (!ref.current) {
                  if (closure_0) {
                    ref.current = true;
                    v2(true);
                    closure_129_0 = false;
                    c3 = 1;
                    v2 = 2;
                    ref = 1;
                    const obj10 = {
                      value: closure_0(tmp3[21]).ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE),
                      done: false,
                    };
                    return obj10;
                  } else {
                    const currentUser = callback2.getCurrentUser();
                    displayNameStyles = undefined;
                    if (currentUser != null) {
                      displayNameStyles = currentUser.displayNameStyles;
                    }
                    if (null == displayNameStyles) {
                      displayNameStyles = null;
                    } else {
                      closure_0(tmp3[17]);
                    }
                    const obj12 = { displayNameStyles };
                    closure_0(tmp3[20]).setPendingChanges(obj12);
                    const obj8 = closure_0(tmp3[20]);
                  }
                }
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                closure_129_0 = false;
              } else if (arg0 === 1) {
                ref = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                ref = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_129_0 = value;
                c3 = 0;
              }
              if (ref2.current) {
                ref.current = false;
                v2(false);
                if (!closure_129_0) {
                  const obj13 = { text: null };
                  const intl = closure_0(tmp3[13]).intl;
                  obj13.text = intl.string(closure_0(tmp3[13]).t.F8FvUy);
                  _undefined(tmp3[22]).open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj13);
                  const obj2 = _undefined(tmp3[22]);
                }
              }
              const result = closure_0(tmp3[21]).saveHexagonCampaignPreviousDisplayNameStyles();
              const obj4 = closure_0(tmp3[21]);
              const obj14 = { displayNameStyles };
              closure_0(tmp3[20]).setPendingChanges(obj14);
              const obj5 = closure_0(tmp3[20]);
              const result1 = closure_0(tmp3[21]).markHexagonCampaignPerkApplied(constants.DISPLAY_NAME_STYLE);
              const obj7 = closure_0(tmp3[21]);
            }
            ref = 3;
          } catch (tmp51) {
            if (tmp4 === c3) {
              ref = tmp2;
              throw tmp51;
            } else {
              v2 = tmp;
            }
          }
        }
      });
      callback2 = obj5.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, []);
      const tmp3Result2 = require("useMountEffect");
      analyticsLocations = useAnalyticsLocationsDefault(tmp6(7276).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
      const items = [analyticsLocations];
      callback3 = obj5.useCallback(() => {
        const obj = {
          analyticsLocation: {
            page: constants2.USER_SETTINGS,
            section: constants3.SETTINGS_DISPLAY_NAME_STYLES,
            object: constants.PREMIUM_UPSELL_BUTTON,
          },
          analyticsLocations,
          premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING,
        };
        openPremiumModalDefault(obj);
      }, items);
      const items1 = [availability.availability === constants5.LOCKED, result, callback3, callback2];
      const callback4 = obj5.useCallback(() => {
        if (closure_0) {
          callback3();
        } else {
          callback2(!c1);
        }
      }, items1);
      let obj6 = { label: stringResult, labelTrailing: null, children: null };
      let obj7 = { style: tmp.labelBadge, children: null };
      if (availability.availability === constants5.LOCKED) {
        let tmp16Result = closure_15(tmp3(tmp27).HexagonCampaignExtendPerkBadge, {});
      } else {
        let obj8 = { perk: constants4.DISPLAY_NAME_STYLE };
        tmp16Result = closure_15(tmp6(tmp27), obj8);
      }
      obj7.children = tmp16Result;
      obj6.labelTrailing = closure_15(closure_6, obj7);
      const obj9 = { style: tmp.card, children: null };
      let obj10 = {
        onPress: callback4,
        style: tmp.row,
        disabled,
        accessibilityRole: null,
        accessibilityLabel: null,
        accessibilityState: null,
        children: null,
      };
      let str = "switch";
      if (availability.availability === constants5.LOCKED) {
        str = "button";
      }
      obj10.accessibilityRole = str;
      obj10.accessibilityLabel = stringResult;
      let tmp31;
      if (availability.availability !== constants5.LOCKED) {
        const obj11 = { checked: result, busy: tmp20 };
        tmp31 = obj11;
      }
      obj10.accessibilityState = tmp31;
      let obj12 = { style: tmp.name, onLayout: callback, children: null };
      let tmp16Result3 = tmp18;
      if (tmp11 > 0) {
        tmp16Result3 = tmp18;
        if (tmp13 > tmp11) {
          let obj13 = { maskElement: null, children: null };
          let obj14 = { style: tmp.nameMask, children: null };
          const obj15 = { colors, style: tmp.nameMaskOpaque };
          const items2 = [closure_15(tmp6(5256), obj15)];
          const obj16 = { colors: colors2, start: null, end: null, style: null };
          ({ START: obj22.start, END: obj22.end } = closure_11);
          obj16.style = tmp.nameMaskFade;
          items2[1] = closure_15(tmp6(5256), obj16);
          obj14.children = items2;
          obj13.maskElement = closure_16(tmp26, obj14);
          obj13.children = tmp18;
          tmp16Result3 = closure_15(tmp6(6964), obj13);
          const tmp6Result2 = tmp6(6964);
        }
      }
      const items3 = [tmp16Result3];
      const obj17 = {
        style: tmp.nameMeasure,
        pointerEvents: "none",
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj18 = {
        style: tmp.nameMeasureText,
        onLayout: callback1,
        children: closure_15(UsernameWithEffectsDefault, {
          userId: user.id,
          userName: displayNameStylesPendingName,
          pendingDisplayNameStyles,
          ignoreDisabledStylesSetting: true,
          variant: "heading-xxl/semibold",
          lineClamp: 1,
        }),
      };
      obj17.children = closure_15(closure_6, obj18);
      items3[1] = closure_15(closure_6, obj17);
      obj12.children = items3;
      const items4 = [closure_16(closure_6, obj12)];
      if (availability.availability === constants5.LOCKED) {
        let tmp16Result4 = closure_15(tmp3(6910).TableRowArrow, {});
      } else {
        const obj20 = { "aria-hidden": true, value: result, onValueChange: callback2, disabled };
        tmp16Result4 = closure_15(tmp3(7294).FormSwitch, obj20);
      }
      items4[1] = tmp16Result4;
      obj10.children = items4;
      const items5 = [
        closure_16(require("Pressables").PressableHighlight, obj10),
        closure_15(HexagonCampaignDisplayNameStylePromoDefault, { showLearnMore: true }),
      ];
      obj9.children = items5;
      obj6.children = closure_16(closure_6, obj9);
      return closure_15(require("Input").Input, obj6);
    };
