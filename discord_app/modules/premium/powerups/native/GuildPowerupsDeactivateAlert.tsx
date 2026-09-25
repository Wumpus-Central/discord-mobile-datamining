// === Module 12018: GuildPowerupsDeactivateAlert ===

// Module 12018 (GuildPowerupsDeactivateAlert)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef2518 from "module_2518" /* 2518 */;
import Text_Text from "Text/Text" /* 4825 */;
import useGuildPowerupOnDeactivateDefault from "useGuildPowerupOnDeactivate" /* 12019 */;
import useDeactivateWarningTextDefault from "useDeactivateWarningText" /* 12020 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { headerContainer: null, extraContentContainer: null, warningText: null };
let size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
obj.headerContainer = size;
obj.extraContentContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.warningText = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
  ({ guildId, powerup } = arg0);
  importDefault = undefined;
  const tmp = closure_6();
  _require = tmp;
  ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivateDefault(guildId, powerup));
  const tmp4 = useGuildPowerupOnDeactivateDefault(guildId, powerup);
  const arr = useDeactivateWarningTextDefault(guildId, powerup);
  const logPowerupModalOpened = require("GuildPowerupAnalytics").useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  const obj2 = { header: null, title: null, content: null, actions: null, extraContent: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  let obj = require("GuildPowerupAnalytics");
  obj3.children = closure_4(require("CircleErrorIcon").CircleErrorIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } });
  obj2.header = closure_4(View, obj3);
  const intl = require("util").intl;
  obj2.title = intl.formatToPlainString(_modDef2518.iEBw1M, { perk: powerup.title });
  const intl2 = require("util").intl;
  obj2.content = intl2.formatToPlainString(_modDef2518["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj7 = { style: tmp.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp7Result = closure_4(tmp5(4825).Text, obj7);
  }
  const obj8 = { children: null };
  const items = [tmp7Result, , ];
  const obj9 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return _undefined();
    },
    text: null
  };
  const intl3 = tmp5(1115).intl;
  obj9.text = intl3.string(_modDef2518.PYPdl4);
  items[1] = closure_4(require("AlertModal").AlertActionButton, obj9, "deactivate");
  const obj10 = {
    onPress() {

    },
    variant: "secondary",
    text: null
  };
  const intl4 = tmp5(1115).intl;
  obj10.text = intl4.string(require("util").t["ETE/oC"]);
  items[2] = closure_4(require("AlertModal").AlertActionButton, obj10, "cancel");
  obj8.children = items;
  obj2.actions = closure_5(require("AlertModal").AlertActions, obj8);
  const obj4 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
  const obj5 = { perk: powerup.title };
  const obj6 = { perk: powerup.title };
  obj2.extraContent = closure_4(View, {
    style: tmp.extraContentContainer,
    children: arr.map((critical, index) => {
      const obj = { style: warningText.warningText, variant: null, color: null, children: null };
      let str = "text-sm/medium";
      if (critical.critical) {
        str = "text-sm/semibold";
      }
      obj.variant = str;
      let str2;
      if (critical.critical) {
        str2 = "text-feedback-critical";
      }
      obj.color = str2;
      obj.children = critical.text;
      return React4(Text_Text.Text, obj, index);
    })
  });
  return closure_4(require("AlertModal").AlertModal, obj2);
};