// === Module 12072: ConjureChatScene ===

// Module 12072 (ConjureChatScene)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7004 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10848 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10875 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10883 */;
import restartFrames from "restartFrames" /* 10926 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 12086 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 12089 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12468 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12514 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12525 */;
import ConjureChatMoreSheet from "ConjureChatMoreSheet" /* 12549 */;
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
  let result1;
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
  let tmp7 = result1(bottom);
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
  let application = require("ApplicationActionCreators").useApplication(previewAppId);
  ({ data, isLoading } = application);
  const tmpResult22 = require("ApplicationActionCreators");
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
  const tmpResult23 = require("initialize");
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
  const tmpResult24 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult25 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }));
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  const tmpResult26 = require("conjureTraceRequests");
  const obj11 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop3;
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.integration_installed;
  }
  if (prop3 == null) {
    prop3 = null;
  }
  obj11.integrationInstalled = prop3;
  obj11.botPermissionsChanged = true === prop2;
  let result = require("conjurePreviewModes").requiresPermissionReview(obj11);
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
  const tmp38 = null != previewAppId && null != projectId(tmp2[28])(previewAppId);
  const tmpResult27 = require("conjurePreviewModes");
  result1 = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, stateFromStores, projectId];
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
            const result = c0(12087).repairConjureGuildHints(closure_1_7, closure_1_18);
            const obj = c0(12087);
            result.finally(() => application(10875).getProject(closure_1_1)).catch(() => {

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
  }), items12);
  const tmp40 = asyncGeneratorStep;
  const tmpResult28 = require("ConjureInstallTarget");
  [tmp43, tmp44] = bottom(noop.useState(true), 2);
  c19 = tmp44;
  const tmp9Result = bottom(noop.useState(true), 2);
  [tmp46, tmp47] = bottom(noop.useState(false), 2);
  let tmp48 = null;
  if (null != stateFromStores2) {
    tmp48 = tmp33;
  }
  const tmp9Result4 = bottom(noop.useState(false), 2);
  [tmp50, tmp51] = bottom(noop.useState(tmp48), 2);
  const tmp9Result6 = bottom(noop.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    tmp9Result6[1](projectId);
    tmp44(true);
    tmp47(false);
    tmp51(null);
  }
  let tmp57 = tmp33;
  if (true === preview_ready) {
    tmp57 = null != previewAppId;
  }
  if (tmp57) {
    tmp57 = !isResolving;
  }
  if (tmp57) {
    tmp57 = availability.modes.length > 0 || result;
    const tmp58 = availability.modes.length > 0 || result;
  }
  let tmp59 = tmp57;
  if (tmp57) {
    tmp59 = !tmp43;
  }
  __initData = tmp59;
  const tmp9Result5 = bottom(noop.useState(tmp48), 2);
  let hasItem = tmp57;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp57) {
    hasItem = tmp38;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  const tmpResult29 = require("conjureAgentNeedsPreview");
  const tmpResult30 = require("conjurePreviewModes");
  const result2 = tmpResult30.permissionReviewBlocksMode(activeMode, result, tmp35, require("conjurePreviewModes").previewNeedsAppConsent(data));
  let tmp63 = hasItem;
  if (hasItem) {
    tmp63 = tmp59;
  }
  if (tmp63) {
    tmp63 = "frame" === activeMode;
  }
  if (tmp63) {
    tmp63 = !result2;
  }
  __initData2 = tmp63;
  if (hasItem) {
    let tmp64 = tmp46;
    if (!tmp46) {
      tmp64 = tmp63;
    }
    if (!tmp64) {
      tmp64 = conjureAgentNeedsPreview;
    }
    hasItem = tmp64;
  }
  let tmp65 = hasItem;
  if (hasItem) {
    tmp65 = !tmp46;
  }
  if (tmp65) {
    tmp47(true);
  }
  let tmp67 = tmp59;
  if (tmp59) {
    tmp67 = "bot" === activeMode;
  }
  __initData3 = tmp67;
  if (stateFromStores2 != null) {
    const integration_installed = stateFromStores2.integration_installed;
  }
  const tmpResult31 = require("conjurePreviewModes");
  class Ke {
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
  Ke.__closure = { previewShowing: tmp59, botFaceShowing: tmp67, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Ke.__workletHash = 9469604169548;
  Ke.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Ke);
  const tmpResult32 = require("ReanimatedRexport");
  class Le {
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
  Le.__closure = { previewShowing: tmp59, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Le.__workletHash = 7166266100039;
  Le.__initData = __initData3;
  const items13 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Le);
  memo = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3), items13);
  const items14 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items14);
  let intl = tmp(tmp2[33]).intl;
  const stringResult = intl.string(projectId(tmp2[34])["N+VA1J"]);
  c25 = stringResult;
  const items15 = [memo1, availability.modes.length, stringResult, tmp59];
  const memo2 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    obj.label = intl.string(_modDef3868["1HH2p9"]);
    const items = [obj];
    if (availability.modes.length > 0) {
      let tmp = closure_20;
      if (!closure_20) {
        let previewTargetLabel = c25;
        obj3 = { id: "preview", label: previewTargetLabel, page: null };
        const items1 = [obj3];
      } else {
        tmp = memo1;
      }
      obj2 = conjurePreviewTargets;
      previewTargetLabel = obj2.getPreviewTargetLabel(tmp);
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, 1);
      return items;
    }
  }, items15);
  let tmp74 = null != memo1;
  const callback1 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp74) {
    tmp74 = memo.length > 1;
  }
  closure_26 = tmp74;
  const items16 = [memo1, tmp74, stringResult, tmp59, setAppChannel, setFrameSurface, setMode, memo];
  let first = availability.modes[0];
  let tmp77 = null != stateFromStores2;
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
          fn = (color) => setFrameSurface(closure_1_0(11413).ChevronSmallDownIcon, { size: "xs", color });
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
            const previewTarget = closure_2_0(12089).selectPreviewTarget(mode, closure_1_12, closure_1_15, closure_1_17);
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
  if (tmp77) {
    tmp77 = tmp33 !== tmp50;
  }
  if (tmp77) {
    if (tmp78) {
      setMode(first);
      tmp44(false);
    }
    tmp51(tmp33);
    tmp78 = false === tmp50 && tmp33 && null != first;
  }
  const tmpResult33 = require("ReanimatedRexport");
  const tmpResult34 = require("SegmentedControlState");
  const segmentedControlState = tmpResult34.useSegmentedControlState({ items: memo2, pageWidth: projectId(tmp2[37])().width - 2 * c19, onSetActiveIndex: callback1 });
  if (tmp43) {
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
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => closure_0(navigation[39]).leaveConjurePreviewFrame(previewAppId)) : undefined, items18);
  const obj12 = { items: memo2, pageWidth: projectId(tmp2[37])().width - 2 * c19, onSetActiveIndex: callback1 };
  ({ publishOptions, publish, indicator, label } = projectId(tmp2[40])(projectId, guildId));
  closure_30 = tmp4(tmp2[41])(projectId, publish, publishOptions);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items19 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = { content: __initData(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items19);
  const items20 = [guildId, navigation, null != context];
  memo4 = obj2.useMemo(() => {
    function openHere(projectId) {
      closure_1_2.push(closure_0(navigation[26]).ConjureScreenScenes.CHAT, { projectId, entryPoint: "remix" });
    }
    let projectOpenerResult = openHere;
    if (!closure_3) {
      projectOpenerResult = conjureStandaloneScenes.projectOpener(closure_0, openHere);
    }
    return projectOpenerResult;
  }, items20);
  const items21 = [guildId, memo4, stateFromStores];
  callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo4 };
      obj2.content = __initData(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items21);
  const items22 = [projectId];
  callback4 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: __initData(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  closure_36 = obj2.useRef(false);
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
        const intl2 = closure_0(navigation[33]).intl;
        obj8.text = intl2.string(projectId(navigation[34]).qqlUiW);
        obj8.icon = closure_0(navigation[47]).UndoIcon;
        projectId(navigation[46]).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(navigation[46]);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(navigation[48]).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(navigation[33]).intl;
      closure_0(navigation[49]).presentError(intl.string(projectId(navigation[34])["PSdo+w"]));
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
          obj16.title = closure_0(navigation[50]).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(navigation[34]).Z4n6LX, obj16);
          obj13.icon = closure_0(navigation[47]).UndoIcon;
          projectId(navigation[46]).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(navigation[50]);
          projectId(navigation[46]);
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
          closure_0(navigation[49]).presentError(closure_130_2);
          closure_0(navigation[49]);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(navigation[51]).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp57 = closure_1;
    if (closure_1 === undefined) {
      tmp57 = null;
    }
    closure_130_1 = tmp57;
    return "flexDirection";
  });
  const items23 = [projectId];
  callback5 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items23);
  const items24 = [callback5, , ];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items24[1] = install_scope1;
  items24[2] = projectId;
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
  }, items24);
  const tmp85 = projectId(tmp2[40])(projectId, guildId);
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const tmpResult35 = require("useConjureDebugAccess");
  isConjureMcpUiEnabled = require("ConjureMcpUiExperiment").useIsConjureMcpUiEnabled("ConjureChatScene");
  const items25 = [navigation, projectId];
  callback7 = obj2.useCallback(() => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items25);
  const items26 = [frameSurface];
  const memo5 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items26);
  const tmp97 = frameSurfaceOptions(projectId(tmp2[56])(previewAppId, memo5));
  closure_42 = tmp97;
  const items27 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items27);
  const tmpResult36 = require("ConjureMcpUiExperiment");
  require("Link").useRoute().key;
  const tmpResult37 = require("Link");
  let tmp99;
  if (tmpResult38.useNavigationState((arg0) => {
    const first = arg0.routes[0];
    key = undefined;
    if (first != null) {
      key = first.key;
    }
    return key === key;
  })) {
    tmp99 = onExit;
  }
  onExit = tmp99;
  const items28 = [tmp99, navigation];
  callback9 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      navigation.goBack();
    }
  }, items28);
  const items29 = [callback9, projectId];
  callback10 = obj2.useCallback(() => {
    closeConnection(projectId);
    callback9();
  }, items29);
  tmpResult38 = require("Link");
  const items30 = [setMode];
  const items31 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items30, () => ConjureProjectStore.isProjectDeleting(projectId), items31);
  const items32 = [stateFromStores4, callback10];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items32);
  let obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult39 = require("initialize");
  let tmp105 = null;
  if (modes2.includes("widget")) {
    tmp105 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp105 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp105;
  const tmp4ResultResult = projectId(tmp2[59])(obj13);
  preview = tmp4ResultResult;
  const tmp4Result = projectId(tmp2[59]);
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const effect4 = obj2.useEffect(() => () => projectId(5258).hideActionSheet(closure_1_0(12549).CONJURE_CHAT_MORE_SHEET_KEY), []);
  const items33 = [conjureDebugPaneEnabled, tmp63, guildId, callback4, callback7, callback6, callback3, callback2, callback8, isConjureMcpUiEnabled, tmp97, tmp4ResultResult, stateFromStores, conjureRemoveTarget];
  if (projectName != null) {
    let tmp114 = null;
    if (null != tmp99) {
      const obj14 = { onExit: tmp99 };
      tmp114 = setFrameSurface(memo, obj14);
    }
    const items34 = [tmp114, ];
    const obj15 = { onBack: callback9, showBorder: null, title: null, actions: null };
    let tmp119 = !tmp57;
    if (tmp57) {
      tmp119 = !projectExists;
    }
    obj15.showBorder = tmp119;
    let tmp121 = null;
    const tmp4Result6 = tmp4(tmp2[62]);
    if (projectExists) {
      tmp121 = stateFromStores;
    }
    let obj16 = { project: tmp121, title: projectName, onPressIcon: callback2 };
    obj15.title = setFrameSurface(tmp4(tmp2[63]), obj16);
    let tmp112Result = null;
    if (projectExists) {
      let tmp117Result6 = null;
      if (null != publish) {
        const obj17 = {
          IconComponent: tmp(tmp2[65]).UploadIcon,
          onPress() {
                  return closure_30("header");
                },
          disabled: "publishing" === indicator,
          accessibilityLabel: label,
          badge: null,
          badgeSize: null
        };
        let tmp117Result = null;
        if (null != indicator) {
          const obj18 = { indicator };
          tmp117Result = tmp117(tmp4(tmp2[66]), obj18);
        }
        obj17.badge = tmp117Result;
        let result3;
        if (null != indicator) {
          result3 = tmp(tmp2[66]).conjurePublishBadgeSize(indicator);
          const tmpResult41 = tmp(tmp2[66]);
        }
        obj17.badgeSize = result3;
        tmp117Result6 = tmp117(tmp4(tmp2[64]), obj17);
        const tmp4Result8 = tmp4(tmp2[64]);
      }
      const obj19 = { children: null };
      const items35 = [tmp117Result6, ];
      const obj20 = { IconComponent: tmp(tmp2[67]).MoreHorizontalIcon, onPress: tmp109, accessibilityLabel: null };
      let intl2 = tmp(tmp2[33]).intl;
      obj20.accessibilityLabel = intl2.string(tmp(tmp2[33]).t["UKOtz+"]);
      items35[1] = tmp117(tmp4(tmp2[64]), obj20);
      obj19.children = items35;
      tmp112Result = tmp112(tmp113, obj19);
      const tmp4Result9 = tmp4(tmp2[64]);
    }
    const obj21 = { children: null };
    obj15.actions = tmp112Result;
    items34[1] = setFrameSurface(tmp4Result6, obj15);
    obj21.children = items34;
    const tmp112Result3 = setAppChannel(appChannel, obj21);
    const tmp4Result7 = tmp4(tmp2[63]);
    let routeFocused;
    const isFocused = tmp(tmp2[58]).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_51 = tmp131;
    const items36 = [true === routeFocused && isFocused, projectId];
    const effect5 = obj2.useEffect(() => {
      if (closure_51) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(projectId);
        return () => closure_0(navigation[21]).clearGlobalChatProject(projectId);
      }
    }, items36);
    const items37 = [guildId, projectId, tmp6];
    const effect6 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
        return () => closure_0(navigation[21]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items37);
    if (projectExists) {
      const obj22 = { style: null, children: null };
      const items38 = [tmp7.contentBare, animatedStyle];
      obj22.style = items38;
      const items39 = [tmp117(tmp4(tmp2[68]), { absolute: true, mix: true }), tmp112Result3, , ];
      let tmp117Result7 = null;
      if (tmp57) {
        const obj23 = { style: tmp7.segments, children: null };
        const obj24 = { state: segmentedControlState, extras: memo3 };
        obj23.children = tmp117(tmp4(tmp2[71]), obj24);
        tmp117Result7 = tmp117(previewAppId, obj23);
      }
      items39[2] = tmp117Result7;
      const obj25 = { style: tmp7.panes, children: null };
      let tmp117Result8 = null;
      if (hasItem) {
        tmp117Result8 = null;
        if (null != previewAppId) {
          const obj26 = { style: tmp63 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str6 = "none";
          if (tmp63) {
            str6 = "auto";
          }
          obj26.pointerEvents = str6;
          obj26.accessibilityElementsHidden = !tmp63;
          let str7 = "no-hide-descendants";
          if (tmp63) {
            str7 = "auto";
          }
          obj26.importantForAccessibility = str7;
          const obj27 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp63 };
          obj26.children = tmp117(tmp(tmp2[39]).PreviewFrame, obj27);
          tmp117Result8 = tmp117(tmp140, obj26);
        }
      }
      const items40 = [tmp117Result8, , ];
      let tmp117Result9 = null;
      if (tmp59) {
        tmp117Result9 = null;
        if (null != previewAppId) {
          tmp117Result9 = null;
          if (!tmp63) {
            const obj28 = { style: tmp7.pane, children: null };
            const obj29 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp38, permissionsGate: null };
            let tmp144 = null;
            if (result2) {
              const obj30 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: false === integration_installed };
              tmp144 = obj30;
            }
            obj29.permissionsGate = tmp144;
            obj28.children = tmp117(tmp4(tmp2[39]), obj29);
            tmp117Result9 = tmp117(tmp140, obj28);
            const tmp4Result10 = tmp4(tmp2[39]);
          }
        }
      }
      items40[1] = tmp117Result9;
      const items41 = [tmp7.chatPane, , ];
      let paneHidden = tmp59;
      if (tmp59) {
        paneHidden = tmp7.paneHidden;
      }
      const obj31 = { style: null, children: null };
      items41[1] = paneHidden;
      items41[2] = animatedStyle1;
      obj31.style = items41;
      const obj32 = { value: publishOptions, children: null };
      const obj33 = { value: projectId, children: null };
      const obj34 = { projectId, transcriptTopInset: tmp10[0], onRestoreVersion: callback5, hidden: tmp59 };
      obj33.children = tmp117(tmp4(tmp2[74]), obj34);
      obj32.children = tmp117(tmp(tmp2[73]).ConjureFileMentionProjectContext.Provider, obj33);
      obj31.children = tmp117(tmp(tmp2[72]).ConjurePublishActionContext.Provider, obj32);
      items40[2] = tmp117(tmp4(tmp2[18]).View, obj31);
      obj25.children = items40;
      items39[3] = tmp112(previewAppId, obj25);
      obj22.children = items39;
      let tmp112Result4 = tmp112(tmp4(tmp2[18]).View, obj22);
    } else {
      const obj35 = { style: tmp7.contentBare, children: null };
      const items42 = [tmp117(tmp4(tmp2[68]), { absolute: true, mix: true }), tmp112Result3, ];
      const obj36 = { style: null, children: null };
      const items43 = [, ];
      ({ content: arr41[0], centered: arr41[1] } = tmp7);
      obj36.style = items43;
      if (stateFromStores1) {
        let tmp117Result10 = tmp117(closure_6, {});
      } else {
        const obj37 = { style: tmp7.listError, children: null };
        const obj38 = { variant: "heading-lg/semibold", color: "text-default", children: null };
        let intl3 = tmp(tmp2[33]).intl;
        obj38.children = intl3.string(tmp4(tmp2[34]).G1WwgK);
        const items44 = [tmp117(tmp(tmp2[69]).Text, obj38), , ];
        const obj39 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl4 = tmp(tmp2[33]).intl;
        obj39.children = intl4.string(tmp4(tmp2[34]).fINulo);
        items44[1] = tmp117(tmp(tmp2[69]).Text, obj39);
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
        items44[2] = tmp117(tmp(tmp2[70]).Button, obj40);
        obj37.children = items44;
        tmp117Result10 = tmp112(tmp134, obj37);
      }
      obj36.children = tmp117Result10;
      items42[2] = tmp117(previewAppId, obj36);
      obj35.children = items42;
      tmp112Result4 = tmp112(tmp134, obj35);
    }
    return tmp112Result4;
  } else {
    if (!projectExists) {
      if (!stateFromStores1) {
        let uk6jhJ = tmp4(tmp2[34]).G1WwgK;
      }
      tmp110(uk6jhJ);
    }
    uk6jhJ = tmp4(tmp2[34]).uk6jhJ;
  }
};