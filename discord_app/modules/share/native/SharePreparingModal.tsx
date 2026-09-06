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
fn(4560);
let createStyles = { content: null, topBar: null, topBarEnd: null };
createStyles = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 };
createStyles.content = createStyles;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = undefined;
createStyles.topBar = obj1;
createStyles.topBarEnd = { justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default function SharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  const tmp = closure_7();
  const items = [onCancel];
  const effect = noop.useEffect(() => () => onCancel(), items);
  let obj = { style: tmp.content, children: null };
  const items1 = [hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true }), , ,];
  obj = { style: tmp.topBar, pointerEvents: "box-none", children: null };
  obj = { style: tmp.topBarEnd, children: null };
  const obj1 = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = util.intl;
  obj1.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj1.icon = hasOwnProperty(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj1.onPress = onCancel;
  obj.children = hasOwnProperty(MediaViewerOverlayButtonDefault, obj1);
  obj.children = hasOwnProperty(MediaModalOverlayHeaderWrapper.MediaModalOverlayHeaderWrapper, obj);
  items1[1] = hasOwnProperty(React4, obj);
  items1[2] = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
  const obj2 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.DwTQE5);
  items1[3] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items1;
  return timestampProducer(React4, obj);
}
