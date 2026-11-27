// === Module 18851: ConjureSetupAskBar ===

// Module 18851 (ConjureSetupAskBar)
import nativeDefault from "native" /* 575 */;
import openConjureSetupAskFormDefault from "openConjureSetupAskForm" /* 18723 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5043);
let obj2 = { bar: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_4 }, label: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_4 };
obj2.label = { flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", columnGap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/setup_asks/native/ConjureSetupAskBar.tsx");

export default function ConjureSetupAskBar(onPress) {
  const projectId = onPress.projectId;
  const ask = onPress.ask;
  const tmp = closure_7();
  items = [ask, projectId];
  const callback = noop.useCallback(() => openConjureSetupAskFormDefault(projectId, ask.form), items);
  const obj = { style: tmp.bar, children: null };
  const obj2 = { style: tmp.label, children: null };
  const obj3 = { variant: "body-sm/semibold", color: "text-default", children: null };
  const intl = projectId(1112).intl;
  obj3.children = intl.string(ask(4245).DLw3tf);
  const items1 = [closure_5(projectId(5634).Text, obj3), ];
  const obj4 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl2 = projectId(1112).intl;
  obj4.children = intl2.formatToPlainString(ask(4245).GCBZ4y, { count: ask.needed });
  items1[1] = closure_5(projectId(5634).Text, obj4);
  obj2.children = items1;
  const items2 = [closure_6(View, obj2), , ];
  const obj6 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl3 = projectId(1112).intl;
  obj6.text = intl3.string(ask(4245).OCzOAI);
  obj6.onPress = callback;
  items2[1] = closure_5(projectId(5641).Button, obj6);
  const obj7 = { variant: "tertiary", size: "sm", icon: closure_5(projectId(7247).XSmallIcon, { size: "sm" }), onPress: onPress.onDismiss, accessibilityLabel: null };
  const intl4 = projectId(1112).intl;
  obj7.accessibilityLabel = intl4.string(ask(4245)["920tul"]);
  items2[2] = closure_5(projectId(7944).IconButton, obj7);
  obj.children = items2;
  return closure_6(ask(18524), obj);
};