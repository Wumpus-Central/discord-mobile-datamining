// === Module 9605: styles ===

// Module 9605 (styles)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import Text from "Text" /* 4444 */;
import StageSparkleInnerDefault from "StageSparkleInner" /* 8646 */;
import FocusedControlsHeader from "FocusedControlsHeader" /* 9607 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = require("CALL_ACTION_BAR_HEIGHT").CALL_ACTION_BAR_HEIGHT + 8;
const styles = createCacheKey.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  ({ title, body, children } = arg0);
  const tmp = styles();
  let obj = { style: tmp.scrollView, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
  const items = [tmp.container, ];
  obj = { paddingTop: top + FocusedControlsHeader.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  ({ top, bottom } = useSafeAreaInsetsDefault());
  items[1] = obj;
  obj[1] = items;
  obj = { style: tmp.sparkle, theme: ThemeTypes.DARK };
  const items1 = [callback(StageSparkleInnerDefault, obj), callback(Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), callback(Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), callback(closure_4, { style: tmp.prompts, children })];
  obj[3] = items1;
  return callback2(closure_3, obj);
};
export const useStyles = styles;