// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1071).UserSettingsSections;
const ContentDismissActionType = fn(4889).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx",
);

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  const nativeStackNavigation = isTryItOut(1501).useNativeStackNavigation();
  let obj = isTryItOut(1501);
  const currentCustomTypingIndicatorConfig = isTryItOut(12973).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(12973);
  items = [isTryItOut(4876).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp5 = analyticsLocations(
    isTryItOut(9562).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }),
    2,
  );
  dependencyMap = tmp6;
  const obj3 = isTryItOut(9562);
  const tmp9 = nativeStackNavigation(6380);
  analyticsLocations = nativeStackNavigation(6379)(
    isTryItOut ? tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW,
  ).analyticsLocations;
  const items1 = [nativeStackNavigation, isTryItOut, tmp5[1], analyticsLocations];
  const tmp8 = nativeStackNavigation(6379);
  const intl = tmp(1112).intl;
  const tmp10 = useCallback(() => {
    let str = "profile_pending";
    if (isTryItOut) {
      str = "try_it_out";
    }
    nativeStackNavigation.navigate(UserSettingsSections.TYPING_INDICATOR, { mode: str, analyticsLocations });
    closure_2(ContentDismissActionType.TAKE_ACTION);
    const obj = { mode: str, analyticsLocations };
  }, items1);
  const stringResult = intl.string(
    isTryItOut(12973).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion),
  );
  const obj4 = {
    label: null,
    labelTrailing: null,
    leading: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
  };
  const intl2 = tmp(1112).intl;
  obj4.label = intl2.string(nativeStackNavigation(4247)["pT+BVM"]);
  const tmpResult = isTryItOut(12973);
  obj4.labelTrailing = jsx(isTryItOut(16096).UserProfileEditFormLabelBadges, {
    showPremiumIcon: true,
    showNewBadge: tmp5[0] === isTryItOut(4876).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  });
  obj4.leading = jsx(nativeStackNavigation(12986), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj4.buttonText = stringResult;
  obj4.accessibilityValue = { text: stringResult };
  obj4.onPress = tmp10;
  return jsx(isTryItOut(16096).UserProfileEditFormButton, {
    label: null,
    labelTrailing: null,
    leading: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
  });
}
