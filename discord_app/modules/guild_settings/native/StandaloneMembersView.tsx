// discord_app/modules/guild_settings/native/StandaloneMembersView.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit.tsx";
import KickConfirmDefault from "../../guild_moderation/native/KickConfirm.tsx";
import BanConfirmDefault from "../../guild_moderation/native/BanConfirm.tsx";
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, guildId, importDefault, navigation;

const jsx = Fragment.jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_2;
      let obj4;
      let tmp10;
      let tmp12;
      let tmp5;
      let tmp6;
      let tmp9;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(30);
      guildId = guildId.guildId;
      const obj2 = guildId(1490);
      navigation = obj2.useNavigation();
      const bottom = navigation(1618)().bottom;
      if (cResult[0] !== guildId) {
        const fn = function u() {
          const obj = GuildSettingsActionCreatorsDefault;
          obj.init(guildId);
        };
        const items = [guildId];
        cResult[0] = guildId;
        cResult[1] = fn;
        cResult[2] = items;
        tmp6 = items;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = react.useEffect(tmp5, tmp6);
      const sum = 16 + bottom;
      if (cResult[3] !== sum) {
        const obj3 = { contentContainerStyle: obj4 };
        obj4 = { paddingBottom: sum };
        cResult[3] = sum;
        cResult[4] = obj3;
        tmp9 = obj3;
      } else {
        tmp9 = cResult[4];
      }
      dependencyMap = tmp9;
      if (cResult[5] !== navigation) {
        const tmpResult = tmp(6010);
        const headerCloseButton = tmpResult.getHeaderCloseButton(() => navigation.goBack());
        cResult[5] = navigation;
        cResult[6] = headerCloseButton;
        tmp10 = headerCloseButton;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f() {
          const NavigatorHeader = guildId(closure_2[7]).NavigatorHeader;
          const intl = guildId(closure_2[8]).intl;
          return <NavigatorHeader title={intl.string(guildId(closure_2[8]).t["9Oq93m"])} />;
        };
        cResult[7] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === guildId) {
        let tmp13;
        if (cResult[9] === tmp10) {
          tmp13 = cResult[10];
        }
        if (cResult[11] === guildId) {
          let tmp14;
          if (cResult[12] === tmp9) {
            tmp14 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                return null;
              }
            }
            cResult[14] = R;
          } else {
            class R {
              constructor() {
                return null;
              }
            }
          }
          if (cResult[15] === guildId) {
            class R {
              constructor() {
                return null;
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              class R {
                constructor() {
                  return null;
                }
              }
              cResult[18] = tmp18;
            } else {
              class R {
                constructor() {
                  return null;
                }
              }
            }
            if (cResult[19] === guildId) {
              class R {
                constructor() {
                  return null;
                }
              }
              if (cResult[22] === tmp16) {
                class R {
                  constructor() {
                    return null;
                  }
                }
              }
              const obj5 = {};
              obj5[constants.MAIN] = tmp13;
              obj5[constants.MEMBER_EDIT] = tmp14;
              obj5[constants.MEMBER_KICK] = tmp16;
              obj5[constants.MEMBER_BAN] = tmp19;
              cResult[22] = tmp16;
              cResult[23] = tmp19;
              cResult[24] = tmp13;
              cResult[25] = tmp14;
              cResult[26] = obj5;
            }
            const obj6 = {
              headerTitle: tmp18,
              render(arg0) {
                BanConfirmDefault;
                const merged = Object.assign(arg0);
                const merged1 = Object.assign(closure_2);
                return <tmp guildId={guildId} />;
              },
            };
            cResult[19] = guildId;
            cResult[20] = tmp9;
            cResult[21] = obj6;
          }
          const obj7 = {
            headerTitle: R,
            render(arg0) {
              KickConfirmDefault;
              const merged = Object.assign(arg0);
              const merged1 = Object.assign(closure_2);
              return <tmp guildId={guildId} />;
            },
          };
          cResult[15] = guildId;
          cResult[16] = tmp9;
          cResult[17] = obj7;
        }
        const obj8 = {
          render(arg0) {
            const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(closure_2);
            return <GuildSettingsModalMemberEditScene guildId={guildId} />;
          },
        };
        cResult[11] = guildId;
        cResult[12] = tmp9;
        cResult[13] = obj8;
        tmp14 = obj8;
      }
      const obj9 = {
        headerLeft: tmp10,
        headerTitle: tmp12,
        render() {
          return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
        },
      };
      cResult[8] = guildId;
      cResult[9] = tmp10;
      cResult[10] = obj9;
      tmp13 = obj9;
    }
  : (guildId) => {
      let obj3;
      let obj6;
      guildId = guildId.guildId;
      let obj2;
      let obj = guildId(obj2[4]);
      importDefault = obj.useNavigation();
      const items = [guildId];
      const bottom = require("useSafeAreaInsets")().bottom;
      const effect = react.useEffect(() => {
        const obj = GuildSettingsActionCreatorsDefault;
        obj.init(guildId);
      }, items);
      obj2 = { contentContainerStyle: obj3 };
      const obj4 = {};
      obj3 = { paddingBottom: 16 + bottom };
      const MAIN = constants.MAIN;
      const obj5 = {
        headerLeft: obj6.getHeaderCloseButton(() => navigation.goBack()),
        headerTitle() {
          const NavigatorHeader = guildId(obj2[7]).NavigatorHeader;
          const intl = guildId(obj2[8]).intl;
          return <NavigatorHeader title={intl.string(guildId(obj2[8]).t["9Oq93m"])} />;
        },
        render() {
          return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
        },
      };
      obj4[MAIN] = obj5;
      obj4[constants.MEMBER_EDIT] = {
        render(arg0) {
          const GuildSettingsModalMemberEditScene = GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene;
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj2);
          return <GuildSettingsModalMemberEditScene guildId={guildId} />;
        },
      };
      obj4[constants.MEMBER_KICK] = {
        headerTitle() {
          return null;
        },
        render(arg0) {
          KickConfirmDefault;
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj2);
          return <tmp guildId={guildId} />;
        },
      };
      obj4[constants.MEMBER_BAN] = {
        headerTitle() {
          return null;
        },
        render(arg0) {
          BanConfirmDefault;
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj2);
          return <tmp guildId={guildId} />;
        },
      };
      obj6 = guildId(obj2[7]);
      const Navigator = guildId(obj2[13]).Navigator;
      let intl = guildId(obj2[8]).intl;
      return (
        <Navigator
          screens={obj4}
          initialRouteName={constants.MAIN}
          headerBackTitle={intl.string(guildId(obj2[8]).t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default tmp2;
