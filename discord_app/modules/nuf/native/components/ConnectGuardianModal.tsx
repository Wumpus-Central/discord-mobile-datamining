// === Module 16963: ConnectGuardianModal ===

// Module 16963 (ConnectGuardianModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { FamilyCenterAction } from "items" /* 7230 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, centered: null, header: null, title: null, description: null, cardSection: null, scanPrompt: null, grow: null, footer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_40 };
let obj2 = { marginBottom: ThemesDefault.space.PX_40 };
createCacheKey[3] = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_8, textAlign: "center" };
let obj3 = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: ThemesDefault.space.PX_16, textAlign: "center" };
createCacheKey[5] = { alignItems: "center" };
let obj4 = { paddingHorizontal: ThemesDefault.space.PX_16, textAlign: "center" };
createCacheKey[6] = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24, textAlign: "center" };
createCacheKey[7] = { flexGrow: 1 };
let obj5 = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24, textAlign: "center" };
createCacheKey[8] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj6 = { paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  let onComplete;
  let connectGuardianGate;
  dependencyMap = undefined;
  onComplete = route.route.params.onComplete;
  const tmp = callback3();
  let obj = onComplete(16964);
  connectGuardianGate = obj.useConnectGuardianGate();
  dependencyMap = React.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = React.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      let obj = connectGuardianGate(ref[9]);
      obj = { action: null, source: "NUF Connect Guardian" };
      obj[0] = closure_1_6.NufConsentGateLinkCodeError;
      obj.track(closure_1_5.FAMILY_CENTER_ACTION, obj);
      if (onComplete != null) {
        onComplete(true);
      }
    }
  }, items);
  if ("gate" !== connectGuardianGate.state) {
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr2[0], centered: arr2[1] } = tmp);
    obj[0] = items1;
    obj[1] = callback(tmp4(6013).ActivityIndicator, {});
    let tmp9 = callback(View, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    const obj2 = { style: null, variant: "heading-xl/bold", color: "text-default", children: null };
    obj2[0] = tmp.title;
    const intl = tmp4(1236).intl;
    obj2[3] = intl.string(tmp2(2370).ITlV6p);
    const items2 = [callback(tmp4(4442).Text, obj2), ];
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj3[0] = tmp.description;
    const intl2 = tmp4(1236).intl;
    obj3[3] = intl2.format(tmp2(2370).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    items2[1] = callback(tmp4(4442).Text, obj3);
    obj1[1] = items2;
    const items3 = [callback2(View, obj1), , , ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.cardSection;
    const obj5 = { style: null, variant: "text-md/semibold", color: "text-default", children: null };
    obj5[0] = tmp.scanPrompt;
    const intl3 = tmp4(1236).intl;
    obj5[3] = intl3.string(tmp2(2370).Mi60fm);
    const items4 = [callback(tmp4(4442).Text, obj5), ];
    ({ linkCode: obj9[1], expiresAt: obj9[2], refresh: obj9[3] } = connectGuardianGate);
    items4[1] = callback(tmp4(14420).ConnectGuardianCard, { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null });
    obj4[1] = items4;
    items3[1] = callback2(View, obj4);
    const obj7 = { style: null };
    obj7[0] = tmp.grow;
    items3[2] = callback(View, obj7);
    const obj8 = { style: null, children: null };
    const items5 = [tmp.footer, ];
    const obj9 = { paddingBottom: null };
    obj9[0] = connectGuardianGate(1629)().bottom + tmp2(712).space.PX_16;
    items5[1] = obj9;
    obj8[0] = items5;
    const obj10 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl4 = tmp4(1236).intl;
    obj10[2] = intl4.string(tmp4(1236).t["3PatSz"]);
    obj10[3] = function onPress() {
      let tmpResult;
      if (onComplete != null) {
        tmpResult = tmp(false);
      }
      return tmpResult;
    };
    obj8[1] = callback(tmp4(4893).Button, obj10);
    items3[3] = callback(View, obj8);
    obj[1] = items3;
    tmp9 = callback2(View, obj);
    const obj6 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
  }
  return tmp9;
};