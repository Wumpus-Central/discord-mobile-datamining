// === Module 17659: GuildSettingsModalAuditLogFilter ===

// Module 17659 (GuildSettingsModalAuditLogFilter)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4355 */;
import UserUtilsDefault from "UserUtils" /* 4481 */;
import FormRadio from "FormRadio" /* 5770 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 11073 */;
import AuditLogUtils from "AuditLogUtils" /* 17652 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 17660 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17650 */;

require = fn;
const View = fn(17).View;
const AuditLogFilterTypes = fn(1074).AuditLogFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let obj = { searchBar: null, allUsersIconContainer: null };
obj = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 };
obj.searchBar = obj;
obj.allUsersIconContainer = { height: 30, width: 30, alignItems: "center" };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo((selected) => {
  selected = selected.selected;
  ({ start, end, guildId, userId, onPress } = selected);
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { start, end, userId, guildId, onPress, accessibilityRole, accessibilityState, trailing: React7(FormRadio.FormRadio, { selected }) };
  return React7(DetailedGuildIdentityUserRowDefault, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  data = undefined;
  let tmp = closure_12();
  _slicedToArray = tmp;
  let obj = data(guildId[16]);
  const navigation = obj.useNavigation();
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
        let str = value.value.toString();
      } else {
        str = value.index;
        str = str.toString();
      }
      return str;
    }
  }), items);
  data = memo.data;
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
  const items3 = [filterType, guildId, callback, data.length, tmp.allUsersIconContainer, keyExtractor];
  obj = { style: tmp.searchBar, children: null };
  const callback1 = navigation.useCallback((arg0) => {
    ({ item, index } = arg0);
    value = item.value;
    c0 = value;
    const selected = item.selected;
    if (selected === callback.USER) {
      if (null !== value) {
        let obj = {
          start: 0 === index,
          end: index === data.length - 1,
          selected,
          guildId,
          userId: value.id,
          onPress() {
                return callback(!selected, c0);
              }
        };
        return closure_1_9(closure_1_13, obj);
      }
    }
    if (selected === callback.USER) {
      obj = { style: closure_3.allUsersIconContainer, children: null };
      const obj1 = { size: data(guildId[19]).Icon.Sizes.MEDIUM, source: filterType(guildId[20]) };
      obj.children = closure_1_9(data(guildId[19]).Icon, obj1);
      let tmp7 = closure_1_9(first, obj);
      let tmp6 = guildId;
      let tmp4 = closure_1_9;
    } else {
      tmp4 = closure_1_9;
      tmp6 = guildId;
      obj = { action: value };
      tmp7 = closure_1_9(filterType(guildId[21]), obj);
    }
    return tmp4(data(tmp6[22]).TableRadioRow, {
      start: 0 === index,
      end: index === data.length - 1,
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
  obj.children = closure_9(data(guildId[23]).SearchField, { size: "md", placeholder: stringResult, onChange: tmp6[1] });
  const items4 = [closure_9(first, obj), , ];
  if (0 === data.length) {
    obj = { body: null, title: null, Illustration: null };
    const intl4 = tmp4(tmp3[9]).intl;
    obj.body = intl4.string(tmp4(tmp3[9]).t.V6nAfF);
    const intl5 = tmp4(tmp3[9]).intl;
    obj.title = intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 });
    obj.Illustration = tmp4(tmp3[24]).NoResults;
    let tmp14Result = closure_9(tmp4(tmp3[19]).EmptyState, obj);
  } else {
    let obj1 = { keyExtractor, renderItem: callback1, data, contentContainerStyle: null };
    let obj2 = { paddingHorizontal: filterType(tmp3[8]).space.PX_12, paddingBottom: filterType(guildId[15])().bottom };
    obj1.contentContainerStyle = obj2;
    tmp14Result = closure_9(tmp4(tmp3[25]).FlashList, obj1);
  }
  const obj3 = { children: null };
  items4[1] = tmp14Result;
  items4[2] = closure_9(data(guildId[26]).NavScrim, {});
  obj3.children = items4;
  return closure_11(closure_10, obj3);
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