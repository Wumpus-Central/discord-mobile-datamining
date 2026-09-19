// === Module 8637: SharePreparingModal ===

// Module 8637 (SharePreparingModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import Backdrop from "Backdrop" /* 5172 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5789 */;
import XSmallIcon from "XSmallIcon" /* 5892 */;
import MediaModalOverlayHeaderWrapper from "MediaModalOverlayHeaderWrapper" /* 8638 */;
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton" /* 8639 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { content: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12 }, topBar: null, topBarEnd: null };
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
  const items1 = [hasOwnProperty(Backdrop.Backdrop, { blur: "none", "aria-hidden": true }), , , ];
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
};