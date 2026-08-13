// discord_app/modules/verification/native/components/ChangeEmailComplete.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { resetChangeEmailStore } from "ChangeEmailFields";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/08511_registerAsset.js";
import { EmailVerificationModalActionCreators } from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c3;
let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
function handlePress() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreators.close();
}
({ View: c3, Image: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { contentContainer: null, image: null, title: null, body: null, bodyInner: null, tooltip: null };
createCacheKey = { flexGrow: 2, paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16, gap: 20, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 190, width: 220, resizeMode: "contain" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { gap: 2 };
const merged = Object.assign(require("Themes").shadows.SHADOW_LOW);
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, width: "100%", padding: 12, borderWidth: 1, borderStyle: "solid", borderRadius: require("Themes").radii.sm, borderColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, width: "100%", padding: 12, borderWidth: 1, borderStyle: "solid", borderRadius: require("Themes").radii.sm, borderColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("ChangeEmailFields").fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  const tmp = createCacheKey();
  let obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { style: tmp.image, source: registerAsset };
  const items = [callback(closure_4, obj), , , ];
  obj = { style: tmp.bodyInner, children: null };
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[4] = intl.string(getSystemLocale.t["8O+nF7"]);
  const items1 = [callback(Text.Text, obj1), ];
  const obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[3] = intl2.format(getSystemLocale.t.Zvx0O3, { email: email.email });
  items1[1] = callback(Text.Text, obj2);
  obj[1] = items1;
  items[1] = callback2(closure_3, obj);
  const obj3 = { style: tmp.tooltip, variant: "text-sm/normal", children: null };
  const intl3 = getSystemLocale.intl;
  obj3[2] = intl3.string(getSystemLocale.t.yb7itQ);
  items[2] = callback(Text.Text, obj3);
  const obj4 = { text: null, onPress: null, grow: true };
  const intl4 = getSystemLocale.intl;
  obj4[0] = intl4.string(getSystemLocale.t.BddRzS);
  obj4[1] = handlePress;
  items[3] = callback(Button.Button, obj4);
  obj[3] = items;
  return callback2(closure_5, obj);
};