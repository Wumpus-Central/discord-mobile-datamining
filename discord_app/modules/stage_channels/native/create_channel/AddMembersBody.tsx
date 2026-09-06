// discord_app/modules/stage_channels/native/create_channel/AddMembersBody.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PermissionUtilsAll from "../../../../utils/PermissionUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import RegexUtilsDefault from "../../../../utils/RegexUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GuildUtilsDefault from "../../../../utils/GuildUtils.tsx";
import ChannelPermissionsUtilsAll from "../../../channel_permissions/ChannelPermissionsUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

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
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8, SectionList: closure_9 } = get_ActivityIndicator);
const ChannelPermissionsConstants = fn(8401);
({ RowType: map1, MEMBER_REQUEST_COUNT: closure_14 } = ChannelPermissionsConstants);
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = {
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
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
createStyles.inputContainer = createStyles;
createStyles.inputDescContainer = {
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
};
createStyles.inputDescText = { flex: 1, textAlign: "center" };
let size = { height: 12, width: 12, borderRadius: nativeDefault.radii.round };
createStyles.tagRoleColor = size;
const size1 = { width: 16, height: 16, borderRadius: nativeDefault.radii.sm };
createStyles.tagAvatar = size1;
createStyles.emptyState = { backgroundColor: "transparent", paddingTop: 40 };
let obj1 = {
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
};
createStyles.emptyStateText = { color: nativeDefault.colors.TEXT_DEFAULT };
let obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.sectionRowWrapper = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingVertical: nativeDefault.space.PX_12,
};
createStyles.adminWarning = { marginHorizontal: 16, marginVertical: 8 };
let closure_20 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/create_channel/AddMembersBody.tsx");

export default function AddMembersBody(pendingAdditions) {
  ({ channel, guild } = pendingAdditions);
  pendingAdditions = pendingAdditions.pendingAdditions;
  ({ setPendingAdditions: importAll, permission } = pendingAdditions);
  if (permission === undefined) {
    permission = PermissionUtilsAll.NONE;
  }
  ({ inputDesc, inActionSheet } = pendingAdditions);
  _slicedToArray = undefined;
  let str;
  c8 = undefined;
  function filterByQuery(arg0) {
    const trimmed = str.trim();
    let substr = trimmed;
    if (first) {
      substr = trimmed.slice(1);
    }
    const regExp = new RegExp("" + RegexUtilsDefault.escape(substr), "i");
    return regExp.test(arg0);
  }
  const tmp3 = closure_20();
  dependencyMap = tmp3;
  let obj = { isKeyboardAwareOnAndroid: !inActionSheet };
  let obj1 = guild(504);
  let items = [GuildRoleStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  let obj2 = str;
  let tmp7 = _slicedToArray(str.useState(false), 2);
  const first = tmp7[0];
  _slicedToArray = tmp7[1];
  const tmp9 = _slicedToArray(str.useState(""), 2);
  str = tmp9[0];
  closure_7 = tmp9[1];
  let obj3 = PermissionUtilsAll;
  let canEveryoneRoleResult = obj3.canEveryoneRole(Permissions.ADMINISTRATOR, guild);
  let obj4 = guild(504);
  const items1 = [GuildMemberStore];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items1, () => GuildMemberStore.getMemberIds(guild.id));
  if (first) {
    let items2 = [];
  } else {
    let tmp10Result = ChannelPermissionsUtilsAll;
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
      tmp10Result = ChannelPermissionsUtilsAll;
      items2 = tmp10Result.getNoRolesRow();
    }
  }
  obj = { filter: filterByQuery };
  const membersRows = ChannelPermissionsUtilsAll.getMembersRows(stateFromStoresArray, channel, guild, permission, obj);
  const items3 = [];
  obj = { title: null, data: null };
  let intl = guild(1114).intl;
  obj.title = intl.string(guild(1114).t["LPJmL/"]);
  obj.data = items2;
  items3.push(obj);
  obj1 = { title: null, data: null };
  let intl2 = guild(1114).intl;
  obj1.title = intl2.string(guild(1114).t["9Oq93m"]);
  obj1.data = membersRows;
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
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
    }
  }, items4);
  if (inActionSheet) {
    let BottomSheetScrollView = guild(6627).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = c8;
  }
  if (inActionSheet) {
    let BottomSheetSectionList = guild(6627).BottomSheetSectionList;
  } else {
    BottomSheetSectionList = closure_9;
  }
  obj2 = { style: tmp3.inputContainer, children: null };
  obj3 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: true };
  const tmp10Result1 = ChannelPermissionsUtilsAll;
  const intl3 = guild(1114).intl;
  obj3.placeholder = intl3.string(guild(1114).t.TVZdKh);
  obj3.tags = mapped;
  obj3.onChangeText = function onChangeText(str) {
    str = str.trim();
    const tmp = "@" === str.charAt(0);
    let substr = str;
    if (tmp) {
      substr = str.slice(1);
    }
    const members = GuildUtilsDefault.requestMembers(guild.id, substr, closure_2_14);
    closure_7(str);
    closure_5(tmp);
  };
  obj3.onRemove = function onRemove(arg0) {
    closure_0 = Object.keys(pendingAdditions)[arg0];
    importAll((dependencyMap) => {
      const items = [closure_0];
      return first(dependencyMap, items.map(_toPropertyKey));
    });
  };
  obj2.children = closure_16(pendingAdditions(9755), obj3);
  const items5 = [closure_16(closure_7, obj2), , ,];
  let tmp27Result = null;
  if (null != inputDesc) {
    obj4 = { style: tmp3.inputDescContainer, children: null };
    const obj5 = { style: tmp3.inputDescText, variant: "text-xs/medium", color: "text-default", children: inputDesc };
    obj4.children = closure_16(guild(4556).Text, obj5);
    tmp27Result = closure_16(tmp28, obj4);
  }
  items5[1] = tmp27Result;
  if (canEveryoneRoleResult) {
    const obj6 = { style: tmp3.adminWarning, children: null };
    const obj7 = { messageType: guild(1178).HelpMessageTypes.WARNING, children: null };
    const intl4 = guild(1114).intl;
    obj7.children = intl4.string(guild(1114).t["5f3HIC"]);
    obj6.children = closure_16(guild(1178).HelpMessage, obj7);
    canEveryoneRoleResult = closure_16(tmp28, obj6);
  }
  items5[2] = canEveryoneRoleResult;
  if ("" !== str) {
    if (0 === items2.length) {
      if (0 === membersRows.length) {
        const obj8 = { children: null };
        const obj9 = { Illustration: guild(9760).NoResultsAlt, style: null, bodyStyle: null, body: null };
        ({ emptyState: obj21.style, emptyStateText: obj21.bodyStyle } = tmp3);
        const intl5 = guild(1114).intl;
        const obj10 = { query: str };
        obj9.body = intl5.format(guild(1114).t.ErpIY3, obj10);
        obj8.children = closure_16(guild(1178).EmptyState, obj9);
        tmp27Result = closure_16(BottomSheetScrollView, obj8);
      }
      const obj11 = { children: null };
      items5[3] = tmp27Result;
      obj11.children = items5;
      return closure_18(closure_17, obj11);
    }
  }
  const obj12 = {
    contentContainerStyle: null,
    renderItem: null,
    renderSectionHeader: null,
    sections: null,
    keyboardShouldPersistTaps: "always",
  };
  const tmp4Result = pendingAdditions(9755);
  obj12.contentContainerStyle = {
    paddingHorizontal: pendingAdditions(576).space.PX_16,
    paddingBottom: pendingAdditions(576).space.PX_16 + pendingAdditions(6981)(obj).insets.bottom,
  };
  obj12.renderItem = function renderItem(item) {
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
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      const row = item;
      if (item.rowType !== constants.EMPTY_STATE) {
        importAll((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          const combined = "" + row.rowType + ":" + row.id;
          if (combined in obj) {
            delete tmp[tmp2];
          } else {
            const rowType = row.rowType;
            if (constants.ROLE !== rowType) {
              if (constants.ADMINISTRATOR !== rowType) {
                user = user.getUser(row.id);
                if (null != user) {
                  obj = { text: row.name, icon: null };
                  obj = {
                    user,
                    guildId: item.id,
                    avatarStyle: sectionRowWrapper.tagAvatar,
                    style: sectionRowWrapper.tagAvatar,
                  };
                  obj.icon = closure_3_16(guild(closure_3[17]).Avatar, obj);
                  let tmp7 = obj;
                }
              }
              if (null != tmp7) {
                const obj1 = { display: tmp7, row };
                obj[combined] = obj1;
              }
            }
            const obj2 = { text: row.name, icon: null };
            const obj3 = { style: null };
            const items = [sectionRowWrapper.tagRoleColor];
            const obj4 = { backgroundColor: row.colorString };
            items[1] = obj4;
            obj3.style = items;
            obj2.icon = closure_3_16(closure_7, obj3);
            tmp7 = obj2;
          }
          return obj;
        });
      }
    };
    if (!item.disabled) {
      if (item.rowType !== constants.EMPTY_STATE) {
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
    const tmp21 = pendingAdditions(sectionRowWrapper[19]);
  };
  obj12.renderSectionHeader = function renderSectionHeader(section) {
    let tmp2 = null;
    if (section.section.data.length > 0) {
      const obj = {
        style: sectionRowWrapper.sectionRowWrapper,
        maxFontSizeMultiplier: 2,
        accessibilityRole: "header",
        variant: "text-sm/semibold",
        color: "interactive-text-default",
        children: tmp,
      };
      tmp2 = value2(Text_Text.Text, obj);
    }
    return tmp2;
  };
  obj12.sections = items3;
  tmp27Result = closure_16(BottomSheetSectionList, obj12);
  const obj13 = {
    paddingHorizontal: pendingAdditions(576).space.PX_16,
    paddingBottom: pendingAdditions(576).space.PX_16 + pendingAdditions(6981)(obj).insets.bottom,
  };
}
