// discord_app/modules/guild_settings/native/StandaloneMembersView.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";

const require = arg1;
let closure_5 = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const result = require("useNavigation").fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  let importDefault;
  let dependencyMap;
  let obj = guildId(1499);
  importDefault = obj.useNavigation();
  const items = [guildId];
  const effect = React.useEffect(() => {
    navigation(9070).init(guildId);
  }, items);
  obj = { paddingBottom: 16 + useSafeAreaInsets().bottom };
  dependencyMap = { contentContainerStyle: obj };
  obj = {};
  const obj1 = { headerLeft: null, headerTitle: null, render: null };
  obj1[0] = guildId(5310).getHeaderCloseButton(() => navigation.goBack());
  obj1[1] = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(1236).intl;
    obj[0] = intl.string(guildId(1236).t["9Oq93m"]);
    return callback(guildId(5310).NavigatorHeader, obj);
  };
  obj1[2] = function render() {
    return outer1_4(navigation(15766), { guildId });
  };
  obj[constants.MAIN] = obj1;
  obj[constants.MEMBER_EDIT] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return outer1_4(guildId(11286).GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return outer1_4(navigation(11299), { guildId });
    }
  };
  obj[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(dependencyMap);
      return outer1_4(navigation(11301), { guildId });
    }
  };
  const obj2 = { screens: obj, initialRouteName: constants.MAIN, headerBackTitle: null };
  let intl = guildId(1236).intl;
  obj2[2] = intl.string(guildId(1236).t["13/7kX"]);
  return jsx(guildId(5823).Navigator, { screens: obj, initialRouteName: constants.MAIN, headerBackTitle: null });
};