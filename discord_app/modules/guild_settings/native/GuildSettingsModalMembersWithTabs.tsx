// === Module 16820: GuildSettingsModalMembersWithTabs ===

// Module 16820 (GuildSettingsModalMembersWithTabs)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import MemberSafetyPermissionsUtils from "MemberSafetyPermissionsUtils" /* 6954 */;
import ContextMenu from "ContextMenu" /* 9297 */;
import MemberSafetyPageTypes from "MemberSafetyPageTypes" /* 16821 */;
import GuildSettingsModalMembersDefault from "GuildSettingsModalMembers" /* 16822 */;
import showMembersManagementActionSheet from "showMembersManagementActionSheet" /* 16824 */;
import GuildSettingsModalMemberApplicationsDefault from "GuildSettingsModalMemberApplications" /* 16829 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["ref"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, content: { flex: 1 }, tabContainer: { marginTop: 12, minHeight: 32 } };
let closure_13 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalMembersWithTabs(guildId) {
  const cResult = guildId(stateFromStores[11]).c(59);
  guildId = guildId.guildId;
  let obj = guildId(stateFromStores[11]);
  const obj2 = noop;
  [tmp5, importDefault] = noop.useState(0);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  let num = guildId(stateFromStores[12]).useSubmittedGuildJoinRequestTotal({ guildId });
  if (num == null) {
    num = 0;
  }
  const tmp6 = closure_13();
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
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const obj3 = guildId(stateFromStores[12]);
  stateFromStores = guildId(stateFromStores[13]).useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore, UserStore];
    cResult[4] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const fn2 = function x() {
      let canPruneGuildMembersResult = null != stateFromStores;
      if (canPruneGuildMembersResult) {
        canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
      }
      return canPruneGuildMembersResult;
    };
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp16 = items3;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult = guildId(stateFromStores[13]);
  const stateFromStores1 = guildId(stateFromStores[13]).useStateFromStores(tmp12, tmp15, tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(tmp2[15]).intl;
    const stringResult = intl.string(tmp(tmp2[15]).t.NOOm1Z);
    cResult[8] = stringResult;
    let tmp18 = stringResult;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] !== guildId) {
    const obj4 = { label: tmp18, id: tmp(tmp2[16]).MemberSafetyPageTab.ALL_MEMBERS, page: null };
    const obj5 = { guildId };
    obj4.page = closure_11(require("GuildSettingsModalMembers"), obj5);
    cResult[9] = guildId;
    cResult[10] = obj4;
    let tmp20 = obj4;
  } else {
    tmp20 = cResult[10];
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(tmp2[15]).intl;
    const stringResult1 = intl2.string(tmp(tmp2[15]).t["4eQVBO"]);
    cResult[11] = stringResult1;
    let tmp23 = stringResult1;
  } else {
    tmp23 = cResult[11];
  }
  let tmp25;
  if (num > 0) {
    tmp25 = num;
  }
  if (cResult[12] !== guildId) {
    const obj6 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.SUBMITTED };
    const tmp30 = closure_11(require("GuildSettingsModalMemberApplications"), obj6);
    cResult[12] = guildId;
    cResult[13] = tmp30;
    let tmp26 = tmp30;
    const tmp29 = require("GuildSettingsModalMemberApplications");
  } else {
    tmp26 = cResult[13];
  }
  if (cResult[14] === tmp25) {
    if (cResult[15] === tmp26) {
      let tmp31 = cResult[16];
    }
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[15]).intl;
      const stringResult2 = intl3.string(tmp(tmp2[15]).t.bSZkla);
      cResult[17] = stringResult2;
      let tmp32 = stringResult2;
    } else {
      tmp32 = cResult[17];
    }
    if (cResult[18] !== guildId) {
      const obj7 = { label: tmp32, id: tmp(tmp2[16]).MemberSafetyPageTab.REJECTED, page: null };
      const obj8 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.REJECTED };
      obj7.page = closure_11(require("GuildSettingsModalMemberApplications"), obj8);
      cResult[18] = guildId;
      cResult[19] = obj7;
      let tmp34 = obj7;
      const tmp37 = require("GuildSettingsModalMemberApplications");
    } else {
      tmp34 = cResult[19];
    }
    const _Symbol2 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(tmp2[15]).intl;
      const stringResult3 = intl4.string(tmp(tmp2[15]).t.aURgY2);
      cResult[20] = stringResult3;
      let tmp38 = stringResult3;
    } else {
      tmp38 = cResult[20];
    }
    if (cResult[21] !== guildId) {
      const obj9 = { label: tmp38, id: tmp(tmp2[16]).MemberSafetyPageTab.APPROVED, page: null };
      const obj10 = { guildId, applicationStatus: tmp(tmp2[19]).GuildJoinRequestApplicationStatuses.APPROVED };
      obj9.page = closure_11(require("GuildSettingsModalMemberApplications"), obj10);
      cResult[21] = guildId;
      cResult[22] = obj9;
      let tmp40 = obj9;
      const tmp43 = require("GuildSettingsModalMemberApplications");
    } else {
      tmp40 = cResult[22];
    }
    if (cResult[23] === tmp31) {
      if (cResult[24] === tmp34) {
        if (cResult[25] === tmp40) {
          if (cResult[26] === tmp20) {
            let tmp44 = cResult[27];
          }
          const navigation = tmp(tmp2[20]).useNavigation();
          if (cResult[28] === stateFromStores1) {
            if (cResult[29] === stateFromStores) {
              let tmp46 = cResult[30];
            }
            _slicedToArray = tmp46;
            if (cResult[31] === navigation) {
              if (cResult[32] === tmp46) {
                let tmp47 = cResult[33];
              }
              noop = tmp47;
              const _Symbol3 = Symbol;
              class X {
                constructor(arg0) {
                  closure_0 = guildId;
                  obj = {
                    headerRight() {
                                      let tmp = null;
                                      if (0 === closure_0) {
                                        tmp = closure_5();
                                      }
                                      return tmp;
                                    }
                  };
                  setOptionsResult = closure_4.setOptions(obj);
                  return;
                }
              }
              if (tmp48 === Symbol.for("react.memo_cache_sentinel")) {
                const fn4 = function $(nativeEvent) {
                  importDefault(nativeEvent.nativeEvent.layout.width);
                };
                cResult[34] = fn4;
                class X {
                  constructor(arg0) {
                    closure_0 = guildId;
                    obj = {
                      headerRight() {
                                          let tmp = null;
                                          if (0 === closure_0) {
                                            tmp = closure_5();
                                          }
                                          return tmp;
                                        }
                    };
                    setOptionsResult = closure_4.setOptions(obj);
                    return;
                  }
                }
              } else {
                const tmp49 = cResult[34];
              }
              let num32 = 0;
              if (num > 0) {
                num32 = 1;
              }
              if (cResult[35] === tmp5) {
                if (cResult[36] === tmp44) {
                  if (cResult[37] === tmp47) {
                    if (cResult[38] === num32) {
                      let tmp50 = cResult[39];
                    }
                    const segmentedControlState = tmp(tmp2[25]).useSegmentedControlState(tmp50);
                    class X {
                      constructor(arg0) {
                        closure_0 = guildId;
                        obj = {
                          headerRight() {
                                                  let tmp = null;
                                                  if (0 === closure_0) {
                                                    tmp = closure_5();
                                                  }
                                                  return tmp;
                                                }
                        };
                        setOptionsResult = closure_4.setOptions(obj);
                        return;
                      }
                    }
                    if (cResult[40] === segmentedControlState.activeIndex) {
                      if (cResult[41] === tmp47) {
                        let tmp52 = cResult[42];
                        let tmp53 = cResult[43];
                      }
                      const effect = obj2.useEffect(tmp52, tmp53);
                      const _Symbol4 = Symbol;
                      class X {
                        constructor(arg0) {
                          closure_0 = guildId;
                          obj = {
                            headerRight() {
                                                      let tmp = null;
                                                      if (0 === closure_0) {
                                                        tmp = closure_5();
                                                      }
                                                      return tmp;
                                                    }
                          };
                          setOptionsResult = closure_4.setOptions(obj);
                          return;
                        }
                      }
                      if (tmp55 === Symbol.for("react.memo_cache_sentinel")) {
                        function ie(toLocaleString) {
                          return "(" + guildId(stateFromStores[26]).defaultCountFormatter(toLocaleString) + ")";
                        }
                        cResult[44] = ie;
                        class X {
                          constructor(arg0) {
                            closure_0 = guildId;
                            obj = {
                              headerRight() {
                                                          let tmp = null;
                                                          if (0 === closure_0) {
                                                            tmp = closure_5();
                                                          }
                                                          return tmp;
                                                        }
                            };
                            setOptionsResult = closure_4.setOptions(obj);
                            return;
                          }
                        }
                      }
                      if (cResult[45] !== segmentedControlState) {
                        const obj11 = { state: segmentedControlState, grow: true, formatCount: null };
                        class X {
                          constructor(arg0) {
                            closure_0 = guildId;
                            obj = {
                              headerRight() {
                                                          let tmp = null;
                                                          if (0 === closure_0) {
                                                            tmp = closure_5();
                                                          }
                                                          return tmp;
                                                        }
                            };
                            setOptionsResult = closure_4.setOptions(obj);
                            return;
                          }
                        }
                        const tmp59 = closure_11(tmp(tmp2[26]).Tabs, obj11);
                        cResult[45] = segmentedControlState;
                        cResult[46] = tmp59;
                        let tmp57 = tmp59;
                      } else {
                        tmp57 = cResult[46];
                      }
                      if (cResult[47] === tmp6.tabContainer) {
                        if (cResult[48] === tmp57) {
                          let tmp60 = cResult[49];
                        }
                        if (cResult[50] !== segmentedControlState) {
                          { state: null }.state = segmentedControlState;
                          class X {
                            constructor(arg0) {
                              closure_0 = guildId;
                              obj = {
                                headerRight() {
                                                              let tmp = null;
                                                              if (0 === closure_0) {
                                                                tmp = closure_5();
                                                              }
                                                              return tmp;
                                                            }
                              };
                              setOptionsResult = closure_4.setOptions(obj);
                              return;
                            }
                          }
                          cResult[50] = segmentedControlState;
                          cResult[51] = tmp66;
                          let tmp64 = tmp66;
                          const obj12 = { state: null };
                        } else {
                          tmp64 = cResult[51];
                        }
                        if (cResult[52] === tmp6.content) {
                          if (cResult[53] === tmp64) {
                            let tmp67 = cResult[54];
                          }
                          if (cResult[55] === tmp6.container) {
                            if (cResult[56] === tmp60) {
                              if (cResult[57] === tmp67) {
                                let tmp70 = cResult[58];
                              }
                              return tmp70;
                            }
                          }
                          class X {
                            constructor(arg0) {
                              closure_0 = guildId;
                              obj = {
                                headerRight() {
                                                              let tmp = null;
                                                              if (0 === closure_0) {
                                                                tmp = closure_5();
                                                              }
                                                              return tmp;
                                                            }
                              };
                              setOptionsResult = closure_4.setOptions(obj);
                              return;
                            }
                          }
                          const obj13 = { style: tmp6.container, children: null };
                          const items4 = [tmp60, tmp67];
                          obj13.children = items4;
                          const tmp72 = closure_12(View, obj13);
                          cResult[55] = tmp6.container;
                          cResult[56] = tmp60;
                          cResult[57] = tmp67;
                          cResult[58] = tmp72;
                          tmp70 = tmp72;
                        }
                        class X {
                          constructor(arg0) {
                            closure_0 = guildId;
                            obj = {
                              headerRight() {
                                                          let tmp = null;
                                                          if (0 === closure_0) {
                                                            tmp = closure_5();
                                                          }
                                                          return tmp;
                                                        }
                            };
                            setOptionsResult = closure_4.setOptions(obj);
                            return;
                          }
                        }
                        const obj14 = { style: tmp6.content, onLayout: tmp49, children: tmp64 };
                        const tmp69 = closure_11(View, obj14);
                        cResult[52] = tmp6.content;
                        cResult[53] = tmp64;
                        cResult[54] = tmp69;
                        tmp67 = tmp69;
                      }
                      const obj15 = { style: tmp6.tabContainer, children: tmp57 };
                      const tmp63 = closure_11(View, obj15);
                      cResult[47] = tmp6.tabContainer;
                      cResult[48] = tmp57;
                      cResult[49] = tmp63;
                      tmp60 = tmp63;
                    }
                    function ae() {
                      activeIndex = activeIndex.activeIndex;
                      closure_6(activeIndex.get());
                    }
                    const items5 = [segmentedControlState.activeIndex, tmp47];
                    cResult[40] = segmentedControlState.activeIndex;
                    cResult[41] = tmp47;
                    cResult[42] = ae;
                    cResult[43] = items5;
                    tmp53 = items5;
                    tmp52 = ae;
                    const tmpResult6 = tmp(tmp2[25]);
                  }
                }
              }
              const obj16 = { pageWidth: tmp5, items: tmp44, defaultIndex: num32, onSetActiveIndex: tmp47 };
              cResult[35] = tmp5;
              cResult[36] = tmp44;
              cResult[37] = tmp47;
              cResult[38] = num32;
              cResult[39] = obj16;
              tmp50 = obj16;
            }
            class X {
              constructor(arg0) {
                closure_0 = guildId;
                obj = {
                  headerRight() {
                                  let tmp = null;
                                  if (0 === closure_0) {
                                    tmp = closure_5();
                                  }
                                  return tmp;
                                }
                };
                setOptionsResult = closure_4.setOptions(obj);
                return;
              }
            }
            cResult[31] = navigation;
            cResult[32] = tmp46;
            cResult[33] = X;
            tmp47 = X;
          }
          const fn3 = function j() {
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
                const obj = { source: closure_1_1(8646), accessibilityLabel: null, ref: null };
                const intl = guildId(1126).intl;
                obj.accessibilityLabel = intl.string(guildId(1126).t.ogxXGq);
                obj.ref = ref.ref;
                const merged = Object.assign(navigation(ref, stateFromStores1));
                return closure_1_11(guildId(7079).HeaderActionButton, obj);
              }
            });
          };
          cResult[28] = stateFromStores1;
          cResult[29] = stateFromStores;
          cResult[30] = fn3;
          tmp46 = fn3;
          const tmpResult5 = tmp(tmp2[20]);
        }
      }
    }
    const items6 = [tmp20, tmp31, tmp34, tmp40];
    cResult[23] = tmp31;
    cResult[24] = tmp34;
    cResult[25] = tmp40;
    cResult[26] = tmp20;
    cResult[27] = items6;
    tmp44 = items6;
  }
  const obj17 = { label: tmp23, id: guildId(stateFromStores[16]).MemberSafetyPageTab.PENDING, count: tmp25, page: tmp26 };
  cResult[14] = tmp25;
  cResult[15] = tmp26;
  cResult[16] = obj17;
  tmp31 = obj17;
  const tmpResult4 = guildId(stateFromStores[13]);
}) : (function GuildSettingsModalMembersWithTabs(guildId) {
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
  stateFromStores1 = guildId(num[13]).useStateFromStores(items2, () => {
    let canPruneGuildMembersResult = null != stateFromStores;
    if (canPruneGuildMembersResult) {
      canPruneGuildMembersResult = MemberSafetyPermissionsUtils.canPruneGuildMembers(tmp, UserStore.getCurrentUser(), PermissionStore);
    }
    return canPruneGuildMembersResult;
  }, items3);
  const items4 = [guildId, num];
  const memo = obj.useMemo(() => {
    const obj = { label: null, id: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.NOOm1Z);
    obj.id = MemberSafetyPageTypes.MemberSafetyPageTab.ALL_MEMBERS;
    obj.page = closure_2_11(GuildSettingsModalMembersDefault, { guildId });
    const items = [obj, , , ];
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
        const obj = { source: closure_1_1(8646), accessibilityLabel: null, ref: null };
        const intl = guildId(1126).intl;
        obj.accessibilityLabel = intl.string(guildId(1126).t.ogxXGq);
        obj.ref = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_1_11(guildId(7079).HeaderActionButton, obj);
      }
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
      }
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
  const callback3 = obj.useCallback((toLocaleString) => "(" + guildId(num[26]).defaultCountFormatter(toLocaleString) + ")", []);
  obj5.children = closure_11(guildId(num[26]).Tabs, { state: segmentedControlState, grow: true, formatCount: callback3 });
  const items8 = [closure_11(callback1, obj5), ];
  const tmp2Result6 = guildId(num[25]);
  items8[1] = closure_11(callback1, { style: tmp4.content, onLayout: callback2, children: closure_11(guildId(num[27]).SegmentedControlPages, { state: segmentedControlState }) });
  obj4.children = items8;
  return closure_12(callback1, obj4);
}));