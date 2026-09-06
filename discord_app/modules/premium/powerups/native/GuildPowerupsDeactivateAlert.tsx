// === Module 12540: GuildPowerupsDeactivateAlert ===

// Module 12540 (GuildPowerupsDeactivateAlert)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef2428 from "module_2428" /* 2428 */;
import Text_Text from "Text/Text" /* 4556 */;
import useGuildPowerupOnDeactivateDefault from "useGuildPowerupOnDeactivate" /* 12541 */;
import useDeactivateWarningTextDefault from "useDeactivateWarningText" /* 12542 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { headerContainer: null, extraContentContainer: null, warningText: null };
let size = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
obj.headerContainer = size;
obj = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.extraContentContainer = obj;
obj.warningText = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
  ({ guildId, powerup } = arg0);
  importDefault = undefined;
  const tmp = closure_6();
  _require = tmp;
  ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivateDefault(guildId, powerup));
  const tmp4 = useGuildPowerupOnDeactivateDefault(guildId, powerup);
  let obj = require("GuildPowerupAnalytics");
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require("GuildPowerupAnalytics").ModalType.DEACTIVATE);
  obj = { header: null, title: null, content: null, actions: null, extraContent: null };
  obj = { style: tmp.headerContainer, children: null };
  const arr = useDeactivateWarningTextDefault(guildId, powerup);
  const tmp8 = View;
  obj.children = closure_4(require("CircleErrorIcon").CircleErrorIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } });
  obj.header = closure_4(View, obj);
  const intl = require("util").intl;
  obj.title = intl.formatToPlainString(_modDef2428.iEBw1M, { perk: powerup.title });
  const intl2 = require("util").intl;
  obj.content = intl2.formatToPlainString(_modDef2428["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj4 = { style: tmp.warningText, variant: "text-xs/semibold", color: "text-feedback-critical", children: error };
    tmp7Result = tmp7(tmp5(4556).Text, obj4);
  }
  const obj5 = { children: null };
  const items = [tmp7Result, , ];
  const obj6 = {
    variant: "destructive",
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      return _undefined();
    },
    text: null
  };
  const intl3 = tmp5(1114).intl;
  obj6.text = intl3.string(_modDef2428.PYPdl4);
  items[1] = closure_4(require("AlertModal").AlertActionButton, obj6, "deactivate");
  const obj7 = {
    onPress() {

    },
    variant: "secondary",
    text: null
  };
  const intl4 = tmp5(1114).intl;
  obj7.text = intl4.string(require("util").t["ETE/oC"]);
  items[2] = closure_4(require("AlertModal").AlertActionButton, obj7, "cancel");
  obj5.children = items;
  obj.actions = closure_5(require("AlertModal").AlertActions, obj5);
  const obj1 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
  const obj2 = { perk: powerup.title };
  const obj3 = { perk: powerup.title };
  obj.extraContent = closure_4(tmp8, {
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
  return closure_4(require("AlertModal").AlertModal, obj);
};