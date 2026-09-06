// discord_app/modules/parent_tools/native/ParentalConsentWarningModal.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import DismissibleContentUtils from "../../dismissible_content/DismissibleContentUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ModalDispatchQueueDefault from "../../main_tabs_v2/native/modal/ModalDispatchQueue.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const View = fn(17).View;
const FamilyCenterConstants = fn(7538);
({ FamilyCenterSubPages: metroRequire, UserLinkStatus: closure_7, UserLinkType: closure_8 } = FamilyCenterConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, UserSettingsSections: c10 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const modal = "modal";
let closure_15 = fn(1943).DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING;
fn(4560);
let createStyles = { container: null, illustration: null, title: null, body: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.illustration = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
createStyles.title = { textAlign: "center" };
createStyles.body = { textAlign: "center" };
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningModal.tsx");

export default function ParentalConsentWarningModal(daysRemaining) {
  daysRemaining = daysRemaining.daysRemaining;
  let callback;
  let callback1;
  let tmp = closure_16();
  let obj = daysRemaining(callback[15]);
  const syncMessages = obj.useSyncMessages(daysRemaining(callback[16]).messagesLoader);
  const effect = callback1.useEffect(() => {
    const obj = { surface_type: modal, days_remaining: daysRemaining };
    obj.track(constants2.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, obj);
    DispatcherDefault.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
  }, []);
  importDefault = callback1.useRef(false);
  callback = callback1.useCallback(() => {
    const current = ref.current;
    let flag = !current;
    if (!current) {
      tmp.current = true;
      const obj = { dismissAction: ContentDismissActionType.USER_DISMISS };
      const result = obj.markTimeRecurringDismissibleContentAsDismissed(closure_15, obj);
      flag = true;
    }
    return flag;
  }, []);
  const items = [daysRemaining, callback];
  callback1 = callback1.useCallback(() => {
    if (callback()) {
      const obj = { surface_type: modal, days_remaining: daysRemaining };
      obj.track(constants2.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, obj);
    }
  }, items);
  const items1 = [callback1];
  const items2 = [callback];
  const callback2 = callback1.useCallback(() => {
    callback1();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  const callback3 = callback1.useCallback(() => {
    callback();
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const values = Object.values(FamilyCenterStore.getLinkedUsers());
    if (
      values.some((link_status) => {
        let tmp = link_status.link_status === constants.PENDING;
        if (tmp) {
          tmp = link_status.link_type === constants2.PARENT;
        }
        return tmp;
      })
    ) {
      let tmp2Result = FamilyCenterActionCreatorsDefault;
      const tab = tmp2Result.selectTab(constants.REQUESTS);
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          obj = { screen: constants3.FAMILY_CENTER };
          openUserSettings.openUserSettings(obj);
          const tmp9Result = openUserSettings;
        }
      }
      tmp2Result = ModalDispatchQueueDefault;
      tmp2Result.enqueue(() => {
        daysRemaining(callback[10]);
        const obj = { screen: constants3.FAMILY_CENTER };
        return obj.openUserSettings(obj);
      });
    } else {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17463, dependencyMap.paths));
      const tmp2Result1 = ModalActionCreatorsDefault;
    }
  }, items2);
  const intl = daysRemaining(callback[15]).intl;
  if (0 === daysRemaining) {
    let stringResult = intl.string(tmp2(tmp3[16]).Zo5YZD);
  } else {
    obj = { count: daysRemaining };
    stringResult = intl.formatToPlainString(tmp2(tmp3[16]).b4sYUn, obj);
  }
  const intl2 = tmp4(tmp3[15]).intl;
  if (0 === daysRemaining) {
    let stringResult1 = intl2.string(tmp2(tmp3[16]).CRZBSY);
  } else {
    obj = { count: daysRemaining };
    stringResult1 = intl2.formatToPlainString(tmp2(tmp3[16]).mQcGGY, obj);
  }
  const obj1 = { startExpanded: true, onDismiss: callback1, children: null };
  const obj2 = { style: null, children: null };
  const items3 = [tmp.container, { paddingBottom: require("useSafeAreaInsets")().bottom }];
  obj2.style = items3;
  const obj3 = { spacing: require("native").space.PX_16, children: null };
  const items4 = [
    closure_12(View, {
      style: tmp.illustration,
      children: closure_12(daysRemaining(callback[26]).FamilyKeysSpotIllustration, { accessible: false }),
    }),
    closure_12(daysRemaining(callback[27]).Text, {
      variant: "heading-lg/bold",
      color: "text-default",
      style: tmp.title,
      accessibilityRole: "header",
      children: stringResult,
    }),
    closure_12(daysRemaining(callback[27]).Text, {
      variant: "text-md/medium",
      color: "text-default",
      style: tmp.body,
      children: stringResult1,
    }),
  ];
  const obj7 = { spacing: require("native").space.PX_8, children: null };
  const obj8 = { size: "lg", variant: "primary", grow: true, text: null, onPress: null };
  const intl3 = tmp4(tmp3[15]).intl;
  obj8.text = intl3.string(require("../FamilyCenter.messages.js").Kp7sjX);
  obj8.onPress = callback3;
  const items5 = [closure_12(daysRemaining(callback[28]).Button, obj8)];
  const obj9 = { size: "lg", variant: "secondary", grow: true, text: null, accessibilityHint: null, onPress: null };
  const intl4 = tmp4(tmp3[15]).intl;
  obj9.text = intl4.string(require("../FamilyCenter.messages.js").hST5o8);
  const intl5 = tmp4(tmp3[15]).intl;
  obj9.accessibilityHint = intl5.string(require("../FamilyCenter.messages.js")["4fZtHa"]);
  obj9.onPress = callback2;
  items5[1] = closure_12(daysRemaining(callback[28]).Button, obj9);
  obj7.children = items5;
  items4[3] = closure_13(daysRemaining(callback[25]).Stack, obj7);
  obj3.children = items4;
  obj2.children = closure_13(daysRemaining(callback[25]).Stack, obj3);
  obj1.children = closure_12(View, obj2);
  return closure_12(daysRemaining(callback[24]).BottomSheet, obj1);
}
