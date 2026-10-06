// === Module 16565: GuildSettingsModalMembersWithTabs ===

// Module 16565 (GuildSettingsModalMembersWithTabs)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6778 */;
import ContextMenu2 from "ContextMenu" /* 7590 */;
import MemberSafetyPageTypes from "MemberSafetyPageTypes" /* 16566 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16567 */;
import showMembersManagementActionSheet from "showMembersManagementActionSheet" /* 16569 */;
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications" /* 16574 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let guildId, navigation;

let closure_12;
let obj2;
let unpackModuleId;
let closure_3 = ["ref"];
const View = react_native.View;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: obj2, content: { flex: 1 }, tabContainer: { marginTop: 12, minHeight: 32 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles.createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let options;
  let stateFromStores;
  let tmp11;
  let tmp15;
  let tmp17;
  let tmp23;
  let tmp8;
  let tmp9;
  let tmp = guildId;
  let obj = guildId(stateFromStores[11]);
  const cResult = obj.c(59);
  guildId = guildId.guildId;
  const tmp4 = _slicedToArray(react.useState(0), 2);
  [r10017, importDefault] = tmp4;
  let obj2 = guildId(stateFromStores[12]);
  let num = obj2.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function y() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(stateFromStores[13]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore, UserStore];
    cResult[4] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = G;
    cResult[7] = items3;
    tmp15 = items3;
  } else {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult2 = tmp(stateFromStores[13]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, G, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const stringResult = obj5.string(tmp(stateFromStores[15]).t.NOOm1Z);
    cResult[8] = stringResult;
    tmp17 = stringResult;
  } else {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (cResult[9] !== guildId) {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    tmp20[0] = tmp17;
    tmp20[1] = tmp(stateFromStores[16]).MemberSafetyPageTab.ALL_MEMBERS;
    const obj3 = { guildId };
    tmp20[2] = closure_11(require("GuildSettingsModalMembers"), obj3);
    cResult[9] = guildId;
    cResult[10] = tmp20;
  } else {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const stringResult1 = obj7.string(tmp(stateFromStores[15]).t["4eQVBO"]);
    cResult[11] = stringResult1;
    tmp23 = stringResult1;
  } else {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (num > 0) {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (cResult[12] !== guildId) {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const obj4 = { guildId, applicationStatus: tmp(stateFromStores[19]).GuildJoinRequestApplicationStatuses.SUBMITTED };
    const tmp28 = require("GuildSettingsModalMemberApplications");
    cResult[12] = guildId;
    cResult[13] = closure_11(tmp28, obj4);
    const tmp29 = closure_11(tmp28, obj4);
  } else {
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
  }
  if (cResult[14] === undefined) {
    let tmp31;
    let tmp38;
    class G {
      constructor() {
        let canPruneGuildMembersResult = null != stateFromStores;
        if (canPruneGuildMembersResult) {
          const obj = MemberSafetyPermissionsUtils;
          canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
        }
        return canPruneGuildMembersResult;
      }
    }
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
      const stringResult2 = obj10.string(tmp(stateFromStores[15]).t.bSZkla);
      cResult[17] = stringResult2;
      tmp31 = stringResult2;
    } else {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    if (cResult[18] !== guildId) {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
      tmp34[0] = tmp31;
      tmp34[1] = tmp(stateFromStores[16]).MemberSafetyPageTab.REJECTED;
      const obj6 = { guildId, applicationStatus: tmp(stateFromStores[19]).GuildJoinRequestApplicationStatuses.REJECTED };
      const tmp37 = require("GuildSettingsModalMemberApplications");
      tmp34[2] = closure_11(tmp37, obj6);
      cResult[18] = guildId;
      cResult[19] = tmp34;
    } else {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
      const stringResult3 = obj12.string(tmp(stateFromStores[15]).t.aURgY2);
      cResult[20] = stringResult3;
      tmp38 = stringResult3;
    } else {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    if (cResult[21] !== guildId) {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
      tmp41[0] = tmp38;
      tmp41[1] = tmp(stateFromStores[16]).MemberSafetyPageTab.APPROVED;
      const obj8 = { guildId, applicationStatus: tmp(stateFromStores[19]).GuildJoinRequestApplicationStatuses.APPROVED };
      const tmp44 = require("GuildSettingsModalMemberApplications");
      tmp41[2] = closure_11(tmp44, obj8);
      cResult[21] = guildId;
      cResult[22] = tmp41;
    } else {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    if (cResult[23] === tmp30) {
      class G {
        constructor() {
          let canPruneGuildMembersResult = null != stateFromStores;
          if (canPruneGuildMembersResult) {
            const obj = MemberSafetyPermissionsUtils;
            canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
          }
          return canPruneGuildMembersResult;
        }
      }
    }
    const items4 = [tmp20, tmp30, tmp34, tmp41];
    cResult[23] = tmp30;
    cResult[24] = tmp34;
    cResult[25] = tmp41;
    cResult[26] = tmp20;
    cResult[27] = items4;
  }
  cResult[14] = undefined;
  cResult[15] = tmp26;
  cResult[16] = { label: tmp23, id: tmp(stateFromStores[16]).MemberSafetyPageTab.PENDING, count: undefined, page: tmp26 };
  const obj9 = { label: tmp23, id: tmp(stateFromStores[16]).MemberSafetyPageTab.PENDING, count: undefined, page: tmp26 };
}) : ((guildId) => {
  let callback3;
  let items8;
  let num2;
  guildId = guildId.guildId;
  let num;
  let stateFromStores;
  let stateFromStores1;
  navigation = undefined;
  let callback;
  let callback1;
  let segmentedControlState;
  let obj = callback;
  let tmp = navigation(callback.useState(0), 2);
  let closure_1 = tmp[1];
  const tmp4 = num;
  const first = tmp[0];
  let obj2 = guildId(num[12]);
  num = obj2.useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp5 = closure_13();
  let items = [segmentedControlState];
  const items1 = [guildId];
  const tmp3Result = guildId(tmp4[13]);
  stateFromStores = tmp3Result.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [PermissionStore, UserStore];
  const items3 = [stateFromStores];
  const tmp3Result4 = guildId(tmp4[13]);
  stateFromStores1 = tmp3Result4.useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      const obj = MemberSafetyPermissionsUtils;
      canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let obj4;
    let obj6;
    let obj8;
    let tmp4Result;
    let tmp4Result3;
    let tmp4Result4;
    let tmp6;
    const obj = { label: intl.string(intl5.t.NOOm1Z), id: MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS, page: unpackModuleId(GuildSettingsModalMembersDefault, obj2) };
    intl = intl5.intl;
    const items = [obj, , , ];
    obj2 = { guildId };
    const obj3 = { label: intl2.string(intl5.t["4eQVBO"]), id: MemberSafetyPageTypes.MemberSafetyPageTab.PENDING, count: tmp6, page: unpackModuleId(tmp4Result, obj4) };
    intl2 = intl5.intl;
    tmp6 = undefined;
    if (num > 0) {
      tmp6 = num;
    }
    obj4 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
    items[1] = obj3;
    tmp4Result = GuildSettingsModalMemberApplicationsDefault;
    const obj5 = { label: intl3.string(intl5.t.bSZkla), id: MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED, page: unpackModuleId(tmp4Result3, obj6) };
    intl3 = intl5.intl;
    obj6 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED };
    items[2] = obj5;
    tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
    const obj7 = { label: intl4.string(intl5.t.aURgY2), id: MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED, page: unpackModuleId(tmp4Result4, obj8) };
    intl4 = intl5.intl;
    obj8 = { guildId, applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED };
    items[3] = obj7;
    tmp4Result4 = GuildSettingsModalMemberApplicationsDefault;
    return items;
  }, items4);
  const tmp3Result5 = guildId(tmp4[20]);
  navigation = tmp3Result5.useNavigation();
  const items5 = [stateFromStores1, stateFromStores];
  callback = obj.useCallback(() => {
    let membersManagementActions;
    const ContextMenu = ContextMenu2.ContextMenu;
    if (null != stateFromStores) {
      let obj = { guild: tmp4, canPrune: stateFromStores1 };
      const tmp2Result = showMembersManagementActionSheet;
      membersManagementActions = tmp2Result.getMembersManagementActions(obj);
    } else {
      membersManagementActions = [];
    }
    const obj2 = {
      items: membersManagementActions,
      children(ref) {
        let intl;
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { source: closure_1_1(num[24]), accessibilityLabel: intl.string(guildId(num[15]).t.ogxXGq), ref: ref.ref };
        const HeaderActionButton = guildId(num[23]).HeaderActionButton;
        intl = guildId(num[15]).intl;
        const merged1 = Object.assign(merged);
        return closure_1_11(HeaderActionButton, obj);
      }
    };
    return unpackModuleId(ContextMenu, obj2);
  }, items5);
  const items6 = [navigation, callback];
  callback1 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    const obj = {
      headerRight() {
        let tmp = null;
        if (0 === closure_0) {
          tmp = callback();
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items6);
  const callback2 = obj.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj3 = { pageWidth: first, items: memo, defaultIndex: num2, onSetActiveIndex: callback1 };
  num2 = 0;
  const useSegmentedControlState = guildId(tmp4[25]).useSegmentedControlState;
  guildId(tmp4[25]);
  if (num > 0) {
    num2 = 1;
  }
  segmentedControlState = useSegmentedControlState(obj3);
  const items7 = [segmentedControlState.activeIndex, callback1];
  const effect = obj.useEffect(() => {
    const activeIndex = segmentedControlState.activeIndex;
    callback1(activeIndex.get());
  }, items7);
  let obj4 = { style: tmp5.container, children: items8 };
  let obj5 = { style: tmp5.tabContainer, children: closure_11(guildId(tmp4[26]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback3 }) };
  callback3 = obj.useCallback((toLocaleString) => {
    const obj = guildId(num[26]);
    return "(" + obj.defaultCountFormatter(toLocaleString) + ")";
  }, []);
  items8 = [closure_11(callback1, obj5), ];
  let obj6 = { style: tmp5.content, onLayout: callback2, children: closure_11(tmp3(tmp4[27]).SegmentedControlPages, { state: segmentedControlState }) };
  items8[1] = closure_11(callback1, obj6);
  return closure_12(callback1, obj4);
}));
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default memoResult;