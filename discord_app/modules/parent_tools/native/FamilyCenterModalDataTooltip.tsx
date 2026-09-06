// discord_app/modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import Modal from "../../../design/components/Modal/native/Modal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function Row(arg0) {
  ({ header, description, IconComponent } = arg0);
  const tmp = closure_8();
  obj = { style: tmp.row, children: null };
  obj = { style: tmp.iconContainer, children: null };
  obj = { style: tmp.icon };
  obj.children = hasOwnProperty(IconComponent, obj);
  const items = [hasOwnProperty(View, obj)];
  const obj1 = { style: tmp.content, children: null };
  const items1 = [
    hasOwnProperty(Text_Text.Text, {
      style: tmp.header,
      variant: "text-sm/bold",
      color: "mobile-text-heading-primary",
      children: header,
    }),
    hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: description }),
  ];
  obj1.children = items1;
  items[1] = timestampProducer(View, obj1);
  obj.children = items;
  return timestampProducer(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = closure_10();
  obj = require("useAgeSpecificText");
  const intl = require("util").intl;
  const intl2 = require("util").intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2396.n6LOrh), intl2.string(_modDef2396.JNLpDZ));
  _require = useIsInAdultAgeGroupDefault();
  let obj1 = require("FamilyCenterUtils");
  const sortedActivityTypeConfigs = obj1.getSortedActivityTypeConfigs();
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.container, children: null };
  const items = [
    closure_5(require("Text/Text").Text, {
      style: tmp.groupHeader,
      variant: "text-lg/bold",
      color: "mobile-text-heading-primary",
      children: ageSpecificText,
    }),
    sortedActivityTypeConfigs.map((item) => {
      [tmp, obj] = item;
      obj = { IconComponent: obj[tmp], header: obj.tooltipHeader(), description: obj.tooltipDescription(closure_0) };
      return hasOwnProperty(Row, obj, tmp);
    }),
  ];
  obj1.children = items;
  obj.children = closure_6(View, obj1);
  const items1 = [closure_5(require("ModalContent").ModalContent, obj)];
  const obj3 = { children: null };
  const obj4 = { variant: "primary", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj4.text = intl3.string(require("util").t["NX+WJN"]);
  obj4.onPress = ModalActionCreatorsDefault.pop;
  obj3.children = closure_5(require("components/Button/Button").Button, obj4);
  items1[1] = closure_5(require("ModalFooter").ModalFooter, obj3);
  obj.children = items1;
  return closure_6(require("ModalScreen").ModalScreen, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let row = {
  [USER_INTERACTION]: fn(5071).ChatIcon,
  [USER_CALLED]: fn(11920).PhoneIcon,
  [USER_ADD]: fn(4260).FriendsIcon,
  [GUILD_ADD]: fn(13375).ServerGridIcon,
  [GUILD_INTERACTION]: fn(5073).ThreadIcon,
  [PURCHASES]: fn(11922).CreditCardIcon,
  [TOTAL_VOICE_MINUTES]: fn(4523).ClockIcon,
  [GIFTS]: fn(11030).GiftIcon,
};
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } =
  fn(7538).TeenActionDisplayType);
fn(4560);
row = { row: null, content: null, iconContainer: null, header: null, icon: null };
row = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
row.row = row;
row.content = { flexShrink: 1 };
let size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.round,
  flexShrink: 0,
  marginRight: nativeDefault.space.PX_12,
};
row.iconContainer = size;
let createStyles = { marginBottom: nativeDefault.space.PX_4 };
row.header = createStyles;
row.icon = { tintColor: nativeDefault.colors.TEXT_BRAND };
let closure_8 = createStyles.createStyles(row);
createStyles = fn(4560);
let obj3 = { container: null, groupHeader: null };
const obj2 = { tintColor: nativeDefault.colors.TEXT_BRAND };
obj3.container = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let obj4 = { display: "flex", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj3.groupHeader = { marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj3);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx");

export default function FamilyCenterModalDataTooltip() {
  const memo = noop.useMemo(() => {
    let DATA_TOOLTIP = { DATA_TOOLTIP: null };
    DATA_TOOLTIP = {
      headerShown: true,
      headerLeft: require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_5(closure_1_11, {});
      },
    };
    DATA_TOOLTIP.DATA_TOOLTIP = DATA_TOOLTIP;
    return DATA_TOOLTIP;
  }, []);
  obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: null };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return hasOwnProperty(Modal.Modal, obj);
}
