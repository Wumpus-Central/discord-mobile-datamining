// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../_runtime/06992_registerAsset.js";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import EditGuildEventScreens from "../../utils/EditGuildEventUtils.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  headerTitle: { lineHeight: 28, textTransform: "uppercase" },
  buttonContainer: { width: 60 },
  rightButton: { marginLeft: 12 },
});
const result = require("set").fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx",
);

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = callback4();
  if (EditGuildEventScreens.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (tmp2(9704).EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (tmp2(9704).EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    tmp2(1369).assertNever(screen);
    const tmp2Result = tmp2(1369);
  }
  [tmp6, tmp7] = callback(items, 2);
  let obj = { top: true, style: tmp.header, children: null };
  obj = { style: tmp.buttonContainer };
  const items1 = [callback2(View, obj), ,];
  obj1 = { style: tmp.headerTitle, variant: "text-xs/bold", color: "text-default", children: null };
  const intl = tmp2(1114).intl;
  obj1[3] = intl.format(getSystemLocale.t["42HaFY"], { step: tmp6, total: tmp7 });
  items1[1] = callback2(Text.Text, obj1);
  const obj2 = { style: tmp.buttonContainer, children: null };
  const obj3 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = tmp2(1114).intl;
  obj3[0] = intl2.string(getSystemLocale.t.cpT0Cq);
  obj3[1] = screen.onClose;
  obj3[2] = registerAssetDefault;
  obj3[3] = tmp.rightButton;
  obj2[1] = callback2(HeaderActionButton.HeaderActionButton, obj3);
  items1[2] = callback2(View, obj2);
  obj[2] = items1;
  return callback3(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
