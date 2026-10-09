// discord_app/modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useStartAuthorizeDefault from "../../../../application_account_linking/native/useStartAuthorize.tsx";
import useGetOrFetchApplicationsDefault from "../../../../applications/useGetOrFetchApplications.tsx";
import AuthorizedAppsActionCreatorsDefault from "../../../../oauth2/AuthorizedAppsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";
import AuthorizedAppsStore from "../../../../oauth2/AuthorizedAppsStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  scrollContainer: null,
  buttonRow: null,
  rewardImage: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.buttonRow = { gap: nativeDefault.space.PX_8 };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.sm };
obj2.rewardImage = size;
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDeauthorize(arg0) {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthorizedAppsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return AuthorizedAppsStore.getNewestTokenForApplication(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const fn2 = function c() {
          if (null != stateFromStores) {
            AuthorizedAppsActionCreatorsDefault.delete(tmp.id);
          }
        };
        cResult[3] = stateFromStores;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp8) {
        if (cResult[6] === tmp9) {
          let tmp10 = cResult[7];
        }
        return tmp10;
      }
      const obj2 = { canDeauthorize: null != stateFromStores, deauthorize: tmp8 };
      cResult[5] = tmp8;
      cResult[6] = null != stateFromStores;
      cResult[7] = obj2;
      tmp10 = obj2;
      const tmpResult = require("initialize");
    }
  : function useDeauthorize(arg0) {
      _require = arg0;
      const items = [AuthorizedAppsStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        AuthorizedAppsStore.getNewestTokenForApplication(closure_0),
      );
      const items1 = [stateFromStores];
      let obj = require("initialize");
      return {
        canDeauthorize: null != stateFromStores,
        deauthorize: noop.useCallback(() => {
          if (null != stateFromStores) {
            AuthorizedAppsActionCreatorsDefault.delete(tmp.id);
          }
        }, items1),
      };
    };
ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_8 };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DevToolsAccountLinkingScreen() {
      const cResult = first(stateFromStores[11]).c(68);
      const tmp4 = closure_13();
      require("useSafeAreaInsets")();
      const tmp7 = getOrFetchApplication(startAuthorization.useState(""), 2);
      first = tmp7[0];
      importDefault = tmp7[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function u() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        [tmp9, tmp10] = cResult;
      }
      let obj = first(stateFromStores[11]);
      stateFromStores = first(stateFromStores[12]).useStateFromStores(tmp9, tmp10);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        let tmp13 = items1;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== stateFromStores) {
        const fn2 = function x() {
          return GuildStore.getGuild(stateFromStores);
        };
        cResult[3] = stateFromStores;
        cResult[4] = fn2;
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[4];
      }
      let tmpResult = first(stateFromStores[12]);
      const stateFromStores1 = first(stateFromStores[12]).useStateFromStores(tmp13, tmp15);
      let gameApplicationIds;
      if (stateFromStores1 != null) {
        gameApplicationIds = stateFromStores1.gameApplicationIds;
      }
      if (cResult[5] !== gameApplicationIds) {
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
        let tmp18 = gameApplicationIds1;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function z(arg0) {
          return null != arg0;
        };
        cResult[7] = fn3;
        let tmp20 = fn3;
      } else {
        tmp20 = cResult[7];
      }
      const tmpResult4 = first(stateFromStores[12]);
      let found = require("useGetOrFetchApplications")(tmp18).filter(tmp20);
      const arr4 = require("useGetOrFetchApplications")(tmp18);
      getOrFetchApplication = first(stateFromStores[15]).useGetOrFetchApplication(first);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ApplicationStore];
        cResult[8] = items2;
        let tmp22 = items2;
      } else {
        tmp22 = cResult[8];
      }
      let linkedGames;
      if (getOrFetchApplication != null) {
        linkedGames = getOrFetchApplication.linkedGames;
      }
      if (cResult[9] !== linkedGames) {
        let linkedGames1;
        if (getOrFetchApplication != null) {
          linkedGames1 = getOrFetchApplication.linkedGames;
        }
        class B {
          constructor() {
            found = undefined;
            if (closure_3 != null) {
              linkedGames = closure_3.linkedGames;
              if (linkedGames != null) {
                mapped = linkedGames.map((id) => application.getApplication(id.id));
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
        cResult[10] = B;
        let tmp25 = B;
      } else {
        tmp25 = cResult[10];
      }
      const tmpResult5 = first(stateFromStores[15]);
      const stateFromStoresArray = first(stateFromStores[12]).useStateFromStoresArray(tmp22, tmp25);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            found = undefined;
            if (closure_3 != null) {
              linkedGames = closure_3.linkedGames;
              if (linkedGames != null) {
                mapped = linkedGames.map((id) => application.getApplication(id.id));
                found = mapped.filter((item) => null != item);
              }
            }
            if (found == null) {
              found = [];
            }
            return found;
          }
        }
        let tmp27 = { debug: true };
        const obj2 = { debug: true };
      } else {
        tmp27 = cResult[11];
      }
      const tmp28 = require("useStartAuthorize")(getOrFetchApplication, tmp27);
      startAuthorization = tmp28.startAuthorization;
      ({ hasAlreadyLinked, debug, connectionApp } = tmp28);
      let id;
      if (connectionApp != null) {
        id = connectionApp.id;
      }
      closure_14(id);
      let id1;
      if (connectionApp != null) {
        id1 = connectionApp.id;
      }
      if (cResult[12] === id1) {
        class B {
          constructor() {
            found = undefined;
            if (closure_3 != null) {
              linkedGames = closure_3.linkedGames;
              if (linkedGames != null) {
                mapped = linkedGames.map((id) => application.getApplication(id.id));
                found = mapped.filter((item) => null != item);
              }
            }
            if (found == null) {
              found = [];
            }
            return found;
          }
        }
        const sum = tmp37 + tmp5(tmp2[9]).space.PX_16;
        if (cResult[15] !== sum) {
          const obj3 = { paddingBottom: sum };
          class B {
            constructor() {
              found = undefined;
              if (closure_3 != null) {
                linkedGames = closure_3.linkedGames;
                if (linkedGames != null) {
                  mapped = linkedGames.map((id) => application.getApplication(id.id));
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
          let tmp39 = obj3;
        } else {
          tmp39 = cResult[16];
        }
        if (cResult[17] === tmp4.scrollContainer) {
          const TableRowGroup = tmp(tmp2[17]).TableRowGroup;
          class B {
            constructor() {
              found = undefined;
              if (closure_3 != null) {
                linkedGames = closure_3.linkedGames;
                if (linkedGames != null) {
                  mapped = linkedGames.map((id) => application.getApplication(id.id));
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
            let str3 = stateFromStores1.name;
          }
          if (str3 == null) {
            str3 = "N/A";
          }
          let _HermesInternal = HermesInternal;
          const combined = "Guild Official Games - " + str3;
          if (null != stateFromStores1) {
            if (found.length > 0) {
              let mapped = found.map((name) => {
                const obj = {
                  label: "" + name.name + " (" + name.id + ")",
                  onPress() {
                    return closure_1(name.id);
                  },
                  trailing: null,
                };
                let tmpResult;
                if (name === name.id) {
                  tmpResult = closure_1_11(first(stateFromStores[19]).Text, {
                    variant: "text-sm/semibold",
                    children: "Selected",
                  });
                }
                obj.trailing = tmpResult;
                return closure_1_11(first(stateFromStores[18]).TableRow, obj, name.id);
              });
            } else {
              mapped = closure_11(tmp(tmp2[18]).TableRow, { label: "No official games" });
            }
            class B {
              constructor() {
                found = undefined;
                if (closure_3 != null) {
                  linkedGames = closure_3.linkedGames;
                  if (linkedGames != null) {
                    mapped = linkedGames.map((id) => application.getApplication(id.id));
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
            const tmp43 = closure_11(tmp(tmp2[18]).TableRow, { label: "No guild selected" });
            class B {
              constructor() {
                found = undefined;
                if (closure_3 != null) {
                  linkedGames = closure_3.linkedGames;
                  if (linkedGames != null) {
                    mapped = linkedGames.map((id) => application.getApplication(id.id));
                    found = mapped.filter((item) => null != item);
                  }
                }
                if (found == null) {
                  found = [];
                }
                return found;
              }
            }
            const obj4 = { title: combined, hasIcons: false, children: tmp43 };
            const tmp48 = closure_11(TableRowGroup, obj4);
            cResult[20] = TableRowGroup;
            cResult[21] = combined;
            cResult[22] = tmp43;
            cResult[23] = tmp48;
          }
        }
        const items3 = [tmp4.scrollContainer, tmp39];
        cResult[17] = tmp4.scrollContainer;
        cResult[18] = tmp39;
        cResult[19] = items3;
      }
      if (stateFromStoresArray.length > 0) {
        const mapped1 = stateFromStoresArray.map((id) => {
          id = undefined;
          if (connectionApp != null) {
            id = connectionApp.id;
          }
          if (id === id.id) {
            const _HermesInternal = HermesInternal;
            let name = "" + id.name + "*";
          } else {
            name = id.name;
          }
          return name;
        });
        class B {
          constructor() {
            found = undefined;
            if (closure_3 != null) {
              linkedGames = closure_3.linkedGames;
              if (linkedGames != null) {
                mapped = linkedGames.map((id) => application.getApplication(id.id));
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
      const tmpResult6 = first(stateFromStores[12]);
    }
  : function DevToolsAccountLinkingScreen() {
      const tmp = closure_13();
      const tmp5 = getOrFetchApplication(noop.useState(""), 2);
      value = tmp5[0];
      importDefault = tmp7;
      const tmp4 = useSafeAreaInsetsDefault();
      const items = [SelectedGuildStore];
      dependencyMap = value(504).useStateFromStores(items, () => guildId.getGuildId());
      let obj = value(504);
      const items1 = [GuildStore];
      const stateFromStores = value(504).useStateFromStores(items1, () => GuildStore.getGuild(closure_2));
      let gameApplicationIds;
      if (stateFromStores != null) {
        gameApplicationIds = stateFromStores.gameApplicationIds;
      }
      if (gameApplicationIds == null) {
        gameApplicationIds = [];
      }
      const obj2 = value(504);
      let found = useGetOrFetchApplicationsDefault(gameApplicationIds).filter((item) => null != item);
      const arr4 = useGetOrFetchApplicationsDefault(gameApplicationIds);
      getOrFetchApplication = value(6854).useGetOrFetchApplication(value);
      const tmp8Result = value(6854);
      const items2 = [ApplicationStore];
      const stateFromStoresArray = value(504).useStateFromStoresArray(items2, () => {
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
      ({ startAuthorization: noop, hasAlreadyLinked, debug, connectionApp } = tmp11);
      let id;
      if (connectionApp != null) {
        id = connectionApp.id;
      }
      const tmp8Result2 = value(504);
      let str = "N/A";
      let str2 = "N/A";
      ({ canDeauthorize, deauthorize } = closure_14(id));
      if (stateFromStoresArray.length > 0) {
        let mapped = stateFromStoresArray.map((id) => {
          id = undefined;
          if (connectionApp != null) {
            id = connectionApp.id;
          }
          if (id === id.id) {
            const _HermesInternal = HermesInternal;
            let name = "" + id.name + "*";
          } else {
            name = id.name;
          }
          return name;
        });
        str2 = mapped.join(", ");
      }
      const obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
      const items3 = [tmp.scrollContainer];
      const tmp12Result = closure_14(id);
      items3[1] = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
      obj3.contentContainerStyle = items3;
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (name == null) {
        name = str;
      }
      const obj5 = { title: "Guild Official Games - " + name, hasIcons: false, children: null };
      if (null != stateFromStores) {
        if (found.length > 0) {
          let mapped1 = found.map((name) => {
            const obj = {
              label: "" + name.name + " (" + name.id + ")",
              onPress() {
                return closure_1(name.id);
              },
              trailing: null,
            };
            let tmpResult;
            if (name === name.id) {
              tmpResult = closure_1_11(first(dependencyMap[19]).Text, {
                variant: "text-sm/semibold",
                children: "Selected",
              });
            }
            obj.trailing = tmpResult;
            return closure_1_11(first(dependencyMap[18]).TableRow, obj, name.id);
          });
        } else {
          mapped1 = closure_11(tmp8(6186).TableRow, { label: "No official games" });
        }
      } else {
        obj5.children = closure_11(tmp8(6186).TableRow, { label: "No guild selected" });
        const items4 = [closure_11(tmp8(6269).TableRowGroup, obj5), , ,];
        const obj6 = { style: null, children: null };
        const obj7 = { padding: tmp2(587).space.PX_12 };
        obj6.style = obj7;
        const obj8 = { label: "Application ID", value, onChange: tmp7 };
        obj6.children = closure_11(tmp8(6290).TextInput, obj8);
        const items5 = [closure_11(closure_6, obj6), ,];
        if (null != getOrFetchApplication) {
          str = getOrFetchApplication.name;
        }
        const obj9 = { title: "Application", hasIcons: false, children: null };
        const obj10 = { label: null };
        let _HermesInternal = HermesInternal;
        obj10.label = "Name: " + str;
        items5[1] = closure_11(tmp8(6186).TableRow, obj10);
        const obj11 = { label: null };
        const _HermesInternal2 = HermesInternal;
        obj11.label = "Linked Games: " + str2;
        items5[2] = closure_11(tmp8(6186).TableRow, obj11);
        obj9.children = items5;
        items4[1] = closure_12(tmp8(6269).TableRowGroup, obj9);
        let str6 = "text-feedback-critical";
        if (debug.hasConnectionEntrypointUrl) {
          str6 = "text-feedback-positive";
        }
        const obj12 = { variant: "text-sm/semibold", color: str6, children: null };
        let str7 = "Not set";
        if (debug.hasConnectionEntrypointUrl) {
          str7 = "Set";
        }
        const obj13 = { label: "Connection Entrypoint URL", trailing: null };
        obj12.children = str7;
        obj13.trailing = closure_11(tmp8(5087).Text, obj12);
        const items6 = [closure_11(tmp8(6186).TableRow, obj13), ,];
        let str8 = "text-muted";
        if (hasAlreadyLinked) {
          str8 = "text-feedback-positive";
        }
        const obj14 = { variant: "text-sm/semibold", color: str8, children: null };
        let str9 = "No";
        if (hasAlreadyLinked) {
          str9 = "Yes";
        }
        const obj15 = { title: "Authorization", hasIcons: false, children: null };
        const obj16 = { label: "Already Linked", trailing: null };
        obj14.children = str9;
        obj16.trailing = closure_11(tmp8(5087).Text, obj14);
        items6[1] = closure_11(tmp8(6186).TableRow, obj16);
        const obj17 = { style: tmp.buttonRow, children: null };
        const obj18 = {
          disabled: !tmp11.canStartAuthorization,
          onPress() {
            return noop({});
          },
          variant: "primary",
          text: "Start Authorization",
        };
        const items7 = [closure_11(tmp8(5376).Button, obj18)];
        const obj19 = {
          disabled: !canDeauthorize,
          onPress: deauthorize,
          variant: "critical-primary",
          text: "Deauthorize",
        };
        items7[1] = closure_11(tmp8(5376).Button, obj19);
        obj17.children = items7;
        items6[2] = closure_12(closure_6, obj17);
        obj15.children = items6;
        items4[2] = closure_12(tmp8(6269).TableRowGroup, obj15);
        let prop;
        if (connectionApp != null) {
          prop = connectionApp.applicationAccountLinkBenefitConfig;
        }
        let tmp15Result = null != prop;
        if (tmp15Result) {
          let tmp17Result = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
          if (tmp17Result) {
            const obj20 = { style: null, children: null };
            const obj21 = { padding: tmp2(587).space.PX_12 };
            obj20.style = obj21;
            const obj22 = { source: null, style: null };
            const obj23 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
            obj22.source = obj23;
            obj22.style = tmp.rewardImage;
            obj20.children = closure_11(tmp2(6163), obj22);
            tmp17Result = closure_11(closure_6, obj20);
          }
          const items8 = [tmp17Result];
          let str10 = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
          if (str10 == null) {
            str10 = "Unnamed Reward";
          }
          const obj24 = { title: "Reward Configuration", hasIcons: false, children: null };
          const obj25 = { label: null };
          const _HermesInternal3 = HermesInternal;
          obj25.label = "Reward: " + str10;
          items8[1] = closure_11(tmp8(6186).TableRow, obj25);
          obj24.children = items8;
          tmp15Result = closure_12(tmp8(6269).TableRowGroup, obj24);
        }
        items4[3] = tmp15Result;
        obj3.children = items4;
        return closure_12(connectionApp, obj3);
      }
      const obj4 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    };
