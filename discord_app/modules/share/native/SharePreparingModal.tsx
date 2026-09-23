// discord_app/modules/share/native/SharePreparingModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Backdrop from "../../../design/components/Backdrop/native/Backdrop.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import MediaModalOverlayHeaderWrapper from "../../media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx";
import MediaViewerOverlayButtonDefault from "../../media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  content: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 },
  topBar: null,
  topBarEnd: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = undefined;
obj2.topBar = obj4;
obj2.topBarEnd = { justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default function SharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  const tmp = closure_7();
  const items = [onCancel];
  const effect = noop.useEffect(() => () => onCancel(), items);
  const obj = { style: tmp.content, children: null };
  const items1 = [hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true }), , ,];
  const obj2 = { style: tmp.topBar, pointerEvents: "box-none", children: null };
  const obj3 = { style: tmp.topBarEnd, children: null };
  const obj4 = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj4.icon = hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj4.onPress = onCancel;
  obj3.children = hasOwnProperty(MediaViewerOverlayButtonDefault, obj4);
  obj2.children = hasOwnProperty(MediaModalOverlayHeaderWrapper.MediaModalOverlayHeaderWrapper, obj3);
  items1[1] = hasOwnProperty(React4, obj2);
  items1[2] = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  const obj5 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.DwTQE5);
  items1[3] = hasOwnProperty(Text_Text.Text, obj5);
  obj.children = items1;
  return timestampProducer(React4, obj);
}
