// discord_app/components_native/common/UserSummaryItem.tsx
import "noop";
import { View } from "get ActivityIndicator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../design/void/native.tsx";
import { getAvatarURL } from "../../utils/AvatarUtils.tsx";

const require = arg1;
createCacheKey = { container: { flexDirection: "row" }, names: { marginStart: 4, paddingRight: 1 }, namesLegacy: null, plusCountContainer: null, cutout: null };
createCacheKey = { marginStart: 4, paddingRight: 1, color: require("Themes").colors.TEXT_SUBTLE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
createCacheKey[4] = { marginRight: -4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { direction: require("Button").CutoutDirection.RIGHT };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
const result = require("trackCommunicationDisabled").fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default function UserSummaryItem(users) {
  let avatarSize;
  let channelId;
  let cutout;
  let guildId;
  let max;
  let namesStyle;
  let namesVariant;
  let withNames;
  let withPlusCount;
  ({ namesStyle, namesVariant, max } = users);
  if (max === undefined) {
    max = 3;
  }
  users = users.users;
  let renderedUsers = users.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = users);
  ({ avatarSize, channelId } = users);
  if (avatarSize === undefined) {
    avatarSize = users(avatarSize[6]).AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = users);
  if (cutout === undefined) {
    cutout = obj2;
  }
  let obj;
  const tmp4 = createCacheKey();
  let tmp5 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp5, max);
  obj = {};
  let obj1 = users(avatarSize[7]);
  const items = [trackCommunicationDisabled];
  const stateFromStores = obj1.useStateFromStores(items, () => users.forEach((id) => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = null != id;
    }
    if (tmp2) {
      closure_3[id.id] = outer1_4.getMember(closure_1, id.id);
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
        let tmp9 = num;
        let tmp10 = num2;
        if (0 === renderedUsers.length) {
          let tmp12 = users[num];
          users = tmp12;
          let id;
          if (tmp12 != null) {
            id = tmp12.id;
          }
          if (id == null) {
            let _HermesInternal = HermesInternal;
            id = "@" + num;
          }
          let tmp14 = guildId;
          let tmp15 = avatarSize;
          obj2 = guildId(avatarSize[8]);
          let fn = obj2.makeSource(null);
          if (null != tmp12) {
            guildId = obj[tmp12.id];
            fn = function u(flag) {
              if (flag === undefined) {
                flag = false;
              }
              const avatarURL = users.getAvatarURL(guildId, Button /* Button */.AVATAR_SIZE_MAP[avatarSize], flag);
              let avatar;
              if (guildId != null) {
                avatar = tmp3.avatar;
              }
              let tmp5 = avatarURL;
              if (null != avatar) {
                let guildMemberAvatarURL = getAvatarURL.getGuildMemberAvatarURL(tmp3, flag);
                if (guildMemberAvatarURL == null) {
                  guildMemberAvatarURL = avatarURL;
                }
                tmp5 = guildMemberAvatarURL;
                const obj = getAvatarURL;
              }
              return getAvatarURL.makeSource(tmp5);
            };
          }
          if (num < tmp8) {
            let tmp19 = jsx;
            let tmp20 = users;
            obj = { size: null, source: null, style: null, cutout: null };
            obj[0] = avatarSize;
            obj[1] = fn;
            let items2 = [tmp4.cutout, tmp3];
            obj[2] = items2;
            obj[3] = cutout;
            let arr = items1.push(jsx(users(tmp15[6]).CutoutableAvatarImage, { size: null, source: null, style: null, cutout: null }, id));
          } else {
            let tmp16 = jsx;
            let tmp17 = users;
            obj = { size: null, source: null };
            obj[0] = avatarSize;
            obj[1] = fn;
            arr = items1.push(jsx(users(tmp15[6]).CutoutableAvatarImage, { size: null, source: null }, id));
          }
        } else {
          let arr1 = items1.push(renderedUsers[num]);
        }
        num = num2 + 1;
        num2 = num;
      } while (num < bound);
    }
    let obj5 = guildId(avatarSize[9]);
    const name = obj5.getName(guildId, channelId, users[0]);
    let tmp25 = withNames;
    if (withNames) {
      tmp25 = users.length > 1;
    }
    let formatToPlainStringResult = name;
    if (tmp25) {
      const intl = users(tmp23[10]).intl;
      obj1 = { name: null, count: null };
      obj1[0] = name;
      obj1[1] = users.length - 1;
      formatToPlainStringResult = intl.formatToPlainString(users(tmp23[10]).t.GhkJ21, obj1);
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
          items1.push(jsx(users(tmp23[11]).Text, { variant: null, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null }, combined));
        } else {
          const obj3 = { style: null, numberOfLines: 1, children: null };
          const items4 = [tmp4.namesLegacy, namesStyle];
          obj3[0] = items4;
          obj3[2] = formatToPlainStringResult;
          items1.push(jsx(users(tmp23[6]).LegacyText, { style: null, numberOfLines: 1, children: null }, combined));
        }
      }
    }
    if (tmp5 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp5 + 1 - max}`;
        const tmp37 = users(tmp23[6]).AVATAR_SIZE_MAP[avatarSize];
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
        obj4[1] = jsx(users(tmp23[11]).Text, { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null });
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