// discord_app/modules/guild_onboarding/native/ConnectionCardView.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ View: obj1, ActivityIndicator: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, padding: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: ThemesDefault.space.PX_12 };
createCacheKey[2] = { width: 32, height: 32, marginRight: ThemesDefault.space.PX_12, justifyContent: "center", alignItems: "center" };
createCacheKey[3] = { flex: 1 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default function ConnectionCardView(description) {
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = callback2();
  const obj = { style: tmp.icon, children: icon };
  const items = [callback(closure_2, obj), ];
  obj1 = { style: tmp.textContent, children: null };
  const items1 = [callback(Text.Text, { variant: "text-md/medium", color: "text-strong", children: displayName }), ];
  let tmp4Result = null != description;
  if (tmp4Result) {
    tmp4Result = description.length > 0;
  }
  if (tmp4Result) {
    const obj2 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    obj2[2] = description;
    tmp4Result = callback(Text.Text, obj2);
  }
  items1[1] = tmp4Result;
  obj1[1] = items1;
  items[1] = callback(closure_2, obj1);
  obj[1] = items;
  const items2 = [callback(closure_2, obj), ];
  if (isLoading) {
    tmp4Result = callback(closure_3, { size: "small" });
  } else if (isConnected) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.connectedStatus;
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
    const intl2 = getSystemLocale.intl;
    obj4[2] = intl2.string(getSystemLocale.t["LV+CXH"]);
    const items3 = [callback(Text.Text, obj4), callback(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
    obj3[1] = items3;
    tmp4Result = callback(closure_2, obj3);
  } else {
    const obj5 = { variant: "primary", size: "sm", onPress: null, text: null, disabled: null };
    obj5[2] = onConnect;
    const intl = getSystemLocale.intl;
    obj5[3] = intl.string(getSystemLocale.t.S0W8Z5);
    obj5[4] = !canConnect;
    tmp4Result = callback(Button.Button, obj5);
  }
  items2[1] = tmp4Result;
  obj[1] = items2;
  return callback(closure_2, obj);
};