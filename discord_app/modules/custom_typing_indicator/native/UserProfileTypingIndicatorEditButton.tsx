// === Module 14516: UserProfileTypingIndicatorEditButton ===

// Module 14516 (UserProfileTypingIndicatorEditButton)
import closure_3 from "_slicedToArray" /* 32 */;
import { UserSettingsSections } from "ME" /* 673 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
require("noop").useCallback;
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default function UserProfileTypingIndicatorEditButton(isTryItOut) {
  isTryItOut = isTryItOut.isTryItOut;
  let nativeStackNavigation;
  dependencyMap = undefined;
  let obj = isTryItOut(1498);
  nativeStackNavigation = obj.useNativeStackNavigation();
  const currentCustomTypingIndicatorConfig = isTryItOut(11766).useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const obj2 = isTryItOut(11766);
  const items = [isTryItOut(1372).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp3 = callback(isTryItOut(6260).useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp4;
  const items1 = [nativeStackNavigation, isTryItOut, tmp3[1]];
  const obj3 = isTryItOut(6260);
  const intl = isTryItOut(1233).intl;
  const tmp5 = useCallback(() => {
    let str = "profile_pending";
    if (isTryItOut) {
      str = "try_it_out";
    }
    nativeStackNavigation.navigate(closure_1_5.TYPING_INDICATOR, { mode: str });
    callback(closure_1_6.TAKE_ACTION);
  }, items1);
  const stringResult = intl.string(isTryItOut(11766).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  obj = { label: null, labelTrailing: null, leading: null, buttonText: null, accessibilityValue: null, onPress: null };
  const intl2 = isTryItOut(1233).intl;
  obj[0] = intl2.string(nativeStackNavigation(3502)["pT+BVM"]);
  obj = { showPremiumIcon: true, showNewBadge: tmp3[0] === isTryItOut(1372).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE };
  obj[1] = jsx(isTryItOut(14495).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp3[0] === isTryItOut(1372).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  obj[2] = jsx(nativeStackNavigation(11776), { config: currentCustomTypingIndicatorConfig, size: 24 });
  obj[3] = stringResult;
  obj[4] = { text: stringResult };
  obj[5] = tmp5;
  return jsx(isTryItOut(14495).UserProfileEditFormButton, { showPremiumIcon: true, showNewBadge: tmp3[0] === isTryItOut(1372).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
};