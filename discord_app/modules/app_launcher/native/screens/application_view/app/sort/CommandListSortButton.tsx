import "noop";
import { View } from "get ActivityIndicator";
import { CommandListSortOrder } from "CommandListSortOrder";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, button: null };
createCacheKey = { overflow: "hidden", borderRadius: require("Themes").radii.xxl };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
const result = require("CommandListSortOrder").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

export default function CommandListSortButton(sortOrder) {
  sortOrder = sortOrder.sortOrder;
  const onSortOptionPress = sortOrder.onSortOptionPress;
  const tmp = createCacheKey();
  if (CommandListSortOrder.POPULAR === sortOrder) {
    const intl2 = sortOrder(1236).intl;
    let stringResult = intl2.string(sortOrder(1236).t.SzxiqK);
  } else if (tmp2.ALPHABETICAL === sortOrder) {
    const intl = sortOrder(1236).intl;
    stringResult = intl.string(sortOrder(1236).t.m8xsti);
  }
  let obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      let obj = onSortOptionPress(outer1_2[9]);
      obj = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          callback(table[9]).hideActionSheet("CommandListSortActionSheet");
        }
      };
      obj.openLazy(sortOrder(outer1_2[11])(outer1_2[10], outer1_2.paths), "CommandListSortActionSheet", obj);
    },
    children: null
  };
  obj = { style: tmp.button, children: null };
  const items = [callback(sortOrder(4189).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }), ];
  obj = { size: "xs", color: null };
  obj[1] = onSortOptionPress(712).colors.TEXT_DEFAULT;
  items[1] = callback(sortOrder(8402).ChevronSmallDownIcon, obj);
  obj[1] = items;
  obj[5] = callback2(View, obj);
  return callback(sortOrder(4721).PressableOpacity, obj);
};