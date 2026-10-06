// discord_app/modules/conjure/builder/native/ConjureStandaloneScreen.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl9 from "../../../../intl/index.native.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorHeader2 from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ConjureUtils from "../../shared/ConjureUtils.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import ConjureActionCreators from "../../projects/ConjureActionCreators.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
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
import conjureProjectActions2 from "../../projects/native/conjureProjectActions.tsx";
import ConjureSettingsSheet from "../../settings/native/ConjureSettingsSheet.tsx";
import ConjureConnectToolSheet from "../../external_connections/native/ConjureConnectToolSheet.tsx";
import ConjureHistorySheet from "../../history/native/ConjureHistorySheet.tsx";
import ConjureDebugSceneDefault from "../../debug/native/ConjureDebugScene.tsx";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import conjureDesignFeedbackStore from "../../design_feedback/conjureDesignFeedbackStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjureBuilderRouteStore from "../ConjureBuilderRouteStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const ConjurePublishNotesSheetDefault = ConjurePublishNotesSheet;
const ConjureCreateSheetDefault = ConjureCreateSheet;
const ConjureRemixSheetDefault = ConjureRemixSheet;
const ConjureSettingsSheetDefault = ConjureSettingsSheet;
const ConjureConnectToolSheetDefault = ConjureConnectToolSheet;
const ConjureHistorySheetDefault = ConjureHistorySheet;
let c1, c4, c6, navigation, obj1, openedProjectIdRef;

let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_22;
let closure_23;
let closure_26;
let closure_27;
let closure_28;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function ChatScene(guildId) {
  let Provider;
  let Sme0T0;
  let _undefined;
  let activeMode;
  let closure_25;
  let closure_37;
  let closure_4;
  let closure_5;
  let first;
  let fn;
  let has_activity;
  let intl2;
  let intl3;
  let intl4;
  let isResolving;
  let items33;
  let items34;
  let items35;
  let items37;
  let items38;
  let obj16;
  let obj19;
  let obj21;
  let obj24;
  let obj25;
  let previewAppId;
  let projectGuildId;
  let prop;
  let prop1;
  let prop2;
  let setMode;
  let str5;
  let str6;
  let tmp10;
  let tmp115;
  let tmp38;
  let tmp39;
  let tmp42;
  let tmp43;
  let tmp4Result8;
  let tmp93;
  let tmp99Result;
  let tmp99Result1;
  let widgetApplicationId;
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  navigation = undefined;
  previewAppId = undefined;
  let data;
  let isLoading;
  let availability;
  setMode = undefined;
  let result1;
  let c18;
  let paneHidden;
  let closure_20;
  let closure_21;
  let active;
  let conjureControlActive;
  let guild_id;
  isLaunched = undefined;
  let c26;
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
  let callback21;
  let setting;
  let callback7;
  let closure_42;
  let callback8;
  let callback9;
  let stateFromStores3;
  let preview;
  let isConjureProjectMuted;
  let memo4;
  let tmp = guildId;
  const tmp2 = navigation;
  let obj = guildId(navigation[41]);
  navigation = obj.useNavigation();
  const tmp4 = projectId;
  const bottom = projectId(navigation[40])().bottom;
  const tmp5 = closure_31(bottom);
  _slicedToArray = tmp5;
  let tmp6 = projectId(navigation[55])();
  openedProjectIdRef = tmp6;
  let obj2 = openedProjectIdRef;
  [first, tmp10] = openedProjectIdRef.useState(0);
  let closure_6 = tmp10;
  let obj3 = guildId(navigation[56]);
  let obj4 = { onEnd: fn };
  fn = function p(height) {
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_6);
    runOnJSResult(Math.max(0, height.height - bottom));
  };
  let obj5 = { runOnJS: guildId(navigation[57]).runOnJS, setChatKeyboardCover: tmp10, safeAreaBottom: bottom };
  fn.__closure = obj5;
  fn.__workletHash = 7140225881507;
  fn.__initData = callback5;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj6 = guildId(navigation[30]);
  const items1 = [closure_20];
  const items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(
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
  let obj7 = guildId(navigation[30]);
  const items3 = [closure_20];
  const items4 = [projectId];
  const stateFromStoresObject = obj7.useStateFromStoresObject(
    items3,
    () => {
      let name;
      let prop;
      const project = ConjureProjectStore.getProject(projectId);
      const obj = { projectExists: null != project, projectName: name, projectGuildId: guild_id, previewAppId: prop };
      name = undefined;
      if (project != null) {
        name = project.name;
      }
      if (name == null) {
        name = null;
      }
      guild_id = undefined;
      if (project != null) {
        guild_id = project.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      prop = undefined;
      if (project != null) {
        prop = project.preview_application_id;
      }
      if (prop == null) {
        prop = null;
      }
      return obj;
    },
    items4,
  );
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj8 = guildId(navigation[30]);
  const items5 = [closure_20];
  const items6 = [guildId];
  const stateFromStores1 = obj8.useStateFromStores(
    items5,
    () => {
      const guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(guildId);
      return "unattempted" === guildProjectsFetchState || "loading" === guildProjectsFetchState;
    },
    items6,
  );
  let obj9 = guildId(navigation[30]);
  const items7 = [closure_20];
  const items8 = [projectId];
  const stateFromStores2 = obj9.useStateFromStores(
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
  const tmp12 = closure_20;
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
  const useApplication = tmp(tmp2[29]).useApplication;
  tmp(tmp2[29]);
  let application = useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  let obj10 = {
    applicationId: previewAppId,
    previewApplicationId: previewAppId,
    declaredActivity: true === has_activity,
    installScope: install_scope,
    ownerAuthorizationRevoked: true === prop,
    mainCardOnly: true,
  };
  has_activity = undefined;
  const useConjurePreviewMode = tmp(tmp2[58]).useConjurePreviewMode;
  tmp(tmp2[58]);
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  prop = undefined;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  let tmp25 = true === preview_ready;
  const conjurePreviewMode = useConjurePreviewMode(obj10);
  availability = conjurePreviewMode.availability;
  ({ activeMode, setMode } = conjurePreviewMode);
  ({ widgetApplicationId, isResolving } = conjurePreviewMode);
  const tmpResult13 = tmp(tmp2[59]);
  const conjurePreviewModeRequests = tmpResult13.useConjurePreviewModeRequests(projectId, (arg0) => {
    const modes = availability.modes;
    if (modes.includes(arg0)) {
      setMode(arg0);
    }
  });
  let obj11 = {
    installScope: install_scope,
    previewReady: tmp25,
    integrationInstalled: prop1,
    botPermissionsChanged: true === prop2,
  };
  prop1 = undefined;
  const requiresPermissionReview = tmp(tmp2[60]).requiresPermissionReview;
  tmp(tmp2[60]);
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.integration_installed;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  prop2 = undefined;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  let result = requiresPermissionReview(obj11);
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    const obj = ConjureActionCreators;
    const project = obj.getProject(projectId);
    project.catch(() => {});
  }, items9);
  const tmp33 = null != previewAppId && null != tmp4(tmp2[61])(previewAppId);
  const tmpResult15 = tmp(tmp2[62]);
  result1 = tmpResult15.conjureInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items10 = [result1, previewAppId, data, stateFromStores, projectId];
  const callback = obj2.useCallback(
    bottom(function* () {
      let application;
      let application3;
      let closure_1;
      let closure_2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              navigation = tmp;
              const tmp6 = null != stateFromStores && null != previewAppId;
              if (tmp6) {
                if (null == data) {
                  const obj3 = application(navigation[29]);
                  application = obj3.fetchApplication(previewAppId);
                  c4 = 1;
                  c5 = 1;
                  const obj5 = {
                    value: application.catch(() => {}),
                    done: false,
                  };
                  return obj5;
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
          const obj6 = {
            applicationId: closure_131_10,
            application,
            guildId: closure_131_17,
            onClose() {
              let obj = c0(navigation[62]);
              const result = obj.repairConjureGuildHints(closure_1_7, closure_1_17);
              const cleanupPromise = result.finally(() => {
                const obj = application(closure_2_2[52]);
                return obj.getProject(closure_1_1);
              });
              cleanupPromise.catch(() => {});
            },
          };
          const tmp11 = application3(navigation[63]);
          application3 = closure_131_13;
          const openConjureAppInstallModal = tmp11.openConjureAppInstallModal;
          if (closure_131_13 == null) {
            application3 = application2.getApplication(closure_131_10);
          }
          application = application3;
          if (application3 == null) {
            application = null;
          }
          let result = openConjureAppInstallModal(obj6);
        } catch (tmp27) {
          c5 = 3;
          throw tmp27;
        }
      }
    }),
    items10,
  );
  let tmp7Result = tmp7(obj2.useState(true), 2);
  [tmp38, tmp39] = tmp7Result;
  c18 = tmp39;
  let tmp40 = null;
  const useState = obj2.useState;
  const tmp35 = bottom;
  if (null != stateFromStores2) {
    tmp40 = tmp25;
  }
  [tmp42, tmp43] = _slicedToArray(useState(tmp40), 2);
  _slicedToArray(useState(tmp40), 2);
  const tmp7Result4 = _slicedToArray(obj2.useState(projectId), 2);
  if (tmp7Result4[0] !== projectId) {
    tmp7Result4[1](projectId);
    tmp39(true);
    tmp43(null);
  }
  let tmp48 = tmp25 && null != previewAppId && !isResolving;
  if (tmp48) {
    tmp48 = availability.modes.length > 0 || result;
    const tmp49 = availability.modes.length > 0 || result;
  }
  paneHidden = tmp48 && !tmp38;
  let hasItem = tmp48 && tmp33;
  if (hasItem) {
    let modes = availability.modes;
    const str = "frame";
    hasItem = modes.includes("frame");
  }
  let tmp51 = hasItem && paneHidden;
  if (tmp51) {
    let str2 = "frame";
    tmp51 = "frame" === activeMode;
  }
  closure_20 = tmp51;
  closure_21 = tmp52;
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
  ye.__closure = {
    previewShowing: paneHidden,
    botFaceShowing: paneHidden && "bot" === activeMode,
    keyboardHeight: tmp6,
    safeAreaBottom: bottom,
  };
  ye.__workletHash = 13315848638309;
  ye.__initData = __initData;
  const tmpResult16 = tmp(tmp2[57]);
  const animatedStyle = tmpResult16.useAnimatedStyle(ye);
  function fe() {
    let items;
    num = 0;
    if (!paneHidden) {
      const _Math = Math;
      num = -Math.max(0, closure_5.get() - bottom);
    }
    const obj = { transform: items };
    items = [{ translateY: num }];
    return obj;
  }
  fe.__closure = { previewShowing: paneHidden, keyboardHeight: tmp6, safeAreaBottom: bottom };
  fe.__workletHash = 2668549423950;
  fe.__initData = callback6;
  const tmpResult17 = tmp(tmp2[57]);
  const animatedStyle1 = tmpResult17.useAnimatedStyle(fe);
  active = paneHidden(projectId).active;
  const tmpResult18 = tmp(tmp2[64]);
  conjureControlActive = tmpResult18.useConjureControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmp4Result = tmp4(tmp2[65]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = tmp4Result(guild_id, application_id);
  isLaunched = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_25) {
      fn = () => {
        const obj = guildId(navigation[27]);
        return obj.transitionTo(conjureControlActive.CHANNEL(guild_id, closure_1_25));
      };
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[32]).intl;
  const string = intl.string;
  const tmp4Result5 = tmp4(tmp2[33]);
  if (conjureControlActive) {
    Sme0T0 = tmp4Result5.Sme0T0;
  } else {
    Sme0T0 = active ? tmp4Result5.vn5Rzu : tmp4Result5["cl/Jyl"];
  }
  const stringResult = string(Sme0T0);
  c26 = stringResult;
  const items12 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      authStore4(projectId);
    } else {
      closure_17(projectId);
    }
  }, items12);
  const items13 = [availability.modes];
  const items14 = [availability.modes, setMode];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let modes;
    let obj = { id: "chat", label: intl.string(_modDef3753["1HH2p9"]), page: null };
    intl = intl9.intl;
    const items = [
      obj,
      ...modes.map((id) => {
        let obj2;
        const obj = { id, label: obj2.getPreviewModeLabel(id), page: null };
        obj2 = guildId(navigation[66]);
        return obj;
      }),
    ];
    modes = availability.modes;
    return items;
  }, items13);
  const first1 = availability.modes[0];
  let tmp67 = null != stateFromStores2;
  const callback2 = obj2.useCallback((arg0) => {
    metroImportDefault.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(availability.modes[arg0 - 1]);
    }
  }, items14);
  if (tmp67) {
    tmp67 = tmp25 !== tmp42;
  }
  if (tmp67) {
    const tmp68 = false === tmp42 && tmp25 && null != first1;
    if (tmp68) {
      setMode(first1);
      tmp39(false);
    }
    tmp43(tmp25);
  }
  const width = tmp4(tmp2[67])().width;
  let obj12 = { items: memo1, pageWidth: width - 2 * projectGuildId, onSetActiveIndex: callback2 };
  const tmpResult19 = tmp(tmp2[68]);
  const segmentedControlState = tmpResult19.useSegmentedControlState(obj12);
  num = 0;
  if (!tmp38) {
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
    () =>
      null != previewAppId
        ? () => {
            const obj = guildId(navigation[69]);
            return obj.leaveConjurePreviewFrame(previewAppId);
          }
        : undefined,
    items16,
  );
  const items17 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj2.useMemo(() => {
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items17);
  const tmp76 = tmp4(tmp2[70])(projectId, memo2);
  closure_31 = tmp76;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items18 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = {
      content: prioritySpeakerDucking(ConjureSettingsSheetDefault, obj2),
      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
    };
    obj2 = { projectId, guildId: projectGuildId, isPreview: true };
    showActionSheet(obj);
  }, items18);
  const items19 = [guildId, navigation];
  memo3 = obj2.useMemo(() => {
    let closure_0 = guildId;
    const f146311 = (projectId) => {
      const obj = { projectId };
      return closure_1_2.push(constants.CHAT, obj);
    };
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        closure_1(arg0);
      } else {
        const obj = guildId(stateFromStoresArray[27]);
        obj.transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
      }
    };
  }, items19);
  const items20 = [guildId, memo3, stateFromStores];
  callback4 = obj2.useCallback(() => {
    let obj2;
    if (null != stateFromStores) {
      const obj = {
        key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
        content: prioritySpeakerDucking(ConjureRemixSheetDefault, obj2),
      };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      obj2 = { project: tmp, currentGuildId: guildId, onRemixed: memo3 };
      showActionSheet(obj);
    }
  }, items20);
  const items21 = [projectId];
  callback5 = obj2.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = {
      key: ConjureConnectToolSheet.CONJURE_CONNECT_TOOL_SHEET_KEY,
      content: prioritySpeakerDucking(ConjureConnectToolSheetDefault, obj2),
    };
    obj2 = { projectId };
    showActionSheet(obj);
  }, items21);
  __initData = obj2.useRef(false);
  const useCallback = obj2.useCallback;
  let closure_0 = tmp35(function* (arg0) {
    let Z4n6LX;
    let closure_3;
    let formatToPlainString;
    let intl2;
    let obj12;
    let obj14;
    let obj2;
    closure_0 = arg0;
    let closure_1 = arg1;
    if (1 === c6) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else if (!ref.current) {
        ref.current = true;
        const obj6 = {
          key: "VIBEGRATIONS_VERSION_RESTORING",
          content: intl2.string(projectId(navigation[33]).qqlUiW),
          IconComponent: closure_0(navigation[72]).UndoIcon,
        };
        const open = projectId(navigation[24]).open;
        const tmp40 = projectId(navigation[24]);
        intl2 = closure_0(navigation[32]).intl;
        open(obj6);
        let c5 = 2;
        c6 = 4;
        c7 = 1;
        const obj7 = { value: setMode(closure_1, closure_0.sha), done: false };
        return obj7;
      }
    } else if (2 === c6) {
      c5 = 0;
      ref.current = false;
      throw closure_4;
    } else if (3 === c6) {
      const presentError = closure_0(navigation[73]).presentError;
      const tmp23 = closure_0(navigation[73]);
      const intl = closure_0(navigation[32]).intl;
      presentError(intl.string(projectId(navigation[33])["PSdo+w"]));
      c5 = 0;
      ref.current = false;
      c7 = 3;
      const obj8 = { value: undefined, done: true };
      return obj8;
    } else {
      if (4 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          ref.current = false;
          c7 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c5 = 1;
          const obj10 = {
            key: "VIBEGRATIONS_VERSION_RESTORED",
            content: formatToPlainString(Z4n6LX, obj12),
            IconComponent: closure_0(navigation[72]).UndoIcon,
          };
          const open2 = projectId(navigation[24]).open;
          const tmp72 = projectId(navigation[24]);
          const intl3 = closure_0(navigation[32]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj12 = { title: obj14.versionTitle(closure_0.subject).short };
          Z4n6LX = projectId(navigation[33]).Z4n6LX;
          obj14 = closure_0(navigation[74]);
          open2(obj10);
          if (null != c1) {
            c6 = 5;
            c7 = 1;
            const obj13 = { value: obj2.rewindDataAfterVersionRestore(closure_1, c1), done: false };
            obj2 = closure_0(navigation[75]);
            return obj13;
          }
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        ref.current = false;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        let closure_2 = value;
        if (null != closure_2) {
          const obj11 = closure_0(navigation[73]);
          obj11.presentError(closure_2);
        }
      }
      c5 = 0;
      ref.current = false;
    }
    yield "IconComponent";
    closure_2 = tmp4;
    let tmp54 = closure_1;
    if (closure_1 === undefined) {
      tmp54 = null;
    }
    c1 = tmp54;
    return "Reflect";
  });
  const items22 = [projectId];
  callback6 = useCallback(function () {
    return closure_0(...arguments);
  }, items22);
  const items23 = [callback6, ,];
  let install_scope1;
  const useCallback2 = obj2.useCallback;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  items23[1] = install_scope1;
  items23[2] = projectId;
  callback21 = useCallback2(() => {
    let install_scope;
    let obj2;
    let tmp3;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { key: ConjureHistorySheet.CONJURE_HISTORY_SHEET_KEY, content: prioritySpeakerDucking(tmp3, obj2) };
    obj2 = { projectId, installScope: install_scope, onRestoreVersion: callback6 };
    install_scope = undefined;
    tmp3 = ConjureHistorySheetDefault;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    showActionSheet(obj);
  }, items23);
  const DeveloperMode = tmp(tmp2[77]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback7 = obj2.useCallback(() => {
    const obj = { projectId };
    return navigation.push(callback3.DEBUG, obj);
  }, items24);
  const tmp4Result6 = tmp4(tmp2[78]);
  const tmp87 = isLaunched(tmp4Result6(previewAppId, tmp(tmp2[79]).CONJURE_PREVIEW_SURFACE));
  closure_42 = tmp87;
  const items25 = [previewAppId];
  callback8 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartConjureAppFramesDefault(tmp);
    }
  }, items25);
  const items26 = [navigation, projectId];
  callback9 = obj2.useCallback(() => {
    availability(projectId);
    navigation.goBack();
  }, items26);
  const items27 = [tmp12];
  const items28 = [projectId];
  const tmpResult20 = tmp(tmp2[30]);
  stateFromStores3 = tmpResult20.useStateFromStores(
    items27,
    () => ConjureProjectStore.isProjectDeleting(projectId),
    items28,
  );
  const items29 = [stateFromStores3, callback9];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores3) {
      callback9();
    }
  }, items29);
  let obj13 = { projectId, refreshApplicationId: tmp93 };
  const modes2 = availability.modes;
  tmp93 = null;
  const tmp4Result7 = tmp4(tmp2[81]);
  if (modes2.includes("widget")) {
    tmp93 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp93 = widgetApplicationId;
    }
  }
  const tmp4Result3Result = tmp4Result7(obj13);
  preview = tmp4Result3Result;
  const tmpResult21 = tmp(tmp2[46]);
  isConjureProjectMuted = tmpResult21.useIsConjureProjectMuted(projectId);
  const items30 = [
    setting,
    guildId,
    isConjureProjectMuted,
    callback9,
    callback5,
    callback7,
    callback4,
    callback3,
    callback21,
    callback8,
    tmp87,
    tmp4Result3Result,
    stateFromStores,
    tmp76,
  ];
  memo4 = obj2.useMemo(() => {
    let intl;
    let intl2;
    let str2;
    let tmp16;
    let tmp24;
    const items = [];
    if (null != disabledReason) {
      const push = items.push;
      const obj = {
        label: tmp.label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
          if (null != disabledReason.disabledReason) {
            const obj3 = { key: "VIBEGRATIONS_PUBLISH_NEEDS_PERMISSIONS", content: disabledReason.disabledReason };
            const obj2 = projectId(navigation[24]);
            obj2.open(obj3);
          } else if (!disabledReason.disabled) {
            disabledReason.run("header");
          }
        },
      };
      push(obj);
    }
    let obj2 = { label: intl.string(_modDef3753.I2XSKe), IconComponent: SettingsIcon.SettingsIcon, action: callback3 };
    const push2 = items.push;
    intl = intl9.intl;
    push2(obj2);
    if (setting) {
      let obj3 = { label: intl2.string(_modDef3753["Q4FN+H"]), IconComponent: BugIcon.BugIcon, action: callback7 };
      const push3 = items.push;
      intl2 = intl9.intl;
      push3(obj3);
    }
    if (null != stateFromStores) {
      const obj5 = {
        project: tmp15,
        guildId,
        muted: isConjureProjectMuted,
        onRemix: callback4,
        onConnectTool: callback5,
        onHistory: callback21,
        onRefresh: tmp16,
        onClose: callback9,
        preview,
      };
      tmp16 = undefined;
      const conjureProjectActions = conjureProjectActions2.conjureProjectActions;
      conjureProjectActions2;
      if (closure_42) {
        tmp16 = callback8;
      }
      const result = conjureProjectActions(obj5);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj9 = { label: null, IconComponent: null, variant: str2, action: tmp24.action };
        ({ label: obj4.label, IconComponent: obj4.IconComponent } = nextResult);
        str2 = undefined;
        tmp24 = nextResult;
        let push4 = items.push;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        let push4Result = push4(obj9);
        continue;
      }
    }
    return items;
  }, items30);
  const items31 = [
    conjureControlActive,
    active,
    stringResult,
    tmp51,
    callback1,
    navigation,
    memo4,
    projectExists,
    projectName,
    stateFromStores1,
    tmp5,
  ];
  const effect4 = obj2.useEffect(() => {
    let accessibilityLabel;
    let disabled;
    let headerActions;
    let onPress;
    let tmp = projectName;
    if (projectName == null) {
      let intl = guildId(navigation[32]).intl;
      if (!projectExists) {
        let uk6jhJ;
        if (!stateFromStores1) {
          uk6jhJ = projectId(navigation[33]).G1WwgK;
        }
        tmp = tmp4(uk6jhJ);
      }
      uk6jhJ = projectId(navigation[33]).uk6jhJ;
    }
    const title = tmp;
    let obj = {
      headerTitle() {
        const obj = { title };
        return prioritySpeakerDucking(NavigatorHeader2.NavigatorHeader, obj);
      },
      headerRight() {
        let obj3;
        let tmp = null;
        if (projectExists) {
          let obj = { style: headerActions.headerActions, children: items };
          let tmp7Result = null;
          if (closure_1_20) {
            let ExperimentalDirectSelectIcon;
            const tmp10 = projectId(navigation[37]);
            if (active) {
              ExperimentalDirectSelectIcon = activeIndex;
            } else {
              ExperimentalDirectSelectIcon = guildId(navigation[19]).ExperimentalDirectSelectIcon;
            }
            const obj2 = {
              IconComponent: ExperimentalDirectSelectIcon,
              onPress,
              accessibilityLabel,
              accessibilityState: obj3,
              disabled,
            };
            obj3 = { selected: active };
            tmp7Result = accessibilityLabel(tmp10, obj2);
          }
          items = [tmp7Result];
          const obj4 = {
            items,
            align: "below",
            children(arg0) {
              let accessibilityActions;
              let intl;
              let onAccessibilityAction;
              let ref;
              ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
              const obj = {
                ref,
                IconComponent: title(closure_1_2[38]).MoreHorizontalIcon,
                onPress,
                accessibilityLabel: intl.string(title(closure_1_2[32]).t["UKOtz+"]),
                accessibilityActions,
                onAccessibilityAction,
              };
              const tmp = closure_1_1(closure_1_2[37]);
              intl = title(closure_1_2[32]).intl;
              return accessibilityLabel(tmp, obj);
            },
          };
          items[1] = accessibilityLabel(guildId(navigation[86]).ContextMenu, obj4);
          tmp = callback1(projectName, obj);
        }
        return tmp;
      },
    };
    navigation.setOptions(obj);
  }, items31);
  const items32 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    let obj = ConjureActionCreators;
    const result = obj.setSelectedProjectForGuild(guildId, projectId);
    return () => {
      const obj = guildId(navigation[52]);
      return obj.setSelectedProjectForGuild(closure_1_0, null);
    };
  }, items32);
  if (projectExists) {
    let obj14 = { style: items33, children: items34 };
    items33 = [tmp5.contentBare, animatedStyle];
    let tmp106 = null;
    const View = tmp4(tmp2[57]).View;
    if (tmp48) {
      const obj15 = { style: tmp5.segments, children: c26(tmp(tmp2[87]).SegmentedControl, obj16) };
      obj16 = { state: segmentedControlState, variant: "experimental_Small" };
      tmp106 = c26(projectName, obj15);
    }
    items34 = [tmp106];
    let tmp111Result = null;
    const obj17 = { style: tmp5.panes, children: items35 };
    if (hasItem) {
      tmp111Result = null;
      if (null != previewAppId) {
        const obj18 = {
          style: tmp51 ? tmp5.pane : tmp5.paneBackstage,
          pointerEvents: str5,
          accessibilityElementsHidden: !tmp51,
          importantForAccessibility: str6,
          children: c26(tmp(tmp2[69]).PreviewFrame, obj19),
        };
        str5 = "none";
        if (tmp51) {
          str5 = "auto";
        }
        str6 = "no-hide-descendants";
        if (tmp51) {
          str6 = "auto";
        }
        obj19 = { applicationId: previewAppId, projectId, visible: tmp51, onOpenPublishedApp: memo };
        tmp111Result = tmp111(tmp109, obj18);
      }
    }
    items35 = [tmp111Result, ,];
    let tmp113Result = null;
    if (paneHidden) {
      tmp113Result = null;
      if (null != previewAppId) {
        tmp113Result = null;
        if (!tmp51) {
          const obj20 = { style: tmp5.pane, children: c26(tmp4Result8, obj21) };
          obj21 = {
            projectId,
            previewApplicationId: previewAppId,
            mode: activeMode,
            availability,
            widgetApplicationId,
            frameHostAvailable: tmp33,
            permissionsGate: tmp115,
          };
          tmp115 = null;
          tmp4Result8 = tmp4(tmp2[69]);
          const tmpResult22 = tmp(tmp2[60]);
          if (tmpResult22.permissionReviewBlocksMode(activeMode, result)) {
            tmp115 = { onReviewPermissions: callback, loading: isLoading };
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
          }
          tmp113Result = tmp113(tmp109, obj20);
        }
      }
    }
    items35[1] = tmp113Result;
    const items36 = [tmp5.chatPane, ,];
    const View2 = tmp4(tmp2[57]).View;
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    items36[1] = paneHidden;
    items36[2] = animatedStyle1;
    const obj23 = { style: items36, children: c26(Provider, obj24) };
    obj24 = { value: memo2, children: c26(tmp4(tmp2[88]), obj25) };
    Provider = tmp(tmp2[70]).ConjurePublishActionContext.Provider;
    obj25 = { projectId, transcriptTopInset: first, onRestoreVersion: callback6 };
    items35[2] = c26(View2, obj23);
    items34[1] = callback1(projectName, obj17);
    tmp99Result1 = tmp105(View, obj14);
  } else {
    const obj26 = { style: items37, children: tmp99Result };
    items37 = [,];
    ({ content: arr35[0], centered: arr35[1] } = tmp5);
    if (stateFromStores1) {
      tmp99Result = tmp99(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: items38 };
      const obj28 = {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: intl2.string(tmp4(tmp2[33]).G1WwgK),
      };
      const Text = tmp(tmp2[50]).Text;
      intl2 = tmp(tmp2[32]).intl;
      items38 = [c26(Text, obj28), ,];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: intl3.string(tmp4(tmp2[33]).fINulo) };
      const Text2 = tmp(tmp2[50]).Text;
      intl3 = tmp(tmp2[32]).intl;
      items38[1] = c26(Text2, obj29);
      const obj30 = {
        variant: "secondary",
        size: "sm",
        text: intl4.string(tmp4(tmp2[33])["WFJ/vb"]),
        onPress() {
          const obj = ConjureActionCreators;
          return obj.listProjects(guildId);
        },
      };
      const Button = tmp(tmp2[51]).Button;
      intl4 = tmp(tmp2[32]).intl;
      items38[2] = c26(Button, obj30);
      tmp99Result = callback1(tmp100, obj27);
    }
    tmp99Result1 = tmp99(tmp100, obj26);
  }
  return tmp99Result1;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({
  ActivityIndicator: metroRequire,
  Keyboard: metroImportDefault,
  ScrollView: metroImportAll,
  View: c9,
} = react_native);
({ closeConnection: closure_15, restoreSourceHistoryEntry: closure_16 } = ConjureConnectionStore);
({
  enterConjureDesignFeedback: closure_17,
  exitConjureDesignFeedback: closure_18,
  useConjureDesignFeedback: closure_19,
} = conjureDesignFeedbackStore);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let isLaunched = FramesConstants.isLaunched;
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
        const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
        const tmp7 = prioritySpeakerDucking(ExperimentalDirectSelectIcon, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const obj = { color: nativeDefault.colors.TEXT_BRAND };
      const ExperimentalDirectSelectIcon = ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon;
      return prioritySpeakerDucking(ExperimentalDirectSelectIcon, obj);
    };
let platform = {
  showPublishBlocked: ConjurePublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    let applicationId;
    let initialDraft;
    let projectName;
    let publish;
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    const obj = {
      content: prioritySpeakerDucking(ConjurePublishNotesSheetDefault, {
        guildId,
        applicationId,
        projectName,
        publish,
        initialDraft,
      }),
      key: ConjurePublishNotesSheet.CONJURE_PUBLISH_NOTES_SHEET_KEY,
    };
    showActionSheet(obj);
  },
  showError(content) {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { key: "CONJURE_PUBLISH_FAILED", content };
    return obj.open(obj2);
  },
  openProfile(userId) {
    const obj = { userId };
    showUserProfileActionSheetDefault(obj);
  },
};
let closure_31 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    contentBare: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 },
    listContent: {
      paddingVertical: nativeDefault.space.PX_8,
      paddingHorizontal: nativeDefault.space.PX_16,
      gap: nativeDefault.space.PX_24,
    },
    section: { gap: nativeDefault.space.PX_8 },
    projectRowTrailing: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
    unreadPill: size,
    sectionHeading: { gap: nativeDefault.space.PX_4 },
    listError: { alignItems: "center", gap: nativeDefault.space.PX_12 },
    headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 },
    segments: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 },
    panes: { flex: 1, overflow: "hidden" },
    pane: { flex: 1 },
    chatPane: { flex: 1, paddingBottom },
    paneHidden: { display: "none" },
    paneBackstage: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 },
  };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom });
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 });
  ({
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  size = {
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
  ({ gap: nativeDefault.space.PX_4 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 });
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (project) {
      let date;
      let first;
      let getRelativeTimestamp;
      let intl4;
      let items2;
      let items3;
      let obj10;
      let onMore;
      let onPress;
      let tmp12;
      let tmp8;
      let tmp9;
      const obj = project(576);
      const cResult = obj.c(35);
      project = project.project;
      ({ onPress, onMore } = project);
      const tmp4 = closure_31(0);
      const obj2 = project(16181);
      const conjureProjectUnreadStatus = obj2.useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      const tmpResult = project(6665);
      const data = tmpResult.useApplication(application_id).data;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        first = items;
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult3 = project(504);
      const stateFromStores = tmpResult3.useStateFromStores(first, tmp8, tmp9);
      const tmp11 =
        conjureProjectUnreadStatus === project(16182).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
      if (cResult[4] !== project.updated_at) {
        let formatToPlainStringResult;
        if (null != project.updated_at) {
          const intl = tmp(1126).intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj3 = { time: getRelativeTimestamp(date.getTime()) };
          const AXydi3 = _modDef3753.AXydi3;
          const _Date = Date;
          const self = this;
          const self2 = this;
          getRelativeTimestamp = project(7139).getRelativeTimestamp;
          project(7139);
          date = new Date(project.updated_at);
          formatToPlainStringResult = formatToPlainString(AXydi3, obj3);
        }
        cResult[4] = project.updated_at;
        cResult[5] = formatToPlainStringResult;
        tmp12 = formatToPlainStringResult;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        let tmp17;
        let tmp20;
        if (cResult[7] === tmp12) {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== tmp11) {
          let stringResult;
          if (tmp11) {
            const intl3 = tmp(1126).intl;
            stringResult = intl3.string(_modDef3753.hfIuc7);
          }
          cResult[9] = tmp11;
          cResult[10] = stringResult;
          tmp20 = stringResult;
        } else {
          tmp20 = cResult[10];
        }
        let icon;
        if (data != null) {
          icon = data.icon;
        }
        if (cResult[11] === application_id) {
          let tmp24;
          let tmp29Result;
          if (cResult[12] === icon) {
            tmp24 = cResult[13];
          }
          if (cResult[14] === stateFromStores) {
            if (cResult[15] === tmp11) {
              if (cResult[16] === onMore) {
                let tmp28;
                if (cResult[17] === tmp4) {
                  tmp28 = cResult[18];
                }
                if (cResult[19] === stateFromStores) {
                  if (cResult[20] === onMore) {
                    if (cResult[21] === onPress) {
                      if (cResult[22] === project.name) {
                        if (cResult[23] === tmp17) {
                          if (cResult[24] === tmp20) {
                            if (cResult[25] === tmp24) {
                              let tmp40;
                              if (cResult[26] === tmp28) {
                                tmp40 = cResult[27];
                              }
                              if (cResult[28] === stateFromStores) {
                                if (cResult[29] === tmp4) {
                                  let tmp43;
                                  if (cResult[30] === conjureProjectUnreadStatus) {
                                    tmp43 = cResult[31];
                                  }
                                  if (cResult[32] === tmp40) {
                                    let tmp47;
                                    if (cResult[33] === tmp43) {
                                      tmp47 = cResult[34];
                                    }
                                    return tmp47;
                                  }
                                  const obj4 = { children: items2 };
                                  items2 = [tmp40, tmp43];
                                  const tmp50 = closure_27(closure_9, obj4);
                                  cResult[32] = tmp40;
                                  cResult[33] = tmp43;
                                  cResult[34] = tmp50;
                                  tmp47 = tmp50;
                                }
                              }
                              let tmp44 = null;
                              if (null != conjureProjectUnreadStatus) {
                                tmp44 = null;
                                if (!stateFromStores) {
                                  const obj5 = {
                                    style: tmp4.unreadPill,
                                    pointerEvents: "none",
                                    accessibilityElementsHidden: true,
                                    importantForAccessibility: "no",
                                  };
                                  tmp44 = closure_26(closure_9, obj5);
                                }
                              }
                              cResult[28] = stateFromStores;
                              cResult[29] = tmp4;
                              cResult[30] = conjureProjectUnreadStatus;
                              cResult[31] = tmp44;
                              tmp43 = tmp44;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj6 = {
                  label: project.name,
                  subLabel: tmp17,
                  accessibilityHint: tmp20,
                  disabled: stateFromStores,
                  icon: tmp24,
                  trailing: tmp28,
                  onPress,
                  onLongPress: onMore,
                };
                const tmp42 = closure_26(project(6000).TableRow, obj6);
                cResult[19] = stateFromStores;
                cResult[20] = onMore;
                cResult[21] = onPress;
                cResult[22] = project.name;
                cResult[23] = tmp17;
                cResult[24] = tmp20;
                cResult[25] = tmp24;
                cResult[26] = tmp28;
                cResult[27] = tmp42;
                tmp40 = tmp42;
              }
            }
          }
          if (stateFromStores) {
            tmp29Result = closure_26(closure_6, {});
          } else {
            let tmp31 = null;
            const obj7 = { style: tmp4.projectRowTrailing, children: items3 };
            if (tmp11) {
              tmp31 = closure_26(MentionsBadgeDefault, { mentionsCount: 1 });
            }
            items3 = [tmp31];
            const obj8 = {
              IconComponent: project(7588).MoreHorizontalIcon,
              onPress: onMore,
              accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]),
            };
            const tmp36 = ConjureHeaderIconButtonDefault;
            intl4 = tmp(1126).intl;
            items3[1] = closure_26(tmp36, obj8);
            tmp29Result = closure_27(closure_9, obj7);
          }
          cResult[14] = stateFromStores;
          cResult[15] = tmp11;
          cResult[16] = onMore;
          cResult[17] = tmp4;
          cResult[18] = tmp29Result;
          tmp28 = tmp29Result;
        }
        const obj9 = { application: obj10 };
        obj10 = { id: application_id, icon };
        const tmp27 = closure_26(TableRowApplicationIconDefault, obj9);
        cResult[11] = application_id;
        cResult[12] = icon;
        cResult[13] = tmp27;
        tmp24 = tmp27;
      }
      let stringResult1 = tmp12;
      if (stateFromStores) {
        const intl2 = tmp(1126).intl;
        stringResult1 = intl2.string(_modDef3753.Yh5pAc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = tmp12;
      cResult[8] = stringResult1;
      tmp17 = stringResult1;
    }
  : function (project) {
      let date;
      let getRelativeTimestamp;
      let icon;
      let intl4;
      let items2;
      let obj4;
      let stringResult;
      let tmp12Result;
      let tmp19;
      project = project.project;
      const onMore = project.onMore;
      const onPress = project.onPress;
      const tmp = closure_31(0);
      const obj = project(16181);
      const conjureProjectUnreadStatus = obj.useConjureProjectUnreadStatus(project.id);
      let application_id = project.preview_application_id;
      if (application_id == null) {
        application_id = project.application_id;
      }
      const tmp2Result = project(6665);
      const data = tmp2Result.useApplication(application_id).data;
      const items = [ConjureProjectStore];
      const items1 = [project.id];
      const tmp2Result3 = project(504);
      const stateFromStores = tmp2Result3.useStateFromStores(
        items,
        () => ConjureProjectStore.isProjectDeleting(project.id),
        items1,
      );
      const tmp6 =
        conjureProjectUnreadStatus === tmp2(16182).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
      let formatToPlainStringResult;
      if (null != project.updated_at) {
        const intl = tmp2(1126).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj2 = { time: getRelativeTimestamp(date.getTime()) };
        const AXydi3 = _modDef3753.AXydi3;
        const _Date = Date;
        const self = this;
        const self2 = this;
        getRelativeTimestamp = project(7139).getRelativeTimestamp;
        project(7139);
        date = new Date(project.updated_at);
        formatToPlainStringResult = formatToPlainString(AXydi3, obj2);
      }
      const obj3 = {
        label: project.name,
        subLabel: formatToPlainStringResult,
        accessibilityHint: stringResult,
        disabled: stateFromStores,
        icon: closure_26(tmp19, { application: obj4 }),
        trailing: tmp12Result,
        onPress,
        onLongPress: onMore,
      };
      const TableRow = tmp2(6000).TableRow;
      if (stateFromStores) {
        const intl2 = tmp2(1126).intl;
        formatToPlainStringResult = intl2.string(_modDef3753.Yh5pAc);
      }
      stringResult = undefined;
      if (tmp6) {
        const intl3 = tmp2(1126).intl;
        stringResult = intl3.string(_modDef3753.hfIuc7);
      }
      obj4 = { id: application_id, icon };
      icon = undefined;
      tmp19 = TableRowApplicationIconDefault;
      if (data != null) {
        icon = data.icon;
      }
      if (stateFromStores) {
        tmp12Result = closure_26(closure_6, {});
      } else {
        let tmp14Result3 = null;
        const obj5 = { style: tmp.projectRowTrailing, children: items2 };
        if (tmp6) {
          tmp14Result3 = closure_26(MentionsBadgeDefault, { mentionsCount: 1 });
        }
        items2 = [tmp14Result3];
        const obj6 = {
          IconComponent: project(7588).MoreHorizontalIcon,
          onPress: onMore,
          accessibilityLabel: intl4.string(project(1126).t["UKOtz+"]),
        };
        const tmp18Result = ConjureHeaderIconButtonDefault;
        intl4 = tmp2(1126).intl;
        items2[1] = closure_26(tmp18Result, obj6);
        tmp12Result = closure_27(closure_9, obj5);
      }
      const children = [closure_26(TableRow, obj3)];
      let tmp14Result4 = null;
      if (null != conjureProjectUnreadStatus) {
        tmp14Result4 = null;
        if (!stateFromStores) {
          const obj7 = {
            style: tmp.unreadPill,
            pointerEvents: "none",
            accessibilityElementsHidden: true,
            importantForAccessibility: "no",
          };
          tmp14Result4 = closure_26(closure_9, obj7);
        }
      }
      children[1] = tmp14Result4;
      return closure_27(closure_9, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_3;
      let closure_4;
      let closure_5;
      let settings;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp28;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = guildId;
      let obj = guildId(F[18]);
      const cResult = obj.c(75);
      guildId = guildId.guildId;
      const bottom = navigation(F[40])().bottom;
      closure_31(0);
      let obj2 = guildId(F[41]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        const fn = function o() {
          return ConjureProjectStore.getOwnedProjects();
        };
        const items1 = [];
        cResult[0] = items;
        let num = 1;
        cResult[1] = fn;
        let num2 = 2;
        cResult[2] = items1;
        tmp6 = items;
        tmp7 = fn;
        tmp8 = items1;
      } else {
        [tmp6, tmp7, tmp8] = cResult;
      }
      const tmpResult = tmp(F[30]);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[3] = items2;
        tmp10 = items2;
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
        tmp13 = items3;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const tmpResult3 = tmp(F[30]);
      const stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp10, tmp12, tmp13);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [ConjureProjectStore];
        const fn3 = function f() {
          return ConjureProjectStore.getProjectsFetchState();
        };
        const items5 = [];
        cResult[7] = items4;
        cResult[8] = fn3;
        cResult[9] = items5;
        tmp16 = items5;
        tmp15 = fn3;
        tmp14 = items4;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
        tmp16 = cResult[9];
      }
      const tmpResult4 = tmp(F[30]);
      const stateFromStores = tmpResult4.useStateFromStores(tmp14, tmp15, tmp16);
      if (cResult[10] === stateFromStoresArray) {
        if (cResult[16] !== stateFromStoresArray1) {
          const _Symbol = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor(updated_at, updated_at2) {
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
              }
            }
            cResult[18] = O;
          } else {
            class O {
              constructor(updated_at, updated_at2) {
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
              }
            }
          }
          const substr = stateFromStoresArray1.slice();
          const sorted = substr.sort(O);
          cResult[16] = stateFromStoresArray1;
          cResult[17] = sorted;
        } else {
          class O {
            constructor(updated_at, updated_at2) {
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
            }
          }
        }
        if (cResult[19] !== navigation) {
          class F {
            constructor(projectId) {
              const obj = { projectId };
              return navigation.push(constants.CHAT, obj);
            }
          }
          cResult[19] = navigation;
          cResult[20] = F;
        } else {
          class F {
            constructor(projectId) {
              const obj = { projectId };
              return navigation.push(constants.CHAT, obj);
            }
          }
        }
        F = tmp27;
        if (cResult[21] === guildId) {
          class F {
            constructor(projectId) {
              const obj = { projectId };
              return navigation.push(constants.CHAT, obj);
            }
          }
          _asyncToGenerator = tmp28;
          if (cResult[24] === guildId) {
            class F {
              constructor(projectId) {
                const obj = { projectId };
                return navigation.push(constants.CHAT, obj);
              }
            }
            _slicedToArray = X;
            if (cResult[27] === guildId) {
              class F {
                constructor(projectId) {
                  const obj = { projectId };
                  return navigation.push(constants.CHAT, obj);
                }
              }
              const react = V;
              if (cResult[30] === guildId) {
                class F {
                  constructor(projectId) {
                    const obj = { projectId };
                    return navigation.push(constants.CHAT, obj);
                  }
                }
              }
              class Y {
                constructor(arg0) {
                  closure_0 = guildId;
                  tmp = guildId(closure_2[45]);
                  obj = {
                    project: guildId,
                    guildId: closure_0,
                    muted: null,
                    openChat: null,
                    onRemix: null,
                    onOpenSettings: null,
                  };
                  conjureProjectActions = tmp.conjureProjectActions;
                  obj2 = guildId(closure_2[46]);
                  obj.muted = obj2.isConjureProjectMuted(closure_1_11.settings, guildId.id);
                  obj.openChat = function openChat() {
                    return F(project.id);
                  };
                  obj.onRemix = function onRemix() {
                    return openedProjectIdRef(project);
                  };
                  obj.onOpenSettings = function onOpenSettings() {
                    let guild_id;
                    let obj2;
                    let tmp3;
                    const tmp = ActionSheetActionCreators;
                    const showActionSheet = tmp.showActionSheet;
                    const obj = {
                      key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
                      content: prioritySpeakerDucking(tmp3, obj2),
                    };
                    obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
                    guild_id = project.guild_id;
                    tmp3 = ConjureSettingsSheetDefault;
                    if (guild_id == null) {
                      guild_id = guildId;
                    }
                    return showActionSheet(obj);
                  };
                  result = conjureProjectActions(obj);
                  obj3 = guildId(closure_2[48]);
                  obj1 = {
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
                  result1 = obj3.showSimpleActionSheet(obj1);
                  return;
                }
              }
              cResult[30] = guildId;
              cResult[31] = tmp27;
              cResult[32] = V;
              cResult[33] = Y;
            }
            class V {
              constructor(project) {
                let obj2;
                const tmp = ActionSheetActionCreators;
                const showActionSheet = tmp.showActionSheet;
                const obj = {
                  key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
                  content: prioritySpeakerDucking(ConjureRemixSheetDefault, obj2),
                };
                obj2 = { project, currentGuildId: guildId, onRemixed: tmp28 };
                showActionSheet(obj);
              }
            }
            cResult[27] = guildId;
            cResult[28] = tmp28;
            cResult[29] = V;
          }
          class X {
            constructor() {
              let obj2;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = {
                key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
                content: prioritySpeakerDucking(ConjureCreateSheetDefault, obj2),
              };
              obj2 = { guildId, onCreated: tmp28 };
              showActionSheet(obj);
            }
          }
          cResult[24] = guildId;
          cResult[25] = tmp28;
          cResult[26] = X;
        }
        F = tmp27;
        const fn4 = (arg0, arg1) => {
          if (arg1 === closure_0) {
            closure_1(arg0);
          } else {
            const obj = guildId(stateFromStoresArray[27]);
            obj.transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
          }
        };
        cResult[21] = guildId;
        cResult[22] = tmp27;
        cResult[23] = fn4;
        tmp28 = fn4;
      }
      if (cResult[13] !== guildId) {
        class F {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
        cResult[13] = guildId;
        class Y {
          constructor(arg0) {
            closure_0 = guildId;
            tmp = guildId(closure_2[45]);
            obj = {
              project: guildId,
              guildId: closure_0,
              muted: null,
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            conjureProjectActions = tmp.conjureProjectActions;
            obj2 = guildId(closure_2[46]);
            obj.muted = obj2.isConjureProjectMuted(closure_1_11.settings, guildId.id);
            obj.openChat = function openChat() {
              return F(project.id);
            };
            obj.onRemix = function onRemix() {
              return openedProjectIdRef(project);
            };
            obj.onOpenSettings = function onOpenSettings() {
              let guild_id;
              let obj2;
              let tmp3;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = {
                key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
                content: prioritySpeakerDucking(tmp3, obj2),
              };
              obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
              guild_id = project.guild_id;
              tmp3 = ConjureSettingsSheetDefault;
              if (guild_id == null) {
                guild_id = guildId;
              }
              return showActionSheet(obj);
            };
            result = conjureProjectActions(obj);
            obj3 = guildId(closure_2[48]);
            obj1 = {
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
            result1 = obj3.showSimpleActionSheet(obj1);
            return;
          }
        }
        cResult[14] = R;
      } else {
        class F {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
        cResult[15] = tmp22;
        class Y {
          constructor(arg0) {
            closure_0 = guildId;
            tmp = guildId(closure_2[45]);
            obj = {
              project: guildId,
              guildId: closure_0,
              muted: null,
              openChat: null,
              onRemix: null,
              onOpenSettings: null,
            };
            conjureProjectActions = tmp.conjureProjectActions;
            obj2 = guildId(closure_2[46]);
            obj.muted = obj2.isConjureProjectMuted(closure_1_11.settings, guildId.id);
            obj.openChat = function openChat() {
              return F(project.id);
            };
            obj.onRemix = function onRemix() {
              return openedProjectIdRef(project);
            };
            obj.onOpenSettings = function onOpenSettings() {
              let guild_id;
              let obj2;
              let tmp3;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = {
                key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
                content: prioritySpeakerDucking(tmp3, obj2),
              };
              obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
              guild_id = project.guild_id;
              tmp3 = ConjureSettingsSheetDefault;
              if (guild_id == null) {
                guild_id = guildId;
              }
              return showActionSheet(obj);
            };
            result = conjureProjectActions(obj);
            obj3 = guildId(closure_2[48]);
            obj1 = {
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
            result1 = obj3.showSimpleActionSheet(obj1);
            return;
          }
        }
      } else {
        class F {
          constructor(projectId) {
            const obj = { projectId };
            return navigation.push(constants.CHAT, obj);
          }
        }
      }
      const found = stateFromStoresArray.filter(R);
      const sorted1 = found.sort(tmp21);
      cResult[10] = stateFromStoresArray;
      cResult[11] = guildId;
      cResult[12] = sorted1;
    }
  : (guildId) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items12;
      let items13;
      let items14;
      let items15;
      let items16;
      let items17;
      let items18;
      let items19;
      let obj13;
      let settings;
      let tmp24;
      guildId = guildId.guildId;
      navigation = undefined;
      let stateFromStoresArray;
      let memo2;
      let tmp = navigation;
      const bottom = navigation(stateFromStoresArray[40])().bottom;
      let tmp3 = closure_31(0);
      let obj = guildId(stateFromStoresArray[41]);
      navigation = obj.useNavigation();
      let obj2 = guildId(stateFromStoresArray[30]);
      const items = [ConjureProjectStore];
      stateFromStoresArray = obj2.useStateFromStoresArray(items, () => ConjureProjectStore.getOwnedProjects(), []);
      let obj3 = guildId(stateFromStoresArray[30]);
      const items1 = [ConjureProjectStore];
      const items2 = [guildId];
      const stateFromStoresArray1 = obj3.useStateFromStoresArray(
        items1,
        () => ConjureProjectStore.getSharedProjects(guildId),
        items2,
      );
      let obj4 = guildId(stateFromStoresArray[30]);
      const items3 = [ConjureProjectStore];
      const stateFromStores = obj4.useStateFromStores(items3, () => ConjureProjectStore.getProjectsFetchState(), []);
      const items4 = [stateFromStoresArray, guildId];
      const memo = memo2.useMemo(() => {
        const found = stateFromStoresArray.filter((item) => {
          const obj = guildId(stateFromStoresArray[42]);
          return obj.isConjureProjectInGuild(item, closure_1_0);
        });
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
      const callback = memo2.useCallback((projectId) => {
        const obj = { projectId };
        return navigation.push(constants.CHAT, obj);
      }, items6);
      const items7 = [guildId, callback];
      memo2 = memo2.useMemo(() => {
        let closure_1 = callback;
        return (arg0, arg1) => {
          if (arg1 === closure_0) {
            closure_1(arg0);
          } else {
            const obj = guildId(stateFromStoresArray[27]);
            obj.transitionTo(closure_2_23.CHANNEL(arg1, constants.CONJURE, arg0));
          }
        };
      }, items7);
      const items8 = [guildId, memo2];
      const callback1 = memo2.useCallback(() => {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          key: ConjureCreateSheet.CONJURE_CREATE_SHEET_KEY,
          content: prioritySpeakerDucking(ConjureCreateSheetDefault, obj2),
        };
        obj2 = { guildId, onCreated: memo2 };
        showActionSheet(obj);
      }, items8);
      const items9 = [guildId, memo2];
      const callback2 = memo2.useCallback((project) => {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY,
          content: prioritySpeakerDucking(ConjureRemixSheetDefault, obj2),
        };
        obj2 = { project, currentGuildId: guildId, onRemixed: memo2 };
        showActionSheet(obj);
      }, items9);
      const items10 = [guildId, callback, callback2];
      let closure_8 = memo2.useCallback((project) => {
        let obj2;
        guildId = project;
        let tmp = guildId(stateFromStoresArray[45]);
        let obj = {
          project,
          guildId,
          muted: obj2.isConjureProjectMuted(settings.settings, project.id),
          openChat() {
            return callback(project.id);
          },
          onRemix() {
            return callback2(project);
          },
          onOpenSettings() {
            let guild_id;
            let obj2;
            let tmp3;
            const tmp = ActionSheetActionCreators;
            const showActionSheet = tmp.showActionSheet;
            const obj = {
              key: ConjureSettingsSheet.CONJURE_SETTINGS_SHEET_KEY,
              content: prioritySpeakerDucking(tmp3, obj2),
            };
            obj2 = { projectId: project.id, guildId: guild_id, initialTab: "project", isPreview: true };
            guild_id = project.guild_id;
            tmp3 = ConjureSettingsSheetDefault;
            if (guild_id == null) {
              guild_id = guildId;
            }
            return showActionSheet(obj);
          },
        };
        const conjureProjectActions = tmp.conjureProjectActions;
        obj2 = guildId(stateFromStoresArray[46]);
        const result = conjureProjectActions(obj);
        const obj3 = guildId(stateFromStoresArray[48]);
        const obj4 = {
          key: "VibegrationsProjectActions",
          header: { title: project.name },
          hasIcons: true,
          options: result.map((label) => ({
            label: label.label,
            IconComponent: label.IconComponent,
            isDestructive: label.destructive,
            onPress: label.action,
          })),
        };
        const result1 = obj3.showSimpleActionSheet(obj4);
      }, items10);
      const items11 = [navigation, callback1];
      const effect = memo2.useEffect(() => {
        let onPress;
        let obj = {
          headerRight() {
            let intl;
            const obj = {
              IconComponent: guildId(stateFromStoresArray[49]).PlusLargeIcon,
              onPress,
              accessibilityLabel: intl.string(guildId(stateFromStoresArray[32]).t.CumH4u),
            };
            const tmp = navigation(stateFromStoresArray[37]);
            intl = guildId(stateFromStoresArray[32]).intl;
            return closure_2_26(tmp, obj);
          },
        };
        navigation.setOptions(obj);
      }, items11);
      let tmp16Result = null;
      const tmp14 = memo.length > 0 || memo1.length > 0;
      if (!tmp14) {
        const obj5 = { style: tmp3.centered, children: null };
        if (null != stateFromStores) {
          let tmp16Result2;
          if ("loading" !== stateFromStores.type) {
            if ("error" === stateFromStores.type) {
              const obj6 = { style: tmp3.listError, children: items12 };
              const obj7 = {
                variant: "text-md/normal",
                color: "text-muted",
                children: intl.string(tmp(stateFromStoresArray[33]).DJAPMO),
              };
              const Text = tmp4(tmp2[50]).Text;
              intl = tmp4(tmp2[32]).intl;
              items12 = [closure_26(Text, obj7)];
              const obj8 = {
                variant: "secondary",
                size: "sm",
                text: intl2.string(tmp(stateFromStoresArray[33])["WFJ/vb"]),
                onPress() {
                  const obj = ConjureActionCreators;
                  return obj.listProjects(guildId);
                },
              };
              const Button = tmp4(tmp2[51]).Button;
              intl2 = tmp4(tmp2[32]).intl;
              items12[1] = closure_26(Button, obj8);
              tmp16Result2 = closure_27(closure_9, obj6);
            } else {
              const obj9 = { style: tmp3.listError, children: items13 };
              const obj10 = {
                variant: "text-md/normal",
                color: "text-muted",
                children: intl7.string(tmp(stateFromStoresArray[33])["9/5sLV"]),
              };
              const Text6 = tmp4(tmp2[50]).Text;
              intl7 = tmp4(tmp2[32]).intl;
              items13 = [closure_26(Text6, obj10)];
              const obj11 = {
                variant: "primary",
                size: "sm",
                text: intl8.string(guildId(stateFromStoresArray[32]).t.CumH4u),
                onPress: callback1,
              };
              const Button2 = tmp4(tmp2[51]).Button;
              intl8 = tmp4(tmp2[32]).intl;
              items13[1] = closure_26(Button2, obj11);
              tmp16Result2 = closure_27(closure_9, obj9);
            }
          }
          obj5.children = tmp16Result2;
          tmp16Result = closure_26(closure_9, obj5);
        }
        tmp16Result2 = closure_26(callback1, {});
      }
      const obj12 = { style: tmp3.content, children: closure_27(tmp24, obj13) };
      obj13 = {
        contentContainerStyle: items14,
        scrollIndicatorInsets: { bottom },
        keyboardShouldPersistTaps: "handled",
        children: items15,
      };
      items14 = [tmp3.listContent, { paddingBottom: tmp(stateFromStoresArray[20]).space.PX_8 + bottom }];
      items15 = [, , ,];
      ({ paddingBottom: tmp(stateFromStoresArray[20]).space.PX_8 + bottom });
      items15[0] = closure_26(tmp(stateFromStoresArray[53]), {});
      let tmp23Result = null;
      tmp24 = closure_8;
      if (memo.length > 0) {
        const obj15 = { style: tmp3.section, children: items17 };
        const obj16 = { style: tmp3.sectionHeading, children: items16 };
        const obj17 = {
          variant: "heading-md/bold",
          color: "text-default",
          children: intl3.string(tmp(stateFromStoresArray[33]).dWgSAa),
        };
        const Text2 = tmp4(tmp2[50]).Text;
        intl3 = tmp4(tmp2[32]).intl;
        items16 = [closure_26(Text2, obj17)];
        const obj18 = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: intl4.string(tmp(stateFromStoresArray[33]).JQpNkh),
        };
        const Text3 = tmp4(tmp2[50]).Text;
        intl4 = tmp4(tmp2[32]).intl;
        items16[1] = closure_26(Text3, obj18);
        items17 = [closure_27(closure_9, obj16)];
        const obj19 = {
          hasIcons: true,
          children: memo.map((project) => {
            const obj = {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_8(project);
              },
            };
            return closure_1_26(closure_1_34, obj, project.id);
          }),
        };
        const TableRowGroup = tmp4(tmp2[54]).TableRowGroup;
        items17[1] = closure_26(TableRowGroup, obj19);
        tmp23Result = closure_27(closure_9, obj15);
      }
      items15[1] = tmp23Result;
      let tmp23Result2 = null;
      if (memo1.length > 0) {
        const obj20 = { style: tmp3.section, children: items19 };
        const obj21 = { style: tmp3.sectionHeading, children: items18 };
        const obj22 = {
          variant: "heading-md/bold",
          color: "text-default",
          children: intl5.string(tmp(stateFromStoresArray[33])["wFi8+o"]),
        };
        const Text4 = tmp4(tmp2[50]).Text;
        intl5 = tmp4(tmp2[32]).intl;
        items18 = [closure_26(Text4, obj22)];
        const obj23 = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: intl6.string(tmp(stateFromStoresArray[33]).dQ3U1J),
        };
        const Text5 = tmp4(tmp2[50]).Text;
        intl6 = tmp4(tmp2[32]).intl;
        items18[1] = closure_26(Text5, obj23);
        items19 = [closure_27(closure_9, obj21)];
        const obj24 = {
          hasIcons: true,
          children: memo1.map((project) => {
            const obj = {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_8(project);
              },
            };
            return closure_1_26(closure_1_34, obj, project.id);
          }),
        };
        const TableRowGroup2 = tmp4(tmp2[54]).TableRowGroup;
        items19[1] = closure_26(TableRowGroup2, obj24);
        tmp23Result2 = closure_27(closure_9, obj20);
      }
      items15[2] = tmp23Result2;
      items15[3] = tmp16Result;
      return closure_26(closure_9, obj12);
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let obj = projectId(openedProjectIdRef[18]);
      const cResult = obj.c(6);
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      openedProjectIdRef = projectId.openedProjectIdRef;
      const obj2 = projectId(openedProjectIdRef[41]);
      navigation = obj2.useNavigation();
      if (cResult[0] === navigation) {
        if (cResult[1] === openedProjectIdRef) {
          if (cResult[2] === projectId) {
            let tmp3;
            let tmp4;
            if (cResult[3] === sceneProjectId) {
              tmp3 = cResult[4];
              tmp4 = cResult[5];
            }
            const effect = react.useEffect(tmp3, tmp4);
            return null;
          }
        }
      }
      const fn = function t() {
        const tmp2 = null != projectId && projectId !== openedProjectIdRef.current;
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
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const sceneProjectId = projectId.sceneProjectId;
      openedProjectIdRef = projectId.openedProjectIdRef;
      let obj = projectId(openedProjectIdRef[41]);
      navigation = obj.useNavigation();
      const items = [projectId, sceneProjectId, openedProjectIdRef, navigation];
      const effect = react.useEffect(() => {
        const tmp2 = null != projectId && projectId !== openedProjectIdRef.current;
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let stateFromStores;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp17;
      let tmp19;
      let tmp20;
      let tmp22;
      let tmp25;
      let tmp26;
      let tmp7;
      let tmp8;
      let tmp = guildId;
      const tmp2 = stateFromStores;
      let obj = guildId(stateFromStores[18]);
      const cResult = obj.c(56);
      guildId = guildId.guildId;
      let obj2 = guildId(stateFromStores[41]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureBuilderRouteStore];
        cResult[0] = items;
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(tmp2[30]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[4] = items2;
        tmp10 = items2;
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
        tmp13 = items3;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult5 = tmp(tmp2[30]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp12, tmp13);
      if (cResult[8] !== guildId) {
        let obj3 = { guildId, location: "VibegrationsStandaloneScreen" };
        cResult[8] = guildId;
        cResult[9] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[9];
      }
      const tmpResult6 = tmp(tmp2[89]);
      const isConjureGuildEnabled = tmpResult6.useIsConjureGuildEnabled(tmp15);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildMemberStore];
        cResult[10] = items4;
        tmp17 = items4;
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
        tmp20 = fn3;
        tmp19 = items5;
      } else {
        tmp19 = cResult[12];
        tmp20 = cResult[13];
      }
      const tmpResult7 = tmp(tmp2[30]);
      const stateFromStoresArray = tmpResult7.useStateFromStoresArray(tmp17, tmp20, tmp19);
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [GuildStore, PermissionStore];
        cResult[14] = items6;
        tmp22 = items6;
      } else {
        tmp22 = cResult[14];
      }
      if (cResult[15] !== guildId) {
        const fn4 = function w() {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
          return canResult;
        };
        const items7 = [guildId];
        cResult[15] = guildId;
        cResult[16] = fn4;
        cResult[17] = items7;
        tmp26 = items7;
        tmp25 = fn4;
      } else {
        tmp25 = cResult[16];
        tmp26 = cResult[17];
      }
      const tmpResult8 = tmp(tmp2[30]);
      const stateFromStores2 = tmpResult8.useStateFromStores(tmp22, tmp25, tmp26);
      if (cResult[18] === guildId) {
        let tmp28;
        if (cResult[19] === isConjureGuildEnabled) {
          tmp28 = cResult[20];
        }
        if (cResult[21] === stateFromStores2) {
          if (cResult[22] === stateFromStoresArray) {
            if (cResult[23] === guildId) {
              let tmp29;
              if (cResult[24] === isConjureGuildEnabled) {
                tmp29 = cResult[25];
              }
              const effect = openedProjectIdRef.useEffect(tmp28, tmp29);
              if (cResult[26] === stateFromStores1) {
                if (cResult[27] === isConjureGuildEnabled) {
                  let tmp31;
                  let tmp32;
                  if (cResult[28] === navigation) {
                    tmp31 = cResult[29];
                    tmp32 = cResult[30];
                  }
                  const effect1 = obj9.useEffect(tmp31, tmp32);
                  openedProjectIdRef = obj9.useRef(stateFromStores);
                  if (cResult[31] !== stateFromStores) {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                    cResult[31] = stateFromStores;
                    class M {
                      constructor() {
                        const tmp = null == stateFromStores1 || isConjureGuildEnabled;
                        if (!tmp) {
                          navigation.goBack();
                        }
                      }
                    }
                  } else {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                  }
                  class M {
                    constructor() {
                      const tmp = null == stateFromStores1 || isConjureGuildEnabled;
                      if (!tmp) {
                        navigation.goBack();
                      }
                    }
                  }
                  if (cResult[33] !== navigation) {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                    const headerCloseButton = obj10.getHeaderCloseButton(() => navigation.goBack());
                    cResult[33] = navigation;
                    class M {
                      constructor() {
                        const tmp = null == stateFromStores1 || isConjureGuildEnabled;
                        if (!tmp) {
                          navigation.goBack();
                        }
                      }
                    }
                    cResult[34] = headerCloseButton;
                  } else {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                    cResult[35] = tmp38;
                  } else {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                  }
                  if (cResult[36] === guildId) {
                    class L {
                      constructor(sceneProjectId) {
                        const obj = { projectId: stateFromStores, sceneProjectId, openedProjectIdRef };
                        return prioritySpeakerDucking(closure_40, obj);
                      }
                    }
                  }
                  const obj4 = {
                    headerLeft: tmp35,
                    headerTitle: tmp38,
                    render() {
                      let items;
                      const obj = { children: items };
                      items = [closure_1_6()];
                      const obj2 = { guildId };
                      items[1] = prioritySpeakerDucking(closure_35, obj2);
                      return closure_27(closure_28, obj);
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
                  const tmp = null == stateFromStores1 || isConjureGuildEnabled;
                  if (!tmp) {
                    navigation.goBack();
                  }
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
          if (isConjureGuildEnabled) {
            const obj = ConjureActionCreators;
            obj.listProjects(guildId);
          }
        }
      }
      cResult[18] = guildId;
      cResult[19] = isConjureGuildEnabled;
      cResult[20] = B;
      tmp28 = B;
    }
  : (guildId) => {
      let intl;
      let obj9;
      guildId = guildId.guildId;
      let stateFromStores;
      openedProjectIdRef = undefined;
      let obj = guildId(stateFromStores[41]);
      navigation = obj.useNavigation();
      let obj2 = guildId(stateFromStores[30]);
      let items = [ConjureBuilderRouteStore];
      const items1 = [guildId];
      stateFromStores = obj2.useStateFromStores(
        items,
        () => {
          const routedProjectId = ConjureBuilderRouteStore.getRoutedProjectId(guildId);
          return routedProjectId;
        },
        items1,
      );
      let obj3 = guildId(stateFromStores[30]);
      const items2 = [GuildStore];
      const items3 = [guildId];
      const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
      const obj4 = guildId(stateFromStores[89]);
      const isConjureGuildEnabled = obj4.useIsConjureGuildEnabled({
        guildId,
        location: "VibegrationsStandaloneScreen",
      });
      const items4 = [GuildMemberStore];
      const items5 = [guildId];
      const obj5 = guildId(stateFromStores[30]);
      const stateFromStoresArray = obj5.useStateFromStoresArray(
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
      const items6 = [GuildStore, PermissionStore];
      const items7 = [guildId];
      const items8 = [isConjureGuildEnabled, guildId, stateFromStoresArray];
      const obj6 = guildId(stateFromStores[30]);
      items8[3] = obj6.useStateFromStores(
        items6,
        () => {
          const guild = GuildStore.getGuild(guildId);
          const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
          return canResult;
        },
        items7,
      );
      const effect = openedProjectIdRef.useEffect(() => {
        if (isConjureGuildEnabled) {
          const obj = ConjureActionCreators;
          obj.listProjects(guildId);
        }
      }, items8);
      const items9 = [stateFromStores1, isConjureGuildEnabled, navigation];
      const effect1 = openedProjectIdRef.useEffect(() => {
        const tmp = null == stateFromStores1 || isConjureGuildEnabled;
        if (!tmp) {
          navigation.goBack();
        }
      }, items9);
      openedProjectIdRef = openedProjectIdRef.useRef(stateFromStores);
      const obj7 = {};
      const PROJECTS = constants2.PROJECTS;
      const obj8 = {
        headerLeft: obj9.getHeaderCloseButton(() => navigation.goBack()),
        headerTitle() {
          let intl;
          const obj = { title: intl.string(navigation(stateFromStores[33]).uk6jhJ) };
          const NavigatorHeader = guildId(stateFromStores[85]).NavigatorHeader;
          intl = guildId(stateFromStores[32]).intl;
          return closure_1_26(NavigatorHeader, obj);
        },
        render() {
          let items;
          const obj = { children: items };
          const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
          items = [prioritySpeakerDucking(closure_40, obj2)];
          const obj3 = { guildId };
          items[1] = prioritySpeakerDucking(closure_35, obj3);
          return closure_27(closure_28, obj);
        },
      };
      obj7[PROJECTS] = obj8;
      obj7[constants2.CHAT] = {
        ignoreKeyboard: true,
        render(projectId) {
          let items;
          projectId = projectId.projectId;
          const obj = { children: items };
          items = [,];
          const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
          items[0] = prioritySpeakerDucking(closure_40, obj2);
          const obj3 = { guildId, projectId };
          items[1] = prioritySpeakerDucking(ChatScene, obj3);
          return closure_27(closure_28, obj);
        },
      };
      obj7[constants2.DEBUG] = {
        headerTitle() {
          let intl;
          const obj = { title: intl.string(navigation(stateFromStores[33])["Q4FN+H"]) };
          const NavigatorHeader = guildId(stateFromStores[85]).NavigatorHeader;
          intl = guildId(stateFromStores[32]).intl;
          return closure_1_26(NavigatorHeader, obj);
        },
        render(projectId) {
          let items;
          projectId = projectId.projectId;
          const obj = { children: items };
          items = [,];
          const obj2 = { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef };
          items[0] = prioritySpeakerDucking(closure_40, obj2);
          items[1] = prioritySpeakerDucking(ConjureDebugSceneDefault, { projectId });
          return closure_27(closure_28, obj);
        },
      };
      obj9 = guildId(stateFromStores[85]);
      const obj10 = {
        screens: obj7,
        initialRouteStack: isConjureGuildEnabled(
          openedProjectIdRef.useState(() => {
            let obj3;
            const items = [];
            const obj = { name: constants.PROJECTS };
            items[0] = obj;
            if (null != stateFromStores) {
              const obj2 = { name: tmp.CHAT, params: obj3 };
              obj3 = { projectId: tmp2 };
              items.push(obj2);
            }
            return items;
          }),
          1,
        )[0],
        headerBackTitle: intl.string(navigation(stateFromStores[33]).uk6jhJ),
      };
      const Navigator = guildId(stateFromStores[91]).Navigator;
      intl = guildId(stateFromStores[32]).intl;
      return closure_26(Navigator, obj10);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStandaloneScreen.tsx");

export default tmp7;
