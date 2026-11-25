// discord_app/modules/user_settings/defs/native/PhoenixSetting.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4728 from "../../phoenix_launch/PhoenixSettings.messages.js";
import Badge from "../../../../design/components/Badge/native/Badge.native.tsx";
import NitroWheelIcon from "../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import FireIcon from "../../../../design/components/Icon/native/redesign/generated/FireIcon.tsx";
import PhoenixEntrypoint from "../../phoenix_launch/native/PhoenixEntrypoint.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const jsx = jsxProd.jsx;
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef4728["3uRAgZ"]);
  },
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.EYxi0o)];
    return items;
  },
  parent: null,
  IconComponent: FireIcon.FireIcon,
  useTrailing: function usePhoenixSettingTrailing() {
    let tmp2 = null;
    if (obj.useConfig({ location: "PhoenixSetting" }, { autoTrackExposure: false }).requiresNitro) {
      const obj2 = { type: "early_access", variant: "expressive", icon: NitroWheelIcon.NitroWheelIcon };
      tmp2 = jsx(Badge.Badge, { type: "early_access", variant: "expressive", icon: NitroWheelIcon.NitroWheelIcon });
    }
    return tmp2;
  },
  usePredicate: function usePhoenixSettingPredicate() {
    return PhoenixEntrypoint.useIsPhoenixEntrypointVisible("PhoenixSetting", true);
  },
  screen: {
    route: Constants.UserSettingsSections.PHOENIX,
    getComponent() {
      return require("PhoenixSettingsScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixSetting.tsx");

export default route;
