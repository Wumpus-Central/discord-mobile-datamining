// === Module 11645: GuildPowerupsDeactivateAlert ===

// Module 11645 (GuildPowerupsDeactivateAlert)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  ({ onDeactivate: c1, error } = importDefault(11646)(guildId, powerup));
  const tmp2 = importDefault;
  const tmp4 = importDefault(11646)(guildId, powerup);
  let obj = _require(11648);
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, _require(11648).ModalType.DEACTIVATE);
  obj = { header: null, title: null, content: null, actions: null, extraContent: null };
  obj = { style: tmp.headerContainer, children: null };
  const obj1 = { color: null, size: "custom", style: null };
  obj1[0] = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  obj1[2] = { width: 40, height: 40 };
  obj[1] = callback(_require(6733).CircleErrorIcon, obj1);
  obj[0] = callback(View, obj);
  const intl = _require(1236).intl;
  obj[1] = intl.formatToPlainString(importDefault(2257).iEBw1M, { perk: powerup.title });
  const intl2 = _require(1236).intl;
  obj[2] = intl2.formatToPlainString(importDefault(2257)["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj4 = { style: null, variant: "text-xs/semibold", color: "text-feedback-critical", children: null };
    obj4[0] = tmp.warningText;
    obj4[3] = error;
    tmp7Result = tmp7(tmp5(4189).Text, obj4);
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
  obj6[2] = intl3.string(tmp2(2257).PYPdl4);
  items[1] = callback(_require(4537).AlertActionButton, obj6, "deactivate");
  const obj7 = {
    onPress() {

    },
    variant: "secondary",
    text: null
  };
  const intl4 = tmp5(1236).intl;
  obj7[2] = intl4.string(_require(1236).t["ETE/oC"]);
  items[2] = callback(_require(4537).AlertActionButton, obj7, "cancel");
  obj5[0] = items;
  obj[3] = closure_5(_require(4537).AlertActions, obj5);
  const arr = importDefault(11647)(guildId, powerup);
  const obj2 = { perk: powerup.title };
  const obj3 = { perk: powerup.title };
  const tmp8 = View;
  const tmp9 = closure_5;
  obj[4] = callback(tmp8, {
    style: tmp.extraContentContainer,
    children: importDefault(11647)(guildId, powerup).map((critical) => {
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
  return callback(_require(4537).AlertModal, obj);
};