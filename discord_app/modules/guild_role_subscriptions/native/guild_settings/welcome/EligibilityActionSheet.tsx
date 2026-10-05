// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx
import Constants from "../../../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import useCreatorMonetizationEligibilityItemsDefault from "../../../../creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx";
import EligibilityChecklistDefault from "../../components/EligibilityChecklist.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let BottomSheet, onRequireModeratorMFAClick;

let hasOwnProperty;
let metroRequire;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const EligibilityActionSheet = "EligibilityActionSheet";
let closure_8 = createStyles.createStyles({
  container: { flex: 1, paddingHorizontal: 0 },
  title: { marginHorizontal: 24, marginTop: 16 },
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onRequireModeratorMFAClick) => {
      let first;
      let items;
      let obj3;
      let tmp11;
      let tmp6;
      let tmp9;
      let obj = onRequireModeratorMFAClick(576);
      const cResult = obj.c(12);
      onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
      const eligibility = onRequireModeratorMFAClick.eligibility;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(EligibilityActionSheet);
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.close();
          const obj3 = onRequireModeratorMFAClick(dependencyMap[8]);
          const obj4 = { screen: constants.ACCOUNT };
          obj3.openUserSettings(obj4);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onRequireModeratorMFAClick) {
        let obj2 = { actions: obj3, sortedByIneligible: true };
        obj3 = {
          onEnableMFAClick: first,
          onRequireModeratorMFAClick() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(EligibilityActionSheet);
            onRequireModeratorMFAClick();
          },
        };
        cResult[1] = onRequireModeratorMFAClick;
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      const tmp8 = useCreatorMonetizationEligibilityItemsDefault(eligibility, tmp6);
      const title = tmp4.title;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(onRequireModeratorMFAClick(1126).t["3s47iN"]);
        cResult[3] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp4.title) {
        let obj4 = {
          style: title,
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: tmp9,
        };
        const tmp13 = closure_5(onRequireModeratorMFAClick(4886).Heading, obj4);
        cResult[4] = tmp4.title;
        cResult[5] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp8) {
        let tmp14;
        if (cResult[7] === tmp4.container) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp11) {
          let tmp16;
          if (cResult[10] === tmp14) {
            tmp16 = cResult[11];
          }
          return tmp16;
        }
        const obj5 = { startExpanded: true, children: items };
        items = [tmp11, tmp14];
        const tmp18 = closure_6(onRequireModeratorMFAClick(6645).BottomSheet, obj5);
        cResult[9] = tmp11;
        cResult[10] = tmp14;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const obj6 = { style: tmp4.container, items: tmp8 };
      const tmp15 = closure_5(EligibilityChecklistDefault, obj6);
      cResult[6] = tmp8;
      cResult[7] = tmp4.container;
      cResult[8] = tmp15;
      tmp14 = tmp15;
    }
  : (onRequireModeratorMFAClick) => {
      let intl;
      let items1;
      onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
      const eligibility = onRequireModeratorMFAClick.eligibility;
      const tmp = closure_8();
      const items = [onRequireModeratorMFAClick];
      const memo = react.useMemo(() => {
        let obj = {
          actions: {
            onEnableMFAClick() {
              const obj = closure_1_1(closure_1_2[6]);
              obj.hideActionSheet(closure_1_7);
              const obj2 = closure_1_1(closure_1_2[7]);
              obj2.close();
              const obj3 = onRequireModeratorMFAClick(closure_1_2[8]);
              const obj4 = { screen: constants.ACCOUNT };
              obj3.openUserSettings(obj4);
            },
            onRequireModeratorMFAClick() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(EligibilityActionSheet);
              onRequireModeratorMFAClick();
            },
          },
          sortedByIneligible: true,
        };
        return obj;
      }, items);
      let obj = { startExpanded: true, children: items1 };
      const tmp3 = useCreatorMonetizationEligibilityItemsDefault(eligibility, memo);
      BottomSheet = onRequireModeratorMFAClick(6645).BottomSheet;
      let obj2 = {
        style: tmp.title,
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        children: intl.string(onRequireModeratorMFAClick(1126).t["3s47iN"]),
      };
      const Heading = onRequireModeratorMFAClick(4886).Heading;
      intl = onRequireModeratorMFAClick(1126).intl;
      items1 = [closure_5(Heading, obj2)];
      let obj3 = { style: tmp.container, items: tmp3 };
      items1[1] = closure_5(EligibilityChecklistDefault, obj3);
      return closure_6(BottomSheet, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx",
);

export default tmp3;
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
