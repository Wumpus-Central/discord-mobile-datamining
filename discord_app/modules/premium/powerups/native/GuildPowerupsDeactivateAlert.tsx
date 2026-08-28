// discord_app/modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import useGuildPowerupOnDeactivateDefault from "../hooks/useGuildPowerupOnDeactivate.tsx";
import useDeactivateWarningTextDefault from "../hooks/useDeactivateWarningText.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { ModalType } from "../analytics/GuildPowerupAnalytics.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { headerContainer: null, extraContentContainer: null, warningText: null };
obj = { width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, alignSelf: "center" };
obj[0] = obj;
obj[1] = { paddingHorizontal: ThemesDefault.space.PX_12 };
obj[2] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(obj);
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_12 };
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx");

export default function GuildPowerupsDeactivateAlert(arg0) {
  ({ guildId, powerup } = arg0);
  let _require;
  importDefault = undefined;
  const tmp = callback2();
  _require = tmp;
  ({ onDeactivate: c1, error } = useGuildPowerupOnDeactivateDefault(guildId, powerup));
  const tmp2 = importDefault;
  const tmp4 = useGuildPowerupOnDeactivateDefault(guildId, powerup);
  let obj = ModalType;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require("../analytics/GuildPowerupAnalytics.tsx").ModalType.DEACTIVATE);
  obj = { header: null, title: null, content: null, actions: null, extraContent: null };
  obj = { style: tmp.headerContainer, children: null };
  const arr = useDeactivateWarningTextDefault(guildId, powerup);
  const tmp8 = View;
  obj[1] = callback(require("../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx").CircleErrorIcon, { color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } });
  obj[0] = callback(View, obj);
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl.formatToPlainString(messagesProxyDefault.iEBw1M, { perk: powerup.title });
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl2.formatToPlainString(messagesProxyDefault["7o0K+2"], { perk: powerup.title });
  let tmp7Result = null != error;
  if (tmp7Result) {
    const obj4 = { style: null, variant: "text-xs/semibold", color: "text-feedback-critical", children: null };
    obj4[0] = tmp.warningText;
    obj4[3] = error;
    tmp7Result = tmp7(tmp5(4442).Text, obj4);
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
  const intl3 = tmp5(1236).intl;
  obj6[2] = intl3.string(messagesProxyDefault.PYPdl4);
  items[1] = callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertActionButton, obj6, "deactivate");
  const obj7 = {
    onPress() {

    },
    variant: "secondary",
    text: null
  };
  const intl4 = tmp5(1236).intl;
  obj7[2] = intl4.string(require("../../../../intl/index.native.tsx").t["ETE/oC"]);
  items[2] = callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertActionButton, obj7, "cancel");
  obj5[0] = items;
  obj[3] = closure_5(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertActions, obj5);
  obj1 = { color: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "custom", style: { width: 40, height: 40 } };
  const obj2 = { perk: powerup.title };
  const obj3 = { perk: powerup.title };
  const tmp9 = closure_5;
  obj[4] = callback(tmp8, {
    style: tmp.extraContentContainer,
    children: arr.map((critical) => {
      const obj = { style: lib.warningText, variant: null, color: null, children: null };
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
      return closure_1_4(lib(closure_1_2[12]).Text, obj, arg1);
    })
  });
  return callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertModal, obj);
};