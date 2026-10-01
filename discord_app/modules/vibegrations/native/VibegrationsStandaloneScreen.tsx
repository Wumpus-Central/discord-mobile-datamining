// discord_app/modules/vibegrations/native/VibegrationsStandaloneScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import _modDef4450 from "../../../../_runtime/metro/04450__.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import UploadIcon from "../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import TableRowApplicationIconDefault from "../../applications/native/TableRowApplicationIcon.tsx";
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames.tsx";
import UndoIcon from "../../../design/components/Icon/native/redesign/generated/UndoIcon.tsx";
import BugIcon from "../../../design/components/Icon/native/redesign/generated/BugIcon.tsx";
import MentionsBadgeDefault from "../../guild_sidebar/native/MentionsBadge.tsx";
import VibegrationsPublishBlockedSheetDefault from "VibegrationsPublishBlockedSheet.tsx";
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet.tsx";
import VibegrationsHeaderIconButtonDefault from "VibegrationsHeaderIconButton.tsx";
import VibegrationsCreateSheet from "VibegrationsCreateSheet.tsx";
import VibegrationsRemixSheet from "VibegrationsRemixSheet.tsx";
import vibegrationsProjectActions from "vibegrationsProjectActions.tsx";
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet.tsx";
import VibegrationsConnectToolSheet from "VibegrationsConnectToolSheet.tsx";
import VibegrationsVersionHistorySheet from "VibegrationsVersionHistorySheet.tsx";
import VibegrationsRestorePointsSheet from "VibegrationsRestorePointsSheet.tsx";
import VibegrationsDebugSceneDefault from "VibegrationsDebugScene.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VibegrationsBuilderRouteStore from "../stores/VibegrationsBuilderRouteStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

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
  ({ onPress, onMore } = project);
  const tmp = closure_30(0);
  const vibegrationsProjectUnreadStatus = project(16064).useVibegrationsProjectUnreadStatus(project.id);
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const obj = project(16064);
  const data = project(6770).useApplication(application_id).data;
  const tmp2Result = project(6770);
  const items = [VibegrationsProjectStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(
    items,
    () => VibegrationsProjectStore.isProjectDeleting(project.id),
    items1,
  );
  let tmp6 = vibegrationsProjectUnreadStatus === tmp2(16065).VibegrationsReadStateFlags.NEEDS_INPUT;
  if (tmp6) {
    tmp6 = !stateFromStores;
  }
  let formatToPlainStringResult;
  if (null != project.updated_at) {
    const intl = tmp2(1115).intl;
    const obj2 = { time: null };
    const _Date = Date;
    const date = new Date(project.updated_at);
    obj2.time = tmp2(7228).getRelativeTimestamp(date.getTime());
    formatToPlainStringResult = intl.formatToPlainString(_modDef3714.oMDaqr, obj2);
    const tmp2Result4 = tmp2(7228);
  }
  const obj3 = {
    label: project.name,
    subLabel: null,
    accessibilityHint: null,
    disabled: null,
    icon: null,
    trailing: null,
    onPress: null,
  };
  if (stateFromStores) {
    const intl2 = tmp2(1115).intl;
    formatToPlainStringResult = intl2.string(_modDef3714.EwXXks);
  }
  obj3.subLabel = formatToPlainStringResult;
  let stringResult;
  if (tmp6) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(_modDef3714.V3e2Yd);
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
    const obj6 = { IconComponent: tmp2(7538).MoreHorizontalIcon, onPress: onMore, accessibilityLabel: null };
    const intl4 = tmp2(1115).intl;
    obj6.accessibilityLabel = intl4.string(tmp2(1115).t["UKOtz+"]);
    items2[1] = closure_26(VibegrationsHeaderIconButtonDefault, obj6);
    obj5.children = items2;
    tmp13Result = closure_27(closure_9, obj5);
    const tmp19Result = VibegrationsHeaderIconButtonDefault;
  }
  obj3.trailing = tmp13Result;
  obj3.onPress = onPress;
  const children = [closure_26(project(6103).TableRow, obj3)];
  let tmp15Result4 = null;
  if (null != vibegrationsProjectUnreadStatus) {
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
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  let callback;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_30(0);
  importDefault = tmp3;
  navigation = guildId(navigation[37]).useNavigation();
  let obj = guildId(navigation[37]);
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
  const memo = callback.useMemo(() => {
    const found = stateFromStoresArray.filter((item) =>
      guildId(navigation[38]).isVibegrationsProjectInGuild(item, closure_1_0),
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
        f120484(arg0);
      } else {
        guildId(navigation[23]).transitionTo(active.CHANNEL(arg1, vibegrationsControlActive.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[23]);
      }
    };
  }, items7);
  const items8 = [guildId, memo2];
  const callback1 = callback.useCallback(() => {
    const obj2 = {
      key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY,
      content: dependencyMap(VibegrationsCreateSheetDefault, { guildId, onCreated: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items8);
  const items9 = [guildId, memo2];
  const callback2 = callback.useCallback((project) => {
    const obj2 = {
      key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY,
      content: dependencyMap(VibegrationsRemixSheetDefault, { project, currentGuildId: guildId, onRemixed: memo2 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items9);
  const items10 = [guildId, callback, callback2];
  closure_9 = callback.useCallback((project) => {
    guildId = project;
    const result = guildId(navigation[41]).vibegrationsProjectActions({
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
      },
    });
    let obj = guildId(navigation[41]);
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
      },
    };
    let obj3 = guildId(navigation[43]);
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
        const obj = { IconComponent: guildId(navigation[44]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[28]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[28]).t.CumH4u);
        return closure_2_26(closure_1(navigation[34]), obj);
      },
    });
  }, items11);
  const obj4 = guildId(navigation[26]);
  let result = guildId(navigation[45]).recentVibegrationsChangelog("mobile");
  let tmp15 = memo.length > 0;
  const callback3 = callback.useCallback(() => {
    const obj = guildId(navigation[17]);
    obj.showActionSheet({
      content: closure_1_26(closure_1(navigation[46]), {}),
      key: guildId(navigation[46]).VIBEGRATIONS_CHANGELOG_SHEET_KEY,
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
    const obj8 = { paddingBottom: tmp(tmp2[22]).space.PX_8 + bottom };
    items12[1] = obj8;
    obj7.contentContainerStyle = items12;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    const items13 = [closure_26(tmp(tmp2[50]), {}), , , ,];
    let tmp24Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[28]).intl;
      obj12.children = intl3.string(tmp(tmp2[29]).x07mpp);
      const items14 = [closure_26(tmp4(tmp2[47]).Text, obj12)];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[28]).intl;
      obj13.children = intl4.string(tmp(tmp2[29]).h5CwHI);
      items14[1] = closure_26(tmp4(tmp2[47]).Text, obj13);
      obj11.children = items14;
      const items15 = [closure_27(tmp23, obj11), ,];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
          const obj = { style: closure_1.changelogItem, children: null };
          const items = [DateUtils.dateFormat(_modDef4450(children.date, "YYYY-MM-DD"), "LL")];
          let combined = null;
          if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
            const intl = util.intl;
            const _HermesInternal = HermesInternal;
            combined = " \u00B7 " + intl.string(_modDef3714["CLX+p/"]);
          }
          items[1] = combined;
          const items1 = [
            __initData5(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
            dependencyMap(Text_Text.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              children: children.summary,
            }),
          ];
          obj.children = items1;
          return __initData5(React7, obj, "" + children.date + "-" + children.summary);
        }),
      };
      items15[1] = closure_26(tmp23, obj14);
      let tmp22Result = null;
      if (tmp4Result.hasMoreVibegrationsChangelog("mobile")) {
        const obj15 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl5 = tmp4(tmp2[28]).intl;
        obj15.text = intl5.string(tmp(tmp2[29]).YWxThz);
        obj15.onPress = callback3;
        tmp22Result = closure_26(tmp4(tmp2[48]).Button, obj15);
      }
      items15[2] = tmp22Result;
      obj10.children = items15;
      tmp24Result = closure_27(tmp23, obj10);
      tmp4Result = tmp4(tmp2[45]);
    }
    items13[1] = tmp24Result;
    let tmp24Result3 = null;
    if (memo.length > 0) {
      const obj16 = { style: tmp3.section, children: null };
      const obj17 = { style: tmp3.sectionHeading, children: null };
      const obj18 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl6 = tmp4(tmp2[28]).intl;
      obj18.children = intl6.string(tmp(tmp2[29]).Bo5fE3);
      const items16 = [closure_26(tmp4(tmp2[47]).Text, obj18)];
      const obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl7 = tmp4(tmp2[28]).intl;
      obj19.children = intl7.string(tmp(tmp2[29]).YnAFtT);
      items16[1] = closure_26(tmp4(tmp2[47]).Text, obj19);
      obj17.children = items16;
      const items17 = [closure_27(tmp23, obj17)];
      const obj20 = {
        hasIcons: true,
        children: memo.map((project) =>
          closure_1_26(
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
      items17[1] = closure_26(tmp4(tmp2[53]).TableRowGroup, obj20);
      obj16.children = items17;
      tmp24Result3 = closure_27(tmp23, obj16);
    }
    items13[2] = tmp24Result3;
    let tmp24Result4 = null;
    if (memo1.length > 0) {
      const obj21 = { style: tmp3.section, children: null };
      const obj22 = { style: tmp3.sectionHeading, children: null };
      const obj23 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl8 = tmp4(tmp2[28]).intl;
      obj23.children = intl8.string(tmp(tmp2[29]).jrCnUc);
      const items18 = [closure_26(tmp4(tmp2[47]).Text, obj23)];
      const obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl9 = tmp4(tmp2[28]).intl;
      obj24.children = intl9.string(tmp(tmp2[29])["1KEhDu"]);
      items18[1] = closure_26(tmp4(tmp2[47]).Text, obj24);
      obj22.children = items18;
      const items19 = [closure_27(tmp23, obj22)];
      const obj25 = {
        hasIcons: true,
        children: memo1.map((project) =>
          closure_1_26(
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
      items19[1] = closure_26(tmp4(tmp2[53]).TableRowGroup, obj25);
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
          let intl = tmp4(tmp2[28]).intl;
          obj28.children = intl.string(tmp(tmp2[29])["IN/HRP"]);
          const items20 = [closure_26(tmp4(tmp2[47]).Text, obj28)];
          const obj29 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[28]).intl;
          obj29.text = intl2.string(tmp(tmp2[29])["42EdIV"]);
          obj29.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items20[1] = closure_26(tmp4(tmp2[48]).Button, obj29);
          obj27.children = items20;
          let tmp16Result2 = closure_27(tmp17, obj27);
        } else {
          const obj30 = { style: tmp3.listError, children: null };
          const obj31 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl10 = tmp4(tmp2[28]).intl;
          obj31.children = intl10.string(tmp(tmp2[29])["vqy+in"]);
          const items21 = [closure_26(tmp4(tmp2[47]).Text, obj31)];
          const obj32 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl11 = tmp4(tmp2[28]).intl;
          obj32.text = intl11.string(tmp4(tmp2[28]).t.CumH4u);
          obj32.onPress = callback1;
          items21[1] = closure_26(tmp4(tmp2[48]).Button, obj32);
          obj30.children = items21;
          tmp16Result2 = closure_27(tmp17, obj30);
        }
      }
      obj26.children = tmp16Result2;
      closure_26(tmp17, obj26);
    }
    tmp16Result2 = closure_26(memo2, {});
  }
  const obj5 = guildId(navigation[45]);
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
  __initData = undefined;
  let callback6;
  let callback7;
  let setting;
  let callback8;
  let callback9;
  closure_43 = undefined;
  let callback10;
  let callback11;
  let stateFromStores3;
  let preview;
  let memo4;
  navigation = guildId(navigation[37]).useNavigation();
  const bottom = projectId(navigation[36])().bottom;
  const tmp5 = setActiveIndex(bottom);
  _slicedToArray = tmp5;
  const tmp6 = projectId(navigation[54])();
  noop = tmp6;
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  closure_6 = tmp9;
  let obj = guildId(navigation[37]);
  let obj4 = { onEnd: null };
  let fn = function p(height) {
    ReanimatedRexport.runOnJS(closure_6)(Math.max(0, height.height - bottom));
  };
  let obj3 = guildId(navigation[55]);
  fn.__closure = { runOnJS: guildId(navigation[56]).runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  fn.__workletHash = 5473330359402;
  fn.__initData = callback4;
  obj4.onEnd = fn;
  let items = [bottom];
  obj3.useKeyboardHandler(obj4, items);
  let obj5 = { runOnJS: guildId(navigation[56]).runOnJS, setChatKeyboardCover: tmp8[1], safeAreaBottom: bottom };
  const items1 = [closure_20];
  const items2 = [projectId];
  const stateFromStores = guildId(navigation[26]).useStateFromStores(
    items1,
    () => {
      let project = VibegrationsProjectStore.getProject(projectId);
      if (project == null) {
        project = null;
      }
      return project;
    },
    items2,
  );
  let obj6 = guildId(navigation[26]);
  const tmp11 = closure_20;
  const items3 = [closure_20];
  const items4 = [projectId];
  const stateFromStoresObject = guildId(navigation[26]).useStateFromStoresObject(
    items3,
    () => {
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
    },
    items4,
  );
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  let obj7 = guildId(navigation[26]);
  const items5 = [closure_20];
  const items6 = [guildId];
  const stateFromStores1 = guildId(navigation[26]).useStateFromStores(
    items5,
    () => {
      const guildProjectsFetchState = VibegrationsProjectStore.getGuildProjectsFetchState(guildId);
      let tmp2 = "unattempted" === guildProjectsFetchState;
      if (!tmp2) {
        tmp2 = "loading" === guildProjectsFetchState;
      }
      return tmp2;
    },
    items6,
  );
  const obj8 = guildId(navigation[26]);
  const items7 = [closure_20];
  const items8 = [projectId];
  const stateFromStores2 = guildId(navigation[26]).useStateFromStores(
    items7,
    () => {
      let integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
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
  const obj9 = guildId(navigation[26]);
  let application = guildId(navigation[25]).useApplication(previewAppId);
  data = application.data;
  isLoading = application.isLoading;
  const tmpResult = guildId(navigation[25]);
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
  const vibegrationsPreviewMode = guildId(navigation[57]).useVibegrationsPreviewMode(obj10);
  availability = vibegrationsPreviewMode.availability;
  ({ activeMode, setMode } = vibegrationsPreviewMode);
  ({ widgetApplicationId, isResolving } = vibegrationsPreviewMode);
  const tmpResult9 = guildId(navigation[57]);
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
  let result = guildId(navigation[58]).requiresPermissionReview(obj11);
  const items9 = [projectId];
  const effect = obj2.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {});
  }, items9);
  const tmp28 = null != previewAppId && null != projectId(navigation[59])(previewAppId);
  const tmpResult10 = guildId(navigation[58]);
  result1 = guildId(navigation[60]).vibegrationsInstallGuildId(stateFromStores, stateFromStores2, guildId);
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
                  application = application(tmp2[25]).fetchApplication(previewAppId);
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
            const result = c0(16504).repairVibegrationsGuildHints(closure_1_7, closure_1_17);
            const obj = c0(16504);
            result.finally(() => application(8687).getProject(closure_1_1)).catch(() => {});
          };
          let result = application3(tmp2[61]).openVibegrationsAppInstallModal(obj7);
          const obj2 = application3(tmp2[61]);
        } catch (tmp27) {
          c5 = tmp;
          throw tmp27;
        }
      }
    }),
    items10,
  );
  const tmpResult11 = guildId(navigation[60]);
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
  class Pe {
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
  Pe.__closure = { previewShowing: paneHidden, botFaceShowing: tmp46, keyboardHeight: tmp6, safeAreaBottom: bottom };
  Pe.__workletHash = 16923985087724;
  Pe.__initData = callback5;
  const animatedStyle = guildId(navigation[56]).useAnimatedStyle(Pe);
  const tmpResult12 = guildId(navigation[56]);
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
  fe.__workletHash = 13517025290791;
  fe.__initData = __initData;
  const animatedStyle1 = guildId(navigation[56]).useAnimatedStyle(fe);
  active = setMode(projectId).active;
  const tmpResult13 = guildId(navigation[56]);
  vibegrationsControlActive = guildId(navigation[62]).useVibegrationsControlActive(projectId);
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let application_id;
  const tmpResult14 = guildId(navigation[62]);
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const tmp4ResultResult = projectId(navigation[63])(guild_id, application_id);
  closure_25 = tmp4ResultResult;
  const items11 = [tmp4ResultResult, guild_id];
  const memo = obj2.useMemo(() => {
    let fn = null;
    if (null != closure_25) {
      fn = () => guildId(navigation[23]).transitionTo(active.CHANNEL(guild_id, closure_1_25));
    }
    return fn;
  }, items11);
  let intl = tmp(tmp2[28]).intl;
  const tmp4Result4 = projectId(navigation[29]);
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
      __initData(projectId);
    } else {
      closure_2_14(projectId);
    }
  }, items12);
  const items13 = [availability.modes];
  const items14 = [availability.modes, setMode];
  const memo1 = obj2.useMemo(() => {
    let obj = { id: "chat", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3714.kWtsyP);
    const items = [
      obj,
      ...modes.map((id) => {
        const obj = { id, label: guildId(navigation[64]).getPreviewModeLabel(id), page: null };
        return obj;
      }),
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
  const tmp4Result = projectId(navigation[63]);
  const tmpResult15 = guildId(navigation[66]);
  const segmentedControlState = tmpResult15.useSegmentedControlState({
    items: memo1,
    pageWidth: projectId(navigation[65])().width - 2 * closure_31,
    onSetActiveIndex: callback2,
  });
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
  const effect2 = obj2.useEffect(
    () =>
      null != previewAppId ? () => guildId(navigation[67]).leaveVibegrationsPreviewFrame(previewAppId) : undefined,
    items16,
  );
  const items17 = [guildId, stateFromStores2, isLoading];
  const memo2 = obj2.useMemo(() => {
    platform = { guildId, platform, busy: null == stateFromStores2 || isLoading };
    return platform;
  }, items17);
  const tmp70 = projectId(navigation[68])(projectId, memo2);
  closure_31 = tmp70;
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items18 = [projectId, projectGuildId];
  callback3 = obj2.useCallback(() => {
    const obj2 = {
      content: dependencyMap(VibegrationsSettingsSheetDefault, { projectId, guildId: projectGuildId, isPreview: true }),
      key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items18);
  const items19 = [guildId, navigation];
  memo3 = obj2.useMemo(() => {
    closure_0 = guildId;
    const f120484 = (projectId) => navigation.push(projectGuildId.CHAT, { projectId });
    return (arg0, arg1) => {
      if (arg1 === closure_0) {
        f120484(arg0);
      } else {
        guildId(navigation[23]).transitionTo(active.CHANNEL(arg1, vibegrationsControlActive.VIBEGRATIONS, arg0));
        const obj = guildId(navigation[23]);
      }
    };
  }, items19);
  const items20 = [guildId, memo3, stateFromStores];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores) {
      const obj2 = { key: VibegrationsRemixSheet.VIBEGRATIONS_REMIX_SHEET_KEY, content: null };
      const obj3 = { project: tmp, currentGuildId: guildId, onRemixed: memo3 };
      obj2.content = dependencyMap(VibegrationsRemixSheetDefault, obj3);
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items20);
  const items21 = [projectId];
  callback5 = obj2.useCallback(() => {
    const obj2 = {
      key: VibegrationsConnectToolSheet.VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY,
      content: dependencyMap(VibegrationsConnectToolSheetDefault, { projectId }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items21);
  __initData = obj2.useRef(false);
  const items22 = [projectId];
  callback6 = obj2.useCallback((sha) => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { key: "VIBEGRATIONS_VERSION_RESTORING", content: null, IconComponent: null };
      let intl = util.intl;
      obj2.content = intl.string(_modDef3714.pGFXZ0);
      obj2.IconComponent = UndoIcon.UndoIcon;
      ToastActionCreatorsDefault.open(obj2);
      const promise = closure_2_19(projectId, sha.sha);
      closure_2_19(projectId, sha.sha)
        .then(
          () => {
            const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
            const intl = guildId(1115).intl;
            obj2.content = intl.string(projectId(3714).u8g2Od);
            obj2.IconComponent = guildId(14850).UndoIcon;
            projectId(4557).open(obj2);
          },
          () => {
            const intl = guildId(1115).intl;
            guildId(4556).presentError(intl.string(projectId(3714).q6iZ84));
          },
        )
        .finally(() => {
          ref.current = false;
        });
      const nextPromise = closure_2_19(projectId, sha.sha).then(
        () => {
          const obj2 = { key: "VIBEGRATIONS_VERSION_RESTORED", content: null, IconComponent: null };
          const intl = guildId(1115).intl;
          obj2.content = intl.string(projectId(3714).u8g2Od);
          obj2.IconComponent = guildId(14850).UndoIcon;
          projectId(4557).open(obj2);
        },
        () => {
          const intl = guildId(1115).intl;
          guildId(4556).presentError(intl.string(projectId(3714).q6iZ84));
        },
      );
    }
  }, items22);
  const items23 = [callback6, projectId];
  callback7 = obj2.useCallback(() => {
    const obj2 = {
      key: VibegrationsVersionHistorySheet.VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY,
      content: dependencyMap(VibegrationsVersionHistorySheetDefault, { projectId, onRestore: callback6 }),
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items23);
  const DeveloperMode = tmp(tmp2[73]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items24 = [navigation, projectId];
  callback8 = obj2.useCallback(() => navigation.push(projectGuildId.DEBUG, { projectId }), items24);
  let install_scope1;
  if (stateFromStores != null) {
    install_scope1 = stateFromStores.install_scope;
  }
  const items25 = [install_scope1, projectId];
  callback9 = obj2.useCallback(() => {
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
  }, items25);
  const tmp81 = guild_id(projectId(navigation[75])(previewAppId, closure_25));
  closure_43 = tmp81;
  const items26 = [previewAppId];
  callback10 = obj2.useCallback(() => {
    if (null != previewAppId) {
      restartVibegrationsAppFramesDefault(tmp);
    }
  }, items26);
  const items27 = [navigation, projectId];
  callback11 = obj2.useCallback(() => {
    collapsedCategories(projectId);
    navigation.goBack();
  }, items27);
  const obj12 = {
    items: memo1,
    pageWidth: projectId(navigation[65])().width - 2 * closure_31,
    onSetActiveIndex: callback2,
  };
  const items28 = [tmp11];
  const items29 = [projectId];
  stateFromStores3 = guildId(navigation[26]).useStateFromStores(
    items28,
    () => VibegrationsProjectStore.isProjectDeleting(projectId),
    items29,
  );
  const items30 = [stateFromStores3, callback11];
  const effect3 = obj2.useEffect(() => {
    if (stateFromStores3) {
      callback11();
    }
  }, items30);
  const obj13 = { projectId, refreshApplicationId: null };
  const modes2 = availability.modes;
  const tmpResult16 = guildId(navigation[26]);
  let tmp87 = null;
  if (modes2.includes("widget")) {
    tmp87 = null;
    if ("unavailable-authorization-revoked" !== availability.profileState) {
      tmp87 = widgetApplicationId;
    }
  }
  obj13.refreshApplicationId = tmp87;
  const tmp4Result2Result = projectId(navigation[77])(obj13);
  preview = tmp4Result2Result;
  const items31 = [
    setting,
    guildId,
    callback11,
    callback5,
    callback8,
    callback4,
    callback3,
    callback9,
    callback7,
    callback10,
    tmp81,
    tmp4Result2Result,
    stateFromStores,
    tmp70,
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
            projectId(navigation[19]).open(obj3);
            const obj2 = projectId(navigation[19]);
          } else if (!disabledReason.disabled) {
            disabledReason.run("header");
          }
        },
      };
      items.push(obj);
    }
    let obj2 = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3714.cWmjzs);
    obj2.IconComponent = SettingsIcon.SettingsIcon;
    obj2.action = callback3;
    items.push(obj2);
    if (setting) {
      let obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(_modDef3714.KampIf);
      obj3.IconComponent = BugIcon.BugIcon;
      obj3.action = callback8;
      items.push(obj3);
    }
    if (null != stateFromStores) {
      const obj6 = {
        project: tmp14,
        guildId,
        onRemix: callback4,
        onConnectTool: callback5,
        onVersionHistory: callback7,
        onRestorePoints: callback9,
        onRefresh: null,
        onClose: null,
        preview: null,
      };
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
  const items32 = [
    vibegrationsControlActive,
    active,
    stringResult,
    tmp45,
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
          return dependencyMap(NavigatorHeader.NavigatorHeader, { title });
        },
        headerRight() {
          let tmp = null;
          if (projectExists) {
            let obj = { style: headerActions.headerActions, children: null };
            if (!closure_1_20) {
              items = [null];
              const obj2 = {
                items,
                align: "below",
                children(arg0) {
                  ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
                  const obj = {
                    ref,
                    IconComponent: title(7538).MoreHorizontalIcon,
                    onPress,
                    accessibilityLabel: null,
                    accessibilityActions: null,
                    onAccessibilityAction: null,
                  };
                  const intl = title(1115).intl;
                  obj.accessibilityLabel = intl.string(title(1115).t["UKOtz+"]);
                  obj.accessibilityActions = accessibilityActions;
                  obj.onAccessibilityAction = onAccessibilityAction;
                  return accessibilityLabel(closure_1_1(16470), obj);
                },
              };
              items[1] = accessibilityLabel(guildId(navigation[83]).ContextMenu, obj2);
              obj.children = items;
              tmp = tmp2(tmp3, obj);
            } else {
              let obj3 = navigation;
              if (active) {
                let VibegrationsSelectModeActiveIcon = guildId(obj3[82]).VibegrationsSelectModeActiveIcon;
              } else {
                VibegrationsSelectModeActiveIcon = projectId(obj3[82]);
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
              accessibilityLabel(projectId(navigation[34]), obj3);
              const tmp9 = projectId(navigation[34]);
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
          let Xmvb23 = projectId(tmp2[29]).F2dRba;
        }
        tmp3(Xmvb23);
      }
      tmp2 = projectId(tmp2[29]);
      Xmvb23 = tmp2.Xmvb23;
    }
  }, items32);
  const items33 = [guildId, projectId];
  const effect5 = obj2.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[49]).setSelectedProjectForGuild(closure_1_0, null);
  }, items33);
  const items34 = [projectId];
  const effect6 = obj2.useEffect(() => () => projectId(navigation[84])(closure_1_1), items34);
  if (projectExists) {
    const obj14 = { style: null, children: null };
    const items35 = [tmp5.contentBare, animatedStyle];
    obj14.style = items35;
    let tmp100 = null;
    if (tmp42) {
      const obj15 = { style: tmp5.segments, children: null };
      const obj16 = { state: segmentedControlState, variant: "experimental_Small" };
      obj15.children = c26(tmp(tmp2[85]).SegmentedControl, obj16);
      tmp100 = c26(projectName, obj15);
    }
    const items36 = [tmp100];
    const obj17 = { style: tmp5.panes, children: null };
    let tmp105Result = null;
    if (hasItem) {
      tmp105Result = null;
      if (null != previewAppId) {
        const obj18 = {
          style: tmp45 ? tmp5.pane : tmp5.paneBackstage,
          pointerEvents: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
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
        obj18.children = c26(tmp(tmp2[67]).PreviewFrame, obj19);
        tmp105Result = tmp105(tmp103, obj18);
      }
    }
    const items37 = [tmp105Result, ,];
    let tmp107Result = null;
    if (paneHidden) {
      tmp107Result = null;
      if (null != previewAppId) {
        tmp107Result = null;
        if (!tmp45) {
          const obj20 = { style: tmp5.pane, children: null };
          const obj21 = {
            projectId,
            previewApplicationId: previewAppId,
            mode: activeMode,
            availability,
            widgetApplicationId,
            frameHostAvailable: tmp28,
            permissionsGate: null,
          };
          let tmp109 = null;
          if (result) {
            const obj22 = { onReviewPermissions: callback, loading: isLoading };
            tmp109 = obj22;
          }
          obj21.permissionsGate = tmp109;
          obj20.children = c26(tmp4(tmp2[67]), obj21);
          tmp107Result = tmp107(tmp103, obj20);
          const tmp4Result6 = tmp4(tmp2[67]);
        }
      }
    }
    items37[1] = tmp107Result;
    const items38 = [tmp5.chatPane, ,];
    if (paneHidden) {
      paneHidden = tmp5.paneHidden;
    }
    const obj23 = { style: null, children: null };
    items38[1] = paneHidden;
    items38[2] = animatedStyle1;
    obj23.style = items38;
    const obj24 = { value: memo2, children: null };
    const obj25 = { projectId, transcriptTopInset: tmp8[0], onRestoreVersion: callback6 };
    obj24.children = c26(tmp4(tmp2[86]), obj25);
    obj23.children = c26(tmp(tmp2[68]).VibegrationsPublishActionContext.Provider, obj24);
    items37[2] = c26(tmp4(tmp2[56]).View, obj23);
    obj17.children = items37;
    items36[1] = callback1(projectName, obj17);
    obj14.children = items36;
    let tmp93Result1 = tmp99(tmp4(tmp2[56]).View, obj14);
  } else {
    const obj26 = { style: null, children: null };
    const items39 = [,];
    ({ content: arr37[0], centered: arr37[1] } = tmp5);
    obj26.style = items39;
    if (stateFromStores1) {
      let tmp93Result = tmp93(closure_6, {});
    } else {
      const obj27 = { style: tmp5.listError, children: null };
      const obj28 = { variant: "heading-lg/semibold", color: "text-default", children: null };
      let intl2 = tmp(tmp2[28]).intl;
      obj28.children = intl2.string(tmp4(tmp2[29]).F2dRba);
      const items40 = [tmp93(tmp(tmp2[47]).Text, obj28), ,];
      const obj29 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl3 = tmp(tmp2[28]).intl;
      obj29.children = intl3.string(tmp4(tmp2[29]).GnEJ3o);
      items40[1] = tmp93(tmp(tmp2[47]).Text, obj29);
      const obj30 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = tmp(tmp2[28]).intl;
      obj30.text = intl4.string(tmp4(tmp2[29])["42EdIV"]);
      obj30.onPress = function onPress() {
        return VibegrationsActionCreators.listProjects(guildId);
      };
      items40[2] = tmp93(tmp(tmp2[48]).Button, obj30);
      obj27.children = items40;
      tmp93Result = callback1(tmp94, obj27);
    }
    obj26.children = tmp93Result;
    tmp93Result1 = tmp93(tmp94, obj26);
  }
  return tmp93Result1;
}
function RoutedProjectOpener(projectId) {
  projectId = projectId.projectId;
  const sceneProjectId = projectId.sceneProjectId;
  const openedProjectIdRef = projectId.openedProjectIdRef;
  const navigation = projectId(openedProjectIdRef[37]).useNavigation();
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
const vibegrationsDesignFeedbackStore = fn(16464);
({
  enterVibegrationsDesignFeedback: closure_14,
  exitVibegrationsDesignFeedback: closure_15,
  useVibegrationsDesignFeedback: closure_16,
} = vibegrationsDesignFeedbackStore);
const VibegrationsConnectionStore = fn(12851);
({ closeConnection: closure_18, restoreSourceHistoryEntry: closure_19 } = VibegrationsConnectionStore);
const Constants = fn(1074);
({ Permissions: closure_21, Routes: closure_22 } = Constants);
const StaticChannelRoute = fn(2051).StaticChannelRoute;
const FramesConstants = fn(8691);
({ isLaunched: closure_24, MAIN_SURFACE: closure_25 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_26, jsxs: closure_27, Fragment: closure_28 } = jsxProd);
let platform = {
  showPublishBlocked: VibegrationsPublishBlockedSheetDefault,
  openPublishNotes(arg0) {
    ({ guildId, applicationId, projectName, publish, initialDraft } = arg0);
    const obj = ActionSheetActionCreators;
    obj.showActionSheet({
      content: dependencyMap(VibegrationsPublishNotesSheetDefault, {
        guildId,
        applicationId,
        projectName,
        publish,
        initialDraft,
      }),
      key: VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY,
    });
  },
  showError(content) {
    return ToastActionCreatorsDefault.open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content });
  },
  openProfile(userId) {
    showUserProfileActionSheetDefault({ userId });
  },
};
const createStyles = fn(4845);
let closure_30 = createStyles.createStyles((paddingBottom) => {
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
let closure_35 = {
  code: "function VibegrationsStandaloneScreenTsx1(e){const{runOnJS,setChatKeyboardCover,safeAreaBottom}=this.__closure;runOnJS(setChatKeyboardCover)(Math.max(0,e.height-safeAreaBottom));}",
};
let closure_36 = {
  code: "function VibegrationsStandaloneScreenTsx2(){const{previewShowing,botFaceShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{paddingBottom:previewShowing&&!botFaceShowing?Math.max(keyboardHeight.get(),safeAreaBottom):0};}",
};
let __initData = {
  code: "function VibegrationsStandaloneScreenTsx3(){const{previewShowing,keyboardHeight,safeAreaBottom}=this.__closure;return{transform:[{translateY:previewShowing?0:-Math.max(0,keyboardHeight.get()-safeAreaBottom)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  noop = undefined;
  const navigation = guildId(stateFromStores[37]).useNavigation();
  let obj = guildId(stateFromStores[37]);
  let items = [VibegrationsBuilderRouteStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[26]).useStateFromStores(
    items,
    () => {
      const routedProjectId = VibegrationsBuilderRouteStore.getRoutedProjectId(guildId);
      return routedProjectId;
    },
    items1,
  );
  let obj2 = guildId(stateFromStores[26]);
  const items2 = [GuildStore];
  const items3 = [guildId];
  const stateFromStores1 = guildId(stateFromStores[26]).useStateFromStores(
    items2,
    () => GuildStore.getGuild(guildId),
    items3,
  );
  let obj3 = guildId(stateFromStores[26]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[87]).useIsVibegrationsGuildEnabled({
    guildId,
    location: "VibegrationsStandaloneScreen",
  });
  const obj4 = guildId(stateFromStores[87]);
  const items4 = [GuildMemberStore];
  const items5 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[26]).useStateFromStoresArray(
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
  const obj5 = guildId(stateFromStores[26]);
  const items6 = [GuildStore, PermissionStore];
  const items7 = [guildId];
  const items8 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[26]).useStateFromStores(
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
  const obj6 = guildId(stateFromStores[26]);
  obj8.headerLeft = guildId(stateFromStores[81]).getHeaderCloseButton(() => navigation.goBack());
  obj8.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[28]).intl;
    obj.title = intl.string(navigation(stateFromStores[29]).Xmvb23);
    return closure_1_26(guildId(stateFromStores[81]).NavigatorHeader, obj);
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
      const items = [
        dependencyMap(RoutedProjectOpener, {
          projectId: stateFromStores,
          sceneProjectId: projectId,
          openedProjectIdRef,
        }),
        dependencyMap(ChatScene, { guildId, projectId }),
      ];
      obj.children = items;
      return __initData5(__initData6, obj);
    },
  };
  obj7[constants2.DEBUG] = {
    headerTitle() {
      const obj = { title: null };
      const intl = guildId(stateFromStores[28]).intl;
      obj.title = intl.string(navigation(stateFromStores[29]).KampIf);
      return closure_1_26(guildId(stateFromStores[81]).NavigatorHeader, obj);
    },
    render(projectId) {
      projectId = projectId.projectId;
      const obj = { children: null };
      const items = [
        dependencyMap(RoutedProjectOpener, {
          projectId: stateFromStores,
          sceneProjectId: projectId,
          openedProjectIdRef,
        }),
        dependencyMap(VibegrationsDebugSceneDefault, { projectId }),
      ];
      obj.children = items;
      return __initData5(__initData6, obj);
    },
  };
  const obj10 = {
    screens: obj7,
    initialRouteStack: isVibegrationsGuildEnabled(
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
  let intl = guildId(stateFromStores[28]).intl;
  obj10.headerBackTitle = intl.string(navigation(stateFromStores[29]).Xmvb23);
  return closure_26(guildId(stateFromStores[89]).Navigator, obj10);
}
