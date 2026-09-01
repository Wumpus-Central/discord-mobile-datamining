// discord_app/modules/people/strangers/native/AcceptRequestConfirmationModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { bodyText: null, text: null };
createCacheKey = { textAlign: "center", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/people/strangers/native/AcceptRequestConfirmationModal.tsx",
);

export default function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = callback3();
  let obj = { confirmText: null, cancelText: null, onConfirm: null, onCancel: null, children: null };
  const intl = onConfirm(1236).intl;
  obj[0] = intl.string(onConfirm(1236).t.MMlhsr);
  const intl2 = onConfirm(1236).intl;
  obj[1] = intl2.string(onConfirm(1236).t["ETE/oC"]);
  obj[2] = function onConfirm() {
    onConfirm();
    closure_1_1(closure_1_2[7]).close();
  };
  obj[3] = onConfirm.onCancel;
  obj = { style: tmp.bodyText, children: null };
  obj = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text, children: null };
  const intl3 = onConfirm(1236).intl;
  obj[3] = intl3.string(onConfirm(1236).t.eJzSDT);
  const items = [callback(onConfirm(4474).Text, obj)];
  obj1 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
  const intl4 = onConfirm(1236).intl;
  obj1[3] = intl4.string(onConfirm(1236).t.GB4jUw);
  items[1] = callback(onConfirm(4474).Text, obj1);
  obj[1] = items;
  obj[4] = callback2(View, obj);
  return callback(componentDidMountDefault, obj);
}
