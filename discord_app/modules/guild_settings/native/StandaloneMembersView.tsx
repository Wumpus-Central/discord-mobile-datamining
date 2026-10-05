// === Module 16524: StandaloneMembersView ===

// Module 16524 (StandaloneMembersView)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import GuildSettingsModalMemberEdit from "GuildSettingsModalMemberEdit" /* 11447 */;
import KickConfirmDefault from "KickConfirm" /* 11461 */;
import BanConfirmDefault from "BanConfirm" /* 11463 */;
import GuildSettingsModalMembersWithTabsDefault from "GuildSettingsModalMembersWithTabs" /* 16525 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const constants = { MAIN: "MAIN", MEMBER_EDIT: "MEMBER_EDIT", MEMBER_KICK: "MEMBER_KICK", MEMBER_BAN: "MEMBER_BAN" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/StandaloneMembersView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(30);
  guildId = guildId.guildId;
  let obj = guildId(576);
  const tmp = guildId;
  const navigation = guildId(1490).useNavigation();
  if (cResult[0] !== guildId) {
    const fn = function u() {
      GuildSettingsActionCreatorsDefault.init(guildId);
    };
    const items = [guildId];
    cResult[0] = guildId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  const sum = 16 + navigation(1618)().bottom;
  if (cResult[3] !== sum) {
    const obj3 = { contentContainerStyle: null };
    const obj4 = { paddingBottom: sum };
    obj3.contentContainerStyle = obj4;
    cResult[3] = sum;
    cResult[4] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[4];
  }
  dependencyMap = tmp9;
  if (cResult[5] !== navigation) {
    const headerCloseButton = tmp(6010).getHeaderCloseButton(() => navigation.goBack());
    cResult[5] = navigation;
    cResult[6] = headerCloseButton;
    let tmp10 = headerCloseButton;
    const tmpResult = tmp(6010);
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
      const obj = { title: null };
      const intl = guildId(1126).intl;
      obj.title = intl.string(guildId(1126).t["9Oq93m"]);
      return jsx(guildId(6010).NavigatorHeader, { title: null });
    };
    cResult[7] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === guildId) {
    if (cResult[9] === tmp10) {
      let tmp13 = cResult[10];
    }
    if (cResult[11] === guildId) {
      if (cResult[12] === tmp9) {
        let tmp14 = cResult[13];
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
                  const merged = Object.assign(arg0);
                  const merged1 = Object.assign(closure_2);
                  return jsx(BanConfirmDefault, { guildId });
                }
        };
        cResult[19] = guildId;
        cResult[20] = tmp9;
        cResult[21] = obj6;
      }
      const obj7 = {
        headerTitle: R,
        render(arg0) {
              const merged = Object.assign(arg0);
              const merged1 = Object.assign(closure_2);
              return jsx(KickConfirmDefault, { guildId });
            }
      };
      cResult[15] = guildId;
      cResult[16] = tmp9;
      cResult[17] = obj7;
    }
    const obj8 = {
      render(arg0) {
          const merged = Object.assign(arg0);
          const merged1 = Object.assign(closure_2);
          return jsx(GuildSettingsModalMemberEdit.GuildSettingsModalMemberEditScene, { guildId });
        }
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
    }
  };
  cResult[8] = guildId;
  cResult[9] = tmp10;
  cResult[10] = obj9;
  tmp13 = obj9;
  const obj2 = guildId(1490);
}) : ((guildId) => {
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
  let intl = guildId(obj2[8]).intl;
  obj7.headerBackTitle = intl.string(guildId(obj2[8]).t["13/7kX"]);
  return jsx(guildId(obj2[13]).Navigator, { screens: obj4, initialRouteName: constants.MAIN, headerBackTitle: null });
});