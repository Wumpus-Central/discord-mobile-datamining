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
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["ref"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  content: { flex: 1 },
  tabContainer: { marginTop: 12, minHeight: 32 },
};
let closure_13 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        const cResult = guildId(stateFromStores[11]).c(59);
        guildId = guildId.guildId;
        let obj = guildId(stateFromStores[11]);
        [r10017, importDefault] = noop.useState(0);
        const tmp4 = _slicedToArray(noop.useState(0), 2);
        let num = guildId(stateFromStores[12]).useSubmittedGuildJoinRequestTotal({ guildId });
        if (num == null) {
          num = 0;
        }
        closure_13();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildStore];
          cResult[0] = items;
          let first = items;
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
          let tmp9 = items1;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        const obj2 = guildId(stateFromStores[12]);
        stateFromStores = guildId(stateFromStores[13]).useStateFromStores(first, tmp8, tmp9);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [PermissionStore, UserStore];
          cResult[4] = items2;
          let tmp11 = items2;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== stateFromStores) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          const items3 = [stateFromStores];
          cResult[5] = stateFromStores;
          cResult[6] = G;
          cResult[7] = items3;
          let tmp15 = items3;
        } else {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          tmp15 = cResult[7];
        }
        const tmpResult = guildId(stateFromStores[13]);
        const stateFromStores1 = guildId(stateFromStores[13]).useStateFromStores(tmp11, G, tmp15);
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          const stringResult = obj5.string(tmp(tmp2[15]).t.NOOm1Z);
          cResult[8] = stringResult;
          const tmp17 = stringResult;
        } else {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
        }
        if (cResult[9] !== guildId) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          tmp20[0] = tmp17;
          tmp20[1] = tmp(tmp2[16]).MemberSafetyPageTab.ALL_MEMBERS;
          const obj3 = { guildId };
          tmp20[2] = closure_11(require("GuildSettingsModalMembers"), obj3);
          cResult[9] = guildId;
          cResult[10] = tmp20;
        } else {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
        }
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          const stringResult1 = obj7.string(tmp(tmp2[15]).t["4eQVBO"]);
          cResult[11] = stringResult1;
          const tmp23 = stringResult1;
        } else {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
        }
        if (num > 0) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
        }
        if (cResult[12] !== guildId) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          const obj4 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.SUBMITTED };
          const tmp29 = closure_11(require("GuildSettingsModalMemberApplications"), obj4);
          cResult[12] = guildId;
          cResult[13] = tmp29;
          const tmp28 = require("GuildSettingsModalMemberApplications");
        } else {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
        }
        if (cResult[14] === undefined) {
          class G {
            constructor() {
              canPruneGuildMembersResult = null != closure_2;
              if (canPruneGuildMembersResult) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[14]);
                tmp5 = closure_10;
                tmp6 = closure_9;
                canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
              }
              return canPruneGuildMembersResult;
            }
          }
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
            const stringResult2 = obj10.string(tmp(tmp2[15]).t.bSZkla);
            cResult[17] = stringResult2;
            const tmp31 = stringResult2;
          } else {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
          }
          if (cResult[18] !== guildId) {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
            tmp34[0] = tmp31;
            tmp34[1] = tmp(tmp2[16]).MemberSafetyPageTab.REJECTED;
            const obj6 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.REJECTED };
            tmp34[2] = closure_11(require("GuildSettingsModalMemberApplications"), obj6);
            cResult[18] = guildId;
            cResult[19] = tmp34;
            const tmp37 = require("GuildSettingsModalMemberApplications");
          } else {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
            const stringResult3 = obj12.string(tmp(tmp2[15]).t.aURgY2);
            cResult[20] = stringResult3;
            const tmp38 = stringResult3;
          } else {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
          }
          if (cResult[21] !== guildId) {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
            tmp41[0] = tmp38;
            tmp41[1] = tmp(tmp2[16]).MemberSafetyPageTab.APPROVED;
            const obj8 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.APPROVED };
            tmp41[2] = closure_11(require("GuildSettingsModalMemberApplications"), obj8);
            cResult[21] = guildId;
            cResult[22] = tmp41;
            const tmp44 = require("GuildSettingsModalMemberApplications");
          } else {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
                }
                return canPruneGuildMembersResult;
              }
            }
          }
          if (cResult[23] === tmp30) {
            class G {
              constructor() {
                canPruneGuildMembersResult = null != closure_2;
                if (canPruneGuildMembersResult) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[14]);
                  tmp5 = closure_10;
                  tmp6 = closure_9;
                  canPruneGuildMembersResult = obj.canPruneGuildMembers(tmp, closure_10.getCurrentUser(), closure_9);
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
        const obj9 = {
          label: tmp23,
          id: guildId(stateFromStores[16]).MemberSafetyPageTab.PENDING,
          count: undefined,
          page: tmp26,
        };
        cResult[14] = undefined;
        cResult[15] = tmp26;
        cResult[16] = obj9;
        const tmpResult2 = guildId(stateFromStores[13]);
      }
    : (guildId) => {
        guildId = guildId.guildId;
        let num;
        let stateFromStores;
        let stateFromStores1;
        let navigation;
        let callback;
        let callback1;
        let segmentedControlState;
        let tmp = navigation(callback.useState(0), 2);
        closure_1 = tmp[1];
        num = guildId(num[12]).useSubmittedGuildJoinRequestTotal({ guildId });
        if (num == null) {
          num = 0;
        }
        const tmp4 = closure_13();
        let obj2 = guildId(num[12]);
        let items = [segmentedControlState];
        const items1 = [guildId];
        stateFromStores = guildId(num[13]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
        let tmp2Result = guildId(num[13]);
        const items2 = [PermissionStore, UserStore];
        const items3 = [stateFromStores];
        stateFromStores1 = guildId(num[13]).useStateFromStores(
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
          obj.page = closure_2_11(GuildSettingsModalMembersDefault, { guildId });
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
          const obj4 = {
            guildId,
            applicationStatus: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED,
          };
          obj3.page = closure_2_11(GuildSettingsModalMemberApplicationsDefault, obj4);
          items[1] = obj3;
          const obj5 = { label: null, id: null, page: null };
          const intl3 = util.intl;
          obj5.label = intl3.string(util.t.bSZkla);
          obj5.id = MemberSafetyPageTypes.MemberSafetyPageTab.REJECTED;
          const obj6 = { guildId, applicationStatus: null };
          const obj2 = { guildId };
          const tmp4Result = GuildSettingsModalMemberApplicationsDefault;
          obj6.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED;
          obj5.page = closure_2_11(GuildSettingsModalMemberApplicationsDefault, obj6);
          items[2] = obj5;
          const obj7 = { label: null, id: null, page: null };
          const intl4 = util.intl;
          obj7.label = intl4.string(util.t.aURgY2);
          obj7.id = MemberSafetyPageTypes.MemberSafetyPageTab.APPROVED;
          const obj8 = { guildId, applicationStatus: null };
          const tmp4Result3 = GuildSettingsModalMemberApplicationsDefault;
          obj8.applicationStatus = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED;
          obj7.page = closure_2_11(GuildSettingsModalMemberApplicationsDefault, obj8);
          items[3] = obj7;
          return items;
        }, items4);
        const tmp2Result4 = guildId(num[13]);
        navigation = guildId(num[20]).useNavigation();
        const items5 = [stateFromStores1, stateFromStores];
        callback = obj.useCallback(() => {
          if (null != stateFromStores) {
            let obj = { guild: tmp4, canPrune: stateFromStores1 };
            let membersManagementActions = showMembersManagementActionSheet.getMembersManagementActions(obj);
            const tmp2Result = showMembersManagementActionSheet;
          } else {
            membersManagementActions = [];
          }
          return closure_2_11(ContextMenu.ContextMenu, {
            items: membersManagementActions,
            children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { source: closure_1_1(9325), accessibilityLabel: null, ref: null };
              const intl = guildId(1126).intl;
              obj.accessibilityLabel = intl.string(guildId(1126).t.ogxXGq);
              obj.ref = ref.ref;
              const merged1 = Object.assign(merged);
              return closure_1_11(guildId(6890).HeaderActionButton, obj);
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
        const tmp2Result5 = guildId(num[20]);
        let obj3 = { pageWidth: tmp[0], items: memo, defaultIndex: null, onSetActiveIndex: null };
        let num2 = 0;
        if (num > 0) {
          num2 = 1;
        }
        obj3.defaultIndex = num2;
        obj3.onSetActiveIndex = callback1;
        segmentedControlState = guildId(num[25]).useSegmentedControlState(obj3);
        const items7 = [segmentedControlState.activeIndex, callback1];
        const effect = obj.useEffect(() => {
          const activeIndex = segmentedControlState.activeIndex;
          callback1(activeIndex.get());
        }, items7);
        let obj4 = { style: tmp4.container, children: null };
        let obj5 = { style: tmp4.tabContainer, children: null };
        const callback3 = obj.useCallback(
          (toLocaleString) => "(" + guildId(num[26]).defaultCountFormatter(toLocaleString) + ")",
          [],
        );
        obj5.children = closure_11(guildId(num[26]).Tabs, {
          state: segmentedControlState,
          grow: true,
          formatCount: callback3,
        });
        const items8 = [closure_11(callback1, obj5)];
        const tmp2Result6 = guildId(num[25]);
        items8[1] = closure_11(callback1, {
          style: tmp4.content,
          onLayout: callback2,
          children: closure_11(guildId(num[27]).SegmentedControlPages, { state: segmentedControlState }),
        });
        obj4.children = items8;
        return closure_12(callback1, obj4);
      },
);
