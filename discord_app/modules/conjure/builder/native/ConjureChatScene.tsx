// === Module 12073: ConjureChatScene ===

// Module 12073 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7004 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10848 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 10900 */;
import restartFrames from "restartFrames" /* 10926 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12087 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 12090 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12127 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12173 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12184 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 12213 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10876 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10867 */;

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
({ ActivityIndicator: metroRequire, Keyboard: closure_7, View: closure_8 } = get_ActivityIndicator);
const closeConnection = fn(10850).closeConnection;
const isLaunched = fn(6847).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5014);
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
let __initData = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let __initData2 = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData3 = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  let navigation;
  noop = undefined;
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
  c18 = undefined;
  c19 = undefined;
  __initData = undefined;
  __initData2 = undefined;
  __initData3 = undefined;
  let memo;
  let memo1;
  c25 = undefined;
  closure_26 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_30 = undefined;
  projectGuildId = undefined;
  let callback2;
  let memo4;
  let callback3;
  let callback4;
  closure_36 = undefined;
  let callback5;
  let callback6;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback7;
  closure_42 = undefined;
  let callback8;
  onExit = undefined;
  let callback9;
  let callback10;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  closure_51 = undefined;
  let tmp2 = navigation;
  ({ entryPoint, onExit } = guildId);
  navigation = require("useNavigation").useNavigation();
  const context = noop.useContext(projectId(navigation[14]));
  asyncGeneratorStep = tmp6;
  const bottom = projectId(navigation[15])().bottom;
  let tmp7 = c18(bottom);
  const tmp8 = projectId(navigation[16])();
  noop = tmp8;
  const tmp10 = bottom(noop.useState(0), 2);
  closure_6 = tmp11;
  let obj = require("useNavigation");
  let obj4 = { onEnd: null };
  let fn = function k(height) {
    ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
  };
  let obj3 = require("KeyboardChatScrollView");
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp10[1], safeAreaBottom: bottom };
  fn.__workletHash = 7830565176778;
  fn.__initData = __initData;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp10[1], safeAreaBottom: bottom };
  let items1 = [setMode];
  let items2 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj6 = require("initialize");
  const trackConjureBuilderOpened = require("conjureBuilderOpened").useTrackConjureBuilderOpened(projectId, entryPoint);
  let obj7 = require("conjureBuilderOpened");
  const items3 = [setMode];
  const items4 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items3, () => {
    const project = ConjureProjectStore.getProject(projectId);
    const obj2 = { projectExists: null != project, projectUnavailable: null, projectName: null, projectGuildId: null, previewAppId: null };
    let result = ConjureActionCreators.isConjureProjectUnavailable(projectId);
    if (!result) {
      result = "failed" === ConjureProjectStore.getProjectLoadStatus(projectId);
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
  }, items4);
  ({ projectExists, projectName, projectGuildId, previewAppId } = stateFromStoresObject);
  let obj8 = require("initialize");
  const items5 = [setMode];
  const items6 = [guildId, null != context];
  let stateFromStores1 = require("initialize").useStateFromStores(items5, () => {
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
  }, items6);
  if (!stateFromStores1) {
    let tmp18 = tmp6;
    if (tmp6) {
      tmp18 = !projectExists;
    }
    if (tmp18) {
      tmp18 = !stateFromStoresObject.projectUnavailable;
    }
    stateFromStores1 = tmp18;
  }
  const obj9 = require("initialize");
  const items7 = [setMode, activeMode];
  const items8 = [projectId];
  const stateFromStores2 = require("initialize").useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
    }
    return integrationStatus;
  }, items8);
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
  const tmpResult = require("initialize");
  let tmp22 = previewAppId;
  const tmpResult20 = require("ApplicationActionCreators");
  const items9 = [frameSurface];
  const items10 = [projectId];
  stateFromStores3 = require("initialize").useStateFromStores(items9, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items10);
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  const tmpResult21 = require("initialize");
  const obj10 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, previewSupportedSurfaces: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true, previewAppChannels: null };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj10.declaredActivity = true === has_activity;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_supported_surfaces;
  }
  obj10.previewSupportedSurfaces = prop;
  obj10.installScope = install_scope;
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.owner_authorization_revoked;
  }
  obj10.ownerAuthorizationRevoked = true === prop1;
  obj10.previewAppChannels = stateFromStores3;
  const conjurePreviewMode = require("useConjurePreviewMode").useConjurePreviewMode(obj10);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult22 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult23 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }));
  const items11 = [projectId, null != context];
  const effect = obj2.useEffect(() => {
    if (closure_3) {
      if (null == ConjureProjectStore.getProject(projectId)) {
        const missingConjureProjectNow = ConjureActionCreators.fetchMissingConjureProjectNow(projectId);
      }
    }
    const project = ConjureActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items11);
  const tmp32 = null != previewAppId && null != projectId(tmp2[27])(previewAppId);
  const tmpResult24 = require("conjureTraceRequests");
  let result = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  c18 = result;
  const items12 = [result, previewAppId, stateFromStores, projectId];
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj7 = { applicationId: closure_130_8, application: null, guildId: null, onClose: null };
          const application1 = application2.getApplication(closure_130_8);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          obj7.application = application;
          obj7.guildId = closure_130_18;
          obj7.onClose = function onClose() {
            const result = c0(12088).repairConjureGuildHints(closure_1_7, closure_1_18);
            const obj = c0(12088);
            result.finally(() => application(10875).getProject(closure_1_1)).catch(() => {

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
  }), items12);
  const tmp35 = asyncGeneratorStep;
  const tmpResult25 = require("ConjureInstallTarget");
  [tmp38, tmp39] = bottom(noop.useState(true), 2);
  c19 = tmp39;
  const tmp9Result = bottom(noop.useState(true), 2);
  [tmp41, tmp42] = bottom(noop.useState(false), 2);
  let tmp43 = null;
  if (null != stateFromStores2) {
    tmp43 = tmp33;
  }
  const tmp9Result4 = bottom(noop.useState(false), 2);
  [tmp45, tmp46] = bottom(noop.useState(tmp43), 2);
  const tmp9Result6 = bottom(noop.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    tmp9Result6[1](projectId);
    tmp39(true);
    tmp42(false);
    tmp46(null);
  }
  let tmp52 = tmp33;
  if (true === preview_ready) {
    tmp52 = null != previewAppId;
  }
  if (tmp52) {
    tmp52 = !isResolving;
  }
  if (tmp52) {
    tmp52 = availability.modes.length > 0;
  }
  let tmp53 = tmp52;
  if (tmp52) {
    tmp53 = !tmp38;
  }
  __initData = tmp53;
  const tmp9Result5 = bottom(noop.useState(tmp43), 2);
  let hasItem = tmp52;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp52) {
    hasItem = tmp32;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp56 = hasItem;
  if (hasItem) {
    tmp56 = tmp53;
  }
  if (tmp56) {
    tmp56 = "frame" === activeMode;
  }
  __initData2 = tmp56;
  if (hasItem) {
    let tmp57 = tmp41;
    if (!tmp41) {
      tmp57 = tmp56;
    }
    if (!tmp57) {
      tmp57 = conjureAgentNeedsPreview;
    }
    hasItem = tmp57;
  }
  let tmp58 = hasItem;
  if (hasItem) {
    tmp58 = !tmp41;
  }
  if (tmp58) {
    tmp42(true);
  }
  let tmp60 = tmp53;
  if (tmp53) {
    tmp60 = "bot" === activeMode;
  }
  __initData3 = tmp60;
  const tmpResult26 = require("conjureAgentNeedsPreview");
  const obj11 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj11.integrationInstalled = prop2;
  const result1 = require("conjurePreviewModes").previewBotInstallBlocksMode(activeMode, obj11);
  const tmpResult27 = require("conjurePreviewModes");
  class Fe {
    constructor() {
      paddingBottom = 0;
      if (closure_20) {
        tmp = closure_22;
        paddingBottom = 0;
        if (!closure_22) {
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = closure_5;
          tmp4 = bottom;
          paddingBottom = Math.max(closure_5.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Fe.__closure = { previewShowing: tmp53, botFaceShowing: tmp60, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Fe.__workletHash = 9469604169548;
  Fe.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Fe);
  const tmpResult28 = require("ReanimatedRexport");
  class Ue {
    constructor() {
      num = 0;
      if (!closure_20) {
        tmp = globalThis;
        _Math = Math;
        tmp2 = closure_5;
        tmp3 = bottom;
        num = -Math.max(0, closure_5.get() - bottom);
      }
      obj = { transform: null };
      items = [];
      items[0] = { translateY: num };
      obj.transform = items;
      return obj;
    }
  }
  Ue.__closure = { previewShowing: tmp53, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Ue.__workletHash = 7166266100039;
  Ue.__initData = __initData3;
  const items13 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Ue);
  memo = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3), items13);
  const items14 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items14);
  let intl = tmp(tmp2[33]).intl;
  const stringResult = intl.string(projectId(tmp2[34])["N+VA1J"]);
  c25 = stringResult;
  const items15 = [memo1, availability.modes.length, stringResult, tmp53];
  const memo2 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    let string = intl.string;
    obj.label = string(_modDef3868["1HH2p9"]);
    const items = [obj];
    if (availability.modes.length > 0) {
      if (!closure_20) {
        let previewTargetLabel = c25;
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
  }, items15);
  let tmp69 = null != memo1;
  const callback1 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp69) {
    tmp69 = memo.length > 1;
  }
  closure_26 = tmp69;
  const items16 = [memo1, tmp69, stringResult, tmp53, setAppChannel, setFrameSurface, setMode, memo];
  let first = availability.modes[0];
  let tmp72 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_20) {
        tmp3 = c25;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_20) {
        if (closure_26) {
          fn = (color) => setFrameSurface(closure_1_0(11414).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef3868.I2ucou);
      let fn2;
      if (closure_26) {
        fn2 = () => projectId(navigation[36])({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(12090).selectPreviewTarget(mode, closure_1_12, closure_1_15, closure_1_17);
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
  }, items16);
  if (tmp72) {
    tmp72 = tmp33 !== tmp45;
  }
  if (tmp72) {
    if (tmp73) {
      setMode(first);
      tmp39(false);
    }
    tmp46(tmp33);
    tmp73 = false === tmp45 && tmp33 && null != first;
  }
  const tmpResult29 = require("ReanimatedRexport");
  const tmpResult30 = require("SegmentedControlState");
  const segmentedControlState = tmpResult30.useSegmentedControlState({ items: memo2, pageWidth: projectId(tmp2[37])().width - 2 * c19, onSetActiveIndex: callback1 });
  if (tmp38) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items17 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items17);
  const items18 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      const result = ConjurePreviewActionCreators.setBuilderPreviewApplicationId(tmp);
      return () => closure_1_0(navigation[39]).setBuilderPreviewApplicationId(null);
    }
  }, items18);
  const items19 = [previewAppId];
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => projectId(navigation[40])(previewAppId)) : undefined, items19);
  const obj12 = { items: memo2, pageWidth: projectId(tmp2[37])().width - 2 * c19, onSetActiveIndex: callback1 };
  ({ publishOptions, publish, indicator, label } = projectId(tmp2[41])(projectId, guildId));
  closure_30 = tmp4(tmp2[42])(projectId, publish, publishOptions);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items20 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = { content: __initData(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items20);
  const items21 = [guildId, navigation, null != context];
  memo4 = obj2.useMemo(() => {
    function openHere(projectId) {
      closure_1_2.push(closure_0(navigation[26]).ConjureScreenScenes.CHAT, { projectId, entryPoint: "remix" });
    }
    let projectOpenerResult = openHere;
    if (!closure_3) {
      projectOpenerResult = conjureStandaloneScenes.projectOpener(closure_0, openHere);
    }
    return projectOpenerResult;
  }, items21);
  const items22 = [guildId, memo4, stateFromStores];
  callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo4 };
      obj2.content = __initData(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items22);
  const items23 = [projectId];
  callback4 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: __initData(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items23);
  closure_36 = obj2.useRef(false);
  _require = tmp35(function*(arg0) {
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
        const intl2 = closure_0(navigation[33]).intl;
        obj8.text = intl2.string(projectId(navigation[34]).qqlUiW);
        obj8.icon = closure_0(navigation[48]).UndoIcon;
        projectId(navigation[47]).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(navigation[47]);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(navigation[49]).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(navigation[33]).intl;
      closure_0(navigation[50]).presentError(intl.string(projectId(navigation[34])["PSdo+w"]));
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
          const intl3 = closure_0(navigation[33]).intl;
          const obj16 = { title: null };
          obj16.title = closure_0(navigation[51]).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(navigation[34]).Z4n6LX, obj16);
          obj13.icon = closure_0(navigation[48]).UndoIcon;
          projectId(navigation[47]).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(navigation[51]);
          projectId(navigation[47]);
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
          closure_0(navigation[50]).presentError(closure_130_2);
          closure_0(navigation[50]);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(navigation[52]).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp57 = closure_1;
    if (closure_1 === undefined) {
      tmp57 = null;
    }
    closure_130_1 = tmp57;
    return "flexDirection";
  });
  const items24 = [projectId];
  callback5 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items24);
  const items25 = [callback5, , ];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items25[1] = install_scope1;
  items25[2] = projectId;
  callback6 = obj2.useCallback(() => {
    const obj2 = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: null };
    const obj3 = { projectId, installScope: null, onRestoreVersion: null };
    let install_scope;
    const obj = ActionSheetActionCreators;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    obj3.installScope = install_scope;
    obj3.onRestoreVersion = callback5;
    obj2.content = __initData(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items25);
  const tmp81 = projectId(tmp2[41])(projectId, guildId);
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const tmpResult31 = require("useConjureDebugAccess");
  isConjureMcpUiEnabled = require("ConjureMcpUiExperiment").useIsConjureMcpUiEnabled("ConjureChatScene");
  const items26 = [navigation, projectId];
  callback7 = obj2.useCallback(() => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items26);
  const items27 = [frameSurface];
  const memo5 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items27);
  const tmp93 = frameSurfaceOptions(projectId(tmp2[57])(previewAppId, memo5));
  closure_42 = tmp93;
  const items28 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items28);
  const tmpResult32 = require("ConjureMcpUiExperiment");
  require("Link").useRoute().key;
  const tmpResult33 = require("Link");
  let tmp95;
  if (tmpResult34.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp95 = onExit;
  }
  onExit = tmp95;
  const items29 = [tmp95, navigation];
  callback9 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items29);
  const items30 = [callback9, projectId];
  callback10 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback9();
  }, items30);
  tmpResult34 = require("Link");
  const items31 = [setMode];
  const items32 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items31, () => ConjureProjectStore.isProjectDeleting(projectId), items32);
  const items33 = [stateFromStores4, callback10];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items33);
  let obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult35 = require("initialize");
  let tmp101 = null;
  if (modes2.includes("widget")) {
    tmp101 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp101 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp101;
  const tmp4ResultResult = projectId(tmp2[60])(obj13);
  preview = tmp4ResultResult;
  const tmp4Result = projectId(tmp2[60]);
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => projectId(5258).hideActionSheet(closure_1_0(12213).CONJURE_CHAT_MORE_SHEET_KEY), []);
  const items34 = [conjureDebugPaneEnabled, tmp56, guildId, callback4, callback7, callback6, callback3, callback2, callback8, isConjureMcpUiEnabled, tmp93, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  if (projectName != null) {
    let tmp110 = null;
    if (null != tmp95) {
      const obj14 = { onExit: tmp95 };
      tmp110 = setFrameSurface(memo, obj14);
    }
    const items35 = [tmp110, ];
    const obj15 = { onBack: callback9, showBorder: null, title: null, actions: null };
    let tmp115 = !tmp52;
    if (tmp52) {
      tmp115 = !projectExists;
    }
    obj15.showBorder = tmp115;
    let tmp117 = null;
    const tmp4Result6 = tmp4(tmp2[63]);
    if (projectExists) {
      tmp117 = stateFromStores;
    }
    let obj16 = { project: tmp117, title: projectName, onPressIcon: callback2 };
    obj15.title = setFrameSurface(tmp4(tmp2[64]), obj16);
    let tmp108Result = null;
    if (projectExists) {
      let tmp113Result6 = null;
      if (null != publish) {
        const obj17 = {
          IconComponent: tmp(tmp2[66]).UploadIcon,
          onPress() {
                  return closure_30("header");
                },
          disabled: "publishing" === indicator,
          accessibilityLabel: label,
          badge: null,
          badgeSize: null
        };
        let tmp113Result = null;
        if (null != indicator) {
          const obj18 = { indicator };
          tmp113Result = tmp113(tmp4(tmp2[67]), obj18);
        }
        obj17.badge = tmp113Result;
        let result2;
        if (null != indicator) {
          result2 = tmp(tmp2[67]).conjurePublishBadgeSize(indicator);
          const tmpResult37 = tmp(tmp2[67]);
        }
        obj17.badgeSize = result2;
        tmp113Result6 = tmp113(tmp4(tmp2[65]), obj17);
        const tmp4Result8 = tmp4(tmp2[65]);
      }
      const obj19 = { children: null };
      const items36 = [tmp113Result6, ];
      const obj20 = { IconComponent: tmp(tmp2[68]).MoreHorizontalIcon, onPress: tmp105, accessibilityLabel: null };
      let intl2 = tmp(tmp2[33]).intl;
      obj20.accessibilityLabel = intl2.string(tmp(tmp2[33]).t["UKOtz+"]);
      items36[1] = tmp113(tmp4(tmp2[65]), obj20);
      obj19.children = items36;
      tmp108Result = tmp108(tmp109, obj19);
      const tmp4Result9 = tmp4(tmp2[65]);
    }
    const obj21 = { children: null };
    obj15.actions = tmp108Result;
    items35[1] = setFrameSurface(tmp4Result6, obj15);
    obj21.children = items35;
    const tmp108Result3 = setAppChannel(appChannel, obj21);
    const tmp4Result7 = tmp4(tmp2[64]);
    let routeFocused;
    const isFocused = tmp(tmp2[59]).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_51 = tmp127;
    const items37 = [true === routeFocused && isFocused, projectId];
    const effect5 = obj2.useEffect(() => {
      if (closure_51) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(projectId);
        return () => closure_0(navigation[21]).clearGlobalChatProject(projectId);
      }
    }, items37);
    const items38 = [guildId, projectId, tmp6];
    const effect6 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
        return () => closure_0(navigation[21]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items38);
    if (projectExists) {
      const obj22 = { style: null, children: null };
      const items39 = [tmp7.contentBare, animatedStyle];
      obj22.style = items39;
      const items40 = [tmp113(tmp4(tmp2[69]), { absolute: true, mix: true }), tmp108Result3, , ];
      let tmp113Result7 = null;
      if (tmp52) {
        const obj23 = { style: tmp7.segments, children: null };
        const obj24 = { state: segmentedControlState, extras: memo3 };
        obj23.children = tmp113(tmp4(tmp2[72]), obj24);
        tmp113Result7 = tmp113(previewAppId, obj23);
      }
      items40[2] = tmp113Result7;
      const obj25 = { style: tmp7.panes, children: null };
      let tmp113Result8 = null;
      if (hasItem) {
        tmp113Result8 = null;
        if (null != previewAppId) {
          const obj26 = { style: tmp56 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str6 = "none";
          if (tmp56) {
            str6 = "auto";
          }
          obj26.pointerEvents = str6;
          obj26.accessibilityElementsHidden = !tmp56;
          let str7 = "no-hide-descendants";
          if (tmp56) {
            str7 = "auto";
          }
          obj26.importantForAccessibility = str7;
          const obj27 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp56 };
          obj26.children = tmp113(tmp(tmp2[73]).PreviewFrame, obj27);
          tmp113Result8 = tmp113(tmp136, obj26);
        }
      }
      const items41 = [tmp113Result8, , ];
      let tmp113Result9 = null;
      if (tmp53) {
        tmp113Result9 = null;
        if (null != previewAppId) {
          tmp113Result9 = null;
          if (!tmp56) {
            const obj28 = { style: tmp7.pane, children: null };
            const obj29 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp32, botInstall: null };
            let tmp140 = null;
            if (result1) {
              const obj30 = { onAddBot: callback, loading: tmpResult20.useApplication(tmp22).isLoading };
              tmp140 = obj30;
            }
            obj29.botInstall = tmp140;
            obj28.children = tmp113(tmp4(tmp2[73]), obj29);
            tmp113Result9 = tmp113(tmp136, obj28);
            const tmp4Result10 = tmp4(tmp2[73]);
          }
        }
      }
      items41[1] = tmp113Result9;
      const items42 = [tmp7.chatPane, , ];
      let paneHidden = tmp53;
      if (tmp53) {
        paneHidden = tmp7.paneHidden;
      }
      const obj31 = { style: null, children: null };
      items42[1] = paneHidden;
      items42[2] = animatedStyle1;
      obj31.style = items42;
      const obj32 = { value: publishOptions, children: null };
      const obj33 = { value: projectId, children: null };
      const obj34 = { projectId, transcriptTopInset: tmp10[0], onRestoreVersion: callback5, hidden: tmp53 };
      obj33.children = tmp113(tmp4(tmp2[76]), obj34);
      obj32.children = tmp113(tmp(tmp2[75]).ConjureFileMentionProjectContext.Provider, obj33);
      obj31.children = tmp113(tmp(tmp2[74]).ConjurePublishActionContext.Provider, obj32);
      items41[2] = tmp113(tmp4(tmp2[18]).View, obj31);
      obj25.children = items41;
      items40[3] = tmp108(previewAppId, obj25);
      obj22.children = items40;
      let tmp108Result4 = tmp108(tmp4(tmp2[18]).View, obj22);
    } else {
      const obj35 = { style: tmp7.contentBare, children: null };
      const items43 = [tmp113(tmp4(tmp2[69]), { absolute: true, mix: true }), tmp108Result3, ];
      const obj36 = { style: null, children: null };
      const items44 = [, ];
      ({ content: arr42[0], centered: arr42[1] } = tmp7);
      obj36.style = items44;
      if (stateFromStores1) {
        let tmp113Result10 = tmp113(closure_6, {});
      } else {
        const obj37 = { style: tmp7.listError, children: null };
        const obj38 = { variant: "heading-lg/semibold", color: "text-default", children: null };
        let intl3 = tmp(tmp2[33]).intl;
        obj38.children = intl3.string(tmp4(tmp2[34]).G1WwgK);
        const items45 = [tmp113(tmp(tmp2[70]).Text, obj38), , ];
        const obj39 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl4 = tmp(tmp2[33]).intl;
        obj39.children = intl4.string(tmp4(tmp2[34]).fINulo);
        items45[1] = tmp113(tmp(tmp2[70]).Text, obj39);
        const obj40 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp(tmp2[33]).intl;
        obj40.text = intl5.string(tmp4(tmp2[34])["WFJ/vb"]);
        obj40.onPress = function onPress() {
          const obj = ConjureActionCreators;
          if (closure_3) {
            let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(projectId);
          } else {
            missingConjureProjectNow = obj.listProjects(closure_0);
          }
          return missingConjureProjectNow;
        };
        items45[2] = tmp113(tmp(tmp2[71]).Button, obj40);
        obj37.children = items45;
        tmp113Result10 = tmp108(tmp130, obj37);
      }
      obj36.children = tmp113Result10;
      items43[2] = tmp113(previewAppId, obj36);
      obj35.children = items43;
      tmp108Result4 = tmp108(tmp130, obj35);
    }
    return tmp108Result4;
  } else {
    if (!projectExists) {
      if (!stateFromStores1) {
        let uk6jhJ = tmp4(tmp2[34]).G1WwgK;
      }
      tmp106(uk6jhJ);
    }
    uk6jhJ = tmp4(tmp2[34]).uk6jhJ;
  }
};