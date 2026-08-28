// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx
import noopAll from "../../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { CommandListSortOrder } from "../../../../../AppLauncherConstants.tsx";
import { ANDROID_FOREGROUND_RIPPLE } from "../../../../../../../design/void/Form/native/FormConstants.tsx";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, button: null };
createCacheKey = { overflow: "hidden", borderRadius: ThemesDefault.radii.xxl };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj1 = { gap: 4, flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortButton.tsx");

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
  let obj = {
    accessibilityRole: "button",
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    activeOpacity: 0.8,
    style: tmp.container,
    onPress() {
      let obj = onSortOptionPress(closure_1_2[9]);
      obj = {
        sortOrder,
        onSortOptionPress,
        onClose() {
          callback(table[9]).hideActionSheet("CommandListSortActionSheet");
        }
      };
      obj.openLazy(sortOrder(closure_1_2[11])(closure_1_2[10], closure_1_2.paths), "CommandListSortActionSheet", obj);
    },
    children: null
  };
  obj = { style: tmp.button, children: null };
  const items = [callback(sortOrder(4442).Text, { variant: "text-sm/medium", color: "text-default", children: stringResult }), ];
  obj = { size: "xs", color: onSortOptionPress(712).colors.TEXT_DEFAULT };
  items[1] = callback(sortOrder(8875).ChevronSmallDownIcon, obj);
  obj[1] = items;
  obj[5] = callback2(View, obj);
  return callback(sortOrder(5033).PressableOpacity, obj);
};