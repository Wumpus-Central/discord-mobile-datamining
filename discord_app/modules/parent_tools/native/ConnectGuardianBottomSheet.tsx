// === Module 14236: ConnectGuardianBottomSheet ===

// Module 14236 (ConnectGuardianBottomSheet)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import Background from "Background" /* 6950 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 14237 */;
import ConnectGuardianCard from "ConnectGuardianCard" /* 14238 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_6 } from "items" /* 5297 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_24, paddingVertical: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { alignItems: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(arg0) {
  ({ title, body } = arg0);
  ({ linkCode, expiresAt, onRefresh } = arg0);
  const tmp = callback();
  let obj = defaultAreStatesEqual;
  const items = [closure_5];
  let stateFromStores = obj.useStateFromStores(items, () => store.getLinkCode());
  obj1 = defaultAreStatesEqual;
  const items1 = [closure_5];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  callback = React.useCallback(() => {
    callback(table[8]).hideActionSheet(closure_6);
  }, []);
  useOnNewPendingRequestDefault(callback);
  obj = { style: tmp.info, children: null };
  obj1 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  if (title == null) {
    const intl = getSystemLocale.intl;
    title = intl.string(messagesProxyDefault.aCUVfL);
  }
  obj1[4] = title;
  const items2 = [callback(Text.Text, obj1), ];
  const obj2 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: null };
  if (body == null) {
    const intl2 = getSystemLocale.intl;
    body = intl2.format(messagesProxyDefault["2O6ltn"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  }
  obj2[3] = body;
  items2[1] = callback(Text.Text, obj2);
  obj[1] = items2;
  const items3 = [callback2(View, obj), , ];
  const obj3 = { style: tmp.cardContainer, children: null };
  if (stateFromStores == null) {
    stateFromStores = linkCode;
  }
  const obj4 = { linkCode: stateFromStores, expiresAt: null, onRefresh: null };
  if (stateFromStores1 == null) {
    stateFromStores1 = expiresAt;
  }
  const obj5 = { startExpanded: true, children: null };
  obj4[1] = stateFromStores1;
  obj4[2] = onRefresh;
  obj3[1] = callback(ConnectGuardianCard.ConnectGuardianCard, obj4);
  items3[1] = callback(View, obj3);
  const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj6[2] = intl3.string(messagesProxyDefault.Hsm5IF);
  obj6[3] = callback;
  items3[2] = callback(Button.Button, obj6);
  obj[1] = items3;
  obj5[1] = callback2(View, obj);
  return callback(Background.BottomSheet, obj5);
};