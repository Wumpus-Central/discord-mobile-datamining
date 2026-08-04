// discord_app/modules/parent_tools/native/ConnectGuardianBottomSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { CONNECT_GUARDIAN_BOTTOM_SHEET_KEY as closure_6 } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, info: null, centered: null, cardContainer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_24, paddingVertical: require("Themes").space.PX_24, gap: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignItems: "center", gap: require("Themes").space.PX_8 };
const result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(arg0) {
  let body;
  let expiresAt;
  let linkCode;
  let onRefresh;
  let title;
  ({ title, body } = arg0);
  ({ linkCode, expiresAt, onRefresh } = arg0);
  const tmp = createCacheKey();
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [freshTeenActivityWithMap];
  let stateFromStores = obj.useStateFromStores(items, () => store.getLinkCode());
  let obj1 = require(647) /* defaultAreStatesEqual */;
  const items1 = [freshTeenActivityWithMap];
  let stateFromStores1 = obj1.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  const callback = React.useCallback(() => {
    callback(table[8]).hideActionSheet(closure_6);
  }, []);
  importDefault(13930)(callback);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.info, children: null };
  obj1 = { style: tmp.centered, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  if (title == null) {
    const intl = tmp2(1236).intl;
    title = intl.string(tmp7(2225).aCUVfL);
  }
  obj1[4] = title;
  const items2 = [closure_7(require(4189) /* Text */.Text, obj1), ];
  const obj2 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: null };
  if (body == null) {
    const intl2 = tmp2(1236).intl;
    body = intl2.format(tmp7(2225)["2O6ltn"], { link: "https://support.discord.com/hc/articles/14155060633623" });
  }
  obj2[3] = body;
  items2[1] = closure_7(require(4189) /* Text */.Text, obj2);
  obj[1] = items2;
  const items3 = [closure_8(View, obj), , ];
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
  obj3[1] = closure_7(require(13931) /* ConnectGuardianCard */.ConnectGuardianCard, obj4);
  items3[1] = closure_7(View, obj3);
  const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
  const intl3 = tmp2(1236).intl;
  obj6[2] = intl3.string(importDefault(2225).Hsm5IF);
  obj6[3] = callback;
  items3[2] = closure_7(require(4604) /* Button */.Button, obj6);
  obj[1] = items3;
  obj5[1] = closure_8(View, obj);
  return closure_7(require(5247) /* Background */.BottomSheet, obj5);
};