// === Module 14152: CheckpointUnavailableModal ===

// Module 14152 (CheckpointUnavailableModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef3269 from "module_3269" /* 3269 */;
import native from "native" /* 5314 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 14153 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14155 */;
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext" /* 14156 */;
import CheckpointBackgroundDefault from "CheckpointBackground" /* 14157 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 14159 */;
import CheckpointTextDefault from "CheckpointText" /* 14161 */;
import CheckpointHeaderDefault from "CheckpointHeader" /* 14162 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
  const obj2 = { children: null };
  const obj3 = { theme: ThemeTypes.DARK, children: null };
  const obj4 = { style: tmp.container, children: null };
  items = [timestampProducer(CheckpointBackgroundDefault, {}), , , ];
  const obj5 = { message: null };
  const intl2 = util.intl;
  obj5.message = intl2.string(_modDef3269.IaTl5H);
  items[1] = timestampProducer(CheckpointUnavailableScreenDefault, obj5);
  items[2] = timestampProducer(CheckpointHeaderDefault, {});
  const obj6 = { style: null, children: null };
  const items1 = [tmp.footer, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj6.style = items1;
  const obj7 = { style: tmp.closeButton, onPress: handleClose, accessibilityRole: "button", children: timestampProducer(CheckpointTextDefault, { variant: "mono-md/normal", style: tmp.closeButtonLabel, children: stringResult }) };
  obj6.children = timestampProducer(React3, obj7);
  items[3] = timestampProducer(React4, obj6);
  obj4.children = items;
  obj3.children = metroImportDefault(React4, obj4);
  obj2.children = timestampProducer(native.ThemeContextProvider, obj3);
  return timestampProducer(CheckpointStepHeaderRefContext.CheckpointStepFocusProvider, obj2);
};