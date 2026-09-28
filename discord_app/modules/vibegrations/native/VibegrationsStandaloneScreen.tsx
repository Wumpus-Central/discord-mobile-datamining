// discord_app/modules/vibegrations/native/VibegrationsStandaloneScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import _modDef4421 from "../../../../_runtime/metro/04421__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import UploadIcon from "../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import TableRowApplicationIconDefault from "../../applications/native/TableRowApplicationIcon.tsx";
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames.tsx";
import UndoIcon from "../../../design/components/Icon/native/redesign/generated/UndoIcon.tsx";
import BugIcon from "../../../design/components/Icon/native/redesign/generated/BugIcon.tsx";
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton.tsx";
import VibegrationsCreateSheet from "VibegrationsCreateSheet.tsx";
import VibegrationsRemixSheet from "VibegrationsRemixSheet.tsx";
import vibegrationsProjectActions from "vibegrationsProjectActions.tsx";
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet.tsx";
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet.tsx";
import vibegrationsPublishBlockedReason from "../lib/vibegrationsPublishBlockedReason.tsx";
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet.tsx";
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet.tsx";
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet.tsx";
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet.tsx";
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VibegrationsBuilderRouteStore from "../stores/VibegrationsBuilderRouteStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsRemixSheetDefault = VibegrationsRemixSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;
const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
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
  const data = project(6584).useApplication(application_id).data;
  const obj = project(6584);
  const items = [VibegrationsProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(
    items,
    () => VibegrationsProjectStore.isProjectDeleting(project.id),
    items1,
  );
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp(1115).intl;
    const obj3 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj3.time = tmp(7055).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3715.oMDaqr, obj3);
    const tmpResult = tmp(7055);
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
  obj4.icon = closure_29(TableRowApplicationIconDefault, { application: obj5 });
  if (stateFromStores) {
    let tmp10Result = closure_29(closure_6, {});
  } else {
    const obj6 = { IconComponent: tmp(7365).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl3 = tmp(1115).intl;
    obj6.accessibilityLabel = intl3.string(tmp(1115).t["UKOtz+"]);
    tmp10Result = closure_29(VibegrationsHeaderIconButtonDefault, obj6);
    const tmp12Result = VibegrationsHeaderIconButtonDefault;
  }
  obj4.trailing = tmp10Result;
  obj4.onPress = onPress;
  return closure_29(project(5917).TableRow, obj4);
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  let callback;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_32(0);
  importDefault = tmp3;
  navigation = guildId(navigation[29]).useNavigation();
  let obj = guildId(navigation[29]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[20]).useStateFromStoresArray(
    items,
    () => VibegrationsProjectStore.getOwnedProjects(),
    [],
  );
  let obj2 = guildId(navigation[20]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[20]).useStateFromStoresArray(
    items1,
    () => VibegrationsProjectStore.getSharedProjects(guildId),
    items2,
  );
  let obj3 = guildId(navigation[20]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[20]).useStateFromStores(
    items3,
    () => VibegrationsProjectStore.getProjectsFetchState(),
    [],
  );
  const items4 = [stateFromStoresArray, guildId];
  const memo = callback.useMemo(() => {
    const found = stateFromStoresArray.filter((item) =>
      guildId(navigation[30]).isVibegrationsProjectInGuild(item, closure_1_0),
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
  callback = callback.useCallback((projectId) => navigation.push(constants.CHAT, { projectId }), items6);
  const items7 = [guildId, callback];
  const memo2 = callback.useMemo(() => {
    closure_0 = guildId;
    closure_1 = callback;
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f119755(arg0);
      } else {
        guildId(navigation[18]).transitionTo(callback1.CHANNEL(arg1, num2.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[18]);
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = callback.useCallback(() => {
    const obj2 = {
      key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY,
      content: __initData7(VibegrationsCreateSheetDefault, { guildId, onCreated: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = callback.useCallback((project) => {
    const obj2 = {
      key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY,
      content: __initData7(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, callback, callback2];
  closure_9 = callback.useCallback((project) => {
    guildId = project;
    const result = guildId(navigation[34]).vibegrationsProjectActions({
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
        obj2.content = __initData7(VibegrationsSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      },
    });
    let obj = guildId(navigation[34]);
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
        obj2.content = __initData7(VibegrationsSettingsSheetDefault, obj3);
        return obj.showActionSheet(obj2);
      },
    };
    let obj3 = guildId(navigation[36]);
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
  const effect = callback.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[37]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[21]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[21]).t.CumH4u);
        return closure_2_29(closure_1(navigation[26]), obj);
      },
    });
  }, items11);
  const obj4 = guildId(navigation[20]);
  let result = guildId(navigation[38]).recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = callback.useCallback(() => {
    const obj = guildId(navigation[31]);
    obj.showActionSheet({
      content: closure_1_29(closure_1(navigation[39]), {}),
      key: guildId(navigation[39]).VIBEGRATIONS_CHANGELOG_SHEET_KEY,
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
    const obj8 = { paddingBottom: tmp(tmp2[17]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_29(tmp(tmp2[43]), {}), , , ,];
    let tmp24Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[21]).intl;
      obj12.children = intl3.string(tmp(tmp2[22]).x07mpp);
      const items14 = [closure_29(tmp4(tmp2[40]).Text, obj12)];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[21]).intl;
      obj13.children = intl4.string(tmp(tmp2[22]).h5CwHI);
      items14[1] = closure_29(tmp4(tmp2[40]).Text, obj13);
      obj11.children = items14;
      const items15 = [closure_30(tmp23, obj11), ,];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
          const obj = { style: closure_1.changelogItem, children: null };
          const items = [DateUtils.dateFormat(_modDef4421(children.date, "YYYY-MM-DD"), "LL")];
          let combined = null;
          if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
            const intl = util.intl;
            const _HermesInternal = HermesInternal;
            combined = " \u00B7 " + intl.string(_modDef3715["CLX+p/"]);
          }
          items[1] = combined;
          const items1 = [
            __initData8(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
            __initData7(Text_Text.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: children.summary,
            }),
          ];
          obj.children = items1;
          return __initData8(React7, obj, "" + children.date + "-" + children.summary);
        }),
      };
      items15[1] = closure_29(tmp23, obj14);
      let tmp22Result = null;
      if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
        const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp4(tmp2[21]).intl;
        obj15.text = intl5.string(tmp(tmp2[22]).YWxThz);
        obj15.onPress = callback3;
        tmp22Result = closure_29(tmp4(tmp2[41]).Button, obj15);
      }
      items15[2] = tmp22Result;
      obj10.children = items15;
      tmp24Result = closure_30(tmp23, obj10);
      tmp4Result = tmp4(tmp2[38]);
    }
    items13[1] = tmp24Result;
    let tmp24Result3 = null;
    if (memo.length > 0) {
      const obj16 = { style: tmp3.section, children: null };
      const obj17 = { style: tmp3.sectionHeading, children: null };
      const obj18 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl6 = tmp4(tmp2[21]).intl;
      obj18.children = intl6.string(tmp(tmp2[22]).Bo5fE3);
      const items16 = [closure_29(tmp4(tmp2[40]).Text, obj18)];
      const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl7 = tmp4(tmp2[21]).intl;
      obj19.children = intl7.string(tmp(tmp2[22]).YnAFtT);
      items16[1] = closure_29(tmp4(tmp2[40]).Text, obj19);
      obj17.children = items16;
      const items17 = [closure_30(tmp23, obj17)];
      const obj20 = {
        hasIcons: true,
        children: memo.map((project) =>
          closure_1_29(
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
      items17[1] = closure_29(tmp4(tmp2[46]).TableRowGroup, obj20);
      obj16.children = items17;
      tmp24Result3 = closure_30(tmp23, obj16);
    }
    items13[2] = tmp24Result3;
    let tmp24Result4 = null;
    if (memo1.length > 0) {
      const obj21 = { style: tmp3.section, children: null };
      const obj22 = { style: tmp3.sectionHeading, children: null };
      const obj23 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl8 = tmp4(tmp2[21]).intl;
      obj23.children = intl8.string(tmp(tmp2[22]).jrCnUc);
      const items18 = [closure_29(tmp4(tmp2[40]).Text, obj23)];
      const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl9 = tmp4(tmp2[21]).intl;
      obj24.children = intl9.string(tmp(tmp2[22])["1KEhDu"]);
      items18[1] = closure_29(tmp4(tmp2[40]).Text, obj24);
      obj22.children = items18;
      const items19 = [closure_30(tmp23, obj22)];
      const obj25 = {
        hasIcons: true,
        children: memo1.map((project) =>
          closure_1_29(
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
      items19[1] = closure_29(tmp4(tmp2[46]).TableRowGroup, obj25);
      obj21.children = items19;
      tmp24Result4 = closure_30(tmp23, obj21);
    }
    items13[3] = tmp24Result4;
    items13[4] = null;
    obj7.children = items13;
    obj6.children = closure_30(callback2, obj7);
    return closure_29(closure_9, obj6);
  } else {
    const obj26 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj27 = { style: tmp3.listError, children: null };
          const obj28 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[21]).intl;
          obj28.children = intl.string(tmp(tmp2[22])["IN/HRP"]);
          const items20 = [closure_29(tmp4(tmp2[40]).Text, obj28)];
          const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[21]).intl;
          obj29.text = intl2.string(tmp(tmp2[22])["42EdIV"]);
          obj29.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_29(tmp4(tmp2[41]).Button, obj29);
          obj27.children = items20;
          let tmp16Result2 = closure_30(tmp17, obj27);
        } else {
          const obj30 = { style: tmp3.listError, children: null };
          const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl10 = tmp4(tmp2[21]).intl;
          obj31.children = intl10.string(tmp(tmp2[22])["vqy+in"]);
          const items21 = [closure_29(tmp4(tmp2[40]).Text, obj31)];
          const obj32 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl11 = tmp4(tmp2[21]).intl;
          obj32.text = intl11.string(tmp4(tmp2[21]).t.CumH4u);
          obj32.onPress = callback1;
          items21[1] = closure_29(tmp4(tmp2[41]).Button, obj32);
          obj30.children = items21;
          tmp16Result2 = closure_30(tmp17, obj30);
        }
      }
      obj26.children = tmp16Result2;
      closure_29(tmp17, obj26);
    }
    tmp16Result2 = closure_29(memo2, {});
  }
  const obj5 = guildId(navigation[38]);
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let data;
  let availability;
  setMode = undefined;
  c15 = undefined;
  let result1;
  let onReviewPermissions;
  c18 = undefined;
  closure_19 = undefined;
  let active;
  let vibegrationsControlActive;
  let guild_id;
  closure_23 = undefined;
  c24 = undefined;
  let callback1;
  let num2;
  let activeIndex;
  let setActiveIndex;
  let first1;
  closure_30 = undefined;
  let callback3;
  projectGuildId = undefined;
  let callback4;
  let memo2;
  let callback5;
  let callback6;
  __initData = undefined;
  let callback7;
  let callback8;
  let setting;
  let callback9;
  let callback10;
  closure_43 = undefined;
  let callback11;
  let callback12;
  let stateFromStores3;
  let preview;
  let memo3;
  navigation = guildId(navigation[29]).useNavigation();
  const bottom = projectId(navigation[28])().bottom;
  let tmp5 = projectGuildId(bottom);
  asyncGeneratorStep = tmp5;
  const tmp6 = projectId(navigation[47])();
  noop = tmp6;
  let obj = guildId(navigation[29]);
  let fn = function h() {
    return { paddingBottom: Math.max(closure_5.get(), bottom) };
  };
  fn.__closure = { keyboardHeight: tmp6, safeAreaBottom: bottom };
  fn.__workletHash = 2974418984539;
  fn.__initData = __initData;
  const animatedStyle = guildId(navigation[48]).useAnimatedStyle(fn);
  let obj2 = guildId(navigation[48]);
  let items = [guild_id];
  const items1 = [projectId];
  const stateFromStores = guildId(navigation[20]).useStateFromStores(
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
  let obj3 = guildId(navigation[20]);
  const tmp8 = guild_id;
  const items2 = [guild_id];
  const items3 = [projectId];
  const stateFromStoresObject = guildId(navigation[20]).useStateFromStoresObject(
    items2,
    () => {
      const project = VibegrationsProjectStore.getProject(projectId);
      const obj = {
        projectExists: null != project,
        projectName: null,
        projectGuildId: null,
        previewAppId: null,
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
      let tmp5 = null != project;
      if (tmp5) {
        tmp5 = canPublishProject(project);
      }
      obj.canPublish = tmp5;
      return obj;
    },
    items3,
  );
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const canPublish = stateFromStoresObject.canPublish;
  let obj4 = guildId(navigation[20]);
  const items4 = [guild_id];
  const items5 = [guildId];
  const stateFromStores1 = guildId(navigation[20]).useStateFromStores(
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
  let obj5 = guildId(navigation[20]);
  const items6 = [guild_id];
  const items7 = [projectId];
  const stateFromStores2 = guildId(navigation[20]).useStateFromStores(
    items6,
    () => {
      let integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
      if (integrationStatus == null) {
        integrationStatus = null;
      }
      return integrationStatus;
    },
    items7,
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
  let obj6 = guildId(navigation[20]);
  let application = guildId(navigation[19]).useApplication(previewAppId);
  data = application.data;
  const tmpResult = guildId(navigation[19]);
  let obj7 = {
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
  obj7.declaredActivity = true === has_activity;
  obj7.installScope = install_scope;
  let prop;
  if (stateFromStores2 != null) {
    prop = stateFromStores2.owner_authorization_revoked;
  }
  obj7.ownerAuthorizationRevoked = true === prop;
  const vibegrationsPreviewMode = guildId(navigation[49]).useVibegrationsPreviewMode(obj7);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const tmpResult7 = guildId(navigation[49]);
  const obj8 = {
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
  obj8.integrationInstalled = prop1;
  let prop2;
  if (stateFromStores2 != null) {
    prop2 = stateFromStores2.bot_permissions_changed;
  }
  obj8.botPermissionsChanged = true === prop2;
  let result = guildId(navigation[50]).requiresPermissionReview(obj8);
  c15 = result;
  const items8 = [projectId];
  const effect = noop.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {});
  }, items8);
  const tmp25 = null != previewAppId && null != projectId(navigation[51])(previewAppId);
  const tmpResult8 = guildId(navigation[50]);
  result1 = guildId(navigation[52]).vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
  const items9 = [result1, previewAppId, data, stateFromStores, projectId];
  onReviewPermissions = obj12.useCallback(
    asyncGeneratorStep(async () => {
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
                  application = application(tmp2[19]).fetchApplication(previewAppId);
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
            const result = c0(16274).repairVibegrationsGuildHints(closure_1_6, closure_1_16);
            const obj = c0(16274);
            result.finally(() => application(8496).getProject(closure_1_1)).catch(() => {});
          };
          let result = application3(tmp2[53]).openVibegrationsAppInstallModal(obj7);
          const obj2 = application3(tmp2[53]);
        } catch (tmp27) {
          c5 = tmp;
          throw tmp27;
        }
      }
    }),
    items9,
  );
  const tmpResult9 = guildId(navigation[52]);
  [tmp30, tmp31] = bottom(noop.useState(true), 2);
  c18 = tmp31;
  let tmp32 = null;
  if (null != stateFromStores2) {
    tmp32 = tmp19;
  }
  const tmp29 = bottom(noop.useState(true), 2);
  [tmp34, tmp35] = bottom(noop.useState(tmp32), 2);
  const tmp28Result3 = bottom(noop.useState(projectId), 2);
  if (tmp28Result3[0] !== projectId) {
    tmp28Result3[1](projectId);
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
  closure_19 = tmp43;
  active = result1(projectId).active;
  const tmp28Result = bottom(noop.useState(tmp32), 2);
  vibegrationsControlActive = guildId(navigation[54]).useVibegrationsControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult10 = guildId(navigation[54]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[55])(guild_id, application_id);
  closure_23 = tmp4ResultResult;
  const items10 = [tmp4ResultResult, guild_id];
  const memo = obj12.useMemo(() => {
    let fn = null;
    if (null != closure_23) {
      fn = () => guildId(navigation[18]).transitionTo(callback1.CHANNEL(guild_id, closure_1_23));
    }
    return fn;
  }, items10);
  let intl = tmp(tmp2[21]).intl;
  const tmp4Result4 = projectId(navigation[22]);
  if (vibegrationsControlActive) {
    let bfQ4Ki = tmp4Result4.bfQ4Ki;
  } else {
    bfQ4Ki = active ? tmp4Result4.rfNEHn : tmp4Result4.lXcEa2;
  }
  const stringResult = intl.string(bfQ4Ki);
  c24 = stringResult;
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
        const obj = { id, label: guildId(navigation[56]).getPreviewModeLabel(id), page: null };
        return obj;
      }),
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
  const tmp4Result = projectId(navigation[55]);
  const tmpResult11 = guildId(navigation[58]);
  const segmentedControlState = tmpResult11.useSegmentedControlState({
    items: memo1,
    pageWidth: projectId(navigation[57])().width - 2 * callback4,
    onSetActiveIndex: callback2,
  });
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
  const effect2 = obj12.useEffect(
    () =>
      null != previewAppId ? () => guildId(navigation[59]).leaveVibegrationsPreviewFrame(previewAppId) : undefined,
    items15,
  );
  const tmp28Result4 = bottom(noop.useState(false), 2);
  first1 = tmp28Result4[0];
  closure_30 = tmp28Result4[1];
  const items16 = [guildId, onReviewPermissions, result, projectId, first1];
  callback3 = obj12.useCallback(() => {
    if (!first1) {
      const project = VibegrationsProjectStore.getProject(projectId);
      if (null != project) {
        const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true === preview_ready) {
          if (c15) {
            callback().catch(() => {});
            const promise9 = callback();
          } else {
            closure_30(true);
            if ("user" !== project.install_scope) {
              const promise5 = closure_2_19(projectId);
              promise5.catch(() => {});
              const nextPromise = closure_2_20(projectId).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = guildId(navigation[21]).intl;
                  const error = new Error(intl.string(projectId(navigation[22]).fNP6Cd));
                  throw error;
                } else {
                  const result = guildId(navigation[42]).refreshPublishedProject(closure_1_1, { isPreview: false });
                  result.catch(() => {});
                  const obj = guildId(navigation[42]);
                }
              });
              const promise6 = closure_2_20(projectId);
              nextPromise.catch(() => {}).finally(() => closure_1_30(false));
              const catchPromise2 = nextPromise.catch(() => {});
              guild_id = project.guild_id;
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
              obj3.content = __initData7(VibegrationsPublishNotesSheetDefault, obj6);
              obj3.key = VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
              obj2.showActionSheet(obj3);
            } else {
              const nextPromise1 = closure_2_20(projectId).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = guildId(navigation[21]).intl;
                  const error = new Error(intl.string(projectId(navigation[22]).fNP6Cd));
                  throw error;
                } else {
                  const result = guildId(navigation[42]).refreshPublishedProject(closure_1_1, { isPreview: false });
                  result.catch(() => {});
                  const obj = guildId(navigation[42]);
                }
              });
              const promise = closure_2_20(projectId);
              nextPromise1.catch(() => {}).finally(() => closure_1_30(false));
              const catchPromise3 = nextPromise1.catch(() => {});
              nextPromise1
                .then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1115).intl;
                  obj2.content = intl.string(projectId(3715).wA0o0L);
                  projectId(4528).open(obj2);
                })
                .catch((error) => {
                  if (error instanceof Error) {
                    let message = error.message;
                  } else {
                    const intl = guildId(1115).intl;
                    message = intl.string(projectId(3715).fNP6Cd);
                  }
                  projectId(4528).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
                  const obj = projectId(4528);
                });
              const nextPromise2 = nextPromise1.then(() => {
                const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                const intl = guildId(1115).intl;
                obj2.content = intl.string(projectId(3715).wA0o0L);
                projectId(4528).open(obj2);
              });
            }
          }
        } else {
          VibegrationsPublishBlockedSheetDefault(
            vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.NO_PREVIEW,
          );
        }
      }
    }
  }, items16);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items17 = [projectId, projectGuildId];
  callback4 = obj12.useCallback(() => {
    const obj2 = {
      content: __initData7(VibegrationsSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items17);
  const items18 = [guildId, navigation];
  memo2 = obj12.useMemo(() => {
    closure_0 = guildId;
    const f119755 = (projectId) => navigation.push(memo2.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f119755(arg0);
      } else {
        guildId(navigation[18]).transitionTo(callback1.CHANNEL(arg1, num2.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[18]);
      }
    };
  }, items18);
  const items19 = [guildId, memo2, stateFromStores];
  callback5 = obj12.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo2 };
      obj2.content = __initData7(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items19);
  const items20 = [projectId];
  callback6 = obj12.useCallback(() => {
    const obj2 = {
      key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY,
      content: __initData7(VibegrationsConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items20);
  __initData = obj12.useRef(false);
  const items21 = [projectId];
  callback7 = obj12.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3715.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = __initData(projectId, sha.sha);
      __initData(projectId, sha.sha)
        .then(
          () => {
            const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
            const intl = guildId(1115).intl;
            obj2.content = intl.string(projectId(3715).u8g2Od);
            obj2.IconComponent = guildId(14638).UndoIcon;
            projectId(4528).open(obj2);
          },
          () => {
            const intl = guildId(1115).intl;
            guildId(4527).presentError(intl.string(projectId(3715).q6iZ84));
          },
        )
        .finally(() => {
          ref.current = false;
        });
      const nextPromise = __initData(projectId, sha.sha).then(
        () => {
          const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
          const intl = guildId(1115).intl;
          obj2.content = intl.string(projectId(3715).u8g2Od);
          obj2.IconComponent = guildId(14638).UndoIcon;
          projectId(4528).open(obj2);
        },
        () => {
          const intl = guildId(1115).intl;
          guildId(4527).presentError(intl.string(projectId(3715).q6iZ84));
        },
      );
    }
  }, items21);
  const items22 = [callback7, projectId];
  callback8 = obj12.useCallback(() => {
    const obj2 = {
      key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY,
      content: __initData7(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback7 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  const DeveloperMode = tmp(tmp2[68]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items23 = [navigation, projectId];
  callback9 = obj12.useCallback(() => navigation.push(memo2.DEBUG, { projectId }), items23);
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items24 = [install_scope1, projectId];
  callback10 = obj12.useCallback(() => {
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
    obj2.content = __initData7(VibegrationsRestorePointsSheetDefault, obj3);
    obj.showActionSheet(obj2);
  }, items24);
  const tmp77 = activeIndex(projectId(navigation[70])(previewAppId, setActiveIndex));
  closure_43 = tmp77;
  const items25 = [previewAppId];
  callback11 = obj12.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items25);
  const items26 = [navigation, projectId];
  callback12 = obj12.useCallback(() => {
    collapsedCategories(projectId);
    navigation.goBack();
  }, items26);
  const obj9 = {
    items: memo1,
    pageWidth: projectId(navigation[57])().width - 2 * callback4,
    onSetActiveIndex: callback2,
  };
  const items27 = [tmp8];
  const items28 = [projectId];
  stateFromStores3 = guildId(navigation[20]).useStateFromStores(
    items27,
    () => VibegrationsProjectStore.isProjectDeleting(projectId),
    items28,
  );
  const items29 = [stateFromStores3, callback12];
  const effect3 = obj12.useEffect(() => {
    if (stateFromStores3) {
      callback12();
    }
  }, items29);
  let obj10 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult12 = guildId(navigation[20]);
  let tmp83 = null;
  if (modes2.includes("widget")) {
    tmp83 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp83 = widgetApplicationId;
    }
  }
  obj10.refreshApplicationId = tmp83;
  const tmp4Result2Result = projectId(navigation[72])(obj10);
  preview = tmp4Result2Result;
  const items30 = [
    canPublish,
    setting,
    guildId,
    callback12,
    callback6,
    callback9,
    callback5,
    callback4,
    callback10,
    callback8,
    callback3,
    callback11,
    tmp77,
    tmp4Result2Result,
    stateFromStores,
  ];
  memo3 = obj12.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3715["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback3;
      items.push(obj);
    }
    const obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3715.cWmjzs);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback4;
    items.push(obj2);
    if (setting) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(_modDef3715.KampIf);
      obj3.IconComponent = BugIcon.BugIcon;
      obj3.action = callback9;
      items.push(obj3);
    }
    if (null != stateFromStores) {
      const obj6 = {
        project: tmp18,
        guildId,
        onRemix: callback5,
        onConnectTool: callback6,
        onVersionHistory: callback8,
        onRestorePoints: callback10,
        onRefresh: null,
        onClose: null,
        preview: null,
      };
      let tmp19;
      if (closure_43) {
        tmp19 = callback11;
      }
      obj6.onRefresh = tmp19;
      obj6.onClose = callback12;
      obj6.preview = preview;
      const result = vibegrationsProjectActions.vibegrationsProjectActions(obj6);
      const iter = result[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let obj10 = { label: null, IconComponent: null, variant: null, action: null };
        ({ label: obj4.label, IconComponent: obj4.IconComponent } = nextResult);
        let str2;
        let tmp27 = nextResult;
        if (true === nextResult.destructive) {
          str2 = "destructive";
        }
        obj10.variant = str2;
        obj10.action = tmp27.action;
        let arr7 = items.push(obj10);
        continue;
      }
    }
    return items;
  }, items30);
  const items31 = [
    vibegrationsControlActive,
    active,
    stringResult,
    tmp43,
    callback1,
    navigation,
    memo3,
    projectExists,
    projectName,
    stateFromStores1,
    tmp5,
  ];
  const effect4 = obj12.useEffect(() => {
    if (projectName != null) {
      const title = projectName;
      let obj = {
        headerTitle() {
          return __initData7(NavigatorHeader.NavigatorHeader, { title });
        },
        headerRight() {
          let tmp = null;
          if (projectExists) {
            let obj = { style: headerActions.headerActions, children: null };
            if (!closure_1_19) {
              items = [null];
              const obj2 = {
                items,
                align: "below",
                children(arg0) {
                  ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                  const obj = {
                    ref,
                    IconComponent: title(7365).MoreHorizontalIcon,
                    onPress,
                    accessibilityLabel: null,
                    accessibilityActions: null,
                    onAccessibilityAction: null,
                  };
                  const intl = title(1115).intl;
                  obj.accessibilityLabel = intl.string(title(1115).t["UKOtz+"]);
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  return closure_1_29(closure_1_1(16240), obj);
                },
              };
              items[1] = first1(guildId(navigation[78]).ContextMenu, obj2);
              obj.children = items;
              tmp = tmp2(tmp3, obj);
            } else {
              let obj3 = navigation;
              if (active) {
                let VibegrationsSelectModeActiveIcon = guildId(obj3[77]).VibegrationsSelectModeActiveIcon;
              } else {
                VibegrationsSelectModeActiveIcon = projectId(obj3[77]);
              }
              obj3 = {
                IconComponent: VibegrationsSelectModeActiveIcon,
                onPress,
                accessibilityLabel,
                accessibilityState: null,
                disabled: null,
              };
              const obj4 = { selected: active };
              obj3.accessibilityState = obj4;
              obj3.disabled = disabled;
              first1(projectId(navigation[26]), obj3);
              const tmp9 = projectId(navigation[26]);
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
          let Xmvb23 = projectId(tmp2[22]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[22]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items31);
  const items32 = [guildId, projectId];
  const effect5 = obj12.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[42]).setSelectedProjectForGuild(closure_1_0, null);
  }, items32);
  const items33 = [projectId];
  const effect6 = obj12.useEffect(() => () => projectId(navigation[79])(closure_1_1), items33);
  if (projectExists) {
    if (paneHidden) {
      if ("bot" === activeMode) {
        let contentBare = tmp5.contentBare;
      }
      const obj11 = { style: contentBare, children: null };
      let tmp97 = null;
      if (tmp40) {
        const obj13 = { style: tmp5.segments, children: null };
        const obj14 = { state: segmentedControlState, variant: "experimental_Small" };
        obj13.children = first1(tmp(tmp2[80]).SegmentedControl, obj14);
        tmp97 = first1(previewAppId, obj13);
      }
      const items34 = [tmp97];
      const obj15 = { style: tmp5.panes, children: null };
      let tmp102Result = null;
      if (hasItem) {
        tmp102Result = null;
        if (null != previewAppId) {
          const obj16 = {
            style: tmp43 ? tmp5.pane : tmp5.paneBackstage,
            pointerEvents: null,
            accessibilityElementsHidden: null,
            importantForAccessibility: null,
            children: null,
          };
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
          obj16.children = first1(tmp(tmp2[59]).PreviewFrame, obj17);
          tmp102Result = tmp102(tmp100, obj16);
        }
      }
      const items35 = [tmp102Result, ,];
      let tmp104Result = null;
      if (paneHidden) {
        tmp104Result = null;
        if (null != previewAppId) {
          tmp104Result = null;
          if (!tmp43) {
            const obj18 = { style: tmp5.pane, children: null };
            const obj19 = {
              projectId,
              previewApplicationId: previewAppId,
              mode: activeMode,
              availability,
              widgetApplicationId,
              frameHostAvailable: tmp25,
              permissionsGate: null,
            };
            let tmp106 = null;
            if (result) {
              const obj20 = { onReviewPermissions, loading: application.isLoading };
              tmp106 = obj20;
            }
            obj19.permissionsGate = tmp106;
            obj18.children = first1(tmp4(tmp2[59]), obj19);
            tmp104Result = tmp104(tmp100, obj18);
            const tmp4Result6 = tmp4(tmp2[59]);
          }
        }
      }
      items35[1] = tmp104Result;
      const items36 = [tmp5.pane];
      if (paneHidden) {
        paneHidden = tmp5.paneHidden;
      }
      const obj21 = { style: null, children: null };
      items36[1] = paneHidden;
      obj21.style = items36;
      const obj22 = { projectId };
      obj21.children = first1(tmp4(tmp2[81]), obj22);
      items35[2] = first1(previewAppId, obj21);
      obj15.children = items35;
      items34[1] = tmp95(previewAppId, obj15);
      obj11.children = items34;
      let tmp89Result1 = tmp95(tmp96, obj11);
    }
    contentBare = [tmp5.contentBare, animatedStyle];
  } else {
    const obj23 = { style: null, children: null };
    const items37 = [,];
    ({ content: arr36[0], centered: arr36[1] } = tmp5);
    obj23.style = items37;
    if (stateFromStores1) {
      let tmp89Result = tmp89(stateFromStores, {});
    } else {
      const obj24 = { style: tmp5.listError, children: null };
      const obj25 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[21]).intl;
      obj25.children = intl2.string(tmp4(tmp2[22]).F2dRba);
      const items38 = [tmp89(tmp(tmp2[40]).Text, obj25), ,];
      const obj26 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl3 = tmp(tmp2[21]).intl;
      obj26.children = intl3.string(tmp4(tmp2[22]).GnEJ3o);
      items38[1] = tmp89(tmp(tmp2[40]).Text, obj26);
      const obj27 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp(tmp2[21]).intl;
      obj27.text = intl4.string(tmp4(tmp2[22])["42EdIV"]);
      obj27.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items38[2] = tmp89(tmp(tmp2[41]).Button, obj27);
      obj24.children = items38;
      tmp89Result = closure_30(tmp90, obj24);
    }
    obj23.children = tmp89Result;
    tmp89Result1 = tmp89(tmp90, obj23);
  }
  return tmp89Result1;
}
function RoutedProjectOpener(projectId) {
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  const openedProjectIdRef = projectId.openedProjectIdRef;
  const navigation = projectId(openedProjectIdRef[29]).useNavigation();
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
({
  ActivityIndicator: metroRequire,
  Keyboard: closure_7,
  ScrollView: closure_8,
  View: closure_9,
} = get_ActivityIndicator);
const vibegrationsDesignFeedbackStore = fn(16237);
({
  enterVibegrationsDesignFeedback: closure_14,
  exitVibegrationsDesignFeedback: closure_15,
  useVibegrationsDesignFeedback: closure_16,
} = vibegrationsDesignFeedbackStore);
const VibegrationsConnectionStore = fn(12642);
({
  closeConnection: closure_18,
  draftPatchNotes: closure_19,
  publishProject: closure_20,
  restoreSourceHistoryEntry: closure_21,
} = VibegrationsConnectionStore);
const canPublishProject = fn(8495).canPublishProject;
const Constants = fn(1074);
({ Permissions: closure_24, Routes: closure_25 } = Constants);
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const FramesConstants = fn(8500);
({ isLaunched: closure_27, MAIN_SURFACE: closure_28 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30, Fragment: items } = jsxProd);
const createStyles = fn(4836);
let closure_32 = createStyles.createStyles((paddingBottom) => {
  const obj = {
    content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom },
    contentBare: null,
    centered: null,
    listContent: null,
    section: null,
    sectionHeading: null,
    changelog: null,
    changelogEntries: null,
    changelogItem: null,
    listError: null,
    headerActions: null,
    segments: null,
    panes: null,
    pane: null,
    paneHidden: null,
    paneBackstage: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
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
let __initData = {
  code: "function VibegrationsStandaloneScreenTsx1(){const{keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:Math.max(keyboardHeight.get(),safeAreaBottom)};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  noop = undefined;
  const navigation = guildId(stateFromStores[29]).useNavigation();
  let obj = guildId(stateFromStores[29]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[20]).useStateFromStores(
    items,
    () => {
      const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
      return routedProjectId;
    },
    items1,
  );
  let obj2 = guildId(stateFromStores[20]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[20]).useStateFromStores(
    items2,
    () => GuildStore.getGuild(guildId),
    items3,
  );
  let obj3 = guildId(stateFromStores[20]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[82]).useIsVibegrationsGuildEnabled({
    guildId,
    location: "VibegrationsStandaloneScreen",
  });
  const obj4 = guildId(stateFromStores[82]);
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[20]).useStateFromStoresArray(
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
  const obj5 = guildId(stateFromStores[20]);
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[20]).useStateFromStores(
      items6,
      () => {
        const guild = GuildStore.getGuild(guildId);
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
  const obj6 = guildId(stateFromStores[20]);
  obj8.headerLeft = guildId(stateFromStores[76]).getHeaderCloseButton(() => navigation.goBack());
  obj8.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[21]).intl;
    obj.title = intl.string(navigation(stateFromStores[22]).Xmvb23);
    return closure_1_29(guildId(stateFromStores[76]).NavigatorHeader, obj);
  };
  obj8.render = function render() {
    const obj = { children: null };
    const obj2 = { projectId: stateFromStores, sceneProjectId: "Array", openedProjectIdRef };
    const items = [__initData7(RoutedProjectOpener, obj2), __initData7(ProjectList, { guildId })];
    obj.children = items;
    return __initData8(__initData9, obj);
  };
  obj7[constants2.PROJECTS] = obj8;
  obj7[constants2.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [
        __initData7(RoutedProjectOpener, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
        __initData7(ChatScene, { guildId, projectId }),
      ];
      obj.children = items;
      return __initData8(__initData9, obj);
    },
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[21]).intl;
      obj.title = intl.string(navigation(stateFromStores[22]).KampIf);
      return closure_1_29(guildId(stateFromStores[76]).NavigatorHeader, obj);
    },
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [
        __initData7(RoutedProjectOpener, { projectId: stateFromStores, sceneProjectId: projectId, openedProjectIdRef }),
        __initData7(VibegrationsDebugSceneDefault, { projectId }),
      ];
      obj.children = items;
      return __initData8(__initData9, obj);
    },
  };
  const obj10 = {
    screens: obj7,
    initialRouteStack: stateFromStores1(
      noop.useState(() => {
        const items = [{ name: constants.PROJECTS }];
        if (null != stateFromStores) {
          const obj2 = { name: tmp.CHAT, params: null };
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
  let intl = guildId(stateFromStores[21]).intl;
  obj10.headerBackTitle = intl.string(navigation(stateFromStores[22]).Xmvb23);
  return closure_29(guildId(stateFromStores[84]).Navigator, obj10);
}
