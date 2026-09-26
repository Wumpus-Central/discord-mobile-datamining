// discord_app/modules/parent_tools/native/ParentalConsentWarningModal.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import DismissibleContentUtils from "../../dismissible_content/DismissibleContentUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import ModalDispatchQueueDefault from "../../main_tabs_v2/native/modal/ModalDispatchQueue.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import FamilyCenterActionCreatorsDefault from "../FamilyCenterActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const FamilyCenterConstants = fn(6958);
({ FamilyCenterSubPages: metroRequire, UserLinkStatus: closure_7, UserLinkType: closure_8 } = FamilyCenterConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, UserSettingsSections: c10 } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const modal = "modal";
let closure_15 = fn(2029).DismissibleContent.PARENTAL_CONSENT_GRACE_WARNING;
const createStyles = fn(4836);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16 }, illustration: null, title: null, body: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.illustration = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj2.title = { textAlign: "center" };
obj2.body = { textAlign: "center" };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningModal.tsx");

export default function ParentalConsentWarningModal(daysRemaining) {
  daysRemaining = daysRemaining.daysRemaining;
  let callback;
  let callback1;
  let tmp = closure_16();
  const syncMessages = daysRemaining(callback[15]).useSyncMessages(daysRemaining(callback[16]).messagesLoader);
  const effect = callback1.useEffect(() => {
    AnalyticsUtilsDefault.track(constants2.PARENTAL_CONSENT_WARNING_SURFACE_SHOWN, {
      surface_type: modal,
      days_remaining: daysRemaining,
    });
    const obj2 = { surface_type: modal, days_remaining: daysRemaining };
    DispatcherDefault.dispatch({ type: "PARENTAL_CONSENT_WARNING_MODAL_SHOWN" });
  }, []);
  importDefault = callback1.useRef(false);
  callback = callback1.useCallback(() => {
    const current = ref.current;
    let flag = !current;
    if (!current) {
      tmp.current = true;
      const obj2 = { dismissAction: ContentDismissActionType.USER_DISMISS };
      const result = DismissibleContentUtils.markTimeRecurringDismissibleContentAsDismissed(closure_15, obj2);
      flag = true;
    }
    return flag;
  }, []);
  const items = [daysRemaining, callback];
  callback1 = callback1.useCallback(() => {
    if (callback()) {
      const obj2 = { surface_type: modal, days_remaining: daysRemaining };
      AnalyticsUtilsDefault.track(constants2.PARENTAL_CONSENT_WARNING_SURFACE_DISMISSED, obj2);
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
    ActionSheetActionCreatorsDefault.hideActionSheet();
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
      const tab = FamilyCenterActionCreatorsDefault.selectTab(constants.REQUESTS);
      const tmp2Result = FamilyCenterActionCreatorsDefault;
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const obj2 = { screen: constants3.FAMILY_CENTER };
          openUserSettings.openUserSettings(obj2);
          const tmp9Result = openUserSettings;
        }
      }
      ModalDispatchQueueDefault.enqueue(() =>
        daysRemaining(callback[10]).openUserSettings({ screen: constants3.FAMILY_CENTER }),
      );
      const tmp2Result3 = ModalDispatchQueueDefault;
    } else {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17228, dependencyMap.paths));
      const tmp2Result4 = ModalActionCreatorsDefault;
    }
  }, items2);
  const intl = daysRemaining(callback[15]).intl;
  if (0 === daysRemaining) {
    let stringResult = intl.string(tmp2(tmp3[16]).Zo5YZD);
  } else {
    let obj2 = { count: daysRemaining };
    stringResult = intl.formatToPlainString(tmp2(tmp3[16]).b4sYUn, obj2);
  }
  const intl2 = tmp4(tmp3[15]).intl;
  if (0 === daysRemaining) {
    let stringResult1 = intl2.string(tmp2(tmp3[16]).CRZBSY);
  } else {
    const obj3 = { count: daysRemaining };
    stringResult1 = intl2.formatToPlainString(tmp2(tmp3[16]).mQcGGY, obj3);
  }
  const obj4 = { startExpanded: true, onDismiss: callback1, children: null };
  let obj5 = { style: null, children: null };
  const items3 = [tmp.container, { paddingBottom: require("useSafeAreaInsets")().bottom }];
  obj5.style = items3;
  const obj6 = { spacing: require("native").space.PX_16, children: null };
  let obj = daysRemaining(callback[15]);
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
  const obj10 = { spacing: require("native").space.PX_8, children: null };
  const obj11 = { size: "lg", variant: "primary", grow: true, text: null, onPress: null };
  const intl3 = tmp4(tmp3[15]).intl;
  obj11.text = intl3.string(require("../FamilyCenter.messages.js").Kp7sjX);
  obj11.onPress = callback3;
  const items5 = [closure_12(daysRemaining(callback[28]).Button, obj11)];
  const obj12 = { size: "lg", variant: "secondary", grow: true, text: null, accessibilityHint: null, onPress: null };
  const intl4 = tmp4(tmp3[15]).intl;
  obj12.text = intl4.string(require("../FamilyCenter.messages.js").hST5o8);
  const intl5 = tmp4(tmp3[15]).intl;
  obj12.accessibilityHint = intl5.string(require("../FamilyCenter.messages.js")["4fZtHa"]);
  obj12.onPress = callback2;
  items5[1] = closure_12(daysRemaining(callback[28]).Button, obj12);
  obj10.children = items5;
  items4[3] = closure_13(daysRemaining(callback[25]).Stack, obj10);
  obj6.children = items4;
  obj5.children = closure_13(daysRemaining(callback[25]).Stack, obj6);
  obj4.children = closure_12(View, obj5);
  return closure_12(daysRemaining(callback[24]).BottomSheet, obj4);
}
