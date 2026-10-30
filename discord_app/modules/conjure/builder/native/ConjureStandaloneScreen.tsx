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

require = fn;
function GlobalChatScene(onExit) {
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
  return closure_11(fallbackGuildId(12034), { guildId, projectId, onExit: onExit.onExit });
}
function RoutedProjectOpener(guildId) {
  guildId = guildId.guildId;
  const inline = guildId.inline;
  const request = guildId.request;
  const sceneProjectId = guildId.sceneProjectId;
  const handledKeyRef = guildId.handledKeyRef;
  const navigation = guildId(request[12]).useNavigation();
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
          if (routes.some((name) => name.name === guildId(request[14]).ConjureScreenScenes.PROJECTS)) {
            navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          } else {
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          }
        }
      }
    }
  }, items1);
  return null;
}
const Permissions = fn(1072).Permissions;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default function ConjureStandaloneScreen(guildId) {
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
  const navigation = guildId(focusRequest[12]).useNavigation();
  let items = [navigation];
  if (onClose == null) {
    onClose = onClose.useCallback(() => navigation.goBack(), items);
  }
  context = obj2.useContext(inline(tmp3[15]));
  closure_6 = tmp7;
  let obj = guildId(focusRequest[12]);
  const tmp5 = inline;
  let items1 = [isConjureMobileEnabled];
  const items2 = [guildId, null != context];
  projectId = guildId(focusRequest[9]).useStateFromStores(
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
  const tmp2Result = guildId(focusRequest[9]);
  const items3 = [closure_6];
  const items4 = [guildId];
  stateFromStores = guildId(focusRequest[9]).useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmp2Result7 = guildId(focusRequest[9]);
  const isConjureGuildEnabled = guildId(focusRequest[16]).useIsConjureGuildEnabled({
    guildId,
    location: "ConjureStandaloneScreen",
  });
  const tmp2Result8 = guildId(focusRequest[16]);
  isConjureMobileEnabled = guildId(focusRequest[17]).useIsConjureMobileEnabled(
    isConjureGuildEnabled,
    "ConjureStandaloneScreen",
  );
  const tmp2Result9 = guildId(focusRequest[17]);
  const items5 = [context];
  const items6 = [guildId];
  const stateFromStoresArray = guildId(focusRequest[9]).useStateFromStoresArray(
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
  const tmp2Result10 = guildId(focusRequest[9]);
  const items7 = [closure_6, projectId];
  const items8 = [guildId];
  const items9 = [
    isConjureMobileEnabled,
    null != context,
    guildId,
    stateFromStoresArray,
    guildId(focusRequest[9]).useStateFromStores(
      items7,
      () => {
        const guild = GuildStore.getGuild(guildId);
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
  const tmp2Result12 = guildId(focusRequest[19]);
  if (null != context) {
    let headerBackButton = tmp2Result12.getHeaderBackButton(onClose, true);
  } else {
    headerBackButton = tmp2Result12.getHeaderCloseButton(onClose);
  }
  obj3.headerLeft = headerBackButton;
  obj3.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(focusRequest[20]).intl;
    obj.title = intl.string(inline(focusRequest[21]).uk6jhJ);
    return handledKeyRef(guildId(focusRequest[19]).NavigatorHeader, obj);
  };
  obj3.render = function render() {
    const children = [
      closure_2_11(RoutedProjectOpener, { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef }),
    ];
    if (closure_6) {
      const obj2 = { forMeGuildId: guildId, focusRequest };
      let tmp3Result = closure_2_11(ConjureHomeLandingDefault, obj2);
    } else {
      const obj3 = { guildId };
      tmp3Result = closure_2_11(ConjureProjectListDefault, obj3);
    }
    children[1] = tmp3Result;
    return map1(closure_2_12, { children });
  };
  const obj6 = { value: inline, children: null };
  const obj7 = {
    screens: {
      [guildId(focusRequest[14]).ConjureScreenScenes.PROJECTS]: obj3,
      [guildId(focusRequest[14]).ConjureScreenScenes.CHAT]: {
        ignoreKeyboard: true,
        headerShown: false,
        render(projectId) {
          projectId = projectId.projectId;
          const children = [
            closure_2_11(RoutedProjectOpener, {
              guildId,
              inline,
              request: memo,
              sceneProjectId: projectId,
              handledKeyRef,
            }),
          ];
          if (closure_6) {
            const obj2 = { projectId, fallbackGuildId: guildId, onExit: onClose };
            let tmp3Result = closure_2_11(GlobalChatScene, obj2);
          } else {
            const obj3 = { guildId, projectId };
            tmp3Result = closure_2_11(ConjureChatSceneDefault, obj3);
          }
          children[1] = tmp3Result;
          return map1(closure_2_12, { children });
        },
      },
      [guildId(focusRequest[14]).ConjureScreenScenes.DEBUG]: {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(focusRequest[20]).intl;
          obj.title = intl.string(inline(focusRequest[21])["Q4FN+H"]);
          return handledKeyRef(guildId(focusRequest[19]).NavigatorHeader, obj);
        },
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            closure_2_11(RoutedProjectOpener, {
              guildId,
              inline,
              request: memo,
              sceneProjectId: projectId,
              handledKeyRef,
            }),
            closure_2_11(ConjureDebugSceneDefault, { projectId }),
          ];
          obj.children = items;
          return map1(closure_2_12, obj);
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
  let intl = tmp2(tmp3[20]).intl;
  obj7.headerBackTitle = intl.string(tmp5(focusRequest[21]).uk6jhJ);
  obj6.children = handledKeyRef(guildId(focusRequest[26]).Navigator, obj7);
  return handledKeyRef(guildId(focusRequest[25]).ConjureBuilderInlineContext.Provider, obj6);
}
