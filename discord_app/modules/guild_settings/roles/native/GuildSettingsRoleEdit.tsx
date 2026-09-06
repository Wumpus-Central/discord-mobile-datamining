// === Module 17623: GuildSettingsRoleEdit ===

// Module 17623 (GuildSettingsRoleEdit)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import _modDef5597 from "module_5597" /* 5597 */;
import TableRow from "TableRow" /* 5605 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import _modDef9566 from "module_9566" /* 9566 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9738 */;
import ConnectionsRoleActionCreators from "ConnectionsRoleActionCreators" /* 11573 */;
import GuildSettingsRolesUtils from "GuildSettingsRolesUtils" /* 17614 */;
import GuildSettingsRolesActionCreators from "GuildSettingsRolesActionCreators" /* 17624 */;
import GuildSettingsRoleEditDisplayDefault from "GuildSettingsRoleEditDisplay" /* 17625 */;
import GuildSettingsRoleEditPermissionsDefault from "GuildSettingsRoleEditPermissions" /* 17632 */;
import GuildSettingsRoleMembersDefault from "GuildSettingsRoleMembers" /* 17634 */;
import GuildSettingsRoleEditConnectionsControlsDefault from "GuildSettingsRoleEditConnectionsControls" /* 17635 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;
import GuildSettingsRolesStore from "GuildSettingsRolesStore" /* 17610 */;

require = fn;
let closure_4 = ["guild"];
const View = fn(17).View;
const isEveryoneRole = fn(2016).isEveryoneRole;
const RoleColorsStyle = fn(17610).RoleColorsStyle;
const constants = fn(17605).GuildSettingsRoleEditSections;
const Constants = fn(1074);
({ AnalyticEvents: closure_18, DEFAULT_ROLE_COLOR: closure_19, GuildSettingsSections: closure_20 } = Constants);
const HOLOGRAPHIC_ROLE_COLORS = fn(17612).HOLOGRAPHIC_ROLE_COLORS;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, paddingTop: 16 }, innerContainer: null, managedRolesWarningContainer: null, form: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.innerContainer = createStyles;
createStyles.managedRolesWarningContainer = { marginVertical: 8, marginHorizontal: 16 };
createStyles.form = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_25 = createStyles.createLegacyClassComponentStyles(createStyles);
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
      let obj = AppAnalyticsUtils;
      const result = obj.collectGuildAnalyticsMetadata(applyArgumentsResult.props.guild.id);
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
      obj = { tab_opened: sectionAnalyticsName, is_everyone: null, role_id: null, role_mentionable: null, role_hoist: null, role_permissions: null, role_num_members: null };
      const obj4 = AnalyticsUtilsDefault;
      obj.is_everyone = ChannelPermissionsUtils.isEveryoneRoleId(applyArgumentsResult.props.guild.id, id);
      obj.role_id = id;
      obj.role_mentionable = mentionable;
      obj.role_hoist = hoist;
      obj.role_permissions = permissions.toString();
      obj.role_num_members = sizeResult;
      const merged = Object.assign(result);
      obj4.track(constants2.ROLE_PAGE_VIEWED, obj);
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
        let obj = closure_0;
        const navigation = closure_0.props.navigation;
        const id = closure_0.props.role.id;
        ({ name, permissions, mentionable, hoist } = closure_0.props.role);
        const effectiveSection = closure_0.getEffectiveSection();
        if (effectiveSection === constants2.PERMISSIONS) {
          obj = { permissions };
        } else if (effectiveSection === tmp2.DISPLAY) {
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
            obj = { primary_color, secondary_color: null, tertiary_color: null };
            tmp7 = obj;
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
          const obj1 = { name, color: primary_color1, colors: tmp7, hoist, mentionable };
        }
        let hasRoleConfigurationChanges = effectiveSection === tmp2.VERIFICATIONS;
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
          let obj = applyArgumentsResult(17624);
          obj.commitSectionChanges(id, effectiveSection);
          navigation.pop();
          closure_2_0.setState({ submitting: false, formErrors: {} });
          obj = { key: "ROLE_EDIT_SAVED", content: null, icon: null };
          const intl = applyArgumentsResult(1114).intl;
          obj.content = intl.string(applyArgumentsResult(1114).t.ulZn1j);
          obj.icon = _modDef9566;
          ToastActionCreatorsDefault.open(obj);
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
          const intl = applyArgumentsResult(1114).intl;
          obj.content = intl.string(applyArgumentsResult(1114).t.fEptJP);
          obj.icon = _modDef5597;
          ToastActionCreatorsDefault.open(obj);
          closure_0(false);
        }
        obj.setState({ submitting: true, formErrors: {} }, () => {
          if (null != obj1) {
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
          }, (arg0) => {
            failure(arg0);
          });
        });
      });
    };
    applyArgumentsResult.handleDeleteRole = function handleDeleteRole() {
      const props = applyArgumentsResult.props;
      ({ guild: closure_1, role } = props);
      const navigation = props.navigation;
      let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
      const intl = util.intl;
      obj = { name: role.name };
      obj.title = intl.formatToPlainString(util.t.FiMFTZ, obj);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.qALKny);
      const intl3 = util.intl;
      obj.cancelText = intl3.string(util.t["ETE/oC"]);
      const intl4 = util.intl;
      obj.confirmText = intl4.string(util.t.N86XcP);
      closure_0 = asyncGeneratorStep(async (arg0, value) => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
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
                obj = { value, done: true };
                return obj;
              } else {
                const tags = role.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                if (null === guild_connections) {
                  v1 = 1;
                  c2 = 1;
                  let obj1 = { value: tmp4(11573).putRoleConnectionsConfigurations(id.id, role.id, []), done: false };
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            }
            obj1 = v1(5520);
            obj1.deleteRole(closure_128_1.id, closure_128_2.id);
            closure_128_3.pop();
            c2 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp18) {
            c2 = tmp;
            throw tmp18;
          }
        }
      });
      obj.onConfirm = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.confirmColor = native.ButtonColors.RED;
      obj.show(obj);
    };
    applyArgumentsResult.handleBack = function handleBack() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      if (props.section !== constants.DISPLAY) {
        obj.trackTabChanged(tmp.DISPLAY);
      }
      if (applyArgumentsResult.getSectionChanges()) {
        let resolved = new Promise((arg0) => {
          closure_0 = arg0;
          closure_1_1(4904);
          let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, confirmColor: null };
          const intl = closure_1_0(1114).intl;
          obj.title = intl.string(closure_1_0(1114).t.P3yCXJ);
          const intl2 = closure_1_0(1114).intl;
          obj.body = intl2.string(closure_1_0(1114).t.BU8QoR);
          const intl3 = closure_1_0(1114).intl;
          obj.cancelText = intl3.string(closure_1_0(1114).t["lHKZ1/"]);
          const intl4 = closure_1_0(1114).intl;
          obj.confirmText = intl4.string(closure_1_0(1114).t.p89ACt);
          obj.onConfirm = function onConfirm() {
            closure_2_0.handleSaveRole().then((result) => closure_1_0(result));
          };
          obj.onCancel = function onCancel() {
            const id = closure_2_0.props.role.id;
            const effectiveSection = closure_2_0.getEffectiveSection();
            if (effectiveSection === constants.VERIFICATIONS) {
              const result = applyArgumentsResult(17624).discardConnectionsChanges(id);
              const obj2 = applyArgumentsResult(17624);
            } else {
              const result1 = applyArgumentsResult(17624).discardSectionChanges(id, effectiveSection);
              const obj = applyArgumentsResult(17624);
            }
            closure_0(true);
          };
          obj.confirmColor = closure_1_0(1178).ButtonColors.BRAND;
          obj.show(obj);
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
  setOptionsResult.headerLeft = role(5624).getHeaderConditionalBackButton(self.handleBack);
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
  let obj = { hasIcons: false, children: null };
  obj = { label: null, onPress: null, arrow: true };
  const intl = self(1114).intl;
  obj.label = intl.string(self(1114).t.WIDE1L);
  obj.onPress = function onPress() {
    return self.onSubScreenValueChange(constants.PERMISSIONS);
  };
  const items = [closure_22(self(5605).TableRow, obj), , ];
  obj = { label: null, onPress: null, arrow: true };
  const intl2 = self(1114).intl;
  obj.label = intl2.string(self(1114).t["5//Muu"]);
  obj.onPress = function onPress() {
    return self.onSubScreenValueChange(constants.VERIFICATIONS);
  };
  items[1] = closure_22(self(5605).TableRow, obj);
  const obj1 = { label: null, onPress: null, arrow: true };
  const intl3 = self(1114).intl;
  obj1.label = intl3.string(self(1114).t.J4ZtH1);
  obj1.onPress = function onPress() {
    return self.onSubScreenValueChange(constants.MEMBERS);
  };
  items[2] = closure_22(self(5605).TableRow, obj1);
  obj.children = items;
  return closure_23(self(5687).TableRowGroup, obj);
};
prototype["renderDeleteButton"] = function renderDeleteButton() {
  let obj = { hasIcons: false, children: null };
  obj = { variant: "danger", label: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.c9ej8n);
  obj.onPress = this.handleDeleteRole;
  obj.children = __initData2(TableRow.TableRow, obj);
  return __initData2(TableRowGroup.TableRowGroup, obj);
};
prototype["renderManagedRoleWarningText"] = function renderManagedRoleWarningText() {
  let obj = { style: closure_25(this.context).managedRolesWarningContainer, children: null };
  obj = { messageType: native.HelpMessageTypes.WARNING, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.k5d7DJ);
  obj.children = __initData2(native.HelpMessage, obj);
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
    let obj = { guild, role, name, formErrors: this.state.formErrors, mentionable, hoist, onNameChanged: null, onMentionableChanged: null, onHoistChanged: null, locked: null, autoFocusInput: null };
    ({ handleNameChanged: obj3.onNameChanged, handleMentionableChanged: obj3.onMentionableChanged, handleHoistChanged: obj3.onHoistChanged } = self);
    obj.locked = locked;
    obj.autoFocusInput = newRole;
    let tmp11Result = __initData2(GuildSettingsRoleEditDisplayDefault, obj);
  } else if (tmp9.PERMISSIONS === effectiveSection) {
    obj = { guild, role, permissions, onPermissionsChanged: self.handlePermissionsChanged, contentContainerStyle: self.props.contentContainerStyle };
    tmp11Result = __initData2(GuildSettingsRoleEditPermissionsDefault, obj);
  } else if (tmp9.MEMBERS === effectiveSection) {
    obj = { guild, role, locked: null, contentContainerStyle: null };
    let tmp15 = locked;
    if (!locked) {
      tmp15 = tmp5;
    }
    obj.locked = tmp15;
    obj.contentContainerStyle = self.props.contentContainerStyle;
    tmp11Result = __initData2(GuildSettingsRoleMembersDefault, obj);
  } else if (tmp9.VERIFICATIONS === effectiveSection) {
    const obj1 = { guild, role, locked, integrations };
    tmp11Result = __initData2(GuildSettingsRoleEditConnectionsControlsDefault, obj1);
  }
  const obj2 = { style: tmp.container, children: null };
  if (tmp2) {
    const obj3 = { spacing: nativeDefault.space.PX_24, style: null, children: null };
    const obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
    obj3.style = obj4;
    obj3.children = tmp11Result;
    let tmp22Result = tmp22(tmp24(4973).Stack, obj3);
  } else {
    const obj5 = { contentContainerStyle: tmp.form, children: null };
    const obj6 = { spacing: nativeDefault.space.PX_24, children: null };
    let result = null;
    if (effectiveSection === tmp9.DISPLAY) {
      result = null;
      if (role.managed) {
        result = self.renderManagedRoleWarningText();
      }
    }
    const items = [result, tmp11Result, , ];
    let result1 = null;
    if (effectiveSection === tmp9.DISPLAY) {
      result1 = self.renderSubScreenButtons();
    }
    items[2] = result1;
    let renderDeleteButtonResult = null;
    if (effectiveSection === tmp9.DISPLAY) {
      renderDeleteButtonResult = null;
      if (tmp6) {
        renderDeleteButtonResult = self.renderDeleteButton();
      }
    }
    items[3] = renderDeleteButtonResult;
    obj6.children = items;
    obj5.children = __initData3(tmp24(4973).Stack, obj6);
    tmp22Result = tmp22(tmp24(8593).Form, obj5);
  }
  obj2.children = tmp22Result;
  return __initData2(View, obj2);
};
GuildSettingsRoleEdit.contextType = fn(4271).ThemeContext;
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
  let obj = guildId(section[42]);
  const navigation = obj.useNavigation();
  const items = [GuildStore, GuildRoleStore, AuthenticationStore, GuildSettingsStore, GuildSettingsRolesStore];
  const stateFromStoresObject = guildId(section[43]).useStateFromStoresObject(items, () => {
    const guild = GuildStore.getGuild(guildId);
    role = GuildRoleStore.getRole(guildId, role.id);
    let role1 = GuildSettingsRolesStore.getRole(role.id);
    const id = AuthenticationStore.getId();
    if (null != guild) {
      let obj = PermissionUtilsAll;
      const highestRole = obj.getHighestRole(guild, id);
    }
    let tmp10 = null != guild;
    if (tmp10) {
      const obj2 = PermissionUtilsAll;
      tmp10 = !obj2.isRoleHigher(guild, id, highestRole, tmp2);
    }
    const integrations = GuildSettingsStore.getProps().integrations;
    obj = { guild, role: null, newRole: null, locked: null, integrations: null, section: null, storeHasChanges: null };
    if (role1 == null) {
      role1 = role;
    }
    if (role1 == null) {
      role1 = tmp2;
    }
    obj.role = role1;
    obj.newRole = flag;
    obj.locked = tmp10;
    obj.integrations = integrations;
    obj.section = section;
    const editedRoleIdsForConfigurations = GuildSettingsRolesStore.editedRoleIdsForConfigurations;
    obj.storeHasChanges = editedRoleIdsForConfigurations.has(role.id);
    return obj;
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
      id = tmp.id;
    }
    if (null != id) {
      const roleConnectionsConfiguration = ConnectionsRoleActionCreators.fetchRoleConnectionsConfiguration(guildId, tmp.id);
    }
  }, items2);
  let tmp10 = null;
  if (null != guild) {
    obj = { children: null };
    obj = {};
    const merged = Object.assign(tmp5);
    obj.guild = guild;
    obj.navigation = navigation;
    obj.contentContainerStyle = guildId.contentContainerStyle;
    const items3 = [closure_22(GuildSettingsRoleEdit, obj), closure_22(guildId(section[45]).NavScrim, {})];
    obj.children = items3;
    tmp10 = closure_23(closure_24, obj);
  }
  return tmp10;
};