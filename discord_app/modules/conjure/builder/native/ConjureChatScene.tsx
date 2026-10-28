// discord_app/modules/conjure/builder/native/ConjureChatScene.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3863 from "../../intl/ConjureUntranslated.messages.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useNavigatorBackPressHandler from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import conjurePreviewSurface from "../../preview/conjurePreviewSurface.tsx";
import restartFrames from "../../../frames/native/restartFrames.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import useConjurePublishAction from "../../publish/useConjurePublishAction.tsx";
import conjurePreviewTargets from "../../preview/conjurePreviewTargets.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import ConjureConnectToolSheet from "../../external_connections/native/ConjureConnectToolSheet.tsx";
import ConjureHistorySheet from "../../history/native/ConjureHistorySheet.tsx";
import ConjureChatMoreSheet from "ConjureChatMoreSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import ConjureLastIntegrationStatusStore from "../../projects/ConjureLastIntegrationStatusStore.tsx";
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
const closeConnection = fn(10733).closeConnection;
const isLaunched = fn(6811).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5004);
let closure_18 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    contentBare: null,
    centered: null,
    listError: null,
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
  obj.segments = {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_4,
    paddingBottom: nativeDefault.space.PX_8,
    borderBottomWidth: 1,
    borderBottomColor: nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER,
  };
  obj.panes = { flex: 1, overflow: "hidden" };
  obj.pane = { flex: 1 };
  obj.chatPane = { flex: 1, paddingBottom };
  obj.paneHidden = { display: "none" };
  obj.paneBackstage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
let __initData = {
  code: "function ConjureChatSceneTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}",
};
let __initData2 = {
  code: "function ConjureChatSceneTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}",
};
let __initData3 = {
  code: "function ConjureChatSceneTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}",
};
const ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ExitOnBackPress(onExit) {
      const cResult = c.c(2);
      onExit = onExit.onExit;
      if (cResult[0] !== onExit) {
        const fn = function t() {
          onExit();
          return true;
        };
        cResult[0] = onExit;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      useNavigatorBackPressHandler.useNavigatorBackPressHandler(tmp4);
      return null;
    }
  : function ExitOnBackPress(onExit) {
      onExit = onExit.onExit;
      useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
        onExit();
        return true;
      });
      return null;
    };
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
  let result2;
  let memo;
  let memo1;
  c27 = undefined;
  closure_28 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_32 = undefined;
  projectGuildId = undefined;
  let callback2;
  let memo4;
  let callback3;
  let callback4;
  closure_38 = undefined;
  let callback5;
  let callback6;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback7;
  closure_44 = undefined;
  let callback8;
  let onExit;
  let callback9;
  let callback10;
  let stateFromStores4;
  let preview;
  let conjureRemoveTarget;
  closure_53 = undefined;
  let tmp2 = navigation;
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
  fn.__closure = {
    runOnJS: require("ReanimatedRexport").runOnJS,
    setChatKeyboardCover: tmp10[1],
    safeAreaBottom: bottom,
  };
  fn.__workletHash = 7830565176778;
  fn.__initData = __initData;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp10[1], safeAreaBottom: bottom };
  let items1 = [setMode];
  let items2 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(
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
  const items3 = [setMode];
  const items4 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items3,
    () => {
      const project = ConjureProjectStore.getProject(projectId);
      const obj2 = {
        projectExists: null != project,
        projectUnavailable: null,
        projectName: null,
        projectGuildId: null,
        previewAppId: null,
      };
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
    },
    items4,
  );
  ({ projectExists, projectName, projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = require("initialize");
  const items5 = [setMode];
  const items6 = [guildId, null != context];
  let stateFromStores1 = require("initialize").useStateFromStores(
    items5,
    () => {
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
    },
    items6,
  );
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
  const items7 = [setMode, activeMode];
  const items8 = [projectId];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items7,
    () => {
      let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
      if (integrationStatus == null) {
        integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
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
  const tmpResult = require("initialize");
  const tmp21 = previewAppId;
  const tmpResult21 = require("ApplicationActionCreators");
  const items9 = [frameSurface];
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
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  const tmpResult22 = require("initialize");
  const obj9 = {
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
  const tmpResult23 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(
    projectId,
    (arg0) => {
      const modes = availability.modes;
      if (modes.includes(arg0)) {
        setMode(arg0);
      }
    },
  );
  const tmpResult24 = require("conjurePreviewModeRequests");
  const conjureTraceRequests = require("conjureTraceRequests").useConjureTraceRequests(projectId, () =>
    navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }),
  );
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  const tmpResult25 = require("conjureTraceRequests");
  const obj10 = {
    installScope: install_scope,
    previewReady: true === preview_ready,
    integrationInstalled: null,
    botPermissionsChanged: null,
  };
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
    project.catch(() => {});
  }, items11);
  const tmp36 = null != previewAppId && null != projectId(tmp2[27])(previewAppId);
  const tmpResult26 = require("conjurePreviewModes");
  result1 = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items12 = [result1, previewAppId, stateFromStores, projectId];
  const callback = obj2.useCallback(
    asyncGeneratorStep(async () => {
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
                application = application(tmp22[21]).fetchApplication(previewAppId);
                c3 = 1;
                c4 = 1;
                const obj5 = {
                  value: application.catch(() => {}),
                  done: false,
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
              const result = c0(11801).repairConjureGuildHints(closure_1_7, closure_1_18);
              const obj = c0(11801);
              result.finally(() => application(10757).getProject(closure_1_1)).catch(() => {});
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
    }),
    items12,
  );
  const tmp38 = asyncGeneratorStep;
  const tmpResult27 = require("ConjureInstallTarget");
  [tmp41, tmp42] = bottom(noop.useState(true), 2);
  c19 = tmp42;
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
  __initData = tmp57;
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
  const tmpResult28 = require("conjureAgentNeedsPreview");
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
  __initData2 = tmp61;
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
  __initData3 = tmp65;
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
        conjureInstallConsent.catch(() => {});
      }
    } else {
      ref.current = false;
    }
  }, items13);
  const tmpResult29 = require("conjurePreviewModes");
  function ze() {
    let paddingBottom = 0;
    if (closure_20) {
      paddingBottom = 0;
      if (!closure_22) {
        const _Math = Math;
        paddingBottom = Math.max(closure_5.get(), bottom);
      }
    }
    return { paddingBottom };
  }
  ze.__closure = { previewShowing: tmp57, botFaceShowing: tmp65, keyboardHeight: tmp8, safeAreaBottom: bottom };
  ze.__workletHash = 9469604169548;
  ze.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(ze);
  const tmpResult30 = require("ReanimatedRexport");
  class Ve {
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
  Ve.__closure = { previewShowing: tmp57, keyboardHeight: tmp8, safeAreaBottom: bottom };
  Ve.__workletHash = 7166266100039;
  Ve.__initData = __initData3;
  const items14 = [availability.modes, frameSurfaceOptions, stateFromStores3];
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Ve);
  memo = obj2.useMemo(
    () => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3),
    items14,
  );
  const items15 = [activeMode, frameSurface, appChannel];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel), items15);
  let intl = tmp(tmp2[33]).intl;
  const stringResult = intl.string(projectId(tmp2[34])["N+VA1J"]);
  c27 = stringResult;
  const items16 = [memo1, availability.modes.length, stringResult, tmp57];
  const memo2 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    obj.label = intl.string(_modDef3863["1HH2p9"]);
    const items = [obj];
    if (availability.modes.length > 0) {
      let tmp = closure_20;
      if (!closure_20) {
        let previewTargetLabel = c27;
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
  }, items16);
  let tmp74 = null != memo1;
  const callback1 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp74) {
    tmp74 = memo.length > 1;
  }
  closure_28 = tmp74;
  const items17 = [memo1, tmp74, stringResult, tmp57, setAppChannel, setFrameSurface, setMode, memo];
  let first = availability.modes[0];
  let tmp77 = null != stateFromStores2;
  const memo3 = obj2.useMemo(() => {
    let tmp;
    if (null != memo1) {
      let tmp3;
      if (closure_20) {
        tmp3 = c27;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_20) {
        if (closure_28) {
          fn = (color) => setFrameSurface(closure_1_0(11118).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef3863.I2ucou);
      let fn2;
      if (closure_28) {
        fn2 = () =>
          projectId(navigation[36])({
            targets,
            target,
            onChange(mode) {
              const previewTarget = closure_2_0(11808).selectPreviewTarget(
                mode,
                closure_1_12,
                closure_1_15,
                closure_1_17,
              );
              closure_1_19(false);
            },
          });
      }
      const obj2 = { preview: null };
      obj.onShowMenu = fn2;
      obj2.preview = obj;
      tmp = obj2;
    }
    return tmp;
  }, items17);
  if (tmp77) {
    tmp77 = tmp31 !== tmp48;
  }
  if (tmp77) {
    if (tmp78) {
      setMode(first);
      tmp42(false);
    }
    tmp49(tmp31);
    tmp78 = false === tmp48 && tmp31 && null != first;
  }
  const tmpResult31 = require("ReanimatedRexport");
  const tmpResult32 = require("SegmentedControlState");
  const segmentedControlState = tmpResult32.useSegmentedControlState({
    items: memo2,
    pageWidth: projectId(tmp2[37])().width - 2 * c19,
    onSetActiveIndex: callback1,
  });
  if (tmp41) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items18 = [num2, activeIndex, setActiveIndex];
  const effect2 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items18);
  const items19 = [previewAppId];
  const effect3 = obj2.useEffect(
    () => (null != previewAppId ? () => closure_0(navigation[39]).leaveConjurePreviewFrame(previewAppId) : undefined),
    items19,
  );
  const obj11 = { items: memo2, pageWidth: projectId(tmp2[37])().width - 2 * c19, onSetActiveIndex: callback1 };
  ({ publishOptions, publish, indicator, label } = projectId(tmp2[40])(projectId, guildId));
  closure_32 = tmp4(tmp2[41])(projectId, publish, publishOptions);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items20 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = {
      content: value2(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items20);
  const items21 = [guildId, navigation, null != context];
  memo4 = obj2.useMemo(() => {
    if (closure_3) {
      let fn = (projectId) => closure_1_2.push(closure_0(navigation[25]).ConjureScreenScenes.CHAT, { projectId });
    } else {
      fn = conjureStandaloneScenes.projectOpener(closure_0, (projectId) =>
        closure_1_2.push(closure_0(navigation[25]).ConjureScreenScenes.CHAT, { projectId }),
      );
    }
    return fn;
  }, items21);
  const items22 = [guildId, memo4, stateFromStores];
  callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo4 };
      obj2.content = value2(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items22);
  const items23 = [projectId];
  callback4 = obj2.useCallback(() => {
    const obj2 = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: value2(ConjureConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items23);
  closure_38 = obj2.useRef(false);
  _require = tmp38(function* (arg0) {
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
  const items24 = [projectId];
  callback5 = obj2.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items24);
  const items25 = [callback5, ,];
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
    obj2.content = value2(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items25);
  const tmp85 = projectId(tmp2[40])(projectId, guildId);
  conjureDebugPaneEnabled = require("useConjureDebugAccess").useConjureDebugPaneEnabled();
  const tmpResult33 = require("useConjureDebugAccess");
  isConjureMcpUiEnabled = require("ConjureMcpUiExperiment").useIsConjureMcpUiEnabled("ConjureChatScene");
  const items26 = [navigation, projectId];
  callback7 = obj2.useCallback(
    () => navigation.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }),
    items26,
  );
  const items27 = [frameSurface];
  const memo5 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items27);
  const tmp97 = frameSurfaceOptions(projectId(tmp2[56])(previewAppId, memo5));
  closure_44 = tmp97;
  const items28 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items28);
  const tmpResult34 = require("ConjureMcpUiExperiment");
  require("Link").useRoute().key;
  const tmpResult35 = require("Link");
  onExit = undefined;
  if (
    tmpResult36.useNavigationState((arg0) => {
      const first = arg0.routes[0];
      key = undefined;
      if (first != null) {
        key = first.key;
      }
      return key === key;
    })
  ) {
    onExit = guildId.onExit;
  }
  const items29 = [onExit, navigation];
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
  tmpResult36 = require("Link");
  const items31 = [setMode];
  const items32 = [projectId];
  stateFromStores4 = require("initialize").useStateFromStores(
    items31,
    () => ConjureProjectStore.isProjectDeleting(projectId),
    items32,
  );
  const items33 = [stateFromStores4, callback10];
  const effect4 = obj2.useEffect(() => {
    if (stateFromStores4) {
      callback10();
    }
  }, items33);
  const obj12 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult37 = require("initialize");
  let tmp105 = null;
  if (modes2.includes("widget")) {
    tmp105 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp105 = widgetApplicationId;
    }
  }
  obj12.refreshApplicationId = tmp105;
  const tmp4ResultResult = projectId(tmp2[59])(obj12);
  preview = tmp4ResultResult;
  const tmp4Result = projectId(tmp2[59]);
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const effect5 = obj2.useEffect(
    () => () => projectId(5246).hideActionSheet(closure_1_0(12298).CONJURE_CHAT_MORE_SHEET_KEY),
    [],
  );
  const items34 = [
    conjureDebugPaneEnabled,
    tmp61,
    guildId,
    callback4,
    callback7,
    callback6,
    callback3,
    callback2,
    callback8,
    isConjureMcpUiEnabled,
    tmp97,
    tmp4ResultResult,
    stateFromStores,
    conjureRemoveTarget,
  ];
  if (projectName != null) {
    let tmp114 = null;
    if (null != onExit) {
      let obj13 = { onExit };
      tmp114 = setFrameSurface(result2, obj13);
    }
    const items35 = [tmp114];
    const obj14 = { onBack: callback9, showBorder: null, title: null, actions: null };
    let tmp119 = !tmp55;
    if (tmp55) {
      tmp119 = !projectExists;
    }
    obj14.showBorder = tmp119;
    let tmp121 = null;
    const tmp4Result6 = tmp4(tmp2[62]);
    if (projectExists) {
      tmp121 = stateFromStores;
    }
    const obj15 = { project: tmp121, title: projectName, onPressIcon: callback2 };
    obj14.title = setFrameSurface(tmp4(tmp2[63]), obj15);
    let tmp112Result = null;
    if (projectExists) {
      let tmp117Result6 = null;
      if (null != publish) {
        let obj16 = {
          IconComponent: tmp(tmp2[65]).UploadIcon,
          onPress() {
            return closure_32("header");
          },
          disabled: "publishing" === indicator,
          accessibilityLabel: label,
          badge: null,
          badgeSize: null,
        };
        let tmp117Result = null;
        if (null != indicator) {
          const obj17 = { indicator };
          tmp117Result = tmp117(tmp4(tmp2[66]), obj17);
        }
        obj16.badge = tmp117Result;
        let result3;
        if (null != indicator) {
          result3 = tmp(tmp2[66]).conjurePublishBadgeSize(indicator);
          const tmpResult39 = tmp(tmp2[66]);
        }
        obj16.badgeSize = result3;
        tmp117Result6 = tmp117(tmp4(tmp2[64]), obj16);
        const tmp4Result8 = tmp4(tmp2[64]);
      }
      const obj18 = { children: null };
      const items36 = [tmp117Result6];
      const obj19 = { IconComponent: tmp(tmp2[67]).MoreHorizontalIcon, onPress: tmp109, accessibilityLabel: null };
      let intl2 = tmp(tmp2[33]).intl;
      obj19.accessibilityLabel = intl2.string(tmp(tmp2[33]).t["UKOtz+"]);
      items36[1] = tmp117(tmp4(tmp2[64]), obj19);
      obj18.children = items36;
      tmp112Result = tmp112(tmp113, obj18);
      const tmp4Result9 = tmp4(tmp2[64]);
    }
    const obj20 = { children: null };
    obj14.actions = tmp112Result;
    items35[1] = setFrameSurface(tmp4Result6, obj14);
    obj20.children = items35;
    const tmp112Result3 = setAppChannel(appChannel, obj20);
    const tmp4Result7 = tmp4(tmp2[63]);
    let routeFocused;
    const isFocused = tmp(tmp2[58]).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_53 = tmp131;
    const items37 = [true === routeFocused && isFocused, projectId];
    const effect6 = obj2.useEffect(() => {
      if (closure_53) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(projectId);
        return () => closure_0(navigation[20]).clearGlobalChatProject(projectId);
      }
    }, items37);
    const items38 = [guildId, projectId, tmp6];
    const effect7 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
        return () => closure_0(navigation[20]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items38);
    if (projectExists) {
      const obj21 = { style: null, children: null };
      const items39 = [tmp7.contentBare, animatedStyle];
      obj21.style = items39;
      const items40 = [tmp112Result3, ,];
      let tmp117Result7 = null;
      if (tmp55) {
        const obj22 = { style: tmp7.segments, children: null };
        const obj23 = { state: segmentedControlState, extras: memo3 };
        obj22.children = tmp117(tmp4(tmp2[70]), obj23);
        tmp117Result7 = tmp117(previewAppId, obj22);
      }
      items40[1] = tmp117Result7;
      const obj24 = { style: tmp7.panes, children: null };
      let tmp117Result8 = null;
      if (hasItem) {
        tmp117Result8 = null;
        if (null != previewAppId) {
          const obj25 = {
            style: tmp61 ? tmp7.pane : tmp7.paneBackstage,
            pointerEvents: null,
            accessibilityElementsHidden: null,
            importantForAccessibility: null,
            children: null,
          };
          let str6 = "none";
          if (tmp61) {
            str6 = "auto";
          }
          obj25.pointerEvents = str6;
          obj25.accessibilityElementsHidden = !tmp61;
          let str7 = "no-hide-descendants";
          if (tmp61) {
            str7 = "auto";
          }
          obj25.importantForAccessibility = str7;
          const obj26 = {
            applicationId: previewAppId,
            projectId,
            frameSurface,
            launch: frameLaunchParams,
            visible: tmp61,
          };
          obj25.children = tmp117(tmp(tmp2[39]).PreviewFrame, obj26);
          tmp117Result8 = tmp117(tmp140, obj25);
        }
      }
      const items41 = [tmp117Result8, ,];
      let tmp117Result9 = null;
      if (tmp57) {
        tmp117Result9 = null;
        if (null != previewAppId) {
          tmp117Result9 = null;
          if (!tmp61) {
            const obj27 = { style: tmp7.pane, children: null };
            const obj28 = {
              projectId,
              previewApplicationId: previewAppId,
              mode: activeMode,
              availability,
              frameSurface,
              frameLaunchParams,
              widgetApplicationId,
              frameHostAvailable: tmp36,
              permissionsGate: null,
            };
            let tmp144 = null;
            if (result2) {
              const obj29 = {
                onReviewPermissions: callback,
                loading: tmpResult21.useApplication(tmp21).isLoading,
                previewBotMissing: false === integration_installed,
              };
              tmp144 = obj29;
            }
            obj28.permissionsGate = tmp144;
            obj27.children = tmp117(tmp4(tmp2[39]), obj28);
            tmp117Result9 = tmp117(tmp140, obj27);
            const tmp4Result10 = tmp4(tmp2[39]);
          }
        }
      }
      items41[1] = tmp117Result9;
      const items42 = [tmp7.chatPane, ,];
      let paneHidden = tmp57;
      if (tmp57) {
        paneHidden = tmp7.paneHidden;
      }
      const obj30 = { style: null, children: null };
      items42[1] = paneHidden;
      items42[2] = animatedStyle1;
      obj30.style = items42;
      const obj31 = { value: publishOptions, children: null };
      const obj32 = { value: projectId, children: null };
      const obj33 = { projectId, transcriptTopInset: tmp10[0], onRestoreVersion: callback5, hidden: tmp57 };
      obj32.children = tmp117(tmp4(tmp2[72]), obj33);
      obj31.children = tmp117(tmp(tmp2[71]).ConjureFileMentionProjectContext.Provider, obj32);
      obj30.children = tmp117(tmp(tmp2[31]).ConjurePublishActionContext.Provider, obj31);
      items41[2] = tmp117(tmp4(tmp2[18]).View, obj30);
      obj24.children = items41;
      items40[2] = tmp112(previewAppId, obj24);
      obj21.children = items40;
      let tmp112Result4 = tmp112(tmp4(tmp2[18]).View, obj21);
    } else {
      const obj34 = { style: tmp7.contentBare, children: null };
      const items43 = [tmp112Result3];
      const obj35 = { style: null, children: null };
      const items44 = [,];
      ({ content: arr42[0], centered: arr42[1] } = tmp7);
      obj35.style = items44;
      if (stateFromStores1) {
        let tmp117Result10 = tmp117(closure_6, {});
      } else {
        const obj36 = { style: tmp7.listError, children: null };
        const obj37 = { variant: "heading-lg/semibold", color: "text-default", children: null };
        let intl3 = tmp(tmp2[33]).intl;
        obj37.children = intl3.string(tmp4(tmp2[34]).G1WwgK);
        const items45 = [tmp117(tmp(tmp2[68]).Text, obj37), ,];
        const obj38 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl4 = tmp(tmp2[33]).intl;
        obj38.children = intl4.string(tmp4(tmp2[34]).fINulo);
        items45[1] = tmp117(tmp(tmp2[68]).Text, obj38);
        const obj39 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp(tmp2[33]).intl;
        obj39.text = intl5.string(tmp4(tmp2[34])["WFJ/vb"]);
        obj39.onPress = function onPress() {
          const obj = ConjureActionCreators;
          if (closure_3) {
            let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(projectId);
          } else {
            missingConjureProjectNow = obj.listProjects(closure_0);
          }
          return missingConjureProjectNow;
        };
        items45[2] = tmp117(tmp(tmp2[69]).Button, obj39);
        obj36.children = items45;
        tmp117Result10 = tmp112(tmp134, obj36);
      }
      obj35.children = tmp117Result10;
      items43[1] = tmp117(previewAppId, obj35);
      obj34.children = items43;
      tmp112Result4 = tmp112(tmp134, obj34);
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
}
