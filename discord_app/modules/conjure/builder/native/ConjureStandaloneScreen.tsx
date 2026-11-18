// === Module 18286: ConjureStandaloneScreen ===

// Module 18286 (ConjureStandaloneScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureActivity from "ConjureActivity" /* 6749 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6844 */;
import NavigatorHeader from "NavigatorHeader" /* 7006 */;
import GuildIcon from "GuildIcon" /* 7233 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 8475 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 18287 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18296 */;
import selectConjureChannelDefault from "selectConjureChannel" /* 18678 */;
import ConjureHomeLandingDefault from "ConjureHomeLanding" /* 18679 */;
import ConjureProjectListDefault from "ConjureProjectList" /* 18701 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 18719 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4735 */;
import GuildStore from "GuildStore" /* 4694 */;
import PermissionStore from "PermissionStore" /* 4755 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 6745 */;

const GuildIconDefault = GuildIcon;

require = fn;
function ServerProjectsHeader(guild) {
  guild = guild.guild;
  if (null == guild) {
    const obj = { title: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef4121.uk6jhJ);
    let obj2 = obj;
  } else {
    obj2 = { title: guild.name, subtitle: null, icon: null };
    const intl2 = util.intl;
    obj2.subtitle = intl2.string(_modDef4121.IF7qLs);
    const obj3 = { style: tmp.headerGuildIcon, children: null };
    const obj4 = { guild, size: GuildIcon.GuildIconSizes.XSMALL_20, selected: false };
    obj3.children = application_id(GuildIconDefault, obj4);
    obj2.icon = application_id(View, obj3);
  }
  return application_id(NavigatorHeader.NavigatorHeader, obj2);
}
function GlobalChatScene(projectId) {
  projectId = projectId.projectId;
  const fallbackGuildId = projectId.fallbackGuildId;
  ({ entryPoint, onExit } = projectId);
  items = [ConjureProjectStore];
  const items1 = [projectId, fallbackGuildId];
  const guildId = projectId(504).useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let result = null;
    if (null != project) {
      result = ConjureActivity.conjureProjectGuildId(project);
    }
    if (result == null) {
      result = fallbackGuildId;
    }
    return result;
  }, items1);
  return closure_12(fallbackGuildId(18287), { guildId, projectId, entryPoint, onExit });
}
function RoutedProjectOpener(guildId) {
  guildId = guildId.guildId;
  const inline = guildId.inline;
  const request = guildId.request;
  const sceneProjectId = guildId.sceneProjectId;
  const handledKeyRef = guildId.handledKeyRef;
  const navigation = guildId(request[19]).useNavigation();
  items = [guildId, inline, sceneProjectId];
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
          const obj = { projectId: null, entryPoint: null };
          ({ projectId: obj.projectId, entryPoint: obj.entryPoint } = request);
          navigation.push(conjureStandaloneScenes.ConjureScreenScenes.CHAT, obj);
        } else {
          const routes = navigation.getState().routes;
          if (routes.some((name) => name.name === guildId(request[21]).ConjureScreenScenes.PROJECTS)) {
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
const View = fn(17).View;
const Permissions = fn(1072).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4823);
let obj2 = { headerGuildIcon: { flexShrink: 0, marginRight: nativeDefault.space.PX_8 } };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default function ConjureStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  const onBack = guildId.onBack;
  let focusRequest = guildId.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  onClose = undefined;
  closure_6 = undefined;
  let projectId;
  let stateFromStores;
  let isConjureMobileEnabled;
  let requestId;
  let entryPoint;
  let memo;
  let handledKeyRef;
  const navigation = guildId(onBack[19]).useNavigation();
  items = [navigation];
  if (onClose == null) {
    onClose = navigation.useCallback(() => navigation.goBack(), items);
  }
  const context = obj2.useContext(inline(tmp3[22]));
  closure_6 = tmp7;
  let obj = guildId(onBack[19]);
  const tmp5 = inline;
  let items1 = [requestId];
  const items2 = [guildId, null != context];
  projectId = guildId(onBack[16]).useStateFromStores(items1, () => {
    let tmp;
    if (!closure_6) {
      const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
      tmp = routedProjectId;
    }
    return tmp;
  }, items2);
  if (null != context) {
    projectId = context.projectId;
  }
  const tmp2Result = guildId(onBack[16]);
  const items3 = [projectId];
  const items4 = [guildId];
  stateFromStores = guildId(onBack[16]).useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmp2Result7 = guildId(onBack[16]);
  const isConjureGuildEnabled = guildId(onBack[23]).useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmp2Result8 = guildId(onBack[23]);
  isConjureMobileEnabled = guildId(onBack[24]).useIsConjureMobileEnabled(isConjureGuildEnabled, "ConjureStandaloneScreen");
  const tmp2Result9 = guildId(onBack[24]);
  const items5 = [closure_6];
  const items6 = [guildId];
  const stateFromStoresArray = guildId(onBack[16]).useStateFromStoresArray(items5, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items6);
  const tmp2Result10 = guildId(onBack[16]);
  const items7 = [projectId, stateFromStores];
  const items8 = [guildId];
  const items9 = [
    isConjureMobileEnabled,
    null != context,
    guildId,
    stateFromStoresArray,
    guildId(onBack[16]).useStateFromStores(items7, () => {
      guild = GuildStore.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      }
      return canResult;
    }, items8)
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
  requestId = undefined;
  if (context != null) {
    requestId = context.requestId;
  }
  entryPoint = undefined;
  if (context != null) {
    entryPoint = context.entryPoint;
  }
  const items11 = [null != context, requestId, entryPoint, projectId];
  memo = obj2.useMemo(() => {
    if (closure_6) {
      let num = requestId;
      if (requestId == null) {
        num = 0;
      }
      const obj2 = { key: num, projectId, entryPoint };
      let tmp3 = obj2;
    } else if (null != projectId) {
      const obj = { key: projectId, projectId, entryPoint: "r" };
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
  if (null != context) {
    let fn = tmp2(tmp3[12]).getHeaderBackButton(onClose, true);
    const tmp2Result12 = tmp2(tmp3[12]);
  } else if (null != onBack) {
    fn = () => application_id(PressableNavigatorBackIcon.PressableNavigatorBackIcon, { onPress: onBack });
  }
  obj3.headerLeft = fn;
  obj3.headerTitle = function headerTitle() {
    if (closure_6) {
      const obj2 = { title: null };
      const intl = util.intl;
      obj2.title = intl.string(_modDef4121.uk6jhJ);
      let tmpResult = application_id(NavigatorHeader.NavigatorHeader, obj2);
    } else {
      const obj = { guild: stateFromStores };
      tmpResult = application_id(ServerProjectsHeader, obj);
    }
    return tmpResult;
  };
  obj3.render = function render() {
    const obj = { guildId, inline, request: memo, sceneProjectId: "Array", handledKeyRef };
    const children = [application_id(RoutedProjectOpener, obj), ];
    if (closure_6) {
      const obj2 = { forMeGuildId: guildId, focusRequest };
      let tmp3Result = application_id(ConjureHomeLandingDefault, obj2);
    } else {
      const obj3 = { guildId };
      tmp3Result = application_id(ConjureProjectListDefault, obj3);
    }
    children[1] = tmp3Result;
    return gesture(state, { children });
  };
  const obj6 = { value: inline, children: null };
  const obj7 = {
    screens: {
      [guildId(onBack[21]).ConjureScreenScenes.PROJECTS]: obj3,
      [guildId(onBack[21]).ConjureScreenScenes.CHAT]: {
        ignoreKeyboard: true,
        headerShown: false,
        render(arg0) {
          ({ projectId, entryPoint } = arg0);
          const children = [application_id(RoutedProjectOpener, { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef }), ];
          if (closure_6) {
            const obj2 = { projectId, entryPoint, fallbackGuildId: guildId, onExit: onClose };
            let tmp3Result = application_id(GlobalChatScene, obj2);
          } else {
            const obj3 = { guildId, projectId, entryPoint };
            tmp3Result = application_id(ConjureChatSceneDefault, obj3);
          }
          children[1] = tmp3Result;
          return gesture(state, { children });
        }
      },
      [guildId(onBack[21]).ConjureScreenScenes.DEBUG]: {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(onBack[13]).intl;
          obj.title = intl.string(inline(onBack[14])["Q4FN+H"]);
          return memo(guildId(onBack[12]).NavigatorHeader, obj);
        },
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          items = [application_id(RoutedProjectOpener, { guildId, inline, request: memo, sceneProjectId: projectId, handledKeyRef }), application_id(ConjureDebugSceneDefault, { projectId })];
          obj.children = items;
          return gesture(state, obj);
        }
      }
    },
    initialRouteStack: focusRequest(navigation.useState(() => {
      let tmp2 = null;
      if (null != projectId) {
        const obj = { projectId: tmp, entryPoint: null };
        entryPoint = undefined;
        if (memo != null) {
          entryPoint = memo.entryPoint;
        }
        obj.entryPoint = entryPoint;
        tmp2 = obj;
      }
      if (closure_6) {
        if (null != tmp2) {
          const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: tmp2 };
          items = [obj2];
          return items;
        }
      }
      const items1 = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
      if (null != tmp2) {
        const obj4 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: tmp2 };
        items1.push(obj4);
      }
      return items1;
    }), 1)[0],
    headerBackTitle: null
  };
  let intl = tmp2(tmp3[13]).intl;
  obj7.headerBackTitle = intl.string(tmp5(onBack[14]).uk6jhJ);
  obj6.children = memo(guildId(onBack[31]).Navigator, obj7);
  return memo(guildId(onBack[30]).ConjureBuilderInlineContext.Provider, obj6);
};