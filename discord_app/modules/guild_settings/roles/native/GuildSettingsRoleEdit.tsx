// === Module 18057: GuildSettingsRoleEdit ===

// Module 18057 (GuildSettingsRoleEdit)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PermissionUtilsAll from "PermissionUtils" /* 4400 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5108 */;
import Stack_Stack from "Stack/Stack" /* 5184 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5737 */;
import _modDef5814 from "module_5814" /* 5814 */;
import TableRow from "TableRow" /* 5822 */;
import NavigatorHeader from "NavigatorHeader" /* 5841 */;
import TableRowGroup from "TableRowGroup" /* 5904 */;
import HeaderActionButton from "HeaderActionButton" /* 7619 */;
import Form from "Form" /* 8871 */;
import _modDef9621 from "module_9621" /* 9621 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9823 */;
import ConnectionsRoleActionCreators from "ConnectionsRoleActionCreators" /* 11824 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 18048 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 18058 */;
import GuildSettingsRoleEditDisplayDefault from "GuildSettingsRoleEditDisplay" /* 18059 */;
import GuildSettingsRoleEditPermissionsDefault from "GuildSettingsRoleEditPermissions" /* 18068 */;
import GuildSettingsRoleMembersDefault from "GuildSettingsRoleMembers" /* 18070 */;
import GuildSettingsRoleEditConnectionsControlsDefault from "GuildSettingsRoleEditConnectionsControls" /* 18071 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2063 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9856 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 18044 */;

require = fn;
let closure_4 = ["guild"];
const View = fn(17).View;
const isEveryoneRole = fn(2100).isEveryoneRole;
const RoleColorsStyle = fn(18044).RoleColorsStyle;
const constants = fn(18039).GuildSettingsRoleEditSections;
const Constants = fn(1074);
({ AnalyticEvents: closure_18, DEFAULT_ROLE_COLOR: closure_19, GuildSettingsSections: closure_20 } = Constants);
const HOLOGRAPHIC_ROLE_COLORS = fn(18046).HOLOGRAPHIC_ROLE_COLORS;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, paddingTop: 16 }, innerContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, managedRolesWarningContainer: { marginVertical: 8, marginHorizontal: 16 }, form: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.form = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_25 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class GuildSettingsRoleEdit extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { submitting: false, formErrors: {} };
    applyArgumentsResult.onSubScreenValueChange = function onSubScreenValueChange(MEMBERS) {
      const navigation = applyArgumentsResult.props.navigation;
      const obj = {};
      const merged = Object.assign(applyArgumentsResult.props);
      obj.section = MEMBERS;
      navigation.push(constants3.ROLE_EDIT_REFRESH, obj);
    };
    applyArgumentsResult.trackTabChanged = function trackTabChanged(DISPLAY) {
      const result = AppAnalyticsUtils.collectGuildAnalyticsMetadata(applyArgumentsResult.props.guild.id);
      const role = applyArgumentsResult.props.role;
      const id = role.id;
      ({ permissions, mentionable, hoist } = role);
      const sectionAnalyticsName = GuildSettingsRolesUtils.getSectionAnalyticsName(DISPLAY);
      const members = GuildMemberStore.getMembers(applyArgumentsResult.props.guild.id);
      const found = _modDef12(members).filter((roles) => {
        roles = roles.roles;
        return roles.includes(id);
      });
      const arr = _modDef12(members);
      const sizeResult = found.size();
      const obj3 = { tab_opened: sectionAnalyticsName, is_everyone: null, role_id: null, role_mentionable: null, role_hoist: null, role_permissions: null, role_num_members: null };
      const obj4 = AnalyticsUtilsDefault;
      obj3.is_everyone = ChannelPermissionsUtils.isEveryoneRoleId(applyArgumentsResult.props.guild.id, id);
      obj3.role_id = id;
      obj3.role_mentionable = mentionable;
      obj3.role_hoist = hoist;
      obj3.role_permissions = permissions.toString();
      obj3.role_num_members = sizeResult;
      const merged = Object.assign(result);
      obj4.track(constants2.ROLE_PAGE_VIEWED, obj3);
    };
    applyArgumentsResult.handleNameChanged = function handleNameChanged(name) {
      const merged = Object.assign(applyArgumentsResult.state.formErrors);
      delete tmp2[tmp];
      applyArgumentsResult.setState({ formErrors: {} });
      GuildSettingsRolesActionCreators.updateRoleName(applyArgumentsResult.props.role.id, name);
    };
    applyArgumentsResult.handleMentionableChanged = function handleMentionableChanged(mentionable) {
      GuildSettingsRolesActionCreators.toggleRoleSettings(applyArgumentsResult.props.role.id, applyArgumentsResult.props.role.hoist, mentionable);
    };
    applyArgumentsResult.handleHoistChanged = function handleHoistChanged(hoist) {
      GuildSettingsRolesActionCreators.toggleRoleSettings(applyArgumentsResult.props.role.id, hoist, applyArgumentsResult.props.role.mentionable);
    };
    applyArgumentsResult.handlePermissionsChanged = function handlePermissionsChanged(permissions) {
      const result = GuildSettingsRolesActionCreators.updateRolePermissionSet(applyArgumentsResult.props.role.id, permissions);
    };
    applyArgumentsResult.handleSaveRole = function handleSaveRole() {
      return new Promise((arg0) => {
        closure_0 = arg0;
        const navigation = closure_0.props.navigation;
        const id = closure_0.props.role.id;
        ({ name, permissions, mentionable, hoist, icon, unicodeEmoji } = closure_0.props.role);
        const effectiveSection = closure_0.getEffectiveSection();
        if (effectiveSection === constants2.PERMISSIONS) {
          let obj2 = { permissions };
        } else if (effectiveSection === constants2.DISPLAY) {
          const roleStyleData = closure_1_15.getRoleStyleData(id);
          let currentStyle;
          if (roleStyleData != null) {
            currentStyle = roleStyleData.currentStyle;
          }
          if (currentStyle == null) {
            currentStyle = constants.SOLID;
          }
          primary_color = undefined;
          if (roleStyleData != null) {
            const styleColors = roleStyleData.styleColors;
            if (styleColors != null) {
              if (styleColors[currentStyle] != null) {
                primary_color = tmp6.primary_color;
              }
            }
          }
          if (primary_color == null) {
            primary_color = closure_1_19;
          }
          let tmp7;
          if (roleStyleData != null) {
            const styleColors2 = roleStyleData.styleColors;
            if (styleColors2 != null) {
              tmp7 = styleColors2[currentStyle];
            }
          }
          if (currentStyle === constants.SOLID) {
            let obj3 = { primary_color, secondary_color: null, tertiary_color: null };
            tmp7 = obj3;
            let primary_color1 = primary_color;
          } else if (currentStyle === tmp8.HOLOGRAPHIC) {
            primary_color1 = primary_color.primary_color;
            tmp7 = primary_color;
          } else {
            primary_color1 = undefined;
            if (tmp7 != null) {
              primary_color1 = tmp7.primary_color;
            }
            if (primary_color1 == null) {
              primary_color1 = closure_1_19;
            }
          }
          const obj4 = { name, color: primary_color1, colors: tmp7, hoist, mentionable, icon, unicodeEmoji };
        }
        let hasRoleConfigurationChanges = effectiveSection === constants2.VERIFICATIONS;
        if (hasRoleConfigurationChanges) {
          hasRoleConfigurationChanges = closure_1_15.hasRoleConfigurationChanges;
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleIdsForConfigurations = closure_1_15.editedRoleIdsForConfigurations;
          hasRoleConfigurationChanges = editedRoleIdsForConfigurations.has(id);
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleConnectionConfigurationsMap = closure_1_15.getEditedRoleConnectionConfigurationsMap();
          closure_2 = editedRoleConnectionConfigurationsMap.get(id);
        }
        function success() {
          applyArgumentsResult(18058).commitSectionChanges(id, effectiveSection);
          navigation.pop();
          closure_2_0.setState({ submitting: false, formErrors: {} });
          const obj = applyArgumentsResult(18058);
          const obj3 = { key: "ROLE_EDIT_SAVED", content: null, icon: null };
          const intl = applyArgumentsResult(1115).intl;
          obj3.content = intl.string(applyArgumentsResult(1115).t.ulZn1j);
          obj3.icon = _modDef9621;
          ToastActionCreatorsDefault.open(obj3);
          closure_0(true);
        }
        function failure(body) {
          body = undefined;
          if (body != null) {
            body = body.body;
          }
          if (body == null) {
            body = {};
          }
          closure_2_0.setState({ submitting: false, formErrors: body });
          const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
          const intl = applyArgumentsResult(1115).intl;
          obj.content = intl.string(applyArgumentsResult(1115).t.fEptJP);
          obj.icon = _modDef5814;
          ToastActionCreatorsDefault.open(obj);
          closure_0(false);
        }
        closure_0.setState({ submitting: true, formErrors: {} }, () => {
          if (null != obj4) {
            let updateRoleResult = GuildActionCreatorsDefault.updateRole(id, id, tmp);
          } else {
            updateRoleResult = Promise.resolve();
          }
          updateRoleResult.then(() => {
            if (null != closure_1_2) {
              const result = closure_3_0(dependencyMap[31]).putRoleConnectionsConfigurations(closure_1_4, closure_1_5, tmp);
              result.then(success, failure);
              const obj = closure_3_0(dependencyMap[31]);
            } else {
              success();
            }
          }, (body) => {
            failure(body);
          });
        });
      });
    };
    applyArgumentsResult.handleDeleteRole = function handleDeleteRole() {
      const props = applyArgumentsResult.props;
      ({ guild: closure_1, role } = props);
      const navigation = props.navigation;
      const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
      const intl = util.intl;
      obj2.title = intl.formatToPlainString(util.t.FiMFTZ, { name: role.name });
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.qALKny);
      const intl3 = util.intl;
      obj2.cancelText = intl3.string(util.t["ETE/oC"]);
      const intl4 = util.intl;
      obj2.confirmText = intl4.string(util.t.N86XcP);
      closure_0 = asyncGeneratorStep(async () => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const tags = role.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                if (null === guild_connections) {
                  v1 = 1;
                  c2 = 1;
                  const obj6 = { value: tmp4(11824).putRoleConnectionsConfigurations(id.id, role.id, []), done: false };
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            v1(5737).deleteRole(closure_128_1.id, closure_128_2.id);
            closure_128_3.pop();
            c2 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp18) {
            c2 = tmp;
            throw tmp18;
          }
        }
      });
      obj2.onConfirm = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj2.confirmColor = native.ButtonColors.RED;
      AlertActionCreatorsDefault.show(obj2);
    };
    applyArgumentsResult.handleBack = function handleBack() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      if (props.section !== constants.DISPLAY) {
        applyArgumentsResult.trackTabChanged(tmp.DISPLAY);
      }
      if (applyArgumentsResult.getSectionChanges()) {
        let resolved = new Promise((arg0) => {
          closure_0 = arg0;
          let obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, confirmColor: null, isDismissable: false };
          const intl = closure_1_0(1115).intl;
          obj2.title = intl.string(closure_1_0(1115).t.P3yCXJ);
          const intl2 = closure_1_0(1115).intl;
          obj2.body = intl2.string(closure_1_0(1115).t.BU8QoR);
          const intl3 = closure_1_0(1115).intl;
          obj2.cancelText = intl3.string(closure_1_0(1115).t["lHKZ1/"]);
          const intl4 = closure_1_0(1115).intl;
          obj2.confirmText = intl4.string(closure_1_0(1115).t.p89ACt);
          obj2.onConfirm = function onConfirm() {
            closure_2_0.handleSaveRole().then((result) => closure_1_0(result));
          };
          obj2.onCancel = function onCancel() {
            const id = closure_2_0.props.role.id;
            const effectiveSection = closure_2_0.getEffectiveSection();
            if (effectiveSection === constants.VERIFICATIONS) {
              const result = applyArgumentsResult(18058).discardConnectionsChanges(id);
              const obj2 = applyArgumentsResult(18058);
            } else {
              const result1 = applyArgumentsResult(18058).discardSectionChanges(id, effectiveSection);
              const obj = applyArgumentsResult(18058);
            }
            closure_0(true);
          };
          obj2.confirmColor = closure_1_0(1177).ButtonColors.BRAND;
          closure_1_1(5108).show(obj2);
        });
      } else {
        navigation.pop();
        resolved = Promise.resolve(false);
      }
      return resolved;
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsRoleEdit.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.trackTabChanged(this.props.section);
  this.updateNavigation(undefined, this.state);
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0, arg1) {
  this.updateNavigation(arg0, arg1);
};
prototype["getEffectiveSection"] = function getEffectiveSection() {
  const props = this.props;
  let PERMISSIONS = props.section;
  if (isEveryoneRole(props.role)) {
    PERMISSIONS = constants.PERMISSIONS;
  }
  return PERMISSIONS;
};
prototype["getSectionChanges"] = function getSectionChanges() {
  return GuildSettingsRolesStore.hasSectionChanges(this.props.role.id, this.getEffectiveSection());
};
prototype["updateNavigation"] = function updateNavigation(role, submitting) {
  const self = this;
  const props = this.props;
  role = props.role;
  const navigation = props.navigation;
  submitting = this.state.submitting;
  let setOptionsResult = { headerLeft: null, headerRight: null, headerTitle: null };
  const sectionChanges = self.getSectionChanges();
  setOptionsResult.headerLeft = role(5841).getHeaderConditionalBackButton(self.handleBack);
  if (submitting) {
    let fn = () => closure_1_22(role(dependencyMap[18]).HeaderSubmittingIndicator, {});
  } else if (sectionChanges) {
    fn = () => {
      const obj = { onPress: self.handleSaveRole, text: null };
      const intl = util.intl;
      obj.text = intl.string(util.t["R3BPH+"]);
      return __initData2(HeaderActionButton.HeaderActionButton, obj);
    };
  }
  setOptionsResult.headerRight = fn;
  setOptionsResult.headerTitle = function headerTitle() {
    const obj = { title: role.name, subtitle: null };
    const intl = util.intl;
    obj.subtitle = intl.string(util.t.XPGZXP);
    return __initData2(NavigatorHeader.NavigatorHeader, obj);
  };
  setOptionsResult = navigation.setOptions(setOptionsResult);
};
prototype["renderSubScreenButtons"] = function renderSubScreenButtons() {
  const self = this;
  const obj = { hasIcons: false, children: null };
  const obj2 = { label: null, onPress: null, arrow: true };
  const intl = self(1115).intl;
  obj2.label = intl.string(self(1115).t.WIDE1L);
  obj2.onPress = function onPress() {
    return self.onSubScreenValueChange(constants.PERMISSIONS);
  };
  const items = [closure_22(self(5822).TableRow, obj2), , ];
  const obj3 = { label: null, onPress: null, arrow: true };
  const intl2 = self(1115).intl;
  obj3.label = intl2.string(self(1115).t["5//Muu"]);
  obj3.onPress = function onPress() {
    return self.onSubScreenValueChange(constants.VERIFICATIONS);
  };
  items[1] = closure_22(self(5822).TableRow, obj3);
  const obj4 = { label: null, onPress: null, arrow: true };
  const intl3 = self(1115).intl;
  obj4.label = intl3.string(self(1115).t.J4ZtH1);
  obj4.onPress = function onPress() {
    return self.onSubScreenValueChange(constants.MEMBERS);
  };
  items[2] = closure_22(self(5822).TableRow, obj4);
  obj.children = items;
  return closure_23(self(5904).TableRowGroup, obj);
};
prototype["renderDeleteButton"] = function renderDeleteButton() {
  const obj = { hasIcons: false, children: null };
  const obj2 = { variant: "danger", label: null, onPress: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.c9ej8n);
  obj2.onPress = this.handleDeleteRole;
  obj.children = __initData2(TableRow.TableRow, obj2);
  return __initData2(TableRowGroup.TableRowGroup, obj);
};
prototype["renderManagedRoleWarningText"] = function renderManagedRoleWarningText() {
  const obj = { style: closure_25(this.context).managedRolesWarningContainer, children: null };
  const obj2 = { messageType: native.HelpMessageTypes.WARNING, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.k5d7DJ);
  obj.children = __initData2(native.HelpMessage, obj2);
  return __initData2(View, obj);
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_25(this.context);
  const props = this.props;
  ({ guild, role, locked } = props);
  ({ newRole, integrations } = props);
  ({ name, permissions, mentionable, hoist } = role);
  const tmp2 = isEveryoneRole(role);
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  let tmp4 = tmp2;
  if (!tmp2) {
    tmp4 = locked;
  }
  let tmp6 = !tmp4;
  if (!tmp4) {
    const managed = role.managed;
    let tmp7 = !managed;
    if (managed) {
      tmp7 = tmp5;
    }
    tmp6 = tmp7;
  }
  const effectiveSection = self.getEffectiveSection();
  if (constants.DISPLAY === effectiveSection) {
    const obj2 = { guild, role, name, formErrors: this.state.formErrors, mentionable, hoist, onNameChanged: null, onMentionableChanged: null, onHoistChanged: null, locked: null, autoFocusInput: null };
    ({ handleNameChanged: obj3.onNameChanged, handleMentionableChanged: obj3.onMentionableChanged, handleHoistChanged: obj3.onHoistChanged } = self);
    obj2.locked = locked;
    obj2.autoFocusInput = newRole;
    let tmp11Result = __initData2(GuildSettingsRoleEditDisplayDefault, obj2);
  } else if (constants.PERMISSIONS === effectiveSection) {
    const obj4 = { guild, role, permissions, onPermissionsChanged: self.handlePermissionsChanged, contentContainerStyle: self.props.contentContainerStyle };
    tmp11Result = __initData2(GuildSettingsRoleEditPermissionsDefault, obj4);
  } else if (constants.MEMBERS === effectiveSection) {
    const obj = { guild, role, locked: null, contentContainerStyle: null };
    let tmp15 = locked;
    if (!locked) {
      tmp15 = tmp5;
    }
    obj.locked = tmp15;
    obj.contentContainerStyle = self.props.contentContainerStyle;
    tmp11Result = __initData2(GuildSettingsRoleMembersDefault, obj);
  } else if (constants.VERIFICATIONS === effectiveSection) {
    const obj5 = { guild, role, locked, integrations };
    tmp11Result = __initData2(GuildSettingsRoleEditConnectionsControlsDefault, obj5);
  }
  const obj6 = { style: tmp.container, children: null };
  if (tmp2) {
    const obj7 = { spacing: nativeDefault.space.PX_24, style: null, children: null };
    const obj8 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
    obj7.style = obj8;
    obj7.children = tmp11Result;
    let tmp22Result = __initData2(Stack_Stack.Stack, obj7);
  } else {
    const obj9 = { contentContainerStyle: tmp.form, children: null };
    const obj17 = { spacing: nativeDefault.space.PX_24, children: null };
    let result = null;
    if (effectiveSection === constants.DISPLAY) {
      result = null;
      if (role.managed) {
        result = self.renderManagedRoleWarningText();
      }
    }
    const items = [result, tmp11Result, , ];
    let result1 = null;
    if (effectiveSection === constants.DISPLAY) {
      result1 = self.renderSubScreenButtons();
    }
    items[2] = result1;
    let renderDeleteButtonResult = null;
    if (effectiveSection === constants.DISPLAY) {
      renderDeleteButtonResult = null;
      if (tmp6) {
        renderDeleteButtonResult = self.renderDeleteButton();
      }
    }
    items[3] = renderDeleteButtonResult;
    obj17.children = items;
    obj9.children = __initData3(Stack_Stack.Stack, obj17);
    tmp22Result = __initData2(Form.Form, obj9);
  }
  obj6.children = tmp22Result;
  return __initData2(View, obj6);
};
GuildSettingsRoleEdit.contextType = fn(4466).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx");

export default function ConnectedGuildSettingsRoleEdit(guildId) {
  guildId = guildId.guildId;
  let role = guildId.role;
  let flag = guildId.newRole;
  if (flag === undefined) {
    flag = false;
  }
  const section = guildId.section;
  const navigation = guildId(section[42]).useNavigation();
  let obj = guildId(section[42]);
  const tmp = guildId;
  const tmp2 = section;
  const items = [GuildStore, GuildRoleStore, AuthenticationStore, GuildSettingsStore, GuildSettingsRolesStore];
  const stateFromStoresObject = guildId(section[43]).useStateFromStoresObject(items, () => {
    const guild = GuildStore.getGuild(guildId);
    role = GuildRoleStore.getRole(guildId, role.id);
    let role1 = GuildSettingsRolesStore.getRole(role.id);
    const id = AuthenticationStore.getId();
    if (null != guild) {
      const highestRole = PermissionUtilsAll.getHighestRole(guild, id);
    }
    let tmp10 = null != guild;
    if (tmp10) {
      const obj2 = PermissionUtilsAll;
      tmp10 = !obj2.isRoleHigher(guild, id, highestRole, tmp2);
    }
    const integrations = GuildSettingsStore.getProps().integrations;
    const obj3 = { guild, role: null, newRole: null, locked: null, integrations: null, section: null, storeHasChanges: null };
    if (role1 == null) {
      role1 = role;
    }
    if (role1 == null) {
      role1 = tmp2;
    }
    obj3.role = role1;
    obj3.newRole = flag;
    obj3.locked = tmp10;
    obj3.integrations = integrations;
    obj3.section = section;
    const editedRoleIdsForConfigurations = GuildSettingsRolesStore.editedRoleIdsForConfigurations;
    obj3.storeHasChanges = editedRoleIdsForConfigurations.has(role.id);
    return obj3;
  });
  let guild = stateFromStoresObject.guild;
  const tmp5 = _objectWithoutProperties(stateFromStoresObject, closure_4);
  const items1 = [section];
  const effect = noop.useEffect(() => {
    if (section === constants.DISPLAY) {
      GuildSettingsRolesActionCreators.init();
    }
  }, items1);
  const items2 = [guildId, ];
  let id;
  if (role != null) {
    id = role.id;
  }
  items2[1] = id;
  const effect1 = noop.useEffect(() => {
    let id;
    if (role != null) {
      id = role.id;
    }
    if (null != id) {
      const roleConnectionsConfiguration = ConnectionsRoleActionCreators.fetchRoleConnectionsConfiguration(guildId, role.id);
    }
  }, items2);
  let tmp10 = null;
  if (null != guild) {
    let obj3 = { children: null };
    const obj4 = {};
    const merged = Object.assign(tmp5);
    obj4.guild = guild;
    obj4.navigation = navigation;
    obj4.contentContainerStyle = guildId.contentContainerStyle;
    const items3 = [closure_22(GuildSettingsRoleEdit, obj4), closure_22(tmp(tmp2[45]).NavScrim, {})];
    obj3.children = items3;
    tmp10 = closure_23(closure_24, obj3);
  }
  return tmp10;
};