// === Module 11721: ConjureStandaloneScreen ===

// Module 11721 (ConjureStandaloneScreen)
import ConjureActionCreators from "ConjureActionCreators" /* 10719 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11722 */;
import ConjureProjectListDefault from "ConjureProjectList" /* 11723 */;
import ConjureChatSceneDefault from "ConjureChatScene" /* 11831 */;
import ConjureDebugSceneDefault from "ConjureDebugScene" /* 12500 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4881 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import ConjureBuilderRouteStore from "ConjureBuilderRouteStore" /* 7319 */;

require = fn;
const Permissions = fn(1087).Permissions;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoutedProjectOpener(projectId) {
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
}) : (function RoutedProjectOpener(projectId) {
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
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureStandaloneScreen(guildId) {
  const cResult = guildId(onClose[9]).c(61);
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  let obj = guildId(onClose[9]);
  const navigation = guildId(onClose[10]).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function f() {
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
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureBuilderRouteStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = T;
    cResult[5] = items1;
    let tmp9 = items1;
  } else {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    tmp9 = cResult[5];
  }
  const tmpResult = guildId(onClose[10]);
  const stateFromStores = guildId(onClose[12]).useStateFromStores(tmp6, T, tmp9);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
    const items2 = [GuildStore];
    cResult[6] = items2;
    const tmp11 = items2;
  } else {
    class T {
      constructor() {
        routedProjectId = closure_8.getRoutedProjectId(guildId);
        return routedProjectId;
      }
    }
  }
  if (cResult[7] !== guildId) {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const items3 = [guildId];
    cResult[7] = guildId;
    cResult[8] = A;
    cResult[9] = items3;
    let tmp13 = items3;
  } else {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    tmp13 = cResult[9];
  }
  const tmpResult6 = guildId(onClose[12]);
  const stateFromStores1 = guildId(onClose[12]).useStateFromStores(tmp11, A, tmp13);
  if (cResult[10] !== guildId) {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    tmp16[0] = guildId;
    cResult[10] = guildId;
    cResult[11] = tmp16;
  } else {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  const tmpResult7 = guildId(onClose[12]);
  const isConjureGuildEnabled = guildId(onClose[13]).useIsConjureGuildEnabled(tmp16);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
    const items4 = [isConjureGuildEnabled];
    cResult[12] = items4;
    const tmp18 = items4;
  } else {
    class A {
      constructor() {
        return closure_6.getGuild(guildId);
      }
    }
  }
  if (cResult[13] !== guildId) {
    class O {
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
    cResult[13] = guildId;
    cResult[14] = O;
    cResult[15] = items5;
    let tmp20 = items5;
  } else {
    class O {
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
    tmp20 = cResult[15];
  }
  const tmpResult8 = guildId(onClose[13]);
  const stateFromStoresArray = guildId(onClose[12]).useStateFromStoresArray(tmp18, O, tmp20);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
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
    cResult[16] = items6;
    const tmp22 = items6;
  } else {
    class O {
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
  if (cResult[17] !== guildId) {
    class L {
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
    cResult[17] = guildId;
    cResult[18] = L;
    cResult[19] = items7;
    let tmp25 = items7;
  } else {
    class L {
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
    tmp25 = cResult[19];
  }
  const tmpResult9 = guildId(onClose[12]);
  const stateFromStores2 = guildId(onClose[12]).useStateFromStores(tmp22, L, tmp25);
  if (cResult[20] === guildId) {
    class L {
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
    if (cResult[23] === stateFromStores2) {
      class L {
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
    cResult[23] = stateFromStores2;
    cResult[24] = stateFromStoresArray;
    cResult[25] = guildId;
    cResult[26] = isConjureGuildEnabled;
    cResult[27] = items8;
  }
  class Q {
    constructor() {
      if (closure_5) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[14]);
        tmp3 = guildId;
        listProjectsResult = obj.listProjects(guildId);
      }
      return;
    }
  }
  cResult[20] = guildId;
  cResult[21] = isConjureGuildEnabled;
  cResult[22] = Q;
  const tmpResult10 = guildId(onClose[12]);
}) : (function ConjureStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  ({ onClose, inline } = guildId);
  if (inline === undefined) {
    inline = false;
  }
  onClose = undefined;
  let stateFromStores;
  let stateFromStores1;
  let isConjureGuildEnabled;
  let openedProjectIdRef;
  const navigation = guildId(onClose[10]).useNavigation();
  let items = [navigation];
  if (onClose == null) {
    onClose = stateFromStores1.useCallback(() => navigation.goBack(), items);
  }
  let obj = guildId(onClose[10]);
  const items1 = [ConjureBuilderRouteStore];
  const items2 = [guildId];
  stateFromStores = guildId(onClose[12]).useStateFromStores(items1, () => {
    const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items2);
  const tmpResult = guildId(onClose[12]);
  const items3 = [openedProjectIdRef];
  const items4 = [guildId];
  stateFromStores1 = guildId(onClose[12]).useStateFromStores(items3, () => GuildStore.getGuild(guildId), items4);
  const tmpResult6 = guildId(onClose[12]);
  isConjureGuildEnabled = guildId(onClose[13]).useIsConjureGuildEnabled({ guildId, location: "ConjureStandaloneScreen" });
  const tmpResult7 = guildId(onClose[13]);
  const items5 = [isConjureGuildEnabled];
  const items6 = [guildId];
  const stateFromStoresArray = guildId(onClose[12]).useStateFromStoresArray(items5, () => {
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
  const tmpResult8 = guildId(onClose[12]);
  const items7 = [openedProjectIdRef, PermissionStore];
  const items8 = [guildId];
  const items9 = [
    isConjureGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(onClose[12]).useStateFromStores(items7, () => {
      guild = GuildStore.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      }
      return canResult;
    }, items8)
  ];
  const effect = obj2.useEffect(() => {
    if (isConjureGuildEnabled) {
      ConjureActionCreators.listProjects(guildId);
    }
  }, items9);
  const items10 = [stateFromStores1, isConjureGuildEnabled, onClose];
  const effect1 = obj2.useEffect(() => {
    if (!tmp) {
      onClose();
    }
    tmp = null == stateFromStores1 || isConjureGuildEnabled;
  }, items10);
  openedProjectIdRef = obj2.useRef(stateFromStores);
  let obj3 = {};
  const obj4 = { headerLeft: null, headerTitle: null, render: null };
  const tmpResult9 = guildId(onClose[12]);
  obj4.headerLeft = guildId(onClose[15]).getHeaderCloseButton(onClose);
  obj4.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(onClose[16]).intl;
    obj.title = intl.string(navigation(onClose[17]).uk6jhJ);
    return closure_1_10(guildId(onClose[15]).NavigatorHeader, obj);
  };
  obj4.render = function render() {
    const obj = { children: null };
    const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
    const items = [v65535(closure_13, obj2), v65535(ConjureProjectListDefault, { guildId })];
    obj.children = items;
    return __initData(closure_2_11, obj);
  };
  obj3[guildId(onClose[11]).ConjureScreenScenes.PROJECTS] = obj4;
  obj3[guildId(onClose[11]).ConjureScreenScenes.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [v65535(closure_13, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), v65535(ConjureChatSceneDefault, { guildId, projectId })];
      obj.children = items;
      return __initData(closure_2_11, obj);
    }
  };
  obj3[guildId(onClose[11]).ConjureScreenScenes.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(onClose[16]).intl;
      obj.title = intl.string(navigation(onClose[17])["Q4FN+H"]);
      return closure_1_10(guildId(onClose[15]).NavigatorHeader, obj);
    },
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [v65535(closure_13, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), v65535(ConjureDebugSceneDefault, { projectId })];
      obj.children = items;
      return __initData(closure_2_11, obj);
    }
  };
  const obj5 = { value: inline, children: null };
  const obj6 = {
    screens: obj3,
    initialRouteStack: stateFromStores(stateFromStores1.useState(() => {
      const items = [{ name: conjureStandaloneScenes.ConjureScreenScenes.PROJECTS }];
      if (null != stateFromStores) {
        const obj2 = { name: conjureStandaloneScenes.ConjureScreenScenes.CHAT, params: null };
        const obj3 = { projectId: tmp3 };
        obj2.params = obj3;
        items.push(obj2);
      }
      return items;
    }), 1)[0],
    headerBackTitle: null
  };
  let intl = tmp(tmp2[16]).intl;
  obj6.headerBackTitle = intl.string(navigation(onClose[17]).uk6jhJ);
  obj5.children = closure_10(guildId(onClose[21]).Navigator, obj6);
  return closure_10(guildId(onClose[22]).ConjureBuilderInlineContext.Provider, obj5);
});