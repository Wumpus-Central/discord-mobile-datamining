// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import GuildRoleRecord from "../../../../records/GuildRoleRecord.tsx";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04805_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/04807_AssetRegistry.js";
import AppAnalyticsUtils from "../../../app_analytics/AppAnalyticsUtils.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import TableRow4 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader2 from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import HeaderActionButton2 from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import Form2 from "../../../../design/void/Form/native/index.tsx";
import ChannelPermissionsUtils from "../../../channel_permissions/ChannelPermissionsUtils.tsx";
import ConnectionsRoleActionCreators from "../../../connections/ConnectionsRoleActionCreators.tsx";
import GuildSettingsConstants from "../../GuildSettingsConstants.tsx";
import GuildSettingsRolesStore2 from "../GuildSettingsRolesStore.tsx";
import EnhancedRoleColorConstants from "../../../premium/powerups/constants/EnhancedRoleColorConstants.tsx";
import GuildSettingsRolesUtils from "../GuildSettingsRolesUtils.tsx";
import GuildSettingsRolesActionCreators from "../GuildSettingsRolesActionCreators.tsx";
import GuildSettingsRoleEditDisplayDefault from "GuildSettingsRoleEditDisplay.tsx";
import GuildSettingsRoleEditPermissionsDefault from "GuildSettingsRoleEditPermissions.tsx";
import GuildSettingsRoleMembersDefault from "GuildSettingsRoleMembers.tsx";
import GuildSettingsRoleEditConnectionsControlsDefault from "GuildSettingsRoleEditConnectionsControls.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GuildSettingsRolesStore = GuildSettingsRolesStore2;
let c2, dependencyMap, guildId, integrations, navigation, primary_color, roles;

let closure_19;
let closure_20;
let closure_21;
let closure_23;
let closure_24;
let closure_25;
let obj2;
let obj3;
let closure_4 = ["guild"];
let closure_5 = ["guild"];
const View = react_native.View;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
const RoleColorsStyle = GuildSettingsRolesStore2.RoleColorsStyle;
const authStore4 = GuildSettingsConstants.GuildSettingsRoleEditSections;
({ AnalyticEvents: closure_19, DEFAULT_ROLE_COLOR: closure_20, GuildSettingsSections: closure_21 } = Constants);
const HOLOGRAPHIC_ROLE_COLORS = EnhancedRoleColorConstants.HOLOGRAPHIC_ROLE_COLORS;
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let obj = {
  container: { flex: 1, paddingTop: 16 },
  innerContainer: obj2,
  managedRolesWarningContainer: { marginVertical: 8, marginHorizontal: 16 },
  form: obj3,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const prioritySpeakerDucking = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildSettingsRoleEdit extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { submitting: false, formErrors: {} };
    applyArgumentsResult.onSubScreenValueChange = function onSubScreenValueChange(MEMBERS) {
      navigation = require.props.navigation;
      const push = navigation.push;
      const ROLE_EDIT_REFRESH = constants2.ROLE_EDIT_REFRESH;
      const obj = { section: MEMBERS };
      const merged = Object.assign(require.props);
      push(ROLE_EDIT_REFRESH, obj);
    };
    applyArgumentsResult.trackTabChanged = function trackTabChanged(DISPLAY) {
      let hoist;
      let mentionable;
      let obj5;
      let permissions;
      const obj = AppAnalyticsUtils;
      const result = obj.collectGuildAnalyticsMetadata(require.props.guild.id);
      const role = require.props.role;
      const id = role.id;
      ({ permissions, mentionable, hoist } = role);
      const obj2 = GuildSettingsRolesUtils;
      const sectionAnalyticsName = obj2.getSectionAnalyticsName(DISPLAY);
      const members = GuildMemberStore.getMembers(require.props.guild.id);
      const arr = _modDef12(members);
      const found = arr.filter((roles) => {
        roles = roles.roles;
        return roles.includes(id);
      });
      const sizeResult = found.size();
      const obj3 = {
        tab_opened: sectionAnalyticsName,
        is_everyone: obj5.isEveryoneRoleId(require.props.guild.id, id),
        role_id: id,
        role_mentionable: mentionable,
        role_hoist: hoist,
        role_permissions: permissions.toString(),
        role_num_members: sizeResult,
      };
      const track = AnalyticsUtilsDefault.track;
      const ROLE_PAGE_VIEWED = constants.ROLE_PAGE_VIEWED;
      AnalyticsUtilsDefault;
      obj5 = ChannelPermissionsUtils;
      const merged = Object.assign(result);
      track(ROLE_PAGE_VIEWED, obj3);
    };
    applyArgumentsResult.handleNameChanged = function handleNameChanged(name) {
      const obj = {};
      const merged = Object.assign(require.state.formErrors);
      delete obj["name"];
      require.setState({ formErrors: obj });
      const obj2 = GuildSettingsRolesActionCreators;
      obj2.updateRoleName(require.props.role.id, name);
    };
    applyArgumentsResult.handleMentionableChanged = function handleMentionableChanged(mentionable) {
      const obj = GuildSettingsRolesActionCreators;
      obj.toggleRoleSettings(require.props.role.id, require.props.role.hoist, mentionable);
    };
    applyArgumentsResult.handleHoistChanged = function handleHoistChanged(hoist) {
      const obj = GuildSettingsRolesActionCreators;
      obj.toggleRoleSettings(require.props.role.id, hoist, require.props.role.mentionable);
    };
    applyArgumentsResult.handlePermissionsChanged = function handlePermissionsChanged(permissions) {
      const obj = GuildSettingsRolesActionCreators;
      const result = obj.updateRolePermissionSet(require.props.role.id, permissions);
    };
    applyArgumentsResult.handleSaveRole = function handleSaveRole() {
      const promise = new Promise((arg0) => {
        let hoist;
        let icon;
        let mentionable;
        let name;
        let permissions;
        let unicodeEmoji;
        let closure_0 = arg0;
        let obj = closure_0;
        navigation = closure_0.props.navigation;
        const id = closure_0.props.role.id;
        ({ name, permissions, mentionable, hoist, icon, unicodeEmoji } = closure_0.props.role);
        const effectiveSection = closure_0.getEffectiveSection();
        if (effectiveSection === constants2.PERMISSIONS) {
          let obj2 = { permissions };
          let obj4 = obj2;
        } else if (effectiveSection === constants2.DISPLAY) {
          let primary_color1;
          const roleStyleData = closure_1_16.getRoleStyleData(id);
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
            primary_color = closure_1_20;
          }
          let tmp7;
          if (roleStyleData != null) {
            const styleColors2 = roleStyleData.styleColors;
            if (styleColors2 != null) {
              tmp7 = styleColors2[currentStyle];
            }
          }
          if (currentStyle === constants.SOLID) {
            tmp7 = { primary_color, secondary_color: null, tertiary_color: null };
            primary_color1 = primary_color;
            const obj3 = { primary_color, secondary_color: null, tertiary_color: null };
          } else if (currentStyle === tmp8.HOLOGRAPHIC) {
            primary_color1 = primary_color.primary_color;
            tmp7 = primary_color;
          } else {
            primary_color1 = undefined;
            if (tmp7 != null) {
              primary_color1 = tmp7.primary_color;
            }
            if (primary_color1 == null) {
              primary_color1 = closure_1_20;
            }
          }
          obj4 = { name, color: primary_color1, colors: tmp7, hoist, mentionable, icon, unicodeEmoji };
        }
        let hasRoleConfigurationChanges =
          effectiveSection === constants2.VERIFICATIONS && closure_1_16.hasRoleConfigurationChanges;
        if (hasRoleConfigurationChanges) {
          const editedRoleIdsForConfigurations = closure_1_16.editedRoleIdsForConfigurations;
          hasRoleConfigurationChanges = editedRoleIdsForConfigurations.has(id);
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleConnectionConfigurationsMap = closure_1_16.getEditedRoleConnectionConfigurationsMap();
          let closure_2 = editedRoleConnectionConfigurationsMap.get(id);
        }
        function success() {
          let intl;
          const obj = GuildSettingsRolesActionCreators;
          obj.commitSectionChanges(id, effectiveSection);
          navigation.pop();
          closure_2_0.setState({ submitting: false, formErrors: {} });
          const obj2 = { key: "ROLE_EDIT_SAVED", content: intl.string(intl5.t.ulZn1j), icon: AssetRegistryDefault };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
          closure_0(true);
        }
        function failure(body) {
          let intl;
          body = undefined;
          const setState = closure_2_0.setState;
          if (body != null) {
            body = body.body;
          }
          if (body == null) {
            body = {};
          }
          setState({ submitting: false, formErrors: body });
          const obj = {
            key: "ERROR_OCCURRED_TRY_AGAIN",
            content: intl.string(intl5.t.fEptJP),
            icon: AssetRegistryDefault2,
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj);
          closure_0(false);
        }
        obj.setState({ submitting: true, formErrors: {} }, () => {
          let updateRoleResult;
          if (null != obj4) {
            let obj = GuildActionCreatorsDefault;
            updateRoleResult = obj.updateRole(id, id, tmp);
          } else {
            updateRoleResult = Promise.resolve();
          }
          updateRoleResult.then(
            () => {
              if (null != closure_1_2) {
                const obj = closure_3_0(closure_3_3[31]);
                const result = obj.putRoleConnectionsConfigurations(closure_1_4, closure_1_5, tmp);
                result.then(success, failure);
              } else {
                success();
              }
            },
            (body) => {
              failure(body);
            },
          );
        });
      });
      return promise;
    };
    applyArgumentsResult.handleDeleteRole = function handleDeleteRole() {
      let closure_129_1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      let role;
      const props = require.props;
      ({ guild: closure_129_1, role } = props);
      navigation = props.navigation;
      let obj = {
        title: intl.formatToPlainString(intl5.t.FiMFTZ, obj2),
        body: intl2.string(intl5.t.qALKny),
        cancelText: intl3.string(intl5.t["ETE/oC"]),
        confirmText: intl4.string(intl5.t.N86XcP),
        onConfirm: function () {
          return closure_0(...arguments);
        },
        hideActionSheet: false,
        confirmColor: native.ButtonColors.RED,
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl = intl5.intl;
      obj2 = { name: role.name };
      intl2 = intl5.intl;
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      let closure_0 = _asyncToGenerator(async () => {
        let obj3;
        let v1;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "IconComponent", done: null };
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
                  const obj6 = { value: obj3.putRoleConnectionsConfigurations(id.id, role.id, []), done: false };
                  obj3 = tmp3(navigation[31]);
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
            const obj2 = v1(navigation[30]);
            obj2.deleteRole(closure_128_1.id, closure_128_2.id);
            closure_128_3.pop();
            c2 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp17) {
            c2 = 3;
            throw tmp17;
          }
        }
      });
      show(obj);
    };
    applyArgumentsResult.handleBack = function handleBack() {
      let resolved;
      const props = require.props;
      navigation = props.navigation;
      if (props.section !== constants.DISPLAY) {
        require.trackTabChanged(tmp.DISPLAY);
      }
      if (require.getSectionChanges()) {
        const self = this;
        const self2 = this;
        resolved = new Promise((arg0) => {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let closure_0 = arg0;
          let obj = {
            title: intl.string(closure_1_0(closure_1_3[20]).t.P3yCXJ),
            body: intl2.string(closure_1_0(closure_1_3[20]).t.BU8QoR),
            cancelText: intl3.string(closure_1_0(closure_1_3[20]).t["lHKZ1/"]),
            confirmText: intl4.string(closure_1_0(closure_1_3[20]).t.p89ACt),
            onConfirm() {
              const handleSaveRoleResult = closure_2_0.handleSaveRole();
              handleSaveRoleResult.then((result) => closure_1_0(result));
            },
            onCancel() {
              const id = closure_2_0.props.role.id;
              const effectiveSection = closure_2_0.getEffectiveSection();
              if (effectiveSection === constants.VERIFICATIONS) {
                const obj2 = GuildSettingsRolesActionCreators;
                const result = obj2.discardConnectionsChanges(id);
              } else {
                const obj = GuildSettingsRolesActionCreators;
                const result1 = obj.discardSectionChanges(id, effectiveSection);
              }
              closure_0(true);
            },
            hideActionSheet: false,
            confirmColor: closure_1_0(closure_1_3[33]).ButtonColors.BRAND,
            isDismissable: false,
          };
          const show = closure_1_1(closure_1_3[32]).show;
          closure_1_1(closure_1_3[32]);
          intl = closure_1_0(closure_1_3[20]).intl;
          intl2 = closure_1_0(closure_1_3[20]).intl;
          intl3 = closure_1_0(closure_1_3[20]).intl;
          intl4 = closure_1_0(closure_1_3[20]).intl;
          show(obj);
        });
      } else {
        navigation.pop();
        resolved = Promise.resolve(false);
      }
      return resolved;
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.trackTabChanged(this.props.section);
    this.updateNavigation(undefined, this.state);
  }
  componentDidUpdate(arg0, arg1) {
    this.updateNavigation(arg0, arg1);
  }
  getEffectiveSection() {
    const props = this.props;
    let PERMISSIONS = props.section;
    if (isEveryoneRole(props.role)) {
      PERMISSIONS = constants.PERMISSIONS;
    }
    return PERMISSIONS;
  }
  getSectionChanges() {
    return GuildSettingsRolesStore.hasSectionChanges(this.props.role.id, this.getEffectiveSection());
  }
  updateNavigation(role, submitting) {
    let fn;
    let obj2;
    const self = this;
    const props = this.props;
    role = props.role;
    navigation = props.navigation;
    submitting = this.state.submitting;
    let obj = {
      headerLeft: obj2.getHeaderConditionalBackButton(self.handleBack),
      headerRight: fn,
      headerTitle() {
        let intl;
        const obj = { title: role.name, subtitle: intl.string(intl5.t.XPGZXP) };
        const NavigatorHeader = NavigatorHeader2.NavigatorHeader;
        intl = intl5.intl;
        return closure_23(NavigatorHeader, obj);
      },
    };
    const sectionChanges = self.getSectionChanges();
    const setOptions = navigation.setOptions;
    obj2 = role(6010);
    if (submitting) {
      fn = () => closure_1_23(role(dependencyMap[18]).HeaderSubmittingIndicator, {});
    } else if (sectionChanges) {
      fn = () => {
        let intl;
        const obj = { onPress: self.handleSaveRole, text: intl.string(intl5.t["R3BPH+"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl5.intl;
        return closure_23(HeaderActionButton, obj);
      };
    }
    setOptions(obj);
  }
  renderSubScreenButtons() {
    let intl;
    let intl2;
    let intl3;
    let items;
    const self = this;
    const obj = { hasIcons: false, children: items };
    const TableRowGroup = self(6074).TableRowGroup;
    const obj2 = {
      label: intl.string(self(1126).t.WIDE1L),
      onPress() {
        return self.onSubScreenValueChange(constants.PERMISSIONS);
      },
      arrow: true,
    };
    const TableRow = self(5993).TableRow;
    intl = self(1126).intl;
    items = [closure_23(TableRow, obj2), ,];
    const obj3 = {
      label: intl2.string(self(1126).t["5//Muu"]),
      onPress() {
        return self.onSubScreenValueChange(constants.VERIFICATIONS);
      },
      arrow: true,
    };
    const TableRow2 = self(5993).TableRow;
    intl2 = self(1126).intl;
    items[1] = closure_23(TableRow2, obj3);
    const obj4 = {
      label: intl3.string(self(1126).t.J4ZtH1),
      onPress() {
        return self.onSubScreenValueChange(constants.MEMBERS);
      },
      arrow: true,
    };
    const TableRow3 = self(5993).TableRow;
    intl3 = self(1126).intl;
    items[2] = closure_23(TableRow3, obj4);
    return closure_24(TableRowGroup, obj);
  }
  renderDeleteButton() {
    let TableRow;
    let intl;
    let obj2;
    const obj = { hasIcons: false, children: closure_23(TableRow, obj2) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    obj2 = { variant: "danger", label: intl.string(intl5.t.c9ej8n), onPress: this.handleDeleteRole };
    TableRow = TableRow4.TableRow;
    intl = intl5.intl;
    return closure_23(TableRowGroup, obj);
  }
  renderManagedRoleWarningText() {
    let HelpMessage;
    let intl;
    let obj2;
    const obj = {
      style: closure_26(this.context).managedRolesWarningContainer,
      children: closure_23(HelpMessage, obj2),
    };
    obj2 = { messageType: native.HelpMessageTypes.WARNING, children: intl.string(intl5.t.k5d7DJ) };
    HelpMessage = native.HelpMessage;
    intl = intl5.intl;
    return closure_23(View, obj);
  }
  render() {
    let Stack;
    let guild;
    let hoist;
    let items;
    let locked;
    let mentionable;
    let name;
    let newRole;
    let obj17;
    let obj8;
    let permissions;
    let role;
    let tmp11Result;
    let tmp15;
    let tmp22Result;
    const self = this;
    const tmp = closure_26(this.context);
    const props = this.props;
    ({ guild, role, locked } = props);
    ({ newRole, integrations } = props);
    ({ name, permissions, mentionable, hoist } = role);
    const formErrors = this.state.formErrors;
    const tmp2 = isEveryoneRole(role);
    const tags = role.tags;
    let guild_connections;
    if (tags != null) {
      guild_connections = tags.guild_connections;
    }
    let tmp6 = !(tmp2 || locked);
    if (tmp6) {
      const managed = role.managed;
      let tmp7 = !managed;
      if (managed) {
        tmp7 = tmp5;
      }
      tmp6 = tmp7;
    }
    const managed2 = role.managed;
    const effectiveSection = self.getEffectiveSection();
    if (constants.DISPLAY === effectiveSection) {
      const obj2 = {
        guild,
        role,
        name,
        formErrors,
        mentionable,
        hoist,
        onNameChanged: null,
        onMentionableChanged: null,
        onHoistChanged: null,
        locked,
        autoFocusInput: newRole,
      };
      ({
        handleNameChanged: obj3.onNameChanged,
        handleMentionableChanged: obj3.onMentionableChanged,
        handleHoistChanged: obj3.onHoistChanged,
      } = self);
      tmp11Result = closure_23(GuildSettingsRoleEditDisplayDefault, obj2);
    } else if (constants.PERMISSIONS === effectiveSection) {
      const obj4 = {
        guild,
        role,
        permissions,
        onPermissionsChanged: self.handlePermissionsChanged,
        contentContainerStyle: self.props.contentContainerStyle,
      };
      tmp11Result = closure_23(GuildSettingsRoleEditPermissionsDefault, obj4);
    } else if (constants.MEMBERS === effectiveSection) {
      const obj = { guild, role, locked: tmp15, contentContainerStyle: self.props.contentContainerStyle };
      tmp15 = locked;
      const tmp14 = GuildSettingsRoleMembersDefault;
      if (!locked) {
        tmp15 = tmp5;
      }
      tmp11Result = closure_23(tmp14, obj);
    } else if (constants.VERIFICATIONS === effectiveSection) {
      const obj5 = { guild, role, locked, integrations };
      tmp11Result = closure_23(GuildSettingsRoleEditConnectionsControlsDefault, obj5);
    }
    const obj6 = { style: tmp.container, children: tmp22Result };
    if (tmp2) {
      const obj7 = { spacing: nativeDefault.space.PX_24, style: obj8, children: tmp11Result };
      const Stack2 = Stack_Stack.Stack;
      obj8 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
      tmp22Result = closure_23(Stack2, obj7);
    } else {
      const obj9 = { contentContainerStyle: tmp.form, children: closure_24(Stack, obj17) };
      const Form = Form2.Form;
      obj17 = { spacing: nativeDefault.space.PX_24, children: items };
      Stack = Stack_Stack.Stack;
      let result = null;
      if (effectiveSection === constants.DISPLAY) {
        result = null;
        if (managed2) {
          result = self.renderManagedRoleWarningText();
        }
      }
      items = [result, tmp11Result, ,];
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
      tmp22Result = closure_23(Form, obj9);
    }
    return closure_23(View, obj6);
  }
}
const prototype = GuildSettingsRoleEdit.prototype;
GuildSettingsRoleEdit.contextType = native2.ThemeContext;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let contentContainerStyle;
      let first;
      let items2;
      let newRole;
      let section;
      let tmp22;
      let tmp25;
      const tmp2 = dependencyMap;
      let obj = guildId(576);
      const cResult = obj.c(23);
      guildId = guildId.guildId;
      let role = guildId.role;
      ({ newRole, contentContainerStyle, section } = guildId);
      dependencyMap = tmp4;
      const tmpResult = guildId(1490);
      navigation = tmpResult.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildRoleStore, AuthenticationStore, GuildSettingsStore, GuildSettingsRolesStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === (undefined !== newRole && newRole)) {
          if (cResult[3] === role) {
            let tmp12;
            let tmp15;
            let tmp14;
            let tmp20;
            if (cResult[4] === section) {
              tmp12 = cResult[5];
            }
            const tmpResult2 = guildId(504);
            const stateFromStoresObject = tmpResult2.useStateFromStoresObject(first, tmp12);
            if (cResult[6] !== stateFromStoresObject) {
              let guild = stateFromStoresObject.guild;
              const tmp18 = _objectWithoutProperties(stateFromStoresObject, closure_4);
              cResult[6] = stateFromStoresObject;
              cResult[7] = guild;
              cResult[8] = tmp18;
              tmp15 = tmp18;
              tmp14 = guild;
            } else {
              tmp14 = cResult[7];
              tmp15 = cResult[8];
            }
            if (cResult[9] !== section) {
              class N {
                constructor() {
                  if (section === constants.DISPLAY) {
                    const obj = GuildSettingsRolesActionCreators;
                    obj.init();
                  }
                }
              }
              const items1 = [section];
              cResult[9] = section;
              cResult[10] = N;
              cResult[11] = items1;
              tmp20 = items1;
            } else {
              class N {
                constructor() {
                  if (section === constants.DISPLAY) {
                    const obj = GuildSettingsRolesActionCreators;
                    obj.init();
                  }
                }
              }
              tmp20 = cResult[11];
            }
            const effect = react.useEffect(N, tmp20);
            if (cResult[12] === guildId) {
              class N {
                constructor() {
                  if (section === constants.DISPLAY) {
                    const obj = GuildSettingsRolesActionCreators;
                    obj.init();
                  }
                }
              }
              if (role != null) {
                class N {
                  constructor() {
                    if (section === constants.DISPLAY) {
                      const obj = GuildSettingsRolesActionCreators;
                      obj.init();
                    }
                  }
                }
              }
              if (cResult[15] === guildId) {
                class N {
                  constructor() {
                    if (section === constants.DISPLAY) {
                      const obj = GuildSettingsRolesActionCreators;
                      obj.init();
                    }
                  }
                }
                const effect1 = react.useEffect(tmp22, tmp25);
                if (cResult[18] === contentContainerStyle) {
                  class N {
                    constructor() {
                      if (section === constants.DISPLAY) {
                        const obj = GuildSettingsRolesActionCreators;
                        obj.init();
                      }
                    }
                  }
                }
                let tmp28 = null;
                if (null != tmp14) {
                  class N {
                    constructor() {
                      if (section === constants.DISPLAY) {
                        const obj = GuildSettingsRolesActionCreators;
                        obj.init();
                      }
                    }
                  }
                  let obj2 = { children: items2 };
                  let obj3 = { guild: tmp14, navigation, contentContainerStyle };
                  const merged = Object.assign(tmp15);
                  items2 = [closure_23(GuildSettingsRoleEdit, obj3), closure_23(guildId(6536).NavScrim, {})];
                  tmp28 = closure_24(closure_25, obj2);
                }
                cResult[18] = contentContainerStyle;
                cResult[19] = tmp14;
                cResult[20] = navigation;
                cResult[21] = tmp15;
                cResult[22] = tmp28;
              }
              const items3 = [guildId, undefined];
              cResult[15] = guildId;
              cResult[16] = undefined;
              cResult[17] = items3;
              tmp25 = items3;
            }
            const fn2 = function k() {
              let id;
              if (role != null) {
                id = role.id;
              }
              if (null != id) {
                const obj = ConnectionsRoleActionCreators;
                const roleConnectionsConfiguration = obj.fetchRoleConnectionsConfiguration(guildId, role.id);
              }
            };
            cResult[12] = guildId;
            cResult[13] = role.id;
            cResult[14] = fn2;
            tmp22 = fn2;
          }
        }
      }
      const fn = function c() {
        let editedRoleIdsForConfigurations;
        let highestRole;
        const guild = GuildStore.getGuild(guildId);
        role = GuildRoleStore.getRole(guildId, role.id);
        let role1 = GuildSettingsRolesStore.getRole(role.id);
        const id = AuthenticationStore.getId();
        if (null != guild) {
          const obj = PermissionUtilsAll;
          highestRole = obj.getHighestRole(guild, id);
        }
        let tmp10 = null != guild;
        if (tmp10) {
          const obj2 = PermissionUtilsAll;
          tmp10 = !obj2.isRoleHigher(guild, id, highestRole, tmp2);
        }
        integrations = GuildSettingsStore.getProps().integrations;
        const obj3 = {
          guild,
          role: role1,
          newRole,
          locked: tmp10,
          integrations,
          section,
          storeHasChanges: editedRoleIdsForConfigurations.has(role.id),
        };
        if (role1 == null) {
          role1 = role;
        }
        if (role1 == null) {
          role1 = tmp2;
        }
        editedRoleIdsForConfigurations = GuildSettingsRolesStore.editedRoleIdsForConfigurations;
        return obj3;
      };
      cResult[1] = guildId;
      cResult[2] = undefined !== newRole && newRole;
      cResult[3] = role;
      cResult[4] = section;
      cResult[5] = fn;
      tmp12 = fn;
    }
  : (guildId) => {
      let items3;
      guildId = guildId.guildId;
      let role = guildId.role;
      let flag = guildId.newRole;
      if (flag === undefined) {
        flag = false;
      }
      const section = guildId.section;
      const contentContainerStyle = guildId.contentContainerStyle;
      const tmp2 = section;
      let obj = guildId(section[44]);
      navigation = obj.useNavigation();
      let obj2 = guildId(section[46]);
      const items = [GuildStore, GuildRoleStore, AuthenticationStore, GuildSettingsStore, GuildSettingsRolesStore];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        let editedRoleIdsForConfigurations;
        let highestRole;
        const guild = GuildStore.getGuild(guildId);
        role = GuildRoleStore.getRole(guildId, role.id);
        let role1 = GuildSettingsRolesStore.getRole(role.id);
        const id = AuthenticationStore.getId();
        if (null != guild) {
          const obj = PermissionUtilsAll;
          highestRole = obj.getHighestRole(guild, id);
        }
        let tmp10 = null != guild;
        if (tmp10) {
          const obj2 = PermissionUtilsAll;
          tmp10 = !obj2.isRoleHigher(guild, id, highestRole, tmp2);
        }
        integrations = GuildSettingsStore.getProps().integrations;
        const obj3 = {
          guild,
          role: role1,
          newRole: flag,
          locked: tmp10,
          integrations,
          section,
          storeHasChanges: editedRoleIdsForConfigurations.has(role.id),
        };
        if (role1 == null) {
          role1 = role;
        }
        if (role1 == null) {
          role1 = tmp2;
        }
        editedRoleIdsForConfigurations = GuildSettingsRolesStore.editedRoleIdsForConfigurations;
        return obj3;
      });
      let guild = stateFromStoresObject.guild;
      const tmp5 = _objectWithoutProperties(stateFromStoresObject, closure_5);
      const items1 = [section];
      const effect = react.useEffect(() => {
        if (section === constants.DISPLAY) {
          const obj = GuildSettingsRolesActionCreators;
          obj.init();
        }
      }, items1);
      const items2 = [guildId];
      let id;
      const useEffect = react.useEffect;
      const tmp = guildId;
      if (role != null) {
        id = role.id;
      }
      items2[1] = id;
      const effect1 = useEffect(() => {
        let id;
        if (role != null) {
          id = role.id;
        }
        if (null != id) {
          const obj = ConnectionsRoleActionCreators;
          const roleConnectionsConfiguration = obj.fetchRoleConnectionsConfiguration(guildId, role.id);
        }
      }, items2);
      let tmp10 = null;
      if (null != guild) {
        let obj3 = { children: items3 };
        const obj4 = { guild, navigation, contentContainerStyle };
        const merged = Object.assign(tmp5);
        items3 = [closure_23(GuildSettingsRoleEdit, obj4), closure_23(tmp(tmp2[47]).NavScrim, {})];
        tmp10 = closure_24(closure_25, obj3);
      }
      return tmp10;
    };
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx");

export default tmp6;
