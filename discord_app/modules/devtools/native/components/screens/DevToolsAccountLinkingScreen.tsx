// === Module 15620: DevToolsAccountLinkingScreen ===

// Module 15620 (DevToolsAccountLinkingScreen)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 6667 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6670 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6672 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6609 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ Image: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollContainer: obj3, buttonRow: obj4, rewardImage: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.sm };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthorizedAppsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return AuthorizedAppsStore.getNewestTokenForApplication(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function c() {
      if (null != stateFromStores) {
        const obj = AuthorizedAppsActionCreatorsDefault;
        obj.delete(tmp.id);
      }
    };
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    let tmp10;
    if (cResult[6] === null != stateFromStores) {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  const obj2 = { canDeauthorize: null != stateFromStores, deauthorize: tmp8 };
  cResult[5] = tmp8;
  cResult[6] = null != stateFromStores;
  cResult[7] = obj2;
  tmp10 = obj2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [AuthorizedAppsStore];
  const stateFromStores = obj.useStateFromStores(items, () => AuthorizedAppsStore.getNewestTokenForApplication(closure_0));
  const items1 = [stateFromStores];
  const obj2 = {
    canDeauthorize: null != stateFromStores,
    deauthorize: react.useCallback(() => {
      if (null != stateFromStores) {
        const obj = AuthorizedAppsActionCreatorsDefault;
        obj.delete(tmp.id);
      }
    }, items1)
  };
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let connectionApp;
  let debug;
  let getOrFetchApplication;
  let guildId;
  let hasAlreadyLinked;
  let items3;
  let obj11;
  let obj13;
  let startAuthorization;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp20;
  let tmp22;
  let tmp24;
  let tmp28;
  let tmp30;
  let value;
  let obj = value(stateFromStores[11]);
  const cResult = obj.c(68);
  const tmp4 = closure_14();
  require("useSafeAreaInsets")();
  const tmp7 = getOrFetchApplication(startAuthorization.useState(""), 2);
  value = tmp7[0];
  importDefault = tmp9;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function p() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  let tmpResult = tmp(tmp2[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[2] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const fn2 = function k() {
      return GuildStore.getGuild(stateFromStores);
    };
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[4];
  }
  const tmpResult4 = value(stateFromStores[12]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, tmp16);
  let gameApplicationIds;
  const tmp18 = cResult[5];
  if (stateFromStores1 != null) {
    gameApplicationIds = stateFromStores1.gameApplicationIds;
  }
  if (tmp18 !== gameApplicationIds) {
    let gameApplicationIds1;
    if (stateFromStores1 != null) {
      gameApplicationIds1 = stateFromStores1.gameApplicationIds;
    }
    if (gameApplicationIds1 == null) {
      gameApplicationIds1 = [];
    }
    let gameApplicationIds2;
    if (stateFromStores1 != null) {
      gameApplicationIds2 = stateFromStores1.gameApplicationIds;
    }
    cResult[5] = gameApplicationIds2;
    cResult[6] = gameApplicationIds1;
    tmp20 = gameApplicationIds1;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function z(arg0) {
      return null != arg0;
    };
    cResult[7] = fn3;
    tmp22 = fn3;
  } else {
    tmp22 = cResult[7];
  }
  const arr4 = require("useGetOrFetchApplications")(tmp20);
  let found = arr4.filter(tmp22);
  const tmpResult5 = value(stateFromStores[15]);
  getOrFetchApplication = tmpResult5.useGetOrFetchApplication(value);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApplicationStore];
    cResult[8] = items2;
    tmp24 = items2;
  } else {
    tmp24 = cResult[8];
  }
  let linkedGames;
  const tmp26 = cResult[9];
  if (getOrFetchApplication != null) {
    linkedGames = getOrFetchApplication.linkedGames;
  }
  if (tmp26 !== linkedGames) {
    let linkedGames1;
    if (getOrFetchApplication != null) {
      linkedGames1 = getOrFetchApplication.linkedGames;
    }
    class P {
      constructor() {
        let application;
        let found;
        if (getOrFetchApplication != null) {
          const linkedGames = getOrFetchApplication.linkedGames;
          if (linkedGames != null) {
            const mapped = linkedGames.map((id) => application.getApplication(id.id));
            found = mapped.filter((item) => null != item);
          }
        }
        if (found == null) {
          found = [];
        }
        return found;
      }
    }
    cResult[9] = linkedGames1;
    cResult[10] = P;
    tmp28 = P;
  } else {
    tmp28 = cResult[10];
  }
  const tmpResult6 = value(stateFromStores[12]);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp24, tmp28);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { debug: true };
    class P {
      constructor() {
        let application;
        let found;
        if (getOrFetchApplication != null) {
          const linkedGames = getOrFetchApplication.linkedGames;
          if (linkedGames != null) {
            const mapped = linkedGames.map((id) => application.getApplication(id.id));
            found = mapped.filter((item) => null != item);
          }
        }
        if (found == null) {
          found = [];
        }
        return found;
      }
    }
    tmp30 = obj2;
  } else {
    tmp30 = cResult[11];
  }
  const tmp31 = require("useStartAuthorize")(getOrFetchApplication, tmp30);
  startAuthorization = tmp31.startAuthorization;
  ({ hasAlreadyLinked, debug, connectionApp } = tmp31);
  let id;
  const canStartAuthorization = tmp31.canStartAuthorization;
  if (connectionApp != null) {
    id = connectionApp.id;
  }
  const tmp32Result = closure_15(id);
  const deauthorize = tmp32Result.deauthorize;
  let id1;
  const canDeauthorize = tmp32Result.canDeauthorize;
  const tmp35 = cResult[12];
  if (connectionApp != null) {
    id1 = connectionApp.id;
  }
  if (tmp35 === id1) {
    let tmp37;
    let tmp43;
    if (cResult[13] === stateFromStoresArray) {
      tmp37 = cResult[14];
    }
    class P {
      constructor() {
        let application;
        let found;
        if (getOrFetchApplication != null) {
          const linkedGames = getOrFetchApplication.linkedGames;
          if (linkedGames != null) {
            const mapped = linkedGames.map((id) => application.getApplication(id.id));
            found = mapped.filter((item) => null != item);
          }
        }
        if (found == null) {
          found = [];
        }
        return found;
      }
    }
    const sum = tmp41 + tmp5(tmp2[9]).space.PX_16;
    if (cResult[15] !== sum) {
      const obj3 = { paddingBottom: sum };
      class P {
        constructor() {
          let application;
          let found;
          if (getOrFetchApplication != null) {
            const linkedGames = getOrFetchApplication.linkedGames;
            if (linkedGames != null) {
              const mapped = linkedGames.map((id) => application.getApplication(id.id));
              found = mapped.filter((item) => null != item);
            }
          }
          if (found == null) {
            found = [];
          }
          return found;
        }
      }
      cResult[15] = sum;
      cResult[16] = obj3;
      tmp43 = obj3;
    } else {
      tmp43 = cResult[16];
    }
    if (cResult[17] === tmp4.scrollContainer) {
      let str3;
      let tmp47;
      const TableRowGroup = tmp(tmp2[17]).TableRowGroup;
      class P {
        constructor() {
          let application;
          let found;
          if (getOrFetchApplication != null) {
            const linkedGames = getOrFetchApplication.linkedGames;
            if (linkedGames != null) {
              const mapped = linkedGames.map((id) => application.getApplication(id.id));
              found = mapped.filter((item) => null != item);
            }
          }
          if (found == null) {
            found = [];
          }
          return found;
        }
      }
      if (stateFromStores1 != null) {
        str3 = stateFromStores1.name;
      }
      if (str3 == null) {
        str3 = "N/A";
      }
      let _HermesInternal = HermesInternal;
      const combined = "Guild Official Games - " + str3;
      if (null != stateFromStores1) {
        if (found.length > 0) {
          let mapped = found.map((name) => {
            let tmpResult;
            const obj = {
              label: "" + name.name + " (" + name.id + ")",
              onPress() {
                return closure_1(name.id);
              },
              trailing: tmpResult
            };
            const TableRow = first(stateFromStores[18]).TableRow;
            tmpResult = undefined;
            if (name === name.id) {
              tmpResult = closure_1_12(first(stateFromStores[19]).Text, { variant: "text-sm/semibold", children: "Selected" });
            }
            return closure_1_12(TableRow, obj, name.id);
          });
        } else {
          mapped = closure_12(tmp(tmp2[18]).TableRow, { label: "No official games" });
        }
        class P {
          constructor() {
            let application;
            let found;
            if (getOrFetchApplication != null) {
              const linkedGames = getOrFetchApplication.linkedGames;
              if (linkedGames != null) {
                const mapped = linkedGames.map((id) => application.getApplication(id.id));
                found = mapped.filter((item) => null != item);
              }
            }
            if (found == null) {
              found = [];
            }
            return found;
          }
        }
      } else {
        tmp47 = closure_12(value(stateFromStores[18]).TableRow, { label: "No guild selected" });
      }
      if (cResult[20] === TableRowGroup) {
        if (cResult[21] === combined) {
          let tmp54;
          let tmp55;
          let tmp61;
          let tmp65;
          const _Symbol = Symbol;
          class P {
            constructor() {
              let application;
              let found;
              if (getOrFetchApplication != null) {
                const linkedGames = getOrFetchApplication.linkedGames;
                if (linkedGames != null) {
                  const mapped = linkedGames.map((id) => application.getApplication(id.id));
                  found = mapped.filter((item) => null != item);
                }
              }
              if (found == null) {
                found = [];
              }
              return found;
            }
          }
          if (tmp53 === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { padding: require("native").space.PX_12 };
            class P {
              constructor() {
                let application;
                let found;
                if (getOrFetchApplication != null) {
                  const linkedGames = getOrFetchApplication.linkedGames;
                  if (linkedGames != null) {
                    const mapped = linkedGames.map((id) => application.getApplication(id.id));
                    found = mapped.filter((item) => null != item);
                  }
                }
                if (found == null) {
                  found = [];
                }
                return found;
              }
            }
            cResult[24] = obj4;
            tmp54 = obj4;
          } else {
            tmp54 = cResult[24];
          }
          if (cResult[25] !== value) {
            class P {
              constructor() {
                let application;
                let found;
                if (getOrFetchApplication != null) {
                  const linkedGames = getOrFetchApplication.linkedGames;
                  if (linkedGames != null) {
                    const mapped = linkedGames.map((id) => application.getApplication(id.id));
                    found = mapped.filter((item) => null != item);
                  }
                }
                if (found == null) {
                  found = [];
                }
                return found;
              }
            }
            tmp58[0] = tmp54;
            const obj5 = { label: "Application ID", value, onChange: tmp7[1] };
            tmp58[1] = closure_12(value(stateFromStores[20]).TextInput, obj5);
            const tmp59 = closure_12(closure_7, tmp58);
            cResult[25] = value;
            cResult[26] = tmp59;
            tmp55 = tmp59;
          } else {
            tmp55 = cResult[26];
          }
          let str5 = "N/A";
          if (null != getOrFetchApplication) {
            str5 = getOrFetchApplication.name;
          }
          const _HermesInternal2 = HermesInternal;
          const combined1 = "Name: " + str5;
          if (cResult[27] !== combined1) {
            const obj6 = { label: null };
            class P {
              constructor() {
                let application;
                let found;
                if (getOrFetchApplication != null) {
                  const linkedGames = getOrFetchApplication.linkedGames;
                  if (linkedGames != null) {
                    const mapped = linkedGames.map((id) => application.getApplication(id.id));
                    found = mapped.filter((item) => null != item);
                  }
                }
                if (found == null) {
                  found = [];
                }
                return found;
              }
            }
            const tmp63 = closure_12(value(stateFromStores[18]).TableRow, obj6);
            cResult[27] = combined1;
            cResult[28] = tmp63;
            tmp61 = tmp63;
          } else {
            tmp61 = cResult[28];
          }
          const _HermesInternal3 = HermesInternal;
          const combined2 = "Linked Games: " + tmp37;
          if (cResult[29] !== combined2) {
            const obj7 = { label: null };
            class P {
              constructor() {
                let application;
                let found;
                if (getOrFetchApplication != null) {
                  const linkedGames = getOrFetchApplication.linkedGames;
                  if (linkedGames != null) {
                    const mapped = linkedGames.map((id) => application.getApplication(id.id));
                    found = mapped.filter((item) => null != item);
                  }
                }
                if (found == null) {
                  found = [];
                }
                return found;
              }
            }
            const tmp67 = closure_12(value(stateFromStores[18]).TableRow, obj7);
            cResult[29] = combined2;
            cResult[30] = tmp67;
            tmp65 = tmp67;
          } else {
            tmp65 = cResult[30];
          }
          if (cResult[31] === tmp55) {
            if (cResult[32] === tmp61) {
              class P {
                constructor() {
                  let application;
                  let found;
                  if (getOrFetchApplication != null) {
                    const linkedGames = getOrFetchApplication.linkedGames;
                    if (linkedGames != null) {
                      const mapped = linkedGames.map((id) => application.getApplication(id.id));
                      found = mapped.filter((item) => null != item);
                    }
                  }
                  if (found == null) {
                    found = [];
                  }
                  return found;
                }
              }
              let str9 = "Not set";
              if (debug.hasConnectionEntrypointUrl) {
                str9 = "Set";
              }
              if (cResult[35] === "text-feedback-critical") {
                class P {
                  constructor() {
                    let application;
                    let found;
                    if (getOrFetchApplication != null) {
                      const linkedGames = getOrFetchApplication.linkedGames;
                      if (linkedGames != null) {
                        const mapped = linkedGames.map((id) => application.getApplication(id.id));
                        found = mapped.filter((item) => null != item);
                      }
                    }
                    if (found == null) {
                      found = [];
                    }
                    return found;
                  }
                }
                let str11 = "No";
                if (hasAlreadyLinked) {
                  str11 = "Yes";
                }
                if (cResult[38] === "text-muted") {
                  class P {
                    constructor() {
                      let application;
                      let found;
                      if (getOrFetchApplication != null) {
                        const linkedGames = getOrFetchApplication.linkedGames;
                        if (linkedGames != null) {
                          const mapped = linkedGames.map((id) => application.getApplication(id.id));
                          found = mapped.filter((item) => null != item);
                        }
                      }
                      if (found == null) {
                        found = [];
                      }
                      return found;
                    }
                  }
                  if (cResult[43] === !canStartAuthorization) {
                    class P {
                      constructor() {
                        let application;
                        let found;
                        if (getOrFetchApplication != null) {
                          const linkedGames = getOrFetchApplication.linkedGames;
                          if (linkedGames != null) {
                            const mapped = linkedGames.map((id) => application.getApplication(id.id));
                            found = mapped.filter((item) => null != item);
                          }
                        }
                        if (found == null) {
                          found = [];
                        }
                        return found;
                      }
                    }
                    const obj8 = { disabled: !canDeauthorize, onPress: deauthorize, variant: "critical-primary", text: "Deauthorize" };
                    cResult[46] = deauthorize;
                    cResult[47] = !canDeauthorize;
                    cResult[48] = closure_12(value(stateFromStores[21]).Button, obj8);
                    const tmp85 = closure_12(value(stateFromStores[21]).Button, obj8);
                  }
                  const obj9 = { disabled: !canStartAuthorization, onPress: tmp78, variant: "primary", text: "Start Authorization" };
                  cResult[43] = !canStartAuthorization;
                  cResult[44] = tmp78;
                  cResult[45] = closure_12(value(stateFromStores[21]).Button, obj9);
                  const tmp81 = closure_12(value(stateFromStores[21]).Button, obj9);
                }
                const obj10 = { label: "Already Linked", trailing: closure_12(value(stateFromStores[19]).Text, obj11) };
                const TableRow2 = tmp(tmp2[18]).TableRow;
                obj11 = { variant: "text-sm/semibold", color: "text-muted", children: str11 };
                cResult[38] = "text-muted";
                cResult[39] = str11;
                cResult[40] = closure_12(TableRow2, obj10);
                const tmp76 = closure_12(TableRow2, obj10);
              }
              const obj12 = { label: "Connection Entrypoint URL", trailing: closure_12(value(stateFromStores[19]).Text, obj13) };
              let TableRow = tmp(tmp2[18]).TableRow;
              obj13 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: str9 };
              cResult[35] = "text-feedback-critical";
              cResult[36] = str9;
              cResult[37] = closure_12(TableRow, obj12);
              const tmp73 = closure_12(TableRow, obj12);
            }
          }
          const obj14 = { title: "Application", hasIcons: false, children: items3 };
          items3 = [tmp55, tmp61, tmp65];
          cResult[31] = tmp55;
          cResult[32] = tmp61;
          cResult[33] = tmp65;
          cResult[34] = closure_13(value(stateFromStores[17]).TableRowGroup, obj14);
          const tmp70 = closure_13(value(stateFromStores[17]).TableRowGroup, obj14);
        }
      }
      const obj15 = { title: combined, hasIcons: false, children: tmp47 };
      cResult[20] = TableRowGroup;
      cResult[21] = combined;
      cResult[22] = tmp47;
      cResult[23] = closure_12(TableRowGroup, obj15);
      const tmp52 = closure_12(TableRowGroup, obj15);
    }
    const items4 = [tmp4.scrollContainer, tmp43];
    cResult[17] = tmp4.scrollContainer;
    cResult[18] = tmp43;
    cResult[19] = items4;
  }
  if (stateFromStoresArray.length > 0) {
    const mapped1 = stateFromStoresArray.map((id) => {
      let name;
      id = undefined;
      if (connectionApp != null) {
        id = connectionApp.id;
      }
      if (id === id.id) {
        const _HermesInternal = HermesInternal;
        name = "" + id.name + "*";
      } else {
        name = id.name;
      }
      return name;
    });
    class P {
      constructor() {
        let application;
        let found;
        if (getOrFetchApplication != null) {
          const linkedGames = getOrFetchApplication.linkedGames;
          if (linkedGames != null) {
            const mapped = linkedGames.map((id) => application.getApplication(id.id));
            found = mapped.filter((item) => null != item);
          }
        }
        if (found == null) {
          found = [];
        }
        return found;
      }
    }
  }
  let id2;
  if (connectionApp != null) {
    id2 = connectionApp.id;
  }
  cResult[12] = id2;
  cResult[13] = stateFromStoresArray;
  cResult[14] = "N/A";
  tmp37 = str;
}) : (() => {
  let canDeauthorize;
  let closure_1;
  let closure_2;
  let connectionApp;
  let deauthorize;
  let debug;
  let getOrFetchApplication;
  let guildId;
  let hasAlreadyLinked;
  let items3;
  let items4;
  let items7;
  let obj20;
  let obj21;
  let obj22;
  let obj7;
  let str5;
  let str7;
  let tmp17Result;
  const tmp = closure_14();
  const tmp4 = useSafeAreaInsetsDefault();
  const tmp5 = getOrFetchApplication(react.useState(""), 2);
  const value = tmp5[0];
  importDefault = tmp7;
  let obj = value(504);
  const items = [SelectedGuildStore];
  dependencyMap = obj.useStateFromStores(items, () => guildId.getGuildId());
  const items1 = [GuildStore];
  const obj2 = value(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(closure_2));
  let gameApplicationIds;
  if (stateFromStores != null) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const arr4 = useGetOrFetchApplicationsDefault(gameApplicationIds);
  let found = arr4.filter((item) => null != item);
  const tmp8Result = value(6670);
  getOrFetchApplication = tmp8Result.useGetOrFetchApplication(value);
  const items2 = [ApplicationStore];
  const tmp8Result2 = value(504);
  const stateFromStoresArray = tmp8Result2.useStateFromStoresArray(items2, () => {
    let application;
    let found;
    if (getOrFetchApplication != null) {
      const linkedGames = getOrFetchApplication.linkedGames;
      if (linkedGames != null) {
        const mapped = linkedGames.map((id) => application.getApplication(id.id));
        found = mapped.filter((item) => null != item);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  });
  const tmp11 = useStartAuthorizeDefault(getOrFetchApplication, { debug: true });
  ({ startAuthorization: react, hasAlreadyLinked, debug, connectionApp } = tmp11);
  let id;
  const canStartAuthorization = tmp11.canStartAuthorization;
  if (connectionApp != null) {
    id = connectionApp.id;
  }
  let str = "N/A";
  let str2 = "N/A";
  ({ canDeauthorize, deauthorize } = closure_15(id));
  closure_15(id);
  if (stateFromStoresArray.length > 0) {
    let mapped = stateFromStoresArray.map((id) => {
      let name;
      id = undefined;
      if (connectionApp != null) {
        id = connectionApp.id;
      }
      if (id === id.id) {
        const _HermesInternal = HermesInternal;
        name = "" + id.name + "*";
      } else {
        name = id.name;
      }
      return name;
    });
    str2 = mapped.join(", ");
  }
  const obj3 = { style: tmp.container, contentContainerStyle: items3, children: items4 };
  items3 = [tmp.scrollContainer, { paddingBottom: tmp4.bottom + tmp2(587).space.PX_16 }];
  let name;
  ({ paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 });
  const TableRowGroup = tmp8(6081).TableRowGroup;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    name = str;
  }
  const obj5 = { title: "Guild Official Games - " + name, hasIcons: false, children: tmp17Result };
  if (null != stateFromStores) {
    let mapped1;
    if (found.length > 0) {
      mapped1 = found.map((name) => {
        let tmpResult;
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return closure_1(name.id);
          },
          trailing: tmpResult
        };
        const TableRow = first(closure_2[18]).TableRow;
        tmpResult = undefined;
        if (name === name.id) {
          tmpResult = closure_1_12(first(closure_2[19]).Text, { variant: "text-sm/semibold", children: "Selected" });
        }
        return closure_1_12(TableRow, obj, name.id);
      });
    } else {
      mapped1 = closure_12(tmp8(6000).TableRow, { label: "No official games" });
    }
    tmp17Result = mapped1;
  } else {
    tmp17Result = closure_12(tmp8(6000).TableRow, { label: "No guild selected" });
  }
  items4 = [closure_12(TableRowGroup, obj5), , , ];
  const obj6 = { style: obj7, children: closure_12(value(6105).TextInput, { label: "Application ID", value, onChange: tmp5[1] }) };
  obj7 = { padding: nativeDefault.space.PX_12 };
  const TableRowGroup2 = tmp8(6081).TableRowGroup;
  const items5 = [closure_12(closure_7, obj6), , ];
  let TableRow = tmp8(6000).TableRow;
  if (null != getOrFetchApplication) {
    str = getOrFetchApplication.name;
  }
  const obj8 = { title: "Application", hasIcons: false, children: items5 };
  const obj9 = { label: "Name: " + str };
  items5[1] = closure_12(TableRow, obj9);
  const obj10 = { label: "Linked Games: " + str2 };
  const TableRow2 = tmp8(6000).TableRow;
  items5[2] = closure_12(TableRow2, obj10);
  items4[1] = closure_13(TableRowGroup2, obj8);
  const TableRowGroup3 = tmp8(6081).TableRowGroup;
  const TableRow3 = tmp8(6000).TableRow;
  let str4 = "text-feedback-critical";
  const Text = tmp8(4892).Text;
  if (debug.hasConnectionEntrypointUrl) {
    str4 = "text-feedback-positive";
  }
  const obj11 = { variant: "text-sm/semibold", color: str4, children: str5 };
  str5 = "Not set";
  if (debug.hasConnectionEntrypointUrl) {
    str5 = "Set";
  }
  const items6 = [, , ];
  const obj12 = { label: "Connection Entrypoint URL", trailing: closure_12(Text, obj11) };
  items6[0] = closure_12(TableRow3, obj12);
  const TableRow4 = tmp8(6000).TableRow;
  let str6 = "text-muted";
  const Text2 = tmp8(4892).Text;
  if (hasAlreadyLinked) {
    str6 = "text-feedback-positive";
  }
  const obj13 = { variant: "text-sm/semibold", color: str6, children: str7 };
  str7 = "No";
  if (hasAlreadyLinked) {
    str7 = "Yes";
  }
  const obj14 = { title: "Authorization", hasIcons: false, children: items6 };
  const obj15 = { label: "Already Linked", trailing: closure_12(Text2, obj13) };
  items6[1] = closure_12(TableRow4, obj15);
  const obj16 = { style: tmp.buttonRow, children: items7 };
  items7 = [, ];
  const obj17 = {
    disabled: !canStartAuthorization,
    onPress() {
      return react({});
    },
    variant: "primary",
    text: "Start Authorization"
  };
  items7[0] = closure_12(value(5601).Button, obj17);
  const obj18 = { disabled: !canDeauthorize, onPress: deauthorize, variant: "critical-primary", text: "Deauthorize" };
  items7[1] = closure_12(value(5601).Button, obj18);
  items6[2] = closure_13(closure_7, obj16);
  items4[2] = closure_13(TableRowGroup3, obj14);
  let prop;
  if (connectionApp != null) {
    prop = connectionApp.applicationAccountLinkBenefitConfig;
  }
  let tmp15Result = null != prop;
  if (tmp15Result) {
    let tmp17Result2 = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
    const TableRowGroup4 = tmp8(6081).TableRowGroup;
    if (tmp17Result2) {
      const obj19 = { style: obj20, children: closure_12(connectionApp, obj21) };
      obj21 = { source: obj22, style: tmp.rewardImage };
      obj20 = { padding: nativeDefault.space.PX_12 };
      obj22 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
      tmp17Result2 = closure_12(closure_7, obj19);
    }
    const items8 = [tmp17Result2, ];
    let str8 = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
    const TableRow5 = tmp8(6000).TableRow;
    if (str8 == null) {
      str8 = "Unnamed Reward";
    }
    const obj23 = { title: "Reward Configuration", hasIcons: false, children: items8 };
    let _HermesInternal = HermesInternal;
    const obj24 = { label: "Reward: " + str8 };
    items8[1] = closure_12(TableRow5, obj24);
    tmp15Result = closure_13(TableRowGroup4, obj23);
  }
  items4[3] = tmp15Result;
  return closure_13(closure_6, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx");

export default tmp5;