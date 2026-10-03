// === Module 16538: VibegrationsStandaloneScreen ===

// Module 16538 (VibegrationsStandaloneScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import _modDef4461 from "module_4461" /* 4461 */;
import DateUtils from "DateUtils" /* 4552 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import VibegrationsUtils from "VibegrationsUtils" /* 6746 */;
import SettingsIcon from "SettingsIcon" /* 6883 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import UploadIcon from "UploadIcon" /* 8878 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 8977 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9222 */;
import UndoIcon from "UndoIcon" /* 14906 */;
import BugIcon from "BugIcon" /* 15616 */;
import MentionsBadgeDefault from "MentionsBadge" /* 16142 */;
import ExperimentalDirectSelectIcon2 from "ExperimentalDirectSelectIcon" /* 16541 */;
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet" /* 16543 */;
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet" /* 16545 */;
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton" /* 16547 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16548 */;
import VibegrationsRemixSheet from "VibegrationsRemixSheet" /* 16561 */;
import vibegrationsProjectActions from "vibegrationsProjectActions" /* 16563 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16568 */;
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet" /* 16613 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16615 */;
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet" /* 16616 */;
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene" /* 16732 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VibegrationsBuilderRouteStore from "VibegrationsBuilderRouteStore" /* 6718 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;

const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsConnectToolSheetDefault = VibegrationsConnectToolSheet;
const VibegrationsVersionHistorySheetDefault = VibegrationsVersionHistorySheet;
const VibegrationsRestorePointsSheetDefault = VibegrationsRestorePointsSheet;

require = fn;
function projectOpener(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (arg1 === closure_0) {
      f145887(arg0);
    } else {
      guildId(navigation[27]).transitionTo(vibegrationsControlActive.CHANNEL(arg1, guild_id.VIBEGRATIONS, arg0));
      const obj = guildId(navigation[27]);
    }
  };
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Keyboard: closure_7, ScrollView: closure_8, View: closure_9 } = get_ActivityIndicator);
const vibegrationsDesignFeedbackStore = fn(16539);
({ enterVibegrationsDesignFeedback: closure_15, exitVibegrationsDesignFeedback: closure_16, useVibegrationsDesignFeedback: closure_17 } = vibegrationsDesignFeedbackStore);
const VibegrationsConnectionStore = fn(12904);
({ closeConnection: closure_19, restoreSourceHistoryEntry: closure_20 } = VibegrationsConnectionStore);
const Constants = fn(1085);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const FramesConstants = fn(8704);
({ isLaunched: closure_25, MAIN_SURFACE: closure_26 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_27, jsxs: closure_28, Fragment: closure_29 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => closure_1_27(ExperimentalDirectSelectIcon2.ExperimentalDirectSelectIcon, { color: nativeDefault.colors.TEXT_BRAND }));
let obj2 = {
  showPublishBlocked: VibegrationsPublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const obj = ActionSheetActionCreators;
    obj.showActionSheet({ content: closure_1_27(VibegrationsPublishNotesSheetDefault, { guildId, applicationId, projectName, publish, initialDraft }), key: VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY });
  },
  showError(content) {
    return ToastActionCreatorsDefault.open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content });
  },
  openProfile(userId) {
    showUserProfileActionSheetDefault({ userId });
  }
};
const createStyles = fn(4890);
let closure_32 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listContent: null, section: null, projectRowTrailing: null, unreadPill: null, sectionHeading: null, changelog: null, changelogEntries: null, changelogItem: null, listError: null, headerActions: null, segments: null, panes: null, pane: null, chatPane: null, paneHidden: null, paneBackstage: null };
  obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.contentBare = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  const obj5 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj6 = { gap: nativeDefault.space.PX_8 };
  obj.projectRowTrailing = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const size = { position: "absolute", left: 0, top: "50%", width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_8, marginTop: -nativeDefault.space.PX_4, borderTopRightRadius: nativeDefault.radii.xs, borderBottomRightRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
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
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((project) => {
  const cResult = project(576).c(35);
  project = project.project;
  ({ onPress, onMore } = project);
  const tmp4 = closure_32(0);
  const obj = project(576);
  const vibegrationsProjectUnreadStatus = project(16138).useVibegrationsProjectUnreadStatus(project.id);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  obj2 = project(16138);
  const data = project(6658).useApplication(application_id).data;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function n() {
      return VibegrationsProjectStore.isProjectDeleting(project.id);
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
  const tmp11 = vibegrationsProjectUnreadStatus === project(16139).VibegrationsReadStateFlags.NEEDS_INPUT && !stateFromStores;
  if (cResult[4] !== project.updated_at) {
    let formatToPlainStringResult;
    if (null != project.updated_at) {
      const intl = tmp(1126).intl;
      const obj3 = { time: null };
      const _Date = Date;
      const date = new Date(project.updated_at);
      obj3.time = tmp(7126).getRelativeTimestamp(date.getTime());
      formatToPlainStringResult = intl.formatToPlainString(_modDef3723.oMDaqr, obj3);
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
        stringResult = intl3.string(_modDef3723.V3e2Yd);
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
                                if (cResult[30] === vibegrationsProjectUnreadStatus) {
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
                            if (null != vibegrationsProjectUnreadStatus) {
                              tmp46 = null;
                              if (!stateFromStores) {
                                const obj5 = { style: tmp4.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
                                tmp46 = closure_27(closure_9, obj5);
                              }
                            }
                            cResult[28] = stateFromStores;
                            cResult[29] = tmp4;
                            cResult[30] = vibegrationsProjectUnreadStatus;
                            cResult[31] = tmp46;
                            tmp45 = tmp46;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj6 = { label: project.name, subLabel: tmp18, accessibilityHint: tmp21, disabled: stateFromStores, icon: tmp25, trailing: cResult[18], onPress, onLongPress: onMore };
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
        const items3 = [tmp32, ];
        const obj8 = { IconComponent: tmp(7577).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
        const intl4 = tmp(1126).intl;
        obj8.accessibilityLabel = intl4.string(tmp(1126).t["UKOtz+"]);
        items3[1] = closure_27(VibegrationsHeaderIconButtonDefault, obj8);
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
    stringResult1 = intl2.string(_modDef3723.EwXXks);
  }
  cResult[6] = stateFromStores;
  cResult[7] = tmp12;
  cResult[8] = stringResult1;
  tmp18 = stringResult1;
  const tmpResult3 = project(504);
}) : ((project) => {
  project = project.project;
  const onMore = project.onMore;
  const tmp = closure_32(0);
  const vibegrationsProjectUnreadStatus = project(16138).useVibegrationsProjectUnreadStatus(project.id);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const obj = project(16138);
  const data = project(6658).useApplication(application_id).data;
  const tmp2Result = project(6658);
  const items = [VibegrationsProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => VibegrationsProjectStore.isProjectDeleting(project.id), items1);
  let tmp6 = vibegrationsProjectUnreadStatus === tmp2(16139).VibegrationsReadStateFlags.NEEDS_INPUT;
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
    formatToPlainStringResult = intl.formatToPlainString(_modDef3723.oMDaqr, obj2);
    const tmp2Result4 = tmp2(7126);
  }
  const obj3 = { label: project.name, subLabel: null, accessibilityHint: null, disabled: null, icon: null, trailing: null, onPress: null, onLongPress: null };
  if (stateFromStores) {
    const intl2 = tmp2(1126).intl;
    formatToPlainStringResult = intl2.string(_modDef3723.EwXXks);
  }
  obj3.subLabel = formatToPlainStringResult;
  let stringResult;
  if (tmp6) {
    const intl3 = tmp2(1126).intl;
    stringResult = intl3.string(_modDef3723.V3e2Yd);
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
    const items2 = [tmp15Result3, ];
    const obj6 = { IconComponent: tmp2(7577).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl4 = tmp2(1126).intl;
    obj6.accessibilityLabel = intl4.string(tmp2(1126).t["UKOtz+"]);
    items2[1] = closure_27(VibegrationsHeaderIconButtonDefault, obj6);
    obj5.children = items2;
    tmp13Result = closure_28(closure_9, obj5);
    const tmp19Result = VibegrationsHeaderIconButtonDefault;
  }
  obj3.trailing = tmp13Result;
  obj3.onPress = project.onPress;
  obj3.onLongPress = onMore;
  const children = [closure_27(project(5993).TableRow, obj3), ];
  let tmp15Result4 = null;
  if (null != vibegrationsProjectUnreadStatus) {
    tmp15Result4 = null;
    if (!stateFromStores) {
      const obj7 = { style: tmp.unreadPill, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp15Result4 = closure_27(closure_9, obj7);
    }
  }
  children[1] = tmp15Result4;
  return closure_28(closure_9, { children });
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(navigation[18]).c(104);
  guildId = guildId.guildId;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = guildId(navigation[18]);
  importDefault = closure_32(0);
  const tmp4 = closure_32(0);
  navigation = guildId(navigation[41]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsProjectStore];
    const fn = function o() {
      return VibegrationsProjectStore.getOwnedProjects();
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
    const items2 = [VibegrationsProjectStore];
    cResult[3] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function _() {
      return VibegrationsProjectStore.getSharedProjects(guildId);
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
  const tmpResult = guildId(navigation[30]);
  const stateFromStoresArray1 = guildId(navigation[30]).useStateFromStoresArray(tmp10, tmp12, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [VibegrationsProjectStore];
    class A {
      constructor() {
        return closure_1_21.getProjectsFetchState();
      }
    }
    const items5 = [];
    cResult[7] = items4;
    cResult[8] = A;
    cResult[9] = items5;
    let tmp17 = items5;
    let tmp16 = A;
    let tmp15 = items4;
  } else {
    tmp15 = cResult[7];
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult3 = guildId(navigation[30]);
  const stateFromStores = guildId(navigation[30]).useStateFromStores(tmp15, tmp16, tmp17);
  if (cResult[10] === stateFromStoresArray) {
    if (cResult[11] === guildId) {
      if (cResult[16] !== stateFromStoresArray1) {
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
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
          cResult[18] = B;
          class A {
            constructor() {
              return closure_1_21.getProjectsFetchState();
            }
          }
        } else {
          class B {
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
        class A {
          constructor() {
            return closure_1_21.getProjectsFetchState();
          }
        }
        const sorted = obj7.sort(tmp24);
        cResult[16] = stateFromStoresArray1;
        cResult[17] = sorted;
      } else {
        class B {
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
          class V {
            constructor(arg0) {
              obj = { projectId: guildId };
              return closure_2.push(closure_34.CHAT, obj);
            }
          }
          cResult[19] = navigation;
          class A {
            constructor() {
              return closure_1_21.getProjectsFetchState();
            }
          }
          cResult[20] = V;
        } else {
          class V {
            constructor(arg0) {
              obj = { projectId: guildId };
              return closure_2.push(closure_34.CHAT, obj);
            }
          }
        }
        closure_3 = V;
        class A {
          constructor() {
            return closure_1_21.getProjectsFetchState();
          }
        }
        closure_129_0 = guildId;
        closure_129_1 = V;
        const fn3 = (arg0, arg1) => {
          if (arg1 === closure_0) {
            f145887(arg0);
          } else {
            guildId(navigation[27]).transitionTo(vibegrationsControlActive.CHANNEL(arg1, guild_id.VIBEGRATIONS, arg0));
            const obj = guildId(navigation[27]);
          }
        };
        cResult[21] = guildId;
        cResult[22] = V;
        cResult[23] = fn3;
      }
    }
  }
  if (cResult[13] !== guildId) {
    class V {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_34.CHAT, obj);
      }
    }
    cResult[13] = guildId;
    class A {
      constructor() {
        return closure_1_21.getProjectsFetchState();
      }
    }
    cResult[14] = tmp21;
    let found = tmp21;
  } else {
    class V {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_34.CHAT, obj);
      }
    }
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_34.CHAT, obj);
      }
    }
    cResult[15] = R;
    class A {
      constructor() {
        return closure_1_21.getProjectsFetchState();
      }
    }
  } else {
    class V {
      constructor(arg0) {
        obj = { projectId: guildId };
        return closure_2.push(closure_34.CHAT, obj);
      }
    }
  }
  found = stateFromStoresArray.filter(found);
  const sorted1 = found.sort(tmp22);
  cResult[10] = stateFromStoresArray;
  cResult[11] = guildId;
  cResult[12] = sorted1;
  const tmpResult4 = guildId(navigation[30]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  let callback;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_32(0);
  importDefault = tmp3;
  navigation = guildId(navigation[41]).useNavigation();
  let obj = guildId(navigation[41]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[30]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  obj2 = guildId(navigation[30]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[30]).useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj3 = guildId(navigation[30]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[30]).useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = callback.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => guildId(navigation[42]).isVibegrationsProjectInGuild(item, closure_1_0));
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
  callback = callback.useCallback((projectId) => navigation.push(constants.CHAT, { projectId }), items6);
  const items7 = [guildId, callback];
  const memo2 = callback.useMemo(() => {
    closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f145887(arg0);
      } else {
        guildId(navigation[27]).transitionTo(vibegrationsControlActive.CHANNEL(arg1, guild_id.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[27]);
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = callback.useCallback(() => {
    obj2 = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: closure_2_27(VibegrationsCreateSheetDefault, { guildId, onCreated: memo2 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = callback.useCallback((project) => {
    obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: closure_2_27(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, callback, callback2];
  closure_9 = callback.useCallback((project) => {
    guildId = project;
    obj2 = { project, guildId, muted: null, openChat: null, onRemix: null, onOpenSettings: null };
    let obj = guildId(navigation[45]);
    obj2.muted = guildId(navigation[46]).isVibegrationsProjectMuted(settings.settings, project.id);
    obj2.openChat = function openChat() {
      return callback(project.id);
    };
    obj2.onRemix = function onRemix() {
      return callback2(closure_0);
    };
    obj2.onOpenSettings = function onOpenSettings() {
      obj2 = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: null };
      const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
      let guild_id = project.guild_id;
      const obj = ActionSheetActionCreators;
      if (guild_id == null) {
        guild_id = guildId;
      }
      obj3.guildId = guild_id;
      obj2.content = closure_3_27(VibegrationsSettingsSheetDefault, obj3);
      return obj.showActionSheet(obj2);
    };
    const result = obj.vibegrationsProjectActions(obj2);
    let obj3 = guildId(navigation[46]);
    const obj4 = guildId(navigation[48]);
    const result1 = obj4.showSimpleActionSheet({ key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) });
  }, items10);
  const items11 = [navigation, callback1];
  const effect = callback.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[49]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[32]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[32]).t.CumH4u);
        return closure_2_27(closure_1(navigation[37]), obj);
      }
    });
  }, items11);
  let obj4 = guildId(navigation[30]);
  let result = guildId(navigation[50]).recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = callback.useCallback(() => {
    const obj = guildId(navigation[22]);
    obj.showActionSheet({ content: closure_1_27(closure_1(navigation[51]), {}), key: guildId(navigation[51]).VIBEGRATIONS_CHANGELOG_SHEET_KEY });
  }, []);
  if (!tmp15) {
    tmp15 = memo1.length > 0;
  }
  if (tmp15) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items12 = [tmp3.listContent, ];
    const obj8 = { paddingBottom: tmp(tmp2[20]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_27(tmp(tmp2[55]), {}), , , , ];
    let tmp24Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[32]).intl;
      obj12.children = intl3.string(tmp(tmp2[33]).x07mpp);
      const items14 = [closure_27(tmp4(tmp2[52]).Text, obj12), ];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[32]).intl;
      obj13.children = intl4.string(tmp(tmp2[33]).h5CwHI);
      items14[1] = closure_27(tmp4(tmp2[52]).Text, obj13);
      obj11.children = items14;
      const items15 = [closure_28(tmp23, obj11), , ];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
              const obj = { style: closure_1.changelogItem, children: null };
              const items = [DateUtils.dateFormat(_modDef4461(children.date, "YYYY-MM-DD"), "LL"), ];
              let combined = null;
              if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
                const intl = util.intl;
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 " + intl.string(_modDef3723["CLX+p/"]);
              }
              items[1] = combined;
              const items1 = [closure_2_28(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }), closure_2_27(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary })];
              obj.children = items1;
              return closure_2_28(options, obj, "" + children.date + "-" + children.summary);
            })
      };
      items15[1] = closure_27(tmp23, obj14);
      let tmp22Result = null;
      if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
        const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp4(tmp2[32]).intl;
        obj15.text = intl5.string(tmp(tmp2[33]).YWxThz);
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
      obj18.children = intl6.string(tmp(tmp2[33]).Bo5fE3);
      const items16 = [closure_27(tmp4(tmp2[52]).Text, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl7 = tmp4(tmp2[32]).intl;
      obj19.children = intl7.string(tmp(tmp2[33]).YnAFtT);
      items16[1] = closure_27(tmp4(tmp2[52]).Text, obj19);
      obj17.children = items16;
      const items17 = [closure_28(tmp23, obj17), ];
      const obj20 = {
        hasIcons: true,
        children: memo.map((project) => closure_1_27(closure_1_36, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
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
      obj23.children = intl8.string(tmp(tmp2[33]).jrCnUc);
      const items18 = [closure_27(tmp4(tmp2[52]).Text, obj23), ];
      const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl9 = tmp4(tmp2[32]).intl;
      obj24.children = intl9.string(tmp(tmp2[33])["1KEhDu"]);
      items18[1] = closure_27(tmp4(tmp2[52]).Text, obj24);
      obj22.children = items18;
      const items19 = [closure_28(tmp23, obj22), ];
      const obj25 = {
        hasIcons: true,
        children: memo1.map((project) => closure_1_27(closure_1_36, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
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
          obj28.children = intl.string(tmp(tmp2[33])["IN/HRP"]);
          const items20 = [closure_27(tmp4(tmp2[52]).Text, obj28), ];
          const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[32]).intl;
          obj29.text = intl2.string(tmp(tmp2[33])["42EdIV"]);
          obj29.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_27(tmp4(tmp2[53]).Button, obj29);
          obj27.children = items20;
          let tmp16Result2 = closure_28(tmp17, obj27);
        } else {
          const obj30 = { style: tmp3.listError, children: null };
          const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl10 = tmp4(tmp2[32]).intl;
          obj31.children = intl10.string(tmp(tmp2[33])["vqy+in"]);
          const items21 = [closure_27(tmp4(tmp2[52]).Text, obj31), ];
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
});
const __initData = { code: "function VibegrationsStandaloneScreenTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_39 = { code: "function VibegrationsStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let closure_40 = { code: "function VibegrationsStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
let closure_41 = { code: "function VibegrationsStandaloneScreenTsx4(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}" };
let closure_42 = { code: "function VibegrationsStandaloneScreenTsx5(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}" };
let __initData2 = { code: "function VibegrationsStandaloneScreenTsx6(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}" };
ReactCompilerGating = fn(558);
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(navigation[18]).c(246);
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let obj = guildId(navigation[18]);
  navigation = guildId(navigation[41]).useNavigation();
  const bottom = projectId(navigation[40])().bottom;
  obj2 = guildId(navigation[41]);
  _slicedToArray = ref(bottom);
  const tmp5 = ref(bottom);
  noop = projectId(navigation[59])();
  let tmp6 = projectId(navigation[59])();
  [r10033, tmp8] = noop.useState(0);
  closure_6 = tmp8;
  if (cResult[0] !== bottom) {
    let obj3 = { onEnd: null };
    const fn = function h(height) {
      ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
    };
    let obj4 = { runOnJS: tmp(tmp2[60]).runOnJS, setChatKeyboardCover: tmp8, safeAreaBottom: bottom };
    fn.__closure = obj4;
    fn.__workletHash = 5473330359402;
    fn.__initData = __initData;
    obj3.onEnd = fn;
    let items = [bottom];
    cResult[0] = bottom;
    cResult[1] = obj3;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  guildId(navigation[61]).useKeyboardHandler(tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VibegrationsProjectStore];
    cResult[3] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== projectId) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items2 = [projectId];
    cResult[4] = projectId;
    cResult[5] = I;
    cResult[6] = items2;
    let tmp16 = items2;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    tmp16 = cResult[6];
  }
  const tmpResult = guildId(navigation[61]);
  const stateFromStores = guildId(navigation[30]).useStateFromStores(tmp13, I, tmp16);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items3 = [VibegrationsProjectStore];
    cResult[7] = items3;
    const tmp18 = items3;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (cResult[8] !== projectId) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items4 = [projectId];
    cResult[8] = projectId;
    cResult[9] = tmp21;
    cResult[10] = items4;
    let tmp20 = items4;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    tmp20 = cResult[10];
  }
  const tmpResult6 = guildId(navigation[30]);
  const stateFromStoresObject = guildId(navigation[30]).useStateFromStoresObject(tmp18, tmp21, tmp20);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items5 = [VibegrationsProjectStore];
    cResult[11] = items5;
    const tmp23 = items5;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (cResult[12] !== guildId) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items6 = [guildId];
    cResult[12] = guildId;
    cResult[13] = tmp26;
    cResult[14] = items6;
    let tmp25 = items6;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    tmp25 = cResult[14];
  }
  const tmpResult7 = guildId(navigation[30]);
  const stateFromStores1 = guildId(navigation[30]).useStateFromStores(tmp23, tmp26, tmp25);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items7 = [VibegrationsProjectStore];
    cResult[15] = items7;
    const tmp28 = items7;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (cResult[16] !== projectId) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    const items8 = [projectId];
    cResult[16] = projectId;
    cResult[17] = tmp31;
    cResult[18] = items8;
    let tmp30 = items8;
  } else {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
    tmp30 = cResult[18];
  }
  const tmpResult8 = guildId(navigation[30]);
  const stateFromStores2 = guildId(navigation[30]).useStateFromStores(tmp28, tmp31, tmp30);
  if (stateFromStores2 != null) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (stateFromStores != null) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (undefined == null) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  const tmpResult9 = guildId(navigation[30]);
  if (previewAppId == null) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  let application = guildId(navigation[29]).useApplication(previewAppId);
  const data = application.data;
  if (stateFromStores2 != null) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (stateFromStores2 != null) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  if (cResult[19] === undefined) {
    class I {
      constructor() {
        project = closure_21.getProject(projectId);
        if (project == null) {
          project = null;
        }
        return project;
      }
    }
  }
  cResult[19] = undefined;
  cResult[20] = previewAppId;
  cResult[21] = true === undefined;
  cResult[22] = true === undefined;
  cResult[23] = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === undefined, installScope: undefined, ownerAuthorizationRevoked: true === undefined, mainCardOnly: true };
  let obj5 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: true === undefined, installScope: undefined, ownerAuthorizationRevoked: true === undefined, mainCardOnly: true };
  const tmpResult10 = guildId(navigation[29]);
}) : ((guildId) => {
  guildId = guildId.guildId;
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
  let vibegrationsControlActive;
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
  let callback6;
  let callback7;
  let setting;
  let callback8;
  let callback9;
  __initData2 = undefined;
  let callback10;
  let callback11;
  let stateFromStores3;
  let preview;
  let isVibegrationsProjectMuted;
  let memo4;
  navigation = guildId(navigation[41]).useNavigation();
  const bottom = projectId(navigation[40])().bottom;
  const tmp5 = projectGuildId(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[59])();
  noop = tmp6;
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp9;
  let obj = guildId(navigation[41]);
  let obj4 = { onEnd: null };
  let fn = function p(height) {
    ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
  };
  let obj3 = guildId(navigation[61]);
  fn.__closure = { runOnJS: guildId(navigation[60]).runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  fn.__workletHash = 4855281653615;
  fn.__initData = callback8;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: guildId(navigation[60]).runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  const items1 = [closure_21];
  const items2 = [projectId];
  const stateFromStores = guildId(navigation[30]).useStateFromStores(items1, () => {
    let project = VibegrationsProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items2);
  let obj6 = guildId(navigation[30]);
  const tmp11 = closure_21;
  const items3 = [closure_21];
  const items4 = [projectId];
  const stateFromStoresObject = guildId(navigation[30]).useStateFromStoresObject(items3, () => {
    const project = VibegrationsProjectStore.getProject(projectId);
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
  }, items4);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = guildId(navigation[30]);
  const items5 = [closure_21];
  const items6 = [guildId];
  const stateFromStores1 = guildId(navigation[30]).useStateFromStores(items5, () => {
    const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
    let tmp2 = "unattempted" === guildProjectsFetchState;
    if (!tmp2) {
      tmp2 = "loading" === guildProjectsFetchState;
    }
    return tmp2;
  }, items6);
  const obj8 = guildId(navigation[30]);
  const items7 = [closure_21];
  const items8 = [projectId];
  const stateFromStores2 = guildId(navigation[30]).useStateFromStores(items7, () => {
    let integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = null;
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
  const obj9 = guildId(navigation[30]);
  let application = guildId(navigation[29]).useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  const tmpResult = guildId(navigation[29]);
  let obj10 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true };
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
  const vibegrationsPreviewMode = guildId(navigation[62]).useVibegrationsPreviewMode(obj10);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const tmpResult10 = guildId(navigation[62]);
  const obj11 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
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
  let result = guildId(navigation[63]).requiresPermissionReview(obj11);
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items9);
  const tmp28 = null != previewAppId && null != projectId(navigation[64])(previewAppId);
  const tmpResult11 = guildId(navigation[63]);
  result1 = guildId(navigation[65]).vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items10 = [result1, previewAppId, data, stateFromStores, projectId];
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
        return { value: "IconComponent", done: "IconComponent" };
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
                  value: application.catch(() => {

                              }),
                  done: false
                };
                return obj6;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: "IconComponent" };
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
          const result = c0(16582).repairVibegrationsGuildHints(closure_1_7, closure_1_17);
          const obj = c0(16582);
          result.finally(() => application(8700).getProject(closure_1_1)).catch(() => {

          });
        };
        let result = application3(tmp2[66]).openVibegrationsAppInstallModal(obj7);
        obj2 = application3(tmp2[66]);
      } catch (tmp27) {
        c5 = tmp;
        throw tmp27;
      }
    }
  }), items10);
  const tmpResult12 = guildId(navigation[65]);
  [tmp32, tmp33] = noop.useState(true);
  c18 = tmp33;
  let tmp34 = null;
  if (null != stateFromStores2) {
    tmp34 = tmp22;
  }
  const tmp7Result = _slicedToArray(noop.useState(true), 2);
  [tmp36, tmp37] = noop.useState(tmp34);
  const tmp7Result4 = _slicedToArray(noop.useState(projectId), 2);
  if (tmp7Result4[0] !== projectId) {
    tmp7Result4[1](projectId);
    tmp33(true);
    tmp37(null);
  }
  let tmp42 = tmp22;
  if (true === preview_ready) {
    tmp42 = null != previewAppId;
  }
  if (tmp42) {
    tmp42 = !isResolving;
  }
  if (tmp42) {
    tmp42 = availability.modes.length > 0 || result;
    const tmp43 = availability.modes.length > 0 || result;
  }
  paneHidden = tmp42;
  if (tmp42) {
    paneHidden = !tmp32;
  }
  let hasItem = tmp42;
  if (tmp42) {
    hasItem = tmp28;
  }
  if (hasItem) {
    hasItem = !result;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp45 = hasItem;
  if (hasItem) {
    tmp45 = paneHidden;
  }
  if (tmp45) {
    tmp45 = "frame" === activeMode;
  }
  closure_20 = tmp45;
  let tmp46 = paneHidden;
  if (paneHidden) {
    tmp46 = "bot" === activeMode;
  }
  closure_21 = tmp46;
  const tmp7Result3 = _slicedToArray(noop.useState(tmp34), 2);
  class Ae {
    constructor() {
      paddingBottom = 0;
      if (closure_19) {
        tmp = closure_21;
        paddingBottom = 0;
        if (!closure_21) {
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
  Ae.__closure = { previewShowing: paneHidden, botFaceShowing: tmp46, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Ae.__workletHash = 582914375147;
  Ae.__initData = callback9;
  const animatedStyle = guildId(navigation[60]).useAnimatedStyle(Ae);
  const tmpResult13 = guildId(navigation[60]);
  class Te {
    constructor() {
      num = 0;
      if (!closure_19) {
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
  Te.__workletHash = 14133653716002;
  Te.__initData = __initData2;
  const animatedStyle1 = guildId(navigation[60]).useAnimatedStyle(Te);
  active = result1(projectId).active;
  const tmpResult14 = guildId(navigation[60]);
  vibegrationsControlActive = guildId(navigation[67]).useVibegrationsControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult15 = guildId(navigation[67]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[68])(guild_id, application_id);
  closure_25 = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_25) {
      fn = () => guildId(navigation[27]).transitionTo(vibegrationsControlActive.CHANNEL(guild_id, closure_1_25));
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[32]).intl;
  const tmp4Result4 = projectId(navigation[33]);
  if (vibegrationsControlActive) {
    let bfQ4Ki = tmp4Result4.bfQ4Ki;
  } else {
    bfQ4Ki = active ? tmp4Result4.rfNEHn : tmp4Result4.lXcEa2;
  }
  const stringResult = intl.string(bfQ4Ki);
  c26 = stringResult;
  const items12 = [active, projectId];
  callback1 = obj2.useCallback(() => {
    if (active) {
      value2(projectId);
    } else {
      closure_2_15(projectId);
    }
  }, items12);
  const items13 = [availability.modes];
  const items14 = [availability.modes, setMode];
  const memo1 = obj2.useMemo(() => {
    let obj = { id: "chat", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3723.kWtsyP);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: guildId(navigation[69]).getPreviewModeLabel(id), page: null };
        return obj;
      })
    ];
    modes = availability.modes;
    return items;
  }, items13);
  const first = availability.modes[0];
  let tmp61 = null != stateFromStores2;
  const callback2 = obj2.useCallback((arg0) => {
    React5.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(tmp2);
    }
  }, items14);
  if (tmp61) {
    tmp61 = tmp22 !== tmp36;
  }
  if (tmp61) {
    if (tmp62) {
      setMode(first);
      tmp33(false);
    }
    tmp37(tmp22);
    tmp62 = false === tmp36 && tmp22 && null != first && !result;
  }
  const tmp4Result = projectId(navigation[68]);
  const tmpResult16 = guildId(navigation[71]);
  const segmentedControlState = tmpResult16.useSegmentedControlState({ items: memo1, pageWidth: projectId(navigation[70])().width - 2 * callback3, onSetActiveIndex: callback2 });
  num = 0;
  if (!tmp32) {
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
  const effect2 = obj2.useEffect(() => null != previewAppId ? (() => guildId(navigation[72]).leaveVibegrationsPreviewFrame(previewAppId)) : undefined, items16);
  const items17 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj2.useMemo(() => ({ guildId, platform: obj2, busy: null == stateFromStores2 || isLoading }), items17);
  const tmp70 = projectId(navigation[73])(projectId, memo2);
  closure_31 = tmp70;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items18 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    obj2 = { content: closure_2_27(VibegrationsSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items18);
  const items19 = [guildId, navigation];
  memo3 = obj2.useMemo(() => {
    closure_0 = guildId;
    const f145887 = (projectId) => navigation.push(memo3.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f145887(arg0);
      } else {
        guildId(navigation[27]).transitionTo(vibegrationsControlActive.CHANNEL(arg1, guild_id.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[27]);
      }
    };
  }, items19);
  const items20 = [guildId, memo3, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo3 };
      obj2.content = closure_2_27(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items20);
  const items21 = [projectId];
  callback5 = obj2.useCallback(() => {
    obj2 = { key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY, content: closure_2_27(VibegrationsConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items21);
  noop.useRef(false);
  const items22 = [projectId];
  callback6 = obj2.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3723.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = closure_2_20(projectId, sha.sha);
      closure_2_20(projectId, sha.sha).then(() => {
        obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1126).intl;
        obj2.content = intl.string(projectId(3723).u8g2Od);
        obj2.IconComponent = guildId(14906).UndoIcon;
        projectId(4568).open(obj2);
      }, () => {
        const intl = guildId(1126).intl;
        guildId(4567).presentError(intl.string(projectId(3723).q6iZ84));
      }).finally(() => {
        ref.current = false;
      });
      const nextPromise = closure_2_20(projectId, sha.sha).then(() => {
        obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1126).intl;
        obj2.content = intl.string(projectId(3723).u8g2Od);
        obj2.IconComponent = guildId(14906).UndoIcon;
        projectId(4568).open(obj2);
      }, () => {
        const intl = guildId(1126).intl;
        guildId(4567).presentError(intl.string(projectId(3723).q6iZ84));
      });
    }
  }, items22);
  const items23 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    obj2 = { key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY, content: closure_2_27(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback6 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items23);
  const DeveloperMode = tmp(tmp2[78]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(memo3.DEBUG, { projectId }), items24);
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items25 = [install_scope1, projectId];
  callback9 = obj2.useCallback(() => {
    obj2 = { key: VibegrationsRestorePointsSheet.VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY, content: null };
    const obj3 = { projectId, installScope: null };
    let install_scope;
    const obj = ActionSheetActionCreators;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    if (install_scope == null) {
      install_scope = null;
    }
    obj3.installScope = install_scope;
    obj2.content = closure_2_27(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items25);
  const tmp81 = closure_25(projectId(navigation[80])(previewAppId, c26));
  __initData2 = tmp81;
  const items26 = [previewAppId];
  callback10 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items26);
  const items27 = [navigation, projectId];
  callback11 = obj2.useCallback(() => {
    closure_2_19(projectId);
    navigation.goBack();
  }, items27);
  const obj12 = { items: memo1, pageWidth: projectId(navigation[70])().width - 2 * callback3, onSetActiveIndex: callback2 };
  const items28 = [tmp11];
  const items29 = [projectId];
  stateFromStores3 = guildId(navigation[30]).useStateFromStores(items28, () => VibegrationsProjectStore.isProjectDeleting(projectId), items29);
  const items30 = [stateFromStores3, callback11];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores3) {
      callback11();
    }
  }, items30);
  const obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult17 = guildId(navigation[30]);
  let tmp87 = null;
  if (modes2.includes("widget")) {
    tmp87 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp87 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp87;
  const tmp4Result2Result = projectId(navigation[82])(obj13);
  preview = tmp4Result2Result;
  const tmp4Result5 = projectId(navigation[82]);
  isVibegrationsProjectMuted = guildId(navigation[46]).useIsVibegrationsProjectMuted(projectId);
  const items31 = [setting, guildId, isVibegrationsProjectMuted, callback11, callback5, callback8, callback4, callback3, callback9, callback7, callback10, tmp81, tmp4Result2Result, stateFromStores, tmp70];
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
          }
      };
      items.push(obj);
    }
    obj2 = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3723.cWmjzs);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback3;
    items.push(obj2);
    if (setting) {
      let obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3723.KampIf);
      obj3.IconComponent = BugIcon.BugIcon;
      obj3.action = callback8;
      items.push(obj3);
    }
    if (null != stateFromStores) {
      const obj6 = { project: tmp14, guildId, muted: isVibegrationsProjectMuted, onRemix: callback4, onConnectTool: callback5, onVersionHistory: callback7, onRestorePoints: callback9, onRefresh: null, onClose: null, preview: null };
      let tmp15;
      if (closure_43) {
        tmp15 = callback10;
      }
      obj6.onRefresh = tmp15;
      obj6.onClose = callback11;
      obj6.preview = preview;
      const result = vibegrationsProjectActions.vibegrationsProjectActions(obj6);
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
  }, items31);
  const items32 = [vibegrationsControlActive, active, stringResult, tmp45, callback1, navigation, memo4, projectExists, projectName, stateFromStores1, tmp5];
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
                items = [null, ];
                obj2 = {
                  items,
                  align: "below",
                  children(arg0) {
                        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                        const obj = { ref, IconComponent: title(7577).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                        const intl = title(1126).intl;
                        obj.accessibilityLabel = intl.string(title(1126).t["UKOtz+"]);
                        obj.accessibilityActions = accessibilityActions;
                        obj.onAccessibilityAction = onAccessibilityAction;
                        return closure_1_27(closure_1_1(16547), obj);
                      }
                };
                items[1] = callback1(guildId(navigation[87]).ContextMenu, obj2);
                obj.children = items;
                tmp = tmp2(tmp3, obj);
              } else {
                if (active) {
                  let ExperimentalDirectSelectIcon = setActiveIndex;
                } else {
                  ExperimentalDirectSelectIcon = guildId(navigation[19]).ExperimentalDirectSelectIcon;
                }
                const obj3 = { IconComponent: ExperimentalDirectSelectIcon, onPress, accessibilityLabel, accessibilityState: null, disabled: null };
                const obj4 = { selected: active };
                obj3.accessibilityState = obj4;
                obj3.disabled = disabled;
                callback1(projectId(navigation[37]), obj3);
                const tmp10 = projectId(navigation[37]);
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
          let Xmvb23 = projectId(tmp2[33]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[33]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items32);
  const items33 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[54]).setSelectedProjectForGuild(closure_1_0, null);
  }, items33);
  const items34 = [projectId];
  const effect6 = obj2.useEffect(() => () => projectId(navigation[88])(closure_1_1), items34);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items35 = [tmp5.contentBare, animatedStyle];
    obj14.style = items35;
    let tmp101 = null;
    if (tmp42) {
      const obj15 = { style: tmp5.segments, children: null };
      const obj16 = { state: segmentedControlState, variant: "experimental_Small" };
      obj15.children = callback1(tmp(tmp2[89]).SegmentedControl, obj16);
      tmp101 = callback1(projectName, obj15);
    }
    const items36 = [tmp101, ];
    const obj17 = { style: tmp5.panes, children: null };
    let tmp106Result = null;
    if (hasItem) {
      tmp106Result = null;
      if (null != previewAppId) {
        const obj18 = { style: tmp45 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str5 = "none";
        if (tmp45) {
          str5 = "auto";
        }
        obj18.pointerEvents = str5;
        obj18.accessibilityElementsHidden = !tmp45;
        let str6 = "no-hide-descendants";
        if (tmp45) {
          str6 = "auto";
        }
        obj18.importantForAccessibility = str6;
        const obj19 = { applicationId: previewAppId, projectId, visible: tmp45, onOpenPublishedApp: memo };
        obj18.children = callback1(tmp(tmp2[72]).PreviewFrame, obj19);
        tmp106Result = tmp106(tmp104, obj18);
      }
    }
    const items37 = [tmp106Result, , ];
    let tmp108Result = null;
    if (paneHidden) {
      tmp108Result = null;
      if (null != previewAppId) {
        tmp108Result = null;
        if (!tmp45) {
          const obj20 = { style: tmp5.pane, children: null };
          const obj21 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, widgetApplicationId, frameHostAvailable: tmp28, permissionsGate: null };
          let tmp110 = null;
          if (result) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
            tmp110 = obj22;
          }
          obj21.permissionsGate = tmp110;
          obj20.children = callback1(tmp4(tmp2[72]), obj21);
          tmp108Result = tmp108(tmp104, obj20);
          const tmp4Result6 = tmp4(tmp2[72]);
        }
      }
    }
    items37[1] = tmp108Result;
    const items38 = [tmp5.chatPane, , ];
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items38[1] = paneHidden;
    items38[2] = animatedStyle1;
    obj23.style = items38;
    const obj24 = { value: memo2, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6 };
    obj24.children = callback1(tmp4(tmp2[90]), obj25);
    obj23.children = callback1(tmp(tmp2[73]).VibegrationsPublishActionContext.Provider, obj24);
    items37[2] = callback1(tmp4(tmp2[60]).View, obj23);
    obj17.children = items37;
    items36[1] = num(projectName, obj17);
    obj14.children = items36;
    let tmp94Result1 = tmp100(tmp4(tmp2[60]).View, obj14);
  } else {
    const obj26 = { style: null, children: null };
    const items39 = [, ];
    ({ content: arr37[0], centered: arr37[1] } = tmp5);
    obj26.style = items39;
    if (stateFromStores1) {
      let tmp94Result = tmp94(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[32]).intl;
      obj28.children = intl2.string(tmp4(tmp2[33]).F2dRba);
      const items40 = [tmp94(tmp(tmp2[52]).Text, obj28), , ];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl3 = tmp(tmp2[32]).intl;
      obj29.children = intl3.string(tmp4(tmp2[33]).GnEJ3o);
      items40[1] = tmp94(tmp(tmp2[52]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp(tmp2[32]).intl;
      obj30.text = intl4.string(tmp4(tmp2[33])["42EdIV"]);
      obj30.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items40[2] = tmp94(tmp(tmp2[53]).Button, obj30);
      obj27.children = items40;
      tmp94Result = num(tmp95, obj27);
    }
    obj26.children = tmp94Result;
    tmp94Result1 = tmp94(tmp95, obj26);
  }
  return tmp94Result1;
});
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
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
}) : ((projectId) => {
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
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(stateFromStores[18]).c(56);
  guildId = guildId.guildId;
  let obj = guildId(stateFromStores[18]);
  const navigation = guildId(stateFromStores[41]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [VibegrationsBuilderRouteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function a() {
      const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
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
    const fn2 = function b() {
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
  const isVibegrationsGuildEnabled = guildId(stateFromStores[91]).useIsVibegrationsGuildEnabled(tmp15);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildMemberStore];
    cResult[10] = items4;
    let tmp17 = items4;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== guildId) {
    class P {
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
    cResult[13] = P;
    let tmp20 = P;
    const tmp19 = items5;
  } else {
    class P {
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
  const tmpResult6 = guildId(stateFromStores[91]);
  const stateFromStoresArray = guildId(stateFromStores[30]).useStateFromStoresArray(tmp17, tmp20, tmp19);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
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
    class P {
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
    let tmp25 = items7;
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
    tmp25 = cResult[17];
  }
  const tmpResult7 = guildId(stateFromStores[30]);
  const stateFromStores2 = guildId(stateFromStores[30]).useStateFromStores(tmp22, R, tmp25);
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
    const items8 = [isVibegrationsGuildEnabled, guildId, stateFromStoresArray, stateFromStores2];
    cResult[21] = stateFromStores2;
    cResult[22] = stateFromStoresArray;
    cResult[23] = guildId;
    cResult[24] = isVibegrationsGuildEnabled;
    cResult[25] = items8;
  }
  class B {
    constructor() {
      if (closure_4) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[54]);
        tmp3 = guildId;
        listProjectsResult = obj.listProjects(guildId);
      }
      return;
    }
  }
  cResult[18] = guildId;
  cResult[19] = isVibegrationsGuildEnabled;
  cResult[20] = B;
  const tmpResult8 = guildId(stateFromStores[30]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  let stateFromStores;
  noop = undefined;
  const navigation = guildId(stateFromStores[41]).useNavigation();
  let obj = guildId(stateFromStores[41]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[30]).useStateFromStores(items, () => {
    const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  obj2 = guildId(stateFromStores[30]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[30]).useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  let obj3 = guildId(stateFromStores[30]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[91]).useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const obj4 = guildId(stateFromStores[91]);
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[30]).useStateFromStoresArray(items4, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items5);
  const obj5 = guildId(stateFromStores[30]);
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[30]).useStateFromStores(items6, () => {
      guild = GuildStore.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
      }
      return canResult;
    }, items7)
  ];
  const effect = noop.useEffect(() => {
    if (isVibegrationsGuildEnabled) {
      VibegrationsActionCreators.listProjects(guildId);
    }
  }, items8);
  const items9 = [stateFromStores1, isVibegrationsGuildEnabled, navigation];
  const effect1 = noop.useEffect(() => {
    if (!tmp) {
      navigation.goBack();
    }
    tmp = null == stateFromStores1 || isVibegrationsGuildEnabled;
  }, items9);
  noop = noop.useRef(stateFromStores);
  const obj7 = {};
  const obj8 = { headerLeft: null, headerTitle: null, render: null };
  const obj6 = guildId(stateFromStores[30]);
  obj8.headerLeft = guildId(stateFromStores[86]).getHeaderCloseButton(() => navigation.goBack());
  obj8.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[32]).intl;
    obj.title = intl.string(navigation(stateFromStores[33]).Xmvb23);
    return closure_1_27(guildId(stateFromStores[86]).NavigatorHeader, obj);
  };
  obj8.render = function render() {
    const obj = { children: null };
    obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
    const items = [closure_2_27(closure_45, obj2), closure_2_27(closure_37, { guildId })];
    obj.children = items;
    return closure_2_28(closure_2_29, obj);
  };
  obj7[constants2.PROJECTS] = obj8;
  obj7[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [closure_2_27(closure_45, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), closure_2_27(closure_44, { guildId, projectId })];
      obj.children = items;
      return closure_2_28(closure_2_29, obj);
    }
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[32]).intl;
      obj.title = intl.string(navigation(stateFromStores[33]).KampIf);
      return closure_1_27(guildId(stateFromStores[86]).NavigatorHeader, obj);
    },
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [closure_2_27(closure_45, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), closure_2_27(VibegrationsDebugSceneDefault, { projectId })];
      obj.children = items;
      return closure_2_28(closure_2_29, obj);
    }
  };
  const obj10 = {
    screens: obj7,
    initialRouteStack: isVibegrationsGuildEnabled(noop.useState(() => {
      const items = [{ name: constants.PROJECTS }];
      if (null != stateFromStores) {
        obj2 = { name: tmp.CHAT, params: null };
        const obj3 = { projectId: tmp2 };
        obj2.params = obj3;
        items.push(obj2);
      }
      return items;
    }), 1)[0],
    headerBackTitle: null
  };
  let intl = guildId(stateFromStores[32]).intl;
  obj10.headerBackTitle = intl.string(navigation(stateFromStores[33]).Xmvb23);
  return closure_27(guildId(stateFromStores[93]).Navigator, obj10);
});