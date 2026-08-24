// === Module 10801: ? ===

// Module 10801
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

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
    let intl = guildId(closure_1_2[2]).intl;
    obj[0] = intl.string(guildId(closure_1_2[2]).t.ghtnss);
    obj[1] = function headerLeft() {
      return null;
    };
    obj[2] = function headerRight() {
      const obj = { source: callback2(closure_1_2[4]), onPress: callback2, accessibilityLabel: null };
      const intl = callback(closure_1_2[2]).intl;
      obj[2] = intl.string(callback(closure_1_2[2]).t.cpT0Cq);
      return closure_1_4(callback(closure_1_2[3]).HeaderActionButton, obj);
    };
    obj[3] = function render() {
      return closure_1_4(callback2(closure_1_2[5]), { guildId: closure_0, onCloseModal: callback2 });
    };
    obj[closure_1_5] = obj;
    return obj;
  }, items);
  return jsx(guildId(6343).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
});
const result = require("set").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default memoResult;