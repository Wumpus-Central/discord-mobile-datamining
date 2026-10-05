// discord_app/modules/connections/native/GuildRoleConnectionsModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../intl/index.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function headerLeft() {
  return null;
}
const jsx = Fragment.jsx;
const GUILD_ROLE_CONNECTIONS_SCREEN = "GUILD_ROLE_CONNECTIONS_SCREEN";
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let guildId;
        let intl;
        let onClose;
        const obj = guildId(576);
        const cResult = obj.c(5);
        ({ guildId, onClose } = arg0);
        if (cResult[0] === guildId) {
          let tmp4;
          let tmp5;
          if (cResult[1] === onClose) {
            tmp4 = cResult[2];
          }
          if (cResult[3] !== tmp4) {
            const tmp8 = jsx(guildId(6496).Navigator, {
              screens: tmp4,
              initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN,
            });
            cResult[3] = tmp4;
            cResult[4] = tmp8;
            tmp5 = tmp8;
          } else {
            tmp5 = cResult[4];
          }
          return tmp5;
        }
        const obj3 = {};
        const obj4 = {
          title: intl.string(guildId(1126).t.ghtnss),
          headerLeft,
          headerRight() {
            let intl;
            const obj = {
              source: onClose(closure_2_2[4]),
              onPress,
              accessibilityLabel: intl.string(guildId(closure_2_2[2]).t.cpT0Cq),
            };
            const HeaderActionButton = guildId(closure_2_2[3]).HeaderActionButton;
            intl = guildId(closure_2_2[2]).intl;
            return closure_2_4(HeaderActionButton, obj);
          },
          render() {
            const obj = { guildId, onCloseModal };
            return closure_2_4(onClose(closure_2_2[5]), obj);
          },
        };
        intl = guildId(1126).intl;
        obj3[GUILD_ROLE_CONNECTIONS_SCREEN] = obj4;
        cResult[0] = guildId;
        cResult[1] = onClose;
        cResult[2] = obj3;
        tmp4 = obj3;
      }
    : (guildId) => {
        guildId = guildId.guildId;
        const onClose = guildId.onClose;
        const items = [guildId, onClose];
        const memo = react.useMemo(() => {
          let intl;
          let obj = {};
          const obj2 = {
            title: intl.string(intl2.t.ghtnss),
            headerLeft,
            headerRight() {
              let intl;
              const obj = {
                source: onClose(closure_2_2[4]),
                onPress,
                accessibilityLabel: intl.string(guildId(closure_2_2[2]).t.cpT0Cq),
              };
              const HeaderActionButton = guildId(closure_2_2[3]).HeaderActionButton;
              intl = guildId(closure_2_2[2]).intl;
              return closure_2_4(HeaderActionButton, obj);
            },
            render() {
              const obj = { guildId, onCloseModal };
              return closure_2_4(onClose(closure_2_2[5]), obj);
            },
          };
          intl = intl2.intl;
          obj[GUILD_ROLE_CONNECTIONS_SCREEN] = obj2;
          return obj;
        }, items);
        return jsx(guildId(6496).Navigator, { screens: memo, initialRouteName: GUILD_ROLE_CONNECTIONS_SCREEN });
      },
);
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModal.tsx");

export default memoResult;
