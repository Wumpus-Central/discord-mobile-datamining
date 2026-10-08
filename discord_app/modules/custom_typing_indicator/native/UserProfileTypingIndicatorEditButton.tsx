// === Module 14714: UserProfileTypingIndicatorEditButton ===

// Module 14714 (UserProfileTypingIndicatorEditButton)
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  const cResult = isTryItOut(576).c(21);
  isTryItOut = isTryItOut.isTryItOut;
  let obj = isTryItOut(576);
  const nativeStackNavigation = isTryItOut(1502).useNativeStackNavigation();
  const obj2 = isTryItOut(1502);
  const currentCustomTypingIndicatorConfig = isTryItOut(11659).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const obj3 = isTryItOut(11659);
  const tmp7 = analyticsLocations(isTryItOut(7090).useSelectedDismissibleContent(first, undefined, true), 2);
  dependencyMap = tmp8;
  const tmpResult = isTryItOut(7090);
  const tmp11 = nativeStackNavigation(6865);
  analyticsLocations = nativeStackNavigation(6841)(isTryItOut ? tmp11.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp11.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  if (cResult[1] === analyticsLocations) {
    if (cResult[2] === isTryItOut) {
      if (cResult[3] === tmp8) {
        if (cResult[4] === nativeStackNavigation) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] !== currentCustomTypingIndicatorConfig.typingSuggestion) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(11659).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
          cResult[6] = currentCustomTypingIndicatorConfig.typingSuggestion;
          cResult[7] = stringResult;
          let tmp13 = stringResult;
          const tmpResult2 = tmp(11659);
        } else {
          tmp13 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp9(3829)["pT+BVM"]);
          cResult[8] = stringResult1;
          let tmp15 = stringResult1;
        } else {
          tmp15 = cResult[8];
        }
        const tmp17 = tmp7[0] === tmp(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
        if (cResult[9] !== tmp17) {
          const obj4 = { showPremiumIcon: true, showNewBadge: tmp17 };
          const tmp20 = jsx(tmp(14689).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp17 });
          cResult[9] = tmp17;
          cResult[10] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] !== currentCustomTypingIndicatorConfig) {
          const obj5 = { config: currentCustomTypingIndicatorConfig, size: 24 };
          const tmp23 = jsx(tmp9(11672), { config: currentCustomTypingIndicatorConfig, size: 24 });
          cResult[11] = currentCustomTypingIndicatorConfig;
          cResult[12] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[12];
        }
        if (cResult[13] !== tmp13) {
          const obj6 = { text: tmp13 };
          cResult[13] = tmp13;
          cResult[14] = obj6;
          let tmp24 = obj6;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] === tmp13) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp18) {
              if (cResult[18] === tmp21) {
                if (cResult[19] === tmp24) {
                  let tmp25 = cResult[20];
                }
                return tmp25;
              }
            }
          }
        }
        const obj7 = { label: tmp15, labelTrailing: tmp18, leading: tmp21, buttonText: tmp13, accessibilityValue: tmp24, onPress: tmp12 };
        const tmp27 = jsx(tmp(14689).UserProfileEditFormButton, { label: tmp15, labelTrailing: tmp18, leading: tmp21, buttonText: tmp13, accessibilityValue: tmp24, onPress: tmp12 });
        cResult[15] = tmp13;
        cResult[16] = tmp12;
        cResult[17] = tmp18;
        cResult[18] = tmp21;
        cResult[19] = tmp24;
        cResult[20] = tmp27;
        tmp25 = tmp27;
      }
    }
  }
  class O {
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
  cResult[1] = analyticsLocations;
  cResult[2] = isTryItOut;
  cResult[3] = tmp7[1];
  cResult[4] = nativeStackNavigation;
  cResult[5] = O;
  tmp12 = O;
  const tmp10 = nativeStackNavigation(6841);
}) : (function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  const nativeStackNavigation = isTryItOut(1502).useNativeStackNavigation();
  let obj = isTryItOut(1502);
  const currentCustomTypingIndicatorConfig = isTryItOut(11659).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(11659);
  const items = [isTryItOut(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp5 = analyticsLocations(isTryItOut(7090).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp6;
  const obj3 = isTryItOut(7090);
  const tmp9 = nativeStackNavigation(6865);
  analyticsLocations = nativeStackNavigation(6841)(isTryItOut ? tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW).analyticsLocations;
  const items1 = [nativeStackNavigation, isTryItOut, tmp5[1], analyticsLocations];
  const tmp8 = nativeStackNavigation(6841);
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
  const stringResult = intl.string(isTryItOut(11659).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const obj4 = { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null };
  const intl2 = tmp(1126).intl;
  obj4.label = intl2.string(nativeStackNavigation(3829)["pT+BVM"]);
  const tmpResult = isTryItOut(11659);
  obj4.labelTrailing = jsx(isTryItOut(14689).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp5[0] === isTryItOut(2048).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  obj4.leading = jsx(nativeStackNavigation(11672), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj4.buttonText = stringResult;
  obj4.accessibilityValue = { text: stringResult };
  obj4.onPress = tmp10;
  return jsx(isTryItOut(14689).UserProfileEditFormButton, { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null });
});