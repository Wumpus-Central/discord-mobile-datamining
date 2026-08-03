// === Module 9352: FormSeparator ===

// Module 9352 (FormSeparator)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { separator: null };
createCacheKey = { borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx");

export default function FormSeparator(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [createCacheKey().separator, style.style];
  obj.style = items;
  return <View />;
};