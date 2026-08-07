// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "showMembersManagementActionSheet";
import { View } from "useNavigation";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
let c4 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let obj = { container: null, content: null, tabContainer: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
obj[1] = { flex: 1 };
obj[2] = { marginTop: 12, minHeight: 32 };
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  let closure_1;
  let num;
  let stateFromStores;
  let stateFromStores1;
  let navigation;
  let callback;
  let callback1;
  let segmentedControlState;
  let obj = stateFromStores1;
  let tmp = stateFromStores(stateFromStores1.useState(0), 2);
  closure_1 = tmp[1];
  let obj1 = guildId(num[9]);
  num = obj1.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp4 = callback3();
  let tmp2Result = tmp2(tmp3[10]);
  let items = [callback];
  const items1 = [guildId];
  stateFromStores = tmp2Result.useStateFromStores(items, () => callback.getGuild(guildId), items1);
  tmp2Result = tmp2(tmp3[10]);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  stateFromStores1 = tmp2Result.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = guildId(num[11]).canPruneGuildMembers(tmp, segmentedControlState.getCurrentUser(), callback1);
      const obj = guildId(num[11]);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    let obj = { label: null, id: null, page: null };
    const intl = guildId(num[12]).intl;
    obj[0] = intl.string(guildId(num[12]).t.NOOm1Z);
    obj[1] = guildId(num[13]).MemberSafetyPageTab.ALL_MEMBERS;
    obj = { guildId };
    obj[2] = outer1_9(callback(num[14]), obj);
    const items = [obj, , , ];
    obj = { label: null, id: null, count: null, page: null };
    const intl2 = guildId(num[12]).intl;
    obj[0] = intl2.string(guildId(num[12]).t["4eQVBO"]);
    obj[1] = guildId(num[13]).MemberSafetyPageTab.PENDING;
    let tmp6;
    if (num > 0) {
      tmp6 = num;
    }
    obj[2] = tmp6;
    const obj1 = { guildId, applicationStatus: null };
    let tmp4Result = tmp4(tmp2[15]);
    obj1[1] = guildId(num[16]).GuildJoinRequestApplicationStatuses.SUBMITTED;
    obj[3] = outer1_9(tmp4Result, obj1);
    items[1] = obj;
    const obj2 = { label: null, id: null, page: null };
    const intl3 = tmp(tmp2[12]).intl;
    obj2[0] = intl3.string(guildId(num[12]).t.bSZkla);
    obj2[1] = guildId(num[13]).MemberSafetyPageTab.REJECTED;
    const obj3 = { guildId, applicationStatus: null };
    tmp4Result = tmp4(tmp2[15]);
    obj3[1] = guildId(num[16]).GuildJoinRequestApplicationStatuses.REJECTED;
    obj2[2] = outer1_9(tmp4Result, obj3);
    items[2] = obj2;
    const obj4 = { label: null, id: null, page: null };
    const intl4 = tmp(tmp2[12]).intl;
    obj4[0] = intl4.string(guildId(num[12]).t.aURgY2);
    obj4[1] = guildId(num[13]).MemberSafetyPageTab.APPROVED;
    const obj5 = { guildId, applicationStatus: null };
    obj5[1] = guildId(num[16]).GuildJoinRequestApplicationStatuses.APPROVED;
    obj4[2] = outer1_9(callback(num[15]), obj5);
    items[3] = obj4;
    return items;
  }, items4);
  navigation = guildId(num[17]).useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = obj.useCallback(() => {
    if (null != stateFromStores) {
      let obj = { guild: null, canPrune: null };
      obj[0] = tmp4;
      obj[1] = stateFromStores1;
      let membersManagementActions = guildId(num[19]).getMembersManagementActions(obj);
      const tmp2Result = guildId(num[19]);
    } else {
      membersManagementActions = [];
    }
    obj = {
      items: membersManagementActions,
      children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        const obj = { source: null, accessibilityLabel: null, ref: null };
        obj[0] = callback2(8991);
        const intl = callback(1236).intl;
        obj[1] = intl.string(callback(1236).t.ogxXGq);
        obj[2] = ref.ref;
        const merged1 = Object.assign(merged);
        return callback3(callback(5948).HeaderActionButton, obj);
      }
    };
    return outer1_9(guildId(num[18]).ContextMenu, obj);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    navigation.setOptions({
      headerRight() {
        let tmp = null;
        if (0 === closure_0) {
          tmp = outer1_6();
        }
        return tmp;
      }
    });
  }, items6);
  const callback2 = obj.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp2Result1 = guildId(num[17]);
  obj = { pageWidth: tmp[0], items: memo, defaultIndex: null, onSetActiveIndex: null };
  let num2 = 0;
  if (num > 0) {
    num2 = 1;
  }
  obj[2] = num2;
  obj[3] = callback1;
  segmentedControlState = guildId(num[22]).useSegmentedControlState(obj);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  obj = { style: tmp4.container, children: null };
  obj1 = { style: tmp4.tabContainer, children: null };
  callback3 = obj.useCallback((toLocaleString) => "(" + guildId(num[23]).defaultCountFormatter(toLocaleString) + ")", []);
  obj1[1] = callback(guildId(num[24]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback3 });
  const items8 = [callback(navigation, obj1), ];
  const tmp2Result2 = guildId(num[22]);
  items8[1] = callback(navigation, { style: tmp4.content, onLayout: callback2, children: callback(guildId(num[25]).SegmentedControlPages, { state: segmentedControlState }) });
  obj[1] = items8;
  return callback2(navigation, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;