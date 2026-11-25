// === Module 12581: CheckpointUnavailableModal ===

// Module 12581 (CheckpointUnavailableModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import util from "util" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef3494 from "module_3494" /* 3494 */;
import native from "native" /* 5073 */;
import HapticUtils from "HapticUtils" /* 5228 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12582 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12584 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12585 */;
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext" /* 12586 */;
import CheckpointBackgroundDefault from "CheckpointBackground" /* 12587 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 12588 */;
import CheckpointTextDefault from "CheckpointText" /* 12590 */;
import CheckpointHeaderDefault from "CheckpointHeader" /* 12591 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6365 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

function handleClose() {
  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  ModalActionCreatorsDefault.pop();
}
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { container: { height: "100%" }, footer: null, closeButton: null, closeButtonLabel: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.footer = rect;
obj.closeButton = { height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
obj.closeButtonLabel = { textTransform: "uppercase", fontSize: 18, lineHeight: 24 };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointUnavailableModal.tsx");

export default function CheckpointUnavailableModal() {
  const tmp = closure_8();
  const rect = useSafeAreaInsetsDefault();
  const intl = util.intl;
  useCheckpointMusicDefault();
  const stringResult = intl.string(util.t.cpT0Cq);
  const checkpointCloseAnalytics = useCheckpointStepAnalytics.useCheckpointCloseAnalytics();
  useCheckpointForegroundTrackingDefault();
  const obj2 = { children: null };
  const obj3 = { theme: ThemeTypes.DARK, children: null };
  const obj4 = { style: tmp.container, children: null };
  items = [timestampProducer(CheckpointBackgroundDefault, {}), , , ];
  const obj5 = { children: null };
  const obj6 = { isStepHeading: true, variant: "heading-lg/medium", children: null };
  const tmp6 = CheckpointUnavailableScreenDefault;
  const intl2 = util.intl;
  obj6.children = intl2.string(_modDef3494.IaTl5H);
  obj5.children = timestampProducer(CheckpointTextDefault, obj6);
  items[1] = timestampProducer(tmp6, obj5);
  items[2] = timestampProducer(CheckpointHeaderDefault, {});
  const obj7 = { style: null, children: null };
  const items1 = [tmp.footer, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj7.style = items1;
  const obj8 = { style: tmp.closeButton, onPress: handleClose, accessibilityRole: "button", children: timestampProducer(CheckpointTextDefault, { variant: "mono-md/normal", style: tmp.closeButtonLabel, children: stringResult }) };
  obj7.children = timestampProducer(React3, obj8);
  items[3] = timestampProducer(React4, obj7);
  obj4.children = items;
  obj3.children = metroImportDefault(React4, obj4);
  obj2.children = timestampProducer(native.ThemeContextProvider, obj3);
  return timestampProducer(CheckpointStepHeaderRefContext.CheckpointStepFocusProvider, obj2);
};