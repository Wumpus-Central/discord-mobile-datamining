// === Module 9750: AddMembersActionSheet ===

// Module 9750 (AddMembersActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import RegexUtilsDefault from "RegexUtils" /* 4547 */;
import GuildUtilsDefault from "GuildUtils" /* 5519 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9738 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
class AddMembersBody {
  constructor(arg0) {
    ({ channel, guild } = global);
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions, permission } = global);
    if (permission === undefined) {
      tmp = setPendingAdditions;
      tmp2 = closure_3;
      permission = setPendingAdditions(closure_3[14]).NONE;
    }
    inActionSheet = global.inActionSheet;
    merged = Object.assign(global, Object.assign({ channel: 0, guild: 0, pendingAdditions: 0, setPendingAdditions: 0, permission: 0, inActionSheet: 0 }));
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    c9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    filterByQuery = function filterByQuery(arg0) {
      const trimmed = str.trim();
      let substr = trimmed;
      if (first) {
        substr = trimmed.slice(1);
      }
      const regExp = new RegExp("" + RegexUtilsDefault.escape(substr), "i");
      return regExp.test(arg0);
    };
    tmp4 = closure_21();
    closure_3 = tmp4;
    obj = closure_7;
    tmp5 = closure_6(closure_7.useState(false), 2);
    first = tmp5[0];
    closure_4 = first;
    closure_5 = tmp5[1];
    tmp7 = closure_6(closure_7.useState(""), 2);
    str = tmp7[0];
    closure_6 = str;
    closure_7 = tmp7[1];
    tmp8 = pendingAdditions;
    tmp9 = closure_3;
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    tmp10 = setPendingAdditions;
    obj3 = setPendingAdditions(closure_3[14]);
    canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
    tmp12 = guild;
    obj4 = guild(closure_3[17]);
    items = [];
    items[0] = closure_11;
    stateFromStores = obj4.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
    obj5 = guild(closure_3[17]);
    items1 = [];
    items1[0] = closure_10;
    stateFromStoresArray = obj5.useStateFromStoresArray(items1, () => GuildMemberStore.getMemberIds(guild.id));
    if (first) {
      items2 = [];
    } else {
      tmp10Result = tmp10(tmp9[18]);
      tmp14 = tmp10Result;
      tmp15 = guild;
      tmp16 = stateFromStores;
      tmp17 = channel;
      tmp18 = permission;
      tmp19 = filterByQuery;
      rolesRows = tmp10Result.getRolesRows(guild, stateFromStores, channel, permission, filterByQuery);
      num = 0;
      tmp20 = 0 === rolesRows.length && "" === str.trim();
      if (tmp20) {
        num2 = 1;
        tmp20 = 1 === stateFromStores.length;
      }
      items2 = rolesRows;
      if (tmp20) {
        tmp10Result1 = tmp10(tmp9[18]);
        items2 = tmp10Result1.getNoRolesRow();
      }
    }
    tmp10Result2 = tmp10(tmp9[18]);
    obj1 = { filter: filterByQuery };
    membersRows = tmp10Result2.getMembersRows(stateFromStoresArray, channel, guild, permission, obj1);
    sum = items2.length + membersRows.length;
    closure_8 = sum;
    items3 = [, ];
    items3[0] = sum;
    items3[1] = str;
    effect = obj.useEffect(() => {
      if ("" !== str) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const intl = util.intl;
        const obj = { count };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
      }
    }, items3);
    if (items2.length > 0) {
      intl = tmp12(tmp9[20]).intl;
      items4 = [];
      items4[0] = intl.string(tmp12(tmp9[20]).t["LPJmL/"]);
      items5 = items4;
    } else {
      items5 = [];
    }
    items6 = [...items2];
    if (membersRows.length > 0) {
      intl2 = tmp12(tmp9[20]).intl;
      items7 = [];
      items7[0] = intl2.string(tmp12(tmp9[20]).t["9Oq93m"]);
      items8 = items7;
    } else {
      items8 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(membersRows, HermesBuiltin.arraySpread(items8, tmp23));
    num3 = 0;
    if (items2.length > 0) {
      num3 = 1;
    }
    c9 = num3;
    diff = num3 + items2.length - 1;
    closure_10 = diff;
    sum1 = diff;
    if (membersRows.length > 0) {
      sum1 = diff + 2;
    }
    items9 = [];
    closure_11 = sum1;
    closure_12 = sum1 + membersRows.length - 1;
    obj2 = { title: null, data: null };
    intl3 = tmp12(tmp9[20]).intl;
    obj2.title = intl3.string(tmp12(tmp9[20]).t["LPJmL/"]);
    obj2.data = items2;
    arr = items9.push(obj2);
    obj3 = { title: null, data: null };
    intl4 = tmp12(tmp9[20]).intl;
    obj3.title = intl4.string(tmp12(tmp9[20]).t["9Oq93m"]);
    obj3.data = membersRows;
    arr1 = items9.push(obj3);
    values = Object.values(pendingAdditions);
    mapped = values.map((display) => {
      const obj = {};
      const merged = Object.assign(display.display);
      obj.id = display.row.id;
      return obj;
    });
    if (inActionSheet) {
      BottomSheetScrollView = tmp12(tmp9[24]).BottomSheetScrollView;
    } else {
      BottomSheetScrollView = c9;
    }
    tmp12Result = tmp12(tmp9[25]);
    tmp34 = jsx;
    obj4 = { style: tmp4.inputContainer, children: null };
    tmp31 = inActionSheet ? tmp12Result.BottomSheetFlashList : tmp12Result.FlashList;
    tmp32 = jsxs;
    tmp33 = Fragment;
    tmp35 = closure_8;
    obj5 = { accessibilityLabel: null, placeholder: null, tags: null, onChangeText: null, onRemove: null };
    tmp8Result = tmp8(tmp9[26]);
    intl5 = tmp12(tmp9[20]).intl;
    obj5.accessibilityLabel = intl5.string(tmp12(tmp9[20]).t["5h0QOP"]);
    intl6 = tmp12(tmp9[20]).intl;
    obj5.placeholder = intl6.string(tmp12(tmp9[20]).t.TVZdKh);
    obj5.tags = mapped;
    obj5.onChangeText = function onChangeText(str) {
      str = str.trim();
      const tmp = "@" === str.charAt(0);
      let substr = str;
      if (tmp) {
        substr = str.slice(1);
      }
      const members = GuildUtilsDefault.requestMembers(guild.id, substr, __initData);
      closure_7(str);
      closure_5(tmp);
    };
    obj5.onRemove = function onRemove(arg0) {
      closure_0 = Object.keys(pendingAdditions)[arg0];
      importAll((arg0) => {
        const items = [closure_0];
        return closure_5(arg0, items.map(_toPropertyKey));
      });
    };
    obj4.children = jsx(tmp8Result, obj5);
    items10 = [, , ];
    items10[0] = jsx(closure_8, obj4);
    if (canEveryoneRoleResult) {
      obj6 = { style: null, children: null };
      obj6.style = tmp4.adminWarning;
      obj7 = { messageType: null, children: null };
      obj7.messageType = tmp12(tmp9[21]).HelpMessageTypes.WARNING;
      intl7 = tmp12(tmp9[20]).intl;
      obj7.children = intl7.string(tmp12(tmp9[20]).t["5f3HIC"]);
      obj6.children = tmp34(tmp12(tmp9[21]).HelpMessage, obj7);
      canEveryoneRoleResult = tmp34(tmp35, obj6);
    }
    items10[1] = canEveryoneRoleResult;
    if ("" !== str) {
      if (0 === items2.length) {
        if (0 === membersRows.length) {
          obj8 = {};
          tmp39 = obj8;
          tmp40 = merged;
          merged1 = Object.assign(merged);
          obj9 = { Illustration: null, style: null, bodyStyle: null, body: null };
          obj9.Illustration = tmp12(tmp9[28]).NoResultsAlt;
          ({ emptyState: obj19.style, emptyStateText: obj19.bodyStyle } = tmp4);
          intl8 = tmp12(tmp9[20]).intl;
          obj10 = { query: null };
          obj10.query = str;
          obj9.body = intl8.format(tmp12(tmp9[20]).t.ErpIY3, obj10);
          obj8.children = tmp34(tmp12(tmp9[21]).EmptyState, obj9);
          tmp34Result = tmp34(BottomSheetScrollView, obj8);
        }
        obj11 = { children: null };
        items10[2] = tmp34Result;
        obj11.children = items10;
        return tmp32(tmp33, obj11);
      }
    }
    obj12 = {};
    merged2 = Object.assign(merged);
    obj12.extraData = pendingAdditions;
    obj12.data = items6;
    obj13 = { paddingHorizontal: tmp8(tmp9[13]).space.PX_16, paddingBottom: tmp8(tmp9[13]).space.PX_16 + pendingAdditions(closure_3[15])(obj).insets.bottom };
    obj12.contentContainerStyle = obj13;
    obj12.renderItem = function renderRow(item) {
      item = item.item;
      const index = item.index;
      if (typeof item === "string") {
        let items = [sectionRowWrapper.sectionRowWrapper, ];
        let obj = { style: null, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
        items[1] = 0 === index ? { paddingTop: 0 } : {};
        obj.style = items;
        obj.children = item;
        closure_1_17(guild(sectionRowWrapper[22]).Text, obj);
      } else {
        let tmp2 = num3 === index;
        if (!tmp2) {
          tmp2 = sum1 === index;
        }
        obj = { start: tmp2, end: null, item: null, guildId: null, onPress: null, checked: null };
        let tmp4 = c10 === index;
        if (!tmp4) {
          tmp4 = closure_12 === index;
        }
        obj.end = tmp4;
        obj.item = item;
        obj.guildId = item.id;
        obj.onPress = function onPress() {
          closure_0 = item;
          if (item.rowType !== constants.EMPTY_STATE) {
            importAll((arg0) => {
              let obj = {};
              const merged = Object.assign(arg0);
              const combined = "" + closure_0.rowType + ":" + closure_0.id;
              if (combined in obj) {
                delete tmp[tmp2];
              } else {
                const rowType = tmp4.rowType;
                if (constants.ROLE !== rowType) {
                  if (tmp6.ADMINISTRATOR !== rowType) {
                    user = user.getUser(tmp4.id);
                    if (null != user) {
                      obj = { text: tmp4.name, icon: null };
                      obj = { user, guildId: item.id, avatarStyle: sectionRowWrapper.tagAvatar, style: sectionRowWrapper.tagAvatar };
                      obj.icon = closure_3_17(guild(closure_3[21]).Avatar, obj);
                      let tmp7 = obj;
                    }
                  }
                  if (null != tmp7) {
                    const obj1 = { display: tmp7, row: tmp4 };
                    obj[combined] = obj1;
                  }
                }
                const obj2 = { text: tmp4.name, icon: null };
                const obj3 = { style: null };
                const items = [sectionRowWrapper.tagRoleColor, ];
                const obj4 = { backgroundColor: tmp4.colorString };
                items[1] = obj4;
                obj3.style = items;
                obj2.icon = closure_3_17(c8, obj3);
                tmp7 = obj2;
              }
              return obj;
            });
          }
        };
        const _HermesInternal = HermesInternal;
        obj.checked = "" + item.rowType + ":" + item.id in pendingAdditions;
        return closure_1_17(guild(sectionRowWrapper[23]).ChannelOverwritesCheckboxItem, obj);
      }
    };
    obj12.keyboardShouldPersistTaps = "handled";
    tmp34Result = tmp34(tmp31, obj12);
    return;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_8, ScrollView: closure_9 } = get_ActivityIndicator);
const ChannelPermissionsConstants = fn(8401);
({ RowType: closure_14, MEMBER_REQUEST_COUNT: closure_15 } = ChannelPermissionsConstants);
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1 }, inputContainer: null, tagRoleColor: null, tagAvatar: null, emptyState: null, emptyStateText: null, sectionRowWrapper: null, adminWarning: null };
createStyles = { alignItems: "stretch", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
createStyles.inputContainer = createStyles;
createStyles.tagRoleColor = { height: 12, width: 12, borderRadius: 6 };
let size = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
createStyles.tagAvatar = size;
createStyles.emptyState = { paddingTop: nativeDefault.space.PX_16 };
let obj1 = { paddingTop: nativeDefault.space.PX_16 };
createStyles.emptyStateText = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.sectionRowWrapper = { paddingVertical: nativeDefault.space.PX_12 };
createStyles.adminWarning = { marginHorizontal: 16, marginVertical: 8 };
const __initData = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(channel) {
  channel = channel.channel;
  closure_2 = async function _handleAddPressed() {
    const items = [];
    closure_128_0 = items;
    closure_128_1 = 0;
    closure_128_2 = 0;
    const _Object = Object;
    const values = Object.values(pendingAdditions);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === constants.ROLE) {
          closure_2 = closure_2 + 1;
          closure_1_0.push(channel(4705).permissionOverwriteForRole(row.id, closure_0.type));
          const obj = channel(4705);
        } else if (row.rowType === tmp2.MEMBER) {
          closure_1 = closure_1 + 1;
          closure_1_0.push(channel(4705).permissionOverwriteForUser(row.id, closure_0.type));
          const obj2 = channel(4705);
        }
      }
    });
    await closure_0(9739).savePermissionUpdates(channel.id, items);
    if (1 === tmp7) {
      dependencyMap = 0;
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const result = channel(4258).memberOrRoleAddedToast(closure_128_2, closure_128_1);
      channel(4258);
      tmp3(4527).hideActionSheet();
      dependencyMap = 0;
      tmp3(4527);
    }
    return arg1;
  };
  const tmp2 = _slicedToArray(noop.useState({}), 2);
  const pendingAdditions = tmp2[0];
  let obj = channel(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return GuildStore.getGuild(guildId);
  });
  let str = pendingAdditions(4713)(channel, true);
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let _Object = Object;
    const tmp10 = 0 === Object.keys(pendingAdditions).length;
    obj = { title: null, subtitle: null, trailing: null };
    const intl3 = tmp4(1114).intl;
    obj.title = intl3.string(tmp4(1114).t.dMJ3Y6);
    obj.subtitle = str;
    if (channel.canSkip) {
      if (tmp10) {
        obj = { size: "sm", text: null, onPress: null, variant: "secondary" };
        const intl2 = tmp4(1114).intl;
        obj.text = intl2.string(tmp4(1114).t["5Wxrcd"]);
        obj.onPress = function onPress() {
          first(dependencyMap[33]).hideActionSheet();
        };
        let obj4 = obj;
      }
      const obj1 = { scrollable: true, header: null, startExpanded: true, children: null };
      obj.trailing = tmp11(tmp12, obj4);
      obj1.header = tmp11(tmp4(7149).BottomSheetTitleHeader, obj);
      let obj2 = { style: tmp.container, children: null };
      const obj3 = { channel, guild: stateFromStores, permission: channel.accessPermissions, pendingAdditions, setPendingAdditions: tmp2[1], inActionSheet: true };
      obj2.children = tmp11(AddMembersBody, obj3);
      obj1.children = tmp11(closure_8, obj2);
      return tmp11(tmp4(7150).BottomSheet, obj1);
    }
    obj4 = { size: "sm", text: null, onPress: null, variant: null, disabled: null };
    const intl = tmp4(1114).intl;
    obj4.text = intl.string(tmp4(1114).t.OYkgVk);
    obj4.onPress = function handleAddPressed() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let str2 = "primary";
    if (tmp10) {
      str2 = "secondary";
    }
    obj4.variant = str2;
    obj4.disabled = tmp10;
  }
};
export { AddMembersBody };