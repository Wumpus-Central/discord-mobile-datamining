// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import _slicedToArray from "_slicedToArray";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import { messagesProxy } from "../intl/CustomTypingIndicator.messages.js";

const require = arg1;
require("noop").useCallback;
const result = require("ME").fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default function UserProfileTypingIndicatorEditButton() {
  let obj = nativeStackNavigation(1480);
  nativeStackNavigation = obj.useNativeStackNavigation();
  const items = [nativeStackNavigation(1358).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp2 = callback(nativeStackNavigation(6022).useSelectedDismissibleContent(items, undefined, true), 2);
  const importDefault = tmp3;
  const items1 = [nativeStackNavigation, tmp2[1]];
  const obj2 = nativeStackNavigation(6022);
  obj = { label: null, labelTrailing: null, buttonText: null, onPress: null };
  const intl = nativeStackNavigation(1236).intl;
  obj[0] = intl.string(messagesProxy["pT+BVM"]);
  obj = { showPremiumIcon: true, showNewBadge: null };
  obj[1] = tmp2[0] === nativeStackNavigation(1358).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  obj[1] = jsx(nativeStackNavigation(13928).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: null });
  const intl2 = nativeStackNavigation(1236).intl;
  obj[2] = intl2.string(nativeStackNavigation(1236).t.PoWNfe);
  obj[3] = useCallback(() => {
    nativeStackNavigation.navigate(outer1_5.TYPING_INDICATOR);
    tmp3(outer1_6.TAKE_ACTION);
  }, items1);
  return jsx(nativeStackNavigation(13928).UserProfileEditFormButton, { showPremiumIcon: true, showNewBadge: null });
};