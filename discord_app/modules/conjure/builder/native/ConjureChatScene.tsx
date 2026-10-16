// discord_app/modules/conjure/builder/native/ConjureChatScene.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import conjurePreviewSurface from "../../preview/conjurePreviewSurface.tsx";
import restartConjureAppFramesDefault from "../../preview/native/restartConjureAppFrames.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import conjureProjectActions from "../../projects/native/conjureProjectActions.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import ConjurePublishBlockedSheetDefault from "../../publish/native/ConjurePublishBlockedSheet.tsx";
import useConjurePublishAction from "../../publish/useConjurePublishAction.tsx";
import conjurePublishAction from "../../publish/conjurePublishAction.tsx";
import conjurePreviewTargets from "../../preview/conjurePreviewTargets.tsx";
import ConjureConnectToolSheet from "../../external_connections/native/ConjureConnectToolSheet.tsx";
import ConjureHistorySheet from "../../history/native/ConjureHistorySheet.tsx";
import BugIcon from "../../../../design/components/Icon/native/redesign/generated/BugIcon.tsx";
import ConjureProjectHeaderTitleDefault from "../../projects/native/ConjureProjectHeaderTitle.tsx";
import ExperimentalDirectSelectIcon2 from "../../../../design/components/Icon/native/redesign/generated/ExperimentalDirectSelectIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Keyboard: closure_7, View: closure_8 } = get_ActivityIndicator);
const closeConnection = fn(10901).closeConnection;
const conjureDesignFeedbackStore = fn(11609);
({
  enterConjureDesignFeedback: closure_11,
  exitConjureDesignFeedback: closure_12,
  useConjureDesignFeedback: map1,
} = conjureDesignFeedbackStore);
const isLaunched = fn(10934).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let obj = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  promptFirstPublish: fn(11613).showConjureFirstPublishSheet,
  showError(text) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_FAILED", { text, variant: "critical" });
  },
  showConfirmation(intl) {
    return ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SUCCEEDED", { text: intl, variant: "success" });
  },
};
const createStyles = fn(5153);
let closure_20 = createStyles.createStyles((paddingBottom) => {
  obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    contentBare: null,
    centered: null,
    listError: null,
    headerActions: null,
    segments: null,
    panes: null,
    pane: null,
    chatPane: null,
    paneHidden: null,
    paneBackstage: null,
  };
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
let closure_22 = {
  code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}",
};
let closure_23 = {
  code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}",
};
let closure_24 = {
  code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}",
};
const ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureSelectModeActiveIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
        const tmp7 = constants(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function ConjureSelectModeActiveIcon() {
      return constants(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, {
        color: nativeDefault.colors.TEXT_BRAND,
      });
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  let navigation;
  let stateFromStores;
  let projectExists;
  let projectName;
  previewAppId = undefined;
  let stateFromStores1;
  let stateFromStores2;
  let data;
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
  let result1;
  c25 = undefined;
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
  let stateFromStores4;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo7;
  navigation = require("useNavigation").useNavigation();
  const bottom = projectId(navigation[17])().bottom;
  const tmp5 = frameSurfaceOptions(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[18])();
  noop = tmp6;
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp9;
  obj = require("useNavigation");
  let obj4 = { onEnd: null };
  class I {
    constructor(arg0) {
      obj = closure_0(closure_2[20]);
      runOnJSResult = obj.runOnJS(closure_6);
      tmpResult = runOnJSResult(Math.max(0, guildId.height - bottom));
      return;
    }
  }
  let obj3 = require("KeyboardChatScrollView");
  I.__closure = {
    runOnJS: require("ReanimatedRexport").runOnJS,
    setChatKeyboardCover: tmp8[1],
    safeAreaBottom: bottom,
  };
  I.__workletHash = 7830565176778;
  I.__initData = appChannel;
  obj4.onEnd = I;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  let items1 = [isLoading];
  let items2 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      let project = ConjureProjectStore.getProject(projectId);
      if (project == null) {
        project = null;
      }
      return project;
    },
    items2,
  );
  let obj6 = require("initialize");
  const tmp11 = isLoading;
  const items3 = [isLoading];
  const items4 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items3,
    () => {
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
    },
    items4,
  );
  projectExists = stateFromStoresObject.projectExists;
  projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = require("initialize");
  const items5 = [isLoading];
  const items6 = [guildId];
  stateFromStores1 = require("initialize").useStateFromStores(
    items5,
    () => {
      const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(closure_0);
      let tmp2 = "unattempted" === guildProjectsFetchState;
      if (!tmp2) {
        tmp2 = "loading" === guildProjectsFetchState;
      }
      return tmp2;
    },
    items6,
  );
  let obj8 = require("initialize");
  const items7 = [isLoading];
  const items8 = [projectId];
  stateFromStores2 = require("initialize").useStateFromStores(
    items7,
    () => {
      let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
      if (integrationStatus == null) {
        integrationStatus = null;
      }
      return integrationStatus;
    },
    items8,
  );
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
  isLoading = application.isLoading;
  const tmpResult = require("ApplicationActionCreators");
  const items9 = [stateFromStores3];
  const items10 = [projectId];
  stateFromStores3 = require("initialize").useStateFromStores(
    items9,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
      let previewAppChannels;
      if (publishStatus != null) {
        previewAppChannels = publishStatus.previewAppChannels;
      }
      return previewAppChannels;
    },
    items10,
  );
  const tmpResult17 = require("initialize");
  const obj10 = {
    applicationId: previewAppId,
    previewApplicationId: previewAppId,
    declaredActivity: null,
    previewSupportedSurfaces: null,
    installScope: null,
    ownerAuthorizationRevoked: null,
    mainCardOnly: true,
    previewAppChannels: null,
  };
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
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(
    projectId,
    (arg0) => {
      const modes = availability.modes;
      if (modes.includes(arg0)) {
        setMode(arg0);
      }
    },
  );
  const tmpResult19 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () =>
    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }),
  );
  const tmpResult20 = require("conjureTraceRequests");
  const obj11 = {
    installScope: install_scope,
    previewReady: true === preview_ready,
    integrationInstalled: null,
    botPermissionsChanged: null,
  };
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
    project.catch(() => {});
  }, items11);
  const tmp32 = null != previewAppId && null != projectId(navigation[29])(previewAppId);
  const tmpResult21 = require("conjurePreviewModes");
  result1 = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, data, stateFromStores, projectId];
  const callback = obj2.useCallback(
    bottom(function* () {
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
                  application = application(tmp2[22]).fetchApplication(previewAppId);
                  c4 = 1;
                  c5 = 1;
                  const obj6 = {
                    value: application.catch(() => {}),
                    done: false,
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
            const result = c0(11615).repairConjureGuildHints(closure_1_7, closure_1_24);
            obj = c0(11615);
            result.finally(() => application(10922).getProject(closure_1_1)).catch(() => {});
          };
          let result = application3(tmp2[31]).openConjureAppInstallModal(obj7);
          const obj2 = application3(tmp2[31]);
        } catch (tmp27) {
          c5 = tmp;
          throw tmp27;
        }
      }
    }),
    items12,
  );
  let tmp34 = bottom;
  const tmpResult22 = require("ConjureInstallTarget");
  [tmp37, tmp38] = noop.useState(true);
  c25 = tmp38;
  const tmp7Result = _slicedToArray(noop.useState(true), 2);
  [tmp40, tmp41] = noop.useState(false);
  let tmp42 = null;
  if (null != stateFromStores2) {
    tmp42 = tmp24;
  }
  const tmp7Result4 = _slicedToArray(noop.useState(false), 2);
  [tmp44, tmp45] = noop.useState(tmp42);
  const tmp7Result6 = _slicedToArray(noop.useState(projectId), 2);
  if (tmp7Result6[0] !== projectId) {
    tmp7Result6[1](projectId);
    tmp38(true);
    tmp41(false);
    tmp45(null);
  }
  let tmp51 = tmp24;
  if (true === preview_ready) {
    tmp51 = null != previewAppId;
  }
  if (tmp51) {
    tmp51 = !isResolving;
  }
  if (tmp51) {
    tmp51 = availability.modes.length > 0 || result;
    const tmp52 = availability.modes.length > 0 || result;
  }
  let tmp53 = tmp51;
  if (tmp51) {
    tmp53 = !tmp37;
  }
  closure_26 = tmp53;
  const tmp7Result5 = _slicedToArray(noop.useState(tmp42), 2);
  let hasItem = tmp51;
  const conjureAgentNeedsPreview = require("conjureAgentNeedsPreview").useConjureAgentNeedsPreview(projectId);
  if (tmp51) {
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
  closure_27 = tmp56;
  if (hasItem) {
    let tmp57 = tmp40;
    if (!tmp40) {
      tmp57 = tmp56;
    }
    if (!tmp57) {
      tmp57 = conjureAgentNeedsPreview;
    }
    hasItem = tmp57;
  }
  let tmp58 = hasItem;
  if (hasItem) {
    tmp58 = !tmp40;
  }
  if (tmp58) {
    tmp41(true);
  }
  let tmp60 = tmp53;
  if (tmp53) {
    tmp60 = "bot" === activeMode;
  }
  closure_28 = tmp60;
  let prop4;
  if (stateFromStores2 != null) {
    prop4 = stateFromStores2.integration_installed;
  }
  let tmp62 = tmp60;
  if (tmp60) {
    tmp62 = result;
  }
  if (tmp62) {
    tmp62 = tmp63;
  }
  closure_29 = tmp62;
  noop.useRef(false);
  const items13 = [guildId, tmp62, projectId];
  const effect1 = obj2.useEffect(() => {
    if (closure_29) {
      if (!ref.current) {
        ref.current = true;
        const conjureInstallConsent = useConjurePublishAction.requestConjureInstallConsent(projectId, closure_0);
        conjureInstallConsent.catch(() => {});
      }
    } else {
      ref.current = false;
    }
  }, items13);
  const tmpResult23 = require("conjureAgentNeedsPreview");
  class Ke {
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
  Ke.__closure = { previewShowing: tmp53, botFaceShowing: tmp60, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ke.__workletHash = 9469604169548;
  Ke.__initData = setAppChannel;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Ke);
  const tmpResult24 = require("ReanimatedRexport");
  class Le {
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
  Le.__closure = { previewShowing: tmp53, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Le.__workletHash = 7166266100039;
  Le.__initData = result1;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Le);
  active = data(projectId).active;
  const tmpResult25 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  let intl = tmp(tmp2[35]).intl;
  const tmp4Result = projectId(navigation[36]);
  if (conjureControlActive) {
    let Sme0T0 = tmp4Result.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result.vn5Rzu : tmp4Result["cl/Jyl"];
  }
  const stringResult = intl.string(Sme0T0);
  c33 = stringResult;
  const items14 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      __initData(projectId);
    } else {
      closure_2_11(projectId);
    }
  }, items14);
  const items15 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  memo = obj2.useMemo(
    () => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3),
    items15,
  );
  const items16 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items16);
  let intl2 = tmp(tmp2[35]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[36])["N+VA1J"]);
  const items17 = [memo1, availability.modes.length, stringResult1, tmp53];
  const memo2 = obj2.useMemo(() => {
    obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    obj.label = intl.string(_modDef3865["1HH2p9"]);
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
  }, items17);
  let tmp75 = null != memo1;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp75) {
    tmp75 = memo.length > 1;
  }
  closure_38 = tmp75;
  const items18 = [memo1, tmp75, stringResult1, tmp53, setAppChannel, setFrameSurface, setMode, memo];
  const first = availability.modes[0];
  let tmp78 = null != stateFromStores2;
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
          fn = (color) => activeMode(closure_1_0(10781).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      preview.renderTrailingIcon = fn;
      const intl = util.intl;
      preview.menuLabel = intl.string(_modDef3865.I2ucou);
      let fn2;
      if (closure_38) {
        fn2 = () =>
          projectId(navigation[39])({
            targets,
            target,
            onChange(mode) {
              const previewTarget = closure_2_0(11633).selectPreviewTarget(
                mode,
                closure_1_18,
                closure_1_21,
                closure_1_23,
              );
              closure_1_25(false);
            },
          });
      }
      const obj2 = { preview: null };
      preview.onShowMenu = fn2;
      obj2.preview = preview;
      tmp = obj2;
    }
    return tmp;
  }, items18);
  if (tmp78) {
    tmp78 = tmp24 !== tmp44;
  }
  if (tmp78) {
    if (tmp79) {
      setMode(first);
      tmp38(false);
    }
    tmp45(tmp24);
    tmp79 = false === tmp44 && tmp24 && null != first;
  }
  const tmpResult26 = require("conjurePreviewControlLease");
  const tmpResult27 = require("SegmentedControlState");
  const segmentedControlState = tmpResult27.useSegmentedControlState({
    items: memo2,
    pageWidth: projectId(navigation[40])().width - 2 * setFrameSurface,
    onSetActiveIndex: callback2,
  });
  if (tmp37) {
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
  const effect3 = obj2.useEffect(
    () => (null != previewAppId ? () => closure_0(navigation[42]).leaveConjurePreviewFrame(previewAppId) : undefined),
    items20,
  );
  const items21 = [guildId, stateFromStores2, isLoading];
  const memo4 = obj2.useMemo(() => {
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items21);
  const tmp87 = projectId(navigation[33])(projectId, memo4);
  closure_42 = tmp87;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items22 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    const obj2 = {
      content: constants(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  const items23 = [guildId, navigation];
  memo5 = obj2.useMemo(
    () =>
      conjureStandaloneScenes.projectOpener(closure_0, (projectId) =>
        closure_1_2.push(closure_0(navigation[26]).ConjureScreenScenes.CHAT, { projectId }),
      ),
    items23,
  );
  const items24 = [guildId, memo5, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo5 };
      obj2.content = constants(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items24);
  const items25 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: constants(ConjureConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items25);
  closure_48 = obj2.useRef(false);
  _require = tmp34(function* (arg0) {
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
        const intl2 = closure_0(navigation[35]).intl;
        obj8.text = intl2.string(projectId(navigation[36]).qqlUiW);
        obj8.icon = closure_0(navigation[47]).UndoIcon;
        projectId(navigation[13]).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(navigation[13]);
        c6 = 4;
        c7 = 1;
        return {
          value: closure_0(navigation[48]).restoreSourceHistoryEntry(closure_1, closure_130_0.sha),
          done: false,
        };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(navigation[35]).intl;
      closure_0(navigation[49]).presentError(intl.string(projectId(navigation[36])["PSdo+w"]));
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
          const intl3 = closure_0(navigation[35]).intl;
          const obj16 = { title: null };
          obj16.title = closure_0(navigation[50]).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(navigation[36]).Z4n6LX, obj16);
          obj13.icon = closure_0(navigation[47]).UndoIcon;
          projectId(navigation[13]).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(navigation[50]);
          projectId(navigation[13]);
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
    return "test";
  });
  const items26 = [projectId];
  callback6 = obj2.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items26);
  const items27 = [callback6, ,];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items27[1] = install_scope1;
  items27[2] = projectId;
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
    obj2.content = constants(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items27);
  const obj12 = {
    items: memo2,
    pageWidth: projectId(navigation[40])().width - 2 * setFrameSurface,
    onSetActiveIndex: callback2,
  };
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const items28 = [navigation, projectId];
  callback8 = obj2.useCallback(
    () => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }),
    items28,
  );
  const items29 = [frameSurface];
  const memo6 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items29);
  const tmp98 = availability(projectId(navigation[55])(previewAppId, memo6));
  closure_53 = tmp98;
  const items30 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartConjureAppFramesDefault(tmp);
    }
  }, items30);
  const items31 = [navigation, projectId];
  callback10 = obj2.useCallback(() => {
    closeConnection(projectId);
    navigation.goBack();
  }, items31);
  const tmpResult28 = require("useConjureDebugAccess");
  const items32 = [tmp11];
  const items33 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(
    items32,
    () => ConjureProjectStore.isProjectDeleting(projectId),
    items33,
  );
  const items34 = [stateFromStores4, callback10];
  const effect4 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items34);
  let obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult29 = require("initialize");
  let tmp104 = null;
  if (modes2.includes("widget")) {
    tmp104 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp104 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp104;
  const tmp4Result1Result = projectId(navigation[57])(obj13);
  preview = tmp4Result1Result;
  const tmp4Result3 = projectId(navigation[57]);
  isConjureProjectMuted = require("conjureProjectMute").useIsConjureProjectMuted(projectId);
  const tmpResult30 = require("conjureProjectMute");
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const items35 = [
    conjureDebugPaneEnabled,
    guildId,
    isConjureProjectMuted,
    callback10,
    callback5,
    callback8,
    callback4,
    callback3,
    callback7,
    callback9,
    tmp98,
    tmp4Result1Result,
    stateFromStores,
    tmp87,
    conjureRemoveTarget,
  ];
  memo7 = obj2.useMemo(() => {
    const items = [];
    let arr7 = disabled;
    if (null == disabled) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3865.I2XSKe);
      obj2.IconComponent = SettingsIcon.SettingsIcon;
      obj2.action = callback3;
      items.push(obj2);
      if (conjureDebugPaneEnabled) {
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3865["Q4FN+H"]);
        obj3.IconComponent = BugIcon.BugIcon;
        obj3.action = callback8;
        items.push(obj3);
      }
      if (null != stateFromStores) {
        const obj4 = {
          project: tmp25,
          guildId,
          muted: isConjureProjectMuted,
          removeTarget: conjureRemoveTarget,
          onRemix: callback4,
          onConnectTool: callback5,
          onHistory: callback7,
          onRefresh: null,
          onClose: null,
          preview: null,
        };
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
        label = intl.formatToPlainString(_modDef3865["ndkR+x"], obj);
      }
      const obj13 = {
        label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
          if (!disabled.disabled) {
            disabled.run("header");
          }
        },
      };
      arr7 = items.push(obj13);
    }
  }, items35);
  const items36 = [
    conjureControlActive,
    active,
    stringResult,
    tmp56,
    callback3,
    callback1,
    navigation,
    memo7,
    stateFromStores,
    projectExists,
    projectName,
    stateFromStores1,
    tmp5,
  ];
  const effect5 = obj2.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      obj = {
        headerTitle() {
          if (null != stateFromStores) {
            if (projectExists) {
              const obj2 = { project: tmp, title, onPressIcon: callback3 };
              let tmp3 = constants(ConjureProjectHeaderTitleDefault, obj2);
            }
            return tmp3;
          }
          tmp3 = constants(NavigatorHeader.NavigatorHeader, { title });
          obj = { title };
        },
        headerRight() {
          let tmp = null;
          if (projectExists) {
            obj = { style: headerActions.headerActions, children: null };
            if (!closure_1_27) {
              items = [null];
              const obj2 = {
                items,
                align: "below",
                children(arg0) {
                  ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                  obj = {
                    ref,
                    IconComponent: title(9478).MoreHorizontalIcon,
                    onPress,
                    accessibilityLabel: null,
                    accessibilityActions: null,
                    onAccessibilityAction: null,
                  };
                  const intl = title(1128).intl;
                  obj.accessibilityLabel = intl.string(title(1128).t["UKOtz+"]);
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  return closure_1_17(closure_1_1(11607), obj);
                },
              };
              items[1] = activeMode(title(navigation[69]).ContextMenu, obj2);
              obj.children = items;
              tmp = tmp2(tmp3, obj);
            } else {
              if (active) {
                let ExperimentalDirectSelectIcon = c25;
              } else {
                ExperimentalDirectSelectIcon = title(navigation[68]).ExperimentalDirectSelectIcon;
              }
              const obj3 = {
                IconComponent: ExperimentalDirectSelectIcon,
                onPress,
                accessibilityLabel,
                accessibilityState: null,
                disabled: null,
              };
              const obj4 = { selected: active };
              obj3.accessibilityState = obj4;
              obj3.disabled = disabled;
              activeMode(projectId(navigation[67]), obj3);
              const tmp10 = projectId(navigation[67]);
            }
          }
          return tmp;
        },
      };
      navigation.setOptions(obj);
    } else {
      let tmp2 = navigation;
      if (!projectExists) {
        if (!stateFromStores1) {
          let uk6jhJ = projectId(tmp2[36]).G1WwgK;
        }
        tmp3(uk6jhJ);
      }
      tmp2 = projectId(tmp2[36]);
      uk6jhJ = tmp2.uk6jhJ;
    }
  }, items36);
  const items37 = [guildId, projectId];
  const effect6 = obj2.useEffect(() => {
    const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
    return () => closure_0(navigation[28]).setSelectedProjectForGuild(closure_1_0, null);
  }, items37);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items38 = [tmp5.contentBare, animatedStyle];
    obj14.style = items38;
    let tmp118 = null;
    if (tmp51) {
      const obj15 = { style: tmp5.segments, children: null };
      let obj16 = { state: segmentedControlState, extras: memo3 };
      obj15.children = activeMode(tmp4(tmp2[73]), obj16);
      tmp118 = activeMode(projectExists, obj15);
    }
    const items39 = [tmp118];
    const obj17 = { style: tmp5.panes, children: null };
    let tmp123Result = null;
    if (hasItem) {
      tmp123Result = null;
      if (null != previewAppId) {
        const obj18 = {
          style: tmp56 ? tmp5.pane : tmp5.paneBackstage,
          pointerEvents: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
        let str5 = "none";
        if (tmp56) {
          str5 = "auto";
        }
        obj18.pointerEvents = str5;
        obj18.accessibilityElementsHidden = !tmp56;
        let str6 = "no-hide-descendants";
        if (tmp56) {
          str6 = "auto";
        }
        obj18.importantForAccessibility = str6;
        const obj19 = {
          applicationId: previewAppId,
          projectId,
          frameSurface,
          launch: frameLaunchParams,
          visible: tmp56,
        };
        obj18.children = activeMode(tmp(tmp2[42]).PreviewFrame, obj19);
        tmp123Result = tmp123(tmp121, obj18);
      }
    }
    const items40 = [tmp123Result, ,];
    let tmp125Result = null;
    if (tmp53) {
      tmp125Result = null;
      if (null != previewAppId) {
        tmp125Result = null;
        if (!tmp56) {
          const obj20 = { style: tmp5.pane, children: null };
          const obj21 = {
            projectId,
            previewApplicationId: previewAppId,
            mode: activeMode,
            availability,
            frameSurface,
            frameLaunchParams,
            widgetApplicationId,
            frameHostAvailable: tmp32,
            permissionsGate: null,
          };
          const tmp4Result4 = tmp4(tmp2[42]);
          let tmp127 = null;
          if (tmpResult32.permissionReviewBlocksMode(activeMode, result)) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading, previewBotMissing: tmp63 };
            tmp127 = obj22;
          }
          obj21.permissionsGate = tmp127;
          obj20.children = activeMode(tmp4Result4, obj21);
          tmp125Result = tmp125(tmp121, obj20);
          tmpResult32 = tmp(tmp2[27]);
        }
      }
    }
    items40[1] = tmp125Result;
    const items41 = [tmp5.chatPane, ,];
    let paneHidden = tmp53;
    if (tmp53) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items41[1] = paneHidden;
    items41[2] = animatedStyle1;
    obj23.style = items41;
    const obj24 = { value: memo4, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6, hidden: tmp53 };
    obj24.children = activeMode(tmp4(tmp2[74]), obj25);
    obj23.children = activeMode(tmp(tmp2[33]).ConjurePublishActionContext.Provider, obj24);
    items40[2] = activeMode(tmp4(tmp2[20]).View, obj23);
    obj17.children = items40;
    items39[1] = setMode(projectExists, obj17);
    obj14.children = items39;
    let tmp111Result1 = tmp117(tmp4(tmp2[20]).View, obj14);
  } else {
    const obj26 = { style: null, children: null };
    const items42 = [,];
    ({ content: arr40[0], centered: arr40[1] } = tmp5);
    obj26.style = items42;
    if (stateFromStores1) {
      let tmp111Result = tmp111(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl3 = tmp(tmp2[35]).intl;
      obj28.children = intl3.string(tmp4(tmp2[36]).G1WwgK);
      const items43 = [tmp111(tmp(tmp2[71]).Text, obj28), ,];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl4 = tmp(tmp2[35]).intl;
      obj29.children = intl4.string(tmp4(tmp2[36]).fINulo);
      items43[1] = tmp111(tmp(tmp2[71]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl5 = tmp(tmp2[35]).intl;
      obj30.text = intl5.string(tmp4(tmp2[36])["WFJ/vb"]);
      obj30.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items43[2] = tmp111(tmp(tmp2[72]).Button, obj30);
      obj27.children = items43;
      tmp111Result = setMode(tmp112, obj27);
    }
    obj26.children = tmp111Result;
    tmp111Result1 = tmp111(tmp112, obj26);
  }
  return tmp111Result1;
}
