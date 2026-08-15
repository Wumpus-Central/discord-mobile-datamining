// discord_app/modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx
import getEmptyActivityFormatter from "getEmptyActivityFormatter";
import { View } from "messagesProxy";
import jsxProd from "ModalContent";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Modal } from "../../../design/components/Modal/native/Modal.native.tsx";
import { ModalContent } from "../../../design/components/Modal/native/ModalContent.native.tsx";
import { ModalFooter } from "../../../design/components/Modal/native/ModalFooter.native.tsx";
import { ModalScreen } from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
import { useAgeSpecificText } from "../hooks/useAgeSpecificText.tsx";
import { useIsInAdultAgeGroup } from "../hooks/useIsInAdultAgeGroup.tsx";

let GIFTS;
let GUILD_ADD;
let GUILD_INTERACTION;
let PURCHASES;
let TOTAL_VOICE_MINUTES;
let USER_ADD;
let USER_CALLED;
let USER_INTERACTION;
let c5;
let closure_6;
const require = arg1;
function Row(arg0) {
  let IconComponent;
  let description;
  let header;
  ({ header, description, IconComponent } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.row, children: null };
  obj = { style: tmp.iconContainer, children: callback(IconComponent, obj) };
  obj = { style: tmp.icon };
  const items = [callback(View, obj), ];
  const obj1 = { style: tmp.content, children: null };
  const items1 = [callback(Text.Text, { style: tmp.header, variant: "text-sm/bold", color: "mobile-text-heading-primary", children: header }), callback(Text.Text, { variant: "text-xs/medium", color: "text-default", children: description })];
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = callback4();
  let obj = _useAgeSpecificText;
  const intl = _getSystemLocale.intl;
  const intl2 = _getSystemLocale.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(messagesProxy.n6LOrh), intl2.string(messagesProxy.JNLpDZ));
  _require = useIsInAdultAgeGroup();
  let obj1 = _getEmptyActivityFormatter;
  const sortedActivityTypeConfigs = obj1.getSortedActivityTypeConfigs();
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.container, children: null };
  const items = [
    callback(_Text.Text, { style: tmp.groupHeader, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: ageSpecificText }),
    sortedActivityTypeConfigs.map((arg0) => {
      let obj;
      let tmp;
      [tmp, obj] = arg0;
      obj = { IconComponent: outer1_7[tmp], header: obj.tooltipHeader(), description: null };
      obj[2] = obj.tooltipDescription(closure_0);
      return outer1_5(outer1_9, obj, tmp);
    })
  ];
  obj1[1] = items;
  obj[0] = callback2(View, obj1);
  const items1 = [callback(_ModalContent.ModalContent, obj), ];
  const obj3 = { children: null };
  const obj4 = { variant: "primary", text: null, onPress: null };
  const intl3 = _getSystemLocale.intl;
  obj4[1] = intl3.string(_getSystemLocale.t["NX+WJN"]);
  obj4[2] = ModalActionCreators.pop;
  obj3[0] = callback(_Button.Button, obj4);
  items1[1] = callback(_ModalFooter.ModalFooter, obj3);
  obj[0] = items1;
  return callback2(_ModalScreen.ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { [USER_INTERACTION]: require("ChatIcon").ChatIcon, [USER_CALLED]: require("PhoneIcon").PhoneIcon, [USER_ADD]: require("FriendsIcon").FriendsIcon, [GUILD_ADD]: require("ServerGridIcon").ServerGridIcon, [GUILD_INTERACTION]: require("ThreadIcon").ThreadIcon, [PURCHASES]: require("CreditCardIcon").CreditCardIcon, [TOTAL_VOICE_MINUTES]: require("ClockIcon").ClockIcon, [GIFTS]: require("GiftIcon").GiftIcon };
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } = require("items").TeenActionDisplayType);
obj = { row: null, content: null, iconContainer: null, header: null, icon: null };
obj = { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginBottom: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm };
obj[0] = obj;
obj[1] = { flexShrink: 1 };
createCacheKey = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.round, flexShrink: 0, marginRight: require("Themes").space.PX_12 };
obj[2] = createCacheKey;
obj[3] = { marginBottom: require("Themes").space.PX_4 };
const obj2 = { marginBottom: require("Themes").space.PX_4 };
obj[4] = { tintColor: require("Themes").colors.TEXT_BRAND };
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = { container: null, groupHeader: null };
let obj3 = { tintColor: require("Themes").colors.TEXT_BRAND };
obj4[0] = { display: "flex", alignItems: "center", paddingHorizontal: require("Themes").space.PX_16, width: "100%" };
const obj5 = { display: "flex", alignItems: "center", paddingHorizontal: require("Themes").space.PX_16, width: "100%" };
obj4[1] = { marginBottom: require("Themes").space.PX_24 };
let closure_10 = createCacheKey.createStyles(obj4);
const obj6 = { marginBottom: require("Themes").space.PX_24 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  const memo = React.useMemo(() => {
    let obj = { DATA_TOOLTIP: null };
    obj = { headerShown: true, headerLeft: null, headerTitle: null, render: null };
    obj[1] = callback(6314).getHeaderCloseButton(callback2(5260).pop);
    obj[2] = function headerTitle() {
      return null;
    };
    obj[3] = function render() {
      return callback(closure_11, {});
    };
    obj[0] = obj;
    return obj;
  }, []);
  let obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return callback(Modal.Modal, obj);
};