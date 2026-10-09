// === Module 18378: EligibilityActionSheet ===

// Module 18378 (EligibilityActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8621 */;
import useCreatorMonetizationEligibilityItemsDefault from "useCreatorMonetizationEligibilityItems" /* 18379 */;
import EligibilityChecklistDefault from "EligibilityChecklist" /* 18383 */;
import noop from "module_19" /* 19 */;

const require = fn;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const EligibilityActionSheet = "EligibilityActionSheet";
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 0 }, title: { marginHorizontal: 24, marginTop: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/EligibilityActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EligibilityActionSheet(onRequireModeratorMFAClick) {
  const cResult = onRequireModeratorMFAClick(576).c(12);
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      ActionSheetActionCreatorsDefault.hideActionSheet(EligibilityActionSheet);
      GuildSettingsActionCreatorsDefault.close();
      onRequireModeratorMFAClick(7087).openUserSettings({ screen: constants.ACCOUNT });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onRequireModeratorMFAClick) {
    let obj2 = { actions: null, sortedByIneligible: true };
    const obj3 = {
      onEnableMFAClick: first,
      onRequireModeratorMFAClick() {
          ActionSheetActionCreatorsDefault.hideActionSheet(EligibilityActionSheet);
          onRequireModeratorMFAClick();
        }
    };
    obj2.actions = obj3;
    cResult[1] = onRequireModeratorMFAClick;
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  const tmp8 = useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["3s47iN"]);
    cResult[3] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp4.title) {
    const obj4 = { style: tmp4.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp9 };
    const tmp13 = closure_5(tmp(5087).Heading, obj4);
    cResult[4] = tmp4.title;
    cResult[5] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp4.container) {
      let tmp14 = cResult[8];
    }
    if (cResult[9] === tmp11) {
      if (cResult[10] === tmp14) {
        let tmp16 = cResult[11];
      }
      return tmp16;
    }
    const obj5 = { startExpanded: true, children: null };
    const items = [tmp11, tmp14];
    obj5.children = items;
    const tmp18 = closure_6(tmp(6836).BottomSheet, obj5);
    cResult[9] = tmp11;
    cResult[10] = tmp14;
    cResult[11] = tmp18;
    tmp16 = tmp18;
  }
  const tmp15 = closure_5(EligibilityChecklistDefault, { style: tmp4.container, items: tmp8 });
  cResult[6] = tmp8;
  cResult[7] = tmp4.container;
  cResult[8] = tmp15;
  tmp14 = tmp15;
  let obj = onRequireModeratorMFAClick(576);
  const obj6 = { style: tmp4.container, items: tmp8 };
}) : (function EligibilityActionSheet(onRequireModeratorMFAClick) {
  onRequireModeratorMFAClick = onRequireModeratorMFAClick.onRequireModeratorMFAClick;
  const tmp = closure_8();
  const items = [onRequireModeratorMFAClick];
  const memo = noop.useMemo(() => ({
    actions: {
      onEnableMFAClick() {
        closure_1_1(5055).hideActionSheet(closure_1_7);
        const obj = closure_1_1(5055);
        closure_1_1(8621).close();
        const obj2 = closure_1_1(8621);
        onRequireModeratorMFAClick(7087).openUserSettings({ screen: constants.ACCOUNT });
      },
      onRequireModeratorMFAClick() {
        ActionSheetActionCreatorsDefault.hideActionSheet(EligibilityActionSheet);
        onRequireModeratorMFAClick();
      }
    },
    sortedByIneligible: true
  }), items);
  let obj = { startExpanded: true, children: null };
  let obj2 = { style: tmp.title, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = onRequireModeratorMFAClick(1126).intl;
  obj2.children = intl.string(onRequireModeratorMFAClick(1126).t["3s47iN"]);
  const items1 = [closure_5(onRequireModeratorMFAClick(5087).Heading, obj2), ];
  const tmp3 = useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo);
  items1[1] = closure_5(EligibilityChecklistDefault, { style: tmp.container, items: useCreatorMonetizationEligibilityItemsDefault(onRequireModeratorMFAClick.eligibility, memo) });
  obj.children = items1;
  return closure_6(onRequireModeratorMFAClick(6836).BottomSheet, obj);
});
export const ELIGIBILITY_ACTION_SHEET_KEY = "EligibilityActionSheet";