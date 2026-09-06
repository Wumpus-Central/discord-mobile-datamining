// discord_app/modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import AuditLogUtils from "../AuditLogUtils.tsx";
import AuditLogActionCreators from "../../../../actions/AuditLogActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import GuildSettingsAuditLogStore from "../GuildSettingsAuditLogStore.tsx";

require = fn;
const View = fn(17).View;
const AuditLogFilterTypes = fn(1074).AuditLogFilterTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { searchBar: null, allUsersIconContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_16 };
createStyles.searchBar = createStyles;
createStyles.allUsersIconContainer = { height: 30, width: 30, alignItems: "center" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/audit_log/native/GuildSettingsModalAuditLogFilter.tsx",
);

export default function GuildSettingsModalAuditLogFilter(data) {
  data = data.data;
  const filterType = data.filterType;
  const guildId = data.guildId;
  data = undefined;
  let tmp = closure_12();
  _slicedToArray = tmp;
  let obj = data(guildId[13]);
  const navigation = obj.useNavigation();
  const tmp6 = _slicedToArray(navigation.useState(""), 2);
  const first = tmp6[0];
  const items = [first, data];
  const memo = navigation.useMemo(
    () => ({
      data: data.filter((label) => {
        const formatted = first.toLowerCase();
        return filterType(guildId[14])(formatted, label.label.toLowerCase());
      }),
      keyExtractor(value) {
        if (null != value.value) {
          let str = value.value.toString();
        } else {
          str = value.index;
          str = str.toString();
        }
        return str;
      },
    }),
    items,
  );
  data = memo.data;
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
  const items3 = [filterType, guildId, callback, data.length, tmp.allUsersIconContainer];
  obj = { style: tmp.searchBar, children: null };
  const callback1 = navigation.useCallback((item) => {
    value = iter.value;
    data = value;
    const selected = iter.selected;
    const index = item.index;
    if (selected === constants.USER) {
      if (null !== value) {
        let obj = {
          start: 0 === index,
          end: index === data.length - 1,
          userId: value.id,
          guildId,
          onPress() {
            return callback(!selected, value);
          },
          trailing: null,
        };
        obj = { selected };
        obj.trailing = closure_1_9(data(guildId[17]).FormRadio, obj);
        let tmp4Result = closure_1_9(filterType(guildId[16]), obj);
        const tmp16 = filterType(guildId[16]);
      }
      return tmp4Result;
    }
    obj = {
      start: 0 === index,
      end: index === data.length - 1,
      icon: null,
      label: null,
      onPress: null,
      trailing: null,
    };
    if (tmp === constants.USER) {
      const obj1 = { style: closure_3.allUsersIconContainer, children: null };
      const obj2 = { size: tmp5(guildId[19]).Icon.Sizes.MEDIUM, source: filterType(guildId[20]) };
      obj1.children = closure_1_9(tmp5(guildId[19]).Icon, obj2);
      tmp4Result = closure_1_9(first, obj1);
    } else {
      const obj3 = { action: value };
      tmp4Result = closure_1_9(filterType(guildId[21]), obj3);
    }
    obj.icon = tmp4Result;
    obj.label = item.item.label;
    obj.onPress = function onPress() {
      return callback(!selected, value);
    };
    obj.trailing = closure_1_9(data(guildId[17]).FormRadio, { selected });
    tmp4Result = closure_1_9(data(guildId[18]).TableRow, obj);
    tmp = selected;
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
  obj.children = closure_9(data(guildId[22]).SearchField, { size: "md", placeholder: stringResult, onChange: tmp6[1] });
  const items4 = [closure_9(first, obj), ,];
  if (0 === data.length) {
    obj = { body: null, title: null, Illustration: null };
    const intl4 = tmp4(tmp3[9]).intl;
    obj.body = intl4.string(tmp4(tmp3[9]).t.V6nAfF);
    const intl5 = tmp4(tmp3[9]).intl;
    obj.title = intl5.formatToPlainString(tmp4(tmp3[9]).t.ZGVL3g, { count: 0 });
    obj.Illustration = tmp4(tmp3[23]).NoResults;
    let tmp14Result = closure_9(tmp4(tmp3[19]).EmptyState, obj);
  } else {
    let obj1 = { keyExtractor: memo.keyExtractor, renderItem: callback1, data, contentContainerStyle: null };
    let obj2 = { paddingHorizontal: filterType(tmp3[8]).space.PX_12, paddingBottom: filterType(guildId[12])().bottom };
    obj1.contentContainerStyle = obj2;
    tmp14Result = closure_9(tmp4(tmp3[24]).FlashList, obj1);
  }
  let obj3 = { children: null };
  items4[1] = tmp14Result;
  items4[2] = closure_9(data(guildId[25]).NavScrim, {});
  obj3.children = items4;
  return closure_11(closure_10, obj3);
}
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
        const obj = {
          label: UserUtilsDefault.getUserTag(user),
          value: user,
          selected: user.id === closure_0,
          index: items.length,
        };
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
        const obj = {
          label: UserUtilsDefault.getUserTag(user),
          value: user,
          selected: user.id === closure_0,
          index: items.length,
        };
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
  const mapped = AuditLogUtils.ACTION_FILTER_ITEMS().map((label, index) => ({
    label: label.label,
    value: label.value,
    selected: closure_0 === label.value,
    index,
  }));
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
