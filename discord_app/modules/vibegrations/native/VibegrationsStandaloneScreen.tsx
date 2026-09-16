// discord_app/modules/vibegrations/native/VibegrationsStandaloneScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _modDef3591 from "../intl/VibegrationsUntranslated.messages.js";
import _modDef4229 from "../../../../_runtime/metro/04229__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import NotificationCenterUtils from "../../notification_center/NotificationCenterUtils.tsx";
import MoreHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import UploadIcon from "../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import FiltersHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import UndoIcon from "../../../design/components/Icon/native/redesign/generated/UndoIcon.tsx";
import WrenchIcon from "../../../design/components/Icon/native/redesign/generated/WrenchIcon.tsx";
import BugIcon from "../../../design/components/Icon/native/redesign/generated/BugIcon.tsx";
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton.tsx";
import VibegrationsCreateSheet from "VibegrationsCreateSheet.tsx";
import VibegrationsRemixSheet from "VibegrationsRemixSheet.tsx";
import vibegrationsProjectActions from "vibegrationsProjectActions.tsx";
import VibegrationsProjectSettingsSheet from "VibegrationsProjectSettingsSheet.tsx";
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet.tsx";
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet.tsx";
import VibegrationsUsageSheet from "VibegrationsUsageSheet.tsx";
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet.tsx";
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet.tsx";
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet.tsx";
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";
import VibegrationsConnectionStore_mod from "../stores/VibegrationsConnectionStore.tsx";
import VibegrationsProjectStore_mod from "../stores/VibegrationsProjectStore.tsx";

const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsProjectSettingsSheetDefault = VibegrationsProjectSettingsSheet;
const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsModelSettingsSheetDefault = VibegrationsModelSettingsSheet;
const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;
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
  const tmp = closure_26(0);
  const data = ApplicationActionCreators.useApplication(application_id).data;
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = util.intl;
    const obj2 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj2.time = NotificationCenterUtils.getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3591.oMDaqr, obj2);
    const tmp2Result = NotificationCenterUtils;
  }
  const obj3 = { label: project.name, subLabel: formatToPlainStringResult, icon: null, trailing: null, onPress: null };
  const obj4 = { id: application_id, icon: null, size: 64 };
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  obj4.icon = icon;
  obj3.icon = __initData4(timestampProducer, {
    accessibilityIgnoresInvertColors: true,
    source: AvatarUtilsDefault.getApplicationIconSource(obj4),
    style: tmp.appIcon,
  });
  const obj7 = { IconComponent: null, onPress: null, accessibilityLabel: null };
  const obj5 = {
    accessibilityIgnoresInvertColors: true,
    source: AvatarUtilsDefault.getApplicationIconSource(obj4),
    style: tmp.appIcon,
  };
  obj7.IconComponent = MoreHorizontalIcon.MoreHorizontalIcon;
  obj7.onPress = onMore;
  const intl2 = util.intl;
  obj7.accessibilityLabel = intl2.string(util.t["UKOtz+"]);
  obj3.trailing = __initData4(VibegrationsHeaderIconButtonDefault, obj7);
  obj3.onPress = onPress;
  return __initData4(TableRow.TableRow, obj3);
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_26(0);
  importDefault = tmp3;
  navigation = guildId(navigation[25]).useNavigation();
  let obj = guildId(navigation[25]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[26]).useStateFromStoresArray(
    items,
    () => VibegrationsProjectStore.getOwnedProjects(),
    [],
  );
  let obj2 = guildId(navigation[26]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[26]).useStateFromStoresArray(
    items1,
    () => VibegrationsProjectStore.getSharedProjects(guildId),
    items2,
  );
  let obj3 = guildId(navigation[26]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[26]).useStateFromStores(
    items3,
    () => VibegrationsProjectStore.getProjectsFetchState(),
    [],
  );
  const items4 = [stateFromStoresArray, guildId];
  const memo = stateFromStoresArray1.useMemo(() => {
    const found = stateFromStoresArray.filter((item) =>
      guildId(navigation[27]).isVibegrationsProjectInGuild(item, closure_1_0),
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
  const memo1 = stateFromStoresArray1.useMemo(() => {
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
  const onCreated = stateFromStoresArray1.useCallback(
    (projectId) => navigation.push(constants.CHAT, { projectId }),
    items6,
  );
  const items7 = [guildId, onCreated];
  const callback1 = stateFromStoresArray1.useCallback(() => {
    const obj2 = {
      key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY,
      content: __initData4(VibegrationsCreateSheetDefault, { guildId, onCreated }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items7);
  const items8 = [guildId, onCreated];
  const memo2 = stateFromStoresArray1.useMemo(() => {
    closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f118713(arg0);
      } else {
        guildId(navigation[15]).transitionTo(stateFromStores4.CHANNEL(arg1, callback5.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[15]);
      }
    };
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = stateFromStoresArray1.useCallback((project) => {
    const obj2 = {
      key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY,
      content: __initData4(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, onCreated, callback2];
  closure_9 = stateFromStoresArray1.useCallback((project) => {
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
        obj2.content = __initData4(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      },
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
        obj2.content = __initData4(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      },
    };
    let obj3 = guildId(navigation[33]);
    const result1 = obj3.showSimpleActionSheet({
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
  const effect = stateFromStoresArray1.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[34]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[17]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[17]).t.CumH4u);
        return closure_2_24(closure_1(navigation[22]), obj);
      },
    });
  }, items11);
  const obj4 = guildId(navigation[26]);
  let result = guildId(navigation[35]).recentVibegrationsChangelog("mobile");
  if (tmp14) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = {
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      keyboardShouldPersistTaps: "handled",
      children: null,
    };
    const items12 = [tmp3.listContent];
    const obj8 = { paddingBottom: tmp(tmp2[14]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    let tmp23Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[17]).intl;
      obj12.children = intl3.string(tmp(tmp2[18]).x07mpp);
      const items13 = [closure_24(tmp4(tmp2[36]).Text, obj12)];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[17]).intl;
      obj13.children = intl4.string(tmp(tmp2[18]).h5CwHI);
      items13[1] = closure_24(tmp4(tmp2[36]).Text, obj13);
      obj11.children = items13;
      const items14 = [closure_25(tmp22, obj11)];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
          const obj = { style: changelogItem.changelogItem, children: null };
          const items = [DateUtils.dateFormat(_modDef4229(children.date, "YYYY-MM-DD"), "LL")];
          let combined = null;
          if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
            const intl = util.intl;
            const _HermesInternal = HermesInternal;
            combined = " \u00B7 " + intl.string(_modDef3591["CLX+p/"]);
          }
          items[1] = combined;
          const items1 = [
            closure_2_25(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
            __initData4(Text_Text.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: children.summary,
            }),
          ];
          obj.children = items1;
          return closure_2_25(React6, obj, "" + children.date + "-" + children.summary);
        }),
      };
      items14[1] = closure_24(tmp22, obj14);
      obj10.children = items14;
      tmp23Result = closure_25(tmp22, obj10);
    }
    const items15 = [tmp23Result, , ,];
    let tmp23Result3 = null;
    if (memo.length > 0) {
      const obj15 = { style: tmp3.section, children: null };
      const obj16 = { style: tmp3.sectionHeading, children: null };
      const obj17 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl5 = tmp4(tmp2[17]).intl;
      obj17.children = intl5.string(tmp(tmp2[18]).Bo5fE3);
      const items16 = [closure_24(tmp4(tmp2[36]).Text, obj17)];
      const obj18 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp4(tmp2[17]).intl;
      obj18.children = intl6.string(tmp(tmp2[18]).YnAFtT);
      items16[1] = closure_24(tmp4(tmp2[36]).Text, obj18);
      obj16.children = items16;
      const items17 = [closure_25(tmp22, obj16)];
      const obj19 = {
        hasIcons: true,
        children: memo.map((project) =>
          closure_1_24(
            ProjectRow,
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
      items17[1] = closure_24(tmp4(tmp2[41]).TableRowGroup, obj19);
      obj15.children = items17;
      tmp23Result3 = closure_25(tmp22, obj15);
    }
    items15[1] = tmp23Result3;
    let tmp23Result4 = null;
    if (memo1.length > 0) {
      const obj20 = { style: tmp3.section, children: null };
      const obj21 = { style: tmp3.sectionHeading, children: null };
      const obj22 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl7 = tmp4(tmp2[17]).intl;
      obj22.children = intl7.string(tmp(tmp2[18]).jrCnUc);
      const items18 = [closure_24(tmp4(tmp2[36]).Text, obj22)];
      const obj23 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl8 = tmp4(tmp2[17]).intl;
      obj23.children = intl8.string(tmp(tmp2[18])["1KEhDu"]);
      items18[1] = closure_24(tmp4(tmp2[36]).Text, obj23);
      obj21.children = items18;
      const items19 = [closure_25(tmp22, obj21)];
      const obj24 = {
        hasIcons: true,
        children: memo1.map((project) =>
          closure_1_24(
            ProjectRow,
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
      items19[1] = closure_24(tmp4(tmp2[41]).TableRowGroup, obj24);
      obj20.children = items19;
      tmp23Result4 = closure_25(tmp22, obj20);
    }
    items15[2] = tmp23Result4;
    items15[3] = null;
    obj7.children = items15;
    obj6.children = closure_25(memo2, obj7);
    return closure_24(callback2, obj6);
  } else {
    const obj25 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj26 = { style: tmp3.listError, children: null };
          const obj27 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[17]).intl;
          obj27.children = intl.string(tmp(tmp2[18])["IN/HRP"]);
          const items20 = [closure_24(tmp4(tmp2[36]).Text, obj27)];
          const obj28 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[17]).intl;
          obj28.text = intl2.string(tmp(tmp2[18])["42EdIV"]);
          obj28.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_24(tmp4(tmp2[37]).Button, obj28);
          obj26.children = items20;
          let tmp15Result2 = closure_25(tmp16, obj26);
        } else {
          const obj29 = { style: tmp3.listError, children: null };
          const obj30 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl9 = tmp4(tmp2[17]).intl;
          obj30.children = intl9.string(tmp(tmp2[18])["vqy+in"]);
          const items21 = [closure_24(tmp4(tmp2[36]).Text, obj30)];
          const obj31 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl10 = tmp4(tmp2[17]).intl;
          obj31.text = intl10.string(tmp4(tmp2[17]).t.CumH4u);
          obj31.onPress = callback1;
          items21[1] = closure_24(tmp4(tmp2[37]).Button, obj31);
          obj29.children = items21;
          tmp15Result2 = closure_25(tmp16, obj29);
        }
      }
      obj25.children = tmp15Result2;
      closure_24(tmp16, obj25);
    }
    tmp15Result2 = closure_24(onCreated, {});
  }
  const obj5 = guildId(navigation[35]);
  tmp14 = memo.length > 0 || memo1.length > 0;
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let callback;
  first = undefined;
  closure_15 = undefined;
  let callback1;
  projectGuildId = undefined;
  let callback4;
  let stateFromStores4;
  let callback5;
  let memo;
  let callback6;
  let callback7;
  let ref;
  let callback8;
  let callback9;
  let setting;
  let callback10;
  let callback11;
  let memo1;
  c33 = undefined;
  navigation = guildId(navigation[25]).useNavigation();
  let tmp5 = ref(projectId(navigation[42])({ includeKeyboardHeight: true }).insets.bottom);
  _slicedToArray = tmp5;
  let obj = guildId(navigation[25]);
  let items = [projectGuildId];
  const items1 = [projectId];
  const stateFromStores = guildId(navigation[26]).useStateFromStores(
    items,
    () => {
      let project = VibegrationsProjectStore.getProject(projectId);
      if (project == null) {
        project = null;
      }
      return project;
    },
    items1,
  );
  let obj2 = guildId(navigation[26]);
  const items2 = [projectGuildId];
  const items3 = [projectId];
  const stateFromStoresObject = guildId(navigation[26]).useStateFromStoresObject(
    items2,
    () => {
      const project = VibegrationsProjectStore.getProject(projectId);
      const obj = {
        projectExists: null != project,
        projectName: null,
        projectGuildId: null,
        previewAppId: null,
        isOwner: null,
        canPublish: null,
      };
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
        tmp5 = collapsedCategories(project);
      }
      obj.isOwner = tmp5;
      let tmp7 = null != project;
      if (tmp7) {
        tmp7 = closure_2_17(project);
      }
      obj.canPublish = tmp7;
      return obj;
    },
    items3,
  );
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const isOwner = stateFromStoresObject.isOwner;
  const canPublish = stateFromStoresObject.canPublish;
  const items4 = [navigation, projectExists];
  const effect = stateFromStores.useEffect(() => {
    if (!projectExists) {
      navigation.goBack();
    }
  }, items4);
  let obj3 = guildId(navigation[26]);
  const items5 = [projectGuildId];
  const items6 = [projectId];
  const stateFromStores1 = guildId(navigation[26]).useStateFromStores(
    items5,
    () => {
      const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
      let preview_ready;
      if (integrationStatus != null) {
        preview_ready = integrationStatus.preview_ready;
      }
      return true === preview_ready;
    },
    items6,
  );
  let obj5 = guildId(navigation[26]);
  const items7 = [callback];
  const items8 = [projectId];
  const stateFromStores2 = guildId(navigation[26]).useStateFromStores(
    items7,
    () => VibegrationsChatStore.getProjectUsage(projectId),
    items8,
  );
  let obj6 = guildId(navigation[26]);
  const items9 = [callback1];
  const items10 = [projectId];
  const stateFromStores3 = guildId(navigation[26]).useStateFromStores(
    items9,
    () => null != VibegrationsConnectionStore.getModelSettings(projectId),
    items10,
  );
  const items11 = [projectId];
  const effect1 = stateFromStores.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {});
  }, items11);
  const items12 = [previewAppId];
  callback = stateFromStores.useCallback(() => {
    if (null != previewAppId) {
      const obj2 = { applicationId: tmp, surface: MAIN_SURFACE };
      FramesActionCreatorsDefault.launchFrame(obj2).catch(() => {});
      const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj2);
    }
  }, items12);
  let obj7 = guildId(navigation[26]);
  const tmp11 = callback1;
  const tmp16 =
    null != previewAppId && stateFromStores1 && null != previewAppId && null != projectId(navigation[44])(previewAppId);
  closure_13 = tmp16;
  [first, closure_15] = stateFromStores.useState(false);
  const items13 = [guildId, projectId, first];
  callback1 = obj4.useCallback(() => {
    if (!first) {
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true === preview_ready) {
          if (integrationStatus.integration_installed) {
            if (!integrationStatus.bot_permissions_changed) {
              closure_15(true);
              if ("user" !== project.install_scope) {
                const promise5 = map1(projectId);
                promise5.catch(() => {});
                const nextPromise = closure_2_14(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[17]).intl;
                    const error = new Error(intl.string(projectId(navigation[18]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[38]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {});
                    const obj = guildId(navigation[38]);
                  }
                });
                const promise6 = closure_2_14(projectId);
                nextPromise.catch(() => {}).finally(() => closure_1_15(false));
                const catchPromise1 = nextPromise.catch(() => {});
                let guild_id = project.guild_id;
                let obj2 = ActionSheetActionCreators;
                if (guild_id == null) {
                  guild_id = guildId;
                }
                const obj3 = { content: null, key: null };
                const obj6 = {
                  guildId: guild_id,
                  applicationId: null,
                  projectName: null,
                  publish: null,
                  initialDraft: null,
                };
                ({ application_id: obj4.applicationId, name: obj4.projectName } = project);
                obj6.publish = nextPromise;
                obj6.initialDraft = promise5;
                obj3.content = __initData4(VibegrationsPublishNotesSheetDefault, obj6);
                obj3.key = VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
                obj2.showActionSheet(obj3);
              } else {
                const nextPromise1 = closure_2_14(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[17]).intl;
                    const error = new Error(intl.string(projectId(navigation[18]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[38]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {});
                    const obj = guildId(navigation[38]);
                  }
                });
                const promise = closure_2_14(projectId);
                nextPromise1.catch(() => {}).finally(() => closure_1_15(false));
                const catchPromise2 = nextPromise1.catch(() => {});
                nextPromise1
                  .then(() => {
                    const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                    const intl = guildId(1115).intl;
                    obj2.content = intl.string(projectId(3591).wA0o0L);
                    projectId(4336).open(obj2);
                  })
                  .catch((error) => {
                    if (error instanceof Error) {
                      let message = error.message;
                    } else {
                      const intl = guildId(1115).intl;
                      message = intl.string(projectId(3591).fNP6Cd);
                    }
                    projectId(4336).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
                    const obj = projectId(4336);
                  });
                const nextPromise2 = nextPromise1.then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1115).intl;
                  obj2.content = intl.string(projectId(3591).wA0o0L);
                  projectId(4336).open(obj2);
                });
              }
            }
          }
          const obj8 = { title: null, body: null };
          let intl = util.intl;
          obj8.title = intl.string(_modDef3591.DYwf2n);
          const intl2 = util.intl;
          obj8.body = intl2.string(_modDef3591["nDQB/b"]);
          actions_AlertActionCreatorsDefault.show(obj8);
        } else {
          const obj12 = { title: null, body: null };
          const intl3 = util.intl;
          obj12.title = intl3.string(_modDef3591["+UouPe"]);
          const intl4 = util.intl;
          obj12.body = intl4.string(_modDef3591["E0QD++"]);
          actions_AlertActionCreatorsDefault.show(obj12);
        }
      }
    }
  }, items13);
  const items14 = [projectId];
  const callback2 = obj4.useCallback(() => {
    const obj2 = {
      content: __initData4(VibegrationsModelSettingsSheetDefault, { projectId }),
      key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items14);
  const items15 = [projectId];
  const callback3 = obj4.useCallback(() => {
    const obj2 = {
      content: __initData4(VibegrationsUsageSheetDefault, { projectId }),
      key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items15);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items16 = [projectId, projectGuildId];
  callback4 = obj4.useCallback(() => {
    const obj2 = {
      content: __initData4(VibegrationsProjectSettingsSheetDefault, { projectId, guildId: projectGuildId }),
      key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items16);
  const tmp15 = null != previewAppId && null != projectId(navigation[44])(previewAppId);
  const items17 = [tmp11];
  const items18 = [projectId];
  stateFromStores4 = guildId(navigation[26]).useStateFromStores(
    items17,
    () => null != VibegrationsConnectionStore.getSettings(projectId),
    items18,
  );
  const items19 = [projectId];
  callback5 = obj4.useCallback(() => {
    const obj2 = {
      content: __initData4(VibegrationsSettingsSheetDefault, { projectId, isPreview: true }),
      key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items19);
  const items20 = [guildId, navigation];
  memo = obj4.useMemo(() => {
    closure_0 = guildId;
    const f118713 = (projectId) => navigation.push(callback8.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f118713(arg0);
      } else {
        guildId(navigation[15]).transitionTo(stateFromStores4.CHANNEL(arg1, callback5.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[15]);
      }
    };
  }, items20);
  const items21 = [guildId, memo, stateFromStores];
  callback6 = obj4.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo };
      obj2.content = __initData4(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items21);
  const items22 = [projectId];
  callback7 = obj4.useCallback(() => {
    const obj2 = {
      key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY,
      content: __initData4(VibegrationsConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  ref = obj4.useRef(false);
  const items23 = [projectId];
  callback8 = obj4.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3591.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = __initData(projectId, sha.sha);
      __initData(projectId, sha.sha)
        .then(
          () => {
            const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
            const intl = guildId(1115).intl;
            obj2.content = intl.string(projectId(3591).u8g2Od);
            obj2.IconComponent = guildId(15216).UndoIcon;
            projectId(4336).open(obj2);
          },
          () => {
            const intl = guildId(1115).intl;
            guildId(4335).presentError(intl.string(projectId(3591).q6iZ84));
          },
        )
        .finally(() => {
          ref.current = false;
        });
      const nextPromise = __initData(projectId, sha.sha).then(
        () => {
          const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
          const intl = guildId(1115).intl;
          obj2.content = intl.string(projectId(3591).u8g2Od);
          obj2.IconComponent = guildId(15216).UndoIcon;
          projectId(4336).open(obj2);
        },
        () => {
          const intl = guildId(1115).intl;
          guildId(4335).presentError(intl.string(projectId(3591).q6iZ84));
        },
      );
    }
  }, items23);
  const items24 = [callback8, projectId];
  callback9 = obj4.useCallback(() => {
    const obj2 = {
      key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY,
      content: __initData4(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback8 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items24);
  const DeveloperMode = tmp(tmp2[55]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items25 = [navigation, projectId];
  callback10 = obj4.useCallback(() => navigation.push(constants.DEBUG, { projectId }), items25);
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  const items26 = [install_scope, projectId];
  callback11 = obj4.useCallback(() => {
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
    obj2.content = __initData4(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items26);
  const items27 = [
    canPublish,
    setting,
    guildId,
    callback5,
    callback7,
    callback10,
    callback2,
    callback4,
    callback6,
    callback11,
    callback3,
    callback9,
    callback1,
    stateFromStores4,
    stateFromStores3,
    isOwner,
    stateFromStores,
    stateFromStores2,
  ];
  memo1 = obj4.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3591["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback1;
      items.push(obj);
    }
    if (stateFromStores4) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3591.gTMvzD);
      obj2.IconComponent = WrenchIcon.WrenchIcon;
      obj2.action = callback5;
      items.push(obj2);
    }
    if (isOwner) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(_modDef3591["xhcY+n"]);
      obj3.IconComponent = SettingsIcon.SettingsIcon;
      obj3.action = callback4;
      items.push(obj3);
    }
    if (stateFromStores3) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3591["2NWMqY"]);
      obj4.IconComponent = FiltersHorizontalIcon.FiltersHorizontalIcon;
      obj4.action = callback2;
      items.push(obj4);
    }
    if (null != stateFromStores2) {
      const obj5 = { label: null, IconComponent: null, action: null };
      const intl5 = util.intl;
      obj5.label = intl5.string(_modDef3591.AWQ2ZV);
      obj5.IconComponent = ClockIcon.ClockIcon;
      obj5.action = callback3;
      items.push(obj5);
    }
    if (setting) {
      const obj6 = { label: null, IconComponent: null, action: null };
      const intl6 = util.intl;
      obj6.label = intl6.string(_modDef3591.KampIf);
      obj6.IconComponent = BugIcon.BugIcon;
      obj6.action = callback10;
      items.push(obj6);
    }
    if (null != stateFromStores) {
      const obj9 = {
        project: tmp49,
        guildId,
        onRemix: callback6,
        onConnectTool: callback7,
        onVersionHistory: callback9,
        onRestorePoints: callback11,
      };
      const result = vibegrationsProjectActions.vibegrationsProjectActions(obj9);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj16 = { label: null, IconComponent: null, variant: null, action: null };
        ({ label: obj7.label, IconComponent: obj7.IconComponent } = nextResult);
        let str;
        let tmp53 = nextResult;
        if (true === nextResult.destructive) {
          str = "destructive";
        }
        obj16.variant = str;
        obj16.action = tmp53.action;
        let arr13 = items.push(obj16);
        continue;
      }
    }
    return items;
  }, items27);
  let formatToPlainStringResult;
  if (null != stateFromStores2) {
    let intl = tmp(tmp2[17]).intl;
    let obj8 = { runes: null };
    const tmpResult2 = tmp(tmp2[63]);
    obj8.runes = tmp(tmp2[63]).runesFromUsd(stateFromStores2.cost_usd).toLocaleString();
    formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[18])["4PFO2p"], obj8);
    const runesFromUsdResult = tmp(tmp2[63]).runesFromUsd(stateFromStores2.cost_usd);
  }
  c33 = formatToPlainStringResult;
  const items28 = [callback, navigation, memo1, projectName, formatToPlainStringResult, tmp16, tmp5];
  const effect2 = obj4.useEffect(() => {
    let stringResult = projectName;
    if (projectName == null) {
      let intl = guildId(navigation[17]).intl;
      stringResult = intl.string(projectId(navigation[18]).Xmvb23);
    }
    guildId = stringResult;
    navigation.setOptions({
      headerTitle() {
        let prop;
        if (null != subtitle) {
          prop = closure_3.headerTitleWithSubtitle;
        }
        const obj = {
          style: prop,
          children: __initData4(NavigatorHeader.NavigatorHeader, { title: stringResult, subtitle }),
        };
        return __initData4(React6, obj);
      },
      headerRight() {
        let obj = { style: closure_1_3.headerActions, children: null };
        let tmp3 = null;
        if (closure_1_13) {
          const obj2 = { IconComponent: guildId(navigation[65]).PlayIcon, onPress, accessibilityLabel: null };
          let intl = guildId(navigation[17]).intl;
          obj2.accessibilityLabel = intl.string(projectId(navigation[18]).ecod4C);
          tmp3 = callback6(projectId(navigation[22]), obj2);
          const tmp7 = projectId(navigation[22]);
        }
        items = [tmp3];
        items[1] = callback6(guildId(navigation[66]).ContextMenu, {
          items,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = {
              ref,
              IconComponent: closure_1_0(8807).MoreHorizontalIcon,
              onPress,
              accessibilityLabel: null,
              accessibilityActions: null,
              onAccessibilityAction: null,
            };
            const intl = closure_1_0(1115).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1115).t["UKOtz+"]);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_1_24(closure_1_1(16735), obj);
          },
        });
        obj.children = items;
        return callback7(isOwner, obj);
      },
    });
    let obj = {
      headerTitle() {
        let prop;
        if (null != subtitle) {
          prop = closure_3.headerTitleWithSubtitle;
        }
        const obj = {
          style: prop,
          children: __initData4(NavigatorHeader.NavigatorHeader, { title: stringResult, subtitle }),
        };
        return __initData4(React6, obj);
      },
      headerRight() {
        let obj = { style: closure_1_3.headerActions, children: null };
        let tmp3 = null;
        if (closure_1_13) {
          const obj2 = { IconComponent: guildId(navigation[65]).PlayIcon, onPress, accessibilityLabel: null };
          let intl = guildId(navigation[17]).intl;
          obj2.accessibilityLabel = intl.string(projectId(navigation[18]).ecod4C);
          tmp3 = callback6(projectId(navigation[22]), obj2);
          const tmp7 = projectId(navigation[22]);
        }
        items = [tmp3];
        items[1] = callback6(guildId(navigation[66]).ContextMenu, {
          items,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = {
              ref,
              IconComponent: closure_1_0(8807).MoreHorizontalIcon,
              onPress,
              accessibilityLabel: null,
              accessibilityActions: null,
              onAccessibilityAction: null,
            };
            const intl = closure_1_0(1115).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1115).t["UKOtz+"]);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_1_24(closure_1_1(16735), obj);
          },
        });
        obj.children = items;
        return callback7(isOwner, obj);
      },
    };
  }, items28);
  const items29 = [guildId, projectId];
  const effect3 = obj4.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[38]).setSelectedProjectForGuild(closure_1_0, null);
  }, items29);
  const tmpResult = guildId(navigation[26]);
  return callback6(isOwner, { style: tmp5.content, children: callback6(projectId(navigation[67]), { projectId }) });
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  ScrollView: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
let VibegrationsConnectionStore = fn(16725);
({
  draftPatchNotes: map1,
  publishProject: closure_14,
  restoreSourceHistoryEntry: closure_15,
} = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let VibegrationsProjectStore = fn(16723);
({ canPublishProject: closure_17, isProjectOwner: closure_18 } = VibegrationsProjectStore);
let VibegrationsProjectStore = VibegrationsProjectStore_mod;
const Constants = fn(1074);
({ Permissions: closure_20, Routes: closure_21 } = Constants);
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const MAIN_SURFACE = fn(9654).MAIN_SURFACE;
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25 } = jsxProd);
const createStyles = fn(4638);
let closure_26 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    centered: null,
    listContent: null,
    section: null,
    sectionHeading: null,
    changelog: null,
    changelogEntries: null,
    changelogItem: null,
    appIcon: null,
    listError: null,
    headerTitleWithSubtitle: null,
    headerActions: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  const obj4 = {
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj6 = { gap: nativeDefault.space.PX_4 };
  obj.changelog = { gap: nativeDefault.space.PX_16 };
  const obj7 = { gap: nativeDefault.space.PX_16 };
  obj.changelogEntries = { gap: nativeDefault.space.PX_12 };
  const obj8 = { gap: nativeDefault.space.PX_12 };
  obj.changelogItem = { gap: nativeDefault.space.PX_4 };
  const size = {
    width: nativeDefault.space.PX_24,
    height: nativeDefault.space.PX_24,
    borderRadius: nativeDefault.radii.sm,
  };
  obj.appIcon = size;
  const obj9 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj10 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerTitleWithSubtitle = { paddingBottom: nativeDefault.space.PX_16 };
  const obj11 = { paddingBottom: nativeDefault.space.PX_16 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  return obj;
});
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
  const isVibegrationsGuildEnabled = guildId(stateFromStores[68]).useIsVibegrationsGuildEnabled({
    guildId,
    location: "VibegrationsStandaloneScreen",
  });
  const obj3 = guildId(stateFromStores[68]);
  const items2 = [GuildMemberStore];
  const items3 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[26]).useStateFromStoresArray(
    items2,
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
    items3,
  );
  const obj4 = guildId(stateFromStores[26]);
  const items4 = [GuildStore, PermissionStore];
  const items5 = [guildId];
  const items6 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[26]).useStateFromStores(
      items4,
      () => {
        const guild = GuildStore.getGuild(guildId);
        let canResult = null != guild;
        if (canResult) {
          canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
        }
        return canResult;
      },
      items5,
    ),
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
  obj7.headerLeft = guildId(stateFromStores[64]).getHeaderCloseButton(() => navigation.goBack());
  obj7.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[17]).intl;
    obj.title = intl.string(navigation(stateFromStores[18]).Xmvb23);
    return closure_1_24(guildId(stateFromStores[64]).NavigatorHeader, obj);
  };
  obj7.render = function render() {
    return __initData4(ProjectList, { guildId });
  };
  obj6[constants2.PROJECTS] = obj7;
  obj6[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      return __initData4(ChatScene, { guildId, projectId: projectId.projectId });
    },
  };
  obj6[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[17]).intl;
      obj.title = intl.string(navigation(stateFromStores[18]).KampIf);
      return closure_1_24(guildId(stateFromStores[64]).NavigatorHeader, obj);
    },
    render(projectId) {
      return closure_1_24(navigation(stateFromStores[69]), { projectId: projectId.projectId });
    },
  };
  const obj9 = { screens: obj6, initialRouteName: constants2.PROJECTS, headerBackTitle: null };
  let intl = guildId(stateFromStores[17]).intl;
  obj9.headerBackTitle = intl.string(navigation(stateFromStores[18]).Xmvb23);
  return closure_24(guildId(stateFromStores[70]).Navigator, obj9);
}
