// === Module 9244: AddMembersBody ===

// Module 9244 (AddMembersBody)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl6 from "intl" /* 1126 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import RegexUtilsDefault from "RegexUtils" /* 4874 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildUtilsDefault from "GuildUtils" /* 5704 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9215 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import UserStore from "UserStore" /* 1377 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8077 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, row, user;

let c9;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
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
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, ScrollView: metroImportAll, SectionList: c9 } = react_native);
({ RowType: map1, MEMBER_REQUEST_COUNT: closure_14 } = ChannelPermissionsConstants);
const Permissions = Constants.Permissions;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { inputContainer: obj2, inputDescContainer: obj3, inputDescText: { flex: 1, textAlign: "center" }, tagRoleColor: size, tagAvatar: size1, emptyState: { backgroundColor: "transparent", paddingTop: 40 }, emptyStateText: obj4, sectionRowWrapper: obj5, adminWarning: { marginHorizontal: 16, marginVertical: 8 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
size = { height: 12, width: 12, borderRadius: nativeDefault.radii.round };
size1 = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: nativeDefault.space.PX_12 };
let closure_20 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/create_channel/AddMembersBody.tsx");

export default function AddMembersBody(pendingAdditions) {
  let BottomSheetScrollView;
  let BottomSheetSectionList;
  let EmptyState;
  let HelpMessage;
  let channel;
  let closure_5;
  let closure_7;
  let count;
  let first;
  let guild;
  let inActionSheet;
  let inputDesc;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj17;
  let permission;
  let sectionRowWrapper;
  let str;
  let tmp4Result;
  ({ channel, guild } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: importAll, permission } = pendingAdditions);
  if (permission === undefined) {
    let tmp2 = dependencyMap;
    permission = PermissionUtilsAll.NONE;
  }
  ({ inputDesc, inActionSheet } = pendingAdditions);
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_7 = undefined;
  let c8;
  function filterByQuery(arg0) {
    const trimmed = str.trim();
    let substr = trimmed;
    if (first) {
      substr = trimmed.slice(1);
    }
    const obj = RegexUtilsDefault;
    const regExp = new RegExp("" + obj.escape(substr), "i");
    return regExp.test(arg0);
  }
  const tmp3 = closure_20();
  dependencyMap = tmp3;
  let tmp5 = dependencyMap;
  let obj = { isKeyboardAwareOnAndroid: !inActionSheet };
  const insets = pendingAdditions(6471)(obj).insets;
  let obj2 = guild(504);
  let items = [GuildRoleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  let obj3 = str;
  [first, _slicedToArray] = str.useState(false);
  [str, closure_7] = str.useState("");
  let obj4 = PermissionUtilsAll;
  let canEveryoneRoleResult = obj4.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
  let obj5 = guild(504);
  const items1 = [GuildMemberStore];
  const stateFromStoresArray = obj5.useStateFromStoresArray(items1, () => GuildMemberStore.getMemberIds(guild.id));
  if (first) {
    items2 = [];
  } else {
    const tmp10Result = ChannelPermissionsUtilsAll;
    const rolesRowsWithPermissionDisabled = tmp10Result.getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery);
    items2 = rolesRowsWithPermissionDisabled;
    const tmp19 = 0 === rolesRowsWithPermissionDisabled.length && "" === str.trim() && 1 === stateFromStores.length;
    if (tmp19) {
      const tmp10Result3 = ChannelPermissionsUtilsAll;
      items2 = tmp10Result3.getNoRolesRow();
    }
  }
  let obj6 = { filter: filterByQuery };
  const tmp10Result4 = ChannelPermissionsUtilsAll;
  const membersRows = tmp10Result4.getMembersRows(stateFromStoresArray, channel, guild, permission, obj6);
  const items3 = [];
  let obj7 = { title: intl.string(guild(1126).t["LPJmL/"]), data: items2 };
  const push = items3.push;
  intl = guild(1126).intl;
  push(obj7);
  const push2 = items3.push;
  const obj8 = { title: intl2.string(guild(1126).t["9Oq93m"]), data: membersRows };
  intl2 = guild(1126).intl;
  push2(obj8);
  const values = Object.values(pendingAdditions);
  const sum = items2.length + membersRows.length;
  c8 = sum;
  const items4 = [sum, str];
  const mapped = values.map((row) => {
    const obj = { id: row.id };
    row = row.row;
    const merged = Object.assign(row.display);
    return obj;
  });
  const effect = obj3.useEffect(() => {
    if ("" !== str) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl6.intl;
      const obj = { count };
      announce(intl.formatToPlainString(intl6.t.ZGVL3g, obj), "polite");
    }
  }, items4);
  if (inActionSheet) {
    BottomSheetScrollView = guild(6112).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = c8;
  }
  if (inActionSheet) {
    BottomSheetSectionList = guild(6112).BottomSheetSectionList;
  } else {
    BottomSheetSectionList = closure_9;
  }
  const obj9 = { style: tmp3.inputContainer, children: closure_16(tmp4Result, obj10) };
  obj10 = {
    placeholder: intl3.string(guild(1126).t.TVZdKh),
    tags: mapped,
    onChangeText(str) {
      str = str.trim();
      const tmp = "@" === str.charAt(0);
      let substr = str;
      const requestMembers = GuildUtilsDefault.requestMembers;
      const id = guild.id;
      GuildUtilsDefault;
      if (tmp) {
        substr = str.slice(1);
      }
      const members = requestMembers(id, substr, authStore2);
      closure_7(str);
      closure_5(tmp);
    },
    onRemove(arg0) {
      let closure_0 = Object.keys(pendingAdditions)[arg0];
      importAll((react) => {
        const items = [closure_0];
        return first(react, items.map(closure_2_19));
      });
    },
    autoFocus: true
  };
  tmp4Result = pendingAdditions(9235);
  intl3 = guild(1126).intl;
  const items5 = [closure_16(closure_7, obj9), , , ];
  let tmp27Result = null;
  if (null != inputDesc) {
    const obj11 = { style: tmp3.inputDescContainer, children: closure_16(guild(4886).Text, obj12) };
    obj12 = { style: tmp3.inputDescText, variant: "text-xs/medium", color: "text-default", children: inputDesc };
    tmp27Result = closure_16(tmp28, obj11);
  }
  items5[1] = tmp27Result;
  if (canEveryoneRoleResult) {
    const obj13 = { style: tmp3.adminWarning, children: closure_16(HelpMessage, obj14) };
    obj14 = { messageType: guild(1188).HelpMessageTypes.WARNING, children: intl4.string(guild(1126).t["5f3HIC"]) };
    HelpMessage = guild(1188).HelpMessage;
    intl4 = guild(1126).intl;
    canEveryoneRoleResult = closure_16(tmp28, obj13);
  }
  items5[2] = canEveryoneRoleResult;
  if ("" !== str) {
    if (0 === items2.length) {
      let tmp27Result2;
      if (0 === membersRows.length) {
        const obj15 = { children: closure_16(EmptyState, obj16) };
        obj16 = { Illustration: guild(9240).NoResultsAlt, style: null, bodyStyle: null, body: intl5.format(guild(1126).t.ErpIY3, obj17) };
        EmptyState = guild(1188).EmptyState;
        ({ emptyState: obj21.style, emptyStateText: obj21.bodyStyle } = tmp3);
        intl5 = guild(1126).intl;
        obj17 = { query: str };
        tmp27Result2 = closure_16(BottomSheetScrollView, obj15);
      }
      const obj18 = { children: items5 };
      items5[3] = tmp27Result2;
      return closure_18(closure_17, obj18);
    }
  }
  const obj19 = {
    contentContainerStyle: { paddingHorizontal: pendingAdditions(587).space.PX_16, paddingBottom: pendingAdditions(587).space.PX_16 + insets.bottom },
    renderItem(item) {
      let index;
      let section;
      let stringResult;
      item = item.item;
      ({ index, section } = item);
      let tmp = 0 === index;
      if (tmp) {
        const title = section.title;
        const intl = guild(sectionRowWrapper[18]).intl;
        tmp = title === intl.string(guild(sectionRowWrapper[18]).t["LPJmL/"]);
      }
      let obj = {
        start: tmp,
        end: index === section.data.length - 1,
        guildId: item.id,
        item,
        disabled: item.disabled,
        subLabel: stringResult,
        onPress() {
          const id = item;
          if (item.rowType !== map1.EMPTY_STATE) {
            importAll((arg0) => {
              let items;
              let obj3;
              let obj6;
              const obj = {};
              const merged = Object.assign(arg0);
              const combined = "" + row.rowType + ":" + row.id;
              if (combined in obj) {
                delete obj[tmp3];
              } else {
                const rowType = row.rowType;
                if (constants.ROLE !== rowType) {
                  let tmp5;
                  if (constants.ADMINISTRATOR !== rowType) {
                    user = user.getUser(row.id);
                    if (null != user) {
                      const obj2 = { text: row.name, icon: closure_3_16(item(sectionRowWrapper[17]).Avatar, obj3) };
                      tmp5 = obj2;
                      obj3 = { user, guildId: id.id, avatarStyle: closure_2_3.tagAvatar, style: closure_2_3.tagAvatar };
                    }
                  }
                  if (null != tmp5) {
                    const obj4 = { display: tmp5, row };
                    obj[combined] = obj4;
                  }
                }
                const obj5 = { text: row.name, icon: closure_3_16(closure_3_7, obj6) };
                obj6 = { style: items };
                items = [closure_2_3.tagRoleColor, ];
                const obj7 = { backgroundColor: row.colorString };
                items[1] = obj7;
                tmp5 = obj5;
              }
              return obj;
            });
          }
        }
      };
      stringResult = null;
      if (item.disabled) {
        const intl2 = guild(sectionRowWrapper[18]).intl;
        stringResult = intl2.string(guild(sectionRowWrapper[18]).t.MVVOCv);
      }
      if (!item.disabled) {
        let tmp20;
        if (item.rowType !== constants.EMPTY_STATE) {
          let obj2 = { checked: "" + item.rowType + ":" + item.id in pendingAdditions };
          const ChannelOverwritesCheckboxItem = guild(sectionRowWrapper[19]).ChannelOverwritesCheckboxItem;
          let merged = Object.assign(obj);
          const _HermesInternal = HermesInternal;
          tmp20 = closure_1_16(ChannelOverwritesCheckboxItem, obj2);
        }
        return tmp20;
      }
      let obj3 = {};
      const tmp21 = pendingAdditions(sectionRowWrapper[19]);
      const merged1 = Object.assign(obj);
      tmp20 = closure_1_16(tmp21, obj3);
    },
    renderSectionHeader(section) {
      let tmp2 = null;
      if (section.section.data.length > 0) {
        const obj = { style: sectionRowWrapper.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: tmp };
        tmp2 = authStore3(Text_Text.Text, obj);
      }
      return tmp2;
    },
    sections: items3,
    keyboardShouldPersistTaps: "always"
  };
  ({ paddingHorizontal: pendingAdditions(587).space.PX_16, paddingBottom: pendingAdditions(587).space.PX_16 + insets.bottom });
  tmp27Result2 = closure_16(BottomSheetSectionList, obj19);
};