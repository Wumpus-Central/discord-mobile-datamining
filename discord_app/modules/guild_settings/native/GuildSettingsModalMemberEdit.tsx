import { Text } from "../../../design/components/Text/native/Text.tsx";
import { nameFromUser } from "../../../utils/UserUtils.tsx";
// discord_app/modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx
import importAllResult from "Text";
import get_ActivityIndicator from "TableCheckboxRow";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import GuildNSFWContentLevel from "GuildNSFWContentLevel";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleStopEditingRoles from "handleStopEditingRoles";
import ME from "ME";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let error;
let metroImportAll;
let require = arg1;
class GuildSettingsModalMemberEditScene {
  constructor(arg0) {
    guildId = global.guildId;
    userId = global.userId;
    c2 = undefined;
    c3 = undefined;
    user = undefined;
    ({ onClose, contentContainerStyle } = global);
    tmp = guildId;
    tmp2 = c3;
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    c2 = navigation;
    obj2 = require("initialize");
    items = [];
    items[0] = isEveryoneRole;
    stateFromStores = obj2.useStateFromStores(items, () => outer1_12.getGuild(guildId));
    c3 = stateFromStores;
    obj3 = require("initialize");
    items1 = [];
    items1[0] = isEveryoneRole;
    stateFromStores1 = obj3.useStateFromStores(items1, () => outer1_11.getSortedRoles(guildId));
    obj4 = require("initialize");
    items2 = [];
    items2[0] = View;
    stateFromStores2 = obj4.useStateFromStores(items2, () => roleStyle.roleStyle);
    obj5 = require("initialize");
    items3 = [];
    items3[0] = isEveryoneRole;
    stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
      const currentUser = outer1_14.getCurrentUser();
      userId(stateFromStores[38])(null != currentUser, "GuildSettingsModalMemberEditScene: current user cannot be undefined");
      return { user: outer1_14.getUser(userId), currentUser };
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
    items4[0] = isEveryoneRole;
    items4[1] = isEveryoneRole;
    items4[2] = isEveryoneRole;
    items4[3] = isEveryoneRole;
    items4[4] = isEveryoneRole;
    stateFromStoresObject1 = obj6.useStateFromStoresObject(items4, () => {
      const obj = { member: outer1_10.getMember(guildId, userId), nicknameError: outer1_15.nicknameError, editRoles: outer1_15.roles, isEditing: outer1_15.isEditing, submitting: outer1_15.isSubmitting, canChangeNick: null, canManageRoles: null, canKick: null, canBan: null, canDisableCommunication: null };
      let canManageUserResult = null != stateFromStores;
      if (canManageUserResult) {
        canManageUserResult = null != user;
      }
      if (canManageUserResult) {
        canManageUserResult = outer1_13.canManageUser(outer1_16.MANAGE_NICKNAMES, user, tmp);
      }
      obj[5] = canManageUserResult;
      obj[6] = outer1_13.can(outer1_16.MANAGE_ROLES, stateFromStores);
      let canManageUserResult1 = null != tmp;
      if (canManageUserResult1) {
        canManageUserResult1 = null != user;
      }
      if (canManageUserResult1) {
        canManageUserResult1 = obj2.canManageUser(tmp7.KICK_MEMBERS, user, tmp);
      }
      obj[7] = canManageUserResult1;
      let canManageUserResult2 = null != tmp;
      if (canManageUserResult2) {
        canManageUserResult2 = null != user;
      }
      if (canManageUserResult2) {
        canManageUserResult2 = obj2.canManageUser(tmp7.BAN_MEMBERS, user, tmp);
      }
      obj[8] = canManageUserResult2;
      let id;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      let id1;
      if (user != null) {
        id1 = user.id;
      }
      const items = [outer1_14, outer1_12, outer1_13];
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
({ isGuildOwner: error, isGuildOwnerWithRequiredMfaLevel: metroImportAll } = GuildNSFWContentLevel);
({ Permissions: closure_16, GuildFeatures: closure_17, GuildSettingsSections: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
createCacheKey = { form: { flex: 1 }, formContent: { paddingTop: 16 }, stackPadding: null, userInfo: null, avatar: null, rowLabel: null, ctaButton: null, actionButtonLeft: null, actionButtonRight: null, actionButtonContainer: null };
createCacheKey = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 63 };
createCacheKey[4] = { width: 40, height: 40 };
createCacheKey[5] = { flexDirection: "row" };
createCacheKey[6] = { marginTop: 8, marginBottom: 8 };
createCacheKey[7] = { marginRight: 0, marginLeft: 0, paddingRight: 0, paddingLeft: 16 };
createCacheKey[8] = { marginRight: 0, marginLeft: 0, paddingRight: 16, paddingLeft: 0 };
createCacheKey[9] = { flexBasis: "auto" };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
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
  let currentUserId;
  let importAll;
  let importDefault;
  let sortedGuildRoles;
  const props = this.props;
  const guild = props.guild;
  ({ sortedGuildRoles, roles: importDefault, roleStyle: importAll, currentUserId } = props);
  const onToggleRole = props.onToggleRole;
  if (props.isEditing) {
    const highestRole = importAll(currentUserId[15]).getHighestRole(guild, currentUserId);
    let obj2 = importAll(currentUserId[15]);
    const found = importDefault(currentUserId[16])(sortedGuildRoles).filter((arg0) => !callback(arg0));
    const found1 = found.filter((managed) => !managed.managed);
    const found2 = found1.filter((arg0) => outer1_2(currentUserId[15]).isRoleHigher(guild, currentUserId, closure_5, arg0));
    const arr4 = importDefault(currentUserId[16])(sortedGuildRoles);
    let valueResult = found2.map((children) => {
      let closure_0 = children;
      const tmp = -1 !== closure_1.indexOf(children.id);
      closure_1 = tmp;
      let obj = { checked: tmp, label: null, onPress: null };
      obj = { style: outer1_23.labelContainer, children: null };
      let tmp2Result = "dot" === closure_2;
      if (tmp2Result) {
        tmp2Result = null != children.colorString;
      }
      if (tmp2Result) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj3[0], colorStrings: obj3[1] } = children);
        obj[2] = outer1_23.roleDot;
        tmp2Result = tmp2(tmp3(tmp4[18]).RoleDot, obj);
      }
      const items = [tmp2Result, ];
      let tmp11;
      if (null != children.colorString) {
        if ("username" === closure_2) {
          const obj1 = { color: null };
          obj1[0] = children.colorString;
          tmp11 = obj1;
        }
      }
      items[1] = outer1_19(guild(currentUserId[19]).Text, { variant: "text-md/semibold", style: tmp11, children: children.name });
      obj[1] = items;
      obj[1] = outer1_20(closure_5, obj);
      obj[2] = function onPress() {
        return outer1_4(id.id, !closure_1);
      };
      return outer1_19(guild(currentUserId[17]).TableCheckboxRow, obj, children.id);
    }).value();
    let tmp3 = currentUserId;
    const iter2 = found2.map((children) => {
      let closure_0 = children;
      const tmp = -1 !== closure_1.indexOf(children.id);
      closure_1 = tmp;
      let obj = { checked: tmp, label: null, onPress: null };
      obj = { style: outer1_23.labelContainer, children: null };
      let tmp2Result = "dot" === closure_2;
      if (tmp2Result) {
        tmp2Result = null != children.colorString;
      }
      if (tmp2Result) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj3[0], colorStrings: obj3[1] } = children);
        obj[2] = outer1_23.roleDot;
        tmp2Result = tmp2(tmp3(tmp4[18]).RoleDot, obj);
      }
      const items = [tmp2Result, ];
      let tmp11;
      if (null != children.colorString) {
        if ("username" === closure_2) {
          const obj1 = { color: null };
          obj1[0] = children.colorString;
          tmp11 = obj1;
        }
      }
      items[1] = outer1_19(guild(currentUserId[19]).Text, { variant: "text-md/semibold", style: tmp11, children: children.name });
      obj[1] = items;
      obj[1] = outer1_20(closure_5, obj);
      obj[2] = function onPress() {
        return outer1_4(id.id, !closure_1);
      };
      return outer1_19(guild(currentUserId[17]).TableCheckboxRow, obj, children.id);
    });
  } else {
    tmp3 = currentUserId;
    let arr = importDefault(currentUserId[16])(sortedGuildRoles);
    const found3 = arr.filter((id) => closure_1.includes(id.id));
    valueResult = found3.map((children) => {
      let obj = { style: outer1_23.labelContainer, children: null };
      let tmpResult = "dot" === closure_2;
      if (tmpResult) {
        tmpResult = null != children.colorString;
      }
      if (tmpResult) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj2[0], colorStrings: obj2[1] } = children);
        obj[2] = outer1_23.roleDot;
        tmpResult = tmp(tmp2(tmp3[18]).RoleDot, obj);
      }
      const items = [tmpResult, ];
      let tmp10;
      if (null != children.colorString) {
        if ("username" === closure_2) {
          obj = { color: null };
          obj[0] = children.colorString;
          tmp10 = obj;
        }
      }
      const obj1 = { label: null };
      const obj2 = { variant: "text-md/semibold", style: tmp10, children: children.name };
      items[1] = outer1_19(guild(currentUserId[19]).Text, obj2);
      obj[1] = items;
      obj1[0] = outer1_20(closure_5, obj);
      return outer1_19(guild(currentUserId[20]).TableRow, obj1, children.id);
    }).value();
    let obj = { label: null, onPress: null };
    const intl = guild(currentUserId[21]).intl;
    obj[0] = intl.string(guild(currentUserId[21]).t["+riKdA"]);
    obj[1] = tmp;
    arr = valueResult.push(callback3(guild(currentUserId[20]).TableRow, obj, "addition"));
    const iter = found3.map((children) => {
      let obj = { style: outer1_23.labelContainer, children: null };
      let tmpResult = "dot" === closure_2;
      if (tmpResult) {
        tmpResult = null != children.colorString;
      }
      if (tmpResult) {
        obj = { color: null, colors: null, containerStyles: null };
        ({ colorString: obj2[0], colorStrings: obj2[1] } = children);
        obj[2] = outer1_23.roleDot;
        tmpResult = tmp(tmp2(tmp3[18]).RoleDot, obj);
      }
      const items = [tmpResult, ];
      let tmp10;
      if (null != children.colorString) {
        if ("username" === closure_2) {
          obj = { color: null };
          obj[0] = children.colorString;
          tmp10 = obj;
        }
      }
      const obj1 = { label: null };
      const obj2 = { variant: "text-md/semibold", style: tmp10, children: children.name };
      items[1] = outer1_19(guild(currentUserId[19]).Text, obj2);
      obj[1] = items;
      obj1[0] = outer1_20(closure_5, obj);
      return outer1_19(guild(currentUserId[20]).TableRow, obj1, children.id);
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
        if (tmp.props.currentUser.id !== tmp.props.user.id) {
          id = tmp.props.user.id;
        }
        outer1_1(outer1_3[32]).changeNickname(tmp.props.guild.id, id, tmp.state.nick);
        const obj = outer1_1(outer1_3[32]);
      }
    };
    applyArgumentsResult.handleStartEditingRoles = function handleStartEditingRoles() {
      outer1_1(outer1_3[32]).startEditingRoles(applyArgumentsResult.props.guild.id, applyArgumentsResult.props.user.id);
    };
    applyArgumentsResult.handleToggleRole = function handleToggleRole(roleId, state) {
      callback(11150).toggleRole(roleId, state);
    };
    applyArgumentsResult.handleSetCommunicationDisabled = function handleSetCommunicationDisabled() {
      let guild;
      let user;
      ({ guild, user } = applyArgumentsResult.props);
      let obj = applyArgumentsResult(outer1_3[33]);
      obj = { guildId: guild.id, userId: user.id };
      const result = obj.openDisableCommunication(obj);
    };
    applyArgumentsResult.handleClearCommunicationDisabled = function handleClearCommunicationDisabled() {
      let guild;
      let user;
      ({ guild, user } = applyArgumentsResult.props);
      let obj = applyArgumentsResult(outer1_3[33]);
      obj = { guildId: guild.id, userId: user.id };
      const result = obj.openEnableCommunication(obj);
    };
    applyArgumentsResult.handleKick = function handleKick() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(outer1_18.MEMBER_KICK, { userId: props.user.id, onKick: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleBan = function handleBan() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      navigation.push(outer1_18.MEMBER_BAN, { userId: props.user.id, onBan: props.handleSuccessfulRemoval });
    };
    applyArgumentsResult.handleTransferOwnership = function handleTransferOwnership() {
      const props = applyArgumentsResult.props;
      const guild = props.guild;
      const features = guild.features;
      if (!features.has(outer1_17.VERIFIED)) {
        const features2 = guild.features;
        if (!features2.has(outer1_17.PARTNERED)) {
          outer1_1(outer1_3[35]).open(guild, props.user);
          const obj = outer1_1(outer1_3[35]);
        }
      }
      const result = applyArgumentsResult(outer1_3[34]).transferOwnershipProtected();
    };
    applyArgumentsResult.handleSaveMemberRoles = function handleSaveMemberRoles() {
      if (null != applyArgumentsResult.props.editRoles) {
        outer1_1(outer1_3[32]).updateMemberRoles(tmp.props.guild.id, tmp.props.user.id, tmp.props.editRoles);
        const obj = outer1_1(outer1_3[32]);
      }
    };
    applyArgumentsResult.handleCancelEditMemberRoles = function handleCancelEditMemberRoles() {
      callback(11150).stopEditingRoles();
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
  let isEditing;
  let navigation;
  let onClose;
  const self = this;
  ({ submitting, isEditing, navigation, onClose } = this.props);
  if (!tmp) {
    if (submitting) {
      let fn = () => null;
    } else if (isEditing) {
      fn = () => {
        const obj = { text: null, onPress: null };
        const intl = self(outer1_3[21]).intl;
        obj[0] = intl.string(self(outer1_3[21]).t["ETE/oC"]);
        obj[1] = self.handleCancelEditMemberRoles;
        return outer1_19(self(outer1_3[24]).HeaderActionButton, obj);
      };
    } else if (null != onClose) {
      let setOptionsResult = self(5238);
      fn = setOptionsResult.getHeaderCloseButton(onClose);
    }
    setOptionsResult = { headerLeft: null, headerRight: null, headerTitle: null };
    setOptionsResult[0] = fn;
    if (submitting) {
      let fn2 = () => callback(self(table[25]).HeaderSubmittingIndicator, {});
    } else if (isEditing) {
      fn2 = () => {
        const obj = { text: null, onPress: null };
        const intl = self(outer1_3[21]).intl;
        obj[0] = intl.string(self(outer1_3[21]).t["R3BPH+"]);
        obj[1] = self.handleSaveMemberRoles;
        return outer1_19(self(outer1_3[24]).HeaderActionButton, obj);
      };
    }
    setOptionsResult[1] = fn2;
    setOptionsResult[2] = function headerTitle() {
      let obj = { title: null };
      const intl = self(outer1_3[21]).intl;
      obj = { user: null };
      obj[0] = outer1_1(outer1_3[26]).getName(self.props.user);
      obj[0] = intl.formatToPlainString(self(outer1_3[21]).t.v7odxj, obj);
      return outer1_19(self(outer1_3[25]).NavigatorHeader, obj);
    };
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["render"] = function render() {
  let canBan;
  let canChangeNick;
  let canDisableCommunication;
  let canKick;
  let canManageRoles;
  let currentUser;
  let editRoles;
  let guild;
  let isEditing;
  let member;
  let user;
  const self = this;
  const tmp = createCacheKey(this.context);
  let str = this.state.nick;
  ({ user, guild, member, editRoles, currentUser, isEditing, canChangeNick, canManageRoles, canKick, canBan, canDisableCommunication } = this.props);
  if (null == member) {
    return null;
  } else {
    let obj = { style: null, children: null };
    obj[0] = tmp.rowLabel;
    obj = { variant: "text-sm/medium", children: null };
    obj[1] = nameFromUser.getUserTag(user);
    const items = [callback3(Text /* Text */.Text, obj), ];
    let tmp18Result = null;
    if (user.bot) {
      obj = { verified: null };
      let tmp21Result = tmp21(9053);
      obj[0] = user.isVerifiedBot();
      tmp18Result = tmp18(tmp21Result, obj);
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
        const obj1 = { hasIcons: false, children: null };
        const obj2 = { variant: "danger", label: null, onPress: null };
        const intl2 = tmp19(1236).intl;
        obj2[1] = intl2.string(tmp19(1236).t.Z5s7PM);
        obj2[2] = self.handleTransferOwnership;
        obj1[1] = tmp18(tmp19(5315).TableRow, obj2);
        tmp18Result = tmp18(tmp19(5649).TableRowGroup, obj1);
      }
      const obj3 = { style: null, contentContainerStyle: null, children: null };
      obj3[0] = tmp.form;
      const items1 = [tmp.formContent, self.props.contentContainerStyle];
      obj3[1] = items1;
      const obj4 = { style: null, spacing: null, children: null };
      obj4[0] = tmp.stackPadding;
      obj4[1] = tmp21(712).space.PX_24;
      const obj5 = { hasIcons: true, children: null };
      const obj6 = { icon: null, label: null };
      const obj7 = { style: null, user: null, guildId: null };
      obj7[0] = tmp.avatar;
      obj7[1] = user;
      obj7[2] = guild.id;
      obj6[0] = tmp18(tmp19(1297).Avatar, obj7);
      obj6[1] = tmp7;
      obj5[1] = tmp18(tmp19(5315).TableRow, obj6);
      const items2 = [tmp18(tmp19(5649).TableRowGroup, obj5), , , , , , ];
      if (!canChangeNick) {
        canChangeNick = currentUser.id === user.id;
      }
      if (canChangeNick) {
        const obj8 = { label: null, value: null, placeholder: null, onChange: null, onBlur: null, maxLength: 32, errorMessage: null };
        const intl3 = tmp19(1236).intl;
        obj8[0] = intl3.string(tmp19(1236).t["621LJD"]);
        if (str == null) {
          str = "";
        }
        obj8[1] = str;
        const intl4 = tmp19(1236).intl;
        obj8[2] = intl4.string(tmp19(1236).t.h7UKXj);
        ({ handleChangeNickname: obj16[3], handleSaveNickname: obj16[4] } = self);
        obj8[6] = tmp3;
        canChangeNick = tmp18(tmp19(7713).TextInput, obj8);
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
        canManageRoles = tmp18(RolesList, obj9);
        const tmp15 = RolesList;
      }
      items2[2] = canManageRoles;
      if (canDisableCommunication) {
        canDisableCommunication = null;
      }
      items2[3] = canDisableCommunication;
      if (canKick) {
        const obj10 = { hasIcons: false, children: null };
        const obj11 = { variant: "danger", label: null, onPress: null };
        const intl5 = tmp19(1236).intl;
        const obj12 = { user: null };
        tmp21Result = tmp21(4124);
        obj12[0] = tmp21Result.getName(user);
        obj11[1] = intl5.formatToPlainString(tmp19(1236).t.yOiJHB, obj12);
        obj11[2] = self.handleKick;
        obj10[1] = tmp18(tmp19(5315).TableRow, obj11);
        canKick = tmp18(tmp19(5649).TableRowGroup, obj10);
      }
      items2[4] = canKick;
      if (canBan) {
        const obj13 = { hasIcons: false, children: null };
        const obj14 = { variant: "danger", label: null, onPress: null };
        const intl6 = tmp19(1236).intl;
        const obj15 = { user: null };
        obj15[0] = tmp21(4124).getName(user);
        obj14[1] = intl6.formatToPlainString(tmp19(1236).t.TuAZuW, obj15);
        obj14[2] = self.handleBan;
        obj13[1] = tmp18(tmp19(5315).TableRow, obj14);
        canBan = tmp18(tmp19(5649).TableRowGroup, obj13);
        const tmp21Result1 = tmp21(4124);
      }
      items2[5] = canBan;
      items2[6] = tmp18Result;
      obj4[2] = items2;
      obj3[2] = tmp16(tmp19(4693).Stack, obj4);
      return tmp18(tmp19(7777).Form, obj3);
    } else {
      const result = tmp19(3902).isMemberCommunicationDisabled(member);
      const TableRowGroup = tmp19(5649).TableRowGroup;
      const obj16 = { hasIcons: false, children: null };
      const TableRow = tmp19(5315).TableRow;
      let obj17 = { variant: "danger", label: null, onPress: null };
      const intl = tmp19(1236).intl;
      const formatToPlainString = intl.formatToPlainString;
      let handleClearCommunicationDisabled = tmp19(1236).t;
      if (result) {
        const obj18 = { user: null };
        obj18[0] = tmp21(4124).getName(user);
        obj17[1] = formatToPlainString(handleClearCommunicationDisabled.RuL6o7, obj18);
        handleClearCommunicationDisabled = self.handleClearCommunicationDisabled;
        obj17[2] = handleClearCommunicationDisabled;
        obj17 = tmp18(TableRow, obj17);
        obj16[1] = obj17;
        let tmp18Result1 = tmp18(TableRowGroup, obj16);
        const tmp21Result2 = tmp21(4124);
      } else {
        const obj19 = { user: null };
        obj19[0] = tmp21(4124).getName(user);
        obj17[1] = formatToPlainString(handleClearCommunicationDisabled.FN7NIS, obj19);
        obj17[2] = self.handleSetCommunicationDisabled;
        obj16[1] = tmp18(TableRow, obj17);
        tmp18Result1 = tmp18(TableRowGroup, obj16);
        const tmp21Result3 = tmp21(4124);
      }
      const tmp19Result = tmp19(3902);
    }
    const obj28 = nameFromUser;
    tmp16 = closure_20;
  }
};
GuildSettingsModalMemberEdit.contextType = require("ManaContext").ThemeContext;
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx");

export default function MemberModalEdit(onClose) {
  let guildId;
  let userId;
  onClose = onClose.onClose;
  const onRemove = onClose.onRemove;
  let c2;
  ({ guildId, userId } = onClose);
  const tmp = onRemove(5598)(guildId);
  c2 = tmp;
  const items = [onClose, onRemove, tmp];
  const memo = importAllResult.useMemo(() => {
    let closure_0 = closure_2;
    let closure_1 = closure_0;
    closure_2 = closure_1;
    let obj = {
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onClose = closure_1;
        obj.guildId = closure_0;
        return outer1_19(outer1_26, obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = closure_0;
        obj.onKick = closure_2;
        return outer1_19(callback(outer1_3[42]), obj);
      }
    };
    obj = {
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.guildId = closure_0;
        obj.onBan = closure_2;
        return outer1_19(callback(outer1_3[43]), obj);
      }
    };
    return { [outer1_18.MEMBER_EDIT]: obj, [outer1_18.MEMBER_KICK]: obj, [outer1_18.MEMBER_BAN]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.MEMBER_EDIT, initialRouteStack: items1 };
  obj = { name: constants.MEMBER_EDIT, params: { userId } };
  items1 = [obj];
  return callback3(onClose(5665).Navigator, obj);
};
export { GuildSettingsModalMemberEditScene };