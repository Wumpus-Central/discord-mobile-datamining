// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4192 from "../../intl/ConjureUntranslated.messages.js";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ConjureActivity from "../../projects/ConjureActivity.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import PressableNavigatorBackIcon from "../../../main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx";
import ConjureChatSceneDefault from "ConjureChatScene.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import ConjureHomeLandingDefault from "../../home/native/ConjureHomeLanding.tsx";
import ConjureProjectListDefault from "../../projects/native/ConjureProjectList.tsx";
import ConjureDebugSceneDefault from "../../debug/native/ConjureDebugScene.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function ServerProjectsHeader(guild) {
  guild = guild.guild;
  if (null == guild) {
    const obj = { title: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef4192.uk6jhJ);
    let obj2 = obj;
  } else {
    obj2 = { title: guild.name, subtitle: null, icon: null };
    const intl2 = util.intl;
    obj2.subtitle = intl2.string(_modDef4192.IF7qLs);
    const obj3 = { style: tmp.headerGuildIcon, children: null };
    const obj4 = { guild, size: GuildIcon.GuildIconSizes.XSMALL_20, selected: false };
    obj3.children = closure_1_11(GuildIconDefault, obj4);
    obj2.icon = closure_1_11(View, obj3);
  }
  return closure_1_11(NavigatorHeader.NavigatorHeader, obj2);
}
function GlobalChatScene(projectId) {
  projectId = projectId.projectId;
  const fallbackGuildId = projectId.fallbackGuildId;
  ({ entryPoint, onExit } = projectId);
  items = [ConjureProjectStore];
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
  return closure_11(fallbackGuildId(18274), { guildId, projectId, entryPoint, onExit });
}
function RoutedProjectOpener(request) {
  request = request.request;
  const sceneProjectId = request.sceneProjectId;
  const handledKeyRef = request.handledKeyRef;
  const navigation = request(handledKeyRef[18]).useNavigation();
  items = [request, sceneProjectId, handledKeyRef, navigation];
  const effect = noop.useEffect(() => {
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
          if (routes.some((name) => name.name === request(handledKeyRef[19]).ConjureScreenScenes.PROJECTS)) {
            navigation.popTo(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          } else {
            navigation.push(conjureStandaloneScenes.ConjureScreenScenes.PROJECTS);
          }
        }
      }
    }
  }, items);
  return null;
}
const View = fn(17).View;
const Permissions = fn(1071).Permissions;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4917);
let obj2 = { headerGuildIcon: { flexShrink: 0, marginRight: nativeDefault.space.PX_8 } };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default function ConjureStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  ({ projectId, onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  const onBack = guildId.onBack;
  let focusRequest = guildId.focusRequest;
  if (focusRequest === undefined) {
    focusRequest = null;
  }
  onClose = undefined;
  closure_5 = undefined;
  projectId = undefined;
  let stateFromStores;
  let isConjureMobileEnabled;
  let requestId;
  let entryPoint;
  let memo;
  let handledKeyRef;
  const navigation = guildId(focusRequest[18]).useNavigation();
  items = [navigation];
  if (onClose == null) {
    onClose = onClose.useCallback(() => navigation.goBack(), items);
  }
  const context = obj2.useContext(onBack(tmp3[20]));
  closure_5 = tmp7;
  if (null != context) {
    projectId = context.projectId;
  }
  let obj = guildId(focusRequest[18]);
  const tmp5 = onBack;
  let items1 = [stateFromStores];
  const items2 = [guildId];
  stateFromStores = guildId(focusRequest[15]).useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  const tmp2Result = guildId(focusRequest[15]);
  const isConjureGuildEnabled = guildId(focusRequest[21]).useIsConjureGuildEnabled({
    guildId,
    location: "ConjureStandaloneScreen",
  });
  const tmp2Result6 = guildId(focusRequest[21]);
  isConjureMobileEnabled = guildId(focusRequest[22]).useIsConjureMobileEnabled(
    isConjureGuildEnabled,
    "ConjureStandaloneScreen",
  );
  const tmp2Result7 = guildId(focusRequest[22]);
  const items3 = [projectId];
  const items4 = [guildId];
  const stateFromStoresArray = guildId(focusRequest[15]).useStateFromStoresArray(
    items3,
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
    items4,
  );
  const tmp2Result8 = guildId(focusRequest[15]);
  const items5 = [stateFromStores, isConjureMobileEnabled];
  const items6 = [guildId];
  const items7 = [
    isConjureMobileEnabled,
    null != context,
    guildId,
    stateFromStoresArray,
    guildId(focusRequest[15]).useStateFromStores(
      items5,
      () => {
        guild = GuildStore.getGuild(guildId);
        let canResult = null != guild;
        if (canResult) {
          canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
        }
        return canResult;
      },
      items6,
    ),
  ];
  const effect = obj2.useEffect(() => {
    if (isConjureMobileEnabled) {
      let tmp4;
      if (!closure_5) {
        tmp4 = guildId;
      }
      ConjureActionCreators.listProjects(tmp4);
    }
  }, items7);
  const items8 = [stateFromStores, isConjureMobileEnabled, onClose];
  const effect1 = obj2.useEffect(() => {
    if (!tmp) {
      onClose();
    }
    tmp = null == stateFromStores || isConjureMobileEnabled;
  }, items8);
  requestId = undefined;
  if (context != null) {
    requestId = context.requestId;
  }
  entryPoint = undefined;
  if (context != null) {
    entryPoint = context.entryPoint;
  }
  const items9 = [null != context, requestId, entryPoint, projectId];
  memo = obj2.useMemo(() => {
    let tmp;
    if (closure_5) {
      let num = requestId;
      if (requestId == null) {
        num = 0;
      }
      const obj = { key: num, projectId, entryPoint };
      tmp = obj;
    }
    return tmp;
  }, items9);
  let key;
  if (memo != null) {
    key = memo.key;
  }
  handledKeyRef = obj2.useRef(key);
  let obj3 = { ignoreKeyboard: null != context, headerLeft: null, headerTitle: null, render: null };
  if (null != context) {
    let fn = tmp2(tmp3[11]).getHeaderBackButton(onClose, true);
    const tmp2Result10 = tmp2(tmp3[11]);
  } else if (null != onBack) {
    fn = () => closure_2_11(PressableNavigatorBackIcon.PressableNavigatorBackIcon, { onPress: onBack });
  }
  obj3.headerLeft = fn;
  obj3.headerTitle = function headerTitle() {
    if (closure_5) {
      const obj2 = { title: null };
      const intl = util.intl;
      obj2.title = intl.string(_modDef4192.uk6jhJ);
      let tmpResult = closure_2_11(NavigatorHeader.NavigatorHeader, obj2);
    } else {
      const obj = { guild: stateFromStores };
      tmpResult = closure_2_11(ServerProjectsHeader, obj);
    }
    return tmpResult;
  };
  obj3.render = function render() {
    let tmp4 = null;
    if (closure_5) {
      const obj = { request: memo, sceneProjectId: "Array", handledKeyRef };
      tmp4 = closure_2_11(RoutedProjectOpener, obj);
    }
    const children = [tmp4];
    if (closure_5) {
      const obj2 = { focusRequest };
      let tmp9Result = closure_2_11(ConjureHomeLandingDefault, obj2);
    } else {
      const obj3 = { guildId };
      tmp9Result = closure_2_11(ConjureProjectListDefault, obj3);
    }
    children[1] = tmp9Result;
    return state(application_id, { children });
  };
  const obj6 = { value: inline, children: null };
  const obj7 = {
    screens: {
      [guildId(focusRequest[19]).ConjureScreenScenes.PROJECTS]: obj3,
      [guildId(focusRequest[19]).ConjureScreenScenes.CHAT]: {
        ignoreKeyboard: true,
        headerShown: false,
        render(arg0) {
          ({ projectId, entryPoint } = arg0);
          let tmp4 = null;
          if (closure_5) {
            const obj = { request: memo, sceneProjectId: projectId, handledKeyRef };
            tmp4 = closure_2_11(RoutedProjectOpener, obj);
          }
          const children = [tmp4];
          if (closure_5) {
            const obj2 = { projectId, entryPoint, fallbackGuildId: guildId, onExit: onClose };
            let tmp9Result = closure_2_11(GlobalChatScene, obj2);
          } else {
            const obj3 = { guildId, projectId, entryPoint, onExit: onBack };
            tmp9Result = closure_2_11(ConjureChatSceneDefault, obj3);
          }
          children[1] = tmp9Result;
          return state(application_id, { children });
        },
      },
      [guildId(focusRequest[19]).ConjureScreenScenes.DEBUG]: {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(focusRequest[12]).intl;
          obj.title = intl.string(onBack(focusRequest[13])["Q4FN+H"]);
          return memo(guildId(focusRequest[11]).NavigatorHeader, obj);
        },
        render(projectId) {
          projectId = projectId.projectId;
          let tmp3 = null;
          if (closure_5) {
            const obj = { request: memo, sceneProjectId: projectId, handledKeyRef };
            tmp3 = closure_2_11(RoutedProjectOpener, obj);
          }
          const obj2 = { children: null };
          items = [tmp3, closure_2_11(ConjureDebugSceneDefault, { projectId })];
          obj2.children = items;
          return state(application_id, obj2);
        },
      },
    },
    initialRouteStack: navigation(
      onClose.useState(() => {
        if (null == projectId) {
          const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS };
          items = [obj2];
          return items;
        } else {
          if (closure_5) {
            entryPoint = undefined;
            if (memo != null) {
              entryPoint = memo.entryPoint;
            }
            let result = entryPoint;
          } else {
            result = conjureStandaloneScenes.takeServerProjectEntryPoint(guildId, projectId);
          }
          const obj3 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: null };
          const obj4 = { projectId, entryPoint: result };
          obj3.params = obj4;
          const items1 = [obj3];
          return items1;
        }
      }),
      1,
    )[0],
    headerBackTitle: null,
  };
  let intl = tmp2(tmp3[12]).intl;
  obj7.headerBackTitle = intl.string(tmp5(focusRequest[13]).uk6jhJ);
  obj6.children = memo(guildId(focusRequest[29]).Navigator, obj7);
  return memo(guildId(focusRequest[28]).ConjureBuilderInlineContext.Provider, obj6);
}
