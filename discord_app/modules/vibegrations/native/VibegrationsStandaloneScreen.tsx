// === Module 16688: VibegrationsStandaloneScreen ===

// Module 16688 (VibegrationsStandaloneScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3590 from "module_3590" /* 3590 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4603 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4981 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import SettingsIcon from "SettingsIcon" /* 7483 */;
import UploadIcon from "UploadIcon" /* 9501 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9637 */;
import RetryIcon from "RetryIcon" /* 10308 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13385 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 15089 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 16697 */;
import VibegrationsPublishNotesSheet from "VibegrationsPublishNotesSheet" /* 16702 */;
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet" /* 16703 */;
import VibegrationsProjectSettingsSheet from "VibegrationsProjectSettingsSheet" /* 16706 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16689 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 16692 */;
import VibegrationsProjectStore_mod from "VibegrationsProjectStore" /* 16690 */;

const VibegrationsPublishNotesSheetDefault = VibegrationsPublishNotesSheet;
const VibegrationsModelSettingsSheetDefault = VibegrationsModelSettingsSheet;
const VibegrationsProjectSettingsSheetDefault = VibegrationsProjectSettingsSheet;

require = fn;
function ProjectList(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let stateFromStoresArray;
  let str;
  noop = undefined;
  c8 = undefined;
  const tmp3 = closure_25(navigation(stateFromStoresArray[15])().bottom);
  navigation = guildId(stateFromStoresArray[16]).useNavigation();
  let obj = guildId(stateFromStoresArray[16]);
  const items = [VibegrationsProjectStore];
  stateFromStoresArray = guildId(stateFromStoresArray[17]).useStateFromStoresArray(items, () => VibegrationsProjectStore.getOwnedProjects(), []);
  let obj2 = guildId(stateFromStoresArray[17]);
  const items1 = [VibegrationsProjectStore];
  const items2 = [guildId];
  const stateFromStoresArray1 = guildId(stateFromStoresArray[17]).useStateFromStoresArray(items1, () => VibegrationsProjectStore.getSharedProjects(guildId), items2);
  let obj3 = guildId(stateFromStoresArray[17]);
  const items3 = [VibegrationsProjectStore];
  const stateFromStores = guildId(stateFromStoresArray[17]).useStateFromStores(items3, () => VibegrationsProjectStore.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = noop.useMemo(() => {
    const found = stateFromStoresArray.filter((item) => guildId(stateFromStoresArray[18]).isVibegrationsProjectInGuild(item, closure_1_0));
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
  const memo1 = noop.useMemo(() => {
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
  const tmp9 = str(noop.useState(""), 2);
  str = tmp9[0];
  noop = tmp10;
  const tmp11 = str(noop.useState(false), 2);
  const loading = tmp11[0];
  closure_7 = tmp11[1];
  const obj4 = guildId(stateFromStoresArray[17]);
  [tmp14, c8] = str(noop.useState(null), 2);
  const items6 = [guildId, navigation, str, loading];
  let tmp16 = memo.length > 0;
  const callback = noop.useCallback(stateFromStoresArray1(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            closure_1 = tmp4;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            const trimmed = str.trim();
            closure_128_0 = trimmed;
            if ("" !== trimmed) {
              if (!first) {
                closure_7(true);
                _undefined(null);
                c3 = 2;
                const obj6 = { guild_id: guildId, install_scope: "guild" };
                c4 = 3;
                c5 = 1;
                const obj7 = { value: tmp6(tmp53[19]).createProject(obj6), done: false };
                return obj7;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp9) {
          if (2 === tmp9) {
            c3 = 1;
            closure_128_2 = tmp53;
            closure_129_8(tmp6(tmp53[20]).getVibegrationsCreateErrorMessage(closure_128_2));
            const obj3 = tmp6(tmp53[20]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_7(false);
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_1 = value;
            closure_1_14(closure_128_1);
            closure_1_16(closure_128_1, closure_128_0);
            closure_129_5("");
            const obj = { projectId: closure_128_1 };
            closure_129_1.push(constants.CHAT, obj);
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
        }
        c3 = 0;
        closure_129_7(false);
        throw tmp53;
      } catch (tmp53) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp53;
        } else if (tmp2 === tmp55) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items6);
  if (!tmp16) {
    tmp16 = memo1.length > 0;
  }
  if (tmp16) {
    let obj5 = { style: tmp3.content, children: null };
    let obj6 = { contentContainerStyle: tmp3.listContent, children: null };
    let obj7 = { style: tmp3.createSection, children: null };
    let obj8 = { variant: "heading-md/bold", color: "text-default", children: null };
    const intl2 = tmp4(tmp2[22]).intl;
    obj8.children = intl2.string(tmp(tmp2[23])["2tYpRK"]);
    const items7 = [closure_23(tmp4(tmp2[21]).Text, obj8), , , ];
    const obj9 = { placeholder: null, autoComplete: "off", value: null, onChange: null, isDisabled: null };
    const intl3 = tmp4(tmp2[22]).intl;
    obj9.placeholder = intl3.string(tmp(tmp2[23]).TU9IGR);
    obj9.value = str;
    obj9.onChange = tmp10;
    obj9.isDisabled = loading;
    items7[1] = closure_23(tmp4(tmp2[24]).TextArea, obj9);
    let tmp23Result = null;
    if (null != tmp14) {
      const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp14 };
      tmp23Result = closure_23(tmp4(tmp2[21]).Text, obj10);
    }
    items7[2] = tmp23Result;
    const obj11 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
    const intl4 = tmp4(tmp2[22]).intl;
    obj11.text = intl4.string(tmp4(tmp2[22]).t.CumH4u);
    obj11.disabled = "" === str.trim();
    obj11.loading = loading;
    obj11.onPress = callback;
    items7[3] = closure_23(tmp4(tmp2[25]).Button, obj11);
    obj7.children = items7;
    const items8 = [closure_24(c8, obj7), , , ];
    let tmp23Result2 = null;
    if (memo.length > 0) {
      const obj12 = {
        hasIcons: false,
        children: memo.map((label) => {
              const obj = { label: label.name, subLabel: null, arrow: true, onPress: null };
              let relativeTimestamp;
              if (null != label.updated_at) {
                const _Date = Date;
                const date = new Date(label.updated_at);
                relativeTimestamp = guildId(stateFromStoresArray[28]).getRelativeTimestamp(date.getTime());
                const tmp2Result = guildId(stateFromStoresArray[28]);
              }
              obj.subLabel = relativeTimestamp;
              obj.onPress = function onPress() {
                return navigation.push(constants.CHAT, { projectId: label.id });
              };
              return closure_1_23(guildId(stateFromStoresArray[27]).TableRow, obj, label.id);
            })
      };
      tmp23Result2 = closure_23(tmp4(tmp2[26]).TableRowGroup, obj12);
    }
    items8[1] = tmp23Result2;
    let tmp25Result = null;
    if (memo1.length > 0) {
      const obj13 = { style: tmp3.sharedSection, children: null };
      const obj14 = { style: tmp3.sharedHeading, children: null };
      const obj15 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl5 = tmp4(tmp2[22]).intl;
      obj15.children = intl5.string(tmp(tmp2[23]).jrCnUc);
      const items9 = [closure_23(tmp4(tmp2[21]).Text, obj15), ];
      const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp4(tmp2[22]).intl;
      obj16.children = intl6.string(tmp(tmp2[23])["1KEhDu"]);
      items9[1] = closure_23(tmp4(tmp2[21]).Text, obj16);
      obj14.children = items9;
      const items10 = [closure_24(tmp24, obj14), ];
      const obj17 = {
        hasIcons: false,
        children: memo1.map((label) => {
              const obj = { label: label.name, subLabel: null, arrow: true, onPress: null };
              let relativeTimestamp;
              if (null != label.updated_at) {
                const _Date = Date;
                const date = new Date(label.updated_at);
                relativeTimestamp = guildId(stateFromStoresArray[28]).getRelativeTimestamp(date.getTime());
                const tmp2Result = guildId(stateFromStoresArray[28]);
              }
              obj.subLabel = relativeTimestamp;
              obj.onPress = function onPress() {
                return navigation.push(constants.CHAT, { projectId: label.id });
              };
              return closure_1_23(guildId(stateFromStoresArray[27]).TableRow, obj, label.id);
            })
      };
      items10[1] = closure_23(tmp4(tmp2[26]).TableRowGroup, obj17);
      obj13.children = items10;
      tmp25Result = closure_24(tmp24, obj13);
    }
    items8[2] = tmp25Result;
    items8[3] = null;
    obj6.children = items8;
    obj5.children = closure_24(closure_7, obj6);
    return closure_23(c8, obj5);
  } else {
    const obj18 = { style: tmp3.centered, children: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    if ("loading" === type) {
      let tmp17Result = closure_23(loading, {});
    } else {
      const obj19 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl = tmp4(tmp2[22]).intl;
      obj19.children = intl.string(tmp(tmp2[23])["vqy+in"]);
      tmp17Result = closure_23(tmp4(tmp2[21]).Text, obj19);
    }
    obj18.children = tmp17Result;
    closure_23(c8, obj18);
  }
  const tmp13 = str(noop.useState(null), 2);
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  previewAppId = undefined;
  let callback1;
  projectGuildId = undefined;
  let callback4;
  let memo;
  c20 = undefined;
  navigation = guildId(navigation[16]).useNavigation();
  let tmp5 = closure_25(projectId(navigation[29])({ includeKeyboardHeight: true }).insets.bottom);
  closure_3 = tmp5;
  let obj = guildId(navigation[16]);
  let items = [c20];
  const items1 = [projectId];
  const stateFromStoresObject = guildId(navigation[17]).useStateFromStoresObject(items, () => {
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
      tmp5 = closure_2_19(project);
    }
    obj.isOwner = tmp5;
    let tmp7 = null != project;
    if (tmp7) {
      tmp7 = collapsedCategories(project);
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
  const effect = projectName.useEffect(() => {
    if (!projectExists) {
      navigation.goBack();
    }
  }, items2);
  let obj2 = guildId(navigation[17]);
  const items3 = [c20];
  const items4 = [projectId];
  const stateFromStores = guildId(navigation[17]).useStateFromStores(items3, () => {
    const integrationStatus = VibegrationsProjectStore.getIntegrationStatus(projectId);
    let preview_ready;
    if (integrationStatus != null) {
      preview_ready = integrationStatus.preview_ready;
    }
    return true === preview_ready;
  }, items4);
  let obj4 = guildId(navigation[17]);
  const items5 = [callback1];
  const items6 = [projectId];
  const stateFromStores1 = guildId(navigation[17]).useStateFromStores(items5, () => VibegrationsChatStore.getProjectUsage(projectId), items6);
  let obj5 = guildId(navigation[17]);
  const items7 = [projectGuildId];
  const items8 = [projectId];
  const stateFromStores2 = guildId(navigation[17]).useStateFromStores(items7, () => null != VibegrationsConnectionStore.getModelSettings(projectId), items8);
  const items9 = [projectId];
  const effect1 = projectName.useEffect(() => {
    const project = VibegrationsActionCreators.getProject(projectId);
    project.catch(() => {

    });
  }, items9);
  const items10 = [previewAppId];
  const callback = projectName.useCallback(() => {
    if (null != previewAppId) {
      const obj2 = { applicationId: tmp, surface: MAIN_SURFACE };
      FramesActionCreatorsDefault.launchFrame(obj2).catch(() => {

      });
      const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj2);
    }
  }, items10);
  closure_11 = tmp13;
  const items11 = [previewAppId];
  callback1 = obj3.useCallback(() => {
    restartVibegrationsAppFramesDefault(previewAppId);
  }, items11);
  const tmp15 = projectExists(projectName.useState(false), 2);
  const first = tmp15[0];
  closure_14 = tmp15[1];
  const items12 = [guildId, projectId, first];
  const callback2 = obj3.useCallback(() => {
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
                const nextPromise = __initData(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[22]).intl;
                    const error = new Error(intl.string(projectId(navigation[23]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[19]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {

                    });
                    const obj = guildId(navigation[19]);
                  }
                });
                const promise6 = __initData(projectId);
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
                obj3.content = __initData3(VibegrationsPublishNotesSheetDefault, obj6);
                obj3.key = VibegrationsPublishNotesSheet.VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
                obj2.showActionSheet(obj3);
              } else {
                const nextPromise1 = __initData(projectId).then((ok) => {
                  if (true !== ok.ok) {
                    const _Error = Error;
                    const intl = guildId(navigation[22]).intl;
                    const error = new Error(intl.string(projectId(navigation[23]).fNP6Cd));
                    throw error;
                  } else {
                    const result = guildId(navigation[19]).refreshPublishedProject(closure_1_1, { isPreview: false });
                    result.catch(() => {

                    });
                    const obj = guildId(navigation[19]);
                  }
                });
                const promise = __initData(projectId);
                nextPromise1.catch(() => {

                }).finally(() => closure_1_14(false));
                const catchPromise2 = nextPromise1.catch(() => {

                });
                nextPromise1.then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1114).intl;
                  obj2.content = intl.string(projectId(3590).wA0o0L);
                  projectId(4335).open(obj2);
                }).catch((error) => {
                  if (error instanceof Error) {
                    let message = error.message;
                  } else {
                    const intl = guildId(1114).intl;
                    message = intl.string(projectId(3590).fNP6Cd);
                  }
                  projectId(4335).open({ key: "VIBEGRATIONS_PUBLISH_FAILED", content: message });
                  const obj = projectId(4335);
                });
                const nextPromise2 = nextPromise1.then(() => {
                  const obj2 = { key: "VIBEGRATIONS_PUBLISH_SUCCESS", content: null };
                  const intl = guildId(1114).intl;
                  obj2.content = intl.string(projectId(3590).wA0o0L);
                  projectId(4335).open(obj2);
                });
              }
            }
          }
          const obj8 = { title: null, body: null };
          let intl = util.intl;
          obj8.title = intl.string(_modDef3590.DYwf2n);
          const intl2 = util.intl;
          obj8.body = intl2.string(_modDef3590["nDQB/b"]);
          actions_AlertActionCreatorsDefault.show(obj8);
        } else {
          const obj12 = { title: null, body: null };
          const intl3 = util.intl;
          obj12.title = intl3.string(_modDef3590["+UouPe"]);
          const intl4 = util.intl;
          obj12.body = intl4.string(_modDef3590["E0QD++"]);
          actions_AlertActionCreatorsDefault.show(obj12);
        }
      }
    }
  }, items12);
  const items13 = [projectId];
  const callback3 = obj3.useCallback(() => {
    const obj2 = { content: __initData3(VibegrationsModelSettingsSheetDefault, { projectId }), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items13);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items14 = [projectId, projectGuildId];
  callback4 = obj3.useCallback(() => {
    const obj2 = { content: __initData3(VibegrationsProjectSettingsSheetDefault, { projectId, guildId: projectGuildId }), key: VibegrationsProjectSettingsSheet.VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items14);
  const items15 = [canPublish, callback3, callback4, callback2, callback1, stateFromStores2, isOwner];
  memo = obj3.useMemo(() => {
    const items = [];
    if (canPublish) {
      const obj = { label: null, IconComponent: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef3590["5gU57O"]);
      obj.IconComponent = UploadIcon.UploadIcon;
      obj.action = callback2;
      items.push(obj);
    }
    if (isOwner) {
      const obj2 = { label: null, IconComponent: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(_modDef3590["xhcY+n"]);
      obj2.IconComponent = SettingsIcon.SettingsIcon;
      obj2.action = callback4;
      items.push(obj2);
    }
    if (stateFromStores2) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(_modDef3590["2NWMqY"]);
      obj3.IconComponent = FiltersHorizontalIcon.FiltersHorizontalIcon;
      obj3.action = callback3;
      items.push(obj3);
    }
    const obj4 = { label: null, IconComponent: null, action: null };
    const intl4 = util.intl;
    obj4.label = intl4.string(_modDef3590.xKexN1);
    obj4.IconComponent = RetryIcon.RetryIcon;
    obj4.action = callback1;
    items.push(obj4);
    return items;
  }, items15);
  let formatToPlainStringResult;
  if (null != stateFromStores1) {
    let intl = tmp(tmp2[22]).intl;
    let obj7 = { runes: null };
    const tmpResult = tmp(tmp2[42]);
    obj7.runes = tmp(tmp2[42]).runesFromUsd(stateFromStores1.cost_usd).toLocaleString();
    formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[23])["4PFO2p"], obj7);
    const runesFromUsdResult = tmp(tmp2[42]).runesFromUsd(stateFromStores1.cost_usd);
  }
  c20 = formatToPlainStringResult;
  const items16 = [callback, navigation, memo, projectName, formatToPlainStringResult, null != previewAppId && stateFromStores, tmp5];
  const effect2 = obj3.useEffect(() => {
    let stringResult = projectName;
    if (projectName == null) {
      let intl = guildId(navigation[22]).intl;
      stringResult = intl.string(projectId(navigation[23]).Xmvb23);
    }
    guildId = stringResult;
    navigation.setOptions({
      headerTitle() {
        return __initData3(NavigatorHeader.NavigatorHeader, { title: stringResult, subtitle });
      },
      headerRight() {
        let obj = { style: headerActions.headerActions, children: null };
        let tmp3 = null;
        if (closure_1_11) {
          const obj2 = { IconComponent: guildId(navigation[45]).PlayIcon, onPress, accessibilityLabel: null };
          let intl = guildId(navigation[22]).intl;
          obj2.accessibilityLabel = intl.string(projectId(navigation[23]).ecod4C);
          tmp3 = closure_2_23(guildId(navigation[44]).HeaderActionButton, obj2);
        }
        items = [tmp3, ];
        items[1] = closure_2_23(guildId(navigation[46]).ContextMenu, {
          items,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = { ref, IconComponent: closure_1_0(8795).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
            const intl = closure_1_0(1114).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1114).t["UKOtz+"]);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_1_23(closure_1_0(7480).HeaderActionButton, obj);
          }
        });
        obj.children = items;
        return closure_2_24(canPublish, obj);
      }
    });
    let obj = {
      headerTitle() {
        return __initData3(NavigatorHeader.NavigatorHeader, { title: stringResult, subtitle });
      },
      headerRight() {
        let obj = { style: headerActions.headerActions, children: null };
        let tmp3 = null;
        if (closure_1_11) {
          const obj2 = { IconComponent: guildId(navigation[45]).PlayIcon, onPress, accessibilityLabel: null };
          let intl = guildId(navigation[22]).intl;
          obj2.accessibilityLabel = intl.string(projectId(navigation[23]).ecod4C);
          tmp3 = closure_2_23(guildId(navigation[44]).HeaderActionButton, obj2);
        }
        items = [tmp3, ];
        items[1] = closure_2_23(guildId(navigation[46]).ContextMenu, {
          items,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = { ref, IconComponent: closure_1_0(8795).MoreHorizontalIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
            const intl = closure_1_0(1114).intl;
            obj.accessibilityLabel = intl.string(closure_1_0(1114).t["UKOtz+"]);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_1_23(closure_1_0(7480).HeaderActionButton, obj);
          }
        });
        obj.children = items;
        return closure_2_24(canPublish, obj);
      }
    };
  }, items16);
  const items17 = [guildId, projectId];
  const effect3 = obj3.useEffect(() => {
    const result = VibegrationsActionCreators.setSelectedProjectForGuild(guildId, projectId);
    return () => guildId(navigation[19]).setSelectedProjectForGuild(closure_1_0, null);
  }, items17);
  let obj6 = guildId(navigation[17]);
  return closure_23(canPublish, { style: tmp5.content, children: closure_23(projectId(navigation[48]), { projectId }) });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
let VibegrationsConnectionStore = fn(16692);
({ draftPatchNotes: map1, ensureConnection: closure_14, publishProject: closure_15, sendUserMessage: closure_16 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
let VibegrationsProjectStore = fn(16690);
({ canPublishProject: closure_18, isProjectOwner: closure_19 } = VibegrationsProjectStore);
let VibegrationsProjectStore = VibegrationsProjectStore_mod;
const Permissions = fn(1074).Permissions;
const MAIN_SURFACE = fn(9641).MAIN_SURFACE;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const createStyles = fn(4636);
let closure_25 = createStyles.createStyles((paddingBottom) => {
  const obj = { content: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom }, centered: null, listContent: null, createSection: null, sharedSection: null, sharedHeading: null, headerActions: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj.centered = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  const obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
  obj.listContent = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
  const obj4 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
  obj.createSection = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.sharedSection = { gap: nativeDefault.space.PX_8 };
  const obj6 = { gap: nativeDefault.space.PX_8 };
  obj.sharedHeading = { gap: nativeDefault.space.PX_4 };
  const obj7 = { gap: nativeDefault.space.PX_4 };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  return obj;
});
const constants = { PROJECTS: "PROJECTS", CHAT: "CHAT" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  const navigation = guildId(stateFromStores[16]).useNavigation();
  let obj = guildId(stateFromStores[16]);
  const items = [GuildStore];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[17]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const obj2 = guildId(stateFromStores[17]);
  const isVibegrationsGuildEnabled = guildId(stateFromStores[49]).useIsVibegrationsGuildEnabled({ guildId, location: "VibegrationsStandaloneScreen" });
  const obj3 = guildId(stateFromStores[49]);
  const items2 = [GuildMemberStore];
  const items3 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[17]).useStateFromStoresArray(items2, () => {
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
  const obj4 = guildId(stateFromStores[17]);
  const items4 = [GuildStore, PermissionStore];
  const items5 = [guildId];
  const items6 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[17]).useStateFromStores(items4, () => {
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
  const obj5 = guildId(stateFromStores[17]);
  obj7.headerLeft = guildId(stateFromStores[43]).getHeaderCloseButton(() => navigation.goBack());
  obj7.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[22]).intl;
    obj.title = intl.string(navigation(stateFromStores[23]).Xmvb23);
    return closure_1_23(guildId(stateFromStores[43]).NavigatorHeader, obj);
  };
  obj7.render = function render() {
    return __initData3(ProjectList, { guildId });
  };
  obj6[constants.PROJECTS] = obj7;
  obj6[constants.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      return __initData3(ChatScene, { guildId, projectId: projectId.projectId });
    }
  };
  const obj9 = { screens: obj6, initialRouteName: constants.PROJECTS, headerBackTitle: null };
  let intl = guildId(stateFromStores[22]).intl;
  obj9.headerBackTitle = intl.string(navigation(stateFromStores[23]).Xmvb23);
  return closure_23(guildId(stateFromStores[50]).Navigator, obj9);
};