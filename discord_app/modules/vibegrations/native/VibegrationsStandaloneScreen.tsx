// === Module 16412: VibegrationsStandaloneScreen ===

// Module 16412 (VibegrationsStandaloneScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import _modDef4421 from "module_4421" /* 4421 */;
import DateUtils from "DateUtils" /* 4512 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorHeader from "NavigatorHeader" /* 6102 */;
import SettingsIcon from "SettingsIcon" /* 6964 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7789 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8661 */;
import UploadIcon from "UploadIcon" /* 8839 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9188 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 12621 */;
import UndoIcon from "UndoIcon" /* 14813 */;
import BugIcon from "BugIcon" /* 15516 */;
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet" /* 16416 */;
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet" /* 16418 */;
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton" /* 16420 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16421 */;
import VibegrationsRemixSheet from "VibegrationsRemixSheet" /* 16433 */;
import vibegrationsProjectActions from "vibegrationsProjectActions" /* 16435 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16440 */;
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet" /* 16485 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16486 */;
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet" /* 16487 */;
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene" /* 16591 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import VibegrationsBuilderRouteStore from "VibegrationsBuilderRouteStore" /* 16415 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8660 */;

const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsConnectToolSheetDefault = VibegrationsConnectToolSheet;
const VibegrationsVersionHistorySheetDefault = VibegrationsVersionHistorySheet;
const VibegrationsRestorePointsSheetDefault = VibegrationsRestorePointsSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  let application_id = project.preview_application_id;
  ({ onPress, onMore } = project);
  if (application_id == null) {
    application_id = project.application_id;
  }
  const data = project(6750).useApplication(application_id).data;
  const obj = project(6750);
  const items = [VibegrationsProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => VibegrationsProjectStore.isProjectDeleting(project.id), items1);
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp(1115).intl;
    const obj3 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj3.time = tmp(7220).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3715.oMDaqr, obj3);
    const tmpResult = tmp(7220);
  }
  const obj4 = { label: project.name, subLabel: null, disabled: null, icon: null, trailing: null, onPress: null };
  if (stateFromStores) {
    const intl2 = tmp(1115).intl;
    formatToPlainStringResult = intl2.string(_modDef3715.EwXXks);
  }
  obj4.subLabel = formatToPlainStringResult;
  obj4.disabled = stateFromStores;
  const obj5 = { id: application_id, icon: null };
  let icon;
  const obj2 = project(504);
  if (data != null) {
    icon = data.icon;
  }
  obj5.icon = icon;
  obj4.icon = closure_26(TableRowApplicationIconDefault, { application: obj5 });
  if (stateFromStores) {
    let tmp10Result = closure_26(closure_6, {});
  } else {
    const obj6 = { IconComponent: tmp(7530).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl3 = tmp(1115).intl;
    obj6.accessibilityLabel = intl3.string(tmp(1115).t["UKOtz+"]);
    tmp10Result = closure_26(VibegrationsHeaderIconButtonDefault, obj6);
    const tmp12Result = VibegrationsHeaderIconButtonDefault;
  }
  obj4.trailing = tmp10Result;
  obj4.onPress = onPress;
  return closure_26(project(6083).TableRow, obj4);
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  let callback;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_30(0);
  importDefault = tmp3;
  navigation = guildId(navigation[34]).useNavigation();
  let obj = guildId(navigation[34]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[25]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj2 = guildId(navigation[25]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[25]).useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj3 = guildId(navigation[25]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[25]).useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = callback.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => guildId(navigation[35]).isVibegrationsProjectInGuild(item, closure_1_0));
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
        f120148(arg0);
      } else {
        guildId(navigation[23]).transitionTo(closure_22.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[23]);
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = callback.useCallback(() => {
    const obj2 = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: dependencyMap(VibegrationsCreateSheetDefault, { guildId, onCreated: memo2 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = callback.useCallback((project) => {
    const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: dependencyMap(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, callback, callback2];
  closure_9 = callback.useCallback((project) => {
    guildId = project;
    const result = guildId(navigation[38]).vibegrationsProjectActions({
      project,
      guildId,
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(closure_0);
      },
      onOpenSettings() {
        const obj2 = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: null };
        const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
        let guild_id = project.guild_id;
        const obj = ActionSheetActionCreators;
        if (guild_id == null) {
          guild_id = guildId;
        }
        obj3.guildId = guild_id;
        obj2.content = dependencyMap(VibegrationsSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      }
    });
    let obj = guildId(navigation[38]);
    let obj2 = {
      project,
      guildId,
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(closure_0);
      },
      onOpenSettings() {
        const obj2 = { key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY, content: null };
        const obj3 = { projectId: project.id, guildId: null, initialTab: "project", isPreview: true };
        let guild_id = project.guild_id;
        const obj = ActionSheetActionCreators;
        if (guild_id == null) {
          guild_id = guildId;
        }
        obj3.guildId = guild_id;
        obj2.content = dependencyMap(VibegrationsSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      }
    };
    let obj3 = guildId(navigation[40]);
    const result1 = obj3.showSimpleActionSheet({ key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) });
  }, items10);
  const items11 = [navigation, callback1];
  const effect = callback.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[41]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[26]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[26]).t.CumH4u);
        return closure_2_26(closure_1(navigation[31]), obj);
      }
    });
  }, items11);
  const obj4 = guildId(navigation[25]);
  let result = guildId(navigation[42]).recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = callback.useCallback(() => {
    const obj = guildId(navigation[17]);
    obj.showActionSheet({ content: closure_1_26(closure_1(navigation[43]), {}), key: guildId(navigation[43]).VIBEGRATIONS_CHANGELOG_SHEET_KEY });
  }, []);
  if (!tmp15) {
    tmp15 = memo1.length > 0;
  }
  if (tmp15) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items12 = [tmp3.listContent, ];
    const obj8 = { paddingBottom: tmp(tmp2[22]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_26(tmp(tmp2[47]), {}), , , , ];
    let tmp24Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[26]).intl;
      obj12.children = intl3.string(tmp(tmp2[27]).x07mpp);
      const items14 = [closure_26(tmp4(tmp2[44]).Text, obj12), ];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[26]).intl;
      obj13.children = intl4.string(tmp(tmp2[27]).h5CwHI);
      items14[1] = closure_26(tmp4(tmp2[44]).Text, obj13);
      obj11.children = items14;
      const items15 = [closure_27(tmp23, obj11), , ];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
              const obj = { style: closure_1.changelogItem, children: null };
              const items = [DateUtils.dateFormat(_modDef4421(children.date, "YYYY-MM-DD"), "LL"), ];
              let combined = null;
              if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
                const intl = util.intl;
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 " + intl.string(_modDef3715["CLX+p/"]);
              }
              items[1] = combined;
              const items1 = [__initData5(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }), dependencyMap(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary })];
              obj.children = items1;
              return __initData5(React7, obj, "" + children.date + "-" + children.summary);
            })
      };
      items15[1] = closure_26(tmp23, obj14);
      let tmp22Result = null;
      if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
        const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp4(tmp2[26]).intl;
        obj15.text = intl5.string(tmp(tmp2[27]).YWxThz);
        obj15.onPress = callback3;
        tmp22Result = closure_26(tmp4(tmp2[45]).Button, obj15);
      }
      items15[2] = tmp22Result;
      obj10.children = items15;
      tmp24Result = closure_27(tmp23, obj10);
      tmp4Result = tmp4(tmp2[42]);
    }
    items13[1] = tmp24Result;
    let tmp24Result3 = null;
    if (memo.length > 0) {
      const obj16 = { style: tmp3.section, children: null };
      const obj17 = { style: tmp3.sectionHeading, children: null };
      const obj18 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl6 = tmp4(tmp2[26]).intl;
      obj18.children = intl6.string(tmp(tmp2[27]).Bo5fE3);
      const items16 = [closure_26(tmp4(tmp2[44]).Text, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl7 = tmp4(tmp2[26]).intl;
      obj19.children = intl7.string(tmp(tmp2[27]).YnAFtT);
      items16[1] = closure_26(tmp4(tmp2[44]).Text, obj19);
      obj17.children = items16;
      const items17 = [closure_27(tmp23, obj17), ];
      const obj20 = {
        hasIcons: true,
        children: memo.map((project) => closure_1_26(ProjectRow, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
      };
      items17[1] = closure_26(tmp4(tmp2[50]).TableRowGroup, obj20);
      obj16.children = items17;
      tmp24Result3 = closure_27(tmp23, obj16);
    }
    items13[2] = tmp24Result3;
    let tmp24Result4 = null;
    if (memo1.length > 0) {
      const obj21 = { style: tmp3.section, children: null };
      const obj22 = { style: tmp3.sectionHeading, children: null };
      const obj23 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl8 = tmp4(tmp2[26]).intl;
      obj23.children = intl8.string(tmp(tmp2[27]).jrCnUc);
      const items18 = [closure_26(tmp4(tmp2[44]).Text, obj23), ];
      const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl9 = tmp4(tmp2[26]).intl;
      obj24.children = intl9.string(tmp(tmp2[27])["1KEhDu"]);
      items18[1] = closure_26(tmp4(tmp2[44]).Text, obj24);
      obj22.children = items18;
      const items19 = [closure_27(tmp23, obj22), ];
      const obj25 = {
        hasIcons: true,
        children: memo1.map((project) => closure_1_26(ProjectRow, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
      };
      items19[1] = closure_26(tmp4(tmp2[50]).TableRowGroup, obj25);
      obj21.children = items19;
      tmp24Result4 = closure_27(tmp23, obj21);
    }
    items13[3] = tmp24Result4;
    items13[4] = null;
    obj7.children = items13;
    obj6.children = closure_27(callback2, obj7);
    return closure_26(closure_9, obj6);
  } else {
    const obj26 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj27 = { style: tmp3.listError, children: null };
          const obj28 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[26]).intl;
          obj28.children = intl.string(tmp(tmp2[27])["IN/HRP"]);
          const items20 = [closure_26(tmp4(tmp2[44]).Text, obj28), ];
          const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[26]).intl;
          obj29.text = intl2.string(tmp(tmp2[27])["42EdIV"]);
          obj29.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_26(tmp4(tmp2[45]).Button, obj29);
          obj27.children = items20;
          let tmp16Result2 = closure_27(tmp17, obj27);
        } else {
          const obj30 = { style: tmp3.listError, children: null };
          const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl10 = tmp4(tmp2[26]).intl;
          obj31.children = intl10.string(tmp(tmp2[27])["vqy+in"]);
          const items21 = [closure_26(tmp4(tmp2[44]).Text, obj31), ];
          const obj32 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl11 = tmp4(tmp2[26]).intl;
          obj32.text = intl11.string(tmp4(tmp2[26]).t.CumH4u);
          obj32.onPress = callback1;
          items21[1] = closure_26(tmp4(tmp2[45]).Button, obj32);
          obj30.children = items21;
          tmp16Result2 = closure_27(tmp17, obj30);
        }
      }
      obj26.children = tmp16Result2;
      closure_26(tmp17, obj26);
    }
    tmp16Result2 = closure_26(memo2, {});
  }
  const obj5 = guildId(navigation[42]);
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let data;
  let isLoading;
  let availability;
  setMode = undefined;
  let result1;
  c17 = undefined;
  closure_18 = undefined;
  let active;
  let vibegrationsControlActive;
  let guild_id;
  closure_22 = undefined;
  c23 = undefined;
  let callback1;
  let num2;
  let activeIndex;
  let setActiveIndex;
  closure_28 = undefined;
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
  closure_40 = undefined;
  let callback10;
  let callback11;
  let stateFromStores3;
  let preview;
  let memo4;
  navigation = guildId(navigation[34]).useNavigation();
  const bottom = projectId(navigation[33])().bottom;
  const tmp5 = callback3(bottom);
  asyncGeneratorStep = tmp5;
  const tmp6 = projectId(navigation[51])();
  noop = tmp6;
  let obj = guildId(navigation[34]);
  let fn = function h() {
    return { paddingBottom: Math.max(closure_5.get(), bottom) };
  };
  fn.__closure = { keyboardHeight: tmp6, safeAreaBottom: bottom };
  fn.__workletHash = 2974418984539;
  fn.__initData = callback6;
  const animatedStyle = guildId(navigation[52]).useAnimatedStyle(fn);
  let obj2 = guildId(navigation[52]);
  let items = [vibegrationsControlActive];
  const items1 = [projectId];
  const stateFromStores = guildId(navigation[25]).useStateFromStores(items, () => {
    let project = VibegrationsProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let obj3 = guildId(navigation[25]);
  const tmp8 = vibegrationsControlActive;
  const items2 = [vibegrationsControlActive];
  const items3 = [projectId];
  const stateFromStoresObject = guildId(navigation[25]).useStateFromStoresObject(items2, () => {
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
  }, items3);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj4 = guildId(navigation[25]);
  const items4 = [vibegrationsControlActive];
  const items5 = [guildId];
  const stateFromStores1 = guildId(navigation[25]).useStateFromStores(items4, () => {
    const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
    let tmp2 = "unattempted" === guildProjectsFetchState;
    if (!tmp2) {
      tmp2 = "loading" === guildProjectsFetchState;
    }
    return tmp2;
  }, items5);
  let obj5 = guildId(navigation[25]);
  const items6 = [vibegrationsControlActive];
  const items7 = [projectId];
  const stateFromStores2 = guildId(navigation[25]).useStateFromStores(items6, () => {
    let integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    return integrationStatus;
  }, items7);
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
  let obj6 = guildId(navigation[25]);
  let application = guildId(navigation[24]).useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  const tmpResult = guildId(navigation[24]);
  let obj7 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj7.declaredActivity = true === has_activity;
  obj7.installScope = install_scope;
  let prop;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  obj7.ownerAuthorizationRevoked = true === prop;
  const vibegrationsPreviewMode = guildId(navigation[53]).useVibegrationsPreviewMode(obj7);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const tmpResult7 = guildId(navigation[53]);
  const obj8 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.integration_installed;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  obj8.integrationInstalled = prop1;
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  obj8.botPermissionsChanged = true === prop2;
  let result = guildId(navigation[54]).requiresPermissionReview(obj8);
  const items8 = [projectId];
  const effect = noop.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items8);
  const tmp25 = null != previewAppId && null != projectId(navigation[55])(previewAppId);
  const tmpResult8 = guildId(navigation[54]);
  result1 = guildId(navigation[56]).vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items9 = [result1, previewAppId, data, stateFromStores, projectId];
  const callback = obj12.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "HermesInternal", done: null };
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
                application = application(tmp2[24]).fetchApplication(previewAppId);
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
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj = { value, done: true };
          return obj;
        }
        const obj7 = { applicationId: closure_131_9, application: null, guildId: null, onClose: null };
        let application3 = closure_131_12;
        if (closure_131_12 == null) {
          application3 = application2.getApplication(closure_131_9);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        obj7.application = application;
        obj7.guildId = closure_131_16;
        obj7.onClose = function onClose() {
          const result = c0(16454).repairVibegrationsGuildHints(closure_1_6, closure_1_16);
          const obj = c0(16454);
          result.finally(() => application(8661).getProject(closure_1_1)).catch(() => {

          });
        };
        let result = application3(tmp2[57]).openVibegrationsAppInstallModal(obj7);
        const obj2 = application3(tmp2[57]);
      } catch (tmp27) {
        c5 = tmp;
        throw tmp27;
      }
    }
  }), items9);
  const tmpResult9 = guildId(navigation[56]);
  [tmp30, tmp31] = bottom(noop.useState(true), 2);
  c17 = tmp31;
  let tmp32 = null;
  if (null != stateFromStores2) {
    tmp32 = tmp19;
  }
  const tmp29 = bottom(noop.useState(true), 2);
  [tmp34, tmp35] = bottom(noop.useState(tmp32), 2);
  const tmp28Result2 = bottom(noop.useState(projectId), 2);
  if (tmp28Result2[0] !== projectId) {
    tmp28Result2[1](projectId);
    tmp31(true);
    tmp35(null);
  }
  let tmp40 = tmp19;
  if (true === preview_ready) {
    tmp40 = null != previewAppId;
  }
  if (tmp40) {
    tmp40 = !isResolving;
  }
  if (tmp40) {
    tmp40 = availability.modes.length > 0 || result;
    const tmp41 = availability.modes.length > 0 || result;
  }
  let paneHidden = tmp40;
  if (tmp40) {
    paneHidden = !tmp30;
  }
  let hasItem = tmp40;
  if (tmp40) {
    hasItem = tmp25;
  }
  if (hasItem) {
    hasItem = !result;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp43 = hasItem;
  if (hasItem) {
    tmp43 = paneHidden;
  }
  if (tmp43) {
    tmp43 = "frame" === activeMode;
  }
  closure_18 = tmp43;
  active = result1(projectId).active;
  const tmp28Result = bottom(noop.useState(tmp32), 2);
  vibegrationsControlActive = guildId(navigation[58]).useVibegrationsControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult10 = guildId(navigation[58]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[59])(guild_id, application_id);
  closure_22 = tmp4ResultResult;
  const items10 = [tmp4ResultResult, guild_id];
  const memo = obj12.useMemo(() => {
    let fn = null;
    if (null != closure_22) {
      fn = () => guildId(navigation[23]).transitionTo(closure_22.CHANNEL(guild_id, closure_1_22));
    }
    return fn;
  }, items10);
  let intl = tmp(tmp2[26]).intl;
  const tmp4Result4 = projectId(navigation[27]);
  if (vibegrationsControlActive) {
    let bfQ4Ki = tmp4Result4.bfQ4Ki;
  } else {
    bfQ4Ki = active ? tmp4Result4.rfNEHn : tmp4Result4.lXcEa2;
  }
  const stringResult = intl.string(bfQ4Ki);
  c23 = stringResult;
  const items11 = [active, projectId];
  callback1 = obj12.useCallback(() => {
    if (active) {
      __initData(projectId);
    } else {
      closure_2_14(projectId);
    }
  }, items11);
  const items12 = [availability.modes];
  const items13 = [availability.modes, setMode];
  const memo1 = obj12.useMemo(() => {
    let obj = { id: "chat", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3715.kWtsyP);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: guildId(navigation[60]).getPreviewModeLabel(id), page: null };
        return obj;
      })
    ];
    modes = availability.modes;
    return items;
  }, items12);
  const first = availability.modes[0];
  let tmp56 = null != stateFromStores2;
  const callback2 = obj12.useCallback((arg0) => {
    React5.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(tmp2);
    }
  }, items13);
  if (tmp56) {
    tmp56 = tmp19 !== tmp34;
  }
  if (tmp56) {
    if (tmp57) {
      setMode(first);
      tmp31(false);
    }
    tmp35(tmp19);
    tmp57 = false === tmp34 && tmp19 && null != first && !result;
  }
  const tmp4Result = projectId(navigation[59]);
  const tmpResult11 = guildId(navigation[62]);
  const segmentedControlState = tmpResult11.useSegmentedControlState({ items: memo1, pageWidth: projectId(navigation[61])().width - 2 * memo3, onSetActiveIndex: callback2 });
  num2 = 0;
  if (!tmp30) {
    num2 = 0;
    if (null != activeMode) {
      const modes1 = availability.modes;
      num2 = 1 + modes1.indexOf(activeMode);
    }
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items14 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj12.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items14);
  const items15 = [previewAppId];
  const effect2 = obj12.useEffect(() => null != previewAppId ? (() => guildId(navigation[63]).leaveVibegrationsPreviewFrame(previewAppId)) : undefined, items15);
  const items16 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj12.useMemo(() => {
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items16);
  const tmp65 = projectId(navigation[64])(projectId, memo2);
  closure_28 = tmp65;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items17 = [projectId, projectGuildId];
  callback3 = obj12.useCallback(() => {
    const obj2 = { content: dependencyMap(VibegrationsSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items17);
  const items18 = [guildId, navigation];
  memo3 = obj12.useMemo(() => {
    closure_0 = guildId;
    const f120148 = (projectId) => navigation.push(callback4.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f120148(arg0);
      } else {
        guildId(navigation[23]).transitionTo(closure_22.CHANNEL(arg1, constants.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[23]);
      }
    };
  }, items18);
  const items19 = [guildId, memo3, stateFromStores];
  callback4 = obj12.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo3 };
      obj2.content = dependencyMap(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items19);
  const items20 = [projectId];
  callback5 = obj12.useCallback(() => {
    const obj2 = { key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY, content: dependencyMap(VibegrationsConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items20);
  noop.useRef(false);
  const items21 = [projectId];
  callback6 = obj12.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3715.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = closure_2_19(projectId, sha.sha);
      closure_2_19(projectId, sha.sha).then(() => {
        const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1115).intl;
        obj2.content = intl.string(projectId(3715).u8g2Od);
        obj2.IconComponent = guildId(14813).UndoIcon;
        projectId(4528).open(obj2);
      }, () => {
        const intl = guildId(1115).intl;
        guildId(4527).presentError(intl.string(projectId(3715).q6iZ84));
      }).finally(() => {
        ref.current = false;
      });
      const nextPromise = closure_2_19(projectId, sha.sha).then(() => {
        const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1115).intl;
        obj2.content = intl.string(projectId(3715).u8g2Od);
        obj2.IconComponent = guildId(14813).UndoIcon;
        projectId(4528).open(obj2);
      }, () => {
        const intl = guildId(1115).intl;
        guildId(4527).presentError(intl.string(projectId(3715).q6iZ84));
      });
    }
  }, items21);
  const items22 = [callback6, projectId];
  callback7 = obj12.useCallback(() => {
    const obj2 = { key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY, content: dependencyMap(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback6 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  const DeveloperMode = tmp(tmp2[69]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items23 = [navigation, projectId];
  callback8 = obj12.useCallback(() => navigation.push(constants.DEBUG, { projectId }), items23);
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items24 = [install_scope1, projectId];
  callback9 = obj12.useCallback(() => {
    const obj2 = { key: VibegrationsRestorePointsSheet.VIBEGRATIONS_RESTORE_POINTS_SHEET_KEY, content: null };
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
    obj2.content = dependencyMap(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items24);
  const tmp76 = callback1(projectId(navigation[71])(previewAppId, num2));
  closure_40 = tmp76;
  const items25 = [previewAppId];
  callback10 = obj12.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items25);
  const items26 = [navigation, projectId];
  callback11 = obj12.useCallback(() => {
    collapsedCategories(projectId);
    navigation.goBack();
  }, items26);
  const obj9 = { items: memo1, pageWidth: projectId(navigation[61])().width - 2 * memo3, onSetActiveIndex: callback2 };
  const items27 = [tmp8];
  const items28 = [projectId];
  stateFromStores3 = guildId(navigation[25]).useStateFromStores(items27, () => VibegrationsProjectStore.isProjectDeleting(projectId), items28);
  const items29 = [stateFromStores3, callback11];
  const effect3 = obj12.useEffect(() => {
    if (stateFromStores3) {
      callback11();
    }
  }, items29);
  let obj10 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult12 = guildId(navigation[25]);
  let tmp82 = null;
  if (modes2.includes("widget")) {
    tmp82 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp82 = widgetApplicationId;
    }
  }
  obj10.refreshApplicationId = tmp82;
  const tmp4Result2Result = projectId(navigation[73])(obj10);
  preview = tmp4Result2Result;
  const items30 = [setting, guildId, callback11, callback5, callback8, callback4, callback3, callback9, callback7, callback10, tmp76, tmp4Result2Result, stateFromStores, tmp65];
  memo4 = obj12.useMemo(() => {
    const items = [];
    if (null != disabled) {
      let label = disabled.disabledReason;
      if (label == null) {
        label = disabled.label;
      }
      const obj = {
        label,
        IconComponent: UploadIcon.UploadIcon,
        action() {
            if (!disabled.disabled) {
              disabled.run("header");
            }
          }
      };
      items.push(obj);
    }
    const obj2 = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3715.cWmjzs);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback3;
    items.push(obj2);
    if (setting) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3715.KampIf);
      obj3.IconComponent = BugIcon.BugIcon;
      obj3.action = callback8;
      items.push(obj3);
    }
    if (null != stateFromStores) {
      const obj6 = { project: tmp14, guildId, onRemix: callback4, onConnectTool: callback5, onVersionHistory: callback7, onRestorePoints: callback9, onRefresh: null, onClose: null, preview: null };
      let tmp15;
      if (closure_40) {
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
  }, items30);
  const items31 = [vibegrationsControlActive, active, stringResult, tmp43, callback1, navigation, memo4, projectExists, projectName, stateFromStores1, tmp5];
  const effect4 = obj12.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
            return dependencyMap(NavigatorHeader.NavigatorHeader, { title });
          },
        headerRight() {
            let tmp = null;
            if (projectExists) {
              let obj = { style: headerActions.headerActions, children: null };
              if (!closure_1_18) {
                items = [null, ];
                const obj2 = {
                  items,
                  align: "below",
                  children(arg0) {
                        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                        const obj = { ref, IconComponent: title(7530).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                        const intl = title(1115).intl;
                        obj.accessibilityLabel = intl.string(title(1115).t["UKOtz+"]);
                        obj.accessibilityActions = accessibilityActions;
                        obj.onAccessibilityAction = onAccessibilityAction;
                        return closure_1_26(closure_1_1(16420), obj);
                      }
                };
                items[1] = activeIndex(guildId(navigation[79]).ContextMenu, obj2);
                obj.children = items;
                tmp = tmp2(tmp3, obj);
              } else {
                let obj3 = navigation;
                if (active) {
                  let VibegrationsSelectModeActiveIcon = guildId(obj3[78]).VibegrationsSelectModeActiveIcon;
                } else {
                  VibegrationsSelectModeActiveIcon = projectId(obj3[78]);
                }
                obj3 = { IconComponent: VibegrationsSelectModeActiveIcon, onPress, accessibilityLabel, accessibilityState: null, disabled: null };
                const obj4 = { selected: active };
                obj3.accessibilityState = obj4;
                obj3.disabled = disabled;
                activeIndex(projectId(navigation[31]), obj3);
                const tmp9 = projectId(navigation[31]);
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
          let Xmvb23 = projectId(tmp2[27]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[27]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items31);
  const items32 = [guildId, projectId];
  const effect5 = obj12.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[46]).setSelectedProjectForGuild(closure_1_0, null);
  }, items32);
  const items33 = [projectId];
  const effect6 = obj12.useEffect(() => () => projectId(navigation[80])(closure_1_1), items33);
  if (projectExists) {
    if (paneHidden) {
      if ("bot" === activeMode) {
        let contentBare = tmp5.contentBare;
      }
      const obj11 = { style: contentBare, children: null };
      let tmp96 = null;
      if (tmp40) {
        const obj13 = { style: tmp5.segments, children: null };
        const obj14 = { state: segmentedControlState, variant: "experimental_Small" };
        obj13.children = activeIndex(tmp(tmp2[81]).SegmentedControl, obj14);
        tmp96 = activeIndex(previewAppId, obj13);
      }
      const items34 = [tmp96, ];
      const obj15 = { style: tmp5.panes, children: null };
      let tmp101Result = null;
      if (hasItem) {
        tmp101Result = null;
        if (null != previewAppId) {
          const obj16 = { style: tmp43 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str5 = "none";
          if (tmp43) {
            str5 = "auto";
          }
          obj16.pointerEvents = str5;
          obj16.accessibilityElementsHidden = !tmp43;
          let str6 = "no-hide-descendants";
          if (tmp43) {
            str6 = "auto";
          }
          obj16.importantForAccessibility = str6;
          const obj17 = { applicationId: previewAppId, projectId, visible: tmp43, onOpenPublishedApp: memo };
          obj16.children = activeIndex(tmp(tmp2[63]).PreviewFrame, obj17);
          tmp101Result = tmp101(tmp99, obj16);
        }
      }
      const items35 = [tmp101Result, , ];
      let tmp103Result = null;
      if (paneHidden) {
        tmp103Result = null;
        if (null != previewAppId) {
          tmp103Result = null;
          if (!tmp43) {
            const obj18 = { style: tmp5.pane, children: null };
            const obj19 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, widgetApplicationId, frameHostAvailable: tmp25, permissionsGate: null };
            let tmp105 = null;
            if (result) {
              const obj20 = { onReviewPermissions: callback, loading: isLoading };
              tmp105 = obj20;
            }
            obj19.permissionsGate = tmp105;
            obj18.children = activeIndex(tmp4(tmp2[63]), obj19);
            tmp103Result = tmp103(tmp99, obj18);
            const tmp4Result6 = tmp4(tmp2[63]);
          }
        }
      }
      items35[1] = tmp103Result;
      const items36 = [tmp5.pane, ];
      if (paneHidden) {
        paneHidden = tmp5.paneHidden;
      }
      const obj21 = { style: null, children: null };
      items36[1] = paneHidden;
      obj21.style = items36;
      const obj22 = { value: memo2, children: null };
      const obj23 = { projectId, onRestoreVersion: callback6 };
      obj22.children = activeIndex(tmp4(tmp2[82]), obj23);
      obj21.children = activeIndex(tmp(tmp2[64]).VibegrationsPublishActionContext.Provider, obj22);
      items35[2] = activeIndex(previewAppId, obj21);
      obj15.children = items35;
      items34[1] = tmp94(previewAppId, obj15);
      obj11.children = items34;
      let tmp88Result1 = tmp94(tmp95, obj11);
    }
    contentBare = [tmp5.contentBare, animatedStyle];
  } else {
    const obj24 = { style: null, children: null };
    const items37 = [, ];
    ({ content: arr36[0], centered: arr36[1] } = tmp5);
    obj24.style = items37;
    if (stateFromStores1) {
      let tmp88Result = tmp88(stateFromStores, {});
    } else {
      const obj25 = { style: tmp5.listError, children: null };
      const obj26 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[26]).intl;
      obj26.children = intl2.string(tmp4(tmp2[27]).F2dRba);
      const items38 = [tmp88(tmp(tmp2[44]).Text, obj26), , ];
      const obj27 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl3 = tmp(tmp2[26]).intl;
      obj27.children = intl3.string(tmp4(tmp2[27]).GnEJ3o);
      items38[1] = tmp88(tmp(tmp2[44]).Text, obj27);
      const obj28 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp(tmp2[26]).intl;
      obj28.text = intl4.string(tmp4(tmp2[27])["42EdIV"]);
      obj28.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items38[2] = tmp88(tmp(tmp2[45]).Button, obj28);
      obj25.children = items38;
      tmp88Result = setActiveIndex(tmp89, obj25);
    }
    obj24.children = tmp88Result;
    tmp88Result1 = tmp88(tmp89, obj24);
  }
  return tmp88Result1;
}
function RoutedProjectOpener(projectId) {
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  const openedProjectIdRef = projectId.openedProjectIdRef;
  const navigation = projectId(openedProjectIdRef[34]).useNavigation();
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
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Keyboard: closure_7, ScrollView: closure_8, View: closure_9 } = get_ActivityIndicator);
const vibegrationsDesignFeedbackStore = fn(16413);
({ enterVibegrationsDesignFeedback: closure_14, exitVibegrationsDesignFeedback: closure_15, useVibegrationsDesignFeedback: closure_16 } = vibegrationsDesignFeedbackStore);
const VibegrationsConnectionStore = fn(12812);
({ closeConnection: closure_18, restoreSourceHistoryEntry: closure_19 } = VibegrationsConnectionStore);
const Constants = fn(1074);
({ Permissions: closure_21, Routes: closure_22 } = Constants);
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const FramesConstants = fn(8665);
({ isLaunched: closure_24, MAIN_SURFACE: closure_25 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
let platform = {
  showPublishBlocked: VibegrationsPublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const obj = ActionSheetActionCreators;
    obj.showActionSheet({ content: dependencyMap(VibegrationsPublishNotesSheetDefault, { guildId, applicationId, projectName, publish, initialDraft }), key: VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY });
  },
  showError(content) {
    return ToastActionCreatorsDefault.open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content });
  },
  openProfile(userId) {
    showUserProfileActionSheetDefault({ userId });
  }
};
const createStyles = fn(4836);
let closure_30 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listContent: null, section: null, sectionHeading: null, changelog: null, changelogEntries: null, changelogItem: null, listError: null, headerActions: null, segments: null, panes: null, pane: null, paneHidden: null, paneBackstage: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.contentBare = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj4 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  const obj5 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj6 = { gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj7 = { gap: nativeDefault.space.PX_4 };
  obj.changelog = { gap: nativeDefault.space.PX_16 };
  const obj8 = { gap: nativeDefault.space.PX_16 };
  obj.changelogEntries = { gap: nativeDefault.space.PX_12 };
  const obj9 = { gap: nativeDefault.space.PX_12 };
  obj.changelogItem = { gap: nativeDefault.space.PX_4 };
  const obj10 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj11 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  const obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.segments = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4 };
  obj.panes = { flex: 1 };
  obj.pane = { flex: 1 };
  obj.paneHidden = { display: "none" };
  obj.paneBackstage = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0 };
  return obj;
});
const PX_16 = nativeDefault.space.PX_16;
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
let closure_35 = { code: "function VibegrationsStandaloneScreenTsx1(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  noop = undefined;
  const navigation = guildId(stateFromStores[34]).useNavigation();
  let obj = guildId(stateFromStores[34]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[25]).useStateFromStores(items, () => {
    const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
    return routedProjectId;
  }, items1);
  let obj2 = guildId(stateFromStores[25]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[25]).useStateFromStores(items2, () => GuildStore.getGuild(guildId), items3);
  let obj3 = guildId(stateFromStores[25]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[83]).useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const obj4 = guildId(stateFromStores[83]);
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[25]).useStateFromStoresArray(items4, () => {
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
  const obj5 = guildId(stateFromStores[25]);
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[25]).useStateFromStores(items6, () => {
      const guild = GuildStore.getGuild(guildId);
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
  const obj6 = guildId(stateFromStores[25]);
  obj8.headerLeft = guildId(stateFromStores[77]).getHeaderCloseButton(() => navigation.goBack());
  obj8.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[26]).intl;
    obj.title = intl.string(navigation(stateFromStores[27]).Xmvb23);
    return closure_1_26(guildId(stateFromStores[77]).NavigatorHeader, obj);
  };
  obj8.render = function render() {
    const obj = { children: null };
    const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
    const items = [dependencyMap(RoutedProjectOpener, obj2), dependencyMap(ProjectList, { guildId })];
    obj.children = items;
    return __initData5(__initData6, obj);
  };
  obj7[constants2.PROJECTS] = obj8;
  obj7[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [dependencyMap(RoutedProjectOpener, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), dependencyMap(ChatScene, { guildId, projectId })];
      obj.children = items;
      return __initData5(__initData6, obj);
    }
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[26]).intl;
      obj.title = intl.string(navigation(stateFromStores[27]).KampIf);
      return closure_1_26(guildId(stateFromStores[77]).NavigatorHeader, obj);
    },
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [dependencyMap(RoutedProjectOpener, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }), dependencyMap(VibegrationsDebugSceneDefault, { projectId })];
      obj.children = items;
      return __initData5(__initData6, obj);
    }
  };
  const obj10 = {
    screens: obj7,
    initialRouteStack: stateFromStores1(noop.useState(() => {
      const items = [{ name: constants.PROJECTS }];
      if (null != stateFromStores) {
        const obj2 = { name: tmp.CHAT, params: null };
        const obj3 = { projectId: tmp2 };
        obj2.params = obj3;
        items.push(obj2);
      }
      return items;
    }), 1)[0],
    headerBackTitle: null
  };
  let intl = guildId(stateFromStores[26]).intl;
  obj10.headerBackTitle = intl.string(navigation(stateFromStores[27]).Xmvb23);
  return closure_26(guildId(stateFromStores[85]).Navigator, obj10);
};