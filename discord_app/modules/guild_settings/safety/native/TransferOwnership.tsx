// === Module 12100: TransferOwnership ===

// Module 12100 (TransferOwnership)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4752 */;
import GuildIcon from "GuildIcon" /* 5796 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const TransferOwnershipConstants = fn(12099);
({ TransferOwnershipModalScenes: c10, TransferOwnershipVerificationTypes: closure_11 } = TransferOwnershipConstants);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: null, arrow: null, avatarsWrapper: null, avatarFauxBorder: null, otherUserAvatar: null, aka: null, miniAvatar: null, miniGuildIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = { alignItems: "center", paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.arrow = { width: 78, height: 15, paddingVertical: 1, marginBottom: 2 };
obj2.avatarsWrapper = { flexDirection: "row", justifyContent: "flex-start", width: 160, height: 80, marginBottom: 30 };
let size = { position: "absolute", left: 71, top: -2, borderRadius: 44, width: 88, height: 88, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.avatarFauxBorder = size;
obj2.otherUserAvatar = { top: 4, left: 4 };
obj2.aka = { flex: 1 };
obj2.miniAvatar = { marginRight: 4, justifyContent: "center", alignContent: "center" };
obj2.miniGuildIcon = { paddingRight: 4, paddingLeft: 2, justifyContent: "center", alignContent: "center" };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnership.tsx");

export default function TransferOwnership(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  dependencyMap = undefined;
  let stateFromStores;
  _slicedToArray = undefined;
  let nickname;
  c7 = undefined;
  noop = async function _handleTransfer() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = tmp2;
            if (!mfaEnabled.mfaEnabled) {
              if (null != mfaEnabled.email) {
                v1 = 1;
                dependencyMap = 1;
                const obj6 = { value: v1(9854).sendTransferOwnershipPincode(user.id), done: false };
                return obj6;
              }
            }
            let MFA = null;
            if (mfaEnabled.mfaEnabled) {
              MFA = constants2.MFA;
            }
            const obj4 = v1(9854);
            v1(9854).transferOwnership(user.id, id.id, MFA).then(() => {
              v1(12097).close();
              const obj = v1(12097);
              v1(9854).close();
              const obj2 = v1(9854);
              const result = closure_1_0(4453).showTransferOwnershipSuccess();
            }, NOOP);
            dependencyMap = 3;
            const transferOwnershipResult = v1(9854).transferOwnership(user.id, id.id, MFA);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_2.push(constants.CONFIRM_EMAIL_CODE);
        }
        dependencyMap = 3;
        let obj = { value, done: true };
        return obj;
      } catch (tmp22) {
        dependencyMap = tmp;
        throw tmp22;
      }
    }
  };
  class GuildWithSmallIcon {
    constructor() {
      tmp4 = guild;
      tmp5 = null;
      tmp2 = jsxs;
      tmp3 = Fragment;
      if (null != guild.icon) {
        tmp6 = jsx;
        tmp7 = View;
        obj = { style: null, children: null };
        obj.style = tmp.miniGuildIcon;
        tmp8 = closure_1;
        tmp9 = closure_2;
        obj1 = { guild: null, size: null };
        obj1.guild = tmp4;
        tmp11 = closure_0;
        tmp10 = closure_1(closure_2[18]);
        obj1.size = closure_0(closure_2[18]).GuildIconSizes.XXSMALL;
        obj.children = jsx(tmp10, obj1);
        tmp5 = jsx(View, obj);
      }
      obj5 = { children: null };
      items = [, ];
      items[0] = tmp5;
      obj6 = { variant: "text-md/bold", children: tmp4.name };
      items[1] = jsx(closure_0(closure_2[19]).Text, obj6);
      obj5.children = items;
      return tmp2(tmp3, obj5);
    }
  }
  const token = guild(4457).useToken(toUser(576).modules.mobile.TABLE_ROW_PADDING);
  let tmp5 = closure_16();
  let obj = guild(4457);
  dependencyMap = guild(1484).useNavigation();
  let obj2 = guild(1484);
  let items = [UserStore];
  stateFromStores = guild(504).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    toUser(closure_2[13])(null != currentUser, "TransferOwnership: currentUser cannot be undefined");
    return currentUser;
  });
  let obj3 = guild(504);
  [tmp8, c4] = noop.useState(false);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  nickname = toUser(4908).getNickname(guild.id, undefined, toUser);
  const hasAvatarForGuildResult = toUser.hasAvatarForGuild(guild.id);
  c7 = hasAvatarForGuildResult;
  let obj5 = { style: tmp5.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  let obj6 = { style: null, children: null };
  let obj4 = toUser(4908);
  obj6.style = { paddingTop: toUser(576).space.PX_16, paddingHorizontal: token };
  const obj8 = { style: tmp5.header, children: null };
  const obj7 = { paddingTop: toUser(576).space.PX_16, paddingHorizontal: token };
  const items1 = [closure_13(c7, { source: toUser(12101), style: tmp5.arrow }), , , ];
  const obj10 = { style: tmp5.avatarsWrapper, children: null };
  const obj9 = { source: toUser(12101), style: tmp5.arrow };
  const items2 = [closure_13(guild(1177).Avatar, { user: stateFromStores, guildId: guild.id, size: guild(1177).AvatarSizes.XXLARGE }), ];
  const obj12 = { style: tmp5.avatarFauxBorder, children: null };
  const obj13 = { user: toUser, guildId: "r", size: guild(1177).AvatarSizes.XXLARGE, style: tmp5.otherUserAvatar };
  obj12.children = closure_13(guild(1177).Avatar, obj13);
  items2[1] = closure_13(nickname, obj12);
  obj10.children = items2;
  items1[1] = closure_15(nickname, obj10);
  items1[2] = closure_13(guild(4752).Text, { variant: "text-xs/medium", color: "text-default", children: guild.name });
  if (null == nickname) {
    if (!hasAvatarForGuildResult) {
      const intl = tmp(1115).intl;
      const obj15 = { GuildHook: GuildWithSmallIcon, user: tmp3(4600).getUserTag(toUser) };
      let formatResult = intl.format(tmp(1115).t["2XLnG0"], obj15);
      const tmp3Result = tmp3(4600);
    }
    const obj16 = { variant: "text-md/medium", color: "text-default", children: formatResult };
    items1[3] = closure_13(tmp15, obj16, "transfer-ownership-details");
    obj8.children = items1;
    const items3 = [closure_15(tmp14, obj8), , ];
    const obj17 = { title: null, hasIcons: false, children: null };
    const string = tmp(1115).intl.string;
    class GuildWithSmallIcon {
      constructor() {
        tmp4 = guild;
        tmp5 = null;
        tmp2 = jsxs;
        tmp3 = Fragment;
        if (null != guild.icon) {
          tmp6 = jsx;
          tmp7 = View;
          obj = { style: null, children: null };
          obj.style = tmp.miniGuildIcon;
          tmp8 = closure_1;
          tmp9 = closure_2;
          obj1 = { guild: null, size: null };
          obj1.guild = tmp4;
          tmp11 = closure_0;
          tmp10 = closure_1(closure_2[18]);
          obj1.size = closure_0(closure_2[18]).GuildIconSizes.XXSMALL;
          obj.children = jsx(tmp10, obj1);
          tmp5 = jsx(View, obj);
        }
        obj5 = { children: null };
        items = [, ];
        items[0] = tmp5;
        obj6 = { variant: "text-md/bold", children: tmp4.name };
        items[1] = jsx(closure_0(closure_2[19]).Text, obj6);
        obj5.children = items;
        return tmp2(tmp3, obj5);
      }
    }
    const obj18 = { checked: tmp8, label: null, onPress: null };
    const intl3 = tmp(1115).intl;
    const obj19 = { username: tmp3(4600).getUserTag(toUser) };
    obj18.label = intl3.format(tmp(1115).t.xm6ACJ, obj19);
    obj18.onPress = function handleConfirmToggle(arg0) {
      _undefined(arg0);
    };
    obj17.children = closure_13(tmp(5816).TableCheckboxRow, obj18);
    items3[1] = closure_13(tmp(5899).TableRowGroup, obj17);
    const obj20 = {
      onPress: function handleTransfer() {
          const self = this;
          const apply = closure_5.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      text: null,
      disabled: null
    };
    const intl4 = tmp(1115).intl;
    obj20.text = intl4.string(tmp(1115).t.jqqLb6);
    obj20.disabled = !tmp8;
    items3[2] = closure_13(tmp(5186).Button, obj20);
    obj6.children = items3;
    obj5.children = closure_15(tmp14, obj6);
    return closure_13(closure_8, obj5);
  }
  const intl2 = tmp(1115).intl;
  const obj21 = { GuildHook: GuildWithSmallIcon, user: null, AKAHook: null };
  const obj11 = { user: stateFromStores, guildId: guild.id, size: guild(1177).AvatarSizes.XXLARGE };
  const obj14 = { variant: "text-xs/medium", color: "text-default", children: guild.name };
  obj21.user = toUser(4600).getUserTag(toUser);
  obj21.AKAHook = function NicknameAKA() {
    const tmp = closure_16();
    const items = [__initData(Text_Text.Text, { style: tmp.aka, variant: "text-sm/bold", color: "text-default", children: ["AKA", " "] }), , ];
    let tmp6 = null;
    if (c7) {
      const obj2 = { style: tmp.miniAvatar, user: toUser, guildId: guild.id, size: native.AvatarSizes.XXSMALL };
      tmp6 = map1(native.Avatar, obj2);
    }
    items[1] = tmp6;
    let str = nickname;
    if (nickname == null) {
      str = toUser.toString();
    }
    const obj3 = { children: null };
    items[2] = map1(Text_Text.Text, { variant: "text-md/medium", children: str });
    obj3.children = items;
    return __initData(closure_2_14, obj3);
  };
  formatResult = intl2.format(tmp(1115).t.E90vgp, obj21);
  const tmp3Result4 = toUser(4600);
};