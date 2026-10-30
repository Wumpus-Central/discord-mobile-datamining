// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1072).UserSettingsSections;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx",
);

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let analyticsLocations;
  const nativeStackNavigation = isTryItOut(1498).useNativeStackNavigation();
  let obj = isTryItOut(1498);
  const currentCustomTypingIndicatorConfig = isTryItOut(13683).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(13683);
  const items = [isTryItOut(4842).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp5 = analyticsLocations(
    isTryItOut(7563).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }),
    2,
  );
  dependencyMap = tmp6;
  const obj3 = isTryItOut(7563);
  const tmp9 = nativeStackNavigation(7345);
  analyticsLocations = nativeStackNavigation(7320)(
    isTryItOut ? tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW_TRY_IT_OUT : tmp9.CUSTOM_TYPING_INDICATOR_PROFILE_ROW,
  ).analyticsLocations;
  const items1 = [nativeStackNavigation, isTryItOut, tmp5[1], analyticsLocations];
  const tmp8 = nativeStackNavigation(7320);
  const intl = tmp(1114).intl;
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
    isTryItOut(13683).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion),
  );
  const obj4 = {
    label: null,
    labelTrailing: null,
    leading: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
  };
  const intl2 = tmp(1114).intl;
  obj4.label = intl2.string(nativeStackNavigation(3867)["pT+BVM"]);
  const tmpResult = isTryItOut(13683);
  obj4.labelTrailing = jsx(isTryItOut(16425).UserProfileEditFormLabelBadges, {
    showPremiumIcon: true,
    showNewBadge: tmp5[0] === isTryItOut(4842).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  });
  obj4.leading = jsx(nativeStackNavigation(13696), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj4.buttonText = stringResult;
  obj4.accessibilityValue = { text: stringResult };
  obj4.onPress = tmp10;
  return jsx(isTryItOut(16425).UserProfileEditFormButton, {
    label: null,
    labelTrailing: null,
    leading: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
  });
}
