// === Module 19839: AccountLinkUpsellBottomSheet ===

// Module 19839 (AccountLinkUpsellBottomSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { content: { padding: nativeDefault.space.PX_16 }, text: { textAlign: "center" }, footer: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.footer = { display: "flex", paddingTop: nativeDefault.space.PX_24, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16, flexDirection: "column", justifyContent: "center", alignItems: "center" };
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkUpsellBottomSheet.tsx");

export const useAccountLinkBottomSheetStyles = styles;
export function AccountLinkUpsellBottomSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onSuccess = markAsDismissed.onSuccess;
  let startAuthorization;
  ({ application, body } = markAsDismissed);
  startAuthorization = onSuccess(startAuthorization[5])(application).startAuthorization;
  const tmp = styles();
  const analyticsLocations = onSuccess(startAuthorization[6])(onSuccess(startAuthorization[7]).ACTION_SHEET).analyticsLocations;
  items = [analyticsLocations, startAuthorization, markAsDismissed, onSuccess];
  const callback = analyticsLocations.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.PRIMARY);
    }
    startAuthorization({ analyticsLocations, onSuccess });
    const obj2 = { analyticsLocations, onSuccess };
  }, items);
  let obj = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    children: null
  };
  const items1 = [body, ];
  let obj2 = { style: tmp.footer, children: null };
  const obj3 = { text: null, variant: "primary", icon: null, iconPosition: "start", size: "lg", onPress: null, grow: true };
  const intl = markAsDismissed(startAuthorization[12]).intl;
  obj3.text = intl.string(onSuccess(startAuthorization[13])["2cOIOr"]);
  const tmp2 = onSuccess(startAuthorization[6]);
  obj3.icon = closure_5(markAsDismissed(startAuthorization[14]).ExperimentalGameControllerLinkIcon, { size: "sm", color: onSuccess(startAuthorization[4]).colors.WHITE });
  obj3.onPress = callback;
  obj2.children = closure_5(markAsDismissed(startAuthorization[11]).Button, obj3);
  items1[1] = closure_5(markAsDismissed(startAuthorization[10]).Stack, obj2);
  obj.children = items1;
  return closure_6(markAsDismissed(startAuthorization[9]).BottomSheet, obj);
}