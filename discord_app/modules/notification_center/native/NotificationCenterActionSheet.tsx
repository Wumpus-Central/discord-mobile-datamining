// discord_app/modules/notification_center/native/NotificationCenterActionSheet.tsx
import Constants from "../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import showForLaterModal from "../../saved_messages/native/showForLaterModal.tsx";
import SavedMessagesTypes from "../../saved_messages/SavedMessagesTypes.tsx";
import MentionActionCreatorsDefault from "../../../actions/MentionActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import RecentMentionsStore from "../../inbox/RecentMentionsStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4, dependencyMap;

let metroImportDefault;
let metroRequire;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Icon3;
      let Icon4;
      let Icon5;
      let Icon6;
      let closure_2;
      let intl;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items1;
      let items2;
      let items3;
      let obj12;
      let obj14;
      let obj6;
      let obj8;
      let roleFilter;
      let tmp4;
      let tmp5;
      const tmp = roleFilter;
      let obj = roleFilter(576);
      const cResult = obj.c(46);
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
      let tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
      roleFilter = stateFromStoresObject.roleFilter;
      const everyoneFilter = stateFromStoresObject.everyoneFilter;
      if (cResult[2] === everyoneFilter) {
        let tmp8;
        let tmp11;
        let tmp13;
        let tmp14;
        let tmp15;
        if (cResult[3] === roleFilter) {
          tmp8 = cResult[4];
        }
        dependencyMap = tmp8;
        const tmpResult4 = tmp(7485);
        const isForLaterExperimentOn = tmpResult4.useIsForLaterExperimentOn("NotificationCenterActionSheet");
        const tmpResult5 = tmp(7485);
        const hasForLaterAccess = tmpResult5.useHasForLaterAccess("NotificationCenterActionSheet");
        if (cResult[5] !== hasForLaterAccess) {
          const fn3 = function w(BOOKMARK) {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            if (hasForLaterAccess) {
              const obj2 = showForLaterModal;
              obj2.showForLaterModal(BOOKMARK);
            } else {
              const tmpResult = openPremiumUpsellActionSheetDefault;
              const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
              const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
              tmpResult(SAVED_MESSAGES, undefined, items);
            }
          };
          cResult[5] = hasForLaterAccess;
          cResult[6] = fn3;
          tmp11 = fn3;
        } else {
          tmp11 = cResult[6];
        }
        closure_4 = tmp11;
        const tmpResult6 = tmp(7475);
        const canUseScheduledMessages = tmpResult6.useCanUseScheduledMessages();
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const fn4 = function b() {
            const obj = everyoneFilter(closure_2[9]);
            obj.hideActionSheet();
            const obj2 = roleFilter(closure_2[15]);
            const result = obj2.showScheduledMessagesModal();
          };
          cResult[7] = fn4;
          tmp13 = fn4;
        } else {
          tmp13 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const fn5 = function _() {
            const obj = everyoneFilter(closure_2[9]);
            obj.hideActionSheet();
            const obj2 = roleFilter(closure_2[16]);
            const obj3 = { screen: constants.NOTIFICATIONS };
            obj2.openUserSettings(obj3);
          };
          cResult[8] = fn5;
          tmp14 = fn5;
        } else {
          tmp14 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { title: intl.string(tmp(1126).t.HcoRu0) };
          const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
          intl = tmp(1126).intl;
          const tmp17 = closure_6(BottomSheetTitleHeader, obj2);
          cResult[9] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] === roleFilter) {
          let tmp18;
          let tmp20;
          let tmp19;
          if (cResult[11] === tmp8) {
            tmp18 = cResult[12];
          }
          const _Symbol4 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(tmp(1126).t.asInft);
            let obj3 = { IconComponent: tmp(5874).AtIcon, source: everyoneFilter(12064) };
            const Icon = tmp(6697).ActionSheetRow.Icon;
            const tmp24 = closure_6(Icon, obj3);
            cResult[13] = stringResult;
            cResult[14] = tmp24;
            tmp20 = tmp24;
            tmp19 = stringResult;
          } else {
            tmp19 = cResult[13];
            tmp20 = cResult[14];
          }
          if (cResult[15] === roleFilter) {
            let tmp25;
            if (cResult[16] === tmp18) {
              tmp25 = cResult[17];
            }
            if (cResult[18] === everyoneFilter) {
              let tmp28;
              let tmp31;
              let tmp30;
              let tmp32;
              if (cResult[19] === tmp8) {
                tmp28 = cResult[20];
              }
              const _Symbol5 = Symbol;
              class L {
                constructor() {
                  const obj = { everyoneFilter: !everyoneFilter };
                  return closure_2(obj);
                }
              }
              if (tmp29 === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(1126).intl.string;
                class L {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                const intl3 = tmp(1126).intl;
                const stringResult1 = intl3.string(tmp(1126).t.jYgZa4);
                const obj4 = { IconComponent: tmp(9266).BellIcon, source: everyoneFilter(16351) };
                const Icon2 = tmp(6697).ActionSheetRow.Icon;
                const tmp37 = closure_6(Icon2, obj4);
                cResult[21] = tmp33;
                cResult[22] = stringResult1;
                cResult[23] = tmp37;
                tmp31 = stringResult1;
                tmp30 = tmp33;
                tmp32 = tmp37;
              } else {
                tmp30 = cResult[21];
                tmp31 = cResult[22];
                class L {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
              }
              if (cResult[24] === everyoneFilter) {
                let tmp38;
                if (cResult[25] === tmp28) {
                  tmp38 = cResult[26];
                }
                if (cResult[27] === tmp25) {
                  let tmp41;
                  let tmp44;
                  if (cResult[28] === tmp38) {
                    tmp41 = cResult[29];
                  }
                  if (cResult[30] === isForLaterExperimentOn) {
                    let tmp43;
                    let tmp48;
                    if (cResult[31] === tmp11) {
                      tmp43 = cResult[32];
                    }
                    if (cResult[33] === isForLaterExperimentOn) {
                      let tmp47;
                      let tmp51;
                      let tmp55;
                      if (cResult[34] === tmp11) {
                        tmp47 = cResult[35];
                      }
                      if (cResult[36] !== canUseScheduledMessages) {
                        let tmp52 = null;
                        if (canUseScheduledMessages) {
                          const obj5 = {
                            icon: closure_6(Icon5, obj6),
                            label: intl6.string(tmp(1126).t.SZVs3K),
                            onPress: tmp13,
                            arrow: true,
                          };
                          class L {
                            constructor() {
                              const obj = { everyoneFilter: !everyoneFilter };
                              return closure_2(obj);
                            }
                          }
                          obj6 = { IconComponent: tmp(11838).CalendarPlusIcon };
                          Icon5 = tmp(6697).ActionSheetRow.Icon;
                          intl6 = tmp(1126).intl;
                          tmp52 = closure_6(tmp54, obj5, "scheduled-messages");
                        }
                        class L {
                          constructor() {
                            const obj = { everyoneFilter: !everyoneFilter };
                            return closure_2(obj);
                          }
                        }
                        cResult[36] = canUseScheduledMessages;
                        cResult[37] = tmp52;
                        tmp51 = tmp52;
                      } else {
                        tmp51 = cResult[37];
                      }
                      class L {
                        constructor() {
                          const obj = { everyoneFilter: !everyoneFilter };
                          return closure_2(obj);
                        }
                      }
                      if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj7 = {
                          icon: closure_6(Icon6, obj8),
                          label: intl7.string(tmp(1126).t.h850Ss),
                          onPress: tmp14,
                          arrow: true,
                        };
                        class L {
                          constructor() {
                            const obj = { everyoneFilter: !everyoneFilter };
                            return closure_2(obj);
                          }
                        }
                        obj8 = { IconComponent: tmp(6883).SettingsIcon };
                        Icon6 = tmp(6697).ActionSheetRow.Icon;
                        intl7 = tmp(1126).intl;
                        const tmp58 = closure_6(tmp57, obj7, "settings");
                        cResult[38] = tmp58;
                        tmp55 = tmp58;
                      } else {
                        tmp55 = cResult[38];
                      }
                      if (cResult[39] === tmp43) {
                        if (cResult[40] === tmp47) {
                          let tmp59;
                          if (cResult[41] === tmp51) {
                            tmp59 = cResult[42];
                          }
                          if (cResult[43] === tmp41) {
                            let tmp62;
                            if (cResult[44] === tmp59) {
                              tmp62 = cResult[45];
                            }
                            return tmp62;
                          }
                          class L {
                            constructor() {
                              const obj = { everyoneFilter: !everyoneFilter };
                              return closure_2(obj);
                            }
                          }
                          const obj9 = { showGradient: true, header: tmp15, children: items1 };
                          items1 = [tmp41, tmp59];
                          const tmp63 = closure_7(tmp(6701).ActionSheet, obj9);
                          cResult[43] = tmp41;
                          cResult[44] = tmp59;
                          cResult[45] = tmp63;
                          tmp62 = tmp63;
                        }
                      }
                      const obj10 = { hasIcons: true, children: items2 };
                      items2 = [tmp43, tmp47, tmp51, tmp55];
                      cResult[39] = tmp43;
                      cResult[40] = tmp47;
                      cResult[41] = tmp51;
                      const tmp61 = closure_7(tmp(6697).ActionSheetRow.Group, obj10);
                      class M {
                        constructor() {
                          const obj = { roleFilter: !roleFilter };
                          return closure_2(obj);
                        }
                      }
                      tmp59 = tmp61;
                    }
                    class L {
                      constructor() {
                        const obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    if (isForLaterExperimentOn) {
                      const obj11 = {
                        icon: closure_6(Icon4, obj12),
                        label: intl5.string(tmp(1126).t.aUXxzT),
                        onPress() {
                          return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
                        },
                        arrow: true,
                      };
                      class L {
                        constructor() {
                          const obj = { everyoneFilter: !everyoneFilter };
                          return closure_2(obj);
                        }
                      }
                      obj12 = { IconComponent: tmp(4849).ClockIcon };
                      Icon4 = tmp(6697).ActionSheetRow.Icon;
                      intl5 = tmp(1126).intl;
                      tmp48 = closure_6(tmp50, obj11, "reminders");
                    }
                    cResult[33] = isForLaterExperimentOn;
                    cResult[34] = tmp11;
                    cResult[35] = tmp48;
                    tmp47 = tmp48;
                  }
                  class L {
                    constructor() {
                      const obj = { everyoneFilter: !everyoneFilter };
                      return closure_2(obj);
                    }
                  }
                  if (isForLaterExperimentOn) {
                    const obj13 = {
                      icon: closure_6(Icon3, obj14),
                      label: intl4.string(tmp(1126).t["2pAkDA"]),
                      onPress() {
                        return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
                      },
                      arrow: true,
                    };
                    class L {
                      constructor() {
                        const obj = { everyoneFilter: !everyoneFilter };
                        return closure_2(obj);
                      }
                    }
                    obj14 = { IconComponent: tmp(11337).BookmarkIcon };
                    Icon3 = tmp(6697).ActionSheetRow.Icon;
                    intl4 = tmp(1126).intl;
                    tmp44 = closure_6(tmp46, obj13, "bookmarks");
                  }
                  cResult[30] = isForLaterExperimentOn;
                  cResult[31] = tmp11;
                  cResult[32] = tmp44;
                  tmp43 = tmp44;
                }
                class L {
                  constructor() {
                    const obj = { everyoneFilter: !everyoneFilter };
                    return closure_2(obj);
                  }
                }
                const obj15 = { hasIcons: true, children: items3 };
                items3 = [tmp25, tmp38];
                const tmp42 = closure_7(tmp(6697).ActionSheetRow.Group, obj15);
                cResult[27] = tmp25;
                cResult[28] = tmp38;
                cResult[29] = tmp42;
                tmp41 = tmp42;
              }
              const obj16 = { onValueChange: tmp28, value: everyoneFilter, label: tmp30, subLabel: tmp31, icon: tmp32 };
              const tmp40 = closure_6(tmp(6697).ActionSheetSwitchRow, obj16);
              cResult[24] = everyoneFilter;
              cResult[25] = tmp28;
              cResult[26] = tmp40;
              tmp38 = tmp40;
            }
            class L {
              constructor() {
                const obj = { everyoneFilter: !everyoneFilter };
                return closure_2(obj);
              }
            }
            cResult[18] = everyoneFilter;
            cResult[19] = tmp8;
            cResult[20] = L;
            tmp28 = L;
          }
          const obj17 = { onValueChange: tmp18, value: roleFilter, label: tmp19, icon: tmp20 };
          const tmp27 = closure_6(tmp(6697).ActionSheetSwitchRow, obj17);
          cResult[15] = roleFilter;
          cResult[16] = tmp18;
          cResult[17] = tmp27;
          tmp25 = tmp27;
        }
        class M {
          constructor() {
            const obj = { roleFilter: !roleFilter };
            return closure_2(obj);
          }
        }
        cResult[10] = roleFilter;
        cResult[11] = tmp8;
        cResult[12] = M;
        tmp18 = M;
      }
      const fn2 = function h(arg0) {
        const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
        const obj = { roleFilter, everyoneFilter };
        MentionActionCreatorsDefault;
        const merged = Object.assign(arg0);
        setGuildFilter(obj);
      };
      cResult[2] = everyoneFilter;
      cResult[4] = fn2;
      tmp8 = fn2;
    }
  : () => {
      let BottomSheetTitleHeader;
      let Icon;
      let Icon2;
      let Icon3;
      let Icon4;
      let Icon5;
      let Icon6;
      let closure_2;
      let hasForLaterAccess;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items3;
      let items4;
      let obj11;
      let obj13;
      let obj15;
      let obj17;
      let obj20;
      let obj6;
      let obj9;
      let roleFilter;
      const tmp = roleFilter;
      let obj = roleFilter(504);
      let items = [closure_4];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
        everyoneFilter: closure_4.everyoneFilter,
        roleFilter: closure_4.roleFilter,
      }));
      roleFilter = stateFromStoresObject.roleFilter;
      const everyoneFilter = stateFromStoresObject.everyoneFilter;
      const items1 = [everyoneFilter, roleFilter];
      dependencyMap = hasForLaterAccess.useCallback((arg0) => {
        const setGuildFilter = MentionActionCreatorsDefault.setGuildFilter;
        const obj = { roleFilter, everyoneFilter };
        MentionActionCreatorsDefault;
        const merged = Object.assign(arg0);
        setGuildFilter(obj);
      }, items1);
      let obj2 = roleFilter(7485);
      const isForLaterExperimentOn = obj2.useIsForLaterExperimentOn("NotificationCenterActionSheet");
      let obj3 = roleFilter(7485);
      hasForLaterAccess = obj3.useHasForLaterAccess("NotificationCenterActionSheet");
      const items2 = [hasForLaterAccess];
      closure_4 = hasForLaterAccess.useCallback((BOOKMARK) => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (hasForLaterAccess) {
          const obj2 = showForLaterModal;
          obj2.showForLaterModal(BOOKMARK);
        } else {
          const tmpResult = openPremiumUpsellActionSheetDefault;
          const SAVED_MESSAGES = EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES;
          const items = [AnalyticsLocationDefault.FOR_LATER_ROADBLOCK];
          tmpResult(SAVED_MESSAGES, undefined, items);
        }
      }, items2);
      const obj4 = roleFilter(7475);
      const canUseScheduledMessages = obj4.useCanUseScheduledMessages();
      const callback = hasForLaterAccess.useCallback(() => {
        const obj = everyoneFilter(closure_2[9]);
        obj.hideActionSheet();
        const obj2 = roleFilter(closure_2[15]);
        const result = obj2.showScheduledMessagesModal();
      }, []);
      const callback1 = hasForLaterAccess.useCallback(() => {
        const obj = everyoneFilter(closure_2[9]);
        obj.hideActionSheet();
        const obj2 = roleFilter(closure_2[16]);
        const obj3 = { screen: constants.NOTIFICATIONS };
        obj2.openUserSettings(obj3);
      }, []);
      const obj5 = { showGradient: true, header: closure_6(BottomSheetTitleHeader, obj6), children: items4 };
      const ActionSheet = roleFilter(6701).ActionSheet;
      obj6 = { title: intl.string(roleFilter(1126).t.HcoRu0) };
      BottomSheetTitleHeader = roleFilter(6644).BottomSheetTitleHeader;
      intl = roleFilter(1126).intl;
      const obj7 = { hasIcons: true, children: items3 };
      const Group = roleFilter(6697).ActionSheetRow.Group;
      const obj8 = {
        onValueChange() {
          const obj = { roleFilter: !roleFilter };
          return closure_2(obj);
        },
        value: roleFilter,
        label: intl2.string(roleFilter(1126).t.asInft),
        icon: closure_6(Icon, obj9),
      };
      const ActionSheetSwitchRow = roleFilter(6697).ActionSheetSwitchRow;
      intl2 = roleFilter(1126).intl;
      obj9 = { IconComponent: roleFilter(5874).AtIcon, source: everyoneFilter(12064) };
      Icon = roleFilter(6697).ActionSheetRow.Icon;
      items3 = [closure_6(ActionSheetSwitchRow, obj8)];
      const obj10 = {
        onValueChange() {
          const obj = { everyoneFilter: !everyoneFilter };
          return closure_2(obj);
        },
        value: everyoneFilter,
        label: intl3.string(roleFilter(1126).t.S9GLtt),
        subLabel: intl4.string(roleFilter(1126).t.jYgZa4),
        icon: closure_6(Icon2, obj11),
      };
      const ActionSheetSwitchRow2 = roleFilter(6697).ActionSheetSwitchRow;
      intl3 = roleFilter(1126).intl;
      intl4 = roleFilter(1126).intl;
      obj11 = { IconComponent: roleFilter(9266).BellIcon, source: everyoneFilter(16351) };
      Icon2 = roleFilter(6697).ActionSheetRow.Icon;
      items3[1] = closure_6(ActionSheetSwitchRow2, obj10);
      items4 = [closure_7(Group, obj7)];
      let tmp10Result = null;
      const Group2 = roleFilter(6697).ActionSheetRow.Group;
      if (isForLaterExperimentOn) {
        const obj12 = {
          icon: closure_6(Icon3, obj13),
          label: intl5.string(tmp(1126).t["2pAkDA"]),
          onPress() {
            return closure_4(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
          },
          arrow: true,
        };
        const ActionSheetRow = tmp(6697).ActionSheetRow;
        obj13 = { IconComponent: tmp(11337).BookmarkIcon };
        Icon3 = tmp(6697).ActionSheetRow.Icon;
        intl5 = tmp(1126).intl;
        tmp10Result = closure_6(ActionSheetRow, obj12, "bookmarks");
      }
      const items5 = [tmp10Result, , ,];
      let tmp10Result3 = null;
      if (isForLaterExperimentOn) {
        const obj14 = {
          icon: closure_6(Icon4, obj15),
          label: intl6.string(tmp(1126).t.aUXxzT),
          onPress() {
            return closure_4(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
          },
          arrow: true,
        };
        const ActionSheetRow2 = tmp(6697).ActionSheetRow;
        obj15 = { IconComponent: tmp(4849).ClockIcon };
        Icon4 = tmp(6697).ActionSheetRow.Icon;
        intl6 = tmp(1126).intl;
        tmp10Result3 = closure_6(ActionSheetRow2, obj14, "reminders");
      }
      items5[1] = tmp10Result3;
      let tmp10Result4 = null;
      if (canUseScheduledMessages) {
        const obj16 = {
          icon: closure_6(Icon5, obj17),
          label: intl7.string(tmp(1126).t.SZVs3K),
          onPress: callback,
          arrow: true,
        };
        const ActionSheetRow3 = tmp(6697).ActionSheetRow;
        obj17 = { IconComponent: tmp(11838).CalendarPlusIcon };
        Icon5 = tmp(6697).ActionSheetRow.Icon;
        intl7 = tmp(1126).intl;
        tmp10Result4 = closure_6(ActionSheetRow3, obj16, "scheduled-messages");
      }
      const obj18 = { hasIcons: true, children: items5 };
      items5[2] = tmp10Result4;
      const obj19 = {
        icon: closure_6(Icon6, obj20),
        label: intl8.string(tmp(1126).t.h850Ss),
        onPress: callback1,
        arrow: true,
      };
      const ActionSheetRow4 = tmp(6697).ActionSheetRow;
      obj20 = { IconComponent: tmp(6883).SettingsIcon };
      Icon6 = tmp(6697).ActionSheetRow.Icon;
      intl8 = tmp(1126).intl;
      items5[3] = closure_6(ActionSheetRow4, obj19, "settings");
      items4[1] = closure_7(Group2, obj18);
      return closure_7(ActionSheet, obj5);
    };
let result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterActionSheet.tsx");

export default tmp3;
