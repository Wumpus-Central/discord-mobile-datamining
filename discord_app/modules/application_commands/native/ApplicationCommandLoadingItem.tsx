// discord_app/modules/application_commands/native/ApplicationCommandLoadingItem.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { AUTOCOMPLETE_ROW_HEIGHT } from "AUTOCOMPLETE_ROW_HEIGHT";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = 16;
let closure_8 = createCacheKey.createStyles((arg0) => {
  let obj = { applicationCommandLoadingItem: null, applicationCommandLoadingLeftWrapper: null, applicationCommandLoadingName: null, applicationCommandLoadingDescription: null, applicationCommandLoadingSectionName: null };
  obj = { flexDirection: "row", paddingVertical: 4, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj[0] = obj;
  obj[1] = { flexDirection: "column", width: "75%", height: "100%", justifyContent: "space-between" };
  obj = { backgroundColor: importDefault(712).colors.BACKGROUND_MOD_STRONG, height: c7, borderRadius: c7, width: "20%" };
  obj[2] = obj;
  obj[3] = { backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOW, height: c7, borderRadius: c7, width: "80%" };
  const obj1 = { backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOW, height: c7, borderRadius: c7, width: "80%" };
  obj[4] = { backgroundColor: importDefault(712).colors.BACKGROUND_MOD_STRONG, paddingLeft: 16, width: "25%", marginLeft: "auto", height: c7, borderRadius: c7 };
  return obj;
});
const result = require("AUTOCOMPLETE_ROW_HEIGHT").fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default function ApplicationCommandLoadingItem() {
  let obj = require(4701) /* getFontScale */;
  const tmp = callback3(obj.useFontScale());
  obj = { style: tmp.applicationCommandLoadingItem, children: null };
  obj = { style: tmp.applicationCommandLoadingLeftWrapper, children: null };
  const items = [callback(View, { style: tmp.applicationCommandLoadingName }), callback(View, { style: tmp.applicationCommandLoadingDescription })];
  obj[1] = items;
  const items1 = [callback2(View, obj), callback(View, { style: tmp.applicationCommandLoadingSectionName })];
  obj[1] = items1;
  return callback2(View, obj);
};