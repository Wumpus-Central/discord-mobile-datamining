// discord_app/modules/checkpoint/native/components/CheckpointUnavailableModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3317 from "../../Checkpoint2026.messages.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import useCheckpointMusicDefault from "../useCheckpointMusic.tsx";
import useCheckpointStepAnalytics from "../../hooks/useCheckpointStepAnalytics.tsx";
import useCheckpointForegroundTrackingDefault from "../../hooks/useCheckpointForegroundTracking.native.tsx";
import CheckpointStepHeaderRefContext from "CheckpointStepHeaderRefContext.tsx";
import CheckpointBackgroundDefault from "CheckpointBackground.tsx";
import CheckpointUnavailableScreenDefault from "screens/CheckpointUnavailableScreen.tsx";
import CheckpointTextDefault from "CheckpointText.tsx";
import CheckpointHeaderDefault from "CheckpointHeader.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handleClose() {
  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  ModalActionCreatorsDefault.pop();
}
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let obj = { container: { height: "100%" }, footer: null, closeButton: null, closeButtonLabel: null };
let rect = {
  position: "absolute",
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  bottom: nativeDefault.space.PX_16,
};
obj.footer = rect;
obj.closeButton = {
  height: CHECKPOINT_CONTROL_SIZE,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderColor: CHECKPOINT_PRIMARY,
};
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
  items = [timestampProducer(CheckpointBackgroundDefault, {}), , ,];
  const obj5 = { children: null };
  const obj6 = { isStepHeading: true, variant: "heading-lg/medium", children: null };
  const tmp6 = CheckpointUnavailableScreenDefault;
  const intl2 = util.intl;
  obj6.children = intl2.string(_modDef3317.IaTl5H);
  obj5.children = timestampProducer(CheckpointTextDefault, obj6);
  items[1] = timestampProducer(tmp6, obj5);
  items[2] = timestampProducer(CheckpointHeaderDefault, {});
  const obj7 = { style: null, children: null };
  const items1 = [tmp.footer, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  obj7.style = items1;
  const obj8 = {
    style: tmp.closeButton,
    onPress: handleClose,
    accessibilityRole: "button",
    children: timestampProducer(CheckpointTextDefault, {
      variant: "mono-md/normal",
      style: tmp.closeButtonLabel,
      children: stringResult,
    }),
  };
  obj7.children = timestampProducer(React3, obj8);
  items[3] = timestampProducer(React4, obj7);
  obj4.children = items;
  obj3.children = metroImportDefault(React4, obj4);
  obj2.children = timestampProducer(native.ThemeContextProvider, obj3);
  return timestampProducer(CheckpointStepHeaderRefContext.CheckpointStepFocusProvider, obj2);
}
