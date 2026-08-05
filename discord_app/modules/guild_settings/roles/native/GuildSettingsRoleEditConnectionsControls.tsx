import { apply } from "../../../../../_runtime/00012_apply.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { CircleErrorIcon } from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { CirclePlusIcon } from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";
// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx
import Header from "Header";
import { View } from "context";
import getRoleMemberCount from "getRoleMemberCount";
import handleSetSection from "handleSetSection";
import { HelpdeskArticles } from "ME";
import OperatorTypes from "OperatorTypes";
import jsxProd from "CirclePlusIcon";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function HeaderSection(arg0) {
  let clearConnections;
  let hasConnections;
  let hasMembers;
  let locked;
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = createCacheKey();
  let tmp2Result = null;
  if (hasMembers) {
    let obj = { style: null, children: null };
    obj[0] = tmp.warningContainer;
    obj = { color: null, size: "sm" };
    obj[0] = Themes.colors.STATUS_WARNING;
    const items = [callback(CircleErrorIcon /* CircleErrorIcon */.CircleErrorIcon, obj), ];
    obj = { variant: "text-xs/medium", style: null, children: null };
    obj[1] = tmp.warningText;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t["2aFeef"]);
    items[1] = callback(Text /* Text */.Text, obj);
    obj[1] = items;
    tmp2Result = tmp2(View, obj);
  }
  const items1 = [tmp2Result, ];
  const obj1 = { style: tmp.headerTitleContainer, children: null };
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj2[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.nMir27);
  const items2 = [callback(Text /* Text */.Text, obj2), ];
  let tmp13Result;
  if (hasConnections) {
    const obj3 = { hitSlop: 8, onPress: null, disabled: null, children: null };
    obj3[1] = clearConnections;
    obj3[2] = locked;
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = tmp10(1236).intl;
    obj4[2] = intl3.string(tmp10(1236).t.ntW1cc);
    obj3[3] = tmp13(tmp10(4281).Text, obj4);
    tmp13Result = tmp13(tmp10(4812).PressableOpacity, obj3);
  }
  const obj5 = { children: null };
  const obj6 = { children: null };
  items2[1] = tmp13Result;
  obj1[1] = items2;
  const items3 = [closure_11(View, obj1), ];
  const obj7 = { variant: "text-sm/medium", children: null };
  const intl4 = tmp10(1236).intl;
  const obj8 = { helpdeskArticleUrl: null };
  obj8[0] = combined.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN);
  obj7[1] = intl4.format(getSystemLocale /* getSystemLocale */.t.q5f7tK, obj8);
  items3[1] = callback(Text /* Text */.Text, obj7);
  obj6[0] = items3;
  items1[1] = closure_11(Stack /* Stack */.Stack, obj6);
  obj5[0] = items1;
  return closure_11(closure_12, obj5);
}
function AndOrRadios(setPendingRoleConfigurations) {
  let locked;
  let roleConnectionConfigurations;
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  const importDefault = setPendingRoleConfigurations.setPendingRoleConfigurations;
  if (roleConnectionConfigurations(5091).ConnectionConfigurationRuleOperator.OR === roleConnectionConfigurations(5091).ConnectionConfigurationRuleOperator.AND) {
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    const _Object = Object;
    let obj = apply;
    const values = Object.values(obj.groupBy(roleConnectionConfigurations, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId));
    obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.Xs7PHX);
    obj[1] = setPendingRoleConfigurations.currentOperator;
    obj[2] = function onChange(arg0) {
      callback(roleConnectionConfigurations, arg0);
    };
    obj = { value: null, label: null, disabled: null };
    obj[0] = tmp(5091).ConnectionConfigurationRuleOperator.OR;
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(tmp(1236).t.W3iY58);
    let tmp11 = locked;
    if (!locked) {
      tmp11 = values.length < 2;
    }
    obj[2] = tmp11;
    const items2 = [closure_10(tmp(7794).TableRadioRow, obj), ];
    const obj1 = { value: null, label: null, disabled: null };
    obj1[0] = tmp(5091).ConnectionConfigurationRuleOperator.AND;
    const intl3 = tmp(1236).intl;
    obj1[1] = intl3.string(tmp(1236).t.gHXS9A);
    obj1[2] = locked;
    items2[1] = closure_10(tmp(7794).TableRadioRow, obj1);
    obj[4] = items2;
    return closure_11(tmp(7795).TableRadioGroup, obj);
  }
}
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  const _require = memo;
  const importDefault = arg1;
  const dependencyMap = locked;
  let Header = integrations;
  function handleConfigurationChange(arg0, arg1) {
    const items = [];
    for (const item10006 of iter) {
      let obj = {};
      let tmp = obj;
      let tmp2 = item10006;
      let merged = Object.assign(item10006);
      let arr = items.push(obj);
      continue;
    }
    if (null == arg0) {
      iter = iter[arg1];
      if (null !== iter) {
        if (null == iter.connectionMetadataField) {
          if (null == iter.operator) {
            if (null == iter.value) {
              let found = items.filter((connectionType) => {
                if (null == iter.applicationId) {
                  let tmp2 = connectionType.connectionType !== tmp.connectionType;
                } else {
                  tmp2 = connectionType.connectionType !== tmp.connectionType || connectionType.applicationId !== tmp.applicationId;
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
    callback(found);
  }
  const map = new Map();
  const item = memo.forEach((connectionType) => {
    const combined = "" + connectionType.connectionType + ":" + connectionType.applicationId;
    let obj = map;
    if (map.has(combined)) {
      const value = obj.get(combined);
      if (value != null) {
        obj = { index: null, configuration: null };
        obj[0] = arg1;
        obj[1] = connectionType;
        value.push(obj);
      }
    } else {
      obj = { index: null, configuration: null };
      obj[0] = arg1;
      obj[1] = connectionType;
      const items = [obj];
      const result = obj.set(combined, items);
    }
  });
  const values = map.values();
  let iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr = nextResult;
    if (!nextResult.some((configuration) => null == configuration.configuration.connectionMetadataField && null == configuration.configuration.operator && null == configuration.configuration.value)) {
      let obj = {};
      let tmp3 = nextResult;
      let tmp4 = obj;
      let merged = Object.assign(arr[0].configuration);
      obj.connectionMetadataField = undefined;
      obj.operator = undefined;
      obj.value = undefined;
      obj = { index: null, configuration: null };
      obj[0] = memo.push(obj) - 1;
      obj[1] = obj;
      arr = arr.push(obj);
    }
    continue;
  }
  const obj1 = { spacing: null, children: null };
  obj1[0] = Themes.space.PX_24;
  arr = Array.from(map.values());
  obj1[1] = arr.map((configurationItems) => outer1_10(callback(locked[19]), { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations: Header }, configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index));
  return callback(_Stack.Stack, obj1);
}
function AddConnectionButton(locked) {
  let View;
  let Header;
  let getRoleMemberCount;
  let dependencyMap;
  let importDefault;
  let require;
  ({ handleConnectionTapped: require, excludedConnections: importDefault, excludedApplications: dependencyMap, roleId: Header, integrations: View, gameApplicationIds: getRoleMemberCount } = locked);
  let obj = { text: null, variant: "secondary", icon: null, disabled: null, onPress: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["OSvW5+"]);
  obj[2] = callback(CirclePlusIcon /* CirclePlusIcon */.CirclePlusIcon, { size: "sm" });
  obj[3] = locked.locked;
  obj[4] = function onPress() {
    let obj = outer1_1(outer1_2[22]);
    obj = {
      addConnection(arg0) {
        return callback(arg0, undefined);
      },
      excludedConnections: closure_1,
      excludedApplications: closure_2,
      integrations: closure_4,
      onCompleteApplication(arg0) {
        return callback(outer1_8, arg0);
      },
      gameApplicationIds: null,
      onCompleteIdentityApplication: null
    };
    let tmp3 = getRoleMemberCount;
    const combined = "SelectConnectionActionSheet-" + Header;
    if (getRoleMemberCount == null) {
      tmp3 = null;
    }
    obj[5] = tmp3;
    obj[6] = function onCompleteIdentityApplication(arg0) {
      return callback(outer1_9, arg0);
    };
    obj.openLazy(outer1_0(outer1_2[24])(outer1_2[23], outer1_2.paths), combined, obj);
  };
  return callback(Button /* Button */.Button, obj);
}
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: metroImportAll, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: c9 } = OperatorTypes);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { formContent: { paddingTop: 16, paddingBottom: 0 }, warningContainer: null, warningText: null, headerTitleContainer: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING, borderColor: require("Themes").colors.STATUS_WARNING, borderWidth: 1, borderRadius: require("Themes").radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, marginLeft: 10 };
createCacheKey[3] = { display: "flex", flexDirection: "row", justifyContent: "space-between" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("getRoleMemberCount").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  let integrations;
  let locked;
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let stateFromStoresArray;
  let AND;
  let memo;
  let obj = guild(stateFromStoresArray[25]);
  const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj1 = guild(stateFromStoresArray[26]);
  const applicationIdentityLinkedRolesEnabled1 = obj1.useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let obj2 = guild(stateFromStoresArray[27]);
  let items = [getRoleMemberCount];
  let items1 = [role.id, guild.id];
  let num = obj2.useStateFromStores(items, () => {
    const roleMemberCount = outer1_5.getRoleMemberCount(guild.id);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  }, items1);
  let obj3 = guild(stateFromStoresArray[27]);
  let items2 = [handleSetSection];
  stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    const editedRoleConnectionConfigurationsMap = outer1_6.getEditedRoleConnectionConfigurationsMap();
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
    if (AND === guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.OR) {
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
    return new Set(mapped.filter((arg0) => "" !== arg0));
  }, items5);
  obj = { contentContainerStyle: createCacheKey().formContent, keyboardShouldPersistTaps: "handled", children: null };
  obj = { spacing: null, children: null };
  obj[0] = role(stateFromStoresArray[8]).space.PX_24;
  obj1 = {
    clearConnections() {
      const result = guild(stateFromStoresArray[29]).updateRoleConnectionConfigurations(role.id, []);
    },
    locked,
    hasConnections: tmp9,
    hasMembers: null
  };
  if (num == null) {
    num = 0;
  }
  obj1[3] = num > 0;
  const items6 = [closure_10(HeaderSection, obj1), , , ];
  let tmp10Result = null;
  if (memo1.size > 0) {
    obj2 = { locked: null, currentOperator: null, roleConnectionConfigurations: null, setPendingRoleConfigurations: null };
    obj2[0] = locked;
    obj2[1] = AND;
    obj2[2] = memo;
    obj2[3] = function setPendingRoleConfigurations(arg0, arg1) {
      if (arg1 === guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.AND) {
        if (0 === arg0.length) {
          let items = [];
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(arg0, 0);
          items = [items1];
        }
      } else {
        const _Object = Object;
        const result = obj.updateRoleConnectionConfigurations(role.id, Object.values(role(stateFromStoresArray[10]).groupBy(arg0, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId)));
      }
    };
    tmp10Result = tmp10(AndOrRadios, obj2);
  }
  items6[1] = tmp10Result;
  let tmp15 = null;
  if (memo1.size > 0) {
    const id = role.id;
    tmp15 = renderRoleConnectionConfigurations(memo, (arg0) => {
      if (AND === guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.AND) {
        if (0 === arg0.length) {
          let items = [];
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(arg0, 0);
          items = [items1];
        }
      } else {
        const _Object = Object;
        const result = obj.updateRoleConnectionConfigurations(role.id, Object.values(role(stateFromStoresArray[10]).groupBy(arg0, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId)));
      }
    }, locked, 0, integrations);
  }
  items6[2] = tmp15;
  obj3 = {
    handleConnectionTapped(connectionType) {
      const items = [...memo];
      const obj = { connectionType, connectionMetadataField: "Array", applicationId: "accessibilityRole", operator: "warn", value: "r" };
      obj[2] = arg1;
      items.push(obj);
      if (AND === guild(stateFromStoresArray[9]).ConnectionConfigurationRuleOperator.AND) {
        if (0 === items.length) {
          let items1 = [];
        } else {
          const items2 = [];
          HermesBuiltin.arraySpread(items, 0);
          items1 = [items2];
        }
      } else {
        const _Object = Object;
        const result = obj2.updateRoleConnectionConfigurations(role.id, Object.values(role(stateFromStoresArray[10]).groupBy(items, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId)));
      }
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
  obj3[5] = gameApplicationIds;
  obj3[6] = locked;
  items6[3] = closure_10(AddConnectionButton, obj3);
  obj[1] = items6;
  obj[2] = closure_11(guild(stateFromStoresArray[14]).Stack, obj);
  return closure_10(guild(stateFromStoresArray[28]).Form, obj);
};