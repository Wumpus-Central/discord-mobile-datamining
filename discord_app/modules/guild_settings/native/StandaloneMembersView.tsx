// === Module 16568: StandaloneMembersView ===

// Module 16568 (StandaloneMembersView)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11836 */;
import KickConfirmDefault from "KickConfirm" /* 11849 */;
import BanConfirmDefault from "BanConfirm" /* 11851 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16569 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default function StandaloneMembersView(guildId) {
  guildId = guildId.guildId;
  let contentContainerStyle;
  contentContainerStyle = guildId(contentContainerStyle[2]);
  importDefault = contentContainerStyle.useNavigation();
  const items = [guildId];
  const effect = noop.useEffect(() => {
    GuildSettingsActionCreatorsDefault.init(guildId);
  }, items);
  contentContainerStyle = { contentContainerStyle: null };
  contentContainerStyle = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
  contentContainerStyle.contentContainerStyle = contentContainerStyle;
  const obj1 = {};
  const obj2 = {
    headerLeft: guildId(contentContainerStyle[5]).getHeaderCloseButton(() => navigation.goBack()),
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(obj[6]).intl;
      obj.title = intl.string(guildId(obj[6]).t["9Oq93m"]);
      return jsx(guildId(obj[5]).NavigatorHeader, { title: null });
    },
    render() {
      return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
    }
  };
  obj1[constants.MAIN] = obj2;
  obj1[constants.MEMBER_EDIT] = {
    render(arg0) {
      const obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
    }
  };
  obj1[constants.MEMBER_KICK] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(KickConfirmDefault, { guildId });
    }
  };
  obj1[constants.MEMBER_BAN] = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = { guildId };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj);
      return jsx(BanConfirmDefault, { guildId });
    }
  };
  const obj3 = { screens: obj1, initialRouteName: constants.MAIN, headerBackTitle: null };
  let intl = guildId(contentContainerStyle[6]).intl;
  obj3.headerBackTitle = intl.string(guildId(contentContainerStyle[6]).t["13/7kX"]);
  return jsx(guildId(contentContainerStyle[11]).Navigator, { screens: obj1, initialRouteName: constants.MAIN, headerBackTitle: null });
};