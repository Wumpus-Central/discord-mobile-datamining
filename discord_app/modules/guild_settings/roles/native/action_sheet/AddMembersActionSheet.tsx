// discord_app/modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import ADD_MEMBER_QUERY_LIMIT from "ADD_MEMBER_QUERY_LIMIT";
import { View } from "module_9015";
import { MAX_BULK_ROLE_MEMBERS_ADD } from "title";
import jsxProd from "getNoResultsAltSource";
import createCacheKey from "createCacheKey";
import { useCheckboxA11yNative } from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import { FormCheckbox } from "../../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import { memoResult1 } from "../../../native/DetailedGuildIdentityUserRow.tsx";

let c10;
let c9;
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
function MemberRow(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let checked;
  let disabled;
  let end;
  let guildId;
  let onPress;
  let start;
  let userId;
  ({ disabled, checked } = arg0);
  ({ start, end, guildId, userId, onPress } = arg0);
  let obj = useCheckboxA11yNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = { start, end, guildId, userId, onPress, disabled, trailing: null, accessibilityRole: null, accessibilityState: null };
  obj[6] = callback2(FormCheckbox.FormCheckbox, { checked });
  obj[7] = accessibilityRole;
  obj[8] = accessibilityState;
  return callback2(memoResult1, obj);
}
class AddMembersBody {
  constructor(arg0) {
    ({ guild, role, members } = global);
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions, inActionSheet, maxCount } = global);
    c6 = undefined;
    c7 = undefined;
    useState = undefined;
    c9 = undefined;
    length = undefined;
    tmp = jsxs();
    c6 = tmp;
    tmp2 = setPendingAdditions(maxCount.useState(""), 2);
    first = tmp2[0];
    c7 = first;
    useState = tmp2[1];
    tmp4 = role;
    obj = members;
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    items = [, ];
    items[0] = members;
    items[1] = first;
    memo = maxCount.useMemo(() => members.filter((name) => {
      const regExp = new RegExp(outer1_1(outer1_2[12]).escape(closure_7), "i");
      let isMatch = regExp.test(name.name);
      if (!isMatch) {
        const _RegExp = RegExp;
        const regExp1 = new RegExp(outer1_1(outer1_2[12]).escape(closure_7), "i");
        isMatch = regExp1.test(name.userTag);
        const tmpResult = outer1_1(outer1_2[12]);
      }
      return isMatch;
    }), items);
    c9 = memo;
    length = memo.length;
    items1 = [, ];
    items1[0] = length;
    items1[1] = first;
    effect = maxCount.useEffect(() => {
      if ("" !== first) {
        const AccessibilityAnnouncer = outer1_0(members[14]).AccessibilityAnnouncer;
        const intl = outer1_0(members[15]).intl;
        const obj = { count: null };
        obj[0] = length;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(outer1_0(members[15]).t.ZGVL3g, obj), "polite");
      }
    }, items1);
    tmp6 = guild;
    tmp7 = require("noop");
    if (inActionSheet) {
      FlashList = tmp7.BottomSheetFlashList;
      ErpIY3 = tmp6;
    } else {
      FlashList = tmp7.FlashList;
      ErpIY3 = tmp6;
    }
    tmp10 = useState;
    obj1 = { style: tmp.inputContainer, children: null };
    tmp8 = length;
    tmp9 = c9;
    obj2 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: null, inActionSheet: null };
    tmp4Result = require("module_9015");
    intl = require("getSystemLocale").intl;
    obj2[0] = intl.string(require("getSystemLocale").t.vMiCaQ);
    values = Object.values(pendingAdditions);
    obj2[1] = values.map((display) => {
      const obj = {};
      const merged = Object.assign(display.display);
      obj.id = display.row.id;
      return obj;
    });
    obj2[2] = function onChangeText(str) {
      const formatted = str.trim().toLowerCase();
      str = str.trim();
      members = outer1_1(members[18]).requestMembers(id.id, formatted, outer1_0(members[19]).ADD_MEMBER_QUERY_LIMIT);
      callback2(formatted);
    };
    obj2[3] = function onRemove(arg0) {
      let closure_0 = outer1_1(members[20]).keys(pendingAdditions)[arg0];
      callback((arg0) => {
        const items = [closure_0];
        return outer1_3(arg0, items.map(outer1_11));
      });
    };
    obj2[4] = global.autoFocusSearch;
    obj2[5] = inActionSheet;
    obj1[1] = useState(tmp4Result, obj2);
    items2 = [, ];
    items2[0] = useState(c6, obj1);
    if (0 === memo.length) {
      obj3 = { Illustration: null, bodyStyle: null, body: null };
      obj3[0] = require("getNoResultsAltSource").NoResultsAlt;
      obj3[1] = tmp.emptyStateText;
      if ("" !== first) {
        intl3 = require("getSystemLocale").intl;
        ErpIY3 = require("getSystemLocale").t.ErpIY3;
        obj = { query: null };
        obj[0] = first;
        formatResult = intl3.format(ErpIY3, obj);
      } else {
        intl2 = require("getSystemLocale").intl;
        formatResult = intl2.string(require("getSystemLocale").t.oB9grQ);
      }
      obj3[2] = formatResult;
      tmp10Result = tmp10(require("Button").EmptyState, obj3);
    } else {
      obj4 = { paddingHorizontal: null, paddingTop: null, paddingBottom: null };
      obj4[0] = require("Themes").space.PX_16;
      obj4[1] = require("Themes").space.PX_12;
      num = 0;
      if (inActionSheet) {
        num = require("useSafeAreaInsetsKeyboardAware")(obj).insets.bottom;
      }
      obj5 = { contentContainerStyle: null, renderItem: null, data: null, extraData: null, keyboardShouldPersistTaps: "always" };
      obj4[2] = require("Themes").space.PX_12 + num;
      obj5[0] = obj4;
      obj5[1] = function renderItem(item) {
        item = item.item;
        const index = item.index;
        let roles = item.roles;
        let hasItem = roles.includes(id2.id);
        let tmp5 = null != ADD_MEMBER_QUERY_LIMIT;
        if (tmp5) {
          const _Object = Object;
          tmp5 = Object.keys(tmp2).length >= tmp4;
        }
        let tmp7 = hasItem;
        if (!hasItem) {
          tmp7 = item.id in tmp2;
        }
        let obj = {
          start: 0 === index,
          end: index === memo.length - 1,
          guildId: item.id,
          userId: item.id,
          onPress() {
            const roles = item.roles;
            if (!roles.includes(outer1_1.id)) {
              outer1_4((arg0) => {
                let obj = {};
                const merged = Object.assign(arg0);
                if (id.id in obj) {
                  id = tmp4.id;
                  delete tmp[tmp2];
                } else {
                  obj = { text: null, icon: null };
                  obj[0] = tmp4.name;
                  obj = { source: null, avatarStyle: null, style: null };
                  obj[0] = tmp4.avatarSource;
                  ({ tagAvatar: obj3[1], tagAvatar: obj3[2] } = outer1_6);
                  obj[1] = outer2_8(item(outer2_2[13]).Avatar, obj);
                  const obj1 = { display: null, row: null };
                  obj1[0] = obj;
                  obj1[1] = tmp4;
                  obj[tmp4.id] = obj1;
                }
                return obj;
              });
            }
          },
          disabled: null,
          checked: null
        };
        if (!hasItem) {
          if (tmp5) {
            tmp5 = !tmp3;
          }
          hasItem = tmp5;
        }
        obj[5] = hasItem;
        obj[6] = tmp7;
        return closure_8(outer1_13, obj);
      };
      obj5[2] = memo;
      obj5[3] = pendingAdditions;
      obj6 = { children: null };
      items2[1] = tmp10(FlashList, obj5);
      obj6[0] = items2;
      return tmp8(tmp9, obj6);
    }
    return;
  }
}
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, inputContainer: null, tagAvatar: null, emptyStateText: null, addMembersDescription: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12 };
createCacheKey[2] = { width: 16, height: 16, borderRadius: require("Themes").radii.sm };
let obj2 = { width: 16, height: 16, borderRadius: require("Themes").radii.sm };
createCacheKey[3] = { color: require("Themes").colors.TEXT_DEFAULT };
let obj3 = { color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[4] = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginHorizontal: require("Themes").space.PX_16 };
const result = require("noop").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(guild) {
  guild = guild.guild;
  const role = guild.role;
  let first;
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState({}), 2);
  first = tmp2[0];
  const items = [role.id];
  callback = React.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  let obj = guild(first[19]);
  const guildMembers = obj.useGuildMembers(guild.id, callback);
  let obj1 = guild(first[22]);
  obj = { [guild.id]: Object.keys(first) };
  const subscribeGuildMembers = obj1.useSubscribeGuildMembers(obj, "AddMembersActionSheet");
  let tmp9 = 0 === Object.keys(first).length;
  if (!tmp9) {
    const _Object = Object;
    tmp9 = Object.keys(first).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  obj = { title: null, subtitle: null, trailing: null };
  const intl = tmp5(tmp6[15]).intl;
  obj[0] = intl.string(guild(first[15]).t.ZYOK46);
  obj[1] = role.name;
  obj1 = { size: "sm", text: null, onPress: null, variant: null, disabled: null };
  const intl2 = tmp5(tmp6[15]).intl;
  obj1[1] = intl2.string(guild(first[15]).t.OYkgVk);
  obj1[2] = function onPress() {
    const obj = role(first[26]);
    obj.bulkAddMemberRoles(guild.id, role.id, role(first[20]).keys(first));
    const obj2 = role(first[20]);
    role(first[27]).hideActionSheet();
  };
  let str = "primary";
  if (tmp9) {
    str = "secondary";
  }
  let obj2 = { scrollable: true, header: null, startExpanded: true, children: null };
  obj1[3] = str;
  obj1[4] = tmp9;
  obj[2] = closure_8(guild(first[25]).Button, obj1);
  obj2[1] = closure_8(guild(first[24]).BottomSheetTitleHeader, obj);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "text-sm/normal", style: tmp.addMembersDescription, children: null };
  const intl3 = tmp5(tmp6[15]).intl;
  obj4[2] = intl3.format(guild(first[15]).t["3OxP4q"], { numMembers: MAX_BULK_ROLE_MEMBERS_ADD });
  const items1 = [closure_8(guild(first[28]).Text, obj4), closure_8(AddMembersBody, { guild, role, members: guildMembers, pendingAdditions: first, setPendingAdditions: tmp2[1], autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true })];
  obj3[1] = items1;
  obj2[3] = callback3(View, obj3);
  return closure_8(guild(first[23]).BottomSheet, obj2);
};
export { AddMembersBody };