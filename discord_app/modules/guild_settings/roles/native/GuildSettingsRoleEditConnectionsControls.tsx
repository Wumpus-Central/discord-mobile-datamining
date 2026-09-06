// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ConnectionsUtils from "../../../connections/ConnectionsUtils.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import GuildSettingsRolesActionCreators from "../GuildSettingsRolesActionCreators.tsx";
import GuildSettingsRoleEditConnectionConfigurationDefault from "GuildSettingsRoleEditConnectionConfiguration.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleMemberCountStore from "../../GuildRoleMemberCountStore.tsx";
import GuildSettingsRolesStore from "../GuildSettingsRolesStore.tsx";

require = fn;
function HeaderSection(arg0) {
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = closure_13();
  let tmp2Result = null;
  if (hasMembers) {
    let obj = { style: tmp.warningContainer, children: null };
    obj = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
    const items = [closure_1_10(CircleErrorIcon.CircleErrorIcon, obj)];
    obj = { variant: "text-xs/medium", style: tmp.warningText, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["2aFeef"]);
    items[1] = closure_1_10(Text_Text.Text, obj);
    obj.children = items;
    tmp2Result = tmp2(View, obj);
  }
  const items1 = [tmp2Result];
  const obj1 = { style: tmp.headerTitleContainer, children: null };
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.nMir27);
  const items2 = [closure_1_10(Text_Text.Text, obj2)];
  let tmp13Result;
  if (hasConnections) {
    const obj3 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: null };
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = tmp10(1114).intl;
    obj4.children = intl3.string(tmp10(1114).t.ntW1cc);
    obj3.children = tmp13(tmp10(4556).Text, obj4);
    tmp13Result = tmp13(tmp10(5123).PressableOpacity, obj3);
  }
  const obj5 = { children: null };
  const obj6 = { children: null };
  items2[1] = tmp13Result;
  obj1.children = items2;
  const items3 = [closure_1_11(View, obj1)];
  const obj7 = { variant: "text-sm/medium", children: null };
  const intl4 = tmp10(1114).intl;
  const obj8 = { helpdeskArticleUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
  obj7.children = intl4.format(util.t.q5f7tK, obj8);
  items3[1] = closure_1_10(Text_Text.Text, obj7);
  obj6.children = items3;
  items1[1] = closure_1_11(Stack_Stack.Stack, obj6);
  obj5.children = items1;
  return closure_1_11(closure_1_12, obj5);
}
function AndOrRadios(setPendingRoleConfigurations) {
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  closure_1 = setPendingRoleConfigurations.setPendingRoleConfigurations;
  if (
    ConnectionsUtils.ConnectionConfigurationRuleOperator.OR === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND
  ) {
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    const _Object = Object;
    let obj = _modDef12;
    const values = Object.values(
      obj.groupBy(
        roleConnectionConfigurations,
        (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId,
      ),
    );
    obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t.Xs7PHX);
    obj.value = setPendingRoleConfigurations.currentOperator;
    obj.onChange = function onChange(arg0) {
      closure_1(roleConnectionConfigurations, arg0);
    };
    obj = { value: tmp(5407).ConnectionConfigurationRuleOperator.OR, label: null, disabled: null };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t.W3iY58);
    let tmp11 = locked;
    if (!locked) {
      tmp11 = values.length < 2;
    }
    obj.disabled = tmp11;
    const items2 = [closure_1_10(tmp(5688).TableRadioRow, obj)];
    const obj1 = { value: tmp(5407).ConnectionConfigurationRuleOperator.AND, label: null, disabled: null };
    const intl3 = tmp(1114).intl;
    obj1.label = intl3.string(tmp(1114).t.gHXS9A);
    obj1.disabled = locked;
    items2[1] = closure_1_10(tmp(5688).TableRadioRow, obj1);
    obj.children = items2;
    return closure_1_11(tmp(5685).TableRadioGroup, obj);
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
      const iter = memo[arg1];
      if (null !== iter) {
        if (null == iter.connectionMetadataField) {
          if (null == iter.operator) {
            if (null == iter.value) {
              let found = items.filter((connectionType) => {
                if (null == iter.applicationId) {
                  let tmp2 = connectionType.connectionType !== tmp.connectionType;
                } else {
                  tmp2 =
                    connectionType.connectionType !== tmp.connectionType ||
                    connectionType.applicationId !== tmp.applicationId;
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
    let obj = map;
    if (map.has(combined)) {
      value = obj.get(combined);
      if (value != null) {
        obj = { index, configuration: connectionType };
        value.push(obj);
      }
    } else {
      obj = { index, configuration: connectionType };
      const items = [obj];
      const result = obj.set(combined, items);
    }
  });
  const values = map.values();
  let iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr = nextResult;
    if (
      !nextResult.some(
        (configuration) =>
          null == configuration.configuration.connectionMetadataField &&
          null == configuration.configuration.operator &&
          null == configuration.configuration.value,
      )
    ) {
      let obj = {};
      let merged = Object.assign(arr[0].configuration);
      obj.connectionMetadataField = undefined;
      obj.operator = undefined;
      obj.value = undefined;
      obj = { index: null, configuration: null };
      obj.index = memo.push(obj) - 1;
      obj.configuration = obj;
      arr = arr.push(obj);
    }
    continue;
  }
  const obj1 = { spacing: nativeDefault.space.PX_24, children: null };
  arr = Array.from(map.values());
  obj1.children = arr.map((configurationItems) =>
    closure_2_10(
      GuildSettingsRoleEditConnectionConfigurationDefault,
      { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations },
      configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index,
    ),
  );
  return closure_10(require("Stack/Stack").Stack, obj1);
}
function AddConnectionButton(locked) {
  ({
    handleConnectionTapped: require,
    excludedConnections: importDefault,
    excludedApplications: dependencyMap,
    roleId: noop,
    integrations: View,
    gameApplicationIds: GuildRoleMemberCountStore,
  } = locked);
  let obj = { text: null, variant: "secondary", icon: null, disabled: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["OSvW5+"]);
  obj.icon = closure_10(CirclePlusIcon.CirclePlusIcon, { size: "sm" });
  obj.disabled = locked.locked;
  obj.onPress = function onPress() {
    const obj = {
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
      onCompleteIdentityApplication: null,
    };
    let tmp3 = GuildRoleMemberCountStore;
    const combined = "SelectConnectionActionSheet-" + noop;
    if (GuildRoleMemberCountStore == null) {
      tmp3 = null;
    }
    obj.gameApplicationIds = tmp3;
    obj.onCompleteIdentityApplication = function onCompleteIdentityApplication(arg0) {
      return closure_1_0(closure_2_9, arg0);
    };
    obj.openLazy(asyncRequireImpl(17638, dependencyMap.paths), combined, obj);
  };
  return closure_10(components_Button_Button.Button, obj);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const Constants = fn(5408);
({
  GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_8,
  GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_9,
} = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  formContent: { paddingTop: 16, paddingBottom: 0 },
  warningContainer: null,
  warningText: null,
  headerTitleContainer: null,
};
createStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.warningContainer = createStyles;
createStyles.warningText = { flex: 1, marginLeft: 10 };
createStyles.headerTitleContainer = { display: "flex", flexDirection: "row", justifyContent: "space-between" };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx",
);

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let stateFromStoresArray;
  let AND;
  let memo;
  let obj = guild(stateFromStoresArray[25]);
  const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj1 = guild(stateFromStoresArray[26]);
  const applicationIdentityLinkedRolesEnabled1 = obj1.useApplicationIdentityLinkedRolesEnabled(
    guild.id,
    "guild_settings_roles_edit_connections",
  );
  let obj2 = guild(stateFromStoresArray[27]);
  let items = [GuildRoleMemberCountStore];
  let items1 = [role.id, guild.id];
  let num = obj2.useStateFromStores(
    items,
    () => {
      const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guild.id);
      let tmp2;
      if (roleMemberCount != null) {
        tmp2 = roleMemberCount[role.id];
      }
      return tmp2;
    },
    items1,
  );
  let obj3 = guild(stateFromStoresArray[27]);
  let items2 = [GuildSettingsRolesStore];
  stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
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
        if (arr.length > 0) {
          flatResult = arr[0];
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
  obj = { contentContainerStyle: closure_13().formContent, keyboardShouldPersistTaps: "handled", children: null };
  obj = { spacing: role(tmp3[8]).space.PX_24, children: null };
  obj1 = {
    clearConnections() {
      const result = GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations(role.id, []);
    },
    locked,
    hasConnections: tmp9,
    hasMembers: tmp10,
  };
  const items6 = [closure_10(HeaderSection, obj1), , ,];
  let tmp11Result = null;
  if (memo1.size > 0) {
    obj2 = {
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
          const result = obj.updateRoleConnectionConfigurations(
            role.id,
            Object.values(
              _modDef12.groupBy(
                arg0,
                (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId,
              ),
            ),
          );
        }
      },
    };
    tmp11Result = tmp11(AndOrRadios, obj2);
  }
  items6[1] = tmp11Result;
  let tmp15 = null;
  if (memo1.size > 0) {
    const id = role.id;
    tmp15 = renderRoleConnectionConfigurations(
      memo,
      (arg0) => {
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
          const result = obj.updateRoleConnectionConfigurations(
            role.id,
            Object.values(
              _modDef12.groupBy(
                arg0,
                (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId,
              ),
            ),
          );
        }
      },
      locked,
      0,
      integrations,
    );
  }
  items6[2] = tmp15;
  obj3 = {
    handleConnectionTapped(connectionType, applicationId) {
      const items = [...memo];
      const obj = {
        connectionType,
        connectionMetadataField: "Array",
        applicationId,
        operator: "assign",
        value: 1090584578,
      };
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
        const result = obj2.updateRoleConnectionConfigurations(
          role.id,
          Object.values(
            _modDef12.groupBy(
              items,
              (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId,
            ),
          ),
        );
      }
    },
    excludedConnections: memo1,
    excludedApplications: memo2,
    roleId: role.id,
    integrations,
    gameApplicationIds: null,
    locked: null,
  };
  if (applicationIdentityLinkedRolesEnabled) {
    let gameApplicationIds = guild.gameApplicationIds;
  } else {
    gameApplicationIds = null;
  }
  obj3.gameApplicationIds = gameApplicationIds;
  if (!locked) {
    locked = tmp10;
  }
  obj3.locked = locked;
  items6[3] = closure_10(AddConnectionButton, obj3);
  obj.children = items6;
  obj.children = closure_11(guild(stateFromStoresArray[14]).Stack, obj);
  return closure_10(guild(stateFromStoresArray[28]).Form, obj);
}
