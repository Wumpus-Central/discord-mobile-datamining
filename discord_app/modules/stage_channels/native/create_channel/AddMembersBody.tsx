// discord_app/modules/stage_channels/native/create_channel/AddMembersBody.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import RemoveIcon from "RemoveIcon";
import get_ActivityIndicator from "Button";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import RowType from "RowType";
import { Permissions } from "sum";
import jsxProd from "BottomSheetModal";
import createCacheKey from "createCacheKey";

let c9;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let error;
let map1;
let metroImportAll;
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
({ View: error, ScrollView: metroImportAll, SectionList: c9 } = get_ActivityIndicator);
({ RowType: map1, MEMBER_REQUEST_COUNT: closure_14 } = RowType);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { inputContainer: null, inputDescContainer: null, inputDescText: null, tagRoleColor: null, tagAvatar: null, emptyState: null, emptyStateText: null, sectionRowWrapper: null, adminWarning: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12 };
createCacheKey[2] = { flex: 1, textAlign: "center" };
let obj1 = { flexDirection: "row", paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12 };
createCacheKey[3] = { height: 12, width: 12, borderRadius: require("Themes").radii.round };
let obj2 = { height: 12, width: 12, borderRadius: require("Themes").radii.round };
createCacheKey[4] = { width: 16, height: 16, borderRadius: require("Themes").radii.sm };
createCacheKey[5] = { backgroundColor: "transparent", paddingTop: 40 };
let obj3 = { width: 16, height: 16, borderRadius: require("Themes").radii.sm };
createCacheKey[6] = { color: require("Themes").colors.TEXT_DEFAULT };
let obj4 = { color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[7] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingVertical: require("Themes").space.PX_12 };
createCacheKey[8] = { marginHorizontal: 16, marginVertical: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingVertical: require("Themes").space.PX_12 };
const result = require("noop").fileFinishedImporting("modules/stage_channels/native/create_channel/AddMembersBody.tsx");

export default function AddMembersBody(pendingAdditions) {
  let channel;
  let guild;
  let importAll;
  let inActionSheet;
  let inputDesc;
  let permission;
  ({ channel, guild } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: importAll, permission } = pendingAdditions);
  if (permission === undefined) {
    permission = importAll(3953).NONE;
  }
  ({ inputDesc, inActionSheet } = pendingAdditions);
  let dependencyMap;
  let first;
  let callback;
  let str;
  let closure_7;
  let c8;
  function filterByQuery(arg0) {
    const trimmed = str.trim();
    let substr = trimmed;
    if (first) {
      substr = trimmed.slice(1);
    }
    const regExp = new RegExp("" + pendingAdditions(_undefined[15]).escape(substr), "i");
    return regExp.test(arg0);
  }
  const tmp3 = createCacheKey();
  dependencyMap = tmp3;
  let obj = { isKeyboardAwareOnAndroid: !inActionSheet };
  let obj1 = guild(589);
  let items = [createGuildRoleRecordFromRust];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_11.getSortedRoles(guild.id));
  let obj2 = str;
  let tmp7 = callback(str.useState(false), 2);
  first = tmp7[0];
  callback = tmp7[1];
  const tmp9 = callback(str.useState(""), 2);
  str = tmp9[0];
  closure_7 = tmp9[1];
  let obj3 = importAll(3953);
  let canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
  let obj4 = guild(589);
  const items1 = [trackCommunicationDisabled];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items1, () => outer1_10.getMemberIds(guild.id));
  if (first) {
    let items2 = [];
  } else {
    let tmp10Result = tmp10(9003);
    const rolesRowsWithPermissionDisabled = tmp10Result.getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery);
    let tmp19 = 0 === rolesRowsWithPermissionDisabled.length && "" === str.trim();
    if (tmp19) {
      tmp19 = 1 === stateFromStores.length;
    }
    items2 = rolesRowsWithPermissionDisabled;
    if (tmp19) {
      tmp10Result = tmp10(9003);
      items2 = tmp10Result.getNoRolesRow();
    }
  }
  const membersRows = importAll(9003).getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery);
  const items3 = [];
  obj = { title: null, data: null };
  let intl = tmp6(1236).intl;
  obj[0] = intl.string(guild(1236).t["LPJmL/"]);
  obj[1] = items2;
  items3.push(obj);
  obj = { title: null, data: null };
  let intl2 = tmp6(1236).intl;
  obj[0] = intl2.string(guild(1236).t["9Oq93m"]);
  obj[1] = membersRows;
  items3.push(obj);
  const values = Object.values(pendingAdditions);
  const sum = items2.length + membersRows.length;
  c8 = sum;
  const items4 = [sum, str];
  const mapped = values.map((display) => {
    const obj = {};
    const merged = Object.assign(display.display);
    obj.id = display.row.id;
    return obj;
  });
  const effect = obj2.useEffect(() => {
    if ("" !== str) {
      const AccessibilityAnnouncer = guild(_undefined[20]).AccessibilityAnnouncer;
      const intl = guild(_undefined[18]).intl;
      const obj = { count: null };
      obj[0] = c8;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(_undefined[18]).t.ZGVL3g, obj), "polite");
    }
  }, items4);
  if (inActionSheet) {
    let BottomSheetScrollView = tmp6(5399).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = c8;
  }
  if (inActionSheet) {
    let BottomSheetSectionList = tmp6(5399).BottomSheetSectionList;
  } else {
    BottomSheetSectionList = closure_9;
  }
  obj1 = { style: tmp3.inputContainer, children: null };
  obj2 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: true };
  const tmp10Result1 = importAll(9003);
  const tmp25 = closure_18;
  const tmp26 = closure_17;
  const intl3 = tmp6(1236).intl;
  obj2[0] = intl3.string(guild(1236).t.TVZdKh);
  obj2[1] = mapped;
  obj2[2] = function onChangeText(str) {
    str = str.trim();
    const tmp = "@" === str.charAt(0);
    let substr = str;
    if (tmp) {
      substr = str.slice(1);
    }
    const members = pendingAdditions(_undefined[23]).requestMembers(guild.id, substr, outer1_14);
    callback3(str);
    callback2(tmp);
  };
  obj2[3] = function onRemove(arg0) {
    let closure_0 = Object.keys(pendingAdditions)[arg0];
    callback((arg0) => {
      const items = [closure_0];
      return outer1_4(arg0, items.map(outer1_19));
    });
  };
  obj1[1] = callback2(pendingAdditions(9015), obj2);
  const items5 = [callback2(closure_7, obj1), , , ];
  let tmp27Result = null;
  if (null != inputDesc) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp3.inputDescContainer;
    obj4 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj4[0] = tmp3.inputDescText;
    obj4[3] = inputDesc;
    obj3[1] = tmp27(tmp6(4299).Text, obj4);
    tmp27Result = tmp27(tmp28, obj3);
  }
  items5[1] = tmp27Result;
  if (canEveryoneRoleResult) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp3.adminWarning;
    const obj6 = { messageType: null, children: null };
    obj6[0] = tmp6(1297).HelpMessageTypes.WARNING;
    const intl4 = tmp6(1236).intl;
    obj6[1] = intl4.string(tmp6(1236).t["5f3HIC"]);
    obj5[1] = tmp27(tmp6(1297).HelpMessage, obj6);
    canEveryoneRoleResult = tmp27(tmp28, obj5);
  }
  items5[2] = canEveryoneRoleResult;
  if ("" !== str) {
    if (0 === items2.length) {
      if (0 === membersRows.length) {
        const obj7 = { children: null };
        const obj8 = { Illustration: null, style: null, bodyStyle: null, body: null };
        obj8[0] = tmp6(9020).NoResultsAlt;
        ({ emptyState: obj20[1], emptyStateText: obj20[2] } = tmp3);
        const intl5 = tmp6(1236).intl;
        const obj9 = { query: null };
        obj9[0] = str;
        obj8[3] = intl5.format(tmp6(1236).t.ErpIY3, obj9);
        obj7[0] = tmp27(tmp6(1297).EmptyState, obj8);
        tmp27Result = tmp27(BottomSheetScrollView, obj7);
      }
      const obj10 = { children: null };
      items5[3] = tmp27Result;
      obj10[0] = items5;
      return tmp25(tmp26, obj10);
    }
  }
  const obj11 = { contentContainerStyle: null, renderItem: null, renderSectionHeader: null, sections: null, keyboardShouldPersistTaps: "always" };
  const tmp4Result = pendingAdditions(9015);
  obj11[0] = { paddingHorizontal: pendingAdditions(712).space.PX_16, paddingBottom: pendingAdditions(712).space.PX_16 + pendingAdditions(5369)(obj).insets.bottom };
  obj11[1] = function renderItem(item) {
    let index;
    let section;
    item = item.item;
    ({ index, section } = item);
    let tmp = 0 === index;
    if (tmp) {
      const intl = guild(_undefined[18]).intl;
      tmp = section.title === intl.string(guild(_undefined[18]).t["LPJmL/"]);
    }
    let obj = { start: tmp, end: index === section.data.length - 1, guildId: item.id, item, disabled: item.disabled, subLabel: null, onPress: null };
    let stringResult = null;
    if (item.disabled) {
      const intl2 = guild(_undefined[18]).intl;
      stringResult = intl2.string(guild(_undefined[18]).t.MVVOCv);
    }
    obj[5] = stringResult;
    obj[6] = function onPress() {
      if (item.rowType !== outer2_13.EMPTY_STATE) {
        outer1_2((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          const combined = "" + user.rowType + ":" + user.id;
          if (combined in obj) {
            delete tmp[tmp2];
          } else {
            const rowType = tmp4.rowType;
            if (outer2_13.ROLE !== rowType) {
              if (tmp6.ADMINISTRATOR !== rowType) {
                if (tmp6.MEMBER === rowType) {
                  user = outer2_12.getUser(tmp4.id);
                  if (null != user) {
                    obj = { text: null, icon: null };
                    obj[0] = tmp4.name;
                    obj = { user: null, guildId: null, avatarStyle: null, style: null };
                    obj[0] = user;
                    obj[1] = user.id;
                    obj[2] = outer1_3.tagAvatar;
                    obj[3] = outer1_3.tagAvatar;
                    obj[1] = outer2_16(item(outer2_3[17]).Avatar, obj);
                    let tmp7 = obj;
                  }
                }
              }
              if (null != tmp7) {
                const obj1 = { display: null, row: null };
                obj1[0] = tmp7;
                obj1[1] = tmp4;
                obj[combined] = obj1;
              }
            }
            const obj2 = { text: null, icon: null };
            obj2[0] = tmp4.name;
            const obj3 = { style: null };
            const items = [outer1_3.tagRoleColor, ];
            const obj4 = { backgroundColor: null };
            obj4[0] = tmp4.colorString;
            items[1] = obj4;
            obj3[0] = items;
            obj2[1] = outer2_16(outer2_7, obj3);
            tmp7 = obj2;
          }
          return obj;
        });
      }
    };
    if (!item.disabled) {
      if (item.rowType !== outer1_13.EMPTY_STATE) {
        obj = {};
        let merged = Object.assign(obj);
        const _HermesInternal = HermesInternal;
        obj.checked = "" + item.rowType + ":" + item.id in pendingAdditions;
        let tmp20 = outer1_16(guild(_undefined[19]).ChannelOverwritesCheckboxItem, obj);
      }
      return tmp20;
    }
    obj = {};
    const merged1 = Object.assign(obj);
    tmp20 = outer1_16(pendingAdditions(_undefined[19]), obj);
  };
  obj11[2] = function renderSectionHeader(section) {
    let tmp2 = null;
    if (section.section.data.length > 0) {
      const obj = { style: null, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
      obj[0] = _undefined.sectionRowWrapper;
      obj[5] = tmp;
      tmp2 = outer1_16(guild(_undefined[24]).Text, obj);
    }
    return tmp2;
  };
  obj11[3] = items3;
  tmp27Result = tmp27(BottomSheetSectionList, obj11);
};