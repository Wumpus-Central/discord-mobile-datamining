// === Module 11836: GuildSettingsModalMemberEdit ===

// Module 11836 (GuildSettingsModalMemberEdit)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4188 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import TableRow2 from "TableRow" /* 5605 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import TableRowGroup2 from "TableRowGroup" /* 5687 */;
import TextInput from "TextInput" /* 6606 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import Form from "Form" /* 8593 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 9403 */;
import BotTagDefault from "BotTag" /* 9438 */;
import GuildSettingsModalMembersActionCreatorsDefault from "GuildSettingsModalMembersActionCreators" /* 11838 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11839 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 11844 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsModalMembersStore from "GuildSettingsModalMembersStore" /* 11837 */;

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
    obj = guildId(closure_3[36]);
    navigation = obj.useNavigation();
    closure_2 = navigation;
    obj2 = guildId(closure_3[37]);
    items = [];
    items[0] = closure_12;
    stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
    closure_3 = stateFromStores;
    obj3 = guildId(closure_3[37]);
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => GuildRoleStore.getSortedRoles(guildId));
    obj4 = guildId(closure_3[37]);
    items2 = [];
    items2[0] = closure_6;
    stateFromStores2 = obj4.useStateFromStores(items2, () => roleStyle.roleStyle);
    obj5 = guildId(closure_3[37]);
    items3 = [];
    items3[0] = closure_14;
    stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
      const currentUser = UserStore.getCurrentUser();
      _modDef38(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      return { user: UserStore.getUser(userId), currentUser };
    });
    user = stateFromStoresObject.user;
    currentUser = stateFromStoresObject.currentUser;
    effect = user.useEffect(() => {
      userId(stateFromStores[32]).startEditingNickname();
      return () => {
        userId(stateFromStores[32]).stopEditingRoles();
      };
    }, []);
    obj6 = guildId(closure_3[37]);
    items4 = [, , , , ];
    items4[0] = closure_15;
    items4[1] = closure_10;
    items4[2] = closure_13;
    items4[3] = closure_14;
    items4[4] = closure_12;
    stateFromStoresObject1 = obj6.useStateFromStoresObject(items4, () => {
      const obj = { member: GuildMemberStore.getMember(guildId, userId), nicknameError: GuildSettingsModalMembersStore.nicknameError, editRoles: GuildSettingsModalMembersStore.roles, isEditing: GuildSettingsModalMembersStore.isEditing, submitting: GuildSettingsModalMembersStore.isSubmitting, canChangeNick: null, canManageRoles: null, canKick: null, canBan: null, canDisableCommunication: null };
      let canManageUserResult = null != stateFromStores;
      if (canManageUserResult) {
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        canManageUserResult = PermissionStore.canManageUser(constants.MANAGE_NICKNAMES, user, stateFromStores);
      }
      obj.canChangeNick = canManageUserResult;
      obj.canManageRoles = PermissionStore.can(constants.MANAGE_ROLES, stateFromStores);
      let canManageUserResult1 = null != stateFromStores;
      if (canManageUserResult1) {
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        canManageUserResult1 = PermissionStore.canManageUser(constants.KICK_MEMBERS, user, stateFromStores);
      }
      obj.canKick = canManageUserResult1;
      let canManageUserResult2 = null != stateFromStores;
      if (canManageUserResult2) {
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        canManageUserResult2 = PermissionStore.canManageUser(constants.BAN_MEMBERS, user, stateFromStores);
      }
      obj.canBan = canManageUserResult2;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let id1;
      if (user != null) {
        id1 = user.id;
      }
      const items = [UserStore, GuildStore, PermissionStore];
      obj.canDisableCommunication = useCanToggleCommunicationDisableOnUser.canToggleCommunicationDisableOnUser(id, id1, items);
      return obj;
    });
    obj7 = guildId(closure_3[40]);
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
          items6[1] = jsx(tmp(tmp2[41]).NavScrim, {});
          obj.children = items6;
          tmp12 = jsxs(Fragment, obj);
        }
      }
    }
    return tmp12;
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const GuildRecord = fn(1975);
({ isGuildOwner: closure_7, isGuildOwnerWithRequiredMfaLevel: closure_8 } = GuildRecord);
const isEveryoneRole = fn(2016).isEveryoneRole;
const Constants = fn(1074);
({ Permissions: closure_16, GuildFeatures: closure_17, GuildSettingsSections: closure_18 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
fn(4560);
let createStyles = { form: { flex: 1 }, formContent: { paddingTop: 16 }, stackPadding: null, userInfo: null, avatar: null, rowLabel: null, ctaButton: null, actionButtonLeft: null, actionButtonRight: null, actionButtonContainer: null };
createStyles = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.stackPadding = createStyles;
createStyles.userInfo = { height: 63 };
createStyles.avatar = { width: 40, height: 40 };
createStyles.rowLabel = { flexDirection: "row" };
createStyles.ctaButton = { marginTop: 8, marginBottom: 8 };
createStyles.actionButtonLeft = { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 };
createStyles.actionButtonRight = { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 };
createStyles.actionButtonContainer = { flexBasis: "auto" };
let closure_22 = createStyles.createLegacyClassComponentStyles(createStyles);
const styles = StyleSheet.create({ labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginEnd: 4 } });
const PureComponent = noop.PureComponent;
class RolesList extends PureComponent {
  constructor(arg0) {
    tmp = new RolesList(global, new.target);
    tmp.state = { isEditingProp: global.isEditing };
    return tmp;
  }
}
RolesList["getDerivedStateFromProps"] = function getDerivedStateFromProps(isEditing, isEditingProp) {
  isEditing = isEditing.isEditing;
  let tmp = null;
  if (isEditingProp.isEditingProp !== isEditing) {
    const obj = { isEditingProp: isEditing };
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
    const highestRole = require("PermissionUtils").getHighestRole(guild, currentUserId);
    let obj2 = require("PermissionUtils");
    const found = require("module_12")(sortedGuildRoles).filter((item) => !isEveryoneRole(item));
    const found1 = found.filter((managed) => !managed.managed);
    const found2 = found1.filter((item) => PermissionUtilsAll.isRoleHigher(guild, currentUserId, closure_5, item));
    const arr4 = require("module_12")(sortedGuildRoles);
    let valueResult = found2.map((children) => {
      const id = children;
      const tmp = -1 !== closure_1.indexOf(children.id);
      closure_1 = tmp;
      let obj = { checked: tmp, label: null, onPress: null };
      obj = { style: closure_1_23.labelContainer, children: null };
      let tmp2Result = "dot" === closure_2;
      if (tmp2Result) {
        tmp2Result = null != children.colorString;
      }
      if (tmp2Result) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj3.color, colorStrings: obj3.colors } = children);
        obj.containerStyles = closure_1_23.roleDot;
        tmp2Result = closure_1_19(guild(currentUserId[18]).RoleDot, obj);
      }
      const items = [tmp2Result, ];
      let tmp11;
      if (null != children.colorString) {
        if ("username" === closure_2) {
          const obj1 = { color: children.colorString };
          tmp11 = obj1;
        }
      }
      items[1] = closure_1_19(guild(currentUserId[19]).Text, { variant: "text-md/semibold", style: tmp11, children: children.name });
      obj.children = items;
      obj.label = closure_1_20(closure_5, obj);
      obj.onPress = function onPress() {
        return onToggleRole(id.id, !closure_1);
      };
      return closure_1_19(guild(currentUserId[17]).TableCheckboxRow, obj, children.id);
    }).value();
    let tmp3 = currentUserId;
    const iter2 = found2.map((children) => {
      const id = children;
      const tmp = -1 !== closure_1.indexOf(children.id);
      closure_1 = tmp;
      let obj = { checked: tmp, label: null, onPress: null };
      obj = { style: closure_1_23.labelContainer, children: null };
      let tmp2Result = "dot" === closure_2;
      if (tmp2Result) {
        tmp2Result = null != children.colorString;
      }
      if (tmp2Result) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj3.color, colorStrings: obj3.colors } = children);
        obj.containerStyles = closure_1_23.roleDot;
        tmp2Result = closure_1_19(guild(currentUserId[18]).RoleDot, obj);
      }
      const items = [tmp2Result, ];
      let tmp11;
      if (null != children.colorString) {
        if ("username" === closure_2) {
          const obj1 = { color: children.colorString };
          tmp11 = obj1;
        }
      }
      items[1] = closure_1_19(guild(currentUserId[19]).Text, { variant: "text-md/semibold", style: tmp11, children: children.name });
      obj.children = items;
      obj.label = closure_1_20(closure_5, obj);
      obj.onPress = function onPress() {
        return onToggleRole(id.id, !closure_1);
      };
      return closure_1_19(guild(currentUserId[17]).TableCheckboxRow, obj, children.id);
    });
  } else {
    tmp3 = currentUserId;
    let arr = require("module_12")(sortedGuildRoles);
    const found3 = arr.filter((id) => importDefault.includes(id.id));
    valueResult = found3.map((children) => {
      let obj = { style: closure_23.labelContainer, children: null };
      let tmpResult = "dot" === importAll;
      if (tmpResult) {
        tmpResult = null != children.colorString;
      }
      if (tmpResult) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj2.color, colorStrings: obj2.colors } = children);
        obj.containerStyles = closure_23.roleDot;
        tmpResult = closure_2_19(native.RoleDot, obj);
      }
      const items = [tmpResult, ];
      let tmp10;
      if (null != children.colorString) {
        if ("username" === importAll) {
          obj = { color: children.colorString };
          tmp10 = obj;
        }
      }
      const obj1 = { label: null };
      const obj2 = { variant: "text-md/semibold", style: tmp10, children: children.name };
      items[1] = closure_2_19(Text_Text.Text, obj2);
      obj.children = items;
      obj1.label = closure_2_20(hasOwnProperty, obj);
      return closure_2_19(TableRow2.TableRow, obj1, children.id);
    }).value();
    let obj = { label: null, onPress: null };
    const intl = guild(currentUserId[21]).intl;
    obj.label = intl.string(guild(currentUserId[21]).t["+riKdA"]);
    obj.onPress = tmp;
    arr = valueResult.push(closure_19(guild(currentUserId[20]).TableRow, obj, "addition"));
    const iter = found3.map((children) => {
      let obj = { style: closure_23.labelContainer, children: null };
      let tmpResult = "dot" === importAll;
      if (tmpResult) {
        tmpResult = null != children.colorString;
      }
      if (tmpResult) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj2.color, colorStrings: obj2.colors } = children);
        obj.containerStyles = closure_23.roleDot;
        tmpResult = closure_2_19(native.RoleDot, obj);
      }
      const items = [tmpResult, ];
      let tmp10;
      if (null != children.colorString) {
        if ("username" === importAll) {
          obj = { color: children.colorString };
          tmp10 = obj;
        }
      }
      const obj1 = { label: null };
      const obj2 = { variant: "text-md/semibold", style: tmp10, children: children.name };
      items[1] = closure_2_19(Text_Text.Text, obj2);
      obj.children = items;
      obj1.label = closure_2_20(hasOwnProperty, obj);
      return closure_2_19(TableRow2.TableRow, obj1, children.id);
    });
  }
  obj = { title: null, hasIcons: false, children: null };
  const intl2 = guild(tmp3[21]).intl;
  obj.title = intl2.string(guild(tmp3[21]).t["LPJmL/"]);
  obj.children = valueResult;
  return closure_19(guild(tmp3[22]).TableRowGroup, obj);
};
RolesList.defaultProps = { roles: [] };
const PureComponent2 = noop.PureComponent;
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
        GuildSettingsModalMembersActionCreatorsDefault.changeNickname(applyArgumentsResult.props.guild.id, id, applyArgumentsResult.state.nick);
      }
    };
    applyArgumentsResult.handleStartEditingRoles = function handleStartEditingRoles() {
      GuildSettingsModalMembersActionCreatorsDefault.startEditingRoles(applyArgumentsResult.props.guild.id, applyArgumentsResult.props.user.id);
    };
    applyArgumentsResult.handleToggleRole = function handleToggleRole(roleId, state) {
      GuildSettingsModalMembersActionCreatorsDefault.toggleRole(roleId, state);
    };
    applyArgumentsResult.handleSetCommunicationDisabled = function handleSetCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      const obj = { guildId: guild.id, userId: user.id };
      const result = obj.openDisableCommunication(obj);
    };
    applyArgumentsResult.handleClearCommunicationDisabled = function handleClearCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      const obj = { guildId: guild.id, userId: user.id };
      const result = obj.openEnableCommunication(obj);
    };
    applyArgumentsResult.handleKick = function handleKick() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(constants3.MEMBER_KICK, { userId: props.user.id, onKick: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleBan = function handleBan() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(constants3.MEMBER_BAN, { userId: props.user.id, onBan: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleTransferOwnership = function handleTransferOwnership() {
      const props = applyArgumentsResult.props;
      const guild = props.guild;
      const features = guild.features;
      if (!features.has(constants2.VERIFIED)) {
        const features2 = guild.features;
        if (!features2.has(constants2.PARTNERED)) {
          TransferOwnershipModalActionCreatorsDefault.open(guild, props.user);
        }
      }
      const result = ToastUtils.transferOwnershipProtected();
    };
    applyArgumentsResult.handleSaveMemberRoles = function handleSaveMemberRoles() {
      if (null != applyArgumentsResult.props.editRoles) {
        GuildSettingsModalMembersActionCreatorsDefault.updateMemberRoles(applyArgumentsResult.props.guild.id, applyArgumentsResult.props.user.id, applyArgumentsResult.props.editRoles);
      }
    };
    applyArgumentsResult.handleCancelEditMemberRoles = function handleCancelEditMemberRoles() {
      GuildSettingsModalMembersActionCreatorsDefault.stopEditingRoles();
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
        const intl = util.intl;
        obj.text = intl.string(util.t["ETE/oC"]);
        obj.onPress = self.handleCancelEditMemberRoles;
        return closure_2_19(HeaderActionButton.HeaderActionButton, obj);
      };
    } else if (null != onClose) {
      let setOptionsResult = self(5624);
      fn = setOptionsResult.getHeaderCloseButton(onClose);
    }
    setOptionsResult = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (submitting) {
      let fn2 = () => closure_1_19(self(dependencyMap[25]).HeaderSubmittingIndicator, {});
    } else if (isEditing) {
      fn2 = () => {
        const obj = { text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        obj.onPress = self.handleSaveMemberRoles;
        return closure_2_19(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    setOptionsResult.headerRight = fn2;
    setOptionsResult.headerTitle = function headerTitle() {
      let obj = { title: null };
      const intl = util.intl;
      obj = { user: UserUtilsDefault.getName(self.props.user) };
      obj.title = intl.formatToPlainString(util.t.v7odxj, obj);
      return closure_2_19(NavigatorHeader.NavigatorHeader, obj);
    };
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
  tmp = null != submitting && submitting === submitting.submitting && isEditing === submitting.isEditing && onClose === submitting.onClose;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_22(this.context);
  let str = this.state.nick;
  ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
  if (null == member) {
    return null;
  } else {
    let obj = { style: tmp.rowLabel, children: null };
    obj = { variant: "text-sm/medium", children: UserUtilsDefault.getUserTag(user) };
    const items = [closure_1_19(Text_Text.Text, obj), ];
    let tmp18Result = null;
    if (user.bot) {
      obj = { verified: null };
      let tmp21Result = BotTagDefault;
      obj.verified = user.isVerifiedBot();
      tmp18Result = closure_1_19(tmp21Result, obj);
    }
    items[1] = tmp18Result;
    obj.children = items;
    if (null == member) {
      let bot = React5(guild, user);
      if (!bot) {
        bot = !React6(guild, currentUser);
      }
      if (!bot) {
        bot = user.bot;
      }
      tmp18Result = undefined;
      if (!bot) {
        const obj1 = { hasIcons: false, children: null };
        const obj2 = { variant: "danger", label: null, onPress: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.Z5s7PM);
        obj2.onPress = self.handleTransferOwnership;
        obj1.children = closure_1_19(TableRow2.TableRow, obj2);
        tmp18Result = closure_1_19(TableRowGroup2.TableRowGroup, obj1);
      }
      const obj3 = { style: tmp.form, contentContainerStyle: null, children: null };
      const items1 = [tmp.formContent, self.props.contentContainerStyle];
      obj3.contentContainerStyle = items1;
      const obj4 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
      const obj5 = { hasIcons: true, children: null };
      const obj6 = { icon: null, label: null };
      const obj7 = { style: tmp.avatar, user, guildId: guild.id };
      obj6.icon = closure_1_19(native.Avatar, obj7);
      obj6.label = tmp7;
      obj5.children = closure_1_19(TableRow2.TableRow, obj6);
      const items2 = [closure_1_19(TableRowGroup2.TableRowGroup, obj5), , , , , , ];
      if (!canChangeNick) {
        canChangeNick = currentUser.id === user.id;
      }
      if (canChangeNick) {
        const obj8 = { label: null, value: null, placeholder: null, onChange: null, onBlur: null, maxLength: 32, errorMessage: null };
        const intl3 = util.intl;
        obj8.label = intl3.string(util.t["621LJD"]);
        if (str == null) {
          str = "";
        }
        obj8.value = str;
        const intl4 = util.intl;
        obj8.placeholder = intl4.string(util.t.h7UKXj);
        ({ handleChangeNickname: obj16.onChange, handleSaveNickname: obj16.onBlur } = self);
        obj8.errorMessage = tmp3;
        canChangeNick = closure_1_19(TextInput.TextInput, obj8);
      }
      items2[1] = canChangeNick;
      if (canManageRoles) {
        const obj9 = { guild, sortedGuildRoles: tmp2, roles: null, roleStyle: null, currentUserId: null, isEditing: null, onToggleRole: null, onStartEditing: null };
        if (!isEditing) {
          editRoles = member.roles;
        }
        if (editRoles == null) {
          editRoles = [];
        }
        obj9.roles = editRoles;
        obj9.roleStyle = tmp4;
        obj9.currentUserId = currentUser.id;
        obj9.isEditing = isEditing;
        ({ handleToggleRole: obj17.onToggleRole, handleStartEditingRoles: obj17.onStartEditing } = self);
        canManageRoles = closure_1_19(RolesList, obj9);
      }
      items2[2] = canManageRoles;
      if (canDisableCommunication) {
        canDisableCommunication = null;
      }
      items2[3] = canDisableCommunication;
      if (canKick) {
        const obj10 = { hasIcons: false, children: null };
        const obj11 = { variant: "danger", label: null, onPress: null };
        const intl5 = util.intl;
        const obj12 = { user: null };
        tmp21Result = UserUtilsDefault;
        obj12.user = tmp21Result.getName(user);
        obj11.label = intl5.formatToPlainString(util.t.yOiJHB, obj12);
        obj11.onPress = self.handleKick;
        obj10.children = closure_1_19(TableRow2.TableRow, obj11);
        canKick = closure_1_19(TableRowGroup2.TableRowGroup, obj10);
      }
      items2[4] = canKick;
      if (canBan) {
        const obj13 = { hasIcons: false, children: null };
        const obj14 = { variant: "danger", label: null, onPress: null };
        const intl6 = util.intl;
        const obj15 = { user: UserUtilsDefault.getName(user) };
        obj14.label = intl6.formatToPlainString(util.t.TuAZuW, obj15);
        obj14.onPress = self.handleBan;
        obj13.children = closure_1_19(TableRow2.TableRow, obj14);
        canBan = closure_1_19(TableRowGroup2.TableRowGroup, obj13);
        const tmp21Result1 = UserUtilsDefault;
      }
      items2[5] = canBan;
      items2[6] = tmp18Result;
      obj4.children = items2;
      obj3.children = closure_1_20(Stack_Stack.Stack, obj4);
      return closure_1_19(Form.Form, obj3);
    } else {
      const result = CommunicationDisabledUtils.isMemberCommunicationDisabled(member);
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const obj16 = { hasIcons: false, children: null };
      const TableRow = TableRow2.TableRow;
      let obj17 = { variant: "danger", label: null, onPress: null };
      const intl = util.intl;
      const formatToPlainString = intl.formatToPlainString;
      let handleClearCommunicationDisabled = util.t;
      if (result) {
        const obj18 = { user: UserUtilsDefault.getName(user) };
        obj17.label = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj18);
        handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
        obj17.onPress = handleClearCommunicationDisabled;
        obj17 = closure_1_19(TableRow, obj17);
        obj16.children = obj17;
        let tmp18Result1 = closure_1_19(TableRowGroup, obj16);
        const tmp21Result2 = UserUtilsDefault;
      } else {
        const obj19 = { user: UserUtilsDefault.getName(user) };
        obj17[1] = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj19);
        obj17[2] = self.handleSetCommunicationDisabled;
        obj16.children = closure_1_19(TableRow, obj17);
        tmp18Result1 = closure_1_19(TableRowGroup, obj16);
        const tmp21Result3 = UserUtilsDefault;
      }
      const tmp19Result = CommunicationDisabledUtils;
    }
  }
};
GuildSettingsModalMemberEdit.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  ({ guildId, userId } = onClose);
  const tmp = onRemove(5598)(guildId);
  closure_2 = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = noop.useMemo(() => {
    const guildId = closure_2;
    closure_2 = onRemove;
    let obj = {
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onClose = onClose;
        obj.guildId = guildId;
        return closure_2_19(GuildSettingsModalMemberEditScene, obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        obj.onKick = onKick;
        return closure_2_19(onRemove(11849), obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = guildId;
        obj.onBan = onBan;
        return closure_2_19(onRemove(11851), obj);
      }
    };
    return { [closure_2_18.MEMBER_EDIT]: obj, [closure_2_18.MEMBER_KICK]: obj, [closure_2_18.MEMBER_BAN]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: constants3.MEMBER_EDIT, initialRouteStack: null };
  obj = { name: constants3.MEMBER_EDIT, params: { userId } };
  const items1 = [obj];
  obj.initialRouteStack = items1;
  return closure_19(onClose(7000).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };