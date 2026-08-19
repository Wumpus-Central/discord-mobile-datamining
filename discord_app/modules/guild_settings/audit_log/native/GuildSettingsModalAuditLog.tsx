// === Module 16756: ConnectedGuildSettingsModalAuditLog ===

// Module 16756 (ConnectedGuildSettingsModalAuditLog)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import AuditLogActions from "AuditLogActions" /* 16757 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: closure_6, FlatList: error } = get_ActivityIndicator);
({ GuildSettingsSections: map1, AuditLogFilterTypes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.md, paddingVertical: 6, paddingHorizontal: 8, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingTop: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[4] = { marginTop: 0 };
createCacheKey[5] = { marginBottom: 0 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 };
let closure_18 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx");

export default function ConnectedGuildSettingsModalAuditLog(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  actionFilter = undefined;
  let memo;
  let first;
  closure_10 = undefined;
  let callback;
  const tmp = callback2();
  closure_1 = tmp;
  let obj = guildId(stateFromStores[12]);
  const navigation = obj.useNavigation();
  obj1 = guildId(stateFromStores[13]);
  let items = [memo, closure_10];
  stateFromStores = obj1.useStateFromStores(items, () => memo.getChannel(channelId.getChannelId()));
  let obj2 = guildId(stateFromStores[13]);
  const items1 = [closure_12, callback];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let obj = navigation(stateFromStores[14]);
    first = obj.ACTION_FILTER_ITEMS().filter((item, index) => item.value === actionFilter.actionFilter)[0];
    let user = null;
    if (null != userIdFilter.userIdFilter) {
      user = callback.getUser(userIdFilter.userIdFilter);
    }
    obj = { isInitialLoading: userIdFilter.isInitialLoading, isLoading: userIdFilter.isLoading, isLoadingNextPage: userIdFilter.isLoadingNextPage, showLoadMore: userIdFilter.groupedFetchCount > 2, hasError: userIdFilter.hasError, hasOlderLogs: userIdFilter.hasOlderLogs, actionFilter: userIdFilter.actionFilter, actionFilterLabel: null, userIdFilter: null, userIdFilterLabel: null, _logs: null };
    let str = "";
    if (null != first) {
      str = first.label;
    }
    obj[7] = str;
    obj[8] = userIdFilter.userIdFilter;
    if (null != user) {
      let userTag = lib(stateFromStores[15]).getUserTag(user);
      const obj3 = lib(stateFromStores[15]);
    } else {
      const intl = guildId(stateFromStores[16]).intl;
      userTag = intl.string(guildId(stateFromStores[16]).t.ZRFdsL);
    }
    obj[9] = userTag;
    obj[10] = userIdFilter.logs;
    return obj;
  });
  ({ hasError, actionFilter } = stateFromStoresObject);
  const userIdFilter = stateFromStoresObject.userIdFilter;
  const _logs = stateFromStoresObject._logs;
  ({ isInitialLoading, isLoading, isLoadingNextPage, userIdFilterLabel, actionFilterLabel } = stateFromStoresObject);
  let obj3 = guildId(stateFromStores[13]);
  const items2 = [first];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => first.getGuild(guildId));
  const items3 = [_logs, stateFromStores1];
  memo = userIdFilter.useMemo(() => {
    if (null != _logs) {
      if (null != stateFromStores1) {
        navigation(stateFromStores[14]).transformLogs(tmp, tmp2);
        const obj = navigation(stateFromStores[14]);
      }
      return [];
    }
  }, items3);
  const tmp8 = actionFilter(userIdFilter.useState({ current: null, prev: null }), 2);
  first = tmp8[0];
  closure_10 = tmp8[1];
  const items4 = [actionFilter, userIdFilter, navigation];
  callback = userIdFilter.useCallback(() => {
    guildId(stateFromStores[17]);
    let obj = { label: null, onPress: null };
    const intl = guildId(stateFromStores[16]).intl;
    obj[0] = intl.string(guildId(stateFromStores[16]).t["hxnY/q"]);
    obj[1] = function onPress() {
      const obj = { filterType: closure_1_14.USER, data: guildId(stateFromStores[18]).createAuditLogFilterUserData(closure_5) };
      arr = arr.push(closure_1_13.AUDIT_LOG_FILTER, obj);
      const obj2 = guildId(stateFromStores[18]);
    };
    const items = [obj, ];
    obj1 = { label: null, onPress: null };
    const intl2 = guildId(stateFromStores[16]).intl;
    obj1[0] = intl2.string(guildId(stateFromStores[16]).t.rautds);
    obj1[1] = function onPress() {
      const obj = { filterType: closure_1_14.ACTION, data: guildId(stateFromStores[18]).createAuditLogFilterActionData(closure_4) };
      const obj2 = guildId(stateFromStores[18]);
    };
    items[1] = obj1;
    obj[1] = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items4);
  const items5 = [tmp, first, stateFromStores, guildId, memo.length];
  const items6 = [callback, navigation];
  const callback1 = userIdFilter.useCallback((arg0) => {
    ({ item, index } = arg0);
    const diff = memo.length - 1;
    let firstAuditRow = 0 === index;
    if (firstAuditRow) {
      firstAuditRow = lib.firstAuditRow;
    }
    let lastAuditRow = index === diff;
    const items = [firstAuditRow, ];
    if (lastAuditRow) {
      lastAuditRow = lib.lastAuditRow;
    }
    items[1] = lastAuditRow;
    return closure_1_15(lib(stateFromStores[19]), {
      containerStyle: items,
      onHeaderClick(id) {
        if (ref.current !== id.id) {
          const obj = { current: null, prev: null };
          obj[0] = id.id;
          obj[1] = tmp.current;
          callback(obj);
        } else {
          callback({ current: null, prev: null });
        }
      },
      log: item,
      expanded: first.current === item.id,
      lastExpanded: first.prev === item.id,
      guildId,
      channel: stateFromStores
    }, item.id);
  }, items5);
  const layoutEffect = userIdFilter.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        const obj = { onPress: closure_11, text: null };
        const intl = guildId(stateFromStores[16]).intl;
        obj[1] = intl.string(guildId(stateFromStores[16]).t.pEasFX);
        return closure_1_15(guildId(stateFromStores[20]).HeaderActionButton, obj);
      }
    });
  }, items6);
  const items7 = [guildId];
  const effect = userIdFilter.useEffect(() => {
    const logs = guildId(stateFromStores[21]).fetchLogs(guildId);
  }, items7);
  obj = { style: tmp.spinner };
  const tmp15 = callback(guildId(stateFromStores[22]).ActivityIndicator, obj);
  let tmp16Result = tmp15;
  if (!isLoading) {
    tmp16Result = tmp15;
    if (!isInitialLoading) {
      obj = { style: null, children: null };
      obj[0] = tmp.filtersWrapper;
      obj1 = { start: true, end: true, icon: null, label: null, onPress: null, trailing: null };
      obj2 = { variant: "text-md/semibold", children: null };
      let intl = tmp2(tmp3[16]).intl;
      obj2[1] = intl.string(tmp2(tmp3[16]).t.kP6oFy);
      obj1[2] = tmp14(tmp2(tmp3[24]).Text, obj2);
      obj3 = { style: null, children: null };
      obj3[0] = tmp.filterTrailing;
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.filterTextWrapper;
      const obj5 = { variant: "text-sm/semibold", children: null };
      obj5[1] = userIdFilterLabel;
      obj4[1] = tmp14(tmp2(tmp3[24]).Text, obj5);
      const items8 = [tmp14(_logs, obj4), ];
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.filterTextWrapper;
      const obj7 = { variant: "text-sm/semibold", children: null };
      obj7[1] = actionFilterLabel;
      obj6[1] = tmp14(tmp2(tmp3[24]).Text, obj7);
      items8[1] = tmp14(_logs, obj6);
      obj3[1] = items8;
      obj1[3] = callback(_logs, obj3);
      obj1[4] = callback;
      obj1[5] = tmp14(tmp2(tmp3[25]).TableRowArrow, {});
      obj[1] = tmp14(tmp2(tmp3[23]).TableRow, obj1);
      const items9 = [tmp14(_logs, obj), , ];
      if (0 === memo.length) {
        let intl2 = tmp2(tmp3[16]).intl;
        const string = intl2.string;
        const t = tmp2(tmp3[16]).t;
        if (hasError) {
          let stringResult = string(t.tzkaD7);
        } else {
          stringResult = string(t.lNuYhh);
        }
        const obj8 = { body: null, title: null, Illustration: null };
        obj8[0] = stringResult;
        const intl3 = tmp2(tmp3[16]).intl;
        const string2 = intl3.string;
        let Ww5Tjy = tmp2(tmp3[16]).t;
        if (hasError) {
          Ww5Tjy = Ww5Tjy.Ww5Tjy;
          let string2Result = string2(Ww5Tjy);
        } else {
          string2Result = string2(Ww5Tjy["RHhk+P"]);
        }
        obj8[1] = string2Result;
        obj8[2] = tmp2(tmp3[27]).EmptyServerSettingsAuditLog;
        tmp14(tmp2(tmp3[26]).EmptyState, obj8);
      } else {
        const obj9 = { style: null, contentContainerStyle: null, data: null, extraData: null, keyExtractor: null, renderItem: null, onEndReached: null };
        const items10 = [tmp.listView];
        obj9[0] = items10;
        obj9[1] = guildId.contentContainerStyle;
        obj9[2] = memo;
        obj9[3] = first;
        obj9[4] = function keyExtractor(id) {
          return id.id;
        };
        obj9[5] = callback1;
        obj9[6] = function onEndReached() {
          const nextLogPage = guildId(stateFromStores[21]).fetchNextLogPage(guildId);
        };
        items9[1] = tmp14(stateFromStores1, obj9);
        let tmp24 = null;
        if (isLoadingNextPage) {
          tmp24 = tmp15;
        }
        const obj10 = { children: null };
        items9[2] = tmp24;
        obj10[0] = items9;
        tmp16Result = callback(closure_17, obj10);
      }
    }
  }
  const obj11 = { children: null };
  const items11 = [tmp16Result, callback(guildId(stateFromStores[28]).NavScrim, {})];
  obj11[0] = items11;
  return callback(closure_17, obj11);
};