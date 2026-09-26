// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx",
);

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  const nativeStackNavigation = isTryItOut(1485).useNativeStackNavigation();
  let obj = isTryItOut(1485);
  const currentCustomTypingIndicatorConfig = isTryItOut(11453).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(11453);
  const items = [isTryItOut(2029).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp3 = _slicedToArray(isTryItOut(6806).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp4;
  const items1 = [nativeStackNavigation, isTryItOut, tmp3[1]];
  const obj3 = isTryItOut(6806);
  const intl = isTryItOut(1115).intl;
  const tmp5 = useCallback(() => {
    let str = "profile_pending";
    if (isTryItOut) {
      str = "try_it_out";
    }
    const obj = { mode: str, source: null };
    let str2 = "profile_row";
    if (isTryItOut) {
      str2 = "profile_row_try_it_out";
    }
    obj.source = str2;
    nativeStackNavigation.navigate(UserSettingsSections.TYPING_INDICATOR, obj);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const stringResult = intl.string(
    isTryItOut(11453).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion),
  );
  const obj5 = {
    label: null,
    labelTrailing: null,
    leading: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
  };
  const intl2 = isTryItOut(1115).intl;
  obj5.label = intl2.string(nativeStackNavigation(3717)["pT+BVM"]);
  const obj4 = isTryItOut(11453);
  obj5.labelTrailing = jsx(isTryItOut(14176).UserProfileEditFormLabelBadges, {
    showPremiumIcon: true,
    showNewBadge: tmp3[0] === isTryItOut(2029).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  });
  obj5.leading = jsx(nativeStackNavigation(11463), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj5.buttonText = stringResult;
  obj5.accessibilityValue = { text: stringResult };
  obj5.onPress = tmp5;
  return jsx(isTryItOut(14176).UserProfileEditFormButton, {
    label: null,
    labelTrailing: null,
    leading: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
  });
}
