// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import restartConjureAppFramesDefault from "../../preview/native/restartConjureAppFrames.tsx";
import TableRowApplicationIconDefault from "../../../applications/native/TableRowApplicationIcon.tsx";
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
  setMode = undefined;
  let result1;
  c18 = undefined;
  let paneHidden;
  closure_20 = undefined;
  closure_21 = undefined;
  let active;
  let conjureControlActive;
  let guild_id;
  isLaunched = undefined;
  c26 = undefined;
  let callback1;
  let num;
  let activeIndex;
  let setActiveIndex;
  closure_31 = undefined;
  projectGuildId = undefined;
  let callback3;
  let memo3;
  let callback4;
  let callback5;
  __initData = undefined;
  let callback6;
  let callback7;
  let setting;
  let callback8;
  closure_42 = undefined;
  let callback9;
  let callback10;
  let stateFromStores3;
  let preview;
  let isConjureProjectMuted;
  let memo4;
  navigation = require("useNavigation").useNavigation();
  const bottom = projectId(navigation[40])().bottom;
  const tmp5 = closure_31(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[55])();
  openedProjectIdRef = tmp6;
  const tmp8 = _slicedToArray(openedProjectIdRef.useState(0), 2);
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
  fn.__initData = callback5;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  const items1 = [closure_20];
  const items2 = [projectId];
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
  const tmp11 = closure_20;
  const items3 = [closure_20];
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
  const items5 = [closure_20];
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
  const items7 = [closure_20];
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
    installScope: null,
    ownerAuthorizationRevoked: null,
    mainCardOnly: true,
  };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj10.declaredActivity = true === has_activity;
  obj10.installScope = install_scope;
  let prop;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  obj10.ownerAuthorizationRevoked = true === prop;
  const conjurePreviewMode = require("useConjurePreviewMode").useConjurePreviewMode(obj10);
  availability = conjurePreviewMode.availability;
  ({ activeMode, setMode } = conjurePreviewMode);
  ({ widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult12 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(
    projectId,
    (arg0) => {
      const modes = availability.modes;
      if (modes.includes(arg0)) {
        setMode(arg0);
      }
    },
  );
  const tmpResult13 = require("conjurePreviewModeRequests");
  const obj11 = {
    installScope: install_scope,
    previewReady: true === preview_ready,
    integrationInstalled: null,
    botPermissionsChanged: null,
  };
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.integration_installed;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  obj11.integrationInstalled = prop1;
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  obj11.botPermissionsChanged = true === prop2;
  let result = require("conjurePreviewModes").requiresPermissionReview(obj11);
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    const project = ConjureActionCreators.getProject(projectId);
    project.catch(() => {});
  }, items9);
  const tmp29 = null != previewAppId && null != projectId(navigation[61])(previewAppId);
  const tmpResult14 = require("conjurePreviewModes");
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
          obj7.guildId = closure_131_17;
          obj7.onClose = function onClose() {
            const result = c0(16626).repairConjureGuildHints(closure_1_7, closure_1_17);
            const obj = c0(16626);
            result.finally(() => application(8735).getProject(closure_1_1)).catch(() => {});
          };
          let result = application3(tmp2[63]).openConjureAppInstallModal(obj7);
          obj2 = application3(tmp2[63]);
        } catch (tmp27) {
          c5 = tmp;
          throw tmp27;
        }
      }
    }),
    items10,
  );
  const tmp31 = bottom;
  const tmpResult15 = require("ConjureInstallTarget");
  [tmp34, tmp35] = openedProjectIdRef.useState(true);
  c18 = tmp35;
  let tmp36 = null;
  if (null != stateFromStores2) {
    tmp36 = tmp22;
  }
  const tmp7Result = _slicedToArray(openedProjectIdRef.useState(true), 2);
  [tmp38, tmp39] = openedProjectIdRef.useState(tmp36);
  const tmp7Result4 = _slicedToArray(openedProjectIdRef.useState(projectId), 2);
  if (tmp7Result4[0] !== projectId) {
    tmp7Result4[1](projectId);
    tmp35(true);
    tmp39(null);
  }
  let tmp44 = tmp22;
  if (true === preview_ready) {
    tmp44 = null != previewAppId;
  }
  if (tmp44) {
    tmp44 = !isResolving;
  }
  if (tmp44) {
    tmp44 = availability.modes.length > 0 || result;
    const tmp45 = availability.modes.length > 0 || result;
  }
  paneHidden = tmp44;
  if (tmp44) {
    paneHidden = !tmp34;
  }
  let hasItem = tmp44;
  if (tmp44) {
    hasItem = tmp29;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp47 = hasItem;
  if (hasItem) {
    tmp47 = paneHidden;
  }
  if (tmp47) {
    tmp47 = "frame" === activeMode;
  }
  closure_20 = tmp47;
  let tmp48 = paneHidden;
  if (paneHidden) {
    tmp48 = "bot" === activeMode;
  }
  closure_21 = tmp48;
  const tmp7Result3 = _slicedToArray(openedProjectIdRef.useState(tmp36), 2);
  function ye() {
    let paddingBottom = 0;
    if (paneHidden) {
      paddingBottom = 0;
      if (!closure_21) {
        const _Math = Math;
        paddingBottom = Math.max(closure_5.get(), bottom);
      }
    }
    return { paddingBottom };
  }
  ye.__closure = { previewShowing: paneHidden, botFaceShowing: tmp48, keyboardHeight: tmp6, safeAreaBottom: bottom };
  ye.__workletHash = 13315848638309;
  ye.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(ye);
  const tmpResult16 = require("ReanimatedRexport");
  function fe() {
    num = 0;
    if (!paneHidden) {
      const _Math = Math;
      num = -Math.max(0, closure_5.get() - bottom);
    }
    const obj = { transform: null };
    const items = [{ translateY: num }];
    obj.transform = items;
    return obj;
  }
  fe.__closure = { previewShowing: paneHidden, keyboardHeight: tmp6, safeAreaBottom: bottom };
  fe.__workletHash = 2668549423950;
  fe.__initData = callback6;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(fe);
  active = paneHidden(projectId).active;
  const tmpResult17 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult18 = require("conjurePreviewControlLease");
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[65])(guild_id, application_id);
  isLaunched = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_25) {
      fn = () => closure_0(navigation[27]).transitionTo(conjureControlActive.CHANNEL(guild_id, closure_1_25));
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[32]).intl;
  const tmp4Result5 = projectId(navigation[33]);
  if (conjureControlActive) {
    let Sme0T0 = tmp4Result5.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result5.vn5Rzu : tmp4Result5["cl/Jyl"];
  }
  const stringResult = intl.string(Sme0T0);
  c26 = stringResult;
  const items12 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      collapsedCategories(projectId);
    } else {
      constants(projectId);
    }
  }, items12);
  const items13 = [availability.modes];
  const items14 = [availability.modes, setMode];
  const memo1 = obj2.useMemo(() => {
    let obj = { id: "chat", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3753["1HH2p9"]);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: closure_1_0(navigation[66]).getPreviewModeLabel(id), page: null };
        return obj;
      }),
    ];
    modes = availability.modes;
    return items;
  }, items13);
  const first = availability.modes[0];
  let tmp63 = null != stateFromStores2;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(tmp2);
    }
  }, items14);
  if (tmp63) {
    tmp63 = tmp22 !== tmp38;
  }
  if (tmp63) {
    if (tmp64) {
      setMode(first);
      tmp35(false);
    }
    tmp39(tmp22);
    tmp64 = false === tmp38 && tmp22 && null != first;
  }
  const tmp4Result = projectId(navigation[65]);
  const tmpResult19 = require("SegmentedControlState");
  const segmentedControlState = tmpResult19.useSegmentedControlState({
    items: memo1,
    pageWidth: projectId(navigation[67])().width - 2 * projectGuildId,
    onSetActiveIndex: callback2,
  });
  num = 0;
  if (!tmp34) {
    num = 0;
    if (null != activeMode) {
      const modes1 = availability.modes;
      num = 1 + modes1.indexOf(activeMode);
    }
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items15 = [num, activeIndex, setActiveIndex];
  const effect1 = obj2.useEffect(() => {
    if (activeIndex.get() !== num) {
      setActiveIndex(tmp, false);
    }
  }, items15);
  const items16 = [previewAppId];
  const effect2 = obj2.useEffect(
    () => (null != previewAppId ? () => closure_0(navigation[69]).leaveConjurePreviewFrame(previewAppId) : undefined),
    items16,
  );
  const items17 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj2.useMemo(() => ({ guildId, platform: obj2, busy: null == stateFromStores2 || isLoading }), items17);
  const tmp72 = projectId(navigation[70])(projectId, memo2);
  closure_31 = tmp72;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items18 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    obj2 = {
      content: closure_2_26(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items18);
  const items19 = [guildId, navigation];
  memo3 = obj2.useMemo(() => {
    const f146311 = (projectId) => navigation.push(callback3.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        guildId(stateFromStoresArray[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
        const obj = guildId(stateFromStoresArray[27]);
      }
    };
  }, items19);
  const items20 = [guildId, memo3, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo3 };
      obj2.content = closure_2_26(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items20);
  const items21 = [projectId];
  callback5 = obj2.useCallback(() => {
    obj2 = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: closure_2_26(ConjureConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items21);
  __initData = obj2.useRef(false);
  _require = tmp31(function* (arg0) {
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
        obj8.IconComponent = closure_0(navigation[72]).UndoIcon;
        projectId(navigation[24]).open(obj8);
        c5 = 2;
        c6 = 4;
        c7 = 1;
        return { value: setMode(closure_1, closure_130_0.sha), done: false };
      }
    } else if (2 === tmp8) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === tmp8) {
      const intl = closure_0(navigation[32]).intl;
      closure_0(navigation[73]).presentError(intl.string(projectId(navigation[33])["PSdo+w"]));
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
          obj15.title = closure_0(navigation[74]).versionTitle(closure_130_0.subject).short;
          obj12.content = intl3.formatToPlainString(projectId(navigation[33]).Z4n6LX, obj15);
          obj12.IconComponent = closure_0(navigation[72]).UndoIcon;
          projectId(navigation[24]).open(obj12);
          closure_0(navigation[74]);
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
          closure_0(navigation[73]).presentError(closure_130_2);
          closure_0(navigation[73]);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(navigation[75]).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp56 = closure_1;
    if (closure_1 === undefined) {
      tmp56 = null;
    }
    closure_130_1 = tmp56;
    return "Reflect";
  });
  const items22 = [projectId];
  callback6 = obj2.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items22);
  const items23 = [callback6, ,];
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items23[1] = install_scope1;
  items23[2] = projectId;
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
  }, items23);
  const DeveloperMode = tmp(tmp2[77]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(constants.DEBUG, { projectId }), items24);
  let obj12 = {
    items: memo1,
    pageWidth: projectId(navigation[67])().width - 2 * projectGuildId,
    onSetActiveIndex: callback2,
  };
  const tmp83 = isLaunched(
    projectId(navigation[78])(previewAppId, require("conjurePreviewSurface").CONJURE_PREVIEW_SURFACE),
  );
  closure_42 = tmp83;
  const items25 = [previewAppId];
  callback9 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartConjureAppFramesDefault(tmp);
    }
  }, items25);
  const items26 = [navigation, projectId];
  callback10 = obj2.useCallback(() => {
    closure_2_15(projectId);
    navigation.goBack();
  }, items26);
  const tmp4Result6 = projectId(navigation[78]);
  const items27 = [tmp11];
  const items28 = [projectId];
  stateFromStores3 = require("initialize").useStateFromStores(
    items27,
    () => ConjureProjectStore.isProjectDeleting(projectId),
    items28,
  );
  const items29 = [stateFromStores3, callback10];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores3) {
      callback10();
    }
  }, items29);
  const obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult20 = require("initialize");
  let tmp89 = null;
  if (modes2.includes("widget")) {
    tmp89 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp89 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp89;
  const tmp4Result3Result = projectId(navigation[81])(obj13);
  preview = tmp4Result3Result;
  const tmp4Result7 = projectId(navigation[81]);
  isConjureProjectMuted = require("conjureProjectMute").useIsConjureProjectMuted(projectId);
  const items30 = [
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
    tmp83,
    tmp4Result3Result,
    stateFromStores,
    tmp72,
  ];
  memo4 = obj2.useMemo(() => {
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
    obj2.label = intl.string(_modDef3753.I2XSKe);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback3;
    items.push(obj2);
    if (setting) {
      let obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3753["Q4FN+H"]);
      obj3.IconComponent = BugIcon.BugIcon;
      obj3.action = callback8;
      items.push(obj3);
    }
    if (null != stateFromStores) {
      const obj6 = {
        project: tmp14,
        guildId,
        muted: isConjureProjectMuted,
        onRemix: callback4,
        onConnectTool: callback5,
        onHistory: callback7,
        onRefresh: null,
        onClose: null,
        preview: null,
      };
      let tmp15;
      if (closure_42) {
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
  }, items30);
  const items31 = [
    conjureControlActive,
    active,
    stringResult,
    tmp47,
    callback1,
    navigation,
    memo4,
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
            if (!closure_1_20) {
              items = [null];
              obj2 = {
                items,
                align: "below",
                children(arg0) {
                  ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                  const obj = {
                    ref,
                    IconComponent: title(7588).MoreHorizontalIcon,
                    onPress,
                    accessibilityLabel: null,
                    accessibilityActions: null,
                    onAccessibilityAction: null,
                  };
                  const intl = title(1126).intl;
                  obj.accessibilityLabel = intl.string(title(1126).t["UKOtz+"]);
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  return accessibilityLabel(closure_1_1(16591), obj);
                },
              };
              items[1] = accessibilityLabel(title(navigation[86]).ContextMenu, obj2);
              obj.children = items;
              tmp = tmp2(tmp3, obj);
            } else {
              if (active) {
                let ExperimentalDirectSelectIcon = activeIndex;
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
              const obj4 = { selected: active };
              obj3.accessibilityState = obj4;
              obj3.disabled = disabled;
              accessibilityLabel(projectId(navigation[37]), obj3);
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
  }, items31);
  const items32 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    const result = ConjureActionCreators.setSelectedProjectForGuild(closure_0, projectId);
    return () => closure_0(navigation[52]).setSelectedProjectForGuild(closure_1_0, null);
  }, items32);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items33 = [tmp5.contentBare, animatedStyle];
    obj14.style = items33;
    let tmp102 = null;
    if (tmp44) {
      let obj15 = { style: tmp5.segments, children: null };
      const obj16 = { state: segmentedControlState, variant: "experimental_Small" };
      obj15.children = c26(tmp(tmp2[87]).SegmentedControl, obj16);
      tmp102 = c26(projectName, obj15);
    }
    const items34 = [tmp102];
    const obj17 = { style: tmp5.panes, children: null };
    let tmp107Result = null;
    if (hasItem) {
      tmp107Result = null;
      if (null != previewAppId) {
        const obj18 = {
          style: tmp47 ? tmp5.pane : tmp5.paneBackstage,
          pointerEvents: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
        let str5 = "none";
        if (tmp47) {
          str5 = "auto";
        }
        obj18.pointerEvents = str5;
        obj18.accessibilityElementsHidden = !tmp47;
        let str6 = "no-hide-descendants";
        if (tmp47) {
          str6 = "auto";
        }
        obj18.importantForAccessibility = str6;
        const obj19 = { applicationId: previewAppId, projectId, visible: tmp47, onOpenPublishedApp: memo };
        obj18.children = c26(tmp(tmp2[69]).PreviewFrame, obj19);
        tmp107Result = tmp107(tmp105, obj18);
      }
    }
    const items35 = [tmp107Result, ,];
    let tmp109Result = null;
    if (paneHidden) {
      tmp109Result = null;
      if (null != previewAppId) {
        tmp109Result = null;
        if (!tmp47) {
          const obj20 = { style: tmp5.pane, children: null };
          const obj21 = {
            projectId,
            previewApplicationId: previewAppId,
            mode: activeMode,
            availability,
            widgetApplicationId,
            frameHostAvailable: tmp29,
            permissionsGate: null,
          };
          const tmp4Result8 = tmp4(tmp2[69]);
          let tmp111 = null;
          if (tmpResult22.permissionReviewBlocksMode(activeMode, result)) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
            tmp111 = obj22;
          }
          obj21.permissionsGate = tmp111;
          obj20.children = c26(tmp4Result8, obj21);
          tmp109Result = tmp109(tmp105, obj20);
          tmpResult22 = tmp(tmp2[60]);
        }
      }
    }
    items35[1] = tmp109Result;
    const items36 = [tmp5.chatPane, ,];
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items36[1] = paneHidden;
    items36[2] = animatedStyle1;
    obj23.style = items36;
    const obj24 = { value: memo2, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6 };
    obj24.children = c26(tmp4(tmp2[88]), obj25);
    obj23.children = c26(tmp(tmp2[70]).ConjurePublishActionContext.Provider, obj24);
    items35[2] = c26(tmp4(tmp2[57]).View, obj23);
    obj17.children = items35;
    items34[1] = callback1(projectName, obj17);
    obj14.children = items34;
    let tmp95Result1 = tmp101(tmp4(tmp2[57]).View, obj14);
  } else {
    const obj26 = { style: null, children: null };
    const items37 = [,];
    ({ content: arr35[0], centered: arr35[1] } = tmp5);
    obj26.style = items37;
    if (stateFromStores1) {
      let tmp95Result = tmp95(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[32]).intl;
      obj28.children = intl2.string(tmp4(tmp2[33]).G1WwgK);
      const items38 = [tmp95(tmp(tmp2[50]).Text, obj28), ,];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl3 = tmp(tmp2[32]).intl;
      obj29.children = intl3.string(tmp4(tmp2[33]).fINulo);
      items38[1] = tmp95(tmp(tmp2[50]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp(tmp2[32]).intl;
      obj30.text = intl4.string(tmp4(tmp2[33])["WFJ/vb"]);
      obj30.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items38[2] = tmp95(tmp(tmp2[51]).Button, obj30);
      obj27.children = items38;
      tmp95Result = callback1(tmp96, obj27);
    }
    obj26.children = tmp95Result;
    tmp95Result1 = tmp95(tmp96, obj26);
  }
  return tmp95Result1;
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: metroRequire,
  Keyboard: closure_7,
  ScrollView: closure_8,
  View: closure_9,
} = get_ActivityIndicator);
const ConjureConnectionStore = fn(12923);
({ closeConnection: closure_15, restoreSourceHistoryEntry: closure_16 } = ConjureConnectionStore);
const conjureDesignFeedbackStore = fn(16583);
({
  enterConjureDesignFeedback: closure_17,
  exitConjureDesignFeedback: closure_18,
  useConjureDesignFeedback: closure_19,
} = conjureDesignFeedbackStore);
const Constants = fn(1085);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = fn(2058).StaticChannelRoute;
let isLaunched = fn(8738).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
  : () =>
      closure_1_26(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, {
        color: nativeDefault.colors.TEXT_BRAND,
      });
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
const createStyles = fn(4896);
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
  ? (project) => {
      const cResult = project(576).c(35);
      project = project.project;
      ({ onPress, onMore } = project);
      const tmp4 = closure_31(0);
      const obj = project(576);
      const conjureProjectUnreadStatus = project(16181).useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      obj2 = project(16181);
      const data = project(6665).useApplication(application_id).data;
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
      const tmpResult = project(6665);
      const stateFromStores = project(504).useStateFromStores(first, tmp8, tmp9);
      const tmp11 =
        conjureProjectUnreadStatus === project(16182).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
      if (cResult[4] !== project.updated_at) {
        let formatToPlainStringResult;
        if (null != project.updated_at) {
          const intl = tmp(1126).intl;
          const obj3 = { time: null };
          const _Date = Date;
          const date = new Date(project.updated_at);
          obj3.time = tmp(7139).getRelativeTimestamp(date.getTime());
          formatToPlainStringResult = intl.formatToPlainString(_modDef3753.AXydi3, obj3);
          const tmpResult4 = tmp(7139);
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
            stringResult = intl3.string(_modDef3753.hfIuc7);
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
                  const tmp44 = closure_26(tmp(6000).TableRow, obj6);
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
            const obj8 = { IconComponent: tmp(7588).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
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
        stringResult1 = intl2.string(_modDef3753.Yh5pAc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = tmp12;
      cResult[8] = stringResult1;
      tmp18 = stringResult1;
      const tmpResult3 = project(504);
    }
  : (project) => {
      project = project.project;
      const onMore = project.onMore;
      const tmp = closure_31(0);
      const conjureProjectUnreadStatus = project(16181).useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      const obj = project(16181);
      const data = project(6665).useApplication(application_id).data;
      const tmp2Result = project(6665);
      const items = [ConjureProjectStore];
      const items1 = [project.id];
      const stateFromStores = project(504).useStateFromStores(
        items,
        () => ConjureProjectStore.isProjectDeleting(project.id),
        items1,
      );
      let tmp6 = conjureProjectUnreadStatus === tmp2(16182).VibegrationsReadStateFlags.NEEDS_INPUT;
      if (tmp6) {
        tmp6 = !stateFromStores;
      }
      let formatToPlainStringResult;
      if (null != project.updated_at) {
        const intl = tmp2(1126).intl;
        obj2 = { time: null };
        const _Date = Date;
        const date = new Date(project.updated_at);
        obj2.time = tmp2(7139).getRelativeTimestamp(date.getTime());
        formatToPlainStringResult = intl.formatToPlainString(_modDef3753.AXydi3, obj2);
        const tmp2Result4 = tmp2(7139);
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
        formatToPlainStringResult = intl2.string(_modDef3753.Yh5pAc);
      }
      obj3.subLabel = formatToPlainStringResult;
      let stringResult;
      if (tmp6) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(_modDef3753.hfIuc7);
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
        const obj6 = { IconComponent: tmp2(7588).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
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
      const children = [closure_26(project(6000).TableRow, obj3)];
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
  ? (guildId) => {
      const cResult = guildId(576).c(75);
      guildId = guildId.guildId;
      const bottom = navigation(1618)().bottom;
      closure_31(0);
      let obj = guildId(576);
      navigation = guildId(1490).useNavigation();
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
      obj2 = guildId(1490);
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
        const fn3 = function f() {
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
              class F {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_33.CHAT, obj);
                }
              }
              cResult[19] = navigation;
              cResult[20] = F;
            } else {
              class F {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_33.CHAT, obj);
                }
              }
            }
            dependencyMap = F;
            if (cResult[21] === guildId) {
              class F {
                constructor(arg0) {
                  obj = { projectId: guildId };
                  return closure_1.push(closure_33.CHAT, obj);
                }
              }
              asyncGeneratorStep = tmp27;
              if (cResult[24] === guildId) {
                class F {
                  constructor(arg0) {
                    obj = { projectId: guildId };
                    return closure_1.push(closure_33.CHAT, obj);
                  }
                }
                _slicedToArray = X;
                if (cResult[27] === guildId) {
                  class F {
                    constructor(arg0) {
                      obj = { projectId: guildId };
                      return closure_1.push(closure_33.CHAT, obj);
                    }
                  }
                  const noop = V;
                  if (cResult[30] === guildId) {
                    class F {
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
                        openChat: null,
                        onRemix: null,
                        onOpenSettings: null,
                      };
                      obj3 = guildId(closure_2[46]);
                      obj1.muted = obj3.isConjureProjectMuted(closure_1_11.settings, guildId.id);
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
                      obj4 = guildId(closure_2[48]);
                      obj6 = {
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
                      result1 = obj4.showSimpleActionSheet(obj6);
                      return;
                    }
                  }
                  cResult[30] = guildId;
                  cResult[31] = F;
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
            closure_129_1 = F;
            const fn4 = (arg0, arg1) => {
              if (arg1 === closure_0) {
                closure_1(arg0);
              } else {
                guildId(stateFromStoresArray[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
                const obj = guildId(stateFromStoresArray[27]);
              }
            };
            cResult[21] = guildId;
            cResult[22] = F;
            cResult[23] = fn4;
          }
        }
      }
      if (cResult[13] !== guildId) {
        class F {
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
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            obj3 = guildId(closure_2[46]);
            obj1.muted = obj3.isConjureProjectMuted(closure_1_11.settings, guildId.id);
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
            obj4 = guildId(closure_2[48]);
            obj6 = {
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
            result1 = obj4.showSimpleActionSheet(obj6);
            return;
          }
        }
        cResult[14] = R;
        let found = R;
      } else {
        class F {
          constructor(arg0) {
            obj = { projectId: guildId };
            return closure_1.push(closure_33.CHAT, obj);
          }
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
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
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            obj3 = guildId(closure_2[46]);
            obj1.muted = obj3.isConjureProjectMuted(closure_1_11.settings, guildId.id);
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
            obj4 = guildId(closure_2[48]);
            obj6 = {
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
            result1 = obj4.showSimpleActionSheet(obj6);
            return;
          }
        }
      } else {
        class F {
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
  : (guildId) => {
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
        obj2 = { project, guildId, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
        let obj = guildId(stateFromStoresArray[45]);
        obj2.muted = guildId(stateFromStoresArray[46]).isConjureProjectMuted(settings.settings, project.id);
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
        let obj3 = guildId(stateFromStoresArray[46]);
        const obj4 = guildId(stateFromStoresArray[48]);
        const result1 = obj4.showSimpleActionSheet({
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
              IconComponent: guildId(stateFromStoresArray[49]).PlusLargeIcon,
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
        const obj5 = { style: tmp3.content, children: null };
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
        const items13 = [closure_26(tmp(tmp2[53]), {}), , ,];
        let tmp23Result = null;
        if (memo.length > 0) {
          const obj9 = { style: tmp3.section, children: null };
          const obj10 = { style: tmp3.sectionHeading, children: null };
          const obj11 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl3 = tmp4(tmp2[32]).intl;
          obj11.children = intl3.string(tmp(tmp2[33]).dWgSAa);
          const items14 = [closure_26(tmp4(tmp2[50]).Text, obj11)];
          const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl4 = tmp4(tmp2[32]).intl;
          obj12.children = intl4.string(tmp(tmp2[33]).JQpNkh);
          items14[1] = closure_26(tmp4(tmp2[50]).Text, obj12);
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
          items15[1] = closure_26(tmp4(tmp2[54]).TableRowGroup, obj13);
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
          const items16 = [closure_26(tmp4(tmp2[50]).Text, obj16)];
          const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl6 = tmp4(tmp2[32]).intl;
          obj17.children = intl6.string(tmp(tmp2[33]).dQ3U1J);
          items16[1] = closure_26(tmp4(tmp2[50]).Text, obj17);
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
          items17[1] = closure_26(tmp4(tmp2[54]).TableRowGroup, obj18);
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
              const items18 = [closure_26(tmp4(tmp2[50]).Text, obj21)];
              const obj22 = { variant: "secondary", size: "sm", text: null, onPress: null };
              const intl2 = tmp4(tmp2[32]).intl;
              obj22.text = intl2.string(tmp(tmp2[33])["WFJ/vb"]);
              obj22.onPress = function onPress() {
                return ConjureActionCreators.listProjects(guildId);
              };
              items18[1] = closure_26(tmp4(tmp2[51]).Button, obj22);
              obj20.children = items18;
              let tmp15Result2 = closure_27(closure_9, obj20);
            } else {
              const obj23 = { style: tmp3.listError, children: null };
              const obj24 = { variant: "text-md/normal", color: "text-muted", children: null };
              const intl7 = tmp4(tmp2[32]).intl;
              obj24.children = intl7.string(tmp(tmp2[33])["9/5sLV"]);
              const items19 = [closure_26(tmp4(tmp2[50]).Text, obj24)];
              const obj25 = { variant: "primary", size: "sm", text: null, onPress: null };
              const intl8 = tmp4(tmp2[32]).intl;
              obj25.text = intl8.string(tmp4(tmp2[32]).t.CumH4u);
              obj25.onPress = callback1;
              items19[1] = closure_26(tmp4(tmp2[51]).Button, obj25);
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
let __initData = {
  code: "function ConjureStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}",
};
let closure_38 = {
  code: "function ConjureStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}",
};
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
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
  : (projectId) => {
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      openedProjectIdRef = projectId.openedProjectIdRef;
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
  ? (guildId) => {
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
        const fn2 = function _() {
          return GuildStore.getGuild(guildId);
        };
        const items3 = [guildId];
        cResult[5] = guildId;
        cResult[6] = fn2;
        cResult[7] = items3;
        let tmp13 = items3;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult = guildId(stateFromStores[30]);
      const stateFromStores1 = guildId(stateFromStores[30]).useStateFromStores(tmp10, tmp12, tmp13);
      if (cResult[8] !== guildId) {
        let obj3 = { guildId, location: "VibegrationsStandaloneScreen" };
        cResult[8] = guildId;
        cResult[9] = obj3;
        let tmp15 = obj3;
      } else {
        tmp15 = cResult[9];
      }
      const tmpResult5 = guildId(stateFromStores[30]);
      const isConjureGuildEnabled = guildId(stateFromStores[89]).useIsConjureGuildEnabled(tmp15);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildMemberStore];
        cResult[10] = items4;
        let tmp17 = items4;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== guildId) {
        const fn3 = function j() {
          const selfMember = GuildMemberStore.getSelfMember(guildId);
          let roles;
          if (selfMember != null) {
            roles = selfMember.roles;
          }
          if (roles == null) {
            roles = [];
          }
          return roles;
        };
        const items5 = [guildId];
        cResult[11] = guildId;
        cResult[12] = items5;
        cResult[13] = fn3;
        let tmp20 = fn3;
        let tmp19 = items5;
      } else {
        tmp19 = cResult[12];
        tmp20 = cResult[13];
      }
      const tmpResult6 = guildId(stateFromStores[89]);
      const stateFromStoresArray = guildId(stateFromStores[30]).useStateFromStoresArray(tmp17, tmp20, tmp19);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [GuildStore, PermissionStore];
        cResult[14] = items6;
        let tmp22 = items6;
      } else {
        tmp22 = cResult[14];
      }
      if (cResult[15] !== guildId) {
        const fn4 = function w() {
          guild = GuildStore.getGuild(guildId);
          let canResult = null != guild;
          if (canResult) {
            canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
          }
          return canResult;
        };
        const items7 = [guildId];
        cResult[15] = guildId;
        cResult[16] = fn4;
        cResult[17] = items7;
        let tmp26 = items7;
        let tmp25 = fn4;
      } else {
        tmp25 = cResult[16];
        tmp26 = cResult[17];
      }
      const tmpResult7 = guildId(stateFromStores[30]);
      const stateFromStores2 = guildId(stateFromStores[30]).useStateFromStores(tmp22, tmp25, tmp26);
      if (cResult[18] === guildId) {
        if (cResult[19] === isConjureGuildEnabled) {
          let tmp28 = cResult[20];
        }
        if (cResult[21] === stateFromStores2) {
          if (cResult[22] === stateFromStoresArray) {
            if (cResult[23] === guildId) {
              if (cResult[24] === isConjureGuildEnabled) {
                let tmp29 = cResult[25];
              }
              const effect = openedProjectIdRef.useEffect(tmp28, tmp29);
              if (cResult[26] === stateFromStores1) {
                if (cResult[27] === isConjureGuildEnabled) {
                  if (cResult[28] === navigation) {
                    let tmp31 = cResult[29];
                    let tmp32 = cResult[30];
                  }
                  const effect1 = obj9.useEffect(tmp31, tmp32);
                  openedProjectIdRef = obj9.useRef(stateFromStores);
                  if (cResult[31] !== stateFromStores) {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                    cResult[31] = stateFromStores;
                    class M {
                      constructor() {
                        tmp = null == closure_3 || closure_4;
                        if (!tmp) {
                          tmp2 = closure_1;
                          goBackResult = closure_1.goBack();
                        }
                        return;
                      }
                    }
                  } else {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                  }
                  class M {
                    constructor() {
                      tmp = null == closure_3 || closure_4;
                      if (!tmp) {
                        tmp2 = closure_1;
                        goBackResult = closure_1.goBack();
                      }
                      return;
                    }
                  }
                  if (cResult[33] !== navigation) {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                    const headerCloseButton = obj10.getHeaderCloseButton(() => navigation.goBack());
                    cResult[33] = navigation;
                    class M {
                      constructor() {
                        tmp = null == closure_3 || closure_4;
                        if (!tmp) {
                          tmp2 = closure_1;
                          goBackResult = closure_1.goBack();
                        }
                        return;
                      }
                    }
                    cResult[34] = headerCloseButton;
                  } else {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                    cResult[35] = tmp38;
                  } else {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                  }
                  if (cResult[36] === guildId) {
                    class L {
                      constructor(arg0) {
                        obj = { projectId: closure_2, sceneProjectId: guildId, openedProjectIdRef: closure_5 };
                        return jsx(f74382, obj);
                      }
                    }
                  }
                  const obj4 = {
                    headerLeft: tmp35,
                    headerTitle: tmp38,
                    render() {
                      const obj = { children: null };
                      const items = [closure_1_6(), closure_2_26(closure_35, { guildId })];
                      obj.children = items;
                      return closure_2_27(closure_2_28, obj);
                    },
                  };
                  cResult[36] = guildId;
                  cResult[37] = L;
                  cResult[38] = tmp35;
                  cResult[39] = obj4;
                }
              }
              class M {
                constructor() {
                  tmp = null == closure_3 || closure_4;
                  if (!tmp) {
                    tmp2 = closure_1;
                    goBackResult = closure_1.goBack();
                  }
                  return;
                }
              }
              const items8 = [stateFromStores1, isConjureGuildEnabled, navigation];
              cResult[26] = stateFromStores1;
              cResult[27] = isConjureGuildEnabled;
              cResult[28] = navigation;
              cResult[29] = M;
              cResult[30] = items8;
              tmp32 = items8;
              tmp31 = M;
            }
          }
        }
        const items9 = [isConjureGuildEnabled, , stateFromStoresArray, stateFromStores2];
        cResult[21] = stateFromStores2;
        cResult[22] = stateFromStoresArray;
        cResult[23] = guildId;
        cResult[24] = isConjureGuildEnabled;
        cResult[25] = items9;
        tmp29 = items9;
      }
      class B {
        constructor() {
          if (closure_4) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[52]);
            tmp3 = guildId;
            listProjectsResult = obj.listProjects(guildId);
          }
          return;
        }
      }
      cResult[18] = guildId;
      cResult[19] = isConjureGuildEnabled;
      cResult[20] = B;
      tmp28 = B;
      const tmpResult8 = guildId(stateFromStores[30]);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      let stateFromStores;
      openedProjectIdRef = undefined;
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
      const isConjureGuildEnabled = guildId(stateFromStores[89]).useIsConjureGuildEnabled({
        guildId,
        location: "VibegrationsStandaloneScreen",
      });
      const obj4 = guildId(stateFromStores[89]);
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
      const effect = openedProjectIdRef.useEffect(() => {
        if (isConjureGuildEnabled) {
          ConjureActionCreators.listProjects(guildId);
        }
      }, items8);
      const items9 = [stateFromStores1, isConjureGuildEnabled, navigation];
      const effect1 = openedProjectIdRef.useEffect(() => {
        if (!tmp) {
          navigation.goBack();
        }
        tmp = null == stateFromStores1 || isConjureGuildEnabled;
      }, items9);
      openedProjectIdRef = openedProjectIdRef.useRef(stateFromStores);
      const obj7 = {};
      const obj8 = { headerLeft: null, headerTitle: null, render: null };
      const obj6 = guildId(stateFromStores[30]);
      obj8.headerLeft = guildId(stateFromStores[85]).getHeaderCloseButton(() => navigation.goBack());
      obj8.headerTitle = function headerTitle() {
        const obj = { title: null };
        const intl = guildId(stateFromStores[32]).intl;
        obj.title = intl.string(navigation(stateFromStores[33]).uk6jhJ);
        return closure_1_26(guildId(stateFromStores[85]).NavigatorHeader, obj);
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
          return closure_1_26(guildId(stateFromStores[85]).NavigatorHeader, obj);
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
          openedProjectIdRef.useState(() => {
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
      return closure_26(guildId(stateFromStores[91]).Navigator, obj10);
    };
