// === Module 12080: AgeVerificationSpeakerActionSheet ===

// Module 12080 (AgeVerificationSpeakerActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6786 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8028 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5142);
let obj2 = { container: { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 }, header: { alignItems: "center" }, title: { textAlign: "center" }, footer: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
obj2.footer = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AgeVerificationSpeakerActionSheet.tsx");

export default function AgeVerificationSpeakerActionSheet(onClose) {
  onClose = onClose.onClose;
  function handleDismiss() {
    onClose();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const tmp = closure_6();
  let obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: useSafeAreaInsetsDefault().bottom }, header: closure_4(View, { style: tmp.header, children: closure_4(onClose(7134).TrafficConeSpotIllustration, { width: 120, height: 120 }) }), children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = onClose(1113).intl;
  obj4.children = intl.string(onClose(1113).t.zvubnM);
  items = [closure_4(onClose(5753).Text, obj4), ];
  const obj5 = { style: tmp.footer, children: null };
  const obj6 = {
    size: "lg",
    onPress: function handleAction() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT });
      onClose();
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null
  };
  const intl2 = onClose(1113).intl;
  obj6.text = intl2.string(onClose(1113).t.KXVgjt);
  const items1 = [closure_4(onClose(5760).Button, obj6), ];
  const obj7 = { size: "lg", onPress: handleDismiss, text: null, variant: "secondary" };
  const intl3 = onClose(1113).intl;
  obj7.text = intl3.string(onClose(1113).t.WAI6xu);
  items1[1] = closure_4(onClose(5760).Button, obj7);
  obj5.children = items1;
  items[1] = closure_5(View, obj5);
  obj3.children = items;
  obj.children = closure_5(View, obj3);
  return closure_4(onClose(7429).ActionSheet, obj);
};
export const AGE_VERIFICATION_SPEAKER_SHEET_KEY = "AgeVerificationSpeakerActionSheet";