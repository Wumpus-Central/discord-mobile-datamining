import _slicedToArray from "_slicedToArray";
import HeaderActionButton from "HeaderActionButton";
import get_ActivityIndicator from "GuildSettingsModalAuditLogFilter";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import AuditLogActions from "AuditLogActions";
import ME from "ME";
import jsxProd from "ActivityIndicator";
import createCacheKey from "createCacheKey";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let error;
let map1;
const require = arg1;
({ View: closure_6, FlatList: error } = get_ActivityIndicator);
({ GuildSettingsSections: map1, AuditLogFilterTypes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
createCacheKey = { listView: { marginVertical: 12 }, spinner: { marginTop: 40 }, filterTextWrapper: null, filtersWrapper: null, firstAuditRow: null, lastAuditRow: null, filterTrailing: null };
createCacheKey = { borderRadius: require("Themes").radii.md, paddingVertical: 6, paddingHorizontal: 8, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { paddingTop: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[4] = { marginTop: 0 };
createCacheKey[5] = { marginBottom: 0 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingTop: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx");

export default function ConnectedGuildSettingsModalAuditLog(guildId) {
  let actionFilter;
  let actionFilterLabel;
  let hasError;
  let isInitialLoading;
  let isLoading;
  let isLoadingNextPage;
  let userIdFilterLabel;
  guildId = guildId.guildId;
  let c1;
  let navigation;
  let stateFromStores;
  actionFilter = undefined;
  let userIdFilter;
  let _logs;
  let stateFromStores1;
  let memo;
  let first;
  let handleConnectionOpen;
  let callback;
  const tmp = createCacheKey();
  c1 = tmp;
  let obj = guildId(stateFromStores[12]);
  navigation = obj.useNavigation();
  let obj1 = guildId(stateFromStores[13]);
  let items = [memo, handleConnectionOpen];
  stateFromStores = obj1.useStateFromStores(items, () => memo.getChannel(channelId.getChannelId()));
  let obj2 = guildId(stateFromStores[13]);
  const items1 = [AuditLogActions, callback];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let obj = navigation(stateFromStores[14]);
    const first = obj.ACTION_FILTER_ITEMS().filter((value) => value.value === actionFilter.actionFilter)[0];
    let user = null;
    if (null != userIdFilter.userIdFilter) {
      user = callback.getUser(tmp3.userIdFilter);
    }
    obj = { isInitialLoading: tmp3.isInitialLoading, isLoading: tmp3.isLoading, isLoadingNextPage: tmp3.isLoadingNextPage, showLoadMore: tmp3.groupedFetchCount > 2, hasError: tmp3.hasError, hasOlderLogs: tmp3.hasOlderLogs, actionFilter: tmp3.actionFilter, actionFilterLabel: null, userIdFilter: null, userIdFilterLabel: null, _logs: null };
    let str = "";
    if (null != first) {
      str = first.label;
    }
    obj[7] = str;
    obj[8] = userIdFilter.userIdFilter;
    if (null != user) {
      let tag = user.tag;
    } else {
      const intl = guildId(tmp[15]).intl;
      tag = intl.string(guildId(tmp[15]).t.ZRFdsL);
    }
    obj[9] = tag;
    obj[10] = userIdFilter.logs;
    return obj;
  });
  ({ hasError, actionFilter } = stateFromStoresObject);
  userIdFilter = stateFromStoresObject.userIdFilter;
  _logs = stateFromStoresObject._logs;
  ({ isInitialLoading, isLoading, isLoadingNextPage, userIdFilterLabel, actionFilterLabel } = stateFromStoresObject);
  let obj3 = guildId(stateFromStores[13]);
  const items2 = [first];
  stateFromStores1 = obj3.useStateFromStores(items2, () => first.getGuild(guildId));
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
  handleConnectionOpen = tmp8[1];
  const items4 = [actionFilter, userIdFilter, navigation];
  callback = userIdFilter.useCallback(() => {
    let obj = guildId(stateFromStores[16]);
    obj = { key: "GuildSettingsAuditLogFilter", options: null, hasIcons: false };
    obj = { label: null, onPress: null };
    const intl = guildId(stateFromStores[15]).intl;
    obj[0] = intl.string(guildId(stateFromStores[15]).t["hxnY/q"]);
    obj[1] = function onPress() {
      const obj = { filterType: outer1_14.USER, data: null };
      obj[1] = outer1_0(outer1_3[17]).createAuditLogFilterUserData(HeaderActionButton);
      arr = arr.push(outer1_13.AUDIT_LOG_FILTER, obj);
    };
    const items = [obj, ];
    const obj1 = { label: null, onPress: null };
    const intl2 = guildId(stateFromStores[15]).intl;
    obj1[0] = intl2.string(guildId(stateFromStores[15]).t.rautds);
    obj1[1] = function onPress() {
      const obj = { filterType: outer1_14.ACTION, data: null };
      obj[1] = outer1_0(outer1_3[17]).createAuditLogFilterActionData(_slicedToArray);
      const obj2 = outer1_0(outer1_3[17]);
    };
    items[1] = obj1;
    obj[1] = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items4);
  const items5 = [tmp, first, stateFromStores, guildId, memo.length];
  const items6 = [callback, navigation];
  const callback1 = userIdFilter.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const diff = memo.length - 1;
    let firstAuditRow = 0 === index;
    if (firstAuditRow) {
      firstAuditRow = _undefined.firstAuditRow;
    }
    let lastAuditRow = index === diff;
    const items = [firstAuditRow, ];
    if (lastAuditRow) {
      lastAuditRow = _undefined.lastAuditRow;
    }
    items[1] = lastAuditRow;
    return outer1_15(_undefined(stateFromStores[18]), {
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
        const obj = { onPress: mergeGuildAvatar, text: null };
        const intl = outer1_0(outer1_3[15]).intl;
        obj[1] = intl.string(outer1_0(outer1_3[15]).t.pEasFX);
        return outer1_15(outer1_0(outer1_3[19]).HeaderActionButton, obj);
      }
    });
  }, items6);
  const items7 = [guildId];
  const effect = userIdFilter.useEffect(() => {
    const logs = guildId(stateFromStores[20]).fetchLogs(guildId);
  }, items7);
  obj = { style: tmp.spinner };
  const tmp15 = callback(guildId(stateFromStores[21]).ActivityIndicator, obj);
  let tmp16Result = tmp15;
  if (!isLoading) {
    tmp16Result = tmp15;
    if (!isInitialLoading) {
      obj = { style: null, children: null };
      obj[0] = tmp.filtersWrapper;
      obj1 = { start: true, end: true, icon: null, label: null, onPress: null, trailing: null };
      obj2 = { variant: "text-md/semibold", children: null };
      let intl = tmp2(tmp3[15]).intl;
      obj2[1] = intl.string(tmp2(tmp3[15]).t.kP6oFy);
      obj1[2] = tmp14(tmp2(tmp3[23]).Text, obj2);
      obj3 = { style: null, children: null };
      obj3[0] = tmp.filterTrailing;
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.filterTextWrapper;
      const obj5 = { variant: "text-sm/semibold", children: null };
      obj5[1] = userIdFilterLabel;
      obj4[1] = tmp14(tmp2(tmp3[23]).Text, obj5);
      const items8 = [tmp14(_logs, obj4), ];
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.filterTextWrapper;
      const obj7 = { variant: "text-sm/semibold", children: null };
      obj7[1] = actionFilterLabel;
      obj6[1] = tmp14(tmp2(tmp3[23]).Text, obj7);
      items8[1] = tmp14(_logs, obj6);
      obj3[1] = items8;
      obj1[3] = tmp16(_logs, obj3);
      obj1[4] = callback;
      obj1[5] = tmp14(tmp2(tmp3[24]).TableRowArrow, {});
      obj[1] = tmp14(tmp2(tmp3[22]).TableRow, obj1);
      const items9 = [tmp14(_logs, obj), , ];
      if (0 === memo.length) {
        let intl2 = tmp2(tmp3[15]).intl;
        const string = intl2.string;
        const t = tmp2(tmp3[15]).t;
        if (hasError) {
          let stringResult = string(t.tzkaD7);
        } else {
          stringResult = string(t.lNuYhh);
        }
        const obj8 = { body: null, title: null, Illustration: null };
        obj8[0] = stringResult;
        const intl3 = tmp2(tmp3[15]).intl;
        const string2 = intl3.string;
        let Ww5Tjy = tmp2(tmp3[15]).t;
        if (hasError) {
          Ww5Tjy = Ww5Tjy.Ww5Tjy;
          let string2Result = string2(Ww5Tjy);
        } else {
          string2Result = string2(Ww5Tjy["RHhk+P"]);
        }
        obj8[1] = string2Result;
        obj8[2] = tmp2(tmp3[26]).EmptyServerSettingsAuditLog;
        tmp14(tmp2(tmp3[25]).EmptyState, obj8);
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
          const nextLogPage = guildId(stateFromStores[20]).fetchNextLogPage(guildId);
        };
        items9[1] = tmp14(stateFromStores1, obj9);
        let tmp24 = null;
        if (isLoadingNextPage) {
          tmp24 = tmp15;
        }
        const obj10 = { children: null };
        items9[2] = tmp24;
        obj10[0] = items9;
        tmp16Result = tmp16(tmp17, obj10);
      }
    }
  }
  const obj11 = { children: null };
  const items11 = [tmp16Result, callback(guildId(stateFromStores[27]).NavScrim, {})];
  obj11[0] = items11;
  return closure_16(closure_17, obj11);
};