// === Module 9068: EditGuildEventStepContainer ===

// Module 9068 (EditGuildEventStepContainer)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5735 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9069 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { flex: 1, paddingHorizontal: 0, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%" }, flex: { flex: 1 }, scroller: { paddingHorizontal: 16 }, buttonContainer: null };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.buttonContainer = rect;
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default function EditGuildEventsStepContainer(arg0) {
  ({ children, action, ref } = arg0);
  const tmp = closure_6();
  const tmp4 = useMeasuredLayoutDefault();
  const height = tmp4.height;
  let num = 32;
  ({ ref: ref2, onLayout } = tmp4);
  if (undefined !== height) {
    num = height;
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj = { style: tmp.container, children: null };
  const obj2 = { ref, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", style: null, contentContainerStyle: tmp.scroller, children };
  items = [tmp.flex, { marginBottom: num + insets.bottom }];
  obj2.style = items;
  const items1 = [React4(React3, obj2), ];
  const obj3 = { style: null, ref: ref2, onLayout, children: action };
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  obj3.style = items2;
  items1[1] = React4(React2, obj3);
  obj.children = items1;
  return hasOwnProperty(React2, obj);
};