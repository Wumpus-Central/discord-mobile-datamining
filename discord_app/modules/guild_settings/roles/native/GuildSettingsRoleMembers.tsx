// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleMembers.tsx
import _slicedToArray from "_slicedToArray";
import _toPropertyKey from "_toPropertyKey";
import { View } from "expandEventProperties";
import getRoleMemberCount from "getRoleMemberCount";
import { AnalyticEvents } from "ME";
import jsxProd from "memoResult1";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
function onMembersLoadFail() {
  let obj = importDefault(3894);
  obj = { key: "ERROR_OCCURRED_TRY_AGAIN", icon: importDefault(9181), content: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.fEptJP);
  obj.open(obj);
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, containerSearchBar: null, missingMembers: null, missingMembersText: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_12, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingBottom: require("Themes").space.PX_12 };
let obj1 = { paddingBottom: require("Themes").space.PX_12 };
createCacheKey[2] = { borderRadius: require("Themes").radii.md, borderWidth: 1, borderColor: require("Themes").colors.ICON_FEEDBACK_INFO, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_INFO, marginBottom: require("Themes").space.PX_16, padding: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center" };
let obj2 = { borderRadius: require("Themes").radii.md, borderWidth: 1, borderColor: require("Themes").colors.ICON_FEEDBACK_INFO, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_INFO, marginBottom: require("Themes").space.PX_16, padding: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { marginLeft: require("Themes").space.PX_8, flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginLeft: require("Themes").space.PX_8, flex: 1 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleMembers.tsx");

export default function GuildSettingsRoleMembers(guild) {
  let str;
  let tmp3;
  guild = guild.guild;
  const role = guild.role;
  const locked = guild.locked;
  let formatted;
  let found;
  let callback;
  let getRoleMemberCount;
  const tmp = createCacheKey();
  [str, tmp3] = formatted(found.useState(""), 2);
  const tmp2 = formatted(found.useState(""), 2);
  formatted = str.trim().toLowerCase();
  let obj = guild(locked[11]);
  const queryGuildMembers = obj.useQueryGuildMembers(guild.id, formatted);
  let obj1 = guild(locked[11]);
  const guildRoleMembers = obj1.useGuildRoleMembers(guild.id, role.id, onMembersLoadFail);
  found = guildRoleMembers.filter((name) => {
    const formatted = name.name.toLowerCase();
    return formatted.includes(formatted);
  });
  let obj2 = guild(locked[12]);
  obj = { [guild.id]: guildRoleMembers.map((id) => id.id) };
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(obj, "GuildSettingsRoleMembers");
  let obj4 = guild(locked[13]);
  let items = [getRoleMemberCount];
  const items1 = [guild.id, role.id];
  const items2 = [guild.id, , ];
  ({ id: arr5[1], name: arr5[2] } = role);
  const str2 = str.trim();
  callback = found.useCallback((name, arr) => {
    let closure_0 = name;
    const found = arr.filter((arg0) => arg0 !== found.id);
    if (found.length !== arr.length) {
      let obj = role(locked[14]);
      obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, hideActionSheet: false, confirmColor: null };
      let intl = guild(locked[10]).intl;
      obj[0] = intl.string(guild(locked[10]).t["7sFNfW"]);
      const intl2 = guild(locked[10]).intl;
      obj = { username: null, roleName: null };
      obj[0] = name.name;
      obj[1] = found.name;
      obj[1] = intl2.format(guild(locked[10]).t.scORUv, obj);
      const intl3 = guild(locked[10]).intl;
      obj[2] = intl3.string(guild(locked[10]).t["ETE/oC"]);
      const intl4 = guild(locked[10]).intl;
      obj[3] = intl4.string(guild(locked[10]).t.N86XcP);
      obj[4] = function onConfirm() {
        const items = [found.id];
        let obj = role(locked[15]);
        role(locked[15]).updateMemberRoles(name.id, name.id, found, [], items).catch(() => {
          let obj = callback2(3894);
          obj = { key: "ERROR_OCCURRED_TRY_AGAIN", content: null, icon: null };
          const intl = callback(1236).intl;
          obj[1] = intl.string(callback(1236).t.fEptJP);
          obj[2] = callback2(9181);
          obj.open(obj);
        });
      };
      obj[6] = guild(locked[16]).ButtonColors.RED;
      obj.show(obj);
    }
  }, items2);
  const items3 = [guild, role];
  const items4 = [callback, guild.id, locked, found];
  const callback1 = found.useCallback(() => {
    let obj = role(locked[17]);
    obj.track(outer1_7.OPEN_POPOUT, { type: "Add Role Members", location_page: "Role Settings", location_section: "Members" });
    const obj2 = role(locked[18]);
    obj = { guild, role };
    obj2.openLazy(guild(locked[20])(locked[19], locked.paths), "role-add-members-" + guild.id + "-" + role.id, obj);
  }, items3);
  getRoleMemberCount = found.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = { end: index === found.length - 1, start: null, guildId: null, userId: null, trailing: null };
    let tmp4 = 0 === index;
    if (tmp4) {
      tmp4 = locked;
    }
    obj[1] = tmp4;
    obj[2] = item.id;
    obj[3] = item.user.id;
    let tmpResult = null;
    if (!locked) {
      obj = { icon: null, accessibilityLabel: null, accessibilityRole: "button", onPress: null, variant: "icon-only" };
      obj[0] = tmp(guild(tmp2[23]).CircleXIcon, {});
      const intl = guild(tmp2[10]).intl;
      obj[1] = intl.string(guild(tmp2[10]).t["7sFNfW"]);
      obj[3] = function onPress() {
        return outer1_5(item, item.roles);
      };
      tmpResult = tmp(guild(tmp2[22]).IconButton, obj);
    }
    obj[4] = tmpResult;
    return outer1_8(role(locked[21]), obj, item.id);
  }, items4);
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.containerSearchBar, children: callback(guild(locked[24]).SearchField, { onChange: tmp3 }) };
  const items5 = [callback(callback, obj1), ];
  obj2 = { style: guild.contentContainerStyle, children: null };
  let tmp12Result = null;
  if (tmp9) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.missingMembers;
    obj4 = { color: null, size: "md" };
    obj4[0] = role(tmp6[7]).colors.TEXT_LINK;
    const items6 = [tmp14(tmp5(tmp6[25]).CircleInformationIcon, obj4), ];
    const obj5 = { style: null, variant: "text-sm/medium", children: null };
    obj5[0] = tmp.missingMembersText;
    let intl = tmp5(tmp6[10]).intl;
    obj5[2] = intl.string(tmp5(tmp6[10]).t.RQxHZ8);
    items6[1] = tmp14(tmp5(tmp6[26]).Text, obj5);
    obj3[1] = items6;
    tmp12Result = tmp12(tmp13, obj3);
  }
  const items7 = [tmp12Result, , ];
  let tmp14Result = null;
  if (!locked) {
    const obj6 = { arrow: true, label: null, icon: null, onPress: null, start: true, end: null };
    let intl2 = tmp5(tmp6[10]).intl;
    obj6[1] = intl2.string(tmp5(tmp6[10]).t.ZYOK46);
    obj6[2] = tmp14(tmp5(tmp6[28]).CirclePlusIcon, { size: "md" });
    obj6[3] = callback1;
    obj6[5] = 0 === found.length;
    tmp14Result = tmp14(tmp5(tmp6[27]).TableRow, obj6);
  }
  items7[1] = tmp14Result;
  items7[2] = found.map((item, index) => roleMemberCount({ item, index }));
  obj2[1] = items7;
  items5[1] = closure_9(callback, obj2);
  obj[1] = items5;
  return closure_9(callback, obj);
};