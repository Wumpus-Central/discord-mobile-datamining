// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  let tmp6;
  let tmp7;
  screen = screen.screen;
  const tmp = callback4();
  if (require(8863) /* EditGuildEventScreens */.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (tmp2(8863).EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (tmp2(8863).EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    tmp2(1351).assertNever(screen);
    const tmp2Result = tmp2(1351);
  }
  [tmp6, tmp7] = callback(items, 2);
  let obj = { top: true, style: tmp.header, children: null };
  obj = { style: tmp.buttonContainer };
  const items1 = [callback2(View, obj), , ];
  const obj1 = { style: tmp.headerTitle, variant: "text-xs/bold", color: "text-default", children: null };
  const intl = tmp2(1236).intl;
  obj1[3] = intl.format(require(1236) /* getSystemLocale */.t["42HaFY"], { step: tmp6, total: tmp7 });
  items1[1] = callback2(require(4281) /* Text */.Text, obj1);
  const obj2 = { style: tmp.buttonContainer, children: null };
  const obj3 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = tmp2(1236).intl;
  obj3[0] = intl2.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj3[1] = screen.onClose;
  obj3[2] = importDefault(7837);
  obj3[3] = tmp.rightButton;
  obj2[1] = callback2(require(5917) /* HeaderActionButton */.HeaderActionButton, obj3);
  items1[2] = callback2(View, obj2);
  obj[2] = items1;
  return callback3(require(5272) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};