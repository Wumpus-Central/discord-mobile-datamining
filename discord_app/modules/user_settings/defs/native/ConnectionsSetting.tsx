// === Module 16859: ConnectionsSetting ===

// Module 16859 (ConnectionsSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import LinkIcon from "LinkIcon" /* 5727 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lrVuZO);
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3fe7U5"]), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["f6kk+r"]);
    return items;
  },
  parent: null,
  IconComponent: LinkIcon.LinkIcon,
  screen: {
    route: Constants.UserSettingsSections.CONNECTIONS,
    getComponent() {
      return require("ConnectedAppsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;