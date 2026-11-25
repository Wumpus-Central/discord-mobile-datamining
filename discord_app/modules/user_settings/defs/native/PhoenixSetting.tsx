// === Module 17326: PhoenixSetting ===

// Module 17326 (PhoenixSetting)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import _modDef4728 from "module_4728" /* 4728 */;
import Badge from "Badge" /* 6128 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9595 */;
import FireIcon from "FireIcon" /* 14251 */;
import PhoenixEntrypoint from "PhoenixEntrypoint" /* 17328 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

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
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixSetting.tsx");

export default route;