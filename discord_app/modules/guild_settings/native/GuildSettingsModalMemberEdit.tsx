// === Module 11016: GuildSettingsModalMemberEditScene ===

// Module 11016 (GuildSettingsModalMemberEditScene)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import isCommunicationDisabled from "isCommunicationDisabled" /* 4010 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import TextInput from "TextInput" /* 8071 */;
import Form from "Form" /* 8083 */;
import getBotLabelDefault from "getBotLabel" /* 9462 */;
import _modDef11018 from "module_11018" /* 11018 */;
import _modDef11024 from "module_11024" /* 11024 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import { isEveryoneRole } from "GuildRoleRecordTypeTag" /* 1984 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleStopEditingRoles from "handleStopEditingRoles" /* 11017 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
class GuildSettingsModalMemberEditScene {
  constructor(arg0) {
    guildId = global.guildId;
    userId = global.userId;
    closure_2 = undefined;
    closure_3 = undefined;
    user = undefined;
    ({ onClose, contentContainerStyle } = global);
    tmp = guildId;
    tmp2 = closure_3;
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    closure_2 = navigation;
    obj2 = require("initialize");
    items = [];
    items[0] = closure_12;
    stateFromStores = obj2.useStateFromStores(items, () => closure_1_12.getGuild(guildId));
    closure_3 = stateFromStores;
    obj3 = require("initialize");
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => closure_1_11.getSortedRoles(guildId));
    obj4 = require("initialize");
    items2 = [];
    items2[0] = closure_6;
    stateFromStores2 = obj4.useStateFromStores(items2, () => roleStyle.roleStyle);
    obj5 = require("initialize");
    items3 = [];
    items3[0] = closure_14;
    stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
      const currentUser = closure_1_14.getCurrentUser();
      userId(stateFromStores[38])(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      return { user: closure_1_14.getUser(userId), currentUser };
    });
    user = stateFromStoresObject.user;
    currentUser = stateFromStoresObject.currentUser;
    effect = user.useEffect(() => {
      userId(stateFromStores[32]).startEditingNickname();
      return () => {
        callback(table[32]).stopEditingRoles();
      };
    }, []);
    obj6 = require("initialize");
    items4 = [, , , , ];
    items4[0] = closure_15;
    items4[1] = closure_10;
    items4[2] = closure_13;
    items4[3] = closure_14;
    items4[4] = closure_12;
    stateFromStoresObject1 = obj6.useStateFromStoresObject(items4, () => {
      const obj = { member: closure_1_10.getMember(guildId, userId), nicknameError: closure_1_15.nicknameError, editRoles: closure_1_15.roles, isEditing: closure_1_15.isEditing, submitting: closure_1_15.isSubmitting, canChangeNick: null, canManageRoles: null, canKick: null, canBan: null, canDisableCommunication: null };
      let canManageUserResult = null != stateFromStores;
      if (canManageUserResult) {
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        canManageUserResult = closure_1_13.canManageUser(closure_1_16.MANAGE_NICKNAMES, user, stateFromStores);
      }
      obj[5] = canManageUserResult;
      obj[6] = closure_1_13.can(closure_1_16.MANAGE_ROLES, stateFromStores);
      let canManageUserResult1 = null != stateFromStores;
      if (canManageUserResult1) {
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        canManageUserResult1 = closure_1_13.canManageUser(closure_1_16.KICK_MEMBERS, user, stateFromStores);
      }
      obj[7] = canManageUserResult1;
      let canManageUserResult2 = null != stateFromStores;
      if (canManageUserResult2) {
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        canManageUserResult2 = closure_1_13.canManageUser(closure_1_16.BAN_MEMBERS, user, stateFromStores);
      }
      obj[8] = canManageUserResult2;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let id1;
      if (user != null) {
        id1 = user.id;
      }
      const items = [closure_1_14, closure_1_12, closure_1_13];
      obj[9] = guildId(stateFromStores[39]).canToggleCommunicationDisableOnUser(id, id1, items);
      return obj;
    });
    obj7 = require("subscribeGuildMembers");
    items5 = [];
    items5[0] = userId;
    subscribeGuildMembers = obj7.useSubscribeGuildMembers({ [guildId]: items5 }, "GuildSettingsModalMemberEdit");
    [][0] = navigation;
    tmp12 = null;
    if (null != currentUser) {
      tmp12 = null;
      if (null != stateFromStores) {
        tmp12 = null;
        if (null != user) {
          tmp13 = jsxs;
          tmp14 = Fragment;
          obj = { children: null };
          tmp15 = jsx;
          tmp16 = GuildSettingsModalMemberEdit;
          obj1 = {};
          tmp17 = obj1;
          tmp18 = stateFromStoresObject1;
          merged = Object.assign(stateFromStoresObject1);
          obj1.onClose = onClose;
          obj1.handleSuccessfulRemoval = tmp11;
          obj1.guild = stateFromStores;
          obj1.sortedGuildRoles = stateFromStores1;
          obj1.roleStyle = stateFromStores2;
          obj1.currentUser = currentUser;
          obj1.user = user;
          obj1.navigation = navigation;
          obj1.contentContainerStyle = contentContainerStyle;
          items6 = [, ];
          items6[0] = jsx(GuildSettingsModalMemberEdit, obj1);
          items6[1] = jsx(require("NavScrim").NavScrim, {});
          obj[0] = items6;
          tmp12 = jsxs(Fragment, obj);
        }
      }
    }
    return tmp12;
  }
}
let c4 = importAllResult;
({ StyleSheet, View: c5 } = get_ActivityIndicator);
({ isGuildOwner: error, isGuildOwnerWithRequiredMfaLevel: closure_8 } = GuildNSFWContentLevel);
({ Permissions: closure_16, GuildFeatures: closure_17, GuildSettingsSections: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 63 };
createCacheKey[4] = { width: 40, height: 40 };
createCacheKey[5] = { flexDirection: "row" };
createCacheKey[6] = { marginTop: 8, marginBottom: 8 };
createCacheKey[7] = { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 };
createCacheKey[8] = { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 };
createCacheKey[9] = { flexBasis: "auto" };
let closure_22 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const styles = StyleSheet.create({ labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginEnd: 4 } });
const PureComponent = importAllResult.PureComponent;
class RolesList extends PureComponent {
  constructor(arg0) {
    tmp = new RolesList(global, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.state = { isEditingProp: global.isEditing };
    return tmp;
  }
}
RolesList["getDerivedStateFromProps"] = function getDerivedStateFromProps(isEditing, isEditingProp) {
  isEditing = isEditing.isEditing;
  let tmp = null;
  if (isEditingProp.isEditingProp !== isEditing) {
    const obj = { isEditingProp: null };
    obj[0] = isEditing;
    tmp = obj;
  }
  return tmp;
};
RolesList.prototype["render"] = function render() {
  const props = this.props;
  const guild = props.guild;
  ({ sortedGuildRoles, roles: importDefault, roleStyle: importAll, currentUserId } = props);
  const onToggleRole = props.onToggleRole;
  if (props.isEditing) {
    const highestRole = importAll(currentUserId[15]).getHighestRole(guild, currentUserId);
    let obj2 = importAll(currentUserId[15]);
    const found = importDefault(currentUserId[16])(sortedGuildRoles).filter((item, index) => !callback(item));
    const found1 = found.filter((item, index) => !item.managed);
    const found2 = found1.filter((item, index) => importAll(currentUserId[15]).isRoleHigher(guild, currentUserId, closure_5, item));
    const arr4 = importDefault(currentUserId[16])(sortedGuildRoles);
    let valueResult = found2.map((item, index) => {
      closure_0 = item;
      const tmp = -1 !== closure_1.indexOf(item.id);
      closure_1 = tmp;
      let obj = { style: closure_1_23.labelContainer, children: null };
      let tmp2Result = "dot" === closure_2;
      if (tmp2Result) {
        tmp2Result = null != item.colorString;
      }
      if (tmp2Result) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj3[0], colorStrings: obj3[1] } = item);
        obj[2] = closure_1_23.roleDot;
        tmp2Result = closure_1_19(guild(currentUserId[18]).RoleDot, obj);
      }
      const items = [tmp2Result, ];
      let tmp11;
      if (null != item.colorString) {
        if ("username" === closure_2) {
          obj1 = { color: null };
          obj1[0] = item.colorString;
          tmp11 = obj1;
        }
      }
      items[1] = closure_1_19(guild(currentUserId[19]).Text, { variant: "text-md/semibold", style: tmp11, children: item.name });
      obj[1] = items;
      obj[1] = closure_1_20(closure_5, obj);
      obj[2] = function onPress() {
        return onToggleRole(item.id, !closure_1);
      };
      return closure_1_19(guild(currentUserId[17]).TableCheckboxRow, obj, item.id);
    }).value();
    let tmp3 = currentUserId;
    const iter2 = found2.map((item, index) => {
      closure_0 = item;
      const tmp = -1 !== closure_1.indexOf(item.id);
      closure_1 = tmp;
      let obj = { style: closure_1_23.labelContainer, children: null };
      let tmp2Result = "dot" === closure_2;
      if (tmp2Result) {
        tmp2Result = null != item.colorString;
      }
      if (tmp2Result) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj3[0], colorStrings: obj3[1] } = item);
        obj[2] = closure_1_23.roleDot;
        tmp2Result = closure_1_19(guild(currentUserId[18]).RoleDot, obj);
      }
      const items = [tmp2Result, ];
      let tmp11;
      if (null != item.colorString) {
        if ("username" === closure_2) {
          obj1 = { color: null };
          obj1[0] = item.colorString;
          tmp11 = obj1;
        }
      }
      items[1] = closure_1_19(guild(currentUserId[19]).Text, { variant: "text-md/semibold", style: tmp11, children: item.name });
      obj[1] = items;
      obj[1] = closure_1_20(closure_5, obj);
      obj[2] = function onPress() {
        return onToggleRole(item.id, !closure_1);
      };
      return closure_1_19(guild(currentUserId[17]).TableCheckboxRow, obj, item.id);
    });
  } else {
    tmp3 = currentUserId;
    let arr = importDefault(currentUserId[16])(sortedGuildRoles);
    const found3 = arr.filter((item, index) => closure_1.includes(item.id));
    valueResult = found3.map((item, index) => {
      let obj = { style: closure_1_23.labelContainer, children: null };
      let tmpResult = "dot" === closure_2;
      if (tmpResult) {
        tmpResult = null != item.colorString;
      }
      if (tmpResult) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj2[0], colorStrings: obj2[1] } = item);
        obj[2] = closure_1_23.roleDot;
        tmpResult = closure_1_19(guild(currentUserId[18]).RoleDot, obj);
      }
      const items = [tmpResult, ];
      let tmp10;
      if (null != item.colorString) {
        if ("username" === closure_2) {
          obj = { color: null };
          obj[0] = item.colorString;
          tmp10 = obj;
        }
      }
      obj1 = { label: null };
      const obj2 = { variant: "text-md/semibold", style: tmp10, children: item.name };
      items[1] = closure_1_19(guild(currentUserId[19]).Text, obj2);
      obj[1] = items;
      obj1[0] = closure_1_20(closure_5, obj);
      return closure_1_19(guild(currentUserId[20]).TableRow, obj1, item.id);
    }).value();
    let obj = { label: null, onPress: null };
    const intl = guild(currentUserId[21]).intl;
    obj[0] = intl.string(guild(currentUserId[21]).t["+riKdA"]);
    obj[1] = tmp;
    arr = valueResult.push(callback3(guild(currentUserId[20]).TableRow, obj, "addition"));
    const iter = found3.map((item, index) => {
      let obj = { style: closure_1_23.labelContainer, children: null };
      let tmpResult = "dot" === closure_2;
      if (tmpResult) {
        tmpResult = null != item.colorString;
      }
      if (tmpResult) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj2[0], colorStrings: obj2[1] } = item);
        obj[2] = closure_1_23.roleDot;
        tmpResult = closure_1_19(guild(currentUserId[18]).RoleDot, obj);
      }
      const items = [tmpResult, ];
      let tmp10;
      if (null != item.colorString) {
        if ("username" === closure_2) {
          obj = { color: null };
          obj[0] = item.colorString;
          tmp10 = obj;
        }
      }
      obj1 = { label: null };
      const obj2 = { variant: "text-md/semibold", style: tmp10, children: item.name };
      items[1] = closure_1_19(guild(currentUserId[19]).Text, obj2);
      obj[1] = items;
      obj1[0] = closure_1_20(closure_5, obj);
      return closure_1_19(guild(currentUserId[20]).TableRow, obj1, item.id);
    });
  }
  obj = { title: null, hasIcons: false, children: null };
  const intl2 = guild(tmp3[21]).intl;
  obj[0] = intl2.string(guild(tmp3[21]).t["LPJmL/"]);
  obj[2] = valueResult;
  return callback3(guild(tmp3[22]).TableRowGroup, obj);
};
RolesList.defaultProps = { roles: [] };
const PureComponent2 = importAllResult.PureComponent;
class GuildSettingsModalMemberEdit extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    member = applyArgumentsResult.props.member;
    nick = undefined;
    if (member != null) {
      nick = member.nick;
    }
    applyArgumentsResult.state = { nick };
    applyArgumentsResult.handleChangeNickname = function handleChangeNickname(nick) {
      applyArgumentsResult.setState({ nick });
    };
    applyArgumentsResult.handleSaveNickname = function handleSaveNickname() {
      if (null != applyArgumentsResult.state.nick) {
        let id = null;
        if (applyArgumentsResult.props.currentUser.id !== applyArgumentsResult.props.user.id) {
          id = applyArgumentsResult.props.user.id;
        }
        _modDef11018.changeNickname(applyArgumentsResult.props.guild.id, id, applyArgumentsResult.state.nick);
      }
    };
    applyArgumentsResult.handleStartEditingRoles = function handleStartEditingRoles() {
      _modDef11018.startEditingRoles(applyArgumentsResult.props.guild.id, applyArgumentsResult.props.user.id);
    };
    applyArgumentsResult.handleToggleRole = function handleToggleRole(roleId, state) {
      callback(11018).toggleRole(roleId, state);
    };
    applyArgumentsResult.handleSetCommunicationDisabled = function handleSetCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      applyArgumentsResult(dependencyMap[33]);
      const obj = { guildId: guild.id, userId: user.id };
      const result = obj.openDisableCommunication(obj);
    };
    applyArgumentsResult.handleClearCommunicationDisabled = function handleClearCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      applyArgumentsResult(dependencyMap[33]);
      const obj = { guildId: guild.id, userId: user.id };
      const result = obj.openEnableCommunication(obj);
    };
    applyArgumentsResult.handleKick = function handleKick() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(closure_1_18.MEMBER_KICK, { userId: props.user.id, onKick: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleBan = function handleBan() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(closure_1_18.MEMBER_BAN, { userId: props.user.id, onBan: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleTransferOwnership = function handleTransferOwnership() {
      const props = applyArgumentsResult.props;
      const guild = props.guild;
      const features = guild.features;
      if (!features.has(closure_1_17.VERIFIED)) {
        const features2 = guild.features;
        if (!features2.has(closure_1_17.PARTNERED)) {
          _modDef11024.open(guild, props.user);
        }
      }
      const result = applyArgumentsResult(dependencyMap[34]).transferOwnershipProtected();
      const obj2 = applyArgumentsResult(dependencyMap[34]);
    };
    applyArgumentsResult.handleSaveMemberRoles = function handleSaveMemberRoles() {
      if (null != applyArgumentsResult.props.editRoles) {
        _modDef11018.updateMemberRoles(applyArgumentsResult.props.guild.id, applyArgumentsResult.props.user.id, applyArgumentsResult.props.editRoles);
      }
    };
    applyArgumentsResult.handleCancelEditMemberRoles = function handleCancelEditMemberRoles() {
      callback(11018).stopEditingRoles();
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalMemberEdit.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigator();
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
  this.updateNavigator(arg0);
};
prototype["updateNavigator"] = function updateNavigator(submitting) {
  const self = this;
  ({ submitting, isEditing, navigation, onClose } = this.props);
  if (!tmp) {
    if (submitting) {
      let fn = () => null;
    } else if (isEditing) {
      fn = () => {
        const obj = { text: null, onPress: null };
        const intl = self(dependencyMap[21]).intl;
        obj[0] = intl.string(self(dependencyMap[21]).t["ETE/oC"]);
        obj[1] = self.handleCancelEditMemberRoles;
        return closure_1_19(self(dependencyMap[24]).HeaderActionButton, obj);
      };
    } else if (null != onClose) {
      let setOptionsResult = self(6314);
      fn = setOptionsResult.getHeaderCloseButton(onClose);
    }
    setOptionsResult = { headerLeft: null, headerRight: null, headerTitle: null };
    setOptionsResult[0] = fn;
    if (submitting) {
      let fn2 = () => callback(self(table[25]).HeaderSubmittingIndicator, {});
    } else if (isEditing) {
      fn2 = () => {
        const obj = { text: null, onPress: null };
        const intl = self(dependencyMap[21]).intl;
        obj[0] = intl.string(self(dependencyMap[21]).t["R3BPH+"]);
        obj[1] = self.handleSaveMemberRoles;
        return closure_1_19(self(dependencyMap[24]).HeaderActionButton, obj);
      };
    }
    setOptionsResult[1] = fn2;
    setOptionsResult[2] = function headerTitle() {
      const intl = self(dependencyMap[21]).intl;
      const obj = { user: nameFromUserDefault.getName(self.props.user) };
      obj[0] = intl.formatToPlainString(self(dependencyMap[21]).t.v7odxj, obj);
      return closure_1_19(self(dependencyMap[25]).NavigatorHeader, obj);
    };
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
  tmp = null != submitting && submitting === submitting.submitting && isEditing === submitting.isEditing && onClose === submitting.onClose;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback5(this.context);
  let str = this.state.nick;
  ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
  if (null == member) {
    return null;
  } else {
    let obj = { style: null, children: null };
    obj[0] = tmp.rowLabel;
    obj = { variant: "text-sm/medium", children: null };
    obj[1] = nameFromUserDefault.getUserTag(user);
    const items = [callback3(Text.Text, obj), ];
    let tmp18Result = null;
    if (user.bot) {
      obj = { verified: null };
      let tmp21Result = getBotLabelDefault;
      obj[0] = user.isVerifiedBot();
      tmp18Result = callback3(tmp21Result, obj);
    }
    items[1] = tmp18Result;
    obj[1] = items;
    if (null == member) {
      let bot = callback(guild, user);
      if (!bot) {
        bot = !callback2(guild, currentUser);
      }
      if (!bot) {
        bot = user.bot;
      }
      tmp18Result = undefined;
      if (!bot) {
        obj1 = { hasIcons: false, children: null };
        const obj2 = { variant: "danger", label: null, onPress: null };
        const intl2 = getSystemLocale.intl;
        obj2[1] = intl2.string(getSystemLocale.t.Z5s7PM);
        obj2[2] = self.handleTransferOwnership;
        obj1[1] = callback3(TableRowInner.TableRow, obj2);
        tmp18Result = callback3(TableRowGroupTitle.TableRowGroup, obj1);
      }
      const obj3 = { style: null, contentContainerStyle: null, children: null };
      obj3[0] = tmp.form;
      const items1 = [tmp.formContent, self.props.contentContainerStyle];
      obj3[1] = items1;
      const obj4 = { style: null, spacing: null, children: null };
      obj4[0] = tmp.stackPadding;
      obj4[1] = ThemesDefault.space.PX_24;
      const obj5 = { hasIcons: true, children: null };
      const obj6 = { icon: null, label: null };
      const obj7 = { style: null, user: null, guildId: null };
      obj7[0] = tmp.avatar;
      obj7[1] = user;
      obj7[2] = guild.id;
      obj6[0] = callback3(Button.Avatar, obj7);
      obj6[1] = tmp7;
      obj5[1] = callback3(TableRowInner.TableRow, obj6);
      const items2 = [callback3(TableRowGroupTitle.TableRowGroup, obj5), , , , , , ];
      if (!canChangeNick) {
        canChangeNick = currentUser.id === user.id;
      }
      if (canChangeNick) {
        const obj8 = { label: null, value: null, placeholder: null, onChange: null, onBlur: null, maxLength: 32, errorMessage: null };
        const intl3 = getSystemLocale.intl;
        obj8[0] = intl3.string(getSystemLocale.t["621LJD"]);
        if (str == null) {
          str = "";
        }
        obj8[1] = str;
        const intl4 = getSystemLocale.intl;
        obj8[2] = intl4.string(getSystemLocale.t.h7UKXj);
        ({ handleChangeNickname: obj16[3], handleSaveNickname: obj16[4] } = self);
        obj8[6] = tmp3;
        canChangeNick = callback3(TextInput.TextInput, obj8);
      }
      items2[1] = canChangeNick;
      if (canManageRoles) {
        const obj9 = { guild: null, sortedGuildRoles: null, roles: null, roleStyle: null, currentUserId: null, isEditing: null, onToggleRole: null, onStartEditing: null };
        obj9[0] = guild;
        obj9[1] = tmp2;
        if (!isEditing) {
          editRoles = member.roles;
        }
        if (editRoles == null) {
          editRoles = [];
        }
        obj9[2] = editRoles;
        obj9[3] = tmp4;
        obj9[4] = currentUser.id;
        obj9[5] = isEditing;
        ({ handleToggleRole: obj17[6], handleStartEditingRoles: obj17[7] } = self);
        canManageRoles = callback3(RolesList, obj9);
      }
      items2[2] = canManageRoles;
      if (canDisableCommunication) {
        canDisableCommunication = null;
      }
      items2[3] = canDisableCommunication;
      if (canKick) {
        const obj10 = { hasIcons: false, children: null };
        const obj11 = { variant: "danger", label: null, onPress: null };
        const intl5 = getSystemLocale.intl;
        const obj12 = { user: null };
        tmp21Result = nameFromUserDefault;
        obj12[0] = tmp21Result.getName(user);
        obj11[1] = intl5.formatToPlainString(getSystemLocale.t.yOiJHB, obj12);
        obj11[2] = self.handleKick;
        obj10[1] = callback3(TableRowInner.TableRow, obj11);
        canKick = callback3(TableRowGroupTitle.TableRowGroup, obj10);
      }
      items2[4] = canKick;
      if (canBan) {
        const obj13 = { hasIcons: false, children: null };
        const obj14 = { variant: "danger", label: null, onPress: null };
        const intl6 = getSystemLocale.intl;
        const obj15 = { user: null };
        obj15[0] = nameFromUserDefault.getName(user);
        obj14[1] = intl6.formatToPlainString(getSystemLocale.t.TuAZuW, obj15);
        obj14[2] = self.handleBan;
        obj13[1] = callback3(TableRowInner.TableRow, obj14);
        canBan = callback3(TableRowGroupTitle.TableRowGroup, obj13);
        const tmp21Result1 = nameFromUserDefault;
      }
      items2[5] = canBan;
      items2[6] = tmp18Result;
      obj4[2] = items2;
      obj3[2] = callback(Stack.Stack, obj4);
      return callback3(Form.Form, obj3);
    } else {
      const result = isCommunicationDisabled.isMemberCommunicationDisabled(member);
      const TableRowGroup = TableRowGroupTitle.TableRowGroup;
      const obj16 = { hasIcons: false, children: null };
      const TableRow = TableRowInner.TableRow;
      let obj17 = { variant: "danger", label: null, onPress: null };
      const intl = getSystemLocale.intl;
      const formatToPlainString = intl.formatToPlainString;
      let handleClearCommunicationDisabled = getSystemLocale.t;
      if (result) {
        const obj18 = { user: null };
        obj18[0] = nameFromUserDefault.getName(user);
        obj17[1] = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj18);
        handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
        obj17[2] = handleClearCommunicationDisabled;
        obj17 = callback3(TableRow, obj17);
        obj16[1] = obj17;
        let tmp18Result1 = callback3(TableRowGroup, obj16);
        const tmp21Result2 = nameFromUserDefault;
      } else {
        const obj19 = { user: null };
        obj19[0] = nameFromUserDefault.getName(user);
        obj17[1] = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj19);
        obj17[2] = self.handleSetCommunicationDisabled;
        obj16[1] = callback3(TableRow, obj17);
        tmp18Result1 = callback3(TableRowGroup, obj16);
        const tmp21Result3 = nameFromUserDefault;
      }
      const tmp19Result = isCommunicationDisabled;
    }
  }
};
GuildSettingsModalMemberEdit.contextType = require("ManaContext").ThemeContext;
let result = require("obj132").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  ({ guildId, userId } = onClose);
  const tmp = onRemove(7127)(guildId);
  closure_2 = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = importAllResult.useMemo(() => {
    closure_0 = closure_2;
    closure_1 = closure_0;
    closure_2 = closure_1;
    let obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = closure_0;
        obj.onBan = closure_2;
        return closure_1_19(callback(closure_1_3[43]), obj);
      }
    };
    return { [closure_1_18.MEMBER_EDIT]: obj, [closure_1_18.MEMBER_KICK]: obj, [closure_1_18.MEMBER_BAN]: obj };
  }, items);
  let obj = { name: constants.MEMBER_EDIT, params: { userId } };
  const items1 = [obj];
  return callback3(onClose(6312).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };