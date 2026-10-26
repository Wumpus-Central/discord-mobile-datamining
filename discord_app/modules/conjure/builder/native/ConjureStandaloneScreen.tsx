// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import ConjureActivity from "../../projects/ConjureActivity.tsx";
import ConjureChatSceneDefault from "ConjureChatScene.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import selectConjureChannelDefault from "../selectConjureChannel.tsx";
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
const Permissions = fn(1087).Permissions;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GlobalChatScene(projectId) {
      const cResult = projectId(576).c(8);
      projectId = projectId.projectId;
      const fallbackGuildId = projectId.fallbackGuildId;
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
          if (cResult[6] === projectId) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj2 = { guildId: stateFromStores, projectId };
        const tmp12 = closure_11(fallbackGuildId(11747), obj2);
        cResult[5] = stateFromStores;
        cResult[6] = projectId;
        cResult[7] = tmp12;
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
  : function GlobalChatScene(projectId) {
      projectId = projectId.projectId;
      const fallbackGuildId = projectId.fallbackGuildId;
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
      return closure_11(fallbackGuildId(11747), { guildId, projectId });
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
          const fn2 = function u() {
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
      const cResult = guildId(navigation[10]).c(77);
      guildId = guildId.guildId;
      ({ onClose, inline } = guildId);
      importDefault = undefined !== inline && inline;
      let obj = guildId(navigation[10]);
      navigation = guildId(navigation[14]).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function j() {
          return navigation.goBack();
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (onClose == null) {
        onClose = tmp5;
      }
      const context = noop.useContext(require("ConjureGlobalScreenContext"));
      noop = tmp7;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureBuilderRouteStore];
        cResult[2] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
          let tmp11 = cResult[6];
        }
        let projectId = tmp(tmp2[12]).useStateFromStores(tmp8, tmp10, tmp11);
        if (tmp7) {
          projectId = context.projectId;
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [stateFromStores];
          cResult[7] = items1;
          let tmp12 = items1;
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] !== guildId) {
          class A {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          const items2 = [guildId];
          cResult[8] = guildId;
          cResult[9] = A;
          cResult[10] = items2;
          let tmp15 = items2;
        } else {
          class A {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          tmp15 = cResult[10];
        }
        const tmpResult6 = tmp(tmp2[12]);
        stateFromStores = tmp(tmp2[12]).useStateFromStores(tmp12, A, tmp15);
        if (cResult[11] !== guildId) {
          class A {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          tmp18[0] = guildId;
          cResult[11] = guildId;
          cResult[12] = tmp18;
        } else {
          class A {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
        }
        const tmpResult7 = tmp(tmp2[12]);
        const isConjureGuildEnabled = tmp(tmp2[18]).useIsConjureGuildEnabled(tmp18);
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return closure_6.getGuild(guildId);
            }
          }
          const items3 = [projectId];
          cResult[13] = items3;
          const tmp20 = items3;
        } else {
          class A {
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
          let tmp22 = items4;
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
          tmp22 = cResult[16];
        }
        const tmpResult8 = tmp(tmp2[18]);
        const stateFromStoresArray = tmp(tmp2[12]).useStateFromStoresArray(tmp20, L, tmp22);
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
          const items5 = [stateFromStores, isConjureGuildEnabled];
          cResult[17] = items5;
          const tmp24 = items5;
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
          class Q {
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
          cResult[19] = Q;
          cResult[20] = items6;
          let tmp27 = items6;
        } else {
          class Q {
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
          tmp27 = cResult[20];
        }
        const tmpResult9 = tmp(tmp2[12]);
        const stateFromStores1 = tmp(tmp2[12]).useStateFromStores(tmp24, Q, tmp27);
        if (cResult[21] === guildId) {
          class Q {
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
        class V {
          constructor() {
            if (closure_7) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[19]);
              tmp3 = closure_4;
              tmp4 = undefined;
              if (!closure_4) {
                tmp4 = guildId;
              }
              listProjectsResult = obj.listProjects(tmp4);
            }
            return;
          }
        }
        cResult[21] = guildId;
        class T {
          constructor() {
            tmp = undefined;
            if (!closure_4) {
              tmp2 = closure_9;
              tmp3 = guildId;
              routedProjectId = closure_9.getRoutedProjectId(guildId);
              tmp5 = null;
              tmp = routedProjectId;
            }
            return tmp;
          }
        }
        cResult[22] = isConjureGuildEnabled;
        cResult[23] = tmp7;
        cResult[24] = V;
        const tmpResult10 = tmp(tmp2[12]);
      }
      class T {
        constructor() {
          tmp = undefined;
          if (!closure_4) {
            tmp2 = closure_9;
            tmp3 = guildId;
            routedProjectId = closure_9.getRoutedProjectId(guildId);
            tmp5 = null;
            tmp = routedProjectId;
          }
          return tmp;
        }
      }
      const items7 = [guildId, null != context];
      cResult[3] = guildId;
      cResult[4] = null != context;
      cResult[5] = T;
      cResult[6] = items7;
      tmp11 = items7;
      tmp10 = T;
      const tmpResult = guildId(navigation[14]);
    }
  : function ConjureStandaloneScreen(guildId) {
      guildId = guildId.guildId;
      ({ onClose, inline } = guildId);
      if (inline === undefined) {
        inline = false;
      }
      let navigation;
      onClose = undefined;
      let context;
      closure_5 = undefined;
      let projectId;
      let stateFromStores;
      let isConjureGuildEnabled;
      let memo;
      let handledKeyRef;
      navigation = guildId(navigation[14]).useNavigation();
      let items = [navigation];
      if (onClose == null) {
        onClose = context.useCallback(() => navigation.goBack(), items);
      }
      context = obj2.useContext(inline(tmp2[17]));
      closure_5 = tmp6;
      let obj = guildId(navigation[14]);
      let tmp4 = inline;
      let items1 = [memo];
      const items2 = [guildId, null != context];
      projectId = guildId(navigation[12]).useStateFromStores(
        items1,
        () => {
          let tmp;
          if (!closure_5) {
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
      const tmpResult = guildId(navigation[12]);
      const items3 = [projectId];
      const items4 = [guildId];
      stateFromStores = guildId(navigation[12]).useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
      const tmpResult6 = guildId(navigation[12]);
      isConjureGuildEnabled = guildId(navigation[18]).useIsConjureGuildEnabled({
        guildId,
        location: "ConjureStandaloneScreen",
      });
      const tmpResult7 = guildId(navigation[18]);
      const items5 = [closure_5];
      const items6 = [guildId];
      const stateFromStoresArray = guildId(navigation[12]).useStateFromStoresArray(
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
      const tmpResult8 = guildId(navigation[12]);
      const items7 = [projectId, stateFromStores];
      const items8 = [guildId];
      const items9 = [
        isConjureGuildEnabled,
        null != context,
        guildId,
        stateFromStoresArray,
        guildId(navigation[12]).useStateFromStores(
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
        if (isConjureGuildEnabled) {
          let tmp4;
          if (!closure_5) {
            tmp4 = guildId;
          }
          ConjureActionCreators.listProjects(tmp4);
        }
      }, items9);
      const items10 = [stateFromStores, isConjureGuildEnabled, onClose];
      const effect1 = obj2.useEffect(() => {
        if (!tmp) {
          onClose();
        }
        tmp = null == stateFromStores || isConjureGuildEnabled;
      }, items10);
      const items11 = [null != context, ,];
      let requestId;
      if (context != null) {
        requestId = context.requestId;
      }
      items11[1] = requestId;
      items11[2] = projectId;
      memo = obj2.useMemo(() => {
        if (closure_5) {
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
      const tmpResult10 = guildId(navigation[20]);
      if (null != context) {
        let headerBackButton = tmpResult10.getHeaderBackButton(onClose, true);
      } else {
        headerBackButton = tmpResult10.getHeaderCloseButton(onClose);
      }
      let obj3 = { [guildId(navigation[16]).ConjureScreenScenes.PROJECTS]: obj4 };
      let renderGlobalChatBack;
      if (null != context) {
        renderGlobalChatBack = function renderGlobalChatBack(canGoBack) {
          if (true === canGoBack.canGoBack) {
            let tmp4 = NavigatorHeader.getHeaderBackButton()(canGoBack);
          } else {
            tmp4 = NavigatorHeader.getHeaderBackButton(onClose, true)(canGoBack);
          }
          return tmp4;
        };
      }
      obj3[guildId(navigation[16]).ConjureScreenScenes.CHAT] = {
        ignoreKeyboard: true,
        headerLeft: renderGlobalChatBack,
        render(projectId) {
          projectId = projectId.projectId;
          const children = [
            closure_2_11(closure_15, { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef }),
          ];
          if (closure_5) {
            const obj2 = { projectId, fallbackGuildId: guildId };
            let tmp3Result = closure_2_11(closure_14, obj2);
          } else {
            const obj3 = { guildId, projectId };
            tmp3Result = closure_2_11(ConjureChatSceneDefault, obj3);
          }
          children[1] = tmp3Result;
          return map1(__initData, { children });
        },
      };
      obj3[guildId(navigation[16]).ConjureScreenScenes.DEBUG] = {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(navigation[21]).intl;
          obj.title = intl.string(inline(navigation[22])["Q4FN+H"]);
          return closure_1_11(guildId(navigation[20]).NavigatorHeader, obj);
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
      };
      let obj5 = { value: inline, children: null };
      const obj6 = {
        screens: obj3,
        initialRouteStack: onClose(
          context.useState(() => {
            if (closure_5) {
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
      let intl = tmp(tmp2[21]).intl;
      obj6.headerBackTitle = intl.string(tmp4(navigation[22]).uk6jhJ);
      obj5.children = closure_11(guildId(navigation[25]).Navigator, obj6);
      return closure_11(guildId(navigation[26]).ConjureBuilderInlineContext.Provider, obj5);
    };
