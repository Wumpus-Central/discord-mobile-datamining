// discord_app/modules/conjure/builder/native/ConjureChatScene.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import getURLForApplicationDefault from "../../../activities/getURLForApplication.tsx";
import useNavigatorBackPressHandler from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import conjurePreviewSurface from "../../preview/conjurePreviewSurface.tsx";
import ConjurePreviewActionCreators from "../../preview/ConjurePreviewActionCreators.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import ConjureRemix from "../../remix/ConjureRemix.tsx";
import useFrameBySurfaceDefault from "../../../frames/utils/useFrameBySurface.tsx";
import restartFrames from "../../../frames/native/restartFrames.tsx";
import ConjureGlobalScreenContextDefault from "ConjureGlobalScreenContext.tsx";
import useAnimatedKeyboardHeightDefault from "../../../keyboard/native/useAnimatedKeyboardHeight.tsx";
import conjureStandaloneScenes from "conjureStandaloneScenes.tsx";
import conjurePreviewTargets from "../../preview/conjurePreviewTargets.tsx";
import useConjureNativePublishButtonDefault from "../../publish/native/useConjureNativePublishButton.tsx";
import useIsConjureProjectLiveDefault from "../../publish/useIsConjureProjectLive.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import openConjureShareSheetDefault from "../../share/native/openConjureShareSheet.tsx";
import ConjureConnectToolSheet from "../../external_connections/native/ConjureConnectToolSheet.tsx";
import ConjureHistorySheet from "../../history/native/ConjureHistorySheet.tsx";
import useConjurePreviewMenuDefault from "../../preview/native/useConjurePreviewMenu.tsx";
import ConjureChatMoreSheet from "ConjureChatMoreSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureLastIntegrationStatusStore from "../../projects/ConjureLastIntegrationStatusStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
function isShowingProject(c1, isFocused) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let rootState;
  if (rootNavigationRef != null) {
    rootState = rootNavigationRef.getRootState();
  }
  if (rootState != null) {
    const routes1 = rootState.routes;
    const substr = routes1.slice(0, rootState.index + 1);
    const findLastResult = substr.findLast((name) => "modal" !== name.name);
  }
  if (null != isFocused) {
    let name;
    if (findLastResult != null) {
      name = findLastResult.name;
    }
    return "conjure" === name && isFocused.isFocused();
  } else {
    const coerceMainRouteResult = NavigationRouteUtils.coerceMainRoute(findLastResult);
    state = undefined;
    if (coerceMainRouteResult != null) {
      state = coerceMainRouteResult.state;
    }
    const tmpResult = NavigationRouteUtils;
    let tmp7;
    if (state != null) {
      ({ index, routes } = state);
      if (index == null) {
        index = 0;
      }
      tmp7 = routes[index];
    }
    const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(tmp7);
    let subRouteId;
    if (coerceChannelRouteResult != null) {
      subRouteId = coerceChannelRouteResult.params.subRouteId;
    }
    return subRouteId === c1;
  }
}
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
const closeConnection = fn(7693).closeConnection;
const canRemixProject = fn(6934).canRemixProject;
const isLaunched = fn(6937).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5043);
let closure_21 = createStyles.createStyles((paddingBottom) => {
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
let closure_23 = {
  code: "(function ConjureChatSceneTsx1(e){let[scheduleOnRN,setChatKeyboardCover,safeAreaBottom]=this.__closure;scheduleOnRN(setChatKeyboardCover,Math.max(0,e.height-safeAreaBottom));})",
};
let closure_24 = {
  code: "(function ConjureChatSceneTsx2(){let[previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};})",
};
let closure_25 = {
  code: "(function ConjureChatSceneTsx3(){let[previewShowing,keyboardHeight,safeAreaBottom]=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatScene.tsx");

export default function ConjureChatScene(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const projectId = guildId.projectId;
  dependencyMap = undefined;
  let stateFromStores;
  previewAppId = undefined;
  let stateFromStores1;
  let isLoading;
  let stateFromStores3;
  let stateFromStores4;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let appChannel;
  let setAppChannel;
  let view;
  let setView;
  c20 = undefined;
  c21 = undefined;
  let onAddBot;
  c23 = undefined;
  let conjurePreviewAddBotPrompt;
  closure_25 = undefined;
  let canAnnotate;
  let result1;
  let memo1;
  let memo2;
  c30 = undefined;
  closure_31 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let publishOptions;
  let publish;
  closure_37 = undefined;
  let canShare;
  let stateFromStores5;
  let stateFromStores6;
  projectGuildId = undefined;
  let callback2;
  let memo5;
  let callback4;
  let callback5;
  closure_46 = undefined;
  let callback6;
  let callback7;
  let conjureDebugPaneEnabled;
  let isConjureMcpUiEnabled;
  let callback8;
  closure_52 = undefined;
  let callback9;
  onExit = undefined;
  let callback10;
  let callback11;
  let stateFromStores7;
  let preview;
  let conjureRemoveTarget;
  closure_61 = undefined;
  let intl = _require;
  let stringResult1 = dependencyMap;
  ({ entryPoint, onExit } = guildId);
  const navigation = require("useNavigation").useNavigation();
  const context = previewAppId.useContext(ConjureGlobalScreenContextDefault);
  asyncGeneratorStep = tmp5;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp145Result14 = c21(bottom);
  const tmp7 = useAnimatedKeyboardHeightDefault();
  let obj = require("useNavigation");
  [tmp10, tmp11] = stateFromStores(previewAppId.useState(0), 2);
  let tmp9 = stateFromStores(previewAppId.useState(0), 2);
  items = [c23, require("../../../../../_runtime/metro/01707__.js").scheduleOnRN, tmp11, bottom];
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
  const items3 = [frameSurfaceOptions];
  const items4 = [projectId];
  stateFromStores = intl(504).useStateFromStores(
    items3,
    () => {
      let project = ConjureProjectStore.getProject(c1);
      if (project == null) {
        project = null;
      }
      return project;
    },
    items4,
  );
  const intlResult = intl(504);
  const trackConjureBuilderOpened = intl(18448).useTrackConjureBuilderOpened(projectId, entryPoint);
  const intlResult1 = intl(18448);
  const items5 = [frameSurfaceOptions];
  const items6 = [projectId];
  const stateFromStoresObject = intl(504).useStateFromStoresObject(
    items5,
    () => {
      const project = ConjureProjectStore.getProject(c1);
      const obj2 = {
        projectExists: null != project,
        projectUnavailable: null,
        projectName: null,
        projectGuildId: null,
        previewAppId: null,
      };
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
    },
    items6,
  );
  ({ projectExists, projectName, projectGuildId, previewAppId } = stateFromStoresObject);
  const intlResult2 = intl(504);
  const items7 = [frameSurfaceOptions];
  const items8 = [projectId];
  stateFromStores1 = intl(504).useStateFromStores(
    items7,
    () => {
      let result = null == ConjureProjectStore.getProject(c1);
      if (result) {
        result = ConjureRemix.isConjureRemixCreating(c1);
      }
      return result;
    },
    items8,
  );
  const intlResult3 = intl(504);
  const items9 = [frameSurfaceOptions];
  const items10 = [guildId, null != context];
  let tmp22 =
    intl(504).useStateFromStores(
      items9,
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
      items10,
    ) || stateFromStores1;
  if (!tmp22) {
    let tmp23 = tmp5;
    if (tmp5) {
      tmp23 = !projectExists;
    }
    if (tmp23) {
      tmp23 = !stateFromStoresObject.projectUnavailable;
    }
    tmp22 = tmp23;
  }
  const intlResult4 = intl(504);
  const items11 = [frameSurfaceOptions, frameSurface];
  const items12 = [projectId];
  const stateFromStores2 = intl(504).useStateFromStores(
    items11,
    () => {
      let integrationStatus = ConjureProjectStore.getIntegrationStatus(c1);
      if (integrationStatus == null) {
        integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(c1);
      }
      return integrationStatus;
    },
    items12,
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
  const intlResult5 = intl(504);
  isLoading = intl(6971).useApplication(previewAppId).isLoading;
  const intlResult6 = intl(6971);
  const items13 = [appChannel];
  const items14 = [projectId];
  stateFromStores3 = intl(504).useStateFromStores(
    items13,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(c1);
      let previewAppChannels;
      if (publishStatus != null) {
        previewAppChannels = publishStatus.previewAppChannels;
      }
      return previewAppChannels;
    },
    items14,
  );
  if (stateFromStores3 == null) {
    let preview_app_channels;
    if (stateFromStores2 != null) {
      preview_app_channels = stateFromStores2.preview_app_channels;
    }
    stateFromStores3 = preview_app_channels;
  }
  const intlResult7 = intl(504);
  const tmp28 = appChannel;
  const items15 = [tmp28];
  const items16 = [projectId];
  stateFromStores4 = intl(504).useStateFromStores(
    items15,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(c1);
      let views1;
      if (publishStatus != null) {
        const views = publishStatus.views;
        if (views != null) {
          views1 = views.views;
        }
      }
      return views1;
    },
    items16,
  );
  const intlResult8 = intl(504);
  let obj5 = {
    applicationId: previewAppId,
    previewApplicationId: previewAppId,
    declaredActivity: null,
    previewSupportedSurfaces: null,
    installScope: null,
    ownerAuthorizationRevoked: null,
    mainCardOnly: true,
    previewAppChannels: null,
    previewViews: null,
  };
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
  obj5.previewViews = stateFromStores4;
  const conjurePreviewMode = intl(18449).useConjurePreviewMode(obj5);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  appChannel = conjurePreviewMode.appChannel;
  setAppChannel = conjurePreviewMode.setAppChannel;
  view = conjurePreviewMode.view;
  setView = conjurePreviewMode.setView;
  ({ frameLaunchParams, widgetApplicationId, isResolving } = conjurePreviewMode);
  const intlResult9 = intl(18449);
  const conjurePreviewModeRequests = intl(14747).useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  const intlResult10 = intl(14747);
  const conjureTraceRequests = intl(18451).useConjureTraceRequests(projectId, () =>
    _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }),
  );
  const intlResult11 = intl(18451);
  [tmp39, c20] = stateFromStores(previewAppId.useState(null), 2);
  const items17 = [projectId, null != context, stateFromStores1];
  const effect = obj2.useEffect(() => {
    if (!stateFromStores1) {
      if (closure_3) {
        if (null == ConjureProjectStore.getProject(c1)) {
          const missingConjureProjectNow = ConjureActionCreators.fetchMissingConjureProjectNow(c1);
        }
      }
      const project = ConjureActionCreators.getProject(c1);
      project.then(
        () => closure_1_20(projectId),
        () => {},
      );
    }
  }, items17);
  const tmp41 = null != previewAppId && null != getURLForApplicationDefault(previewAppId);
  const tmp8Result = stateFromStores(previewAppId.useState(null), 2);
  let result = intl(11460).conjureInstallGuildId(stateFromStores, guildId);
  c21 = result;
  const items18 = [result, previewAppId, stateFromStores, projectId];
  onAddBot = obj2.useCallback(
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
          return { value: "HermesInternal", done: "+95" };
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
                application = application(tmp22[24]).fetchApplication(previewAppId);
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
            const obj7 = { applicationId: closure_130_5, application: null, guildId: null, onClose: null };
            const application1 = application2.getApplication(closure_130_5);
            application = application1;
            if (application1 == null) {
              application = null;
            }
            obj7.application = application;
            obj7.guildId = closure_130_21;
            obj7.onClose = function onClose() {
              const result = c0(11460).repairConjureGuildHints(closure_1_4, closure_1_21);
              const obj = c0(11460);
              result.finally(() => application(7667).getProject(closure_1_1)).catch(() => {});
            };
            let result = tmp2(tmp22[31]).openConjureAppInstallModal(obj7);
            const obj6 = tmp2(tmp22[31]);
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
    items18,
  );
  const intlResult12 = intl(11460);
  const tmp44 = asyncGeneratorStep;
  [tmp47, tmp48] = stateFromStores(previewAppId.useState(true), 2);
  c23 = tmp48;
  const tmp8Result6 = stateFromStores(previewAppId.useState(true), 2);
  [tmp50, tmp51] = stateFromStores(previewAppId.useState(false), 2);
  let tmp52 = null;
  if (null != stateFromStores2) {
    tmp52 = tmp42;
  }
  const tmp8Result7 = stateFromStores(previewAppId.useState(false), 2);
  [tmp54, tmp55] = stateFromStores(previewAppId.useState(tmp52), 2);
  const tmp8Result8 = stateFromStores(previewAppId.useState(tmp52), 2);
  [tmp57, tmp58] = stateFromStores(previewAppId.useState(null), 2);
  const tmp8Result10 = stateFromStores(previewAppId.useState(projectId), 2);
  if (tmp8Result10[0] !== projectId) {
    tmp8Result10[1](projectId);
    tmp48(true);
    tmp51(false);
    tmp55(null);
    tmp58(null);
  }
  let tmp65 = tmp42;
  if (true === preview_ready) {
    tmp65 = null != previewAppId;
  }
  if (tmp65) {
    tmp65 = !isResolving;
  }
  if (tmp65) {
    tmp65 = availability.modes.length > 0;
  }
  const tmp8Result9 = stateFromStores(previewAppId.useState(null), 2);
  conjurePreviewAddBotPrompt = intl(18453).useConjurePreviewAddBotPrompt(projectId, guildId);
  if (tmp67) {
    tmp58(conjurePreviewAddBotPrompt.prompt.id);
    tmp48(false);
  }
  let tmp70 = tmp65;
  if (tmp65) {
    tmp70 = !tmp47;
  }
  closure_25 = tmp70;
  const intlResult13 = intl(18453);
  tmp67 = null != conjurePreviewAddBotPrompt && tmp65 && conjurePreviewAddBotPrompt.prompt.id !== tmp57;
  let hasItem = tmp65;
  const conjureAgentNeedsPreview = intl(18454).useConjureAgentNeedsPreview(projectId);
  if (tmp65) {
    hasItem = tmp41;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp73 = hasItem;
  if (hasItem) {
    tmp73 = tmp70;
  }
  if (tmp73) {
    tmp73 = "frame" === activeMode;
  }
  if (tmp73) {
    tmp73 = null == conjurePreviewAddBotPrompt;
  }
  canAnnotate = tmp73;
  if (hasItem) {
    let tmp74 = tmp50;
    if (!tmp50) {
      tmp74 = tmp73;
    }
    if (!tmp74) {
      tmp74 = conjureAgentNeedsPreview;
    }
    hasItem = tmp74;
  }
  let tmp75 = hasItem;
  if (hasItem) {
    tmp75 = !tmp50;
  }
  if (tmp75) {
    tmp51(true);
  }
  const intlResult14 = intl(18454);
  let obj6 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null };
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.integration_installed;
  }
  if (prop2 == null) {
    prop2 = null;
  }
  obj6.integrationInstalled = prop2;
  result1 = intl(11457).previewBotInstallBlocksMode(activeMode, obj6);
  const items19 = [conjurePreviewAddBotPrompt, result1, onAddBot, isLoading];
  const memo = obj2.useMemo(() => {
    if (null != conjurePreviewAddBotPrompt) {
      const obj2 = {
        onAddBot: conjurePreviewAddBotPrompt.onAddBot,
        loading: conjurePreviewAddBotPrompt.adding || isLoading,
        agentPrompt: null,
      };
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
  }, items19);
  const intlResult15 = intl(11457);
  const items20 = [conjurePreviewAddBotPrompt, tmp70, , ,];
  let tmp80 = tmp70;
  if (tmp70) {
    tmp80 = "bot" === activeMode;
  }
  items20[2] = tmp80;
  items20[3] = tmp7;
  items20[4] = bottom;
  [tmp81, tmp82, tmp83, tmp84, tmp85] = items20;
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
  const items21 = [tmp82, tmp83, tmp84, tmp85];
  ConjureChatSceneTsx2.__closure = items21;
  ConjureChatSceneTsx2.__workletHash = 8818171941973;
  ConjureChatSceneTsx2.__initData = tmp81;
  const animatedStyle = intl(1654).useAnimatedStyle(ConjureChatSceneTsx2);
  const intlResult16 = intl(1654);
  const items22 = [closure_25, tmp70, tmp7, bottom];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp87, tmp88, tmp89, tmp90] = items22;
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
  const items23 = [tmp88, tmp89, tmp90];
  ConjureChatSceneTsx3.__closure = items23;
  ConjureChatSceneTsx3.__workletHash = 6849996535358;
  ConjureChatSceneTsx3.__initData = tmp87;
  const items24 = [availability.modes, frameSurfaceOptions, stateFromStores3, stateFromStores4];
  const animatedStyle1 = intl(1654).useAnimatedStyle(ConjureChatSceneTsx3);
  memo1 = obj2.useMemo(
    () =>
      conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions, stateFromStores3, stateFromStores4),
    items24,
  );
  const items25 = [activeMode, frameSurface, appChannel, view];
  memo2 = obj2.useMemo(
    () => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface, appChannel, view),
    items25,
  );
  let intl2 = intl(1112).intl;
  const stringResult = intl2.string(_modDef4245["N+VA1J"]);
  c30 = stringResult;
  const items26 = [memo2, availability.modes.length, stringResult, tmp70];
  const memo3 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    let obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    let string = intl.string;
    obj.label = string(_modDef4245["1HH2p9"]);
    items = [obj];
    if (availability.modes.length > 0) {
      if (!closure_25) {
        let previewTargetLabel = c30;
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
  }, items26);
  let tmp96 = null != memo2;
  const callback1 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined2(0 === arg0);
  }, []);
  if (tmp96) {
    tmp96 = memo1.length > 1;
  }
  closure_31 = tmp96;
  const items27 = [memo2, tmp96, stringResult, tmp70, setAppChannel, setFrameSurface, setMode, setView, memo1];
  let first = availability.modes[0];
  let tmp99 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (closure_25) {
        tmp3 = c30;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (closure_25) {
        if (closure_31) {
          fn = (color) => view(closure_1_0(9816).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef4245.I2ucou);
      let fn2;
      if (closure_31) {
        fn2 = () =>
          c1(18457)({
            targets,
            target,
            onChange(mode) {
              const previewTarget = closure_2_0(18455).selectPreviewTarget(
                mode,
                closure_1_12,
                closure_1_15,
                closure_1_17,
                closure_1_19,
              );
              closure_1_23(false);
            },
          });
      }
      const obj2 = { preview: null };
      obj.onShowMenu = fn2;
      obj2.preview = obj;
      tmp = obj2;
    }
    return tmp;
  }, items27);
  if (tmp99) {
    tmp99 = tmp42 !== tmp54;
  }
  if (tmp99) {
    if (tmp100) {
      setMode(first);
      tmp48(false);
    }
    tmp55(tmp42);
    tmp100 = false === tmp54 && tmp42 && null != first;
  }
  const intlResult17 = intl(1654);
  const intlResult18 = intl(8616);
  const segmentedControlState = intlResult18.useSegmentedControlState({
    items: memo3,
    pageWidth: useWindowDimensionsDefault().width - 2 * onAddBot,
    onSetActiveIndex: callback1,
  });
  if (tmp47) {
    num2 = 0;
  } else {
    num2 = 1;
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items28 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items28);
  const items29 = [previewAppId];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (null != previewAppId) {
      const result = ConjurePreviewActionCreators.setBuilderPreviewApplicationId(tmp);
      return () => closure_1_0(_undefined[43]).setBuilderPreviewApplicationId(null);
    }
  }, items29);
  const items30 = [previewAppId];
  const effect2 = obj2.useEffect(() => (null != previewAppId ? () => c1(c2[44])(previewAppId) : undefined), items30);
  const tmp108 = useConjureNativePublishButtonDefault(projectId, guildId);
  publishOptions = tmp108.publishOptions;
  publish = tmp108.publish;
  ({ indicator, hint, text, pendingChanges } = tmp108);
  closure_37 = tmp3(18463)(projectId, publish, publishOptions);
  let obj7 = {
    items: memo3,
    pageWidth: useWindowDimensionsDefault().width - 2 * onAddBot,
    onSetActiveIndex: callback1,
  };
  canShare = tmp3(18497)(projectId).canShare;
  const tmp109 = useIsConjureProjectLiveDefault(stateFromStores);
  const items31 = [availability];
  stateFromStores5 = intl(504).useStateFromStores(items31, () => {
    const currentUser = availability.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const intlResult19 = intl(504);
  const items32 = [activeMode];
  const items33 = [projectId, stateFromStores5];
  stateFromStores6 = intl(504).useStateFromStores(
    items32,
    () => ConjureConnectionStore.isAccessRefused(c1, stateFromStores5),
    items33,
  );
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items34 = [projectId, projectGuildId];
  callback2 = obj2.useCallback(() => {
    const obj2 = {
      content: collapsedCategories(ConjureSettingsSheetDefault, {
        projectId,
        guildId: projectGuildId,
        isPreview: true,
      }),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items34);
  const items35 = [guildId, navigation, null != context];
  memo5 = obj2.useMemo(() => {
    if (closure_3) {
      function openHere(projectId) {
        _undefined.push(closure_0(dependencyMap[28]).ConjureScreenScenes.CHAT, { projectId, entryPoint: "remix" });
      }
    } else {
      openHere = conjureStandaloneScenes.projectOpener(closure_0, (arg0) =>
        closure_0(dependencyMap[28]).pushServerProjectScreen(closure_1_0, arg0, "remix"),
      );
    }
    return openHere;
  }, items35);
  const items36 = [guildId, memo5, stateFromStores];
  const items37 = [projectId];
  const callback3 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo5 };
      obj2.content = collapsedCategories(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items36);
  callback4 = obj2.useCallback(() => openConjureShareSheetDefault({ projectId }), items37);
  const items38 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: collapsedCategories(ConjureConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items38);
  closure_46 = obj2.useRef(false);
  _require = tmp44(function* (arg0) {
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
        obj8.text = intl2.string(projectId(4245).qqlUiW);
        obj8.icon = closure_0(16695).UndoIcon;
        projectId(5725).open("CONJURE_VERSION_RESTORING", obj8);
        c5 = 2;
        projectId(5725);
        c6 = 4;
        c7 = 1;
        return { value: closure_0(18574).restoreSourceHistoryEntry(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(1112).intl;
      closure_0(5724).presentError(intl.string(projectId(4245)["PSdo+w"]));
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
          obj16.title = closure_0(18576).versionTitle(closure_130_0.subject).short;
          obj13.text = intl3.formatToPlainString(projectId(4245).Z4n6LX, obj16);
          obj13.icon = closure_0(16695).UndoIcon;
          projectId(5725).open("CONJURE_VERSION_RESTORED", obj13);
          closure_0(18576);
          projectId(5725);
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
          closure_0(5724).presentError(closure_130_2);
          closure_0(5724);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(18577).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp57 = closure_1;
    if (closure_1 === undefined) {
      tmp57 = null;
    }
    closure_130_1 = tmp57;
    return "Path";
  });
  const items39 = [projectId];
  callback6 = obj2.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items39);
  const items40 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    const obj2 = {
      key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY,
      content: collapsedCategories(ConjureHistorySheetDefault, { projectId, onRestoreVersion: callback6 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items40);
  const intlResult20 = intl(504);
  conjureDebugPaneEnabled = intl(18593).useConjureDebugPaneEnabled();
  const intlResult21 = intl(18593);
  isConjureMcpUiEnabled = intl(18594).useIsConjureMcpUiEnabled("ConjureChatScene");
  const items41 = [navigation, projectId];
  callback8 = obj2.useCallback(
    () => _undefined.push(conjureStandaloneScenes.ConjureScreenScenes.DEBUG, { projectId }),
    items41,
  );
  const items42 = [frameSurface];
  const memo6 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items42);
  const tmp123 = setAppChannel(useFrameBySurfaceDefault(previewAppId, memo6));
  closure_52 = tmp123;
  const items43 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartFrames.restartAppFrames(tmp);
    }
  }, items43);
  const intlResult22 = intl(18594);
  intl(1502).useRoute().key;
  const intlResult23 = intl(1502);
  let tmp125;
  if (
    intlResult24.useNavigationState((arg0) => {
      const first = arg0.routes[0];
      key = undefined;
      if (first != null) {
        key = first.key;
      }
      return key === key;
    })
  ) {
    tmp125 = onExit;
  }
  onExit = tmp125;
  const items44 = [tmp125, navigation];
  callback10 = obj2.useCallback(() => {
    if (null != onExit) {
      tmp();
    } else {
      _undefined.goBack();
    }
  }, items44);
  const items45 = [callback10, projectId];
  callback11 = obj2.useCallback(() => {
    closeConnection(c1);
    callback10();
  }, items45);
  intlResult24 = intl(1502);
  const items46 = [frameSurfaceOptions];
  const items47 = [projectId];
  stateFromStores7 = intl(504).useStateFromStores(items46, () => ConjureProjectStore.isProjectDeleting(c1), items47);
  const items48 = [stateFromStores7, callback11, projectId, null != context, navigation];
  const effect3 = obj2.useEffect(() => {
    let tmp = stateFromStores7;
    if (stateFromStores7) {
      let tmp5 = null;
      if (closure_3) {
        tmp5 = c2;
      }
      tmp = isShowingProject(c1, tmp5);
    }
    if (tmp) {
      callback11();
    }
  }, items48);
  const intlResult25 = intl(504);
  const conjureRemixLeaveRequests = intl(11455).useConjureRemixLeaveRequests(projectId, () => {
    let tmp3 = null;
    if (closure_3) {
      tmp3 = c2;
    }
    if (isShowingProject(c1, tmp3)) {
      callback11();
    }
  });
  let obj8 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const intlResult26 = intl(11455);
  let tmp132 = null;
  if (modes2.includes("widget")) {
    tmp132 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp132 = widgetApplicationId;
    }
  }
  obj8.refreshApplicationId = tmp132;
  const tmp3ResultResult = useConjurePreviewMenuDefault(obj8);
  preview = tmp3ResultResult;
  const tmp3Result = useConjurePreviewMenuDefault;
  conjureRemoveTarget = intl(12508).useConjureRemoveTarget(projectId);
  const intlResult27 = intl(12508);
  const conjureAdminUnpublishLookup = intl(18598).useConjureAdminUnpublishLookup(projectId);
  const effect4 = obj2.useEffect(
    () => () => projectId(5257).hideActionSheet(closure_1_0(18599).CONJURE_CHAT_MORE_SHEET_KEY),
    [],
  );
  const items49 = [
    stateFromStores6,
    canShare,
    conjureDebugPaneEnabled,
    tmp73,
    guildId,
    callback5,
    callback8,
    callback7,
    callback2,
    callback4,
    callback9,
    isConjureMcpUiEnabled,
    tmp123,
    tmp3ResultResult,
    stateFromStores4,
    stateFromStores,
    publish,
    publishOptions,
    conjureRemoveTarget,
  ];
  if (projectName != null) {
    let tmp142 = null;
    if (null != tmp125) {
      const obj9 = { onExit: tmp125 };
      tmp142 = view(result1, obj9);
    }
    const items50 = [tmp142];
    const obj10 = { onBack: callback10, showBorder: null, title: null, actions: null };
    let tmp147 = !tmp65;
    if (tmp65) {
      tmp147 = !projectExists;
    }
    if (!tmp147) {
      tmp147 = stateFromStores6;
    }
    obj10.showBorder = tmp147;
    let tmp149 = null;
    const tmp3Result6 = tmp3(18608);
    if (projectExists) {
      tmp149 = null;
      if (!stateFromStores6) {
        tmp149 = stateFromStores;
      }
    }
    const obj11 = { project: tmp149, title: projectName, onPressIcon: callback2, draft: pendingChanges };
    obj10.title = view(tmp3(18609), obj11);
    let tmp140Result = null;
    if (projectExists) {
      let tmp145Result = null;
      if (null != stateFromStores) {
        tmp145Result = null;
        if (tmp109) {
          tmp145Result = null;
          if (setFrameSurface(stateFromStores)) {
            const obj12 = { IconComponent: intl(11448).PaperPlusIcon, onPress: callback3, accessibilityLabel: null };
            let intl3 = intl(1112).intl;
            obj12.accessibilityLabel = intl3.string(tmp3(4245).XWgAfc);
            tmp145Result = tmp145(tmp3(18610), obj12);
            const tmp3Result8 = tmp3(18610);
          }
        }
      }
      const items51 = [tmp145Result, ,];
      let tmp145Result9 = null;
      if (null != publish) {
        let obj13 = {
          IconComponent: intl(9702).UploadIcon,
          onPress() {
            return closure_37("header");
          },
          disabled: "publishing" === indicator,
          dimmed: null == indicator,
          accessibilityLabel: text,
          accessibilityHint: hint,
          badge: null,
          badgeSize: null,
        };
        let tmp145Result8;
        if (null != indicator) {
          const obj14 = { indicator };
          tmp145Result8 = tmp145(tmp3(18611), obj14);
        }
        obj13.badge = tmp145Result8;
        let result2;
        if (null != indicator) {
          result2 = intl(18611).conjurePublishBadgeSize(indicator);
          const intlResult29 = intl(18611);
        }
        obj13.badgeSize = result2;
        tmp145Result9 = tmp145(tmp3(18610), obj13);
        const tmp3Result9 = tmp3(18610);
      }
      const obj15 = { children: null };
      items51[1] = tmp145Result9;
      let obj16 = { IconComponent: intl(7745).MoreHorizontalIcon, onPress: tmp137, accessibilityLabel: null };
      const intl4 = intl(1112).intl;
      obj16.accessibilityLabel = intl4.string(intl(1112).t["UKOtz+"]);
      items51[2] = tmp145(tmp3(18610), obj16);
      obj15.children = items51;
      tmp140Result = tmp140(tmp141, obj15);
      const tmp3Result10 = tmp3(18610);
    }
    const obj17 = { children: null };
    obj10.actions = tmp140Result;
    items50[1] = view(tmp3Result6, obj10);
    obj17.children = items50;
    let tmp140Result3 = tmp140(tmp141, obj17);
    const tmp3Result7 = tmp3(18609);
    let routeFocused;
    const isFocused = intl(1502).useIsFocused();
    if (context != null) {
      routeFocused = context.routeFocused;
    }
    closure_61 = tmp162;
    const items52 = [true === routeFocused && isFocused, projectId];
    const effect5 = obj2.useEffect(() => {
      if (closure_61) {
        const globalChatProject = ConjureActionCreators.selectGlobalChatProject(c1);
        return () => closure_0(c2[22]).clearGlobalChatProject(projectId);
      }
    }, items52);
    const items53 = [guildId, projectId, tmp5];
    const effect6 = obj2.useEffect(() => {
      if (!closure_3) {
        const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, c1);
        return () => closure_0(c2[22]).setSelectedProjectForGuild(closure_1_0, null);
      }
    }, items53);
    if (!projectExists) {
      if (tmp39 !== projectId) {
        const obj18 = { style: tmp145Result14.contentBare, children: null };
        const items54 = [tmp145(tmp3(10591), { absolute: true, mix: true }), tmp140Result3];
        const obj19 = { style: null, children: null };
        const items55 = [,];
        ({ content: arr64[0], centered: arr64[1] } = tmp145Result14);
        obj19.style = items55;
        if (tmp22) {
          let tmp145Result10 = tmp145(stateFromStores1, {});
        } else {
          const obj20 = { style: tmp145Result14.listError, children: null };
          const obj21 = { variant: "heading-lg/semibold", color: "text-default", children: null };
          const intl5 = intl(1112).intl;
          obj21.children = intl5.string(tmp3(4245).G1WwgK);
          const items56 = [tmp145(intl(5634).Text, obj21), ,];
          const obj22 = { variant: "body-md/normal", color: "text-muted", children: null };
          const intl6 = intl(1112).intl;
          obj22.children = intl6.string(tmp3(4245).fINulo);
          items56[1] = tmp145(intl(5634).Text, obj22);
          const obj23 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl7 = intl(1112).intl;
          obj23.text = intl7.string(tmp3(4245)["WFJ/vb"]);
          obj23.onPress = function onPress() {
            const obj = ConjureActionCreators;
            if (closure_3) {
              let missingConjureProjectNow = obj.fetchMissingConjureProjectNow(c1);
            } else {
              missingConjureProjectNow = obj.listProjects(closure_0);
            }
            return missingConjureProjectNow;
          };
          items56[2] = tmp145(intl(5641).Button, obj23);
          obj20.children = items56;
          tmp145Result10 = tmp140(tmp175, obj20);
        }
        obj19.children = tmp145Result10;
        items54[2] = tmp145(stateFromStores3, obj19);
        obj18.children = items54;
        return tmp140(stateFromStores3, obj18);
      }
    }
    if (!stateFromStores6) {
      if (projectExists) {
        const obj24 = { style: null, children: null };
        const items57 = [tmp145Result14.contentBare, animatedStyle];
        obj24.style = items57;
        const items58 = [tmp145(tmp3(10591), { absolute: true, mix: true }), tmp140Result3, ,];
        let tmp145Result11 = null;
        if (tmp65) {
          const obj25 = { style: tmp145Result14.segments, children: null };
          const obj26 = { state: segmentedControlState, extras: memo4 };
          obj25.children = tmp145(tmp3(18612), obj26);
          tmp145Result11 = tmp145(stateFromStores3, obj25);
        }
        items58[2] = tmp145Result11;
        const obj27 = { style: tmp145Result14.panes, children: null };
        let tmp145Result12 = null;
        if (hasItem) {
          tmp145Result12 = null;
          if (null != previewAppId) {
            const obj28 = {
              style: tmp73 ? tmp145Result14.pane : tmp145Result14.paneBackstage,
              pointerEvents: null,
              accessibilityElementsHidden: null,
              importantForAccessibility: null,
              children: null,
            };
            let str6 = "none";
            if (tmp73) {
              str6 = "auto";
            }
            obj28.pointerEvents = str6;
            obj28.accessibilityElementsHidden = !tmp73;
            let str7 = "no-hide-descendants";
            if (tmp73) {
              str7 = "auto";
            }
            obj28.importantForAccessibility = str7;
            const obj29 = {
              applicationId: previewAppId,
              projectId,
              frameSurface,
              launch: frameLaunchParams,
              visible: tmp73,
            };
            obj28.children = tmp145(intl(18613).PreviewFrame, obj29);
            tmp145Result12 = tmp145(tmp169, obj28);
          }
        }
        const items59 = [tmp145Result12, ,];
        let tmp145Result13 = null;
        if (tmp70) {
          tmp145Result13 = null;
          if (null != previewAppId) {
            tmp145Result13 = null;
            if (!tmp73) {
              const obj30 = { style: tmp145Result14.pane, children: null };
              const obj31 = {
                projectId,
                previewApplicationId: previewAppId,
                mode: activeMode,
                availability,
                frameSurface,
                frameLaunchParams,
                widgetApplicationId,
                frameHostAvailable: tmp41,
                botInstall: memo,
              };
              obj30.children = tmp145(tmp3(18613), obj31);
              tmp145Result13 = tmp145(tmp169, obj30);
            }
          }
        }
        items59[1] = tmp145Result13;
        const items60 = [tmp145Result14.chatPane, ,];
        let paneHidden = tmp70;
        if (tmp70) {
          paneHidden = tmp145Result14.paneHidden;
        }
        const obj32 = { style: null, children: null };
        items60[1] = paneHidden;
        items60[2] = animatedStyle1;
        obj32.style = items60;
        const obj33 = { value: publishOptions, children: null };
        const obj34 = { value: projectId, children: null };
        const obj35 = { projectId, transcriptTopInset: tmp10, onRestoreVersion: callback6, hidden: tmp70 };
        obj34.children = tmp145(tmp3(18632), obj35);
        obj33.children = tmp145(intl(18528).ConjureFileMentionProjectContext.Provider, obj34);
        obj32.children = tmp145(intl(11459).ConjurePublishActionContext.Provider, obj33);
        items59[2] = tmp145(tmp3(1654).View, obj32);
        obj27.children = items59;
        items58[3] = tmp140(stateFromStores3, obj27);
        obj24.children = items58;
        let tmp140Result4 = tmp140(tmp3(1654).View, obj24);
      }
    }
    const obj36 = { style: tmp145Result14.contentBare, children: null };
    const items61 = [view(tmp3(10591), { absolute: true, mix: true }), tmp140Result3];
    const obj37 = { style: null, children: null };
    const items62 = [,];
    ({ content: arr62[0], centered: arr62[1] } = tmp145Result14);
    obj37.style = items62;
    const obj38 = { style: tmp145Result14.listError, children: null };
    const obj39 = { variant: "heading-lg/semibold", color: "text-default", children: null };
    intl = intl(1112).intl;
    stringResult1 = intl.string(tmp3(4245).Y2sGrh);
    obj39.children = stringResult1;
    tmp145Result14 = tmp145(intl(5634).Text, obj39);
    obj38.children = tmp145Result14;
    obj37.children = view(stateFromStores3, obj38);
    tmp140Result3 = tmp145(stateFromStores3, obj37);
    items61[2] = tmp140Result3;
    obj36.children = items61;
    tmp140Result4 = tmp140(stateFromStores3, obj36);
    const intlResult30 = intl(1502);
  } else {
    if (!projectExists) {
      if (!tmp22) {
        if (tmp39 !== projectId) {
          let uk6jhJ = tmp3(4245).G1WwgK;
        }
        tmp138(uk6jhJ);
      }
    }
    uk6jhJ = tmp3(4245).uk6jhJ;
  }
}
