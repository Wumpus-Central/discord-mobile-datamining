// === Module 14057: ConjureProjectsSheet ===

// Module 14057 (ConjureProjectsSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3830 from "module_3830" /* 3830 */;
import RootNavigationRef from "RootNavigationRef" /* 5133 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5192 */;
import useMountEffectDefault from "useMountEffect" /* 5245 */;
import BottomSheetModal from "BottomSheetModal" /* 5251 */;
import TableRowGroup from "TableRowGroup" /* 6966 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7225 */;
import ActionSheet from "ActionSheet" /* 7275 */;
import ConjureCreateSheet from "ConjureCreateSheet" /* 11677 */;
import openConjureProject from "openConjureProject" /* 13412 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4992 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
const ConjureCreateSheetDefault = ConjureCreateSheet;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const ConjureBuilderRouteStore = fn(7298);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ConjureProjectsSheet = "ConjureProjectsSheet";
const createStyles = fn(4966);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: null };
  const obj2 = { paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { paddingVertical: nativeDefault.space.PX_24 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(entry) {
  const cResult = entry(576).c(17);
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  if (cResult[0] !== entry) {
    const result = tmp(11679).describeConjureProjectRow(entry);
    cResult[0] = entry;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = tmp(11679);
  } else {
    tmp4 = cResult[1];
  }
  ({ serverName, label } = tmp4);
  if (cResult[2] !== entry.project) {
    let obj2 = { project: entry.project, size: "list" };
    const tmp9 = closure_6(fallbackGuildId(11763), obj2);
    cResult[2] = entry.project;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== entry.activity) {
    let tmp11;
    if ("building" === entry.activity) {
      tmp11 = closure_6(ActivityIndicator, {});
    }
    cResult[4] = entry.activity;
    cResult[5] = tmp11;
    let tmp10 = tmp11;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === entry.projectId) {
    if (cResult[7] === fallbackGuildId) {
      let tmp15 = cResult[8];
    }
    if (cResult[9] === label) {
      if (cResult[10] === entry.name) {
        if (cResult[11] === serverName) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp10) {
              if (cResult[14] === tmp14) {
                if (cResult[15] === tmp15) {
                  let tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
          }
        }
      }
    }
    let obj3 = { label: entry.name, subLabel: serverName, accessibilityLabel: label, icon: tmp6, trailing: tmp10, disabled: tmp14, onPress: tmp15 };
    const tmp18 = closure_6(tmp(6882).TableRow, obj3);
    cResult[9] = label;
    cResult[10] = entry.name;
    cResult[11] = serverName;
    cResult[12] = tmp6;
    cResult[13] = tmp10;
    cResult[14] = tmp14;
    cResult[15] = tmp15;
    cResult[16] = tmp18;
    tmp16 = tmp18;
  }
  const fn = function j() {
    if (null != fallbackGuildId) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const state = rootNavigationRef.getState();
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
  cResult[6] = entry.projectId;
  cResult[7] = fallbackGuildId;
  cResult[8] = fn;
  tmp15 = fn;
  let obj = entry(576);
}) : (function ProjectRow(entry) {
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  const result = entry(11679).describeConjureProjectRow(entry);
  ({ serverName, label } = result);
  let obj2 = { label: entry.name, subLabel: serverName, accessibilityLabel: label, icon: closure_6(fallbackGuildId(11763), { project: entry.project, size: "list" }), trailing: null, disabled: null, onPress: null };
  let tmp2Result;
  if ("building" === entry.activity) {
    tmp2Result = closure_6(ActivityIndicator, {});
  }
  obj2.trailing = tmp2Result;
  obj2.disabled = null == fallbackGuildId;
  obj2.onPress = function onPress() {
    if (null != fallbackGuildId) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const state = rootNavigationRef.getState();
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
  return closure_6(entry(6882).TableRow, obj2);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectGroup(arg0) {
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
        const tmp10 = closure_6(fallbackGuildId(6966).TableRowGroup, obj2);
        cResult[5] = cResult[2];
        cResult[6] = title;
        cResult[7] = tmp10;
        tmp8 = tmp10;
      }
    }
    if (cResult[3] !== fallbackGuildId) {
      const fn = function l(entry) {
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
}) : (function ProjectGroup(arg0) {
  ({ entries, fallbackGuildId: require } = arg0);
  let tmp2 = null;
  if (0 !== entries.length) {
    const obj = { title: tmp, hasIcons: true, children: entries.map((entry) => timestampProducer(closure_10, { entry, fallbackGuildId }, entry.projectId)) };
    tmp2 = closure_6(TableRowGroup.TableRowGroup, obj);
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildGroup(arg0) {
  const cResult = forMeGuildId(576).c(10);
  ({ title, description, guilds, forMeGuildId } = arg0);
  let tmp4 = null;
  if (undefined !== forMeGuildId) {
    tmp4 = forMeGuildId;
  }
  forMeGuildId = tmp4;
  if (0 === guilds.length) {
    if (null == tmp4) {
      return null;
    }
  }
  if (cResult[0] !== tmp4) {
    let tmp6 = null;
    if (null != tmp4) {
      let obj2 = { label: null, icon: null, arrow: true, onPress: null };
      const intl = tmp(1128).intl;
      obj2.label = intl.string(_modDef3830.UPLaGM);
      const obj3 = { IconComponent: tmp(11751).UserIcon };
      obj2.icon = closure_6(tmp(6882).TableRow.Icon, obj3);
      obj2.onPress = function onPress() {
        const obj2 = {
          key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
          content: timestampProducer(ConjureCreateSheetDefault, {
            guildId: forMeGuildId,
            initialInstallScope: "user",
            onCreated(projectId, id) {
              closure_1_1(5192).hideAllActionSheets();
              const obj = closure_1_1(5192);
              const rootNavigationRef = forMeGuildId(5133).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const state = rootNavigationRef.getState();
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
              const obj2 = forMeGuildId(5133);
              forMeGuildId(13412).openConjureProject(id, projectId);
            }
          })
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      };
      tmp6 = closure_6(tmp(6882).TableRow, obj2);
    }
    cResult[0] = tmp4;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== guilds) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function i(guild) {
        let obj = { label: guild.name, icon: null, arrow: true, onPress: null };
        let obj2 = { guild, size: guild(6862).GuildIconSizes.SMALL_32 };
        obj.icon = closure_6(closure_1(6862), obj2);
        obj.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
          const rootNavigationRef = forMeGuildId(5133).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const state = rootNavigationRef.getState();
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
          const obj2 = forMeGuildId(5133);
          forMeGuildId(13412).openConjureProject(guild.id, undefined);
        };
        return closure_6(guild(6882).TableRow, obj, guild.id);
      };
      cResult[4] = fn;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[4];
    }
    const mapped = guilds.map(tmp11);
    cResult[2] = guilds;
    cResult[3] = mapped;
  } else {
    if (cResult[5] === description) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === title) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
    }
    const obj4 = { title, description, hasIcons: true, children: null };
    const items = [tmp5, cResult[3]];
    obj4.children = items;
    const tmp16 = closure_7(tmp(6966).TableRowGroup, obj4);
    cResult[5] = description;
    cResult[6] = tmp5;
    cResult[7] = cResult[3];
    cResult[8] = title;
    cResult[9] = tmp16;
    tmp14 = tmp16;
  }
  let obj = forMeGuildId(576);
}) : (function GuildGroup(arg0) {
  ({ guilds, forMeGuildId } = arg0);
  ({ title, description } = arg0);
  if (forMeGuildId === undefined) {
    forMeGuildId = null;
  }
  if (0 !== guilds.length) {
    let obj = { title, description, hasIcons: true, children: null };
    let tmp5 = null;
    if (null != forMeGuildId) {
      let obj2 = { label: null, icon: null, arrow: true, onPress: null };
      const intl = tmp3(1128).intl;
      obj2.label = intl.string(_modDef3830.UPLaGM);
      const obj3 = { IconComponent: tmp3(11751).UserIcon };
      obj2.icon = closure_6(tmp3(6882).TableRow.Icon, obj3);
      obj2.onPress = function onPress() {
        let obj2 = {
          key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
          content: timestampProducer(ConjureCreateSheetDefault, {
            guildId: forMeGuildId,
            initialInstallScope: "user",
            onCreated(projectId, id) {
              closure_1_1(5192).hideAllActionSheets();
              const obj = closure_1_1(5192);
              const rootNavigationRef = forMeGuildId(5133).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const state = rootNavigationRef.getState();
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
              const obj2 = forMeGuildId(5133);
              forMeGuildId(13412).openConjureProject(id, projectId);
            }
          })
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      };
      tmp5 = closure_6(tmp3(6882).TableRow, obj2);
    }
    const items = [
      tmp5,
      guilds.map((guild) => {
          let obj = { label: guild.name, icon: null, arrow: true, onPress: null };
          let obj2 = { guild, size: guild(6862).GuildIconSizes.SMALL_32 };
          obj.icon = closure_6(closure_1(6862), obj2);
          obj.onPress = function onPress() {
            ActionSheetActionCreatorsDefault.hideAllActionSheets();
            const rootNavigationRef = forMeGuildId(5133).getRootNavigationRef();
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const state = rootNavigationRef.getState();
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
            const obj2 = forMeGuildId(5133);
            forMeGuildId(13412).openConjureProject(guild.id, undefined);
          };
          return closure_6(guild(6882).TableRow, obj, guild.id);
        })
    ];
    obj.children = items;
    let tmp = closure_7(forMeGuildId(6966).TableRowGroup, obj);
  } else {
    tmp = null;
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function SheetBody() {
  let Stack = stateFromStores1;
  let items5 = dependencyMap;
  const cResult = stateFromStores1(576).c(47);
  let state = closure_9(0);
  const obj = stateFromStores1(576);
  const conjureProjects = stateFromStores1(11679).useConjureProjects(ConjureProjectsSheet);
  const obj2 = stateFromStores1(11679);
  const conjureEligibleGuilds = stateFromStores1(11679).useConjureEligibleGuilds(ConjureProjectsSheet);
  const obj3 = stateFromStores1(11679);
  const conjureForMeGuildId = stateFromStores1(11679).useConjureForMeGuildId(ConjureProjectsSheet);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    const fn = function h() {
      return projectsFetchState.getProjectsFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const obj4 = stateFromStores1(11679);
  const stateFromStores = Stack(504).useStateFromStores(tmp3, tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedGuildStore];
    const fn2 = function y() {
      return lastSelectedGuildId.getLastSelectedGuildId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const StackResult = Stack(504);
  stateFromStores1 = Stack(504).useStateFromStores(tmp7, tmp8);
  if (0 === conjureProjects.length) {
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const _Symbol5 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl4 = Stack(1128).intl;
            obj5.children = intl4.string(_modDef3830.DJAPMO);
            const tmp75 = closure_6(Stack(5216).Text, obj5);
            cResult[8] = tmp75;
            let tmp72 = tmp75;
          } else {
            tmp72 = cResult[8];
          }
          const _Symbol6 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
            const intl5 = Stack(1128).intl;
            obj6.text = intl5.string(_modDef3830["WFJ/vb"]);
            obj6.onPress = function onPress() {
              return stateFromStores1(dependencyMap[26]).listProjects();
            };
            const tmp79 = closure_6(Stack(5226).Button, obj6);
            cResult[9] = tmp79;
            let tmp76 = tmp79;
          } else {
            tmp76 = cResult[9];
          }
          if (cResult[10] !== state.state) {
            const obj8 = { style: state.state, align: "center", spacing: nativeDefault.space.PX_12, children: null };
            const items2 = [tmp72, tmp76];
            obj8.children = items2;
            const tmp83 = closure_7(Stack(5957).Stack, obj8);
            cResult[10] = state.state;
            cResult[11] = tmp83;
          }
        } else {
          const _Symbol9 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
            const intl = Stack(1128).intl;
            obj10.children = intl.string(_modDef3830.snY8uu);
            const tmp53 = closure_6(Stack(5216).Text, obj10);
            cResult[12] = tmp53;
            let tmp50 = tmp53;
          } else {
            tmp50 = cResult[12];
          }
          if (cResult[13] !== conjureEligibleGuilds.length) {
            if (0 === conjureEligibleGuilds.length) {
              const intl3 = Stack(1128).intl;
              let stringResult = intl3.string(_modDef3830.f5o5pk);
            } else {
              const intl2 = Stack(1128).intl;
              const obj12 = { count: conjureEligibleGuilds.length };
              stringResult = intl2.formatToPlainString(_modDef3830.NiXcSi, obj12);
            }
            cResult[13] = conjureEligibleGuilds.length;
            cResult[14] = stringResult;
          } else {
            if (cResult[15] !== cResult[14]) {
              const obj13 = { spacing: nativeDefault.space.PX_4, children: null };
              const items3 = [tmp50, ];
              const obj14 = { variant: "text-sm/normal", color: "text-muted", children: tmp54 };
              items3[1] = closure_6(Stack(5216).Text, obj14);
              obj13.children = items3;
              const tmp63 = closure_7(Stack(5957).Stack, obj13);
              cResult[15] = tmp54;
              cResult[16] = tmp63;
              let tmp59 = tmp63;
            } else {
              tmp59 = cResult[16];
            }
            if (cResult[17] === conjureEligibleGuilds) {
              if (cResult[18] === conjureForMeGuildId) {
                let tmp64 = cResult[19];
              }
              if (cResult[20] === tmp59) {
                if (cResult[21] === tmp64) {
                  let tmp68 = cResult[22];
                }
                return tmp68;
              }
              const obj15 = { spacing: nativeDefault.space.PX_16, children: null };
              const items4 = [tmp59, tmp64];
              obj15.children = items4;
              const tmp71 = closure_7(Stack(5957).Stack, obj15);
              cResult[20] = tmp59;
              cResult[21] = tmp64;
              cResult[22] = tmp71;
              tmp68 = tmp71;
            }
            const obj16 = { guilds: conjureEligibleGuilds, forMeGuildId: conjureForMeGuildId };
            const tmp67 = closure_6(closure_12, obj16);
            cResult[17] = conjureEligibleGuilds;
            cResult[18] = conjureForMeGuildId;
            cResult[19] = tmp67;
            tmp64 = tmp67;
          }
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp88 = closure_6(ActivityIndicator, {});
      cResult[4] = tmp88;
      let tmp85 = tmp88;
    } else {
      tmp85 = cResult[4];
    }
    const _Symbol8 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = Stack(1128).intl;
      obj17.children = intl6.string(_modDef3830["XE+JXX"]);
      const tmp92 = closure_6(Stack(5216).Text, obj17);
      cResult[5] = tmp92;
      let tmp89 = tmp92;
    } else {
      tmp89 = cResult[5];
    }
    if (cResult[6] !== state.state) {
      Stack = Stack(5957).Stack;
      const obj18 = { style: state.state, align: "center", spacing: nativeDefault.space.PX_8, children: null };
      items5 = [tmp85, tmp89];
      obj18.children = items5;
      const tmp96 = closure_7(Stack, obj18);
      state = state.state;
      cResult[6] = state;
      cResult[7] = tmp96;
    }
  } else {
    if (cResult[23] === conjureEligibleGuilds) {
      if (cResult[24] === stateFromStores1) {
        let tmp11 = cResult[25];
      }
      if (cResult[26] !== conjureProjects) {
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(arg0) {
              return "idle" !== arg0.activity;
            }
          }
          cResult[28] = B;
        } else {
          class B {
            constructor(arg0) {
              return "idle" !== arg0.activity;
            }
          }
        }
        const found = conjureProjects.filter(B);
        cResult[26] = conjureProjects;
        cResult[27] = found;
      } else {
        class B {
          constructor(arg0) {
            return "idle" !== arg0.activity;
          }
        }
        if (cResult[29] !== conjureProjects) {
          class B {
            constructor(arg0) {
              return "idle" !== arg0.activity;
            }
          }
          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            cResult[31] = U;
          } else {
            class U {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
          }
          const found1 = conjureProjects.filter(U);
          cResult[29] = conjureProjects;
          cResult[30] = found1;
        } else {
          class U {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            const stringResult1 = obj7.string(_modDef3830.DnsyEc);
            cResult[32] = stringResult1;
            const tmp25 = stringResult1;
          } else {
            class U {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
          }
          if (cResult[33] === tmp17) {
            class U {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
              class U {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
              const stringResult2 = obj9.string(_modDef3830.p8lFfK);
              cResult[36] = stringResult2;
              const tmp32 = stringResult2;
            } else {
              class U {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
            }
            if (cResult[37] === tmp11) {
              class U {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
              const _Symbol4 = Symbol;
              if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                class U {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
                const stringResult3 = obj11.string(_modDef3830.sFiGNz);
                cResult[40] = stringResult3;
                const tmp39 = stringResult3;
              } else {
                class U {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
              }
              if (cResult[41] !== conjureEligibleGuilds) {
                class U {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
                const obj19 = { title: tmp39, guilds: conjureEligibleGuilds };
                const tmp44 = closure_6(closure_12, obj19);
                cResult[41] = conjureEligibleGuilds;
                cResult[42] = tmp44;
              } else {
                class U {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
              }
              if (cResult[43] === tmp35) {
                class U {
                  constructor(arg0) {
                    return "idle" === arg0.activity;
                  }
                }
              }
              const obj20 = { spacing: nativeDefault.space.PX_24, children: null };
              const items6 = [tmp28, tmp35, tmp42];
              obj20.children = items6;
              const tmp48 = closure_7(Stack(5957).Stack, obj20);
              cResult[43] = tmp35;
              cResult[44] = tmp42;
              cResult[45] = tmp28;
              cResult[46] = tmp48;
            }
            const obj21 = { title: tmp32, entries: tmp21, fallbackGuildId: tmp11 };
            const tmp38 = closure_6(closure_11, obj21);
            cResult[37] = tmp11;
            cResult[38] = tmp21;
            cResult[39] = tmp38;
          }
          const obj22 = { title: tmp25, entries: tmp17, fallbackGuildId: tmp11 };
          const tmp31 = closure_6(closure_11, obj22);
          cResult[33] = tmp17;
          cResult[34] = tmp11;
          cResult[35] = tmp31;
        }
      }
    }
    const found2 = conjureEligibleGuilds.find((id) => id.id === stateFromStores1);
    let tmp14;
    if (found2 != null) {
      class U {
        constructor(arg0) {
          return "idle" === arg0.activity;
        }
      }
    }
    if (tmp14 == null) {
      class U {
        constructor(arg0) {
          return "idle" === arg0.activity;
        }
      }
      if (tmp15 != null) {
        class U {
          constructor(arg0) {
            return "idle" === arg0.activity;
          }
        }
      }
      tmp14 = tmp16;
    }
    if (tmp14 == null) {
      class U {
        constructor(arg0) {
          return "idle" === arg0.activity;
        }
      }
    }
    cResult[23] = conjureEligibleGuilds;
    cResult[24] = stateFromStores1;
    cResult[25] = tmp14;
    tmp11 = tmp14;
  }
  const StackResult1 = Stack(504);
}) : (function SheetBody() {
  const tmp = closure_9(0);
  const conjureProjects = require("useConjureProjects").useConjureProjects(ConjureProjectsSheet);
  const obj = require("useConjureProjects");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds(ConjureProjectsSheet);
  const obj2 = require("useConjureProjects");
  const conjureForMeGuildId = require("useConjureProjects").useConjureForMeGuildId(ConjureProjectsSheet);
  const obj3 = require("useConjureProjects");
  const items = [ConjureProjectStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => projectsFetchState.getProjectsFetchState());
  const obj4 = require("initialize");
  const items1 = [SelectedGuildStore];
  _require = require("initialize").useStateFromStores(items1, () => lastSelectedGuildId.getLastSelectedGuildId());
  if (0 === conjureProjects.length) {
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj6 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_12, children: null };
          const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp2(1128).intl;
          obj7.children = intl6.string(_modDef3830.DJAPMO);
          const items2 = [closure_6(tmp2(5216).Text, obj7), ];
          const obj8 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl7 = tmp2(1128).intl;
          obj8.text = intl7.string(_modDef3830["WFJ/vb"]);
          obj8.onPress = function onPress() {
            return closure_0(dependencyMap[26]).listProjects();
          };
          items2[1] = closure_6(tmp2(5226).Button, obj8);
          obj6.children = items2;
          let tmp29Result = closure_7(tmp2(5957).Stack, obj6);
        } else {
          const obj9 = { spacing: nativeDefault.space.PX_16, children: null };
          const obj10 = { spacing: nativeDefault.space.PX_4, children: null };
          const obj11 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl9 = tmp2(1128).intl;
          obj11.children = intl9.string(_modDef3830.snY8uu);
          const items3 = [closure_6(tmp2(5216).Text, obj11), ];
          if (0 === conjureEligibleGuilds.length) {
            const intl5 = tmp2(1128).intl;
            let stringResult = intl5.string(_modDef3830.f5o5pk);
          } else {
            const intl4 = tmp2(1128).intl;
            const obj12 = { count: conjureEligibleGuilds.length };
            stringResult = intl4.formatToPlainString(_modDef3830.NiXcSi, obj12);
          }
          const obj13 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
          items3[1] = closure_6(tmp2(5216).Text, obj13);
          obj10.children = items3;
          const items4 = [closure_7(tmp2(5957).Stack, obj10), ];
          const obj14 = { guilds: conjureEligibleGuilds, forMeGuildId: conjureForMeGuildId };
          items4[1] = closure_6(closure_12, obj14);
          obj9.children = items4;
          tmp29Result = closure_7(tmp2(5957).Stack, obj9);
        }
      }
      return tmp29Result;
    }
    const obj15 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: null };
    const items5 = [closure_6(ActivityIndicator, {}), ];
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = tmp2(1128).intl;
    obj16.children = intl8.string(_modDef3830["XE+JXX"]);
    items5[1] = closure_6(tmp2(5216).Text, obj16);
    obj15.children = items5;
    tmp29Result = closure_7(tmp2(5957).Stack, obj15);
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
    const obj17 = { spacing: nativeDefault.space.PX_24, children: null };
    const obj18 = { title: null, entries: null, fallbackGuildId: null };
    const intl = tmp2(1128).intl;
    obj18.title = intl.string(_modDef3830.DnsyEc);
    obj18.entries = found1;
    obj18.fallbackGuildId = id;
    const items6 = [closure_6(closure_11, obj18), , ];
    const obj19 = { title: null, entries: null, fallbackGuildId: null };
    const intl2 = tmp2(1128).intl;
    obj19.title = intl2.string(_modDef3830.p8lFfK);
    obj19.entries = found2;
    obj19.fallbackGuildId = id;
    items6[1] = closure_6(closure_11, obj19);
    const obj20 = { title: null, guilds: null };
    const intl3 = tmp2(1128).intl;
    obj20.title = intl3.string(_modDef3830.sFiGNz);
    obj20.guilds = conjureEligibleGuilds;
    items6[2] = closure_6(closure_12, obj20);
    obj17.children = items6;
    return closure_7(tmp2(5957).Stack, obj17);
  }
  const obj5 = require("initialize");
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectsSheet() {
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
    obj2.title = intl.string(_modDef3830.uk6jhJ);
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
}) : (function ConjureProjectsSheet() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  useMountEffectDefault(() => {
    require("ConjureActionCreators").listProjects();
  });
  const obj = { scrollable: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3830.uk6jhJ);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const tmp = closure_9(bottom);
  obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: closure_9(bottom).scrollContent, scrollIndicatorInsets: { bottom }, children: timestampProducer(closure_13, {}) });
  return timestampProducer(ActionSheet.ActionSheet, obj);
});