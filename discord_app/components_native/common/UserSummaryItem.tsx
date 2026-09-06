// === Module 10054: UserSummaryItem ===

// Module 10054 (UserSummaryItem)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: { flexDirection: "row" }, names: { marginStart: 4, paddingRight: 1 }, namesLegacy: null, plusCountContainer: null, cutout: null };
createStyles = { marginStart: 4, paddingRight: 1, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles.namesLegacy = createStyles;
createStyles.plusCountContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
createStyles.cutout = { marginRight: -4 };
let closure_6 = createStyles.createStyles(createStyles);
let obj2 = { direction: fn(1178).CutoutDirection.RIGHT };
let size = fn(2);
const result = size.fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default function UserSummaryItem(users) {
  ({ namesStyle, namesVariant, max } = users);
  if (max === undefined) {
    max = 3;
  }
  users = users.users;
  _require = users;
  let renderedUsers = users.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = users);
  importDefault = guildId;
  ({ avatarSize, channelId } = users);
  if (avatarSize === undefined) {
    avatarSize = require("native").AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = users);
  if (cutout === undefined) {
    cutout = obj2;
  }
  const tmp4 = closure_6();
  let tmp5 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp5, max);
  let obj = {};
  let obj1 = require("initialize");
  const items = [GuildMemberStore];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_0.forEach((id) => {
    let tmp2 = null != closure_1_1;
    if (tmp2) {
      tmp2 = null != id;
    }
    if (tmp2) {
      obj[id.id] = member.getMember(closure_1_1, id.id);
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
          obj2 = require("AvatarUtils");
          let fn = obj2.makeSource(null);
          if (null != tmp12) {
            importDefault = obj[tmp12.id];
            fn = function u() {
              if (flag === undefined) {
                flag = false;
              }
              const avatarURL = closure_0.getAvatarURL(importDefault, closure_0(avatarSize[6]).AVATAR_SIZE_MAP[dependencyMap], flag);
              let avatar;
              if (closure_1 != null) {
                avatar = closure_1.avatar;
              }
              let tmp5 = avatarURL;
              if (null != avatar) {
                let guildMemberAvatarURL = closure_1(avatarSize[8]).getGuildMemberAvatarURL(closure_1, flag);
                if (guildMemberAvatarURL == null) {
                  guildMemberAvatarURL = avatarURL;
                }
                tmp5 = guildMemberAvatarURL;
                obj = closure_1(avatarSize[8]);
              }
              return closure_1(avatarSize[8]).makeSource(tmp5);
            };
          }
          if (num < tmp8) {
            obj = { size: avatarSize, source: fn, style: null, cutout: null };
            let items2 = [tmp4.cutout, tmp3];
            obj.style = items2;
            obj.cutout = cutout;
            let arr = items1.push(jsx(require("native").CutoutableAvatarImage, { size: avatarSize, source: fn, style: null, cutout: null }, id));
          } else {
            obj = { size: avatarSize, source: fn };
            arr = items1.push(jsx(require("native").CutoutableAvatarImage, { size: avatarSize, source: fn }, id));
          }
        } else {
          let arr1 = items1.push(renderedUsers[num]);
        }
        num = num2 + 1;
        num2 = num;
      } while (num < bound);
    }
    let obj5 = require("NicknameUtils");
    const name = obj5.getName(guildId, channelId, users[0]);
    let tmp25 = withNames;
    if (withNames) {
      tmp25 = users.length > 1;
    }
    let formatToPlainStringResult = name;
    if (tmp25) {
      const intl = require("util").intl;
      obj1 = { name, count: users.length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(require("util").t.GhkJ21, obj1);
    }
    if (withNames) {
      if (null != users[0]) {
        const _HermesInternal3 = HermesInternal;
        const combined = "username-" + formatToPlainStringResult;
        if (null != namesVariant) {
          obj2 = { variant: namesVariant, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null };
          const items3 = [tmp4.names, namesStyle];
          obj2.style = items3;
          obj2.children = formatToPlainStringResult;
          items1.push(jsx(require("Text/Text").Text, { variant: namesVariant, color: "redesign-channel-name-muted-text", style: null, lineClamp: 1, children: null }, combined));
        } else {
          const obj3 = { style: null, numberOfLines: 1, children: null };
          const items4 = [tmp4.namesLegacy, namesStyle];
          obj3.style = items4;
          obj3.children = formatToPlainStringResult;
          items1.push(jsx(require("native").LegacyText, { style: null, numberOfLines: 1, children: null }, combined));
        }
      }
    }
    if (tmp5 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp5 + 1 - max}`;
        const tmp37 = require("native").AVATAR_SIZE_MAP[avatarSize];
        const obj4 = { style: null, children: null };
        const items5 = [tmp4.plusCountContainer, ];
        const size = { borderRadius: tmp37, width: tmp37, height: tmp37, padding: tmp37 / 8 };
        items5[1] = size;
        obj4.style = items5;
        obj5 = { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text };
        obj4.children = jsx(require("Text/Text").Text, { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text });
        const _HermesInternal2 = HermesInternal;
        items1.push(<obj key={"plus-" + `+${tmp5 + 1 - max}`} style={null}>{null}</obj>);
      }
    }
    const obj6 = { style: null, children: null };
    const items6 = [users.style, tmp4.container];
    obj6.style = items6;
    obj6.children = items1;
    return <obj style={null}>{null}</obj>;
  }
};