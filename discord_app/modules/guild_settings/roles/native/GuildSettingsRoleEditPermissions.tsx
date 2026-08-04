import _slicedToArray from "_slicedToArray";
import SearchField from "SearchField";
import get_ActivityIndicator from "getPermissionOptions";
import { isGuildOwner } from "GuildNSFWContentLevel";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "fromString";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
({ View: closure_6, Keyboard: error, SectionList: metroImportAll } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, Permissions: map1 } = ME);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { emptyState: { backgroundColor: "transparent", paddingTop: 40 }, sectionSeparator: null, emptyStateText: null, subLabel: null };
createCacheKey = { height: require("Themes").space.PX_24 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[3] = { includeFontPadding: true };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").colors.TEXT_DEFAULT };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditPermissions.tsx");

export default function GuildSettingsRoleEditPermission(guild) {
  let c10;
  let c9;
  let dependencyMap;
  let importAll;
  guild = guild.guild;
  const role = guild.role;
  ({ permissions: importAll, onPermissionsChanged: dependencyMap } = guild);
  let callback;
  let highestRole;
  let c6;
  let first;
  let closure_8;
  let isGuildOwner;
  c10 = undefined;
  let currentUser;
  let tmp = createCacheKey();
  callback = tmp;
  currentUser = currentUser.getCurrentUser();
  highestRole = undefined;
  if (null != currentUser) {
    let obj = importAll(3918);
    highestRole = obj.getHighestRole(guild, currentUser.id);
  }
  let obj1 = importAll(3918);
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const isRoleHigherResult = obj1.isRoleHigher(guild, id, highestRole, role);
  c6 = tmp10;
  const tmp11 = callback(highestRole.useState(""), 2);
  first = tmp11[0];
  closure_8 = tmp11[1];
  [c9, c10] = callback(highestRole.useState(false), 2);
  role(38)(null != guild, "Guild cannot be null");
  const tmp16 = isGuildOwner(guild, currentUser);
  const tmp13 = callback(highestRole.useState(false), 2);
  const tmp6 = importAll;
  obj = { permission: constants.ADMINISTRATOR, user: currentUser, context: guild };
  const tmp6Result = importAll(3918);
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
      let obj = role(outer1_3[14]);
      obj = { permissionsEdited: c9, onPermissionsChanged: closure_3, guildId: guild.id };
      obj.openLazy(guild(outer1_3[16])(outer1_3[15], outer1_3.paths), "role-permission-templates-" + guild.id + "-" + role.id, obj);
    };
    obj[2] = intl.format(guild(1236).t.ZhSOBy, obj1);
    tmp18Result = tmp18(guild(4281).Text, obj);
  }
  tmp18Result = tmp18(tmp19, { children: tmp18Result });
  canResult = importAll(3918).can(obj);
  const guildPermissionSpec = role(15775).generateGuildPermissionSpec(guild);
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
  const children = [closure_14(role(16591), { role }), , , ];
  const tmp14Result = role(15775);
  const tmp24 = mapped1.length > 0;
  const tmp25 = closure_16;
  const tmp26 = closure_15;
  children[1] = closure_14(c6, { children: closure_14(guild(5901).SearchField, obj3) });
  children[2] = tmp18Result;
  if (tmp24) {
    const obj4 = { sections: null, stickySectionHeadersEnabled: false, renderItem: null, renderSectionHeader: null, SectionSeparatorComponent: null, ItemSeparatorComponent: null, keyExtractor: null, keyboardDismissMode: "on-drag", contentContainerStyle: null };
    obj4[0] = mapped1;
    obj4[2] = function renderItem(section) {
      let description;
      let index;
      let item;
      let title;
      ({ item, index } = section);
      let flag;
      flag = item.flag;
      let tmp2 = c6;
      ({ description, title } = item);
      if (c6) {
        tmp2 = role === highestRole;
      }
      if (!tmp2) {
        tmp2 = tmp;
      }
      if (!tmp2) {
        tmp2 = !_undefined2.can(flag, flag);
      }
      if (!tmp2) {
        let obj = {};
        obj = {};
        const merged = Object.assign(role);
        obj.permissions = outer1_2(outer1_3[21]).remove(closure_2, flag);
        obj[role.id] = obj;
        tmp2 = !_undefined2.can(flag, flag, null, obj);
        const obj3 = outer1_2(outer1_3[21]);
      }
      obj = { variant: "text-xs/medium", color: "text-subtle", style: _undefined.subLabel, children: null };
      obj[3] = guild(outer1_3[22]).renderDescription(description);
      const obj5 = guild(outer1_3[22]);
      tmp = c6;
      const obj1 = { start: 0 === index, end: index === section.section.data.length - 1, value: null, disabled: null, onValueChange: null, label: null, subLabel: null };
      const tmp21 = outer1_14(guild(outer1_3[12]).Text, obj);
      obj1[2] = outer1_2(outer1_3[21]).has(closure_2, flag);
      obj1[3] = tmp2;
      obj1[4] = function onValueChange(arg0) {
        const obj = outer2_2(outer2_3[21]);
        if (arg0) {
          let addResult = obj.add(outer1_2, flag);
        } else {
          addResult = obj.remove(outer1_2, flag);
        }
        outer1_3(addResult);
        outer1_10(true);
      };
      obj1[5] = title;
      obj1[6] = tmp21;
      return outer1_14(guild(outer1_3[23]).TableSwitchRow, obj1);
    };
    obj4[3] = function renderSectionHeader(section) {
      const title = section.section.title;
      return callback2(c6, { accessible: true, accessibilityRole: "header", accessibilityLabel: title, children: callback2(guild(table[24]).TableRowGroupTitle, { title }) });
    };
    obj4[4] = function SectionSeparatorComponent(leadingItem) {
      let tmp = null;
      if (null != leadingItem.leadingItem) {
        const obj = { style: null };
        obj[0] = _undefined.sectionSeparator;
        tmp = outer1_14(c6, obj);
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
    obj5[0] = tmp27(8936).NoResultsAlt;
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