// === Module 19032: ConjureFrameUpdateBar ===

// Module 19032 (ConjureFrameUpdateBar)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import Text_Text from "Text/Text" /* 5751 */;
import Pressables from "Pressables" /* 7043 */;
import restartFrames from "restartFrames" /* 11060 */;
import RefreshIcon from "RefreshIcon" /* 12391 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6901 */;

require = fn;
class ConjureFrameUpdateBarContent {
  constructor(arg0) {
    tmp = closure_9();
    obj = { accessibilityRole: "button", style: tmp.bar, onPress: global.onReload, children: null };
    obj1 = { variant: "body-sm/semibold", color: "text-overlay-light", style: tmp.text, children: null };
    intl = closure_0(closure_2[9]).intl;
    obj1.children = intl.string(closure_1(closure_2[10])["93nLLM"]);
    items = [, , ];
    items[0] = jsx(closure_0(closure_2[8]).Text, obj1);
    obj5 = { variant: "body-sm/semibold", color: "text-overlay-light", children: null };
    intl2 = closure_0(closure_2[9]).intl;
    obj5.children = intl2.string(closure_1(closure_2[10])["9091U0"]);
    items[1] = jsx(closure_0(closure_2[8]).Text, obj5);
    obj6 = { size: "sm", color: closure_1(closure_2[6]).colors.WHITE };
    items[2] = jsx(closure_0(closure_2[11]).RefreshIcon, obj6);
    obj.children = items;
    return jsxs(closure_0(closure_2[7]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
let closure_6 = fn(19028).useConjureFrameUpdateAvailable;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { flex: 1 }, bar: null, text: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, flexDirection: "row", alignItems: "center", minHeight: 45, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.bar = rect;
obj2.text = { flex: 1 };
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureFrameUpdateBar.tsx");

export default function ConjureFrameUpdateBar(frameId) {
  frameId = frameId.frameId;
  [][0] = frameId;
  const tmp = closure_9();
  let obj = { style: tmp.container, children: null };
  items = [frameId.children, ];
  let tmp6 = null;
  if (tmp2) {
    const obj2 = { onReload: tmp3 };
    tmp6 = closure_7(ConjureFrameUpdateBarContent, obj2);
  }
  items[1] = tmp6;
  obj.children = items;
  return closure_8(View, obj);
};
export { ConjureFrameUpdateBarContent };