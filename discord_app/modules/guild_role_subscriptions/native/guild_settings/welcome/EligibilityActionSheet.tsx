// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useCreatorMonetizationEligibilityItemsDefault from "../../../../creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx";
import EligibilityChecklistDefault from "../../components/EligibilityChecklist.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const EligibilityActionSheet = "EligibilityActionSheet";
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  container: { flex: 1, paddingHorizontal: 0 },
  title: { marginHorizontal: 24, marginTop: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx",
);

export default function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = closure_8();
  const items = [onRequireModeratorMFAClick];
  const memo = noop.useMemo(
    () => ({
      actions: {
        onEnableMFAClick() {
          let obj = closure_1_1(4527);
          obj.hideActionSheet(closure_1_7);
          closure_1_1(9063).close();
          const obj2 = closure_1_1(9063);
          obj = { screen: constants.ACCOUNT };
          onRequireModeratorMFAClick(7382).openUserSettings(obj);
        },
        onRequireModeratorMFAClick() {
          ActionSheetActionCreatorsDefault.hideActionSheet(EligibilityActionSheet);
          onRequireModeratorMFAClick();
        },
      },
      sortedByIneligible: true,
    }),
    items,
  );
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = onRequireModeratorMFAClick(1114).intl;
  obj.children = intl.string(onRequireModeratorMFAClick(1114).t["3s47iN"]);
  const items1 = [closure_5(onRequireModeratorMFAClick(4556).Heading, obj)];
  obj = {
    style: tmp.container,
    items: useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo),
  };
  items1[1] = closure_5(EligibilityChecklistDefault, obj);
  obj.children = items1;
  return closure_6(onRequireModeratorMFAClick(7150).BottomSheet, obj);
}
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";
