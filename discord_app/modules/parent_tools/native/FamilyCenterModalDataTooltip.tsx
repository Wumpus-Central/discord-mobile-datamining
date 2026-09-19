// === Module 15163: FamilyCenterModalDataTooltip ===

// Module 15163 (FamilyCenterModalDataTooltip)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import Text_Text from "Text/Text" /* 4752 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8923 */;
import Modal from "Modal" /* 11463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function Row(arg0) {
  ({ header, description, IconComponent } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.row, children: null };
  const obj2 = { style: tmp.iconContainer, children: hasOwnProperty(IconComponent, { style: tmp.icon }) };
  const items = [hasOwnProperty(View, obj2), ];
  const obj4 = { style: tmp.content, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { style: tmp.header, variant: "text-sm/bold", color: "mobile-text-heading-primary", children: header }), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: description })];
  obj4.children = items1;
  items[1] = timestampProducer(View, obj4);
  obj.children = items;
  return timestampProducer(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = closure_10();
  const intl = require("util").intl;
  obj = require("useAgeSpecificText");
  const intl2 = require("util").intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2482.n6LOrh), intl2.string(_modDef2482.JNLpDZ));
  _require = useIsInAdultAgeGroupDefault();
  const stringResult = intl.string(_modDef2482.n6LOrh);
  const sortedActivityTypeConfigs = require("FamilyCenterUtils").getSortedActivityTypeConfigs();
  const obj3 = { children: null };
  const obj4 = { children: null };
  const obj5 = { style: tmp.container, children: null };
  const items = [
    closure_5(require("Text/Text").Text, { style: tmp.groupHeader, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: ageSpecificText }),
    sortedActivityTypeConfigs.map((item) => {
      [tmp, obj] = item;
      const obj2 = { IconComponent: obj[tmp], header: obj.tooltipHeader(), description: obj.tooltipDescription(closure_0) };
      return hasOwnProperty(Row, obj2, tmp);
    })
  ];
  obj5.children = items;
  obj4.children = closure_6(View, obj5);
  const items1 = [closure_5(require("ModalContent").ModalContent, obj4), ];
  const obj7 = { children: null };
  const obj8 = { variant: "primary", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj8.text = intl3.string(require("util").t["NX+WJN"]);
  obj8.onPress = ModalActionCreatorsDefault.pop;
  obj7.children = closure_5(require("components/Button/Button").Button, obj8);
  items1[1] = closure_5(require("ModalFooter").ModalFooter, obj7);
  obj3.children = items1;
  return closure_6(require("ModalScreen").ModalScreen, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { [USER_INTERACTION]: fn(5282).ChatIcon, [USER_CALLED]: fn(12173).PhoneIcon, [USER_ADD]: fn(4455).FriendsIcon, [GUILD_ADD]: fn(13845).ServerGridIcon, [GUILD_INTERACTION]: fn(5284).ThreadIcon, [PURCHASES]: fn(12175).CreditCardIcon, [TOTAL_VOICE_MINUTES]: fn(4718).ClockIcon, [GIFTS]: fn(11297).GiftIcon };
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } = fn(7778).TeenActionDisplayType);
let createStyles = fn(4756);
let obj3 = { row: { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm }, content: { flexShrink: 1 }, iconContainer: null, header: null, icon: null };
let size = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, flexShrink: 0, marginRight: nativeDefault.space.PX_12 };
obj3.iconContainer = size;
let obj4 = { display: "flex", flexDirection: "row", width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj3.header = { marginBottom: nativeDefault.space.PX_4 };
let obj5 = { marginBottom: nativeDefault.space.PX_4 };
obj3.icon = { tintColor: nativeDefault.colors.TEXT_BRAND };
let closure_8 = createStyles.createStyles(obj3);
createStyles = fn(4756);
let obj7 = { container: null, groupHeader: null };
const obj6 = { tintColor: nativeDefault.colors.TEXT_BRAND };
obj7.container = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
const obj9 = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj7.groupHeader = { marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj7);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  const memo = noop.useMemo(() => {
    obj = { DATA_TOOLTIP: null };
    const obj2 = {
      headerShown: true,
      headerLeft: require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_11, {});
      }
    };
    obj.DATA_TOOLTIP = obj2;
    return obj;
  }, []);
  obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: null };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return hasOwnProperty(Modal.Modal, obj);
};