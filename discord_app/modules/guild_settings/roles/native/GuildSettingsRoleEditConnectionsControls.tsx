// === Module 16856: HeaderSection ===

// Module 16856 (HeaderSection)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import PressableBase from "PressableBase" /* 5433 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import CirclePlusIcon from "CirclePlusIcon" /* 9545 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import getRoleMemberCount from "getRoleMemberCount" /* 6928 */;
import handleSetSection from "handleSetSection" /* 16831 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import OperatorTypes from "OperatorTypes" /* 5225 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function HeaderSection(arg0) {
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = callback2();
  let tmp2Result = null;
  if (hasMembers) {
    let obj = { style: null, children: null };
    obj[0] = tmp.warningContainer;
    obj = { color: null, size: "sm" };
    obj[0] = ThemesDefault.colors.STATUS_WARNING;
    const items = [callback(CircleErrorIcon.CircleErrorIcon, obj), ];
    obj = { variant: "text-xs/medium", style: null, children: null };
    obj[1] = tmp.warningText;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t["2aFeef"]);
    items[1] = callback(Text.Text, obj);
    obj[1] = items;
    tmp2Result = callback2(View, obj);
  }
  const items1 = [tmp2Result, ];
  obj1 = { style: tmp.headerTitleContainer, children: null };
  const obj2 = { variant: "text-md/semibold", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[1] = intl2.string(getSystemLocale.t.nMir27);
  const items2 = [callback(Text.Text, obj2), ];
  let tmp13Result;
  if (hasConnections) {
    const obj3 = { hitSlop: 8, onPress: null, disabled: null, children: null };
    obj3[1] = clearConnections;
    obj3[2] = locked;
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = getSystemLocale.intl;
    obj4[2] = intl3.string(getSystemLocale.t.ntW1cc);
    obj3[3] = callback(Text.Text, obj4);
    tmp13Result = callback(PressableBase.PressableOpacity, obj3);
  }
  const obj5 = { children: null };
  const obj6 = { children: null };
  items2[1] = tmp13Result;
  obj1[1] = items2;
  const items3 = [callback2(View, obj1), ];
  const obj7 = { variant: "text-sm/medium", children: null };
  const intl4 = getSystemLocale.intl;
  const obj8 = { helpdeskArticleUrl: combinedDefault.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
  obj7[1] = intl4.format(getSystemLocale.t.q5f7tK, obj8);
  items3[1] = callback(Text.Text, obj7);
  obj6[0] = items3;
  items1[1] = callback2(Stack.Stack, obj6);
  obj5[0] = items1;
  return callback2(closure_12, obj5);
}
function AndOrRadios(setPendingRoleConfigurations) {
  ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
  importDefault = setPendingRoleConfigurations.setPendingRoleConfigurations;
  if (roleConnectionConfigurations(5224).ConnectionConfigurationRuleOperator.OR === roleConnectionConfigurations(5224).ConnectionConfigurationRuleOperator.AND) {
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    const _Object = Object;
    let obj = applyDefault;
    const values = Object.values(obj.groupBy(roleConnectionConfigurations, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId));
    obj = { title: null, value: null, onChange: null, hasIcons: false, children: null };
    const intl = roleConnectionConfigurations(1236).intl;
    obj[0] = intl.string(roleConnectionConfigurations(1236).t.Xs7PHX);
    obj[1] = setPendingRoleConfigurations.currentOperator;
    obj[2] = function onChange(arg0) {
      callback(roleConnectionConfigurations, arg0);
    };
    obj = { value: null, label: null, disabled: null };
    obj[0] = roleConnectionConfigurations(5224).ConnectionConfigurationRuleOperator.OR;
    const intl2 = roleConnectionConfigurations(1236).intl;
    obj[1] = intl2.string(roleConnectionConfigurations(1236).t.W3iY58);
    let tmp11 = locked;
    if (!locked) {
      tmp11 = values.length < 2;
    }
    obj[2] = tmp11;
    const items2 = [callback(roleConnectionConfigurations(8100).TableRadioRow, obj), ];
    obj1 = { value: null, label: null, disabled: null };
    obj1[0] = roleConnectionConfigurations(5224).ConnectionConfigurationRuleOperator.AND;
    const intl3 = roleConnectionConfigurations(1236).intl;
    obj1[1] = intl3.string(roleConnectionConfigurations(1236).t.gHXS9A);
    obj1[2] = locked;
    items2[1] = callback(roleConnectionConfigurations(8100).TableRadioRow, obj1);
    obj[4] = items2;
    return callback2(roleConnectionConfigurations(8101).TableRadioGroup, obj);
  }
}
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  const _require = memo;
  importDefault = arg1;
  dependencyMap = locked;
  closure_3 = integrations;
  function handleConfigurationChange(arg0, arg1) {
    const items = [];
    for (const item10006 of iter) {
      let obj = {};
      let merged = Object.assign(item10006);
      let arr = items.push(obj);
      continue;
    }
    if (null == arg0) {
      if (null !== iter[arg1]) {
        if (null == iter.connectionMetadataField) {
          if (null == iter.operator) {
            if (null == iter.value) {
              let found = items.filter((item, index) => {
                if (null == iter.applicationId) {
                  let tmp2 = item.connectionType !== iter.connectionType;
                } else {
                  tmp2 = item.connectionType !== iter.connectionType || item.applicationId !== iter.applicationId;
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
  const item = memo.forEach((item, index) => {
    const combined = "" + item.connectionType + ":" + item.applicationId;
    let obj = map;
    if (map.has(combined)) {
      const value = obj.get(combined);
      if (value != null) {
        obj = { index: null, configuration: null };
        obj[0] = index;
        obj[1] = item;
        value.push(obj);
      }
    } else {
      obj = { index: null, configuration: null };
      obj[0] = index;
      obj[1] = item;
      const items = [obj];
      const result = obj.set(combined, items);
    }
  });
  const values = map.values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let arr = nextResult;
    if (!nextResult.some((item, index) => null == item.configuration.connectionMetadataField && null == item.configuration.operator && null == item.configuration.value)) {
      let obj = {};
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
  obj1 = { spacing: ThemesDefault.space.PX_24, children: null };
  arr = Array.from(map.values());
  obj1[1] = arr.map((item, index) => closure_1_10(callback(locked[19]), { configurationItems: item, onConfigurationChange: handleConfigurationChange, locked, integrations: closure_3 }, item[0].configuration.connectionType + ":" + item[0].index));
  return callback(_require(4733).Stack, obj1);
}
function AddConnectionButton(locked) {
  ({ handleConnectionTapped: require, excludedConnections: importDefault, excludedApplications: dependencyMap, roleId: closure_3, integrations: View, gameApplicationIds: closure_5 } = locked);
  let obj = { text: null, variant: "secondary", icon: null, disabled: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["OSvW5+"]);
  obj[2] = callback(CirclePlusIcon.CirclePlusIcon, { size: "sm" });
  obj[3] = locked.locked;
  obj[4] = function onPress() {
    const obj = {
      addConnection(arg0) {
        return callback(arg0, undefined);
      },
      excludedConnections: closure_1,
      excludedApplications: closure_2,
      integrations: closure_4,
      onCompleteApplication(arg0) {
        return callback(closure_1_8, arg0);
      },
      gameApplicationIds: null,
      onCompleteIdentityApplication: null
    };
    let tmp3 = closure_5;
    const combined = "SelectConnectionActionSheet-" + closure_3;
    if (closure_5 == null) {
      tmp3 = null;
    }
    obj[5] = tmp3;
    obj[6] = function onCompleteIdentityApplication(closure_0) {
      return callback(closure_1_9, closure_0);
    };
    obj.openLazy(asyncRequireImpl(dependencyMap[23], dependencyMap.paths), combined, obj);
  };
  return callback(Button.Button, obj);
}
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_8, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: c9 } = OperatorTypes);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: ThemesDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: ThemesDefault.radii.xs };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flex: 1, marginLeft: 10 };
createCacheKey[3] = { display: "flex", flexDirection: "row", justifyContent: "space-between" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default function GuildSettingsRolesEditConnectionsControls(guild) {
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let stateFromStoresArray;
  let AND;
  let memo;
  let obj = guild(stateFromStoresArray[25]);
  const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
  obj1 = guild(stateFromStoresArray[26]);
  const applicationIdentityLinkedRolesEnabled1 = obj1.useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let obj2 = guild(stateFromStoresArray[27]);
  let items = [closure_5];
  let items1 = [role.id, guild.id];
  let num = obj2.useStateFromStores(items, () => {
    const roleMemberCount = closure_1_5.getRoleMemberCount(guild.id);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  }, items1);
  let obj3 = guild(stateFromStoresArray[27]);
  let items2 = [closure_6];
  stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    const editedRoleConnectionConfigurationsMap = closure_1_6.getEditedRoleConnectionConfigurationsMap();
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
        if (stateFromStoresArray.length > 0) {
          flatResult = stateFromStoresArray[0];
        }
      }
      flatResult = [];
    }
    return flatResult;
  }, items3);
  const items4 = [memo];
  const memo1 = AND.useMemo(() => new Set(memo.map((item, index) => item.connectionType)), items4);
  const items5 = [memo];
  const memo2 = AND.useMemo(() => {
    const mapped = memo.map((item, index) => {
      let str = item.applicationId;
      if (str == null) {
        str = "";
      }
      return str;
    });
    return new Set(mapped.filter((item, index) => "" !== item));
  }, items5);
  { contentContainerStyle: callback2().formContent, keyboardShouldPersistTaps: "handled", children: null };
  obj = { spacing: role(tmp3[8]).space.PX_24, children: null };
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
  const items6 = [callback(HeaderSection, obj1), , , ];
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
        const obj2 = role(stateFromStoresArray[10]);
      }
      obj = guild(stateFromStoresArray[29]);
    };
    tmp10Result = callback(AndOrRadios, obj2);
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
        const obj2 = role(stateFromStoresArray[10]);
      }
      obj = guild(stateFromStoresArray[29]);
    }, locked, 0, integrations);
  }
  items6[2] = tmp15;
  obj3 = {
    handleConnectionTapped(connectionType) {
      const items = [...memo];
      const obj = { connectionType, connectionMetadataField: "Array", applicationId: "accessibilityRole", operator: "user", value: "r" };
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
        const obj3 = role(stateFromStoresArray[10]);
      }
      obj2 = guild(stateFromStoresArray[29]);
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
  items6[3] = callback(AddConnectionButton, obj3);
  obj[1] = items6;
  obj[2] = callback2(guild(stateFromStoresArray[14]).Stack, obj);
  return callback(guild(stateFromStoresArray[28]).Form, obj);
};