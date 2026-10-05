// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import _modDef4461 from "../../../../../_runtime/metro/04461__.js";
import DateUtils from "../../../../utils/DateUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
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
  _require = guildId;
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
  closure_25 = undefined;
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
  const tmp5 = projectGuildId(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[59])();
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
  fn.__initData = __initData;
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
  const tmpResult11 = require("useConjurePreviewMode");
  const conjurePreviewModeRequests = require("conjurePreviewModeRequests").useConjurePreviewModeRequests(
    projectId,
    (arg0) => {
      const modes = availability.modes;
      if (modes.includes(arg0)) {
        setMode(arg0);
      }
    },
  );
  const tmpResult12 = require("conjurePreviewModeRequests");
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
  const tmp29 = null != previewAppId && null != projectId(navigation[65])(previewAppId);
  const tmpResult13 = require("conjurePreviewModes");
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
            const result = c0(16588).repairConjureGuildHints(closure_1_7, closure_1_17);
            const obj = c0(16588);
            result.finally(() => application(8700).getProject(closure_1_1)).catch(() => {});
          };
          let result = application3(tmp2[67]).openConjureAppInstallModal(obj7);
          obj2 = application3(tmp2[67]);
        } catch (tmp27) {
          c5 = tmp;
          throw tmp27;
        }
      }
    }),
    items10,
  );
  const tmp31 = bottom;
  const tmpResult14 = require("ConjureInstallTarget");
  [tmp34, tmp35] = noop.useState(true);
  c18 = tmp35;
  let tmp36 = null;
  if (null != stateFromStores2) {
    tmp36 = tmp22;
  }
  const tmp7Result = _slicedToArray(noop.useState(true), 2);
  [tmp38, tmp39] = noop.useState(tmp36);
  const tmp7Result4 = _slicedToArray(noop.useState(projectId), 2);
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
    hasItem = !result;
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
  const tmp7Result3 = _slicedToArray(noop.useState(tmp36), 2);
  function fe() {
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
  fe.__closure = { previewShowing: paneHidden, botFaceShowing: tmp48, keyboardHeight: tmp6, safeAreaBottom: bottom };
  fe.__workletHash = 13315848638309;
  fe.__initData = callback6;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fe);
  const tmpResult15 = require("ReanimatedRexport");
  function je() {
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
  je.__closure = { previewShowing: paneHidden, keyboardHeight: tmp6, safeAreaBottom: bottom };
  je.__workletHash = 2668549423950;
  je.__initData = callback7;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(je);
  active = paneHidden(projectId).active;
  const tmpResult16 = require("ReanimatedRexport");
  conjureControlActive = require("conjurePreviewControlLease").useConjureControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult17 = require("conjurePreviewControlLease");
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[69])(guild_id, application_id);
  closure_25 = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_25) {
      fn = () => closure_0(navigation[27]).transitionTo(conjureControlActive.CHANNEL(guild_id, closure_1_25));
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
    obj.label = intl.string(_modDef3723["1HH2p9"]);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: closure_1_0(navigation[70]).getPreviewModeLabel(id), page: null };
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
    tmp64 = false === tmp38 && tmp22 && null != first && !result;
  }
  const tmp4Result = projectId(navigation[69]);
  const tmpResult18 = require("SegmentedControlState");
  const segmentedControlState = tmpResult18.useSegmentedControlState({
    items: memo1,
    pageWidth: projectId(navigation[71])().width - 2 * callback3,
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
    () => (null != previewAppId ? () => closure_0(navigation[73]).leaveConjurePreviewFrame(previewAppId) : undefined),
    items16,
  );
  const items17 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj2.useMemo(() => ({ guildId, platform: obj2, busy: null == stateFromStores2 || isLoading }), items17);
  const tmp72 = projectId(navigation[74])(projectId, memo2);
  closure_31 = tmp72;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items18 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    obj2 = {
      content: closure_2_27(ConjureSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items18);
  const items19 = [guildId, navigation];
  memo3 = obj2.useMemo(() => {
    const f146101 = (projectId) => navigation.push(memo3.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        guildId(navigation[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
        const obj = guildId(navigation[27]);
      }
    };
  }, items19);
  const items20 = [guildId, memo3, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      obj2 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId, onRemixed: memo3 };
      obj2.content = closure_2_27(ConjureRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items20);
  const items21 = [projectId];
  callback5 = obj2.useCallback(() => {
    obj2 = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: closure_2_27(ConjureConnectToolSheetDefault, { projectId }),
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
        obj8.IconComponent = closure_0(navigation[76]).UndoIcon;
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
      closure_0(navigation[77]).presentError(intl.string(projectId(navigation[33])["PSdo+w"]));
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
          obj15.title = closure_0(navigation[78]).versionTitle(closure_130_0.subject).short;
          obj12.content = intl3.formatToPlainString(projectId(navigation[33]).Z4n6LX, obj15);
          obj12.IconComponent = closure_0(navigation[76]).UndoIcon;
          projectId(navigation[24]).open(obj12);
          closure_0(navigation[78]);
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
          closure_0(navigation[77]).presentError(closure_130_2);
          closure_0(navigation[77]);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield closure_0(navigation[79]).rewindDataAfterVersionRestore(closure_1, closure_130_1);
    closure_3 = tmp4;
    closure_130_0 = closure_0;
    let tmp56 = closure_1;
    if (closure_1 === undefined) {
      tmp56 = null;
    }
    closure_130_1 = tmp56;
    return "Set";
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
    obj2.content = closure_2_27(ConjureHistorySheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items23);
  const DeveloperMode = tmp(tmp2[81]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(memo3.DEBUG, { projectId }), items24);
  const tmp82 = closure_25(projectId(navigation[82])(previewAppId, c26));
  closure_42 = tmp82;
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
  let obj12 = {
    items: memo1,
    pageWidth: projectId(navigation[71])().width - 2 * callback3,
    onSetActiveIndex: callback2,
  };
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
  const tmpResult19 = require("initialize");
  let tmp88 = null;
  if (modes2.includes("widget")) {
    tmp88 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp88 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp88;
  const tmp4Result2Result = projectId(navigation[84])(obj13);
  preview = tmp4Result2Result;
  const tmp4Result5 = projectId(navigation[84]);
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
    tmp82,
    tmp4Result2Result,
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
    obj2.label = intl.string(_modDef3723.I2XSKe);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback3;
    items.push(obj2);
    if (setting) {
      let obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3723["Q4FN+H"]);
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
          return closure_3_27(NavigatorHeader.NavigatorHeader, { title });
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
                    IconComponent: title(7577).MoreHorizontalIcon,
                    onPress,
                    accessibilityLabel: null,
                    accessibilityActions: null,
                    onAccessibilityAction: null,
                  };
                  const intl = title(1126).intl;
                  obj.accessibilityLabel = intl.string(title(1126).t["UKOtz+"]);
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  return closure_1_27(closure_1_1(16551), obj);
                },
              };
              items[1] = callback1(title(navigation[89]).ContextMenu, obj2);
              obj.children = items;
              tmp = tmp2(tmp3, obj);
            } else {
              if (active) {
                let ExperimentalDirectSelectIcon = setActiveIndex;
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
              callback1(projectId(navigation[37]), obj3);
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
    return () => closure_0(navigation[54]).setSelectedProjectForGuild(closure_1_0, null);
  }, items32);
  const items33 = [projectId];
  const effect6 = obj2.useEffect(() => () => projectId(navigation[90])(closure_1_1), items33);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items34 = [tmp5.contentBare, animatedStyle];
    obj14.style = items34;
    let tmp102 = null;
    if (tmp44) {
      let obj15 = { style: tmp5.segments, children: null };
      const obj16 = { state: segmentedControlState, variant: "experimental_Small" };
      obj15.children = callback1(tmp(tmp2[91]).SegmentedControl, obj16);
      tmp102 = callback1(projectName, obj15);
    }
    const items35 = [tmp102];
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
        obj18.children = callback1(tmp(tmp2[73]).PreviewFrame, obj19);
        tmp107Result = tmp107(tmp105, obj18);
      }
    }
    const items36 = [tmp107Result, ,];
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
          let tmp111 = null;
          if (result) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
            tmp111 = obj22;
          }
          obj21.permissionsGate = tmp111;
          obj20.children = callback1(tmp4(tmp2[73]), obj21);
          tmp109Result = tmp109(tmp105, obj20);
          const tmp4Result6 = tmp4(tmp2[73]);
        }
      }
    }
    items36[1] = tmp109Result;
    const items37 = [tmp5.chatPane, ,];
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items37[1] = paneHidden;
    items37[2] = animatedStyle1;
    obj23.style = items37;
    const obj24 = { value: memo2, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6 };
    obj24.children = callback1(tmp4(tmp2[92]), obj25);
    obj23.children = callback1(tmp(tmp2[74]).ConjurePublishActionContext.Provider, obj24);
    items36[2] = callback1(tmp4(tmp2[61]).View, obj23);
    obj17.children = items36;
    items35[1] = num(projectName, obj17);
    obj14.children = items35;
    let tmp95Result1 = tmp101(tmp4(tmp2[61]).View, obj14);
  } else {
    const obj26 = { style: null, children: null };
    const items38 = [,];
    ({ content: arr36[0], centered: arr36[1] } = tmp5);
    obj26.style = items38;
    if (stateFromStores1) {
      let tmp95Result = tmp95(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[32]).intl;
      obj28.children = intl2.string(tmp4(tmp2[33]).G1WwgK);
      const items39 = [tmp95(tmp(tmp2[52]).Text, obj28), ,];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl3 = tmp(tmp2[32]).intl;
      obj29.children = intl3.string(tmp4(tmp2[33]).fINulo);
      items39[1] = tmp95(tmp(tmp2[52]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp(tmp2[32]).intl;
      obj30.text = intl4.string(tmp4(tmp2[33])["WFJ/vb"]);
      obj30.onPress = function onPress() {
        return ConjureActionCreators.listProjects(closure_0);
      };
      items39[2] = tmp95(tmp(tmp2[53]).Button, obj30);
      obj27.children = items39;
      tmp95Result = num(tmp96, obj27);
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
const ConjureConnectionStore = fn(12904);
({ closeConnection: closure_15, restoreSourceHistoryEntry: closure_16 } = ConjureConnectionStore);
const conjureDesignFeedbackStore = fn(16543);
({
  enterConjureDesignFeedback: closure_17,
  exitConjureDesignFeedback: closure_18,
  useConjureDesignFeedback: closure_19,
} = conjureDesignFeedbackStore);
const Constants = fn(1085);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const FramesConstants = fn(8704);
({ isLaunched: closure_25, MAIN_SURFACE: closure_26 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        obj2 = { color: nativeDefault.colors.TEXT_BRAND };
        const tmp7 = closure_1_27(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      closure_1_27(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, {
        color: nativeDefault.colors.TEXT_BRAND,
      });
let obj2 = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const obj = ActionSheetActionCreators;
    obj.showActionSheet({
      content: closure_1_27(ConjurePublishNotesSheetDefault, {
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
const createStyles = fn(4890);
let closure_32 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    contentBare: null,
    centered: null,
    listContent: null,
    section: null,
    projectRowTrailing: null,
    unreadPill: null,
    sectionHeading: null,
    changelog: null,
    changelogEntries: null,
    changelogItem: null,
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
  obj.changelog = { gap: nativeDefault.space.PX_16 };
  const obj9 = { gap: nativeDefault.space.PX_16 };
  obj.changelogEntries = { gap: nativeDefault.space.PX_12 };
  const obj10 = { gap: nativeDefault.space.PX_12 };
  obj.changelogItem = { gap: nativeDefault.space.PX_4 };
  const obj11 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj12 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
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
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? (project) => {
      const cResult = project(576).c(35);
      project = project.project;
      ({ onPress, onMore } = project);
      const tmp4 = closure_32(0);
      const obj = project(576);
      const conjureProjectUnreadStatus = project(16142).useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      obj2 = project(16142);
      const data = project(6658).useApplication(application_id).data;
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
      const tmpResult = project(6658);
      const stateFromStores = project(504).useStateFromStores(first, tmp8, tmp9);
      const tmp11 =
        conjureProjectUnreadStatus === project(16143).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
      if (cResult[4] !== project.updated_at) {
        let formatToPlainStringResult;
        if (null != project.updated_at) {
          const intl = tmp(1126).intl;
          const obj3 = { time: null };
          const _Date = Date;
          const date = new Date(project.updated_at);
          obj3.time = tmp(7126).getRelativeTimestamp(date.getTime());
          formatToPlainStringResult = intl.formatToPlainString(_modDef3723.AXydi3, obj3);
          const tmpResult4 = tmp(7126);
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
            stringResult = intl3.string(_modDef3723.hfIuc7);
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
                                    const tmp52 = closure_28(closure_9, obj4);
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
                                    tmp46 = closure_27(closure_9, obj5);
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
                  const tmp44 = closure_27(tmp(5993).TableRow, obj6);
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
            let tmp30Result = closure_27(closure_6, {});
          } else {
            const obj7 = { style: tmp4.projectRowTrailing, children: null };
            let tmp32 = null;
            if (tmp11) {
              tmp32 = closure_27(MentionsBadgeDefault, { mentionsCount: 1 });
            }
            const items3 = [tmp32];
            const obj8 = { IconComponent: tmp(7577).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
            const intl4 = tmp(1126).intl;
            obj8.accessibilityLabel = intl4.string(tmp(1126).t["UKOtz+"]);
            items3[1] = closure_27(ConjureHeaderIconButtonDefault, obj8);
            obj7.children = items3;
            tmp30Result = closure_28(closure_9, obj7);
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
        const tmp28 = closure_27(TableRowApplicationIconDefault, obj9);
        cResult[11] = application_id;
        cResult[12] = icon;
        cResult[13] = tmp28;
        tmp25 = tmp28;
      }
      let stringResult1 = tmp12;
      if (stateFromStores) {
        const intl2 = tmp(1126).intl;
        stringResult1 = intl2.string(_modDef3723.Yh5pAc);
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
      const tmp = closure_32(0);
      const conjureProjectUnreadStatus = project(16142).useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      const obj = project(16142);
      const data = project(6658).useApplication(application_id).data;
      const tmp2Result = project(6658);
      const items = [ConjureProjectStore];
      const items1 = [project.id];
      const stateFromStores = project(504).useStateFromStores(
        items,
        () => ConjureProjectStore.isProjectDeleting(project.id),
        items1,
      );
      let tmp6 = conjureProjectUnreadStatus === tmp2(16143).VibegrationsReadStateFlags.NEEDS_INPUT;
      if (tmp6) {
        tmp6 = !stateFromStores;
      }
      let formatToPlainStringResult;
      if (null != project.updated_at) {
        const intl = tmp2(1126).intl;
        obj2 = { time: null };
        const _Date = Date;
        const date = new Date(project.updated_at);
        obj2.time = tmp2(7126).getRelativeTimestamp(date.getTime());
        formatToPlainStringResult = intl.formatToPlainString(_modDef3723.AXydi3, obj2);
        const tmp2Result4 = tmp2(7126);
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
        formatToPlainStringResult = intl2.string(_modDef3723.Yh5pAc);
      }
      obj3.subLabel = formatToPlainStringResult;
      let stringResult;
      if (tmp6) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(_modDef3723.hfIuc7);
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
      obj3.icon = closure_27(TableRowApplicationIconDefault, { application: obj4 });
      if (stateFromStores) {
        let tmp13Result = closure_27(closure_6, {});
      } else {
        const obj5 = { style: tmp.projectRowTrailing, children: null };
        let tmp15Result3 = null;
        if (tmp6) {
          tmp15Result3 = closure_27(MentionsBadgeDefault, { mentionsCount: 1 });
        }
        const items2 = [tmp15Result3];
        const obj6 = { IconComponent: tmp2(7577).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
        const intl4 = tmp2(1126).intl;
        obj6.accessibilityLabel = intl4.string(tmp2(1126).t["UKOtz+"]);
        items2[1] = closure_27(ConjureHeaderIconButtonDefault, obj6);
        obj5.children = items2;
        tmp13Result = closure_28(closure_9, obj5);
        const tmp19Result = ConjureHeaderIconButtonDefault;
      }
      obj3.trailing = tmp13Result;
      obj3.onPress = project.onPress;
      obj3.onLongPress = onMore;
      const children = [closure_27(project(5993).TableRow, obj3)];
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
          tmp15Result4 = closure_27(closure_9, obj7);
        }
      }
      children[1] = tmp15Result4;
      return closure_28(closure_9, { children });
    };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(navigation[18]).c(104);
      guildId = guildId.guildId;
      const bottom = require("useSafeAreaInsets")().bottom;
      let obj = guildId(navigation[18]);
      importDefault = closure_32(0);
      const tmp4 = closure_32(0);
      navigation = guildId(navigation[41]).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureProjectStore];
        const fn = function o() {
          return ConjureProjectStore.getOwnedProjects();
        };
        let items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp6 = items;
        tmp7 = fn;
        tmp8 = items1;
      } else {
        [tmp6, tmp7, tmp8] = cResult;
      }
      obj2 = guildId(navigation[41]);
      const stateFromStoresArray = guildId(navigation[30]).useStateFromStoresArray(tmp6, tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[3] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== guildId) {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
        const items3 = [guildId];
        cResult[4] = guildId;
        cResult[5] = I;
        cResult[6] = items3;
        let tmp13 = items3;
      } else {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
        tmp13 = cResult[6];
      }
      const tmpResult = guildId(navigation[30]);
      const stateFromStoresArray1 = guildId(navigation[30]).useStateFromStoresArray(tmp10, I, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
        const items4 = [ConjureProjectStore];
        const fn2 = function f() {
          return ConjureProjectStore.getProjectsFetchState();
        };
        const items5 = [];
        cResult[7] = items4;
        cResult[8] = fn2;
        cResult[9] = items5;
        let tmp17 = items5;
        let tmp16 = fn2;
        const tmp15 = items4;
      } else {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
        tmp16 = cResult[8];
        tmp17 = cResult[9];
      }
      const tmpResult3 = guildId(navigation[30]);
      const stateFromStores = guildId(navigation[30]).useStateFromStores(tmp15, tmp16, tmp17);
      if (cResult[10] === stateFromStoresArray) {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
      }
      if (cResult[13] !== guildId) {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
        cResult[13] = guildId;
        cResult[14] = tmp19;
        let found = tmp19;
      } else {
        class I {
          constructor() {
            return closure_20.getSharedProjects(guildId);
          }
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
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
        cResult[15] = R;
      } else {
        class R {
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
      found = stateFromStoresArray.filter(found);
      const sorted = found.sort(R);
      cResult[10] = stateFromStoresArray;
      cResult[11] = guildId;
      cResult[12] = sorted;
      const tmpResult4 = guildId(navigation[30]);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      importDefault = undefined;
      let navigation;
      let callback;
      const bottom = require("useSafeAreaInsets")().bottom;
      const tmp3 = closure_32(0);
      importDefault = tmp3;
      navigation = guildId(navigation[41]).useNavigation();
      let obj = guildId(navigation[41]);
      let items = [ConjureProjectStore];
      const stateFromStoresArray = guildId(navigation[30]).useStateFromStoresArray(
        items,
        () => ConjureProjectStore.getOwnedProjects(),
        [],
      );
      obj2 = guildId(navigation[30]);
      let items1 = [ConjureProjectStore];
      const items2 = [guildId];
      const stateFromStoresArray1 = guildId(navigation[30]).useStateFromStoresArray(
        items1,
        () => ConjureProjectStore.getSharedProjects(guildId),
        items2,
      );
      let obj3 = guildId(navigation[30]);
      const items3 = [ConjureProjectStore];
      const stateFromStores = guildId(navigation[30]).useStateFromStores(
        items3,
        () => ConjureProjectStore.getProjectsFetchState(),
        [],
      );
      const items4 = [stateFromStoresArray, guildId];
      const memo = callback.useMemo(() => {
        const found = stateFromStoresArray.filter((item) =>
          guildId(navigation[42]).isConjureProjectInGuild(item, closure_1_0),
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
      const memo1 = callback.useMemo(() => {
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
      callback = callback.useCallback((projectId) => navigation.push(constants2.CHAT, { projectId }), items6);
      const items7 = [guildId, callback];
      const memo2 = callback.useMemo(() => {
        closure_0 = guildId;
        closure_1 = callback;
        return (arg0, arg1) => {
          if (arg1 === closure_0) {
            closure_1(arg0);
          } else {
            guildId(navigation[27]).transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
            const obj = guildId(navigation[27]);
          }
        };
      }, items7);
      const items8 = [guildId, memo2];
      const callback1 = callback.useCallback(() => {
        obj2 = {
          key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
          content: closure_2_27(ConjureCreateSheetDefault, { guildId, onCreated: memo2 }),
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items8);
      const items9 = [guildId, memo2];
      const callback2 = callback.useCallback((project) => {
        obj2 = {
          key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
          content: closure_2_27(ConjureRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items9);
      const items10 = [guildId, callback, callback2];
      closure_9 = callback.useCallback((project) => {
        guildId = project;
        obj2 = { project, guildId, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
        let obj = guildId(navigation[45]);
        obj2.muted = guildId(navigation[46]).isConjureProjectMuted(settings.settings, project.id);
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
          obj2.content = closure_3_27(ConjureSettingsSheetDefault, obj3);
          return obj.showActionSheet(obj2);
        };
        const result = obj.conjureProjectActions(obj2);
        let obj3 = guildId(navigation[46]);
        const obj4 = guildId(navigation[48]);
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
      const effect = callback.useEffect(() => {
        navigation.setOptions({
          headerRight() {
            const obj = { IconComponent: guildId(navigation[49]).PlusLargeIcon, onPress, accessibilityLabel: null };
            const intl = guildId(navigation[32]).intl;
            obj.accessibilityLabel = intl.string(guildId(navigation[32]).t.CumH4u);
            return closure_2_27(closure_1(navigation[37]), obj);
          },
        });
      }, items11);
      let obj4 = guildId(navigation[30]);
      let result = guildId(navigation[50]).recentConjureChangelog("mobile");
      let tmp15 = memo.length > 0;
      const callback3 = callback.useCallback(() => {
        const obj = guildId(navigation[22]);
        obj.showActionSheet({
          content: closure_1_27(closure_1(navigation[51]), {}),
          key: guildId(navigation[51]).CONJURE_CHANGELOG_SHEET_KEY,
        });
      }, []);
      if (!tmp15) {
        tmp15 = memo1.length > 0;
      }
      if (tmp15) {
        const obj6 = { style: tmp3.content, children: null };
        const obj7 = {
          contentContainerStyle: null,
          scrollIndicatorInsets: null,
          keyboardShouldPersistTaps: "handled",
          children: null,
        };
        const items12 = [tmp3.listContent];
        const obj8 = { paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom };
        items12[1] = obj8;
        obj7.contentContainerStyle = items12;
        const obj9 = { bottom };
        obj7.scrollIndicatorInsets = obj9;
        const items13 = [closure_27(tmp(tmp2[55]), {}), , , ,];
        let tmp24Result = null;
        if (result.length > 0) {
          const obj10 = { style: tmp3.changelog, children: null };
          const obj11 = { style: tmp3.sectionHeading, children: null };
          const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl3 = tmp4(tmp2[32]).intl;
          obj12.children = intl3.string(tmp(tmp2[33]).bTBUeX);
          const items14 = [closure_27(tmp4(tmp2[52]).Text, obj12)];
          const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl4 = tmp4(tmp2[32]).intl;
          obj13.children = intl4.string(tmp(tmp2[33])["ZM/VB/"]);
          items14[1] = closure_27(tmp4(tmp2[52]).Text, obj13);
          obj11.children = items14;
          const items15 = [closure_28(tmp23, obj11), ,];
          const obj14 = {
            style: tmp3.changelogEntries,
            children: result.map((children) => {
              const obj = { style: closure_1.changelogItem, children: null };
              const items = [DateUtils.dateFormat(_modDef4461(children.date, "YYYY-MM-DD"), "LL")];
              let combined = null;
              if (obj3.isConjureChangelogEntryExclusive(children)) {
                const intl = util.intl;
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 " + intl.string(_modDef3723.ybCVge);
              }
              items[1] = combined;
              const items1 = [
                closure_2_28(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
                closure_2_27(Text_Text.Text, {
                  variant: "text-sm/normal",
                  color: "text-subtle",
                  children: children.summary,
                }),
              ];
              obj.children = items1;
              return closure_2_28(options, obj, "" + children.date + "-" + children.summary);
            }),
          };
          items15[1] = closure_27(tmp23, obj14);
          let tmp22Result = null;
          if (tmp4Result.hasMoreConjureChangelog("mobile")) {
            const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
            const intl5 = tmp4(tmp2[32]).intl;
            obj15.text = intl5.string(tmp(tmp2[33]).EwU5zF);
            obj15.onPress = callback3;
            tmp22Result = closure_27(tmp4(tmp2[53]).Button, obj15);
          }
          items15[2] = tmp22Result;
          obj10.children = items15;
          tmp24Result = closure_28(tmp23, obj10);
          tmp4Result = tmp4(tmp2[50]);
        }
        items13[1] = tmp24Result;
        let tmp24Result3 = null;
        if (memo.length > 0) {
          const obj16 = { style: tmp3.section, children: null };
          const obj17 = { style: tmp3.sectionHeading, children: null };
          const obj18 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl6 = tmp4(tmp2[32]).intl;
          obj18.children = intl6.string(tmp(tmp2[33]).dWgSAa);
          const items16 = [closure_27(tmp4(tmp2[52]).Text, obj18)];
          const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl7 = tmp4(tmp2[32]).intl;
          obj19.children = intl7.string(tmp(tmp2[33]).JQpNkh);
          items16[1] = closure_27(tmp4(tmp2[52]).Text, obj19);
          obj17.children = items16;
          const items17 = [closure_28(tmp23, obj17)];
          const obj20 = {
            hasIcons: true,
            children: memo.map((project) =>
              closure_1_27(
                closure_1_35,
                {
                  project,
                  onPress() {
                    return callback(project.id);
                  },
                  onMore() {
                    return closure_9(closure_0);
                  },
                },
                project.id,
              ),
            ),
          };
          items17[1] = closure_27(tmp4(tmp2[58]).TableRowGroup, obj20);
          obj16.children = items17;
          tmp24Result3 = closure_28(tmp23, obj16);
        }
        items13[2] = tmp24Result3;
        let tmp24Result4 = null;
        if (memo1.length > 0) {
          const obj21 = { style: tmp3.section, children: null };
          const obj22 = { style: tmp3.sectionHeading, children: null };
          const obj23 = { variant: "heading-md/bold", color: "text-default", children: null };
          const intl8 = tmp4(tmp2[32]).intl;
          obj23.children = intl8.string(tmp(tmp2[33])["wFi8+o"]);
          const items18 = [closure_27(tmp4(tmp2[52]).Text, obj23)];
          const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
          const intl9 = tmp4(tmp2[32]).intl;
          obj24.children = intl9.string(tmp(tmp2[33]).dQ3U1J);
          items18[1] = closure_27(tmp4(tmp2[52]).Text, obj24);
          obj22.children = items18;
          const items19 = [closure_28(tmp23, obj22)];
          const obj25 = {
            hasIcons: true,
            children: memo1.map((project) =>
              closure_1_27(
                closure_1_35,
                {
                  project,
                  onPress() {
                    return callback(project.id);
                  },
                  onMore() {
                    return closure_9(closure_0);
                  },
                },
                project.id,
              ),
            ),
          };
          items19[1] = closure_27(tmp4(tmp2[58]).TableRowGroup, obj25);
          obj21.children = items19;
          tmp24Result4 = closure_28(tmp23, obj21);
        }
        items13[3] = tmp24Result4;
        items13[4] = null;
        obj7.children = items13;
        obj6.children = closure_28(callback2, obj7);
        return closure_27(closure_9, obj6);
      } else {
        const obj26 = { style: tmp3.centered, children: null };
        if (null != stateFromStores) {
          if ("loading" !== stateFromStores.type) {
            if ("error" === stateFromStores.type) {
              const obj27 = { style: tmp3.listError, children: null };
              const obj28 = { variant: "text-md/normal", color: "text-muted", children: null };
              let intl = tmp4(tmp2[32]).intl;
              obj28.children = intl.string(tmp(tmp2[33]).DJAPMO);
              const items20 = [closure_27(tmp4(tmp2[52]).Text, obj28)];
              const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
              const intl2 = tmp4(tmp2[32]).intl;
              obj29.text = intl2.string(tmp(tmp2[33])["WFJ/vb"]);
              obj29.onPress = function onPress() {
                return ConjureActionCreators.listProjects(guildId);
              };
              items20[1] = closure_27(tmp4(tmp2[53]).Button, obj29);
              obj27.children = items20;
              let tmp16Result2 = closure_28(tmp17, obj27);
            } else {
              const obj30 = { style: tmp3.listError, children: null };
              const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
              const intl10 = tmp4(tmp2[32]).intl;
              obj31.children = intl10.string(tmp(tmp2[33])["9/5sLV"]);
              const items21 = [closure_27(tmp4(tmp2[52]).Text, obj31)];
              const obj32 = { variant: "primary", size: "sm", text: null, onPress: null };
              const intl11 = tmp4(tmp2[32]).intl;
              obj32.text = intl11.string(tmp4(tmp2[32]).t.CumH4u);
              obj32.onPress = callback1;
              items21[1] = closure_27(tmp4(tmp2[53]).Button, obj32);
              obj30.children = items21;
              tmp16Result2 = closure_28(tmp17, obj30);
            }
          }
          obj26.children = tmp16Result2;
          closure_27(tmp17, obj26);
        }
        tmp16Result2 = closure_27(memo2, {});
      }
      const obj5 = guildId(navigation[50]);
    };
let __initData = {
  code: "function ConjureStandaloneScreenTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}",
};
let closure_38 = {
  code: "function ConjureStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}",
};
let closure_39 = {
  code: "function ConjureStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}",
};
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled()
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
      const isConjureGuildEnabled = guildId(stateFromStores[93]).useIsConjureGuildEnabled(tmp15);
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
      const tmpResult6 = guildId(stateFromStores[93]);
      const stateFromStoresArray = guildId(stateFromStores[30]).useStateFromStoresArray(tmp17, tmp20, tmp19);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [GuildStore, PermissionStore];
        cResult[14] = items6;
        let tmp22 = items6;
      } else {
        tmp22 = cResult[14];
      }
      if (cResult[15] !== guildId) {
        class R {
          constructor() {
            guild = closure_13.getGuild(guildId);
            canResult = null != guild;
            if (canResult) {
              tmp3 = closure_14;
              tmp4 = Permissions;
              canResult = closure_14.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        const items7 = [guildId];
        cResult[15] = guildId;
        cResult[16] = R;
        cResult[17] = items7;
        let tmp26 = items7;
      } else {
        class R {
          constructor() {
            guild = closure_13.getGuild(guildId);
            canResult = null != guild;
            if (canResult) {
              tmp3 = closure_14;
              tmp4 = Permissions;
              canResult = closure_14.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        tmp26 = cResult[17];
      }
      const tmpResult7 = guildId(stateFromStores[30]);
      const stateFromStores2 = guildId(stateFromStores[30]).useStateFromStores(tmp22, R, tmp26);
      if (cResult[18] === guildId) {
        class R {
          constructor() {
            guild = closure_13.getGuild(guildId);
            canResult = null != guild;
            if (canResult) {
              tmp3 = closure_14;
              tmp4 = Permissions;
              canResult = closure_14.can(Permissions.MANAGE_GUILD, guild);
            }
            return canResult;
          }
        }
        if (cResult[21] === stateFromStores2) {
          class R {
            constructor() {
              guild = closure_13.getGuild(guildId);
              canResult = null != guild;
              if (canResult) {
                tmp3 = closure_14;
                tmp4 = Permissions;
                canResult = closure_14.can(Permissions.MANAGE_GUILD, guild);
              }
              return canResult;
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
      const fn4 = function k() {
        if (isConjureGuildEnabled) {
          ConjureActionCreators.listProjects(guildId);
        }
      };
      cResult[18] = guildId;
      cResult[19] = isConjureGuildEnabled;
      cResult[20] = fn4;
      const tmpResult8 = guildId(stateFromStores[30]);
    }
  : (guildId) => {
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
      const isConjureGuildEnabled = guildId(stateFromStores[93]).useIsConjureGuildEnabled({
        guildId,
        location: "VibegrationsStandaloneScreen",
      });
      const obj4 = guildId(stateFromStores[93]);
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
        return closure_1_27(guildId(stateFromStores[88]).NavigatorHeader, obj);
      };
      obj8.render = function render() {
        const obj = { children: null };
        obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
        const items = [closure_2_27(closure_41, obj2), closure_2_27(closure_36, { guildId })];
        obj.children = items;
        return closure_2_28(closure_2_29, obj);
      };
      obj7[constants2.PROJECTS] = obj8;
      obj7[constants2.CHAT] = {
        ignoreKeyboard: true,
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            closure_2_27(closure_41, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
            closure_2_27(ChatScene, { guildId, projectId }),
          ];
          obj.children = items;
          return closure_2_28(closure_2_29, obj);
        },
      };
      obj7[constants2.DEBUG] = {
        headerTitle() {
          const obj = { title: null };
          const intl = guildId(stateFromStores[32]).intl;
          obj.title = intl.string(navigation(stateFromStores[33])["Q4FN+H"]);
          return closure_1_27(guildId(stateFromStores[88]).NavigatorHeader, obj);
        },
        render(projectId) {
          projectId = projectId.projectId;
          const obj = { children: null };
          const items = [
            closure_2_27(closure_41, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
            closure_2_27(ConjureDebugSceneDefault, { projectId }),
          ];
          obj.children = items;
          return closure_2_28(closure_2_29, obj);
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
      return closure_27(guildId(stateFromStores[95]).Navigator, obj10);
    };
