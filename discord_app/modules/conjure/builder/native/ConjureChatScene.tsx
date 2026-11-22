// === Module 18233: ConjureChatScene ===

// Module 18233 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef4190 from "module_4190" /* 4190 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import getURLForApplicationDefault from "getURLForApplication" /* 5554 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6943 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 6996 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7101 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 12298 */;
import useFrameBySurfaceDefault from "useFrameBySurface" /* 14353 */;
import restartFrames from "restartFrames" /* 14360 */;
import ConjureGlobalScreenContextDefault from "ConjureGlobalScreenContext" /* 18234 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 18235 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18240 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 18243 */;
import useConjureNativePublishButtonDefault from "useConjureNativePublishButton" /* 18246 */;
import useIsConjureProjectLiveDefault from "useIsConjureProjectLive" /* 18280 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18282 */;
import openConjureShareSheetDefault from "openConjureShareSheet" /* 18344 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 18354 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 18363 */;
import useConjurePreviewMenuDefault from "useConjurePreviewMenu" /* 18379 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 18382 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 6934 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
function ExitOnBackPress(onExit) {
  onExit = onExit.onExit;
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    onExit();
    return true;
  });
  return null;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_6, Keyboard: metroImportDefault, View: closure_8 } = get_ActivityIndicator);
const closeConnection = fn(6967).closeConnection;
const canRemixProject = fn(6621).canRemixProject;
const isLaunched = fn(6624).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4913);
let closure_19 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listError: null, segments: null, panes: null, pane: null, chatPane: null, paneHidden: null, paneBackstage: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.contentBare = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj5 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.segments = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER };
  obj.panes = { flex: 1, overflow: "hidden" };
  obj.pane = { flex: 1 };
  obj.chatPane = { flex: 1, paddingBottom };
  obj.paneHidden = { display: "none" };
  obj.paneBackstage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let closure_21 = { code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})" };
let closure_22 = { code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})" };
let closure_23 = { code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  let stateFromStores;
  previewAppId = undefined;
  let isLoading;
  let stateFromStores3;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  c16 = undefined;
  let onAddBot;
  c18 = undefined;
  let conjurePreviewAddBotPrompt;
  closure_20 = undefined;
  let canAnnotate;
  let result1;
  let memo1;
  let memo2;
  c25 = undefined;
  closure_26 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_30 = undefined;
  let canShare;
  projectGuildId = undefined;
  let callback2;
  let memo5;
  let callback4;
  let callback5;
  closure_37 = undefined;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback8;
  closure_43 = undefined;
  let callback9;
  onExit = undefined;
  let callback10;
  let callback11;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  closure_52 = undefined;
  ({ entryPoint, onExit } = guildId);
  const navigation = require("useNavigation").useNavigation();
  const context = previewAppId.useContext(ConjureGlobalScreenContextDefault);
  asyncGeneratorStep = tmp6;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp7 = conjurePreviewAddBotPrompt(bottom);
  const tmp8 = useAnimatedKeyboardHeightDefault();
  let obj = require("useNavigation");
  [tmp11, tmp12] = stateFromStores(previewAppId.useState(0), 2);
  const tmp10 = stateFromStores(previewAppId.useState(0), 2);
  items = [canAnnotate, require("module_1706").scheduleOnRN, tmp12, bottom];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items;
  let obj4 = { onEnd: null };
  class ConjureChatSceneTsx1 {
    constructor(arg0) {
      tmp = closure_0(closure_1, Math.max(0, guildId.height - closure_2));
      return;
    }
  }
  let items1 = [tmp14, tmp15, tmp16];
  ConjureChatSceneTsx1.__closure = items1;
  ConjureChatSceneTsx1.__workletHash = 12344605944798;
  ConjureChatSceneTsx1.__initData = tmp13;
  obj4.onEnd = ConjureChatSceneTsx1;
  let items2 = [bottom];
  require("KeyboardChatScrollView").useKeyboardHandler(obj4, items2);
  let obj3 = require("KeyboardChatScrollView");
  const items3 = [frameSurfaceOptions];
  const items4 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(items3, () => {
    let project = ConjureProjectStore.getProject(c1);
    if (project == null) {
      project = null;
    }
    return project;
  }, items4);
  const tmpResult = require("initialize");
  const trackConjureBuilderOpened = require("conjureBuilderOpened").useTrackConjureBuilderOpened(projectId, entryPoint);
  const tmpResult25 = require("conjureBuilderOpened");
  const items5 = [frameSurfaceOptions];
  const items6 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items5, () => {
    const project = ConjureProjectStore.getProject(c1);
    const obj2 = { projectExists: null != project, projectUnavailable: null, projectName: null, projectGuildId: null, previewAppId: null };
    let result = ConjureActionCreators.isConjureProjectUnavailable(c1);
    if (!result) {
      result = "failed" === ConjureProjectStore.getProjectLoadStatus(c1);
    }
    obj2.projectUnavailable = result;
    let name;
    if (project != null) {
      name = project.name;
    }
    if (name == null) {
      name = null;
    }
    obj2.projectName = name;
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj2.projectGuildId = guild_id;
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    obj2.previewAppId = prop;
    return obj2;
  }, items6);
  ({ projectExists, projectName, projectGuildId, previewAppId } = stateFromStoresObject);
  const tmpResult26 = require("initialize");
  const items7 = [frameSurfaceOptions];
  const items8 = [guildId, null != context];
  let stateFromStores1 = require("initialize").useStateFromStores(items7, () => {
    if (closure_3) {
      let ownedProjectsFetchState = ConjureProjectStore.getOwnedProjectsFetchState();
    } else {
      ownedProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(closure_0);
    }
    let tmp3 = "unattempted" === ownedProjectsFetchState;
    if (!tmp3) {
      tmp3 = "loading" === ownedProjectsFetchState;
    }
    return tmp3;
  }, items8);
  if (!stateFromStores1) {
    let tmp23 = tmp6;
    if (tmp6) {
      tmp23 = !projectExists;
    }
    if (tmp23) {
      tmp23 = !stateFromStoresObject.projectUnavailable;
    }
    stateFromStores1 = tmp23;
  }
  const tmpResult27 = require("initialize");
  const items9 = [frameSurfaceOptions, frameSurface];
  const items10 = [projectId];
  const stateFromStores2 = require("initialize").useStateFromStores(items9, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(c1);
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(c1);
    }
    return integrationStatus;
  }, items10);
  let preview_ready;
  if (stateFromStores2 != null) {
    preview_ready = stateFromStores2.preview_ready;
  }
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  const tmpResult28 = require("initialize");
  isLoading = require("ApplicationActionCreators").useApplication(previewAppId).isLoading;
  const tmpResult29 = require("ApplicationActionCreators");
  const items11 = [appChannel];
  const items12 = [projectId];
  stateFromStores3 = require("initialize").useStateFromStores(items11, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(c1);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items12);
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  const tmpResult30 = require("initialize");
  let obj5 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, previewSupportedSurfaces: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true, previewAppChannels: null };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj5.declaredActivity = true === has_activity;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_supported_surfaces;
  }
  obj5.previewSupportedSurfaces = prop;
  obj5.installScope = install_scope;
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.owner_authorization_revoked;
  }
  obj5.ownerAuthorizationRevoked = true === prop1;
  obj5.previewAppChannels = stateFromStores3;
  const conjurePreviewMode = require("useConjurePreviewMode").useConjurePreviewMode(obj5);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult31 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult32 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () => _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }));
  const items13 = [projectId, null != context];
  const effect = obj2.useEffect(() => {
    if (closure_3) {
      if (null == ConjureProjectStore.getProject(c1)) {
        const missingConjureProjectNow = ConjureActionCreators.fetchMissingConjureProjectNow(c1);
      }
    }
    const project = ConjureActionCreators.getProject(c1);
    project.catch(() => {

    });
  }, items13);
  const tmp37 = null != previewAppId && null != getURLForApplicationDefault(previewAppId);
  const tmpResult33 = require("conjureTraceRequests");
  let result = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, guildId);
  c16 = result;
  const items14 = [result, previewAppId, stateFromStores, projectId];
  onAddBot = obj2.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp22 = tmp2;
            let tmp12 = null != stateFromStores;
            if (tmp12) {
              tmp12 = null != previewAppId;
            }
            if (tmp12) {
              application = application(tmp22[22]).fetchApplication(previewAppId);
              c3 = 1;
              c4 = 1;
              const obj5 = {
                value: application.catch(() => {

                          }),
                done: false
              };
              return obj5;
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          tmp22 = tmp2;
          const obj7 = { applicationId: closure_130_5, application: null, guildId: null, onClose: null };
          const application1 = application2.getApplication(closure_130_5);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          obj7.application = application;
          obj7.guildId = closure_130_16;
          obj7.onClose = function onClose() {
            const result = c0(12306).repairConjureGuildHints(closure_1_4, closure_1_16);
            const obj = c0(12306);
            result.finally(() => application(6933).getProject(closure_1_1)).catch(() => {

            });
          };
          let result = tmp2(tmp22[29]).openConjureAppInstallModal(obj7);
          const obj6 = tmp2(tmp22[29]);
        }
        c4 = 3;
        let obj = { value, done: true };
        return obj;
      } catch (tmp16) {
        c4 = tmp;
        throw tmp16;
      }
    }
  }), items14);
  const tmp40 = asyncGeneratorStep;
  const tmpResult34 = require("ConjureInstallTarget");
  [tmp43, tmp44] = stateFromStores(previewAppId.useState(true), 2);
  c18 = tmp44;
  const tmp9Result = stateFromStores(previewAppId.useState(true), 2);
  [tmp46, tmp47] = stateFromStores(previewAppId.useState(false), 2);
  let tmp48 = null;
  if (null != stateFromStores2) {
    tmp48 = tmp38;
  }
  const tmp9Result5 = stateFromStores(previewAppId.useState(false), 2);
  [tmp50, tmp51] = stateFromStores(previewAppId.useState(tmp48), 2);
  const tmp9Result6 = stateFromStores(previewAppId.useState(tmp48), 2);
  [tmp53, tmp54] = stateFromStores(previewAppId.useState(null), 2);
  const tmp9Result8 = stateFromStores(previewAppId.useState(projectId), 2);
  if (tmp9Result8[0] !== projectId) {
    tmp9Result8[1](projectId);
    tmp44(true);
    tmp47(false);
    tmp51(null);
    tmp54(null);
  }
  let tmp61 = tmp38;
  if (true === preview_ready) {
    tmp61 = null != previewAppId;
  }
  if (tmp61) {
    tmp61 = !isResolving;
  }
  if (tmp61) {
    tmp61 = availability.modes.length > 0;
  }
  const tmp9Result7 = stateFromStores(previewAppId.useState(null), 2);
  conjurePreviewAddBotPrompt = require("useConjurePreviewAddBotPrompt").useConjurePreviewAddBotPrompt(projectId, guildId);
  if (tmp63) {
    tmp54(conjurePreviewAddBotPrompt.prompt.id);
    tmp44(false);
  }
  let tmp66 = tmp61;
  if (tmp61) {
    tmp66 = !tmp43;
  }
  closure_20 = tmp66;
  tmp63 = null != conjurePreviewAddBotPrompt && tmp61 && conjurePreviewAddBotPrompt.prompt.id !== tmp53;
  const tmpResult35 = require("useConjurePreviewAddBotPrompt");
  let hasItem = tmp61;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp61) {
    hasItem = tmp37;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp69 = hasItem;
  if (hasItem) {
    tmp69 = tmp66;
  }
  if (tmp69) {
    tmp69 = "frame" === activeMode;
  }
  if (tmp69) {
    tmp69 = null == conjurePreviewAddBotPrompt;
  }
  canAnnotate = tmp69;
  if (hasItem) {
    let tmp70 = tmp46;
    if (!tmp46) {
      tmp70 = tmp69;
    }
    if (!tmp70) {
      tmp70 = conjureAgentNeedsPreview;
    }
    hasItem = tmp70;
  }
  let tmp71 = hasItem;
  if (hasItem) {
    tmp71 = !tmp46;
  }
  if (tmp71) {
    tmp47(true);
  }
  const tmpResult36 = require("conjureAgentNeedsPreview");
  let obj6 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj6.integrationInstalled = prop2;
  result1 = require("conjurePreviewModes").previewBotInstallBlocksMode(activeMode, obj6);
  const items15 = [conjurePreviewAddBotPrompt, result1, onAddBot, isLoading];
  const memo = obj2.useMemo(() => {
    if (null != conjurePreviewAddBotPrompt) {
      const obj2 = { onAddBot: conjurePreviewAddBotPrompt.onAddBot, loading: conjurePreviewAddBotPrompt.adding || isLoading, agentPrompt: null };
      const obj3 = { reason: conjurePreviewAddBotPrompt.prompt.reason, onSkip: conjurePreviewAddBotPrompt.onSkip };
      obj2.agentPrompt = obj3;
      let tmp3 = obj2;
    } else {
      tmp3 = null;
      if (result1) {
        const obj = { onAddBot, loading: isLoading };
        tmp3 = obj;
      }
    }
    return tmp3;
  }, items15);
  const tmpResult37 = require("conjurePreviewModes");
  const items16 = [result1, tmp66, , , ];
  let tmp76 = tmp66;
  if (tmp66) {
    tmp76 = "bot" === activeMode;
  }
  items16[2] = tmp76;
  items16[3] = tmp8;
  items16[4] = bottom;
  [tmp77, tmp78, tmp79, tmp80, tmp81] = items16;
  class ConjureChatSceneTsx2 {
    constructor() {
      paddingBottom = 0;
      if (closure_0) {
        tmp = closure_1;
        paddingBottom = 0;
        if (!closure_1) {
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = closure_2;
          tmp4 = closure_3;
          paddingBottom = Math.max(closure_2.get(), closure_3);
        }
      }
      return { paddingBottom };
    }
  }
  const items17 = [tmp78, tmp79, tmp80, tmp81];
  ConjureChatSceneTsx2.__closure = items17;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp77;
  const animatedStyle = require("module_1653").useAnimatedStyle(ConjureChatSceneTsx2);
  const tmpResult38 = require("module_1653");
  const items18 = [memo1, tmp66, tmp8, bottom];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp83, tmp84, tmp85, tmp86] = items18;
  class ConjureChatSceneTsx3 {
    constructor() {
      num = 0;
      if (!closure_0) {
        tmp = globalThis;
        _Math = Math;
        tmp2 = closure_1;
        tmp3 = closure_2;
        num = -Math.max(0, closure_1.get() - closure_2);
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj.transform = items;
      return obj;
    }
  }
  const items19 = [tmp84, tmp85, tmp86];
  ConjureChatSceneTsx3.__closure = items19;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp83;
  const items20 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = require("module_1653").useAnimatedStyle(ConjureChatSceneTsx3);
  memo1 = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3), items20);
  const items21 = [activeMode, frameSurface, appChannel];
  memo2 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items21);
  let intl = tmp(1112).intl;
  const stringResult = intl.string(_modDef4190["N+VA1J"]);
  c25 = stringResult;
  const items22 = [memo2, availability.modes.length, stringResult, tmp66];
  const memo3 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    let string = intl.string;
    obj.label = string(_modDef4190["1HH2p9"]);
    items = [obj];
    if (availability.modes.length > 0) {
      if (!closure_20) {
        let previewTargetLabel = c25;
        obj3 = { id: "preview", label: previewTargetLabel, page: null };
        const items1 = [obj3];
      } else {
        string = memo2;
      }
      obj2 = conjurePreviewTargets;
      previewTargetLabel = obj2.getPreviewTargetLabel(string);
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, 1);
      return items;
    }
  }, items22);
  let tmp92 = null != memo2;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined2(0 === arg0);
  }, []);
  if (tmp92) {
    tmp92 = memo1.length > 1;
  }
  closure_26 = tmp92;
  const items23 = [memo2, tmp92, stringResult, tmp66, setAppChannel, setFrameSurface, setMode, memo1];
  let first = availability.modes[0];
  let tmp95 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (closure_20) {
        tmp3 = c25;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_20) {
        if (closure_26) {
          fn = (color) => closure_1_16(closure_1_0(12797).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef4190.I2ucou);
      let fn2;
      if (closure_26) {
        fn2 = () => c1(18245)({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(18243).selectPreviewTarget(mode, closure_1_10, closure_1_13, closure_1_15);
            closure_1_18(false);
          }
        });
      }
      const obj2 = { preview: null };
      obj.onShowMenu = fn2;
      obj2.preview = obj;
      tmp = obj2;
    }
    return tmp;
  }, items23);
  if (tmp95) {
    tmp95 = tmp38 !== tmp50;
  }
  if (tmp95) {
    if (tmp96) {
      setMode(first);
      tmp44(false);
    }
    tmp51(tmp38);
    tmp96 = false === tmp50 && tmp38 && null != first;
  }
  const tmpResult39 = require("module_1653");
  const tmpResult40 = require("SegmentedControlState");
  const segmentedControlState = tmpResult40.useSegmentedControlState({ items: memo3, pageWidth: useWindowDimensionsDefault().width - 2 * closure_20, onSetActiveIndex: callback1 });
  if (tmp43) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items24 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items24);
  const items25 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      const result = ConjurePreviewActionCreators.setBuilderPreviewApplicationId(tmp);
      return () => closure_1_0(_undefined[41]).setBuilderPreviewApplicationId(null);
    }
  }, items25);
  const items26 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => c1(c2[42])(previewAppId)) : undefined, items26);
  let obj7 = { items: memo3, pageWidth: useWindowDimensionsDefault().width - 2 * closure_20, onSetActiveIndex: callback1 };
  ({ publishOptions, publish, indicator, text, pendingChanges } = useConjureNativePublishButtonDefault(projectId, guildId));
  closure_30 = tmp4(18251)(projectId, publish, publishOptions);
  const tmp104 = useConjureNativePublishButtonDefault(projectId, guildId);
  canShare = tmp4(18281)(projectId).canShare;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items27 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = { content: closure_2_16(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items27);
  const items28 = [guildId, navigation, null != context];
  memo5 = obj2.useMemo(() => {
    if (closure_3) {
      function openHere(projectId) {
        _undefined.push(closure_0(dependencyMap[26]).ConjureScreenScenes.CHAT, { projectId, entryPoint: "remix" });
      }
    } else {
      openHere = conjureStandaloneScenes.projectOpener(closure_0, (arg0) => closure_0(dependencyMap[26]).pushServerProjectScreen(closure_1_0, arg0, "remix"));
    }
    return openHere;
  }, items28);
  const items29 = [guildId, memo5, stateFromStores];
  const items30 = [projectId];
  const callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo5 };
      obj2.content = closure_2_16(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items29);
  callback4 = obj2.useCallback(() => openConjureShareSheetDefault({ projectId }), items30);
  const items31 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: closure_2_16(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items31);
  closure_37 = obj2.useRef(false);
  _require = tmp40(function*(arg0) {
    if (1 === tmp8) {
      if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        return { value, done: true };
      } else if (ref.current) {
        c7 = 3;
      } else {
        ref.current = true;
        const obj8 = { text: null, icon: null };
        const intl2 = closure_0(1112).intl;
        obj8.text = intl2.string(projectId(4190).qqlUiW);
        obj8.icon = closure_0(16487).UndoIcon;
        projectId(5595).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(5595);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(18358).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(1112).intl;
      closure_0(5594).presentError(intl.string(projectId(4190)["PSdo+w"]));
      c5 = 0;
      ref.current = false;
      c7 = 3;
      return { value: undefined, done: true };
    } else {
      if (4 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          ref.current = false;
          c7 = 3;
          return { value, done: true };
        } else {
          c5 = 1;
          const obj13 = { text: null, icon: null };
          const intl3 = closure_0(1112).intl;
          const obj16 = { title: null };
          obj16.title = closure_0(18360).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(4190).Z4n6LX, obj16);
          obj13.icon = closure_0(16487).UndoIcon;
          projectId(5595).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(18360);
          projectId(5595);
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        ref.current = false;
        c7 = 3;
        return { value, done: true };
      } else {
        closure_130_2 = value;
        if (null != closure_130_2) {
          closure_0(5594).presentError(closure_130_2);
          closure_0(5594);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(18361).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp57 = closure_1;
    if (closure_1 === undefined) {
      tmp57 = null;
    }
    closure_130_1 = tmp57;
    return "Path";
  });
  const items32 = [projectId];
  callback6 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items32);
  const items33 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    const obj2 = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: closure_2_16(ConjureHistorySheetDefault, { projectId, onRestoreVersion: callback6 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items33);
  const tmp105 = useIsConjureProjectLiveDefault(stateFromStores);
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const tmpResult41 = require("useConjureDebugAccess");
  isConjureMcpUiEnabled = require("ConjureMcpUiExperiment").useIsConjureMcpUiEnabled("ConjureChatScene");
  const items34 = [navigation, projectId];
  callback8 = obj2.useCallback(() => _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items34);
  const items35 = [frameSurface];
  const memo6 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items35);
  const tmp117 = setAppChannel(useFrameBySurfaceDefault(previewAppId, memo6));
  closure_43 = tmp117;
  const items36 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items36);
  const tmpResult42 = require("ConjureMcpUiExperiment");
  require("Link").useRoute().key;
  const tmpResult43 = require("Link");
  let tmp119;
  if (tmpResult44.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp119 = onExit;
  }
  onExit = tmp119;
  const items37 = [tmp119, navigation];
  callback10 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      _undefined.goBack();
    }
  }, items37);
  const items38 = [callback10, projectId];
  callback11 = obj2.useCallback(() => {
    closeConnection(c1);
    callback10();
  }, items38);
  tmpResult44 = require("Link");
  const items39 = [frameSurfaceOptions];
  const items40 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items39, () => ConjureProjectStore.isProjectDeleting(c1), items40);
  const items41 = [stateFromStores4, callback11, projectId, null != context, navigation];
  const effect3 = obj2.useEffect(() => {
    if (!stateFromStores4) {
      if (stateFromStores4) {
        callback11();
      }
    } else {
      let tmp3 = null;
      let tmp4 = null;
      if (closure_3) {
        tmp4 = c2;
      }
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let rootState;
      if (rootNavigationRef != tmp3) {
        rootState = rootNavigationRef.getRootState();
      }
      if (rootState != tmp3) {
        const routes1 = rootState.routes;
        const substr = routes1.slice(0, rootState.index + 1);
        let findLastResult = substr.findLast((name) => "modal" !== name.name);
      }
      if (tmp3 != tmp4) {
        tmp3 = findLastResult == tmp3;
        let name;
        if (!tmp3) {
          name = findLastResult.name;
        }
        findLastResult = "conjure" === name && tmp4.isFocused();
      } else {
        const coerceMainRouteResult = NavigationRouteUtils.coerceMainRoute(findLastResult);
        state = undefined;
        if (coerceMainRouteResult != tmp3) {
          state = coerceMainRouteResult.state;
        }
        const tmp5Result = NavigationRouteUtils;
        let tmp11;
        if (state != tmp3) {
          ({ index, routes } = state);
          if (index == tmp3) {
            index = 0;
          }
          tmp11 = routes[index];
        }
        const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(tmp11);
        let subRouteId;
        if (coerceChannelRouteResult != tmp3) {
          subRouteId = coerceChannelRouteResult.params.subRouteId;
        }
        const tmp14 = subRouteId === c1;
        const tmp5Result2 = NavigationRouteUtils;
      }
    }
  }, items41);
  let obj8 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult45 = require("initialize");
  let tmp125 = null;
  if (modes2.includes("widget")) {
    tmp125 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp125 = widgetApplicationId;
    }
  }
  obj8.refreshApplicationId = tmp125;
  const tmp4ResultResult = useConjurePreviewMenuDefault(obj8);
  preview = tmp4ResultResult;
  const tmp4Result = useConjurePreviewMenuDefault;
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => projectId(5127).hideActionSheet(closure_1_0(18382).CONJURE_CHAT_MORE_SHEET_KEY), []);
  const items42 = [canShare, conjureDebugPaneEnabled, tmp69, guildId, callback5, callback8, callback7, callback2, callback4, callback9, isConjureMcpUiEnabled, tmp117, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  if (projectName != null) {
    let tmp134 = null;
    if (null != tmp119) {
      const obj9 = { onExit: tmp119 };
      tmp134 = c16(memo2, obj9);
    }
    const items43 = [tmp134, ];
    const obj10 = { onBack: callback10, showBorder: null, title: null, actions: null };
    let tmp139 = !tmp61;
    if (tmp61) {
      tmp139 = !projectExists;
    }
    obj10.showBorder = tmp139;
    let tmp141 = null;
    const tmp4Result6 = tmp4(18391);
    if (projectExists) {
      tmp141 = stateFromStores;
    }
    const obj11 = { project: tmp141, title: projectName, onPressIcon: callback2, draft: pendingChanges };
    obj10.title = c16(tmp4(18392), obj11);
    let tmp132Result = null;
    if (projectExists) {
      let tmp137Result = null;
      if (null != stateFromStores) {
        tmp137Result = null;
        if (tmp105) {
          tmp137Result = null;
          if (setFrameSurface(stateFromStores)) {
            const obj12 = { IconComponent: tmp(13864).PaperPlusIcon, onPress: callback3, accessibilityLabel: null };
            let intl2 = tmp(1112).intl;
            obj12.accessibilityLabel = intl2.string(tmp4(4190).XWgAfc);
            tmp137Result = tmp137(tmp4(18393), obj12);
            const tmp4Result8 = tmp4(18393);
          }
        }
      }
      const items44 = [tmp137Result, , ];
      let tmp137Result6 = null;
      if (null != publish) {
        tmp137Result6 = null;
        if (null != indicator) {
          let obj13 = {
            IconComponent: tmp(9487).UploadIcon,
            onPress() {
                      return closure_30("header");
                    },
            disabled: "publishing" === indicator,
            accessibilityLabel: text,
            badge: null,
            badgeSize: null
          };
          const obj14 = { indicator };
          obj13.badge = tmp137(tmp4(18394), obj14);
          const tmp4Result9 = tmp4(18393);
          obj13.badgeSize = tmp(18394).conjurePublishBadgeSize(indicator);
          tmp137Result6 = tmp137(tmp4Result9, obj13);
          const tmpResult47 = tmp(18394);
        }
      }
      const obj15 = { children: null };
      items44[1] = tmp137Result6;
      let obj16 = { IconComponent: tmp(7022).MoreHorizontalIcon, onPress: tmp129, accessibilityLabel: null };
      let intl3 = tmp(1112).intl;
      obj16.accessibilityLabel = intl3.string(tmp(1112).t["UKOtz+"]);
      items44[2] = tmp137(tmp4(18393), obj16);
      obj15.children = items44;
      tmp132Result = tmp132(tmp133, obj15);
      const tmp4Result10 = tmp4(18393);
    }
    const obj17 = { children: null };
    obj10.actions = tmp132Result;
    items43[1] = c16(tmp4Result6, obj10);
    obj17.children = items43;
    const tmp132Result3 = c18(onAddBot, obj17);
    const tmp4Result7 = tmp4(18392);
    let routeFocused;
    const isFocused = tmp(1501).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_52 = tmp152;
    const items45 = [true === routeFocused && isFocused, projectId];
    const effect5 = obj2.useEffect(() => {
      if (closure_52) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(c1);
        return () => closure_0(c2[21]).clearGlobalChatProject(projectId);
      }
    }, items45);
    const items46 = [guildId, projectId, tmp6];
    const effect6 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, c1);
        return () => closure_0(c2[21]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items46);
    if (projectExists) {
      const obj18 = { style: null, children: null };
      const items47 = [tmp7.contentBare, animatedStyle];
      obj18.style = items47;
      const items48 = [tmp137(tmp4(9659), { absolute: true, mix: true }), tmp132Result3, , ];
      let tmp137Result7 = null;
      if (tmp61) {
        const obj19 = { style: tmp7.segments, children: null };
        const obj20 = { state: segmentedControlState, extras: memo4 };
        obj19.children = tmp137(tmp4(18395), obj20);
        tmp137Result7 = tmp137(availability, obj19);
      }
      items48[2] = tmp137Result7;
      const obj21 = { style: tmp7.panes, children: null };
      let tmp137Result8 = null;
      if (hasItem) {
        tmp137Result8 = null;
        if (null != previewAppId) {
          const obj22 = { style: tmp69 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str6 = "none";
          if (tmp69) {
            str6 = "auto";
          }
          obj22.pointerEvents = str6;
          obj22.accessibilityElementsHidden = !tmp69;
          let str7 = "no-hide-descendants";
          if (tmp69) {
            str7 = "auto";
          }
          obj22.importantForAccessibility = str7;
          const obj23 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp69 };
          obj22.children = tmp137(tmp(18396).PreviewFrame, obj23);
          tmp137Result8 = tmp137(tmp161, obj22);
        }
      }
      const items49 = [tmp137Result8, , ];
      let tmp137Result9 = null;
      if (tmp66) {
        tmp137Result9 = null;
        if (null != previewAppId) {
          tmp137Result9 = null;
          if (!tmp69) {
            const obj24 = { style: tmp7.pane, children: null };
            const obj25 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp37, botInstall: memo };
            obj24.children = tmp137(tmp4(18396), obj25);
            tmp137Result9 = tmp137(tmp161, obj24);
          }
        }
      }
      items49[1] = tmp137Result9;
      const items50 = [tmp7.chatPane, , ];
      let paneHidden = tmp66;
      if (tmp66) {
        paneHidden = tmp7.paneHidden;
      }
      const obj26 = { style: null, children: null };
      items50[1] = paneHidden;
      items50[2] = animatedStyle1;
      obj26.style = items50;
      const obj27 = { value: publishOptions, children: null };
      const obj28 = { value: projectId, children: null };
      const obj29 = { projectId, transcriptTopInset: tmp11, onRestoreVersion: callback6, hidden: tmp66 };
      obj28.children = tmp137(tmp4(18415), obj29);
      obj27.children = tmp137(tmp(18312).ConjureFileMentionProjectContext.Provider, obj28);
      obj26.children = tmp137(tmp(12305).ConjurePublishActionContext.Provider, obj27);
      items49[2] = tmp137(tmp4(1653).View, obj26);
      obj21.children = items49;
      items48[3] = tmp132(availability, obj21);
      obj18.children = items48;
      let tmp132Result4 = tmp132(tmp4(1653).View, obj18);
    } else {
      const obj30 = { style: tmp7.contentBare, children: null };
      const items51 = [tmp137(tmp4(9659), { absolute: true, mix: true }), tmp132Result3, ];
      const obj31 = { style: null, children: null };
      const items52 = [, ];
      ({ content: arr50[0], centered: arr50[1] } = tmp7);
      obj31.style = items52;
      if (stateFromStores1) {
        let tmp137Result10 = tmp137(isLoading, {});
      } else {
        const obj32 = { style: tmp7.listError, children: null };
        const obj33 = { variant: "heading-lg/semibold", color: "text-default", children: null };
        const intl4 = tmp(1112).intl;
        obj33.children = intl4.string(tmp4(4190).G1WwgK);
        const items53 = [tmp137(tmp(5504).Text, obj33), , ];
        const obj34 = { variant: "body-md/normal", color: "text-muted", children: null };
        const intl5 = tmp(1112).intl;
        obj34.children = intl5.string(tmp4(4190).fINulo);
        items53[1] = tmp137(tmp(5504).Text, obj34);
        const obj35 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl6 = tmp(1112).intl;
        obj35.text = intl6.string(tmp4(4190)["WFJ/vb"]);
        obj35.onPress = function onPress() {
          const obj = ConjureActionCreators;
          if (closure_3) {
            let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(c1);
          } else {
            missingConjureProjectNow = obj.listProjects(closure_0);
          }
          return missingConjureProjectNow;
        };
        items53[2] = tmp137(tmp(5511).Button, obj35);
        obj32.children = items53;
        tmp137Result10 = tmp132(tmp155, obj32);
      }
      obj31.children = tmp137Result10;
      items51[2] = tmp137(availability, obj31);
      obj30.children = items51;
      tmp132Result4 = tmp132(tmp155, obj30);
    }
    return tmp132Result4;
  } else {
    if (!projectExists) {
      if (!stateFromStores1) {
        let uk6jhJ = tmp4(4190).G1WwgK;
      }
      tmp130(uk6jhJ);
    }
    uk6jhJ = tmp4(4190).uk6jhJ;
  }
};