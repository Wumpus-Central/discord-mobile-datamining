// === Module 17034: ChannelSettingsPermissionsOverrides ===

// Module 17034 (ChannelSettingsPermissionsOverrides)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1490 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import PermissionUtils from "PermissionUtils" /* 4520 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelName from "useChannelName" /* 5049 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import useAppChannelApplication from "useAppChannelApplication" /* 6759 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11245 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 17035 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, dependencyMap, description, navigation, permissions;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const isGuildOwner = GuildRecord.isGuildOwner;
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = Constants);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerContent: obj3, section: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_22 = createStyles(obj);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  let HelpMessage;
  let id;
  let intl;
  let items5;
  let items6;
  let obj11;
  let obj12;
  let section;
  let tmp12Result;
  let tmp2Result;
  ({ channelId: require, id } = fromCreate);
  fromCreate = fromCreate.fromCreate;
  let closure_7;
  let closure_8;
  let closure_9;
  let first;
  let type = fromCreate.type;
  let tmp = closure_22();
  dependencyMap = tmp;
  let tmp3 = dependencyMap;
  let obj = useNavigation;
  navigation = obj.useNavigation();
  const bottom = id(1618)().bottom;
  let obj2 = get_initialized;
  let items = [first];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj3 = useAppChannelApplication;
  const appChannelApplication = obj3.useAppChannelApplication(stateFromStores);
  let obj4 = AppChannelPermissionUtils;
  const appChannelBotUserId = obj4.useAppChannelBotUserId(stateFromStores);
  let tmp9 = null;
  if (appChannelBotUserId === id) {
    tmp9 = appChannelApplication;
  }
  const useCallback = appChannelBotUserId.useCallback;
  let closure_0 = stateFromStores(function*(arg0, arg1) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj18;
    let obj4;
    let obj5;
    let obj7;
    closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let obj10;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            obj10 = undefined;
            let name;
            let user2;
            id = undefined;
            let role2;
            closure_1 = tmp125;
            let tmp9 = c5.permissionOverwrites[closure_1];
            let everyoneOverwrite = tmp9;
            let tmp5 = null == tmp9;
            const tmp123 = closure_1;
            if (tmp5) {
              tmp5 = tmp125;
            }
            if (tmp5) {
              const obj2 = fromCreate(section[20]);
              everyoneOverwrite = obj2.makeEveryoneOverwrite(tmp123);
              tmp9 = everyoneOverwrite;
            }
            obj10 = { deny: obj4.remove(obj10.deny, closure_0), allow: obj5.remove(obj10.allow, closure_0) };
            const merged = Object.assign(tmp9);
            obj4 = fromCreate(section[21]);
            obj5 = fromCreate(section[21]);
            if (closure_1 === closure_0(section[20]).ALLOW) {
              const obj9 = fromCreate(section[21]);
              obj10.allow = obj9.add(obj10.allow, closure_0);
            } else if (closure_1 === closure_0(section[20]).DENY) {
              if (null != c5.guild_id) {
                if (closure_1 === c5.guild_id) {
                  c4 = 1;
                  c5 = 1;
                  const obj14 = { value: obj7.checkChattableChannelThresholdMetAfterChannelPermissionDeny(c5, closure_0), done: false };
                  obj7 = closure_0(section[22]);
                  return obj14;
                }
              }
            }
            const obj15 = {};
            obj15[obj10.id] = obj10;
            if (PermissionStore.can(closure_0, c5, obj15)) {
              const obj16 = id(section[23]);
              const result = obj16.updatePermissionOverwrite(c5.id, obj10);
            } else {
              if (PermissionStore.can(closure_0, c5)) {
                const tmp44 = closure_1;
                if (!tmp44) {
                  const obj11 = fromCreate(section[21]);
                  if (!obj11.has(everyoneOverwrite.allow, closure_0)) {
                    const obj12 = fromCreate(section[21]);
                    if (!obj12.has(everyoneOverwrite.deny, closure_0)) {
                      closure_1_7(closure_0, closure_0(section[20]).ALLOW);
                    }
                  }
                }
              }
              const type = everyoneOverwrite.type;
              if (closure_0(section[24]).PermissionOverwriteType.MEMBER === type) {
                user2 = user.getUser(everyoneOverwrite.id);
                if (null != user2) {
                  const obj13 = id(section[25]);
                  name = obj13.getName(user2);
                }
              } else if (closure_0(section[24]).PermissionOverwriteType.ROLE === type) {
                id = guild.getGuild(c5.guild_id);
                if (null != id) {
                  role2 = role.getRole(id.id, everyoneOverwrite.id);
                  if (null != role2) {
                    name = role2.name;
                  }
                }
              } else {
                const type2 = everyoneOverwrite.type;
              }
              const obj17 = {
                title: intl.string(closure_0(section[27]).t.vElC9b),
                body: intl2.format(closure_0(section[27]).t.yslqFM, obj18),
                cancelText: intl3.string(closure_0(section[27]).t["ETE/oC"]),
                confirmText: intl4.string(closure_0(section[27]).t.psXQHP),
                onConfirm() {
                            const openURL = closure_1_1(closure_1_3[28]).openURL;
                            closure_1_1(closure_1_3[28]);
                            const obj = closure_1_1(closure_1_3[29]);
                            openURL(obj.getArticleURL(constants.PERMISSIONS_TUTORIAL));
                          }
              };
              const show = id(section[26]).show;
              const tmp93 = id(section[26]);
              intl = closure_0(section[27]).intl;
              intl2 = closure_0(section[27]).intl;
              obj18 = { name };
              intl3 = closure_0(section[27]).intl;
              intl4 = closure_0(section[27]).intl;
              show(obj17);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj = { value, done: true };
          return obj;
        } else if (!value) {
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
        const obj6 = fromCreate(section[21]);
        obj10.deny = obj6.add(obj10.deny, closure_0);
      } catch (tmp117) {
        c5 = 3;
        throw tmp117;
      }
    }
  });
  const items1 = [stateFromStores, id];
  closure_7 = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [stateFromStores, id, appChannelBotUserId];
  closure_8 = appChannelBotUserId.useCallback((VIEW_CHANNEL) => {
    const guild = GuildStore.getGuild(stateFromStores.guild_id);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let stringResult;
        const canResult = isGuildOwner(guild, currentUser) || PermissionStore.can(constants.ADMINISTRATOR, guild) || PermissionStore.can(constants.MANAGE_ROLES, stateFromStores, undefined, undefined, true);
        if (stateFromStores.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = StageChannelPermissions.STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(VIEW_CHANNEL)) {
            const intl3 = intl5.intl;
            stringResult = intl3.string(intl5.t.bTS5lf);
          }
          return stringResult;
        }
        const obj2 = AppChannelPermissionUtils;
        if (obj2.isAppChannelFloorPermission(appChannelBotUserId, id, VIEW_CHANNEL)) {
          const intl2 = intl5.intl;
          stringResult = intl2.string(intl5.t.yXmgpP);
        } else {
          stringResult = VIEW_CHANNEL === constants.MANAGE_ROLES && !canResult;
          if (!stringResult) {
            stringResult = null != VIEW_CHANNEL && !PermissionStore.can(VIEW_CHANNEL, guild) && !canResult;
            const tmp19 = null != VIEW_CHANNEL && !PermissionStore.can(VIEW_CHANNEL, guild) && !canResult;
          }
          if (stringResult) {
            const intl = intl5.intl;
            stringResult = intl.string(intl5.t.nOtPMM);
          }
        }
      }
    }
    return false;
  }, items2);
  const items3 = [stateFromStores, id];
  closure_9 = appChannelBotUserId.useCallback((arg0) => {
    let ALLOW;
    let allow;
    const has = BigFlagUtilsAll.has;
    BigFlagUtilsAll;
    if (stateFromStores.permissionOverwrites[id] != null) {
      allow = tmp.allow;
    }
    if (has(allow, arg0)) {
      ALLOW = PermissionUtils.ALLOW;
    } else {
      let deny;
      const has2 = BigFlagUtilsAll.has;
      BigFlagUtilsAll;
      if (stateFromStores.permissionOverwrites[id] != null) {
        deny = tmp.deny;
      }
      const has2Result = has2(deny, arg0);
      const tmp10 = PermissionUtils;
      ALLOW = has2Result ? tmp10.DENY : tmp10.PASSTHROUGH;
    }
    return ALLOW;
  }, items3);
  let tmp10 = navigation(appChannelBotUserId.useState(() => {
    const guild_id = stateFromStores.guild_id;
    const obj = PermissionSpecUtilsDefault;
    return obj.generateChannelPermissionSpec(stateFromStores.guild_id, stateFromStores, id === guild_id);
  }), 2);
  first = tmp10[0];
  const items4 = [fromCreate, navigation];
  const effect = appChannelBotUserId.useEffect(() => {
    if (fromCreate) {
      let obj = {
        headerRight() {
            let intl;
            const obj = {
              onPress() {
                closure_1_4.pop();
              },
              label: intl.string(require("intl").t.i4jeWR)
            };
            const HeaderTextButton = require("HeaderShared").HeaderTextButton;
            intl = require("intl").intl;
            return closure_2_19(HeaderTextButton, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items4);
  let obj5 = { variant: "text-md/medium", color: "text-muted", children: tmp2Result.computeChannelName(stateFromStores, UserStore, RelationshipStore, true) };
  let Text = Text_Text.Text;
  tmp2Result = useChannelName;
  const tmp13 = closure_19(Text, obj5);
  if (type === constants.MEMBER) {
    let obj6 = { userId: id, guildId: stateFromStores.guild_id, start: true, end: true, trailing: tmp13 };
    tmp12Result = closure_19(id(10693), obj6);
  } else {
    let TableRow = TableRow2.TableRow;
    const role = GuildRoleStore.getRole(stateFromStores.guild_id, id);
    let str;
    if (role != null) {
      str = role.name;
    }
    if (str == null) {
      str = "";
    }
    let obj7 = { end: true, label: str, start: true, trailing: tmp13 };
    tmp12Result = closure_19(TableRow, obj7);
  }
  let obj8 = { style: tmp.container, contentContainerStyle: items5, children: items6 };
  items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + bottom }];
  let obj9 = { style: tmp.section, children: tmp12Result };
  let tmp19 = closure_7;
  items6 = [closure_19(closure_7, obj9), , ];
  let tmp12Result2 = null;
  const tmp18 = closure_8;
  if (null != tmp9) {
    let obj10 = { style: tmp.section, children: closure_19(HelpMessage, obj11) };
    obj11 = { messageType: native.HelpMessageTypes.INFO, children: intl.format(intl5.t["Xq++FA"], obj12) };
    HelpMessage = native.HelpMessage;
    intl = intl5.intl;
    obj12 = { appName: tmp9.name };
    tmp12Result2 = closure_19(tmp19, obj10);
  }
  items6[1] = tmp12Result2;
  items6[2] = first.map((permissions, index) => {
    let TableRowGroup;
    let obj2;
    permissions = permissions.permissions;
    let obj = { style: section.section, children: closure_19(TableRowGroup, obj2) };
    const title = permissions.title;
    let tmp3;
    TableRowGroup = TableRowGroup2.TableRowGroup;
    if (first.length > 1) {
      tmp3 = title;
    }
    obj2 = {
      title: tmp3,
      hasIcons: false,
      children: permissions.map((description, index) => {
        let flag;
        let obj2;
        let obj5;
        let title;
        let tmp11;
        ({ title, flag } = description);
        description = description.description;
        const tmp = closure_8(flag);
        const obj = { variant: "text-xs/medium", color: "text-subtle", children: obj2.renderDescription(description) };
        const Text = closure_1_0(section[33]).Text;
        obj2 = closure_1_0(section[39]);
        const items = [closure_1_19(Text, obj), ];
        let tmp5Result = null;
        if (false !== tmp) {
          tmp5Result = null;
          if ("" !== tmp) {
            const obj3 = { variant: "text-xs/medium", color: "text-feedback-critical", children: tmp };
            tmp5Result = closure_1_19(closure_1_0(section[33]).Text, obj3);
          }
        }
        items[1] = tmp5Result;
        const tmp3Result = closure_1_21(closure_1_20, { children: items });
        const TableRow = closure_1_0(section[36]).TableRow;
        const tmp6Result = closure_1_0(section[40]);
        const obj4 = { accessible: tmp6Result.isAndroid() || undefined, disabled: false !== tmp, label: title, subLabel: tmp3Result, trailing: closure_1_19(tmp11, obj5) };
        obj5 = {
          permissionTitle: title,
          value: closure_9(flag),
          disabled: false !== tmp,
          onValueChange(arg0) {
            closure_2_7(flag, arg0);
          }
        };
        tmp11 = id(section[41]);
        return closure_1_19(TableRow, obj4, "row-" + index);
      })
    };
    return closure_19(metroImportDefault, obj, "section-" + index);
  });
  return closure_21(tmp18, obj8);
};