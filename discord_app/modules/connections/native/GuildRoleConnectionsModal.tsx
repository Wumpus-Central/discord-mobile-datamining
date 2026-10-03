// discord_app/modules/connections/native/GuildRoleConnectionsModal.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = guildId(576).c(5);
        ({ guildId, onClose } = arg0);
        if (cResult[0] === guildId) {
          if (cResult[1] === onClose) {
            let tmp4 = cResult[2];
          }
          if (cResult[3] !== tmp4) {
            const obj2 = { screens: tmp4, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN };
            const tmp8 = jsx(guildId(6496).Navigator, {
              screens: tmp4,
              initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN,
            });
            cResult[3] = tmp4;
            cResult[4] = tmp8;
            let tmp5 = tmp8;
          } else {
            tmp5 = cResult[4];
          }
          return tmp5;
        }
        const obj3 = {};
        const obj4 = { title: null, headerLeft: null, headerRight: null, render: null };
        const intl = guildId(1126).intl;
        obj4.title = intl.string(guildId(1126).t.ghtnss);
        obj4.headerLeft = function headerLeft() {
          return null;
        };
        obj4.headerRight = function headerRight() {
          const obj = { source: onClose(4809), onPress, accessibilityLabel: null };
          const intl = guildId(1126).intl;
          obj.accessibilityLabel = intl.string(guildId(1126).t.cpT0Cq);
          return jsx(guildId(6880).HeaderActionButton, { source: onClose(4809), onPress, accessibilityLabel: null });
        };
        obj4.render = function render() {
          return jsx(onClose(11188), { guildId, onCloseModal });
        };
        obj3[GUILD_ROLE_CONNECTIONS_SCREEN] = obj4;
        cResult[0] = guildId;
        cResult[1] = onClose;
        cResult[2] = obj3;
        tmp4 = obj3;
        const obj = guildId(576);
      }
    : (guildId) => {
        guildId = guildId.guildId;
        const onClose = guildId.onClose;
        const items = [guildId, onClose];
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
            const obj = { source: onClose(4809), onPress, accessibilityLabel: null };
            const intl = guildId(1126).intl;
            obj.accessibilityLabel = intl.string(guildId(1126).t.cpT0Cq);
            return jsx(guildId(6880).HeaderActionButton, { source: onClose(4809), onPress, accessibilityLabel: null });
          };
          obj2.render = function render() {
            return jsx(onClose(11188), { guildId, onCloseModal });
          };
          obj[GUILD_ROLE_CONNECTIONS_SCREEN] = obj2;
          return obj;
        }, items);
        return jsx(guildId(6496).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
      },
);
