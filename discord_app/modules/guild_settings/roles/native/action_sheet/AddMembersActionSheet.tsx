// === Module 17615: MemberRow ===

// Module 17615 (MemberRow)
import ThemesDefault from "Themes" /* 576 */;
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4277 */;
import FormCheckbox from "FormCheckbox" /* 5617 */;
import memoResult1Default from "memoResult1" /* 10942 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_BULK_ROLE_MEMBERS_ADD } from "title" /* 17609 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function MemberRow(arg0) {
  ({ disabled, checked } = arg0);
  ({ start, end, guildId, userId, onPress } = arg0);
  let obj = useCheckboxA11yNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = { start, end, guildId, userId, onPress, disabled, trailing: callback2(FormCheckbox.FormCheckbox, { checked }), accessibilityRole, accessibilityState };
  return callback2(memoResult1Default, obj);
}
class AddMembersBody {
  constructor(arg0) {
    ({ guild, role, members } = global);
    pendingAdditions = global.pendingAdditions;
    ({ setPendingAdditions, inActionSheet, maxCount } = global);
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    length = undefined;
    tmp = length();
    closure_5 = tmp;
    obj = setPendingAdditions;
    tmp2 = pendingAdditions(setPendingAdditions.useState(""), 2);
    first = tmp2[0];
    closure_6 = first;
    closure_7 = tmp2[1];
    tmp4 = role;
    obj4 = members;
    obj = { isKeyboardAwareOnAndroid: !inActionSheet };
    items = [, ];
    items[0] = members;
    items[1] = first;
    memo = setPendingAdditions.useMemo(() => {
      const regExp = new RegExp(closure_1_1(members[11]).escape(first), "i");
      return members.filter((name) => regExp.test(name.name) || regExp.test(name.userTag));
    }, items);
    closure_8 = memo;
    tmp5 = null != maxCount;
    if (tmp5) {
      tmp6 = globalThis;
      _Object = Object;
      tmp5 = Object.keys(pendingAdditions).length >= maxCount;
    }
    closure_9 = tmp5;
    length = memo.length;
    items1 = [, ];
    items1[0] = length;
    items1[1] = first;
    effect = obj.useEffect(() => {
      if ("" !== first) {
        const AccessibilityAnnouncer = closure_1_0(members[13]).AccessibilityAnnouncer;
        const intl = closure_1_0(members[14]).intl;
        const obj = { count: null };
        obj[0] = length;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_1_0(members[14]).t.ZGVL3g, obj), "polite");
      }
    }, items1);
    tmp8 = guild;
    tmp9 = require("noop");
    if (inActionSheet) {
      FlashList = tmp9.BottomSheetFlashList;
      ErpIY3 = tmp8;
    } else {
      FlashList = tmp9.FlashList;
      ErpIY3 = tmp8;
    }
    tmp12 = closure_7;
    obj1 = { style: tmp.inputContainer, children: null };
    tmp10 = closure_9;
    tmp11 = closure_8;
    obj2 = { placeholder: null, tags: null, onChangeText: null, onRemove: null, autoFocus: null, inActionSheet: null };
    tmp4Result = require("module_9755");
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
      members = closure_1_1(members[17]).requestMembers(id.id, formatted, closure_1_0(members[18]).ADD_MEMBER_QUERY_LIMIT);
      callback2(formatted);
    };
    obj2[3] = function onRemove(arg0) {
      let obj = closure_1_1(members[19]);
      const tmp2 = obj.keys(pendingAdditions)[arg0];
      closure_0 = tmp2;
      if (null != pendingAdditions[tmp2]) {
        callback((arg0) => {
          const merged = Object.assign(arg0);
          delete tmp[tmp2];
          return {};
        });
        const AccessibilityAnnouncer = closure_1_0(tmp[13]).AccessibilityAnnouncer;
        const intl = closure_1_0(tmp[14]).intl;
        obj = { text: null };
        obj[0] = tmp3.display.text;
        AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_1_0(tmp[14]).t.srlxB8, obj), "polite");
      }
    };
    obj2[4] = global.autoFocusSearch;
    obj2[5] = inActionSheet;
    obj1[1] = closure_7(tmp4Result, obj2);
    items2 = [, ];
    items2[0] = closure_7(closure_5, obj1);
    if (0 === memo.length) {
      obj3 = { Illustration: null, bodyStyle: null, body: null };
      obj3[0] = require("getNoResultsAltSource").NoResultsAlt;
      obj3[1] = tmp.emptyStateText;
      if ("" !== first) {
        intl3 = require("getSystemLocale").intl;
        ErpIY3 = require("getSystemLocale").t.ErpIY3;
        obj4 = { query: null };
        obj4[0] = first;
        formatResult = intl3.format(ErpIY3, obj4);
      } else {
        intl2 = require("getSystemLocale").intl;
        formatResult = intl2.string(require("getSystemLocale").t.oB9grQ);
      }
      obj3[2] = formatResult;
      tmp12Result = tmp12(require("Button").EmptyState, obj3);
    } else {
      obj5 = { paddingHorizontal: null, paddingTop: null, paddingBottom: null };
      obj5[0] = require("Themes").space.PX_16;
      obj5[1] = require("Themes").space.PX_12;
      num = 0;
      if (inActionSheet) {
        num = require("useSafeAreaInsetsKeyboardAware")(obj).insets.bottom;
      }
      obj6 = { contentContainerStyle: null, renderItem: null, data: null, extraData: null, keyboardShouldPersistTaps: "always" };
      obj5[2] = require("Themes").space.PX_12 + num;
      obj6[0] = obj5;
      obj6[1] = function renderItem(item) {
        item = item.item;
        const index = item.index;
        let roles = item.roles;
        let hasItem = roles.includes(id2.id);
        let obj = {
          start: 0 === index,
          end: index === memo.length - 1,
          guildId: item.id,
          userId: item.id,
          onPress() {
            const roles = item.roles;
            if (!roles.includes(closure_1_1.id)) {
              closure_1_4((arg0) => {
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
                  ({ tagAvatar: obj3[1], tagAvatar: obj3[2] } = closure_1_5);
                  obj[1] = closure_2_7(item(closure_2_2[12]).Avatar, obj);
                  obj1 = { display: null, row: null };
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
        let tmp5 = hasItem;
        if (!hasItem) {
          let tmp6 = closure_9;
          if (closure_9) {
            tmp6 = !tmp2;
          }
          tmp5 = tmp6;
        }
        obj[5] = tmp5;
        if (!hasItem) {
          hasItem = tmp2;
        }
        obj[6] = hasItem;
        return closure_7(closure_1_11, obj);
      };
      obj6[2] = memo;
      obj6[3] = pendingAdditions;
      obj7 = { children: null };
      items2[1] = tmp12(FlashList, obj6);
      obj7[0] = items2;
      return tmp10(tmp11, obj7);
    }
    return;
  }
}
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, inputContainer: null, tagAvatar: null, emptyStateText: null, addMembersDescription: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12 };
createCacheKey[2] = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm };
let obj2 = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_DEFAULT };
let obj3 = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[4] = { marginHorizontal: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { marginHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx");

export default function AddMembersActionSheet(guild) {
  guild = guild.guild;
  const role = guild.role;
  let first;
  const tmp = callback4();
  const tmp2 = callback(React.useState({}), 2);
  first = tmp2[0];
  const items = [role.id];
  callback = React.useCallback((roles) => {
    roles = roles.roles;
    return !roles.includes(role.id);
  }, items);
  let obj = guild(first[18]);
  const guildMembers = obj.useGuildMembers(guild.id, callback);
  obj1 = guild(first[21]);
  obj = { [guild.id]: Object.keys(first) };
  const subscribeGuildMembers = obj1.useSubscribeGuildMembers(obj, "AddMembersActionSheet");
  let tmp9 = 0 === Object.keys(first).length;
  if (!tmp9) {
    const _Object = Object;
    tmp9 = Object.keys(first).length > MAX_BULK_ROLE_MEMBERS_ADD;
  }
  obj = { title: null, subtitle: null, trailing: null };
  const intl = tmp5(tmp6[14]).intl;
  obj[0] = intl.string(guild(first[14]).t.ZYOK46);
  obj[1] = role.name;
  obj1 = { size: "sm", text: null, onPress: null, variant: null, disabled: null };
  const intl2 = tmp5(tmp6[14]).intl;
  obj1[1] = intl2.string(guild(first[14]).t.OYkgVk);
  obj1[2] = function onPress() {
    const obj = role(first[25]);
    obj.bulkAddMemberRoles(guild.id, role.id, role(first[19]).keys(first));
    const obj2 = role(first[19]);
    role(first[26]).hideActionSheet();
  };
  let str = "primary";
  if (tmp9) {
    str = "secondary";
  }
  let obj2 = { scrollable: true, header: null, startExpanded: true, children: null };
  obj1[3] = str;
  obj1[4] = tmp9;
  obj[2] = closure_7(guild(first[24]).Button, obj1);
  obj2[1] = closure_7(guild(first[23]).BottomSheetTitleHeader, obj);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "text-sm/normal", style: tmp.addMembersDescription, children: null };
  const intl3 = tmp5(tmp6[14]).intl;
  obj4[2] = intl3.format(guild(first[14]).t["3OxP4q"], { numMembers: MAX_BULK_ROLE_MEMBERS_ADD });
  const items1 = [closure_7(guild(first[27]).Text, obj4), closure_7(AddMembersBody, { guild, role, members: guildMembers, pendingAdditions: first, setPendingAdditions: tmp2[1], autoFocusSearch: true, maxCount: MAX_BULK_ROLE_MEMBERS_ADD, inActionSheet: true })];
  obj3[1] = items1;
  obj2[3] = callback3(View, obj3);
  return closure_7(guild(first[22]).BottomSheet, obj2);
};
export { AddMembersBody };