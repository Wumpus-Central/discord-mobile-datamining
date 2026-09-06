// === Module 17535: GuildSettingsModalAuditLog ===

// Module 17535 (GuildSettingsModalAuditLog)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 7195 */;
import AuditLogUtilsAll from "AuditLogUtils" /* 17538 */;
import AuditLogActionCreators from "AuditLogActionCreators" /* 17546 */;
import AuditLogDefault from "AuditLog" /* 17555 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsAuditLogStore from "GuildSettingsAuditLogStore" /* 17536 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ GuildSettingsSections: map1, AuditLogFilterTypes: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
fn(4560);
let createStyles = { listView: { marginVertical: 12 }, spinner: { marginTop: 40 }, filterTextWrapper: null, filtersWrapper: null, firstAuditRow: null, lastAuditRow: null, filterTrailing: null };
createStyles = { borderRadius: nativeDefault.radii.md, paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
createStyles.filterTextWrapper = createStyles;
createStyles.filtersWrapper = { paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.firstAuditRow = { marginTop: 0 };
createStyles.lastAuditRow = { marginBottom: 0 };
createStyles.filterTrailing = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 8 };
let closure_18 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx");

export default function ConnectedGuildSettingsModalAuditLog(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  actionFilter = undefined;
  let memo;
  let extraData;
  let channelId;
  let onPress;
  const tmp = closure_18();
  closure_1 = tmp;
  let obj = guildId(stateFromStores[12]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(stateFromStores[13]);
  let items = [memo, channelId];
  stateFromStores = obj1.useStateFromStores(items, () => memo.getChannel(channelId.getChannelId()));
  let obj2 = guildId(stateFromStores[13]);
  const items1 = [GuildSettingsAuditLogStore, onPress];
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
    obj.actionFilterLabel = str;
    obj.userIdFilter = userIdFilter.userIdFilter;
    if (null != user) {
      let userTag = closure_1(tmp[15]).getUserTag(user);
      const obj3 = closure_1(tmp[15]);
    } else {
      const intl = guildId(tmp[16]).intl;
      userTag = intl.string(guildId(tmp[16]).t.ZRFdsL);
    }
    obj.userIdFilterLabel = userTag;
    obj._logs = userIdFilter.logs;
    return obj;
  });
  ({ hasError, actionFilter } = stateFromStoresObject);
  const userIdFilter = stateFromStoresObject.userIdFilter;
  const _logs = stateFromStoresObject._logs;
  ({ isInitialLoading, isLoading, isLoadingNextPage, userIdFilterLabel, actionFilterLabel } = stateFromStoresObject);
  let obj3 = guildId(stateFromStores[13]);
  const items2 = [extraData];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  const items3 = [_logs, stateFromStores1];
  memo = userIdFilter.useMemo(() => {
    if (null != _logs) {
      if (null != stateFromStores1) {
        AuditLogUtilsAll.transformLogs(tmp, tmp2);
      }
      return [];
    }
  }, items3);
  const tmp8 = actionFilter(userIdFilter.useState({ current: null, prev: null }), 2);
  extraData = tmp8[0];
  channelId = tmp8[1];
  const items4 = [actionFilter, userIdFilter, navigation];
  onPress = userIdFilter.useCallback(() => {
    let obj = { key: "GuildSettingsAuditLogFilter", options: null, hasIcons: false };
    obj = { label: null, onPress: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["hxnY/q"]);
    obj.onPress = function onPress() {
      const obj = { filterType: constants2.USER, data: guildId(stateFromStores[18]).createAuditLogFilterUserData(userIdFilter) };
      navigation.push(constants.AUDIT_LOG_FILTER, obj);
    };
    const items = [obj, ];
    const obj1 = { label: null, onPress: null };
    const intl2 = util.intl;
    obj1.label = intl2.string(util.t.rautds);
    obj1.onPress = function onPress() {
      const obj = { filterType: constants2.ACTION, data: guildId(stateFromStores[18]).createAuditLogFilterActionData(actionFilter) };
      navigation.push(constants.AUDIT_LOG_FILTER, obj);
    };
    items[1] = obj1;
    obj.options = items;
    const result = obj.showSimpleActionSheet(obj);
  }, items4);
  const items5 = [tmp, extraData, stateFromStores, guildId, memo.length];
  const items6 = [onPress, navigation];
  const callback1 = userIdFilter.useCallback((arg0) => {
    ({ item, index } = arg0);
    const diff = memo.length - 1;
    let firstAuditRow = 0 === index;
    if (firstAuditRow) {
      firstAuditRow = closure_1.firstAuditRow;
    }
    let lastAuditRow = index === diff;
    const items = [firstAuditRow, ];
    if (lastAuditRow) {
      lastAuditRow = closure_1.lastAuditRow;
    }
    items[1] = lastAuditRow;
    return __initData(AuditLogDefault, {
      containerStyle: items,
      onHeaderClick(id) {
        if (ref.current !== id.id) {
          const obj = { current: id.id, prev: tmp.current };
          channelId(obj);
        } else {
          channelId({ current: null, prev: null });
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
        const obj = { onPress, text: null };
        const intl = guildId(stateFromStores[16]).intl;
        obj.text = intl.string(guildId(stateFromStores[16]).t.pEasFX);
        return closure_2_15(guildId(stateFromStores[20]).HeaderActionButton, obj);
      }
    });
  }, items6);
  const items7 = [guildId];
  const effect = userIdFilter.useEffect(() => {
    const logs = AuditLogActionCreators.fetchLogs(guildId);
  }, items7);
  obj = { style: tmp.spinner };
  const tmp15 = closure_15(guildId(stateFromStores[22]).ActivityIndicator, obj);
  let tmp16Result = tmp15;
  if (!isLoading) {
    tmp16Result = tmp15;
    if (!isInitialLoading) {
      obj = { style: tmp.filtersWrapper, children: null };
      obj1 = { start: true, end: true, icon: null, label: null, onPress: null, trailing: null };
      obj2 = { variant: "text-md/semibold", children: null };
      let intl = tmp2(tmp3[16]).intl;
      obj2.children = intl.string(tmp2(tmp3[16]).t.kP6oFy);
      obj1.icon = tmp14(tmp2(tmp3[24]).Text, obj2);
      obj3 = { style: tmp.filterTrailing, children: null };
      const obj4 = { style: tmp.filterTextWrapper, children: null };
      const obj5 = { variant: "text-sm/semibold", children: userIdFilterLabel };
      obj4.children = tmp14(tmp2(tmp3[24]).Text, obj5);
      const items8 = [tmp14(_logs, obj4), ];
      const obj6 = { style: tmp.filterTextWrapper, children: null };
      const obj7 = { variant: "text-sm/semibold", children: actionFilterLabel };
      obj6.children = tmp14(tmp2(tmp3[24]).Text, obj7);
      items8[1] = tmp14(_logs, obj6);
      obj3.children = items8;
      obj1.label = tmp16(_logs, obj3);
      obj1.onPress = onPress;
      obj1.trailing = tmp14(tmp2(tmp3[25]).TableRowArrow, {});
      obj.children = tmp14(tmp2(tmp3[23]).TableRow, obj1);
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
        const obj8 = { body: stringResult, title: null, Illustration: null };
        const intl3 = tmp2(tmp3[16]).intl;
        const string2 = intl3.string;
        let Ww5Tjy = tmp2(tmp3[16]).t;
        if (hasError) {
          Ww5Tjy = Ww5Tjy.Ww5Tjy;
          let string2Result = string2(Ww5Tjy);
        } else {
          string2Result = string2(Ww5Tjy["RHhk+P"]);
        }
        obj8.title = string2Result;
        obj8.Illustration = tmp2(tmp3[27]).EmptyServerSettingsAuditLog;
        tmp14(tmp2(tmp3[26]).EmptyState, obj8);
      } else {
        const obj9 = { style: null, contentContainerStyle: null, data: null, extraData: null, keyExtractor: null, renderItem: null, onEndReached: null };
        const items10 = [tmp.listView];
        obj9.style = items10;
        obj9.contentContainerStyle = guildId.contentContainerStyle;
        obj9.data = memo;
        obj9.extraData = extraData;
        obj9.keyExtractor = function keyExtractor(id) {
          return id.id;
        };
        obj9.renderItem = callback1;
        obj9.onEndReached = function onEndReached() {
          const nextLogPage = AuditLogActionCreators.fetchNextLogPage(guildId);
        };
        items9[1] = tmp14(stateFromStores1, obj9);
        let tmp24 = null;
        if (isLoadingNextPage) {
          tmp24 = tmp15;
        }
        const obj10 = { children: null };
        items9[2] = tmp24;
        obj10.children = items9;
        tmp16Result = tmp16(tmp17, obj10);
      }
    }
  }
  const obj11 = { children: null };
  const items11 = [tmp16Result, closure_15(guildId(stateFromStores[28]).NavScrim, {})];
  obj11.children = items11;
  return closure_16(closure_17, obj11);
};