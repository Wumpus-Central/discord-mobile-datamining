// === Module 11736: GuildRoleConnectionsModal ===

// Module 11736 (GuildRoleConnectionsModal)
import util from "util" /* 1113 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default noop.memo(function GuildRoleConnectionsModal(guildId) {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  items = [guildId, onClose];
  const memo = noop.useMemo(() => {
    closure_1 = onClose;
    let obj = {};
    const obj2 = { title: null, headerLeft: null, headerRight: null, render: null };
    let intl = util.intl;
    obj2.title = intl.string(util.t.ghtnss);
    obj2.headerLeft = function headerLeft() {
      return null;
    };
    obj2.headerRight = function headerRight() {
      const obj = { source: onClose(8483), onPress, accessibilityLabel: null };
      const intl = guildId(1113).intl;
      obj.accessibilityLabel = intl.string(guildId(1113).t.cpT0Cq);
      return jsx(guildId(7682).HeaderActionButton, { source: onClose(8483), onPress, accessibilityLabel: null });
    };
    obj2.render = function render() {
      return jsx(onClose(11737), { guildId, onCloseModal });
    };
    obj[GUILD_ROLE_CONNECTIONS_SCREEN] = obj2;
    return obj;
  }, items);
  return jsx(guildId(7290).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
});