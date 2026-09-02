// discord_app/modules/guild_settings/native/StandaloneMembersView.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let closure_5 = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const result = require("set").fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  dependencyMap = undefined;
  let obj = guildId(1498);
  importDefault = obj.useNavigation();
  const items = [guildId];
  const effect = React.useEffect(() => {
    navigation(9750).init(guildId);
  }, items);
  obj = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  dependencyMap = { contentContainerStyle: obj };
  obj = {};
  obj1 = {
    headerLeft: guildId(5503).getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(1233).intl;
      obj[0] = intl.string(guildId(1233).t["9Oq93m"]);
      return callback(guildId(5503).NavigatorHeader, obj);
    },
    render() {
      return closure_1_4(navigation(16388), { guildId });
    },
  };
  obj[constants.MAIN] = obj1;
  obj[constants.MEMBER_EDIT] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return closure_1_4(guildId(11632).GuildSettingsModalMemberEditScene, { guildId });
    },
  };
  obj[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return closure_1_4(navigation(11645), { guildId });
    },
  };
  obj[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return closure_1_4(navigation(11647), { guildId });
    },
  };
  const obj2 = { screens: obj, initialRouteName: constants.MAIN, headerBackTitle: null };
  let intl = guildId(1233).intl;
  obj2[2] = intl.string(guildId(1233).t["13/7kX"]);
  return jsx(guildId(6016).Navigator, { screens: obj, initialRouteName: constants.MAIN, headerBackTitle: null });
}
