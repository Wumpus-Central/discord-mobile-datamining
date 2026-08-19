// === Module 10765: UserSummaryItem ===

// Module 10765 (UserSummaryItem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import { View } from "get ActivityIndicator" /* 17 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { marginStart: 4, paddingRight: 1, color: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
createCacheKey[4] = { marginRight: -4 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj2 = { direction: require("Button").CutoutDirection.RIGHT };
const result = require("obj132").fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default function UserSummaryItem(users) {
  ({ namesStyle, namesVariant, max } = users);
  if (max === undefined) {
    max = 3;
  }
  users = users.users;
  let _require = users;
  let renderedUsers = users.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = users);
  importDefault = guildId;
  ({ avatarSize, channelId } = users);
  if (avatarSize === undefined) {
    avatarSize = _require(avatarSize[6]).AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = users);
  if (cutout === undefined) {
    cutout = obj2;
  }
  const tmp4 = callback();
  let tmp5 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp5, max);
  let obj = {};
  obj1 = _require(avatarSize[7]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_0.forEach((item, index) => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != item;
    }
    if (tmp2) {
      closure_3[item.id] = closure_1_4.getMember(closure_1, item.id);
    }
  }));
  if (0 === bound) {
    return null;
  } else {
    const items1 = [];
    let num = 0;
    let num2 = 0;
    if (0 < bound) {
      do {
        if (0 === renderedUsers.length) {
          let tmp12 = users[num];
          _require = tmp12;
          let id;
          if (tmp12 != null) {
            id = tmp12.id;
          }
          if (id == null) {
            let _HermesInternal = HermesInternal;
            id = "@" + num;
          }
          let tmp15 = avatarSize;
          obj2 = importDefault(avatarSize[8]);
          let fn = obj2.makeSource(null);
          if (null != tmp12) {
            importDefault = obj[tmp12.id];
            fn = function u(flag) {
              if (flag === undefined) {
                flag = false;
              }
              const avatarURL = closure_0.getAvatarURL(user, Button.AVATAR_SIZE_MAP[avatarSize], flag);
              let avatar;
              if (user != null) {
                avatar = user.avatar;
              }
              let tmp5 = avatarURL;
              if (null != avatar) {
                let guildMemberAvatarURL = getAvatarURLDefault.getGuildMemberAvatarURL(user, flag);
                if (guildMemberAvatarURL == null) {
                  guildMemberAvatarURL = avatarURL;
                }
                tmp5 = guildMemberAvatarURL;
              }
              return getAvatarURLDefault.makeSource(tmp5);
            };
          }
          if (num < tmp8) {
            obj = { size: null, source: null, style: null, cutout: null };
            obj[0] = avatarSize;
            obj[1] = fn;
            let items2 = [tmp4.cutout, tmp3];
            obj[2] = items2;
            obj[3] = cutout;
            let arr = items1.push(jsx(_require(tmp15[6]).CutoutableAvatarImage, { size: null, source: null, style: null, cutout: null }, id));
          } else {
            obj = { size: null, source: null };
            obj[0] = avatarSize;
            obj[1] = fn;
            arr = items1.push(jsx(_require(tmp15[6]).CutoutableAvatarImage, { size: null, source: null }, id));
          }
        } else {
          let arr1 = items1.push(renderedUsers[num]);
        }
        num = num2 + 1;
        num2 = num;
      } while (num < bound);
    }
    let obj5 = importDefault(avatarSize[9]);
    const name = obj5.getName(guildId, channelId, users[0]);
    let tmp25 = withNames;
    if (withNames) {
      tmp25 = users.length > 1;
    }
    let formatToPlainStringResult = name;
    if (tmp25) {
      const intl = _require(tmp23[10]).intl;
      obj1 = { name: null, count: null };
      obj1[0] = name;
      obj1[1] = users.length - 1;
      formatToPlainStringResult = intl.formatToPlainString(_require(tmp23[10]).t.GhkJ21, obj1);
    }
    if (withNames) {
      if (null != users[0]) {
        const _HermesInternal3 = HermesInternal;
        const combined = "username-" + formatToPlainStringResult;
        if (null != namesVariant) {
          obj2 = { variant: null, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null };
          obj2[0] = namesVariant;
          const items3 = [tmp4.names, namesStyle];
          obj2[2] = items3;
          obj2[4] = formatToPlainStringResult;
          items1.push(jsx(_require(tmp23[11]).Text, { variant: null, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null }, combined));
        } else {
          const obj3 = { style: null, numberOfLines: 1, children: null };
          const items4 = [tmp4.namesLegacy, namesStyle];
          obj3[0] = items4;
          obj3[2] = formatToPlainStringResult;
          items1.push(jsx(_require(tmp23[6]).LegacyText, { style: null, numberOfLines: 1, children: null }, combined));
        }
      }
    }
    if (tmp5 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp5 + 1 - max}`;
        const tmp37 = _require(tmp23[6]).AVATAR_SIZE_MAP[avatarSize];
        const obj4 = { style: null, children: null };
        const items5 = [tmp4.plusCountContainer, ];
        obj5 = { borderRadius: null, width: null, height: null, padding: null };
        obj5[0] = tmp37;
        obj5[1] = tmp37;
        obj5[2] = tmp37;
        obj5[3] = tmp37 / 8;
        items5[1] = obj5;
        obj4[0] = items5;
        const obj6 = { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null };
        obj6[2] = text;
        obj4[1] = jsx(_require(tmp23[11]).Text, { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null });
        const _HermesInternal2 = HermesInternal;
        items1.push(<obj key={"plus-" + `+${tmp5 + 1 - max}`} style={null}>{null}</obj>);
      }
    }
    const obj7 = { style: null, children: null };
    const items6 = [users.style, tmp4.container];
    obj7[0] = items6;
    obj7[1] = items1;
    return <obj style={null}>{null}</obj>;
  }
};