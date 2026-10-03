// === Module 17782: GuildSettingsRoleEditConnectionsControls ===

// Module 17782 (GuildSettingsRoleEditConnectionsControls)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4800 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Pressables from "Pressables" /* 5909 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import ConnectionsUtils from "ConnectionsUtils" /* 6678 */;
import CirclePlusIcon from "CirclePlusIcon" /* 10983 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17769 */;
import GuildSettingsRoleEditConnectionConfigurationDefault from "GuildSettingsRoleEditConnectionConfiguration" /* 17783 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 6623 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17757 */;

require = fn;
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
  let obj3 = { spacing: nativeDefault.space.PX_24, children: Array.from(map.values()).map((configurationItems) => v65535(GuildSettingsRoleEditConnectionConfigurationDefault, { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations }, configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index)) };
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
      addConnection(excludedApplications) {
        return closure_1_0(excludedApplications, undefined);
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
    obj.openLazy(asyncRequireImpl(17785, dependencyMap.paths), combined, obj2);
  };
  return closure_10(components_Button_Button.Button, obj);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const Constants = fn(6679);
({ GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_8, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { formContent: { paddingTop: 16, paddingBottom: 0 }, warningContainer: { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.xs }, warningText: { flex: 1, marginLeft: 10 }, headerTitleContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between" } };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === hasMembers) {
    if (cResult[1] === tmp4.warningContainer) {
      if (cResult[2] === tmp4.warningText) {
        let tmp5 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/semibold", children: null };
        const intl2 = util.intl;
        obj2.children = intl2.string(util.t.nMir27);
        const tmp14 = v65535(Text_Text.Text, obj2);
        cResult[4] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === clearConnections) {
        if (cResult[6] === hasConnections) {
          if (cResult[7] === locked) {
            let tmp15 = cResult[8];
          }
          if (cResult[9] === tmp4.headerTitleContainer) {
            if (cResult[10] === tmp15) {
              let tmp18 = cResult[11];
            }
            const _Symbol2 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { variant: "text-sm/medium", children: null };
              const intl4 = util.intl;
              const obj4 = { helpdeskArticleUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
              obj3.children = intl4.format(util.t.q5f7tK, obj4);
              const tmp26 = v65535(Text_Text.Text, obj3);
              cResult[12] = tmp26;
              let tmp22 = tmp26;
            } else {
              tmp22 = cResult[12];
            }
            if (cResult[13] !== tmp18) {
              const obj5 = { children: null };
              const items = [tmp18, tmp22];
              obj5.children = items;
              const tmp29 = closure_1_11(Stack_Stack.Stack, obj5);
              cResult[13] = tmp18;
              cResult[14] = tmp29;
              let tmp27 = tmp29;
            } else {
              tmp27 = cResult[14];
            }
            if (cResult[15] === tmp5) {
              if (cResult[16] === tmp27) {
                let tmp30 = cResult[17];
              }
              return tmp30;
            }
            const obj6 = { children: null };
            const items1 = [tmp5, tmp27];
            obj6.children = items1;
            const tmp33 = closure_1_11(__initData, obj6);
            cResult[15] = tmp5;
            cResult[16] = tmp27;
            cResult[17] = tmp33;
            tmp30 = tmp33;
          }
          const obj7 = { style: tmp4.headerTitleContainer, children: null };
          const items2 = [tmp12, tmp15];
          obj7.children = items2;
          const tmp21 = closure_1_11(View, obj7);
          cResult[9] = tmp4.headerTitleContainer;
          cResult[10] = tmp15;
          cResult[11] = tmp21;
          tmp18 = tmp21;
        }
      }
      let tmp16;
      if (hasConnections) {
        const obj8 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: null };
        const obj9 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
        const intl3 = util.intl;
        obj9.children = intl3.string(util.t.ntW1cc);
        obj8.children = v65535(Text_Text.Text, obj9);
        tmp16 = v65535(Pressables.PressableOpacity, obj8);
      }
      cResult[5] = clearConnections;
      cResult[6] = hasConnections;
      cResult[7] = locked;
      cResult[8] = tmp16;
      tmp15 = tmp16;
    }
  }
  let tmp6 = null;
  if (hasMembers) {
    const obj10 = { style: tmp4.warningContainer, children: null };
    const obj12 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
    const items3 = [v65535(CircleErrorIcon.CircleErrorIcon, obj12), ];
    const obj13 = { variant: "text-xs/medium", style: tmp4.warningText, children: null };
    const intl = util.intl;
    obj13.children = intl.string(util.t["2aFeef"]);
    items3[1] = v65535(Text_Text.Text, obj13);
    obj10.children = items3;
    tmp6 = closure_1_11(View, obj10);
  }
  cResult[0] = hasMembers;
  cResult[1] = tmp4.warningContainer;
  cResult[2] = tmp4.warningText;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
  const tmp = closure_13();
  let tmp2Result = null;
  if (hasMembers) {
    const obj = { style: tmp.warningContainer, children: null };
    const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
    const items = [v65535(CircleErrorIcon.CircleErrorIcon, obj2), ];
    const obj3 = { variant: "text-xs/medium", style: tmp.warningText, children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["2aFeef"]);
    items[1] = v65535(Text_Text.Text, obj3);
    obj.children = items;
    tmp2Result = closure_1_11(View, obj);
  }
  const items1 = [tmp2Result, ];
  const obj4 = { style: tmp.headerTitleContainer, children: null };
  const obj5 = { variant: "text-md/semibold", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.nMir27);
  const items2 = [v65535(Text_Text.Text, obj5), ];
  let tmp13Result;
  if (hasConnections) {
    const obj6 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl3 = util.intl;
    obj7.children = intl3.string(util.t.ntW1cc);
    obj6.children = v65535(Text_Text.Text, obj7);
    tmp13Result = v65535(Pressables.PressableOpacity, obj6);
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
  items3[1] = v65535(Text_Text.Text, obj10);
  obj9.children = items3;
  items1[1] = closure_1_11(Stack_Stack.Stack, obj9);
  obj8.children = items1;
  return closure_1_11(__initData, obj8);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((setPendingRoleConfigurations) => {
  const cResult = c.c(17);
  ({ locked, currentOperator, roleConnectionConfigurations } = setPendingRoleConfigurations);
  setPendingRoleConfigurations = setPendingRoleConfigurations.setPendingRoleConfigurations;
  if (cResult[0] !== roleConnectionConfigurations) {
    if (ConnectionsUtils.ConnectionConfigurationRuleOperator.OR !== ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
      const _Object = Object;
      const values = Object.values(_modDef12.groupBy(roleConnectionConfigurations, (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId));
      cResult[0] = roleConnectionConfigurations;
      cResult[1] = values;
    }
    if (0 === roleConnectionConfigurations.length) {
      let items = [];
    } else {
      const items1 = [];
      HermesBuiltin.arraySpread(roleConnectionConfigurations, 0);
      items = [items1];
    }
  } else {
    if (cResult[2] === roleConnectionConfigurations) {
      if (cResult[3] === setPendingRoleConfigurations) {
        let tmp12 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.Xs7PHX);
        cResult[5] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[5];
      }
      const _Symbol2 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.W3iY58);
        cResult[6] = stringResult1;
        let tmp16 = stringResult1;
      } else {
        tmp16 = cResult[6];
      }
      let tmp18 = locked;
      if (!locked) {
        tmp18 = arr.length < 2;
      }
      if (cResult[7] !== tmp18) {
        const obj3 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.OR, label: tmp16, disabled: tmp18 };
        const tmp21 = v65535(TableRadioRow.TableRadioRow, obj3);
        cResult[7] = tmp18;
        cResult[8] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.gHXS9A);
        cResult[9] = stringResult2;
        let tmp22 = stringResult2;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] !== locked) {
        const obj4 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.AND, label: tmp22, disabled: locked };
        const tmp26 = v65535(TableRadioRow.TableRadioRow, obj4);
        cResult[10] = locked;
        cResult[11] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[11];
      }
      if (cResult[12] === currentOperator) {
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp19) {
            if (cResult[15] === tmp24) {
              let tmp27 = cResult[16];
            }
            return tmp27;
          }
        }
      }
      const obj5 = { title: tmp14, value: currentOperator, onChange: tmp12, hasIcons: false, children: null };
      const items2 = [tmp19, tmp24];
      obj5.children = items2;
      const tmp29 = closure_1_11(TableRadioGroup.TableRadioGroup, obj5);
      cResult[12] = currentOperator;
      cResult[13] = tmp12;
      cResult[14] = tmp19;
      cResult[15] = tmp24;
      cResult[16] = tmp29;
      tmp27 = tmp29;
    }
    const fn = function p(arg0) {
      setPendingRoleConfigurations(roleConnectionConfigurations, arg0);
    };
    cResult[2] = roleConnectionConfigurations;
    cResult[3] = setPendingRoleConfigurations;
    cResult[4] = fn;
    tmp12 = fn;
  }
}) : ((setPendingRoleConfigurations) => {
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
    const items2 = [v65535(TableRadioRow.TableRadioRow, obj3), ];
    const obj4 = { value: ConnectionsUtils.ConnectionConfigurationRuleOperator.AND, label: null, disabled: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.gHXS9A);
    obj4.disabled = locked;
    items2[1] = v65535(TableRadioRow.TableRadioRow, obj4);
    obj2.children = items2;
    return closure_1_11(TableRadioGroup.TableRadioGroup, obj2);
  }
});
ReactCompilerGating = fn(558);
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.xs };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(59);
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  closure_13();
  let obj = guild(576);
  const applicationIdentityLinkedRolesEnabled = guild(17786).useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj2 = guild(17786);
  const applicationIdentityLinkedRolesEnabled1 = guild(17788).useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild.id) {
    if (cResult[2] === role.id) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp9, tmp10);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [GuildSettingsRolesStore];
      cResult[5] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== role.id) {
      class S {
        constructor() {
          editedRoleConnectionConfigurationsMap = closure_6.getEditedRoleConnectionConfigurationsMap();
          value = editedRoleConnectionConfigurationsMap.get(role.id);
          if (value == null) {
            value = [];
          }
          return value;
        }
      }
      cResult[6] = role.id;
      cResult[7] = S;
    } else {
      class S {
        constructor() {
          editedRoleConnectionConfigurationsMap = closure_6.getEditedRoleConnectionConfigurationsMap();
          value = editedRoleConnectionConfigurationsMap.get(role.id);
          if (value == null) {
            value = [];
          }
          return value;
        }
      }
    }
    const tmpResult = tmp(504);
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp12, S);
    if (stateFromStoresArray.length > 1) {
      class S {
        constructor() {
          editedRoleConnectionConfigurationsMap = closure_6.getEditedRoleConnectionConfigurationsMap();
          value = editedRoleConnectionConfigurationsMap.get(role.id);
          if (value == null) {
            value = [];
          }
          return value;
        }
      }
    } else {
      class S {
        constructor() {
          editedRoleConnectionConfigurationsMap = closure_6.getEditedRoleConnectionConfigurationsMap();
          value = editedRoleConnectionConfigurationsMap.get(role.id);
          if (value == null) {
            value = [];
          }
          return value;
        }
      }
    }
    dependencyMap = tmp15;
    if (tmp15 === tmp(6678).ConnectionConfigurationRuleOperator.OR) {
      class S {
        constructor() {
          editedRoleConnectionConfigurationsMap = closure_6.getEditedRoleConnectionConfigurationsMap();
          value = editedRoleConnectionConfigurationsMap.get(role.id);
          if (value == null) {
            value = [];
          }
          return value;
        }
      }
    } else {
      class S {
        constructor() {
          editedRoleConnectionConfigurationsMap = closure_6.getEditedRoleConnectionConfigurationsMap();
          value = editedRoleConnectionConfigurationsMap.get(role.id);
          if (value == null) {
            value = [];
          }
          return value;
        }
      }
    }
    const tmpResult2 = tmp(504);
  }
  const fn = function c() {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guild.id);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  };
  let items2 = [role.id, guild.id];
  cResult[1] = guild.id;
  cResult[2] = role.id;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp10 = items2;
  tmp9 = fn;
  let obj3 = guild(17788);
}) : ((guild) => {
  guild = guild.guild;
  const role = guild.role;
  ({ locked, integrations } = guild);
  let stateFromStoresArray;
  let AND;
  let memo;
  let tmp = closure_13();
  const applicationIdentityLinkedRolesEnabled = guild(stateFromStoresArray[27]).useApplicationIdentityLinkedRolesEnabled(guild.id);
  let obj = guild(stateFromStoresArray[27]);
  const applicationIdentityLinkedRolesEnabled1 = guild(stateFromStoresArray[28]).useApplicationIdentityLinkedRolesEnabled(guild.id, "guild_settings_roles_edit_connections");
  let obj2 = guild(stateFromStoresArray[28]);
  let items = [GuildRoleMemberCountStore];
  let items1 = [role.id, guild.id];
  let num = guild(stateFromStoresArray[29]).useStateFromStores(items, () => {
    const roleMemberCount = GuildRoleMemberCountStore.getRoleMemberCount(guild.id);
    let tmp2;
    if (roleMemberCount != null) {
      tmp2 = roleMemberCount[role.id];
    }
    return tmp2;
  }, items1);
  let obj3 = guild(stateFromStoresArray[29]);
  let items2 = [GuildSettingsRolesStore];
  stateFromStoresArray = guild(stateFromStoresArray[29]).useStateFromStoresArray(items2, () => {
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
    closure_10(closure_14, {
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
    tmp11Result = closure_10(closure_15, obj8);
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
      const obj = { connectionType, connectionMetadataField: "Array", applicationId, operator: "enumerable", value: 12290119973512344000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
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
  obj5.children = closure_11(guild(stateFromStoresArray[18]).Stack, obj6);
  return closure_10(guild(stateFromStoresArray[31]).Form, obj5);
});