// === Module 16978: GuildSettingsRoleEditPermission ===

// Module 16978 (GuildSettingsRoleEditPermission)
import ThemesDefault from "Themes" /* 712 */;
import applyOverwritesAll from "applyOverwrites" /* 4030 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import closure_10 from "getUncachedChannelPermissions" /* 4025 */;
import closure_11 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ View: closure_6, Keyboard: error, SectionList: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, Permissions: map1 } = ME);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { emptyState: { backgroundColor: "transparent", paddingTop: 40 }, sectionSeparator: null, emptyStateText: null, subLabel: null };
createCacheKey = { height: ThemesDefault.space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[3] = { includeFontPadding: true };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: ThemesDefault.colors.TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  guild = guild.guild;
  const role = guild.role;
  ({ permissions: importAll, onPermissionsChanged: dependencyMap } = guild);
  let callback;
  let highestRole;
  closure_6 = undefined;
  let first;
  closure_8 = undefined;
  isGuildOwner = undefined;
  c10 = undefined;
  let currentUser;
  let tmp = callback2();
  callback = tmp;
  currentUser = currentUser.getCurrentUser();
  highestRole = undefined;
  if (null != currentUser) {
    let obj = applyOverwritesAll;
    highestRole = obj.getHighestRole(guild, currentUser.id);
  }
  obj1 = applyOverwritesAll;
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const isRoleHigherResult = obj1.isRoleHigher(guild, id, highestRole, role);
  closure_6 = tmp10;
  const tmp11 = callback(highestRole.useState(""), 2);
  first = tmp11[0];
  closure_8 = tmp11[1];
  [c9, c10] = callback(highestRole.useState(false), 2);
  role(38)(null != guild, "Guild cannot be null");
  const tmp16 = isGuildOwner(guild, currentUser);
  const tmp13 = callback(highestRole.useState(false), 2);
  const tmp6 = importAll;
  obj = { permission: constants.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp6Result = applyOverwritesAll;
  currentUser = highestRole.useRef(false);
  let tmp18Result = tmp16;
  if (!tmp16) {
    let tmp21 = !tmp10;
    if (isRoleHigherResult) {
      tmp21 = canResult;
    }
    tmp18Result = tmp21;
  }
  if (tmp18Result) {
    obj = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl = guild(1236).intl;
    obj1 = { onTemplateOpen: null };
    obj1[0] = function onTemplateOpen() {
      first.dismiss();
      let obj = role(closure_1_3[14]);
      obj = { permissionsEdited: c9, onPermissionsChanged: closure_3, guildId: guild.id };
      obj.openLazy(guild(closure_1_3[16])(closure_1_3[15], closure_1_3.paths), "role-permission-templates-" + guild.id + "-" + role.id, obj);
    };
    obj[2] = intl.format(guild(1236).t.ZhSOBy, obj1);
    tmp18Result = tmp18(guild(4376).Text, obj);
  }
  tmp18Result = tmp18(tmp19, { children: tmp18Result });
  canResult = applyOverwritesAll.can(obj);
  const guildPermissionSpec = role(16176).generateGuildPermissionSpec(guild);
  const mapped = guildPermissionSpec.map((permissions) => {
    const obj = {};
    const merged = Object.assign(permissions);
    permissions = permissions.permissions;
    obj.permissions = permissions.filter((title) => {
      const formatted = title.title.toLowerCase();
      return formatted.includes(closure_7.trimStart().toLowerCase());
    });
    return obj;
  });
  const found = mapped.filter((permissions) => permissions.permissions.length > 0);
  const mapped1 = found.map((title) => ({ title: title.title, data: title.permissions }));
  const children = [closure_14(role(16976), { role }), , , ];
  const tmp14Result = role(16176);
  const tmp24 = mapped1.length > 0;
  const tmp25 = closure_16;
  const tmp26 = closure_15;
  children[1] = closure_14(closure_6, { children: closure_14(guild(6101).SearchField, obj3) });
  children[2] = tmp18Result;
  if (tmp24) {
    const obj4 = { sections: null, stickySectionHeadersEnabled: false, renderItem: null, renderSectionHeader: null, SectionSeparatorComponent: null, ItemSeparatorComponent: null, keyExtractor: null, keyboardDismissMode: "on-drag", contentContainerStyle: null };
    obj4[0] = mapped1;
    obj4[2] = function renderItem(section) {
      ({ item, index } = section);
      let flag;
      flag = item.flag;
      let tmp2 = closure_6;
      ({ description, title } = item);
      if (closure_6) {
        tmp2 = role === highestRole;
      }
      if (!tmp2) {
        tmp2 = tmp;
      }
      if (!tmp2) {
        tmp2 = !_undefined.can(flag, flag);
      }
      if (!tmp2) {
        let obj = {};
        obj = {};
        const merged = Object.assign(role);
        obj.permissions = closure_1_2(closure_1_3[21]).remove(closure_2, flag);
        obj[role.id] = obj;
        tmp2 = !_undefined.can(flag, flag, null, obj);
        const obj3 = closure_1_2(closure_1_3[21]);
      }
      obj = { variant: "text-xs/medium", color: "text-subtle", style: closure_4.subLabel, children: guild(closure_1_3[22]).renderDescription(description) };
      const obj5 = guild(closure_1_3[22]);
      tmp = closure_6;
      obj1 = { start: 0 === index, end: index === section.section.data.length - 1, value: null, disabled: null, onValueChange: null, label: null, subLabel: null };
      const tmp21 = closure_1_14(guild(closure_1_3[12]).Text, obj);
      obj1[2] = closure_1_2(closure_1_3[21]).has(closure_2, flag);
      obj1[3] = tmp2;
      obj1[4] = function onValueChange(arg0) {
        const obj = closure_2_2(closure_2_3[21]);
        if (arg0) {
          let addResult = obj.add(closure_1_2, flag);
        } else {
          addResult = obj.remove(closure_1_2, flag);
        }
        closure_1_3(addResult);
        closure_1_10(true);
      };
      obj1[5] = title;
      obj1[6] = tmp21;
      return closure_1_14(guild(closure_1_3[23]).TableSwitchRow, obj1);
    };
    obj4[3] = function renderSectionHeader(section) {
      const title = section.section.title;
      return callback2(closure_6, { accessible: true, accessibilityRole: "header", accessibilityLabel: title, children: callback2(guild(table[24]).TableRowGroupTitle, { title }) });
    };
    obj4[4] = function SectionSeparatorComponent(leadingItem) {
      let tmp = null;
      if (null != leadingItem.leadingItem) {
        const obj = { style: null };
        obj[0] = closure_4.sectionSeparator;
        tmp = closure_1_14(closure_6, obj);
      }
      return tmp;
    };
    obj4[5] = function ItemSeparatorComponent() {
      return null;
    };
    obj4[6] = function keyExtractor(flag) {
      return flag.flag.toString();
    };
    obj4[8] = guild.contentContainerStyle;
    let tmp18Result1 = tmp18(closure_8, obj4);
  } else {
    let obj5 = { Illustration: null, style: null, bodyStyle: null, body: null };
    obj5[0] = tmp27(9161).NoResultsAlt;
    ({ emptyState: obj10[1], emptyStateText: obj10[2] } = tmp);
    const intl2 = tmp27(1236).intl;
    const obj6 = { query: null };
    obj6[0] = first;
    obj5[3] = intl2.format(tmp27(1236).t.Psh5OO, obj6);
    tmp18Result1 = tmp18(tmp27(1297).EmptyState, obj5);
  }
  children[3] = tmp18Result1;
  return tmp25(tmp26, { children });
};