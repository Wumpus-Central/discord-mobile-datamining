// === Module 9073: SharePreparingModal ===

// Module 9073 (SharePreparingModal)
import ThemesDefault from "Themes" /* 712 */;
import _modDef9075 from "module_9075" /* 9075 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = undefined;
createCacheKey[1] = obj1;
createCacheKey[2] = { justifyContent: "flex-end" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default function SharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  const tmp = callback3();
  const items = [onCancel];
  const effect = React.useEffect(() => () => callback(), items);
  const items1 = [callback(onCancel(4723).Backdrop, { blur: "none", "aria-hidden": true }), , , ];
  const obj = { style: tmp.topBarEnd, children: null };
  obj1 = { accessibilityLabel: null, icon: null, onPress: null };
  const intl = onCancel(1236).intl;
  obj1[0] = intl.string(onCancel(1236).t.cpT0Cq);
  obj1[1] = callback(onCancel(6368).XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj1[2] = onCancel;
  obj[1] = callback(_modDef9075, obj1);
  obj[2] = callback(onCancel(9074).MediaModalOverlayHeaderWrapper, obj);
  items1[1] = callback(closure_4, obj);
  items1[2] = callback(onCancel(5446).ActivityIndicator, {});
  const obj2 = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const intl2 = onCancel(1236).intl;
  obj2[2] = intl2.string(onCancel(1236).t.DwTQE5);
  items1[3] = callback(onCancel(4734).Text, obj2);
  obj[1] = items1;
  return callback2(closure_4, obj);
};