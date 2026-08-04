import HeaderBackImage from "HeaderBackImage";
import { View } from "ConnectGuardianCard";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function ConnectGuardianShareScreen() {
  const tmp = createCacheKey();
  let obj = getLinkCode(1236);
  const syncMessages = obj.useSyncMessages(getLinkCode(2285).messagesLoader);
  const callback = React.useCallback(() => {
    const intl = getLinkCode(1236).intl;
    getLinkCode(3985).presentFailedToast(intl.string(getLinkCode(1236).t.R0RpRX));
    let arr = callback(4490);
    arr = arr.pop();
  }, []);
  let obj1 = getLinkCode(11236);
  getLinkCode = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj2 = getLinkCode(647);
  const items = [freshTeenActivityWithMap];
  const stateFromStores = obj2.useStateFromStores(items, () => store.getLinkCode());
  let obj3 = getLinkCode(647);
  const items1 = [freshTeenActivityWithMap];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  const effect = React.useEffect(() => {
    getLinkCode();
  }, []);
  importDefault(14030)(importDefault(4490).pop);
  obj = { spacing: null, children: null };
  obj[0] = importDefault(712).space.PX_40;
  obj = { spacing: null, children: null };
  obj[0] = importDefault(712).space.PX_8;
  obj1 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  let intl = getLinkCode(1236).intl;
  obj1[4] = intl.string(importDefault(2285).ITlV6p);
  const items2 = [callback(getLinkCode(4281).Text, obj1), ];
  obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = getLinkCode(1236).intl;
  obj2[3] = intl2.format(importDefault(2285).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = callback(getLinkCode(4281).Text, obj2);
  obj[1] = items2;
  const items3 = [callback2(getLinkCode(4693).Stack, obj), ];
  obj3 = { spacing: null, style: null, children: null };
  obj3[0] = importDefault(712).space.PX_24;
  obj3[1] = tmp.cardSection;
  const obj4 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getLinkCode(1236).intl;
  obj4[3] = intl3.string(importDefault(2285).pojgfk);
  const items4 = [callback(getLinkCode(4281).Text, obj4), ];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj5 = { shareActions: "full", linkCode: null, expiresAt: null, onRefresh: null };
      obj5[1] = stateFromStores;
      obj5[2] = stateFromStores1;
      obj5[3] = getLinkCode;
      let tmp11Result = tmp11(tmp2(14031).ConnectGuardianCard, obj5);
    }
    const obj6 = { children: null };
    const obj7 = { children: null };
    items4[1] = tmp11Result;
    obj3[2] = items4;
    items3[1] = tmp12(getLinkCode(4693).Stack, obj3);
    obj[1] = items3;
    obj7[0] = tmp12(getLinkCode(4693).Stack, obj);
    obj6[0] = tmp11(getLinkCode(7758).ModalContent, obj7);
    return tmp11(getLinkCode(7757).ModalScreen, obj6);
  }
  const tmp9 = importDefault(14030);
  tmp11Result = tmp11(View, { style: tmp.loading, children: callback(getLinkCode(5732).ActivityIndicator, {}) });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" }, loading: null };
createCacheKey = { alignItems: "center", justifyContent: "center", paddingVertical: require("Themes").space.PX_24 };
createCacheKey[4] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  const memo = React.useMemo(() => {
    let obj = { CONNECT_GUARDIAN_SHARE: null };
    obj = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj[1] = callback(5238).getHeaderBackButton(callback2(4490).pop);
    obj[2] = function headerTitle() {
      return null;
    };
    obj[3] = function render() {
      return callback(closure_9, {});
    };
    obj[0] = obj;
    return obj;
  }, []);
  let obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo, headerBackTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return callback(require(11248) /* Modal */.Modal, obj);
};