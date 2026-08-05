// discord_app/modules/age_gate/native/components/NsfwGateChat.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/11933_registerAsset.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c3, Image: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { container: null, border: null, description: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = { marginTop: 16, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
const result = require("jsxProd").fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = { style: tmp.border };
  const items = [callback(closure_3, obj), ];
  obj = { style: tmp.container, children: null };
  const items1 = [callback(closure_4, { source: registerAsset }), ];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj2[3] = intl.string(getSystemLocale /* getSystemLocale */.t.W4Qyxr);
  items1[1] = callback(Text /* Text */.Text, obj2);
  obj[1] = items1;
  items[1] = callback2(closure_3, obj);
  obj[0] = items;
  return callback2(closure_7, obj);
};