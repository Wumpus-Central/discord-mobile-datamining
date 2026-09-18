// === Module 16848: VibegrationsStandaloneScreen ===

// Module 16848 (VibegrationsStandaloneScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef3676 from "module_3676" /* 3676 */;
import _modDef4314 from "module_4314" /* 4314 */;
import DateUtils from "DateUtils" /* 4404 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4420 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4689 */;
import Text_Text from "Text/Text" /* 4718 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5067 */;
import TableRow from "TableRow" /* 5775 */;
import NavigatorHeader from "NavigatorHeader" /* 5794 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7359 */;
import SettingsIcon from "SettingsIcon" /* 7576 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7837 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 8142 */;
import UploadIcon from "UploadIcon" /* 9609 */;
import UndoIcon from "UndoIcon" /* 15315 */;
import WrenchIcon from "WrenchIcon" /* 15778 */;
import BugIcon from "BugIcon" /* 15970 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 16859 */;
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton" /* 16864 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16865 */;
import VibegrationsRemixSheet from "VibegrationsRemixSheet" /* 16872 */;
import vibegrationsProjectActions from "vibegrationsProjectActions" /* 16874 */;
import VibegrationsProjectSettingsSheet from "VibegrationsProjectSettingsSheet" /* 16879 */;
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet" /* 16908 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16910 */;
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet" /* 16911 */;
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet" /* 16912 */;
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet" /* 16913 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4950 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 16849 */;
import VibegrationsProjectStore_mod from "VibegrationsProjectStore" /* 16851 */;

const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsProjectSettingsSheetDefault = VibegrationsProjectSettingsSheet;
const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsConnectToolSheetDefault = VibegrationsConnectToolSheet;
const VibegrationsVersionHistorySheetDefault = VibegrationsVersionHistorySheet;
const VibegrationsRestorePointsSheetDefault = VibegrationsRestorePointsSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  ({ onPress, onMore } = project);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const tmp = closure_27(0);
  const data = ApplicationActionCreators.useApplication(application_id).data;
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = util.intl;
    const obj2 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj2.time = NotificationCenterUtils.getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3676.oMDaqr, obj2);
    const tmp2Result = NotificationCenterUtils;
  }
  const obj3 = { label: project.name, subLabel: formatToPlainStringResult, icon: null, trailing: null, onPress: null };
  const obj4 = { id: application_id, icon: null, size: 64 };
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  obj4.icon = icon;
  obj3.icon = closure_1_25(React5, { accessibilityIgnoresInvertColors: true, source: AvatarUtilsDefault.getApplicationIconSource(obj4), style: tmp.appIcon });
  const obj7 = { IconComponent: null, onPress: null, accessibilityLabel: null };
  const obj5 = { accessibilityIgnoresInvertColors: true, source: AvatarUtilsDefault.getApplicationIconSource(obj4), style: tmp.appIcon };
  obj7.IconComponent = MoreHorizontalIcon.MoreHorizontalIcon;
  obj7.onPress = onMore;
  const intl2 = util.intl;
  obj7.accessibilityLabel = intl2.string(util.t["UKOtz+"]);
  obj3.trailing = closure_1_25(VibegrationsHeaderIconButtonDefault, obj7);
  obj3.onPress = onPress;
  return closure_1_25(TableRow.TableRow, obj3);
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  let onCreated;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_27(0);
  importDefault = tmp3;
  navigation = guildId(navigation[25]).useNavigation();
  let obj = guildId(navigation[25]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[26]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj2 = guildId(navigation[26]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[26]).useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj3 = guildId(navigation[26]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[26]).useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = onCreated.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => guildId(navigation[27]).isVibegrationsProjectInGuild(item, closure_1_0));
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
  const memo1 = onCreated.useMemo(() => {
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
  onCreated = onCreated.useCallback((projectId) => navigation.push(constants.CHAT, { projectId }), items6);
  const items7 = [guildId, onCreated];
  const callback1 = onCreated.useCallback(() => {
    const obj2 = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: closure_2_25(VibegrationsCreateSheetDefault, { guildId, onCreated }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items7);
  const items8 = [guildId, onCreated];
  const memo2 = onCreated.useMemo(() => {
    closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f119521(arg0);
      } else {
        guildId(navigation[15]).transitionTo(callback2.CHANNEL(arg1, projectGuildId.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[15]);
      }
    };
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = onCreated.useCallback((project) => {
    const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: closure_2_25(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, onCreated, callback2];
  closure_9 = onCreated.useCallback((project) => {
    guildId = project;
    const result = guildId(navigation[31]).vibegrationsProjectActions({
      project,
      guildId,
      openChat() {
        return callback(project.id);
      },
      onRemix() {
        return callback2(closure_0);
      },
      onOpenSettings() {
        const obj2 = { key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY, content: null };
        const obj3 = { projectId: project.id, guildId: null };
        let guild_id = project.guild_id;
        const obj = ActionSheetActionCreators;
        if (guild_id == null) {
          guild_id = guildId;
        }
        obj3.guildId = guild_id;
        obj2.content = closure_3_25(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      }
    });
    let obj = guildId(navigation[31]);
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
        const obj2 = { key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY, content: null };
        const obj3 = { projectId: project.id, guildId: null };
        let guild_id = project.guild_id;
        const obj = ActionSheetActionCreators;
        if (guild_id == null) {
          guild_id = guildId;
        }
        obj3.guildId = guild_id;
        obj2.content = closure_3_25(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      }
    };
    let obj3 = guildId(navigation[33]);
    const result1 = obj3.showSimpleActionSheet({ key: "VibegrationsProjectActions", header: { title: project.name }, hasIcons: true, options: result.map((label) => ({ label: label.label, IconComponent: label.IconComponent, isDestructive: label.destructive, onPress: label.action })) });
  }, items10);
  const items11 = [navigation, callback1];
  const effect = onCreated.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[34]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[17]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[17]).t.CumH4u);
        return closure_2_25(closure_1(navigation[22]), obj);
      }
    });
  }, items11);
  const obj4 = guildId(navigation[26]);
  let result = guildId(navigation[35]).recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = onCreated.useCallback(() => {
    const obj = guildId(navigation[28]);
    obj.showActionSheet({ content: closure_1_25(closure_1(navigation[36]), {}), key: guildId(navigation[36]).VIBEGRATIONS_CHANGELOG_SHEET_KEY });
  }, []);
  if (!tmp15) {
    tmp15 = memo1.length > 0;
  }
  if (tmp15) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items12 = [tmp3.listContent, ];
    const obj8 = { paddingBottom: tmp(tmp2[14]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_25(tmp(tmp2[40]), {}), , , , ];
    let tmp24Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[17]).intl;
      obj12.children = intl3.string(tmp(tmp2[18]).x07mpp);
      const items14 = [closure_25(tmp4(tmp2[37]).Text, obj12), ];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[17]).intl;
      obj13.children = intl4.string(tmp(tmp2[18]).h5CwHI);
      items14[1] = closure_25(tmp4(tmp2[37]).Text, obj13);
      obj11.children = items14;
      const items15 = [closure_26(closure_10, obj11), , ];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
              const obj = { style: closure_1.changelogItem, children: null };
              const items = [DateUtils.dateFormat(_modDef4314(children.date, "YYYY-MM-DD"), "LL"), ];
              let combined = null;
              if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
                const intl = util.intl;
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 " + intl.string(_modDef3676["CLX+p/"]);
              }
              items[1] = combined;
              const items1 = [dependencyMap(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }), closure_2_25(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary })];
              obj.children = items1;
              return dependencyMap(closure_2_10, obj, "" + children.date + "-" + children.summary);
            })
      };
      items15[1] = closure_25(closure_10, obj14);
      let tmp22Result = null;
      if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
        const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp4(tmp2[17]).intl;
        obj15.text = intl5.string(tmp(tmp2[18]).YWxThz);
        obj15.onPress = callback3;
        tmp22Result = closure_25(tmp4(tmp2[38]).Button, obj15);
      }
      items15[2] = tmp22Result;
      obj10.children = items15;
      tmp24Result = closure_26(closure_10, obj10);
      tmp4Result = tmp4(tmp2[35]);
    }
    items13[1] = tmp24Result;
    let tmp24Result3 = null;
    if (memo.length > 0) {
      const obj16 = { style: tmp3.section, children: null };
      const obj17 = { style: tmp3.sectionHeading, children: null };
      const obj18 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl6 = tmp4(tmp2[17]).intl;
      obj18.children = intl6.string(tmp(tmp2[18]).Bo5fE3);
      const items16 = [closure_25(tmp4(tmp2[37]).Text, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl7 = tmp4(tmp2[17]).intl;
      obj19.children = intl7.string(tmp(tmp2[18]).YnAFtT);
      items16[1] = closure_25(tmp4(tmp2[37]).Text, obj19);
      obj17.children = items16;
      const items17 = [closure_26(closure_10, obj17), ];
      const obj20 = {
        hasIcons: true,
        children: memo.map((project) => closure_1_25(ProjectRow, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
      };
      items17[1] = closure_25(tmp4(tmp2[43]).TableRowGroup, obj20);
      obj16.children = items17;
      tmp24Result3 = closure_26(closure_10, obj16);
    }
    items13[2] = tmp24Result3;
    let tmp24Result4 = null;
    if (memo1.length > 0) {
      const obj21 = { style: tmp3.section, children: null };
      const obj22 = { style: tmp3.sectionHeading, children: null };
      const obj23 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl8 = tmp4(tmp2[17]).intl;
      obj23.children = intl8.string(tmp(tmp2[18]).jrCnUc);
      const items18 = [closure_25(tmp4(tmp2[37]).Text, obj23), ];
      const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl9 = tmp4(tmp2[17]).intl;
      obj24.children = intl9.string(tmp(tmp2[18])["1KEhDu"]);
      items18[1] = closure_25(tmp4(tmp2[37]).Text, obj24);
      obj22.children = items18;
      const items19 = [closure_26(closure_10, obj22), ];
      const obj25 = {
        hasIcons: true,
        children: memo1.map((project) => closure_1_25(ProjectRow, {
              project,
              onPress() {
                return callback(project.id);
              },
              onMore() {
                return closure_9(closure_0);
              }
            }, project.id))
      };
      items19[1] = closure_25(tmp4(tmp2[43]).TableRowGroup, obj25);
      obj21.children = items19;
      tmp24Result4 = closure_26(closure_10, obj21);
    }
    items13[3] = tmp24Result4;
    items13[4] = null;
    obj7.children = items13;
    obj6.children = closure_26(closure_9, obj7);
    return closure_25(closure_10, obj6);
  } else {
    const obj26 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj27 = { style: tmp3.listError, children: null };
          const obj28 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[17]).intl;
          obj28.children = intl.string(tmp(tmp2[18])["IN/HRP"]);
          const items20 = [closure_25(tmp4(tmp2[37]).Text, obj28), ];
          const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[17]).intl;
          obj29.text = intl2.string(tmp(tmp2[18])["42EdIV"]);
          obj29.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_25(tmp4(tmp2[38]).Button, obj29);
          obj27.children = items20;
          let tmp16Result2 = closure_26(closure_10, obj27);
        } else {
          const obj30 = { style: tmp3.listError, children: null };
          const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl10 = tmp4(tmp2[17]).intl;
          obj31.children = intl10.string(tmp(tmp2[18])["vqy+in"]);
          const items21 = [closure_25(tmp4(tmp2[37]).Text, obj31), ];
          const obj32 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl11 = tmp4(tmp2[17]).intl;
          obj32.text = intl11.string(tmp4(tmp2[17]).t.CumH4u);
          obj32.onPress = callback1;
          items21[1] = closure_25(tmp4(tmp2[38]).Button, obj32);
          obj30.children = items21;
          tmp16Result2 = closure_26(closure_10, obj30);
        }
      }
      obj26.children = tmp16Result2;
      closure_25(closure_10, obj26);
    }
    tmp16Result2 = closure_25(callback1, {});
  }
  const obj5 = guildId(navigation[35]);
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let data;
  let availability;
  setMode = undefined;
  c14 = undefined;
  let result1;
  let onReviewPermissions;
  c17 = undefined;
  let num2;
  let activeIndex;
  let setActiveIndex;
  first1 = undefined;
  closure_22 = undefined;
  let callback2;
  projectGuildId = undefined;
  let callback3;
  let stateFromStores3;
  let callback4;
  let memo1;
  let callback5;
  let callback6;
  let callback7;
  let callback8;
  let setting;
  let callback9;
  let callback10;
  let memo2;
  navigation = guildId(navigation[25]).useNavigation();
  let tmp5 = callback4(projectId(navigation[44])({ includeKeyboardHeight: true }).insets.bottom);
  _slicedToArray = tmp5;
  let obj = guildId(navigation[25]);
  let items = [first1];
  const items1 = [projectId];
  const stateFromStores = guildId(navigation[26]).useStateFromStores(items, () => {
    let project = VibegrationsProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let obj2 = guildId(navigation[26]);
  const items2 = [first1];
  const items3 = [projectId];
  const stateFromStoresObject = guildId(navigation[26]).useStateFromStoresObject(items2, () => {
    const project = VibegrationsProjectStore.getProject(projectId);
    const obj = { projectExists: null != project, projectName: null, projectGuildId: null, previewAppId: null, isOwner: null, canPublish: null };
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
    let tmp5 = null != project;
    if (tmp5) {
      tmp5 = closure_2_20(project);
    }
    obj.isOwner = tmp5;
    let tmp7 = null != project;
    if (tmp7) {
      tmp7 = closure_2_19(project);
    }
    obj.canPublish = tmp7;
    return obj;
  }, items3);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const isOwner = stateFromStoresObject.isOwner;
  const canPublish = stateFromStoresObject.canPublish;
  let obj3 = guildId(navigation[26]);
  const items4 = [first1];
  const items5 = [guildId];
  const stateFromStores1 = guildId(navigation[26]).useStateFromStores(items4, () => {
    const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
    let tmp2 = "unattempted" === guildProjectsFetchState;
    if (!tmp2) {
      tmp2 = "loading" === guildProjectsFetchState;
    }
    return tmp2;
  }, items5);
  let obj4 = guildId(navigation[26]);
  const items6 = [first1];
  const items7 = [projectId];
  const stateFromStores2 = guildId(navigation[26]).useStateFromStores(items6, () => {
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
  let obj5 = guildId(navigation[26]);
  let application = guildId(navigation[16]).useApplication(previewAppId);
  data = application.data;
  const tmpResult = guildId(navigation[16]);
  let obj6 = { applicationId: previewAppId, previewApplicationId: previewAppId, declaredActivity: null, installScope: null, ownerAuthorizationRevoked: null, mainCardOnly: true };
  let has_activity;
  if (stateFromStores2 != null) {
    has_activity = stateFromStores2.has_activity;
  }
  obj6.declaredActivity = true === has_activity;
  obj6.installScope = install_scope;
  let prop;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  obj6.ownerAuthorizationRevoked = true === prop;
  const vibegrationsPreviewMode = guildId(navigation[45]).useVibegrationsPreviewMode(obj6);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const tmpResult6 = guildId(navigation[45]);
  let obj7 = { installScope: install_scope, previewReady: true === preview_ready, integrationInstalled: null, botPermissionsChanged: null };
  let prop1;
  if (stateFromStores2 != null) {
    prop1 = stateFromStores2.integration_installed;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  obj7.integrationInstalled = prop1;
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  obj7.botPermissionsChanged = true === prop2;
  let result = guildId(navigation[46]).requiresPermissionReview(obj7);
  c14 = result;
  const items8 = [projectId];
  const effect = projectExists.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items8);
  const tmp22 = null != previewAppId && null != projectId(navigation[47])(previewAppId);
  const tmpResult7 = guildId(navigation[46]);
  result1 = guildId(navigation[48]).vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items9 = [result1, previewAppId, data, stateFromStores, projectId];
  onReviewPermissions = obj11.useCallback(stateFromStores(function*() {
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
                application = application(tmp2[16]).fetchApplication(previewAppId);
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
        const obj7 = { applicationId: closure_131_7, application: null, guildId: null, onClose: null };
        let application3 = closure_131_11;
        if (closure_131_11 == null) {
          application3 = application2.getApplication(closure_131_7);
        }
        application = application3;
        if (application3 == null) {
          application = null;
        }
        obj7.application = application;
        obj7.guildId = closure_131_15;
        obj7.onClose = function onClose() {
          const result = c0(16889).repairVibegrationsGuildHints(closure_1_4, closure_1_15);
          const obj = c0(16889);
          result.finally(() => application(16859).getProject(closure_1_1)).catch(() => {

          });
        };
        let result = application3(tmp2[49]).openVibegrationsAppInstallModal(obj7);
        const obj2 = application3(tmp2[49]);
      } catch (tmp27) {
        c5 = tmp;
        throw tmp27;
      }
    }
  }), items9);
  const tmpResult8 = guildId(navigation[48]);
  [tmp27, tmp28] = projectExists.useState(true);
  c17 = tmp28;
  let tmp29 = null;
  if (null != stateFromStores2) {
    tmp29 = tmp16;
  }
  const tmp26 = _slicedToArray(projectExists.useState(true), 2);
  [tmp31, tmp32] = projectExists.useState(tmp29);
  const tmp25Result3 = _slicedToArray(projectExists.useState(projectId), 2);
  if (tmp25Result3[0] !== projectId) {
    tmp25Result3[1](projectId);
    tmp28(true);
    tmp32(null);
  }
  let tmp37 = tmp16;
  if (true === preview_ready) {
    tmp37 = null != previewAppId;
  }
  if (tmp37) {
    tmp37 = !isResolving;
  }
  if (tmp37) {
    tmp37 = availability.modes.length > 0 || result;
    let tmp38 = availability.modes.length > 0 || result;
  }
  let paneHidden = tmp37;
  if (tmp37) {
    paneHidden = !tmp27;
  }
  let hasItem = tmp37;
  if (tmp37) {
    hasItem = tmp22;
  }
  if (hasItem) {
    hasItem = !result;
  }
  if (hasItem) {
    let modes = availability.modes;
    hasItem = modes.includes("frame");
  }
  let tmp40 = hasItem;
  if (hasItem) {
    tmp40 = paneHidden;
  }
  if (tmp40) {
    tmp40 = "frame" === activeMode;
  }
  const items10 = [availability.modes];
  const items11 = [availability.modes, setMode];
  const memo = obj11.useMemo(() => {
    let obj = { id: "chat", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3676.kWtsyP);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: guildId(navigation[50]).getPreviewModeLabel(id), page: null };
        return obj;
      })
    ];
    modes = availability.modes;
    return items;
  }, items10);
  const first = availability.modes[0];
  let tmp44 = null != stateFromStores2;
  const callback1 = obj11.useCallback((arg0) => {
    React6.dismiss();
    _undefined(null == availability.modes[arg0 - 1]);
    if (null != availability.modes[arg0 - 1]) {
      setMode(tmp2);
    }
  }, items11);
  if (tmp44) {
    tmp44 = tmp16 !== tmp31;
  }
  if (tmp44) {
    if (tmp45) {
      setMode(first);
      tmp28(false);
    }
    tmp32(tmp16);
    tmp45 = false === tmp31 && tmp16 && null != first && !result;
  }
  const tmp25Result = _slicedToArray(projectExists.useState(tmp29), 2);
  const tmpResult9 = guildId(navigation[52]);
  const segmentedControlState = tmpResult9.useSegmentedControlState({ items: memo, pageWidth: projectId(navigation[51])().width - 2 * memo1, onSetActiveIndex: callback1 });
  num2 = 0;
  if (!tmp27) {
    num2 = 0;
    if (null != activeMode) {
      const modes1 = availability.modes;
      num2 = 1 + modes1.indexOf(activeMode);
    }
  }
  activeIndex = segmentedControlState.activeIndex;
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items12 = [num2, activeIndex, setActiveIndex];
  const effect1 = obj11.useEffect(() => {
    if (activeIndex.get() !== num2) {
      setActiveIndex(tmp, false);
    }
  }, items12);
  const items13 = [previewAppId];
  const effect2 = obj11.useEffect(() => null != previewAppId ? (() => guildId(navigation[53]).leaveVibegrationsPreviewFrame(previewAppId)) : undefined, items13);
  [first1, closure_22] = projectExists.useState(false);
  const items14 = [guildId, onReviewPermissions, result, projectId, first1];
  callback2 = obj11.useCallback(() => {
    if (!first1) {
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true === preview_ready) {
          if (c14) {
            callback().catch(() => {

            });
            const promise9 = callback();
          } else {
            closure_22(true);
            if ("user" !== project.install_scope) {
              const promise5 = __initData(projectId);
              promise5.catch(() => {

              });
              const nextPromise = value2(projectId).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = guildId(navigation[17]).intl;
                  const error = new Error(intl.string(projectId(navigation[18]).fNP6Cd));
                  throw error;
                } else {
                  const result = guildId(navigation[39]).refreshPublishedProject(closure_1_1, { isPreview: false });
                  result.catch(() => {

                  });
                  const obj = guildId(navigation[39]);
                }
              });
              const promise6 = value2(projectId);
              nextPromise.catch(() => {

              }).finally(() => closure_1_22(false));
              const catchPromise2 = nextPromise.catch(() => {

              });
              let guild_id = project.guild_id;
              let obj2 = ActionSheetActionCreators;
              if (guild_id == null) {
                guild_id = guildId;
              }
              const obj3 = { content: null, key: null };
              const obj6 = { guildId: guild_id, applicationId: null, projectName: null, publish: null, initialDraft: null };
              ({ application_id: obj4.applicationId, name: obj4.projectName } = project);
              obj6.publish = nextPromise;
              obj6.initialDraft = promise5;
              obj3.content = closure_2_25(VibegrationsPublishNotesSheetDefault, obj6);
              obj3.key = VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
              obj2.showActionSheet(obj3);
            } else {
              const nextPromise1 = value2(projectId).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = guildId(navigation[17]).intl;
                  const error = new Error(intl.string(projectId(navigation[18]).fNP6Cd));
                  throw error;
                } else {
                  const result = guildId(navigation[39]).refreshPublishedProject(closure_1_1, { isPreview: false });
                  result.catch(() => {

                  });
                  const obj = guildId(navigation[39]);
                }
              });
              const promise = value2(projectId);
              nextPromise1.catch(() => {

              }).finally(() => closure_1_22(false));
              const catchPromise3 = nextPromise1.catch(() => {

              });
              nextPromise1.then(() => {
                const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                const intl = guildId(1115).intl;
                obj2.content = intl.string(projectId(3676).wA0o0L);
                projectId(4420).open(obj2);
              }).catch((error) => {
                if (error instanceof Error) {
                  let message = error.message;
                } else {
                  const intl = guildId(1115).intl;
                  message = intl.string(projectId(3676).fNP6Cd);
                }
                projectId(4420).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
                const obj = projectId(4420);
              });
              const nextPromise2 = nextPromise1.then(() => {
                const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                const intl = guildId(1115).intl;
                obj2.content = intl.string(projectId(3676).wA0o0L);
                projectId(4420).open(obj2);
              });
            }
          }
        } else {
          const obj9 = { title: null, body: null };
          let intl = util.intl;
          obj9.title = intl.string(_modDef3676["+UouPe"]);
          const intl2 = util.intl;
          obj9.body = intl2.string(_modDef3676["E0QD++"]);
          actions_AlertActionCreatorsDefault.show(obj9);
        }
      }
    }
  }, items14);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items15 = [projectId, projectGuildId];
  callback3 = obj11.useCallback(() => {
    const obj2 = { content: closure_2_25(VibegrationsProjectSettingsSheetDefault, { projectId, guildId: projectGuildId }), key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items15);
  const obj8 = { items: memo, pageWidth: projectId(navigation[51])().width - 2 * memo1, onSetActiveIndex: callback1 };
  const items16 = [num2];
  const items17 = [projectId];
  stateFromStores3 = guildId(navigation[26]).useStateFromStores(items16, () => null != VibegrationsConnectionStore.getSettings(projectId), items17);
  const items18 = [projectId];
  callback4 = obj11.useCallback(() => {
    const obj2 = { content: closure_2_25(VibegrationsSettingsSheetDefault, { projectId, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items18);
  const items19 = [guildId, navigation];
  memo1 = obj11.useMemo(() => {
    closure_0 = guildId;
    const f119521 = (projectId) => navigation.push(callback5.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f119521(arg0);
      } else {
        guildId(navigation[15]).transitionTo(callback2.CHANNEL(arg1, projectGuildId.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[15]);
      }
    };
  }, items19);
  const items20 = [guildId, memo1, stateFromStores];
  callback5 = obj11.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo1 };
      obj2.content = closure_2_25(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items20);
  const items21 = [projectId];
  callback6 = obj11.useCallback(() => {
    const obj2 = { key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY, content: closure_2_25(VibegrationsConnectToolSheetDefault, { projectId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items21);
  projectExists.useRef(false);
  const items22 = [projectId];
  callback7 = obj11.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3676.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = closure_2_17(projectId, sha.sha);
      closure_2_17(projectId, sha.sha).then(() => {
        const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1115).intl;
        obj2.content = intl.string(projectId(3676).u8g2Od);
        obj2.IconComponent = guildId(15315).UndoIcon;
        projectId(4420).open(obj2);
      }, () => {
        const intl = guildId(1115).intl;
        guildId(4419).presentError(intl.string(projectId(3676).q6iZ84));
      }).finally(() => {
        ref.current = false;
      });
      const nextPromise = closure_2_17(projectId, sha.sha).then(() => {
        const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
        const intl = guildId(1115).intl;
        obj2.content = intl.string(projectId(3676).u8g2Od);
        obj2.IconComponent = guildId(15315).UndoIcon;
        projectId(4420).open(obj2);
      }, () => {
        const intl = guildId(1115).intl;
        guildId(4419).presentError(intl.string(projectId(3676).q6iZ84));
      });
    }
  }, items22);
  const items23 = [callback7, projectId];
  callback8 = obj11.useCallback(() => {
    const obj2 = { key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY, content: closure_2_25(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback7 }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items23);
  const DeveloperMode = tmp(tmp2[62]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback9 = obj11.useCallback(() => navigation.push(constants.DEBUG, { projectId }), items24);
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items25 = [install_scope1, projectId];
  callback10 = obj11.useCallback(() => {
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
    obj2.content = closure_2_25(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items25);
  const items26 = [canPublish, setting, guildId, callback4, callback6, callback9, callback3, callback5, callback10, callback8, callback2, stateFromStores3, isOwner, stateFromStores];
  memo2 = obj11.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3676["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback2;
      items.push(obj);
    }
    if (stateFromStores3) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3676.gTMvzD);
      obj2.IconComponent = WrenchIcon.WrenchIcon;
      obj2.action = callback4;
      items.push(obj2);
    }
    if (isOwner) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(_modDef3676["xhcY+n"]);
      obj3.IconComponent = SettingsIcon.SettingsIcon;
      obj3.action = callback3;
      items.push(obj3);
    }
    if (setting) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3676.KampIf);
      obj4.IconComponent = BugIcon.BugIcon;
      obj4.action = callback9;
      items.push(obj4);
    }
    if (null != stateFromStores) {
      const obj7 = { project: tmp33, guildId, onRemix: callback5, onConnectTool: callback6, onVersionHistory: callback8, onRestorePoints: callback10 };
      const result = vibegrationsProjectActions.vibegrationsProjectActions(obj7);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj12 = { label: null, IconComponent: null, variant: null, action: null };
        ({ label: obj5.label, IconComponent: obj5.IconComponent } = nextResult);
        let str;
        let tmp37 = nextResult;
        if (true === nextResult.destructive) {
          str = "destructive";
        }
        obj12.variant = str;
        obj12.action = tmp37.action;
        let arr9 = items.push(obj12);
        continue;
      }
    }
    return items;
  }, items26);
  const items27 = [navigation, memo2, projectExists, projectName, stateFromStores1, tmp5];
  const effect3 = obj11.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
            return closure_3_25(NavigatorHeader.NavigatorHeader, { title });
          },
        headerRight() {
            let tmp = null;
            if (projectExists) {
              let obj = { style: headerActions.headerActions, children: null };
              const obj2 = {
                items,
                align: "below",
                children(arg0) {
                    ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                    const obj = { ref, IconComponent: title(8142).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
                    const intl = title(1115).intl;
                    obj.accessibilityLabel = intl.string(title(1115).t["UKOtz+"]);
                    obj.accessibilityActions = accessibilityActions;
                    obj.onAccessibilityAction = onAccessibilityAction;
                    return closure_1_25(closure_1_1(16864), obj);
                  }
              };
              obj.children = callback3(guildId(navigation[69]).ContextMenu, obj2);
              tmp = callback3(stateFromStores1, obj);
            }
            return tmp;
          }
      };
      navigation.setOptions(obj);
    } else {
      let tmp2 = navigation;
      if (!projectExists) {
        if (!stateFromStores1) {
          let Xmvb23 = projectId(tmp2[18]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[18]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items27);
  const items28 = [guildId, projectId];
  const effect4 = obj11.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[39]).setSelectedProjectForGuild(closure_1_0, null);
  }, items28);
  const items29 = [projectId];
  const effect5 = obj11.useEffect(() => () => projectId(navigation[70])(closure_1_1), items29);
  if (projectExists) {
    if (paneHidden) {
      if ("bot" === activeMode) {
        let content = tmp5.contentBare;
      }
      let obj9 = { style: content, children: null };
      let tmp79 = null;
      if (tmp37) {
        const obj10 = { style: tmp5.segments, children: null };
        let obj12 = { state: segmentedControlState, variant: "experimental_Small" };
        obj10.children = callback3(tmp(tmp2[71]).SegmentedControl, obj12);
        tmp79 = callback3(tmp78, obj10);
      }
      const items30 = [tmp79, ];
      const obj13 = { style: tmp5.panes, children: null };
      let tmp82Result = null;
      if (hasItem) {
        tmp82Result = null;
        if (null != previewAppId) {
          const obj14 = { style: tmp40 ? tmp5.pane : tmp5.paneBackstage, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
          let str4 = "none";
          if (tmp40) {
            str4 = "auto";
          }
          obj14.pointerEvents = str4;
          obj14.accessibilityElementsHidden = !tmp40;
          let str5 = "no-hide-descendants";
          if (tmp40) {
            str5 = "auto";
          }
          obj14.importantForAccessibility = str5;
          const obj15 = { applicationId: previewAppId, projectId, visible: tmp40 };
          obj14.children = callback3(tmp(tmp2[53]).PreviewFrame, obj15);
          tmp82Result = tmp82(tmp78, obj14);
        }
      }
      const items31 = [tmp82Result, , ];
      let tmp84Result = null;
      if (paneHidden) {
        tmp84Result = null;
        if (null != previewAppId) {
          tmp84Result = null;
          if (!tmp40) {
            const obj16 = { style: tmp5.pane, children: null };
            const obj17 = { projectId, previewApplicationId: previewAppId, mode: activeMode, availability, widgetApplicationId, frameHostAvailable: tmp22, permissionsGate: null };
            let tmp86 = null;
            if (result) {
              const obj18 = { onReviewPermissions, loading: application.isLoading };
              tmp86 = obj18;
            }
            obj17.permissionsGate = tmp86;
            obj16.children = callback3(tmp4(tmp2[53]), obj17);
            tmp84Result = tmp84(tmp78, obj16);
            const tmp4Result = tmp4(tmp2[53]);
          }
        }
      }
      items31[1] = tmp84Result;
      const items32 = [tmp5.pane, ];
      if (paneHidden) {
        paneHidden = tmp5.paneHidden;
      }
      const obj19 = { style: null, children: null };
      items32[1] = paneHidden;
      obj19.style = items32;
      const obj20 = { projectId };
      obj19.children = callback3(tmp4(tmp2[72]), obj20);
      items31[2] = callback3(tmp78, obj19);
      obj13.children = items31;
      items30[1] = tmp77(tmp78, obj13);
      obj9.children = items30;
      let tmp71Result1 = tmp77(tmp78, obj9);
    }
    content = tmp5.content;
  } else {
    const obj21 = { style: null, children: null };
    const items33 = [, ];
    ({ content: arr32[0], centered: arr32[1] } = tmp5);
    obj21.style = items33;
    if (stateFromStores1) {
      let tmp71Result = tmp71(projectName, {});
    } else {
      const obj22 = { style: tmp5.listError, children: null };
      const obj23 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl = tmp(tmp2[17]).intl;
      obj23.children = intl.string(tmp4(tmp2[18]).F2dRba);
      const items34 = [tmp71(tmp(tmp2[37]).Text, obj23), , ];
      const obj24 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl2 = tmp(tmp2[17]).intl;
      obj24.children = intl2.string(tmp4(tmp2[18]).GnEJ3o);
      items34[1] = tmp71(tmp(tmp2[37]).Text, obj24);
      const obj25 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl3 = tmp(tmp2[17]).intl;
      obj25.text = intl3.string(tmp4(tmp2[18])["42EdIV"]);
      obj25.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items34[2] = tmp71(tmp(tmp2[38]).Button, obj25);
      obj22.children = items34;
      tmp71Result = stateFromStores3(tmp72, obj22);
    }
    obj21.children = tmp71Result;
    tmp71Result1 = tmp71(tmp72, obj21);
  }
  return tmp71Result1;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Image: closure_7, Keyboard: closure_8, ScrollView: closure_9, View: c10 } = get_ActivityIndicator);
let VibegrationsConnectionStore = fn(16849);
({ draftPatchNotes: closure_15, publishProject: closure_16, restoreSourceHistoryEntry: closure_17 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let VibegrationsProjectStore = fn(16851);
({ canPublishProject: closure_19, isProjectOwner: closure_20 } = VibegrationsProjectStore);
let VibegrationsProjectStore = VibegrationsProjectStore_mod;
const Constants = fn(1074);
({ Permissions: closure_22, Routes: closure_23 } = Constants);
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_25, jsxs: closure_26 } = jsxProd);
const createStyles = fn(4722);
let closure_27 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, contentBare: null, centered: null, listContent: null, section: null, sectionHeading: null, changelog: null, changelogEntries: null, changelogItem: null, appIcon: null, listError: null, headerActions: null, segments: null, panes: null, pane: null, paneHidden: null, paneBackstage: null };
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
  const size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.sm };
  obj.appIcon = size;
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
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const navigation = guildId(stateFromStores[25]).useNavigation();
  let obj = guildId(stateFromStores[25]);
  const items = [GuildStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[26]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const obj2 = guildId(stateFromStores[26]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[73]).useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const obj3 = guildId(stateFromStores[73]);
  const items2 = [GuildMemberStore];
  const items3 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[26]).useStateFromStoresArray(items2, () => {
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    return roles;
  }, items3);
  const obj4 = guildId(stateFromStores[26]);
  const items4 = [GuildStore, PermissionStore];
  const items5 = [guildId];
  const items6 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[26]).useStateFromStores(items4, () => {
      const guild = GuildStore.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
      }
      return canResult;
    }, items5)
  ];
  const effect = noop.useEffect(() => {
    if (isVibegrationsGuildEnabled) {
      VibegrationsActionCreators.listProjects(guildId);
    }
  }, items6);
  const items7 = [stateFromStores, isVibegrationsGuildEnabled, navigation];
  const effect1 = noop.useEffect(() => {
    if (!tmp) {
      navigation.goBack();
    }
    tmp = null == stateFromStores || isVibegrationsGuildEnabled;
  }, items7);
  const obj6 = {};
  const obj7 = { headerLeft: null, headerTitle: null, render: null };
  const obj5 = guildId(stateFromStores[26]);
  obj7.headerLeft = guildId(stateFromStores[68]).getHeaderCloseButton(() => navigation.goBack());
  obj7.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[17]).intl;
    obj.title = intl.string(navigation(stateFromStores[18]).Xmvb23);
    return closure_1_25(guildId(stateFromStores[68]).NavigatorHeader, obj);
  };
  obj7.render = function render() {
    return closure_2_25(ProjectList, { guildId });
  };
  obj6[constants2.PROJECTS] = obj7;
  obj6[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      return closure_2_25(ChatScene, { guildId, projectId: projectId.projectId });
    }
  };
  obj6[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[17]).intl;
      obj.title = intl.string(navigation(stateFromStores[18]).KampIf);
      return closure_1_25(guildId(stateFromStores[68]).NavigatorHeader, obj);
    },
    render(projectId) {
      return closure_1_25(navigation(stateFromStores[74]), { projectId: projectId.projectId });
    }
  };
  const obj9 = { screens: obj6, initialRouteName: constants2.PROJECTS, headerBackTitle: null };
  let intl = guildId(stateFromStores[17]).intl;
  obj9.headerBackTitle = intl.string(navigation(stateFromStores[18]).Xmvb23);
  return closure_25(guildId(stateFromStores[75]).Navigator, obj9);
};