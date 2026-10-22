// === Module 11800: ConjureChatScene ===

// Module 11800 (ConjureChatScene)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5196 */;
import NavigatorHeader from "NavigatorHeader" /* 6910 */;
import SettingsIcon from "SettingsIcon" /* 7472 */;
import UploadIcon from "UploadIcon" /* 9774 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10666 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10690 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10698 */;
import restartFrames from "restartFrames" /* 10734 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11691 */;
import conjureProjectActions from "conjureProjectActions" /* 11728 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 11743 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11816 */;
import conjurePublishAction from "conjurePublishAction" /* 11818 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11820 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12198 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12208 */;
import BugIcon from "BugIcon" /* 12239 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12241 */;
import ExperimentalDirectSelectIcon2 from "ExperimentalDirectSelectIcon" /* 12242 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10691 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6759 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10684 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Keyboard: closure_7, View: closure_8 } = get_ActivityIndicator);
const closeConnection = fn(10668).closeConnection;
const conjureDesignFeedbackStore = fn(11801);
({ enterConjureDesignFeedback: closure_11, exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
const isLaunched = fn(6762).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(4969);
let closure_20 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listError: null, headerActions: null, segments: null, panes: null, pane: null, chatPane: null, paneHidden: null, paneBackstage: null };
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
let closure_22 = { code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let __initData = { code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData2 = { code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
const ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSelectModeActiveIcon() {
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
  __initData = undefined;
  __initData2 = undefined;
  closure_25 = undefined;
  closure_26 = undefined;
  closure_27 = undefined;
  let active;
  let conjureControlActive;
  c31 = undefined;
  let callback1;
  let memo;
  let memo1;
  let stringResult1;
  closure_36 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_40 = undefined;
  projectGuildId = undefined;
  let callback3;
  let memo4;
  let callback4;
  let callback5;
  closure_46 = undefined;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let callback8;
  closure_51 = undefined;
  let callback9;
  let callback10;
  let stateFromStores4;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo6;
  navigation = require("useNavigation").useNavigation();
  const bottom = projectId(navigation[15])().bottom;
  const tmp5 = appChannel(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[16])();
  noop = tmp6;
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp9;
  let obj = require("useNavigation");
  let obj4 = { onEnd: null };
  let fn = function j(height) {
    ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
  };
  let obj3 = require("KeyboardChatScrollView");
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  fn.__workletHash = 7830565176778;
  fn.__initData = result1;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  let items1 = [activeMode];
  let items2 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj6 = require("initialize");
  const tmp11 = activeMode;
  const items3 = [activeMode];
  const items4 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items3, () => {
    const project = ConjureProjectStore.getProject(projectId);
    const obj = { projectExists: null != project, projectName: null, projectGuildId: null, previewAppId: null };
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
  const items5 = [activeMode];
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
  const items7 = [activeMode, availability];
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
  const obj9 = require("initialize");
  let application = require("ApplicationActionCreators").useApplication(previewAppId);
  data = application.data;
  const tmpResult = require("ApplicationActionCreators");
  const items9 = [setMode];
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
  const tmpResult17 = require("initialize");
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
  const obj11 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj11.integrationInstalled = prop2;
  let prop3;
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.bot_permissions_changed;
  }
  obj11.botPermissionsChanged = true === prop3;
  let result = require("conjurePreviewModes").requiresPermissionReview(obj11);
  const items11 = [projectId];
  const effect = obj2.useEffect(() => {
    const project = ConjureActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items11);
  const tmp33 = null != previewAppId && null != projectId(navigation[27])(previewAppId);
  const tmpResult21 = require("conjurePreviewModes");
  result1 = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, data, stateFromStores, projectId];
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
                application = application(tmp2[20]).fetchApplication(previewAppId);
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
          let obj = { value, done: true };
          return obj;
        }
        const obj7 = { applicationId: closure_131_10, application: null, guildId: null, onClose: null };
        let application3 = closure_131_12;
        if (closure_131_12 == null) {
          application3 = application2.getApplication(closure_131_10);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        obj7.application = application;
        obj7.guildId = closure_131_22;
        obj7.onClose = function onClose() {
          const result = c0(11814).repairConjureGuildHints(closure_1_7, closure_1_22);
          const obj = c0(11814);
          result.finally(() => application(10690).getProject(closure_1_1)).catch(() => {

          });
        };
        let result = application3(tmp2[29]).openConjureAppInstallModal(obj7);
        const obj2 = application3(tmp2[29]);
      } catch (tmp27) {
        c5 = tmp;
        throw tmp27;
      }
    }
  }), items12);
  let tmp35 = bottom;
  const tmpResult22 = require("ConjureInstallTarget");
  [tmp38, tmp39] = noop.useState(true);
  __initData = tmp39;
  const tmp7Result = _slicedToArray(noop.useState(true), 2);
  [tmp41, tmp42] = noop.useState(false);
  let tmp43 = null;
  if (null != stateFromStores2) {
    tmp43 = tmp25;
  }
  const tmp7Result4 = _slicedToArray(noop.useState(false), 2);
  [tmp45, tmp46] = noop.useState(tmp43);
  const tmp7Result6 = _slicedToArray(noop.useState(projectId), 2);
  if (tmp7Result6[0] !== projectId) {
    tmp7Result6[1](projectId);
    tmp39(true);
    tmp42(false);
    tmp46(null);
  }
  let tmp52 = tmp25;
  if (true === preview_ready) {
    tmp52 = null != previewAppId;
  }
  if (tmp52) {
    tmp52 = !isResolving;
  }
  if (tmp52) {
    tmp52 = availability.modes.length > 0 || result;
    const tmp53 = availability.modes.length > 0 || result;
  }
  let tmp54 = tmp52;
  if (tmp52) {
    tmp54 = !tmp38;
  }
  __initData2 = tmp54;
  const tmp7Result5 = _slicedToArray(noop.useState(tmp43), 2);
  let hasItem = tmp52;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp52) {
    hasItem = tmp33;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp57 = hasItem;
  if (hasItem) {
    tmp57 = tmp54;
  }
  if (tmp57) {
    tmp57 = "frame" === activeMode;
  }
  closure_25 = tmp57;
  if (hasItem) {
    let tmp58 = tmp41;
    if (!tmp41) {
      tmp58 = tmp57;
    }
    if (!tmp58) {
      tmp58 = conjureAgentNeedsPreview;
    }
    hasItem = tmp58;
  }
  let tmp59 = hasItem;
  if (hasItem) {
    tmp59 = !tmp41;
  }
  if (tmp59) {
    tmp42(true);
  }
  let tmp61 = tmp54;
  if (tmp54) {
    tmp61 = "bot" === activeMode;
  }
  closure_26 = tmp61;
  let prop4;
  if (stateFromStores2 != null) {
    prop4 = stateFromStores2.integration_installed;
  }
  let tmp63 = tmp61;
  if (tmp61) {
    tmp63 = result;
  }
  if (tmp63) {
    tmp63 = tmp64;
  }
  closure_27 = tmp63;
  noop.useRef(false);
  const items13 = [guildId, tmp63, projectId];
  const effect1 = obj2.useEffect(() => {
    if (closure_27) {
      if (!ref.current) {
        ref.current = true;
        const conjureInstallConsent = useConjurePublishAction.requestConjureInstallConsent(projectId, closure_0);
        conjureInstallConsent.catch(() => {

        });
      }
    } else {
      ref.current = false;
    }
  }, items13);
  const tmpResult23 = require("conjureAgentNeedsPreview");
  class Ue {
    constructor() {
      paddingBottom = 0;
      if (closure_24) {
        tmp = closure_26;
        paddingBottom = 0;
        if (!closure_26) {
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
  Ue.__closure = { previewShowing: tmp54, botFaceShowing: tmp61, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ue.__workletHash = 9469604169548;
  Ue.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Ue);
  const tmpResult24 = require("ReanimatedRexport");
  class Le {
    constructor() {
      num = 0;
      if (!closure_24) {
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
  Le.__closure = { previewShowing: tmp54, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Le.__workletHash = 7166266100039;
  Le.__initData = __initData2;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Le);
  active = stateFromStores3(projectId).active;
  const tmpResult25 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  let intl = tmp(tmp2[33]).intl;
  const tmp4Result = projectId(navigation[34]);
  if (conjureControlActive) {
    let Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = intl.string(Sme0T0);
  c31 = stringResult;
  const items14 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      __initData(projectId);
    } else {
      closure_2_11(projectId);
    }
  }, items14);
  const items15 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  memo = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3), items15);
  const items16 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items16);
  let intl2 = tmp(tmp2[33]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[34])["N+VA1J"]);
  const items17 = [memo1, availability.modes.length, stringResult1, tmp54];
  const memo2 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    obj.label = intl.string(_modDef3830["1HH2p9"]);
    const items = [obj];
    if (availability.modes.length > 0) {
      let tmp = closure_24;
      if (!closure_24) {
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
  }, items17);
  let tmp76 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp76) {
    tmp76 = memo.length > 1;
  }
  closure_36 = tmp76;
  const items18 = [memo1, tmp76, stringResult1, tmp54, setAppChannel, setFrameSurface, setMode, memo];
  const first = availability.modes[0];
  let tmp79 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_24) {
        tmp3 = stringResult1;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_24) {
        if (closure_36) {
          fn = (color) => frameSurfaceOptions(closure_1_0(11043).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef3830.I2ucou);
      let fn2;
      if (closure_36) {
        fn2 = () => projectId(navigation[37])({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(11820).selectPreviewTarget(mode, closure_1_16, closure_1_19, closure_1_21);
            closure_1_23(false);
          }
        });
      }
      const obj2 = { preview: null };
      obj.onShowMenu = fn2;
      obj2.preview = obj;
      tmp = obj2;
    }
    return tmp;
  }, items18);
  if (tmp79) {
    tmp79 = tmp25 !== tmp45;
  }
  if (tmp79) {
    if (tmp80) {
      setMode(first);
      tmp39(false);
    }
    tmp46(tmp25);
    tmp80 = false === tmp45 && tmp25 && null != first;
  }
  const tmpResult26 = require("conjurePreviewControlLease");
  const tmpResult27 = require("SegmentedControlState");
  const segmentedControlState = tmpResult27.useSegmentedControlState({ items: memo2, pageWidth: projectId(navigation[38])().width - 2 * setAppChannel, onSetActiveIndex: callback2 });
  if (tmp38) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items19 = [num2, activeIndex, setActiveIndex];
  const effect2 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items19);
  const items20 = [previewAppId];
  const effect3 = obj2.useEffect(() => null != previewAppId ? (() => closure_0(navigation[40]).leaveConjurePreviewFrame(previewAppId)) : undefined, items20);
  const tmp87 = projectId(navigation[41])(projectId, guildId);
  const tmp88 = projectId(navigation[31])(projectId, tmp87);
  closure_40 = tmp88;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items21 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    const obj2 = { content: collapsedCategories(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items21);
  const items22 = [guildId, navigation];
  memo4 = obj2.useMemo(() => conjureStandaloneScenes.projectOpener(closure_0, (projectId) => closure_1_2.push(closure_0(navigation[24]).ConjureScreenScenes.CHAT, { projectId })), items22);
  const items23 = [guildId, memo4, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo4 };
      obj2.content = collapsedCategories(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items23);
  const items24 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = { key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY, content: collapsedCategories(ConjureConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items24);
  closure_46 = obj2.useRef(false);
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
    return "Reflect";
  });
  const items25 = [projectId];
  callback6 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items25);
  const items26 = [callback6, , ];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items26[1] = install_scope1;
  items26[2] = projectId;
  callback7 = obj2.useCallback(() => {
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
    obj3.onRestoreVersion = callback6;
    obj2.content = collapsedCategories(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items26);
  const obj12 = { items: memo2, pageWidth: projectId(navigation[38])().width - 2 * setAppChannel, onSetActiveIndex: callback2 };
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const items27 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items27);
  const items28 = [frameSurface];
  const memo5 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items28);
  const tmp99 = frameSurface(projectId(navigation[55])(previewAppId, memo5));
  closure_51 = tmp99;
  const items29 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items29);
  const items30 = [navigation, projectId];
  callback10 = obj2.useCallback(() => {
    closeConnection(projectId);
    navigation.goBack();
  }, items30);
  const tmpResult28 = require("useConjureDebugAccess");
  const items31 = [tmp11];
  const items32 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items31, () => ConjureProjectStore.isProjectDeleting(projectId), items32);
  const items33 = [stateFromStores4, callback10];
  const effect4 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items33);
  let obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult29 = require("initialize");
  let tmp105 = null;
  if (modes2.includes("widget")) {
    tmp105 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp105 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp105;
  const tmp4Result1Result = projectId(navigation[57])(obj13);
  preview = tmp4Result1Result;
  const tmp4Result3 = projectId(navigation[57]);
  isConjureProjectMuted = require("conjureProjectMute").useIsConjureProjectMuted(projectId);
  const tmpResult30 = require("conjureProjectMute");
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const items34 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback10, callback5, callback8, callback4, callback3, callback7, callback9, tmp99, tmp4Result1Result, stateFromStores, projectId, tmp88, conjureRemoveTarget];
  memo6 = obj2.useMemo(() => {
    const items = [];
    let arr7 = closure_40;
    if (null == closure_40) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3830.I2XSKe);
      obj2.IconComponent = SettingsIcon.SettingsIcon;
      obj2.action = callback3;
      items.push(obj2);
      if (conjureDebugPaneEnabled) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3830["Q4FN+H"]);
        obj3.IconComponent = BugIcon.BugIcon;
        obj3.action = callback8;
        items.push(obj3);
      }
      if (null != stateFromStores) {
        const obj4 = { project: tmp25, guildId, muted: isConjureProjectMuted, removeTarget: conjureRemoveTarget, onRemix: callback4, onConnectTool: callback5, onHistory: callback7, onRefresh: null, onClose: null, preview: null };
        let tmp26;
        if (closure_51) {
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
        const obj = { action: arr7.label, detail: result1 };
        label = intl.formatToPlainString(_modDef3830["ndkR+x"], obj);
      }
      const obj13 = {
        label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            return projectId(navigation[62])(closure_1_1, closure_1_0, "header");
          }
      };
      arr7 = items.push(obj13);
    }
  }, items34);
  const items35 = [conjureControlActive, active, stringResult, tmp57, callback3, callback1, navigation, memo6, stateFromStores, projectExists, projectName, stateFromStores1, tmp5];
  const effect5 = obj2.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
            if (null != stateFromStores) {
              if (projectExists) {
                const obj2 = { project: tmp, title, onPressIcon: callback3 };
                let tmp3 = collapsedCategories(ConjureProjectHeaderTitleDefault, obj2);
              }
              return tmp3;
            }
            tmp3 = collapsedCategories(NavigatorHeader.NavigatorHeader, { title });
            const obj = { title };
          },
        headerRight() {
            let tmp = null;
            if (projectExists) {
              let obj = { style: headerActions.headerActions, children: null };
              if (!closure_1_25) {
                items = [null, ];
                const obj2 = {
                  items,
                  align: "below",
                  children(arg0) {
                        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                        const obj = { ref, IconComponent: title(9613).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                        const intl = title(1128).intl;
                        obj.accessibilityLabel = intl.string(title(1128).t["UKOtz+"]);
                        obj.accessibilityActions = accessibilityActions;
                        obj.onAccessibilityAction = onAccessibilityAction;
                        return closure_1_18(closure_1_1(11799), obj);
                      }
                };
                items[1] = frameSurfaceOptions(title(navigation[70]).ContextMenu, obj2);
                obj.children = items;
                tmp = tmp2(tmp3, obj);
              } else {
                if (active) {
                  let ExperimentalDirectSelectIcon = closure_25;
                } else {
                  ExperimentalDirectSelectIcon = title(navigation[69]).ExperimentalDirectSelectIcon;
                }
                const obj3 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: null, disabled: null };
                const obj4 = { selected: active };
                obj3.accessibilityState = obj4;
                obj3.disabled = disabled;
                frameSurfaceOptions(projectId(navigation[68]), obj3);
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
          let uk6jhJ = projectId(tmp2[34]).G1WwgK;
        }
        tmp3(uk6jhJ);
      }
      tmp2 = projectId(tmp2[34]);
      uk6jhJ = tmp2.uk6jhJ;
    }
  }, items35);
  const items36 = [guildId, projectId];
  const effect6 = obj2.useEffect(() => {
    const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
    return () => closure_0(navigation[26]).setSelectedProjectForGuild(closure_1_0, null);
  }, items36);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items37 = [tmp5.contentBare, animatedStyle];
    obj14.style = items37;
    let tmp119 = null;
    if (tmp52) {
      const obj15 = { style: tmp5.segments, children: null };
      let obj16 = { state: segmentedControlState, extras: memo3 };
      obj15.children = frameSurfaceOptions(tmp4(tmp2[74]), obj16);
      tmp119 = frameSurfaceOptions(projectExists, obj15);
    }
    const items38 = [tmp119, ];
    const obj17 = { style: tmp5.panes, children: null };
    let tmp124Result = null;
    if (hasItem) {
      tmp124Result = null;
      if (null != previewAppId) {
        const obj18 = { style: tmp57 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str5 = "none";
        if (tmp57) {
          str5 = "auto";
        }
        obj18.pointerEvents = str5;
        obj18.accessibilityElementsHidden = !tmp57;
        let str6 = "no-hide-descendants";
        if (tmp57) {
          str6 = "auto";
        }
        obj18.importantForAccessibility = str6;
        const obj19 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp57 };
        obj18.children = frameSurfaceOptions(tmp(tmp2[40]).PreviewFrame, obj19);
        tmp124Result = tmp124(tmp122, obj18);
      }
    }
    const items39 = [tmp124Result, , ];
    let tmp126Result = null;
    if (tmp54) {
      tmp126Result = null;
      if (null != previewAppId) {
        tmp126Result = null;
        if (!tmp57) {
          const obj20 = { style: tmp5.pane, children: null };
          const obj21 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp33, permissionsGate: null };
          const tmp4Result4 = tmp4(tmp2[40]);
          let tmp128 = null;
          if (tmpResult32.permissionReviewBlocksMode(activeMode, result)) {
            const obj22 = { onReviewPermissions: callback, loading: application.isLoading, previewBotMissing: tmp64 };
            tmp128 = obj22;
          }
          obj21.permissionsGate = tmp128;
          obj20.children = frameSurfaceOptions(tmp4Result4, obj21);
          tmp126Result = tmp126(tmp122, obj20);
          tmpResult32 = tmp(tmp2[25]);
        }
      }
    }
    items39[1] = tmp126Result;
    const items40 = [tmp5.chatPane, , ];
    let paneHidden = tmp54;
    if (tmp54) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items40[1] = paneHidden;
    items40[2] = animatedStyle1;
    obj23.style = items40;
    const obj24 = { value: tmp87, children: null };
    const obj25 = { value: projectId, children: null };
    const obj26 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6, hidden: tmp54 };
    obj25.children = frameSurfaceOptions(tmp4(tmp2[76]), obj26);
    obj24.children = frameSurfaceOptions(tmp(tmp2[75]).ConjureFileMentionProjectContext.Provider, obj25);
    obj23.children = frameSurfaceOptions(tmp(tmp2[31]).ConjurePublishActionContext.Provider, obj24);
    items39[2] = frameSurfaceOptions(tmp4(tmp2[18]).View, obj23);
    obj17.children = items39;
    items38[1] = setFrameSurface(projectExists, obj17);
    obj14.children = items38;
    let tmp112Result1 = tmp118(tmp4(tmp2[18]).View, obj14);
  } else {
    const obj27 = { style: null, children: null };
    const items41 = [, ];
    ({ content: arr39[0], centered: arr39[1] } = tmp5);
    obj27.style = items41;
    if (stateFromStores1) {
      let tmp112Result = tmp112(closure_6, {});
    } else {
      const obj28 = { style: tmp5.listError, children: null };
      const obj29 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl3 = tmp(tmp2[33]).intl;
      obj29.children = intl3.string(tmp4(tmp2[34]).G1WwgK);
      const items42 = [tmp112(tmp(tmp2[72]).Text, obj29), , ];
      const obj30 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl4 = tmp(tmp2[33]).intl;
      obj30.children = intl4.string(tmp4(tmp2[34]).fINulo);
      items42[1] = tmp112(tmp(tmp2[72]).Text, obj30);
      const obj31 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl5 = tmp(tmp2[33]).intl;
      obj31.text = intl5.string(tmp4(tmp2[34])["WFJ/vb"]);
      obj31.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items42[2] = tmp112(tmp(tmp2[73]).Button, obj31);
      obj28.children = items42;
      tmp112Result = setFrameSurface(tmp113, obj28);
    }
    obj27.children = tmp112Result;
    tmp112Result1 = tmp112(tmp113, obj27);
  }
  return tmp112Result1;
};