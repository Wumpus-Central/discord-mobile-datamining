// === Module 17980: GuildSettingsRoleEditConnectionsControls ===

// Module 17980 (GuildSettingsRoleEditConnectionsControls)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2025 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import Text_Text from "Text/Text" /* 4718 */;
import Stack_Stack from "Stack/Stack" /* 5142 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import Pressables from "Pressables" /* 5292 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5577 */;
import TableRadioGroup from "TableRadioGroup" /* 5855 */;
import TableRadioRow from "TableRadioRow" /* 5858 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6803 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11456 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17967 */;
import GuildSettingsRoleEditConnectionConfigurationDefault from "GuildSettingsRoleEditConnectionConfiguration" /* 17981 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7324 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17953 */;

require = fn;
function HeaderSection(arg0) {
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = closure_13();
  let tmp2Result = null;
  if (hasMembers) {
    const obj = { style: tmp.warningContainer, children: null };
    const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
    const items = [closure_1_10(CircleErrorIcon.CircleErrorIcon, obj2), ];
    const obj3 = { variant: "text-xs/medium", style: tmp.warningText, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["2aFeef"]);
    items[1] = closure_1_10(Text_Text.Text, obj3);
    obj.children = items;
    tmp2Result = closure_1_11(View, obj);
  }
  const items1 = [tmp2Result, ];
  const obj4 = { style: tmp.headerTitleContainer, children: null };
  const obj5 = { variant: "text-md/semibold", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.nMir27);
  const items2 = [closure_1_10(Text_Text.Text, obj5), ];
  let tmp13Result;
  if (hasConnections) {
    const obj6 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = util.intl;
    obj7.children = intl3.string(util.t.ntW1cc);
    obj6.children = closure_1_10(Text_Text.Text, obj7);
    tmp13Result = closure_1_10(Pressables.PressableOpacity, obj6);
  }
  const obj8 = { children: null };
  const obj9 = { children: null };
  items2[1] = tmp13Result;
  obj4.children = items2;
  const items3 = [closure_1_11(View, obj4), ];
  const obj10 = { variant: "text-sm/medium", children: null };
  const intl4 = util.intl;
  const obj11 = { helpdeskArticleUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
  obj10.children = intl4.format(util.t.q5f7tK, obj11);
  items3[1] = closure_1_10(Text_Text.Text, obj10);
  obj9.children = items3;
  items1[1] = closure_1_11(Stack_Stack.Stack, obj9);
  obj8.children = items1;
  return closure_1_11(closure_1_12, obj8);
}
function AndOrRadios(setPendingRoleConfigurations) {
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  closure_1 = setPendingRoleConfigurations.setPendingRoleConfigurations;
  if (ConnectionsUtils.ConnectionConfigurationRuleOperator.OR === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    const _Object = Object;
    const values = Object.values(_modDef12.groupBy(roleConnectionConfigurations, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId));
    const obj2 = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.Xs7PHX);
    obj2.value = setPendingRoleConfigurations.currentOperator;
    obj2.onChange = function onChange(arg0) {
      closure_1(roleConnectionConfigurations, arg0);
    };
    const obj3 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.OR, label: null, disabled: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t.W3iY58);
    let tmp11 = locked;
    if (!locked) {
      tmp11 = values.length < 2;
    }
    obj3.disabled = tmp11;
    const items2 = [closure_1_10(TableRadioRow.TableRadioRow, obj3), ];
    const obj4 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.AND, label: null, disabled: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.gHXS9A);
    obj4.disabled = locked;
    items2[1] = closure_1_10(TableRadioRow.TableRadioRow, obj4);
    obj2.children = items2;
    return closure_1_11(TableRadioGroup.TableRadioGroup, obj2);
  }
}
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  _require = memo;
  importDefault = arg1;
  dependencyMap = locked;
  function handleConfigurationChange(arg0, arg1) {
    const items = [];
    for (const item10006 of closure_0) {
      let obj = {};
      let merged = Object.assign(item10006);
      let arr = items.push(obj);
      continue;
    }
    if (null == arg0) {
      if (null !== memo[arg1]) {
        if (null == iter.connectionMetadataField) {
          if (null == iter.operator) {
            if (null == iter.value) {
              let found = items.filter((connectionType) => {
                if (null == iter.applicationId) {
                  let tmp2 = connectionType.connectionType !== iter.connectionType;
                } else {
                  tmp2 = connectionType.connectionType !== iter.connectionType || connectionType.applicationId !== iter.applicationId;
                }
                return tmp2;
              });
            }
          }
        }
      }
      items.splice(arg1, 1);
      found = items;
    } else if (-1 === arg1) {
      items.push(arg0);
      found = items;
    } else {
      found = items;
      if (arg1 >= 0) {
        items[arg1] = arg0;
        found = items;
      }
    }
    closure_1(found);
  }
  const map = new Map();
  const item = memo.forEach((connectionType, index) => {
    const combined = "" + connectionType.connectionType + ":" + connectionType.applicationId;
    if (map.has(combined)) {
      value = map.get(combined);
      if (value != null) {
        const obj2 = { index, configuration: connectionType };
        value.push(obj2);
      }
    } else {
      const obj3 = { index, configuration: connectionType };
      const items = [obj3];
      const result = map.set(combined, items);
    }
  });
  const values = map.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr = nextResult;
    if (!nextResult.some((configuration) => null == configuration.configuration.connectionMetadataField && null == configuration.configuration.operator && null == configuration.configuration.value)) {
      let obj = {};
      let merged = Object.assign(arr[0].configuration);
      obj.connectionMetadataField = undefined;
      obj.operator = undefined;
      obj.value = undefined;
      let obj2 = { index: memo.push(obj) - 1, configuration: obj };
      let arr2 = arr.push(obj2);
    }
    continue;
  }
  let obj3 = { spacing: nativeDefault.space.PX_24, children: Array.from(map.values()).map((configurationItems) => closure_2_10(GuildSettingsRoleEditConnectionConfigurationDefault, { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations }, configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index)) };
  return closure_10(require("Stack/Stack").Stack, obj3);
}
function AddConnectionButton(locked) {
  ({ handleConnectionTapped: require, excludedConnections: importDefault, excludedApplications: dependencyMap, roleId: noop, integrations: View, gameApplicationIds: GuildRoleMemberCountStore } = locked);
  let obj = { text: null, variant: "secondary", icon: null, disabled: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["OSvW5+"]);
  obj.icon = closure_10(CirclePlusIcon.CirclePlusIcon, { size: "sm" });
  obj.disabled = locked.locked;
  obj.onPress = function onPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      addConnection(arg0) {
        return closure_1_0(arg0, undefined);
      },
      excludedConnections,
      excludedApplications,
      integrations,
      onCompleteApplication(arg0) {
        return closure_1_0(closure_2_8, arg0);
      },
      gameApplicationIds: null,
      onCompleteIdentityApplication: null
    };
    let tmp3 = GuildRoleMemberCountStore;
    const combined = "SelectConnectionActionSheet-" + noop;
    if (GuildRoleMemberCountStore == null) {
      tmp3 = null;
    }
    obj2.gameApplicationIds = tmp3;
    obj2.onCompleteIdentityApplication = function onCompleteIdentityApplication(arg0) {
      return closure_1_0(closure_2_9, arg0);
    };
    obj.openLazy(asyncRequireImpl(17983, dependencyMap.paths), combined, obj2);
  };
  return closure_10(components_Button_Button.Button, obj);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const Constants = fn(5578);
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_8, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { formContent: { paddingTop: 16, paddingBottom: 0 }, warningContainer: { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.xs }, warningText: { flex: 1, marginLeft: 10 }, headerTitleContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between" } };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let stateFromStoresArray;
  let AND;
  let memo;
  let tmp = closure_13();
  const applicationIdentityLinkedRolesEnabled = guild(stateFromStoresArray[25]).useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj = guild(stateFromStoresArray[25]);
  const applicationIdentityLinkedRolesEnabled1 = guild(stateFromStoresArray[26]).useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let obj2 = guild(stateFromStoresArray[26]);
  let items = [GuildRoleMemberCountStore];
  let items1 = [role.id, guild.id];
  let num = guild(stateFromStoresArray[27]).useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guild.id);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  }, items1);
  let obj3 = guild(stateFromStoresArray[27]);
  let items2 = [GuildSettingsRolesStore];
  stateFromStoresArray = guild(stateFromStoresArray[27]).useStateFromStoresArray(items2, () => {
    const editedRoleConnectionConfigurationsMap = GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
    let items = editedRoleConnectionConfigurationsMap.get(role.id);
    if (items == null) {
      items = [];
    }
    return items;
  });
  if (stateFromStoresArray.length > 1) {
    AND = tmp2(tmp3[9]).ConnectionConfigurationRuleOperator.OR;
  } else {
    AND = tmp2(tmp3[9]).ConnectionConfigurationRuleOperator.AND;
  }
  const items3 = [AND, stateFromStoresArray];
  memo = AND.useMemo(() => {
    if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.OR) {
      let flatResult = stateFromStoresArray.flat();
    } else {
      if (null != stateFromStoresArray) {
        if (stateFromStoresArray.length > 0) {
          flatResult = stateFromStoresArray[0];
        }
      }
      flatResult = [];
    }
    return flatResult;
  }, items3);
  const items4 = [memo];
  const memo1 = AND.useMemo(() => new Set(memo.map((connectionType) => connectionType.connectionType)), items4);
  const items5 = [memo];
  const memo2 = AND.useMemo(() => {
    const mapped = memo.map((applicationId) => {
      let str = applicationId.applicationId;
      if (str == null) {
        str = "";
      }
      return str;
    });
    return new Set(mapped.filter((item) => "" !== item));
  }, items5);
  if (num == null) {
    num = 0;
  }
  const obj5 = { contentContainerStyle: tmp.formContent, keyboardShouldPersistTaps: "handled", children: null };
  const obj6 = { spacing: role(stateFromStoresArray[8]).space.PX_24, children: null };
  const items6 = [
    closure_10(HeaderSection, {
      clearConnections() {
        const result = GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations(role.id, []);
      },
      locked,
      hasConnections: memo1.size > 0,
      hasMembers: num > 0
    }),
  ,
  ,

  ];
  let tmp11Result = null;
  if (memo1.size > 0) {
    const obj8 = {
      locked,
      currentOperator: AND,
      roleConnectionConfigurations: memo,
      setPendingRoleConfigurations(arg0, arg1) {
          if (arg1 === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
            if (0 === arg0.length) {
              let items = [];
            } else {
              const items1 = [];
              HermesBuiltin.arraySpread(arg0, 0);
              items = [items1];
            }
          } else {
            const _Object = Object;
            const result = obj.updateRoleConnectionConfigurations(role.id, Object.values(_modDef12.groupBy(arg0, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId)));
          }
          obj = GuildSettingsRolesActionCreators;
        }
    };
    tmp11Result = closure_10(AndOrRadios, obj8);
  }
  items6[1] = tmp11Result;
  let tmp15 = null;
  if (memo1.size > 0) {
    const id = role.id;
    tmp15 = renderRoleConnectionConfigurations(memo, (arg0) => {
      if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
        if (0 === arg0.length) {
          let items = [];
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(arg0, 0);
          items = [items1];
        }
      } else {
        const _Object = Object;
        const result = obj.updateRoleConnectionConfigurations(role.id, Object.values(_modDef12.groupBy(arg0, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId)));
      }
      obj = GuildSettingsRolesActionCreators;
    }, locked, 0, integrations);
  }
  items6[2] = tmp15;
  const obj9 = {
    handleConnectionTapped(connectionType, applicationId) {
      const items = [...memo];
      const obj = { connectionType, connectionMetadataField: "Array", applicationId, operator: "color", value: 1090584578 };
      items.push(obj);
      if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
        if (0 === items.length) {
          let items1 = [];
        } else {
          const items2 = [];
          HermesBuiltin.arraySpread(items, 0);
          items1 = [items2];
        }
      } else {
        const _Object = Object;
        const result = obj2.updateRoleConnectionConfigurations(role.id, Object.values(_modDef12.groupBy(items, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId)));
      }
      obj2 = GuildSettingsRolesActionCreators;
    },
    excludedConnections: memo1,
    excludedApplications: memo2,
    roleId: role.id,
    integrations,
    gameApplicationIds: null,
    locked: null
  };
  if (applicationIdentityLinkedRolesEnabled) {
    let gameApplicationIds = guild.gameApplicationIds;
  } else {
    gameApplicationIds = null;
  }
  obj9.gameApplicationIds = gameApplicationIds;
  if (!locked) {
    locked = tmp10;
  }
  obj9.locked = locked;
  items6[3] = closure_10(AddConnectionButton, obj9);
  obj6.children = items6;
  obj5.children = closure_11(guild(stateFromStoresArray[14]).Stack, obj6);
  return closure_10(guild(stateFromStoresArray[28]).Form, obj5);
};