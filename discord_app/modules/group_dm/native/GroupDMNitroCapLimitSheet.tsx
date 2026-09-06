// === Module 11596: GroupDMNitroCapLimitSheet ===

// Module 11596 (GroupDMNitroCapLimitSheet)
import ThemesDefault from "Themes" /* 576 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9967 */;
import useGroupDMNitroUpsellActionDefault from "useGroupDMNitroUpsellAction" /* 11598 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import { MAX_GROUP_DM_NITRO_PARTICIPANTS as closure_6 } from "MAX_GROUP_DM_NITRO_PARTICIPANTS" /* 11593 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ AnalyticEvents: error, AnalyticsObjects: closure_8, AnalyticsPages: c9, MAX_GROUP_DM_PARTICIPANTS: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, title: null, body: null, buttons: null, nitroWheelIcon: null };
createCacheKey = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
let obj1 = { marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[2] = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
let obj2 = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
createCacheKey[3] = { width: "100%", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { bottom: -1, width: 22, height: 16 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: "100%", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapLimitSheet.tsx");

export default function GroupDMNitroCapLimitSheet(location) {
  const _location = location.location;
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback2();
  let obj = _location(504);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = _location(11591);
  const groupDMNitroAudience = obj1.useGroupDMNitroAudience();
  importDefault = tmp6;
  let obj2 = React;
  const items1 = [_location];
  const callback = React.useCallback(() => {
    let obj = callback(1242);
    obj = { location: _location, location_object: closure_1_8.BUTTON_CTA };
    obj.track(closure_1_7.PREMIUM_PROMOTION_OPENED, obj);
    callback(4527).hideActionSheet();
    const obj3 = callback(4527);
    const result = _location(11597).navigateToPremiumHomePage();
  }, items1);
  const tmp9 = usePremiumFeatureUpsellGetNitroDefault(false, callback, constants.IN_APP);
  let loading = "acquire" === groupDMNitroAudience;
  if (loading) {
    loading = tmp9.loading;
  }
  obj = { audience: groupDMNitroAudience, location: _location, acquisitionStrategy: _location(11591).GroupDMNitroAcquisitionStrategy.CHECKOUT, onCheckout: tmp9.onPress };
  const tmp8ResultResult = useGroupDMNitroUpsellActionDefault(obj);
  dependencyMap = tmp8ResultResult;
  const items2 = ["upgrade" === groupDMNitroAudience, tmp8ResultResult];
  const callback1 = obj2.useCallback(() => {
    if (callback) {
      callback(4527).hideActionSheet();
      const obj = callback(4527);
    }
    dependencyMap();
  }, items2);
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1114).intl;
  obj2 = { number: closure_10 };
  obj1[3] = intl.formatToPlainString(_location(1114).t.IyBYPN, obj2);
  const items3 = [callback(_location(4556).Text, obj1), , ];
  let obj3 = { style: tmp.body, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl2 = tmp2(1114).intl;
  obj3[3] = intl2.formatToPlainString(_location(1114).t["Ae97n/"], { number: closure_6 });
  items3[1] = callback(_location(4556).Text, obj3);
  const obj5 = { style: tmp.buttons, children: null };
  const obj6 = { text: null, size: "lg", variant: "experimental_premium-primary", icon: null, iconPosition: "start", shiny: null, loading: null, onPress: null, grow: true };
  const intl3 = tmp2(1114).intl;
  const obj4 = { number: closure_6 };
  const tmp8Result = useGroupDMNitroUpsellActionDefault;
  obj6[0] = intl3.string(_location(11591).getGroupDMNitroCapCTAMessage(groupDMNitroAudience));
  const tmp2Result = _location(11591);
  obj6[3] = callback(_location(8662).NitroWheelIcon, { style: tmp.nitroWheelIcon, color: ThemesDefault.unsafe_rawColors.WHITE, size: "custom" });
  obj6[5] = !stateFromStores;
  obj6[6] = loading;
  let tmp16 = null;
  if (!loading) {
    tmp16 = callback1;
  }
  const obj8 = { children: null };
  obj6[7] = tmp16;
  const items4 = [callback(_location(4975).Button, obj6), ];
  const obj9 = { text: null, size: "lg", variant: "secondary", onPress: null, grow: true };
  const intl4 = tmp2(1114).intl;
  obj9[0] = intl4.string(_location(1114).t.PUZmk4);
  obj9[3] = callback;
  items4[1] = callback(_location(4975).Button, obj9);
  obj5[1] = items4;
  items3[2] = closure_12(View, obj5);
  obj[1] = items3;
  obj8[0] = closure_12(View, obj);
  return callback(_location(7150).BottomSheet, obj8);
};