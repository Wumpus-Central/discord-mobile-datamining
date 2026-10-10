// === Module 14876: UserProfileTypingIndicatorEditButton ===

// Module 14876 (UserProfileTypingIndicatorEditButton)
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  const cResult = isTryItOut(576).c(22);
  isTryItOut = isTryItOut.isTryItOut;
  let obj = isTryItOut(576);
  const nativeStackNavigation = isTryItOut(1503).useNativeStackNavigation();
  const obj2 = isTryItOut(1503);
  const currentCustomTypingIndicatorConfig = isTryItOut(11641).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
    const obj4 = { bypassAutoDismiss: true };
    cResult[0] = items;
    cResult[1] = obj4;
    tmp6 = items;
    tmp7 = obj4;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj3 = isTryItOut(11641);
  const tmp8 = analyticsLocations(isTryItOut(7099).useSelectedDismissibleContent(tmp6, tmp7), 2);
  dependencyMap = tmp9;
  const tmpResult = isTryItOut(7099);
  const tmp12 = nativeStackNavigation(6878);
  analyticsLocations = nativeStackNavigation(6851)(isTryItOut ? tmp12.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp12.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === isTryItOut) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === nativeStackNavigation) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] !== currentCustomTypingIndicatorConfig.typingSuggestion) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(11641).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
          cResult[7] = currentCustomTypingIndicatorConfig.typingSuggestion;
          cResult[8] = stringResult;
          let tmp14 = stringResult;
          const tmpResult2 = tmp(11641);
        } else {
          tmp14 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp10(3851)["pT+BVM"]);
          cResult[9] = stringResult1;
          let tmp16 = stringResult1;
        } else {
          tmp16 = cResult[9];
        }
        const tmp18 = tmp8[0] === tmp(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
        if (cResult[10] !== tmp18) {
          const obj5 = { showPremiumIcon: true, showNewBadge: tmp18 };
          const tmp21 = jsx(tmp(14851).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp18 });
          cResult[10] = tmp18;
          cResult[11] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] !== currentCustomTypingIndicatorConfig) {
          const obj6 = { config: currentCustomTypingIndicatorConfig, size: 24 };
          const tmp24 = jsx(tmp10(11654), { config: currentCustomTypingIndicatorConfig, size: 24 });
          cResult[12] = currentCustomTypingIndicatorConfig;
          cResult[13] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[13];
        }
        if (cResult[14] !== tmp14) {
          const obj7 = { text: tmp14 };
          cResult[14] = tmp14;
          cResult[15] = obj7;
          let tmp25 = obj7;
        } else {
          tmp25 = cResult[15];
        }
        if (cResult[16] === tmp14) {
          if (cResult[17] === tmp13) {
            if (cResult[18] === tmp19) {
              if (cResult[19] === tmp22) {
                if (cResult[20] === tmp25) {
                  let tmp26 = cResult[21];
                }
                return tmp26;
              }
            }
          }
        }
        const obj8 = { label: tmp16, labelTrailing: tmp19, leading: tmp22, buttonText: tmp14, accessibilityValue: tmp25, onPress: tmp13 };
        const tmp28 = jsx(tmp(14851).UserProfileEditFormButton, { label: tmp16, labelTrailing: tmp19, leading: tmp22, buttonText: tmp14, accessibilityValue: tmp25, onPress: tmp13 });
        cResult[16] = tmp14;
        cResult[17] = tmp13;
        cResult[18] = tmp19;
        cResult[19] = tmp22;
        cResult[20] = tmp25;
        cResult[21] = tmp28;
        tmp26 = tmp28;
      }
    }
  }
  class C {
    constructor() {
      str = "profile_pending";
      tmp = closure_1;
      if (isTryItOut) {
        str = "try_it_out";
      }
      obj = { mode: str, analyticsLocations };
      navigateResult = closure_1.navigate(UserSettingsSections.TYPING_INDICATOR, obj);
      tmp3 = closure_2(ContentDismissActionType.TAKE_ACTION);
      return;
    }
  }
  cResult[2] = analyticsLocations;
  cResult[3] = isTryItOut;
  cResult[4] = tmp8[1];
  cResult[5] = nativeStackNavigation;
  cResult[6] = C;
  tmp13 = C;
  const tmp11 = nativeStackNavigation(6851);
}) : (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  const nativeStackNavigation = isTryItOut(1503).useNativeStackNavigation();
  let obj = isTryItOut(1503);
  const currentCustomTypingIndicatorConfig = isTryItOut(11641).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(11641);
  const items = [isTryItOut(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp5 = analyticsLocations(isTryItOut(7099).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  dependencyMap = tmp6;
  const obj3 = isTryItOut(7099);
  const tmp9 = nativeStackNavigation(6878);
  analyticsLocations = nativeStackNavigation(6851)(isTryItOut ? tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  const items1 = [nativeStackNavigation, isTryItOut, tmp5[1], analyticsLocations];
  const tmp8 = nativeStackNavigation(6851);
  const intl = tmp(1126).intl;
  const tmp10 = useCallback(() => {
    let str = "profile_pending";
    if (isTryItOut) {
      str = "try_it_out";
    }
    nativeStackNavigation.navigate(UserSettingsSections.TYPING_INDICATOR, { mode: str, analyticsLocations });
    closure_2(ContentDismissActionType.TAKE_ACTION);
    const obj = { mode: str, analyticsLocations };
  }, items1);
  const stringResult = intl.string(isTryItOut(11641).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const obj4 = { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null };
  const intl2 = tmp(1126).intl;
  obj4.label = intl2.string(nativeStackNavigation(3851)["pT+BVM"]);
  const tmpResult = isTryItOut(11641);
  obj4.labelTrailing = jsx(isTryItOut(14851).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp5[0] === isTryItOut(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  obj4.leading = jsx(nativeStackNavigation(11654), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj4.buttonText = stringResult;
  obj4.accessibilityValue = { text: stringResult };
  obj4.onPress = tmp10;
  return jsx(isTryItOut(14851).UserProfileEditFormButton, { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null });
});