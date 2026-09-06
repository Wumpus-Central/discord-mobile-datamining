// discord_app/modules/guild_settings/safety/native/TransferOwnership.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const TransferOwnershipConstants = fn(11846);
({ TransferOwnershipModalScenes: c10, TransferOwnershipVerificationTypes: closure_11 } = TransferOwnershipConstants);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = {
  background: null,
  header: null,
  arrow: null,
  avatarsWrapper: null,
  avatarFauxBorder: null,
  otherUserAvatar: null,
  aka: null,
  miniAvatar: null,
  miniGuildIcon: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.background = createStyles;
createStyles.header = {
  alignItems: "center",
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.arrow = { width: 78, height: 15, paddingVertical: 1, marginBottom: 2 };
createStyles.avatarsWrapper = {
  flexDirection: "row",
  justifyContent: "flex-start",
  width: 160,
  height: 80,
  marginBottom: 30,
};
let size = {
  position: "absolute",
  left: 71,
  top: -2,
  borderRadius: 44,
  width: 88,
  height: 88,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.avatarFauxBorder = size;
createStyles.otherUserAvatar = { top: 4, left: 4 };
createStyles.aka = { flex: 1 };
createStyles.miniAvatar = { marginRight: 4, justifyContent: "center", alignContent: "center" };
createStyles.miniGuildIcon = { paddingRight: 4, paddingLeft: 2, justifyContent: "center", alignContent: "center" };
let closure_16 = createStyles.createStyles(createStyles);
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
  noop = async function _handleTransfer(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            if (!mfaEnabled.mfaEnabled) {
              if (null != tmp27.email) {
                let obj1 = v1(9063);
                v1 = 1;
                dependencyMap = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.sendTransferOwnershipPincode(user.id);
                return obj1;
              }
            }
            let MFA = null;
            if (mfaEnabled.mfaEnabled) {
              MFA = constants2.MFA;
            }
            const obj4 = v1(9063);
            v1(9063)
              .transferOwnership(user.id, id.id, MFA)
              .then(() => {
                v1(11844).close();
                const obj = v1(11844);
                v1(9063).close();
                const obj2 = v1(9063);
                const result = closure_1_0(4258).showTransferOwnershipSuccess();
              }, NOOP);
            dependencyMap = 3;
            const transferOwnershipResult = v1(9063).transferOwnership(user.id, id.id, MFA);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_2.push(constants.CONFIRM_EMAIL_CODE);
        }
        dependencyMap = 3;
        obj = { value, done: true };
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
        obj = { guild: null, size: null };
        obj.guild = tmp4;
        tmp11 = closure_0;
        tmp10 = closure_1(closure_2[18]);
        obj.size = closure_0(closure_2[18]).GuildIconSizes.XXSMALL;
        obj.children = jsx(tmp10, obj);
        tmp5 = jsx(View, obj);
      }
      obj1 = { children: null };
      items = [,];
      items[0] = tmp5;
      obj2 = { variant: "text-md/bold", children: tmp4.name };
      items[1] = jsx(closure_0(closure_2[19]).Text, obj2);
      obj1.children = items;
      return tmp2(tmp3, obj1);
    }
  }
  let obj = guild(4262);
  const token = obj.useToken(toUser(576).modules.mobile.TABLE_ROW_PADDING);
  let tmp5 = closure_16();
  let obj1 = guild(1483);
  dependencyMap = obj1.useNavigation();
  let obj2 = guild(504);
  let items = [UserStore];
  stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    toUser(closure_2[13])(null != currentUser, "TransferOwnership: currentUser cannot be undefined");
    return currentUser;
  });
  [tmp8, c4] = _slicedToArray(noop.useState(false), 2);
  let obj3 = toUser(4712);
  nickname = obj3.getNickname(guild.id, undefined, toUser);
  const hasAvatarForGuildResult = toUser.hasAvatarForGuild(guild.id);
  c7 = hasAvatarForGuildResult;
  obj = { style: tmp5.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  obj = { style: null, children: null };
  obj1 = { paddingTop: toUser(576).space.PX_16, paddingHorizontal: token };
  obj.style = obj1;
  obj2 = { style: tmp5.header, children: null };
  obj3 = { source: toUser(11848), style: tmp5.arrow };
  const items1 = [closure_13(c7, obj3), , ,];
  let obj4 = { style: tmp5.avatarsWrapper, children: null };
  const tmp12 = closure_8;
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items2 = [
    closure_13(guild(1178).Avatar, { user: stateFromStores, guildId: guild.id, size: guild(1178).AvatarSizes.XXLARGE }),
  ];
  const obj6 = { style: tmp5.avatarFauxBorder, children: null };
  const obj7 = { user: toUser, guildId: "r", size: guild(1178).AvatarSizes.XXLARGE, style: tmp5.otherUserAvatar };
  obj6.children = closure_13(guild(1178).Avatar, obj7);
  items2[1] = closure_13(nickname, obj6);
  obj4.children = items2;
  items1[1] = closure_15(nickname, obj4);
  items1[2] = closure_13(guild(4556).Text, { variant: "text-xs/medium", color: "text-default", children: guild.name });
  if (null == nickname) {
    if (!hasAvatarForGuildResult) {
      const intl = tmp(1114).intl;
      const obj9 = { GuildHook: GuildWithSmallIcon, user: null };
      let tmp3Result = tmp3(4404);
      obj9.user = tmp3Result.getUserTag(toUser);
      let formatResult = intl.format(tmp(1114).t["2XLnG0"], obj9);
    }
    const obj10 = { variant: "text-md/medium", color: "text-default", children: formatResult };
    items1[3] = tmp11(tmp15, obj10, "transfer-ownership-details");
    obj2.children = items1;
    const items3 = [tmp13(tmp14, obj2), ,];
    const obj11 = { title: null, hasIcons: false, children: null };
    const string = tmp(1114).intl.string;
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
          obj = { guild: null, size: null };
          obj.guild = tmp4;
          tmp11 = closure_0;
          tmp10 = closure_1(closure_2[18]);
          obj.size = closure_0(closure_2[18]).GuildIconSizes.XXSMALL;
          obj.children = jsx(tmp10, obj);
          tmp5 = jsx(View, obj);
        }
        obj1 = { children: null };
        items = [,];
        items[0] = tmp5;
        obj2 = { variant: "text-md/bold", children: tmp4.name };
        items[1] = jsx(closure_0(closure_2[19]).Text, obj2);
        obj1.children = items;
        return tmp2(tmp3, obj1);
      }
    }
    const obj12 = { checked: tmp8, label: null, onPress: null };
    const intl3 = tmp(1114).intl;
    const obj13 = { username: null };
    tmp3Result = tmp3(4404);
    obj13.username = tmp3Result.getUserTag(toUser);
    obj12.label = intl3.format(tmp(1114).t.xm6ACJ, obj13);
    obj12.onPress = function handleConfirmToggle(arg0) {
      _undefined(arg0);
    };
    obj11.children = tmp11(tmp(5604).TableCheckboxRow, obj12);
    items3[1] = tmp11(tmp(5687).TableRowGroup, obj11);
    const obj14 = {
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
      disabled: null,
    };
    const intl4 = tmp(1114).intl;
    obj14.text = intl4.string(tmp(1114).t.jqqLb6);
    obj14.disabled = !tmp8;
    items3[2] = tmp11(tmp(4975).Button, obj14);
    obj.children = items3;
    obj.children = tmp13(tmp14, obj);
    return tmp11(tmp12, obj);
  }
  const intl2 = tmp(1114).intl;
  const obj15 = { GuildHook: GuildWithSmallIcon, user: null, AKAHook: null };
  const obj5 = { user: stateFromStores, guildId: guild.id, size: guild(1178).AvatarSizes.XXLARGE };
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: guild.name };
  obj15.user = toUser(4404).getUserTag(toUser);
  obj15.AKAHook = function NicknameAKA() {
    const tmp = closure_16();
    let obj = { style: tmp.aka, variant: "text-sm/bold", color: "text-default", children: ["AKA", " "] };
    const items = [__initData(Text_Text.Text, obj), ,];
    let tmp6 = null;
    if (c7) {
      obj = { style: tmp.miniAvatar, user: toUser, guildId: guild.id, size: tmp4(1178).AvatarSizes.XXSMALL };
      tmp6 = map1(tmp4(1178).Avatar, obj);
    }
    items[1] = tmp6;
    let str = nickname;
    if (nickname == null) {
      str = toUser.toString();
    }
    obj = { children: null };
    items[2] = map1(Text_Text.Text, { variant: "text-md/medium", children: str });
    obj.children = items;
    return __initData(closure_2_14, obj);
  };
  formatResult = intl2.format(tmp(1114).t.E90vgp, obj15);
}
