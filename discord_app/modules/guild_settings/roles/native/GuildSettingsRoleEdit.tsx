// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import fetchFingerprint from "fetchFingerprint";
import importAllResult from "HeaderActionButton";
import { View } from "ManaContext";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import closure_10 from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleFormInit from "handleFormInit";
import handleSetSection from "handleSetSection";
import { RoleColorsStyle } from "handleSetSection";
import { GuildSettingsRoleEditSections as closure_17 } from "MAX_SUBCATEGORIES";
import ME from "ME";
import { HOLOGRAPHIC_ROLE_COLORS } from "HOLOGRAPHIC_ROLE_COLORS";
import jsxProd from "collectGuildAnalyticsMetadata";
import createCacheKey from "createCacheKey";

let closure_18;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
let closure_24;
let require = arg1;
let closure_4 = ["guild"];
const error = importAllResult;
({ AnalyticEvents: closure_18, DEFAULT_ROLE_COLOR: closure_19, GuildSettingsSections: closure_20 } = ME);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
createCacheKey = { container: { flex: 1, paddingTop: 16 }, innerContainer: null, managedRolesWarningContainer: null, form: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginVertical: 8, marginHorizontal: 16 };
createCacheKey[3] = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
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
      navigation.push(outer1_20.ROLE_EDIT_REFRESH, obj);
    };
    applyArgumentsResult.trackTabChanged = function trackTabChanged(DISPLAY) {
      let hoist;
      let mentionable;
      let permissions;
      let obj = applyArgumentsResult(outer1_3[21]);
      const result = obj.collectGuildAnalyticsMetadata(id.props.guild.id);
      const role = id.props.role;
      id = role.id;
      ({ permissions, mentionable, hoist } = role);
      const sectionAnalyticsName = applyArgumentsResult(outer1_3[22]).getSectionAnalyticsName(DISPLAY);
      const members = outer1_11.getMembers(id.props.guild.id);
      const obj2 = applyArgumentsResult(outer1_3[22]);
      const found = outer1_1(outer1_3[23])(members).filter((roles) => {
        roles = roles.roles;
        return roles.includes(id);
      });
      const arr = outer1_1(outer1_3[23])(members);
      const sizeResult = found.size();
      obj = { tab_opened: sectionAnalyticsName, is_everyone: null, role_id: null, role_mentionable: null, role_hoist: null, role_permissions: null, role_num_members: null };
      const obj4 = outer1_1(outer1_3[24]);
      obj[1] = applyArgumentsResult(outer1_3[25]).isEveryoneRoleId(id.props.guild.id, id);
      obj[2] = id;
      obj[3] = mentionable;
      obj[4] = hoist;
      obj[5] = permissions.toString();
      obj[6] = sizeResult;
      const merged = Object.assign(result);
      obj4.track(outer1_18.ROLE_PAGE_VIEWED, obj);
    };
    applyArgumentsResult.handleNameChanged = function handleNameChanged(name) {
      const merged = Object.assign(applyArgumentsResult.state.formErrors);
      delete tmp2[tmp];
      applyArgumentsResult.setState({ formErrors: {} });
      applyArgumentsResult(outer1_3[26]).updateRoleName(applyArgumentsResult.props.role.id, name);
    };
    applyArgumentsResult.handleMentionableChanged = function handleMentionableChanged(mentionable) {
      applyArgumentsResult(outer1_3[26]).toggleRoleSettings(applyArgumentsResult.props.role.id, applyArgumentsResult.props.role.hoist, mentionable);
    };
    applyArgumentsResult.handleHoistChanged = function handleHoistChanged(hoist) {
      applyArgumentsResult(outer1_3[26]).toggleRoleSettings(applyArgumentsResult.props.role.id, hoist, applyArgumentsResult.props.role.mentionable);
    };
    applyArgumentsResult.handlePermissionsChanged = function handlePermissionsChanged(permissions) {
      const result = applyArgumentsResult(outer1_3[26]).updateRolePermissionSet(applyArgumentsResult.props.role.id, permissions);
    };
    applyArgumentsResult.handleSaveRole = function handleSaveRole() {
      return new Promise((arg0) => {
        let hoist;
        let mentionable;
        let name;
        let permissions;
        let effectiveSection = arg0;
        let obj = effectiveSection;
        const navigation = effectiveSection.props.navigation;
        let id = effectiveSection.props.guild.id;
        id = effectiveSection.props.role.id;
        ({ name, permissions, mentionable, hoist } = effectiveSection.props.role);
        effectiveSection = effectiveSection.getEffectiveSection();
        if (effectiveSection === outer1_17.PERMISSIONS) {
          obj = { permissions: null };
          obj[0] = permissions;
          let obj1 = obj;
        } else if (effectiveSection === tmp2.DISPLAY) {
          const roleStyleData = outer1_15.getRoleStyleData(id);
          let currentStyle;
          if (roleStyleData != null) {
            currentStyle = roleStyleData.currentStyle;
          }
          if (currentStyle == null) {
            currentStyle = outer1_16.SOLID;
          }
          let primary_color;
          if (roleStyleData != null) {
            const styleColors = roleStyleData.styleColors;
            if (styleColors != null) {
              if (styleColors[currentStyle] != null) {
                primary_color = tmp6.primary_color;
              }
            }
          }
          if (primary_color == null) {
            primary_color = outer1_19;
          }
          let tmp7;
          if (roleStyleData != null) {
            const styleColors2 = roleStyleData.styleColors;
            if (styleColors2 != null) {
              tmp7 = styleColors2[currentStyle];
            }
          }
          if (currentStyle === outer1_16.SOLID) {
            obj = { primary_color: null, secondary_color: null, tertiary_color: null };
            obj[0] = primary_color;
            tmp7 = obj;
            let primary_color1 = primary_color;
          } else if (currentStyle === tmp8.HOLOGRAPHIC) {
            primary_color1 = outer1_21.primary_color;
            tmp7 = outer1_21;
          } else {
            primary_color1 = undefined;
            if (tmp7 != null) {
              primary_color1 = tmp7.primary_color;
            }
            if (primary_color1 == null) {
              primary_color1 = outer1_19;
            }
          }
          obj1 = { name: null, color: null, colors: null, hoist: null, mentionable: null };
          obj1[0] = name;
          obj1[1] = primary_color1;
          obj1[2] = tmp7;
          obj1[3] = hoist;
          obj1[4] = mentionable;
        }
        let hasRoleConfigurationChanges = effectiveSection === tmp2.VERIFICATIONS;
        if (hasRoleConfigurationChanges) {
          hasRoleConfigurationChanges = outer1_15.hasRoleConfigurationChanges;
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleIdsForConfigurations = outer1_15.editedRoleIdsForConfigurations;
          hasRoleConfigurationChanges = editedRoleIdsForConfigurations.has(id);
        }
        if (hasRoleConfigurationChanges) {
          const editedRoleConnectionConfigurationsMap = outer1_15.getEditedRoleConnectionConfigurationsMap();
          let closure_2 = editedRoleConnectionConfigurationsMap.get(id);
        }
        function success() {
          let obj = outer2_0(outer2_3[26]);
          obj.commitSectionChanges(id, effectiveSection);
          navigation.pop();
          store.setState({ submitting: false, formErrors: {} });
          obj = { key: "ROLE_EDIT_SAVED", content: null, icon: null };
          const intl = outer2_0(outer2_3[20]).intl;
          obj[1] = intl.string(outer2_0(outer2_3[20]).t.ulZn1j);
          obj[2] = outer2_1(outer2_3[28]);
          outer2_1(outer2_3[27]).open(obj);
          store(true);
        }
        function failure(body) {
          body = undefined;
          if (body != null) {
            body = body.body;
          }
          if (body == null) {
            body = {};
          }
          store.setState({ submitting: false, formErrors: body });
          const obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
          const intl = outer2_0(outer2_3[20]).intl;
          obj[1] = intl.string(outer2_0(outer2_3[20]).t.fEptJP);
          obj[2] = outer2_1(outer2_3[29]);
          outer2_1(outer2_3[27]).open(obj);
          store(false);
        }
        obj.setState({ submitting: true, formErrors: {} }, () => {
          if (null != obj1) {
            let updateRoleResult = outer2_1(outer2_3[30]).updateRole(id, id, tmp);
            let obj = outer2_1(outer2_3[30]);
          } else {
            updateRoleResult = Promise.resolve();
          }
          updateRoleResult.then(() => {
            if (null != closure_2) {
              const result = callback(navigation[31]).putRoleConnectionsConfigurations(closure_4, _objectWithoutProperties, tmp);
              result.then(callback2, closure_8);
              const obj = callback(navigation[31]);
            } else {
              callback2();
            }
          }, (arg0) => {
            callback3(arg0);
          });
        });
      });
    };
    applyArgumentsResult.handleDeleteRole = function handleDeleteRole() {
      let closure_1;
      let role;
      const props = applyArgumentsResult.props;
      ({ guild: closure_1, role } = props);
      const navigation = props.navigation;
      let obj = outer1_1(outer1_3[32]);
      obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
      const intl = applyArgumentsResult(outer1_3[20]).intl;
      obj = { name: role.name };
      obj[0] = intl.formatToPlainString(applyArgumentsResult(outer1_3[20]).t.FiMFTZ, obj);
      const intl2 = applyArgumentsResult(outer1_3[20]).intl;
      obj[1] = intl2.string(applyArgumentsResult(outer1_3[20]).t.qALKny);
      const intl3 = applyArgumentsResult(outer1_3[20]).intl;
      obj[2] = intl3.string(applyArgumentsResult(outer1_3[20]).t["ETE/oC"]);
      const intl4 = applyArgumentsResult(outer1_3[20]).intl;
      obj[3] = intl4.string(applyArgumentsResult(outer1_3[20]).t.N86XcP);
      applyArgumentsResult = outer1_6(function*() {
        if (user === 2) {
          user = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
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
            user = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                user = 3;
                throw arg1;
              } else if (arg0 === 2) {
                user = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_0 = tmp4;
                const tags = user.tags;
                let guild_connections;
                if (tags != null) {
                  guild_connections = tags.guild_connections;
                }
                if (null === guild_connections) {
                  v0 = 1;
                  user = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = outer1_0(outer1_3[31]).putRoleConnectionsConfigurations(v0.id, user.id, []);
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              user = 3;
              throw arg1;
            } else if (arg0 === 2) {
              user = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            obj1 = v0(outer1_3[30]);
            obj1.deleteRole(v0.id, user.id);
            arr = arr.pop();
            user = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp18) {
            user = tmp;
            throw tmp18;
          }
        }
      });
      obj[4] = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[6] = applyArgumentsResult(outer1_3[33]).ButtonColors.RED;
      obj.show(obj);
    };
    applyArgumentsResult.handleBack = function handleBack() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      if (props.section !== outer1_17.DISPLAY) {
        obj.trackTabChanged(tmp.DISPLAY);
      }
      if (applyArgumentsResult.getSectionChanges()) {
        let resolved = new Promise((arg0) => {
          let closure_0 = arg0;
          let obj = outer1_1(outer1_3[32]);
          obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, confirmColor: null };
          const intl = outer1_0(outer1_3[20]).intl;
          obj[0] = intl.string(outer1_0(outer1_3[20]).t.P3yCXJ);
          const intl2 = outer1_0(outer1_3[20]).intl;
          obj[1] = intl2.string(outer1_0(outer1_3[20]).t.BU8QoR);
          const intl3 = outer1_0(outer1_3[20]).intl;
          obj[2] = intl3.string(outer1_0(outer1_3[20]).t["lHKZ1/"]);
          const intl4 = outer1_0(outer1_3[20]).intl;
          obj[3] = intl4.string(outer1_0(outer1_3[20]).t.p89ACt);
          obj[4] = function onConfirm() {
            lib.handleSaveRole().then((arg0) => callback(arg0));
          };
          obj[5] = function onCancel() {
            const id = lib.props.role.id;
            const effectiveSection = lib.getEffectiveSection();
            if (effectiveSection === outer2_17.VERIFICATIONS) {
              const result = outer2_0(outer2_3[26]).discardConnectionsChanges(id);
              const obj2 = outer2_0(outer2_3[26]);
            } else {
              const result1 = outer2_0(outer2_3[26]).discardSectionChanges(id, effectiveSection);
              const obj = outer2_0(outer2_3[26]);
            }
            lib(true);
          };
          obj[7] = outer1_0(outer1_3[33]).ButtonColors.BRAND;
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
  return handleSetSection.hasSectionChanges(this.props.role.id, this.getEffectiveSection());
};
prototype["updateNavigation"] = function updateNavigation(role, submitting) {
  let self = this;
  self = this;
  const props = this.props;
  role = props.role;
  const navigation = props.navigation;
  submitting = this.state.submitting;
  let setOptionsResult = { headerLeft: null, headerRight: null, headerTitle: null };
  const sectionChanges = self.getSectionChanges();
  setOptionsResult[0] = role(5238).getHeaderConditionalBackButton(self.handleBack);
  if (submitting) {
    let fn = () => callback(role(table[18]).HeaderSubmittingIndicator, {});
  } else if (sectionChanges) {
    fn = () => {
      const obj = { onPress: self.handleSaveRole, text: null };
      const intl = role(outer1_3[20]).intl;
      obj[1] = intl.string(role(outer1_3[20]).t["R3BPH+"]);
      return outer1_22(role(outer1_3[19]).HeaderActionButton, obj);
    };
  }
  setOptionsResult[1] = fn;
  setOptionsResult[2] = function headerTitle() {
    const obj = { title: role.name, subtitle: null };
    const intl = role(outer1_3[20]).intl;
    obj[1] = intl.string(role(outer1_3[20]).t.XPGZXP);
    return outer1_22(role(outer1_3[18]).NavigatorHeader, obj);
  };
  setOptionsResult = navigation.setOptions(setOptionsResult);
};
prototype["renderSubScreenButtons"] = function renderSubScreenButtons() {
  const self = this;
  let obj = { hasIcons: false, children: null };
  obj = { label: null, onPress: null, arrow: true };
  const intl = self(1236).intl;
  obj[0] = intl.string(self(1236).t.WIDE1L);
  obj[1] = function onPress() {
    return self.onSubScreenValueChange(outer1_17.PERMISSIONS);
  };
  const items = [callback2(self(5315).TableRow, obj), , ];
  obj = { label: null, onPress: null, arrow: true };
  const intl2 = self(1236).intl;
  obj[0] = intl2.string(self(1236).t["5//Muu"]);
  obj[1] = function onPress() {
    return self.onSubScreenValueChange(outer1_17.VERIFICATIONS);
  };
  items[1] = callback2(self(5315).TableRow, obj);
  const obj1 = { label: null, onPress: null, arrow: true };
  const intl3 = self(1236).intl;
  obj1[0] = intl3.string(self(1236).t.J4ZtH1);
  obj1[1] = function onPress() {
    return self.onSubScreenValueChange(outer1_17.MEMBERS);
  };
  items[2] = callback2(self(5315).TableRow, obj1);
  obj[1] = items;
  return callback3(self(5649).TableRowGroup, obj);
};
prototype["renderDeleteButton"] = function renderDeleteButton() {
  let obj = { hasIcons: false, children: null };
  obj = { variant: "danger", label: null, onPress: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.c9ej8n);
  obj[2] = this.handleDeleteRole;
  obj[1] = callback2(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj);
  return callback2(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, obj);
};
prototype["renderManagedRoleWarningText"] = function renderManagedRoleWarningText() {
  let obj = { style: createCacheKey(this.context).managedRolesWarningContainer, children: null };
  obj = { messageType: null, children: null };
  obj[0] = require("../../../../design/void/native.tsx") /* Button */.HelpMessageTypes.WARNING;
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.k5d7DJ);
  obj[1] = callback2(require("../../../../design/void/native.tsx") /* Button */.HelpMessage, obj);
  return callback2(View, obj);
};
prototype["render"] = function render() {
  let guild;
  let hoist;
  let integrations;
  let locked;
  let mentionable;
  let name;
  let newRole;
  let permissions;
  let role;
  const self = this;
  const tmp = createCacheKey(this.context);
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
    let obj = { guild: null, role: null, name: null, formErrors: null, mentionable: null, hoist: null, onNameChanged: null, onMentionableChanged: null, onHoistChanged: null, locked: null, autoFocusInput: null };
    obj[0] = guild;
    obj[1] = role;
    obj[2] = name;
    obj[3] = this.state.formErrors;
    obj[4] = mentionable;
    obj[5] = hoist;
    ({ handleNameChanged: obj3[6], handleMentionableChanged: obj3[7], handleHoistChanged: obj3[8] } = self);
    obj[9] = locked;
    obj[10] = newRole;
    let tmp11Result = callback2(require("GuildSettingsRoleEditDisplay.tsx"), obj);
  } else if (tmp9.PERMISSIONS === effectiveSection) {
    obj = { guild: null, role: null, permissions: null, onPermissionsChanged: null, contentContainerStyle: null };
    obj[0] = guild;
    obj[1] = role;
    obj[2] = permissions;
    obj[3] = self.handlePermissionsChanged;
    obj[4] = self.props.contentContainerStyle;
    tmp11Result = callback2(require("GuildSettingsRoleEditPermissions.tsx"), obj);
  } else if (tmp9.MEMBERS === effectiveSection) {
    obj = { guild: null, role: null, locked: null, contentContainerStyle: null };
    obj[0] = guild;
    obj[1] = role;
    let tmp15 = locked;
    if (!locked) {
      tmp15 = tmp5;
    }
    obj[2] = tmp15;
    obj[3] = self.props.contentContainerStyle;
    tmp11Result = callback2(require("GuildSettingsRoleMembers.tsx"), obj);
    const tmp11 = callback2;
    const tmp14 = require("GuildSettingsRoleMembers.tsx");
  } else if (tmp9.VERIFICATIONS === effectiveSection) {
    const obj1 = { guild: null, role: null, locked: null, integrations: null };
    obj1[0] = guild;
    obj1[1] = role;
    obj1[2] = locked;
    obj1[3] = integrations;
    tmp11Result = callback2(require("GuildSettingsRoleEditConnectionsControls.tsx"), obj1);
  }
  const obj2 = { style: tmp.container, children: null };
  if (tmp2) {
    const obj3 = { spacing: null, style: null, children: null };
    obj3[0] = require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_24;
    const obj4 = { flex: 1, paddingHorizontal: null };
    obj4[1] = require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16;
    obj3[1] = obj4;
    obj3[2] = tmp11Result;
    let tmp22Result = tmp22(tmp24(4693).Stack, obj3);
  } else {
    const obj5 = { contentContainerStyle: null, children: null };
    obj5[0] = tmp.form;
    const obj6 = { spacing: null, children: null };
    obj6[0] = require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_24;
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
    obj6[1] = items;
    obj5[1] = closure_23(tmp24(4693).Stack, obj6);
    tmp22Result = tmp22(tmp24(7777).Form, obj5);
    const tmp26 = closure_23;
  }
  obj2[1] = tmp22Result;
  return callback2(View, obj2);
};
GuildSettingsRoleEdit.contextType = require("ManaContext").ThemeContext;
let obj1 = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
let result = require("noop").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx");

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
  const items = [createGuildRecordFromRust, createGuildRoleRecordFromRust, closure_10, handleFormInit, handleSetSection];
  const stateFromStoresObject = guildId(section[43]).useStateFromStoresObject(items, () => {
    const guild = outer1_13.getGuild(guildId);
    role = outer1_12.getRole(guildId, role.id);
    let role1 = outer1_15.getRole(role.id);
    const id = outer1_10.getId();
    if (null != guild) {
      let obj = flag(section[44]);
      const highestRole = obj.getHighestRole(guild, id);
    }
    let tmp10 = null != guild;
    if (tmp10) {
      const obj2 = flag(section[44]);
      tmp10 = !obj2.isRoleHigher(guild, id, highestRole, tmp2);
    }
    const integrations = outer1_14.getProps().integrations;
    obj = { guild, role: null, newRole: null, locked: null, integrations: null, section: null, storeHasChanges: null };
    if (role1 == null) {
      role1 = role;
    }
    if (role1 == null) {
      role1 = tmp2;
    }
    obj[1] = role1;
    obj[2] = flag;
    obj[3] = tmp10;
    obj[4] = integrations;
    obj[5] = section;
    const editedRoleIdsForConfigurations = outer1_15.editedRoleIdsForConfigurations;
    obj[6] = editedRoleIdsForConfigurations.has(role.id);
    return obj;
  });
  let guild = stateFromStoresObject.guild;
  const tmp5 = callback(stateFromStoresObject, closure_4);
  const items1 = [section];
  const effect = importAllResult.useEffect(() => {
    if (section === outer1_17.DISPLAY) {
      guildId(section[26]).init();
      const obj = guildId(section[26]);
    }
  }, items1);
  const items2 = [guildId, ];
  let id;
  if (role != null) {
    id = role.id;
  }
  items2[1] = id;
  const effect1 = importAllResult.useEffect(() => {
    let id;
    if (role != null) {
      id = tmp.id;
    }
    if (null != id) {
      const roleConnectionsConfiguration = guildId(section[31]).fetchRoleConnectionsConfiguration(guildId, tmp.id);
      const obj = guildId(section[31]);
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
    const items3 = [callback2(GuildSettingsRoleEdit, obj), callback2(guildId(section[45]).NavScrim, {})];
    obj[0] = items3;
    tmp10 = callback3(closure_24, obj);
  }
  return tmp10;
};