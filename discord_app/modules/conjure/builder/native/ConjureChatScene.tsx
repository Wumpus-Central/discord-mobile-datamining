// === Module 18274: ConjureChatScene ===

// Module 18274 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef4192 from "module_4192" /* 4192 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import RootNavigationRef from "RootNavigationRef" /* 5094 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5131 */;
import getURLForApplicationDefault from "getURLForApplication" /* 5558 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7071 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7541 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7551 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 7592 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11305 */;
import useFrameBySurfaceDefault from "useFrameBySurface" /* 13889 */;
import restartFrames from "restartFrames" /* 13896 */;
import ConjureGlobalScreenContextDefault from "ConjureGlobalScreenContext" /* 18275 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 18276 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 18281 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 18284 */;
import useConjureNativePublishButtonDefault from "useConjureNativePublishButton" /* 18287 */;
import useIsConjureProjectLiveDefault from "useIsConjureProjectLive" /* 18321 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 18323 */;
import openConjureShareSheetDefault from "openConjureShareSheet" /* 18385 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 18395 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 18404 */;
import useConjurePreviewMenuDefault from "useConjurePreviewMenu" /* 18420 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 18423 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7563 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 7542 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7576 */;

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
const closeConnection = fn(7563).closeConnection;
const canRemixProject = fn(6808).canRemixProject;
let isLaunched = fn(6811).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4917);
let closure_21 = createStyles.createStyles((paddingBottom) => {
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
let closure_23 = { code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})" };
let closure_24 = { code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})" };
let closure_25 = { code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  dependencyMap = undefined;
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
  isLaunched = undefined;
  let onAddBot;
  c19 = undefined;
  let conjurePreviewAddBotPrompt;
  closure_21 = undefined;
  let canAnnotate;
  let result1;
  let memo1;
  let memo2;
  c26 = undefined;
  closure_27 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_31 = undefined;
  let canShare;
  let stateFromStores4;
  let stateFromStores5;
  projectGuildId = undefined;
  let callback2;
  let memo5;
  let callback4;
  let callback5;
  closure_40 = undefined;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback8;
  closure_46 = undefined;
  let callback9;
  onExit = undefined;
  let callback10;
  let callback11;
  let stateFromStores6;
  let preview;
  let conjureRemoveTarget;
  closure_55 = undefined;
  let intl = _require;
  let stringResult1 = dependencyMap;
  ({ entryPoint, onExit } = guildId);
  const navigation = require("useNavigation").useNavigation();
  const context = previewAppId.useContext(ConjureGlobalScreenContextDefault);
  asyncGeneratorStep = tmp5;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp140Result14 = closure_21(bottom);
  const tmp7 = useAnimatedKeyboardHeightDefault();
  let obj = require("useNavigation");
  [tmp10, tmp11] = stateFromStores(previewAppId.useState(0), 2);
  let tmp9 = stateFromStores(previewAppId.useState(0), 2);
  items = [result1, require("module_1706").scheduleOnRN, tmp11, bottom];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp12, tmp13, tmp14, tmp15] = items;
  let obj4 = { onEnd: null };
  class ConjureChatSceneTsx1 {
    constructor(arg0) {
      tmp = closure_0(closure_1, Math.max(0, guildId.height - closure_2));
      return;
    }
  }
  let items1 = [tmp13, tmp14, tmp15];
  ConjureChatSceneTsx1.__closure = items1;
  ConjureChatSceneTsx1.__workletHash = 12344605944798;
  ConjureChatSceneTsx1.__initData = tmp12;
  obj4.onEnd = ConjureChatSceneTsx1;
  let items2 = [bottom];
  require("KeyboardChatScrollView").useKeyboardHandler(obj4, items2);
  let obj3 = require("KeyboardChatScrollView");
  const items3 = [appChannel];
  const items4 = [projectId];
  stateFromStores = intl(504).useStateFromStores(items3, () => {
    let project = ConjureProjectStore.getProject(c1);
    if (project == null) {
      project = null;
    }
    return project;
  }, items4);
  const intlResult = intl(504);
  const trackConjureBuilderOpened = intl(18277).useTrackConjureBuilderOpened(projectId, entryPoint);
  const intlResult1 = intl(18277);
  const items5 = [appChannel];
  const items6 = [projectId];
  const stateFromStoresObject = intl(504).useStateFromStoresObject(items5, () => {
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
  const intlResult2 = intl(504);
  const items7 = [appChannel];
  const items8 = [guildId, null != context];
  let stateFromStores1 = intl(504).useStateFromStores(items7, () => {
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
    let tmp22 = tmp5;
    if (tmp5) {
      tmp22 = !projectExists;
    }
    if (tmp22) {
      tmp22 = !stateFromStoresObject.projectUnavailable;
    }
    stateFromStores1 = tmp22;
  }
  const intlResult3 = intl(504);
  const items9 = [appChannel, setFrameSurface];
  const items10 = [projectId];
  const stateFromStores2 = intl(504).useStateFromStores(items9, () => {
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
  const intlResult4 = intl(504);
  isLoading = intl(6845).useApplication(previewAppId).isLoading;
  const intlResult5 = intl(6845);
  const items11 = [c16];
  const items12 = [projectId];
  stateFromStores3 = intl(504).useStateFromStores(items11, () => {
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
  const intlResult6 = intl(504);
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
  const conjurePreviewMode = intl(18278).useConjurePreviewMode(obj5);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const intlResult7 = intl(18278);
  const conjurePreviewModeRequests = intl(14572).useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const intlResult8 = intl(14572);
  const conjureTraceRequests = intl(18280).useConjureTraceRequests(projectId, () => _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }));
  const intlResult9 = intl(18280);
  [tmp36, c16] = stateFromStores(previewAppId.useState(null), 2);
  const items13 = [projectId, null != context];
  const effect = obj2.useEffect(() => {
    if (closure_3) {
      if (null == ConjureProjectStore.getProject(c1)) {
        const missingConjureProjectNow = ConjureActionCreators.fetchMissingConjureProjectNow(c1);
      }
    }
    const project = ConjureActionCreators.getProject(c1);
    project.then(() => closure_1_16(projectId), () => {

    });
  }, items13);
  const tmp38 = null != previewAppId && null != getURLForApplicationDefault(previewAppId);
  const tmp8Result = stateFromStores(previewAppId.useState(null), 2);
  let result = intl(11314).conjureInstallGuildId(stateFromStores, guildId);
  isLaunched = result;
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
              application = application(tmp22[23]).fetchApplication(previewAppId);
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
          obj7.guildId = closure_130_17;
          obj7.onClose = function onClose() {
            const result = c0(11314).repairConjureGuildHints(closure_1_4, closure_1_17);
            const obj = c0(11314);
            result.finally(() => application(7541).getProject(closure_1_1)).catch(() => {

            });
          };
          let result = tmp2(tmp22[30]).openConjureAppInstallModal(obj7);
          const obj6 = tmp2(tmp22[30]);
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
  const intlResult10 = intl(11314);
  const tmp41 = asyncGeneratorStep;
  [tmp44, tmp45] = stateFromStores(previewAppId.useState(true), 2);
  c19 = tmp45;
  const tmp8Result6 = stateFromStores(previewAppId.useState(true), 2);
  [tmp47, tmp48] = stateFromStores(previewAppId.useState(false), 2);
  let tmp49 = null;
  if (null != stateFromStores2) {
    tmp49 = tmp39;
  }
  const tmp8Result7 = stateFromStores(previewAppId.useState(false), 2);
  [tmp51, tmp52] = stateFromStores(previewAppId.useState(tmp49), 2);
  const tmp8Result8 = stateFromStores(previewAppId.useState(tmp49), 2);
  [tmp54, tmp55] = stateFromStores(previewAppId.useState(null), 2);
  const tmp8Result10 = stateFromStores(previewAppId.useState(projectId), 2);
  if (tmp8Result10[0] !== projectId) {
    tmp8Result10[1](projectId);
    tmp45(true);
    tmp48(false);
    tmp52(null);
    tmp55(null);
  }
  let tmp62 = tmp39;
  if (true === preview_ready) {
    tmp62 = null != previewAppId;
  }
  if (tmp62) {
    tmp62 = !isResolving;
  }
  if (tmp62) {
    tmp62 = availability.modes.length > 0;
  }
  const tmp8Result9 = stateFromStores(previewAppId.useState(null), 2);
  conjurePreviewAddBotPrompt = intl(18282).useConjurePreviewAddBotPrompt(projectId, guildId);
  if (tmp64) {
    tmp55(conjurePreviewAddBotPrompt.prompt.id);
    tmp45(false);
  }
  let tmp67 = tmp62;
  if (tmp62) {
    tmp67 = !tmp44;
  }
  closure_21 = tmp67;
  const intlResult11 = intl(18282);
  tmp64 = null != conjurePreviewAddBotPrompt && tmp62 && conjurePreviewAddBotPrompt.prompt.id !== tmp54;
  let hasItem = tmp62;
  const conjureAgentNeedsPreview = intl(18283).useConjureAgentNeedsPreview(projectId);
  if (tmp62) {
    hasItem = tmp38;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp70 = hasItem;
  if (hasItem) {
    tmp70 = tmp67;
  }
  if (tmp70) {
    tmp70 = "frame" === activeMode;
  }
  if (tmp70) {
    tmp70 = null == conjurePreviewAddBotPrompt;
  }
  canAnnotate = tmp70;
  if (hasItem) {
    let tmp71 = tmp47;
    if (!tmp47) {
      tmp71 = tmp70;
    }
    if (!tmp71) {
      tmp71 = conjureAgentNeedsPreview;
    }
    hasItem = tmp71;
  }
  let tmp72 = hasItem;
  if (hasItem) {
    tmp72 = !tmp47;
  }
  if (tmp72) {
    tmp48(true);
  }
  const intlResult12 = intl(18283);
  let obj6 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj6.integrationInstalled = prop2;
  result1 = intl(11311).previewBotInstallBlocksMode(activeMode, obj6);
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
  const intlResult13 = intl(11311);
  const items16 = [memo1, tmp67, , , ];
  let tmp77 = tmp67;
  if (tmp67) {
    tmp77 = "bot" === activeMode;
  }
  items16[2] = tmp77;
  items16[3] = tmp7;
  items16[4] = bottom;
  [tmp78, tmp79, tmp80, tmp81, tmp82] = items16;
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
  const items17 = [tmp79, tmp80, tmp81, tmp82];
  ConjureChatSceneTsx2.__closure = items17;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp78;
  const animatedStyle = intl(1653).useAnimatedStyle(ConjureChatSceneTsx2);
  const intlResult14 = intl(1653);
  const items18 = [memo2, tmp67, tmp7, bottom];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp84, tmp85, tmp86, tmp87] = items18;
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
  const items19 = [tmp85, tmp86, tmp87];
  ConjureChatSceneTsx3.__closure = items19;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp84;
  const items20 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = intl(1653).useAnimatedStyle(ConjureChatSceneTsx3);
  memo1 = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3), items20);
  const items21 = [activeMode, frameSurface, appChannel];
  memo2 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items21);
  let intl2 = intl(1112).intl;
  const stringResult = intl2.string(_modDef4192["N+VA1J"]);
  c26 = stringResult;
  const items22 = [memo2, availability.modes.length, stringResult, tmp67];
  const memo3 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    let string = intl.string;
    obj.label = string(_modDef4192["1HH2p9"]);
    items = [obj];
    if (availability.modes.length > 0) {
      if (!closure_21) {
        let previewTargetLabel = c26;
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
  let tmp93 = null != memo2;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined2(0 === arg0);
  }, []);
  if (tmp93) {
    tmp93 = memo1.length > 1;
  }
  closure_27 = tmp93;
  const items23 = [memo2, tmp93, stringResult, tmp67, setAppChannel, setFrameSurface, setMode, memo1];
  let first = availability.modes[0];
  let tmp96 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (closure_21) {
        tmp3 = c26;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_21) {
        if (closure_27) {
          fn = (color) => onAddBot(closure_1_0(9675).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef4192.I2ucou);
      let fn2;
      if (closure_27) {
        fn2 = () => c1(18286)({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(18284).selectPreviewTarget(mode, closure_1_10, closure_1_13, closure_1_15);
            closure_1_19(false);
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
  if (tmp96) {
    tmp96 = tmp39 !== tmp51;
  }
  if (tmp96) {
    if (tmp97) {
      setMode(first);
      tmp45(false);
    }
    tmp52(tmp39);
    tmp97 = false === tmp51 && tmp39 && null != first;
  }
  const intlResult15 = intl(1653);
  const intlResult16 = intl(8475);
  const segmentedControlState = intlResult16.useSegmentedControlState({ items: memo3, pageWidth: useWindowDimensionsDefault().width - 2 * canAnnotate, onSetActiveIndex: callback1 });
  if (tmp44) {
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
      return () => closure_1_0(_undefined[42]).setBuilderPreviewApplicationId(null);
    }
  }, items25);
  const items26 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => c1(c2[43])(previewAppId)) : undefined, items26);
  let obj7 = { items: memo3, pageWidth: useWindowDimensionsDefault().width - 2 * canAnnotate, onSetActiveIndex: callback1 };
  ({ publishOptions, publish, indicator, hint, text, pendingChanges } = useConjureNativePublishButtonDefault(projectId, guildId));
  closure_31 = tmp3(18292)(projectId, publish, publishOptions);
  const tmp105 = useConjureNativePublishButtonDefault(projectId, guildId);
  canShare = tmp3(18322)(projectId).canShare;
  const tmp106 = useIsConjureProjectLiveDefault(stateFromStores);
  const items27 = [setMode];
  stateFromStores4 = intl(504).useStateFromStores(items27, () => {
    const currentUser = setMode.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const intlResult17 = intl(504);
  const items28 = [frameSurface];
  const items29 = [projectId, stateFromStores4];
  stateFromStores5 = intl(504).useStateFromStores(items28, () => ConjureConnectionStore.isAccessRefused(c1, stateFromStores4), items29);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items30 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = { content: collapsedCategories(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items30);
  const items31 = [guildId, navigation, null != context];
  memo5 = obj2.useMemo(() => {
    if (closure_3) {
      function openHere(projectId) {
        _undefined.push(closure_0(dependencyMap[27]).ConjureScreenScenes.CHAT, { projectId, entryPoint: "remix" });
      }
    } else {
      openHere = conjureStandaloneScenes.projectOpener(closure_0, (arg0) => closure_0(dependencyMap[27]).pushServerProjectScreen(closure_1_0, arg0, "remix"));
    }
    return openHere;
  }, items31);
  const items32 = [guildId, memo5, stateFromStores];
  const items33 = [projectId];
  const callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo5 };
      obj2.content = collapsedCategories(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items32);
  callback4 = obj2.useCallback(() => openConjureShareSheetDefault({ projectId }), items33);
  const items34 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: collapsedCategories(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items34);
  closure_40 = obj2.useRef(false);
  _require = tmp41(function*(arg0) {
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
        obj8.text = intl2.string(projectId(4192).qqlUiW);
        obj8.icon = closure_0(16523).UndoIcon;
        projectId(5599).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(5599);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(18399).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(1112).intl;
      closure_0(5598).presentError(intl.string(projectId(4192)["PSdo+w"]));
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
          obj16.title = closure_0(18401).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(4192).Z4n6LX, obj16);
          obj13.icon = closure_0(16523).UndoIcon;
          projectId(5599).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(18401);
          projectId(5599);
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
          closure_0(5598).presentError(closure_130_2);
          closure_0(5598);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(18402).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp57 = closure_1;
    if (closure_1 === undefined) {
      tmp57 = null;
    }
    closure_130_1 = tmp57;
    return "Path";
  });
  const items35 = [projectId];
  callback6 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items35);
  const items36 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    const obj2 = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: collapsedCategories(ConjureHistorySheetDefault, { projectId, onRestoreVersion: callback6 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items36);
  const intlResult18 = intl(504);
  conjureDebugPaneEnabled = intl(18418).useConjureDebugPaneEnabled();
  const intlResult19 = intl(18418);
  isConjureMcpUiEnabled = intl(18419).useIsConjureMcpUiEnabled("ConjureChatScene");
  const items37 = [navigation, projectId];
  callback8 = obj2.useCallback(() => _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items37);
  const items38 = [frameSurface];
  const memo6 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items38);
  const tmp120 = isLaunched(useFrameBySurfaceDefault(previewAppId, memo6));
  closure_46 = tmp120;
  const items39 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items39);
  const intlResult20 = intl(18419);
  intl(1501).useRoute().key;
  const intlResult21 = intl(1501);
  let tmp122;
  if (intlResult22.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp122 = onExit;
  }
  onExit = tmp122;
  const items40 = [tmp122, navigation];
  callback10 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      _undefined.goBack();
    }
  }, items40);
  const items41 = [callback10, projectId];
  callback11 = obj2.useCallback(() => {
    closeConnection(c1);
    callback10();
  }, items41);
  intlResult22 = intl(1501);
  const items42 = [appChannel];
  const items43 = [projectId];
  stateFromStores6 = intl(504).useStateFromStores(items42, () => ConjureProjectStore.isProjectDeleting(c1), items43);
  const items44 = [stateFromStores6, callback11, projectId, null != context, navigation];
  const effect3 = obj2.useEffect(() => {
    if (!stateFromStores6) {
      if (stateFromStores6) {
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
  }, items44);
  let obj8 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const intlResult23 = intl(504);
  let tmp128 = null;
  if (modes2.includes("widget")) {
    tmp128 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp128 = widgetApplicationId;
    }
  }
  obj8.refreshApplicationId = tmp128;
  const tmp3ResultResult = useConjurePreviewMenuDefault(obj8);
  preview = tmp3ResultResult;
  const tmp3Result = useConjurePreviewMenuDefault;
  conjureRemoveTarget = intl(12293).useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => projectId(5131).hideActionSheet(closure_1_0(18423).CONJURE_CHAT_MORE_SHEET_KEY), []);
  const items45 = [stateFromStores5, canShare, conjureDebugPaneEnabled, tmp70, guildId, callback5, callback8, callback7, callback2, callback4, callback9, isConjureMcpUiEnabled, tmp120, tmp3ResultResult, stateFromStores, conjureRemoveTarget];
  if (projectName != null) {
    let tmp137 = null;
    if (null != tmp122) {
      const obj9 = { onExit: tmp122 };
      tmp137 = onAddBot(c26, obj9);
    }
    const items46 = [tmp137, ];
    const obj10 = { onBack: callback10, showBorder: null, title: null, actions: null };
    let tmp142 = !tmp62;
    if (tmp62) {
      tmp142 = !projectExists;
    }
    if (!tmp142) {
      tmp142 = stateFromStores5;
    }
    obj10.showBorder = tmp142;
    let tmp144 = null;
    const tmp3Result6 = tmp3(18432);
    if (projectExists) {
      tmp144 = null;
      if (!stateFromStores5) {
        tmp144 = stateFromStores;
      }
    }
    const obj11 = { project: tmp144, title: projectName, onPressIcon: callback2, draft: pendingChanges };
    obj10.title = onAddBot(tmp3(18433), obj11);
    let tmp135Result = null;
    if (projectExists) {
      let tmp140Result = null;
      if (null != stateFromStores) {
        tmp140Result = null;
        if (tmp106) {
          tmp140Result = null;
          if (setAppChannel(stateFromStores)) {
            const obj12 = { IconComponent: intl(11303).PaperPlusIcon, onPress: callback3, accessibilityLabel: null };
            let intl3 = intl(1112).intl;
            obj12.accessibilityLabel = intl3.string(tmp3(4192).XWgAfc);
            tmp140Result = tmp140(tmp3(18434), obj12);
            const tmp3Result8 = tmp3(18434);
          }
        }
      }
      const items47 = [tmp140Result, , ];
      let tmp140Result9 = null;
      if (null != publish) {
        let obj13 = {
          IconComponent: intl(9561).UploadIcon,
          onPress() {
                  return closure_31("header");
                },
          disabled: "publishing" === indicator,
          dimmed: null == indicator,
          accessibilityLabel: text,
          accessibilityHint: hint,
          badge: null,
          badgeSize: null
        };
        let tmp140Result8;
        if (null != indicator) {
          const obj14 = { indicator };
          tmp140Result8 = tmp140(tmp3(18435), obj14);
        }
        obj13.badge = tmp140Result8;
        let result2;
        if (null != indicator) {
          result2 = intl(18435).conjurePublishBadgeSize(indicator);
          const intlResult25 = intl(18435);
        }
        obj13.badgeSize = result2;
        tmp140Result9 = tmp140(tmp3(18434), obj13);
        const tmp3Result9 = tmp3(18434);
      }
      const obj15 = { children: null };
      items47[1] = tmp140Result9;
      let obj16 = { IconComponent: intl(7612).MoreHorizontalIcon, onPress: tmp132, accessibilityLabel: null };
      const intl4 = intl(1112).intl;
      obj16.accessibilityLabel = intl4.string(intl(1112).t["UKOtz+"]);
      items47[2] = tmp140(tmp3(18434), obj16);
      obj15.children = items47;
      tmp135Result = tmp135(tmp136, obj15);
      const tmp3Result10 = tmp3(18434);
    }
    const obj17 = { children: null };
    obj10.actions = tmp135Result;
    items46[1] = onAddBot(tmp3Result6, obj10);
    obj17.children = items46;
    let tmp135Result3 = tmp135(tmp136, obj17);
    const tmp3Result7 = tmp3(18433);
    let routeFocused;
    const isFocused = intl(1501).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_55 = tmp157;
    const items48 = [true === routeFocused && isFocused, projectId];
    const effect5 = obj2.useEffect(() => {
      if (closure_55) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(c1);
        return () => closure_0(c2[22]).clearGlobalChatProject(projectId);
      }
    }, items48);
    const items49 = [guildId, projectId, tmp5];
    const effect6 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, c1);
        return () => closure_0(c2[22]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items49);
    if (!projectExists) {
      if (tmp36 !== projectId) {
        const obj18 = { style: tmp140Result14.contentBare, children: null };
        const items50 = [tmp140(tmp3(10447), { absolute: true, mix: true }), tmp135Result3, ];
        const obj19 = { style: null, children: null };
        const items51 = [, ];
        ({ content: arr60[0], centered: arr60[1] } = tmp140Result14);
        obj19.style = items51;
        if (stateFromStores1) {
          let tmp140Result10 = tmp140(isLoading, {});
        } else {
          const obj20 = { style: tmp140Result14.listError, children: null };
          const obj21 = { variant: "heading-lg/semibold", color: "text-default", children: null };
          const intl5 = intl(1112).intl;
          obj21.children = intl5.string(tmp3(4192).G1WwgK);
          const items52 = [tmp140(intl(5508).Text, obj21), , ];
          const obj22 = { variant: "body-md/normal", color: "text-muted", children: null };
          const intl6 = intl(1112).intl;
          obj22.children = intl6.string(tmp3(4192).fINulo);
          items52[1] = tmp140(intl(5508).Text, obj22);
          const obj23 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl7 = intl(1112).intl;
          obj23.text = intl7.string(tmp3(4192)["WFJ/vb"]);
          obj23.onPress = function onPress() {
            const obj = ConjureActionCreators;
            if (closure_3) {
              let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(c1);
            } else {
              missingConjureProjectNow = obj.listProjects(closure_0);
            }
            return missingConjureProjectNow;
          };
          items52[2] = tmp140(intl(5515).Button, obj23);
          obj20.children = items52;
          tmp140Result10 = tmp135(tmp170, obj20);
        }
        obj19.children = tmp140Result10;
        items50[2] = tmp140(availability, obj19);
        obj18.children = items50;
        return tmp135(availability, obj18);
      }
    }
    if (!stateFromStores5) {
      if (projectExists) {
        const obj24 = { style: null, children: null };
        const items53 = [tmp140Result14.contentBare, animatedStyle];
        obj24.style = items53;
        const items54 = [tmp140(tmp3(10447), { absolute: true, mix: true }), tmp135Result3, , ];
        let tmp140Result11 = null;
        if (tmp62) {
          const obj25 = { style: tmp140Result14.segments, children: null };
          const obj26 = { state: segmentedControlState, extras: memo4 };
          obj25.children = tmp140(tmp3(18436), obj26);
          tmp140Result11 = tmp140(availability, obj25);
        }
        items54[2] = tmp140Result11;
        const obj27 = { style: tmp140Result14.panes, children: null };
        let tmp140Result12 = null;
        if (hasItem) {
          tmp140Result12 = null;
          if (null != previewAppId) {
            const obj28 = { style: tmp70 ? tmp140Result14.pane : tmp140Result14.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
            let str6 = "none";
            if (tmp70) {
              str6 = "auto";
            }
            obj28.pointerEvents = str6;
            obj28.accessibilityElementsHidden = !tmp70;
            let str7 = "no-hide-descendants";
            if (tmp70) {
              str7 = "auto";
            }
            obj28.importantForAccessibility = str7;
            const obj29 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp70 };
            obj28.children = tmp140(intl(18437).PreviewFrame, obj29);
            tmp140Result12 = tmp140(tmp164, obj28);
          }
        }
        const items55 = [tmp140Result12, , ];
        let tmp140Result13 = null;
        if (tmp67) {
          tmp140Result13 = null;
          if (null != previewAppId) {
            tmp140Result13 = null;
            if (!tmp70) {
              const obj30 = { style: tmp140Result14.pane, children: null };
              const obj31 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp38, botInstall: memo };
              obj30.children = tmp140(tmp3(18437), obj31);
              tmp140Result13 = tmp140(tmp164, obj30);
            }
          }
        }
        items55[1] = tmp140Result13;
        const items56 = [tmp140Result14.chatPane, , ];
        let paneHidden = tmp67;
        if (tmp67) {
          paneHidden = tmp140Result14.paneHidden;
        }
        const obj32 = { style: null, children: null };
        items56[1] = paneHidden;
        items56[2] = animatedStyle1;
        obj32.style = items56;
        const obj33 = { value: publishOptions, children: null };
        const obj34 = { value: projectId, children: null };
        const obj35 = { projectId, transcriptTopInset: tmp10, onRestoreVersion: callback6, hidden: tmp67 };
        obj34.children = tmp140(tmp3(18458), obj35);
        obj33.children = tmp140(intl(18353).ConjureFileMentionProjectContext.Provider, obj34);
        obj32.children = tmp140(intl(11313).ConjurePublishActionContext.Provider, obj33);
        items55[2] = tmp140(tmp3(1653).View, obj32);
        obj27.children = items55;
        items54[3] = tmp135(availability, obj27);
        obj24.children = items54;
        let tmp135Result4 = tmp135(tmp3(1653).View, obj24);
      }
    }
    const obj36 = { style: tmp140Result14.contentBare, children: null };
    const items57 = [onAddBot(tmp3(10447), { absolute: true, mix: true }), tmp135Result3, ];
    const obj37 = { style: null, children: null };
    const items58 = [, ];
    ({ content: arr58[0], centered: arr58[1] } = tmp140Result14);
    obj37.style = items58;
    const obj38 = { style: tmp140Result14.listError, children: null };
    const obj39 = { variant: "heading-lg/semibold", color: "text-default", children: null };
    intl = intl(1112).intl;
    stringResult1 = intl.string(tmp3(4192).Y2sGrh);
    obj39.children = stringResult1;
    tmp140Result14 = tmp140(intl(5508).Text, obj39);
    obj38.children = tmp140Result14;
    obj37.children = onAddBot(availability, obj38);
    tmp135Result3 = tmp140(availability, obj37);
    items57[2] = tmp135Result3;
    obj36.children = items57;
    tmp135Result4 = tmp135(availability, obj36);
    const intlResult26 = intl(1501);
  } else {
    if (!projectExists) {
      if (!stateFromStores1) {
        if (tmp36 !== projectId) {
          let uk6jhJ = tmp3(4192).G1WwgK;
        }
        tmp133(uk6jhJ);
      }
    }
    uk6jhJ = tmp3(4192).uk6jhJ;
  }
};