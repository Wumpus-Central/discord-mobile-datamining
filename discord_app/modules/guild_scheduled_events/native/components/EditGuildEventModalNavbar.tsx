// === Module 8807: EditGuildEventModalNavbar ===

// Module 8807 (EditGuildEventModalNavbar)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import Text from "Text" /* 4734 */;
import HeaderActionButton from "HeaderActionButton" /* 5432 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 6803 */;
import registerAssetDefault from "registerAsset" /* 8143 */;
import EditGuildEventScreens from "EditGuildEventScreens" /* 8784 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = callback4();
  if (EditGuildEventScreens.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (EditGuildEventScreens.EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (EditGuildEventScreens.EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    isDiscordFrontendDevelopment.assertNever(screen);
    const tmp2Result = isDiscordFrontendDevelopment;
  }
  [tmp6, tmp7] = callback(items, 2);
  const obj = { style: tmp.buttonContainer };
  const items1 = [callback2(View, obj), , ];
  obj1 = { style: tmp.headerTitle, variant: "text-xs/bold", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.format(getSystemLocale.t["42HaFY"], { step: tmp6, total: tmp7 });
  items1[1] = callback2(Text.Text, obj1);
  const obj2 = { style: tmp.buttonContainer, children: null };
  const obj3 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = getSystemLocale.intl;
  obj3[0] = intl2.string(getSystemLocale.t.cpT0Cq);
  obj3[1] = screen.onClose;
  obj3[2] = registerAssetDefault;
  obj3[3] = tmp.rightButton;
  obj2[1] = callback2(HeaderActionButton.HeaderActionButton, obj3);
  items1[2] = callback2(View, obj2);
  obj[2] = items1;
  return callback3(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};