// === Module 17342: GuildSettingsModalAuditLogFilter ===

// Module 17342 (GuildSettingsModalAuditLogFilter)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4548 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import FormRadio from "FormRadio" /* 6001 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10404 */;
import AuditLogUtils from "AuditLogUtils" /* 17340 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 17343 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17338 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AuditLogFilterTypes = fn(1074).AuditLogFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4836);
let obj = { searchBar: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 }, allUsersIconContainer: { height: 30, width: 30, alignItems: "center" } };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo((selected) => {
  selected = selected.selected;
  ({ start, end, guildId, userId, onPress } = selected);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { start, end, userId, guildId, onPress, accessibilityRole, accessibilityState, trailing: null };
  obj2.trailing = React7(FormRadio.FormRadio, { selected });
  return React7(DetailedGuildIdentityUserRowDefault, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  let tmp = closure_12();
  _slicedToArray = tmp;
  const navigation = data(guildId[16]).useNavigation();
  let tmp6 = _slicedToArray(navigation.useState(""), 2);
  const first = tmp6[0];
  const items = [first, data];
  const memo = navigation.useMemo(() => ({
    data: data.filter((label) => {
      const formatted = first.toLowerCase();
      return filterType(guildId[17])(formatted, label.label.toLowerCase());
    }),
    keyExtractor(value) {
      if (null != value.value) {
        let str1 = value.value.toString();
      } else {
        str1 = value.index.toString();
      }
      return str1;
    }
  }), items);
  const data1 = memo.data;
  const keyExtractor = memo.keyExtractor;
  const items1 = [filterType, navigation];
  const effect = navigation.useEffect(() => {
    if (AuditLogFilterTypes.USER === filterType) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t["hxnY/q"]);
    } else if (tmp3.ACTION === tmp2) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.rautds);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.pEasFX);
    }
    navigation.setOptions({ headerTitle: stringResult });
  }, items1);
  const items2 = [filterType, guildId, navigation];
  const callback = navigation.useCallback((arg0, navigation) => {
    if (arg0) {
      let tmp = navigation;
      if (filterType === AuditLogFilterTypes.USER) {
        let id = null;
        if (null != tmp) {
          id = tmp.id;
        }
        AuditLogActionCreators.filterByUserId(id, guildId);
      } else if (tmp2 === tmp3.ACTION) {
        AuditLogActionCreators.filterByAction(tmp, guildId);
      }
      tmp = navigation;
      navigation.pop();
    }
  }, items2);
  const items3 = [filterType, guildId, callback, data1.length, tmp.allUsersIconContainer, keyExtractor];
  let obj2 = { style: tmp.searchBar, children: null };
  const callback1 = navigation.useCallback((arg0) => {
    ({ item, index } = arg0);
    value = item.value;
    c0 = value;
    const selected = item.selected;
    if (selected === callback.USER) {
      if (null !== value) {
        const obj2 = {
          start: 0 === index,
          end: index === data1.length - 1,
          selected,
          guildId,
          userId: value.id,
          onPress() {
                return callback(!selected, c0);
              }
        };
        return closure_1_9(closure_1_13, obj2);
      }
    }
    if (selected === callback.USER) {
      const obj3 = { style: closure_3.allUsersIconContainer, children: null };
      const obj4 = { size: data(guildId[19]).Icon.Sizes.MEDIUM, source: filterType(guildId[20]) };
      obj3.children = closure_1_9(data(guildId[19]).Icon, obj4);
      let tmp7 = closure_1_9(first, obj3);
      let tmp6 = guildId;
      let tmp4 = closure_1_9;
    } else {
      tmp4 = closure_1_9;
      tmp6 = guildId;
      const obj = { action: value };
      tmp7 = closure_1_9(filterType(guildId[21]), obj);
    }
    return tmp4(data(tmp6[22]).TableRadioRow, {
      start: 0 === index,
      end: index === data1.length - 1,
      icon: tmp7,
      label: item.label,
      value: keyExtractor(item),
      legacyCompat_selected: selected,
      legacyCompat_onPress() {
        return callback(!selected, c0);
      }
    });
  }, items3);
  if (filterType === callback.USER) {
    let intl3 = tmp4(tmp3[9]).intl;
    let stringResult = intl3.string(tmp4(tmp3[9]).t.pYHobK);
  } else if (filterType === tmp16.ACTION) {
    let intl2 = tmp4(tmp3[9]).intl;
    stringResult = intl2.string(tmp4(tmp3[9]).t.I288Zx);
  } else {
    let intl = tmp4(tmp3[9]).intl;
    stringResult = intl.string(tmp4(tmp3[9]).t["5h0QOP"]);
  }
  obj2.children = closure_9(data(guildId[23]).SearchField, { size: "md", placeholder: stringResult, onChange: tmp6[1] });
  const items4 = [closure_9(first, obj2), , ];
  if (0 === data1.length) {
    let obj3 = { body: null, title: null, Illustration: null };
    const intl4 = tmp4(tmp3[9]).intl;
    obj3.body = intl4.string(tmp4(tmp3[9]).t.V6nAfF);
    const intl5 = tmp4(tmp3[9]).intl;
    obj3.title = intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 });
    obj3.Illustration = tmp4(tmp3[24]).NoResults;
    let tmp14Result = closure_9(tmp4(tmp3[19]).EmptyState, obj3);
  } else {
    let obj4 = { keyExtractor, renderItem: callback1, data: data1, contentContainerStyle: null };
    const obj5 = { paddingHorizontal: filterType(tmp3[8]).space.PX_12, paddingBottom: filterType(guildId[15])().bottom };
    obj4.contentContainerStyle = obj5;
    tmp14Result = closure_9(tmp4(tmp3[25]).FlashList, obj4);
  }
  const obj6 = { children: null };
  items4[1] = tmp14Result;
  items4[2] = closure_9(data(guildId[26]).NavScrim, {});
  obj6.children = items4;
  return closure_11(closure_10, obj6);
};
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(userIdFilter) {
  _require = userIdFilter;
  const items = [];
  let obj = { label: null, value: null, selected: null, index: 0 };
  const intl = require("util").intl;
  obj.label = intl.string(require("util").t.ZRFdsL);
  obj.selected = null == userIdFilter;
  items.push(obj);
  set = new Set();
  const logs = GuildSettingsAuditLogStore.logs;
  const item = logs.forEach((userId) => {
    userId = userId.userId;
    if (null != userId) {
      const user = UserStore.getUser(userId);
      if (!tmp) {
        set.add(userId);
        const obj = { label: UserUtilsDefault.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
      }
      tmp = set.has(userId) || null == user;
    }
  });
  const userIds = GuildSettingsAuditLogStore.userIds;
  const item1 = userIds.forEach((item) => {
    if (null != item) {
      const user = UserStore.getUser(item);
      if (!tmp) {
        set.add(item);
        const obj = { label: UserUtilsDefault.getUserTag(user), value: user, selected: user.id === closure_0, index: items.length };
        items.push(obj);
      }
      tmp = set.has(item) || null == user;
    }
  });
  const sorted = items.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
  return items;
};
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(actionFilter) {
  closure_0 = actionFilter;
  const mapped = AuditLogUtils.ACTION_FILTER_ITEMS().map((label, index) => ({ label: label.label, value: label.value, selected: closure_0 === label.value, index }));
  return mapped.sort((selected, selected2) => {
    let num = -1;
    if (!selected.selected) {
      let num2 = 1;
      if (!selected2.selected) {
        num2 = selected.index - selected2.index;
      }
      num = num2;
    }
    return num;
  });
};