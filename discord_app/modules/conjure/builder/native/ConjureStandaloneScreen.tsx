// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import ConjureActivity from "../../projects/ConjureActivity.tsx";
import ConjureChatSceneDefault from "ConjureChatScene.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import selectConjureChannelDefault from "../selectConjureChannel.tsx";
import ConjureHomeLandingDefault from "../../home/native/ConjureHomeLanding.tsx";
import ConjureProjectListDefault from "../../projects/native/ConjureProjectList.tsx";
import ConjureDebugSceneDefault from "../../debug/native/ConjureDebugScene.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjureBuilderRouteStore from "../ConjureBuilderRouteStore.tsx";

const require = globalThis.__r;

require = fn;
const Permissions = fn(1084).Permissions;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GlobalChatScene(projectId) {
      const cResult = projectId(576).c(9);
      projectId = projectId.projectId;
      const fallbackGuildId = projectId.fallbackGuildId;
      const onExit = projectId.onExit;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === fallbackGuildId) {
        if (cResult[2] === projectId) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === onExit) {
            if (cResult[7] === projectId) {
              let tmp9 = cResult[8];
            }
            return tmp9;
          }
        }
        const obj2 = { guildId: stateFromStores, projectId, onExit };
        const tmp12 = closure_11(fallbackGuildId(11841), obj2);
        cResult[5] = stateFromStores;
        cResult[6] = onExit;
        cResult[7] = projectId;
        cResult[8] = tmp12;
        tmp9 = tmp12;
        const tmpResult = tmp(504);
      }
      const fn = function o() {
        const project = ConjureProjectStore.getProject(projectId);
        let result = null;
        if (null != project) {
          result = ConjureActivity.conjureProjectGuildId(project);
        }
        if (result == null) {
          result = fallbackGuildId;
        }
        return result;
      };
      const items1 = [projectId, fallbackGuildId];
      cResult[1] = fallbackGuildId;
      cResult[2] = projectId;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      let obj = projectId(576);
      tmp = projectId;
    }
  : function GlobalChatScene(onExit) {
      const projectId = onExit.projectId;
      const fallbackGuildId = onExit.fallbackGuildId;
      const items = [ConjureProjectStore];
      const items1 = [projectId, fallbackGuildId];
      const guildId = projectId(504).useStateFromStores(
        items,
        () => {
          const project = ConjureProjectStore.getProject(projectId);
          let result = null;
          if (null != project) {
            result = ConjureActivity.conjureProjectGuildId(project);
          }
          if (result == null) {
            result = fallbackGuildId;
          }
          return result;
        },
        items1,
      );
      return closure_11(fallbackGuildId(11841), { guildId, projectId, onExit: onExit.onExit });
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RoutedProjectOpener(guildId) {
      const cResult = guildId(request[10]).c(11);
      guildId = guildId.guildId;
      const inline = guildId.inline;
      request = guildId.request;
      const sceneProjectId = guildId.sceneProjectId;
      const handledKeyRef = guildId.handledKeyRef;
      let obj = guildId(request[10]);
      const navigation = guildId(request[14]).useNavigation();
      if (cResult[0] === guildId) {
        if (cResult[1] === inline) {
          if (cResult[2] === sceneProjectId) {
            let tmp3 = cResult[3];
            let tmp4 = cResult[4];
          }
          const effect = handledKeyRef.useEffect(tmp3, tmp4);
          if (cResult[5] === handledKeyRef) {
            if (cResult[6] === navigation) {
              if (cResult[7] === request) {
                if (cResult[8] === sceneProjectId) {
                  let tmp6 = cResult[9];
                  let tmp7 = cResult[10];
                }
                const effect1 = obj3.useEffect(tmp6, tmp7);
                return null;
              }
            }
          }
          const fn2 = function l() {
            let isFocusedResult = null != request;
            if (isFocusedResult) {
              isFocusedResult = request.key !== handledKeyRef.current;
            }
            if (isFocusedResult) {
              isFocusedResult = navigation.isFocused();
            }
            if (isFocusedResult) {
              handledKeyRef.current = request.key;
              if (request.projectId !== sceneProjectId) {
                if (null != request.projectId) {
                  const obj = { projectId: request.projectId };
                  navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
                } else {
                  const routes = navigation.getState().routes;
                  if (routes.some((name) => name.name === guildId(request[16]).ConjureScreenScenes.PROJECTS)) {
                    navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
                  } else {
                    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
                  }
                }
              }
            }
          };
          const items = [request, sceneProjectId, handledKeyRef, navigation];
          cResult[5] = handledKeyRef;
          cResult[6] = navigation;
          cResult[7] = request;
          cResult[8] = sceneProjectId;
          cResult[9] = fn2;
          cResult[10] = items;
          tmp7 = items;
          tmp6 = fn2;
          obj3 = handledKeyRef;
        }
      }
      const fn = function o() {
        if (inline) {
          let tmp5 = sceneProjectId;
          if (sceneProjectId == null) {
            tmp5 = null;
          }
          selectConjureChannelDefault(guildId, tmp5);
        }
      };
      const items1 = [guildId, inline, sceneProjectId];
      cResult[0] = guildId;
      cResult[1] = inline;
      cResult[2] = sceneProjectId;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp4 = items1;
      tmp3 = fn;
    }
  : function RoutedProjectOpener(guildId) {
      guildId = guildId.guildId;
      const inline = guildId.inline;
      const request = guildId.request;
      const sceneProjectId = guildId.sceneProjectId;
      const handledKeyRef = guildId.handledKeyRef;
      const navigation = guildId(request[14]).useNavigation();
      const items = [guildId, inline, sceneProjectId];
      const effect = handledKeyRef.useEffect(() => {
        if (inline) {
          let tmp5 = sceneProjectId;
          if (sceneProjectId == null) {
            tmp5 = null;
          }
          selectConjureChannelDefault(guildId, tmp5);
        }
      }, items);
      const items1 = [request, sceneProjectId, handledKeyRef, navigation];
      const effect1 = handledKeyRef.useEffect(() => {
        let isFocusedResult = null != request;
        if (isFocusedResult) {
          isFocusedResult = request.key !== handledKeyRef.current;
        }
        if (isFocusedResult) {
          isFocusedResult = navigation.isFocused();
        }
        if (isFocusedResult) {
          handledKeyRef.current = request.key;
          if (request.projectId !== sceneProjectId) {
            if (null != request.projectId) {
              const obj = { projectId: request.projectId };
              navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
            } else {
              const routes = navigation.getState().routes;
              if (routes.some((name) => name.name === guildId(request[16]).ConjureScreenScenes.PROJECTS)) {
                navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
              } else {
                navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
              }
            }
          }
        }
      }, items1);
      return null;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureStandaloneScreen(guildId) {
      const cResult = guildId(focusRequest[10]).c(77);
      guildId = guildId.guildId;
      ({ onClose, inline, focusRequest } = guildId);
      importDefault = undefined !== inline && inline;
      let tmp4 = null;
      if (undefined !== focusRequest) {
        tmp4 = focusRequest;
      }
      focusRequest = tmp4;
      let obj = guildId(focusRequest[10]);
      const navigation = guildId(focusRequest[14]).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function j() {
          return navigation.goBack();
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (onClose == null) {
        onClose = tmp6;
      }
      const context = onClose.useContext(require("ConjureGlobalScreenContext"));
      GuildMemberStore = tmp8;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureBuilderRouteStore];
        cResult[2] = items;
        let tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[4] === tmp8) {
          let tmp11 = cResult[5];
          let tmp12 = cResult[6];
        }
        let projectId = tmp(tmp2[12]).useStateFromStores(tmp9, tmp11, tmp12);
        if (tmp8) {
          projectId = context.projectId;
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [projectId];
          cResult[7] = items1;
          let tmp13 = items1;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] !== guildId) {
          class N {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          const items2 = [guildId];
          cResult[8] = guildId;
          cResult[9] = N;
          cResult[10] = items2;
          let tmp16 = items2;
        } else {
          class N {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          tmp16 = cResult[10];
        }
        const tmpResult7 = tmp(tmp2[12]);
        const stateFromStores = tmp(tmp2[12]).useStateFromStores(tmp13, N, tmp16);
        if (cResult[11] !== guildId) {
          class N {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          tmp19[0] = guildId;
          cResult[11] = guildId;
          cResult[12] = tmp19;
        } else {
          class N {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
        }
        const tmpResult8 = tmp(tmp2[12]);
        const isConjureGuildEnabled = tmp(tmp2[18]).useIsConjureGuildEnabled(tmp19);
        const tmpResult9 = tmp(tmp2[18]);
        const isConjureMobileEnabled = tmp(tmp2[19]).useIsConjureMobileEnabled(
          isConjureGuildEnabled,
          "ConjureStandaloneScreen",
        );
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          const items3 = [GuildMemberStore];
          cResult[13] = items3;
          const tmp22 = items3;
        } else {
          class N {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
        }
        if (cResult[14] !== guildId) {
          class L {
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
          const items4 = [guildId];
          cResult[14] = guildId;
          cResult[15] = L;
          cResult[16] = items4;
          let tmp24 = items4;
        } else {
          class L {
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
          tmp24 = cResult[16];
        }
        const tmpResult10 = tmp(tmp2[19]);
        const stateFromStoresArray = tmp(tmp2[12]).useStateFromStoresArray(tmp22, L, tmp24);
        const _Symbol3 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
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
          const items5 = [projectId, stateFromStores];
          cResult[17] = items5;
          const tmp26 = items5;
        } else {
          class L {
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
        if (cResult[18] !== guildId) {
          class V {
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
          const items6 = [guildId];
          cResult[18] = guildId;
          cResult[19] = V;
          cResult[20] = items6;
          let tmp29 = items6;
        } else {
          class V {
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
          tmp29 = cResult[20];
        }
        const tmpResult11 = tmp(tmp2[12]);
        const stateFromStores1 = tmp(tmp2[12]).useStateFromStores(tmp26, V, tmp29);
        if (cResult[21] === guildId) {
          class V {
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
        class Y {
          constructor() {
            if (closure_8) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[20]);
              tmp3 = closure_5;
              tmp4 = undefined;
              if (!closure_5) {
                tmp4 = guildId;
              }
              listProjectsResult = obj.listProjects(tmp4);
            }
            return;
          }
        }
        cResult[21] = guildId;
        cResult[22] = isConjureMobileEnabled;
        cResult[23] = tmp8;
        cResult[24] = Y;
        const tmpResult12 = tmp(tmp2[12]);
      }
      const fn2 = function _() {
        let tmp;
        if (!closure_5) {
          const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
          tmp = routedProjectId;
        }
        return tmp;
      };
      const items7 = [guildId, null != context];
      cResult[3] = guildId;
      cResult[4] = null != context;
      cResult[5] = fn2;
      cResult[6] = items7;
      tmp12 = items7;
      tmp11 = fn2;
      const tmpResult = guildId(focusRequest[14]);
    }
  : function ConjureStandaloneScreen(guildId) {
      guildId = guildId.guildId;
      ({ onClose, inline } = guildId);
      if (inline === undefined) {
        inline = false;
      }
      let focusRequest = guildId.focusRequest;
      if (focusRequest === undefined) {
        focusRequest = null;
      }
      onClose = undefined;
      let context;
      closure_6 = undefined;
      let projectId;
      let stateFromStores;
      let isConjureMobileEnabled;
      let memo;
      let handledKeyRef;
      const navigation = guildId(focusRequest[14]).useNavigation();
      let items = [navigation];
      if (onClose == null) {
        onClose = onClose.useCallback(() => navigation.goBack(), items);
      }
      context = obj2.useContext(inline(tmp3[17]));
      closure_6 = tmp7;
      let obj = guildId(focusRequest[14]);
      const tmp5 = inline;
      let items1 = [isConjureMobileEnabled];
      const items2 = [guildId, null != context];
      projectId = guildId(focusRequest[12]).useStateFromStores(
        items1,
        () => {
          let tmp;
          if (!closure_6) {
            const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
            tmp = routedProjectId;
          }
          return tmp;
        },
        items2,
      );
      if (null != context) {
        projectId = context.projectId;
      }
      const tmp2Result = guildId(focusRequest[12]);
      const items3 = [closure_6];
      const items4 = [guildId];
      stateFromStores = guildId(focusRequest[12]).useStateFromStores(
        items3,
        () => GuildStore.getGuild(guildId),
        items4,
      );
      const tmp2Result7 = guildId(focusRequest[12]);
      const isConjureGuildEnabled = guildId(focusRequest[18]).useIsConjureGuildEnabled({
        guildId,
        location: "ConjureStandaloneScreen",
      });
      const tmp2Result8 = guildId(focusRequest[18]);
      isConjureMobileEnabled = guildId(focusRequest[19]).useIsConjureMobileEnabled(
        isConjureGuildEnabled,
        "ConjureStandaloneScreen",
      );
      const tmp2Result9 = guildId(focusRequest[19]);
      const items5 = [context];
      const items6 = [guildId];
      const stateFromStoresArray = guildId(focusRequest[12]).useStateFromStoresArray(
        items5,
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
        items6,
      );
      const tmp2Result10 = guildId(focusRequest[12]);
      const items7 = [closure_6, projectId];
      const items8 = [guildId];
      const items9 = [
        isConjureMobileEnabled,
        null != context,
        guildId,
        stateFromStoresArray,
        guildId(focusRequest[12]).useStateFromStores(
          items7,
          () => {
            guild = GuildStore.getGuild(guildId);
            let canResult = null != guild;
            if (canResult) {
              canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          },
          items8,
        ),
      ];
      const effect = obj2.useEffect(() => {
        if (isConjureMobileEnabled) {
          let tmp4;
          if (!closure_6) {
            tmp4 = guildId;
          }
          ConjureActionCreators.listProjects(tmp4);
        }
      }, items9);
      const items10 = [stateFromStores, isConjureMobileEnabled, onClose];
      const effect1 = obj2.useEffect(() => {
        if (!tmp) {
          onClose();
        }
        tmp = null == stateFromStores || isConjureMobileEnabled;
      }, items10);
      const items11 = [null != context, ,];
      let requestId;
      if (context != null) {
        requestId = context.requestId;
      }
      items11[1] = requestId;
      items11[2] = projectId;
      memo = obj2.useMemo(() => {
        if (closure_6) {
          let num = context.requestId;
          if (num == null) {
            num = 0;
          }
          const obj2 = { key: num, projectId };
          let tmp3 = obj2;
        } else if (null != projectId) {
          const obj = { key: projectId, projectId };
          tmp3 = obj;
        }
        return tmp3;
      }, items11);
      let key;
      if (memo != null) {
        key = memo.key;
      }
      handledKeyRef = obj2.useRef(key);
      let obj3 = { ignoreKeyboard: null != context, headerLeft: null, headerTitle: null, render: null };
      const tmp2Result12 = guildId(focusRequest[21]);
      if (null != context) {
        let headerBackButton = tmp2Result12.getHeaderBackButton(onClose, true);
      } else {
        headerBackButton = tmp2Result12.getHeaderCloseButton(onClose);
      }
      obj3.headerLeft = headerBackButton;
      obj3.headerTitle = function headerTitle() {
        const obj = { title: null };
        const intl = guildId(focusRequest[22]).intl;
        obj.title = intl.string(inline(focusRequest[23]).uk6jhJ);
        return handledKeyRef(guildId(focusRequest[21]).NavigatorHeader, obj);
      };
      obj3.render = function render() {
        const obj = { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef };
        const children = [closure_2_11(closure_15, obj)];
        if (closure_6) {
          const obj2 = { forMeGuildId: guildId, focusRequest };
          let tmp3Result = closure_2_11(ConjureHomeLandingDefault, obj2);
        } else {
          const obj3 = { guildId };
          tmp3Result = closure_2_11(ConjureProjectListDefault, obj3);
        }
        children[1] = tmp3Result;
        return map1(__initData, { children });
      };
      const obj6 = { value: inline, children: null };
      const obj7 = {
        screens: {
          [guildId(focusRequest[16]).ConjureScreenScenes.PROJECTS]: obj3,
          [guildId(focusRequest[16]).ConjureScreenScenes.CHAT]: {
            ignoreKeyboard: true,
            headerShown: false,
            render(projectId) {
              projectId = projectId.projectId;
              const children = [
                closure_2_11(closure_15, { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef }),
              ];
              if (closure_6) {
                const obj2 = { projectId, fallbackGuildId: guildId, onExit: onClose };
                let tmp3Result = closure_2_11(closure_14, obj2);
              } else {
                const obj3 = { guildId, projectId };
                tmp3Result = closure_2_11(ConjureChatSceneDefault, obj3);
              }
              children[1] = tmp3Result;
              return map1(__initData, { children });
            },
          },
          [guildId(focusRequest[16]).ConjureScreenScenes.DEBUG]: {
            headerTitle() {
              const obj = { title: null };
              const intl = guildId(focusRequest[22]).intl;
              obj.title = intl.string(inline(focusRequest[23])["Q4FN+H"]);
              return handledKeyRef(guildId(focusRequest[21]).NavigatorHeader, obj);
            },
            render(projectId) {
              projectId = projectId.projectId;
              const obj = { children: null };
              const items = [
                closure_2_11(closure_15, { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef }),
                closure_2_11(ConjureDebugSceneDefault, { projectId }),
              ];
              obj.children = items;
              return map1(__initData, obj);
            },
          },
        },
        initialRouteStack: navigation(
          onClose.useState(() => {
            if (closure_6) {
              if (null != projectId) {
                const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: null };
                const obj3 = { projectId: tmp };
                obj2.params = obj3;
                const items = [obj2];
                return items;
              }
            }
            const items1 = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
            if (null != projectId) {
              const obj4 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: null };
              const obj5 = { projectId: tmp3 };
              obj4.params = obj5;
              items1.push(obj4);
            }
            return items1;
          }),
          1,
        )[0],
        headerBackTitle: null,
      };
      let intl = tmp2(tmp3[22]).intl;
      obj7.headerBackTitle = intl.string(tmp5(focusRequest[23]).uk6jhJ);
      obj6.children = handledKeyRef(guildId(focusRequest[27]).Navigator, obj7);
      return handledKeyRef(guildId(focusRequest[28]).ConjureBuilderInlineContext.Provider, obj6);
    };
