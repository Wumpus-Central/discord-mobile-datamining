// === Module 9632: _toPropertyKey ===

// Module 9632 (_toPropertyKey)
import ThemesDefault from "Themes" /* 712 */;
import applyOverwritesAll from "applyOverwrites" /* 4094 */;
import getRoleRowDataAll from "getRoleRowData" /* 9628 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import closure_6 from "_slicedToArray" /* 32 */;
import closure_7 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_10 from "trackCommunicationDisabled" /* 1992 */;
import closure_11 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_12 from "createGuildRecordFromRust" /* 1910 */;
import closure_13 from "mergeGuildAvatar" /* 1922 */;
import RowType from "RowType" /* 8603 */;
import { Permissions } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
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
      permission = require("applyOverwrites").NONE;
    }
    inActionSheet = global.inActionSheet;
    merged = Object.assign(global, Object.create(null));
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
      const regExp = new RegExp("" + pendingAdditions(sectionRowWrapper[16]).escape(substr), "i");
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
    obj3 = require("applyOverwrites");
    canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
    tmp12 = guild;
    obj4 = require("initialize");
    items = [];
    items[0] = closure_11;
    stateFromStores = obj4.useStateFromStores(items, () => sum1.getSortedRoles(guild.id));
    obj5 = require("initialize");
    items1 = [];
    items1[0] = closure_10;
    stateFromStoresArray = obj5.useStateFromStoresArray(items1, () => _undefined.getMemberIds(guild.id));
    if (first) {
      items2 = [];
    } else {
      tmp10Result = require("getRoleRowData");
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
        tmp10Result1 = require("getRoleRowData");
        items2 = tmp10Result1.getNoRolesRow();
      }
    }
    tmp10Result2 = require("getRoleRowData");
    membersRows = tmp10Result2.getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery);
    sum = items2.length + membersRows.length;
    closure_8 = sum;
    items3 = [, ];
    items3[0] = sum;
    items3[1] = str;
    effect = obj.useEffect(() => {
      if ("" !== str) {
        const AccessibilityAnnouncer = guild(sectionRowWrapper[19]).AccessibilityAnnouncer;
        const intl = guild(sectionRowWrapper[20]).intl;
        const obj = { count: null };
        obj[0] = c8;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(sectionRowWrapper[20]).t.ZGVL3g, obj), "polite");
      }
    }, items3);
    if (items2.length > 0) {
      intl = require("getSystemLocale").intl;
      items4 = [];
      items4[0] = intl.string(require("getSystemLocale").t["LPJmL/"]);
      items5 = items4;
    } else {
      items5 = [];
    }
    items6 = [...items2];
    if (membersRows.length > 0) {
      intl2 = require("getSystemLocale").intl;
      items7 = [];
      items7[0] = intl2.string(require("getSystemLocale").t["9Oq93m"]);
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
    obj1 = { title: null, data: null };
    intl3 = require("getSystemLocale").intl;
    obj1[0] = intl3.string(require("getSystemLocale").t["LPJmL/"]);
    obj1[1] = items2;
    arr = items9.push(obj1);
    obj2 = { title: null, data: null };
    intl4 = require("getSystemLocale").intl;
    obj2[0] = intl4.string(require("getSystemLocale").t["9Oq93m"]);
    obj2[1] = membersRows;
    arr1 = items9.push(obj2);
    values = Object.values(pendingAdditions);
    mapped = values.map((display) => {
      const obj = {};
      const merged = Object.assign(display.display);
      obj.id = display.row.id;
      return obj;
    });
    if (inActionSheet) {
      BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
    } else {
      BottomSheetScrollView = c9;
    }
    tmp12Result = require("noop");
    tmp34 = jsx;
    obj3 = { style: tmp4.inputContainer, children: null };
    tmp31 = inActionSheet ? tmp12Result.BottomSheetFlashList : tmp12Result.FlashList;
    tmp32 = jsxs;
    tmp33 = Fragment;
    tmp35 = closure_8;
    obj4 = { accessibilityLabel: null, placeholder: null, tags: null, onChangeText: null, onRemove: null };
    tmp8Result = require("module_9637");
    intl5 = require("getSystemLocale").intl;
    obj4[0] = intl5.string(require("getSystemLocale").t["5h0QOP"]);
    intl6 = require("getSystemLocale").intl;
    obj4[1] = intl6.string(require("getSystemLocale").t.TVZdKh);
    obj4[2] = mapped;
    obj4[3] = function onChangeText(str) {
      str = str.trim();
      const tmp = "@" === str.charAt(0);
      let substr = str;
      if (tmp) {
        substr = str.slice(1);
      }
      const members = pendingAdditions(sectionRowWrapper[27]).requestMembers(guild.id, substr, closure_1_15);
      callback3(str);
      callback2(tmp);
    };
    obj4[4] = function onRemove(arg0) {
      closure_0 = Object.keys(pendingAdditions)[arg0];
      callback((arg0) => {
        const items = [closure_0];
        return closure_1_5(arg0, items.map(closure_1_20));
      });
    };
    obj3[1] = jsx(tmp8Result, obj4);
    items10 = [, , ];
    items10[0] = jsx(closure_8, obj3);
    if (canEveryoneRoleResult) {
      obj5 = { style: null, children: null };
      obj5[0] = tmp4.adminWarning;
      obj6 = { messageType: null, children: null };
      obj6[0] = require("Button").HelpMessageTypes.WARNING;
      intl7 = require("getSystemLocale").intl;
      obj6[1] = intl7.string(require("getSystemLocale").t["5f3HIC"]);
      obj5[1] = tmp34(require("Button").HelpMessage, obj6);
      canEveryoneRoleResult = tmp34(tmp35, obj5);
    }
    items10[1] = canEveryoneRoleResult;
    if ("" !== str) {
      if (0 === items2.length) {
        if (0 === membersRows.length) {
          obj7 = {};
          tmp39 = obj7;
          tmp40 = merged;
          merged1 = Object.assign(merged);
          obj8 = { Illustration: null, style: null, bodyStyle: null, body: null };
          obj8[0] = require("getNoResultsAltSource").NoResultsAlt;
          ({ emptyState: obj18[1], emptyStateText: obj18[2] } = tmp4);
          intl8 = require("getSystemLocale").intl;
          obj9 = { query: null };
          obj9[0] = str;
          obj8[3] = intl8.format(require("getSystemLocale").t.ErpIY3, obj9);
          obj7.children = tmp34(require("Button").EmptyState, obj8);
          tmp34Result = tmp34(BottomSheetScrollView, obj7);
        }
        obj10 = { children: null };
        items10[2] = tmp34Result;
        obj10[0] = items10;
        return tmp32(tmp33, obj10);
      }
    }
    obj11 = {};
    merged2 = Object.assign(merged);
    obj11.extraData = pendingAdditions;
    obj11.data = items6;
    obj12 = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 + require("useSafeAreaInsetsKeyboardAware")(obj).insets.bottom };
    obj11.contentContainerStyle = obj12;
    obj11.renderItem = function renderRow(item) {
      item = item.item;
      const index = item.index;
      if (typeof item === "string") {
        let items = [sectionRowWrapper.sectionRowWrapper, ];
        let obj = { style: null, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
        items[1] = 0 === index ? { paddingTop: 0 } : {};
        obj[0] = items;
        obj[5] = item;
        closure_1_17(guild(sectionRowWrapper[22]).Text, obj);
        const tmp9 = closure_1_17;
      } else {
        let tmp2 = num3 === index;
        if (!tmp2) {
          tmp2 = sum1 === index;
        }
        obj = { start: null, end: null, item: null, guildId: null, onPress: null, checked: null };
        obj[0] = tmp2;
        let tmp4 = c10 === index;
        if (!tmp4) {
          tmp4 = closure_12 === index;
        }
        obj[1] = tmp4;
        obj[2] = item;
        obj[3] = item.id;
        obj[4] = function onPress() {
          if (item.rowType !== closure_2_14.EMPTY_STATE) {
            closure_1_2((arg0) => {
              let obj = {};
              const merged = Object.assign(arg0);
              const combined = "" + user.rowType + ":" + user.id;
              if (combined in obj) {
                delete tmp[tmp2];
              } else {
                const rowType = tmp4.rowType;
                if (closure_2_14.ROLE !== rowType) {
                  if (tmp6.ADMINISTRATOR !== rowType) {
                    if (tmp6.MEMBER === rowType) {
                      user = closure_2_13.getUser(tmp4.id);
                      if (null != user) {
                        obj = { text: null, icon: null };
                        obj[0] = tmp4.name;
                        obj = { user: null, guildId: null, avatarStyle: null, style: null };
                        obj[0] = user;
                        obj[1] = user.id;
                        obj[2] = closure_1_3.tagAvatar;
                        obj[3] = closure_1_3.tagAvatar;
                        obj[1] = closure_2_17(item(closure_2_3[21]).Avatar, obj);
                        let tmp7 = obj;
                      }
                    }
                  }
                  if (null != tmp7) {
                    obj1 = { display: null, row: null };
                    obj1[0] = tmp7;
                    obj1[1] = tmp4;
                    obj[combined] = obj1;
                  }
                }
                const obj2 = { text: null, icon: null };
                obj2[0] = tmp4.name;
                const obj3 = { style: null };
                const items = [closure_1_3.tagRoleColor, ];
                const obj4 = { backgroundColor: null };
                obj4[0] = tmp4.colorString;
                items[1] = obj4;
                obj3[0] = items;
                obj2[1] = closure_2_17(closure_2_8, obj3);
                tmp7 = obj2;
              }
              return obj;
            });
          }
        };
        const _HermesInternal = HermesInternal;
        obj[5] = "" + item.rowType + ":" + item.id in pendingAdditions;
        return closure_1_17(guild(sectionRowWrapper[23]).ChannelOverwritesCheckboxItem, obj);
      }
    };
    obj11.keyboardShouldPersistTaps = "handled";
    tmp34Result = tmp34(tmp31, obj11);
    return;
  }
}
({ View: closure_8, ScrollView: c9 } = get_ActivityIndicator);
({ RowType: closure_14, MEMBER_REQUEST_COUNT: closure_15 } = RowType);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
createCacheKey = { container: { flex: 1 }, inputContainer: null, tagRoleColor: null, tagAvatar: null, emptyState: null, emptyStateText: null, sectionRowWrapper: null, adminWarning: null };
createCacheKey = { alignItems: "stretch", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { height: 12, width: 12, borderRadius: 6 };
createCacheKey[3] = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm };
let obj1 = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[4] = { paddingTop: ThemesDefault.space.PX_16 };
let obj2 = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let obj3 = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[6] = { paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[7] = { marginHorizontal: 16, marginVertical: 8 };
let closure_21 = createCacheKey.createStyles(createCacheKey);
let obj4 = { paddingVertical: ThemesDefault.space.PX_12 };
let result = require("set").fileFinishedImporting("modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(channel) {
  channel = channel.channel;
  let first;
  function _handleAddPressed() {
    const self = this;
    let tmp = closure_1_4(function*() {
      c1 = tmp3;
      const items = [];
      c1 = 0;
      c2 = 0;
      const _Object = Object;
      const values = Object.values(closure_1_1);
      const item = values.forEach((row) => {
        row = row.row;
        let tmp = null != row.id;
        if (tmp) {
          tmp = "" !== row.id;
        }
        if (tmp) {
          if (row.rowType === closure_2_14.ROLE) {
            closure_2 = closure_2 + 1;
            items.push(closure_2_0(4631).permissionOverwriteForRole(row.id, items.type));
            const obj = closure_2_0(4631);
          } else if (row.rowType === tmp2.MEMBER) {
            closure_1 = closure_1 + 1;
            items.push(closure_2_0(4631).permissionOverwriteForUser(row.id, items.type));
            const obj2 = closure_2_0(4631);
          }
        }
      });
      dependencyMap = 1;
      yield closure_1_0(9629).savePermissionUpdates(closure_1_0.id, items);
      if (1 === tmp7) {
        dependencyMap = 0;
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        let obj = closure_1_0(4161);
        const result = obj.memberOrRoleAddedToast(c2, c1);
        obj1 = closure_1_1(4412);
        obj1.hideActionSheet();
        dependencyMap = 0;
      }
      dependencyMap = 0;
      return arg1;
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp2 = callback(React.useState({}), 2);
  first = tmp2[0];
  let obj = channel(589);
  let items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return closure_1_12.getGuild(guildId);
  });
  let str = first(4639)(channel, true);
  if (str == null) {
    str = "";
  }
  if (null == stateFromStores) {
    return null;
  } else {
    let _Object = Object;
    const tmp10 = 0 === Object.keys(first).length;
    obj = { title: null, subtitle: null, trailing: null };
    const intl3 = tmp4(1236).intl;
    obj[0] = intl3.string(tmp4(1236).t.dMJ3Y6);
    obj[1] = str;
    if (channel.canSkip) {
      if (tmp10) {
        obj = { size: "sm", text: null, onPress: null, variant: "secondary" };
        const intl2 = tmp4(1236).intl;
        obj[1] = intl2.string(tmp4(1236).t["5Wxrcd"]);
        obj[2] = function onPress() {
          first(table[33]).hideActionSheet();
        };
        let obj4 = obj;
      }
      obj1 = { scrollable: true, header: null, startExpanded: true, children: null };
      obj[2] = tmp11(tmp12, obj4);
      obj1[1] = tmp11(tmp4(5573).BottomSheetTitleHeader, obj);
      let obj2 = { style: null, children: null };
      obj2[0] = tmp.container;
      const obj3 = { channel: null, guild: null, permission: null, pendingAdditions: null, setPendingAdditions: null, inActionSheet: true };
      obj3[0] = channel;
      obj3[1] = stateFromStores;
      obj3[2] = channel.accessPermissions;
      obj3[3] = first;
      obj3[4] = tmp2[1];
      obj2[1] = tmp11(AddMembersBody, obj3);
      obj1[3] = tmp11(closure_8, obj2);
      return tmp11(tmp4(5574).BottomSheet, obj1);
    }
    obj4 = { size: "sm", text: null, onPress: null, variant: null, disabled: null };
    const intl = tmp4(1236).intl;
    obj4[1] = intl.string(tmp4(1236).t.OYkgVk);
    obj4[2] = function handleAddPressed() {
      const self = this;
      const apply = _handleAddPressed.apply;
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
    obj4[3] = str2;
    obj4[4] = tmp10;
  }
};
export { AddMembersBody };