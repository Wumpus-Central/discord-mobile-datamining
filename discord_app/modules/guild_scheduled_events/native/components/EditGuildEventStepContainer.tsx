// === Module 9953: EditGuildEventStepContainer ===

// Module 9953 (EditGuildEventStepContainer)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7177 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj = { container: { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" }, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = rect;
let closure_8 = createStyles.createStyles(obj);
let obj3 = { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ children, action } = arg0);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(32), 2);
  closure_0 = tmp2[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj = { style: tmp.container, children: null };
  const obj2 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: null, contentContainerStyle: tmp.scroller, children };
  const items = [tmp.flex, { marginBottom: tmp2[0] + insets.bottom }];
  obj2.style = items;
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [timestampProducer(hasOwnProperty, obj2), ];
  const obj3 = { style: null, onLayout: callback, children: action };
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  obj3.style = items2;
  items1[1] = timestampProducer(React4, obj3);
  obj.children = items1;
  return React5(React4, obj);
});