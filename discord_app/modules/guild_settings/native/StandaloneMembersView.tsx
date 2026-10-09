// discord_app/modules/guild_settings/native/StandaloneMembersView.tsx
import GuildSettingsActionCreatorsDefault from "../GuildSettingsActionCreators.tsx";
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit.tsx";
import KickConfirmDefault from "../../guild_moderation/native/KickConfirm.tsx";
import BanConfirmDefault from "../../guild_moderation/native/BanConfirm.tsx";
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StandaloneMembersView(guildId) {
      const cResult = guildId(576).c(30);
      guildId = guildId.guildId;
      let obj = guildId(576);
      const navigation = guildId(1503).useNavigation();
      if (cResult[0] !== guildId) {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
        const items = [guildId];
        cResult[0] = guildId;
        cResult[1] = M;
        cResult[2] = items;
        let tmp4 = items;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(M, tmp4);
      const sum = 16 + navigation(1631)().bottom;
      if (cResult[3] !== sum) {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
        const obj3 = { paddingBottom: sum };
        tmp8[0] = obj3;
        cResult[3] = sum;
        cResult[4] = tmp8;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
      }
      dependencyMap = tmp8;
      if (cResult[5] !== navigation) {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
        const headerCloseButton = obj4.getHeaderCloseButton(() => navigation.goBack());
        cResult[5] = navigation;
        cResult[6] = headerCloseButton;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
        cResult[7] = tmp12;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
      }
      if (cResult[8] === guildId) {
        class M {
          constructor() {
            obj = closure_1(closure_2[6]);
            initResult = obj.init(guildId);
            return;
          }
        }
        if (cResult[11] === guildId) {
          class M {
            constructor() {
              obj = closure_1(closure_2[6]);
              initResult = obj.init(guildId);
              return;
            }
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
              class S {
                constructor() {
                  return null;
                }
              }
              cResult[18] = S;
            } else {
              class S {
                constructor() {
                  return null;
                }
              }
            }
            if (cResult[19] === guildId) {
              class S {
                constructor() {
                  return null;
                }
              }
              if (cResult[22] === tmp16) {
                class S {
                  constructor() {
                    return null;
                  }
                }
              }
              const obj5 = {};
              obj5[constants.MAIN] = tmp13;
              obj5[constants.MEMBER_EDIT] = tmp14;
              obj5[constants.MEMBER_KICK] = tmp16;
              obj5[constants.MEMBER_BAN] = tmp18;
              cResult[22] = tmp16;
              cResult[23] = tmp18;
              cResult[24] = tmp13;
              cResult[25] = tmp14;
              cResult[26] = obj5;
            }
            const obj6 = {
              headerTitle: S,
              render(arg0) {
                const merged = Object.assign(arg0);
                const merged1 = Object.assign(closure_2);
                return jsx(BanConfirmDefault, { guildId });
              },
            };
            cResult[19] = guildId;
            cResult[20] = tmp8;
            cResult[21] = obj6;
          }
          const obj7 = {
            headerTitle: R,
            render(arg0) {
              const merged = Object.assign(arg0);
              const merged1 = Object.assign(closure_2);
              return jsx(KickConfirmDefault, { guildId });
            },
          };
          cResult[15] = guildId;
          cResult[16] = tmp8;
          cResult[17] = obj7;
        }
        const obj8 = {
          render(arg0) {
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(closure_2);
            return jsx(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
          },
        };
        cResult[11] = guildId;
        cResult[12] = tmp8;
        cResult[13] = obj8;
      }
      const obj9 = {
        headerLeft: tmp9,
        headerTitle: tmp12,
        render() {
          return jsx(GuildSettingsModalMembersWithTabsDefault, { guildId });
        },
      };
      cResult[8] = guildId;
      cResult[9] = tmp9;
      cResult[10] = obj9;
      const obj2 = guildId(1503);
    }
  : function StandaloneMembersView(guildId) {
      guildId = guildId.guildId;
      let obj2;
      importDefault = guildId(obj2[4]).useNavigation();
      const items = [guildId];
      const effect = noop.useEffect(() => {
        GuildSettingsActionCreatorsDefault.init(guildId);
      }, items);
      obj2 = { contentContainerStyle: null };
      let obj = guildId(obj2[4]);
      obj2.contentContainerStyle = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
      const obj4 = {};
      const obj5 = { headerLeft: null, headerTitle: null, render: null };
      const obj3 = { paddingBottom: 16 + require("useSafeAreaInsets")().bottom };
      obj5.headerLeft = guildId(obj2[7]).getHeaderCloseButton(() => navigation.goBack());
      obj5.headerTitle = function headerTitle() {
        const obj = { title: null };
        const intl = guildId(obj2[8]).intl;
        obj.title = intl.string(guildId(obj2[8]).t["9Oq93m"]);
        return jsx(guildId(obj2[7]).NavigatorHeader, { title: null });
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
        },
      };
      obj4[constants.MEMBER_KICK] = {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj2);
          return jsx(KickConfirmDefault, { guildId });
        },
      };
      obj4[constants.MEMBER_BAN] = {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(obj2);
          return jsx(BanConfirmDefault, { guildId });
        },
      };
      const obj7 = { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: null };
      let intl = guildId(obj2[8]).intl;
      obj7.headerBackTitle = intl.string(guildId(obj2[8]).t["13/7kX"]);
      return jsx(guildId(obj2[13]).Navigator, {
        screens: obj4,
        initialRouteName: constants.MAIN,
        headerBackTitle: null,
      });
    };
