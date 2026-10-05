// === Module 17600: ParentalConsentWarningModal ===

// Module 17600 (ParentalConsentWarningModal)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2038 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 5096 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7050 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ FamilyCenterSubPages: metroRequire, UserLinkStatus: metroImportDefault, UserLinkType: metroImportAll } = FamilyCenterConstants);
({ AnalyticEvents: c9, UserSettingsSections: c10 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const modal = "modal";
let closure_15 = dismissible_content.DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING;
let createStyles = createStyles_mod;
let obj = { container: obj2, illustration: obj3, title: { textAlign: "center" }, body: { textAlign: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
let result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningModal.tsx");

export default function ParentalConsentWarningModal(daysRemaining) {
  let Stack;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let obj5;
  let obj6;
  let ref;
  let stringResult;
  let stringResult1;
  daysRemaining = daysRemaining.daysRemaining;
  importDefault = undefined;
  let callback;
  let callback1;
  let tmp = closure_16();
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = daysRemaining(callback[15]);
  const syncMessages = obj.useSyncMessages(daysRemaining(callback[16]).messagesLoader);
  const effect = callback1.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { surface_type: modal, days_remaining: daysRemaining };
    obj.track(constants.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, obj2);
    const obj3 = DispatcherDefault;
    obj3.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
  }, []);
  importDefault = callback1.useRef(false);
  callback = callback1.useCallback(() => {
    let flag = !ref.current;
    if (flag) {
      tmp.current = true;
      const obj2 = { dismissAction: ContentDismissActionType.USER_DISMISS };
      const obj = DismissibleContentUtils;
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(closure_15, obj2);
      flag = true;
    }
    return flag;
  }, []);
  const items = [daysRemaining, callback];
  callback1 = callback1.useCallback(() => {
    if (callback()) {
      const obj2 = { surface_type: modal, days_remaining: daysRemaining };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, obj2);
    }
  }, items);
  const items1 = [callback1];
  const items2 = [callback];
  const callback2 = callback1.useCallback(() => {
    callback1();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items1);
  const callback3 = callback1.useCallback(() => {
    const tmp = callback();
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const values = Object.values(FamilyCenterStore.getLinkedUsers());
    if (values.some((link_status) => link_status.link_status === constants.PENDING && link_status.link_type === constants2.PARENT)) {
      const tmp2Result = FamilyCenterActionCreatorsDefault;
      const tab = tmp2Result.selectTab(metroRequire.REQUESTS);
      const obj5 = RootNavigationRef;
      const rootNavigationRef = obj5.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          let obj2 = { screen: constants2.FAMILY_CENTER };
          const tmp9Result = openUserSettings;
          tmp9Result.openUserSettings(obj2);
        }
      }
      const tmp2Result3 = ModalDispatchQueueDefault;
      tmp2Result3.enqueue(() => {
        const obj = daysRemaining(callback[10]);
        const obj2 = { screen: constants3.FAMILY_CENTER };
        return obj.openUserSettings(obj2);
      });
    } else {
      const tmp2Result4 = ModalActionCreatorsDefault;
      tmp2Result4.pushLazy(asyncRequire(17601, dependencyMap.paths));
    }
  }, items2);
  const intl = daysRemaining(callback[15]).intl;
  if (0 === daysRemaining) {
    stringResult = intl.string(tmp2(tmp3[16]).Zo5YZD);
  } else {
    let obj2 = { count: daysRemaining };
    stringResult = intl.formatToPlainString(tmp2(tmp3[16]).b4sYUn, obj2);
  }
  const intl2 = tmp4(tmp3[15]).intl;
  if (0 === daysRemaining) {
    stringResult1 = intl2.string(tmp2(tmp3[16]).CRZBSY);
  } else {
    let obj3 = { count: daysRemaining };
    stringResult1 = intl2.formatToPlainString(tmp2(tmp3[16]).mQcGGY, obj3);
  }
  const obj4 = { startExpanded: true, onDismiss: callback1, children: closure_12(View, obj5) };
  obj5 = { style: items3, children: closure_13(Stack, obj6) };
  items3 = [tmp.container, { paddingBottom: bottom }];
  BottomSheet = tmp4(tmp3[24]).BottomSheet;
  obj6 = { spacing: require("native").space.PX_16, children: items4 };
  Stack = tmp4(tmp3[25]).Stack;
  items4 = [, , , ];
  const obj7 = { style: tmp.illustration, children: closure_12(daysRemaining(callback[26]).FamilyKeysSpotIllustration, { accessible: false }) };
  items4[0] = closure_12(View, obj7);
  const obj8 = { variant: "heading-lg/bold", color: "text-default", style: tmp.title, accessibilityRole: "header", children: stringResult };
  items4[1] = closure_12(daysRemaining(callback[27]).Text, obj8);
  const obj9 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: stringResult1 };
  items4[2] = closure_12(daysRemaining(callback[27]).Text, obj9);
  const obj10 = { spacing: require("native").space.PX_8, children: items5 };
  const Stack2 = tmp4(tmp3[25]).Stack;
  const obj11 = { size: "lg", variant: "primary", grow: true, text: intl3.string(require("module_2493").Kp7sjX), onPress: callback3 };
  const Button = tmp4(tmp3[28]).Button;
  intl3 = tmp4(tmp3[15]).intl;
  items5 = [closure_12(Button, obj11), ];
  const obj12 = { size: "lg", variant: "secondary", grow: true, text: intl4.string(require("module_2493").hST5o8), accessibilityHint: intl5.string(require("module_2493")["4fZtHa"]), onPress: callback2 };
  const Button2 = tmp4(tmp3[28]).Button;
  intl4 = tmp4(tmp3[15]).intl;
  intl5 = tmp4(tmp3[15]).intl;
  items5[1] = closure_12(Button2, obj12);
  items4[3] = closure_13(Stack2, obj10);
  return closure_12(BottomSheet, obj4);
};