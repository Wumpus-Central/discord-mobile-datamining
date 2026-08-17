// discord_app/modules/auth/native/components/ExternalLink.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ Linking: c4, ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  const container = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, height: "100%", display: "flex", justifyContent: null, paddingLeft: null, paddingRight: null };
  let str = "center";
  if (arg0) {
    str = "space-between";
  }
  container[3] = str;
  const space = tmp(712).space;
  container[4] = arg0 ? space.PX_24 : space.PX_16;
  const space2 = tmp(712).space;
  container[5] = arg0 ? space2.PX_24 : space2.PX_16;
  return { container, description: { textAlign: "center", marginTop: 8 } };
});
const result = require("set").fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default function ExternalLink(externalURL) {
  externalURL = externalURL.externalURL;
  importDefault = undefined;
  let callback;
  const tmp = callback3(importDefault(callback[5])());
  let obj = externalURL(callback[6]);
  importDefault = obj.useNavigation();
  const items = [externalURL];
  callback = React.useCallback(() => {
    closure_1_4.openURL(externalURL);
  }, items);
  const items1 = [callback];
  const effect = React.useEffect(() => {
    callback();
  }, items1);
  obj = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp.container, children: null };
  obj = { children: null };
  obj1 = { children: null };
  const intl = externalURL(callback[8]).intl;
  obj1[0] = intl.string(externalURL(callback[8]).t["0Niu/F"]);
  const items2 = [callback(importDefault(callback[7]), obj1), ];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = externalURL(callback[8]).intl;
  obj2[3] = intl2.string(externalURL(callback[8]).t.nToOEg);
  items2[1] = callback(externalURL(callback[9]).Text, obj2);
  obj[0] = items2;
  const items3 = [callback2(closure_6, obj), ];
  const obj3 = { children: null };
  const obj4 = { shrink: true, variant: "primary", text: null, onPress: null };
  const intl3 = externalURL(callback[8]).intl;
  obj4[2] = intl3.string(externalURL(callback[8]).t["2ixEBi"]);
  obj4[3] = callback;
  const items4 = [callback(externalURL(callback[11]).Button, obj4), ];
  const obj5 = { shrink: true, variant: "secondary", text: null, onPress: null };
  const intl4 = externalURL(callback[8]).intl;
  obj5[2] = intl4.string(externalURL(callback[8]).t.j3cG2p);
  obj5[3] = function onPress() {
    return arr.pop();
  };
  items4[1] = callback(externalURL(callback[11]).Button, obj5);
  obj3[0] = items4;
  items3[1] = callback2(externalURL(callback[10]).ButtonGroup, obj3);
  obj[3] = items3;
  return callback2(closure_5, obj);
};