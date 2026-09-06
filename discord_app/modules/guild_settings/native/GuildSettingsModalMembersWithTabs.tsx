// === Module 16569: GuildSettingsModalMembersWithTabs ===

// Module 16569 (GuildSettingsModalMembersWithTabs)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 7265 */;
import ContextMenu from "ContextMenu" /* 8666 */;
import MemberSafetyPageTypes from "MemberSafetyPageTypes" /* 16570 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16571 */;
import showMembersManagementActionSheet from "showMembersManagementActionSheet" /* 16572 */;
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications" /* 16577 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: null, content: null, tabContainer: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.content = { flex: 1 };
obj.tabContainer = { marginTop: 12, minHeight: 32 };
let closure_11 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default noop.memo((guildId) => {
  guildId = guildId.guildId;
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
  const tmp4 = closure_11();
  let tmp2Result = tmp2(tmp3[10]);
  let items = [callback];
  const items1 = [guildId];
  stateFromStores = tmp2Result.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  tmp2Result = tmp2(tmp3[10]);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  stateFromStores1 = tmp2Result.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    let obj = { label: null, id: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.NOOm1Z);
    obj.id = MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS;
    obj = { guildId };
    obj.page = React7(GuildSettingsModalMembersDefault, obj);
    const items = [obj, , , ];
    obj = { label: null, id: null, count: null, page: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t["4eQVBO"]);
    obj.id = MemberSafetyPageTypes.MemberSafetyPageTab.PENDING;
    let tmp6;
    if (num > 0) {
      tmp6 = num;
    }
    obj.count = tmp6;
    const obj1 = { guildId, applicationStatus: null };
    let tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    obj1.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
    obj.page = React7(tmp4Result, obj1);
    items[1] = obj;
    const obj2 = { label: null, id: null, page: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.bSZkla);
    obj2.id = MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED;
    const obj3 = { guildId, applicationStatus: null };
    tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    obj3.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
    obj2.page = React7(tmp4Result, obj3);
    items[2] = obj2;
    const obj4 = { label: null, id: null, page: null };
    const intl4 = util.intl;
    obj4.label = intl4.string(util.t.aURgY2);
    obj4.id = MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED;
    const obj5 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED };
    obj4.page = React7(GuildSettingsModalMemberApplicationsDefault, obj5);
    items[3] = obj4;
    return items;
  }, items4);
  navigation = guildId(num[17]).useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = obj.useCallback(() => {
    if (null != stateFromStores) {
      let obj = { guild: tmp4, canPrune: stateFromStores1 };
      let membersManagementActions = showMembersManagementActionSheet.getMembersManagementActions(obj);
      const tmp2Result = showMembersManagementActionSheet;
    } else {
      membersManagementActions = [];
    }
    obj = {
      items: membersManagementActions,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { source: closure_1_1(9800), accessibilityLabel: null, ref: null };
        const intl = guildId(1114).intl;
        obj.accessibilityLabel = intl.string(guildId(1114).t.ogxXGq);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_9(guildId(7377).HeaderActionButton, obj);
      }
    };
    return React7(ContextMenu.ContextMenu, obj);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    navigation.setOptions({
      headerRight() {
        let tmp = null;
        if (0 === closure_0) {
          tmp = callback();
        }
        return tmp;
      }
    });
  }, items6);
  const callback2 = obj.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp2Result1 = guildId(num[17]);
  obj = { pageWidth: tmp[0], items: memo, defaultIndex: null, onSetActiveIndex: null };
  let num2 = 0;
  if (num > 0) {
    num2 = 1;
  }
  obj.defaultIndex = num2;
  obj.onSetActiveIndex = callback1;
  segmentedControlState = guildId(num[22]).useSegmentedControlState(obj);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  obj = { style: tmp4.container, children: null };
  obj1 = { style: tmp4.tabContainer, children: null };
  const callback3 = obj.useCallback((toLocaleString) => "(" + guildId(num[23]).defaultCountFormatter(toLocaleString) + ")", []);
  obj1.children = closure_9(guildId(num[24]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback3 });
  const items8 = [closure_9(navigation, obj1), ];
  const tmp2Result2 = guildId(num[22]);
  items8[1] = closure_9(navigation, { style: tmp4.content, onLayout: callback2, children: closure_9(guildId(num[25]).SegmentedControlPages, { state: segmentedControlState }) });
  obj.children = items8;
  return closure_10(navigation, obj);
});