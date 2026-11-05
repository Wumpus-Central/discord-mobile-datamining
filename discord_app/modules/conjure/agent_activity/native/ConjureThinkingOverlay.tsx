// === Module 13005: ConjureThinkingOverlay ===

// Module 13005 (ConjureThinkingOverlay)
import nativeDefault from "native" /* 575 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjureNativeMarkdownDefault from "ConjureNativeMarkdown" /* 12406 */;
import conjureThinkingTail from "conjureThinkingTail" /* 13006 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 11035 */;

require = fn;
function ThinkingScroll(arg0) {
  noop = undefined;
  ({ style, text } = arg0);
  const ref = noop.useRef(null);
  importDefault = noop.useRef(true);
  dependencyMap = noop.useRef(0);
  noop = noop.useRef(false);
  const callback = noop.useCallback((nativeEvent) => {
    closure_3.current = true;
    closure_2.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const callback1 = noop.useCallback(() => {
    closure_3.current = false;
  }, []);
  const callback2 = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const contentOffset = nativeEvent.contentOffset;
    ({ contentSize, layoutMeasurement } = nativeEvent);
    ref.current = conjureThinkingTail.followsTail(ref.current, contentSize.height - layoutMeasurement.height - contentOffset.y, contentOffset.y < ref2.current);
    ref2.current = contentOffset.y;
  }, []);
  return closure_7(closure_4, {
    ref,
    style,
    nestedScrollEnabled: true,
    scrollEventThrottle: 16,
    onScrollBeginDrag: callback,
    onScrollEndDrag: callback1,
    onScroll: callback2,
    onContentSizeChange: noop.useCallback(() => {
      let current = ref.current;
      if (current) {
        current = !ref3.current;
      }
      if (current) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.scrollToEnd({ animated: false });
        }
      }
    }, []),
    children: closure_7(ConjureNativeMarkdownDefault, { source: text })
  });
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { root: null, opaque: null, body: null, header: null, panel: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj2.root = rect;
obj2.opaque = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
obj2.body = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.panel = { maxHeight: 240 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureThinkingOverlay.tsx");

export default function ConjureThinkingOverlay(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_9();
  items = [ConjureChatStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureChatStore.getThinkingActivity(projectId), items1);
  const obj = projectId(504);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.text;
  }
  if (str == null) {
    str = "";
  }
  let tmp5 = null != stateFromStores;
  if (tmp5) {
    tmp5 = "end" !== stateFromStores.phase;
  }
  const text = projectId(12408).useConjureRevealedText(str, { streaming: tmp5 }).text;
  const obj3 = { style: tmp.root, children: null };
  const obj4 = { style: tmp.opaque, children: null };
  const obj5 = { style: tmp.body, children: null };
  const obj6 = { style: tmp.header, children: null };
  const obj2 = projectId(12408);
  const items2 = [closure_7(projectId(10260).LightbulbIcon, { size: "xs", color: nativeDefault.colors.TEXT_BRAND }), ];
  const obj8 = { variant: "body-sm/semibold", color: "text-strong", children: null };
  const intl = tmp2(1113).intl;
  obj8.children = intl.string(_modDef3995.XXYIeI);
  items2[1] = closure_7(projectId(5763).Text, obj8);
  obj6.children = items2;
  const items3 = [closure_8(closure_5, obj6), ];
  if ("" !== text) {
    const obj9 = { style: tmp.panel, text };
    let tmp6Result = closure_7(ThinkingScroll, obj9);
  } else {
    const obj10 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp2(1113).intl;
    obj10.children = intl2.string(_modDef3995.LfoD6c);
    tmp6Result = closure_7(tmp2(5763).Text, obj10);
  }
  const obj7 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  items3[1] = tmp6Result;
  obj5.children = items3;
  obj4.children = closure_7(projectId(7121).Card, { variant: "primary", shadow: "high", children: closure_8(closure_5, obj5) });
  obj3.children = closure_7(closure_5, obj4);
  return closure_7(closure_5, obj3);
};