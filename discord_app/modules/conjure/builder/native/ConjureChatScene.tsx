// === Module 11707: ConjureChatScene ===

// Module 11707 (ConjureChatScene)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5625 */;
import NavigatorHeader from "NavigatorHeader" /* 6872 */;
import SettingsIcon from "SettingsIcon" /* 7434 */;
import UploadIcon from "UploadIcon" /* 9719 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11011 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11019 */;
import restartFrames from "restartFrames" /* 11055 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11613 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 11648 */;
import conjureProjectActions from "conjureProjectActions" /* 11650 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11667 */;
import ConjurePublishBlockedSheetDefault from "ConjurePublishBlockedSheet" /* 11710 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11713 */;
import conjurePublishAction from "conjurePublishAction" /* 11716 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11732 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12114 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12124 */;
import BugIcon from "BugIcon" /* 12138 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12140 */;
import ExperimentalDirectSelectIcon2 from "ExperimentalDirectSelectIcon" /* 12141 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2046 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 11012 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6721 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11005 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Keyboard: closure_7, View: closure_8 } = get_ActivityIndicator);
const closeConnection = fn(10990).closeConnection;
const conjureDesignFeedbackStore = fn(11708);
({ enterConjureDesignFeedback: closure_11, exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
const isLaunched = fn(6724).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptFirstPublish: fn(11712).showConjureFirstPublishSheet,
  showError(text) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_FAILED", { text, variant: "critical" });
  },
  showConfirmation(intl) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SUCCEEDED", { text: intl, variant: "success" });
  }
};
const createStyles = fn(4945);
let closure_21 = createStyles.createStyles((paddingBottom) => {
  obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listError: null, headerActions: null, segments: null, panes: null, pane: null, chatPane: null, paneHidden: null, paneBackstage: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.contentBare = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj5 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.segments = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
  obj.panes = { flex: 1, overflow: "hidden" };
  obj.pane = { flex: 1 };
  obj.chatPane = { flex: 1, paddingBottom };
  obj.paneHidden = { display: "none" };
  obj.paneBackstage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let closure_23 = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_24 = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
const ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectModeActiveIcon() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const tmp7 = collapsedCategories(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ConjureSelectModeActiveIcon() {
  return collapsedCategories(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, { color: nativeDefault.colors.TEXT_BRAND });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let data;
  let isLoading;
  let stateFromStores4;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  let result1;
  __initData = undefined;
  closure_26 = undefined;
  closure_27 = undefined;
  closure_28 = undefined;
  closure_29 = undefined;
  let active;
  let conjureControlActive;
  c33 = undefined;
  let callback1;
  let memo;
  let memo1;
  let stringResult1;
  closure_38 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_42 = undefined;
  projectGuildId = undefined;
  let callback3;
  let memo5;
  let callback4;
  let callback5;
  closure_48 = undefined;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let callback8;
  closure_53 = undefined;
  let callback9;
  let callback10;
  let stateFromStores5;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo7;
  navigation = require("useNavigation").useNavigation();
  const bottom = projectId(navigation[18])().bottom;
  const tmp5 = setFrameSurface(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[19])();
  noop = tmp6;
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp9;
  obj = require("useNavigation");
  let obj4 = { onEnd: null };
  let fn = function w(height) {
    ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
  };
  let obj3 = require("KeyboardChatScrollView");
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  fn.__workletHash = 7830565176778;
  fn.__initData = setAppChannel;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  let items1 = [stateFromStores4];
  let items2 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj6 = require("initialize");
  const tmp11 = stateFromStores4;
  const items3 = [stateFromStores4];
  const items4 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items3, () => {
    const project = ConjureProjectStore.getProject(projectId);
    obj = { projectExists: null != project, projectName: null, projectGuildId: null, previewAppId: null };
    let name;
    if (project != null) {
      name = project.name;
    }
    if (name == null) {
      name = null;
    }
    obj.projectName = name;
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    obj.projectGuildId = guild_id;
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (prop == null) {
      prop = null;
    }
    obj.previewAppId = prop;
    return obj;
  }, items4);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = require("initialize");
  const items5 = [stateFromStores4];
  const items6 = [guildId];
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => {
    const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(closure_0);
    let tmp2 = "unattempted" === guildProjectsFetchState;
    if (!tmp2) {
      tmp2 = "loading" === guildProjectsFetchState;
    }
    return tmp2;
  }, items6);
  let obj8 = require("initialize");
  const items7 = [stateFromStores4, isLoading];
  const items8 = [projectId];
  const stateFromStores2 = require("initialize").useStateFromStores(items7, () => {
    let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
    }
    return integrationStatus;
  }, items8);
  const obj9 = require("initialize");
  const items9 = [stateFromStores4];
  const items10 = [projectId];
  const stateFromStores3 = require("initialize").useStateFromStores(items9, () => null != ConjureProjectStore.getIntegrationStatus(projectId), items10);
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
  const obj10 = require("initialize");
  let application = require("ApplicationActionCreators").useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  const tmpResult = require("ApplicationActionCreators");
  const items11 = [availability];
  const items12 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items11, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let previewAppChannels;
    if (publishStatus != null) {
      previewAppChannels = publishStatus.previewAppChannels;
    }
    return previewAppChannels;
  }, items12);
  if (stateFromStores4 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores4 = preview_app_channels;
  }
  const tmpResult17 = require("initialize");
  const obj11 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, previewSupportedSurfaces: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true, previewAppChannels: null };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj11.declaredActivity = true === has_activity;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_supported_surfaces;
  }
  obj11.previewSupportedSurfaces = prop;
  obj11.installScope = install_scope;
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.owner_authorization_revoked;
  }
  obj11.ownerAuthorizationRevoked = true === prop1;
  obj11.previewAppChannels = stateFromStores4;
  const conjurePreviewMode = require("useConjurePreviewMode").useConjurePreviewMode(obj11);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult18 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult19 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }));
  const tmpResult20 = require("conjureTraceRequests");
  const obj12 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj12.integrationInstalled = prop2;
  let prop3;
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.bot_permissions_changed;
  }
  obj12.botPermissionsChanged = true === prop3;
  let result = require("conjurePreviewModes").requiresPermissionReview(obj12);
  const items13 = [projectId];
  const effect = obj2.useEffect(() => {
    const project = ConjureActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items13);
  let tmp34 = null != previewAppId && null != projectId(navigation[30])(previewAppId);
  const tmpResult21 = require("conjurePreviewModes");
  result1 = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items14 = [result1, previewAppId, data, stateFromStores, projectId];
  const callback = obj2.useCallback(bottom(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp2;
            let tmp7 = null != stateFromStores;
            if (tmp7) {
              tmp7 = null != previewAppId;
            }
            if (tmp7) {
              if (null == data) {
                application = application(tmp2[23]).fetchApplication(previewAppId);
                c4 = 1;
                c5 = 1;
                const obj6 = {
                  value: application.catch(() => {

                              }),
                  done: false
                };
                return obj6;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const obj7 = { applicationId: closure_131_10, application: null, guildId: null, onClose: null };
        let application3 = closure_131_13;
        if (closure_131_13 == null) {
          application3 = application2.getApplication(closure_131_10);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        obj7.application = application;
        obj7.guildId = closure_131_24;
        obj7.onClose = function onClose() {
          const result = c0(11714).repairConjureGuildHints(closure_1_7, closure_1_24);
          obj = c0(11714);
          result.finally(() => application(11011).getProject(closure_1_1)).catch(() => {

          });
        };
        let result = application3(tmp2[32]).openConjureAppInstallModal(obj7);
        const obj2 = application3(tmp2[32]);
      } catch (tmp27) {
        c5 = tmp;
        throw tmp27;
      }
    }
  }), items14);
  const tmp36 = bottom;
  const tmpResult22 = require("ConjureInstallTarget");
  [tmp39, tmp40] = noop.useState(true);
  __initData = tmp40;
  const tmp7Result = _slicedToArray(noop.useState(true), 2);
  [tmp42, tmp43] = noop.useState(false);
  let tmp44 = null;
  if (null != stateFromStores2) {
    tmp44 = tmp26;
  }
  const tmp7Result4 = _slicedToArray(noop.useState(false), 2);
  [tmp46, tmp47] = noop.useState(tmp44);
  const tmp7Result6 = _slicedToArray(noop.useState(projectId), 2);
  if (tmp7Result6[0] !== projectId) {
    tmp7Result6[1](projectId);
    tmp40(true);
    tmp43(false);
    tmp47(null);
  }
  let tmp53 = tmp26;
  if (true === preview_ready) {
    tmp53 = null != previewAppId;
  }
  if (tmp53) {
    tmp53 = !isResolving;
  }
  if (tmp53) {
    tmp53 = availability.modes.length > 0 || result;
    const tmp54 = availability.modes.length > 0 || result;
  }
  let tmp55 = tmp53;
  if (tmp53) {
    tmp55 = !tmp39;
  }
  closure_26 = tmp55;
  const tmp7Result5 = _slicedToArray(noop.useState(tmp44), 2);
  let hasItem = tmp53;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp53) {
    hasItem = tmp34;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp58 = hasItem;
  if (hasItem) {
    tmp58 = tmp55;
  }
  if (tmp58) {
    tmp58 = "frame" === activeMode;
  }
  closure_27 = tmp58;
  if (hasItem) {
    let tmp59 = tmp42;
    if (!tmp42) {
      tmp59 = tmp58;
    }
    if (!tmp59) {
      tmp59 = conjureAgentNeedsPreview;
    }
    hasItem = tmp59;
  }
  let tmp60 = hasItem;
  if (hasItem) {
    tmp60 = !tmp42;
  }
  if (tmp60) {
    tmp43(true);
  }
  let tmp62 = tmp55;
  if (tmp55) {
    tmp62 = "bot" === activeMode;
  }
  closure_28 = tmp62;
  let prop4;
  if (stateFromStores2 != null) {
    prop4 = stateFromStores2.integration_installed;
  }
  let tmp64 = tmp62;
  if (tmp62) {
    tmp64 = result;
  }
  if (tmp64) {
    tmp64 = tmp65;
  }
  closure_29 = tmp64;
  noop.useRef(false);
  const items15 = [guildId, tmp64, projectId];
  const effect1 = obj2.useEffect(() => {
    if (closure_29) {
      if (!ref.current) {
        ref.current = true;
        const conjureInstallConsent = useConjurePublishAction.requestConjureInstallConsent(projectId, closure_0);
        conjureInstallConsent.catch(() => {

        });
      }
    } else {
      ref.current = false;
    }
  }, items15);
  const tmpResult23 = require("conjureAgentNeedsPreview");
  class Xe {
    constructor() {
      paddingBottom = 0;
      if (closure_26) {
        tmp = closure_28;
        paddingBottom = 0;
        if (!closure_28) {
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
  Xe.__closure = { previewShowing: tmp55, botFaceShowing: tmp62, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Xe.__workletHash = 9469604169548;
  Xe.__initData = result1;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Xe);
  const tmpResult24 = require("ReanimatedRexport");
  class Ve {
    constructor() {
      num = 0;
      if (!closure_26) {
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
  Ve.__closure = { previewShowing: tmp55, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ve.__workletHash = 7166266100039;
  Ve.__initData = __initData;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Ve);
  active = data(projectId).active;
  const tmpResult25 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  let intl = tmp(tmp2[36]).intl;
  const tmp4Result = projectId(navigation[37]);
  if (conjureControlActive) {
    let Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = intl.string(Sme0T0);
  c33 = stringResult;
  const items16 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      __initData(projectId);
    } else {
      closure_2_11(projectId);
    }
  }, items16);
  const items17 = [availability.modes, frameSurfaceOptions, stateFromStores4];
  memo = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores4), items17);
  const items18 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items18);
  let intl2 = tmp(tmp2[36]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[37])["N+VA1J"]);
  const items19 = [memo1, availability.modes.length, stringResult1, tmp55];
  const memo2 = obj2.useMemo(() => {
    obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    obj.label = intl.string(_modDef3820["1HH2p9"]);
    const items = [obj];
    if (availability.modes.length > 0) {
      let tmp = closure_26;
      if (!closure_26) {
        let previewTargetLabel = stringResult1;
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
  }, items19);
  let tmp77 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp77) {
    tmp77 = memo.length > 1;
  }
  closure_38 = tmp77;
  const items20 = [memo1, tmp77, stringResult1, tmp55, setAppChannel, setFrameSurface, setMode, memo];
  const first = availability.modes[0];
  let tmp80 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_26) {
        tmp3 = stringResult1;
      }
      preview = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_26) {
        if (closure_38) {
          fn = (color) => setMode(closure_1_0(10871).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      preview.renderTrailingIcon = fn;
      const intl = util.intl;
      preview.menuLabel = intl.string(_modDef3820.I2ucou);
      let fn2;
      if (closure_38) {
        fn2 = () => projectId(navigation[40])({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(11732).selectPreviewTarget(mode, closure_1_18, closure_1_21, closure_1_23);
            closure_1_25(false);
          }
        });
      }
      const obj2 = { preview: null };
      preview.onShowMenu = fn2;
      obj2.preview = preview;
      tmp = obj2;
    }
    return tmp;
  }, items20);
  if (tmp80) {
    tmp80 = tmp26 !== tmp46;
  }
  if (tmp80) {
    if (tmp81) {
      setMode(first);
      tmp40(false);
    }
    tmp47(tmp26);
    tmp81 = false === tmp46 && tmp26 && null != first;
  }
  const tmpResult26 = require("conjurePreviewControlLease");
  const tmpResult27 = require("SegmentedControlState");
  const segmentedControlState = tmpResult27.useSegmentedControlState({ items: memo2, pageWidth: projectId(navigation[41])().width - 2 * appChannel, onSetActiveIndex: callback2 });
  if (tmp39) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items21 = [num2, activeIndex, setActiveIndex];
  const effect2 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items21);
  const items22 = [previewAppId];
  const effect3 = obj2.useEffect(() => null != previewAppId ? (() => closure_0(navigation[43]).leaveConjurePreviewFrame(previewAppId)) : undefined, items22);
  const items23 = [guildId, stateFromStores3, isLoading];
  const memo4 = obj2.useMemo(() => {
    platform = { guildId, platform, busy: null };
    let tmp = !stateFromStores3;
    if (stateFromStores3) {
      tmp = isLoading;
    }
    platform.busy = tmp;
    return platform;
  }, items23);
  const tmp89 = projectId(navigation[34])(projectId, memo4);
  closure_42 = tmp89;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items24 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    const obj2 = { content: collapsedCategories(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items24);
  const items25 = [guildId, navigation];
  memo5 = obj2.useMemo(() => conjureStandaloneScenes.projectOpener(closure_0, (projectId) => closure_1_2.push(closure_0(navigation[27]).ConjureScreenScenes.CHAT, { projectId })), items25);
  const items26 = [guildId, memo5, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo5 };
      obj2.content = collapsedCategories(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items26);
  const items27 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: collapsedCategories(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items27);
  closure_48 = obj2.useRef(false);
  _require = tmp36(function*(arg0) {
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
        const intl2 = closure_0(navigation[36]).intl;
        obj8.text = intl2.string(projectId(navigation[37]).qqlUiW);
        obj8.icon = closure_0(navigation[48]).UndoIcon;
        projectId(navigation[14]).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(navigation[14]);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(navigation[49]).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(navigation[36]).intl;
      closure_0(navigation[50]).presentError(intl.string(projectId(navigation[37])["PSdo+w"]));
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
          const intl3 = closure_0(navigation[36]).intl;
          const obj16 = { title: null };
          obj16.title = closure_0(navigation[51]).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(navigation[37]).Z4n6LX, obj16);
          obj13.icon = closure_0(navigation[48]).UndoIcon;
          projectId(navigation[14]).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(navigation[51]);
          projectId(navigation[14]);
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
    return "test";
  });
  const items28 = [projectId];
  callback6 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items28);
  const items29 = [callback6, , ];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items29[1] = install_scope1;
  items29[2] = projectId;
  callback7 = obj2.useCallback(() => {
    const obj2 = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: null };
    const obj3 = { projectId, installScope: null, onRestoreVersion: null };
    let install_scope;
    obj = ActionSheetActionCreators;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    obj3.installScope = install_scope;
    obj3.onRestoreVersion = callback6;
    obj2.content = collapsedCategories(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items29);
  let obj13 = { items: memo2, pageWidth: projectId(navigation[41])().width - 2 * appChannel, onSetActiveIndex: callback2 };
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const items30 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items30);
  const items31 = [frameSurface];
  const memo6 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items31);
  const tmp100 = activeMode(projectId(navigation[56])(previewAppId, memo6));
  closure_53 = tmp100;
  const items32 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items32);
  const items33 = [navigation, projectId];
  callback10 = obj2.useCallback(() => {
    closeConnection(projectId);
    navigation.goBack();
  }, items33);
  const tmpResult28 = require("useConjureDebugAccess");
  const items34 = [tmp11];
  const items35 = [projectId];
  stateFromStores5 = require("initialize").useStateFromStores(items34, () => ConjureProjectStore.isProjectDeleting(projectId), items35);
  const items36 = [stateFromStores5, callback10];
  const effect4 = obj2.useEffect(() => {
    if (stateFromStores5) {
      callback10();
    }
  }, items36);
  const obj14 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult29 = require("initialize");
  let tmp106 = null;
  if (modes2.includes("widget")) {
    tmp106 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp106 = widgetApplicationId;
    }
  }
  obj14.refreshApplicationId = tmp106;
  const tmp4Result1Result = projectId(navigation[58])(obj14);
  preview = tmp4Result1Result;
  const tmp4Result3 = projectId(navigation[58]);
  isConjureProjectMuted = require("conjureProjectMute").useIsConjureProjectMuted(projectId);
  const tmpResult30 = require("conjureProjectMute");
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const items37 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback10, callback5, callback8, callback4, callback3, callback7, callback9, tmp100, tmp4Result1Result, stateFromStores, tmp89, conjureRemoveTarget];
  memo7 = obj2.useMemo(() => {
    const items = [];
    let arr7 = disabled;
    if (null == disabled) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3820.I2XSKe);
      obj2.IconComponent = SettingsIcon.SettingsIcon;
      obj2.action = callback3;
      items.push(obj2);
      if (conjureDebugPaneEnabled) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3820["Q4FN+H"]);
        obj3.IconComponent = BugIcon.BugIcon;
        obj3.action = callback8;
        items.push(obj3);
      }
      if (null != stateFromStores) {
        const obj4 = { project: tmp25, guildId, muted: isConjureProjectMuted, removeTarget: conjureRemoveTarget, onRemix: callback4, onConnectTool: callback5, onHistory: callback7, onRefresh: null, onClose: null, preview: null };
        let tmp26;
        if (closure_53) {
          tmp26 = callback9;
        }
        obj4.onRefresh = tmp26;
        obj4.onClose = callback10;
        obj4.preview = preview;
        const result = conjureProjectActions.conjureProjectActions(obj4);
        const iter = result[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let obj8 = { label: null, IconComponent: null, variant: null, action: null };
          ({ label: obj5.label, IconComponent: obj5.IconComponent } = nextResult);
          let str2;
          let tmp34 = nextResult;
          if (true === nextResult.destructive) {
            str2 = "destructive";
          }
          obj8.variant = str2;
          obj8.action = tmp34.action;
          let arr6 = items.push(obj8);
          continue;
        }
      }
      return items;
    } else {
      result1 = conjurePublishAction.conjurePublishTooltip(arr7.status);
      if (null == result1) {
        let label = arr7.label;
      } else {
        const intl = util.intl;
        obj = { action: arr7.label, detail: result1 };
        label = intl.formatToPlainString(_modDef3820["ndkR+x"], obj);
      }
      const obj13 = {
        label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            if (!disabled.disabled) {
              disabled.run("header");
            }
          }
      };
      arr7 = items.push(obj13);
    }
  }, items37);
  const items38 = [conjureControlActive, active, stringResult, tmp58, callback3, callback1, navigation, memo7, stateFromStores, projectExists, projectName, stateFromStores1, tmp5];
  const effect5 = obj2.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      obj = {
        headerTitle() {
            if (null != stateFromStores) {
              if (projectExists) {
                const obj2 = { project: tmp, title, onPressIcon: callback3 };
                let tmp3 = collapsedCategories(ConjureProjectHeaderTitleDefault, obj2);
              }
              return tmp3;
            }
            tmp3 = collapsedCategories(NavigatorHeader.NavigatorHeader, { title });
            obj = { title };
          },
        headerRight() {
            let tmp = null;
            if (projectExists) {
              obj = { style: headerActions.headerActions, children: null };
              if (!closure_1_27) {
                items = [null, ];
                const obj2 = {
                  items,
                  align: "below",
                  children(arg0) {
                        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                        obj = { ref, IconComponent: title(9558).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                        const intl = title(1128).intl;
                        obj.accessibilityLabel = intl.string(title(1128).t["UKOtz+"]);
                        obj.accessibilityActions = accessibilityActions;
                        obj.onAccessibilityAction = onAccessibilityAction;
                        return closure_1_18(closure_1_1(11706), obj);
                      }
                };
                items[1] = setMode(title(navigation[70]).ContextMenu, obj2);
                obj.children = items;
                tmp = tmp2(tmp3, obj);
              } else {
                if (active) {
                  let ExperimentalDirectSelectIcon = closure_26;
                } else {
                  ExperimentalDirectSelectIcon = title(navigation[69]).ExperimentalDirectSelectIcon;
                }
                const obj3 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: null, disabled: null };
                const obj4 = { selected: active };
                obj3.accessibilityState = obj4;
                obj3.disabled = disabled;
                setMode(projectId(navigation[68]), obj3);
                const tmp10 = projectId(navigation[68]);
              }
            }
            return tmp;
          }
      };
      navigation.setOptions(obj);
    } else {
      let tmp2 = navigation;
      if (!projectExists) {
        if (!stateFromStores1) {
          let uk6jhJ = projectId(tmp2[37]).G1WwgK;
        }
        tmp3(uk6jhJ);
      }
      tmp2 = projectId(tmp2[37]);
      uk6jhJ = tmp2.uk6jhJ;
    }
  }, items38);
  const items39 = [guildId, projectId];
  const effect6 = obj2.useEffect(() => {
    const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
    return () => closure_0(navigation[29]).setSelectedProjectForGuild(closure_1_0, null);
  }, items39);
  if (projectExists) {
    const obj15 = { style: null, children: null };
    const items40 = [tmp5.contentBare, animatedStyle];
    obj15.style = items40;
    let tmp120 = null;
    if (tmp53) {
      let obj16 = { style: tmp5.segments, children: null };
      const obj17 = { state: segmentedControlState, extras: memo3 };
      obj16.children = setMode(tmp4(tmp2[74]), obj17);
      tmp120 = setMode(projectExists, obj16);
    }
    const items41 = [tmp120, ];
    const obj18 = { style: tmp5.panes, children: null };
    let tmp125Result = null;
    if (hasItem) {
      tmp125Result = null;
      if (null != previewAppId) {
        const obj19 = { style: tmp58 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str5 = "none";
        if (tmp58) {
          str5 = "auto";
        }
        obj19.pointerEvents = str5;
        obj19.accessibilityElementsHidden = !tmp58;
        let str6 = "no-hide-descendants";
        if (tmp58) {
          str6 = "auto";
        }
        obj19.importantForAccessibility = str6;
        const obj20 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp58 };
        obj19.children = setMode(tmp(tmp2[43]).PreviewFrame, obj20);
        tmp125Result = tmp125(tmp123, obj19);
      }
    }
    const items42 = [tmp125Result, , ];
    let tmp127Result = null;
    if (tmp55) {
      tmp127Result = null;
      if (null != previewAppId) {
        tmp127Result = null;
        if (!tmp58) {
          const obj21 = { style: tmp5.pane, children: null };
          const obj22 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp34, permissionsGate: null };
          const tmp4Result4 = tmp4(tmp2[43]);
          let tmp129 = null;
          if (tmpResult32.permissionReviewBlocksMode(activeMode, result)) {
            const obj23 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: tmp65 };
            tmp129 = obj23;
          }
          obj22.permissionsGate = tmp129;
          obj21.children = setMode(tmp4Result4, obj22);
          tmp127Result = tmp127(tmp123, obj21);
          tmpResult32 = tmp(tmp2[28]);
        }
      }
    }
    items42[1] = tmp127Result;
    const items43 = [tmp5.chatPane, , ];
    let paneHidden = tmp55;
    if (tmp55) {
      paneHidden = tmp5.paneHidden;
    }
    const obj24 = { style: null, children: null };
    items43[1] = paneHidden;
    items43[2] = animatedStyle1;
    obj24.style = items43;
    const obj25 = { value: memo4, children: null };
    const obj26 = { value: projectId, children: null };
    const obj27 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6, hidden: tmp55 };
    obj26.children = setMode(tmp4(tmp2[76]), obj27);
    obj25.children = setMode(tmp(tmp2[75]).ConjureFileMentionProjectContext.Provider, obj26);
    obj24.children = setMode(tmp(tmp2[34]).ConjurePublishActionContext.Provider, obj25);
    items42[2] = setMode(tmp4(tmp2[21]).View, obj24);
    obj18.children = items42;
    items41[1] = frameSurface(projectExists, obj18);
    obj15.children = items41;
    let tmp113Result1 = tmp119(tmp4(tmp2[21]).View, obj15);
  } else {
    const obj28 = { style: null, children: null };
    const items44 = [, ];
    ({ content: arr42[0], centered: arr42[1] } = tmp5);
    obj28.style = items44;
    if (stateFromStores1) {
      let tmp113Result = tmp113(closure_6, {});
    } else {
      const obj29 = { style: tmp5.listError, children: null };
      const obj30 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl3 = tmp(tmp2[36]).intl;
      obj30.children = intl3.string(tmp4(tmp2[37]).G1WwgK);
      const items45 = [tmp113(tmp(tmp2[72]).Text, obj30), , ];
      const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl4 = tmp(tmp2[36]).intl;
      obj31.children = intl4.string(tmp4(tmp2[37]).fINulo);
      items45[1] = tmp113(tmp(tmp2[72]).Text, obj31);
      const obj32 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl5 = tmp(tmp2[36]).intl;
      obj32.text = intl5.string(tmp4(tmp2[37])["WFJ/vb"]);
      obj32.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items45[2] = tmp113(tmp(tmp2[73]).Button, obj32);
      obj29.children = items45;
      tmp113Result = frameSurface(tmp114, obj29);
    }
    obj28.children = tmp113Result;
    tmp113Result1 = tmp113(tmp114, obj28);
  }
  return tmp113Result1;
};