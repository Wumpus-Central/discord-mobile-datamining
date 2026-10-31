// discord_app/modules/user_settings/defs/native/ConnectionsSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import LinkIcon from "../../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.lrVuZO);
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3fe7U5"])];
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
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
