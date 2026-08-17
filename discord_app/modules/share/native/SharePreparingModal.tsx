// discord_app/modules/share/native/SharePreparingModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef9075 from "../../media_viewer/native/components/overlay/MediaViewerOverlayButton.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null, topBar: null, topBarEnd: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.bottom = undefined;
createCacheKey[1] = obj1;
createCacheKey[2] = { justifyContent: "flex-end" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/share/native/SharePreparingModal.tsx");

export default function SharePreparingModal(onCancel) {
  onCancel = onCancel.onCancel;
  const tmp = callback3();
  const items = [onCancel];
  const effect = React.useEffect(() => () => callback(), items);
  let obj = { style: tmp.content, children: null };
  const items1 = [callback(onCancel(4723).Backdrop, { blur: "none", "aria-hidden": true }), , , ];
  obj = { style: tmp.topBar, pointerEvents: "box-none", children: null };
  obj = { style: tmp.topBarEnd, children: null };
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