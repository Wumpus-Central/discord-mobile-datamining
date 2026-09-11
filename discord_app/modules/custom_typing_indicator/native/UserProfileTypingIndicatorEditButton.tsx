// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx",
);

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let obj = isTryItOut(1483);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const currentCustomTypingIndicatorConfig = isTryItOut(12064).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(12064);
  const items = [isTryItOut(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp3 = _slicedToArray(isTryItOut(7461).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp4;
  const items1 = [nativeStackNavigation, isTryItOut, tmp3[1]];
  const obj3 = isTryItOut(7461);
  const intl = isTryItOut(1114).intl;
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
    isTryItOut(12064).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion),
  );
  obj = { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null };
  const intl2 = isTryItOut(1114).intl;
  obj.label = intl2.string(nativeStackNavigation(3592)["pT+BVM"]);
  obj = {
    showPremiumIcon: true,
    showNewBadge: tmp3[0] === isTryItOut(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  };
  obj.labelTrailing = jsx(isTryItOut(14671).UserProfileEditFormLabelBadges, {
    showPremiumIcon: true,
    showNewBadge: tmp3[0] === isTryItOut(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  });
  obj.leading = jsx(nativeStackNavigation(12074), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj.buttonText = stringResult;
  obj.accessibilityValue = { text: stringResult };
  obj.onPress = tmp5;
  return jsx(isTryItOut(14671).UserProfileEditFormButton, {
    showPremiumIcon: true,
    showNewBadge: tmp3[0] === isTryItOut(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
  });
}
