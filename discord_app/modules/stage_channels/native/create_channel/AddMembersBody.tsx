// discord_app/modules/stage_channels/native/create_channel/AddMembersBody.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import applyOverwritesAll from "../../../../utils/PermissionUtils.tsx";
import getRoleRowDataAll from "../../../channel_permissions/ChannelPermissionsUtils.tsx";
import closure_4 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_10 from "../../../../stores/GuildMemberStore.tsx";
import closure_11 from "../../../../stores/GuildRoleStore.tsx";
import closure_12 from "../../../../stores/UserStore.tsx";
import RowType from "../../../channel_permissions/ChannelPermissionsConstants.tsx";
import { Permissions } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
({ View: error, ScrollView: closure_8, SectionList: c9 } = get_ActivityIndicator);
({ RowType: map1, MEMBER_REQUEST_COUNT: closure_14 } = RowType);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = {
  inputContainer: null,
  inputDescContainer: null,
  inputDescText: null,
  tagRoleColor: null,
  tagAvatar: null,
  emptyState: null,
  emptyStateText: null,
  sectionRowWrapper: null,
  adminWarning: null,
};
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  flexDirection: "row",
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_12,
};
createCacheKey[2] = { flex: 1, textAlign: "center" };
let obj1 = {
  flexDirection: "row",
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_12,
};
createCacheKey[3] = { height: 12, width: 12, borderRadius: ThemesDefault.radii.round };
let obj2 = { height: 12, width: 12, borderRadius: ThemesDefault.radii.round };
createCacheKey[4] = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[5] = { backgroundColor: "transparent", paddingTop: 40 };
let obj3 = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[6] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let obj4 = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[7] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  paddingVertical: ThemesDefault.space.PX_12,
};
createCacheKey[8] = { marginHorizontal: 16, marginVertical: 8 };
let closure_20 = createCacheKey.createStyles(createCacheKey);
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/stage_channels/native/create_channel/AddMembersBody.tsx");

export default function AddMembersBody(pendingAdditions) {
  ({ channel, guild } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: importAll, permission } = pendingAdditions);
  if (permission === undefined) {
    permission = applyOverwritesAll.NONE;
  }
  ({ inputDesc, inActionSheet } = pendingAdditions);
  dependencyMap = undefined;
  let first;
  let callback;
  let str;
  closure_7 = undefined;
  c8 = undefined;
  function filterByQuery(arg0) {
    const trimmed = str.trim();
    let substr = trimmed;
    if (first) {
      substr = trimmed.slice(1);
    }
    const regExp = new RegExp("" + pendingAdditions(sectionRowWrapper[15]).escape(substr), "i");
    return regExp.test(arg0);
  }
  const tmp3 = callback3();
  dependencyMap = tmp3;
  let obj = { isKeyboardAwareOnAndroid: !inActionSheet };
  obj1 = guild(586);
  let items = [closure_11];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_11.getSortedRoles(guild.id));
  let obj2 = str;
  let tmp7 = callback(str.useState(false), 2);
  first = tmp7[0];
  callback = tmp7[1];
  const tmp9 = callback(str.useState(""), 2);
  str = tmp9[0];
  closure_7 = tmp9[1];
  let obj3 = applyOverwritesAll;
  let canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
  let obj4 = guild(586);
  const items1 = [closure_10];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items1, () => closure_1_10.getMemberIds(guild.id));
  if (first) {
    let items2 = [];
  } else {
    let tmp10Result = tmp10(9725);
    const rolesRowsWithPermissionDisabled = tmp10Result.getRolesRowsWithPermissionDisabled(
      guild,
      stateFromStores,
      channel,
      permission,
      filterByQuery,
    );
    let tmp19 = 0 === rolesRowsWithPermissionDisabled.length && "" === str.trim();
    if (tmp19) {
      tmp19 = 1 === stateFromStores.length;
    }
    items2 = rolesRowsWithPermissionDisabled;
    if (tmp19) {
      tmp10Result = tmp10(9725);
      items2 = tmp10Result.getNoRolesRow();
    }
  }
  obj = { filter: filterByQuery };
  const membersRows = getRoleRowDataAll.getMembersRows(stateFromStoresArray, channel, guild, permission, obj);
  const items3 = [];
  obj = { title: null, data: null };
  let intl = tmp6(1233).intl;
  obj[0] = intl.string(guild(1233).t["LPJmL/"]);
  obj[1] = items2;
  items3.push(obj);
  obj1 = { title: null, data: null };
  let intl2 = tmp6(1233).intl;
  obj1[0] = intl2.string(guild(1233).t["9Oq93m"]);
  obj1[1] = membersRows;
  items3.push(obj1);
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
      const AccessibilityAnnouncer = guild(sectionRowWrapper[20]).AccessibilityAnnouncer;
      const intl = guild(sectionRowWrapper[18]).intl;
      const obj = { count: null };
      obj[0] = c8;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(guild(sectionRowWrapper[18]).t.ZGVL3g, obj), "polite");
    }
  }, items4);
  if (inActionSheet) {
    let BottomSheetScrollView = tmp6(5633).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = c8;
  }
  if (inActionSheet) {
    let BottomSheetSectionList = tmp6(5633).BottomSheetSectionList;
  } else {
    BottomSheetSectionList = closure_9;
  }
  obj2 = { style: tmp3.inputContainer, children: null };
  obj3 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: true };
  const tmp10Result1 = getRoleRowDataAll;
  const tmp25 = closure_18;
  const tmp26 = closure_17;
  const intl3 = tmp6(1233).intl;
  obj3[0] = intl3.string(guild(1233).t.TVZdKh);
  obj3[1] = mapped;
  obj3[2] = function onChangeText(str) {
    str = str.trim();
    const tmp = "@" === str.charAt(0);
    let substr = str;
    if (tmp) {
      substr = str.slice(1);
    }
    const members = pendingAdditions(sectionRowWrapper[23]).requestMembers(guild.id, substr, closure_1_14);
    callback3(str);
    callback2(tmp);
  };
  obj3[3] = function onRemove(arg0) {
    closure_0 = Object.keys(pendingAdditions)[arg0];
    callback((arg0) => {
      const items = [closure_0];
      return closure_1_4(arg0, items.map(closure_1_19));
    });
  };
  obj2[1] = callback2(pendingAdditions(9742), obj3);
  const items5 = [callback2(closure_7, obj2), , ,];
  let tmp27Result = null;
  if (null != inputDesc) {
    obj4 = { style: null, children: null };
    obj4[0] = tmp3.inputDescContainer;
    const obj5 = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
    obj5[0] = tmp3.inputDescText;
    obj5[3] = inputDesc;
    obj4[1] = tmp27(tmp6(4474).Text, obj5);
    tmp27Result = tmp27(tmp28, obj4);
  }
  items5[1] = tmp27Result;
  if (canEveryoneRoleResult) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp3.adminWarning;
    const obj7 = { messageType: null, children: null };
    obj7[0] = tmp6(1296).HelpMessageTypes.WARNING;
    const intl4 = tmp6(1233).intl;
    obj7[1] = intl4.string(tmp6(1233).t["5f3HIC"]);
    obj6[1] = tmp27(tmp6(1296).HelpMessage, obj7);
    canEveryoneRoleResult = tmp27(tmp28, obj6);
  }
  items5[2] = canEveryoneRoleResult;
  if ("" !== str) {
    if (0 === items2.length) {
      if (0 === membersRows.length) {
        const obj8 = { children: null };
        const obj9 = { Illustration: null, style: null, bodyStyle: null, body: null };
        obj9[0] = tmp6(9747).NoResultsAlt;
        ({ emptyState: obj21[1], emptyStateText: obj21[2] } = tmp3);
        const intl5 = tmp6(1233).intl;
        const obj10 = { query: null };
        obj10[0] = str;
        obj9[3] = intl5.format(tmp6(1233).t.ErpIY3, obj10);
        obj8[0] = tmp27(tmp6(1296).EmptyState, obj9);
        tmp27Result = tmp27(BottomSheetScrollView, obj8);
      }
      const obj11 = { children: null };
      items5[3] = tmp27Result;
      obj11[0] = items5;
      return tmp25(tmp26, obj11);
    }
  }
  const obj12 = {
    contentContainerStyle: null,
    renderItem: null,
    renderSectionHeader: null,
    sections: null,
    keyboardShouldPersistTaps: "always",
  };
  const tmp4Result = pendingAdditions(9742);
  obj12[0] = {
    paddingHorizontal: pendingAdditions(709).space.PX_16,
    paddingBottom: pendingAdditions(709).space.PX_16 + pendingAdditions(5603)(obj).insets.bottom,
  };
  obj12[1] = function renderItem(item) {
    item = item.item;
    ({ index, section } = item);
    let tmp = 0 === index;
    if (tmp) {
      const intl = guild(sectionRowWrapper[18]).intl;
      tmp = section.title === intl.string(guild(sectionRowWrapper[18]).t["LPJmL/"]);
    }
    let obj = {
      start: tmp,
      end: index === section.data.length - 1,
      guildId: item.id,
      item,
      disabled: item.disabled,
      subLabel: null,
      onPress: null,
    };
    let stringResult = null;
    if (item.disabled) {
      const intl2 = guild(sectionRowWrapper[18]).intl;
      stringResult = intl2.string(guild(sectionRowWrapper[18]).t.MVVOCv);
    }
    obj[5] = stringResult;
    obj[6] = function onPress() {
      if (item.rowType !== closure_2_13.EMPTY_STATE) {
        closure_1_2((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          const combined = "" + user.rowType + ":" + user.id;
          if (combined in obj) {
            delete tmp[tmp2];
          } else {
            const rowType = tmp4.rowType;
            if (closure_2_13.ROLE !== rowType) {
              if (tmp6.ADMINISTRATOR !== rowType) {
                user = closure_2_12.getUser(tmp4.id);
                if (null != user) {
                  obj = { text: null, icon: null };
                  obj[0] = tmp4.name;
                  obj = { user: null, guildId: null, avatarStyle: null, style: null };
                  obj[0] = user;
                  obj[1] = user.id;
                  obj[2] = closure_1_3.tagAvatar;
                  obj[3] = closure_1_3.tagAvatar;
                  obj[1] = closure_2_16(item(closure_2_3[17]).Avatar, obj);
                  let tmp7 = obj;
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
            const items = [closure_1_3.tagRoleColor];
            const obj4 = { backgroundColor: null };
            obj4[0] = tmp4.colorString;
            items[1] = obj4;
            obj3[0] = items;
            obj2[1] = closure_2_16(closure_2_7, obj3);
            tmp7 = obj2;
          }
          return obj;
        });
      }
    };
    if (!item.disabled) {
      if (item.rowType !== closure_1_13.EMPTY_STATE) {
        obj = {};
        let merged = Object.assign(obj);
        const _HermesInternal = HermesInternal;
        obj.checked = "" + item.rowType + ":" + item.id in pendingAdditions;
        let tmp20 = closure_1_16(guild(sectionRowWrapper[19]).ChannelOverwritesCheckboxItem, obj);
      }
      return tmp20;
    }
    obj = {};
    const merged1 = Object.assign(obj);
    tmp20 = closure_1_16(pendingAdditions(sectionRowWrapper[19]), obj);
  };
  obj12[2] = function renderSectionHeader(section) {
    let tmp2 = null;
    if (section.section.data.length > 0) {
      const obj = {
        style: null,
        maxFontSizeMultiplier: 2,
        accessibilityRole: "header",
        variant: "text-sm/semibold",
        color: "interactive-text-default",
        children: null,
      };
      obj[0] = sectionRowWrapper.sectionRowWrapper;
      obj[5] = tmp;
      tmp2 = closure_1_16(guild(sectionRowWrapper[24]).Text, obj);
    }
    return tmp2;
  };
  obj12[3] = items3;
  tmp27Result = tmp27(BottomSheetSectionList, obj12);
}
