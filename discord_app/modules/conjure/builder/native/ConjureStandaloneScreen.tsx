// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import TableRowApplicationIconDefault from "../../../applications/native/TableRowApplicationIcon.tsx";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import conjurePreviewSurface from "../../preview/conjurePreviewSurface.tsx";
import restartConjureAppFramesDefault from "../../preview/native/restartConjureAppFrames.tsx";
import BugIcon from "../../../../design/components/Icon/native/redesign/generated/BugIcon.tsx";
import MentionsBadgeDefault from "../../../guild_sidebar/native/MentionsBadge.tsx";
import ExperimentalDirectSelectIcon2 from "../../../../design/components/Icon/native/redesign/generated/ExperimentalDirectSelectIcon.tsx";
import ConjurePublishBlockedSheetDefault from "../../publish/native/ConjurePublishBlockedSheet.tsx";
import ConjurePublishNotesSheet from "../../publish/native/ConjurePublishNotesSheet.tsx";
import ConjureHeaderIconButtonDefault from "../../shared/native/ConjureHeaderIconButton.tsx";
import ConjureCreateSheet from "../../create/native/ConjureCreateSheet.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import conjureProjectActions from "../../projects/native/conjureProjectActions.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import conjurePreviewTargets from "../../preview/conjurePreviewTargets.tsx";
import ConjureConnectToolSheet from "../../external_connections/native/ConjureConnectToolSheet.tsx";
import ConjureHistorySheet from "../../history/native/ConjureHistorySheet.tsx";
import ConjureDebugSceneDefault from "../../debug/native/ConjureDebugScene.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjureBuilderRouteStore from "../ConjureBuilderRouteStore.tsx";

const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;

require = fn;
function ChatScene(guildId) {
  guildId = guildId.guildId;
  let _require = guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let data;
  let isLoading;
  let availability;
  let activeMode;
  let setMode;
  let frameSurface;
  let frameSurfaceOptions;
  let setFrameSurface;
  let result1;
  c22 = undefined;
  let paneHidden;
  closure_24 = undefined;
  isLaunched = undefined;
  let active;
  let conjureControlActive;
  let guild_id;
  closure_29 = undefined;
  c30 = undefined;
  let callback1;
  let memo1;
  let memo2;
  let stringResult1;
  closure_35 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_39 = undefined;
  projectGuildId = undefined;
  let callback3;
  let memo6;
  let callback4;
  let callback5;
  closure_45 = undefined;
  let callback6;
  let callback7;
  let setting;
  let callback8;
  closure_50 = undefined;
  let callback9;
  let callback10;
  let stateFromStores3;
  let preview;
  let isConjureProjectMuted;
  let conjureRemoveTarget;
  let memo8;
  navigation = require("useNavigation").useNavigation();
  const bottom = projectId(navigation[40])().bottom;
  const tmp5 = callback1(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[56])();
  noop = tmp6;
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp9;
  let obj = require("useNavigation");
  let obj4 = { onEnd: null };
  let fn = function p(height) {
    ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
  };
  let obj3 = require("KeyboardChatScrollView");
  fn.__closure = {
    runOnJS: require("ReanimatedRexport").runOnJS,
    setChatKeyboardCover: tmp8[1],
    safeAreaBottom: bottom,
  };
  fn.__workletHash = 7140225881507;
  fn.__initData = num2;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  let items1 = [setFrameSurface];
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
  const tmp11 = setFrameSurface;
  const items3 = [setFrameSurface];
  const items4 = [projectId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items3,
    () => {
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
      guild_id = undefined;
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
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = require("initialize");
  const items5 = [setFrameSurface];
  const items6 = [guildId];
  const stateFromStores1 = require("initialize").useStateFromStores(
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
  const items7 = [setFrameSurface];
  const items8 = [projectId];
  const stateFromStores2 = require("initialize").useStateFromStores(
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
  let obj10 = {
    applicationId: previewAppId,
    previewApplicationId: previewAppId,
    declaredActivity: null,
    previewSupportedSurfaces: null,
    installScope: null,
    ownerAuthorizationRevoked: null,
    mainCardOnly: true,
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
  const conjurePreviewMode = require("useConjurePreviewMode").useConjurePreviewMode(obj10);
  availability = conjurePreviewMode.availability;
  activeMode = conjurePreviewMode.activeMode;
  setMode = conjurePreviewMode.setMode;
  frameSurface = conjurePreviewMode.frameSurface;
  frameSurfaceOptions = conjurePreviewMode.frameSurfaceOptions;
  setFrameSurface = conjurePreviewMode.setFrameSurface;
  ({ widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult13 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(
    projectId,
    (arg0) => {
      const modes = availability.modes;
      if (modes.includes(arg0)) {
        setMode(arg0);
      }
    },
  );
  const tmpResult14 = require("conjurePreviewModeRequests");
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
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    const project = ConjureActionCreators.getProject(projectId);
    project.catch(() => {});
  }, items9);
  const tmp30 = null != previewAppId && null != projectId(navigation[62])(previewAppId);
  const tmpResult15 = require("conjurePreviewModes");
  result1 = require("ConjureInstallTarget").conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items10 = [result1, previewAppId, data, stateFromStores, projectId];
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
                  application = application(tmp2[29]).fetchApplication(previewAppId);
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
            let obj = { value, done: true };
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
          obj7.guildId = closure_131_21;
          obj7.onClose = function onClose() {
            const result = c0(16886).repairConjureGuildHints(closure_1_7, closure_1_21);
            const obj = c0(16886);
            result.finally(() => application(12364).getProject(closure_1_1)).catch(() => {});
          };
          let result = application3(tmp2[64]).openConjureAppInstallModal(obj7);
          obj2 = application3(tmp2[64]);
        } catch (tmp27) {
          c5 = tmp;
          throw tmp27;
        }
      }
    }),
    items10,
  );
  const tmp32 = bottom;
  const tmpResult16 = require("ConjureInstallTarget");
  [tmp35, tmp36] = noop.useState(true);
  c22 = tmp36;
  let tmp37 = null;
  if (null != stateFromStores2) {
    tmp37 = tmp23;
  }
  const tmp7Result = _slicedToArray(noop.useState(true), 2);
  [tmp39, tmp40] = noop.useState(tmp37);
  const tmp7Result4 = _slicedToArray(noop.useState(projectId), 2);
  if (tmp7Result4[0] !== projectId) {
    tmp7Result4[1](projectId);
    tmp36(true);
    tmp40(null);
  }
  let tmp45 = tmp23;
  if (true === preview_ready) {
    tmp45 = null != previewAppId;
  }
  if (tmp45) {
    tmp45 = !isResolving;
  }
  if (tmp45) {
    tmp45 = availability.modes.length > 0 || result;
    const tmp46 = availability.modes.length > 0 || result;
  }
  paneHidden = tmp45;
  if (tmp45) {
    paneHidden = !tmp35;
  }
  let hasItem = tmp45;
  if (tmp45) {
    hasItem = tmp30;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp48 = hasItem;
  if (hasItem) {
    tmp48 = paneHidden;
  }
  if (tmp48) {
    tmp48 = "frame" === activeMode;
  }
  closure_24 = tmp48;
  let tmp49 = paneHidden;
  if (paneHidden) {
    tmp49 = "bot" === activeMode;
  }
  isLaunched = tmp49;
  const tmp7Result3 = _slicedToArray(noop.useState(tmp37), 2);
  class Pe {
    constructor() {
      paddingBottom = 0;
      if (closure_23) {
        tmp = closure_25;
        paddingBottom = 0;
        if (!closure_25) {
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
  Pe.__closure = { previewShowing: paneHidden, botFaceShowing: tmp49, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Pe.__workletHash = 13315848638309;
  Pe.__initData = activeIndex;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(Pe);
  const tmpResult17 = require("ReanimatedRexport");
  class Te {
    constructor() {
      num = 0;
      if (!closure_23) {
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
  Te.__closure = { previewShowing: paneHidden, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Te.__workletHash = 2668549423950;
  Te.__initData = setActiveIndex;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(Te);
  active = frameSurfaceOptions(projectId).active;
  const tmpResult18 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult19 = require("conjurePreviewControlLease");
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[66])(guild_id, application_id);
  closure_29 = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_29) {
      fn = () => closure_0(navigation[27]).transitionTo(paneHidden.CHANNEL(guild_id, closure_1_29));
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[32]).intl;
  const tmp4Result4 = projectId(navigation[33]);
  if (conjureControlActive) {
    let Sme0T0 = tmp4Result4.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result4.vn5Rzu : tmp4Result4["cl/Jyl"];
  }
  const stringResult = intl.string(Sme0T0);
  c30 = stringResult;
  const items12 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      collapsedCategories(projectId);
    } else {
      constants(projectId);
    }
  }, items12);
  const items13 = [availability.modes, frameSurfaceOptions];
  memo1 = obj2.useMemo(() => conjurePreviewTargets.previewTargets(availability.modes, frameSurfaceOptions), items13);
  const items14 = [activeMode, frameSurface];
  memo2 = obj2.useMemo(() => conjurePreviewTargets.activePreviewTarget(activeMode, frameSurface), items14);
  let intl2 = tmp(tmp2[32]).intl;
  stringResult1 = intl2.string(tmp4(tmp2[33])["N+VA1J"]);
  const items15 = [memo2, availability.modes.length, stringResult1, paneHidden];
  const memo3 = obj2.useMemo(() => {
    const obj = { id: "chat", label: null, page: null };
    obj2 = require;
    let obj3 = dependencyMap;
    const intl = util.intl;
    obj.label = intl.string(_modDef3827["1HH2p9"]);
    const items = [obj];
    if (availability.modes.length > 0) {
      let tmp = paneHidden;
      if (!paneHidden) {
        let previewTargetLabel = stringResult1;
        obj3 = { id: "preview", label: previewTargetLabel, page: null };
        const items1 = [obj3];
      } else {
        tmp = memo2;
      }
      obj2 = conjurePreviewTargets;
      previewTargetLabel = obj2.getPreviewTargetLabel(tmp);
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, 1);
      return items;
    }
  }, items15);
  let tmp65 = null != memo2;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(0 === arg0);
  }, []);
  if (tmp65) {
    tmp65 = memo1.length > 1;
  }
  closure_35 = tmp65;
  const items16 = [memo2, tmp65, stringResult1, paneHidden, setFrameSurface, setMode, memo1];
  const first = availability.modes[0];
  let tmp68 = null != stateFromStores2;
  const memo4 = obj2.useMemo(() => {
    let tmp;
    if (null != memo2) {
      let tmp3;
      if (paneHidden) {
        tmp3 = stringResult1;
      }
      const obj = { prefix: tmp3, renderTrailingIcon: null, menuLabel: null, onShowMenu: null };
      let fn;
      if (paneHidden) {
        if (closure_35) {
          fn = (color) => active(closure_1_0(10508).ChevronSmallDownIcon, { size: "xs", color });
        }
      }
      obj.renderTrailingIcon = fn;
      const intl = util.intl;
      obj.menuLabel = intl.string(_modDef3827.I2ucou);
      let fn2;
      if (closure_35) {
        fn2 = () =>
          projectId(navigation[69])({
            targets,
            target,
            onChange(mode) {
              const previewTarget = closure_2_0(16888).selectPreviewTarget(mode, closure_1_17, closure_1_20);
              closure_1_22(false);
            },
          });
      }
      obj2 = { preview: null };
      obj.onShowMenu = fn2;
      obj2.preview = obj;
      tmp = obj2;
    }
    return tmp;
  }, items16);
  if (tmp68) {
    tmp68 = tmp23 !== tmp39;
  }
  if (tmp68) {
    if (tmp69) {
      setMode(first);
      tmp36(false);
    }
    tmp40(tmp23);
    tmp69 = false === tmp39 && tmp23 && null != first;
  }
  const tmp4Result = projectId(navigation[66]);
  const tmpResult20 = require("SegmentedControlState");
  const segmentedControlState = tmpResult20.useSegmentedControlState({
    items: memo3,
    pageWidth: projectId(navigation[70])().width - 2 * memo1,
    onSetActiveIndex: callback2,
  });
  if (tmp35) {
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
  const effect2 = obj2.useEffect(
    () => (null != previewAppId ? () => closure_0(navigation[72]).leaveConjurePreviewFrame(previewAppId) : undefined),
    items18,
  );
  const items19 = [guildId, stateFromStores2, isLoading];
  const memo5 = obj2.useMemo(() => ({ guildId, platform: obj2, busy: null == stateFromStores2 || isLoading }), items19);
  const tmp77 = projectId(navigation[73])(projectId, memo5);
  closure_39 = tmp77;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items20 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    obj2 = {
      content: closure_2_26(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items20);
  const items21 = [guildId, navigation];
  memo6 = obj2.useMemo(() => {
    const f147800 = (projectId) => navigation.push(memo2.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        guildId(stateFromStoresArray[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
        const obj = guildId(stateFromStoresArray[27]);
      }
    };
  }, items21);
  const items22 = [guildId, memo6, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo6 };
      obj2.content = closure_2_26(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items22);
  const items23 = [projectId];
  callback5 = obj2.useCallback(() => {
    obj2 = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: closure_2_26(ConjureConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items23);
  closure_45 = obj2.useRef(false);
  _require = tmp32(function* (arg0) {
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
        const obj8 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
        const intl2 = closure_0(navigation[32]).intl;
        obj8.content = intl2.string(projectId(navigation[33]).qqlUiW);
        obj8.IconComponent = closure_0(navigation[75]).UndoIcon;
        projectId(navigation[24]).open(obj8);
        c5 = 2;
        c6 = 4;
        c7 = 1;
        return { value: activeMode(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(navigation[32]).intl;
      closure_0(navigation[76]).presentError(intl.string(projectId(navigation[33])["PSdo+w"]));
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
          const obj12 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
          const intl3 = closure_0(navigation[32]).intl;
          const obj15 = { title: null };
          obj15.title = closure_0(navigation[77]).versionTitle(closure_130_0.subject).short;
          obj12.content = intl3.formatToPlainString(projectId(navigation[33]).Z4n6LX, obj15);
          obj12.IconComponent = closure_0(navigation[75]).UndoIcon;
          projectId(navigation[24]).open(obj12);
          closure_0(navigation[77]);
          projectId(navigation[24]);
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
          closure_0(navigation[76]).presentError(closure_130_2);
          closure_0(navigation[76]);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(navigation[78]).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp56 = closure_1;
    if (closure_1 === undefined) {
      tmp56 = null;
    }
    closure_130_1 = tmp56;
    return "Reflect";
  });
  const items24 = [projectId];
  callback6 = obj2.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items24);
  const items25 = [callback6, ,];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items25[1] = install_scope1;
  items25[2] = projectId;
  callback7 = obj2.useCallback(() => {
    obj2 = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: null };
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
    obj2.content = closure_2_26(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items25);
  const DeveloperMode = tmp(tmp2[80]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items26 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(memo2.DEBUG, { projectId }), items26);
  const items27 = [frameSurface];
  const memo7 = obj2.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(undefined, frameSurface), items27);
  const tmp88 = isLaunched(projectId(navigation[82])(previewAppId, memo7));
  closure_50 = tmp88;
  const items28 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartConjureAppFramesDefault(tmp);
    }
  }, items28);
  const items29 = [navigation, projectId];
  callback10 = obj2.useCallback(() => {
    closure_2_15(projectId);
    navigation.goBack();
  }, items29);
  let obj12 = { items: memo3, pageWidth: projectId(navigation[70])().width - 2 * memo1, onSetActiveIndex: callback2 };
  const items30 = [tmp11];
  const items31 = [projectId];
  stateFromStores3 = require("initialize").useStateFromStores(
    items30,
    () => ConjureProjectStore.isProjectDeleting(projectId),
    items31,
  );
  const items32 = [stateFromStores3, callback10];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores3) {
      callback10();
    }
  }, items32);
  const obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult21 = require("initialize");
  let tmp94 = null;
  if (modes2.includes("widget")) {
    tmp94 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp94 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp94;
  const tmp4Result2Result = projectId(navigation[84])(obj13);
  preview = tmp4Result2Result;
  const tmp4Result5 = projectId(navigation[84]);
  isConjureProjectMuted = require("conjureProjectMute").useIsConjureProjectMuted(projectId);
  const tmpResult22 = require("conjureProjectMute");
  conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(projectId);
  const items33 = [
    setting,
    guildId,
    isConjureProjectMuted,
    callback10,
    callback5,
    callback8,
    callback4,
    callback3,
    callback7,
    callback9,
    tmp88,
    tmp4Result2Result,
    stateFromStores,
    tmp77,
    conjureRemoveTarget,
  ];
  memo8 = obj2.useMemo(() => {
    const items = [];
    if (null != disabledReason) {
      const obj = {
        label: tmp.label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
          if (null != disabledReason.disabledReason) {
            const obj3 = { key: "VIBEGRATIONS_PUBLISH_NEEDS_PERMISSIONS", content: disabledReason.disabledReason };
            projectId(navigation[24]).open(obj3);
            obj2 = projectId(navigation[24]);
          } else if (!disabledReason.disabled) {
            disabledReason.run("header");
          }
        },
      };
      items.push(obj);
    }
    obj2 = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3827.I2XSKe);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback3;
    items.push(obj2);
    if (setting) {
      let obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3827["Q4FN+H"]);
      obj3.IconComponent = BugIcon.BugIcon;
      obj3.action = callback8;
      items.push(obj3);
    }
    if (null != stateFromStores) {
      const obj6 = {
        project: tmp14,
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
      let tmp15;
      if (closure_50) {
        tmp15 = callback9;
      }
      obj6.onRefresh = tmp15;
      obj6.onClose = callback10;
      obj6.preview = preview;
      const result = conjureProjectActions.conjureProjectActions(obj6);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj10 = { label: null, IconComponent: null, variant: null, action: null };
        ({ label: obj4.label, IconComponent: obj4.IconComponent } = nextResult);
        let str2;
        let tmp23 = nextResult;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        obj10.variant = str2;
        obj10.action = tmp23.action;
        let arr7 = items.push(obj10);
        continue;
      }
    }
    return items;
  }, items33);
  const items34 = [
    conjureControlActive,
    active,
    stringResult,
    tmp48,
    callback1,
    navigation,
    memo8,
    projectExists,
    projectName,
    stateFromStores1,
    tmp5,
  ];
  const effect4 = obj2.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
          return closure_3_26(NavigatorHeader.NavigatorHeader, { title });
        },
        headerRight() {
          let tmp = null;
          if (projectExists) {
            let obj = { style: headerActions.headerActions, children: null };
            if (!closure_1_24) {
              items = [null];
              obj2 = {
                items,
                align: "below",
                children(arg0) {
                  ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                  const obj = {
                    ref,
                    IconComponent: title(9180).MoreHorizontalIcon,
                    onPress,
                    accessibilityLabel: null,
                    accessibilityActions: null,
                    onAccessibilityAction: null,
                  };
                  const intl = title(1126).intl;
                  obj.accessibilityLabel = intl.string(title(1126).t["UKOtz+"]);
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  return selected(closure_1_1(16846), obj);
                },
              };
              items[1] = active(title(navigation[89]).ContextMenu, obj2);
              obj.children = items;
              tmp = tmp2(tmp3, obj);
            } else {
              if (selected) {
                let ExperimentalDirectSelectIcon = closure_29;
              } else {
                ExperimentalDirectSelectIcon = title(navigation[19]).ExperimentalDirectSelectIcon;
              }
              const obj3 = {
                IconComponent: ExperimentalDirectSelectIcon,
                onPress,
                accessibilityLabel,
                accessibilityState: null,
                disabled: null,
              };
              const obj4 = { selected };
              obj3.accessibilityState = obj4;
              obj3.disabled = disabled;
              active(projectId(navigation[37]), obj3);
              const tmp10 = projectId(navigation[37]);
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
          let uk6jhJ = projectId(tmp2[33]).G1WwgK;
        }
        tmp3(uk6jhJ);
      }
      tmp2 = projectId(tmp2[33]);
      uk6jhJ = tmp2.uk6jhJ;
    }
  }, items34);
  const items35 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
    return () => closure_0(navigation[53]).setSelectedProjectForGuild(closure_1_0, null);
  }, items35);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items36 = [tmp5.contentBare, animatedStyle];
    obj14.style = items36;
    let tmp108 = null;
    if (tmp45) {
      let obj15 = { style: tmp5.segments, children: null };
      const obj16 = { state: segmentedControlState, extras: memo4 };
      obj15.children = active(tmp4(tmp2[90]), obj16);
      tmp108 = active(projectName, obj15);
    }
    const items37 = [tmp108];
    const obj17 = { style: tmp5.panes, children: null };
    let tmp113Result = null;
    if (hasItem) {
      tmp113Result = null;
      if (null != previewAppId) {
        const obj18 = {
          style: tmp48 ? tmp5.pane : tmp5.paneBackstage,
          pointerEvents: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
        let str5 = "none";
        if (tmp48) {
          str5 = "auto";
        }
        obj18.pointerEvents = str5;
        obj18.accessibilityElementsHidden = !tmp48;
        let str6 = "no-hide-descendants";
        if (tmp48) {
          str6 = "auto";
        }
        obj18.importantForAccessibility = str6;
        const obj19 = {
          applicationId: previewAppId,
          projectId,
          frameSurface,
          visible: tmp48,
          onOpenPublishedApp: memo,
        };
        obj18.children = active(tmp(tmp2[72]).PreviewFrame, obj19);
        tmp113Result = tmp113(tmp111, obj18);
      }
    }
    const items38 = [tmp113Result, ,];
    let tmp115Result = null;
    if (paneHidden) {
      tmp115Result = null;
      if (null != previewAppId) {
        tmp115Result = null;
        if (!tmp48) {
          const obj20 = { style: tmp5.pane, children: null };
          const obj21 = {
            projectId,
            previewApplicationId: previewAppId,
            mode: activeMode,
            availability,
            frameSurface,
            widgetApplicationId,
            frameHostAvailable: tmp30,
            permissionsGate: null,
          };
          const tmp4Result6 = tmp4(tmp2[72]);
          let tmp117 = null;
          if (tmpResult24.permissionReviewBlocksMode(activeMode, result)) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
            tmp117 = obj22;
          }
          obj21.permissionsGate = tmp117;
          obj20.children = active(tmp4Result6, obj21);
          tmp115Result = tmp115(tmp111, obj20);
          tmpResult24 = tmp(tmp2[61]);
        }
      }
    }
    items38[1] = tmp115Result;
    const items39 = [tmp5.chatPane, ,];
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items39[1] = paneHidden;
    items39[2] = animatedStyle1;
    obj23.style = items39;
    const obj24 = { value: memo5, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6 };
    obj24.children = active(tmp4(tmp2[91]), obj25);
    obj23.children = active(tmp(tmp2[73]).ConjurePublishActionContext.Provider, obj24);
    items38[2] = active(tmp4(tmp2[58]).View, obj23);
    obj17.children = items38;
    items37[1] = conjureControlActive(projectName, obj17);
    obj14.children = items37;
    let tmp101Result1 = tmp107(tmp4(tmp2[58]).View, obj14);
  } else {
    const obj26 = { style: null, children: null };
    const items40 = [,];
    ({ content: arr38[0], centered: arr38[1] } = tmp5);
    obj26.style = items40;
    if (stateFromStores1) {
      let tmp101Result = tmp101(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl3 = tmp(tmp2[32]).intl;
      obj28.children = intl3.string(tmp4(tmp2[33]).G1WwgK);
      const items41 = [tmp101(tmp(tmp2[51]).Text, obj28), ,];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl4 = tmp(tmp2[32]).intl;
      obj29.children = intl4.string(tmp4(tmp2[33]).fINulo);
      items41[1] = tmp101(tmp(tmp2[51]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl5 = tmp(tmp2[32]).intl;
      obj30.text = intl5.string(tmp4(tmp2[33])["WFJ/vb"]);
      obj30.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items41[2] = tmp101(tmp(tmp2[52]).Button, obj30);
      obj27.children = items41;
      tmp101Result = conjureControlActive(tmp102, obj27);
    }
    obj26.children = tmp101Result;
    tmp101Result1 = tmp101(tmp102, obj26);
  }
  return tmp101Result1;
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: metroRequire,
  Keyboard: closure_7,
  ScrollView: closure_8,
  View: closure_9,
} = get_ActivityIndicator);
const ConjureConnectionStore = fn(13072);
({ closeConnection: closure_15, restoreSourceHistoryEntry: closure_16 } = ConjureConnectionStore);
const conjureDesignFeedbackStore = fn(16838);
({
  enterConjureDesignFeedback: closure_17,
  exitConjureDesignFeedback: closure_18,
  useConjureDesignFeedback: closure_19,
} = conjureDesignFeedbackStore);
const Constants = fn(1085);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = fn(2070).StaticChannelRoute;
let isLaunched = fn(10613).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureSelectModeActiveIcon() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        obj2 = { color: nativeDefault.colors.TEXT_BRAND };
        const tmp7 = closure_1_26(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function ConjureSelectModeActiveIcon() {
      return closure_1_26(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, {
        color: nativeDefault.colors.TEXT_BRAND,
      });
    };
let obj2 = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const obj = ActionSheetActionCreators;
    obj.showActionSheet({
      content: closure_1_26(ConjurePublishNotesSheetDefault, {
        guildId,
        applicationId,
        projectName,
        publish,
        initialDraft,
      }),
      key: ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY,
    });
  },
  showError(content) {
    return ToastActionCreatorsDefault.open({ key: "CONJURE_PUBLISH_FAILED", content });
  },
  openProfile(userId) {
    showUserProfileActionSheetDefault({ userId });
  },
};
const createStyles = fn(5090);
let closure_31 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    contentBare: null,
    centered: null,
    listContent: null,
    section: null,
    projectRowTrailing: null,
    unreadPill: null,
    sectionHeading: null,
    listError: null,
    headerActions: null,
    segments: null,
    panes: null,
    pane: null,
    chatPane: null,
    paneHidden: null,
    paneBackstage: null,
  };
  obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.contentBare = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  const obj5 = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj6 = { gap: nativeDefault.space.PX_8 };
  obj.projectRowTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const size = {
    position: "absolute",
    left: 0,
    top: "50%",
    width: nativeDefault.space.PX_4,
    height: nativeDefault.space.PX_8,
    marginTop: -nativeDefault.space.PX_4,
    borderTopRightRadius: nativeDefault.radii.xs,
    borderBottomRightRadius: nativeDefault.radii.xs,
    backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
  };
  obj.unreadPill = size;
  const obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj8 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj9 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.segments = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
  obj.panes = { flex: 1, overflow: "hidden" };
  obj.pane = { flex: 1 };
  obj.chatPane = { flex: 1, paddingBottom };
  obj.paneHidden = { display: "none" };
  obj.paneBackstage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProjectRow(project) {
      const cResult = project(576).c(35);
      project = project.project;
      ({ onPress, onMore } = project);
      const tmp4 = closure_31(0);
      const obj = project(576);
      const conjureProjectUnreadStatus = project(16441).useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      obj2 = project(16441);
      const data = project(6842).useApplication(application_id).data;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== project.id) {
        const fn = function n() {
          return ConjureProjectStore.isProjectDeleting(project.id);
        };
        const items1 = [project.id];
        cResult[1] = project.id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = project(6842);
      const stateFromStores = project(504).useStateFromStores(first, tmp8, tmp9);
      const tmp11 =
        conjureProjectUnreadStatus === project(16442).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
      if (cResult[4] !== project.updated_at) {
        let formatToPlainStringResult;
        if (null != project.updated_at) {
          const intl = tmp(1126).intl;
          const obj3 = { time: null };
          const _Date = Date;
          const date = new Date(project.updated_at);
          obj3.time = tmp(6064).getRelativeTimestamp(date.getTime());
          formatToPlainStringResult = intl.formatToPlainString(_modDef3827.AXydi3, obj3);
          const tmpResult4 = tmp(6064);
        }
        cResult[4] = project.updated_at;
        cResult[5] = formatToPlainStringResult;
        let tmp12 = formatToPlainStringResult;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === tmp12) {
          let tmp18 = cResult[8];
        }
        if (cResult[9] !== tmp11) {
          let stringResult;
          if (tmp11) {
            const intl3 = tmp(1126).intl;
            stringResult = intl3.string(_modDef3827.hfIuc7);
          }
          cResult[9] = tmp11;
          cResult[10] = stringResult;
          let tmp21 = stringResult;
        } else {
          tmp21 = cResult[10];
        }
        let icon;
        if (data != null) {
          icon = data.icon;
        }
        if (cResult[11] === application_id) {
          if (cResult[12] === icon) {
            let tmp25 = cResult[13];
          }
          if (cResult[14] === stateFromStores) {
            if (cResult[15] === tmp11) {
              if (cResult[16] === onMore) {
                if (cResult[17] === tmp4) {
                  if (cResult[19] === stateFromStores) {
                    if (cResult[20] === onMore) {
                      if (cResult[21] === onPress) {
                        if (cResult[22] === project.name) {
                          if (cResult[23] === tmp18) {
                            if (cResult[24] === tmp21) {
                              if (cResult[25] === tmp25) {
                                if (cResult[26] === tmp29) {
                                  let tmp42 = cResult[27];
                                }
                                if (cResult[28] === stateFromStores) {
                                  if (cResult[29] === tmp4) {
                                    if (cResult[30] === conjureProjectUnreadStatus) {
                                      let tmp45 = cResult[31];
                                    }
                                    if (cResult[32] === tmp42) {
                                      if (cResult[33] === tmp45) {
                                        let tmp49 = cResult[34];
                                      }
                                      return tmp49;
                                    }
                                    const obj4 = { children: null };
                                    const items2 = [tmp42, tmp45];
                                    obj4.children = items2;
                                    const tmp52 = closure_27(closure_9, obj4);
                                    cResult[32] = tmp42;
                                    cResult[33] = tmp45;
                                    cResult[34] = tmp52;
                                    tmp49 = tmp52;
                                  }
                                }
                                let tmp46 = null;
                                if (null != conjureProjectUnreadStatus) {
                                  tmp46 = null;
                                  if (!stateFromStores) {
                                    const obj5 = {
                                      style: tmp4.unreadPill,
                                      pointerEvents: "none",
                                      accessibilityElementsHidden: true,
                                      importantForAccessibility: "no",
                                    };
                                    tmp46 = closure_26(closure_9, obj5);
                                  }
                                }
                                cResult[28] = stateFromStores;
                                cResult[29] = tmp4;
                                cResult[30] = conjureProjectUnreadStatus;
                                cResult[31] = tmp46;
                                tmp45 = tmp46;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj6 = {
                    label: project.name,
                    subLabel: tmp18,
                    accessibilityHint: tmp21,
                    disabled: stateFromStores,
                    icon: tmp25,
                    trailing: cResult[18],
                    onPress,
                    onLongPress: onMore,
                  };
                  const tmp44 = closure_26(tmp(6184).TableRow, obj6);
                  cResult[19] = stateFromStores;
                  cResult[20] = onMore;
                  cResult[21] = onPress;
                  cResult[22] = project.name;
                  cResult[23] = tmp18;
                  cResult[24] = tmp21;
                  cResult[25] = tmp25;
                  cResult[26] = cResult[18];
                  cResult[27] = tmp44;
                  tmp42 = tmp44;
                }
              }
            }
          }
          if (stateFromStores) {
            let tmp30Result = closure_26(closure_6, {});
          } else {
            const obj7 = { style: tmp4.projectRowTrailing, children: null };
            let tmp32 = null;
            if (tmp11) {
              tmp32 = closure_26(MentionsBadgeDefault, { mentionsCount: 1 });
            }
            const items3 = [tmp32];
            const obj8 = { IconComponent: tmp(9180).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
            const intl4 = tmp(1126).intl;
            obj8.accessibilityLabel = intl4.string(tmp(1126).t["UKOtz+"]);
            items3[1] = closure_26(ConjureHeaderIconButtonDefault, obj8);
            obj7.children = items3;
            tmp30Result = closure_27(closure_9, obj7);
          }
          cResult[14] = stateFromStores;
          cResult[15] = tmp11;
          cResult[16] = onMore;
          cResult[17] = tmp4;
          cResult[18] = tmp30Result;
        }
        const obj9 = { application: null };
        const obj10 = { id: application_id, icon };
        obj9.application = obj10;
        const tmp28 = closure_26(TableRowApplicationIconDefault, obj9);
        cResult[11] = application_id;
        cResult[12] = icon;
        cResult[13] = tmp28;
        tmp25 = tmp28;
      }
      let stringResult1 = tmp12;
      if (stateFromStores) {
        const intl2 = tmp(1126).intl;
        stringResult1 = intl2.string(_modDef3827.Yh5pAc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = tmp12;
      cResult[8] = stringResult1;
      tmp18 = stringResult1;
      const tmpResult3 = project(504);
    }
  : function ProjectRow(project) {
      project = project.project;
      const onMore = project.onMore;
      const tmp = closure_31(0);
      const conjureProjectUnreadStatus = project(16441).useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      const obj = project(16441);
      const data = project(6842).useApplication(application_id).data;
      const tmp2Result = project(6842);
      const items = [ConjureProjectStore];
      const items1 = [project.id];
      const stateFromStores = project(504).useStateFromStores(
        items,
        () => ConjureProjectStore.isProjectDeleting(project.id),
        items1,
      );
      let tmp6 = conjureProjectUnreadStatus === tmp2(16442).VibegrationsReadStateFlags.NEEDS_INPUT;
      if (tmp6) {
        tmp6 = !stateFromStores;
      }
      let formatToPlainStringResult;
      if (null != project.updated_at) {
        const intl = tmp2(1126).intl;
        obj2 = { time: null };
        const _Date = Date;
        const date = new Date(project.updated_at);
        obj2.time = tmp2(6064).getRelativeTimestamp(date.getTime());
        formatToPlainStringResult = intl.formatToPlainString(_modDef3827.AXydi3, obj2);
        const tmp2Result4 = tmp2(6064);
      }
      const obj3 = {
        label: project.name,
        subLabel: null,
        accessibilityHint: null,
        disabled: null,
        icon: null,
        trailing: null,
        onPress: null,
        onLongPress: null,
      };
      if (stateFromStores) {
        const intl2 = tmp2(1126).intl;
        formatToPlainStringResult = intl2.string(_modDef3827.Yh5pAc);
      }
      obj3.subLabel = formatToPlainStringResult;
      let stringResult;
      if (tmp6) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(_modDef3827.hfIuc7);
      }
      obj3.accessibilityHint = stringResult;
      obj3.disabled = stateFromStores;
      const obj4 = { id: application_id, icon: null };
      let icon;
      const tmp2Result3 = project(504);
      if (data != null) {
        icon = data.icon;
      }
      obj4.icon = icon;
      obj3.icon = closure_26(TableRowApplicationIconDefault, { application: obj4 });
      if (stateFromStores) {
        let tmp13Result = closure_26(closure_6, {});
      } else {
        const obj5 = { style: tmp.projectRowTrailing, children: null };
        let tmp15Result3 = null;
        if (tmp6) {
          tmp15Result3 = closure_26(MentionsBadgeDefault, { mentionsCount: 1 });
        }
        const items2 = [tmp15Result3];
        const obj6 = { IconComponent: tmp2(9180).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
        const intl4 = tmp2(1126).intl;
        obj6.accessibilityLabel = intl4.string(tmp2(1126).t["UKOtz+"]);
        items2[1] = closure_26(ConjureHeaderIconButtonDefault, obj6);
        obj5.children = items2;
        tmp13Result = closure_27(closure_9, obj5);
        const tmp19Result = ConjureHeaderIconButtonDefault;
      }
      obj3.trailing = tmp13Result;
      obj3.onPress = project.onPress;
      obj3.onLongPress = onMore;
      const children = [closure_26(project(6184).TableRow, obj3)];
      let tmp15Result4 = null;
      if (null != conjureProjectUnreadStatus) {
        tmp15Result4 = null;
        if (!stateFromStores) {
          const obj7 = {
            style: tmp.unreadPill,
            pointerEvents: "none",
            accessibilityElementsHidden: true,
            importantForAccessibility: "no",
          };
          tmp15Result4 = closure_26(closure_9, obj7);
        }
      }
      children[1] = tmp15Result4;
      return closure_27(closure_9, { children });
    };
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProjectList(guildId) {
      const cResult = guildId(576).c(75);
      guildId = guildId.guildId;
      const bottom = navigation(1630)().bottom;
      closure_31(0);
      let obj = guildId(576);
      navigation = guildId(1502).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        const fn = function o() {
          return ConjureProjectStore.getOwnedProjects();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp6 = items;
        tmp7 = fn;
        tmp8 = items1;
      } else {
        [tmp6, tmp7, tmp8] = cResult;
      }
      obj2 = guildId(1502);
      const stateFromStoresArray = guildId(504).useStateFromStoresArray(tmp6, tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[3] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        const fn2 = function b() {
          return ConjureProjectStore.getSharedProjects(guildId);
        };
        const items3 = [guildId];
        cResult[4] = guildId;
        cResult[5] = fn2;
        cResult[6] = items3;
        let tmp13 = items3;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult = guildId(504);
      const stateFromStoresArray1 = guildId(504).useStateFromStoresArray(tmp10, tmp12, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [ConjureProjectStore];
        const fn3 = function y() {
          return ConjureProjectStore.getProjectsFetchState();
        };
        const items5 = [];
        cResult[7] = items4;
        cResult[8] = fn3;
        cResult[9] = items5;
        let tmp16 = items5;
        let tmp15 = fn3;
        let tmp14 = items4;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
        tmp16 = cResult[9];
      }
      const tmpResult3 = guildId(504);
      const stateFromStores = guildId(504).useStateFromStores(tmp14, tmp15, tmp16);
      if (cResult[10] === stateFromStoresArray) {
        if (cResult[11] === guildId) {
          if (cResult[16] !== stateFromStoresArray1) {
            const _Symbol = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(arg0, arg1) {
                  num = 1;
                  if (null != guildId.updated_at) {
                    tmp = arg1;
                    num2 = -1;
                    if (null != arg1.updated_at) {
                      updated_at = arg1.updated_at;
                      num2 = updated_at.localeCompare(guildId.updated_at);
                    }
                    num = num2;
                  }
                  return num;
                }
              }
              cResult[18] = O;
            } else {
              class O {
                constructor(arg0, arg1) {
                  num = 1;
                  if (null != guildId.updated_at) {
                    tmp = arg1;
                    num2 = -1;
                    if (null != arg1.updated_at) {
                      updated_at = arg1.updated_at;
                      num2 = updated_at.localeCompare(guildId.updated_at);
                    }
                    num = num2;
                  }
                  return num;
                }
              }
            }
            const substr = stateFromStoresArray1.slice();
            const sorted = substr.sort(O);
            cResult[16] = stateFromStoresArray1;
            cResult[17] = sorted;
          } else {
            class O {
              constructor(arg0, arg1) {
                num = 1;
                if (null != guildId.updated_at) {
                  tmp = arg1;
                  num2 = -1;
                  if (null != arg1.updated_at) {
                    updated_at = arg1.updated_at;
                    num2 = updated_at.localeCompare(guildId.updated_at);
                  }
                  num = num2;
                }
                return num;
              }
            }
            if (cResult[19] !== navigation) {
              class M {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_33.CHAT, obj);
                }
              }
              cResult[19] = navigation;
              cResult[20] = M;
            } else {
              class M {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_33.CHAT, obj);
                }
              }
            }
            dependencyMap = M;
            if (cResult[21] === guildId) {
              class M {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_33.CHAT, obj);
                }
              }
              asyncGeneratorStep = tmp27;
              if (cResult[24] === guildId) {
                class M {
                  constructor(arg0) {
                    obj = { projectId: guildId };
                    return closure_1.push(closure_33.CHAT, obj);
                  }
                }
                _slicedToArray = X;
                if (cResult[27] === guildId) {
                  class M {
                    constructor(arg0) {
                      obj = { projectId: guildId };
                      return closure_1.push(closure_33.CHAT, obj);
                    }
                  }
                  noop = V;
                  if (cResult[30] === guildId) {
                    class M {
                      constructor(arg0) {
                        obj = { projectId: guildId };
                        return closure_1.push(closure_33.CHAT, obj);
                      }
                    }
                  }
                  class Y {
                    constructor(arg0) {
                      closure_0 = guildId;
                      obj = guildId(closure_2[45]);
                      obj1 = {
                        project: guildId,
                        guildId: closure_0,
                        muted: null,
                        removeTarget: null,
                        openChat: null,
                        onRemix: null,
                        onOpenSettings: null,
                      };
                      obj3 = guildId(closure_2[46]);
                      obj1.muted = obj3.isConjureProjectMuted(closure_1_11.settings, guildId.id);
                      obj4 = guildId(closure_2[47]);
                      obj1.removeTarget = obj4.readConjureRemoveTarget(guildId);
                      obj1.openChat = function openChat() {
                        return closure_2(project.id);
                      };
                      obj1.onRemix = function onRemix() {
                        return closure_5(closure_0);
                      };
                      obj1.onOpenSettings = function onOpenSettings() {
                        obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
                        const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
                        let guild_id = project.guild_id;
                        const obj = ActionSheetActionCreators;
                        if (guild_id == null) {
                          guild_id = guildId;
                        }
                        obj3.guildId = guild_id;
                        obj2.content = closure_3_26(ConjureSettingsSheetDefault, obj3);
                        return obj.showActionSheet(obj2);
                      };
                      result = obj.conjureProjectActions(obj1);
                      obj5 = guildId(closure_2[49]);
                      obj7 = {
                        key: "VibegrationsProjectActions",
                        header: { title: guildId.name },
                        hasIcons: true,
                        options: result.map((label) => ({
                          label: label.label,
                          IconComponent: label.IconComponent,
                          isDestructive: label.destructive,
                          onPress: label.action,
                        })),
                      };
                      result1 = obj5.showSimpleActionSheet(obj7);
                      return;
                    }
                  }
                  cResult[30] = guildId;
                  cResult[31] = M;
                  cResult[32] = V;
                  cResult[33] = Y;
                }
                class V {
                  constructor(arg0) {
                    obj = closure_0(closure_2[22]);
                    obj1 = { key: closure_0(closure_2[44]).CONJURE_REMIX_SHEET_KEY, content: null };
                    obj4 = { project: guildId, currentGuildId: guildId, onRemixed: closure_3 };
                    obj1.content = jsx(closure_1(closure_2[44]), obj4);
                    showActionSheetResult = obj.showActionSheet(obj1);
                    return;
                  }
                }
                cResult[27] = guildId;
                cResult[28] = tmp27;
                cResult[29] = V;
              }
              class X {
                constructor() {
                  obj = closure_0(closure_2[22]);
                  obj1 = { key: closure_0(closure_2[43]).CONJURE_CREATE_SHEET_KEY, content: null };
                  obj4 = { guildId, onCreated: closure_3 };
                  obj1.content = jsx(closure_1(closure_2[43]), obj4);
                  showActionSheetResult = obj.showActionSheet(obj1);
                  return;
                }
              }
              cResult[24] = guildId;
              cResult[25] = tmp27;
              cResult[26] = X;
            }
            closure_129_0 = guildId;
            closure_129_1 = M;
            const fn4 = (arg0, arg1) => {
              if (arg1 === closure_0) {
                closure_1(arg0);
              } else {
                guildId(stateFromStoresArray[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
                const obj = guildId(stateFromStoresArray[27]);
              }
            };
            cResult[21] = guildId;
            cResult[22] = M;
            cResult[23] = fn4;
          }
        }
      }
      if (cResult[13] !== guildId) {
        class M {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_33.CHAT, obj);
          }
        }
        cResult[13] = guildId;
        class Y {
          constructor(arg0) {
            closure_0 = guildId;
            obj = guildId(closure_2[45]);
            obj1 = {
              project: guildId,
              guildId: closure_0,
              muted: null,
              removeTarget: null,
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            obj3 = guildId(closure_2[46]);
            obj1.muted = obj3.isConjureProjectMuted(closure_1_11.settings, guildId.id);
            obj4 = guildId(closure_2[47]);
            obj1.removeTarget = obj4.readConjureRemoveTarget(guildId);
            obj1.openChat = function openChat() {
              return closure_2(project.id);
            };
            obj1.onRemix = function onRemix() {
              return closure_5(closure_0);
            };
            obj1.onOpenSettings = function onOpenSettings() {
              obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
              const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
              let guild_id = project.guild_id;
              const obj = ActionSheetActionCreators;
              if (guild_id == null) {
                guild_id = guildId;
              }
              obj3.guildId = guild_id;
              obj2.content = closure_3_26(ConjureSettingsSheetDefault, obj3);
              return obj.showActionSheet(obj2);
            };
            result = obj.conjureProjectActions(obj1);
            obj5 = guildId(closure_2[49]);
            obj7 = {
              key: "VibegrationsProjectActions",
              header: { title: guildId.name },
              hasIcons: true,
              options: result.map((label) => ({
                label: label.label,
                IconComponent: label.IconComponent,
                isDestructive: label.destructive,
                onPress: label.action,
              })),
            };
            result1 = obj5.showSimpleActionSheet(obj7);
            return;
          }
        }
        cResult[14] = R;
        let found = R;
      } else {
        class M {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_33.CHAT, obj);
          }
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_33.CHAT, obj);
          }
        }
        cResult[15] = tmp21;
        class Y {
          constructor(arg0) {
            closure_0 = guildId;
            obj = guildId(closure_2[45]);
            obj1 = {
              project: guildId,
              guildId: closure_0,
              muted: null,
              removeTarget: null,
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            obj3 = guildId(closure_2[46]);
            obj1.muted = obj3.isConjureProjectMuted(closure_1_11.settings, guildId.id);
            obj4 = guildId(closure_2[47]);
            obj1.removeTarget = obj4.readConjureRemoveTarget(guildId);
            obj1.openChat = function openChat() {
              return closure_2(project.id);
            };
            obj1.onRemix = function onRemix() {
              return closure_5(closure_0);
            };
            obj1.onOpenSettings = function onOpenSettings() {
              obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
              const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
              let guild_id = project.guild_id;
              const obj = ActionSheetActionCreators;
              if (guild_id == null) {
                guild_id = guildId;
              }
              obj3.guildId = guild_id;
              obj2.content = closure_3_26(ConjureSettingsSheetDefault, obj3);
              return obj.showActionSheet(obj2);
            };
            result = obj.conjureProjectActions(obj1);
            obj5 = guildId(closure_2[49]);
            obj7 = {
              key: "VibegrationsProjectActions",
              header: { title: guildId.name },
              hasIcons: true,
              options: result.map((label) => ({
                label: label.label,
                IconComponent: label.IconComponent,
                isDestructive: label.destructive,
                onPress: label.action,
              })),
            };
            result1 = obj5.showSimpleActionSheet(obj7);
            return;
          }
        }
      } else {
        class M {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_33.CHAT, obj);
          }
        }
      }
      found = stateFromStoresArray.filter(found);
      const sorted1 = found.sort(tmp20);
      cResult[10] = stateFromStoresArray;
      cResult[11] = guildId;
      cResult[12] = sorted1;
      const tmpResult4 = guildId(504);
    }
  : function ProjectList(guildId) {
      guildId = guildId.guildId;
      let navigation;
      let stateFromStoresArray;
      let memo2;
      const bottom = navigation(stateFromStoresArray[40])().bottom;
      const tmp3 = closure_31(0);
      navigation = guildId(stateFromStoresArray[41]).useNavigation();
      let obj = guildId(stateFromStoresArray[41]);
      const items = [ConjureProjectStore];
      stateFromStoresArray = guildId(stateFromStoresArray[30]).useStateFromStoresArray(
        items,
        () => ConjureProjectStore.getOwnedProjects(),
        [],
      );
      obj2 = guildId(stateFromStoresArray[30]);
      const items1 = [ConjureProjectStore];
      const items2 = [guildId];
      const stateFromStoresArray1 = guildId(stateFromStoresArray[30]).useStateFromStoresArray(
        items1,
        () => ConjureProjectStore.getSharedProjects(guildId),
        items2,
      );
      let obj3 = guildId(stateFromStoresArray[30]);
      const items3 = [ConjureProjectStore];
      const stateFromStores = guildId(stateFromStoresArray[30]).useStateFromStores(
        items3,
        () => ConjureProjectStore.getProjectsFetchState(),
        [],
      );
      const items4 = [stateFromStoresArray, guildId];
      const memo = memo2.useMemo(() => {
        const found = stateFromStoresArray.filter((item) =>
          guildId(stateFromStoresArray[42]).isConjureProjectInGuild(item, closure_1_0),
        );
        return found.sort((updated_at, updated_at2) => {
          let num = 1;
          if (null != updated_at.updated_at) {
            let num2 = -1;
            if (null != updated_at2.updated_at) {
              updated_at = updated_at2.updated_at;
              num2 = updated_at.localeCompare(updated_at.updated_at);
            }
            num = num2;
          }
          return num;
        });
      }, items4);
      const items5 = [stateFromStoresArray1];
      const memo1 = memo2.useMemo(() => {
        const substr = stateFromStoresArray1.slice();
        return substr.sort((updated_at, updated_at2) => {
          let num = 1;
          if (null != updated_at.updated_at) {
            let num2 = -1;
            if (null != updated_at2.updated_at) {
              updated_at = updated_at2.updated_at;
              num2 = updated_at.localeCompare(updated_at.updated_at);
            }
            num = num2;
          }
          return num;
        });
      }, items5);
      const items6 = [navigation];
      const callback = memo2.useCallback((projectId) => navigation.push(constants2.CHAT, { projectId }), items6);
      const items7 = [guildId, callback];
      memo2 = memo2.useMemo(() => {
        closure_0 = guildId;
        closure_1 = callback;
        return (arg0, arg1) => {
          if (arg1 === closure_0) {
            closure_1(arg0);
          } else {
            guildId(stateFromStoresArray[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
            const obj = guildId(stateFromStoresArray[27]);
          }
        };
      }, items7);
      const items8 = [guildId, memo2];
      const callback1 = memo2.useCallback(() => {
        obj2 = {
          key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
          content: closure_2_26(ConjureCreateSheetDefault, { guildId, onCreated: memo2 }),
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items8);
      const items9 = [guildId, memo2];
      const callback2 = memo2.useCallback((project) => {
        obj2 = {
          key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
          content: closure_2_26(ConjureRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items9);
      const items10 = [guildId, callback, callback2];
      closure_8 = memo2.useCallback((project) => {
        guildId = project;
        obj2 = {
          project,
          guildId,
          muted: null,
          removeTarget: null,
          openChat: null,
          onRemix: null,
          onOpenSettings: null,
        };
        let obj = guildId(stateFromStoresArray[45]);
        obj2.muted = guildId(stateFromStoresArray[46]).isConjureProjectMuted(settings.settings, project.id);
        let obj3 = guildId(stateFromStoresArray[46]);
        obj2.removeTarget = guildId(stateFromStoresArray[47]).readConjureRemoveTarget(project);
        obj2.openChat = function openChat() {
          return callback(project.id);
        };
        obj2.onRemix = function onRemix() {
          return callback2(closure_0);
        };
        obj2.onOpenSettings = function onOpenSettings() {
          obj2 = { key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY, content: null };
          const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
          let guild_id = project.guild_id;
          const obj = ActionSheetActionCreators;
          if (guild_id == null) {
            guild_id = guildId;
          }
          obj3.guildId = guild_id;
          obj2.content = closure_3_26(ConjureSettingsSheetDefault, obj3);
          return obj.showActionSheet(obj2);
        };
        const result = obj.conjureProjectActions(obj2);
        const obj4 = guildId(stateFromStoresArray[47]);
        const obj5 = guildId(stateFromStoresArray[49]);
        const result1 = obj5.showSimpleActionSheet({
          key: "VibegrationsProjectActions",
          header: { title: project.name },
          hasIcons: true,
          options: result.map((label) => ({
            label: label.label,
            IconComponent: label.IconComponent,
            isDestructive: label.destructive,
            onPress: label.action,
          })),
        });
      }, items10);
      const items11 = [navigation, callback1];
      const effect = memo2.useEffect(() => {
        navigation.setOptions({
          headerRight() {
            const obj = {
              IconComponent: guildId(stateFromStoresArray[50]).PlusLargeIcon,
              onPress,
              accessibilityLabel: null,
            };
            const intl = guildId(stateFromStoresArray[32]).intl;
            obj.accessibilityLabel = intl.string(guildId(stateFromStoresArray[32]).t.CumH4u);
            return closure_2_26(navigation(stateFromStoresArray[37]), obj);
          },
        });
      }, items11);
      if (tmp14) {
        let obj5 = { style: tmp3.content, children: null };
        const obj6 = {
          contentContainerStyle: null,
          scrollIndicatorInsets: null,
          keyboardShouldPersistTaps: "handled",
          children: null,
        };
        const items12 = [tmp3.listContent];
        const obj7 = { paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom };
        items12[1] = obj7;
        obj6.contentContainerStyle = items12;
        const obj8 = { bottom };
        obj6.scrollIndicatorInsets = obj8;
        const items13 = [closure_26(tmp(tmp2[54]), {}), , ,];
        let tmp23Result = null;
        if (memo.length > 0) {
          const obj9 = { style: tmp3.section, children: null };
          const obj10 = { style: tmp3.sectionHeading, children: null };
          const obj11 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl3 = tmp4(tmp2[32]).intl;
          obj11.children = intl3.string(tmp(tmp2[33]).dWgSAa);
          const items14 = [closure_26(tmp4(tmp2[51]).Text, obj11)];
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl4 = tmp4(tmp2[32]).intl;
          obj12.children = intl4.string(tmp(tmp2[33]).JQpNkh);
          items14[1] = closure_26(tmp4(tmp2[51]).Text, obj12);
          obj10.children = items14;
          const items15 = [closure_27(closure_9, obj10)];
          const obj13 = {
            hasIcons: true,
            children: memo.map((project) =>
              closure_1_26(
                closure_1_34,
                {
                  project,
                  onPress() {
                    return callback(project.id);
                  },
                  onMore() {
                    return closure_8(closure_0);
                  },
                },
                project.id,
              ),
            ),
          };
          items15[1] = closure_26(tmp4(tmp2[55]).TableRowGroup, obj13);
          obj9.children = items15;
          tmp23Result = closure_27(closure_9, obj9);
        }
        items13[1] = tmp23Result;
        let tmp23Result2 = null;
        if (memo1.length > 0) {
          const obj14 = { style: tmp3.section, children: null };
          const obj15 = { style: tmp3.sectionHeading, children: null };
          const obj16 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl5 = tmp4(tmp2[32]).intl;
          obj16.children = intl5.string(tmp(tmp2[33])["wFi8+o"]);
          const items16 = [closure_26(tmp4(tmp2[51]).Text, obj16)];
          const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp4(tmp2[32]).intl;
          obj17.children = intl6.string(tmp(tmp2[33]).dQ3U1J);
          items16[1] = closure_26(tmp4(tmp2[51]).Text, obj17);
          obj15.children = items16;
          const items17 = [closure_27(closure_9, obj15)];
          const obj18 = {
            hasIcons: true,
            children: memo1.map((project) =>
              closure_1_26(
                closure_1_34,
                {
                  project,
                  onPress() {
                    return callback(project.id);
                  },
                  onMore() {
                    return closure_8(closure_0);
                  },
                },
                project.id,
              ),
            ),
          };
          items17[1] = closure_26(tmp4(tmp2[55]).TableRowGroup, obj18);
          obj14.children = items17;
          tmp23Result2 = closure_27(closure_9, obj14);
        }
        items13[2] = tmp23Result2;
        items13[3] = null;
        obj6.children = items13;
        obj5.children = closure_27(closure_8, obj6);
        return closure_26(closure_9, obj5);
      } else {
        const obj19 = { style: tmp3.centered, children: null };
        if (null != stateFromStores) {
          if ("loading" !== stateFromStores.type) {
            if ("error" === stateFromStores.type) {
              const obj20 = { style: tmp3.listError, children: null };
              const obj21 = { variant: "text-md/normal", color: "text-muted", children: null };
              let intl = tmp4(tmp2[32]).intl;
              obj21.children = intl.string(tmp(tmp2[33]).DJAPMO);
              const items18 = [closure_26(tmp4(tmp2[51]).Text, obj21)];
              const obj22 = { variant: "secondary", size: "sm", text: null, onPress: null };
              const intl2 = tmp4(tmp2[32]).intl;
              obj22.text = intl2.string(tmp(tmp2[33])["WFJ/vb"]);
              obj22.onPress = function onPress() {
                return ConjureActionCreators.listProjects(guildId);
              };
              items18[1] = closure_26(tmp4(tmp2[52]).Button, obj22);
              obj20.children = items18;
              let tmp15Result2 = closure_27(closure_9, obj20);
            } else {
              const obj23 = { style: tmp3.listError, children: null };
              const obj24 = { variant: "text-md/normal", color: "text-muted", children: null };
              const intl7 = tmp4(tmp2[32]).intl;
              obj24.children = intl7.string(tmp(tmp2[33])["9/5sLV"]);
              const items19 = [closure_26(tmp4(tmp2[51]).Text, obj24)];
              const obj25 = { variant: "primary", size: "sm", text: null, onPress: null };
              const intl8 = tmp4(tmp2[32]).intl;
              obj25.text = intl8.string(tmp4(tmp2[32]).t.CumH4u);
              obj25.onPress = callback1;
              items19[1] = closure_26(tmp4(tmp2[52]).Button, obj25);
              obj23.children = items19;
              tmp15Result2 = closure_27(closure_9, obj23);
            }
          }
          obj19.children = tmp15Result2;
          closure_26(closure_9, obj19);
        }
        tmp15Result2 = closure_26(callback1, {});
      }
      let obj4 = guildId(stateFromStoresArray[30]);
      tmp14 = memo.length > 0 || memo1.length > 0;
    };
let closure_36 = {
  code: "function ConjureStandaloneScreenTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}",
};
let closure_37 = {
  code: "function ConjureStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}",
};
let closure_38 = {
  code: "function ConjureStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}",
};
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RoutedProjectOpener(projectId) {
      const cResult = projectId(openedProjectIdRef[18]).c(6);
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      openedProjectIdRef = projectId.openedProjectIdRef;
      let obj = projectId(openedProjectIdRef[18]);
      const navigation = projectId(openedProjectIdRef[41]).useNavigation();
      if (cResult[0] === navigation) {
        if (cResult[1] === openedProjectIdRef) {
          if (cResult[2] === projectId) {
            if (cResult[3] === sceneProjectId) {
              let tmp3 = cResult[4];
              let tmp4 = cResult[5];
            }
            const effect = noop.useEffect(tmp3, tmp4);
            return null;
          }
        }
      }
      const fn = function t() {
        let tmp2 = null != projectId;
        if (tmp2) {
          tmp2 = projectId !== openedProjectIdRef.current;
        }
        if (tmp2) {
          openedProjectIdRef.current = projectId;
          if (projectId !== sceneProjectId) {
            const obj = { projectId };
            navigation.push(constants.CHAT, obj);
          }
        }
      };
      const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
      cResult[0] = navigation;
      cResult[1] = openedProjectIdRef;
      cResult[2] = projectId;
      cResult[3] = sceneProjectId;
      cResult[4] = fn;
      cResult[5] = items;
      tmp4 = items;
      tmp3 = fn;
      obj2 = projectId(openedProjectIdRef[41]);
    }
  : function RoutedProjectOpener(projectId) {
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      const openedProjectIdRef = projectId.openedProjectIdRef;
      const navigation = projectId(openedProjectIdRef[41]).useNavigation();
      const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
      const effect = noop.useEffect(() => {
        let tmp2 = null != projectId;
        if (tmp2) {
          tmp2 = projectId !== openedProjectIdRef.current;
        }
        if (tmp2) {
          openedProjectIdRef.current = projectId;
          if (projectId !== sceneProjectId) {
            const obj = { projectId };
            navigation.push(constants.CHAT, obj);
          }
        }
      }, items);
      return null;
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureStandaloneScreen(guildId) {
      const cResult = guildId(stateFromStores[18]).c(56);
      guildId = guildId.guildId;
      let obj = guildId(stateFromStores[18]);
      const navigation = guildId(stateFromStores[41]).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureBuilderRouteStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function a() {
          const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
          return routedProjectId;
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      obj2 = guildId(stateFromStores[41]);
      stateFromStores = guildId(stateFromStores[30]).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== guildId) {
        class I {
          constructor() {
            return closure_13.getGuild(guildId);
          }
        }
        const items3 = [guildId];
        cResult[5] = guildId;
        cResult[6] = I;
        cResult[7] = items3;
        let tmp13 = items3;
      } else {
        class I {
          constructor() {
            return closure_13.getGuild(guildId);
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult = guildId(stateFromStores[30]);
      const stateFromStores1 = guildId(stateFromStores[30]).useStateFromStores(tmp10, I, tmp13);
      if (cResult[8] !== guildId) {
        class I {
          constructor() {
            return closure_13.getGuild(guildId);
          }
        }
        tmp16[0] = guildId;
        cResult[8] = guildId;
        cResult[9] = tmp16;
      } else {
        class I {
          constructor() {
            return closure_13.getGuild(guildId);
          }
        }
      }
      const tmpResult5 = guildId(stateFromStores[30]);
      const isConjureGuildEnabled = guildId(stateFromStores[92]).useIsConjureGuildEnabled(tmp16);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return closure_13.getGuild(guildId);
          }
        }
        const items4 = [GuildMemberStore];
        cResult[10] = items4;
        const tmp18 = items4;
      } else {
        class I {
          constructor() {
            return closure_13.getGuild(guildId);
          }
        }
      }
      if (cResult[11] !== guildId) {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        const items5 = [guildId];
        cResult[11] = guildId;
        cResult[12] = items5;
        cResult[13] = E;
        let tmp20 = E;
        const tmp19 = items5;
      } else {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        tmp20 = cResult[13];
      }
      const tmpResult6 = guildId(stateFromStores[92]);
      const stateFromStoresArray = guildId(stateFromStores[30]).useStateFromStoresArray(tmp18, tmp20, tmp19);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        const items6 = [GuildStore, PermissionStore];
        cResult[14] = items6;
        const tmp22 = items6;
      } else {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
      }
      if (cResult[15] !== guildId) {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        const items7 = [guildId];
        cResult[15] = guildId;
        cResult[16] = tmp26;
        cResult[17] = items7;
        let tmp25 = items7;
      } else {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        tmp25 = cResult[17];
      }
      const tmpResult7 = guildId(stateFromStores[30]);
      const stateFromStores2 = guildId(stateFromStores[30]).useStateFromStores(tmp22, tmp26, tmp25);
      if (cResult[18] === guildId) {
        class E {
          constructor() {
            selfMember = closure_12.getSelfMember(guildId);
            roles = undefined;
            if (selfMember != null) {
              roles = selfMember.roles;
            }
            if (roles == null) {
              roles = [];
            }
            return roles;
          }
        }
        if (cResult[21] === stateFromStores2) {
          class E {
            constructor() {
              selfMember = closure_12.getSelfMember(guildId);
              roles = undefined;
              if (selfMember != null) {
                roles = selfMember.roles;
              }
              if (roles == null) {
                roles = [];
              }
              return roles;
            }
          }
        }
        const items8 = [isConjureGuildEnabled, guildId, stateFromStoresArray, stateFromStores2];
        cResult[21] = stateFromStores2;
        cResult[22] = stateFromStoresArray;
        cResult[23] = guildId;
        cResult[24] = isConjureGuildEnabled;
        cResult[25] = items8;
      }
      class B {
        constructor() {
          if (closure_4) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[53]);
            tmp3 = guildId;
            listProjectsResult = obj.listProjects(guildId);
          }
          return;
        }
      }
      cResult[18] = guildId;
      cResult[19] = isConjureGuildEnabled;
      cResult[20] = B;
      const tmpResult8 = guildId(stateFromStores[30]);
    }
  : function ConjureStandaloneScreen(guildId) {
      guildId = guildId.guildId;
      let stateFromStores;
      noop = undefined;
      const navigation = guildId(stateFromStores[41]).useNavigation();
      let obj = guildId(stateFromStores[41]);
      let items = [ConjureBuilderRouteStore];
      const items1 = [guildId];
      stateFromStores = guildId(stateFromStores[30]).useStateFromStores(
        items,
        () => {
          const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
          return routedProjectId;
        },
        items1,
      );
      obj2 = guildId(stateFromStores[30]);
      const items2 = [GuildStore];
      const items3 = [guildId];
      const stateFromStores1 = guildId(stateFromStores[30]).useStateFromStores(
        items2,
        () => GuildStore.getGuild(guildId),
        items3,
      );
      let obj3 = guildId(stateFromStores[30]);
      const isConjureGuildEnabled = guildId(stateFromStores[92]).useIsConjureGuildEnabled({
        guildId,
        location: "VibegrationsStandaloneScreen",
      });
      const obj4 = guildId(stateFromStores[92]);
      const items4 = [GuildMemberStore];
      const items5 = [guildId];
      const stateFromStoresArray = guildId(stateFromStores[30]).useStateFromStoresArray(
        items4,
        () => {
          const selfMember = GuildMemberStore.getSelfMember(guildId);
          let roles;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return roles;
        },
        items5,
      );
      const obj5 = guildId(stateFromStores[30]);
      const items6 = [GuildStore, PermissionStore];
      const items7 = [guildId];
      const items8 = [
        isConjureGuildEnabled,
        guildId,
        stateFromStoresArray,
        guildId(stateFromStores[30]).useStateFromStores(
          items6,
          () => {
            guild = GuildStore.getGuild(guildId);
            let canResult = null != guild;
            if (canResult) {
              canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
            }
            return canResult;
          },
          items7,
        ),
      ];
      const effect = noop.useEffect(() => {
        if (isConjureGuildEnabled) {
          ConjureActionCreators.listProjects(guildId);
        }
      }, items8);
      const items9 = [stateFromStores1, isConjureGuildEnabled, navigation];
      const effect1 = noop.useEffect(() => {
        if (!tmp) {
          navigation.goBack();
        }
        tmp = null == stateFromStores1 || isConjureGuildEnabled;
      }, items9);
      noop = noop.useRef(stateFromStores);
      const obj7 = {};
      const obj8 = { headerLeft: null, headerTitle: null, render: null };
      const obj6 = guildId(stateFromStores[30]);
      obj8.headerLeft = guildId(stateFromStores[88]).getHeaderCloseButton(() => navigation.goBack());
      obj8.headerTitle = function headerTitle() {
        const obj = { title: null };
        const intl = guildId(stateFromStores[32]).intl;
        obj.title = intl.string(navigation(stateFromStores[33]).uk6jhJ);
        return closure_1_26(guildId(stateFromStores[88]).NavigatorHeader, obj);
      };
      obj8.render = function render() {
        const obj = { children: null };
        obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
        const items = [closure_2_26(closure_40, obj2), closure_2_26(closure_35, { guildId })];
        obj.children = items;
        return closure_2_27(closure_2_28, obj);
      };
      obj7[constants2.PROJECTS] = obj8;
      obj7[constants2.CHAT] = {
        ignoreKeyboard: true,
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            closure_2_26(closure_40, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
            closure_2_26(ChatScene, { guildId, projectId }),
          ];
          obj.children = items;
          return closure_2_27(closure_2_28, obj);
        },
      };
      obj7[constants2.DEBUG] = {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(stateFromStores[32]).intl;
          obj.title = intl.string(navigation(stateFromStores[33])["Q4FN+H"]);
          return closure_1_26(guildId(stateFromStores[88]).NavigatorHeader, obj);
        },
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            closure_2_26(closure_40, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
            closure_2_26(ConjureDebugSceneDefault, { projectId }),
          ];
          obj.children = items;
          return closure_2_27(closure_2_28, obj);
        },
      };
      const obj10 = {
        screens: obj7,
        initialRouteStack: isConjureGuildEnabled(
          noop.useState(() => {
            const items = [{ name: constants.PROJECTS }];
            if (null != stateFromStores) {
              obj2 = { name: tmp.CHAT, params: null };
              const obj3 = { projectId: tmp2 };
              obj2.params = obj3;
              items.push(obj2);
            }
            return items;
          }),
          1,
        )[0],
        headerBackTitle: null,
      };
      let intl = guildId(stateFromStores[32]).intl;
      obj10.headerBackTitle = intl.string(navigation(stateFromStores[33]).uk6jhJ);
      return closure_26(guildId(stateFromStores[94]).Navigator, obj10);
    };
