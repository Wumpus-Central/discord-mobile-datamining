// === Module 16984: ConjureProjectsSheet ===

// Module 16984 (ConjureProjectsSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import _modDef3753 from "module_3753" /* 3753 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6651 */;
import ActionSheet from "ActionSheet" /* 6708 */;
import openConjureProject from "openConjureProject" /* 12281 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;

const require = globalThis.__r;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const ConjureBuilderRouteStore = fn(6732);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const VibegrationsProjectsSheet = "VibegrationsProjectsSheet";
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: null };
  const obj2 = { paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { paddingVertical: nativeDefault.space.PX_24 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  const cResult = entry(576).c(21);
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let application_id = entry.project.preview_application_id;
  if (application_id == null) {
    application_id = entry.project.application_id;
  }
  let obj = entry(576);
  const data = entry(6665).useApplication(application_id).data;
  if (cResult[0] !== entry.guildName) {
    let guildName = entry.guildName;
    if (guildName == null) {
      const intl = tmp(1126).intl;
      guildName = intl.string(fallbackGuildId(3753)["3QFps8"]);
    }
    cResult[0] = entry.guildName;
    cResult[1] = guildName;
    let tmp4 = guildName;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === entry.guildName) {
    if (cResult[3] === entry.name) {
      let icon;
      if (data != null) {
        icon = data.icon;
      }
      if (cResult[5] === application_id) {
        if (cResult[6] === icon) {
          let tmp11 = cResult[7];
        }
        if (cResult[8] !== entry.activity) {
          let tmp15;
          if ("building" === entry.activity) {
            tmp15 = closure_6(ActivityIndicator, {});
          }
          class P {
            constructor() {
              if (null != fallbackGuildId) {
                tmp7 = entry;
                tmp8 = closure_1;
                tmp9 = closure_2;
                obj2 = closure_1(closure_2[8]);
                hideAllActionSheetsResult = obj2.hideAllActionSheets();
                tmp11 = closure_0;
                obj3 = closure_0(closure_2[9]);
                rootNavigationRef = obj3.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    state = rootNavigationRef.getState();
                    num = undefined;
                    if (state != null) {
                      routes = state.routes;
                      if (routes != null) {
                        num = routes.length;
                      }
                    }
                    if (num == null) {
                      num = 0;
                    }
                    num2 = 1;
                    if (num > 1) {
                      do {
                        goBackResult = rootNavigationRef.goBack();
                        num = num - 1;
                      } while (num > 1);
                    }
                  }
                }
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[10]);
                openConjureProjectResult = obj.openConjureProject(tmp, entry.projectId);
              }
              return;
            }
          }
          cResult[9] = tmp15;
          let tmp14 = tmp15;
        } else {
          tmp14 = cResult[9];
        }
        if (cResult[10] === entry.projectId) {
          if (cResult[11] === fallbackGuildId) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === tmp6) {
            if (cResult[14] === entry.name) {
              if (cResult[15] === tmp4) {
                if (cResult[16] === tmp11) {
                  if (cResult[17] === tmp14) {
                    if (cResult[18] === tmp18) {
                      if (cResult[19] === tmp19) {
                        let tmp20 = cResult[20];
                      }
                      return tmp20;
                    }
                  }
                }
              }
            }
          }
          let obj2 = { label: null, subLabel: null, accessibilityLabel: null, icon: null, trailing: null, disabled: null, onPress: null };
          class P {
            constructor() {
              if (null != fallbackGuildId) {
                tmp7 = entry;
                tmp8 = closure_1;
                tmp9 = closure_2;
                obj2 = closure_1(closure_2[8]);
                hideAllActionSheetsResult = obj2.hideAllActionSheets();
                tmp11 = closure_0;
                obj3 = closure_0(closure_2[9]);
                rootNavigationRef = obj3.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    state = rootNavigationRef.getState();
                    num = undefined;
                    if (state != null) {
                      routes = state.routes;
                      if (routes != null) {
                        num = routes.length;
                      }
                    }
                    if (num == null) {
                      num = 0;
                    }
                    num2 = 1;
                    if (num > 1) {
                      do {
                        goBackResult = rootNavigationRef.goBack();
                        num = num - 1;
                      } while (num > 1);
                    }
                  }
                }
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[10]);
                openConjureProjectResult = obj.openConjureProject(tmp, entry.projectId);
              }
              return;
            }
          }
          obj2.subLabel = tmp4;
          obj2.accessibilityLabel = tmp6;
          obj2.icon = tmp11;
          obj2.trailing = tmp14;
          obj2.disabled = tmp18;
          obj2.onPress = tmp19;
          const tmp22 = closure_6(tmp(6000).TableRow, obj2);
          cResult[13] = tmp6;
          cResult[14] = entry.name;
          cResult[15] = tmp4;
          cResult[16] = tmp11;
          cResult[17] = tmp14;
          cResult[18] = tmp18;
          cResult[19] = tmp19;
          cResult[20] = tmp22;
          tmp20 = tmp22;
        }
        class P {
          constructor() {
            if (null != fallbackGuildId) {
              tmp7 = entry;
              tmp8 = closure_1;
              tmp9 = closure_2;
              obj2 = closure_1(closure_2[8]);
              hideAllActionSheetsResult = obj2.hideAllActionSheets();
              tmp11 = closure_0;
              obj3 = closure_0(closure_2[9]);
              rootNavigationRef = obj3.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  state = rootNavigationRef.getState();
                  num = undefined;
                  if (state != null) {
                    routes = state.routes;
                    if (routes != null) {
                      num = routes.length;
                    }
                  }
                  if (num == null) {
                    num = 0;
                  }
                  num2 = 1;
                  if (num > 1) {
                    do {
                      goBackResult = rootNavigationRef.goBack();
                      num = num - 1;
                    } while (num > 1);
                  }
                }
              }
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[10]);
              openConjureProjectResult = obj.openConjureProject(tmp, entry.projectId);
            }
            return;
          }
        }
        cResult[10] = entry.projectId;
        cResult[11] = fallbackGuildId;
        cResult[12] = P;
        tmp19 = P;
      }
      let obj3 = { application: null };
      const obj4 = { id: application_id, icon };
      obj3.application = obj4;
      const tmp13 = closure_6(fallbackGuildId(9257), obj3);
      cResult[5] = application_id;
      cResult[6] = icon;
      cResult[7] = tmp13;
      tmp11 = tmp13;
    }
  }
  if (null == entry.guildName) {
    const intl3 = tmp(1126).intl;
    class P {
      constructor() {
        if (null != fallbackGuildId) {
          tmp7 = entry;
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj2 = closure_1(closure_2[8]);
          hideAllActionSheetsResult = obj2.hideAllActionSheets();
          tmp11 = closure_0;
          obj3 = closure_0(closure_2[9]);
          rootNavigationRef = obj3.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              state = rootNavigationRef.getState();
              num = undefined;
              if (state != null) {
                routes = state.routes;
                if (routes != null) {
                  num = routes.length;
                }
              }
              if (num == null) {
                num = 0;
              }
              num2 = 1;
              if (num > 1) {
                do {
                  goBackResult = rootNavigationRef.goBack();
                  num = num - 1;
                } while (num > 1);
              }
            }
          }
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          openConjureProjectResult = obj.openConjureProject(tmp, entry.projectId);
        }
        return;
      }
    }
    let formatToPlainStringResult = intl3.formatToPlainString(fallbackGuildId(3753)["2sBOnp"], { name: null });
    const obj5 = { name: null };
  } else {
    const intl2 = tmp(1126).intl;
    const obj6 = { name: null, server: null };
    class P {
      constructor() {
        if (null != fallbackGuildId) {
          tmp7 = entry;
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj2 = closure_1(closure_2[8]);
          hideAllActionSheetsResult = obj2.hideAllActionSheets();
          tmp11 = closure_0;
          obj3 = closure_0(closure_2[9]);
          rootNavigationRef = obj3.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              state = rootNavigationRef.getState();
              num = undefined;
              if (state != null) {
                routes = state.routes;
                if (routes != null) {
                  num = routes.length;
                }
              }
              if (num == null) {
                num = 0;
              }
              num2 = 1;
              if (num > 1) {
                do {
                  goBackResult = rootNavigationRef.goBack();
                  num = num - 1;
                } while (num > 1);
              }
            }
          }
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[10]);
          openConjureProjectResult = obj.openConjureProject(tmp, entry.projectId);
        }
        return;
      }
    }
    obj6.server = entry.guildName;
    formatToPlainStringResult = intl2.formatToPlainString(fallbackGuildId(3753)["hd+GF1"], obj6);
  }
  cResult[2] = entry.guildName;
  cResult[3] = entry.name;
  cResult[4] = formatToPlainStringResult;
  const tmpResult = entry(6665);
}) : ((entry) => {
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let application_id = entry.project.preview_application_id;
  if (application_id == null) {
    application_id = entry.project.application_id;
  }
  const data = entry(6665).useApplication(application_id).data;
  let guildName = entry.guildName;
  if (guildName == null) {
    const intl = tmp(1126).intl;
    guildName = intl.string(fallbackGuildId(3753)["3QFps8"]);
  }
  if (null == entry.guildName) {
    const intl3 = tmp(1126).intl;
    let obj3 = { name: entry.name };
    let formatToPlainStringResult = intl3.formatToPlainString(fallbackGuildId(3753)["2sBOnp"], obj3);
    let tmp6 = fallbackGuildId;
  } else {
    const intl2 = tmp(1126).intl;
    ({ name: obj2.name, guildName: obj2.server } = entry);
    formatToPlainStringResult = intl2.formatToPlainString(fallbackGuildId(3753)["hd+GF1"], { name: null, server: null });
    tmp6 = fallbackGuildId;
    const obj4 = { name: null, server: null };
  }
  const obj5 = { label: entry.name, subLabel: guildName, accessibilityLabel: formatToPlainStringResult, icon: null, trailing: null, disabled: null, onPress: null };
  const obj9 = { id: application_id, icon: null };
  let icon;
  let obj = entry(6665);
  if (data != null) {
    icon = data.icon;
  }
  obj9.icon = icon;
  obj5.icon = closure_6(tmp6(9257), { application: obj9 });
  let tmp8Result;
  if ("building" === entry.activity) {
    tmp8Result = closure_6(ActivityIndicator, {});
  }
  obj5.trailing = tmp8Result;
  obj5.disabled = null == fallbackGuildId;
  obj5.onPress = function onPress() {
    if (null != fallbackGuildId) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          state = rootNavigationRef.getState();
          let num;
          if (state != null) {
            const routes = state.routes;
            if (routes != null) {
              num = routes.length;
            }
          }
          if (num == null) {
            num = 0;
          }
          if (num > 1) {
            do {
              let goBackResult = rootNavigationRef.goBack();
              num = num - 1;
            } while (num > 1);
          }
        }
      }
      openConjureProject.openConjureProject(tmp, entry.projectId);
    }
  };
  return closure_6(entry(6000).TableRow, obj5);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = fallbackGuildId(576).c(8);
  ({ title, entries, fallbackGuildId } = arg0);
  let num = 0;
  if (0 === entries.length) {
    return null;
  } else {
    if (cResult[0] === entries) {
      if (cResult[1] === fallbackGuildId) {
        if (cResult[5] === cResult[2]) {
          if (cResult[6] === title) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
        const obj2 = { title, hasIcons: true, children: cResult[2] };
        const tmp10 = closure_6(fallbackGuildId(6081).TableRowGroup, obj2);
        cResult[5] = cResult[2];
        cResult[6] = title;
        cResult[7] = tmp10;
        tmp8 = tmp10;
      }
    }
    if (cResult[3] !== fallbackGuildId) {
      const fn = function n(entry) {
        return timestampProducer(closure_10, { entry, fallbackGuildId }, entry.projectId);
      };
      cResult[3] = fallbackGuildId;
      cResult[4] = fn;
      let tmp5 = fn;
    } else {
      tmp5 = cResult[4];
    }
    const mapped = entries.map(tmp5);
    cResult[num] = entries;
    cResult[1] = fallbackGuildId;
    num = 2;
    cResult[2] = mapped;
  }
  const obj = fallbackGuildId(576);
}) : ((arg0) => {
  ({ entries, fallbackGuildId: require } = arg0);
  let tmp2 = null;
  if (0 !== entries.length) {
    const obj = { title: tmp, hasIcons: true, children: entries.map((entry) => timestampProducer(closure_10, { entry, fallbackGuildId }, entry.projectId)) };
    tmp2 = closure_6(TableRowGroup.TableRowGroup, obj);
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ title, description, guilds } = arg0);
  let num = 0;
  if (0 === guilds.length) {
    return null;
  } else if (cResult[0] !== guilds) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(guild) {
        let obj = { label: guild.name, icon: null, arrow: true, onPress: null };
        let obj2 = { guild, size: guild(5978).GuildIconSizes.SMALL_32 };
        obj.icon = closure_6(closure_1(5978), obj2);
        obj.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              state = rootNavigationRef.getState();
              let num;
              if (state != null) {
                const routes = state.routes;
                if (routes != null) {
                  num = routes.length;
                }
              }
              if (num == null) {
                num = 0;
              }
              if (num > 1) {
                do {
                  let goBackResult = rootNavigationRef.goBack();
                  num = num - 1;
                } while (num > 1);
              }
            }
          }
          const obj2 = require("RootNavigationRef");
          require("openConjureProject").openConjureProject(guild.id, undefined);
        };
        return closure_6(guild(6000).TableRow, obj, guild.id);
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = guilds.map(tmp6);
    cResult[num] = guilds;
    num = 1;
    cResult[1] = mapped;
  } else {
    if (cResult[3] === description) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === title) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
    let obj2 = { title, description, hasIcons: true, children: cResult[1] };
    const tmp11 = timestampProducer(TableRowGroup.TableRowGroup, obj2);
    cResult[3] = description;
    cResult[4] = cResult[1];
    cResult[5] = title;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
}) : ((guilds) => {
  guilds = guilds.guilds;
  let tmp3 = null;
  if (0 !== guilds.length) {
    let obj = {
      title: tmp,
      description: tmp2,
      hasIcons: true,
      children: guilds.map((guild) => {
          let obj = { label: guild.name, icon: null, arrow: true, onPress: null };
          let obj2 = { guild, size: guild(5978).GuildIconSizes.SMALL_32 };
          obj.icon = closure_6(closure_1(5978), obj2);
          obj.onPress = function onPress() {
            ActionSheetActionCreatorsDefault.hideAllActionSheets();
            const rootNavigationRef = require("RootNavigationRef").getRootNavigationRef();
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                state = rootNavigationRef.getState();
                let num;
                if (state != null) {
                  const routes = state.routes;
                  if (routes != null) {
                    num = routes.length;
                  }
                }
                if (num == null) {
                  num = 0;
                }
                if (num > 1) {
                  do {
                    let goBackResult = rootNavigationRef.goBack();
                    num = num - 1;
                  } while (num > 1);
                }
              }
            }
            const obj2 = require("RootNavigationRef");
            require("openConjureProject").openConjureProject(guild.id, undefined);
          };
          return closure_6(guild(6000).TableRow, obj, guild.id);
        })
    };
    tmp3 = timestampProducer(TableRowGroup.TableRowGroup, obj);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Stack = stateFromStores1;
  let items3 = dependencyMap;
  const cResult = stateFromStores1(576).c(46);
  state = closure_9(0);
  const obj = stateFromStores1(576);
  const conjureProjects = stateFromStores1(16985).useConjureProjects(VibegrationsProjectsSheet);
  const obj2 = stateFromStores1(16985);
  const conjureEligibleGuilds = stateFromStores1(16985).useConjureEligibleGuilds(VibegrationsProjectsSheet);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    const fn = function p() {
      return projectsFetchState.getProjectsFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp2 = items;
    tmp3 = fn;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const obj3 = stateFromStores1(16985);
  const stateFromStores = Stack(504).useStateFromStores(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedGuildStore];
    class P {
      constructor() {
        return closure_1_4.getLastSelectedGuildId();
      }
    }
    cResult[2] = items1;
    cResult[3] = P;
    let tmp7 = P;
    let tmp6 = items1;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const StackResult = Stack(504);
  stateFromStores1 = Stack(504).useStateFromStores(tmp6, tmp7);
  if (0 === conjureProjects.length) {
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const _Symbol5 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
            class P {
              constructor() {
                return closure_1_4.getLastSelectedGuildId();
              }
            }
            obj4.children = obj13.string(_modDef3753.DJAPMO);
            const tmp49 = closure_6(Stack(4892).Text, obj4);
            cResult[8] = tmp49;
            let tmp46 = tmp49;
          } else {
            tmp46 = cResult[8];
          }
          class P {
            constructor() {
              return closure_1_4.getLastSelectedGuildId();
            }
          }
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
            class P {
              constructor() {
                return closure_1_4.getLastSelectedGuildId();
              }
            }
            obj5.text = obj15.string(_modDef3753["WFJ/vb"]);
            obj5.onPress = function onPress() {
              return stateFromStores1(dependencyMap[25]).listProjects();
            };
            const tmp53 = closure_6(Stack(5601).Button, obj5);
            cResult[9] = tmp53;
            let tmp50 = tmp53;
          } else {
            tmp50 = cResult[9];
          }
          if (cResult[10] !== state.state) {
            const obj6 = { style: state.state, align: "center", spacing: null, children: null };
            class P {
              constructor() {
                return closure_1_4.getLastSelectedGuildId();
              }
            }
            obj6.spacing = nativeDefault.space.PX_12;
            const items2 = [tmp46, tmp50];
            obj6.children = items2;
            const tmp56 = closure_7(Stack(5600).Stack, obj6);
            cResult[10] = state.state;
            cResult[11] = tmp56;
          }
        } else {
          const _Symbol8 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-md/semibold", color: "text-strong", children: null };
            class P {
              constructor() {
                return closure_1_4.getLastSelectedGuildId();
              }
            }
            obj7.children = obj11.string(_modDef3753.snY8uu);
            const tmp45 = closure_6(Stack(4892).Text, obj7);
            cResult[12] = tmp45;
          }
          class P {
            constructor() {
              return closure_1_4.getLastSelectedGuildId();
            }
          }
        }
      }
    }
    const _Symbol6 = Symbol;
    class P {
      constructor() {
        return closure_1_4.getLastSelectedGuildId();
      }
    }
    if (tmp58 === Symbol.for("react.memo_cache_sentinel")) {
      const tmp62 = closure_6(ActivityIndicator, {});
      class P {
        constructor() {
          return closure_1_4.getLastSelectedGuildId();
        }
      }
      cResult[4] = tmp62;
      let tmp59 = tmp62;
    } else {
      tmp59 = cResult[4];
    }
    const _Symbol7 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { variant: "text-sm/normal", color: "text-muted", children: null };
      class P {
        constructor() {
          return closure_1_4.getLastSelectedGuildId();
        }
      }
      obj8.children = obj18.string(_modDef3753["XE+JXX"]);
      const tmp66 = closure_6(Stack(4892).Text, obj8);
      cResult[5] = tmp66;
      let tmp63 = tmp66;
    } else {
      tmp63 = cResult[5];
    }
    if (cResult[6] !== state.state) {
      Stack = Stack(5600).Stack;
      const obj9 = { style: null, align: "center", spacing: null, children: null };
      class P {
        constructor() {
          return closure_1_4.getLastSelectedGuildId();
        }
      }
      obj9.spacing = nativeDefault.space.PX_8;
      items3 = [tmp59, tmp63];
      obj9.children = items3;
      const tmp70 = closure_7(Stack, obj9);
      state = state.state;
      cResult[6] = state;
      cResult[7] = tmp70;
    }
  } else {
    if (cResult[22] === conjureEligibleGuilds) {
      if (cResult[23] === stateFromStores1) {
        let tmp10 = cResult[24];
      }
      if (cResult[25] !== conjureProjects) {
        const _Symbol = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor(arg0) {
              return "idle" !== arg0.activity;
            }
          }
          cResult[27] = L;
          class P {
            constructor() {
              return closure_1_4.getLastSelectedGuildId();
            }
          }
        } else {
          class L {
            constructor(arg0) {
              return "idle" !== arg0.activity;
            }
          }
        }
        class P {
          constructor() {
            return closure_1_4.getLastSelectedGuildId();
          }
        }
        cResult[25] = conjureProjects;
        cResult[26] = tmp16;
      } else {
        class L {
          constructor(arg0) {
            return "idle" !== arg0.activity;
          }
        }
        if (cResult[28] !== conjureProjects) {
          class L {
            constructor(arg0) {
              return "idle" !== arg0.activity;
            }
          }
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            cResult[30] = M;
            class P {
              constructor() {
                return closure_1_4.getLastSelectedGuildId();
              }
            }
          } else {
            class M {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
          }
          class P {
            constructor() {
              return closure_1_4.getLastSelectedGuildId();
            }
          }
          cResult[28] = conjureProjects;
          cResult[29] = tmp19;
        } else {
          class M {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
          const _Symbol2 = Symbol;
          class P {
            constructor() {
              return closure_1_4.getLastSelectedGuildId();
            }
          }
          if (cResult[32] === tmp15) {
            class M {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            const _Symbol3 = Symbol;
            class P {
              constructor() {
                return closure_1_4.getLastSelectedGuildId();
              }
            }
            if (cResult[36] === tmp10) {
              class M {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
              const _Symbol4 = Symbol;
              class P {
                constructor() {
                  return closure_1_4.getLastSelectedGuildId();
                }
              }
              if (cResult[40] !== conjureEligibleGuilds) {
                class M {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
                const obj10 = { title: null, guilds: null };
                class P {
                  constructor() {
                    return closure_1_4.getLastSelectedGuildId();
                  }
                }
                obj10.guilds = conjureEligibleGuilds;
                const tmp36 = closure_6(closure_12, obj10);
                cResult[40] = conjureEligibleGuilds;
                cResult[41] = tmp36;
              } else {
                class M {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
              }
              if (cResult[42] === tmp29) {
                class M {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
              }
              const obj12 = { spacing: nativeDefault.space.PX_24, children: null };
              const items4 = [tmp23, tmp29, tmp34];
              obj12.children = items4;
              const tmp40 = closure_7(Stack(5600).Stack, obj12);
              cResult[42] = tmp29;
              cResult[43] = tmp34;
              cResult[44] = tmp23;
              cResult[45] = tmp40;
            }
            const obj14 = { title: tmp28, entries: tmp18, fallbackGuildId: tmp10 };
            const tmp32 = closure_6(closure_11, obj14);
            cResult[36] = tmp10;
            cResult[37] = tmp18;
            cResult[38] = tmp32;
          }
          const obj16 = { title: tmp22, entries: tmp15, fallbackGuildId: tmp10 };
          const tmp26 = closure_6(closure_11, obj16);
          cResult[32] = tmp15;
          cResult[33] = tmp10;
          cResult[34] = tmp26;
        }
      }
    }
    const found = conjureEligibleGuilds.find((id) => id.id === stateFromStores1);
    class P {
      constructor() {
        return closure_1_4.getLastSelectedGuildId();
      }
    }
    if (found != null) {
      class M {
        constructor(arg0) {
          return "idle" === arg0.activity;
        }
      }
    }
    if (tmp13 == null) {
      class M {
        constructor(arg0) {
          return "idle" === arg0.activity;
        }
      }
      if (tmp14 != null) {
        class M {
          constructor(arg0) {
            return "idle" === arg0.activity;
          }
        }
      }
      class P {
        constructor() {
          return closure_1_4.getLastSelectedGuildId();
        }
      }
    }
    if (tmp13 == null) {
      class M {
        constructor(arg0) {
          return "idle" === arg0.activity;
        }
      }
    }
    cResult[22] = conjureEligibleGuilds;
    cResult[23] = stateFromStores1;
    cResult[24] = tmp13;
    tmp10 = tmp13;
  }
  const StackResult1 = Stack(504);
}) : (() => {
  const tmp = closure_9(0);
  const conjureProjects = require("useConjureProjects").useConjureProjects(VibegrationsProjectsSheet);
  const obj = require("useConjureProjects");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(VibegrationsProjectsSheet);
  const obj2 = require("useConjureProjects");
  const items = [ConjureProjectStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => projectsFetchState.getProjectsFetchState());
  const obj3 = require("initialize");
  const items1 = [SelectedGuildStore];
  _require = require("initialize").useStateFromStores(items1, () => lastSelectedGuildId.getLastSelectedGuildId());
  if (0 === conjureProjects.length) {
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj5 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_12, children: null };
          const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp2(1126).intl;
          obj6.children = intl6.string(_modDef3753.DJAPMO);
          const items2 = [closure_6(tmp2(4892).Text, obj6), ];
          const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl7 = tmp2(1126).intl;
          obj7.text = intl7.string(_modDef3753["WFJ/vb"]);
          obj7.onPress = function onPress() {
            return closure_0(dependencyMap[25]).listProjects();
          };
          items2[1] = closure_6(tmp2(5601).Button, obj7);
          obj5.children = items2;
          let tmp28Result = closure_7(tmp2(5600).Stack, obj5);
        } else {
          const obj8 = { spacing: nativeDefault.space.PX_16, children: null };
          const obj9 = { spacing: nativeDefault.space.PX_4, children: null };
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl9 = tmp2(1126).intl;
          obj10.children = intl9.string(_modDef3753.snY8uu);
          const items3 = [closure_6(tmp2(4892).Text, obj10), ];
          if (0 === conjureEligibleGuilds.length) {
            const intl5 = tmp2(1126).intl;
            let stringResult = intl5.string(_modDef3753.f5o5pk);
          } else {
            const intl4 = tmp2(1126).intl;
            const obj11 = { count: conjureEligibleGuilds.length };
            stringResult = intl4.formatToPlainString(_modDef3753.NiXcSi, obj11);
          }
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
          items3[1] = closure_6(tmp2(4892).Text, obj12);
          obj9.children = items3;
          const items4 = [closure_7(tmp2(5600).Stack, obj9), ];
          const obj13 = { guilds: conjureEligibleGuilds };
          items4[1] = closure_6(closure_12, obj13);
          obj8.children = items4;
          tmp28Result = closure_7(tmp2(5600).Stack, obj8);
        }
      }
      return tmp28Result;
    }
    const obj14 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: null };
    const items5 = [closure_6(ActivityIndicator, {}), ];
    const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = tmp2(1126).intl;
    obj15.children = intl8.string(_modDef3753["XE+JXX"]);
    items5[1] = closure_6(tmp2(4892).Text, obj15);
    obj14.children = items5;
    tmp28Result = closure_7(tmp2(5600).Stack, obj14);
  } else {
    const found = conjureEligibleGuilds.find((id) => id.id === closure_0);
    let id;
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      const first = conjureEligibleGuilds[0];
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      id = id1;
    }
    if (id == null) {
      id = null;
    }
    const found1 = conjureProjects.filter((activity) => "idle" !== activity.activity);
    const found2 = conjureProjects.filter((activity) => "idle" === activity.activity);
    const obj16 = { spacing: nativeDefault.space.PX_24, children: null };
    const obj17 = { title: null, entries: null, fallbackGuildId: null };
    const intl = tmp2(1126).intl;
    obj17.title = intl.string(_modDef3753.DnsyEc);
    obj17.entries = found1;
    obj17.fallbackGuildId = id;
    const items6 = [closure_6(closure_11, obj17), , ];
    const obj18 = { title: null, entries: null, fallbackGuildId: null };
    const intl2 = tmp2(1126).intl;
    obj18.title = intl2.string(_modDef3753.p8lFfK);
    obj18.entries = found2;
    obj18.fallbackGuildId = id;
    items6[1] = closure_6(closure_11, obj18);
    const obj19 = { title: null, guilds: null };
    const intl3 = tmp2(1126).intl;
    obj19.title = intl3.string(_modDef3753.sFiGNz);
    obj19.guilds = conjureEligibleGuilds;
    items6[2] = closure_6(closure_12, obj19);
    obj16.children = items6;
    return closure_7(tmp2(5600).Stack, obj16);
  }
  const obj4 = require("initialize");
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp5 = closure_9(bottom);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      require("ConjureActionCreators").listProjects();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3753.uk6jhJ);
    const tmp10 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== bottom) {
    const obj3 = { bottom };
    cResult[2] = bottom;
    cResult[3] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = timestampProducer(closure_13, {});
    cResult[4] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp5.scrollContent) {
    if (cResult[6] === tmp11) {
      let tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj4 = { scrollable: true, header: tmp8, children: timestampProducer(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: tmp5.scrollContent, scrollIndicatorInsets: tmp11, children: tmp12 }) };
  const tmp17 = timestampProducer(ActionSheet.ActionSheet, obj4);
  cResult[5] = tmp5.scrollContent;
  cResult[6] = tmp11;
  cResult[7] = tmp17;
  tmp16 = tmp17;
  const obj5 = { contentContainerStyle: tmp5.scrollContent, scrollIndicatorInsets: tmp11, children: tmp12 };
}) : (() => {
  const bottom = useSafeAreaInsetsDefault().bottom;
  useMountEffectDefault(() => {
    require("ConjureActionCreators").listProjects();
  });
  const obj = { scrollable: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3753.uk6jhJ);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const tmp = closure_9(bottom);
  obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: closure_9(bottom).scrollContent, scrollIndicatorInsets: { bottom }, children: timestampProducer(closure_13, {}) });
  return timestampProducer(ActionSheet.ActionSheet, obj);
});