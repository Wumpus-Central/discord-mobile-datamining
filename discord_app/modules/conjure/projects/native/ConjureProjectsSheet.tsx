// discord_app/modules/conjure/projects/native/ConjureProjectsSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06119_BottomSheetModal.js";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet2 from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import openConjureProject from "../openConjureProject.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";
import ConjureProjectStore from "../ConjureProjectStore.tsx";
import ConjureBuilderRouteStore from "../../builder/ConjureBuilderRouteStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, hideAllActionSheetsResult, num2, openConjureProjectResult;

let metroImportDefault;
let metroRequire;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const VibegrationsProjectsSheet = "VibegrationsProjectsSheet";
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 },
    state: { paddingVertical: nativeDefault.space.PX_24 },
  };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ paddingVertical: nativeDefault.space.PX_24 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (entry) => {
      let formatToPlainString2Result;
      let obj4;
      let tmp4;
      const tmp = entry;
      let obj = entry(576);
      const cResult = obj.c(21);
      entry = entry.entry;
      let fallbackGuildId = entry.guildId;
      if (fallbackGuildId == null) {
        fallbackGuildId = entry.fallbackGuildId;
      }
      let application_id = entry.project.preview_application_id;
      if (application_id == null) {
        application_id = entry.project.application_id;
      }
      const tmpResult = tmp(6665);
      const data = tmpResult.useApplication(application_id).data;
      if (cResult[0] !== entry.guildName) {
        let guildName = entry.guildName;
        if (guildName == null) {
          const intl = tmp(1126).intl;
          guildName = intl.string(fallbackGuildId(3753)["3QFps8"]);
        }
        let num = 0;
        cResult[0] = entry.guildName;
        cResult[1] = guildName;
        tmp4 = guildName;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === entry.guildName) {
        let tmp6;
        if (cResult[3] === entry.name) {
          tmp6 = cResult[4];
        }
        let icon;
        if (data != null) {
          icon = data.icon;
        }
        if (cResult[5] === application_id) {
          let tmp11;
          let tmp14;
          if (cResult[6] === icon) {
            tmp11 = cResult[7];
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
                  projectId = entry.projectId;
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
                  openConjureProjectResult = obj.openConjureProject(tmp, projectId);
                }
                return;
              }
            }
            cResult[9] = tmp15;
            tmp14 = tmp15;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] === entry.projectId) {
            let tmp19;
            if (cResult[11] === fallbackGuildId) {
              tmp19 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === entry.name) {
                if (cResult[15] === tmp4) {
                  if (cResult[16] === tmp11) {
                    if (cResult[17] === tmp14) {
                      if ((cResult[18] === null) == fallbackGuildId) {
                        let tmp20;
                        if (cResult[19] === tmp19) {
                          tmp20 = cResult[20];
                        }
                        return tmp20;
                      }
                    }
                  }
                }
              }
            }
            let obj2 = {
              label: null,
              subLabel: tmp4,
              accessibilityLabel: tmp6,
              icon: tmp11,
              trailing: tmp14,
              disabled: null == fallbackGuildId,
              onPress: tmp19,
            };
            class P {
              constructor() {
                if (null != fallbackGuildId) {
                  tmp7 = entry;
                  tmp8 = closure_1;
                  tmp9 = closure_2;
                  projectId = entry.projectId;
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
                  openConjureProjectResult = obj.openConjureProject(tmp, projectId);
                }
                return;
              }
            }
            const tmp22 = closure_6(tmp(6000).TableRow, obj2);
            cResult[13] = tmp6;
            cResult[14] = entry.name;
            cResult[15] = tmp4;
            cResult[16] = tmp11;
            cResult[17] = tmp14;
            cResult[18] = null == fallbackGuildId;
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
                projectId = entry.projectId;
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
                openConjureProjectResult = obj.openConjureProject(tmp, projectId);
              }
              return;
            }
          }
          cResult[10] = entry.projectId;
          cResult[11] = fallbackGuildId;
          cResult[12] = P;
          tmp19 = P;
        }
        let obj3 = { application: obj4 };
        obj4 = { id: application_id, icon };
        const tmp13 = closure_6(fallbackGuildId(9257), obj3);
        cResult[5] = application_id;
        cResult[6] = icon;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      if (null == entry.guildName) {
        const intl3 = tmp(1126).intl;
        const formatToPlainString2 = intl3.formatToPlainString;
        const obj5 = { name: null };
        class P {
          constructor() {
            if (null != fallbackGuildId) {
              tmp7 = entry;
              tmp8 = closure_1;
              tmp9 = closure_2;
              projectId = entry.projectId;
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
              openConjureProjectResult = obj.openConjureProject(tmp, projectId);
            }
            return;
          }
        }
        formatToPlainString2Result = formatToPlainString2(fallbackGuildId(3753)["2sBOnp"], obj5);
      } else {
        const intl2 = tmp(1126).intl;
        const formatToPlainString = intl2.formatToPlainString;
        const obj6 = { name: null, server: entry.guildName };
        class P {
          constructor() {
            if (null != fallbackGuildId) {
              tmp7 = entry;
              tmp8 = closure_1;
              tmp9 = closure_2;
              projectId = entry.projectId;
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
              openConjureProjectResult = obj.openConjureProject(tmp, projectId);
            }
            return;
          }
        }
        formatToPlainString2Result = formatToPlainString(fallbackGuildId(3753)["hd+GF1"], obj6);
      }
      cResult[2] = entry.guildName;
      cResult[3] = entry.name;
      cResult[4] = formatToPlainString2Result;
      tmp6 = formatToPlainString2Result;
    }
  : (entry) => {
      let formatToPlainStringResult;
      let icon;
      let obj9;
      let tmp6;
      let tmp6Result;
      let tmp8Result;
      entry = entry.entry;
      let fallbackGuildId = entry.guildId;
      if (fallbackGuildId == null) {
        fallbackGuildId = entry.fallbackGuildId;
      }
      let application_id = entry.project.preview_application_id;
      if (application_id == null) {
        application_id = entry.project.application_id;
      }
      const tmp = entry;
      let obj = entry(6665);
      const data = obj.useApplication(application_id).data;
      let guildName = entry.guildName;
      if (guildName == null) {
        const intl = tmp(1126).intl;
        guildName = intl.string(fallbackGuildId(3753)["3QFps8"]);
      }
      if (null == entry.guildName) {
        const intl3 = tmp(1126).intl;
        let obj3 = { name: entry.name };
        formatToPlainStringResult = intl3.formatToPlainString(fallbackGuildId(3753)["2sBOnp"], obj3);
        tmp6 = fallbackGuildId;
      } else {
        const intl2 = tmp(1126).intl;
        const obj4 = { name: null, server: null };
        ({ name: obj2.name, guildName: obj2.server } = entry);
        formatToPlainStringResult = intl2.formatToPlainString(fallbackGuildId(3753)["hd+GF1"], obj4);
        tmp6 = fallbackGuildId;
      }
      const obj5 = {
        label: entry.name,
        subLabel: guildName,
        accessibilityLabel: formatToPlainStringResult,
        icon: closure_6(tmp6Result, { application: obj9 }),
        trailing: tmp8Result,
        disabled: null == fallbackGuildId,
        onPress() {
          if (null != fallbackGuildId) {
            const projectId = entry.projectId;
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideAllActionSheets();
            const obj3 = RootNavigationRef;
            const rootNavigationRef = obj3.getRootNavigationRef();
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
            const obj = openConjureProject;
            obj.openConjureProject(tmp, projectId);
          }
        },
      };
      const TableRow = tmp(6000).TableRow;
      obj9 = { id: application_id, icon };
      icon = undefined;
      tmp6Result = tmp6(9257);
      if (data != null) {
        icon = data.icon;
      }
      tmp8Result = undefined;
      if ("building" === entry.activity) {
        tmp8Result = closure_6(ActivityIndicator, {});
      }
      return closure_6(TableRow, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let entries;
      let fallbackGuildId;
      let title;
      let obj = fallbackGuildId(576);
      const cResult = obj.c(8);
      ({ title, entries, fallbackGuildId } = arg0);
      if (0 === entries.length) {
        return null;
      } else {
        let tmp5;
        if (cResult[0] === entries) {
          let tmp4;
          if (cResult[1] === fallbackGuildId) {
            tmp4 = cResult[2];
          }
          if (cResult[5] === tmp4) {
            let tmp7;
            if (cResult[6] === title) {
              tmp7 = cResult[7];
            }
            return tmp7;
          }
          const obj2 = { title, hasIcons: true, children: tmp4 };
          const tmp9 = closure_6(fallbackGuildId(6081).TableRowGroup, obj2);
          cResult[5] = tmp4;
          cResult[6] = title;
          cResult[7] = tmp9;
          tmp7 = tmp9;
        }
        if (cResult[3] !== fallbackGuildId) {
          const fn = function n(entry) {
            const obj = { entry, fallbackGuildId };
            return metroRequire(closure_10, obj, entry.projectId);
          };
          cResult[3] = fallbackGuildId;
          cResult[4] = fn;
          tmp5 = fn;
        } else {
          tmp5 = cResult[4];
        }
        const mapped = entries.map(tmp5);
        cResult[0] = entries;
        cResult[1] = fallbackGuildId;
        cResult[2] = mapped;
        tmp4 = mapped;
      }
    }
  : (arg0) => {
      let entries;
      let fallbackGuildId;
      let require;
      ({ entries, fallbackGuildId: require } = arg0);
      let tmp2 = null;
      if (0 !== entries.length) {
        let obj = {
          title: tmp,
          hasIcons: true,
          children: entries.map((entry) => {
            const obj = { entry, fallbackGuildId: require };
            return metroRequire(closure_10, obj, entry.projectId);
          }),
        };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        tmp2 = closure_6(TableRowGroup, obj);
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let guilds;
      let title;
      let obj = react2;
      const cResult = obj.c(7);
      ({ title, description, guilds } = arg0);
      if (0 === guilds.length) {
        return null;
      } else {
        let tmp4;
        if (cResult[0] !== guilds) {
          let tmp6;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function n(guild) {
              let obj2;
              let tmp;
              let obj = {
                label: guild.name,
                icon: closure_6(tmp, obj2),
                arrow: true,
                onPress() {
                  const id = guild.id;
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  const obj2 = require("RootNavigationRef");
                  const rootNavigationRef = obj2.getRootNavigationRef();
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
                  const obj4 = require("openConjureProject");
                  obj4.openConjureProject(id, undefined);
                },
              };
              const TableRow = guild(closure_2[17]).TableRow;
              obj2 = { guild, size: guild(closure_2[19]).GuildIconSizes.SMALL_32 };
              tmp = closure_1(closure_2[19]);
              return closure_6(TableRow, obj, guild.id);
            };
            let num = 2;
            cResult[2] = fn;
            tmp6 = fn;
          } else {
            tmp6 = cResult[2];
          }
          const mapped = guilds.map(tmp6);
          cResult[0] = guilds;
          cResult[1] = mapped;
          tmp4 = mapped;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[3] === description) {
          if (cResult[4] === tmp4) {
            let tmp8;
            if (cResult[5] === title) {
              tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
        let obj2 = { title, description, hasIcons: true, children: tmp4 };
        const tmp10 = metroRequire(TableRowGroup2.TableRowGroup, obj2);
        cResult[3] = description;
        cResult[4] = tmp4;
        cResult[5] = title;
        cResult[6] = tmp10;
        tmp8 = tmp10;
      }
    }
  : (guilds) => {
      let tmp;
      guilds = guilds.guilds;
      let tmp3 = null;
      if (0 !== guilds.length) {
        let obj = {
          title: tmp,
          description: tmp2,
          hasIcons: true,
          children: guilds.map((guild) => {
            let obj2;
            let tmp;
            let obj = {
              label: guild.name,
              icon: closure_6(tmp, obj2),
              arrow: true,
              onPress() {
                const id = guild.id;
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideAllActionSheets();
                const obj2 = require("RootNavigationRef");
                const rootNavigationRef = obj2.getRootNavigationRef();
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
                const obj4 = require("openConjureProject");
                obj4.openConjureProject(id, undefined);
              },
            };
            const TableRow = guild(closure_2[17]).TableRow;
            obj2 = { guild, size: guild(closure_2[19]).GuildIconSizes.SMALL_32 };
            tmp = closure_1(closure_2[19]);
            return closure_6(TableRow, obj, guild.id);
          }),
        };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        tmp3 = metroRequire(TableRowGroup, obj);
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let lastSelectedGuildId;
      let projectsFetchState;
      let stateFromStores1;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = stateFromStores1(576);
      const cResult = obj.c(46);
      const tmp4 = closure_9(0);
      const obj2 = stateFromStores1(16985);
      const conjureProjects = obj2.useConjureProjects(VibegrationsProjectsSheet);
      const obj3 = stateFromStores1(16985);
      const conjureEligibleGuilds = obj3.useConjureEligibleGuilds(VibegrationsProjectsSheet);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        const fn = function p() {
          return projectsFetchState.getProjectsFetchState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = stateFromStores1(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SelectedGuildStore];
        class P {
          constructor() {
            return lastSelectedGuildId.getLastSelectedGuildId();
          }
        }
        cResult[2] = items1;
        cResult[3] = P;
        tmp10 = P;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult2 = stateFromStores1(504);
      stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
      if (0 === conjureProjects.length) {
        let tmp76;
        let tmp80;
        let tmp84;
        if (null != stateFromStores) {
          let tmp60;
          if ("loading" !== stateFromStores.type) {
            if ("error" === stateFromStores.type) {
              let tmp64;
              let tmp68;
              let tmp72;
              const _Symbol4 = Symbol;
              if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: obj17.string(_modDef3753.DJAPMO),
                };
                const Text2 = tmp(4892).Text;
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                const tmp67 = closure_6(Text2, obj4);
                cResult[8] = tmp67;
                tmp64 = tmp67;
              } else {
                tmp64 = cResult[8];
              }
              class P {
                constructor() {
                  return lastSelectedGuildId.getLastSelectedGuildId();
                }
              }
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = {
                  variant: "secondary",
                  size: "sm",
                  text: obj19.string(_modDef3753["WFJ/vb"]),
                  onPress() {
                    const obj = stateFromStores1(dependencyMap[25]);
                    return obj.listProjects();
                  },
                };
                const Button = tmp(5601).Button;
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                const tmp71 = closure_6(Button, obj5);
                cResult[9] = tmp71;
                tmp68 = tmp71;
              } else {
                tmp68 = cResult[9];
              }
              if (cResult[10] !== tmp4.state) {
                const obj6 = {
                  style: tmp4.state,
                  align: "center",
                  spacing: nativeDefault.space.PX_12,
                  children: items2,
                };
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                const Stack3 = tmp(5600).Stack;
                items2 = [tmp64, tmp68];
                const tmp74 = closure_7(Stack3, obj6);
                cResult[10] = tmp4.state;
                cResult[11] = tmp74;
                tmp72 = tmp74;
              } else {
                tmp72 = cResult[11];
              }
              tmp60 = tmp72;
            } else {
              let tmp45;
              let tmp50;
              let tmp56;
              const _Symbol7 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const obj7 = {
                  variant: "text-md/semibold",
                  color: "text-strong",
                  children: obj11.string(_modDef3753.snY8uu),
                };
                const Text = tmp(4892).Text;
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                const tmp48 = closure_6(Text, obj7);
                cResult[12] = tmp48;
                tmp45 = tmp48;
              } else {
                tmp45 = cResult[12];
              }
              class P {
                constructor() {
                  return lastSelectedGuildId.getLastSelectedGuildId();
                }
              }
              if (cResult[15] !== tmp49) {
                const obj8 = { spacing: nativeDefault.space.PX_4, children: items3 };
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                items3 = [tmp45];
                const obj9 = { variant: "text-sm/normal", color: "text-muted", children: tmp49 };
                items3[1] = closure_6(stateFromStores1(4892).Text, obj9);
                const tmp55 = closure_7(tmp52, obj8);
                cResult[15] = tmp49;
                cResult[16] = tmp55;
                tmp50 = tmp55;
              } else {
                tmp50 = cResult[16];
              }
              if (cResult[17] !== conjureEligibleGuilds) {
                const obj10 = { guilds: null };
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                const tmp59 = closure_6(closure_12, obj10);
                cResult[17] = conjureEligibleGuilds;
                cResult[18] = tmp59;
                tmp56 = tmp59;
              } else {
                tmp56 = cResult[18];
              }
              if (cResult[19] === tmp50) {
                if (cResult[20] === tmp56) {
                  tmp60 = cResult[21];
                }
              }
              const obj12 = { spacing: nativeDefault.space.PX_16, children: items4 };
              const Stack2 = tmp(5600).Stack;
              items4 = [tmp50, tmp56];
              const tmp63 = closure_7(Stack2, obj12);
              cResult[19] = tmp50;
              cResult[20] = tmp56;
              cResult[21] = tmp63;
              tmp60 = tmp63;
            }
          }
          return tmp60;
        }
        const _Symbol5 = Symbol;
        class P {
          constructor() {
            return lastSelectedGuildId.getLastSelectedGuildId();
          }
        }
        if (tmp75 === Symbol.for("react.memo_cache_sentinel")) {
          const tmp79 = closure_6(ActivityIndicator, {});
          class P {
            constructor() {
              return lastSelectedGuildId.getLastSelectedGuildId();
            }
          }
          cResult[4] = tmp79;
          tmp76 = tmp79;
        } else {
          tmp76 = cResult[4];
        }
        const _Symbol6 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj13 = {
            variant: "text-sm/normal",
            color: "text-muted",
            children: obj22.string(_modDef3753["XE+JXX"]),
          };
          const Text3 = tmp(4892).Text;
          class P {
            constructor() {
              return lastSelectedGuildId.getLastSelectedGuildId();
            }
          }
          const tmp83 = closure_6(Text3, obj13);
          cResult[5] = tmp83;
          tmp80 = tmp83;
        } else {
          tmp80 = cResult[5];
        }
        if (cResult[6] !== tmp4.state) {
          const obj14 = { style: tmp4.state, align: "center", spacing: nativeDefault.space.PX_8, children: items5 };
          class P {
            constructor() {
              return lastSelectedGuildId.getLastSelectedGuildId();
            }
          }
          const Stack4 = tmp(5600).Stack;
          items5 = [tmp76, tmp80];
          const tmp86 = closure_7(Stack4, obj14);
          cResult[6] = tmp4.state;
          cResult[7] = tmp86;
          tmp84 = tmp86;
        } else {
          tmp84 = cResult[7];
        }
        tmp60 = tmp84;
      } else {
        if (cResult[22] === conjureEligibleGuilds) {
          let tmp13;
          if (cResult[23] === stateFromStores1) {
            tmp13 = cResult[24];
          }
          if (cResult[25] !== conjureProjects) {
            const _Symbol = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class L {
                constructor(activity) {
                  return "idle" !== activity.activity;
                }
              }
              cResult[27] = L;
              class P {
                constructor() {
                  return lastSelectedGuildId.getLastSelectedGuildId();
                }
              }
            } else {
              class L {
                constructor(activity) {
                  return "idle" !== activity.activity;
                }
              }
            }
            class P {
              constructor() {
                return lastSelectedGuildId.getLastSelectedGuildId();
              }
            }
            cResult[25] = conjureProjects;
            cResult[26] = tmp19;
          } else {
            class L {
              constructor(activity) {
                return "idle" !== activity.activity;
              }
            }
          }
          if (cResult[28] !== conjureProjects) {
            class L {
              constructor(activity) {
                return "idle" !== activity.activity;
              }
            }
            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(activity) {
                  return "idle" === activity.activity;
                }
              }
              cResult[30] = M;
              class P {
                constructor() {
                  return lastSelectedGuildId.getLastSelectedGuildId();
                }
              }
            } else {
              class M {
                constructor(activity) {
                  return "idle" === activity.activity;
                }
              }
            }
            class P {
              constructor() {
                return lastSelectedGuildId.getLastSelectedGuildId();
              }
            }
            cResult[28] = conjureProjects;
            cResult[29] = tmp21;
          } else {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          class P {
            constructor() {
              return lastSelectedGuildId.getLastSelectedGuildId();
            }
          }
          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
            const string = tmp23.string;
            class P {
              constructor() {
                return lastSelectedGuildId.getLastSelectedGuildId();
              }
            }
            cResult[31] = tmp25;
          } else {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          if (cResult[32] === tmp19) {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
            const _Symbol2 = Symbol;
            class P {
              constructor() {
                return lastSelectedGuildId.getLastSelectedGuildId();
              }
            }
            if (cResult[36] === tmp13) {
              class M {
                constructor(activity) {
                  return "idle" === activity.activity;
                }
              }
              const _Symbol3 = Symbol;
              class P {
                constructor() {
                  return lastSelectedGuildId.getLastSelectedGuildId();
                }
              }
              if (cResult[40] !== conjureEligibleGuilds) {
                class M {
                  constructor(activity) {
                    return "idle" === activity.activity;
                  }
                }
                const obj15 = { title: null, guilds: conjureEligibleGuilds };
                class P {
                  constructor() {
                    return lastSelectedGuildId.getLastSelectedGuildId();
                  }
                }
                cResult[40] = conjureEligibleGuilds;
                cResult[41] = closure_6(closure_12, obj15);
                const tmp39 = closure_6(closure_12, obj15);
              } else {
                class M {
                  constructor(activity) {
                    return "idle" === activity.activity;
                  }
                }
              }
              if (cResult[42] === tmp32) {
                class M {
                  constructor(activity) {
                    return "idle" === activity.activity;
                  }
                }
              }
              const obj16 = { spacing: nativeDefault.space.PX_24, children: items6 };
              const Stack = tmp(5600).Stack;
              items6 = [tmp26, tmp32, tmp37];
              cResult[42] = tmp32;
              cResult[43] = tmp37;
              cResult[44] = tmp26;
              cResult[45] = closure_7(Stack, obj16);
              const tmp43 = closure_7(Stack, obj16);
            }
            const obj18 = { title: tmp31, entries: tmp21, fallbackGuildId: tmp13 };
            cResult[36] = tmp13;
            cResult[37] = tmp21;
            cResult[38] = closure_6(closure_11, obj18);
            const tmp35 = closure_6(closure_11, obj18);
          }
          const obj20 = { title: tmp25, entries: tmp19, fallbackGuildId: tmp13 };
          cResult[32] = tmp19;
          cResult[33] = tmp13;
          cResult[34] = closure_6(closure_11, obj20);
          const tmp29 = closure_6(closure_11, obj20);
        }
        const found = conjureEligibleGuilds.find((id) => id.id === stateFromStores1);
        class P {
          constructor() {
            return lastSelectedGuildId.getLastSelectedGuildId();
          }
        }
        if (found != null) {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
        }
        if (tmp16 == null) {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
          if (tmp17 != null) {
            class M {
              constructor(activity) {
                return "idle" === activity.activity;
              }
            }
          }
          class P {
            constructor() {
              return lastSelectedGuildId.getLastSelectedGuildId();
            }
          }
        }
        if (tmp16 == null) {
          class M {
            constructor(activity) {
              return "idle" === activity.activity;
            }
          }
        }
        cResult[22] = conjureEligibleGuilds;
        cResult[23] = stateFromStores1;
        cResult[24] = tmp16;
        tmp13 = tmp16;
      }
    }
  : () => {
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let lastSelectedGuildId;
      let projectsFetchState;
      const tmp = closure_9(0);
      let obj = require("useConjureProjects");
      const conjureProjects = obj.useConjureProjects(VibegrationsProjectsSheet);
      const obj2 = require("useConjureProjects");
      const conjureEligibleGuilds = obj2.useConjureEligibleGuilds(VibegrationsProjectsSheet);
      const items = [ConjureProjectStore];
      const obj3 = require("get initialized");
      const stateFromStores = obj3.useStateFromStores(items, () => projectsFetchState.getProjectsFetchState());
      const items1 = [SelectedGuildStore];
      const obj4 = require("get initialized");
      _require = obj4.useStateFromStores(items1, () => lastSelectedGuildId.getLastSelectedGuildId());
      if (0 === conjureProjects.length) {
        if (null != stateFromStores) {
          let tmp28Result;
          if ("loading" !== stateFromStores.type) {
            if ("error" === stateFromStores.type) {
              const obj5 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_12, children: items2 };
              const Stack2 = tmp2(5600).Stack;
              const obj6 = {
                variant: "text-sm/normal",
                color: "text-muted",
                children: intl6.string(_modDef3753.DJAPMO),
              };
              const Text = tmp2(4892).Text;
              intl6 = tmp2(1126).intl;
              items2 = [closure_6(Text, obj6)];
              const obj7 = {
                variant: "secondary",
                size: "sm",
                text: intl7.string(_modDef3753["WFJ/vb"]),
                onPress() {
                  const obj = closure_0(dependencyMap[25]);
                  return obj.listProjects();
                },
              };
              const Button = tmp2(5601).Button;
              intl7 = tmp2(1126).intl;
              items2[1] = closure_6(Button, obj7);
              tmp28Result = closure_7(Stack2, obj5);
            } else {
              let stringResult;
              const obj8 = { spacing: nativeDefault.space.PX_16, children: items4 };
              const Stack4 = tmp2(5600).Stack;
              const obj9 = { spacing: nativeDefault.space.PX_4, children: items3 };
              const Stack5 = tmp2(5600).Stack;
              const obj10 = {
                variant: "text-md/semibold",
                color: "text-strong",
                children: intl9.string(_modDef3753.snY8uu),
              };
              const Text3 = tmp2(4892).Text;
              intl9 = tmp2(1126).intl;
              items3 = [closure_6(Text3, obj10)];
              const Text4 = tmp2(4892).Text;
              if (0 === conjureEligibleGuilds.length) {
                const intl5 = tmp2(1126).intl;
                stringResult = intl5.string(_modDef3753.f5o5pk);
              } else {
                const intl4 = tmp2(1126).intl;
                const obj11 = { count: conjureEligibleGuilds.length };
                stringResult = intl4.formatToPlainString(_modDef3753.NiXcSi, obj11);
              }
              const obj12 = { variant: "text-sm/normal", color: "text-muted", children: stringResult };
              items3[1] = closure_6(Text4, obj12);
              items4 = [closure_7(Stack5, obj9)];
              const obj13 = { guilds: conjureEligibleGuilds };
              items4[1] = closure_6(closure_12, obj13);
              tmp28Result = closure_7(Stack4, obj8);
            }
          }
          return tmp28Result;
        }
        const obj14 = { style: tmp.state, align: "center", spacing: nativeDefault.space.PX_8, children: items5 };
        const Stack3 = tmp2(5600).Stack;
        items5 = [closure_6(ActivityIndicator, {})];
        const obj15 = { variant: "text-sm/normal", color: "text-muted", children: intl8.string(_modDef3753["XE+JXX"]) };
        const Text2 = tmp2(4892).Text;
        intl8 = tmp2(1126).intl;
        items5[1] = closure_6(Text2, obj15);
        tmp28Result = closure_7(Stack3, obj14);
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
        const obj16 = { spacing: nativeDefault.space.PX_24, children: items6 };
        const Stack = tmp2(5600).Stack;
        const obj17 = { title: intl.string(_modDef3753.DnsyEc), entries: found1, fallbackGuildId: id };
        intl = tmp2(1126).intl;
        items6 = [closure_6(closure_11, obj17), ,];
        const obj18 = { title: intl2.string(_modDef3753.p8lFfK), entries: found2, fallbackGuildId: id };
        intl2 = tmp2(1126).intl;
        items6[1] = closure_6(closure_11, obj18);
        const obj19 = { title: intl3.string(_modDef3753.sFiGNz), guilds: conjureEligibleGuilds };
        intl3 = tmp2(1126).intl;
        items6[2] = closure_6(closure_12, obj19);
        return closure_7(Stack, obj16);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let obj5;
      let tmp11;
      let tmp12;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(8);
      const bottom = useSafeAreaInsetsDefault().bottom;
      const tmp5 = closure_9(bottom);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = require("ConjureActionCreators");
          obj.listProjects();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      useMountEffectDefault(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: intl.string(_modDef3753.uk6jhJ) };
        const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
        intl = intl10.intl;
        const tmp10 = metroRequire(BottomSheetTitleHeader, obj2);
        cResult[1] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== bottom) {
        const obj3 = { bottom };
        cResult[2] = bottom;
        cResult[3] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = metroRequire(closure_13, {});
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp5.scrollContent) {
        let tmp16;
        if (cResult[6] === tmp11) {
          tmp16 = cResult[7];
        }
        return tmp16;
      }
      const obj4 = {
        scrollable: true,
        header: tmp8,
        children: metroRequire(BottomSheetModal.BottomSheetScrollView, obj5),
      };
      const ActionSheet = ActionSheet2.ActionSheet;
      obj5 = { contentContainerStyle: tmp5.scrollContent, scrollIndicatorInsets: tmp11, children: tmp12 };
      const tmp17 = metroRequire(ActionSheet, obj4);
      cResult[5] = tmp5.scrollContent;
      cResult[6] = tmp11;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : () => {
      let BottomSheetScrollView;
      let BottomSheetTitleHeader;
      let intl;
      let obj2;
      let obj3;
      const bottom = useSafeAreaInsetsDefault().bottom;
      const tmp = closure_9(bottom);
      useMountEffectDefault(() => {
        const obj = require("ConjureActionCreators");
        obj.listProjects();
      });
      let obj = {
        scrollable: true,
        header: metroRequire(BottomSheetTitleHeader, obj2),
        children: metroRequire(BottomSheetScrollView, obj3),
      };
      const ActionSheet = ActionSheet2.ActionSheet;
      obj2 = { title: intl.string(_modDef3753.uk6jhJ) };
      BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl10.intl;
      obj3 = {
        contentContainerStyle: tmp.scrollContent,
        scrollIndicatorInsets: { bottom },
        children: metroRequire(closure_13, {}),
      };
      BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      return metroRequire(ActionSheet, obj);
    };
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default tmp5;
