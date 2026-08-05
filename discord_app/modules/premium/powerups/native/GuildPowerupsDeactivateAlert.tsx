// discord_app/modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getAlertModalItemKey } from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { CircleErrorIcon } from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ModalType } from "../analytics/GuildPowerupAnalytics.tsx";
import { messagesProxy } from "../GuildPowerups.messages.js";
import { useDeactivateWarningText } from "../hooks/useDeactivateWarningText.tsx";
import { useGuildPowerupOnDeactivate } from "../hooks/useGuildPowerupOnDeactivate.tsx";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { headerContainer: null, extraContentContainer: null, warningText: null };
obj = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
obj[0] = obj;
obj[1] = { paddingHorizontal: require("Themes").space.PX_12 };
obj[2] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(obj);
let obj1 = { paddingHorizontal: require("Themes").space.PX_12 };
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
  let c1;
  let error;
  let guildId;
  let powerup;
  ({ guildId, powerup } = arg0);
  let _require;
  let importDefault;
  const tmp = callback2();
  _require = tmp;
  ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivate(guildId, powerup));
  const tmp2 = importDefault;
  const tmp4 = useGuildPowerupOnDeactivate(guildId, powerup);
  let obj = _ModalType;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, _ModalType.ModalType.DEACTIVATE);
  obj = { header: null, title: null, content: null, actions: null, extraContent: null };
  obj = { style: tmp.headerContainer, children: null };
  const obj1 = { color: null, size: "custom", style: null };
  obj1[0] = Themes.colors.INTERACTIVE_ICON_DEFAULT;
  obj1[2] = { width: 40, height: 40 };
  obj[1] = callback(_CircleErrorIcon.CircleErrorIcon, obj1);
  obj[0] = callback(View, obj);
  const intl = _getSystemLocale.intl;
  obj[1] = intl.formatToPlainString(messagesProxy.iEBw1M, { perk: powerup.title });
  const intl2 = _getSystemLocale.intl;
  obj[2] = intl2.formatToPlainString(messagesProxy["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj4 = { style: null, variant: "text-xs/semibold", color: "text-feedback-critical", children: null };
    obj4[0] = tmp.warningText;
    obj4[3] = error;
    tmp7Result = tmp7(tmp5(4281).Text, obj4);
  }
  const obj5 = { children: null };
  const items = [tmp7Result, , ];
  const obj6 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return _undefined2();
    },
    text: null
  };
  const intl3 = tmp5(1236).intl;
  obj6[2] = intl3.string(tmp2(2317).PYPdl4);
  items[1] = callback(_getAlertModalItemKey.AlertActionButton, obj6, "deactivate");
  const obj7 = {
    onPress() {

    },
    variant: "secondary",
    text: null
  };
  const intl4 = tmp5(1236).intl;
  obj7[2] = intl4.string(_getSystemLocale.t["ETE/oC"]);
  items[2] = callback(_getAlertModalItemKey.AlertActionButton, obj7, "cancel");
  obj5[0] = items;
  obj[3] = closure_5(_getAlertModalItemKey.AlertActions, obj5);
  const arr = useDeactivateWarningText(guildId, powerup);
  const obj2 = { perk: powerup.title };
  const obj3 = { perk: powerup.title };
  const tmp8 = View;
  const tmp9 = closure_5;
  obj[4] = callback(tmp8, {
    style: tmp.extraContentContainer,
    children: useDeactivateWarningText(guildId, powerup).map((critical) => {
      const obj = { style: _undefined.warningText, variant: null, color: null, children: null };
      let str = "text-sm/medium";
      if (critical.critical) {
        str = "text-sm/semibold";
      }
      obj[1] = str;
      let str2;
      if (critical.critical) {
        str2 = "text-feedback-critical";
      }
      obj[2] = str2;
      obj[3] = critical.text;
      return outer1_4(_undefined(outer1_2[12]).Text, obj, arg1);
    })
  });
  return callback(_getAlertModalItemKey.AlertModal, obj);
};