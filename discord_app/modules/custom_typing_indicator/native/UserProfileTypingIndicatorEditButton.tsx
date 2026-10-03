// discord_app/modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = fn;
fn(19).useCallback;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (isTryItOut) => {
      const cResult = isTryItOut(576).c(20);
      isTryItOut = isTryItOut.isTryItOut;
      let obj = isTryItOut(576);
      const nativeStackNavigation = isTryItOut(1490).useNativeStackNavigation();
      const obj2 = isTryItOut(1490);
      const currentCustomTypingIndicatorConfig = isTryItOut(11587).useCurrentCustomTypingIndicatorConfig(isTryItOut);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [tmp(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      const obj3 = isTryItOut(11587);
      const tmpResult = isTryItOut(6891);
      const tmp9 = _slicedToArray(isTryItOut(6891).useSelectedDismissibleContent(first, undefined, true), 2)[1];
      dependencyMap = tmp9;
      if (cResult[1] === isTryItOut) {
        if (cResult[2] === tmp9) {
          if (cResult[3] === nativeStackNavigation) {
            let tmp10 = cResult[4];
          }
          if (cResult[5] !== currentCustomTypingIndicatorConfig.typingSuggestion) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(
              tmp(11587).getCustomTypingIndicatorSuggestionMessage(currentCustomTypingIndicatorConfig.typingSuggestion),
            );
            cResult[5] = currentCustomTypingIndicatorConfig.typingSuggestion;
            cResult[6] = stringResult;
            let tmp11 = stringResult;
            const tmpResult2 = tmp(11587);
          } else {
            tmp11 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(nativeStackNavigation(3725)["pT+BVM"]);
            cResult[7] = stringResult1;
            let tmp13 = stringResult1;
          } else {
            tmp13 = cResult[7];
          }
          const tmp16 = tmp8 === tmp(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE;
          if (cResult[8] !== tmp16) {
            const obj4 = { showPremiumIcon: true, showNewBadge: tmp16 };
            const tmp19 = jsx(tmp(14441).UserProfileEditFormLabelBadges, {
              showPremiumIcon: true,
              showNewBadge: tmp16,
            });
            cResult[8] = tmp16;
            cResult[9] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] !== currentCustomTypingIndicatorConfig) {
            const obj5 = { config: currentCustomTypingIndicatorConfig, size: 24 };
            const tmp23 = jsx(nativeStackNavigation(11595), { config: currentCustomTypingIndicatorConfig, size: 24 });
            cResult[10] = currentCustomTypingIndicatorConfig;
            cResult[11] = tmp23;
            let tmp20 = tmp23;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] !== tmp11) {
            const obj6 = { text: tmp11 };
            cResult[12] = tmp11;
            cResult[13] = obj6;
            let tmp24 = obj6;
          } else {
            tmp24 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp17) {
                if (cResult[17] === tmp20) {
                  if (cResult[18] === tmp24) {
                    let tmp25 = cResult[19];
                  }
                  return tmp25;
                }
              }
            }
          }
          const obj7 = {
            label: tmp13,
            labelTrailing: tmp17,
            leading: tmp20,
            buttonText: tmp11,
            accessibilityValue: tmp24,
            onPress: tmp10,
          };
          const tmp27 = jsx(tmp(14441).UserProfileEditFormButton, {
            label: tmp13,
            labelTrailing: tmp17,
            leading: tmp20,
            buttonText: tmp11,
            accessibilityValue: tmp24,
            onPress: tmp10,
          });
          cResult[14] = tmp11;
          cResult[15] = tmp10;
          cResult[16] = tmp17;
          cResult[17] = tmp20;
          class C {
            constructor() {
              str = "profile_pending";
              tmp = closure_1;
              tmp2 = isTryItOut;
              if (isTryItOut) {
                str = "try_it_out";
              }
              obj = { mode: str, source: null };
              str2 = "profile_row";
              if (tmp2) {
                str2 = "profile_row_try_it_out";
              }
              obj.source = str2;
              navigateResult = closure_1.navigate(UserSettingsSections.TYPING_INDICATOR, obj);
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
          tmp2 = isTryItOut;
          if (isTryItOut) {
            str = "try_it_out";
          }
          obj = { mode: str, source: null };
          str2 = "profile_row";
          if (tmp2) {
            str2 = "profile_row_try_it_out";
          }
          obj.source = str2;
          navigateResult = closure_1.navigate(UserSettingsSections.TYPING_INDICATOR, obj);
          tmp4 = closure_2(ContentDismissActionType.TAKE_ACTION);
          return;
        }
      }
      cResult[1] = isTryItOut;
      cResult[2] = tmp9;
      cResult[3] = nativeStackNavigation;
      cResult[4] = C;
      tmp10 = C;
      const tmp7 = _slicedToArray(isTryItOut(6891).useSelectedDismissibleContent(first, undefined, true), 2);
    }
  : (isTryItOut) => {
      isTryItOut = isTryItOut.isTryItOut;
      const nativeStackNavigation = isTryItOut(1490).useNativeStackNavigation();
      let obj = isTryItOut(1490);
      const currentCustomTypingIndicatorConfig = isTryItOut(11587).useCurrentCustomTypingIndicatorConfig(isTryItOut);
      const obj2 = isTryItOut(11587);
      const items = [isTryItOut(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE];
      const tmp3 = _slicedToArray(isTryItOut(6891).useSelectedDismissibleContent(items, undefined, true), 2);
      dependencyMap = tmp4;
      const items1 = [nativeStackNavigation, isTryItOut, tmp3[1]];
      const obj3 = isTryItOut(6891);
      const intl = isTryItOut(1126).intl;
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
        isTryItOut(11587).getCustomTypingIndicatorSuggestionMessage(
          currentCustomTypingIndicatorConfig.typingSuggestion,
        ),
      );
      const obj5 = {
        label: null,
        labelTrailing: null,
        leading: null,
        buttonText: null,
        accessibilityValue: null,
        onPress: null,
      };
      const intl2 = isTryItOut(1126).intl;
      obj5.label = intl2.string(nativeStackNavigation(3725)["pT+BVM"]);
      const obj4 = isTryItOut(11587);
      obj5.labelTrailing = jsx(isTryItOut(14441).UserProfileEditFormLabelBadges, {
        showPremiumIcon: true,
        showNewBadge:
          tmp3[0] === isTryItOut(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE,
      });
      obj5.leading = jsx(nativeStackNavigation(11595), { config: currentCustomTypingIndicatorConfig, size: 24 });
      obj5.buttonText = stringResult;
      obj5.accessibilityValue = { text: stringResult };
      obj5.onPress = tmp5;
      return jsx(isTryItOut(14441).UserProfileEditFormButton, {
        label: null,
        labelTrailing: null,
        leading: null,
        buttonText: null,
        accessibilityValue: null,
        onPress: null,
      });
    };
