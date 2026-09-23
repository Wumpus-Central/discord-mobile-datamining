// === Module 16981: StandaloneMembersView ===

// Module 16981 (StandaloneMembersView)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9934 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 12171 */;
import KickConfirmDefault from "KickConfirm" /* 12185 */;
import BanConfirmDefault from "BanConfirm" /* 12187 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16982 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  let obj2;
  importDefault = guildId(obj2[2]).useNavigation();
  const items = [guildId];
  const effect = noop.useEffect(() => {
    GuildSettingsActionCreatorsDefault.init(guildId);
  }, items);
  obj2 = { contentContainerStyle: null };
  let obj = guildId(obj2[2]);
  obj2.contentContainerStyle = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  const obj4 = {};
  const obj5 = { headerLeft: null, headerTitle: null, render: null };
  const obj3 = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  obj5.headerLeft = guildId(obj2[5]).getHeaderCloseButton(() => navigation.goBack());
  obj5.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(obj2[6]).intl;
    obj.title = intl.string(guildId(obj2[6]).t["9Oq93m"]);
    return jsx(guildId(obj2[5]).NavigatorHeader, { title: null });
  };
  obj5.render = function render() {
    return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
  };
  obj4[constants.MAIN] = obj5;
  obj4[constants.MEMBER_EDIT] = {
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return jsx(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj4[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return jsx(KickConfirmDefault, { guildId });
    }
  };
  obj4[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return jsx(BanConfirmDefault, { guildId });
    }
  };
  const obj7 = { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: null };
  let intl = guildId(obj2[6]).intl;
  obj7.headerBackTitle = intl.string(guildId(obj2[6]).t["13/7kX"]);
  return jsx(guildId(obj2[11]).Navigator, { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: null });
};