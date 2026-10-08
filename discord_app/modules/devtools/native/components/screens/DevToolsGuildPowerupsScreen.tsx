// discord_app/modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import HTTPUtils from "../../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import UserSettingsProtoActionCreators from "../../../../user_settings/UserSettingsProtoActionCreators.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _modDef4659 from "../../../../../../_runtime/metro/04659__.js";
import TableSwitchRow from "../../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import GuildDismissibleContentUtils from "../../../../guild_dismissible_content/GuildDismissibleContentUtils.tsx";
import toggleDismissibleContentDismissStateDefault from "../../../../dismissible_content/utils/toggleDismissibleContentDismissState.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../../../user_settings/UserSettingsProtoStore.tsx";
import AppliedGuildBoostStore from "../../../../../stores/AppliedGuildBoostStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";

require = fn;
function setWarningBoosts() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _setWarningBoosts(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          closure_4 = tmp3;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.APPLIED_BOOST_MODIFY_END_DATE, body: null, rejectWithError: true };
          const obj6 = { applied_boost_ids: importDefault.map((id) => id.id), ends_at: null };
          let addResult = null;
          if (!closure_2) {
            addResult = _modDef4659().add(1, "day");
            const obj4 = _modDef4659();
          }
          obj6.ends_at = addResult;
          request.body = obj6;
          c5 = 1;
          c6 = 1;
          const obj7 = { value: HTTP.patch(request), done: false };
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
        const appliedGuildBoostsForGuild = closure_132_0(closure_132_2[14]).fetchAppliedGuildBoostsForGuild(
          closure_131_0,
        );
        const obj = closure_132_0(closure_132_2[14]);
        const guildBoostEntitlements = closure_132_0(closure_132_2[15]).fetchGuildBoostEntitlements(
          closure_131_0,
          true,
        );
        c6 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp20) {
      c6 = tmp;
      throw tmp20;
    }
  }
};
function sendPowerupsSystemMessage() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _sendPowerupsSystemMessage(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
          c2 = 1;
          c1 = 1;
          const obj5 = { value: HTTP.post(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DevToolsGuildPowerupsConstants = fn(15876);
({
  GUILD_DCS: closure_11,
  SERVER_TAG_GUILD_DCS: closure_12,
  USER_DCS: map1,
  getGuildDCString: closure_14,
  getUserDCString: closure_15,
} = DevToolsGuildPowerupsConstants);
const Endpoints = fn(1085).Endpoints;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  scrollContainer: null,
  noGuildContainer: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.noGuildContainer = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_32 };
let closure_19 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserDCSwitchRow(dc) {
      const cResult = c.c(8);
      dc = dc.dc;
      if (cResult[0] !== dc) {
        const tmp6 = toggleDismissibleContentDismissStateDefault(dc);
        cResult[0] = dc;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      ({ isDismissed, handleToggleDismissState } = tmp4);
      if (cResult[2] !== dc) {
        const tmp9 = closure_1_15(dc);
        cResult[2] = dc;
        cResult[3] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === handleToggleDismissState) {
        if (cResult[5] === isDismissed) {
          if (cResult[6] === tmp7) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      const tmp11 = constants(TableSwitchRow.TableSwitchRow, {
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
  : function UserDCSwitchRow(dc) {
      dc = dc.dc;
      ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dc));
      const tmp = toggleDismissibleContentDismissStateDefault(dc);
      return constants(TableSwitchRow.TableSwitchRow, {
        label: closure_1_15(dc),
        value: isDismissed,
        onValueChange: handleToggleDismissState,
      });
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildDCSwitchRow(dc) {
      const cResult = dc(576).c(9);
      dc = dc.dc;
      const guildId = dc.guildId;
      const isDismissed = dc.isDismissed;
      if (cResult[0] === dc) {
        if (cResult[1] === guildId) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== dc) {
          const tmp7 = closure_14(dc);
          cResult[3] = dc;
          cResult[4] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          if (cResult[6] === isDismissed) {
            if (cResult[7] === tmp5) {
              let tmp8 = cResult[8];
            }
            return tmp8;
          }
        }
        let obj2 = { label: tmp5, value: isDismissed, onValueChange: tmp4 };
        const tmp10 = closure_17(tmp(6882).TableSwitchRow, obj2);
        cResult[5] = tmp4;
        cResult[6] = isDismissed;
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        tmp8 = tmp10;
      }
      const fn = function t(arg0) {
        if (arg0) {
          const result = GuildDismissibleContentUtils.markContentAsDismissed(dc, guildId, false);
          const tmpResult = GuildDismissibleContentUtils;
        } else {
          const result1 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(
            dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
          );
          const tmpResult2 = UserSettingsProtoActionCreators;
          const result2 = GuildDismissibleContentUtils.unmarkContentAsDismissed(dc, guildId);
        }
      };
      cResult[0] = dc;
      cResult[1] = guildId;
      cResult[2] = fn;
      tmp4 = fn;
      const obj = dc(576);
      tmp = dc;
    }
  : function GuildDCSwitchRow(dc) {
      dc = dc.dc;
      const guildId = dc.guildId;
      const items = [dc, guildId];
      const callback = noop.useCallback((arg0) => {
        if (arg0) {
          const result = GuildDismissibleContentUtils.markContentAsDismissed(dc, guildId, false);
          const tmpResult = GuildDismissibleContentUtils;
        } else {
          const result1 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(
            dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION,
          );
          const tmpResult2 = UserSettingsProtoActionCreators;
          const result2 = GuildDismissibleContentUtils.unmarkContentAsDismissed(dc, guildId);
        }
      }, items);
      return closure_17(dc(6882).TableSwitchRow, {
        label: closure_14(dc),
        value: dc.isDismissed,
        onValueChange: callback,
      });
    };
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_32 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DevToolsGuildPowerupsScreen() {
      const cResult = stateFromStores(stateFromStoresArray1[17]).c(55);
      const tmp4 = closure_19();
      let obj = stateFromStores(stateFromStoresArray1[17]);
      const tmp5 = stateFromStoresArray;
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
      const tmp6 = stateFromStoresArray(stateFromStoresArray1[23])();
      stateFromStores = stateFromStores(stateFromStoresArray1[24]).useStateFromStores(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== stateFromStores) {
        class G {
          constructor() {
            tmp2 = null;
            if (null != closure_0) {
              tmp3 = closure_9;
              guild = closure_9.getGuild(tmp);
              name = undefined;
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
            tmp2 = null;
            if (null != closure_0) {
              tmp3 = closure_9;
              guild = closure_9.getGuild(tmp);
              name = undefined;
              if (guild != null) {
                name = guild.name;
              }
              tmp2 = name;
            }
            return tmp2;
          }
        }
      }
      const tmpResult = stateFromStores(stateFromStoresArray1[24]);
      const stateFromStores1 = stateFromStores(stateFromStoresArray1[24]).useStateFromStores(tmp11, G);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            tmp2 = null;
            if (null != closure_0) {
              tmp3 = closure_9;
              guild = closure_9.getGuild(tmp);
              name = undefined;
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
        const tmp15 = items2;
      } else {
        class G {
          constructor() {
            tmp2 = null;
            if (null != closure_0) {
              tmp3 = closure_9;
              guild = closure_9.getGuild(tmp);
              name = undefined;
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
                isContentDismissedResult = stateFromStores(stateFromStoresArray1[20]).isContentDismissed(item, tmp);
                const obj = stateFromStores(stateFromStoresArray1[20]);
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
                isContentDismissedResult = stateFromStores(stateFromStoresArray1[20]).isContentDismissed(item, tmp);
                const obj = stateFromStores(stateFromStoresArray1[20]);
              }
              return isContentDismissedResult;
            });
          }
        }
      }
      const tmpResult4 = stateFromStores(stateFromStoresArray1[24]);
      stateFromStoresArray = stateFromStores(stateFromStoresArray1[24]).useStateFromStoresArray(tmp15, E);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            items = [...SERVER_TAG_GUILD_DCS];
            return items.filter((item) => {
              let isContentDismissedResult = null != closure_1_0;
              if (isContentDismissedResult) {
                isContentDismissedResult = stateFromStores(stateFromStoresArray1[20]).isContentDismissed(item, tmp);
                const obj = stateFromStores(stateFromStoresArray1[20]);
              }
              return isContentDismissedResult;
            });
          }
        }
        const items3 = [AppliedGuildBoostStore];
        cResult[8] = items3;
        const tmp18 = items3;
      } else {
        class E {
          constructor() {
            items = [...SERVER_TAG_GUILD_DCS];
            return items.filter((item) => {
              let isContentDismissedResult = null != closure_1_0;
              if (isContentDismissedResult) {
                isContentDismissedResult = stateFromStores(stateFromStoresArray1[20]).isContentDismissed(item, tmp);
                const obj = stateFromStores(stateFromStoresArray1[20]);
              }
              return isContentDismissedResult;
            });
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class M {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_8;
              appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
            if (null != closure_0) {
              tmp2 = closure_8;
              appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
      const tmpResult5 = stateFromStores(stateFromStoresArray1[24]);
      stateFromStoresArray1 = stateFromStores(stateFromStoresArray1[24]).useStateFromStoresArray(tmp18, M);
      if (null == stateFromStores) {
        class M {
          constructor() {
            if (null != closure_0) {
              tmp2 = closure_8;
              appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
            if (null != closure_0) {
              tmp2 = closure_8;
              appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
              if (null != closure_0) {
                tmp2 = closure_8;
                appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
              if (null != closure_0) {
                tmp2 = closure_8;
                appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
          class M {
            constructor() {
              if (null != closure_0) {
                tmp2 = closure_8;
                appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
          if (stateFromStores1 == null) {
            class M {
              constructor() {
                if (null != closure_0) {
                  tmp2 = closure_8;
                  appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
          const combined = "Current Guild: " + stateFromStores1;
          const _Symbol = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                if (null != closure_0) {
                  tmp2 = closure_8;
                  appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                return stateFromStores(stateFromStoresArray1[15]).guildPowerupsResetNotifications();
              },
            };
            const tmp27 = closure_17(tmp(tmp2[26]).TableRow, obj2);
            cResult[22] = tmp27;
            const tmp26 = tmp27;
          } else {
            class M {
              constructor() {
                if (null != closure_0) {
                  tmp2 = closure_8;
                  appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                if (null != closure_0) {
                  tmp2 = closure_8;
                  appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
            const tmp29 = closure_17(tmp(tmp2[27]).TableRowGroup, obj3);
            cResult[23] = combined;
            cResult[24] = tmp29;
          } else {
            class M {
              constructor() {
                if (null != closure_0) {
                  tmp2 = closure_8;
                  appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                if (null != closure_0) {
                  tmp2 = closure_8;
                  appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                  if (null != closure_0) {
                    tmp2 = closure_8;
                    appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                class M {
                  constructor() {
                    if (null != closure_0) {
                      tmp2 = closure_8;
                      appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                      if (null != closure_0) {
                        tmp2 = closure_8;
                        appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                    children: closure_13.map((dc) => closure_1_17(closure_1_24, { dc }, dc)),
                  };
                  const tmp41 = closure_17(tmp(tmp2[27]).TableRowGroup, obj4);
                  cResult[34] = tmp41;
                  const tmp39 = tmp41;
                } else {
                  class M {
                    constructor() {
                      if (null != closure_0) {
                        tmp2 = closure_8;
                        appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                      if (null != closure_0) {
                        tmp2 = closure_8;
                        appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                        if (null != closure_0) {
                          tmp2 = closure_8;
                          appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                    const tmp46 = closure_17(tmp(tmp2[27]).TableRowGroup, obj5);
                    cResult[38] = tmp42;
                    cResult[39] = tmp46;
                  } else {
                    class M {
                      constructor() {
                        if (null != closure_0) {
                          tmp2 = closure_8;
                          appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                        if (null != closure_0) {
                          tmp2 = closure_8;
                          appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                          if (null != closure_0) {
                            tmp2 = closure_8;
                            appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                      const tmp51 = closure_17(tmp(tmp2[27]).TableRowGroup, obj6);
                      cResult[43] = tmp47;
                      cResult[44] = tmp51;
                    } else {
                      class M {
                        constructor() {
                          if (null != closure_0) {
                            tmp2 = closure_8;
                            appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                          if (null != closure_0) {
                            tmp2 = closure_8;
                            appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                      const obj7 = { title: "System Messages", hasIcons: false, children: null };
                      const obj8 = {
                        label: "Send Powerups System Message",
                        onPress() {
                          return sendPowerupsSystemMessage(stateFromStores);
                        },
                      };
                      obj7.children = closure_17(tmp(tmp2[26]).TableRow, obj8);
                      const tmp53 = closure_17(tmp(tmp2[27]).TableRowGroup, obj7);
                      cResult[45] = stateFromStores;
                      cResult[46] = tmp53;
                    } else {
                      class M {
                        constructor() {
                          if (null != closure_0) {
                            tmp2 = closure_8;
                            appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                          if (null != closure_0) {
                            tmp2 = closure_8;
                            appliedGuildBoostsForGuild = closure_8.getAppliedGuildBoostsForGuild(tmp);
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
                    const obj9 = { style: tmp59, contentContainerStyle: tmp23, children: null };
                    const items5 = [tmp28, tmp36, tmp39, tmp45, tmp50, tmp52];
                    obj9.children = items5;
                    const tmp57 = closure_18(closure_5, obj9);
                    cResult[47] = tmp4.container;
                    cResult[48] = tmp23;
                    cResult[49] = tmp28;
                    cResult[50] = tmp36;
                    cResult[51] = tmp45;
                    cResult[52] = tmp50;
                    cResult[53] = tmp52;
                    cResult[54] = tmp57;
                  }
                  const mapped = closure_12.map((dc) =>
                    constants(
                      closure_25,
                      { dc, guildId: stateFromStores, isDismissed: stateFromStoresArray.includes(dc) },
                      dc,
                    ),
                  );
                  cResult[40] = stateFromStores;
                  cResult[41] = stateFromStoresArray;
                  cResult[42] = mapped;
                }
                const mapped1 = closure_11.map((dc) =>
                  constants(
                    closure_25,
                    { dc, guildId: stateFromStores, isDismissed: stateFromStoresArray.includes(dc) },
                    dc,
                  ),
                );
                cResult[35] = stateFromStores;
                cResult[36] = stateFromStoresArray;
                cResult[37] = mapped1;
              }
              const obj10 = { title: "Warning State", hasIcons: false, children: null };
              const items6 = [tmp30, tmp33];
              obj10.children = items6;
              const tmp38 = closure_18(tmp(tmp2[27]).TableRowGroup, obj10);
              cResult[31] = tmp30;
              cResult[32] = tmp33;
              cResult[33] = tmp38;
            }
            const obj11 = {
              label: "Reset End Date",
              onPress() {
                return setWarningBoosts(stateFromStores, stateFromStoresArray1, true);
              },
            };
            const tmp35 = closure_17(tmp(tmp2[26]).TableRow, obj11);
            cResult[28] = stateFromStoresArray1;
            cResult[29] = stateFromStores;
            cResult[30] = tmp35;
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
          const tmp32 = closure_17(tmp(tmp2[26]).TableRow, obj12);
          cResult[25] = stateFromStoresArray1;
          cResult[26] = stateFromStores;
          cResult[27] = tmp32;
        }
        const items7 = [tmp4.scrollContainer, tmp22];
        cResult[19] = tmp4.scrollContainer;
        cResult[20] = tmp22;
        cResult[21] = items7;
      }
      const tmpResult6 = stateFromStores(stateFromStoresArray1[24]);
    }
  : function DevToolsGuildPowerupsScreen() {
      const tmp = closure_19();
      const tmp4 = useSafeAreaInsetsDefault();
      let items = [SelectedGuildStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => guildId.getGuildId());
      let obj = stateFromStores(504);
      const items1 = [GuildStore];
      const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
        let tmp2 = null;
        if (null != stateFromStores) {
          guild = GuildStore.getGuild(tmp);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          tmp2 = name;
        }
        return tmp2;
      });
      const obj2 = stateFromStores(504);
      const items2 = [UserSettingsProtoStore];
      importDefault = stateFromStores(504).useStateFromStoresArray(items2, () => {
        const items = [...closure_2_12];
        return items.filter((item) => {
          let isContentDismissedResult = null != closure_1_0;
          if (isContentDismissedResult) {
            isContentDismissedResult = stateFromStores(dependencyMap[20]).isContentDismissed(item, tmp);
            const obj = stateFromStores(dependencyMap[20]);
          }
          return isContentDismissedResult;
        });
      });
      const obj3 = stateFromStores(504);
      const items3 = [AppliedGuildBoostStore];
      dependencyMap = stateFromStores(504).useStateFromStoresArray(items3, () => {
        if (null != stateFromStores) {
          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
          if (appliedGuildBoostsForGuild == null) {
            appliedGuildBoostsForGuild = [];
          }
          let items = appliedGuildBoostsForGuild;
        } else {
          items = [];
        }
        return items;
      });
      if (null == stateFromStores) {
        const obj5 = { style: null, children: null };
        const items4 = [,];
        ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
        obj5.style = items4;
        obj5.children = closure_17(tmp5(5086).Text, {
          variant: "heading-md/semibold",
          color: "text-muted",
          children: "No guild selected",
        });
        let tmp15Result = closure_17(closure_6, obj5);
      } else {
        const obj6 = { style: tmp.container, contentContainerStyle: null, children: null };
        const items5 = [tmp.scrollContainer];
        const obj7 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
        items5[1] = obj7;
        obj6.contentContainerStyle = items5;
        let str = stateFromStores1;
        if (stateFromStores1 == null) {
          str = "Unknown";
        }
        const obj8 = { title: null, hasIcons: false, children: null };
        const _HermesInternal = HermesInternal;
        obj8.title = "Current Guild: " + str;
        const obj9 = {
          label: "Reset Notification Indicators",
          onPress() {
            return stateFromStores(closure_2[15]).guildPowerupsResetNotifications();
          },
        };
        obj8.children = closure_17(tmp5(6184).TableRow, obj9);
        const items6 = [closure_17(tmp5(6267).TableRowGroup, obj8), , , , ,];
        const obj10 = { title: "Warning State", hasIcons: false, children: null };
        const obj11 = {
          label: "Set Half Boosts expiring in 1 day",
          onPress() {
            return setWarningBoosts(stateFromStores, closure_2.slice(Math.floor(closure_2.length / 2)), false);
          },
        };
        const items7 = [closure_17(tmp5(6184).TableRow, obj11)];
        const obj12 = {
          label: "Reset End Date",
          onPress() {
            return setWarningBoosts(stateFromStores, closure_2, true);
          },
        };
        items7[1] = closure_17(tmp5(6184).TableRow, obj12);
        obj10.children = items7;
        items6[1] = closure_18(tmp5(6267).TableRowGroup, obj10);
        const obj13 = {
          title: "User Level DCs",
          hasIcons: false,
          children: closure_13.map((dc) => closure_1_17(closure_1_24, { dc }, dc)),
        };
        items6[2] = closure_17(tmp5(6267).TableRowGroup, obj13);
        const obj14 = {
          title: "Guild Level DCs",
          hasIcons: false,
          children: closure_11.map((dc) =>
            constants(closure_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc),
          ),
        };
        items6[3] = closure_17(tmp5(6267).TableRowGroup, obj14);
        const obj15 = {
          title: "Server Tag Guild Level DCs",
          hasIcons: false,
          children: closure_12.map((dc) =>
            constants(closure_25, { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) }, dc),
          ),
        };
        items6[4] = closure_17(tmp5(6267).TableRowGroup, obj15);
        const obj16 = { title: "System Messages", hasIcons: false, children: null };
        const obj17 = {
          label: "Send Powerups System Message",
          onPress() {
            return sendPowerupsSystemMessage(stateFromStores);
          },
        };
        obj16.children = closure_17(tmp5(6184).TableRow, obj17);
        items6[5] = closure_17(tmp5(6267).TableRowGroup, obj16);
        obj6.children = items6;
        tmp15Result = closure_18(closure_5, obj6);
      }
      return tmp15Result;
    };
