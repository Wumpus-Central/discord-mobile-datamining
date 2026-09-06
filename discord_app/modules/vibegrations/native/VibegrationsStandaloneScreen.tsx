// discord_app/modules/vibegrations/native/VibegrationsStandaloneScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../../stores/GuildMemberStore.tsx";
import closure_10 from "../../../stores/GuildStore.tsx";
import closure_11 from "../../../stores/PermissionStore.tsx";
import closure_12 from "../stores/VibegrationsChatStore.tsx";
import rejectPendingPublish from "../stores/VibegrationsConnectionStore.tsx";
import closure_17 from "../stores/VibegrationsConnectionStore.tsx";
import isProjectOwner from "../stores/VibegrationsProjectStore.tsx";
import closure_20 from "../stores/VibegrationsProjectStore.tsx";
import { Permissions } from "../../../Constants.tsx";
import { MAIN_SURFACE } from "../../frames/FramesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function ProjectList(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let str;
  let React;
  let first;
  closure_7 = undefined;
  c8 = undefined;
  const tmp3 = callback2(navigation(stateFromStoresArray[15])().bottom);
  let obj = guildId(stateFromStoresArray[16]);
  navigation = obj.useNavigation();
  obj1 = guildId(stateFromStoresArray[17]);
  const items = [closure_20];
  stateFromStoresArray = obj1.useStateFromStoresArray(items, () => store.getOwnedProjects(), []);
  let obj2 = guildId(stateFromStoresArray[17]);
  const items1 = [closure_20];
  const items2 = [guildId];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => closure_1_20.getSharedProjects(guildId), items2);
  let obj3 = guildId(stateFromStoresArray[17]);
  const items3 = [closure_20];
  const stateFromStores = obj3.useStateFromStores(items3, () => store.getProjectsFetchState(), []);
  const items4 = [stateFromStoresArray, guildId];
  const memo = React.useMemo(() => {
    const found = stateFromStoresArray.filter((guild_id) =>
      closure_1_0(closure_1_2[18]).isVibegrationsProjectInGuild(guild_id, closure_0),
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
  const memo1 = React.useMemo(() => {
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
  const tmp9 = str(React.useState(""), 2);
  str = tmp9[0];
  React = tmp10;
  const tmp11 = str(React.useState(false), 2);
  first = tmp11[0];
  closure_7 = tmp11[1];
  [tmp14, c8] = str(React.useState(null), 2);
  const items6 = [guildId, navigation, str, first];
  let tmp16 = memo.length > 0;
  const callback = React.useCallback(
    stateFromStoresArray1(function* () {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let arr = tmp4;
              let trimmed = tmp6;
              trimmed = undefined;
              arr = undefined;
              trimmed = c4.trim();
              if ("" !== trimmed) {
                if (!closure_1_6) {
                  closure_1_7(true);
                  closure_1_8(null);
                  c3 = 2;
                  let obj2 = closure_1_0(message[19]);
                  obj1 = { guild_id: null, install_scope: "guild" };
                  obj1[0] = closure_1_0;
                  c4 = 3;
                  v0 = 1;
                  obj2 = { value: null, done: false };
                  obj2[0] = obj2.createProject(obj1);
                  return obj2;
                }
              }
              v0 = 3;
            }
          } else if (1 !== tmp9) {
            if (2 === tmp9) {
              c3 = 1;
              const _Error = Error;
              if (message instanceof Error) {
                message = message.message;
              } else {
                const intl = closure_1_0(message[20]).intl;
                message = intl.string(closure_1_1(message[21]).KKkp5Y);
              }
              closure_8(message);
              const tmp32 = closure_8;
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_1_7(false);
              v0 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              arr = arg1;
              closure_1_14(arr);
              closure_1_16(arr, trimmed);
              v0("");
              obj = { projectId: null };
              obj[0] = arr;
              arr = arr.push(closure_1_26.CHAT, obj);
              c3 = 1;
              c3 = 0;
              closure_1_7(false);
            }
          }
          c3 = 0;
          callback(false);
          throw message;
        } catch (tmp58) {
          message = tmp58;
          if (tmp5 === c3) {
            v0 = tmp3;
            throw tmp58;
          } else if (tmp2 === tmp60) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items6,
  );
  if (!tmp16) {
    tmp16 = memo1.length > 0;
  }
  if (tmp16) {
    obj = { style: null, children: null };
    obj[0] = tmp3.content;
    obj = { contentContainerStyle: null, children: null };
    obj[0] = tmp3.listContent;
    obj1 = { style: null, children: null };
    obj1[0] = tmp3.createSection;
    obj2 = { variant: "heading-md/bold", color: "text-default", children: null };
    const intl2 = tmp4(tmp2[20]).intl;
    obj2[2] = intl2.string(tmp(tmp2[21])["2tYpRK"]);
    const items7 = [callback(tmp4(tmp2[22]).Text, obj2), , ,];
    obj3 = { placeholder: null, autoComplete: "off", value: null, onChange: null, isDisabled: null };
    const intl3 = tmp4(tmp2[20]).intl;
    obj3[0] = intl3.string(tmp(tmp2[21]).TU9IGR);
    obj3[2] = str;
    obj3[3] = tmp10;
    obj3[4] = first;
    items7[1] = callback(tmp4(tmp2[23]).TextArea, obj3);
    let tmp23Result = null;
    if (null != tmp14) {
      const obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
      obj4[2] = tmp14;
      tmp23Result = tmp23(tmp4(tmp2[22]).Text, obj4);
    }
    items7[2] = tmp23Result;
    const obj5 = { variant: "primary", text: null, disabled: null, loading: null, onPress: null };
    const intl4 = tmp4(tmp2[20]).intl;
    obj5[1] = intl4.string(tmp4(tmp2[20]).t.CumH4u);
    obj5[2] = "" === str.trim();
    obj5[3] = first;
    obj5[4] = callback;
    items7[3] = callback(tmp4(tmp2[24]).Button, obj5);
    obj1[1] = items7;
    const items8 = [closure_24(c8, obj1), , ,];
    tmp23Result = null;
    if (memo.length > 0) {
      const obj6 = { hasIcons: false, children: null };
      obj6[1] = memo.map((label) => {
        closure_0 = label;
        const obj = { label: label.name, subLabel: null, arrow: true, onPress: null };
        let relativeTimestamp;
        if (null != label.updated_at) {
          const _Date = Date;
          const date = new Date(label.updated_at);
          relativeTimestamp = guildId(stateFromStoresArray[27]).getRelativeTimestamp(date.getTime());
          const tmp2Result = guildId(stateFromStoresArray[27]);
        }
        obj[1] = relativeTimestamp;
        obj[3] = function onPress() {
          return closure_1_1.push(closure_2_26.CHAT, { projectId: label.id });
        };
        return closure_1_23(guildId(stateFromStoresArray[26]).TableRow, obj, label.id);
      });
      tmp23Result = tmp23(tmp4(tmp2[25]).TableRowGroup, obj6);
    }
    items8[1] = tmp23Result;
    let tmp25Result = null;
    if (memo1.length > 0) {
      const obj7 = { style: null, children: null };
      obj7[0] = tmp3.sharedSection;
      const obj8 = { style: null, children: null };
      obj8[0] = tmp3.sharedHeading;
      const obj9 = { variant: "heading-md/bold", color: "text-default", children: null };
      const intl5 = tmp4(tmp2[20]).intl;
      obj9[2] = intl5.string(tmp(tmp2[21]).jrCnUc);
      const items9 = [tmp23(tmp4(tmp2[22]).Text, obj9)];
      const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl6 = tmp4(tmp2[20]).intl;
      obj10[2] = intl6.string(tmp(tmp2[21])["1KEhDu"]);
      items9[1] = tmp23(tmp4(tmp2[22]).Text, obj10);
      obj8[1] = items9;
      const items10 = [tmp25(tmp24, obj8)];
      const obj11 = { hasIcons: false, children: null };
      obj11[1] = memo1.map((label) => {
        closure_0 = label;
        const obj = { label: label.name, subLabel: null, arrow: true, onPress: null };
        let relativeTimestamp;
        if (null != label.updated_at) {
          const _Date = Date;
          const date = new Date(label.updated_at);
          relativeTimestamp = guildId(stateFromStoresArray[27]).getRelativeTimestamp(date.getTime());
          const tmp2Result = guildId(stateFromStoresArray[27]);
        }
        obj[1] = relativeTimestamp;
        obj[3] = function onPress() {
          return closure_1_1.push(closure_2_26.CHAT, { projectId: label.id });
        };
        return closure_1_23(guildId(stateFromStoresArray[26]).TableRow, obj, label.id);
      });
      items10[1] = tmp23(tmp4(tmp2[25]).TableRowGroup, obj11);
      obj7[1] = items10;
      tmp25Result = tmp25(tmp24, obj7);
    }
    items8[2] = tmp25Result;
    items8[3] = null;
    obj[1] = items8;
    obj[1] = closure_24(closure_7, obj);
    return callback(c8, obj);
  } else {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp3.centered;
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    if ("loading" === type) {
      let tmp17Result = tmp17(first, {});
    } else {
      const obj13 = { variant: "text-md/normal", color: "text-muted", children: null };
      let intl = tmp4(tmp2[20]).intl;
      obj13[2] = intl.string(tmp(tmp2[21])["vqy+in"]);
      tmp17Result = tmp17(tmp4(tmp2[22]).Text, obj13);
    }
    obj12[1] = tmp17Result;
    tmp17Result = tmp17(c8, obj12);
    const tmp18 = c8;
  }
}
function ChatScene(guildId) {
  guildId = guildId.guildId;
  const projectId = guildId.projectId;
  let navigation;
  closure_3 = undefined;
  let projectExists;
  let projectName;
  previewAppId = undefined;
  let isOwner;
  let canPublish;
  let stateFromStores2;
  let callback;
  closure_11 = undefined;
  let callback1;
  let first;
  closure_14 = undefined;
  let callback2;
  let callback3;
  projectGuildId = undefined;
  let callback4;
  let memo;
  c20 = undefined;
  let obj = guildId(navigation[16]);
  navigation = obj.useNavigation();
  let tmp5 = callback2(projectId(navigation[28])({ includeKeyboardHeight: true }).insets.bottom);
  closure_3 = tmp5;
  let items = [c20];
  const items1 = [projectId];
  const stateFromStoresObject = guildId(navigation[17]).useStateFromStoresObject(
    items,
    () => {
      const project = _undefined.getProject(projectId);
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
      obj[1] = name;
      let guild_id;
      if (project != null) {
        guild_id = project.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      obj[2] = guild_id;
      let prop;
      if (project != null) {
        prop = project.preview_application_id;
      }
      if (prop == null) {
        prop = null;
      }
      obj[3] = prop;
      let tmp5 = null != project;
      if (tmp5) {
        tmp5 = memo(project);
      }
      obj[4] = tmp5;
      let tmp7 = null != project;
      if (tmp7) {
        tmp7 = callback4(project);
      }
      obj[5] = tmp7;
      return obj;
    },
    items1,
  );
  projectExists = stateFromStoresObject.projectExists;
  projectName = stateFromStoresObject.projectName;
  ({ projectGuildId, previewAppId } = stateFromStoresObject);
  isOwner = stateFromStoresObject.isOwner;
  canPublish = stateFromStoresObject.canPublish;
  const items2 = [navigation, projectExists];
  const effect = projectName.useEffect(() => {
    if (!projectExists) {
      navigation.goBack();
    }
  }, items2);
  let obj2 = guildId(navigation[17]);
  const items3 = [c20];
  const items4 = [projectId];
  const stateFromStores = guildId(navigation[17]).useStateFromStores(
    items3,
    () => {
      const integrationStatus = _undefined.getIntegrationStatus(projectId);
      let preview_ready;
      if (integrationStatus != null) {
        preview_ready = integrationStatus.preview_ready;
      }
      return true === preview_ready;
    },
    items4,
  );
  const obj4 = guildId(navigation[17]);
  const items5 = [callback1];
  const items6 = [projectId];
  const stateFromStores1 = guildId(navigation[17]).useStateFromStores(
    items5,
    () => callback1.getProjectUsage(projectId),
    items6,
  );
  let obj5 = guildId(navigation[17]);
  const items7 = [projectGuildId];
  const items8 = [projectId];
  stateFromStores2 = guildId(navigation[17]).useStateFromStores(
    items7,
    () => null != projectGuildId.getModelSettings(projectId),
    items8,
  );
  const items9 = [projectId];
  const effect1 = projectName.useEffect(() => {
    const project = guildId(navigation[19]).getProject(projectId);
    project.catch(() => {});
  }, items9);
  const items10 = [previewAppId];
  callback = projectName.useCallback(() => {
    if (null != previewAppId) {
      let obj = projectId(navigation[29]);
      obj = { applicationId: null, surface: null };
      obj[0] = tmp;
      obj[1] = closure_1_22;
      obj.launchFrame(obj).catch(() => {});
      const launchFrameResult = obj.launchFrame(obj);
    }
  }, items10);
  closure_11 = tmp13;
  const items11 = [previewAppId];
  callback1 = obj3.useCallback(() => {
    projectId(navigation[30])(previewAppId);
  }, items11);
  let tmp15 = projectExists(projectName.useState(false), 2);
  first = tmp15[0];
  closure_14 = tmp15[1];
  const items12 = [guildId, projectId, first];
  callback2 = obj3.useCallback(() => {
    if (!first) {
      let obj = _undefined;
      const project = _undefined.getProject(projectId);
      if (null != project) {
        const integrationStatus = obj.getIntegrationStatus(tmp);
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
        if (true === preview_ready) {
          if (integrationStatus.integration_installed) {
            if (!integrationStatus.bot_permissions_changed) {
              callback(true);
              const promise = first(tmp);
              promise.catch(() => {});
              const nextPromise = callback2(tmp).then((ok) => {
                if (true !== ok.ok) {
                  const _Error = Error;
                  const intl = closure_1_0(closure_1_2[20]).intl;
                  error = new Error(intl.string(closure_1_1(closure_1_2[21]).fNP6Cd));
                  throw error;
                } else {
                  const result = closure_1_0(closure_1_2[19]).refreshPublishedProject(closure_1, { isPreview: false });
                  result.catch(() => {});
                }
              });
              const promise2 = callback2(tmp);
              nextPromise.catch(() => {}).finally(() => callback(false));
              obj1 = guildId(navigation[32]);
              let guild_id = project.guild_id;
              const catchPromise1 = nextPromise.catch(() => {});
              const tmp11 = guildId;
              const tmp12 = navigation;
              const tmp13 = closure_1_23;
              if (guild_id == null) {
                guild_id = guildId;
              }
              obj = { content: null, key: null };
              obj = { guildId: null, applicationId: null, projectName: null, publish: null, initialDraft: null };
              obj[0] = guild_id;
              ({ application_id: obj4[1], name: obj4[2] } = project);
              obj[3] = nextPromise;
              obj[4] = promise;
              obj[0] = tmp13(projectId(navigation[33]), obj);
              obj[1] = tmp11(tmp12[33]).VIBEGRATIONS_PUBLISH_NOTES_SHEET_KEY;
              obj1.showActionSheet(obj);
              const tmp15 = projectId(navigation[33]);
            }
          }
          obj1 = { title: null, body: null };
          let intl = guildId(navigation[20]).intl;
          obj1[0] = intl.string(projectId(navigation[21]).DYwf2n);
          const intl2 = guildId(navigation[20]).intl;
          obj1[1] = intl2.string(projectId(navigation[21])["nDQB/b"]);
          projectId(navigation[31]).show(obj1);
          const obj5 = projectId(navigation[31]);
        } else {
          const obj2 = { title: null, body: null };
          const intl3 = guildId(navigation[20]).intl;
          obj2[0] = intl3.string(projectId(navigation[21])["+UouPe"]);
          const intl4 = guildId(navigation[20]).intl;
          obj2[1] = intl4.string(projectId(navigation[21])["E0QD++"]);
          projectId(navigation[31]).show(obj2);
          const obj7 = projectId(navigation[31]);
        }
      }
    }
  }, items12);
  const items13 = [projectId];
  callback3 = obj3.useCallback(() => {
    let obj = guildId(navigation[32]);
    obj = {
      content: closure_1_23(projectId(navigation[34]), obj),
      key: guildId(navigation[34]).VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY,
    };
    obj = { projectId };
    obj.showActionSheet(obj);
  }, items13);
  if (projectGuildId == null) {
    projectGuildId = guildId;
  }
  const items14 = [projectId, projectGuildId];
  callback4 = obj3.useCallback(() => {
    let obj = guildId(navigation[32]);
    obj = {
      content: closure_1_23(projectId(navigation[35]), obj),
      key: guildId(navigation[35]).VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY,
    };
    obj = { projectId, guildId: projectGuildId };
    obj.showActionSheet(obj);
  }, items14);
  const items15 = [canPublish, callback3, callback4, callback2, callback1, stateFromStores2, isOwner];
  memo = obj3.useMemo(() => {
    const items = [];
    if (canPublish) {
      let obj = { label: null, IconComponent: null, action: null };
      const intl = guildId(navigation[20]).intl;
      obj[0] = intl.string(projectId(navigation[21])["5gU57O"]);
      obj[1] = guildId(navigation[36]).UploadIcon;
      obj[2] = callback2;
      items.push(obj);
    }
    if (isOwner) {
      obj = { label: null, IconComponent: null, action: null };
      const intl2 = guildId(navigation[20]).intl;
      obj[0] = intl2.string(projectId(navigation[21])["xhcY+n"]);
      obj[1] = guildId(navigation[37]).SettingsIcon;
      obj[2] = callback4;
      items.push(obj);
    }
    if (stateFromStores2) {
      obj = { label: null, IconComponent: null, action: null };
      const intl3 = guildId(navigation[20]).intl;
      obj[0] = intl3.string(projectId(navigation[21])["2NWMqY"]);
      obj[1] = guildId(navigation[38]).FiltersHorizontalIcon;
      obj[2] = callback3;
      items.push(obj);
    }
    obj1 = { label: null, IconComponent: null, action: null };
    const intl4 = guildId(navigation[20]).intl;
    obj1[0] = intl4.string(projectId(navigation[21]).xKexN1);
    obj1[1] = guildId(navigation[39]).RetryIcon;
    obj1[2] = callback1;
    items.push(obj1);
    return items;
  }, items15);
  let formatToPlainStringResult;
  if (null != stateFromStores1) {
    let intl = tmp(tmp2[20]).intl;
    obj = { runes: null };
    const tmpResult = tmp(tmp2[40]);
    obj[0] = tmp(tmp2[40]).runesFromUsd(stateFromStores1.cost_usd).toLocaleString();
    formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[21])["4PFO2p"], obj);
    const runesFromUsdResult = tmp(tmp2[40]).runesFromUsd(stateFromStores1.cost_usd);
  }
  c20 = formatToPlainStringResult;
  const items16 = [
    callback,
    navigation,
    memo,
    projectName,
    formatToPlainStringResult,
    null != previewAppId && stateFromStores,
    tmp5,
  ];
  const effect2 = obj3.useEffect(() => {
    let stringResult = projectName;
    if (projectName == null) {
      let intl = guildId(navigation[20]).intl;
      stringResult = intl.string(projectId(navigation[21]).Xmvb23);
    }
    guildId = stringResult;
    navigation.setOptions({
      headerTitle() {
        return closure_2_23(guildId(navigation[41]).NavigatorHeader, { title: closure_0, subtitle: closure_1_20 });
      },
      headerRight() {
        let obj = { style: headerActions.headerActions, children: null };
        let tmp3 = null;
        if (closure_11) {
          obj = { IconComponent: null, onPress: null, accessibilityLabel: null };
          obj[0] = stringResult(closure_1_2[43]).PlayIcon;
          obj[1] = closure_10;
          let intl = stringResult(closure_1_2[20]).intl;
          obj[2] = intl.string(closure_1_1(closure_1_2[21]).ecod4C);
          tmp3 = closure_1_23(stringResult(closure_1_2[42]).HeaderActionButton, obj);
        }
        const items = [tmp3];
        obj = {
          items: closure_19,
          align: "below",
          children(arg0) {
            ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
            const obj = {
              ref,
              IconComponent: callback(8672).MoreHorizontalIcon,
              onPress,
              accessibilityLabel: null,
              accessibilityActions: null,
              onAccessibilityAction: null,
            };
            const intl = callback(1114).intl;
            obj[3] = intl.string(callback(1114).t["UKOtz+"]);
            obj[4] = accessibilityActions;
            obj[5] = onAccessibilityAction;
            return callback2(callback(7377).HeaderActionButton, obj);
          },
        };
        items[1] = closure_1_23(stringResult(closure_1_2[44]).ContextMenu, obj);
        obj[1] = items;
        return closure_1_24(closure_1_8, obj);
      },
    });
  }, items16);
  const items17 = [guildId, projectId];
  const effect3 = obj3.useEffect(() => {
    const result = guildId(navigation[19]).setSelectedProjectForGuild(guildId, projectId);
    return () => closure_1_0(closure_1_2[19]).setSelectedProjectForGuild(closure_0, null);
  }, items17);
  obj = { style: tmp5.content, children: callback(tmp4(tmp2[46]), { projectId }) };
  return callback(canPublish, obj);
}
({ ActivityIndicator: closure_6, ScrollView: error, View: closure_8 } = get_ActivityIndicator);
({
  draftPatchNotes: map1,
  ensureConnection: closure_14,
  publishProject: closure_15,
  sendUserMessage: closure_16,
} = rejectPendingPublish);
({ canPublishProject: closure_18, isProjectOwner: closure_19 } = isProjectOwner);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = createCacheKey.createStyles((paddingBottom) => {
  let obj = {
    content: null,
    centered: null,
    listContent: null,
    createSection: null,
    sharedSection: null,
    sharedHeading: null,
    headerActions: null,
  };
  obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingBottom };
  obj[0] = obj;
  obj = { flex: 1, alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_24 };
  obj[1] = obj;
  obj[2] = {
    paddingVertical: ThemesDefault.space.PX_8,
    paddingHorizontal: ThemesDefault.space.PX_16,
    gap: ThemesDefault.space.PX_16,
  };
  obj1 = {
    paddingVertical: ThemesDefault.space.PX_8,
    paddingHorizontal: ThemesDefault.space.PX_16,
    gap: ThemesDefault.space.PX_16,
  };
  obj[3] = { gap: ThemesDefault.space.PX_8 };
  const obj2 = { gap: ThemesDefault.space.PX_8 };
  obj[4] = { gap: ThemesDefault.space.PX_8 };
  const obj3 = { gap: ThemesDefault.space.PX_8 };
  obj[5] = { gap: ThemesDefault.space.PX_4 };
  const obj4 = { gap: ThemesDefault.space.PX_4 };
  obj[6] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_16 };
  return obj;
});
let closure_26 = { PROJECTS: "PROJECTS", CHAT: "CHAT" };
let result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsStandaloneScreen.tsx");

export default function VibegrationsStandaloneScreen(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let stateFromStores;
  let isVibegrationsGuildEnabled;
  let obj = guildId(stateFromStores[16]);
  navigation = obj.useNavigation();
  obj1 = guildId(stateFromStores[17]);
  const items = [closure_10];
  const items1 = [guildId];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_10.getGuild(guildId), items1);
  isVibegrationsGuildEnabled = guildId(stateFromStores[47]).useIsVibegrationsGuildEnabled({
    guildId,
    location: "VibegrationsStandaloneScreen",
  });
  const obj3 = guildId(stateFromStores[47]);
  const items2 = [closure_9];
  const items3 = [guildId];
  const stateFromStoresArray = guildId(stateFromStores[17]).useStateFromStoresArray(
    items2,
    () => {
      const selfMember = closure_1_9.getSelfMember(guildId);
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
  const obj4 = guildId(stateFromStores[17]);
  const items4 = [closure_10, closure_11];
  const items5 = [guildId];
  const items6 = [
    isVibegrationsGuildEnabled,
    guildId,
    stateFromStoresArray,
    guildId(stateFromStores[17]).useStateFromStores(
      items4,
      () => {
        const guild = closure_1_10.getGuild(guildId);
        let canResult = null != guild;
        if (canResult) {
          canResult = closure_1_11.can(closure_1_21.MANAGE_GUILD, guild);
        }
        return canResult;
      },
      items5,
    ),
  ];
  const effect = React.useEffect(() => {
    if (isVibegrationsGuildEnabled) {
      guildId(stateFromStores[19]).listProjects(guildId);
      const obj = guildId(stateFromStores[19]);
    }
  }, items6);
  const items7 = [stateFromStores, isVibegrationsGuildEnabled, navigation];
  const effect1 = React.useEffect(() => {
    if (!tmp) {
      navigation.goBack();
    }
  }, items7);
  obj = {};
  obj = { headerLeft: null, headerTitle: null, render: null };
  const obj5 = guildId(stateFromStores[17]);
  obj[0] = guildId(stateFromStores[41]).getHeaderCloseButton(() => navigation.goBack());
  obj[1] = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(stateFromStores[20]).intl;
    obj[0] = intl.string(navigation(stateFromStores[21]).Xmvb23);
    return callback(guildId(stateFromStores[41]).NavigatorHeader, obj);
  };
  obj[2] = function render() {
    return closure_1_23(closure_1_27, { guildId });
  };
  obj[constants.PROJECTS] = obj;
  obj[constants.CHAT] = {
    ignoreKeyboard: true,
    render(projectId) {
      return closure_1_23(closure_1_28, { guildId, projectId: projectId.projectId });
    },
  };
  obj1 = { screens: obj, initialRouteName: constants.PROJECTS, headerBackTitle: null };
  let intl = guildId(stateFromStores[20]).intl;
  obj1[2] = intl.string(navigation(stateFromStores[21]).Xmvb23);
  return callback(guildId(stateFromStores[48]).Navigator, obj1);
}
