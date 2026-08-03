// === Module 11168: TransferOwnership ===

// Module 11168 (TransferOwnership)
import closure_3 from "TransferOwnershipModalScenes";
import _slicedToArray from "_slicedToArray";
import Text from "Text";
import get_ActivityIndicator from "getNickname";
import mergeGuildAvatar from "mergeGuildAvatar";
import TransferOwnershipModalScenes from "TransferOwnershipModalScenes";
import { NOOP } from "ME";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let c10;
let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ View: closure_6, Image: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ TransferOwnershipModalScenes: c10, TransferOwnershipVerificationTypes: unpackModuleId } = TransferOwnershipModalScenes);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { background: null, header: null, arrow: null, avatarsWrapper: null, avatarFauxBorder: null, otherUserAvatar: null, aka: null, miniAvatar: null, miniGuildIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = { width: 78, height: 15, paddingVertical: 1, marginBottom: 2 };
createCacheKey[3] = { flexDirection: "row", justifyContent: "flex-start", width: 160, height: 80, marginBottom: 30 };
let obj1 = { alignItems: "center", paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { position: "absolute", left: 71, top: -2, borderRadius: 44, width: 88, height: 88, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { top: 4, left: 4 };
createCacheKey[6] = { flex: 1 };
createCacheKey[7] = { marginRight: 4, justifyContent: "center", alignContent: "center" };
createCacheKey[8] = { paddingRight: 4, paddingLeft: 2, justifyContent: "center", alignContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { position: "absolute", left: 71, top: -2, borderRadius: 44, width: 88, height: 88, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let result = require("noop").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnership.tsx");

export default function TransferOwnership(guild) {
  let c4;
  let tmp8;
  guild = guild.guild;
  const toUser = guild.toUser;
  let dependencyMap;
  let stateFromStores;
  let callback;
  let nickname;
  let c7;
  function _handleTransfer() {
    const self = this;
    const tmp = stateFromStores(function*() {
      if (arr === 2) {
        arr = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          arr = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              arr = 3;
              throw arg1;
            } else if (arg0 === 2) {
              arr = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp2;
              if (!outer1_3.mfaEnabled) {
                if (null != tmp28.email) {
                  let obj1 = v0(arr[14]);
                  v0 = 1;
                  arr = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.sendTransferOwnershipPincode(outer1_0.id);
                  return obj1;
                }
              }
              let MFA = null;
              if (outer1_3.mfaEnabled) {
                MFA = outer1_11.MFA;
              }
              const obj4 = v0(arr[14]);
              v0(arr[14]).transferOwnership(outer1_0.id, v0.id, MFA).then(() => {
                v1(11165).close();
                const obj = v1(11165);
                v1(8613).close();
                const obj2 = v1(8613);
                const result = tmp2(3955).showTransferOwnershipSuccess();
              }, outer1_12);
              arr = 3;
              const transferOwnershipResult = v0(arr[14]).transferOwnership(outer1_0.id, v0.id, MFA);
            }
          } else if (arg0 === 1) {
            arr = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            arr = arr.push(outer1_10.CONFIRM_EMAIL_CODE);
          }
          arr = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp22) {
          arr = tmp;
          throw tmp22;
        }
      }
    });
    const _handleTransfer = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  class GuildWithSmallIcon {
    constructor() {
      tmp4 = guild;
      tmp5 = null;
      tmp2 = outer1_15;
      tmp3 = outer1_14;
      if (null != guild.icon) {
        tmp6 = outer1_13;
        tmp7 = c6;
        obj = { style: null, children: null };
        obj[0] = tmp.miniGuildIcon;
        tmp8 = toUser;
        tmp9 = useNavigation;
        obj = { guild: null, size: null };
        obj[0] = tmp4;
        tmp11 = guild;
        tmp10 = toUser(useNavigation[18]);
        obj[1] = guild(useNavigation[18]).GuildIconSizes.XXSMALL;
        obj[1] = outer1_13(tmp10, obj);
        tmp5 = outer1_13(c6, obj);
      }
      obj1 = { children: null };
      items = [, ];
      items[0] = tmp5;
      obj2 = { variant: "text-md/bold", children: tmp4.name };
      items[1] = outer1_13(guild(useNavigation[19]).Text, obj2);
      obj1[0] = items;
      return tmp2(tmp3, obj1);
    }
  }
  let obj = guild(3959);
  const token = obj.useToken(toUser(712).modules.mobile.TABLE_ROW_PADDING);
  let tmp5 = createCacheKey();
  let obj1 = guild(1480);
  dependencyMap = obj1.useNavigation();
  let obj2 = guild(589);
  let items = [mergeGuildAvatar];
  stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    toUser(38)(null != currentUser, "TransferOwnership: currentUser cannot be undefined");
    return currentUser;
  });
  [tmp8, c4] = callback(_handleTransfer.useState(false), 2);
  let obj3 = toUser(4445);
  nickname = obj3.getNickname(guild.id, undefined, toUser);
  const hasAvatarForGuildResult = toUser.hasAvatarForGuild(guild.id);
  c7 = hasAvatarForGuildResult;
  obj = { style: tmp5.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  obj = { style: null, children: null };
  obj1 = { paddingTop: toUser(712).space.PX_16, paddingHorizontal: token };
  obj[0] = obj1;
  obj2 = { style: tmp5.header, children: null };
  obj3 = { source: toUser(11169), style: tmp5.arrow };
  const items1 = [callback2(c7, obj3), , , ];
  let obj4 = { style: tmp5.avatarsWrapper, children: null };
  const obj5 = { user: stateFromStores, guildId: guild.id, size: null };
  obj5[2] = guild(1297).AvatarSizes.XXLARGE;
  const items2 = [callback2(guild(1297).Avatar, obj5), ];
  const obj6 = { style: tmp5.avatarFauxBorder, children: null };
  const obj7 = { user: toUser, guildId: "r", size: "ct", style: null };
  obj7[2] = guild(1297).AvatarSizes.XXLARGE;
  obj7[3] = tmp5.otherUserAvatar;
  obj6[1] = callback2(guild(1297).Avatar, obj7);
  items2[1] = callback2(nickname, obj6);
  obj4[1] = items2;
  items1[1] = callback3(nickname, obj4);
  items1[2] = callback2(guild(4251).Text, { variant: "text-xs/medium", color: "text-default", children: guild.name });
  if (null == nickname) {
    if (!hasAvatarForGuildResult) {
      const intl = tmp(1236).intl;
      const obj9 = { GuildHook: null, user: null };
      obj9[0] = GuildWithSmallIcon;
      let tmp3Result = tmp3(4094);
      obj9[1] = tmp3Result.getUserTag(toUser);
      let formatResult = intl.format(tmp(1236).t["2XLnG0"], obj9);
    }
    const obj10 = { variant: "text-md/medium", color: "text-default", children: null };
    obj10[2] = formatResult;
    items1[3] = tmp11(tmp15, obj10, "transfer-ownership-details");
    obj2[1] = items1;
    const items3 = [tmp13(tmp14, obj2), , ];
    const obj11 = { title: null, hasIcons: false, children: null };
    const string = tmp(1236).intl.string;
    class GuildWithSmallIcon {
      constructor() {
        tmp4 = guild;
        tmp5 = null;
        tmp2 = outer1_15;
        tmp3 = outer1_14;
        if (null != guild.icon) {
          tmp6 = outer1_13;
          tmp7 = c6;
          obj = { style: null, children: null };
          obj[0] = tmp.miniGuildIcon;
          tmp8 = toUser;
          tmp9 = useNavigation;
          obj = { guild: null, size: null };
          obj[0] = tmp4;
          tmp11 = guild;
          tmp10 = toUser(useNavigation[18]);
          obj[1] = guild(useNavigation[18]).GuildIconSizes.XXSMALL;
          obj[1] = outer1_13(tmp10, obj);
          tmp5 = outer1_13(c6, obj);
        }
        obj1 = { children: null };
        items = [, ];
        items[0] = tmp5;
        obj2 = { variant: "text-md/bold", children: tmp4.name };
        items[1] = outer1_13(guild(useNavigation[19]).Text, obj2);
        obj1[0] = items;
        return tmp2(tmp3, obj1);
      }
    }
    const obj12 = { checked: null, label: null, onPress: null };
    obj12[0] = tmp8;
    const intl3 = tmp(1236).intl;
    const obj13 = { username: null };
    tmp3Result = tmp3(4094);
    obj13[0] = tmp3Result.getUserTag(toUser);
    obj12[1] = intl3.format(tmp(1236).t.xm6ACJ, obj13);
    obj12[2] = function handleConfirmToggle(arg0) {
      _undefined(arg0);
    };
    obj11[2] = tmp11(tmp(9272).TableCheckboxRow, obj12);
    items3[1] = tmp11(tmp(5620).TableRowGroup, obj11);
    const obj14 = { onPress: null, text: null, disabled: null };
    obj14[0] = function handleTransfer() {
      const self = this;
      const apply = _handleTransfer.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const intl4 = tmp(1236).intl;
    obj14[1] = intl4.string(tmp(1236).t.jqqLb6);
    obj14[2] = !tmp8;
    items3[2] = tmp11(tmp(4666).Button, obj14);
    obj[1] = items3;
    obj[3] = tmp13(tmp14, obj);
    return tmp11(tmp12, obj);
  }
  const intl2 = tmp(1236).intl;
  const obj15 = { GuildHook: GuildWithSmallIcon, user: null, AKAHook: null };
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: guild.name };
  tmp12 = closure_8;
  const tmp7 = callback(_handleTransfer.useState(false), 2);
  obj15[1] = toUser(4094).getUserTag(toUser);
  obj15[2] = function NicknameAKA() {
    const tmp = outer1_16();
    let obj = { style: tmp.aka, variant: "text-sm/bold", color: "text-default", children: ["AKA", " "] };
    const items = [outer1_15(guild(4251).Text, obj), , ];
    let tmp6 = null;
    if (c7) {
      obj = { style: null, user: null, guildId: null, size: null };
      obj[0] = tmp.miniAvatar;
      obj[1] = toUser;
      obj[2] = guild.id;
      obj[3] = tmp4(1297).AvatarSizes.XXSMALL;
      tmp6 = outer1_13(tmp4(1297).Avatar, obj);
    }
    items[1] = tmp6;
    let str = nickname;
    if (nickname == null) {
      str = toUser.toString();
    }
    obj = { children: null };
    items[2] = outer1_13(guild(4251).Text, { variant: "text-md/medium", children: str });
    obj[0] = items;
    return outer1_15(outer1_14, obj);
  };
  formatResult = intl2.format(tmp(1236).t.E90vgp, obj15);
};