// === Module 11815: StageViewWithPrompts ===

// Module 11815 (StageViewWithPrompts)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import Text_Text from "Text/Text" /* 5619 */;
import FocusedControls from "FocusedControls" /* 11817 */;
import MicrophoneSpotIllustration from "MicrophoneSpotIllustration" /* 11830 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = fn(11816).CALL_ACTION_BAR_HEIGHT + 8;
const createStyles = fn(5009);
let obj2 = { scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, illustration: { marginTop: nativeDefault.space.PX_48, marginBottom: nativeDefault.space.PX_16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } };
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  ({ title, body, children } = arg0);
  const tmp = styles();
  const obj = { style: tmp.scrollView, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
  const items = [tmp.container, ];
  const tmp2 = useSafeAreaInsetsDefault();
  ({ top, bottom } = tmp2);
  items[1] = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_7 };
  obj.contentContainerStyle = items;
  const obj2 = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_7 };
  const items1 = [hasOwnProperty(React4, { style: tmp.illustration, children: hasOwnProperty(MicrophoneSpotIllustration.MicrophoneSpotIllustration, { accessible: false }) }), hasOwnProperty(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), hasOwnProperty(Text_Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), hasOwnProperty(React4, { style: tmp.prompts, children })];
  obj.children = items1;
  return timestampProducer(React3, obj);
};
export const useStyles = styles;