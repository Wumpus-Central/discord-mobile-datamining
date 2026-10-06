// === Module 12027: UpcomingEventsLongPressActionSheet ===

// Module 12027 (UpcomingEventsLongPressActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6612 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6616 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6621 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ headerIcon: { marginRight: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let intl;
  let tmp7;
  let tmp9;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(35);
  guildId = guildId.guildId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function _() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserGuildSettingsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    class F {
      constructor() {
        return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
      }
    }
    cResult[4] = guildId;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, F);
  if (cResult[6] !== stateFromStores) {
    class F {
      constructor() {
        return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
      }
    }
    let obj2 = { guild: stateFromStores, size: tmp(5978).GuildIconSizes.LARGE };
    const tmp15 = stateFromStores1(5978);
    cResult[6] = stateFromStores;
    cResult[7] = closure_7(tmp15, obj2);
    const tmp16 = closure_7(tmp15, obj2);
  } else {
    class F {
      constructor() {
        return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
      }
    }
  }
  if (cResult[8] === tmp4.headerIcon) {
    let tmp19;
    let tmp23;
    let tmp26;
    class F {
      constructor() {
        return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const stringResult = obj6.string(tmp(1126).t.tlopTM);
      cResult[11] = stringResult;
      tmp19 = stringResult;
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[12] !== tmp17) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj3 = { leading: tmp17, title: tmp19 };
      cResult[12] = tmp17;
      cResult[13] = closure_7(tmp(6651).BottomSheetTitleHeader, obj3);
      const tmp22 = closure_7(tmp(6651).BottomSheetTitleHeader, obj3);
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj4 = { source: stateFromStores1(12028) };
      const Icon = tmp(1188).Icon;
      const tmp25 = closure_7(Icon, obj4);
      cResult[14] = tmp25;
      tmp23 = tmp25;
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj5 = { text: intl.string(tmp(1126).t.e6RscS) };
      const FormLabel = tmp(8924).FormLabel;
      intl = tmp(1126).intl;
      const tmp27 = closure_7(FormLabel, obj5);
      cResult[15] = tmp27;
      tmp26 = tmp27;
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[16] !== guildId) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj7 = {
        leading: tmp23,
        label: tmp26,
        onPress() {
              const obj = ReadStateActionCreators;
              obj.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet();
            }
      };
      cResult[16] = guildId;
      cResult[17] = closure_7(tmp(8924).FormRow, obj7);
      const tmp29 = closure_7(tmp(8924).FormRow, obj7);
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    const tmp30 = stateFromStores1(stateFromStores1 ? 12029 : 12030);
    if (cResult[18] !== tmp30) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj8 = { source: tmp30 };
      cResult[18] = tmp30;
      cResult[19] = closure_7(tmp(1188).Icon, obj8);
      const tmp32 = closure_7(tmp(1188).Icon, obj8);
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[20] !== stateFromStores1) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const string = tmp34.string;
      const t = tmp(1126).t;
      if (stateFromStores1) {
        class F {
          constructor() {
            return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
          }
        }
      } else {
        class F {
          constructor() {
            return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
          }
        }
      }
      cResult[20] = stateFromStores1;
      cResult[21] = tmp35;
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[22] !== tmp35) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      const obj9 = { text: tmp35 };
      cResult[22] = tmp35;
      cResult[23] = closure_7(tmp(8924).FormLabel, obj9);
      const tmp37 = closure_7(tmp(8924).FormLabel, obj9);
    } else {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
    }
    if (cResult[24] === guildId) {
      class F {
        constructor() {
          return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
        }
      }
      if (cResult[27] === tmp31) {
        class F {
          constructor() {
            return UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId);
          }
        }
      }
      const obj10 = { leading: tmp31, label: tmp36, onPress: tmp38 };
      cResult[27] = tmp31;
      cResult[28] = tmp36;
      cResult[29] = tmp38;
      cResult[30] = closure_7(tmp(8924).FormRow, obj10);
      const tmp41 = closure_7(tmp(8924).FormRow, obj10);
    }
    const fn2 = function w() {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const obj = { mute_scheduled_events: !stateFromStores1 };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
    };
    cResult[24] = guildId;
    cResult[25] = stateFromStores1;
    cResult[26] = fn2;
  }
  const obj11 = { style: tmp4.headerIcon, children: tmp13 };
  cResult[8] = tmp4.headerIcon;
  cResult[9] = tmp13;
  cResult[10] = closure_7(View, obj11);
  const tmp18 = closure_7(View, obj11);
}) : ((guildId) => {
  let FormLabel;
  let FormLabel2;
  let Icon;
  let Icon2;
  let intl;
  let intl2;
  let obj10;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let stringResult;
  let tmp9;
  guildId = guildId.guildId;
  const tmp = closure_9();
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.isMuteScheduledEventsEnabled(guildId));
  const ActionSheet = guildId(6708).ActionSheet;
  const obj3 = { leading: closure_7(View, obj4), title: intl.string(guildId(1126).t.tlopTM) };
  obj4 = { style: tmp.headerIcon, children: closure_7(tmp9, obj5) };
  const BottomSheetTitleHeader = guildId(6651).BottomSheetTitleHeader;
  obj5 = { guild: stateFromStores, size: guildId(5978).GuildIconSizes.LARGE };
  tmp9 = stateFromStores1(5978);
  intl = guildId(1126).intl;
  const items2 = [closure_7(BottomSheetTitleHeader, obj3), , ];
  const obj6 = {
    leading: closure_7(Icon, obj7),
    label: closure_7(FormLabel, obj8),
    onPress() {
      const obj = ReadStateActionCreators;
      obj.ackGuildFeature(guildId, ReadStateTypes.GUILD_EVENT);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  const FormRow = guildId(8924).FormRow;
  obj7 = { source: stateFromStores1(12028) };
  Icon = guildId(1188).Icon;
  obj8 = { text: intl2.string(guildId(1126).t.e6RscS) };
  FormLabel = guildId(8924).FormLabel;
  intl2 = guildId(1126).intl;
  items2[1] = closure_7(FormRow, obj6);
  const FormRow2 = guildId(8924).FormRow;
  const obj9 = {
    leading: closure_7(Icon2, obj10),
    label: closure_7(FormLabel2, { text: stringResult }),
    onPress() {
      const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
      const obj = { mute_scheduled_events: !stateFromStores1 };
      NotificationSettingsModalActionCreatorsDefault;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.mutedEvents(!stateFromStores1));
    }
  };
  obj10 = { source: stateFromStores1(stateFromStores1 ? 12029 : 12030) };
  Icon2 = guildId(1188).Icon;
  FormLabel2 = tmp2(8924).FormLabel;
  const intl3 = tmp2(1126).intl;
  const string = intl3.string;
  const t = tmp2(1126).t;
  const tmp8 = stateFromStores1;
  if (tmp8) {
    stringResult = string(t.COiLo0);
  } else {
    stringResult = string(t.ONG3Yz);
  }
  const obj11 = { children: items2 };
  items2[2] = closure_7(FormRow2, obj9);
  return closure_8(ActionSheet, obj11);
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/UpcomingEventsLongPressActionSheet.tsx");

export default tmp4;