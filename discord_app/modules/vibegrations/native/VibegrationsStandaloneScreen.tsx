// discord_app/modules/vibegrations/native/VibegrationsStandaloneScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import _modDef3593 from "../intl/VibegrationsUntranslated.messages.js";
import _modDef4231 from "../../../../_runtime/metro/04231__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
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
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet.tsx";
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet.tsx";
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet.tsx";
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VibegrationsConnectionStore_mod from "../stores/VibegrationsConnectionStore.tsx";
import VibegrationsProjectStore_mod from "../stores/VibegrationsProjectStore.tsx";

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
  const tmp = closure_25(0);
  const data = ApplicationActionCreators.useApplication(application_id).data;
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = util.intl;
    const obj2 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj2.time = NotificationCenterUtils.getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3593.oMDaqr, obj2);
    const tmp2Result = NotificationCenterUtils;
  }
  const obj3 = { label: project.name, subLabel: formatToPlainStringResult, icon: null, trailing: null, onPress: null };
  const obj4 = { id: application_id, icon: null, size: 64 };
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  obj4.icon = icon;
  obj3.icon = __initData3(timestampProducer, {
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
  obj3.trailing = __initData3(VibegrationsHeaderIconButtonDefault, obj7);
  obj3.onPress = onPress;
  return __initData3(TableRow.TableRow, obj3);
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_25(0);
  importDefault = tmp3;
  navigation = guildId(navigation[24]).useNavigation();
  let obj = guildId(navigation[24]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[25]).useStateFromStoresArray(
    items,
    () => VibegrationsProjectStore.getOwnedProjects(),
    [],
  );
  let obj2 = guildId(navigation[25]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[25]).useStateFromStoresArray(
    items1,
    () => VibegrationsProjectStore.getSharedProjects(guildId),
    items2,
  );
  let obj3 = guildId(navigation[25]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[25]).useStateFromStores(
    items3,
    () => VibegrationsProjectStore.getProjectsFetchState(),
    [],
  );
  const items4 = [stateFromStoresArray, guildId];
  const memo = stateFromStoresArray1.useMemo(() => {
    const found = stateFromStoresArray.filter((item) =>
      guildId(navigation[26]).isVibegrationsProjectInGuild(item, closure_1_0),
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
      content: __initData3(VibegrationsCreateSheetDefault, { guildId, onCreated }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items7);
  const items8 = [guildId, onCreated];
  const memo2 = stateFromStoresArray1.useMemo(() => {
    closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f119087(arg0);
      } else {
        guildId(navigation[14]).transitionTo(memo.CHANNEL(arg1, callback4.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[14]);
      }
    };
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = stateFromStoresArray1.useCallback((project) => {
    const obj2 = {
      key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY,
      content: __initData3(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, onCreated, callback2];
  closure_9 = stateFromStoresArray1.useCallback((project) => {
    guildId = project;
    const result = guildId(navigation[30]).vibegrationsProjectActions({
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
        obj2.content = __initData3(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      },
    });
    let obj = guildId(navigation[30]);
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
        obj2.content = __initData3(VibegrationsProjectSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      },
    };
    let obj3 = guildId(navigation[32]);
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
        const obj = { IconComponent: guildId(navigation[33]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[16]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[16]).t.CumH4u);
        return closure_2_23(closure_1(navigation[21]), obj);
      },
    });
  }, items11);
  const obj4 = guildId(navigation[25]);
  let result = guildId(navigation[34]).recentVibegrationsChangelog("mobile");
  if (tmp14) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = {
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      keyboardShouldPersistTaps: "handled",
      children: null,
    };
    const items12 = [tmp3.listContent];
    const obj8 = { paddingBottom: tmp(tmp2[13]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_23(tmp(tmp2[38]), {}), , , ,];
    let tmp23Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[16]).intl;
      obj12.children = intl3.string(tmp(tmp2[17]).x07mpp);
      const items14 = [closure_23(tmp4(tmp2[35]).Text, obj12)];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[16]).intl;
      obj13.children = intl4.string(tmp(tmp2[17]).h5CwHI);
      items14[1] = closure_23(tmp4(tmp2[35]).Text, obj13);
      obj11.children = items14;
      const items15 = [closure_24(tmp22, obj11)];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
          const obj = { style: changelogItem.changelogItem, children: null };
          const items = [DateUtils.dateFormat(_modDef4231(children.date, "YYYY-MM-DD"), "LL")];
          let combined = null;
          if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
            const intl = util.intl;
            const _HermesInternal = HermesInternal;
            combined = " \u00B7 " + intl.string(_modDef3593["CLX+p/"]);
          }
          items[1] = combined;
          const items1 = [
            __initData4(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
            __initData3(Text_Text.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: children.summary,
            }),
          ];
          obj.children = items1;
          return __initData4(React6, obj, "" + children.date + "-" + children.summary);
        }),
      };
      items15[1] = closure_23(tmp22, obj14);
      obj10.children = items15;
      tmp23Result = closure_24(tmp22, obj10);
    }
    items13[1] = tmp23Result;
    let tmp23Result3 = null;
    if (memo.length > 0) {
      const obj15 = { style: tmp3.section, children: null };
      const obj16 = { style: tmp3.sectionHeading, children: null };
      const obj17 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl5 = tmp4(tmp2[16]).intl;
      obj17.children = intl5.string(tmp(tmp2[17]).Bo5fE3);
      const items16 = [closure_23(tmp4(tmp2[35]).Text, obj17)];
      const obj18 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp4(tmp2[16]).intl;
      obj18.children = intl6.string(tmp(tmp2[17]).YnAFtT);
      items16[1] = closure_23(tmp4(tmp2[35]).Text, obj18);
      obj16.children = items16;
      const items17 = [closure_24(tmp22, obj16)];
      const obj19 = {
        hasIcons: true,
        children: memo.map((project) =>
          closure_1_23(
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
      items17[1] = closure_23(tmp4(tmp2[41]).TableRowGroup, obj19);
      obj15.children = items17;
      tmp23Result3 = closure_24(tmp22, obj15);
    }
    items13[2] = tmp23Result3;
    let tmp23Result4 = null;
    if (memo1.length > 0) {
      const obj20 = { style: tmp3.section, children: null };
      const obj21 = { style: tmp3.sectionHeading, children: null };
      const obj22 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl7 = tmp4(tmp2[16]).intl;
      obj22.children = intl7.string(tmp(tmp2[17]).jrCnUc);
      const items18 = [closure_23(tmp4(tmp2[35]).Text, obj22)];
      const obj23 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl8 = tmp4(tmp2[16]).intl;
      obj23.children = intl8.string(tmp(tmp2[17])["1KEhDu"]);
      items18[1] = closure_23(tmp4(tmp2[35]).Text, obj23);
      obj21.children = items18;
      const items19 = [closure_24(tmp22, obj21)];
      const obj24 = {
        hasIcons: true,
        children: memo1.map((project) =>
          closure_1_23(
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
      items19[1] = closure_23(tmp4(tmp2[41]).TableRowGroup, obj24);
      obj20.children = items19;
      tmp23Result4 = closure_24(tmp22, obj20);
    }
    items13[3] = tmp23Result4;
    items13[4] = null;
    obj7.children = items13;
    obj6.children = closure_24(memo2, obj7);
    return closure_23(callback2, obj6);
  } else {
    const obj25 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj26 = { style: tmp3.listError, children: null };
          const obj27 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[16]).intl;
          obj27.children = intl.string(tmp(tmp2[17])["IN/HRP"]);
          const items20 = [closure_23(tmp4(tmp2[35]).Text, obj27)];
          const obj28 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[16]).intl;
          obj28.text = intl2.string(tmp(tmp2[17])["42EdIV"]);
          obj28.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_23(tmp4(tmp2[36]).Button, obj28);
          obj26.children = items20;
          let tmp15Result2 = closure_24(tmp16, obj26);
        } else {
          const obj29 = { style: tmp3.listError, children: null };
          const obj30 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl9 = tmp4(tmp2[16]).intl;
          obj30.children = intl9.string(tmp(tmp2[17])["vqy+in"]);
          const items21 = [closure_23(tmp4(tmp2[35]).Text, obj30)];
          const obj31 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl10 = tmp4(tmp2[16]).intl;
          obj31.text = intl10.string(tmp4(tmp2[16]).t.CumH4u);
          obj31.onPress = callback1;
          items21[1] = closure_23(tmp4(tmp2[36]).Button, obj31);
          obj29.children = items21;
          tmp15Result2 = closure_24(tmp16, obj29);
        }
      }
      obj25.children = tmp15Result2;
      closure_23(tmp16, obj25);
    }
    tmp15Result2 = closure_23(onCreated, {});
  }
  const obj5 = guildId(navigation[34]);
  tmp14 = memo.length > 0 || memo1.length > 0;
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  first = undefined;
  closure_14 = undefined;
  projectGuildId = undefined;
  let callback2;
  let stateFromStores3;
  let callback3;
  let memo;
  let callback4;
  let callback5;
  let ref;
  let callback6;
  let callback7;
  let setting;
  let callback8;
  let callback9;
  let memo1;
  navigation = guildId(navigation[24]).useNavigation();
  let tmp5 = callback7(projectId(navigation[42])({ includeKeyboardHeight: true }).insets.bottom);
  _slicedToArray = tmp5;
  let obj = guildId(navigation[24]);
  let items = [stateFromStores3];
  const items1 = [projectId];
  const stateFromStores = guildId(navigation[25]).useStateFromStores(
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
  let obj2 = guildId(navigation[25]);
  const items2 = [stateFromStores3];
  const items3 = [projectId];
  const stateFromStoresObject = guildId(navigation[25]).useStateFromStoresObject(
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
        tmp5 = closure_2_17(project);
      }
      obj.isOwner = tmp5;
      let tmp7 = null != project;
      if (tmp7) {
        tmp7 = value2(project);
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
  let obj3 = guildId(navigation[25]);
  const items4 = [stateFromStores3];
  const items5 = [guildId];
  const stateFromStores1 = guildId(navigation[25]).useStateFromStores(
    items4,
    () => {
      const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
      let tmp2 = "unattempted" === guildProjectsFetchState;
      if (!tmp2) {
        tmp2 = "loading" === guildProjectsFetchState;
      }
      return tmp2;
    },
    items5,
  );
  let obj4 = guildId(navigation[25]);
  const items6 = [stateFromStores3];
  const items7 = [projectId];
  const items8 = [projectId];
  const stateFromStores2 = guildId(navigation[25]).useStateFromStores(
    items6,
    () => {
      const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
      let preview_ready;
      if (integrationStatus != null) {
        preview_ready = integrationStatus.preview_ready;
      }
      return true === preview_ready;
    },
    items7,
  );
  const effect = stateFromStores.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {});
  }, items8);
  const items9 = [previewAppId];
  const callback = stateFromStores.useCallback(() => {
    if (null != previewAppId) {
      const obj2 = { applicationId: tmp, surface: MAIN_SURFACE };
      FramesActionCreatorsDefault.launchFrame(obj2).catch(() => {});
      const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj2);
    }
  }, items9);
  let obj5 = guildId(navigation[25]);
  const tmp13 =
    null != previewAppId && stateFromStores2 && null != previewAppId && null != projectId(navigation[44])(previewAppId);
  closure_12 = tmp13;
  [first, closure_14] = stateFromStores.useState(false);
  const items10 = [guildId, projectId, first];
  const callback1 = obj6.useCallback(() => {
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
              closure_14(true);
              if ("user" !== project.install_scope) {
                const promise5 = closure_2_12(projectId);
                promise5.catch(() => {});
                const nextPromise = map1(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[16]).intl;
                    const error = new Error(intl.string(projectId(navigation[17]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[37]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {});
                    const obj = guildId(navigation[37]);
                  }
                });
                const promise6 = map1(projectId);
                nextPromise.catch(() => {}).finally(() => closure_1_14(false));
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
                obj3.content = __initData3(VibegrationsPublishNotesSheetDefault, obj6);
                obj3.key = VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
                obj2.showActionSheet(obj3);
              } else {
                const nextPromise1 = map1(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[16]).intl;
                    const error = new Error(intl.string(projectId(navigation[17]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[37]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {});
                    const obj = guildId(navigation[37]);
                  }
                });
                const promise = map1(projectId);
                nextPromise1.catch(() => {}).finally(() => closure_1_14(false));
                const catchPromise2 = nextPromise1.catch(() => {});
                nextPromise1
                  .then(() => {
                    const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                    const intl = guildId(1115).intl;
                    obj2.content = intl.string(projectId(3593).wA0o0L);
                    projectId(4338).open(obj2);
                  })
                  .catch((error) => {
                    if (error instanceof Error) {
                      let message = error.message;
                    } else {
                      const intl = guildId(1115).intl;
                      message = intl.string(projectId(3593).fNP6Cd);
                    }
                    projectId(4338).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
                    const obj = projectId(4338);
                  });
                const nextPromise2 = nextPromise1.then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1115).intl;
                  obj2.content = intl.string(projectId(3593).wA0o0L);
                  projectId(4338).open(obj2);
                });
              }
            }
          }
          const obj8 = { title: null, body: null };
          let intl = util.intl;
          obj8.title = intl.string(_modDef3593.DYwf2n);
          const intl2 = util.intl;
          obj8.body = intl2.string(_modDef3593["nDQB/b"]);
          actions_AlertActionCreatorsDefault.show(obj8);
        } else {
          const obj12 = { title: null, body: null };
          const intl3 = util.intl;
          obj12.title = intl3.string(_modDef3593["+UouPe"]);
          const intl4 = util.intl;
          obj12.body = intl4.string(_modDef3593["E0QD++"]);
          actions_AlertActionCreatorsDefault.show(obj12);
        }
      }
    }
  }, items10);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items11 = [projectId, projectGuildId];
  callback2 = obj6.useCallback(() => {
    const obj2 = {
      content: __initData3(VibegrationsProjectSettingsSheetDefault, { projectId, guildId: projectGuildId }),
      key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items11);
  const tmp12 = null != previewAppId && null != projectId(navigation[44])(previewAppId);
  const items12 = [callback1];
  const items13 = [projectId];
  stateFromStores3 = guildId(navigation[25]).useStateFromStores(
    items12,
    () => null != VibegrationsConnectionStore.getSettings(projectId),
    items13,
  );
  const items14 = [projectId];
  callback3 = obj6.useCallback(() => {
    const obj2 = {
      content: __initData3(VibegrationsSettingsSheetDefault, { projectId, isPreview: true }),
      key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items14);
  const items15 = [guildId, navigation];
  memo = obj6.useMemo(() => {
    closure_0 = guildId;
    const f119087 = (projectId) => navigation.push(setting.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f119087(arg0);
      } else {
        guildId(navigation[14]).transitionTo(memo.CHANNEL(arg1, callback4.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[14]);
      }
    };
  }, items15);
  const items16 = [guildId, memo, stateFromStores];
  callback4 = obj6.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo };
      obj2.content = __initData3(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items16);
  const items17 = [projectId];
  callback5 = obj6.useCallback(() => {
    const obj2 = {
      key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY,
      content: __initData3(VibegrationsConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items17);
  ref = obj6.useRef(false);
  const items18 = [projectId];
  callback6 = obj6.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3593.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = closure_2_14(projectId, sha.sha);
      closure_2_14(projectId, sha.sha)
        .then(
          () => {
            const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
            const intl = guildId(1115).intl;
            obj2.content = intl.string(projectId(3593).u8g2Od);
            obj2.IconComponent = guildId(15221).UndoIcon;
            projectId(4338).open(obj2);
          },
          () => {
            const intl = guildId(1115).intl;
            guildId(4337).presentError(intl.string(projectId(3593).q6iZ84));
          },
        )
        .finally(() => {
          ref.current = false;
        });
      const nextPromise = closure_2_14(projectId, sha.sha).then(
        () => {
          const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
          const intl = guildId(1115).intl;
          obj2.content = intl.string(projectId(3593).u8g2Od);
          obj2.IconComponent = guildId(15221).UndoIcon;
          projectId(4338).open(obj2);
        },
        () => {
          const intl = guildId(1115).intl;
          guildId(4337).presentError(intl.string(projectId(3593).q6iZ84));
        },
      );
    }
  }, items18);
  const items19 = [callback6, projectId];
  callback7 = obj6.useCallback(() => {
    const obj2 = {
      key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY,
      content: __initData3(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback6 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items19);
  const DeveloperMode = tmp(tmp2[53]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items20 = [navigation, projectId];
  callback8 = obj6.useCallback(() => navigation.push(setting.DEBUG, { projectId }), items20);
  let install_scope;
  if (stateFromStores != null) {
    install_scope = stateFromStores.install_scope;
  }
  const items21 = [install_scope, projectId];
  callback9 = obj6.useCallback(() => {
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
    obj2.content = __initData3(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items21);
  const items22 = [
    canPublish,
    setting,
    guildId,
    callback3,
    callback5,
    callback8,
    callback2,
    callback4,
    callback9,
    callback7,
    callback1,
    stateFromStores3,
    isOwner,
    stateFromStores,
  ];
  memo1 = obj6.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3593["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback1;
      items.push(obj);
    }
    if (stateFromStores3) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3593.gTMvzD);
      obj2.IconComponent = WrenchIcon.WrenchIcon;
      obj2.action = callback3;
      items.push(obj2);
    }
    if (isOwner) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(_modDef3593["xhcY+n"]);
      obj3.IconComponent = SettingsIcon.SettingsIcon;
      obj3.action = callback2;
      items.push(obj3);
    }
    if (setting) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3593.KampIf);
      obj4.IconComponent = BugIcon.BugIcon;
      obj4.action = callback8;
      items.push(obj4);
    }
    if (null != stateFromStores) {
      const obj7 = {
        project: tmp33,
        guildId,
        onRemix: callback4,
        onConnectTool: callback5,
        onVersionHistory: callback7,
        onRestorePoints: callback9,
      };
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
  }, items22);
  const items23 = [callback, navigation, memo1, projectExists, projectName, stateFromStores1, tmp13, tmp5];
  const effect1 = obj6.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
          return __initData3(NavigatorHeader.NavigatorHeader, { title });
        },
        headerRight() {
          let tmp = null;
          if (projectExists) {
            let obj = { style: headerActions.headerActions, children: null };
            let tmp6 = null;
            if (closure_1_12) {
              const obj2 = { IconComponent: guildId(navigation[60]).PlayIcon, onPress, accessibilityLabel: null };
              let intl = guildId(navigation[16]).intl;
              obj2.accessibilityLabel = intl.string(projectId(navigation[17]).ecod4C);
              tmp6 = closure_23(projectId(navigation[21]), obj2);
              const tmp10 = projectId(navigation[21]);
            }
            items = [tmp6];
            const obj3 = {
              items,
              align: "below",
              children(arg0) {
                ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                const obj = {
                  ref,
                  IconComponent: title(8059).MoreHorizontalIcon,
                  onPress,
                  accessibilityLabel: null,
                  accessibilityActions: null,
                  onAccessibilityAction: null,
                };
                const intl = title(1115).intl;
                obj.accessibilityLabel = intl.string(title(1115).t["UKOtz+"]);
                obj.accessibilityActions = accessibilityActions;
                obj.onAccessibilityAction = onAccessibilityAction;
                return closure_1_23(closure_1_1(16765), obj);
              },
            };
            items[1] = closure_23(guildId(navigation[61]).ContextMenu, obj3);
            obj.children = items;
            tmp = callback6(isOwner, obj);
          }
          return tmp;
        },
      };
      navigation.setOptions(obj);
    } else {
      let tmp2 = navigation;
      if (!projectExists) {
        if (!stateFromStores1) {
          let Xmvb23 = projectId(tmp2[17]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[17]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items23);
  const items24 = [guildId, projectId];
  const effect2 = obj6.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[37]).setSelectedProjectForGuild(closure_1_0, null);
  }, items24);
  let obj7 = { style: null, children: null };
  const content = tmp5.content;
  if (projectExists) {
    obj7.style = content;
    let obj8 = { projectId };
    obj7.children = tmp32(tmp4(tmp2[62]), obj8);
    let tmp37 = obj7;
  } else {
    const items25 = [content, tmp5.centered];
    obj7.style = items25;
    if (stateFromStores1) {
      let tmp32Result = tmp32(projectExists, {});
    } else {
      const obj9 = { style: tmp5.listError, children: null };
      const obj10 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl = tmp(tmp2[16]).intl;
      obj10.children = intl.string(tmp4(tmp2[17]).F2dRba);
      const items26 = [tmp32(tmp(tmp2[35]).Text, obj10), ,];
      const obj11 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl2 = tmp(tmp2[16]).intl;
      obj11.children = intl2.string(tmp4(tmp2[17]).GnEJ3o);
      items26[1] = tmp32(tmp(tmp2[35]).Text, obj11);
      let obj12 = { variant: "secondary", size: "sm", text: null, onPress: null };
      let intl3 = tmp(tmp2[16]).intl;
      obj12.text = intl3.string(tmp4(tmp2[17])["42EdIV"]);
      obj12.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items26[2] = tmp32(tmp(tmp2[36]).Button, obj12);
      obj9.children = items26;
      tmp32Result = callback6(tmp33, obj9);
    }
    obj7.children = tmp32Result;
    tmp37 = obj7;
  }
  return ref(isOwner, tmp37);
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  ScrollView: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
let VibegrationsConnectionStore = fn(16752);
({
  draftPatchNotes: closure_12,
  publishProject: map1,
  restoreSourceHistoryEntry: closure_14,
} = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let VibegrationsProjectStore = fn(16754);
({ canPublishProject: closure_16, isProjectOwner: closure_17 } = VibegrationsProjectStore);
let VibegrationsProjectStore = VibegrationsProjectStore_mod;
const Constants = fn(1074);
({ Permissions: closure_19, Routes: closure_20 } = Constants);
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const MAIN_SURFACE = fn(9665).MAIN_SURFACE;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const createStyles = fn(4640);
let closure_25 = createStyles.createStyles((paddingBottom) => {
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
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  return obj;
});
const constants2 = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const navigation = guildId(stateFromStores[24]).useNavigation();
  let obj = guildId(stateFromStores[24]);
  const items = [GuildStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[25]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const obj2 = guildId(stateFromStores[25]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[63]).useIsVibegrationsGuildEnabled({
    guildId,
    location: "VibegrationsStandaloneScreen",
  });
  const obj3 = guildId(stateFromStores[63]);
  const items2 = [GuildMemberStore];
  const items3 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[25]).useStateFromStoresArray(
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
  const obj4 = guildId(stateFromStores[25]);
  const items4 = [GuildStore, PermissionStore];
  const items5 = [guildId];
  const items6 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[25]).useStateFromStores(
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
  const obj5 = guildId(stateFromStores[25]);
  obj7.headerLeft = guildId(stateFromStores[59]).getHeaderCloseButton(() => navigation.goBack());
  obj7.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[16]).intl;
    obj.title = intl.string(navigation(stateFromStores[17]).Xmvb23);
    return closure_1_23(guildId(stateFromStores[59]).NavigatorHeader, obj);
  };
  obj7.render = function render() {
    return __initData3(ProjectList, { guildId });
  };
  obj6[constants2.PROJECTS] = obj7;
  obj6[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      return __initData3(ChatScene, { guildId, projectId: projectId.projectId });
    },
  };
  obj6[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[16]).intl;
      obj.title = intl.string(navigation(stateFromStores[17]).KampIf);
      return closure_1_23(guildId(stateFromStores[59]).NavigatorHeader, obj);
    },
    render(projectId) {
      return closure_1_23(navigation(stateFromStores[64]), { projectId: projectId.projectId });
    },
  };
  const obj9 = { screens: obj6, initialRouteName: constants2.PROJECTS, headerBackTitle: null };
  let intl = guildId(stateFromStores[16]).intl;
  obj9.headerBackTitle = intl.string(navigation(stateFromStores[17]).Xmvb23);
  return closure_23(guildId(stateFromStores[65]).Navigator, obj9);
}
