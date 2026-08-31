// === Module 14464: Row ===

// Module 14464 (Row)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import Text from "Text" /* 4444 */;
import _modDef4691 from "module_4691" /* 4691 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8736 */;
import Modal from "Modal" /* 11468 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function Row(arg0) {
  ({ header, description, IconComponent } = arg0);
  const tmp = callback3();
  obj = { style: tmp.row, children: null };
  obj = { style: tmp.iconContainer, children: callback(IconComponent, obj) };
  obj = { style: tmp.icon };
  const items = [callback(View, obj), ];
  obj1 = { style: tmp.content, children: null };
  const items1 = [callback(Text.Text, { style: tmp.header, variant: "text-sm/bold", color: "mobile-text-heading-primary", children: header }), callback(Text.Text, { variant: "text-xs/medium", color: "text-default", children: description })];
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = callback4();
  obj = _require(11459);
  const intl = _require(1236).intl;
  const intl2 = _require(1236).intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(messagesProxyDefault.n6LOrh), intl2.string(messagesProxyDefault.JNLpDZ));
  _require = useIsInAdultAgeGroupDefault();
  obj1 = _require(7306);
  const sortedActivityTypeConfigs = obj1.getSortedActivityTypeConfigs();
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.container, children: null };
  const items = [
    callback(_require(4444).Text, { style: tmp.groupHeader, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: ageSpecificText }),
    sortedActivityTypeConfigs.map((arg0) => {
      [tmp, obj] = arg0;
      obj = { IconComponent: closure_1_7[tmp], header: obj.tooltipHeader(), description: obj.tooltipDescription(closure_0) };
      return closure_1_5(closure_1_9, obj, tmp);
    })
  ];
  obj1[1] = items;
  obj[0] = callback2(View, obj1);
  const items1 = [callback(_require(8661).ModalContent, obj), ];
  const obj3 = { children: null };
  const obj4 = { variant: "primary", text: null, onPress: null };
  const intl3 = _require(1236).intl;
  obj4[1] = intl3.string(_require(1236).t["NX+WJN"]);
  obj4[2] = _modDef4691.pop;
  obj3[0] = callback(_require(4896).Button, obj4);
  items1[1] = callback(_require(11466).ModalFooter, obj3);
  obj[0] = items1;
  return callback2(_require(8660).ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { [USER_INTERACTION]: require("ChatIcon").ChatIcon, [USER_CALLED]: require("PhoneIcon").PhoneIcon, [USER_ADD]: require("FriendsIcon").FriendsIcon, [GUILD_ADD]: require("ServerGridIcon").ServerGridIcon, [GUILD_INTERACTION]: require("ThreadIcon").ThreadIcon, [PURCHASES]: require("CreditCardIcon").CreditCardIcon, [TOTAL_VOICE_MINUTES]: require("ClockIcon").ClockIcon, [GIFTS]: require("GiftIcon").GiftIcon };
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } = require("items").TeenActionDisplayType);
obj = { row: null, content: null, iconContainer: null, header: null, icon: null };
obj = { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginBottom: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
obj[0] = obj;
obj[1] = { flexShrink: 1 };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: ThemesDefault.radii.round, flexShrink: 0, marginRight: ThemesDefault.space.PX_12 };
obj[2] = createCacheKey;
obj[3] = { marginBottom: ThemesDefault.space.PX_4 };
const obj2 = { marginBottom: ThemesDefault.space.PX_4 };
obj[4] = { tintColor: ThemesDefault.colors.TEXT_BRAND };
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = { container: null, groupHeader: null };
let obj3 = { tintColor: ThemesDefault.colors.TEXT_BRAND };
obj4[0] = { display: "flex", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, width: "100%" };
const obj5 = { display: "flex", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, width: "100%" };
obj4[1] = { marginBottom: ThemesDefault.space.PX_24 };
let closure_10 = createCacheKey.createStyles(obj4);
const obj6 = { marginBottom: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  const memo = React.useMemo(() => {
    obj = { DATA_TOOLTIP: null };
    obj = {
      headerShown: true,
      headerLeft: callback(5463).getHeaderCloseButton(callback2(4691).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_11, {});
      }
    };
    obj[0] = obj;
    return obj;
  }, []);
  obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return callback(Modal.Modal, obj);
};