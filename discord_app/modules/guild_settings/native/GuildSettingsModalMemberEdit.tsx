// === Module 11444: GuildSettingsModalMemberEdit ===

// Module 11444 (GuildSettingsModalMemberEdit)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4694 */;
import PermissionUtilsAll from "PermissionUtils" /* 4712 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import TableRow2 from "TableRow" /* 6184 */;
import NavigatorHeader from "NavigatorHeader" /* 6203 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import TextInput from "TextInput" /* 6283 */;
import HeaderActionButton from "HeaderActionButton" /* 7079 */;
import Form from "Form" /* 8555 */;
import BotTagDefault from "BotTag" /* 8741 */;
import useCanToggleCommunicationDisableOnUser from "useCanToggleCommunicationDisableOnUser" /* 11443 */;
import GuildSettingsModalMembersActionCreatorsDefault from "GuildSettingsModalMembersActionCreators" /* 11447 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11448 */;
import TransferOwnershipModalActionCreatorsDefault from "TransferOwnershipModalActionCreators" /* 11453 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;
import GuildSettingsModalMembersStore from "GuildSettingsModalMembersStore" /* 11445 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const GuildRecord = fn(2082);
({ isGuildOwner: metroRequire, isGuildOwnerWithRequiredMfaLevel: closure_7 } = GuildRecord);
const isEveryoneRole = fn(2119).isEveryoneRole;
const Constants = fn(1085);
({ Permissions: closure_15, GuildFeatures: closure_16, GuildSettingsSections: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { form: { flex: 1 }, formContent: { paddingTop: 16 }, stackPadding: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING }, userInfo: { height: 63 }, avatar: { width: 40, height: 40 }, rowLabel: { flexDirection: "row" }, ctaButton: { marginTop: 8, marginBottom: 8 }, actionButtonLeft: { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 }, actionButtonRight: { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 }, actionButtonContainer: { flexBasis: "auto" } };
let closure_21 = createStyles.createLegacyClassComponentStyles(obj2);
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
  guild = props.guild;
  ({ sortedGuildRoles, roles: importDefault, currentUserId } = props);
  const onToggleRole = props.onToggleRole;
  if (props.isEditing) {
    const highestRole = currentUserId(onToggleRole[14]).getHighestRole(guild, currentUserId);
    const obj2 = currentUserId(onToggleRole[14]);
    const found = require("module_12")(sortedGuildRoles).filter((item) => !isEveryoneRole(item));
    const found1 = found.filter((managed) => !managed.managed);
    const found2 = found1.filter((item) => PermissionUtilsAll.isRoleHigher(guild, currentUserId, closure_4, item));
    const arr4 = require("module_12")(sortedGuildRoles);
    let valueResult = found2.map((id) => {
      const tmp = -1 !== closure_1.indexOf(id.id);
      closure_1 = tmp;
      const obj = {
        checked: tmp,
        label: closure_1_18(require("RoleName"), { role: id, textVariant: "text-md/semibold", dotBackground: true, children: id.name }),
        onPress() {
          return onToggleRole(id.id, !closure_1);
        }
      };
      return closure_1_18(guild(onToggleRole[16]).TableCheckboxRow, obj, id.id);
    }).value();
    let tmp3 = onToggleRole;
    const iter2 = found2.map((id) => {
      const tmp = -1 !== closure_1.indexOf(id.id);
      closure_1 = tmp;
      const obj = {
        checked: tmp,
        label: closure_1_18(require("RoleName"), { role: id, textVariant: "text-md/semibold", dotBackground: true, children: id.name }),
        onPress() {
          return onToggleRole(id.id, !closure_1);
        }
      };
      return closure_1_18(guild(onToggleRole[16]).TableCheckboxRow, obj, id.id);
    });
  } else {
    tmp3 = onToggleRole;
    const found3 = require("module_12")(sortedGuildRoles).filter((id) => importDefault.includes(id.id));
    const arr = require("module_12")(sortedGuildRoles);
    const valueResult2 = found3.map((role) => {
      const obj = { label: closure_1_18(require("RoleName"), { role, textVariant: "text-md/semibold", dotBackground: true, children: role.name }) };
      return closure_1_18(guild(onToggleRole[18]).TableRow, obj, role.id);
    }).value();
    let obj = { label: null, onPress: null };
    const intl = guild(onToggleRole[19]).intl;
    obj.label = intl.string(guild(onToggleRole[19]).t["+riKdA"]);
    obj.onPress = tmp;
    valueResult2.push(closure_18(guild(onToggleRole[18]).TableRow, obj, "addition"));
    valueResult = valueResult2;
    const iter = found3.map((role) => {
      const obj = { label: closure_1_18(require("RoleName"), { role, textVariant: "text-md/semibold", dotBackground: true, children: role.name }) };
      return closure_1_18(guild(onToggleRole[18]).TableRow, obj, role.id);
    });
  }
  const obj3 = { title: null, hasIcons: false, children: null };
  const intl2 = guild(tmp3[19]).intl;
  obj3.title = intl2.string(guild(tmp3[19]).t["LPJmL/"]);
  obj3.children = valueResult;
  return closure_18(guild(tmp3[20]).TableRowGroup, obj3);
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
    applyArgumentsResult.handleToggleRole = function handleToggleRole(arg0, arg1) {
      GuildSettingsModalMembersActionCreatorsDefault.toggleRole(arg0, arg1);
    };
    applyArgumentsResult.handleSetCommunicationDisabled = function handleSetCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      const result = GuildDisableCommunicationActionCreators.openDisableCommunication({ guildId: guild.id, userId: user.id });
    };
    applyArgumentsResult.handleClearCommunicationDisabled = function handleClearCommunicationDisabled() {
      ({ guild, user } = applyArgumentsResult.props);
      const result = GuildDisableCommunicationActionCreators.openEnableCommunication({ guildId: guild.id, userId: user.id });
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
      guild = props.guild;
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
        return collapsedCategories(HeaderActionButton.HeaderActionButton, obj);
      };
    } else if (null != onClose) {
      fn = self(6203).getHeaderCloseButton(onClose);
      let obj = self(6203);
    }
    let obj2 = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (submitting) {
      let fn2 = () => closure_1_18(self(dependencyMap[23]).HeaderSubmittingIndicator, {});
    } else if (isEditing) {
      fn2 = () => {
        const obj = { text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        obj.onPress = self.handleSaveMemberRoles;
        return collapsedCategories(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    obj2.headerTitle = function headerTitle() {
      const obj = { title: null };
      const intl = util.intl;
      const obj2 = { user: UserUtilsDefault.getName(self.props.user) };
      obj.title = intl.formatToPlainString(util.t.v7odxj, obj2);
      return collapsedCategories(NavigatorHeader.NavigatorHeader, obj);
    };
    obj2 = navigation.setOptions(obj2);
  }
  tmp = null != submitting && submitting === submitting.submitting && isEditing === submitting.isEditing && onClose === submitting.onClose;
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_21(this.context);
  let str = this.state.nick;
  ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
  if (null == member) {
    return null;
  } else {
    const obj2 = { style: tmp.rowLabel, children: null };
    const obj3 = { variant: "text-sm/medium", children: UserUtilsDefault.getUserTag(user) };
    const items = [collapsedCategories(Text_Text.Text, obj3), ];
    let tmp17Result = null;
    if (user.bot) {
      const obj = { verified: user.isVerifiedBot() };
      tmp17Result = collapsedCategories(BotTagDefault, obj);
      const tmp20Result = BotTagDefault;
    }
    items[1] = tmp17Result;
    obj2.children = items;
    if (null == member) {
      let bot = timestampProducer(guild, user);
      if (!bot) {
        bot = !React5(guild, currentUser);
      }
      if (!bot) {
        bot = user.bot;
      }
      let tmp17Result3;
      if (!bot) {
        const obj4 = { hasIcons: false, children: null };
        const obj5 = { variant: "danger", label: null, onPress: null };
        const intl2 = util.intl;
        obj5.label = intl2.string(util.t.Z5s7PM);
        obj5.onPress = self.handleTransferOwnership;
        obj4.children = collapsedCategories(TableRow2.TableRow, obj5);
        tmp17Result3 = collapsedCategories(TableRowGroup2.TableRowGroup, obj4);
      }
      const obj6 = { style: tmp.form, contentContainerStyle: null, children: null };
      const items1 = [tmp.formContent, self.props.contentContainerStyle];
      obj6.contentContainerStyle = items1;
      const obj7 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
      const obj8 = { hasIcons: true, children: null };
      const obj9 = { icon: null, label: null };
      const obj10 = { style: tmp.avatar, user, guildId: guild.id };
      obj9.icon = collapsedCategories(native.Avatar, obj10);
      obj9.label = tmp6;
      obj8.children = collapsedCategories(TableRow2.TableRow, obj9);
      const items2 = [collapsedCategories(TableRowGroup2.TableRowGroup, obj8), , , , , , ];
      if (!canChangeNick) {
        canChangeNick = currentUser.id === user.id;
      }
      if (canChangeNick) {
        const obj11 = { label: null, value: null, placeholder: null, onChange: null, onBlur: null, maxLength: 32, errorMessage: null };
        const intl3 = util.intl;
        obj11.label = intl3.string(util.t["621LJD"]);
        if (str == null) {
          str = "";
        }
        obj11.value = str;
        const intl4 = util.intl;
        obj11.placeholder = intl4.string(util.t.h7UKXj);
        ({ handleChangeNickname: obj16.onChange, handleSaveNickname: obj16.onBlur } = self);
        obj11.errorMessage = tmp3;
        canChangeNick = collapsedCategories(TextInput.TextInput, obj11);
      }
      items2[1] = canChangeNick;
      if (canManageRoles) {
        const obj12 = { guild, sortedGuildRoles: tmp2, roles: null, currentUserId: null, isEditing: null, onToggleRole: null, onStartEditing: null };
        if (!isEditing) {
          editRoles = member.roles;
        }
        if (editRoles == null) {
          editRoles = [];
        }
        obj12.roles = editRoles;
        obj12.currentUserId = currentUser.id;
        obj12.isEditing = isEditing;
        ({ handleToggleRole: obj17.onToggleRole, handleStartEditingRoles: obj17.onStartEditing } = self);
        canManageRoles = collapsedCategories(RolesList, obj12);
      }
      items2[2] = canManageRoles;
      if (canDisableCommunication) {
        canDisableCommunication = null;
      }
      items2[3] = canDisableCommunication;
      if (canKick) {
        const obj13 = { hasIcons: false, children: null };
        const obj14 = { variant: "danger", label: null, onPress: null };
        const intl5 = util.intl;
        const obj15 = { user: UserUtilsDefault.getName(user) };
        obj14.label = intl5.formatToPlainString(util.t.yOiJHB, obj15);
        obj14.onPress = self.handleKick;
        obj13.children = collapsedCategories(TableRow2.TableRow, obj14);
        canKick = collapsedCategories(TableRowGroup2.TableRowGroup, obj13);
        const tmp20Result5 = UserUtilsDefault;
      }
      items2[4] = canKick;
      if (canBan) {
        const obj18 = { hasIcons: false, children: null };
        const obj19 = { variant: "danger", label: null, onPress: null };
        const intl6 = util.intl;
        const obj20 = { user: UserUtilsDefault.getName(user) };
        obj19.label = intl6.formatToPlainString(util.t.TuAZuW, obj20);
        obj19.onPress = self.handleBan;
        obj18.children = collapsedCategories(TableRow2.TableRow, obj19);
        canBan = collapsedCategories(TableRowGroup2.TableRowGroup, obj18);
        const tmp20Result6 = UserUtilsDefault;
      }
      items2[5] = canBan;
      items2[6] = tmp17Result3;
      obj7.children = items2;
      obj6.children = closure_1_19(Stack_Stack.Stack, obj7);
      return collapsedCategories(Form.Form, obj6);
    } else {
      const result = CommunicationDisabledUtils.isMemberCommunicationDisabled(member);
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const obj21 = { hasIcons: false, children: null };
      const TableRow = TableRow2.TableRow;
      let obj22 = { variant: "danger", label: null, onPress: null };
      const intl = util.intl;
      const formatToPlainString = intl.formatToPlainString;
      let handleClearCommunicationDisabled = util.t;
      if (result) {
        const obj23 = { user: UserUtilsDefault.getName(user) };
        obj22.label = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj23);
        handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
        obj22.onPress = handleClearCommunicationDisabled;
        obj22 = collapsedCategories(TableRow, obj22);
        obj21.children = obj22;
        let tmp17Result4 = collapsedCategories(TableRowGroup, obj21);
        const tmp20Result7 = UserUtilsDefault;
      } else {
        const obj24 = { user: UserUtilsDefault.getName(user) };
        obj22[1] = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj24);
        obj22[2] = self.handleSetCommunicationDisabled;
        obj21.children = collapsedCategories(TableRow, obj22);
        tmp17Result4 = collapsedCategories(TableRowGroup, obj21);
        const tmp20Result8 = UserUtilsDefault;
      }
      const tmp18Result = CommunicationDisabledUtils;
    }
  }
};
GuildSettingsModalMemberEdit.contextType = fn(4787).ThemeContext;
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalMemberEditScene(guildId) {
  const cResult = guildId(stateFromStores[37]).c(34);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  ({ onClose, contentContainerStyle } = guildId);
  let obj = guildId(stateFromStores[37]);
  const navigation = guildId(stateFromStores[38]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = guildId(stateFromStores[38]);
  stateFromStores = guildId(stateFromStores[39]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildRoleStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function k() {
      return GuildRoleStore.getSortedRoles(guildId);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = guildId(stateFromStores[39]);
  const stateFromStores1 = guildId(stateFromStores[39]).useStateFromStores(tmp9, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    cResult[6] = items2;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== userId) {
    class P {
      constructor() {
        currentUser = closure_13.getCurrentUser();
        tmp2 = closure_1(closure_3[40])(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
        obj = { user: closure_13.getUser(userId), currentUser };
        return obj;
      }
    }
    cResult[7] = userId;
    cResult[8] = P;
  } else {
    class P {
      constructor() {
        currentUser = closure_13.getCurrentUser();
        tmp2 = closure_1(closure_3[40])(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
        obj = { user: closure_13.getUser(userId), currentUser };
        return obj;
      }
    }
  }
  const tmpResult3 = guildId(stateFromStores[39]);
  const stateFromStoresObject = guildId(stateFromStores[39]).useStateFromStoresObject(tmp13, P);
  const user = stateFromStoresObject.user;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        obj = userId(closure_3[32]);
        startEditingNicknameResult = obj.startEditingNickname();
        return () => {
          userId(stateFromStores[32]).stopEditingRoles();
        };
      }
    }
    const items3 = [];
    cResult[9] = D;
    cResult[10] = items3;
    let tmp18 = items3;
  } else {
    class D {
      constructor() {
        obj = userId(closure_3[32]);
        startEditingNicknameResult = obj.startEditingNickname();
        return () => {
          userId(stateFromStores[32]).stopEditingRoles();
        };
      }
    }
    tmp18 = cResult[10];
  }
  const effect = user.useEffect(D, tmp18);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        obj = userId(closure_3[32]);
        startEditingNicknameResult = obj.startEditingNickname();
        return () => {
          userId(stateFromStores[32]).stopEditingRoles();
        };
      }
    }
    const items4 = [GuildSettingsModalMembersStore, GuildMemberStore, PermissionStore, UserStore, GuildStore];
    cResult[11] = items4;
  } else {
    class D {
      constructor() {
        obj = userId(closure_3[32]);
        startEditingNicknameResult = obj.startEditingNickname();
        return () => {
          userId(stateFromStores[32]).stopEditingRoles();
        };
      }
    }
  }
  if (cResult[12] === stateFromStores) {
    class D {
      constructor() {
        obj = userId(closure_3[32]);
        startEditingNicknameResult = obj.startEditingNickname();
        return () => {
          userId(stateFromStores[32]).stopEditingRoles();
        };
      }
    }
  }
  class A {
    constructor() {
      obj = { member: closure_9.getMember(guildId, userId), nicknameError: closure_14.nicknameError, editRoles: closure_14.roles, isEditing: closure_14.isEditing, submitting: closure_14.isSubmitting, canChangeNick: null, canManageRoles: null, canKick: null, canBan: null, canDisableCommunication: null };
      tmp = closure_3;
      canManageUserResult = null != closure_3;
      if (canManageUserResult) {
        tmp3 = user;
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        tmp4 = closure_12;
        tmp5 = Permissions;
        tmp6 = user;
        canManageUserResult = closure_12.canManageUser(Permissions.MANAGE_NICKNAMES, user, tmp);
      }
      obj.canChangeNick = canManageUserResult;
      obj2 = closure_12;
      tmp7 = Permissions;
      obj.canManageRoles = closure_12.can(Permissions.MANAGE_ROLES, tmp);
      canManageUserResult1 = null != tmp;
      if (canManageUserResult1) {
        tmp9 = user;
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        tmp10 = user;
        canManageUserResult1 = obj2.canManageUser(tmp7.KICK_MEMBERS, user, tmp);
      }
      obj.canKick = canManageUserResult1;
      canManageUserResult2 = null != tmp;
      if (canManageUserResult2) {
        tmp12 = user;
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        tmp13 = user;
        canManageUserResult2 = obj2.canManageUser(tmp7.BAN_MEMBERS, user, tmp);
      }
      obj.canBan = canManageUserResult2;
      obj3 = closure_0(closure_3[41]);
      id = undefined;
      if (tmp != null) {
        id = tmp.id;
      }
      id1 = undefined;
      if (user != null) {
        id1 = user.id;
      }
      items = [, , ];
      items[0] = closure_13;
      items[1] = closure_11;
      items[2] = obj2;
      obj.canDisableCommunication = obj3.canToggleCommunicationDisableOnUser(id, id1, items);
      return obj;
    }
  }
  cResult[12] = stateFromStores;
  cResult[13] = guildId;
  cResult[14] = user;
  cResult[15] = userId;
  cResult[16] = A;
  const tmpResult4 = guildId(stateFromStores[39]);
}) : (function GuildSettingsModalMemberEditScene(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  let stateFromStores;
  ({ onClose, contentContainerStyle } = guildId);
  const navigation = guildId(stateFromStores[38]).useNavigation();
  let obj = guildId(stateFromStores[38]);
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let items = [GuildStore];
  stateFromStores = guildId(stateFromStores[39]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = guildId(stateFromStores[39]);
  const items1 = [GuildRoleStore];
  const stateFromStores1 = guildId(stateFromStores[39]).useStateFromStores(items1, () => GuildRoleStore.getSortedRoles(guildId));
  const obj3 = guildId(stateFromStores[39]);
  const items2 = [UserStore];
  const stateFromStoresObject = guildId(stateFromStores[39]).useStateFromStoresObject(items2, () => {
    const currentUser = UserStore.getCurrentUser();
    _modDef38(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
    return { user: UserStore.getUser(userId), currentUser };
  });
  const user = stateFromStoresObject.user;
  let currentUser = stateFromStoresObject.currentUser;
  const effect = user.useEffect(() => {
    userId(stateFromStores[32]).startEditingNickname();
    return () => {
      userId(stateFromStores[32]).stopEditingRoles();
    };
  }, []);
  const obj4 = guildId(stateFromStores[39]);
  const items3 = [GuildSettingsModalMembersStore, GuildMemberStore, PermissionStore, UserStore, GuildStore];
  const stateFromStoresObject1 = guildId(stateFromStores[39]).useStateFromStoresObject(items3, () => {
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
  const obj5 = guildId(stateFromStores[39]);
  const items4 = [userId];
  const subscribeGuildMembers = guildId(stateFromStores[42]).useSubscribeGuildMembers({ [guildId]: items4 }, "GuildSettingsModalMemberEdit");
  [][0] = navigation;
  let tmp11 = null;
  if (null != currentUser) {
    tmp11 = null;
    if (null != stateFromStores) {
      tmp11 = null;
      if (null != user) {
        const obj7 = { children: null };
        const obj8 = {};
        const merged = Object.assign(stateFromStoresObject1);
        obj8.onClose = onClose;
        obj8.handleSuccessfulRemoval = tmp10;
        obj8.guild = stateFromStores;
        obj8.sortedGuildRoles = stateFromStores1;
        obj8.currentUser = currentUser;
        obj8.user = user;
        obj8.navigation = navigation;
        obj8.contentContainerStyle = contentContainerStyle;
        const items5 = [closure_18(GuildSettingsModalMemberEdit, obj8), closure_18(tmp(tmp2[43]).NavScrim, {})];
        obj7.children = items5;
        tmp11 = closure_19(closure_20, obj7);
      }
    }
  }
  return tmp11;
});
let closure_24 = tmp6;
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MemberModalEdit(guildId) {
  const cResult = require("c").c(9);
  ({ userId, onClose, onRemove } = guildId);
  const tmp4 = onClose(6174)(guildId.guildId);
  if (cResult[0] === tmp4) {
    if (cResult[1] === onClose) {
      if (cResult[2] === onRemove) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== userId) {
        const obj2 = { name: constants3.MEMBER_EDIT, params: null };
        const obj3 = { userId };
        obj2.params = obj3;
        const items = [obj2];
        cResult[4] = userId;
        cResult[5] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp6) {
          let tmp8 = cResult[8];
        }
        return tmp8;
      }
      const obj4 = { screens: tmp5, initialRouteName: constants3.MEMBER_EDIT, initialRouteStack: tmp6 };
      const tmp11 = closure_18(tmp(6679).Navigator, obj4);
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
  }
  _require = tmp4;
  const obj5 = { [closure_17.MEMBER_EDIT]: obj6, [closure_17.MEMBER_KICK]: obj7, [closure_17.MEMBER_BAN]: obj8 };
  cResult[0] = tmp4;
  cResult[1] = onClose;
  cResult[2] = onRemove;
  cResult[3] = obj5;
  tmp5 = obj5;
  const obj = require("c");
  obj6 = {
    render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.onClose = onClose;
      obj.guildId = guildId;
      return closure_2_18(closure_2_24, obj);
    }
  };
  obj7 = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.guildId = guildId;
      obj.onKick = onKick;
      return closure_2_18(onRemove(11458), obj);
    }
  };
  obj8 = {
    headerTitle() {
      return null;
    },
    render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.guildId = guildId;
      obj.onBan = onBan;
      return closure_2_18(onRemove(11460), obj);
    }
  };
  tmp = _require;
}) : (function MemberModalEdit(onClose) {
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  ({ guildId, userId } = onClose);
  const tmp = onRemove(6174)(guildId);
  closure_2 = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = noop.useMemo(() => {
    const guildId = closure_2;
    closure_2 = onRemove;
    return {
      [closure_2_17.MEMBER_EDIT]: {
        render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onClose = onClose;
          obj.guildId = guildId;
          return closure_2_18(closure_2_24, obj);
        }
      },
      [closure_2_17.MEMBER_KICK]: {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.onKick = onKick;
          return closure_2_18(onRemove(11458), obj);
        }
      },
      [closure_2_17.MEMBER_BAN]: {
        headerTitle() {
          return null;
        },
        render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          obj.onBan = onBan;
          return closure_2_18(onRemove(11460), obj);
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants3.MEMBER_EDIT, initialRouteStack: null };
  const items1 = [{ name: constants3.MEMBER_EDIT, params: { userId } }];
  obj.initialRouteStack = items1;
  return closure_18(onClose(6679).Navigator, obj);
});
export const GuildSettingsModalMemberEditScene = tmp6;