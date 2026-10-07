// discord_app/modules/notification_center/native/NotificationCenterActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import showForLaterModal from "../../saved_messages/native/showForLaterModal.tsx";
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
  ? () => {
      const cResult = roleFilter(576).c(46);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [closure_4];
        const fn = function c() {
          return { everyoneFilter: closure_4.everyoneFilter, roleFilter: closure_4.roleFilter };
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
        const isForLaterExperimentOn = tmp(7496).useIsForLaterExperimentOn("NotificationCenterActionSheet");
        const tmpResult4 = tmp(7496);
        const hasForLaterAccess = tmp(7496).useHasForLaterAccess("NotificationCenterActionSheet");
        if (cResult[5] !== hasForLaterAccess) {
          const fn3 = function w(BOOKMARK) {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            if (hasForLaterAccess) {
              showForLaterModal.showForLaterModal(BOOKMARK);
            } else {
              const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
              openPremiumUpsellActionSheetDefault(
                EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES,
                undefined,
                items,
              );
              const tmpResult = openPremiumUpsellActionSheetDefault;
            }
          };
          cResult[5] = hasForLaterAccess;
          cResult[6] = fn3;
          let tmp11 = fn3;
        } else {
          tmp11 = cResult[6];
        }
        closure_4 = tmp11;
        const tmpResult5 = tmp(7496);
        const canUseScheduledMessages = tmp(7486).useCanUseScheduledMessages();
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn4 = function b() {
            everyoneFilter(4860).hideActionSheet();
            const obj = everyoneFilter(4860);
            const result = roleFilter(11854).showScheduledMessagesModal();
          };
          cResult[7] = fn4;
          let tmp13 = fn4;
        } else {
          tmp13 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const fn5 = function _() {
            everyoneFilter(4860).hideActionSheet();
            const obj = everyoneFilter(4860);
            roleFilter(6895).openUserSettings({ screen: constants.NOTIFICATIONS });
          };
          cResult[8] = fn5;
          let tmp14 = fn5;
        } else {
          tmp14 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { title: null };
          const intl = tmp(1126).intl;
          obj2.title = intl.string(tmp(1126).t.HcoRu0);
          const tmp17 = closure_6(tmp(6651).BottomSheetTitleHeader, obj2);
          cResult[9] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] === roleFilter) {
          if (cResult[11] === tmp8) {
            let tmp18 = cResult[12];
          }
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(tmp(1126).t.asInft);
            const obj3 = { IconComponent: tmp(5881).AtIcon, source: everyoneFilter(12079) };
            const tmp24 = closure_6(tmp(6704).ActionSheetRow.Icon, obj3);
            cResult[13] = stringResult;
            cResult[14] = tmp24;
            let tmp20 = tmp24;
            let tmp19 = stringResult;
          } else {
            tmp19 = cResult[13];
            tmp20 = cResult[14];
          }
          if (cResult[15] === roleFilter) {
            if (cResult[16] === tmp18) {
              let tmp25 = cResult[17];
            }
            if (cResult[18] === everyoneFilter) {
              if (cResult[19] === tmp8) {
                let tmp28 = cResult[20];
              }
              const _Symbol5 = Symbol;
              class L {
                constructor() {
                  obj = { everyoneFilter: !everyoneFilter };
                  return closure_2(obj);
                }
              }
              if (tmp29 === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(1126).intl.string;
                class L {
                  constructor() {
                    obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                const intl3 = tmp(1126).intl;
                const stringResult1 = intl3.string(tmp(1126).t.jYgZa4);
                const obj4 = { IconComponent: tmp(9301).BellIcon, source: everyoneFilter(16391) };
                const tmp37 = closure_6(tmp(6704).ActionSheetRow.Icon, obj4);
                cResult[21] = tmp33;
                cResult[22] = stringResult1;
                cResult[23] = tmp37;
                let tmp31 = stringResult1;
                let tmp30 = tmp33;
                const tmp32 = tmp37;
              } else {
                tmp30 = cResult[21];
                tmp31 = cResult[22];
                class L {
                  constructor() {
                    obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
              }
              if (cResult[24] === everyoneFilter) {
                if (cResult[25] === tmp28) {
                  let tmp38 = cResult[26];
                }
                if (cResult[27] === tmp25) {
                  if (cResult[28] === tmp38) {
                    let tmp41 = cResult[29];
                  }
                  if (cResult[30] === isForLaterExperimentOn) {
                    if (cResult[31] === tmp11) {
                      let tmp43 = cResult[32];
                    }
                    if (cResult[33] === isForLaterExperimentOn) {
                      if (cResult[34] === tmp11) {
                        let tmp47 = cResult[35];
                      }
                      if (cResult[36] !== canUseScheduledMessages) {
                        let tmp52 = null;
                        if (canUseScheduledMessages) {
                          const obj5 = { icon: null, label: null, onPress: null, arrow: true };
                          class L {
                            constructor() {
                              obj = { everyoneFilter: !everyoneFilter };
                              return closure_2(obj);
                            }
                          }
                          const obj6 = { IconComponent: tmp(11852).CalendarPlusIcon };
                          obj5.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj6);
                          const intl6 = tmp(1126).intl;
                          obj5.label = intl6.string(tmp(1126).t.SZVs3K);
                          obj5.onPress = tmp13;
                          tmp52 = closure_6(tmp54, obj5, "scheduled-messages");
                        }
                        class L {
                          constructor() {
                            obj = { everyoneFilter: !everyoneFilter };
                            return closure_2(obj);
                          }
                        }
                        cResult[36] = canUseScheduledMessages;
                        cResult[37] = tmp52;
                        let tmp51 = tmp52;
                      } else {
                        tmp51 = cResult[37];
                      }
                      class L {
                        constructor() {
                          obj = { everyoneFilter: !everyoneFilter };
                          return closure_2(obj);
                        }
                      }
                      if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj7 = { icon: null, label: null, onPress: null, arrow: true };
                        class L {
                          constructor() {
                            obj = { everyoneFilter: !everyoneFilter };
                            return closure_2(obj);
                          }
                        }
                        const obj8 = { IconComponent: tmp(6893).SettingsIcon };
                        obj7.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj8);
                        const intl7 = tmp(1126).intl;
                        obj7.label = intl7.string(tmp(1126).t.h850Ss);
                        obj7.onPress = tmp14;
                        const tmp58 = closure_6(tmp57, obj7, "settings");
                        cResult[38] = tmp58;
                        let tmp55 = tmp58;
                      } else {
                        tmp55 = cResult[38];
                      }
                      if (cResult[39] === tmp43) {
                        if (cResult[40] === tmp47) {
                          if (cResult[41] === tmp51) {
                            let tmp59 = cResult[42];
                          }
                          if (cResult[43] === tmp41) {
                            if (cResult[44] === tmp59) {
                              let tmp62 = cResult[45];
                            }
                            return tmp62;
                          }
                          class L {
                            constructor() {
                              obj = { everyoneFilter: !everyoneFilter };
                              return closure_2(obj);
                            }
                          }
                          const obj9 = { showGradient: true, header: tmp15, children: null };
                          const items1 = [tmp41, tmp59];
                          obj9.children = items1;
                          const tmp63 = closure_7(tmp(6708).ActionSheet, obj9);
                          cResult[43] = tmp41;
                          cResult[44] = tmp59;
                          cResult[45] = tmp63;
                          tmp62 = tmp63;
                        }
                      }
                      const obj10 = { hasIcons: true, children: null };
                      const items2 = [tmp43, tmp47, tmp51, tmp55];
                      obj10.children = items2;
                      cResult[39] = tmp43;
                      cResult[40] = tmp47;
                      cResult[41] = tmp51;
                      class M {
                        constructor() {
                          obj = { roleFilter: !roleFilter };
                          return closure_2(obj);
                        }
                      }
                      tmp59 = closure_7(tmp(6704).ActionSheetRow.Group, obj10);
                      const tmp61 = closure_7(tmp(6704).ActionSheetRow.Group, obj10);
                    }
                    class L {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    if (isForLaterExperimentOn) {
                      const obj11 = { icon: null, label: null, onPress: null, arrow: true };
                      class L {
                        constructor() {
                          obj = { everyoneFilter: !everyoneFilter };
                          return closure_2(obj);
                        }
                      }
                      const obj12 = { IconComponent: tmp(4855).ClockIcon };
                      obj11.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj12);
                      const intl5 = tmp(1126).intl;
                      obj11.label = intl5.string(tmp(1126).t.aUXxzT);
                      obj11.onPress = function onPress() {
                        return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
                      };
                      const tmp48 = closure_6(tmp50, obj11, "reminders");
                    }
                    cResult[33] = isForLaterExperimentOn;
                    cResult[34] = tmp11;
                    cResult[35] = tmp48;
                    tmp47 = tmp48;
                  }
                  class L {
                    constructor() {
                      obj = { everyoneFilter: !everyoneFilter };
                      return closure_2(obj);
                    }
                  }
                  if (isForLaterExperimentOn) {
                    const obj13 = { icon: null, label: null, onPress: null, arrow: true };
                    class L {
                      constructor() {
                        obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    const obj14 = { IconComponent: tmp(11350).BookmarkIcon };
                    obj13.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj14);
                    const intl4 = tmp(1126).intl;
                    obj13.label = intl4.string(tmp(1126).t["2pAkDA"]);
                    obj13.onPress = function onPress() {
                      return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
                    };
                    const tmp44 = closure_6(tmp46, obj13, "bookmarks");
                  }
                  cResult[30] = isForLaterExperimentOn;
                  cResult[31] = tmp11;
                  cResult[32] = tmp44;
                  tmp43 = tmp44;
                }
                class L {
                  constructor() {
                    obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                const obj15 = { hasIcons: true, children: null };
                const items3 = [tmp25, tmp38];
                obj15.children = items3;
                const tmp42 = closure_7(tmp(6704).ActionSheetRow.Group, obj15);
                cResult[27] = tmp25;
                cResult[28] = tmp38;
                cResult[29] = tmp42;
                tmp41 = tmp42;
              }
              const obj16 = { onValueChange: tmp28, value: everyoneFilter, label: tmp30, subLabel: tmp31, icon: tmp32 };
              const tmp40 = closure_6(tmp(6704).ActionSheetSwitchRow, obj16);
              cResult[24] = everyoneFilter;
              cResult[25] = tmp28;
              cResult[26] = tmp40;
              tmp38 = tmp40;
            }
            class L {
              constructor() {
                obj = { everyoneFilter: !everyoneFilter };
                return closure_2(obj);
              }
            }
            cResult[18] = everyoneFilter;
            cResult[19] = tmp8;
            cResult[20] = L;
            tmp28 = L;
          }
          const obj17 = { onValueChange: tmp18, value: roleFilter, label: tmp19, icon: tmp20 };
          const tmp27 = closure_6(tmp(6704).ActionSheetSwitchRow, obj17);
          cResult[15] = roleFilter;
          cResult[16] = tmp18;
          cResult[17] = tmp27;
          tmp25 = tmp27;
        }
        class M {
          constructor() {
            obj = { roleFilter: !roleFilter };
            return closure_2(obj);
          }
        }
        cResult[10] = roleFilter;
        cResult[11] = tmp8;
        cResult[12] = M;
        tmp18 = M;
        const tmpResult6 = tmp(7486);
      }
      const fn2 = function h(arg0) {
        const merged = Object.assign(arg0);
        MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
      };
      cResult[2] = everyoneFilter;
      cResult[4] = fn2;
      tmp8 = fn2;
      let tmpResult = roleFilter(504);
    }
  : () => {
      let items = [closure_4];
      const stateFromStoresObject = roleFilter(504).useStateFromStoresObject(items, () => ({
        everyoneFilter: closure_4.everyoneFilter,
        roleFilter: closure_4.roleFilter,
      }));
      roleFilter = stateFromStoresObject.roleFilter;
      const everyoneFilter = stateFromStoresObject.everyoneFilter;
      const items1 = [everyoneFilter, roleFilter];
      dependencyMap = hasForLaterAccess.useCallback((arg0) => {
        const merged = Object.assign(arg0);
        MentionActionCreatorsDefault.setGuildFilter({ roleFilter, everyoneFilter });
      }, items1);
      let obj = roleFilter(504);
      const isForLaterExperimentOn = roleFilter(7496).useIsForLaterExperimentOn("NotificationCenterActionSheet");
      let obj2 = roleFilter(7496);
      hasForLaterAccess = roleFilter(7496).useHasForLaterAccess("NotificationCenterActionSheet");
      const items2 = [hasForLaterAccess];
      closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (hasForLaterAccess) {
          showForLaterModal.showForLaterModal(BOOKMARK);
        } else {
          const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
          openPremiumUpsellActionSheetDefault(
            EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES,
            undefined,
            items,
          );
          const tmpResult = openPremiumUpsellActionSheetDefault;
        }
      }, items2);
      const obj3 = roleFilter(7496);
      const canUseScheduledMessages = roleFilter(7486).useCanUseScheduledMessages();
      const callback = hasForLaterAccess.useCallback(() => {
        everyoneFilter(4860).hideActionSheet();
        const obj = everyoneFilter(4860);
        const result = roleFilter(11854).showScheduledMessagesModal();
      }, []);
      const callback1 = hasForLaterAccess.useCallback(() => {
        everyoneFilter(4860).hideActionSheet();
        const obj = everyoneFilter(4860);
        roleFilter(6895).openUserSettings({ screen: constants.NOTIFICATIONS });
      }, []);
      const obj5 = { showGradient: true, header: null, children: null };
      const obj6 = { title: null };
      const intl = roleFilter(1126).intl;
      obj6.title = intl.string(roleFilter(1126).t.HcoRu0);
      obj5.header = closure_6(roleFilter(6651).BottomSheetTitleHeader, obj6);
      const obj7 = { hasIcons: true, children: null };
      const obj8 = {
        onValueChange() {
          return dependencyMap({ roleFilter: !roleFilter });
        },
        value: roleFilter,
        label: null,
        icon: null,
      };
      const intl2 = roleFilter(1126).intl;
      obj8.label = intl2.string(roleFilter(1126).t.asInft);
      const obj4 = roleFilter(7486);
      obj8.icon = closure_6(roleFilter(6704).ActionSheetRow.Icon, {
        IconComponent: roleFilter(5881).AtIcon,
        source: everyoneFilter(12079),
      });
      const items3 = [closure_6(roleFilter(6704).ActionSheetSwitchRow, obj8)];
      const obj10 = {
        onValueChange() {
          return dependencyMap({ everyoneFilter: !everyoneFilter });
        },
        value: everyoneFilter,
        label: null,
        subLabel: null,
        icon: null,
      };
      const intl3 = roleFilter(1126).intl;
      obj10.label = intl3.string(roleFilter(1126).t.S9GLtt);
      const intl4 = roleFilter(1126).intl;
      obj10.subLabel = intl4.string(roleFilter(1126).t.jYgZa4);
      const obj9 = { IconComponent: roleFilter(5881).AtIcon, source: everyoneFilter(12079) };
      obj10.icon = closure_6(roleFilter(6704).ActionSheetRow.Icon, {
        IconComponent: roleFilter(9301).BellIcon,
        source: everyoneFilter(16391),
      });
      items3[1] = closure_6(roleFilter(6704).ActionSheetSwitchRow, obj10);
      obj7.children = items3;
      const items4 = [closure_7(roleFilter(6704).ActionSheetRow.Group, obj7)];
      let tmp10Result = null;
      if (isForLaterExperimentOn) {
        const obj12 = { icon: null, label: null, onPress: null, arrow: true };
        const obj13 = { IconComponent: tmp(11350).BookmarkIcon };
        obj12.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj13);
        const intl5 = tmp(1126).intl;
        obj12.label = intl5.string(tmp(1126).t["2pAkDA"]);
        obj12.onPress = function onPress() {
          return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
        };
        tmp10Result = closure_6(tmp(6704).ActionSheetRow, obj12, "bookmarks");
      }
      const items5 = [tmp10Result, , ,];
      let tmp10Result3 = null;
      if (isForLaterExperimentOn) {
        const obj14 = { icon: null, label: null, onPress: null, arrow: true };
        const obj15 = { IconComponent: tmp(4855).ClockIcon };
        obj14.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj15);
        const intl6 = tmp(1126).intl;
        obj14.label = intl6.string(tmp(1126).t.aUXxzT);
        obj14.onPress = function onPress() {
          return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
        };
        tmp10Result3 = closure_6(tmp(6704).ActionSheetRow, obj14, "reminders");
      }
      items5[1] = tmp10Result3;
      let tmp10Result4 = null;
      if (canUseScheduledMessages) {
        const obj16 = { icon: null, label: null, onPress: null, arrow: true };
        const obj17 = { IconComponent: tmp(11852).CalendarPlusIcon };
        obj16.icon = closure_6(tmp(6704).ActionSheetRow.Icon, obj17);
        const intl7 = tmp(1126).intl;
        obj16.label = intl7.string(tmp(1126).t.SZVs3K);
        obj16.onPress = callback;
        tmp10Result4 = closure_6(tmp(6704).ActionSheetRow, obj16, "scheduled-messages");
      }
      const obj18 = { hasIcons: true, children: null };
      items5[2] = tmp10Result4;
      const obj19 = { icon: null, label: null, onPress: null, arrow: true };
      const obj11 = { IconComponent: roleFilter(9301).BellIcon, source: everyoneFilter(16391) };
      obj19.icon = closure_6(roleFilter(6704).ActionSheetRow.Icon, { IconComponent: roleFilter(6893).SettingsIcon });
      const intl8 = tmp(1126).intl;
      obj19.label = intl8.string(roleFilter(1126).t.h850Ss);
      obj19.onPress = callback1;
      items5[3] = closure_6(roleFilter(6704).ActionSheetRow, obj19, "settings");
      obj18.children = items5;
      items4[1] = closure_7(roleFilter(6704).ActionSheetRow.Group, obj18);
      obj5.children = items4;
      return closure_7(roleFilter(6708).ActionSheet, obj5);
    };
