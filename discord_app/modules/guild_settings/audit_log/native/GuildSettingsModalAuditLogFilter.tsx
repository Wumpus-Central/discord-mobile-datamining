// === Module 17060: GuildSettingsModalAuditLogFilter ===

// Module 17060 (GuildSettingsModalAuditLogFilter)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1923 */;
import closure_7 from "AuditLogActions" /* 17051 */;
import { AuditLogFilterTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { searchBar: null, allUsersIconContainer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 30, width: 30, alignItems: "center" };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx");

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  let callback;
  let navigation;
  let first;
  data = undefined;
  callback = undefined;
  let tmp = callback2();
  callback = tmp;
  let obj = data(guildId[13]);
  navigation = obj.useNavigation();
  const tmp6 = callback(navigation.useState(""), 2);
  first = tmp6[0];
  const items = [first, data];
  const memo = navigation.useMemo(() => ({
    data: data.filter((label) => {
      const formatted = closure_5.toLowerCase();
      return closure_1_1(closure_1_2[14])(formatted, label.label.toLowerCase());
    }),
    keyExtractor(value) {
      if (null != value.value) {
        let str = value.value.toString();
        const str2 = value.value;
      } else {
        str = value.index;
        str = str.toString();
      }
      return str;
    }
  }), items);
  data = memo.data;
  const items1 = [filterType, navigation];
  const effect = navigation.useEffect(() => {
    if (closure_1_8.USER === filterType) {
      const intl3 = data(guildId[9]).intl;
      let stringResult = intl3.string(data(guildId[9]).t["hxnY/q"]);
    } else if (tmp3.ACTION === tmp2) {
      const intl2 = data(guildId[9]).intl;
      stringResult = intl2.string(data(guildId[9]).t.rautds);
    } else {
      const intl = data(guildId[9]).intl;
      stringResult = intl.string(data(guildId[9]).t.pEasFX);
    }
    navigation.setOptions({ headerTitle: stringResult });
  }, items1);
  const items2 = [filterType, guildId, navigation];
  callback = navigation.useCallback((arg0, arg1) => {
    if (arg0) {
      let tmp = arg1;
      if (filterType === closure_1_8.USER) {
        let id = null;
        if (null != tmp) {
          id = tmp.id;
        }
        data(guildId[15]).filterByUserId(id, guildId);
        const obj2 = data(guildId[15]);
      } else if (tmp2 === tmp3.ACTION) {
        data(guildId[15]).filterByAction(tmp, guildId);
        const obj = data(guildId[15]);
      }
      tmp = navigation;
      navigation.pop();
    }
  }, items2);
  const items3 = [filterType, guildId, callback, data.length, tmp.allUsersIconContainer];
  obj = { style: tmp.searchBar, children: null };
  const callback1 = navigation.useCallback((item) => {
    const value = iter.value;
    data = value;
    const selected = iter.selected;
    const index = item.index;
    if (selected === closure_1_8.USER) {
      if (null !== value) {
        let obj = { start: null, end: null, userId: null, guildId: null, onPress: null, trailing: null };
        obj[0] = 0 === index;
        obj[1] = index === data.length - 1;
        obj[2] = value.id;
        obj[3] = guildId;
        obj[4] = function onPress() {
          return closure_1_7(!selected, closure_0);
        };
        obj = { selected: null };
        obj[0] = selected;
        obj[5] = closure_1_9(data(guildId[17]).FormRadio, obj);
        let tmp4Result = closure_1_9(filterType(guildId[16]), obj);
        const tmp16 = filterType(guildId[16]);
      }
      return tmp4Result;
    }
    obj = { start: 0 === index, end: index === data.length - 1, icon: null, label: null, onPress: null, trailing: null };
    if (selected === closure_1_8.USER) {
      obj1 = { style: null, children: null };
      obj1[0] = obj.allUsersIconContainer;
      const obj2 = { size: null, source: null };
      obj2[0] = tmp5(tmp6[19]).Icon.Sizes.MEDIUM;
      obj2[1] = filterType(tmp6[20]);
      obj1[1] = tmp4(tmp5(tmp6[19]).Icon, obj2);
      tmp4Result = tmp4(first, obj1);
    } else {
      const obj3 = { action: null };
      obj3[0] = value;
      tmp4Result = tmp4(filterType(tmp6[21]), obj3);
    }
    obj[2] = tmp4Result;
    obj[3] = item.item.label;
    obj[4] = function onPress() {
      return closure_1_7(!selected, closure_0);
    };
    obj[5] = closure_1_9(data(guildId[17]).FormRadio, { selected });
    tmp4Result = tmp4(data(guildId[18]).TableRow, obj);
  }, items3);
  if (filterType === AuditLogFilterTypes.USER) {
    let intl3 = tmp4(tmp3[9]).intl;
    let stringResult = intl3.string(tmp4(tmp3[9]).t.pYHobK);
  } else if (filterType === tmp16.ACTION) {
    let intl2 = tmp4(tmp3[9]).intl;
    stringResult = intl2.string(tmp4(tmp3[9]).t.I288Zx);
  } else {
    let intl = tmp4(tmp3[9]).intl;
    stringResult = intl.string(tmp4(tmp3[9]).t["5h0QOP"]);
  }
  obj[1] = closure_9(data(guildId[22]).SearchField, { size: "md", placeholder: stringResult, onChange: tmp6[1] });
  const items4 = [closure_9(first, obj), , ];
  if (0 === data.length) {
    obj = { body: null, title: null, Illustration: null };
    const intl4 = tmp4(tmp3[9]).intl;
    obj[0] = intl4.string(tmp4(tmp3[9]).t.V6nAfF);
    const intl5 = tmp4(tmp3[9]).intl;
    obj[1] = intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 });
    obj[2] = tmp4(tmp3[23]).NoResults;
    let tmp14Result = tmp14(tmp4(tmp3[19]).EmptyState, obj);
  } else {
    obj1 = { keyExtractor: null, renderItem: null, data: null, contentContainerStyle: null };
    obj1[0] = memo.keyExtractor;
    obj1[1] = callback1;
    obj1[2] = data;
    let obj2 = { paddingHorizontal: null, paddingBottom: null };
    obj2[0] = filterType(tmp3[8]).space.PX_12;
    obj2[1] = filterType(guildId[12])().bottom;
    obj1[3] = obj2;
    tmp14Result = tmp14(tmp4(tmp3[24]).FlashList, obj1);
  }
  let obj3 = { children: null };
  items4[1] = tmp14Result;
  items4[2] = closure_9(data(guildId[25]).NavScrim, {});
  obj3[0] = items4;
  return closure_11(closure_10, obj3);
};
export const createAuditLogFilterUserData = function createAuditLogFilterUserData(arg0) {
  const _require = arg0;
  const items = [];
  let obj = { label: null, value: null, selected: null, index: 0 };
  const intl = _require(set[9]).intl;
  obj[0] = intl.string(_require(set[9]).t.ZRFdsL);
  obj[2] = null == arg0;
  items.push(obj);
  set = new Set();
  const logs = closure_7.logs;
  const item = logs.forEach((userId) => {
    userId = userId.userId;
    if (null != userId) {
      const user = closure_1_6.getUser(userId);
      if (!tmp) {
        obj3.add(userId);
        const obj = { label: null, value: null, selected: null, index: null };
        obj[0] = items(set[10]).getUserTag(user);
        obj[1] = user;
        obj[2] = user.id === closure_0;
        obj[3] = items.length;
        items.push(obj);
        const obj2 = items(set[10]);
      }
      obj3 = set;
      tmp = set.has(userId) || null == user;
    }
  });
  const userIds = closure_7.userIds;
  const item1 = userIds.forEach((arg0) => {
    if (null != arg0) {
      const user = closure_1_6.getUser(arg0);
      if (!tmp) {
        obj3.add(arg0);
        const obj = { label: null, value: null, selected: null, index: null };
        obj[0] = items(set[10]).getUserTag(user);
        obj[1] = user;
        obj[2] = user.id === closure_0;
        obj[3] = items.length;
        items.push(obj);
        const obj2 = items(set[10]);
      }
      obj3 = set;
      tmp = set.has(arg0) || null == user;
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
export const createAuditLogFilterActionData = function createAuditLogFilterActionData(closure_4) {
  const _require = closure_4;
  const obj = _require(17053);
  const mapped = _require(17053).ACTION_FILTER_ITEMS().map((label, index) => ({ label: label.label, value: label.value, selected: closure_0 === label.value, index }));
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