// === Module 17213: PhoenixSetting ===

// Module 17213 (PhoenixSetting)
import jsxProd from "jsxProd" /* 21 */;
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import _modDef4665 from "module_4665" /* 4665 */;
import Badge from "Badge" /* 6033 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9496 */;
import FireIcon from "FireIcon" /* 14128 */;
import PhoenixEntrypoint from "PhoenixEntrypoint" /* 17214 */;
import SettingBuilders from "SettingBuilders" /* 11815 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = jsxProd.jsx;
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef4665["3uRAgZ"]);
  },
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.EYxi0o)];
    return items;
  },
  parent: null,
  IconComponent: FireIcon.FireIcon,
  useTrailing: function usePhoenixSettingTrailing() {
    return jsx(Badge.Badge, { type: "early_access", variant: "expressive", icon: NitroWheelIcon.NitroWheelIcon });
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