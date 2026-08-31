// === Module 14260: UserProfileTypingIndicatorEditButton ===

// Module 14260 (UserProfileTypingIndicatorEditButton)
import closure_3 from "_slicedToArray" /* 32 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
require("noop").useCallback;
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let nativeStackNavigation;
  dependencyMap = undefined;
  let obj = isTryItOut(1499);
  nativeStackNavigation = obj.useNativeStackNavigation();
  const currentCustomTypingIndicatorConfig = isTryItOut(11510).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(11510);
  const items = [isTryItOut(1373).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp3 = callback(isTryItOut(6219).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp4;
  const items1 = [nativeStackNavigation, isTryItOut, tmp3[1]];
  const obj3 = isTryItOut(6219);
  const intl = isTryItOut(1236).intl;
  const tmp5 = useCallback(() => {
    nativeStackNavigation.navigate(closure_1_5.TYPING_INDICATOR, { isTryItOut });
    callback(closure_1_6.TAKE_ACTION);
  }, items1);
  const stringResult = intl.string(isTryItOut(11510).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  obj = { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null };
  const intl2 = isTryItOut(1236).intl;
  obj[0] = intl2.string(nativeStackNavigation(3473)["pT+BVM"]);
  obj = { showPremiumIcon: true, showNewBadge: tmp3[0] === isTryItOut(1373).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE };
  obj[1] = jsx(isTryItOut(14239).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp3[0] === isTryItOut(1373).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  obj[2] = jsx(nativeStackNavigation(11520), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj[3] = stringResult;
  obj[4] = { text: stringResult };
  obj[5] = tmp5;
  return jsx(isTryItOut(14239).UserProfileEditFormButton, { showPremiumIcon: true, showNewBadge: tmp3[0] === isTryItOut(1373).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
};