// discord_app/modules/parent_tools/native/FamilyCenterModalDataTooltip.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import _modDef4763 from "../../../actions/ModalActionCreators.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import Modal from "../../../design/components/Modal/native/Modal.native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
import { useAgeSpecificText } from "../hooks/useAgeSpecificText.tsx";

require = arg1;
function Row(arg0) {
  ({ header, description, IconComponent } = arg0);
  const tmp = callback3();
  obj = { style: tmp.row, children: null };
  obj = { style: tmp.iconContainer, children: callback(IconComponent, obj) };
  obj = { style: tmp.icon };
  const items = [callback(View, obj)];
  obj1 = { style: tmp.content, children: null };
  const items1 = [
    callback(Text.Text, {
      style: tmp.header,
      variant: "text-sm/bold",
      color: "mobile-text-heading-primary",
      children: header,
    }),
    callback(Text.Text, { variant: "text-xs/medium", color: "text-default", children: description }),
  ];
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
}
function FamilyCenterModalDataTooltipScreen() {
  const tmp = callback4();
  obj = useAgeSpecificText;
  const intl = require("../../../intl/index.native.tsx").intl;
  const intl2 = require("../../../intl/index.native.tsx").intl;
  const ageSpecificText = obj.useAgeSpecificText(
    intl.string(messagesProxyDefault.n6LOrh),
    intl2.string(messagesProxyDefault.JNLpDZ),
  );
  _require = useIsInAdultAgeGroupDefault();
  obj1 = getEmptyActivityFormatter;
  const sortedActivityTypeConfigs = obj1.getSortedActivityTypeConfigs();
  obj = { children: null };
  obj = { children: null };
  obj1 = { style: tmp.container, children: null };
  const items = [
    callback(require("../../../design/components/Text/native/Text.tsx").Text, {
      style: tmp.groupHeader,
      variant: "text-lg/bold",
      color: "mobile-text-heading-primary",
      children: ageSpecificText,
    }),
    sortedActivityTypeConfigs.map((arg0) => {
      [tmp, obj] = arg0;
      obj = {
        IconComponent: closure_1_7[tmp],
        header: obj.tooltipHeader(),
        description: obj.tooltipDescription(closure_0),
      };
      return closure_1_5(closure_1_9, obj, tmp);
    }),
  ];
  obj1[1] = items;
  obj[0] = callback2(View, obj1);
  const items1 = [
    callback(require("../../../design/components/Modal/native/ModalContent.native.tsx").ModalContent, obj),
  ];
  const obj3 = { children: null };
  const obj4 = { variant: "primary", text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj4[1] = intl3.string(require("../../../intl/index.native.tsx").t["NX+WJN"]);
  obj4[2] = _modDef4763.pop;
  obj3[0] = callback(require("../../../design/components/Button/native/Button.native.tsx").Button, obj4);
  items1[1] = callback(require("../../../design/components/Modal/native/ModalFooter.native.tsx").ModalFooter, obj3);
  obj[0] = items1;
  return callback2(require("../../../design/components/Modal/native/ModalScreen.native.tsx").ModalScreen, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {
  [USER_INTERACTION]: require("ChatIcon").ChatIcon,
  [USER_CALLED]: require("PhoneIcon").PhoneIcon,
  [USER_ADD]: require("FriendsIcon").FriendsIcon,
  [GUILD_ADD]: require("ServerGridIcon").ServerGridIcon,
  [GUILD_INTERACTION]: require("ThreadIcon").ThreadIcon,
  [PURCHASES]: require("CreditCardIcon").CreditCardIcon,
  [TOTAL_VOICE_MINUTES]: require("ClockIcon").ClockIcon,
  [GIFTS]: require("GiftIcon").GiftIcon,
};
({ USER_INTERACTION, USER_CALLED, USER_ADD, GUILD_ADD, GUILD_INTERACTION, PURCHASES, TOTAL_VOICE_MINUTES, GIFTS } =
  require("items").TeenActionDisplayType);
obj = { row: null, content: null, iconContainer: null, header: null, icon: null };
obj = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  marginBottom: ThemesDefault.space.PX_8,
  paddingVertical: ThemesDefault.space.PX_12,
  paddingHorizontal: ThemesDefault.space.PX_12,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.sm,
};
obj[0] = obj;
obj[1] = { flexShrink: 1 };
createCacheKey = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: ThemesDefault.radii.round,
  flexShrink: 0,
  marginRight: ThemesDefault.space.PX_12,
};
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
      headerLeft: callback(5624).getHeaderCloseButton(callback2(4763).pop),
      headerTitle() {
        return null;
      },
      render() {
        return callback(closure_11, {});
      },
    };
    obj[0] = obj;
    return obj;
  }, []);
  obj = { initialRouteName: "DATA_TOOLTIP", screens: memo, headerBackTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return callback(Modal.Modal, obj);
}
