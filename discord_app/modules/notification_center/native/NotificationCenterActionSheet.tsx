// discord_app/modules/notification_center/native/NotificationCenterActionSheet.tsx
import SavedMessagesTypes from "../../saved_messages/SavedMessagesTypes.tsx";
import MentionActionCreatorsDefault from "../../../actions/MentionActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RecentMentionsStore from "../../inbox/RecentMentionsStore.tsx";

require = fn;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationCenterActionSheet() {
      const cResult = roleFilter(576).c(39);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RecentMentionsStore];
        const fn = function c() {
          return { everyoneFilter: RecentMentionsStore.everyoneFilter, roleFilter: RecentMentionsStore.roleFilter };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = roleFilter(576);
      const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(tmp4, tmp5);
      roleFilter = stateFromStoresObject.roleFilter;
      const everyoneFilter = stateFromStoresObject.everyoneFilter;
      if (cResult[2] === everyoneFilter) {
        if (cResult[3] === roleFilter) {
          let tmp8 = cResult[4];
        }
        dependencyMap = tmp8;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function w(BOOKMARK) {
            everyoneFilter(5054).hideActionSheet();
            const obj = everyoneFilter(5054);
            roleFilter(12656).showForLaterModal(BOOKMARK);
          };
          cResult[5] = fn2;
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[5];
        }
        closure_3 = tmp9;
        const canUseScheduledMessages = tmp(9228).useCanUseScheduledMessages();
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function b() {
            everyoneFilter(5054).hideActionSheet();
            const obj = everyoneFilter(5054);
            const result = roleFilter(9227).showScheduledMessagesModal();
          };
          cResult[6] = fn3;
          let tmp11 = fn3;
        } else {
          tmp11 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn4 = function v() {
            everyoneFilter(5054).hideActionSheet();
            const obj = everyoneFilter(5054);
            roleFilter(7084).openUserSettings({ screen: constants.NOTIFICATIONS });
          };
          cResult[7] = fn4;
          let tmp12 = fn4;
        } else {
          tmp12 = cResult[7];
        }
        const _Symbol4 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { title: null };
          const intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t.HcoRu0);
          const tmp15 = closure_6(tmp(6828).BottomSheetTitleHeader, obj2);
          cResult[8] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] === roleFilter) {
          if (cResult[10] === tmp8) {
            let tmp16 = cResult[11];
          }
          const _Symbol5 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(tmp(1126).t.asInft);
            const obj3 = { IconComponent: tmp(8193).AtIcon, source: everyoneFilter(12153) };
            const tmp23 = closure_6(tmp(6881).ActionSheetRow.Icon, obj3);
            cResult[12] = stringResult;
            cResult[13] = tmp23;
            let tmp19 = tmp23;
            let tmp18 = stringResult;
          } else {
            tmp18 = cResult[12];
            tmp19 = cResult[13];
          }
          if (cResult[14] === roleFilter) {
            if (cResult[17] === everyoneFilter) {
              if (cResult[18] === tmp8) {
                let tmp27 = cResult[19];
              }
              const _Symbol6 = Symbol;
              class T {
                constructor() {
                  obj = { everyoneFilter: !everyoneFilter };
                  return closure_2(obj);
                }
              }
              if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(1126).intl.string;
                class T {
                  constructor() {
                    obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                const intl3 = tmp(1126).intl;
                const stringResult1 = intl3.string(tmp(1126).t.jYgZa4);
                const obj4 = { IconComponent: tmp(8747).BellIcon, source: everyoneFilter(16651) };
                cResult[20] = tmp32;
                cResult[21] = stringResult1;
                class S {
                  constructor(arg0) {
                    obj = closure_1(closure_2[7]);
                    obj1 = { roleFilter, everyoneFilter };
                    merged = Object.assign(arg0);
                    setGuildFilterResult = obj.setGuildFilter(obj1);
                    return;
                  }
                }
                const tmp36 = closure_6(tmp(6881).ActionSheetRow.Icon, obj4);
                let tmp30 = stringResult1;
                let tmp29 = tmp32;
                const tmp31 = closure_6(tmp(6881).ActionSheetRow.Icon, obj4);
              } else {
                tmp29 = cResult[20];
                tmp30 = cResult[21];
                class T {
                  constructor() {
                    obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
              }
              if (cResult[23] === everyoneFilter) {
                if (cResult[24] === tmp27) {
                  let tmp37 = cResult[25];
                }
                if (cResult[26] === tmp24) {
                  if (cResult[27] === tmp37) {
                    let tmp40 = cResult[28];
                  }
                  const _Symbol7 = Symbol;
                  class T {
                    constructor() {
                      obj = { everyoneFilter: !everyoneFilter };
                      return closure_2(obj);
                    }
                  }
                  if (tmp42 === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { icon: null, label: null, onPress: null, arrow: true };
                    class T {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    const obj6 = { IconComponent: tmp(12666).BookmarkIcon };
                    obj5.icon = closure_6(tmp(6881).ActionSheetRow.Icon, obj6);
                    const intl4 = tmp(1126).intl;
                    obj5.label = intl4.string(tmp(1126).t["2pAkDA"]);
                    obj5.onPress = function onPress() {
                      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
                    };
                    const tmp46 = closure_6(tmp45, obj5, "bookmarks");
                    cResult[29] = tmp46;
                    let tmp43 = tmp46;
                  } else {
                    tmp43 = cResult[29];
                  }
                  const _Symbol8 = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj7 = { icon: null, label: null, onPress: null, arrow: true };
                    class T {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    const obj8 = { IconComponent: tmp(5049).ClockIcon };
                    obj7.icon = closure_6(tmp(6881).ActionSheetRow.Icon, obj8);
                    const intl5 = tmp(1126).intl;
                    obj7.label = intl5.string(tmp(1126).t.aUXxzT);
                    obj7.onPress = function onPress() {
                      return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
                    };
                    const tmp50 = closure_6(tmp49, obj7, "reminders");
                    cResult[30] = tmp50;
                    let tmp47 = tmp50;
                  } else {
                    tmp47 = cResult[30];
                  }
                  if (cResult[31] !== canUseScheduledMessages) {
                    let tmp52 = null;
                    if (canUseScheduledMessages) {
                      const obj9 = { icon: null, label: null, onPress: null, arrow: true };
                      class T {
                        constructor() {
                          obj = { everyoneFilter: !everyoneFilter };
                          return closure_2(obj);
                        }
                      }
                      const obj10 = { IconComponent: tmp(11936).CalendarPlusIcon };
                      obj9.icon = closure_6(tmp(6881).ActionSheetRow.Icon, obj10);
                      const intl6 = tmp(1126).intl;
                      obj9.label = intl6.string(tmp(1126).t.SZVs3K);
                      obj9.onPress = tmp11;
                      tmp52 = closure_6(tmp54, obj9, "scheduled-messages");
                    }
                    class T {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    cResult[31] = canUseScheduledMessages;
                    cResult[32] = tmp52;
                    let tmp51 = tmp52;
                  } else {
                    tmp51 = cResult[32];
                  }
                  const _Symbol9 = Symbol;
                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj11 = { icon: null, label: null, onPress: null, arrow: true };
                    class T {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    const obj12 = { IconComponent: tmp(7082).SettingsIcon };
                    obj11.icon = closure_6(tmp(6881).ActionSheetRow.Icon, obj12);
                    const intl7 = tmp(1126).intl;
                    obj11.label = intl7.string(tmp(1126).t.h850Ss);
                    obj11.onPress = tmp12;
                    const tmp58 = closure_6(tmp57, obj11, "settings");
                    cResult[33] = tmp58;
                    let tmp55 = tmp58;
                  } else {
                    tmp55 = cResult[33];
                  }
                  if (cResult[34] !== tmp51) {
                    const obj13 = { hasIcons: true, children: null };
                    class T {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    tmp61[0] = tmp43;
                    tmp61[1] = tmp47;
                    tmp61[2] = tmp51;
                    tmp61[3] = tmp55;
                    obj13.children = tmp61;
                    const tmp62 = closure_7(tmp(6881).ActionSheetRow.Group, obj13);
                    cResult[34] = tmp51;
                    cResult[35] = tmp62;
                    let tmp59 = tmp62;
                  } else {
                    tmp59 = cResult[35];
                  }
                  if (cResult[36] === tmp40) {
                    if (cResult[37] === tmp59) {
                      let tmp63 = cResult[38];
                    }
                    return tmp63;
                  }
                  const obj14 = { showGradient: true, header: tmp13, children: null };
                  const items1 = [tmp40];
                  class S {
                    constructor(arg0) {
                      obj = closure_1(closure_2[7]);
                      obj1 = { roleFilter, everyoneFilter };
                      merged = Object.assign(arg0);
                      setGuildFilterResult = obj.setGuildFilter(obj1);
                      return;
                    }
                  }
                  obj14.children = items1;
                  const tmp65 = closure_7(tmp(6885).ActionSheet, obj14);
                  cResult[36] = tmp40;
                  cResult[37] = tmp59;
                  cResult[38] = tmp65;
                  tmp63 = tmp65;
                }
                class T {
                  constructor() {
                    obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                const obj15 = { hasIcons: true, children: null };
                const items2 = [tmp24, tmp37];
                obj15.children = items2;
                const tmp41 = closure_7(tmp(6881).ActionSheetRow.Group, obj15);
                cResult[26] = tmp24;
                cResult[27] = tmp37;
                cResult[28] = tmp41;
                tmp40 = tmp41;
              }
              const obj16 = { onValueChange: tmp27, value: everyoneFilter, label: tmp29, subLabel: tmp30, icon: tmp31 };
              cResult[23] = everyoneFilter;
              cResult[24] = tmp27;
              class S {
                constructor(arg0) {
                  obj = closure_1(closure_2[7]);
                  obj1 = { roleFilter, everyoneFilter };
                  merged = Object.assign(arg0);
                  setGuildFilterResult = obj.setGuildFilter(obj1);
                  return;
                }
              }
              tmp37 = closure_6(tmp(6881).ActionSheetSwitchRow, obj16);
              const tmp39 = closure_6(tmp(6881).ActionSheetSwitchRow, obj16);
            }
            class T {
              constructor() {
                obj = { everyoneFilter: !everyoneFilter };
                return closure_2(obj);
              }
            }
            cResult[17] = everyoneFilter;
            cResult[18] = tmp8;
            cResult[19] = T;
            tmp27 = T;
          }
          const obj17 = { onValueChange: tmp16, value: roleFilter, label: tmp18, icon: tmp19 };
          cResult[14] = roleFilter;
          cResult[15] = tmp16;
          cResult[16] = closure_6(tmp(6881).ActionSheetSwitchRow, obj17);
          class S {
            constructor(arg0) {
              obj = closure_1(closure_2[7]);
              obj1 = { roleFilter, everyoneFilter };
              merged = Object.assign(arg0);
              setGuildFilterResult = obj.setGuildFilter(obj1);
              return;
            }
          }
          const tmp26 = closure_6(tmp(6881).ActionSheetSwitchRow, obj17);
        }
        class S {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            obj1 = { roleFilter, everyoneFilter };
            merged = Object.assign(arg0);
            setGuildFilterResult = obj.setGuildFilter(obj1);
            return;
          }
        }
        cResult[9] = roleFilter;
        cResult[10] = tmp8;
        cResult[11] = tmp17;
        tmp16 = tmp17;
        const tmpResult2 = tmp(9228);
      }
      class S {
        constructor(arg0) {
          obj = closure_1(closure_2[7]);
          obj1 = { roleFilter, everyoneFilter };
          merged = Object.assign(arg0);
          setGuildFilterResult = obj.setGuildFilter(obj1);
          return;
        }
      }
      cResult[2] = everyoneFilter;
      cResult[3] = roleFilter;
      cResult[4] = S;
      tmp8 = S;
      const tmpResult = roleFilter(504);
    }
  : function NotificationCenterActionSheet() {
      const items = [RecentMentionsStore];
      const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(items, () => ({
        everyoneFilter: RecentMentionsStore.everyoneFilter,
        roleFilter: RecentMentionsStore.roleFilter,
      }));
      roleFilter = stateFromStoresObject.roleFilter;
      const everyoneFilter = stateFromStoresObject.everyoneFilter;
      const items1 = [everyoneFilter, roleFilter];
      dependencyMap = noop.useCallback((arg0) => {
        const merged = Object.assign(arg0);
        MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
      }, items1);
      noop = noop.useCallback((BOOKMARK) => {
        everyoneFilter(5054).hideActionSheet();
        const obj = everyoneFilter(5054);
        roleFilter(12656).showForLaterModal(BOOKMARK);
      }, []);
      let obj = roleFilter(504);
      const canUseScheduledMessages = roleFilter(9228).useCanUseScheduledMessages();
      const callback = noop.useCallback(() => {
        everyoneFilter(5054).hideActionSheet();
        const obj = everyoneFilter(5054);
        const result = roleFilter(9227).showScheduledMessagesModal();
      }, []);
      const callback1 = noop.useCallback(() => {
        everyoneFilter(5054).hideActionSheet();
        const obj = everyoneFilter(5054);
        roleFilter(7084).openUserSettings({ screen: constants.NOTIFICATIONS });
      }, []);
      const obj3 = { showGradient: true, header: null, children: null };
      const obj4 = { title: null };
      const intl = roleFilter(1126).intl;
      obj4.title = intl.string(roleFilter(1126).t.HcoRu0);
      obj3.header = closure_6(roleFilter(6828).BottomSheetTitleHeader, obj4);
      const obj5 = { hasIcons: true, children: null };
      const obj6 = {
        onValueChange() {
          return dependencyMap({ roleFilter: !roleFilter });
        },
        value: roleFilter,
        label: null,
        icon: null,
      };
      const intl2 = roleFilter(1126).intl;
      obj6.label = intl2.string(roleFilter(1126).t.asInft);
      const obj2 = roleFilter(9228);
      obj6.icon = closure_6(roleFilter(6881).ActionSheetRow.Icon, {
        IconComponent: roleFilter(8193).AtIcon,
        source: everyoneFilter(12153),
      });
      const items2 = [closure_6(roleFilter(6881).ActionSheetSwitchRow, obj6)];
      const obj8 = {
        onValueChange() {
          return dependencyMap({ everyoneFilter: !everyoneFilter });
        },
        value: everyoneFilter,
        label: null,
        subLabel: null,
        icon: null,
      };
      const intl3 = roleFilter(1126).intl;
      obj8.label = intl3.string(roleFilter(1126).t.S9GLtt);
      const intl4 = roleFilter(1126).intl;
      obj8.subLabel = intl4.string(roleFilter(1126).t.jYgZa4);
      const obj7 = { IconComponent: roleFilter(8193).AtIcon, source: everyoneFilter(12153) };
      obj8.icon = closure_6(roleFilter(6881).ActionSheetRow.Icon, {
        IconComponent: roleFilter(8747).BellIcon,
        source: everyoneFilter(16651),
      });
      items2[1] = closure_6(roleFilter(6881).ActionSheetSwitchRow, obj8);
      obj5.children = items2;
      const items3 = [closure_7(roleFilter(6881).ActionSheetRow.Group, obj5)];
      const obj10 = { icon: null, label: null, onPress: null, arrow: true };
      const obj9 = { IconComponent: roleFilter(8747).BellIcon, source: everyoneFilter(16651) };
      obj10.icon = closure_6(roleFilter(6881).ActionSheetRow.Icon, { IconComponent: roleFilter(12666).BookmarkIcon });
      const intl5 = roleFilter(1126).intl;
      obj10.label = intl5.string(roleFilter(1126).t["2pAkDA"]);
      obj10.onPress = function onPress() {
        return closure_3(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
      };
      const items4 = [closure_6(roleFilter(6881).ActionSheetRow, obj10, "bookmarks"), , ,];
      const obj12 = { icon: null, label: null, onPress: null, arrow: true };
      const obj11 = { IconComponent: roleFilter(12666).BookmarkIcon };
      obj12.icon = closure_6(roleFilter(6881).ActionSheetRow.Icon, { IconComponent: roleFilter(5049).ClockIcon });
      const intl6 = roleFilter(1126).intl;
      obj12.label = intl6.string(roleFilter(1126).t.aUXxzT);
      obj12.onPress = function onPress() {
        return closure_3(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
      };
      items4[1] = closure_6(roleFilter(6881).ActionSheetRow, obj12, "reminders");
      let tmp8Result = null;
      if (canUseScheduledMessages) {
        const obj14 = { icon: null, label: null, onPress: null, arrow: true };
        const obj15 = { IconComponent: tmp(11936).CalendarPlusIcon };
        obj14.icon = closure_6(tmp(6881).ActionSheetRow.Icon, obj15);
        const intl7 = tmp(1126).intl;
        obj14.label = intl7.string(tmp(1126).t.SZVs3K);
        obj14.onPress = callback;
        tmp8Result = closure_6(tmp(6881).ActionSheetRow, obj14, "scheduled-messages");
      }
      const obj16 = { hasIcons: true, children: null };
      items4[2] = tmp8Result;
      const obj17 = { icon: null, label: null, onPress: null, arrow: true };
      const obj13 = { IconComponent: roleFilter(5049).ClockIcon };
      obj17.icon = closure_6(roleFilter(6881).ActionSheetRow.Icon, { IconComponent: roleFilter(7082).SettingsIcon });
      const intl8 = tmp(1126).intl;
      obj17.label = intl8.string(roleFilter(1126).t.h850Ss);
      obj17.onPress = callback1;
      items4[3] = closure_6(roleFilter(6881).ActionSheetRow, obj17, "settings");
      obj16.children = items4;
      items3[1] = closure_7(roleFilter(6881).ActionSheetRow.Group, obj16);
      obj3.children = items3;
      return closure_7(roleFilter(6885).ActionSheet, obj3);
    };
