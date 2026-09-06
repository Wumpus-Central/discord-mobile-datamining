// === Module 9675: StageViewWithPrompts ===

// Module 9675 (StageViewWithPrompts)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import StageSparkleDefault from "StageSparkle" /* 8407 */;
import FocusedControls from "FocusedControls" /* 9677 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = fn(9676).CALL_ACTION_BAR_HEIGHT + 8;
const createStyles = fn(4560);
const styles = createStyles.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  ({ title, body, children } = arg0);
  const tmp = styles();
  let obj = { style: tmp.scrollView, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
  const items = [tmp.container, ];
  obj = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = useSafeAreaInsetsDefault());
  items[1] = obj;
  obj.contentContainerStyle = items;
  obj = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  const items1 = [timestampProducer(StageSparkleDefault, obj), timestampProducer(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), timestampProducer(Text_Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), timestampProducer(React4, { style: tmp.prompts, children })];
  obj.children = items1;
  return React5(React3, obj);
};
export const useStyles = styles;