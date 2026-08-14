// discord_app/modules/connections/native/GuildRoleConnectionsModal.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const items = [guildId, onClose];
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, headerRight: null, render: null };
    let intl = guildId(outer1_2[2]).intl;
    obj[0] = intl.string(guildId(outer1_2[2]).t.ghtnss);
    obj[1] = function headerLeft() {
      return null;
    };
    obj[2] = function headerRight() {
      const obj = { source: null, onPress: null, accessibilityLabel: null };
      obj[0] = callback2(outer1_2[4]);
      obj[1] = callback2;
      const intl = callback(outer1_2[2]).intl;
      obj[2] = intl.string(callback(outer1_2[2]).t.cpT0Cq);
      return outer1_4(callback(outer1_2[3]).HeaderActionButton, obj);
    };
    obj[3] = function render() {
      return outer1_4(callback2(outer1_2[5]), { guildId: closure_0, onCloseModal: callback2 });
    };
    obj[outer1_5] = obj;
    return obj;
  }, items);
  return jsx(guildId(5844).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
});
const result = require("getSystemLocale").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default memoResult;