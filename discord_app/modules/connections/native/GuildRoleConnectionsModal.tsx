// === Module 11570: GuildRoleConnectionsModal ===

// Module 11570 (GuildRoleConnectionsModal)
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const items = [guildId, onClose];
  const memo = noop.useMemo(() => {
    closure_1 = onClose;
    let obj = {};
    obj = { title: null, headerLeft: null, headerRight: null, render: null };
    let intl = util.intl;
    obj.title = intl.string(util.t.ghtnss);
    obj.headerLeft = function headerLeft() {
      return null;
    };
    obj.headerRight = function headerRight() {
      const obj = { source: onClose(6992), onPress, accessibilityLabel: null };
      const intl = guildId(1114).intl;
      obj.accessibilityLabel = intl.string(guildId(1114).t.cpT0Cq);
      return jsx(guildId(7377).HeaderActionButton, { source: onClose(6992), onPress, accessibilityLabel: null });
    };
    obj.render = function render() {
      return jsx(onClose(11571), { guildId, onCloseModal });
    };
    obj[GUILD_ROLE_CONNECTIONS_SCREEN] = obj;
    return obj;
  }, items);
  return jsx(guildId(7000).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
});