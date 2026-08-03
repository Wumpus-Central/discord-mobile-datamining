import noop from "noop";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { FamilyCenterAction } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, centered: null, header: null, title: null, description: null, cardSection: null, scanPrompt: null, grow: null, footer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_16 };
let obj1 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { marginBottom: require("Themes").space.PX_40 };
let obj2 = { marginBottom: require("Themes").space.PX_40 };
createCacheKey[3] = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_8, textAlign: "center" };
let obj3 = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: require("Themes").space.PX_16, textAlign: "center" };
createCacheKey[5] = { alignItems: "center" };
let obj4 = { paddingHorizontal: require("Themes").space.PX_16, textAlign: "center" };
createCacheKey[6] = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_24, textAlign: "center" };
createCacheKey[7] = { flexGrow: 1 };
let obj5 = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_24, textAlign: "center" };
createCacheKey[8] = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { paddingHorizontal: require("Themes").space.PX_16 };
const result = require("ME").fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  let onComplete;
  let connectGuardianGate;
  let dependencyMap;
  onComplete = route.route.params.onComplete;
  const tmp = createCacheKey();
  let obj = onComplete(16367);
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
      obj[0] = outer1_6.NufConsentGateLinkCodeError;
      obj.track(outer1_5.FAMILY_CENTER_ACTION, obj);
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
    obj[1] = callback(tmp4(5703).ActivityIndicator, {});
    let tmp9 = callback(View, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    const obj2 = { style: null, variant: "heading-xl/bold", color: "text-default", children: null };
    obj2[0] = tmp.title;
    const intl = tmp4(1236).intl;
    obj2[3] = intl.string(tmp2(2255).ITlV6p);
    const items2 = [callback(tmp4(4251).Text, obj2), ];
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj3[0] = tmp.description;
    const intl2 = tmp4(1236).intl;
    obj3[3] = intl2.format(tmp2(2255).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    items2[1] = callback(tmp4(4251).Text, obj3);
    obj1[1] = items2;
    const items3 = [callback2(View, obj1), , , ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.cardSection;
    const obj5 = { style: null, variant: "text-md/semibold", color: "text-default", children: null };
    obj5[0] = tmp.scanPrompt;
    const intl3 = tmp4(1236).intl;
    obj5[3] = intl3.string(tmp2(2255).Mi60fm);
    const items4 = [callback(tmp4(4251).Text, obj5), ];
    ({ linkCode: obj9[1], expiresAt: obj9[2], refresh: obj9[3] } = connectGuardianGate);
    items4[1] = callback(tmp4(13998).ConnectGuardianCard, { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null });
    obj4[1] = items4;
    items3[1] = callback2(View, obj4);
    const obj7 = { style: null };
    obj7[0] = tmp.grow;
    items3[2] = callback(View, obj7);
    const obj8 = { style: null, children: null };
    const items5 = [tmp.footer, ];
    const obj9 = { paddingBottom: null };
    obj9[0] = connectGuardianGate(1581)().bottom + tmp2(712).space.PX_16;
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
    obj8[1] = callback(tmp4(4666).Button, obj10);
    items3[3] = callback(View, obj8);
    obj[1] = items3;
    tmp9 = callback2(View, obj);
    const obj6 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
  }
  return tmp9;
};