// === Module 11327: CommandListSortButton ===

// Module 11327 (CommandListSortButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { CommandListSortOrder } from "CommandListSortOrder" /* 11313 */;
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor" /* 1301 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { overflow: "hidden", borderRadius: ThemesDefault.radii.xxl };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = callback3();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1236).intl;
    let stringResult = intl2.string(sortOrder(1236).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1236).intl;
    stringResult = intl.string(sortOrder(1236).t.m8xsti);
  }
  const items = [callback(sortOrder(4734).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }), ];
  let obj = { size: "xs", color: onSortOptionPress(712).colors.TEXT_DEFAULT };
  items[1] = callback(sortOrder(9464).ChevronSmallDownIcon, obj);
  obj[1] = items;
  obj[5] = callback2(View, obj);
  return callback(sortOrder(5433).PressableOpacity, obj);
};