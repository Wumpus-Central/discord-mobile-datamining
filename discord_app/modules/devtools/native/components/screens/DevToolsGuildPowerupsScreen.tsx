// discord_app/modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import HTTPUtils from "../../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import UserSettingsProtoActionCreators from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef4467 from "../../../../../../_runtime/metro/04467__.js";
import TableSwitchRow2 from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import GuildDismissibleContentUtils from "../../../../guild_dismissible_content/GuildDismissibleContentUtils.tsx";
import toggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import UserSettingsProtoStore from "../../../../user_settings/UserSettingsProtoStore.tsx";
import AppliedGuildBoostStore from "../../../../../stores/AppliedGuildBoostStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";
import DevToolsGuildPowerupsConstants from "../../../DevToolsGuildPowerupsConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c1, c2, c5, c6, dc, dependencyMap, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function setWarningBoosts() {
  return obj(...arguments);
}
let obj = function _setWarningBoosts() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let addResult;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_4 = tmp2;
            let closure_3 = tmp;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.APPLIED_BOOST_MODIFY_END_DATE, body: obj6, rejectWithError: true };
            obj6 = { applied_boost_ids: closure_1.map((id) => id.id), ends_at: addResult };
            const patch = HTTP.patch;
            addResult = null;
            if (!closure_2) {
              const obj4 = _modDef4467();
              addResult = obj4.add(1, "day");
            }
            c5 = 1;
            c6 = 1;
            const obj7 = { value: patch(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          obj = closure_132_0(closure_132_2[14]);
          const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_0);
          const obj2 = closure_132_0(closure_132_2[15]);
          const guildBoostEntitlements = obj2.fetchGuildBoostEntitlements(closure_0, true);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        c6 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
function sendPowerupsSystemMessage() {
  return obj(...arguments);
}
obj = function _sendPowerupsSystemMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.SEND_POWERUPS_SYSTEM_MESSAGE(closure_0), rejectWithError: true };
            const post = HTTP.post;
            c2 = 1;
            c1 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({
  GUILD_DCS: unpackModuleId,
  SERVER_TAG_GUILD_DCS: closure_12,
  USER_DCS: map1,
  getGuildDCString: closure_14,
  getUserDCString: closure_15,
} = DevToolsGuildPowerupsConstants);
const Endpoints = Constants.Endpoints;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, scrollContainer: obj3, noGuildContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_32 };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (dc) => {
      let handleToggleDismissState;
      let isDismissed;
      let tmp4;
      let tmp7;
      obj = react2;
      const cResult = obj.c(8);
      dc = dc.dc;
      if (cResult[0] !== dc) {
        const tmp6 = toggleDismissibleContentDismissStateDefault(dc);
        cResult[0] = dc;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      ({ isDismissed, handleToggleDismissState } = tmp4);
      if (cResult[2] !== dc) {
        const tmp9 = closure_15(dc);
        cResult[2] = dc;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === handleToggleDismissState) {
        if (cResult[5] === isDismissed) {
          let tmp10;
          if (cResult[6] === tmp7) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      const tmp11 = closure_17(TableSwitchRow2.TableSwitchRow, {
        label: tmp7,
        value: isDismissed,
        onValueChange: handleToggleDismissState,
      });
      cResult[4] = handleToggleDismissState;
      cResult[5] = isDismissed;
      cResult[6] = tmp7;
      cResult[7] = tmp11;
      tmp10 = tmp11;
    }
  : (dc) => {
      let handleToggleDismissState;
      let isDismissed;
      dc = dc.dc;
      ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dc));
      obj = { label: closure_15(dc), value: isDismissed, onValueChange: handleToggleDismissState };
      toggleDismissibleContentDismissStateDefault(dc);
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      return closure_17(TableSwitchRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (dc) => {
      obj = dc(576);
      const cResult = obj.c(9);
      const tmp = dc;
      dc = dc.dc;
      const guildId = dc.guildId;
      const isDismissed = dc.isDismissed;
      if (cResult[0] === dc) {
        let tmp4;
        let tmp5;
        if (cResult[1] === guildId) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== dc) {
          const tmp7 = closure_14(dc);
          cResult[3] = dc;
          cResult[4] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === isDismissed) {
            let tmp8;
            if (cResult[7] === tmp5) {
              tmp8 = cResult[8];
            }
            return tmp8;
          }
        }
        let obj2 = { label: tmp5, value: isDismissed, onValueChange: tmp4 };
        const tmp10 = closure_17(tmp(6705).TableSwitchRow, obj2);
        cResult[5] = tmp4;
        cResult[6] = isDismissed;
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        tmp8 = tmp10;
      }
      const fn = function t(arg0) {
        const tmp3 = arg0;
        if (tmp3) {
          const tmpResult = GuildDismissibleContentUtils;
          const result = tmpResult.markContentAsDismissed(dc, guildId, false);
        } else {
          const tmpResult2 = UserSettingsProtoActionCreators;
          const result1 = tmpResult2.removeDismissedRecurringContent(
            dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
          );
          const obj2 = GuildDismissibleContentUtils;
          const result2 = obj2.unmarkContentAsDismissed(dc, guildId);
        }
      };
      cResult[0] = dc;
      cResult[1] = guildId;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : (dc) => {
      dc = dc.dc;
      const guildId = dc.guildId;
      const items = [dc, guildId];
      const isDismissed = dc.isDismissed;
      const callback = react.useCallback((arg0) => {
        const tmp3 = arg0;
        if (tmp3) {
          const tmpResult = GuildDismissibleContentUtils;
          const result = tmpResult.markContentAsDismissed(dc, guildId, false);
        } else {
          const tmpResult2 = UserSettingsProtoActionCreators;
          const result1 = tmpResult2.removeDismissedRecurringContent(
            dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
          );
          const obj2 = GuildDismissibleContentUtils;
          const result2 = obj2.unmarkContentAsDismissed(dc, guildId);
        }
      }, items);
      obj = { label: closure_14(dc), value: isDismissed, onValueChange: callback };
      const TableSwitchRow = dc(6705).TableSwitchRow;
      return closure_17(TableSwitchRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let guildId;
      let items5;
      let items6;
      let obj8;
      let stateFromStores;
      let stateFromStoresArray;
      let stateFromStoresArray1;
      let tmp11;
      let tmp15;
      let tmp18;
      let tmp7;
      let tmp8;
      const tmp = stateFromStores;
      let tmp2 = stateFromStoresArray1;
      obj = stateFromStores(stateFromStoresArray1[17]);
      const cResult = obj.c(55);
      const tmp4 = closure_19();
      const tmp5 = stateFromStoresArray;
      const tmp6 = stateFromStoresArray(stateFromStoresArray1[23])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [SelectedGuildStore];
        const fn = function t() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = tmp(tmp2[24]);
      stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== stateFromStores) {
        class G {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const guild = GuildStore.getGuild(tmp);
              let name;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
        cResult[3] = stateFromStores;
        cResult[4] = G;
      } else {
        class G {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const guild = GuildStore.getGuild(tmp);
              let name;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      const tmpResult4 = tmp(tmp2[24]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp11, G);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const guild = GuildStore.getGuild(tmp);
              let name;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
        const items2 = [UserSettingsProtoStore];
        cResult[5] = items2;
        tmp15 = items2;
      } else {
        class G {
          constructor() {
            let tmp2 = null;
            if (null != stateFromStores) {
              const guild = GuildStore.getGuild(tmp);
              let name;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      if (cResult[6] !== stateFromStores) {
        class E {
          constructor() {
            items = [...SERVER_TAG_GUILD_DCS];
            return items.filter((item) => {
              let isContentDismissedResult = null != closure_1_0;
              if (isContentDismissedResult) {
                obj = stateFromStores(stateFromStoresArray1[20]);
                isContentDismissedResult = obj.isContentDismissed(item, tmp);
              }
              return isContentDismissedResult;
            });
          }
        }
        cResult[6] = stateFromStores;
        cResult[7] = E;
      } else {
        class E {
          constructor() {
            items = [...SERVER_TAG_GUILD_DCS];
            return items.filter((item) => {
              let isContentDismissedResult = null != closure_1_0;
              if (isContentDismissedResult) {
                obj = stateFromStores(stateFromStoresArray1[20]);
                isContentDismissedResult = obj.isContentDismissed(item, tmp);
              }
              return isContentDismissedResult;
            });
          }
        }
      }
      const tmpResult5 = tmp(tmp2[24]);
      stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp15, E);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            items = [...SERVER_TAG_GUILD_DCS];
            return items.filter((item) => {
              let isContentDismissedResult = null != closure_1_0;
              if (isContentDismissedResult) {
                obj = stateFromStores(stateFromStoresArray1[20]);
                isContentDismissedResult = obj.isContentDismissed(item, tmp);
              }
              return isContentDismissedResult;
            });
          }
        }
        const items3 = [AppliedGuildBoostStore];
        cResult[8] = items3;
        tmp18 = items3;
      } else {
        class E {
          constructor() {
            items = [...SERVER_TAG_GUILD_DCS];
            return items.filter((item) => {
              let isContentDismissedResult = null != closure_1_0;
              if (isContentDismissedResult) {
                obj = stateFromStores(stateFromStoresArray1[20]);
                isContentDismissedResult = obj.isContentDismissed(item, tmp);
              }
              return isContentDismissedResult;
            });
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class M {
          constructor() {
            let items;
            if (null != stateFromStores) {
              let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
              if (appliedGuildBoostsForGuild == null) {
                appliedGuildBoostsForGuild = [];
              }
              items = appliedGuildBoostsForGuild;
            } else {
              items = [];
            }
            return items;
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = M;
      } else {
        class M {
          constructor() {
            let items;
            if (null != stateFromStores) {
              let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
              if (appliedGuildBoostsForGuild == null) {
                appliedGuildBoostsForGuild = [];
              }
              items = appliedGuildBoostsForGuild;
            } else {
              items = [];
            }
            return items;
          }
        }
      }
      const tmpResult6 = tmp(tmp2[24]);
      stateFromStoresArray1 = tmpResult6.useStateFromStoresArray(tmp18, M);
      if (null == stateFromStores) {
        class M {
          constructor() {
            let items;
            if (null != stateFromStores) {
              let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
              if (appliedGuildBoostsForGuild == null) {
                appliedGuildBoostsForGuild = [];
              }
              items = appliedGuildBoostsForGuild;
            } else {
              items = [];
            }
            return items;
          }
        }
        const items4 = [,];
        ({ container: arr8[0], noGuildContainer: arr8[1] } = tmp4);
        cResult[11] = tmp4.container;
        cResult[12] = tmp4.noGuildContainer;
        cResult[13] = items4;
      } else {
        class M {
          constructor() {
            let items;
            if (null != stateFromStores) {
              let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
              if (appliedGuildBoostsForGuild == null) {
                appliedGuildBoostsForGuild = [];
              }
              items = appliedGuildBoostsForGuild;
            } else {
              items = [];
            }
            return items;
          }
        }
        const sum = tmp6.bottom + tmp5(tmp2[11]).space.PX_16;
        if (cResult[17] !== sum) {
          class M {
            constructor() {
              let items;
              if (null != stateFromStores) {
                let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                if (appliedGuildBoostsForGuild == null) {
                  appliedGuildBoostsForGuild = [];
                }
                items = appliedGuildBoostsForGuild;
              } else {
                items = [];
              }
              return items;
            }
          }
          tmp22[0] = sum;
          cResult[17] = sum;
          cResult[18] = tmp22;
        } else {
          class M {
            constructor() {
              let items;
              if (null != stateFromStores) {
                let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                if (appliedGuildBoostsForGuild == null) {
                  appliedGuildBoostsForGuild = [];
                }
                items = appliedGuildBoostsForGuild;
              } else {
                items = [];
              }
              return items;
            }
          }
        }
        if (cResult[19] === tmp4.scrollContainer) {
          let tmp26;
          class M {
            constructor() {
              let items;
              if (null != stateFromStores) {
                let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                if (appliedGuildBoostsForGuild == null) {
                  appliedGuildBoostsForGuild = [];
                }
                items = appliedGuildBoostsForGuild;
              } else {
                items = [];
              }
              return items;
            }
          }
          const tmp24 = stateFromStores1;
          if (stateFromStores1 == null) {
            class M {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                  if (appliedGuildBoostsForGuild == null) {
                    appliedGuildBoostsForGuild = [];
                  }
                  items = appliedGuildBoostsForGuild;
                } else {
                  items = [];
                }
                return items;
              }
            }
          }
          const _HermesInternal = HermesInternal;
          const combined = "Current Guild: " + tmp24;
          const _Symbol = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                  if (appliedGuildBoostsForGuild == null) {
                    appliedGuildBoostsForGuild = [];
                  }
                  items = appliedGuildBoostsForGuild;
                } else {
                  items = [];
                }
                return items;
              }
            }
            const obj2 = {
              label: "Reset Notification Indicators",
              onPress() {
                obj = stateFromStores(stateFromStoresArray1[15]);
                return obj.guildPowerupsResetNotifications();
              },
            };
            const tmp27 = closure_17(tmp(tmp2[26]).TableRow, obj2);
            cResult[22] = tmp27;
            tmp26 = tmp27;
          } else {
            class M {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                  if (appliedGuildBoostsForGuild == null) {
                    appliedGuildBoostsForGuild = [];
                  }
                  items = appliedGuildBoostsForGuild;
                } else {
                  items = [];
                }
                return items;
              }
            }
          }
          if (cResult[23] !== combined) {
            class M {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                  if (appliedGuildBoostsForGuild == null) {
                    appliedGuildBoostsForGuild = [];
                  }
                  items = appliedGuildBoostsForGuild;
                } else {
                  items = [];
                }
                return items;
              }
            }
            const obj3 = { title: combined, hasIcons: false, children: tmp26 };
            cResult[23] = combined;
            cResult[24] = closure_17(tmp(tmp2[27]).TableRowGroup, obj3);
            const tmp29 = closure_17(tmp(tmp2[27]).TableRowGroup, obj3);
          } else {
            class M {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                  if (appliedGuildBoostsForGuild == null) {
                    appliedGuildBoostsForGuild = [];
                  }
                  items = appliedGuildBoostsForGuild;
                } else {
                  items = [];
                }
                return items;
              }
            }
          }
          if (cResult[25] === stateFromStoresArray1) {
            class M {
              constructor() {
                let items;
                if (null != stateFromStores) {
                  let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                  if (appliedGuildBoostsForGuild == null) {
                    appliedGuildBoostsForGuild = [];
                  }
                  items = appliedGuildBoostsForGuild;
                } else {
                  items = [];
                }
                return items;
              }
            }
            if (cResult[28] === stateFromStoresArray1) {
              class M {
                constructor() {
                  let items;
                  if (null != stateFromStores) {
                    let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                    if (appliedGuildBoostsForGuild == null) {
                      appliedGuildBoostsForGuild = [];
                    }
                    items = appliedGuildBoostsForGuild;
                  } else {
                    items = [];
                  }
                  return items;
                }
              }
              if (cResult[31] === tmp30) {
                let tmp39;
                class M {
                  constructor() {
                    let items;
                    if (null != stateFromStores) {
                      let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                      if (appliedGuildBoostsForGuild == null) {
                        appliedGuildBoostsForGuild = [];
                      }
                      items = appliedGuildBoostsForGuild;
                    } else {
                      items = [];
                    }
                    return items;
                  }
                }
                const _Symbol2 = Symbol;
                if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                  class M {
                    constructor() {
                      let items;
                      if (null != stateFromStores) {
                        let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                        if (appliedGuildBoostsForGuild == null) {
                          appliedGuildBoostsForGuild = [];
                        }
                        items = appliedGuildBoostsForGuild;
                      } else {
                        items = [];
                      }
                      return items;
                    }
                  }
                  const obj4 = {
                    title: "User Level DCs",
                    hasIcons: false,
                    children: closure_13.map((dc) => {
                      obj = { dc };
                      return closure_1_17(closure_1_24, obj, dc);
                    }),
                  };
                  const TableRowGroup = tmp(tmp2[27]).TableRowGroup;
                  const tmp41 = closure_17(TableRowGroup, obj4);
                  cResult[34] = tmp41;
                  tmp39 = tmp41;
                } else {
                  class M {
                    constructor() {
                      let items;
                      if (null != stateFromStores) {
                        let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                        if (appliedGuildBoostsForGuild == null) {
                          appliedGuildBoostsForGuild = [];
                        }
                        items = appliedGuildBoostsForGuild;
                      } else {
                        items = [];
                      }
                      return items;
                    }
                  }
                }
                if (cResult[35] === stateFromStores) {
                  class M {
                    constructor() {
                      let items;
                      if (null != stateFromStores) {
                        let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                        if (appliedGuildBoostsForGuild == null) {
                          appliedGuildBoostsForGuild = [];
                        }
                        items = appliedGuildBoostsForGuild;
                      } else {
                        items = [];
                      }
                      return items;
                    }
                  }
                  if (cResult[38] !== tmp42) {
                    class M {
                      constructor() {
                        let items;
                        if (null != stateFromStores) {
                          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                          if (appliedGuildBoostsForGuild == null) {
                            appliedGuildBoostsForGuild = [];
                          }
                          items = appliedGuildBoostsForGuild;
                        } else {
                          items = [];
                        }
                        return items;
                      }
                    }
                    const obj5 = { title: "Guild Level DCs", hasIcons: false, children: tmp42 };
                    cResult[38] = tmp42;
                    cResult[39] = closure_17(tmp(tmp2[27]).TableRowGroup, obj5);
                    const tmp46 = closure_17(tmp(tmp2[27]).TableRowGroup, obj5);
                  } else {
                    class M {
                      constructor() {
                        let items;
                        if (null != stateFromStores) {
                          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                          if (appliedGuildBoostsForGuild == null) {
                            appliedGuildBoostsForGuild = [];
                          }
                          items = appliedGuildBoostsForGuild;
                        } else {
                          items = [];
                        }
                        return items;
                      }
                    }
                  }
                  if (cResult[40] === stateFromStores) {
                    class M {
                      constructor() {
                        let items;
                        if (null != stateFromStores) {
                          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                          if (appliedGuildBoostsForGuild == null) {
                            appliedGuildBoostsForGuild = [];
                          }
                          items = appliedGuildBoostsForGuild;
                        } else {
                          items = [];
                        }
                        return items;
                      }
                    }
                    if (cResult[43] !== tmp47) {
                      class M {
                        constructor() {
                          let items;
                          if (null != stateFromStores) {
                            let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                            if (appliedGuildBoostsForGuild == null) {
                              appliedGuildBoostsForGuild = [];
                            }
                            items = appliedGuildBoostsForGuild;
                          } else {
                            items = [];
                          }
                          return items;
                        }
                      }
                      const obj6 = { title: "Server Tag Guild Level DCs", hasIcons: false, children: tmp47 };
                      cResult[43] = tmp47;
                      cResult[44] = closure_17(tmp(tmp2[27]).TableRowGroup, obj6);
                      const tmp51 = closure_17(tmp(tmp2[27]).TableRowGroup, obj6);
                    } else {
                      class M {
                        constructor() {
                          let items;
                          if (null != stateFromStores) {
                            let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                            if (appliedGuildBoostsForGuild == null) {
                              appliedGuildBoostsForGuild = [];
                            }
                            items = appliedGuildBoostsForGuild;
                          } else {
                            items = [];
                          }
                          return items;
                        }
                      }
                    }
                    if (cResult[45] !== stateFromStores) {
                      class M {
                        constructor() {
                          let items;
                          if (null != stateFromStores) {
                            let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                            if (appliedGuildBoostsForGuild == null) {
                              appliedGuildBoostsForGuild = [];
                            }
                            items = appliedGuildBoostsForGuild;
                          } else {
                            items = [];
                          }
                          return items;
                        }
                      }
                      const obj7 = {
                        title: "System Messages",
                        hasIcons: false,
                        children: closure_17(tmp(tmp2[26]).TableRow, obj8),
                      };
                      const TableRowGroup2 = tmp(tmp2[27]).TableRowGroup;
                      obj8 = {
                        label: "Send Powerups System Message",
                        onPress() {
                          return sendPowerupsSystemMessage(stateFromStores);
                        },
                      };
                      cResult[45] = stateFromStores;
                      cResult[46] = closure_17(TableRowGroup2, obj7);
                      const tmp53 = closure_17(TableRowGroup2, obj7);
                    } else {
                      class M {
                        constructor() {
                          let items;
                          if (null != stateFromStores) {
                            let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                            if (appliedGuildBoostsForGuild == null) {
                              appliedGuildBoostsForGuild = [];
                            }
                            items = appliedGuildBoostsForGuild;
                          } else {
                            items = [];
                          }
                          return items;
                        }
                      }
                    }
                    if (cResult[47] === tmp4.container) {
                      class M {
                        constructor() {
                          let items;
                          if (null != stateFromStores) {
                            let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
                            if (appliedGuildBoostsForGuild == null) {
                              appliedGuildBoostsForGuild = [];
                            }
                            items = appliedGuildBoostsForGuild;
                          } else {
                            items = [];
                          }
                          return items;
                        }
                      }
                    }
                    const obj9 = { style: tmp59, contentContainerStyle: tmp23, children: items5 };
                    items5 = [tmp28, tmp36, tmp39, tmp45, tmp50, tmp52];
                    cResult[47] = tmp4.container;
                    cResult[48] = tmp23;
                    cResult[49] = tmp28;
                    cResult[50] = tmp36;
                    cResult[51] = tmp45;
                    cResult[52] = tmp50;
                    cResult[53] = tmp52;
                    cResult[54] = closure_18(closure_5, obj9);
                    const tmp57 = closure_18(closure_5, obj9);
                  }
                  const mapped = closure_12.map((dc) => {
                    obj = { dc, guildId: stateFromStores, isDismissed: stateFromStoresArray.includes(dc) };
                    return closure_17(closure_25, obj, dc);
                  });
                  cResult[40] = stateFromStores;
                  cResult[41] = stateFromStoresArray;
                  cResult[42] = mapped;
                }
                const mapped1 = closure_11.map((dc) => {
                  obj = { dc, guildId: stateFromStores, isDismissed: stateFromStoresArray.includes(dc) };
                  return closure_17(closure_25, obj, dc);
                });
                cResult[35] = stateFromStores;
                cResult[36] = stateFromStoresArray;
                cResult[37] = mapped1;
              }
              const obj10 = { title: "Warning State", hasIcons: false, children: items6 };
              items6 = [tmp30, tmp33];
              cResult[31] = tmp30;
              cResult[32] = tmp33;
              cResult[33] = closure_18(tmp(tmp2[27]).TableRowGroup, obj10);
              const tmp38 = closure_18(tmp(tmp2[27]).TableRowGroup, obj10);
            }
            const obj11 = {
              label: "Reset End Date",
              onPress() {
                return setWarningBoosts(stateFromStores, stateFromStoresArray1, true);
              },
            };
            cResult[28] = stateFromStoresArray1;
            cResult[29] = stateFromStores;
            cResult[30] = closure_17(tmp(tmp2[26]).TableRow, obj11);
            const tmp35 = closure_17(tmp(tmp2[26]).TableRow, obj11);
          }
          const obj12 = {
            label: "Set Half Boosts expiring in 1 day",
            onPress() {
              return setWarningBoosts(
                stateFromStores,
                stateFromStoresArray1.slice(Math.floor(stateFromStoresArray1.length / 2)),
                false,
              );
            },
          };
          cResult[25] = stateFromStoresArray1;
          cResult[26] = stateFromStores;
          cResult[27] = closure_17(tmp(tmp2[26]).TableRow, obj12);
          const tmp32 = closure_17(tmp(tmp2[26]).TableRow, obj12);
        }
        const items7 = [tmp4.scrollContainer, tmp22];
        cResult[19] = tmp4.scrollContainer;
        cResult[20] = tmp22;
        cResult[21] = items7;
      }
    }
  : () => {
      let closure_1;
      let closure_2;
      let guildId;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj17;
      let obj9;
      let stateFromStores;
      let tmp15Result;
      const tmp = closure_19();
      let tmp2 = importDefault;
      const tmp4 = useSafeAreaInsetsDefault();
      obj = stateFromStores(504);
      let items = [SelectedGuildStore];
      stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      const items1 = [GuildStore];
      const obj2 = stateFromStores(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let tmp2 = null;
        if (null != stateFromStores) {
          const guild = GuildStore.getGuild(tmp);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          tmp2 = name;
        }
        return tmp2;
      });
      const items2 = [UserSettingsProtoStore];
      const obj3 = stateFromStores(504);
      importDefault = obj3.useStateFromStoresArray(items2, () => {
        const items = [...closure_2_12];
        return items.filter((item) => {
          let isContentDismissedResult = null != closure_1_0;
          if (isContentDismissedResult) {
            obj = stateFromStores(closure_2[20]);
            isContentDismissedResult = obj.isContentDismissed(item, tmp);
          }
          return isContentDismissedResult;
        });
      });
      const items3 = [AppliedGuildBoostStore];
      const obj4 = stateFromStores(504);
      dependencyMap = obj4.useStateFromStoresArray(items3, () => {
        let items;
        if (null != stateFromStores) {
          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
          if (appliedGuildBoostsForGuild == null) {
            appliedGuildBoostsForGuild = [];
          }
          items = appliedGuildBoostsForGuild;
        } else {
          items = [];
        }
        return items;
      });
      if (null == stateFromStores) {
        const obj5 = {
          style: items4,
          children: closure_17(stateFromStores(4892).Text, {
            variant: "heading-md/semibold",
            color: "text-muted",
            children: "No guild selected",
          }),
        };
        items4 = [,];
        ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
        tmp15Result = closure_17(closure_6, obj5);
      } else {
        const obj6 = { style: tmp.container, contentContainerStyle: items5, children: items6 };
        items5 = [tmp.scrollContainer];
        items5[1] = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
        let str = stateFromStores1;
        const obj7 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
        const TableRowGroup6 = tmp5(6081).TableRowGroup;
        if (stateFromStores1 == null) {
          str = "Unknown";
        }
        const _HermesInternal = HermesInternal;
        const obj8 = {
          title: "Current Guild: " + str,
          hasIcons: false,
          children: closure_17(stateFromStores(6000).TableRow, obj9),
        };
        obj9 = {
          label: "Reset Notification Indicators",
          onPress() {
            obj = stateFromStores(closure_2[15]);
            return obj.guildPowerupsResetNotifications();
          },
        };
        items6 = [closure_17(TableRowGroup6, obj8), , , , ,];
        const obj10 = { title: "Warning State", hasIcons: false, children: items7 };
        const TableRowGroup = tmp5(6081).TableRowGroup;
        const obj11 = {
          label: "Set Half Boosts expiring in 1 day",
          onPress() {
            return setWarningBoosts(stateFromStores, closure_2.slice(Math.floor(closure_2.length / 2)), false);
          },
        };
        items7 = [closure_17(stateFromStores(6000).TableRow, obj11)];
        const obj12 = {
          label: "Reset End Date",
          onPress() {
            return setWarningBoosts(stateFromStores, closure_2, true);
          },
        };
        items7[1] = closure_17(stateFromStores(6000).TableRow, obj12);
        items6[1] = closure_18(TableRowGroup, obj10);
        const obj13 = {
          title: "User Level DCs",
          hasIcons: false,
          children: closure_13.map((dc) => {
            obj = { dc };
            return closure_1_17(closure_1_24, obj, dc);
          }),
        };
        const TableRowGroup2 = tmp5(6081).TableRowGroup;
        items6[2] = closure_17(TableRowGroup2, obj13);
        const obj14 = {
          title: "Guild Level DCs",
          hasIcons: false,
          children: closure_11.map((dc) => {
            obj = { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) };
            return closure_17(closure_25, obj, dc);
          }),
        };
        const TableRowGroup3 = tmp5(6081).TableRowGroup;
        items6[3] = closure_17(TableRowGroup3, obj14);
        const obj15 = {
          title: "Server Tag Guild Level DCs",
          hasIcons: false,
          children: closure_12.map((dc) => {
            obj = { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) };
            return closure_17(closure_25, obj, dc);
          }),
        };
        const TableRowGroup4 = tmp5(6081).TableRowGroup;
        items6[4] = closure_17(TableRowGroup4, obj15);
        const obj16 = {
          title: "System Messages",
          hasIcons: false,
          children: closure_17(stateFromStores(6000).TableRow, obj17),
        };
        const TableRowGroup5 = tmp5(6081).TableRowGroup;
        obj17 = {
          label: "Send Powerups System Message",
          onPress() {
            return sendPowerupsSystemMessage(stateFromStores);
          },
        };
        items6[5] = closure_17(TableRowGroup5, obj16);
        tmp15Result = closure_18(closure_5, obj6);
      }
      return tmp15Result;
    };
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default tmp6;
