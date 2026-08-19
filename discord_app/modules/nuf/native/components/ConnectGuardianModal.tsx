// discord_app/modules/nuf/native/components/ConnectGuardianModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { FamilyCenterAction } from "../../../parent_tools/FamilyCenterConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_40 };
createCacheKey[3] = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: ThemesDefault.space.PX_16, textAlign: "center" };
createCacheKey[5] = { alignItems: "center" };
createCacheKey[6] = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_24, textAlign: "center" };
createCacheKey[7] = { flexGrow: 1 };
createCacheKey[8] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default function ConnectGuardianModal(route) {
  const onComplete = route.route.params.onComplete;
  const tmp = callback3();
  let obj = onComplete(16667);
  const connectGuardianGate = obj.useConnectGuardianGate();
  dependencyMap = React.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = React.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      connectGuardianGate(ref[9]);
      const obj = { action: null, source: "NUF Connect Guardian" };
      obj[0] = FamilyCenterAction.NufConsentGateLinkCodeError;
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
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
    obj[1] = callback(tmp4(5446).ActivityIndicator, {});
    let tmp9 = callback(View, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    const obj2 = { style: null, variant: "heading-xl/bold", color: "text-default", children: null };
    obj2[0] = tmp.title;
    const intl = tmp4(1236).intl;
    obj2[3] = intl.string(tmp2(2335).ITlV6p);
    const items2 = [callback(tmp4(4734).Text, obj2), ];
    const obj3 = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj3[0] = tmp.description;
    const intl2 = tmp4(1236).intl;
    obj3[3] = intl2.format(tmp2(2335).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    items2[1] = callback(tmp4(4734).Text, obj3);
    obj1[1] = items2;
    const items3 = [callback2(View, obj1), , , ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.cardSection;
    const obj5 = { style: null, variant: "text-md/semibold", color: "text-default", children: null };
    obj5[0] = tmp.scanPrompt;
    const intl3 = tmp4(1236).intl;
    obj5[3] = intl3.string(tmp2(2335).Mi60fm);
    const items4 = [callback(tmp4(4734).Text, obj5), ];
    ({ linkCode: obj9[1], expiresAt: obj9[2], refresh: obj9[3] } = connectGuardianGate);
    items4[1] = callback(tmp4(14238).ConnectGuardianCard, { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null });
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
    obj8[1] = callback(tmp4(4745).Button, obj10);
    items3[3] = callback(View, obj8);
    obj[1] = items3;
    tmp9 = callback2(View, obj);
  }
  return tmp9;
};