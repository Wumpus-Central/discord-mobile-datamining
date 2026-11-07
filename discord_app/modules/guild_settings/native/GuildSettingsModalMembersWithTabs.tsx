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
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5140);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  content: { flex: 1 },
  tabContainer: { marginTop: 12, minHeight: 32 },
};
let closure_10 = createStyles.createStyles(obj);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default noop.memo(function GuildSettingsModalMembersWithTabs(guildId) {
  guildId = guildId.guildId;
  let num2;
  let stateFromStores;
  let stateFromStores1;
  let navigation;
  let callback;
  let callback1;
  let segmentedControlState;
  const tmp2 = num2(stateFromStores[8])();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  num2 = guildId(stateFromStores[9]).useSubmittedGuildJoinRequestTotal({ guildId });
  if (num2 == null) {
    num2 = 0;
  }
  const tmp4 = closure_10();
  let obj = guildId(stateFromStores[9]);
  items = [callback];
  const items1 = [guildId];
  stateFromStores = guildId(stateFromStores[10]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp3Result = guildId(stateFromStores[10]);
  const items2 = [callback1, segmentedControlState];
  const items3 = [stateFromStores];
  stateFromStores1 = guildId(stateFromStores[10]).useStateFromStores(
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
  const items4 = [guildId, num2];
  const memo = stateFromStores1.useMemo(() => {
    const obj = { label: null, id: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.NOOm1Z);
    obj.id = MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS;
    obj.page = React5(GuildSettingsModalMembersDefault, { guildId });
    items = [obj, , ,];
    const obj3 = { label: null, id: null, count: null, page: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t["4eQVBO"]);
    obj3.id = MemberSafetyPageTypes.MemberSafetyPageTab.PENDING;
    let tmp6;
    if (num2 > 0) {
      tmp6 = num2;
    }
    obj3.count = tmp6;
    const obj4 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
    obj3.page = React5(GuildSettingsModalMemberApplicationsDefault, obj4);
    items[1] = obj3;
    const obj5 = { label: null, id: null, page: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.bSZkla);
    obj5.id = MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED;
    const obj6 = { guildId, applicationStatus: null };
    const obj2 = { guildId };
    const tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    obj6.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
    obj5.page = React5(GuildSettingsModalMemberApplicationsDefault, obj6);
    items[2] = obj5;
    const obj7 = { label: null, id: null, page: null };
    const intl4 = util.intl;
    obj7.label = intl4.string(util.t.aURgY2);
    obj7.id = MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED;
    const obj8 = { guildId, applicationStatus: null };
    const tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
    obj8.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
    obj7.page = React5(GuildSettingsModalMemberApplicationsDefault, obj8);
    items[3] = obj7;
    return items;
  }, items4);
  const tmp3Result4 = guildId(stateFromStores[10]);
  navigation = guildId(stateFromStores[17]).useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = stateFromStores1.useCallback(() => {
    if (null != stateFromStores) {
      let obj = { guild: tmp4, canPrune: stateFromStores1 };
      let membersManagementActions = showMembersManagementActionSheet.getMembersManagementActions(obj);
      const tmp2Result = showMembersManagementActionSheet;
    } else {
      membersManagementActions = [];
    }
    return React5(ContextMenu.ContextMenu, {
      items: membersManagementActions,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { source: num2(9180), accessibilityLabel: null, ref: null };
        const intl = guildId(1113).intl;
        obj.accessibilityLabel = intl.string(guildId(1113).t.ogxXGq);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_8(guildId(7630).HeaderActionButton, obj);
      },
    });
  }, items5);
  const items6 = [navigation, callback];
  callback1 = stateFromStores1.useCallback((arg0) => {
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
  const tmp3Result5 = guildId(stateFromStores[17]);
  let obj2 = { pageWidth: num, items: memo, defaultIndex: null, onSetActiveIndex: null };
  let num3 = 0;
  if (num2 > 0) {
    num3 = 1;
  }
  obj2.defaultIndex = num3;
  obj2.onSetActiveIndex = callback1;
  segmentedControlState = guildId(stateFromStores[22]).useSegmentedControlState(obj2);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj4.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  let obj3 = { style: tmp4.container, children: null };
  let obj5 = { style: tmp4.tabContainer, children: null };
  const callback2 = obj4.useCallback(
    (toLocaleString) => "(" + guildId(stateFromStores[23]).defaultCountFormatter(toLocaleString) + ")",
    [],
  );
  obj5.children = closure_8(guildId(stateFromStores[23]).Tabs, {
    state: segmentedControlState,
    grow: true,
    formatCount: callback2,
  });
  const items8 = [closure_8(navigation, obj5)];
  const tmp3Result6 = guildId(stateFromStores[22]);
  items8[1] = closure_8(navigation, {
    style: tmp4.content,
    ref,
    onLayout,
    children: closure_8(guildId(stateFromStores[24]).SegmentedControlPages, { state: segmentedControlState }),
  });
  obj3.children = items8;
  return closure_9(navigation, obj3);
});
