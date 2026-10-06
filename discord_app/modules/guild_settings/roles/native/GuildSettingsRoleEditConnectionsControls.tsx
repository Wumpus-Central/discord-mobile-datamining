// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import CircleErrorIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import TableRadioRow3 from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import ConnectionsUtils from "../../../connections/ConnectionsUtils.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import GuildSettingsRolesActionCreators from "../GuildSettingsRolesActionCreators.tsx";
import GuildSettingsRoleEditConnectionConfigurationDefault from "GuildSettingsRoleEditConnectionConfiguration.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildRoleMemberCountStore from "../../GuildRoleMemberCountStore.tsx";
import GuildSettingsRolesStore from "../GuildSettingsRolesStore.tsx";
import Constants from "../../../connections/Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, map, set, setPendingRoleConfigurations;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let unpackModuleId;
const f132461 = (connectionType) => "" + connectionType.connectionType + ":" + connectionType.applicationId;
function renderRoleConnectionConfigurations(memo, arg1, locked, arg3, integrations) {
  let arr4;
  let closure_1;
  _require = memo;
  importDefault = arg1;
  dependencyMap = locked;
  function handleConfigurationChange(arg0, arg1) {
    let found;
    const items = [];
    for (const item10006 of memo) {
      let obj = {};
      let push = items.push;
      let merged = Object.assign(item10006);
      let arr = push(obj);
      continue;
    }
    if (null == arg0) {
      const iter = memo[arg1];
      if (null !== iter) {
        if (null == iter.connectionMetadataField) {
          if (null == iter.operator) {
            if (null == iter.value) {
              found = items.filter((connectionType) => {
                let tmp2;
                if (null == iter.applicationId) {
                  tmp2 = connectionType.connectionType !== iter.connectionType;
                } else {
                  tmp2 =
                    connectionType.connectionType !== iter.connectionType ||
                    connectionType.applicationId !== iter.applicationId;
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
  map = new Map();
  const item = memo.forEach((connectionType, index) => {
    const combined = "" + connectionType.connectionType + ":" + connectionType.applicationId;
    if (map.has(combined)) {
      const value = map.get(combined);
      if (value != null) {
        const obj2 = { index, configuration: connectionType };
        value.push(obj2);
      }
    } else {
      const items = [{ index, configuration: connectionType }];
      const obj3 = { index, configuration: connectionType };
      const result = map.set(combined, items);
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
      let obj = { connectionMetadataField: undefined, operator: undefined, value: undefined };
      let merged = Object.assign(arr[0].configuration);
      let obj2 = { index: memo.push(obj) - 1, configuration: obj };
      let arr2 = arr.push(obj2);
    }
    continue;
  }
  let obj3 = {
    spacing: nativeDefault.space.PX_24,
    children: arr4.map((configurationItems) => {
      const obj = { configurationItems, onConfigurationChange: handleConfigurationChange, locked, integrations };
      return authStore(
        GuildSettingsRoleEditConnectionConfigurationDefault,
        obj,
        configurationItems[0].configuration.connectionType + ":" + configurationItems[0].index,
      );
    }),
  };
  const Stack = require("Stack/Stack").Stack;
  arr4 = Array.from(map.values());
  return closure_10(Stack, obj3);
}
function AddConnectionButton(locked) {
  let excludedApplications;
  let excludedConnections;
  let intl;
  let require;
  ({
    handleConnectionTapped: require,
    excludedConnections: importDefault,
    excludedApplications: dependencyMap,
    roleId: react,
    integrations: View,
    gameApplicationIds: GuildRoleMemberCountStore,
  } = locked);
  locked = locked.locked;
  let obj = {
    text: intl.string(intl5.t["OSvW5+"]),
    variant: "secondary",
    icon: closure_10(CirclePlusIcon.CirclePlusIcon, { size: "sm" }),
    disabled: locked,
    onPress() {
      let tmp4;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        addConnection(excludedApplications) {
          return closure_1_0(excludedApplications, undefined);
        },
        excludedConnections: importDefault,
        excludedApplications: dependencyMap,
        integrations: View,
        onCompleteApplication(arg0) {
          return closure_1_0(closure_2_8, arg0);
        },
        gameApplicationIds: tmp4,
        onCompleteIdentityApplication(applicationId) {
          return closure_1_0(closure_2_9, applicationId);
        },
      };
      tmp4 = GuildRoleMemberCountStore;
      const tmp2 = asyncRequire(17855, dependencyMap.paths);
      const combined = "SelectConnectionActionSheet-" + react;
      if (GuildRoleMemberCountStore == null) {
        tmp4 = null;
      }
      openLazy(tmp2, combined, obj);
    },
  };
  const Button = components_Button_Button.Button;
  intl = intl5.intl;
  return closure_10(Button, obj);
}
const View = react_native.View;
const HelpdeskArticles = Constants2.HelpdeskArticles;
({
  GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: metroImportAll,
  GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: c9,
} = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = {
  formContent: { paddingTop: 16, paddingBottom: 0 },
  warningContainer: obj2,
  warningText: { flex: 1, marginLeft: 10 },
  headerTitleContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between" },
};
obj2 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 8,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.xs,
};
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Text3;
      let clearConnections;
      let format;
      let hasConnections;
      let hasMembers;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      let items3;
      let locked;
      let obj11;
      let obj4;
      let obj9;
      let q5f7tK;
      const obj = react2;
      const cResult = obj.c(18);
      ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === hasMembers) {
        if (cResult[1] === tmp4.warningContainer) {
          let tmp5;
          let tmp12;
          if (cResult[2] === tmp4.warningText) {
            tmp5 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-md/semibold", children: intl2.string(intl5.t.nMir27) };
            const Text2 = Text_Text.Text;
            intl2 = intl5.intl;
            const tmp14 = authStore(Text2, obj2);
            cResult[4] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[4];
          }
          if (cResult[5] === clearConnections) {
            if (cResult[6] === hasConnections) {
              let tmp15;
              if (cResult[7] === locked) {
                tmp15 = cResult[8];
              }
              if (cResult[9] === tmp4.headerTitleContainer) {
                let tmp18;
                let tmp22;
                let tmp27;
                if (cResult[10] === tmp15) {
                  tmp18 = cResult[11];
                }
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { variant: "text-sm/medium", children: format(q5f7tK, obj4) };
                  const Text4 = Text_Text.Text;
                  const intl4 = intl5.intl;
                  format = intl4.format;
                  obj4 = { helpdeskArticleUrl: obj11.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
                  q5f7tK = intl5.t.q5f7tK;
                  obj11 = HelpdeskUtilsDefault;
                  const tmp26 = authStore(Text4, obj3);
                  cResult[12] = tmp26;
                  tmp22 = tmp26;
                } else {
                  tmp22 = cResult[12];
                }
                if (cResult[13] !== tmp18) {
                  const obj5 = { children: items };
                  items = [tmp18, tmp22];
                  const tmp29 = unpackModuleId(Stack_Stack.Stack, obj5);
                  cResult[13] = tmp18;
                  cResult[14] = tmp29;
                  tmp27 = tmp29;
                } else {
                  tmp27 = cResult[14];
                }
                if (cResult[15] === tmp5) {
                  let tmp30;
                  if (cResult[16] === tmp27) {
                    tmp30 = cResult[17];
                  }
                  return tmp30;
                }
                const obj6 = { children: items1 };
                items1 = [tmp5, tmp27];
                const tmp33 = unpackModuleId(closure_12, obj6);
                cResult[15] = tmp5;
                cResult[16] = tmp27;
                cResult[17] = tmp33;
                tmp30 = tmp33;
              }
              const obj7 = { style: tmp4.headerTitleContainer, children: items2 };
              items2 = [tmp12, tmp15];
              const tmp21 = unpackModuleId(View, obj7);
              cResult[9] = tmp4.headerTitleContainer;
              cResult[10] = tmp15;
              cResult[11] = tmp21;
              tmp18 = tmp21;
            }
          }
          let tmp16;
          if (hasConnections) {
            const obj8 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: authStore(Text3, obj9) };
            const PressableOpacity = Pressables.PressableOpacity;
            obj9 = {
              variant: "text-sm/medium",
              color: "text-feedback-critical",
              children: intl3.string(intl5.t.ntW1cc),
            };
            Text3 = Text_Text.Text;
            intl3 = intl5.intl;
            tmp16 = authStore(PressableOpacity, obj8);
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
        const obj10 = { style: tmp4.warningContainer, children: items3 };
        const obj12 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
        const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
        items3 = [authStore(CircleErrorIcon, obj12)];
        const obj13 = { variant: "text-xs/medium", style: tmp4.warningText, children: intl.string(intl5.t["2aFeef"]) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items3[1] = authStore(Text, obj13);
        tmp6 = unpackModuleId(View, obj10);
      }
      cResult[0] = hasMembers;
      cResult[1] = tmp4.warningContainer;
      cResult[2] = tmp4.warningText;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let Text3;
      let clearConnections;
      let format;
      let hasConnections;
      let hasMembers;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items2;
      let items3;
      let locked;
      let obj11;
      let obj12;
      let obj7;
      let q5f7tK;
      ({ clearConnections, locked, hasConnections, hasMembers } = arg0);
      const tmp = closure_13();
      let tmp2Result = null;
      if (hasMembers) {
        const obj = { style: tmp.warningContainer, children: items };
        const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
        const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
        items = [authStore(CircleErrorIcon, obj2)];
        const obj3 = { variant: "text-xs/medium", style: tmp.warningText, children: intl.string(intl5.t["2aFeef"]) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items[1] = authStore(Text, obj3);
        tmp2Result = unpackModuleId(View, obj);
      }
      const items1 = [tmp2Result];
      const obj4 = { style: tmp.headerTitleContainer, children: items2 };
      const Stack = Stack_Stack.Stack;
      const obj5 = { variant: "text-md/semibold", children: intl2.string(intl5.t.nMir27) };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      items2 = [authStore(Text2, obj5)];
      let tmp13Result;
      if (hasConnections) {
        const obj6 = { hitSlop: 8, onPress: clearConnections, disabled: locked, children: authStore(Text3, obj7) };
        const PressableOpacity = Pressables.PressableOpacity;
        obj7 = { variant: "text-sm/medium", color: "text-feedback-critical", children: intl3.string(intl5.t.ntW1cc) };
        Text3 = Text_Text.Text;
        intl3 = intl5.intl;
        tmp13Result = authStore(PressableOpacity, obj6);
      }
      const obj8 = { children: items1 };
      const obj9 = { children: items3 };
      items2[1] = tmp13Result;
      items3 = [unpackModuleId(View, obj4)];
      const obj10 = { variant: "text-sm/medium", children: format(q5f7tK, obj11) };
      const Text4 = Text_Text.Text;
      const intl4 = intl5.intl;
      format = intl4.format;
      obj11 = { helpdeskArticleUrl: obj12.getArticleURL(HelpdeskArticles.CONNECTION_DETAILS_ADMIN) };
      q5f7tK = intl5.t.q5f7tK;
      obj12 = HelpdeskUtilsDefault;
      items3[1] = authStore(Text4, obj10);
      items1[1] = unpackModuleId(Stack, obj9);
      return unpackModuleId(closure_12, obj8);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (setPendingRoleConfigurations) => {
      let arr;
      let currentOperator;
      let items2;
      let locked;
      let roleConnectionConfigurations;
      const obj = react2;
      const cResult = obj.c(17);
      ({ locked, currentOperator, roleConnectionConfigurations } = setPendingRoleConfigurations);
      setPendingRoleConfigurations = setPendingRoleConfigurations.setPendingRoleConfigurations;
      if (cResult[0] !== roleConnectionConfigurations) {
        let values2;
        if (
          ConnectionsUtils.ConnectionConfigurationRuleOperator.OR ===
          ConnectionsUtils.ConnectionConfigurationRuleOperator.AND
        ) {
          let items;
          if (0 === roleConnectionConfigurations.length) {
            items = [];
          } else {
            const items1 = [];
            HermesBuiltin.arraySpread(items1, roleConnectionConfigurations, 0);
            items = [items1];
          }
          values2 = items;
        } else {
          const _Object = Object;
          const obj2 = _modDef12;
          values2 = values(obj2.groupBy(roleConnectionConfigurations, f132461));
        }
        cResult[0] = roleConnectionConfigurations;
        cResult[1] = values2;
        arr = values2;
      } else {
        arr = cResult[1];
      }
      if (cResult[2] === roleConnectionConfigurations) {
        let tmp11;
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp21;
        let tmp23;
        if (cResult[3] === setPendingRoleConfigurations) {
          tmp11 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl5.intl;
          const stringResult = intl.string(intl5.t.Xs7PHX);
          cResult[5] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl5.intl;
          const stringResult1 = intl2.string(intl5.t.W3iY58);
          cResult[6] = stringResult1;
          tmp15 = stringResult1;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] !== (locked || arr.length < 2)) {
          const obj3 = {
            value: ConnectionsUtils.ConnectionConfigurationRuleOperator.OR,
            label: tmp15,
            disabled: locked || arr.length < 2,
          };
          const TableRadioRow = TableRadioRow3.TableRadioRow;
          const tmp20 = authStore(TableRadioRow, obj3);
          cResult[7] = locked || arr.length < 2;
          cResult[8] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl5.intl;
          const stringResult2 = intl3.string(intl5.t.gHXS9A);
          cResult[9] = stringResult2;
          tmp21 = stringResult2;
        } else {
          tmp21 = cResult[9];
        }
        if (cResult[10] !== locked) {
          const obj4 = {
            value: ConnectionsUtils.ConnectionConfigurationRuleOperator.AND,
            label: tmp21,
            disabled: locked,
          };
          const TableRadioRow2 = TableRadioRow3.TableRadioRow;
          const tmp25 = authStore(TableRadioRow2, obj4);
          cResult[10] = locked;
          cResult[11] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[11];
        }
        if (cResult[12] === currentOperator) {
          if (cResult[13] === tmp11) {
            if (cResult[14] === tmp18) {
              let tmp26;
              if (cResult[15] === tmp23) {
                tmp26 = cResult[16];
              }
              return tmp26;
            }
          }
        }
        const obj5 = { title: tmp13, value: currentOperator, onChange: tmp11, hasIcons: false, children: items2 };
        items2 = [tmp18, tmp23];
        const tmp28 = unpackModuleId(TableRadioGroup2.TableRadioGroup, obj5);
        cResult[12] = currentOperator;
        cResult[13] = tmp11;
        cResult[14] = tmp18;
        cResult[15] = tmp23;
        cResult[16] = tmp28;
        tmp26 = tmp28;
      }
      const fn = function p(arg0) {
        setPendingRoleConfigurations(roleConnectionConfigurations, arg0);
      };
      cResult[2] = roleConnectionConfigurations;
      cResult[3] = setPendingRoleConfigurations;
      cResult[4] = fn;
      tmp11 = fn;
    }
  : (setPendingRoleConfigurations) => {
      let intl;
      let intl2;
      let intl3;
      let items2;
      let locked;
      let roleConnectionConfigurations;
      let tmp11;
      let values2;
      ({ locked, roleConnectionConfigurations } = setPendingRoleConfigurations);
      let closure_1 = setPendingRoleConfigurations.setPendingRoleConfigurations;
      const currentOperator = setPendingRoleConfigurations.currentOperator;
      if (
        ConnectionsUtils.ConnectionConfigurationRuleOperator.OR ===
        ConnectionsUtils.ConnectionConfigurationRuleOperator.AND
      ) {
        let items;
        if (0 === roleConnectionConfigurations.length) {
          items = [];
        } else {
          const items1 = [];
          HermesBuiltin.arraySpread(items1, roleConnectionConfigurations, 0);
          items = [items1];
        }
        values2 = items;
      } else {
        const _Object = Object;
        const obj = _modDef12;
        values2 = values(obj.groupBy(roleConnectionConfigurations, f132461));
      }
      const obj2 = {
        title: intl.string(intl5.t.Xs7PHX),
        value: currentOperator,
        onChange(arg0) {
          closure_1(roleConnectionConfigurations, arg0);
        },
        hasIcons: false,
        children: items2,
      };
      const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
      intl = intl5.intl;
      const obj3 = {
        value: ConnectionsUtils.ConnectionConfigurationRuleOperator.OR,
        label: intl2.string(intl5.t.W3iY58),
        disabled: tmp11,
      };
      const TableRadioRow = TableRadioRow3.TableRadioRow;
      intl2 = intl5.intl;
      tmp11 = locked || values2.length < 2;
      items2 = [authStore(TableRadioRow, obj3)];
      const obj4 = {
        value: ConnectionsUtils.ConnectionConfigurationRuleOperator.AND,
        label: intl3.string(intl5.t.gHXS9A),
        disabled: locked,
      };
      const TableRadioRow2 = TableRadioRow3.TableRadioRow;
      intl3 = intl5.intl;
      items2[1] = authStore(TableRadioRow2, obj4);
      return unpackModuleId(TableRadioGroup, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (guild) {
      let arr5;
      let closure_2;
      let first;
      let locked;
      let tmp2 = dependencyMap;
      let obj = guild(576);
      const cResult = obj.c(59);
      guild = guild.guild;
      const role = guild.role;
      ({ locked, integrations } = guild);
      closure_13();
      let obj2 = guild(17856);
      const applicationIdentityLinkedRolesEnabled = obj2.useApplicationIdentityLinkedRolesEnabled(guild.id);
      const obj3 = guild(17858);
      const applicationIdentityLinkedRolesEnabled1 = obj3.useApplicationIdentityLinkedRolesEnabled(
        guild.id,
        "guild_settings_roles_edit_connections",
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleMemberCountStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guild.id) {
        let tmp9;
        let tmp10;
        let tmp12;
        if (cResult[2] === role.id) {
          tmp9 = cResult[3];
          tmp10 = cResult[4];
        }
        const tmpResult = guild(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let items1 = [GuildSettingsRolesStore];
          cResult[5] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== role.id) {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
          cResult[6] = role.id;
          cResult[7] = S;
        } else {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
        }
        const tmpResult2 = guild(504);
        const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp12, S);
        if (stateFromStoresArray.length > 1) {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
        } else {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
        }
        dependencyMap = tmp15;
        if (tmp15 === guild(6685).ConnectionConfigurationRuleOperator.OR) {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
        } else {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
        }
        if (cResult[12] !== tmp16) {
          class S {
            constructor() {
              const editedRoleConnectionConfigurationsMap =
                GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
              let items = editedRoleConnectionConfigurationsMap.get(role.id);
              if (items == null) {
                items = [];
              }
              return items;
            }
          }
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class W {
              constructor(connectionType) {
                return connectionType.connectionType;
              }
            }
            cResult[14] = W;
          } else {
            class W {
              constructor(connectionType) {
                return connectionType.connectionType;
              }
            }
          }
          const _Set = Set;
          const self = this;
          const self2 = this;
          cResult[12] = tmp16;
          cResult[13] = new Set(tmp16.map(W));
          set = new Set(tmp16.map(W));
        } else {
          class W {
            constructor(connectionType) {
              return connectionType.connectionType;
            }
          }
        }
        if (cResult[15] !== tmp16) {
          class W {
            constructor(connectionType) {
              return connectionType.connectionType;
            }
          }
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor(applicationId) {
                let str = applicationId.applicationId;
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
            cResult[17] = L;
          } else {
            class L {
              constructor(applicationId) {
                let str = applicationId.applicationId;
                if (str == null) {
                  str = "";
                }
                return str;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor(arg0) {
                return "" !== arg0;
              }
            }
            cResult[18] = G;
          } else {
            class G {
              constructor(arg0) {
                return "" !== arg0;
              }
            }
          }
          const _Set2 = Set;
          const mapped = tmp16.map(L);
          const self3 = this;
          const self4 = this;
          cResult[15] = tmp16;
          cResult[16] = new Set(mapped.filter(G));
          const set1 = new Set(mapped.filter(G));
        } else {
          class G {
            constructor(arg0) {
              return "" !== arg0;
            }
          }
        }
        if (cResult[19] === tmp15) {
          class G {
            constructor(arg0) {
              return "" !== arg0;
            }
          }
        }
        class X {
          constructor(connectionType, arg1) {
            let values2;
            let tmp2;
            if (undefined !== arg1) {
              tmp2 = arg1;
            }
            const items = [...arr5];
            const obj = {
              connectionType,
              connectionMetadataField: "Array",
              applicationId: tmp2,
              operator: "disabled",
              value: false,
            };
            items.push(obj);
            const updateRoleConnectionConfigurations =
              GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
            const id = role.id;
            GuildSettingsRolesActionCreators;
            if (dependencyMap === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
              let items1;
              if (0 === items.length) {
                items1 = [];
              } else {
                const items2 = [];
                HermesBuiltin.arraySpread(items2, items, 0);
                items1 = [items2];
              }
              values2 = items1;
            } else {
              const _Object = Object;
              const obj2 = _modDef12;
              values2 = values(obj2.groupBy(items, f132461));
            }
            const result = updateRoleConnectionConfigurations(id, values2);
          }
        }
        cResult[19] = tmp15;
        cResult[20] = tmp16;
        cResult[21] = role.id;
        cResult[22] = X;
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
    }
  : (guild) => {
      let Stack;
      let gameApplicationIds;
      let items6;
      let locked;
      let obj6;
      guild = guild.guild;
      const role = guild.role;
      ({ locked, integrations } = guild);
      let stateFromStoresArray;
      let AND;
      let memo;
      let tmp2 = guild;
      const tmp3 = stateFromStoresArray;
      const tmp = closure_13();
      let obj = guild(stateFromStoresArray[27]);
      const applicationIdentityLinkedRolesEnabled = obj.useApplicationIdentityLinkedRolesEnabled(guild.id);
      let obj2 = guild(stateFromStoresArray[28]);
      const applicationIdentityLinkedRolesEnabled1 = obj2.useApplicationIdentityLinkedRolesEnabled(
        guild.id,
        "guild_settings_roles_edit_connections",
      );
      let items = [GuildRoleMemberCountStore];
      let items1 = [role.id, guild.id];
      const obj3 = guild(stateFromStoresArray[29]);
      let num = obj3.useStateFromStores(
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
      let items2 = [GuildSettingsRolesStore];
      const obj4 = guild(stateFromStoresArray[29]);
      stateFromStoresArray = obj4.useStateFromStoresArray(items2, () => {
        const editedRoleConnectionConfigurationsMap =
          GuildSettingsRolesStore.getEditedRoleConnectionConfigurationsMap();
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
        let flatResult;
        if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.OR) {
          flatResult = stateFromStoresArray.flat();
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
      const memo1 = AND.useMemo(() => {
        set = new Set(memo.map((connectionType) => connectionType.connectionType));
        return set;
      }, items4);
      const items5 = [memo];
      const memo2 = AND.useMemo(() => {
        const mapped = memo.map((applicationId) => {
          let str = applicationId.applicationId;
          if (str == null) {
            str = "";
          }
          return str;
        });
        set = new Set(mapped.filter((item) => "" !== item));
        return set;
      }, items5);
      if (num == null) {
        num = 0;
      }
      const obj5 = {
        contentContainerStyle: tmp.formContent,
        keyboardShouldPersistTaps: "handled",
        children: closure_11(Stack, obj6),
      };
      const Form = tmp2(tmp3[31]).Form;
      obj6 = { spacing: role(tmp3[8]).space.PX_24, children: items6 };
      Stack = tmp2(tmp3[18]).Stack;
      items6 = [, , ,];
      const obj7 = {
        clearConnections() {
          const obj = GuildSettingsRolesActionCreators;
          const result = obj.updateRoleConnectionConfigurations(role.id, []);
        },
        locked,
        hasConnections: memo1.size > 0,
        hasMembers: num > 0,
      };
      items6[0] = closure_10(closure_14, obj7);
      let tmp11Result = null;
      if (memo1.size > 0) {
        const obj8 = {
          locked,
          currentOperator: AND,
          roleConnectionConfigurations: memo,
          setPendingRoleConfigurations(arg0, arg1) {
            let values2;
            const updateRoleConnectionConfigurations =
              GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
            const id = role.id;
            GuildSettingsRolesActionCreators;
            if (arg1 === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
              let items;
              if (0 === arg0.length) {
                items = [];
              } else {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, arg0, 0);
                items = [items1];
              }
              values2 = items;
            } else {
              const _Object = Object;
              const obj = _modDef12;
              values2 = values(obj.groupBy(arg0, f132461));
            }
            const result = updateRoleConnectionConfigurations(id, values2);
          },
        };
        tmp11Result = closure_10(closure_15, obj8);
      }
      items6[1] = tmp11Result;
      let tmp15 = null;
      if (memo1.size > 0) {
        let id = role.id;
        tmp15 = renderRoleConnectionConfigurations(
          memo,
          (arg0) => {
            let values2;
            const updateRoleConnectionConfigurations =
              GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
            const id = role.id;
            GuildSettingsRolesActionCreators;
            if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
              let items;
              if (0 === arg0.length) {
                items = [];
              } else {
                const items1 = [];
                HermesBuiltin.arraySpread(items1, arg0, 0);
                items = [items1];
              }
              values2 = items;
            } else {
              const _Object = Object;
              const obj = _modDef12;
              values2 = values(obj.groupBy(arg0, f132461));
            }
            const result = updateRoleConnectionConfigurations(id, values2);
          },
          locked,
          0,
          integrations,
        );
      }
      items6[2] = tmp15;
      const obj9 = {
        handleConnectionTapped(connectionType, applicationId) {
          let values2;
          const items = [...memo];
          const obj = {
            connectionType,
            connectionMetadataField: "Array",
            applicationId,
            operator: "disabled",
            value: false,
          };
          items.push(obj);
          const updateRoleConnectionConfigurations =
            GuildSettingsRolesActionCreators.updateRoleConnectionConfigurations;
          const id = role.id;
          GuildSettingsRolesActionCreators;
          if (AND === ConnectionsUtils.ConnectionConfigurationRuleOperator.AND) {
            let items1;
            if (0 === items.length) {
              items1 = [];
            } else {
              const items2 = [];
              HermesBuiltin.arraySpread(items2, items, 0);
              items1 = [items2];
            }
            values2 = items1;
          } else {
            const _Object = Object;
            const obj2 = _modDef12;
            values2 = values(obj2.groupBy(items, f132461));
          }
          const result = updateRoleConnectionConfigurations(id, values2);
        },
        excludedConnections: memo1,
        excludedApplications: memo2,
        roleId: role.id,
        integrations,
        gameApplicationIds,
        locked,
      };
      if (applicationIdentityLinkedRolesEnabled) {
        gameApplicationIds = guild.gameApplicationIds;
      } else {
        gameApplicationIds = null;
      }
      if (!locked) {
        locked = tmp10;
      }
      items6[3] = closure_10(AddConnectionButton, obj9);
      return closure_10(Form, obj5);
    };
let result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx",
);

export default tmp4;
