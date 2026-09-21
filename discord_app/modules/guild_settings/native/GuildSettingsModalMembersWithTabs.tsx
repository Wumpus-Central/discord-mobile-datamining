// discord_app/modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import MemberVerificationTypes from "../../guild_member_verification/MemberVerificationTypes.tsx";
import MemberSafetyPermissionsUtils from "../../guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import MemberSafetyPageTypes from "../../guild_mod_dash_member_safety/MemberSafetyPageTypes.tsx";
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers.tsx";
import showMembersManagementActionSheet from "showMembersManagementActionSheet.tsx";
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  content: { flex: 1 },
  tabContainer: { marginTop: 12, minHeight: 32 },
};
let closure_11 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
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
  let tmp = stateFromStores(stateFromStores1.useState(0), 2);
  closure_1 = tmp[1];
  num = guildId(num[9]).useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp4 = closure_11();
  let obj2 = guildId(num[9]);
  let items = [callback];
  const items1 = [guildId];
  stateFromStores = guildId(num[10]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let tmp2Result = guildId(num[10]);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  stateFromStores1 = guildId(num[10]).useStateFromStores(
    items2,
    () => {
      let canPruneGuildMembersResult = null != stateFromStores;
      if (canPruneGuildMembersResult) {
        canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(
          tmp,
          UserStore.getCurrentUser(),
          PermissionStore,
        );
      }
      return canPruneGuildMembersResult;
    },
    items3,
  );
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    const obj = { label: null, id: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.NOOm1Z);
    obj.id = MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS;
    obj.page = React7(GuildSettingsModalMembersDefault, { guildId });
    const items = [obj, , ,];
    const obj3 = { label: null, id: null, count: null, page: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t["4eQVBO"]);
    obj3.id = MemberSafetyPageTypes.MemberSafetyPageTab.PENDING;
    let tmp6;
    if (num > 0) {
      tmp6 = num;
    }
    obj3.count = tmp6;
    const obj4 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
    obj3.page = React7(GuildSettingsModalMemberApplicationsDefault, obj4);
    items[1] = obj3;
    const obj5 = { label: null, id: null, page: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.bSZkla);
    obj5.id = MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED;
    const obj6 = { guildId, applicationStatus: null };
    const obj2 = { guildId };
    const tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    obj6.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
    obj5.page = React7(GuildSettingsModalMemberApplicationsDefault, obj6);
    items[2] = obj5;
    const obj7 = { label: null, id: null, page: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.aURgY2);
    obj7.id = MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED;
    const obj8 = { guildId, applicationStatus: null };
    const tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
    obj8.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
    obj7.page = React7(GuildSettingsModalMemberApplicationsDefault, obj8);
    items[3] = obj7;
    return items;
  }, items4);
  const tmp2Result4 = guildId(num[10]);
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
    return React7(ContextMenu.ContextMenu, {
      items: membersManagementActions,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { source: closure_1_1(9898), accessibilityLabel: null, ref: null };
        const intl = guildId(1115).intl;
        obj.accessibilityLabel = intl.string(guildId(1115).t.ogxXGq);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_9(guildId(7619).HeaderActionButton, obj);
      },
    });
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
      },
    });
  }, items6);
  const callback2 = obj.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp2Result5 = guildId(num[17]);
  let obj3 = { pageWidth: tmp[0], items: memo, defaultIndex: null, onSetActiveIndex: null };
  let num2 = 0;
  if (num > 0) {
    num2 = 1;
  }
  obj3.defaultIndex = num2;
  obj3.onSetActiveIndex = callback1;
  segmentedControlState = guildId(num[22]).useSegmentedControlState(obj3);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  let obj4 = { style: tmp4.container, children: null };
  let obj5 = { style: tmp4.tabContainer, children: null };
  const callback3 = obj.useCallback(
    (toLocaleString) => "(" + guildId(num[23]).defaultCountFormatter(toLocaleString) + ")",
    [],
  );
  obj5.children = closure_9(guildId(num[24]).Tabs, {
    state: segmentedControlState,
    grow: true,
    formatCount: callback3,
  });
  const items8 = [closure_9(navigation, obj5)];
  const tmp2Result6 = guildId(num[22]);
  items8[1] = closure_9(navigation, {
    style: tmp4.content,
    onLayout: callback2,
    children: closure_9(guildId(num[25]).SegmentedControlPages, { state: segmentedControlState }),
  });
  obj4.children = items8;
  return closure_10(navigation, obj4);
});
