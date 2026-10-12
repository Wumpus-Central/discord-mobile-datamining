// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import ConjureProjectListDefault from "../../projects/native/ConjureProjectList.tsx";
import ConjureChatSceneDefault from "ConjureChatScene.tsx";
import ConjureDebugSceneDefault from "../../debug/native/ConjureDebugScene.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ConjureBuilderRouteStore from "../ConjureBuilderRouteStore.tsx";

require = fn;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RoutedProjectOpener(projectId) {
      const cResult = projectId(openedProjectIdRef[9]).c(6);
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      openedProjectIdRef = projectId.openedProjectIdRef;
      let obj = projectId(openedProjectIdRef[9]);
      const navigation = projectId(openedProjectIdRef[10]).useNavigation();
      if (cResult[0] === navigation) {
        if (cResult[1] === openedProjectIdRef) {
          if (cResult[2] === projectId) {
            if (cResult[3] === sceneProjectId) {
              let tmp3 = cResult[4];
              let tmp4 = cResult[5];
            }
            const effect = noop.useEffect(tmp3, tmp4);
            return null;
          }
        }
      }
      const fn = function o() {
        let tmp2 = null != projectId;
        if (tmp2) {
          tmp2 = projectId !== openedProjectIdRef.current;
        }
        if (tmp2) {
          openedProjectIdRef.current = projectId;
          if (projectId !== sceneProjectId) {
            const obj = { projectId };
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
          }
        }
      };
      const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
      cResult[0] = navigation;
      cResult[1] = openedProjectIdRef;
      cResult[2] = projectId;
      cResult[3] = sceneProjectId;
      cResult[4] = fn;
      cResult[5] = items;
      tmp4 = items;
      tmp3 = fn;
      const obj2 = projectId(openedProjectIdRef[10]);
    }
  : function RoutedProjectOpener(projectId) {
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      const openedProjectIdRef = projectId.openedProjectIdRef;
      const navigation = projectId(openedProjectIdRef[10]).useNavigation();
      const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
      const effect = noop.useEffect(() => {
        let tmp2 = null != projectId;
        if (tmp2) {
          tmp2 = projectId !== openedProjectIdRef.current;
        }
        if (tmp2) {
          openedProjectIdRef.current = projectId;
          if (projectId !== sceneProjectId) {
            const obj = { projectId };
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
          }
        }
      }, items);
      return null;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureStandaloneScreen(guildId) {
      const cResult = guildId(stateFromStores[9]).c(56);
      guildId = guildId.guildId;
      let obj = guildId(stateFromStores[9]);
      const navigation = guildId(stateFromStores[10]).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureBuilderRouteStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class C {
          constructor() {
            routedProjectId = closure_8.getRoutedProjectId(guildId);
            return routedProjectId;
          }
        }
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = C;
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        class C {
          constructor() {
            routedProjectId = closure_8.getRoutedProjectId(guildId);
            return routedProjectId;
          }
        }
        tmp8 = cResult[3];
      }
      let obj2 = guildId(stateFromStores[10]);
      stateFromStores = guildId(stateFromStores[12]).useStateFromStores(first, C, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            routedProjectId = closure_8.getRoutedProjectId(guildId);
            return routedProjectId;
          }
        }
        const items2 = [GuildStore];
        cResult[4] = items2;
        const tmp10 = items2;
      } else {
        class C {
          constructor() {
            routedProjectId = closure_8.getRoutedProjectId(guildId);
            return routedProjectId;
          }
        }
      }
      if (cResult[5] !== guildId) {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
        const items3 = [guildId];
        cResult[5] = guildId;
        cResult[6] = R;
        cResult[7] = items3;
        let tmp12 = items3;
      } else {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
        tmp12 = cResult[7];
      }
      const tmpResult = guildId(stateFromStores[12]);
      const stateFromStores1 = guildId(stateFromStores[12]).useStateFromStores(tmp10, R, tmp12);
      if (cResult[8] !== guildId) {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
        tmp15[0] = guildId;
        cResult[8] = guildId;
        cResult[9] = tmp15;
      } else {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
      }
      const tmpResult5 = guildId(stateFromStores[12]);
      const isConjureGuildEnabled = guildId(stateFromStores[13]).useIsConjureGuildEnabled(tmp15);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
        const items4 = [GuildMemberStore];
        cResult[10] = items4;
        const tmp17 = items4;
      } else {
        class R {
          constructor() {
            return closure_6.getGuild(guildId);
          }
        }
      }
      if (cResult[11] !== guildId) {
        class F {
          constructor() {
            selfMember = closure_5.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        const items5 = [guildId];
        cResult[11] = guildId;
        cResult[12] = items5;
        cResult[13] = F;
        let tmp19 = F;
        const tmp18 = items5;
      } else {
        class F {
          constructor() {
            selfMember = closure_5.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        tmp19 = cResult[13];
      }
      const tmpResult6 = guildId(stateFromStores[13]);
      const stateFromStoresArray = guildId(stateFromStores[12]).useStateFromStoresArray(tmp17, tmp19, tmp18);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            selfMember = closure_5.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        const items6 = [GuildStore, PermissionStore];
        cResult[14] = items6;
        const tmp21 = items6;
      } else {
        class F {
          constructor() {
            selfMember = closure_5.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
      }
      if (cResult[15] !== guildId) {
        class J {
          constructor() {
            guild = closure_6.getGuild(guildId);
            canResult = null != guild;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        const items7 = [guildId];
        cResult[15] = guildId;
        cResult[16] = J;
        cResult[17] = items7;
        let tmp24 = items7;
      } else {
        class J {
          constructor() {
            guild = closure_6.getGuild(guildId);
            canResult = null != guild;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        tmp24 = cResult[17];
      }
      const tmpResult7 = guildId(stateFromStores[12]);
      const stateFromStores2 = guildId(stateFromStores[12]).useStateFromStores(tmp21, J, tmp24);
      if (cResult[18] === guildId) {
        class J {
          constructor() {
            guild = closure_6.getGuild(guildId);
            canResult = null != guild;
            if (canResult) {
              tmp3 = closure_7;
              tmp4 = Permissions;
              canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        if (cResult[21] === stateFromStores2) {
          class J {
            constructor() {
              guild = closure_6.getGuild(guildId);
              canResult = null != guild;
              if (canResult) {
                tmp3 = closure_7;
                tmp4 = Permissions;
                canResult = closure_7.can(Permissions.MANAGE_GUILD, guild);
              }
              return canResult;
            }
          }
        }
        const items8 = [isConjureGuildEnabled, guildId, stateFromStoresArray, stateFromStores2];
        cResult[21] = stateFromStores2;
        cResult[22] = stateFromStoresArray;
        cResult[23] = guildId;
        cResult[24] = isConjureGuildEnabled;
        cResult[25] = items8;
      }
      class D {
        constructor() {
          if (closure_4) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            tmp3 = guildId;
            listProjectsResult = obj.listProjects(guildId);
          }
          return;
        }
      }
      cResult[18] = guildId;
      cResult[19] = isConjureGuildEnabled;
      cResult[20] = D;
      const tmpResult8 = guildId(stateFromStores[12]);
    }
  : function ConjureStandaloneScreen(guildId) {
      guildId = guildId.guildId;
      let stateFromStores;
      let openedProjectIdRef;
      const navigation = guildId(stateFromStores[10]).useNavigation();
      let obj = guildId(stateFromStores[10]);
      let items = [ConjureBuilderRouteStore];
      const items1 = [guildId];
      stateFromStores = guildId(stateFromStores[12]).useStateFromStores(
        items,
        () => {
          const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
          return routedProjectId;
        },
        items1,
      );
      let obj2 = guildId(stateFromStores[12]);
      const items2 = [GuildStore];
      const items3 = [guildId];
      const stateFromStores1 = guildId(stateFromStores[12]).useStateFromStores(
        items2,
        () => GuildStore.getGuild(guildId),
        items3,
      );
      let obj3 = guildId(stateFromStores[12]);
      const isConjureGuildEnabled = guildId(stateFromStores[13]).useIsConjureGuildEnabled({
        guildId,
        location: "VibegrationsStandaloneScreen",
      });
      const obj4 = guildId(stateFromStores[13]);
      const items4 = [openedProjectIdRef];
      const items5 = [guildId];
      const stateFromStoresArray = guildId(stateFromStores[12]).useStateFromStoresArray(
        items4,
        () => {
          const selfMember = GuildMemberStore.getSelfMember(guildId);
          let roles;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return roles;
        },
        items5,
      );
      const obj5 = guildId(stateFromStores[12]);
      const items6 = [GuildStore, PermissionStore];
      const items7 = [guildId];
      const items8 = [
        isConjureGuildEnabled,
        guildId,
        stateFromStoresArray,
        guildId(stateFromStores[12]).useStateFromStores(
          items6,
          () => {
            guild = GuildStore.getGuild(guildId);
            let canResult = null != guild;
            if (canResult) {
              canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          },
          items7,
        ),
      ];
      const effect = isConjureGuildEnabled.useEffect(() => {
        if (isConjureGuildEnabled) {
          ConjureActionCreators.listProjects(guildId);
        }
      }, items8);
      const items9 = [stateFromStores1, isConjureGuildEnabled, navigation];
      const effect1 = isConjureGuildEnabled.useEffect(() => {
        if (!tmp) {
          navigation.goBack();
        }
        tmp = null == stateFromStores1 || isConjureGuildEnabled;
      }, items9);
      openedProjectIdRef = isConjureGuildEnabled.useRef(stateFromStores);
      const obj7 = {};
      const obj8 = { headerLeft: null, headerTitle: null, render: null };
      const obj6 = guildId(stateFromStores[12]);
      obj8.headerLeft = guildId(stateFromStores[15]).getHeaderCloseButton(() => navigation.goBack());
      obj8.headerTitle = function headerTitle() {
        const obj = { title: null };
        const intl = guildId(stateFromStores[16]).intl;
        obj.title = intl.string(navigation(stateFromStores[17]).uk6jhJ);
        return closure_1_10(guildId(stateFromStores[15]).NavigatorHeader, obj);
      };
      obj8.render = function render() {
        const obj = { children: null };
        const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
        const items = [collapsed(closure_13, obj2), collapsed(ConjureProjectListDefault, { guildId })];
        obj.children = items;
        return __initData(closure_2_11, obj);
      };
      obj7[guildId(stateFromStores[11]).ConjureScreenScenes.PROJECTS] = obj8;
      obj7[guildId(stateFromStores[11]).ConjureScreenScenes.CHAT] = {
        ignoreKeyboard: true,
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            collapsed(closure_13, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
            collapsed(ConjureChatSceneDefault, { guildId, projectId }),
          ];
          obj.children = items;
          return __initData(closure_2_11, obj);
        },
      };
      obj7[guildId(stateFromStores[11]).ConjureScreenScenes.DEBUG] = {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(stateFromStores[16]).intl;
          obj.title = intl.string(navigation(stateFromStores[17])["Q4FN+H"]);
          return closure_1_10(guildId(stateFromStores[15]).NavigatorHeader, obj);
        },
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            collapsed(closure_13, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
            collapsed(ConjureDebugSceneDefault, { projectId }),
          ];
          obj.children = items;
          return __initData(closure_2_11, obj);
        },
      };
      const obj10 = {
        screens: obj7,
        initialRouteStack: stateFromStores1(
          isConjureGuildEnabled.useState(() => {
            const items = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
            if (null != stateFromStores) {
              const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: null };
              const obj3 = { projectId: tmp3 };
              obj2.params = obj3;
              items.push(obj2);
            }
            return items;
          }),
          1,
        )[0],
        headerBackTitle: null,
      };
      let intl = guildId(stateFromStores[16]).intl;
      obj10.headerBackTitle = intl.string(navigation(stateFromStores[17]).uk6jhJ);
      return closure_10(guildId(stateFromStores[21]).Navigator, obj10);
    };
