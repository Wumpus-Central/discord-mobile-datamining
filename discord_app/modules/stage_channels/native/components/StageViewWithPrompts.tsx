// === Module 12491: styles ===

// Module 12491 (styles)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4734 */;
import StageSparkleInnerDefault from "StageSparkleInner" /* 8068 */;
import FocusedControlsHeader from "FocusedControlsHeader" /* 12493 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = require("CALL_ACTION_BAR_HEIGHT").CALL_ACTION_BAR_HEIGHT + 8;
const styles = createCacheKey.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  ({ title, body, children } = arg0);
  const tmp = styles();
  const items = [tmp.container, ];
  let obj = { paddingTop: top + FocusedControlsHeader.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = useSafeAreaInsetsDefault());
  items[1] = obj;
  obj[1] = items;
  obj = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  const items1 = [callback(StageSparkleInnerDefault, obj), callback(Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), callback(Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), callback(closure_4, { style: tmp.prompts, children })];
  obj[3] = items1;
  return callback2(closure_3, obj);
};
export const useStyles = styles;