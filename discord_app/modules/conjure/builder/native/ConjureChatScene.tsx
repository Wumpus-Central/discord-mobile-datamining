// === Module 11747: ConjureChatScene ===

// Module 11747 (ConjureChatScene)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import NavigatorHeader from "NavigatorHeader" /* 6924 */;
import SettingsIcon from "SettingsIcon" /* 7488 */;
import UploadIcon from "UploadIcon" /* 9804 */;
import ConjureRemixSheet from "ConjureRemixSheet" /* 10696 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10728 */;
import restartFrames from "restartFrames" /* 10765 */;
import conjureStandaloneScenes from "conjureStandaloneScenes" /* 11762 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11765 */;
import conjurePublishAction from "conjurePublishAction" /* 11767 */;
import conjurePreviewTargets from "conjurePreviewTargets" /* 11771 */;
import ConjureSettingsSheet from "ConjureSettingsSheet" /* 12150 */;
import ConjureConnectToolSheet from "ConjureConnectToolSheet" /* 12206 */;
import ConjureHistorySheet from "ConjureHistorySheet" /* 12216 */;
import BugIcon from "BugIcon" /* 12254 */;
import conjureProjectActions from "conjureProjectActions" /* 12256 */;
import ConjureProjectHeaderTitleDefault from "ConjureProjectHeaderTitle" /* 12279 */;
import ExperimentalDirectSelectIcon2 from "ExperimentalDirectSelectIcon" /* 12281 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10721 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Keyboard: closure_7, View: closure_8 } = get_ActivityIndicator);
const closeConnection = fn(10698).closeConnection;
const conjureDesignFeedbackStore = fn(11748);
({ enterConjureDesignFeedback: closure_11, exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
const isLaunched = fn(6776).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(4971);
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
  __initData = undefined;
  __initData2 = undefined;
  closure_25 = undefined;
  closure_26 = undefined;
  let result2;
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
  closure_59 = undefined;
  navigation = require("useNavigation").useNavigation();
  const context = noop.useContext(projectId(navigation[15]));
  asyncGeneratorStep = tmp6;
  const bottom = projectId(navigation[16])().bottom;
  const tmp7 = appChannel(bottom);
  noop = tmp7;
  const tmp8 = projectId(navigation[17])();
  closure_6 = tmp8;
  let tmp10 = bottom(noop.useState(0), 2);
  closure_7 = tmp11;
  let obj = require("useNavigation");
  let obj4 = { onEnd: null };
  let fn = function _(height) {
    ReanimatedRexport.runOnJS(closure_7)(Math.max(0, height.height - bottom));
  };
  let obj3 = require("KeyboardChatScrollView");
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp10[1], safeAreaBottom: bottom };
  fn.__workletHash = 7830565176778;
  fn.__initData = result1;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp10[1], safeAreaBottom: bottom };
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
  const items3 = [activeMode];
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
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = require("initialize");
  const items5 = [activeMode];
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
    let tmp17 = tmp6;
    if (tmp6) {
      tmp17 = !projectExists;
    }
    if (tmp17) {
      tmp17 = !stateFromStoresObject.projectUnavailable;
    }
    stateFromStores1 = tmp17;
  }
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
  const tmpResult = require("initialize");
  const tmp21 = previewAppId;
  const tmpResult19 = require("ApplicationActionCreators");
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
  const tmpResult20 = require("initialize");
  const obj9 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, previewSupportedSurfaces: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true, previewAppChannels: null };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj9.declaredActivity = true === has_activity;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.preview_supported_surfaces;
  }
  obj9.previewSupportedSurfaces = prop;
  obj9.installScope = install_scope;
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.owner_authorization_revoked;
  }
  obj9.ownerAuthorizationRevoked = true === prop1;
  obj9.previewAppChannels = stateFromStores3;
  const conjurePreviewMode = require("useConjurePreviewMode").useConjurePreviewMode(obj9);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult21 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const tmpResult22 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }));
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  const tmpResult23 = require("conjureTraceRequests");
  const obj10 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop3;
  if (stateFromStores2 != null) {
    prop3 = stateFromStores2.integration_installed;
  }
  if (prop3 == null) {
    prop3 = null;
  }
  obj10.integrationInstalled = prop3;
  obj10.botPermissionsChanged = true === prop2;
  let result = require("conjurePreviewModes").requiresPermissionReview(obj10);
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
  const tmp36 = null != previewAppId && null != projectId(navigation[28])(previewAppId);
  const tmpResult24 = require("conjurePreviewModes");
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
        return { value: "IconComponent", done: null };
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
          const obj7 = { applicationId: closure_130_11, application: null, guildId: null, onClose: null };
          const application1 = application2.getApplication(closure_130_11);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          obj7.application = application;
          obj7.guildId = closure_130_22;
          obj7.onClose = function onClose() {
            const result = c0(11763).repairConjureGuildHints(closure_1_8, closure_1_22);
            const obj = c0(11763);
            result.finally(() => application(10720).getProject(closure_1_1)).catch(() => {

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
  const tmp38 = asyncGeneratorStep;
  const tmpResult25 = require("ConjureInstallTarget");
  [tmp41, tmp42] = bottom(noop.useState(true), 2);
  __initData = tmp42;
  const tmp9Result = bottom(noop.useState(true), 2);
  [tmp44, tmp45] = bottom(noop.useState(false), 2);
  let tmp46 = null;
  if (null != stateFromStores2) {
    tmp46 = tmp31;
  }
  const tmp9Result4 = bottom(noop.useState(false), 2);
  [tmp48, tmp49] = bottom(noop.useState(tmp46), 2);
  const tmp9Result6 = bottom(noop.useState(projectId), 2);
  if (tmp9Result6[0] !== projectId) {
    tmp9Result6[1](projectId);
    tmp42(true);
    tmp45(false);
    tmp49(null);
  }
  let tmp55 = tmp31;
  if (true === preview_ready) {
    tmp55 = null != previewAppId;
  }
  if (tmp55) {
    tmp55 = !isResolving;
  }
  if (tmp55) {
    tmp55 = availability.modes.length > 0 || result;
    const tmp56 = availability.modes.length > 0 || result;
  }
  let tmp57 = tmp55;
  if (tmp55) {
    tmp57 = !tmp41;
  }
  __initData2 = tmp57;
  const tmp9Result5 = bottom(noop.useState(tmp46), 2);
  let hasItem = tmp55;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp55) {
    hasItem = tmp36;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  const tmpResult26 = require("conjureAgentNeedsPreview");
  result2 = require("conjurePreviewModes").permissionReviewBlocksMode(activeMode, result, tmp33);
  let tmp61 = hasItem;
  if (hasItem) {
    tmp61 = tmp57;
  }
  if (tmp61) {
    tmp61 = "frame" === activeMode;
  }
  if (tmp61) {
    tmp61 = !result2;
  }
  closure_25 = tmp61;
  if (hasItem) {
    let tmp62 = tmp44;
    if (!tmp44) {
      tmp62 = tmp61;
    }
    if (!tmp62) {
      tmp62 = conjureAgentNeedsPreview;
    }
    hasItem = tmp62;
  }
  let tmp63 = hasItem;
  if (hasItem) {
    tmp63 = !tmp44;
  }
  if (tmp63) {
    tmp45(true);
  }
  let tmp65 = tmp57;
  if (tmp57) {
    tmp65 = "bot" === activeMode;
  }
  closure_26 = tmp65;
  if (stateFromStores2 != null) {
    const integration_installed = stateFromStores2.integration_installed;
  }
  let tmp66 = tmp57;
  if (tmp57) {
    tmp66 = result2;
  }
  result2 = tmp66;
  noop.useRef(false);
  const items13 = [guildId, tmp66, projectId];
  const effect1 = obj2.useEffect(() => {
    if (result2) {
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
  const tmpResult27 = require("conjurePreviewModes");
  class Ve {
    constructor() {
      paddingBottom = 0;
      if (closure_24) {
        tmp = closure_26;
        paddingBottom = 0;
        if (!closure_26) {
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = closure_6;
          tmp4 = bottom;
          paddingBottom = Math.max(closure_6.get(), bottom);
        }
      }
      return { paddingBottom };
    }
  }
  Ve.__closure = { previewShowing: tmp57, botFaceShowing: tmp65, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Ve.__workletHash = 9469604169548;
  Ve.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Ve);
  const tmpResult28 = require("ReanimatedRexport");
  function ze() {
    let num = 0;
    if (!closure_24) {
      const _Math = Math;
      num = -Math.max(0, closure_6.get() - bottom);
    }
    const obj = { transform: null };
    const items = [{ translateY: num }];
    obj.transform = items;
    return obj;
  }
  ze.__closure = { previewShowing: tmp57, keyboardHeight: tmp8, safeAreaBottom: bottom };
  ze.__workletHash = 7166266100039;
  ze.__initData = __initData2;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(ze);
  active = stateFromStores3(projectId).active;
  const tmpResult29 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  let intl = tmp(tmp2[34]).intl;
  const tmp4Result = projectId(navigation[35]);
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
  let intl2 = tmp(tmp2[34]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[35])["N+VA1J"]);
  const items17 = [memo1, availability.modes.length, stringResult1, tmp57];
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
  let tmp78 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp78) {
    tmp78 = memo.length > 1;
  }
  closure_36 = tmp78;
  const items18 = [memo1, tmp78, stringResult1, tmp57, setAppChannel, setFrameSurface, setMode, memo];
  const first = availability.modes[0];
  let tmp81 = null != stateFromStores2;
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
          fn = (color) => frameSurfaceOptions(closure_1_0(11080).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef3830.I2ucou);
      let fn2;
      if (closure_36) {
        fn2 = () => projectId(navigation[38])({
          targets,
          target,
          onChange(mode) {
            const previewTarget = closure_2_0(11771).selectPreviewTarget(mode, closure_1_16, closure_1_19, closure_1_21);
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
  if (tmp81) {
    tmp81 = tmp31 !== tmp48;
  }
  if (tmp81) {
    if (tmp82) {
      setMode(first);
      tmp42(false);
    }
    tmp49(tmp31);
    tmp82 = false === tmp48 && tmp31 && null != first;
  }
  const tmpResult30 = require("conjurePreviewControlLease");
  const tmpResult31 = require("SegmentedControlState");
  const segmentedControlState = tmpResult31.useSegmentedControlState({ items: memo2, pageWidth: projectId(navigation[39])().width - 2 * setAppChannel, onSetActiveIndex: callback2 });
  if (tmp41) {
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
  const effect3 = obj2.useEffect(() => null != previewAppId ? (() => closure_0(navigation[41]).leaveConjurePreviewFrame(previewAppId)) : undefined, items20);
  const tmp89 = projectId(navigation[42])(projectId, guildId);
  const tmp90 = projectId(navigation[32])(projectId, tmp89);
  closure_40 = tmp90;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items21 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    const obj2 = { content: collapsedCategories(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items21);
  const items22 = [guildId, navigation, null != context];
  memo4 = obj2.useMemo(() => {
    if (closure_3) {
      let fn = (projectId) => closure_1_2.push(closure_0(navigation[26]).ConjureScreenScenes.CHAT, { projectId });
    } else {
      fn = conjureStandaloneScenes.projectOpener(closure_0, (projectId) => closure_1_2.push(closure_0(navigation[26]).ConjureScreenScenes.CHAT, { projectId }));
    }
    return fn;
  }, items22);
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
  _require = tmp38(function*(arg0) {
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
        const intl2 = closure_0(navigation[34]).intl;
        obj8.text = intl2.string(projectId(navigation[35]).qqlUiW);
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
      const intl = closure_0(navigation[34]).intl;
      closure_0(navigation[50]).presentError(intl.string(projectId(navigation[35])["PSdo+w"]));
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
          const intl3 = closure_0(navigation[34]).intl;
          const obj16 = { title: null };
          obj16.title = closure_0(navigation[51]).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(navigation[35]).Z4n6LX, obj16);
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
  const obj11 = { items: memo2, pageWidth: projectId(navigation[39])().width - 2 * setAppChannel, onSetActiveIndex: callback2 };
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const items27 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }), items27);
  const items28 = [frameSurface];
  const memo5 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items28);
  const tmp101 = frameSurface(projectId(navigation[56])(previewAppId, memo5));
  closure_51 = tmp101;
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
  const tmpResult32 = require("useConjureDebugAccess");
  const items31 = [activeMode];
  const items32 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(items31, () => ConjureProjectStore.isProjectDeleting(projectId), items32);
  const items33 = [stateFromStores4, callback10];
  const effect4 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items33);
  const obj12 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult33 = require("initialize");
  let tmp107 = null;
  if (modes2.includes("widget")) {
    tmp107 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp107 = widgetApplicationId;
    }
  }
  obj12.refreshApplicationId = tmp107;
  const tmp4Result1Result = projectId(navigation[58])(obj12);
  preview = tmp4Result1Result;
  const tmp4Result3 = projectId(navigation[58]);
  isConjureProjectMuted = require("conjureProjectMute").useIsConjureProjectMuted(projectId);
  const tmpResult34 = require("conjureProjectMute");
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const items34 = [conjureDebugPaneEnabled, guildId, isConjureProjectMuted, callback10, callback5, callback8, callback4, callback3, callback7, callback9, tmp101, tmp4Result1Result, stateFromStores, projectId, tmp90, conjureRemoveTarget];
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
            return projectId(navigation[63])(closure_1_1, closure_1_0, "header");
          }
      };
      arr7 = items.push(obj13);
    }
  }, items34);
  const items35 = [conjureControlActive, active, stringResult, tmp61, callback3, callback1, navigation, memo6, stateFromStores, projectExists, projectName, stateFromStores1, tmp7];
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
                        const obj = { ref, IconComponent: title(9644).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                        const intl = title(1128).intl;
                        obj.accessibilityLabel = intl.string(title(1128).t["UKOtz+"]);
                        obj.accessibilityActions = accessibilityActions;
                        obj.onAccessibilityAction = onAccessibilityAction;
                        return closure_1_18(closure_1_1(12280), obj);
                      }
                };
                items[1] = frameSurfaceOptions(title(navigation[71]).ContextMenu, obj2);
                obj.children = items;
                tmp = tmp2(tmp3, obj);
              } else {
                if (active) {
                  let ExperimentalDirectSelectIcon = closure_25;
                } else {
                  ExperimentalDirectSelectIcon = title(navigation[70]).ExperimentalDirectSelectIcon;
                }
                const obj3 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: null, disabled: null };
                const obj4 = { selected: active };
                obj3.accessibilityState = obj4;
                obj3.disabled = disabled;
                frameSurfaceOptions(projectId(navigation[69]), obj3);
                const tmp10 = projectId(navigation[69]);
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
          let uk6jhJ = projectId(tmp2[35]).G1WwgK;
        }
        tmp3(uk6jhJ);
      }
      tmp2 = projectId(tmp2[35]);
      uk6jhJ = tmp2.uk6jhJ;
    }
  }, items35);
  const tmpResult35 = require("conjureRemoveApp");
  let routeFocused;
  const isFocused = require("Link").useIsFocused();
  if (context != null) {
    routeFocused = context.routeFocused;
  }
  closure_59 = tmp115;
  const items36 = [true === routeFocused && isFocused, projectId];
  const effect6 = obj2.useEffect(() => {
    if (closure_59) {
      const globalChatProject = ConjureActionCreators.selectGlobalChatProject(projectId);
      return () => closure_0(navigation[21]).clearGlobalChatProject(projectId);
    }
  }, items36);
  const items37 = [guildId, projectId, null != context];
  const effect7 = obj2.useEffect(() => {
    if (!closure_3) {
      const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
      return () => closure_0(navigation[21]).setSelectedProjectForGuild(closure_1_0, null);
    }
  }, items37);
  if (projectExists) {
    let obj13 = { style: null, children: null };
    const items38 = [tmp7.contentBare, animatedStyle];
    obj13.style = items38;
    let tmp125 = null;
    if (tmp55) {
      const obj14 = { style: tmp7.segments, children: null };
      const obj15 = { state: segmentedControlState, extras: memo3 };
      obj14.children = frameSurfaceOptions(tmp4(tmp2[76]), obj15);
      tmp125 = frameSurfaceOptions(stateFromStores, obj14);
    }
    const items39 = [tmp125, ];
    let obj16 = { style: tmp7.panes, children: null };
    let tmp130Result = null;
    if (hasItem) {
      tmp130Result = null;
      if (null != previewAppId) {
        const obj17 = { style: tmp61 ? tmp7.pane : tmp7.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str5 = "none";
        if (tmp61) {
          str5 = "auto";
        }
        obj17.pointerEvents = str5;
        obj17.accessibilityElementsHidden = !tmp61;
        let str6 = "no-hide-descendants";
        if (tmp61) {
          str6 = "auto";
        }
        obj17.importantForAccessibility = str6;
        const obj18 = { applicationId: previewAppId, projectId, frameSurface, launch: frameLaunchParams, visible: tmp61 };
        obj17.children = frameSurfaceOptions(tmp(tmp2[41]).PreviewFrame, obj18);
        tmp130Result = tmp130(tmp128, obj17);
      }
    }
    const items40 = [tmp130Result, , ];
    let tmp132Result = null;
    if (tmp57) {
      tmp132Result = null;
      if (null != previewAppId) {
        tmp132Result = null;
        if (!tmp61) {
          const obj19 = { style: tmp7.pane, children: null };
          const obj20 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable: tmp36, permissionsGate: null };
          let tmp134 = null;
          if (result2) {
            const obj21 = { onReviewPermissions: callback, loading: tmpResult19.useApplication(tmp21).isLoading, previewBotMissing: false === integration_installed };
            tmp134 = obj21;
          }
          obj20.permissionsGate = tmp134;
          obj19.children = frameSurfaceOptions(tmp4(tmp2[41]), obj20);
          tmp132Result = tmp132(tmp128, obj19);
          const tmp4Result4 = tmp4(tmp2[41]);
        }
      }
    }
    items40[1] = tmp132Result;
    const items41 = [tmp7.chatPane, , ];
    let paneHidden = tmp57;
    if (tmp57) {
      paneHidden = tmp7.paneHidden;
    }
    const obj22 = { style: null, children: null };
    items41[1] = paneHidden;
    items41[2] = animatedStyle1;
    obj22.style = items41;
    const obj23 = { value: tmp89, children: null };
    const obj24 = { value: projectId, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp10[0], onRestoreVersion: callback6, hidden: tmp57 };
    obj24.children = frameSurfaceOptions(tmp4(tmp2[78]), obj25);
    obj23.children = frameSurfaceOptions(tmp(tmp2[77]).ConjureFileMentionProjectContext.Provider, obj24);
    obj22.children = frameSurfaceOptions(tmp(tmp2[32]).ConjurePublishActionContext.Provider, obj23);
    items40[2] = frameSurfaceOptions(tmp4(tmp2[19]).View, obj22);
    obj16.children = items40;
    items39[1] = setFrameSurface(stateFromStores, obj16);
    obj13.children = items39;
    let tmp118Result1 = tmp124(tmp4(tmp2[19]).View, obj13);
  } else {
    const obj26 = { style: null, children: null };
    const items42 = [, ];
    ({ content: arr40[0], centered: arr40[1] } = tmp7);
    obj26.style = items42;
    if (stateFromStores1) {
      let tmp118Result = tmp118(closure_6, {});
    } else {
      const obj27 = { style: tmp7.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl3 = tmp(tmp2[34]).intl;
      obj28.children = intl3.string(tmp4(tmp2[35]).G1WwgK);
      const items43 = [tmp118(tmp(tmp2[74]).Text, obj28), , ];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl4 = tmp(tmp2[34]).intl;
      obj29.children = intl4.string(tmp4(tmp2[35]).fINulo);
      items43[1] = tmp118(tmp(tmp2[74]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl5 = tmp(tmp2[34]).intl;
      obj30.text = intl5.string(tmp4(tmp2[35])["WFJ/vb"]);
      obj30.onPress = function onPress() {
        const obj = ConjureActionCreators;
        if (closure_3) {
          let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(projectId);
        } else {
          missingConjureProjectNow = obj.listProjects(closure_0);
        }
        return missingConjureProjectNow;
      };
      items43[2] = tmp118(tmp(tmp2[75]).Button, obj30);
      obj27.children = items43;
      tmp118Result = setFrameSurface(tmp119, obj27);
    }
    obj26.children = tmp118Result;
    tmp118Result1 = tmp118(tmp119, obj26);
  }
  return tmp118Result1;
};