// discord_app/modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2931 from "../../display_name_styles/intl/DisplayNameStyles.messages.js";
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
const Constants = fn(1072);
({
  AnalyticsObjects: closure_8,
  AnalyticsPages: closure_9,
  AnalyticsSections: c10,
  HorizontalGradient: closure_11,
} = Constants);
const HexagonCampaignConstants = fn(5034);
({
  HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: closure_12,
  HexagonCampaignPerk: map1,
  HexagonCampaignPerkAvailability: closure_14,
} = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
const createStyles = fn(5009);
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
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx",
);

export default function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
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
  const displayNameStylesPendingName = require("useDisplayNameStylesPendingName").useDisplayNameStylesPendingName(user);
  let intl = require("util").intl;
  const stringResult = intl.string(_modDef2931["86GtGH"]);
  let obj = require("useDisplayNameStylesPendingName");
  const trackHexagonCampaignContentViewed = require("HexagonCampaignAnalytics").useTrackHexagonCampaignContentViewed(
    require("QuestTypes").QuestContent.DISPLAY_NAME_STYLES_SETTINGS,
    require("HexagonCampaignAnalytics").HexagonCampaignContentSurface.NON_NITRO_CARD,
    true,
  );
  let obj2 = require("HexagonCampaignAnalytics");
  let obj3 = require("ProfileCustomizationUtils");
  const tmp9 = useDisplayNameStylesDefault({
    userId: user.id,
    pendingDisplayNameStyles:
      require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles,
    ignoreDisabledStylesSetting: true,
  });
  let result = null != tmp9;
  if (result) {
    result = tmp3(5036).isHexagonCampaignDisplayNameStyle(tmp9);
    const tmp3Result = tmp3(5036);
  }
  importDefault = result;
  let obj4 = {
    userId: user.id,
    pendingDisplayNameStyles:
      require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles,
    ignoreDisabledStylesSetting: true,
  };
  [tmp12, c2] = noop.useState(0);
  const tmp11 = _slicedToArray(noop.useState(0), 2);
  [tmp14, c3] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp19 = closure_15(UsernameWithEffectsDefault, {
    userId: user.id,
    userName: displayNameStylesPendingName,
    pendingDisplayNameStyles,
    ignoreDisabledStylesSetting: true,
    variant: "heading-xxl/semibold",
    lineClamp: 1,
    ellipsizeMode: "clip",
  });
  let obj5 = {
    userId: user.id,
    userName: displayNameStylesPendingName,
    pendingDisplayNameStyles,
    ignoreDisabledStylesSetting: true,
    variant: "heading-xxl/semibold",
    lineClamp: 1,
    ellipsizeMode: "clip",
  };
  const tmp13 = _slicedToArray(noop.useState(0), 2);
  [tmp21, c4] = noop.useState(false);
  noop = noop.useRef(false);
  closure_6 = noop.useRef(true);
  const tmp20 = _slicedToArray(noop.useState(false), 2);
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    closure_6.current = false;
  });
  if (!disabled) {
    disabled = tmp21;
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
        return { value: "HermesInternal", done: null };
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
              const intl = closure_0(tmp3[11]).intl;
              obj13.text = intl.string(closure_0(tmp3[11]).t.F8FvUy);
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
  callback2 = obj6.useCallback(function () {
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
  analyticsLocations = useAnalyticsLocationsDefault(tmp6(7345).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
  const items = [analyticsLocations];
  callback3 = obj6.useCallback(() => {
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
  const callback4 = obj6.useCallback(() => {
    if (closure_0) {
      callback3();
    } else {
      callback2(!c1);
    }
  }, items1);
  let obj7 = { label: stringResult, labelTrailing: null, children: null };
  let tmp17Result;
  if (availability.availability !== constants5.LOCKED) {
    let obj8 = { style: tmp.labelBadge, children: null };
    const obj9 = { perk: constants4.DISPLAY_NAME_STYLE };
    obj8.children = closure_15(tmp6(16433), obj9);
    tmp17Result = closure_15(closure_6, obj8);
  }
  obj7.labelTrailing = tmp17Result;
  let obj10 = { style: tmp.card, children: null };
  const obj11 = {
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
  obj11.accessibilityRole = str;
  obj11.accessibilityLabel = stringResult;
  let tmp32;
  if (availability.availability !== constants5.LOCKED) {
    let obj12 = { checked: result, busy: tmp21 };
    tmp32 = obj12;
  }
  obj11.accessibilityState = tmp32;
  let obj13 = { style: tmp.name, onLayout: callback, children: null };
  let tmp17Result3 = tmp19;
  if (tmp12 > 0) {
    tmp17Result3 = tmp19;
    if (tmp14 > tmp12) {
      let obj14 = { maskElement: null, children: null };
      const obj15 = { style: tmp.nameMask, children: null };
      const obj16 = { colors, style: tmp.nameMaskOpaque };
      const items2 = [closure_15(tmp6(5582), obj16)];
      const obj17 = { colors: colors2, start: null, end: null, style: null };
      ({ START: obj23.start, END: obj23.end } = closure_11);
      obj17.style = tmp.nameMaskFade;
      items2[1] = closure_15(tmp6(5582), obj17);
      obj15.children = items2;
      obj14.maskElement = closure_16(tmp31, obj15);
      obj14.children = tmp19;
      tmp17Result3 = closure_15(tmp6(7032), obj14);
      const tmp6Result2 = tmp6(7032);
    }
  }
  const items3 = [tmp17Result3];
  const obj18 = {
    style: tmp.nameMeasure,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const obj19 = {
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
  obj18.children = closure_15(closure_6, obj19);
  items3[1] = closure_15(closure_6, obj18);
  obj13.children = items3;
  const items4 = [closure_16(closure_6, obj13)];
  if (availability.availability === constants5.LOCKED) {
    let tmp17Result4 = closure_15(tmp3(6978).TableRowArrow, {});
  } else {
    const obj21 = { "aria-hidden": true, value: result, onValueChange: callback2, disabled };
    tmp17Result4 = closure_15(tmp3(7364).FormSwitch, obj21);
  }
  items4[1] = tmp17Result4;
  obj11.children = items4;
  const items5 = [
    closure_16(require("Pressables").PressableHighlight, obj11),
    closure_15(HexagonCampaignDisplayNameStylePromoDefault, { showLearnMore: true }),
  ];
  obj10.children = items5;
  obj7.children = closure_16(closure_6, obj10);
  return closure_15(require("Input").Input, obj7);
}
