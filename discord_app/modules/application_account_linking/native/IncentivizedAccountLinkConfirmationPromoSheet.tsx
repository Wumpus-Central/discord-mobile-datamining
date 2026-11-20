// === Module 18964: IncentivizedAccountLinkConfirmationPromoSheet ===

// Module 18964 (IncentivizedAccountLinkConfirmationPromoSheet)
import initialize from "initialize" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import FastImageDefault from "FastImage" /* 5481 */;
import PromoSheet from "PromoSheet" /* 11105 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4794);
let closure_5 = createStyles.createStyles({ illustration: { width: 150, height: 150 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationPromoSheet.tsx");

export default function IncentivizedAccountLinkConfirmationPromoSheet(arg0) {
  ({ title, description, actions } = arg0);
  const tmp = closure_5();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: null, resizeMode: "contain", style: null, enableAnimation: null };
  const obj3 = { uri: null };
  obj3.uri = importDefault(stateFromStores ? 17196 : 17197);
  obj2.source = obj3;
  obj2.style = tmp.illustration;
  obj2.enableAnimation = !stateFromStores;
  const tmp5Result = jsx(FastImageDefault, { source: null, resizeMode: "contain", style: null, enableAnimation: null });
  return jsx(PromoSheet.PromoSheet, {
    title,
    description,
    actions,
    illustration: jsx(FastImageDefault, { source: null, resizeMode: "contain", style: null, enableAnimation: null }),
    onDismiss: function handleDismiss() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  });
};