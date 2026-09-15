// === Module 16701: VibegrationsStandaloneScreen ===

// Module 16701 (VibegrationsStandaloneScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef3591 from "module_3591" /* 3591 */;
import _modDef4231 from "module_4231" /* 4231 */;
import DateUtils from "DateUtils" /* 4321 */;
import ClockIcon from "ClockIcon" /* 4602 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4606 */;
import Text_Text from "Text/Text" /* 4635 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4984 */;
import TableRow from "TableRow" /* 5690 */;
import NavigatorHeader from "NavigatorHeader" /* 5709 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7270 */;
import SettingsIcon from "SettingsIcon" /* 7487 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7746 */;
import UploadIcon from "UploadIcon" /* 9503 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9639 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 15099 */;
import WrenchIcon from "WrenchIcon" /* 15660 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 16710 */;
import VibegrationsCreateSheet from "VibegrationsCreateSheet" /* 16715 */;
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet" /* 16723 */;
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet" /* 16724 */;
import VibegrationsUsageSheet from "VibegrationsUsageSheet" /* 16725 */;
import VibegrationsProjectSettingsSheet from "VibegrationsProjectSettingsSheet" /* 16726 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16727 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16702 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 16705 */;
import VibegrationsProjectStore_mod from "VibegrationsProjectStore" /* 16703 */;

const VibegrationsCreateSheetDefault = VibegrationsCreateSheet;
const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsModelSettingsSheetDefault = VibegrationsModelSettingsSheet;
const VibegrationsUsageSheetDefault = VibegrationsUsageSheet;
const VibegrationsProjectSettingsSheetDefault = VibegrationsProjectSettingsSheet;
const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;

require = fn;
function ProjectRow(project) {
  project = project.project;
  let application_id = project.preview_application_id;
  if (application_id == null) {
    application_id = project.application_id;
  }
  const tmp = closure_23(0);
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
  const obj3 = { label: project.name, subLabel: formatToPlainStringResult, icon: null, arrow: true, onPress: null };
  const obj4 = { id: application_id, icon: null, size: 64 };
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  obj4.icon = icon;
  obj3.icon = __initData(timestampProducer, { accessibilityIgnoresInvertColors: true, source: AvatarUtilsDefault.getApplicationIconSource(obj4), style: tmp.appIcon });
  obj3.onPress = project.onPress;
  return __initData(TableRow.TableRow, obj3);
}
function ProjectList(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let navigation;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp3 = closure_23(0);
  importDefault = tmp3;
  navigation = guildId(navigation[21]).useNavigation();
  let obj = guildId(navigation[21]);
  let items = [VibegrationsProjectStore];
  const stateFromStoresArray = guildId(navigation[22]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj2 = guildId(navigation[22]);
  let items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(navigation[22]).useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  const obj3 = guildId(navigation[22]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(navigation[22]).useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = stateFromStoresArray1.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => guildId(navigation[23]).isVibegrationsProjectInGuild(item, closure_1_0));
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
  const onCreated = stateFromStoresArray1.useCallback((projectId) => navigation.push(constants.CHAT, { projectId }), items6);
  const items7 = [guildId, onCreated];
  const callback1 = stateFromStoresArray1.useCallback(() => {
    const obj2 = { key: VibegrationsCreateSheet.VIBEGRATIONS_CREATE_SHEET_KEY, content: __initData(VibegrationsCreateSheetDefault, { guildId, onCreated }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items7);
  const items8 = [navigation, callback1];
  const effect = stateFromStoresArray1.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { IconComponent: guildId(navigation[27]).PlusLargeIcon, onPress, accessibilityLabel: null };
        const intl = guildId(navigation[15]).intl;
        obj.accessibilityLabel = intl.string(guildId(navigation[15]).t.CumH4u);
        return closure_2_21(closure_1(navigation[26]), obj);
      }
    });
  }, items8);
  const obj4 = guildId(navigation[22]);
  const result = guildId(navigation[28]).recentVibegrationsChangelog("mobile");
  if (tmp12) {
    const obj6 = { style: tmp3.content, children: null };
    const obj7 = { contentContainerStyle: null, scrollIndicatorInsets: null, keyboardShouldPersistTaps: "handled", children: null };
    const items9 = [tmp3.listContent, ];
    const obj8 = { paddingBottom: tmp(tmp2[13]).space.PX_8 + bottom };
    items9[1] = obj8;
    obj7.contentContainerStyle = items9;
    const obj9 = { bottom };
    obj7.scrollIndicatorInsets = obj9;
    let tmp21Result = null;
    if (result.length > 0) {
      const obj10 = { style: tmp3.changelog, children: null };
      const obj11 = { style: tmp3.sectionHeading, children: null };
      const obj12 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl3 = tmp4(tmp2[15]).intl;
      obj12.children = intl3.string(tmp(tmp2[16]).x07mpp);
      const items10 = [closure_21(tmp4(tmp2[29]).Text, obj12), ];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[15]).intl;
      obj13.children = intl4.string(tmp(tmp2[16]).h5CwHI);
      items10[1] = closure_21(tmp4(tmp2[29]).Text, obj13);
      obj11.children = items10;
      const items11 = [closure_22(closure_8, obj11), ];
      const obj14 = {
        style: tmp3.changelogEntries,
        children: result.map((children) => {
              const obj = { style: changelogItem.changelogItem, children: null };
              const items = [DateUtils.dateFormat(_modDef4231(children.date, "YYYY-MM-DD"), "LL"), ];
              let combined = null;
              if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
                const intl = util.intl;
                const _HermesInternal = HermesInternal;
                combined = " \u00B7 " + intl.string(_modDef3591["CLX+p/"]);
              }
              items[1] = combined;
              const items1 = [__initData2(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }), __initData(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary })];
              obj.children = items1;
              return __initData2(React6, obj, "" + children.date + "-" + children.summary);
            })
      };
      items11[1] = closure_21(closure_8, obj14);
      obj10.children = items11;
      tmp21Result = closure_22(closure_8, obj10);
    }
    const items12 = [tmp21Result, , , ];
    let tmp21Result3 = null;
    if (memo.length > 0) {
      const obj15 = { style: tmp3.section, children: null };
      const obj16 = { style: tmp3.sectionHeading, children: null };
      const obj17 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl5 = tmp4(tmp2[15]).intl;
      obj17.children = intl5.string(tmp(tmp2[16]).Bo5fE3);
      const items13 = [closure_21(tmp4(tmp2[29]).Text, obj17), ];
      const obj18 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp4(tmp2[15]).intl;
      obj18.children = intl6.string(tmp(tmp2[16]).YnAFtT);
      items13[1] = closure_21(tmp4(tmp2[29]).Text, obj18);
      obj16.children = items13;
      const items14 = [closure_22(closure_8, obj16), ];
      const obj19 = {
        hasIcons: true,
        children: memo.map((project) => closure_1_21(ProjectRow, {
              project,
              onPress() {
                return callback(project.id);
              }
            }, project.id))
      };
      items14[1] = closure_21(tmp4(tmp2[34]).TableRowGroup, obj19);
      obj15.children = items14;
      tmp21Result3 = closure_22(closure_8, obj15);
    }
    items12[1] = tmp21Result3;
    let tmp21Result4 = null;
    if (memo1.length > 0) {
      const obj20 = { style: tmp3.section, children: null };
      const obj21 = { style: tmp3.sectionHeading, children: null };
      const obj22 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl7 = tmp4(tmp2[15]).intl;
      obj22.children = intl7.string(tmp(tmp2[16]).jrCnUc);
      const items15 = [closure_21(tmp4(tmp2[29]).Text, obj22), ];
      const obj23 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl8 = tmp4(tmp2[15]).intl;
      obj23.children = intl8.string(tmp(tmp2[16])["1KEhDu"]);
      items15[1] = closure_21(tmp4(tmp2[29]).Text, obj23);
      obj21.children = items15;
      const items16 = [closure_22(closure_8, obj21), ];
      const obj24 = {
        hasIcons: true,
        children: memo1.map((project) => closure_1_21(ProjectRow, {
              project,
              onPress() {
                return callback(project.id);
              }
            }, project.id))
      };
      items16[1] = closure_21(tmp4(tmp2[34]).TableRowGroup, obj24);
      obj20.children = items16;
      tmp21Result4 = closure_22(closure_8, obj20);
    }
    items12[2] = tmp21Result4;
    items12[3] = null;
    obj7.children = items12;
    obj6.children = closure_22(closure_7, obj7);
    return closure_21(closure_8, obj6);
  } else {
    const obj25 = { style: tmp3.centered, children: null };
    if (null != stateFromStores) {
      if ("loading" !== stateFromStores.type) {
        if ("error" === stateFromStores.type) {
          const obj26 = { style: tmp3.listError, children: null };
          const obj27 = { variant: "text-md/normal", color: "text-muted", children: null };
          let intl = tmp4(tmp2[15]).intl;
          obj27.children = intl.string(tmp(tmp2[16])["IN/HRP"]);
          const items17 = [closure_21(tmp4(tmp2[29]).Text, obj27), ];
          const obj28 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl2 = tmp4(tmp2[15]).intl;
          obj28.text = intl2.string(tmp(tmp2[16])["42EdIV"]);
          obj28.onPress = function onPress() {
            return VibegrationsActionCreators.listProjects(guildId);
          };
          items17[1] = closure_21(tmp4(tmp2[30]).Button, obj28);
          obj26.children = items17;
          let tmp13Result2 = closure_22(closure_8, obj26);
        } else {
          const obj29 = { style: tmp3.listError, children: null };
          const obj30 = { variant: "text-md/normal", color: "text-muted", children: null };
          const intl9 = tmp4(tmp2[15]).intl;
          obj30.children = intl9.string(tmp(tmp2[16])["vqy+in"]);
          const items18 = [closure_21(tmp4(tmp2[29]).Text, obj30), ];
          const obj31 = { variant: "primary", size: "sm", text: null, onPress: null };
          const intl10 = tmp4(tmp2[15]).intl;
          obj31.text = intl10.string(tmp4(tmp2[15]).t.CumH4u);
          obj31.onPress = callback1;
          items18[1] = closure_21(tmp4(tmp2[30]).Button, obj31);
          obj29.children = items18;
          tmp13Result2 = closure_22(closure_8, obj29);
        }
      }
      obj25.children = tmp13Result2;
      closure_21(closure_8, obj25);
    }
    tmp13Result2 = closure_21(onCreated, {});
  }
  const obj5 = guildId(navigation[28]);
  tmp12 = memo.length > 0 || memo1.length > 0;
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  closure_12 = undefined;
  first = undefined;
  closure_14 = undefined;
  let callback1;
  projectGuildId = undefined;
  let callback4;
  let stateFromStores3;
  let callback5;
  let memo;
  c23 = undefined;
  navigation = guildId(navigation[21]).useNavigation();
  let tmp5 = c23(projectId(navigation[35])({ includeKeyboardHeight: true }).insets.bottom);
  _slicedToArray = tmp5;
  let obj = guildId(navigation[21]);
  let items = [projectGuildId];
  const items1 = [projectId];
  const stateFromStoresObject = guildId(navigation[22]).useStateFromStoresObject(items, () => {
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
      tmp5 = closure_2_17(project);
    }
    obj.isOwner = tmp5;
    let tmp7 = null != project;
    if (tmp7) {
      tmp7 = value2(project);
    }
    obj.canPublish = tmp7;
    return obj;
  }, items1);
  const projectExists = stateFromStoresObject.projectExists;
  const projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  const isOwner = stateFromStoresObject.isOwner;
  const canPublish = stateFromStoresObject.canPublish;
  const items2 = [navigation, projectExists];
  const effect = projectExists.useEffect(() => {
    if (!projectExists) {
      navigation.goBack();
    }
  }, items2);
  let obj2 = guildId(navigation[22]);
  const items3 = [projectGuildId];
  const items4 = [projectId];
  const stateFromStores = guildId(navigation[22]).useStateFromStores(items3, () => {
    const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
    let preview_ready;
    if (integrationStatus != null) {
      preview_ready = integrationStatus.preview_ready;
    }
    return true === preview_ready;
  }, items4);
  let obj4 = guildId(navigation[22]);
  const items5 = [closure_12];
  const items6 = [projectId];
  const stateFromStores1 = guildId(navigation[22]).useStateFromStores(items5, () => VibegrationsChatStore.getProjectUsage(projectId), items6);
  let obj5 = guildId(navigation[22]);
  const items7 = [callback1];
  const items8 = [projectId];
  const stateFromStores2 = guildId(navigation[22]).useStateFromStores(items7, () => null != VibegrationsConnectionStore.getModelSettings(projectId), items8);
  const items9 = [projectId];
  const effect1 = projectExists.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items9);
  const items10 = [previewAppId];
  const callback = projectExists.useCallback(() => {
    if (null != previewAppId) {
      const obj2 = { applicationId: tmp, surface: MAIN_SURFACE };
      FramesActionCreatorsDefault.launchFrame(obj2).catch(() => {

      });
      const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj2);
    }
  }, items10);
  let obj6 = guildId(navigation[22]);
  const tmp10 = callback1;
  const tmp15 = null != previewAppId && stateFromStores && (null != previewAppId && null != projectId(navigation[37])(previewAppId));
  closure_12 = tmp15;
  [first, closure_14] = projectExists.useState(false);
  const items11 = [guildId, projectId, first];
  callback1 = obj3.useCallback(() => {
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
                const promise5 = map1(projectId);
                promise5.catch(() => {

                });
                const nextPromise = closure_2_14(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[15]).intl;
                    const error = new Error(intl.string(projectId(navigation[16]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[31]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {

                    });
                    const obj = guildId(navigation[31]);
                  }
                });
                const promise6 = closure_2_14(projectId);
                nextPromise.catch(() => {

                }).finally(() => closure_1_14(false));
                const catchPromise1 = nextPromise.catch(() => {

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
                obj3.content = __initData(VibegrationsPublishNotesSheetDefault, obj6);
                obj3.key = VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
                obj2.showActionSheet(obj3);
              } else {
                const nextPromise1 = closure_2_14(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[15]).intl;
                    const error = new Error(intl.string(projectId(navigation[16]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[31]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {

                    });
                    const obj = guildId(navigation[31]);
                  }
                });
                const promise = closure_2_14(projectId);
                nextPromise1.catch(() => {

                }).finally(() => closure_1_14(false));
                const catchPromise2 = nextPromise1.catch(() => {

                });
                nextPromise1.then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1115).intl;
                  obj2.content = intl.string(projectId(3591).wA0o0L);
                  projectId(4338).open(obj2);
                }).catch((error) => {
                  if (error instanceof Error) {
                    let message = error.message;
                  } else {
                    const intl = guildId(1115).intl;
                    message = intl.string(projectId(3591).fNP6Cd);
                  }
                  projectId(4338).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
                  const obj = projectId(4338);
                });
                const nextPromise2 = nextPromise1.then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1115).intl;
                  obj2.content = intl.string(projectId(3591).wA0o0L);
                  projectId(4338).open(obj2);
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
  }, items11);
  const items12 = [projectId];
  const callback2 = obj3.useCallback(() => {
    const obj2 = { content: __initData(VibegrationsModelSettingsSheetDefault, { projectId }), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items12);
  const items13 = [projectId];
  const callback3 = obj3.useCallback(() => {
    const obj2 = { content: __initData(VibegrationsUsageSheetDefault, { projectId }), key: VibegrationsUsageSheet.VIBEGRATIONS_USAGE_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items13);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items14 = [projectId, projectGuildId];
  callback4 = obj3.useCallback(() => {
    const obj2 = { content: __initData(VibegrationsProjectSettingsSheetDefault, { projectId, guildId: projectGuildId }), key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items14);
  const tmp14 = null != previewAppId && null != projectId(navigation[37])(previewAppId);
  const items15 = [tmp10];
  const items16 = [projectId];
  stateFromStores3 = guildId(navigation[22]).useStateFromStores(items15, () => null != VibegrationsConnectionStore.getSettings(projectId), items16);
  const items17 = [projectId];
  callback5 = obj3.useCallback(() => {
    const obj2 = { content: __initData(VibegrationsSettingsSheetDefault, { projectId, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items17);
  const items18 = [canPublish, callback5, callback2, callback4, callback3, callback1, stateFromStores3, stateFromStores2, isOwner, stateFromStores1];
  memo = obj3.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3591["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback1;
      items.push(obj);
    }
    if (stateFromStores3) {
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
    if (stateFromStores2) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3591["2NWMqY"]);
      obj4.IconComponent = FiltersHorizontalIcon.FiltersHorizontalIcon;
      obj4.action = callback2;
      items.push(obj4);
    }
    if (null != stateFromStores1) {
      const obj5 = { label: null, IconComponent: null, action: null };
      const intl5 = util.intl;
      obj5.label = intl5.string(_modDef3591.AWQ2ZV);
      obj5.IconComponent = ClockIcon.ClockIcon;
      obj5.action = callback3;
      items.push(obj5);
    }
    return items;
  }, items18);
  let formatToPlainStringResult;
  if (null != stateFromStores1) {
    let intl = tmp(tmp2[15]).intl;
    let obj7 = { runes: null };
    const tmpResult2 = tmp(tmp2[50]);
    obj7.runes = tmp(tmp2[50]).runesFromUsd(stateFromStores1.cost_usd).toLocaleString();
    formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[16])["4PFO2p"], obj7);
    const runesFromUsdResult = tmp(tmp2[50]).runesFromUsd(stateFromStores1.cost_usd);
  }
  c23 = formatToPlainStringResult;
  const items19 = [callback, navigation, memo, projectName, formatToPlainStringResult, tmp15, tmp5];
  const effect2 = obj3.useEffect(() => {
    let stringResult = projectName;
    if (projectName == null) {
      let intl = guildId(navigation[15]).intl;
      stringResult = intl.string(projectId(navigation[16]).Xmvb23);
    }
    guildId = stringResult;
    navigation.setOptions({
      headerTitle() {
        let prop;
        if (null != subtitle) {
          prop = closure_3.headerTitleWithSubtitle;
        }
        const obj = { style: prop, children: __initData(NavigatorHeader.NavigatorHeader, { title: stringResult, subtitle }) };
        return __initData(React6, obj);
      },
      headerRight() {
        let obj = { style: closure_1_3.headerActions, children: null };
        let tmp3 = null;
        if (closure_1_12) {
          const obj2 = { IconComponent: guildId(navigation[52]).PlayIcon, onPress, accessibilityLabel: null };
          let intl = guildId(navigation[15]).intl;
          obj2.accessibilityLabel = intl.string(projectId(navigation[16]).ecod4C);
          tmp3 = callback5(projectId(navigation[26]), obj2);
          const tmp7 = projectId(navigation[26]);
        }
        items = [tmp3, ];
        items[1] = callback5(guildId(navigation[53]).ContextMenu, {
          items,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = { ref, IconComponent: closure_1_0(8798).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
            const intl = closure_1_0(1115).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1115).t["UKOtz+"]);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_1_21(closure_1_1(16721), obj);
          }
        });
        obj.children = items;
        return memo(canPublish, obj);
      }
    });
    let obj = {
      headerTitle() {
        let prop;
        if (null != subtitle) {
          prop = closure_3.headerTitleWithSubtitle;
        }
        const obj = { style: prop, children: __initData(NavigatorHeader.NavigatorHeader, { title: stringResult, subtitle }) };
        return __initData(React6, obj);
      },
      headerRight() {
        let obj = { style: closure_1_3.headerActions, children: null };
        let tmp3 = null;
        if (closure_1_12) {
          const obj2 = { IconComponent: guildId(navigation[52]).PlayIcon, onPress, accessibilityLabel: null };
          let intl = guildId(navigation[15]).intl;
          obj2.accessibilityLabel = intl.string(projectId(navigation[16]).ecod4C);
          tmp3 = callback5(projectId(navigation[26]), obj2);
          const tmp7 = projectId(navigation[26]);
        }
        items = [tmp3, ];
        items[1] = callback5(guildId(navigation[53]).ContextMenu, {
          items,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = { ref, IconComponent: closure_1_0(8798).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
            const intl = closure_1_0(1115).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1115).t["UKOtz+"]);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_1_21(closure_1_1(16721), obj);
          }
        });
        obj.children = items;
        return memo(canPublish, obj);
      }
    };
  }, items19);
  const items20 = [guildId, projectId];
  const effect3 = obj3.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[31]).setSelectedProjectForGuild(closure_1_0, null);
  }, items20);
  const tmpResult = guildId(navigation[22]);
  return callback5(canPublish, { style: tmp5.content, children: callback5(projectId(navigation[55]), { projectId }) });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
let VibegrationsConnectionStore = fn(16705);
({ draftPatchNotes: map1, publishProject: closure_14 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let VibegrationsProjectStore = fn(16703);
({ canPublishProject: closure_16, isProjectOwner: closure_17 } = VibegrationsProjectStore);
let VibegrationsProjectStore = VibegrationsProjectStore_mod;
const Permissions = fn(1074).Permissions;
const MAIN_SURFACE = fn(9643).MAIN_SURFACE;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(4639);
let closure_23 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, centered: null, listContent: null, section: null, sectionHeading: null, changelog: null, changelogEntries: null, changelogItem: null, appIcon: null, listError: null, headerTitleWithSubtitle: null, headerActions: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  const obj4 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
  obj.section = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.sectionHeading = { gap: nativeDefault.space.PX_4 };
  const obj6 = { gap: nativeDefault.space.PX_4 };
  obj.changelog = { gap: nativeDefault.space.PX_16 };
  const obj7 = { gap: nativeDefault.space.PX_16 };
  obj.changelogEntries = { gap: nativeDefault.space.PX_12 };
  const obj8 = { gap: nativeDefault.space.PX_12 };
  obj.changelogItem = { gap: nativeDefault.space.PX_4 };
  const size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.sm };
  obj.appIcon = size;
  const obj9 = { gap: nativeDefault.space.PX_4 };
  obj.listError = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  const obj10 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.headerTitleWithSubtitle = { paddingBottom: nativeDefault.space.PX_16 };
  const obj11 = { paddingBottom: nativeDefault.space.PX_16 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  return obj;
});
const constants = { PROJECTS: "PROJECTS", CHAT: "CHAT" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const navigation = guildId(stateFromStores[21]).useNavigation();
  let obj = guildId(stateFromStores[21]);
  const items = [GuildStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[22]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const obj2 = guildId(stateFromStores[22]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[56]).useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const obj3 = guildId(stateFromStores[56]);
  const items2 = [GuildMemberStore];
  const items3 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[22]).useStateFromStoresArray(items2, () => {
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
  const obj4 = guildId(stateFromStores[22]);
  const items4 = [GuildStore, PermissionStore];
  const items5 = [guildId];
  const items6 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[22]).useStateFromStores(items4, () => {
      const guild = GuildStore.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
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
  const obj5 = guildId(stateFromStores[22]);
  obj7.headerLeft = guildId(stateFromStores[51]).getHeaderCloseButton(() => navigation.goBack());
  obj7.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[15]).intl;
    obj.title = intl.string(navigation(stateFromStores[16]).Xmvb23);
    return closure_1_21(guildId(stateFromStores[51]).NavigatorHeader, obj);
  };
  obj7.render = function render() {
    return __initData(ProjectList, { guildId });
  };
  obj6[constants.PROJECTS] = obj7;
  obj6[constants.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      return __initData(ChatScene, { guildId, projectId: projectId.projectId });
    }
  };
  const obj9 = { screens: obj6, initialRouteName: constants.PROJECTS, headerBackTitle: null };
  let intl = guildId(stateFromStores[15]).intl;
  obj9.headerBackTitle = intl.string(navigation(stateFromStores[16]).Xmvb23);
  return closure_21(guildId(stateFromStores[57]).Navigator, obj9);
};