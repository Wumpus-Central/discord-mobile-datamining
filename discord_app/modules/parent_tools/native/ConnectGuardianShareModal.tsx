// discord_app/modules/parent_tools/native/ConnectGuardianShareModal.tsx
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import _modDef5260 from "module_5260" /* 5260 */;
import Modal from "Modal" /* 11115 */;
import useOnNewPendingRequestDefault from "useOnNewPendingRequest" /* 14237 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "freshTeenActivityWithMap" /* 5296 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function ConnectGuardianShareScreen() {
  const tmp = callback3();
  let obj = getLinkCode(1236);
  const syncMessages = obj.useSyncMessages(getLinkCode(2335).messagesLoader);
  const callback = React.useCallback(() => {
    const intl = getLinkCode(1236).intl;
    getLinkCode(4093).presentFailedToast(intl.string(getLinkCode(1236).t.R0RpRX));
    let arr = callback(5260);
    arr = arr.pop();
  }, []);
  obj1 = getLinkCode(11104);
  getLinkCode = obj1.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj2 = getLinkCode(647);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => store.getLinkCode());
  let obj3 = getLinkCode(647);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  const effect = React.useEffect(() => {
    getLinkCode();
  }, []);
  useOnNewPendingRequestDefault(_modDef5260.pop);
  obj = { spacing: ThemesDefault.space.PX_40, children: null };
  obj = { spacing: ThemesDefault.space.PX_8, children: null };
  obj1 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  let intl = getLinkCode(1236).intl;
  obj1[4] = intl.string(messagesProxyDefault.ITlV6p);
  const items2 = [callback(getLinkCode(4734).Text, obj1), ];
  obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = getLinkCode(1236).intl;
  obj2[3] = intl2.format(messagesProxyDefault.F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
  items2[1] = callback(getLinkCode(4734).Text, obj2);
  obj[1] = items2;
  const items3 = [callback2(getLinkCode(4733).Stack, obj), ];
  obj3 = { spacing: ThemesDefault.space.PX_24, style: tmp.cardSection, children: null };
  const obj4 = { style: tmp.qrLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getLinkCode(1236).intl;
  obj4[3] = intl3.string(messagesProxyDefault.pojgfk);
  const items4 = [callback(getLinkCode(4734).Text, obj4), ];
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const obj5 = { shareActions: "full", linkCode: null, expiresAt: null, onRefresh: null };
      obj5[1] = stateFromStores;
      obj5[2] = stateFromStores1;
      obj5[3] = getLinkCode;
      let tmp11Result = tmp11(tmp2(14238).ConnectGuardianCard, obj5);
    }
    const obj6 = { children: null };
    const obj7 = { children: null };
    items4[1] = tmp11Result;
    obj3[2] = items4;
    items3[1] = tmp12(getLinkCode(4733).Stack, obj3);
    obj[1] = items3;
    obj7[0] = tmp12(getLinkCode(4733).Stack, obj);
    obj6[0] = tmp11(getLinkCode(5445).ModalContent, obj7);
    return tmp11(getLinkCode(5440).ModalScreen, obj6);
  }
  const tmp9 = useOnNewPendingRequestDefault;
  tmp11Result = tmp11(View, { style: tmp.loading, children: callback(getLinkCode(5446).ActivityIndicator, {}) });
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: { textAlign: "center" }, body: { textAlign: "center" }, qrLabel: { textAlign: "center" }, cardSection: { alignItems: "center" }, loading: null };
createCacheKey = { alignItems: "center", justifyContent: "center", paddingVertical: ThemesDefault.space.PX_24 };
createCacheKey[4] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/ConnectGuardianShareModal.tsx");

export default function ConnectGuardianShareModal() {
  const memo = React.useMemo(() => {
    let obj = { CONNECT_GUARDIAN_SHARE: null };
    obj = {
      headerShown: true,
      headerLeft: callback(6314).getHeaderBackButton(callback2(5260).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_9, {});
      }
    };
    obj[0] = obj;
    return obj;
  }, []);
  let obj = { initialRouteName: "CONNECT_GUARDIAN_SHARE", screens: memo, headerBackTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return callback(Modal.Modal, obj);
};