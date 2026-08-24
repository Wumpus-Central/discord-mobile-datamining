// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import messagesProxyDefault from "../intl/CustomTypingIndicator.messages.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import { UserSettingsSections } from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
require("noop").useCallback;
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default function UserProfileTypingIndicatorEditButton() {
  let obj = nativeStackNavigation(1500);
  nativeStackNavigation = obj.useNativeStackNavigation();
  const items = [nativeStackNavigation(1377).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp2 = callback(nativeStackNavigation(7366).useSelectedDismissibleContent(items, undefined, true), 2);
  importDefault = tmp3;
  const items1 = [nativeStackNavigation, tmp2[1]];
  const obj2 = nativeStackNavigation(7366);
  obj = { label: null, labelTrailing: null, buttonText: null, onPress: null };
  const intl = nativeStackNavigation(1236).intl;
  obj[0] = intl.string(messagesProxyDefault["pT+BVM"]);
  obj = { showPremiumIcon: true, showNewBadge: tmp2[0] === nativeStackNavigation(1377).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE };
  obj[1] = jsx(nativeStackNavigation(14036).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp2[0] === nativeStackNavigation(1377).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const intl2 = nativeStackNavigation(1236).intl;
  obj[2] = intl2.string(nativeStackNavigation(1236).t.PoWNfe);
  obj[3] = useCallback(() => {
    nativeStackNavigation.navigate(closure_1_5.TYPING_INDICATOR);
    callback(closure_1_6.TAKE_ACTION);
  }, items1);
  return jsx(nativeStackNavigation(14036).UserProfileEditFormButton, { showPremiumIcon: true, showNewBadge: tmp2[0] === nativeStackNavigation(1377).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
};