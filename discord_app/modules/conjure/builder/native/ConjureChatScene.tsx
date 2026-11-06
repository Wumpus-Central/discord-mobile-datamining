// === Module 12245: ConjureChatScene ===

// Module 12245 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef4024 from "module_4024" /* 4024 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5404 */;
import getURLForApplicationDefault from "getURLForApplication" /* 5826 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7095 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10984 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11012 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11021 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 11041 */;
import restartFrames from "restartFrames" /* 11075 */;
import ConjureGlobalScreenContextDefault from "ConjureGlobalScreenContext" /* 12246 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 12247 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12259 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 12262 */;
import useConjureNativePublishButtonDefault from "useConjureNativePublishButton" /* 12264 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12297 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12347 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12358 */;
import useFrameBySurfaceDefault from "useFrameBySurface" /* 12378 */;
import useConjurePreviewMenuDefault from "useConjurePreviewMenu" /* 12379 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 12387 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 11013 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11003 */;

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
const closeConnection = fn(10986).closeConnection;
const isLaunched = fn(6927).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5170);
let closure_18 = createStyles.createStyles((paddingBottom) => {
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
let closure_20 = { code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})" };
let closure_21 = { code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})" };
let closure_22 = { code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  let stateFromStores;
  previewAppId = undefined;
  let stateFromStores3;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  c15 = undefined;
  c16 = undefined;
  closure_17 = undefined;
  let canAnnotate;
  let memo;
  let memo1;
  c21 = undefined;
  closure_22 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_26 = undefined;
  projectGuildId = undefined;
  let callback2;
  let memo4;
  let callback3;
  let callback4;
  closure_32 = undefined;
  let callback5;
  let callback6;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback7;
  closure_38 = undefined;
  let callback8;
  onExit = undefined;
  let callback9;
  let callback10;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  closure_47 = undefined;
  ({ entryPoint, onExit } = guildId);
  const navigation = require("useNavigation").useNavigation();
  const context = previewAppId.useContext(ConjureGlobalScreenContextDefault);
  asyncGeneratorStep = tmp6;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp7 = canAnnotate(bottom);
  const tmp8 = useAnimatedKeyboardHeightDefault();
  let obj = require("useNavigation");
  [tmp11, tmp12] = stateFromStores(previewAppId.useState(0), 2);
  const tmp10 = stateFromStores(previewAppId.useState(0), 2);
  items = [memo1, require("module_1705").scheduleOnRN, tmp12, bottom];
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
  const items3 = [setFrameSurface];
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
  const tmpResult24 = require("conjureBuilderOpened");
  const items5 = [setFrameSurface];
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
  const tmpResult25 = require("initialize");
  const items7 = [setFrameSurface];
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
  const tmpResult26 = require("initialize");
  const items9 = [setFrameSurface, frameSurfaceOptions];
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
  const tmpResult27 = require("initialize");
  const tmp27 = previewAppId;
  const tmpResult28 = require("ApplicationActionCreators");
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
  const tmpResult29 = require("initialize");
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
  const tmpResult30 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult31 = require("conjurePreviewModeRequests");
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
  const tmpResult32 = require("conjureTraceRequests");
  let result = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  c15 = result;
  const items14 = [result, previewAppId, stateFromStores, projectId];
  const callback = obj2.useCallback(asyncGeneratorStep(async () => {
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
          obj7.guildId = closure_130_15;
          obj7.onClose = function onClose() {
            const result = c0(12260).repairConjureGuildHints(closure_1_4, closure_1_15);
            const obj = c0(12260);
            result.finally(() => application(11012).getProject(closure_1_1)).catch(() => {

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
  const tmpResult33 = require("ConjureInstallTarget");
  [tmp43, tmp44] = stateFromStores(previewAppId.useState(true), 2);
  c16 = tmp44;
  const tmp9Result = stateFromStores(previewAppId.useState(true), 2);
  [tmp46, tmp47] = stateFromStores(previewAppId.useState(false), 2);
  let tmp48 = null;
  if (null != stateFromStores2) {
    tmp48 = tmp38;
  }
  const tmp9Result4 = stateFromStores(previewAppId.useState(false), 2);
  [tmp50, tmp51] = stateFromStores(previewAppId.useState(tmp48), 2);
  const tmp9Result6 = stateFromStores(previewAppId.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    tmp9Result6[1](projectId);
    tmp44(true);
    tmp47(false);
    tmp51(null);
  }
  let tmp57 = tmp38;
  if (true === preview_ready) {
    tmp57 = null != previewAppId;
  }
  if (tmp57) {
    tmp57 = !isResolving;
  }
  if (tmp57) {
    tmp57 = availability.modes.length > 0;
  }
  let tmp58 = tmp57;
  if (tmp57) {
    tmp58 = !tmp43;
  }
  closure_17 = tmp58;
  const tmp9Result5 = stateFromStores(previewAppId.useState(tmp48), 2);
  let hasItem = tmp57;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp57) {
    hasItem = tmp37;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp61 = hasItem;
  if (hasItem) {
    tmp61 = tmp58;
  }
  if (tmp61) {
    tmp61 = "frame" === activeMode;
  }
  canAnnotate = tmp61;
  if (hasItem) {
    let tmp62 = tmp46;
    if (!tmp46) {
      tmp62 = tmp61;
    }
    if (!tmp62) {
      tmp62 = conjureAgentNeedsPreview;
    }
    hasItem = tmp62;
  }
  let tmp63 = hasItem;
  if (hasItem) {
    tmp63 = !tmp46;
  }
  if (tmp63) {
    tmp47(true);
  }
  const tmpResult34 = require("conjureAgentNeedsPreview");
  let obj6 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj6.integrationInstalled = prop2;
  const result1 = require("conjurePreviewModes").previewBotInstallBlocksMode(activeMode, obj6);
  const tmpResult35 = require("conjurePreviewModes");
  const items15 = [c21, tmp58, , , ];
  let tmp67 = tmp58;
  if (tmp58) {
    tmp67 = "bot" === activeMode;
  }
  items15[2] = tmp67;
  items15[3] = tmp8;
  items15[4] = bottom;
  [tmp68, tmp69, tmp70, tmp71, tmp72] = items15;
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
  const items16 = [tmp69, tmp70, tmp71, tmp72];
  ConjureChatSceneTsx2.__closure = items16;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp68;
  const animatedStyle = require("module_1652").useAnimatedStyle(ConjureChatSceneTsx2);
  const tmpResult36 = require("module_1652");
  const items17 = [closure_22, tmp58, tmp8, bottom];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp74, tmp75, tmp76, tmp77] = items17;
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
  const items18 = [tmp75, tmp76, tmp77];
  ConjureChatSceneTsx3.__closure = items18;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp74;
  const items19 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(ConjureChatSceneTsx3);
  memo = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3), items19);
  const items20 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items20);
  let intl = tmp(1113).intl;
  const stringResult = intl.string(_modDef4024["N+VA1J"]);
  c21 = stringResult;
  const items21 = [memo1, availability.modes.length, stringResult, tmp58];
  const memo2 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    let string = intl.string;
    obj.label = string(_modDef4024["1HH2p9"]);
    items = [obj];
    if (availability.modes.length > 0) {
      if (!closure_17) {
        let previewTargetLabel = c21;
        obj3 = { id: "preview", label: previewTargetLabel, page: null };
        const items1 = [obj3];
      } else {
        string = memo1;
      }
      obj2 = conjurePreviewTargets;
      previewTargetLabel = obj2.getPreviewTargetLabel(string);
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, 1);
      return items;
    }
  }, items21);
  let tmp83 = null != memo1;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined2(0 === arg0);
  }, []);
  if (tmp83) {
    tmp83 = memo.length > 1;
  }
  closure_22 = tmp83;
  const items22 = [memo1, tmp83, stringResult, tmp58, setAppChannel, setFrameSurface, setMode, memo];
  let first = availability.modes[0];
  let tmp86 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_17) {
        tmp3 = c21;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_17) {
        if (closure_22) {
          fn = (color) => closure_1_15(closure_1_0(11573).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef4024.I2ucou);
      let fn2;
      if (closure_22) {
        fn2 = () => c1(12263)({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(12262).selectPreviewTarget(mode, closure_1_9, closure_1_12, closure_1_14);
            closure_1_16(false);
          }
        });
      }
      const obj2 = { preview: null };
      obj.onShowMenu = fn2;
      obj2.preview = obj;
      tmp = obj2;
    }
    return tmp;
  }, items22);
  if (tmp86) {
    tmp86 = tmp38 !== tmp50;
  }
  if (tmp86) {
    if (tmp87) {
      setMode(first);
      tmp44(false);
    }
    tmp51(tmp38);
    tmp87 = false === tmp50 && tmp38 && null != first;
  }
  const tmpResult37 = require("module_1652");
  const tmpResult38 = require("SegmentedControlState");
  const segmentedControlState = tmpResult38.useSegmentedControlState({ items: memo2, pageWidth: useWindowDimensionsDefault().width - 2 * memo, onSetActiveIndex: callback1 });
  if (tmp43) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items23 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items23);
  const items24 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      const result = ConjurePreviewActionCreators.setBuilderPreviewApplicationId(tmp);
      return () => closure_1_0(_undefined[40]).setBuilderPreviewApplicationId(null);
    }
  }, items24);
  const items25 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => c1(c2[41])(previewAppId)) : undefined, items25);
  let obj7 = { items: memo2, pageWidth: useWindowDimensionsDefault().width - 2 * memo, onSetActiveIndex: callback1 };
  ({ publishOptions, publish, indicator, label } = useConjureNativePublishButtonDefault(projectId, guildId));
  closure_26 = tmp4(12274)(projectId, publish, publishOptions);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items26 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = { content: closure_2_15(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items26);
  const items27 = [guildId, navigation, null != context];
  memo4 = obj2.useMemo(() => {
    function openHere(projectId) {
      _undefined.push(closure_0(c2[26]).ConjureScreenScenes.CHAT, { projectId, entryPoint: "remix" });
    }
    let projectOpenerResult = openHere;
    if (!closure_3) {
      projectOpenerResult = conjureStandaloneScenes.projectOpener(closure_0, openHere);
    }
    return projectOpenerResult;
  }, items27);
  const items28 = [guildId, memo4, stateFromStores];
  callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo4 };
      obj2.content = closure_2_15(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items28);
  const items29 = [projectId];
  callback4 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: closure_2_15(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items29);
  closure_32 = obj2.useRef(false);
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
        const intl2 = closure_0(1113).intl;
        obj8.text = intl2.string(projectId(4024).qqlUiW);
        obj8.icon = closure_0(12351).UndoIcon;
        projectId(5867).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(5867);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(12353).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(1113).intl;
      closure_0(5866).presentError(intl.string(projectId(4024)["PSdo+w"]));
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
          const intl3 = closure_0(1113).intl;
          const obj16 = { title: null };
          obj16.title = closure_0(12355).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(4024).Z4n6LX, obj16);
          obj13.icon = closure_0(12351).UndoIcon;
          projectId(5867).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(12355);
          projectId(5867);
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
          closure_0(5866).presentError(closure_130_2);
          closure_0(5866);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(12356).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp57 = closure_1;
    if (closure_1 === undefined) {
      tmp57 = null;
    }
    closure_130_1 = tmp57;
    return "flexDirection";
  });
  const items30 = [projectId];
  callback5 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items30);
  const items31 = [callback5, projectId];
  callback6 = obj2.useCallback(() => {
    const obj2 = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: closure_2_15(ConjureHistorySheetDefault, { projectId, onRestoreVersion: callback5 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items31);
  const tmp95 = useConjureNativePublishButtonDefault(projectId, guildId);
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const tmpResult39 = require("useConjureDebugAccess");
  isConjureMcpUiEnabled = require("ConjureMcpUiExperiment").useIsConjureMcpUiEnabled("ConjureChatScene");
  const items32 = [navigation, projectId];
  callback7 = obj2.useCallback(() => _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items32);
  const items33 = [frameSurface];
  const memo5 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items33);
  const tmp106 = setAppChannel(useFrameBySurfaceDefault(previewAppId, memo5));
  closure_38 = tmp106;
  const items34 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items34);
  const tmpResult40 = require("ConjureMcpUiExperiment");
  require("Link").useRoute().key;
  const tmpResult41 = require("Link");
  let tmp108;
  if (tmpResult42.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp108 = onExit;
  }
  onExit = tmp108;
  const items35 = [tmp108, navigation];
  callback9 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      _undefined.goBack();
    }
  }, items35);
  const items36 = [callback9, projectId];
  callback10 = obj2.useCallback(() => {
    closeConnection(c1);
    callback9();
  }, items36);
  tmpResult42 = require("Link");
  const items37 = [setFrameSurface];
  const items38 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items37, () => ConjureProjectStore.isProjectDeleting(c1), items38);
  const items39 = [stateFromStores4, callback10];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items39);
  let obj8 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult43 = require("initialize");
  let tmp114 = null;
  if (modes2.includes("widget")) {
    tmp114 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp114 = widgetApplicationId;
    }
  }
  obj8.refreshApplicationId = tmp114;
  const tmp4ResultResult = useConjurePreviewMenuDefault(obj8);
  preview = tmp4ResultResult;
  const tmp4Result = useConjurePreviewMenuDefault;
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => projectId(5404).hideActionSheet(closure_1_0(12387).CONJURE_CHAT_MORE_SHEET_KEY), []);
  const items40 = [conjureDebugPaneEnabled, tmp61, guildId, callback4, callback7, callback6, callback3, callback2, callback8, isConjureMcpUiEnabled, tmp106, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  if (projectName != null) {
    let tmp123 = null;
    if (null != tmp108) {
      const obj9 = { onExit: tmp108 };
      tmp123 = c15(num2, obj9);
    }
    const items41 = [tmp123, ];
    const obj10 = { onBack: callback9, showBorder: null, title: null, actions: null };
    let tmp128 = !tmp57;
    if (tmp57) {
      tmp128 = !projectExists;
    }
    obj10.showBorder = tmp128;
    let tmp130 = null;
    const tmp4Result6 = tmp4(12406);
    if (projectExists) {
      tmp130 = stateFromStores;
    }
    const obj11 = { project: tmp130, title: projectName, onPressIcon: callback2 };
    obj10.title = c15(tmp4(12407), obj11);
    let tmp121Result = null;
    if (projectExists) {
      let tmp126Result6 = null;
      if (null != publish) {
        const obj12 = {
          IconComponent: tmp(10054).UploadIcon,
          onPress() {
                  return closure_26("header");
                },
          disabled: "publishing" === indicator,
          accessibilityLabel: label,
          badge: null,
          badgeSize: null
        };
        let tmp126Result = null;
        if (null != indicator) {
          let obj13 = { indicator };
          tmp126Result = tmp126(tmp4(12409), obj13);
        }
        obj12.badge = tmp126Result;
        let result2;
        if (null != indicator) {
          result2 = tmp(12409).conjurePublishBadgeSize(indicator);
          const tmpResult45 = tmp(12409);
        }
        obj12.badgeSize = result2;
        tmp126Result6 = tmp126(tmp4(12408), obj12);
        const tmp4Result8 = tmp4(12408);
      }
      const obj14 = { children: null };
      const items42 = [tmp126Result6, ];
      const obj15 = { IconComponent: tmp(9862).MoreHorizontalIcon, onPress: tmp118, accessibilityLabel: null };
      let intl2 = tmp(1113).intl;
      obj15.accessibilityLabel = intl2.string(tmp(1113).t["UKOtz+"]);
      items42[1] = tmp126(tmp4(12408), obj15);
      obj14.children = items42;
      tmp121Result = tmp121(tmp122, obj14);
      const tmp4Result9 = tmp4(12408);
    }
    let obj16 = { children: null };
    obj10.actions = tmp121Result;
    items41[1] = c15(tmp4Result6, obj10);
    obj16.children = items41;
    const tmp121Result3 = closure_17(c16, obj16);
    const tmp4Result7 = tmp4(12407);
    let routeFocused;
    const isFocused = tmp(1500).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_47 = tmp140;
    const items43 = [true === routeFocused && isFocused, projectId];
    const effect5 = obj2.useEffect(() => {
      if (closure_47) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(c1);
        return () => closure_0(c2[21]).clearGlobalChatProject(projectId);
      }
    }, items43);
    const items44 = [guildId, projectId, tmp6];
    const effect6 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, c1);
        return () => closure_0(c2[21]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items44);
    if (projectExists) {
      const obj17 = { style: null, children: null };
      const items45 = [tmp7.contentBare, animatedStyle];
      obj17.style = items45;
      const items46 = [tmp126(tmp4(10872), { absolute: true, mix: true }), tmp121Result3, , ];
      let tmp126Result7 = null;
      if (tmp57) {
        const obj18 = { style: tmp7.segments, children: null };
        const obj19 = { state: segmentedControlState, extras: memo3 };
        obj18.children = tmp126(tmp4(12411), obj19);
        tmp126Result7 = tmp126(activeMode, obj18);
      }
      items46[2] = tmp126Result7;
      const obj20 = { style: tmp7.panes, children: null };
      let tmp126Result8 = null;
      if (hasItem) {
        tmp126Result8 = null;
        if (null != previewAppId) {
          const obj21 = { style: tmp61 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str6 = "none";
          if (tmp61) {
            str6 = "auto";
          }
          obj21.pointerEvents = str6;
          obj21.accessibilityElementsHidden = !tmp61;
          let str7 = "no-hide-descendants";
          if (tmp61) {
            str7 = "auto";
          }
          obj21.importantForAccessibility = str7;
          const obj22 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp61 };
          obj21.children = tmp126(tmp(12412).PreviewFrame, obj22);
          tmp126Result8 = tmp126(tmp149, obj21);
        }
      }
      const items47 = [tmp126Result8, , ];
      let tmp126Result9 = null;
      if (tmp58) {
        tmp126Result9 = null;
        if (null != previewAppId) {
          tmp126Result9 = null;
          if (!tmp61) {
            const obj23 = { style: tmp7.pane, children: null };
            const obj24 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp37, botInstall: null };
            let tmp153 = null;
            if (result1) {
              const obj25 = { onAddBot: callback, loading: tmpResult28.useApplication(tmp27).isLoading };
              tmp153 = obj25;
            }
            obj24.botInstall = tmp153;
            obj23.children = tmp126(tmp4(12412), obj24);
            tmp126Result9 = tmp126(tmp149, obj23);
            const tmp4Result10 = tmp4(12412);
          }
        }
      }
      items47[1] = tmp126Result9;
      const items48 = [tmp7.chatPane, , ];
      let paneHidden = tmp58;
      if (tmp58) {
        paneHidden = tmp7.paneHidden;
      }
      const obj26 = { style: null, children: null };
      items48[1] = paneHidden;
      items48[2] = animatedStyle1;
      obj26.style = items48;
      const obj27 = { value: publishOptions, children: null };
      const obj28 = { value: projectId, children: null };
      const obj29 = { projectId, transcriptTopInset: tmp11, onRestoreVersion: callback5, hidden: tmp58 };
      obj28.children = tmp126(tmp4(12765), obj29);
      obj27.children = tmp126(tmp(12313).ConjureFileMentionProjectContext.Provider, obj28);
      obj26.children = tmp126(tmp(12269).ConjurePublishActionContext.Provider, obj27);
      items47[2] = tmp126(tmp4(1652).View, obj26);
      obj20.children = items47;
      items46[3] = tmp121(activeMode, obj20);
      obj17.children = items46;
      let tmp121Result4 = tmp121(tmp4(1652).View, obj17);
    } else {
      const obj30 = { style: tmp7.contentBare, children: null };
      const items49 = [tmp126(tmp4(10872), { absolute: true, mix: true }), tmp121Result3, ];
      const obj31 = { style: null, children: null };
      const items50 = [, ];
      ({ content: arr48[0], centered: arr48[1] } = tmp7);
      obj31.style = items50;
      if (stateFromStores1) {
        let tmp126Result10 = tmp126(stateFromStores3, {});
      } else {
        const obj32 = { style: tmp7.listError, children: null };
        const obj33 = { variant: "heading-lg/semibold", color: "text-default", children: null };
        let intl3 = tmp(1113).intl;
        obj33.children = intl3.string(tmp4(4024).G1WwgK);
        const items51 = [tmp126(tmp(5781).Text, obj33), , ];
        const obj34 = { variant: "body-md/normal", color: "text-muted", children: null };
        const intl4 = tmp(1113).intl;
        obj34.children = intl4.string(tmp4(4024).fINulo);
        items51[1] = tmp126(tmp(5781).Text, obj34);
        const obj35 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp(1113).intl;
        obj35.text = intl5.string(tmp4(4024)["WFJ/vb"]);
        obj35.onPress = function onPress() {
          const obj = ConjureActionCreators;
          if (closure_3) {
            let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(c1);
          } else {
            missingConjureProjectNow = obj.listProjects(closure_0);
          }
          return missingConjureProjectNow;
        };
        items51[2] = tmp126(tmp(5788).Button, obj35);
        obj32.children = items51;
        tmp126Result10 = tmp121(tmp143, obj32);
      }
      obj31.children = tmp126Result10;
      items49[2] = tmp126(activeMode, obj31);
      obj30.children = items49;
      tmp121Result4 = tmp121(tmp143, obj30);
    }
    return tmp121Result4;
  } else {
    if (!projectExists) {
      if (!stateFromStores1) {
        let uk6jhJ = tmp4(4024).G1WwgK;
      }
      tmp119(uk6jhJ);
    }
    uk6jhJ = tmp4(4024).uk6jhJ;
  }
};