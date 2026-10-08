// === Module 17265: ConjureProjectsSheet ===

// Module 17265 (ConjureProjectsSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef3827 from "module_3827" /* 3827 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import TableRowGroup from "TableRowGroup" /* 6267 */;
import BottomSheetModal from "BottomSheetModal" /* 6298 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6828 */;
import ActionSheet from "ActionSheet" /* 6885 */;
import openConjureProject from "openConjureProject" /* 12360 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;

const require = globalThis.__r;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const ConjureBuilderRouteStore = fn(6908);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const VibegrationsProjectsSheet = "VibegrationsProjectsSheet";
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: null };
  const obj2 = { paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { paddingVertical: nativeDefault.space.PX_24 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(entry) {
  const cResult = entry(576).c(18);
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
  const data = entry(6842).useApplication(application_id).data;
  if (cResult[0] !== entry) {
    const result = tmp(17266).describeConjureProjectRow(entry);
    cResult[0] = entry;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult2 = tmp(17266);
  } else {
    tmp4 = cResult[1];
  }
  ({ serverName, label } = tmp4);
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  if (cResult[2] === application_id) {
    if (cResult[3] === icon) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] !== entry.activity) {
      let tmp10;
      if ("building" === entry.activity) {
        tmp10 = closure_6(ActivityIndicator, {});
      }
      cResult[5] = entry.activity;
      cResult[6] = tmp10;
      let tmp9 = tmp10;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === entry.projectId) {
      if (cResult[8] === fallbackGuildId) {
        let tmp14 = cResult[9];
      }
      if (cResult[10] === label) {
        if (cResult[11] === entry.name) {
          if (cResult[12] === serverName) {
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp9) {
                if (cResult[15] === tmp13) {
                  if (cResult[16] === tmp14) {
                    let tmp15 = cResult[17];
                  }
                  return tmp15;
                }
              }
            }
          }
        }
      }
      let obj2 = { label: entry.name, subLabel: serverName, accessibilityLabel: label, icon: tmp7, trailing: tmp9, disabled: tmp13, onPress: tmp14 };
      const tmp17 = closure_6(tmp(6184).TableRow, obj2);
      cResult[10] = label;
      cResult[11] = entry.name;
      cResult[12] = serverName;
      cResult[13] = tmp7;
      cResult[14] = tmp9;
      cResult[15] = tmp13;
      cResult[16] = tmp14;
      cResult[17] = tmp17;
      tmp15 = tmp17;
    }
    const fn = function y() {
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
    cResult[7] = entry.projectId;
    cResult[8] = fallbackGuildId;
    cResult[9] = fn;
    tmp14 = fn;
  }
  const tmp8 = closure_6(fallbackGuildId(8587), { application: { id: application_id, icon } });
  cResult[2] = application_id;
  cResult[3] = icon;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  let obj3 = { application: { id: application_id, icon } };
  const tmpResult = entry(6842);
}) : (function ProjectRow(entry) {
  entry = entry.entry;
  let fallbackGuildId = entry.guildId;
  if (fallbackGuildId == null) {
    fallbackGuildId = entry.fallbackGuildId;
  }
  let application_id = entry.project.preview_application_id;
  if (application_id == null) {
    application_id = entry.project.application_id;
  }
  const data = entry(6842).useApplication(application_id).data;
  let obj = entry(6842);
  const result = entry(17266).describeConjureProjectRow(entry);
  ({ serverName, label } = result);
  let obj3 = { label: entry.name, subLabel: serverName, accessibilityLabel: label, icon: null, trailing: null, disabled: null, onPress: null };
  const obj4 = { id: application_id, icon: null };
  let icon;
  let obj2 = entry(17266);
  if (data != null) {
    icon = data.icon;
  }
  obj4.icon = icon;
  obj3.icon = closure_6(fallbackGuildId(8587), { application: obj4 });
  let tmp2Result;
  if ("building" === entry.activity) {
    tmp2Result = closure_6(ActivityIndicator, {});
  }
  obj3.trailing = tmp2Result;
  obj3.disabled = null == fallbackGuildId;
  obj3.onPress = function onPress() {
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
  return closure_6(entry(6184).TableRow, obj3);
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
        const tmp10 = closure_6(fallbackGuildId(6267).TableRowGroup, obj2);
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
        let obj2 = { guild, size: guild(6161).GuildIconSizes.SMALL_32 };
        obj.icon = closure_6(closure_1(6161), obj2);
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
        return closure_6(guild(6184).TableRow, obj, guild.id);
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
}) : (function GuildGroup(guilds) {
  guilds = guilds.guilds;
  let tmp3 = null;
  if (0 !== guilds.length) {
    let obj = {
      title: tmp,
      description: tmp2,
      hasIcons: true,
      children: guilds.map((guild) => {
          let obj = { label: guild.name, icon: null, arrow: true, onPress: null };
          let obj2 = { guild, size: guild(6161).GuildIconSizes.SMALL_32 };
          obj.icon = closure_6(closure_1(6161), obj2);
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
          return closure_6(guild(6184).TableRow, obj, guild.id);
        })
    };
    tmp3 = timestampProducer(TableRowGroup.TableRowGroup, obj);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function SheetBody() {
  let Stack = stateFromStores1;
  let items5 = dependencyMap;
  const cResult = stateFromStores1(576).c(46);
  state = closure_9(0);
  const obj = stateFromStores1(576);
  const conjureProjects = stateFromStores1(17266).useConjureProjects(VibegrationsProjectsSheet);
  const obj2 = stateFromStores1(17266);
  const conjureEligibleGuilds = stateFromStores1(17266).useConjureEligibleGuilds(VibegrationsProjectsSheet);
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
  const obj3 = stateFromStores1(17266);
  const stateFromStores = Stack(504).useStateFromStores(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedGuildStore];
    const fn2 = function y() {
      return lastSelectedGuildId.getLastSelectedGuildId();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp7 = fn2;
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
          const _Symbol6 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
            const intl4 = Stack(1126).intl;
            obj4.children = intl4.string(_modDef3827.DJAPMO);
            const tmp74 = closure_6(Stack(5086).Text, obj4);
            cResult[8] = tmp74;
            let tmp71 = tmp74;
          } else {
            tmp71 = cResult[8];
          }
          const _Symbol7 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
            const intl5 = Stack(1126).intl;
            obj5.text = intl5.string(_modDef3827["WFJ/vb"]);
            obj5.onPress = function onPress() {
              return stateFromStores1(dependencyMap[25]).listProjects();
            };
            const tmp78 = closure_6(Stack(5375).Button, obj5);
            cResult[9] = tmp78;
            let tmp75 = tmp78;
          } else {
            tmp75 = cResult[9];
          }
          if (cResult[10] !== state.state) {
            const obj7 = { style: state.state, align: "center", spacing: nativeDefault.space.PX_12, children: null };
            const items2 = [tmp71, tmp75];
            obj7.children = items2;
            const tmp82 = closure_7(Stack(5373).Stack, obj7);
            cResult[10] = state.state;
            cResult[11] = tmp82;
          }
        } else {
          const _Symbol10 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { variant: "text-md/semibold", color: "text-strong", children: null };
            const intl = Stack(1126).intl;
            obj9.children = intl.string(_modDef3827.snY8uu);
            const tmp52 = closure_6(Stack(5086).Text, obj9);
            cResult[12] = tmp52;
            let tmp49 = tmp52;
          } else {
            tmp49 = cResult[12];
          }
          if (cResult[13] !== conjureEligibleGuilds.length) {
            if (0 === conjureEligibleGuilds.length) {
              const intl3 = Stack(1126).intl;
              let stringResult = intl3.string(_modDef3827.f5o5pk);
            } else {
              const intl2 = Stack(1126).intl;
              const obj11 = { count: conjureEligibleGuilds.length };
              stringResult = intl2.formatToPlainString(_modDef3827.NiXcSi, obj11);
            }
            cResult[13] = conjureEligibleGuilds.length;
            cResult[14] = stringResult;
          } else {
            if (cResult[15] !== cResult[14]) {
              const obj12 = { spacing: nativeDefault.space.PX_4, children: null };
              const items3 = [tmp49, ];
              const obj13 = { variant: "text-sm/normal", color: "text-muted", children: tmp53 };
              items3[1] = closure_6(Stack(5086).Text, obj13);
              obj12.children = items3;
              const tmp62 = closure_7(Stack(5373).Stack, obj12);
              cResult[15] = tmp53;
              cResult[16] = tmp62;
              let tmp58 = tmp62;
            } else {
              tmp58 = cResult[16];
            }
            if (cResult[17] !== conjureEligibleGuilds) {
              const obj14 = { guilds: conjureEligibleGuilds };
              const tmp66 = closure_6(closure_12, obj14);
              cResult[17] = conjureEligibleGuilds;
              cResult[18] = tmp66;
              let tmp63 = tmp66;
            } else {
              tmp63 = cResult[18];
            }
            if (cResult[19] === tmp58) {
              if (cResult[20] === tmp63) {
                let tmp67 = cResult[21];
              }
              return tmp67;
            }
            const obj15 = { spacing: nativeDefault.space.PX_16, children: null };
            const items4 = [tmp58, tmp63];
            obj15.children = items4;
            const tmp70 = closure_7(Stack(5373).Stack, obj15);
            cResult[19] = tmp58;
            cResult[20] = tmp63;
            cResult[21] = tmp70;
            tmp67 = tmp70;
          }
        }
      }
    }
    const _Symbol8 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp87 = closure_6(ActivityIndicator, {});
      cResult[4] = tmp87;
      let tmp84 = tmp87;
    } else {
      tmp84 = cResult[4];
    }
    const _Symbol9 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = Stack(1126).intl;
      obj16.children = intl6.string(_modDef3827["XE+JXX"]);
      const tmp91 = closure_6(Stack(5086).Text, obj16);
      cResult[5] = tmp91;
      let tmp88 = tmp91;
    } else {
      tmp88 = cResult[5];
    }
    if (cResult[6] !== state.state) {
      Stack = Stack(5373).Stack;
      const obj17 = { style: state.state, align: "center", spacing: nativeDefault.space.PX_8, children: null };
      items5 = [tmp84, tmp88];
      obj17.children = items5;
      const tmp95 = closure_7(Stack, obj17);
      state = state.state;
      cResult[6] = state;
      cResult[7] = tmp95;
    }
  } else {
    if (cResult[22] === conjureEligibleGuilds) {
      if (cResult[23] === stateFromStores1) {
        let tmp10 = cResult[24];
      }
      if (cResult[25] !== conjureProjects) {
        const _Symbol = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function z(activity) {
            return "idle" !== activity.activity;
          };
          cResult[27] = fn3;
          let tmp17 = fn3;
        } else {
          tmp17 = cResult[27];
        }
        const found = conjureProjects.filter(tmp17);
        cResult[25] = conjureProjects;
        cResult[26] = found;
      } else if (cResult[28] !== conjureProjects) {
        const _Symbol2 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
          cResult[30] = M;
        } else {
          class M {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
        }
        const found1 = conjureProjects.filter(M);
        cResult[28] = conjureProjects;
        cResult[29] = found1;
      } else {
        class M {
          constructor(arg0) {
            return "idle" === arg0.activity;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
          const stringResult1 = obj6.string(_modDef3827.DnsyEc);
          cResult[31] = stringResult1;
          const tmp24 = stringResult1;
        } else {
          class M {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
        }
        if (cResult[32] === tmp16) {
          class M {
            constructor(arg0) {
              return "idle" === arg0.activity;
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            const stringResult2 = obj8.string(_modDef3827.p8lFfK);
            cResult[35] = stringResult2;
            const tmp31 = stringResult2;
          } else {
            class M {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
          }
          if (cResult[36] === tmp10) {
            class M {
              constructor(arg0) {
                return "idle" === arg0.activity;
              }
            }
            const _Symbol5 = Symbol;
            if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
              const stringResult3 = obj10.string(_modDef3827.sFiGNz);
              cResult[39] = stringResult3;
              const tmp38 = stringResult3;
            } else {
              class M {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
            }
            if (cResult[40] !== conjureEligibleGuilds) {
              class M {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
              const obj18 = { title: tmp38, guilds: conjureEligibleGuilds };
              const tmp43 = closure_6(closure_12, obj18);
              cResult[40] = conjureEligibleGuilds;
              cResult[41] = tmp43;
            } else {
              class M {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
            }
            if (cResult[42] === tmp34) {
              class M {
                constructor(arg0) {
                  return "idle" === arg0.activity;
                }
              }
            }
            const obj19 = { spacing: nativeDefault.space.PX_24, children: null };
            const items6 = [tmp27, tmp34, tmp41];
            obj19.children = items6;
            const tmp47 = closure_7(Stack(5373).Stack, obj19);
            cResult[42] = tmp34;
            cResult[43] = tmp41;
            cResult[44] = tmp27;
            cResult[45] = tmp47;
          }
          const obj20 = { title: tmp31, entries: tmp20, fallbackGuildId: tmp10 };
          const tmp37 = closure_6(closure_11, obj20);
          cResult[36] = tmp10;
          cResult[37] = tmp20;
          cResult[38] = tmp37;
        }
        const obj21 = { title: tmp24, entries: tmp16, fallbackGuildId: tmp10 };
        const tmp30 = closure_6(closure_11, obj21);
        cResult[32] = tmp16;
        cResult[33] = tmp10;
        cResult[34] = tmp30;
      }
    }
    const found2 = conjureEligibleGuilds.find((id) => id.id === stateFromStores1);
    let tmp13;
    if (found2 != null) {
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
      tmp13 = tmp15;
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
}) : (function SheetBody() {
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
          obj6.children = intl6.string(_modDef3827.DJAPMO);
          const items2 = [closure_6(tmp2(5086).Text, obj6), ];
          const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl7 = tmp2(1126).intl;
          obj7.text = intl7.string(_modDef3827["WFJ/vb"]);
          obj7.onPress = function onPress() {
            return closure_0(dependencyMap[25]).listProjects();
          };
          items2[1] = closure_6(tmp2(5375).Button, obj7);
          obj5.children = items2;
          let tmp28Result = closure_7(tmp2(5373).Stack, obj5);
        } else {
          const obj8 = { spacing: nativeDefault.space.PX_16, children: null };
          const obj9 = { spacing: nativeDefault.space.PX_4, children: null };
          const obj10 = { variant: "text-md/semibold", color: "text-strong", children: null };
          const intl9 = tmp2(1126).intl;
          obj10.children = intl9.string(_modDef3827.snY8uu);
          const items3 = [closure_6(tmp2(5086).Text, obj10), ];
          if (0 === conjureEligibleGuilds.length) {
            const intl5 = tmp2(1126).intl;
            let stringResult = intl5.string(_modDef3827.f5o5pk);
          } else {
            const intl4 = tmp2(1126).intl;
            const obj11 = { count: conjureEligibleGuilds.length };
            stringResult = intl4.formatToPlainString(_modDef3827.NiXcSi, obj11);
          }
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
          items3[1] = closure_6(tmp2(5086).Text, obj12);
          obj9.children = items3;
          const items4 = [closure_7(tmp2(5373).Stack, obj9), ];
          const obj13 = { guilds: conjureEligibleGuilds };
          items4[1] = closure_6(closure_12, obj13);
          obj8.children = items4;
          tmp28Result = closure_7(tmp2(5373).Stack, obj8);
        }
      }
      return tmp28Result;
    }
    const obj14 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: null };
    const items5 = [closure_6(ActivityIndicator, {}), ];
    const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = tmp2(1126).intl;
    obj15.children = intl8.string(_modDef3827["XE+JXX"]);
    items5[1] = closure_6(tmp2(5086).Text, obj15);
    obj14.children = items5;
    tmp28Result = closure_7(tmp2(5373).Stack, obj14);
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
    obj17.title = intl.string(_modDef3827.DnsyEc);
    obj17.entries = found1;
    obj17.fallbackGuildId = id;
    const items6 = [closure_6(closure_11, obj17), , ];
    const obj18 = { title: null, entries: null, fallbackGuildId: null };
    const intl2 = tmp2(1126).intl;
    obj18.title = intl2.string(_modDef3827.p8lFfK);
    obj18.entries = found2;
    obj18.fallbackGuildId = id;
    items6[1] = closure_6(closure_11, obj18);
    const obj19 = { title: null, guilds: null };
    const intl3 = tmp2(1126).intl;
    obj19.title = intl3.string(_modDef3827.sFiGNz);
    obj19.guilds = conjureEligibleGuilds;
    items6[2] = closure_6(closure_12, obj19);
    obj16.children = items6;
    return closure_7(tmp2(5373).Stack, obj16);
  }
  const obj4 = require("initialize");
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
    obj2.title = intl.string(_modDef3827.uk6jhJ);
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
  obj2.title = intl.string(_modDef3827.uk6jhJ);
  obj.header = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const tmp = closure_9(bottom);
  obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: closure_9(bottom).scrollContent, scrollIndicatorInsets: { bottom }, children: timestampProducer(closure_13, {}) });
  return timestampProducer(ActionSheet.ActionSheet, obj);
});