// === Module 9708: EditGuildEventStepContainer ===

// Module 9708 (EditGuildEventStepContainer)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, flex: null, scroller: null, buttonContainer: null };
obj = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
obj.container = obj;
obj.flex = { flex: 1 };
obj.scroller = { paddingHorizontal: 16 };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = rect;
let closure_8 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ children, action } = arg0);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(32), 2);
  closure_0 = tmp2[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let obj = { style: tmp.container, children: null };
  obj = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: null, contentContainerStyle: tmp.scroller, children };
  const items = [tmp.flex, { marginBottom: tmp2[0] + insets.bottom }];
  obj.style = items;
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [timestampProducer(hasOwnProperty, obj), ];
  obj = { style: null, onLayout: callback, children: action };
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  obj.style = items2;
  items1[1] = timestampProducer(React4, obj);
  obj.children = items1;
  return React5(React4, obj);
});