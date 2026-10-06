// === Module 14484: UserProfileTypingIndicatorEditButton ===

// Module 14484 (UserProfileTypingIndicatorEditButton)
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, isTryItOut, navigateResult, tmp;

const useCallback = react.useCallback;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isTryItOut) => {
  let closure_2;
  let first;
  let obj = isTryItOut(576);
  const cResult = obj.c(20);
  isTryItOut = isTryItOut.isTryItOut;
  const obj2 = isTryItOut(1490);
  const nativeStackNavigation = obj2.useNativeStackNavigation();
  const obj3 = isTryItOut(11600);
  const currentCustomTypingIndicatorConfig = obj3.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isTryItOut(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmpResult = isTryItOut(6901);
  const tmp9 = _slicedToArray(tmpResult.useSelectedDismissibleContent(first, undefined, true), 2)[1];
  dependencyMap = tmp9;
  if (cResult[1] === isTryItOut) {
    if (cResult[2] === tmp9) {
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp17;
      let tmp20;
      let tmp24;
      if (cResult[3] === nativeStackNavigation) {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== currentCustomTypingIndicatorConfig.typingSuggestion) {
        const intl = tmp(1126).intl;
        const string = intl.string;
        const tmpResult2 = isTryItOut(11600);
        const stringResult = string(tmpResult2.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
        cResult[5] = currentCustomTypingIndicatorConfig.typingSuggestion;
        cResult[6] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(nativeStackNavigation(3755)["pT+BVM"]);
        cResult[7] = stringResult1;
        tmp13 = stringResult1;
      } else {
        tmp13 = cResult[7];
      }
      const tmp16 = tmp8 === isTryItOut(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
      if (cResult[8] !== tmp16) {
        const tmp19 = jsx(isTryItOut(14461).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp16 });
        cResult[8] = tmp16;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] !== currentCustomTypingIndicatorConfig) {
        const tmp23 = jsx(nativeStackNavigation(11608), { config: currentCustomTypingIndicatorConfig, size: 24 });
        cResult[10] = currentCustomTypingIndicatorConfig;
        cResult[11] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[11];
      }
      if (cResult[12] !== tmp11) {
        const obj6 = { text: tmp11 };
        cResult[12] = tmp11;
        cResult[13] = obj6;
        tmp24 = obj6;
      } else {
        tmp24 = cResult[13];
      }
      if (cResult[14] === tmp11) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp17) {
            if (cResult[17] === tmp20) {
              let tmp25;
              if (cResult[18] === tmp24) {
                tmp25 = cResult[19];
              }
              return tmp25;
            }
          }
        }
      }
      const tmp27 = jsx(isTryItOut(14461).UserProfileEditFormButton, { label: tmp13, labelTrailing: tmp17, leading: tmp20, buttonText: tmp11, accessibilityValue: tmp24, onPress: tmp10 });
      cResult[14] = tmp11;
      cResult[15] = tmp10;
      cResult[16] = tmp17;
      cResult[17] = tmp20;
      class C {
        constructor() {
          str = "profile_pending";
          tmp = closure_1;
          navigate = closure_1.navigate;
          TYPING_INDICATOR = UserSettingsSections.TYPING_INDICATOR;
          tmp2 = isTryItOut;
          if (tmp2) {
            str = "try_it_out";
          }
          obj = { mode: str, source: null };
          str2 = "profile_row";
          if (tmp2) {
            str2 = "profile_row_try_it_out";
          }
          obj.source = str2;
          navigateResult = navigate(TYPING_INDICATOR, obj);
          tmp4 = closure_2(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
      cResult[18] = tmp24;
      cResult[19] = tmp27;
      tmp25 = tmp27;
    }
  }
  class C {
    constructor() {
      str = "profile_pending";
      tmp = closure_1;
      navigate = closure_1.navigate;
      TYPING_INDICATOR = UserSettingsSections.TYPING_INDICATOR;
      tmp2 = isTryItOut;
      if (tmp2) {
        str = "try_it_out";
      }
      obj = { mode: str, source: null };
      str2 = "profile_row";
      if (tmp2) {
        str2 = "profile_row_try_it_out";
      }
      obj.source = str2;
      navigateResult = navigate(TYPING_INDICATOR, obj);
      tmp4 = closure_2(ContentDismissActionType.TAKE_ACTION);
      return;
    }
  }
  cResult[1] = isTryItOut;
  cResult[2] = tmp9;
  cResult[3] = nativeStackNavigation;
  cResult[4] = C;
  tmp10 = C;
}) : ((isTryItOut) => {
  let closure_2;
  isTryItOut = isTryItOut.isTryItOut;
  let obj = isTryItOut(1490);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  const obj2 = isTryItOut(11600);
  const currentCustomTypingIndicatorConfig = obj2.useCurrentCustomTypingIndicatorConfig(isTryItOut);
  const useSelectedDismissibleContent = isTryItOut(6901).useSelectedDismissibleContent;
  const items = [];
  isTryItOut(6901);
  items[0] = isTryItOut(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
  const tmp4 = _slicedToArray(useSelectedDismissibleContent(items, undefined, true), 2);
  dependencyMap = tmp6;
  const items1 = [nativeStackNavigation, isTryItOut, tmp4[1]];
  const first = tmp4[0];
  const tmp7 = useCallback(() => {
    let str2;
    let str = "profile_pending";
    const navigate = nativeStackNavigation.navigate;
    const TYPING_INDICATOR = UserSettingsSections.TYPING_INDICATOR;
    if (isTryItOut) {
      str = "try_it_out";
    }
    const obj = { mode: str, source: str2 };
    str2 = "profile_row";
    if (isTryItOut) {
      str2 = "profile_row_try_it_out";
    }
    navigate(TYPING_INDICATOR, obj);
    closure_2(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const intl = isTryItOut(1126).intl;
  const string = intl.string;
  const obj3 = isTryItOut(11600);
  const stringResult = string(obj3.getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion));
  const UserProfileEditFormButton = isTryItOut(14461).UserProfileEditFormButton;
  const intl2 = isTryItOut(1126).intl;
  ({ showPremiumIcon: true, showNewBadge: first === isTryItOut(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE });
  const UserProfileEditFormLabelBadges = isTryItOut(14461).UserProfileEditFormLabelBadges;
  return <UserProfileEditFormButton label={intl2.string(nativeStackNavigation(3755)["pT+BVM"])} labelTrailing={null} leading={null} buttonText={stringResult} accessibilityValue={{ text: stringResult }} onPress={tmp7} />;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx");

export default tmp2;