// === Module 11310: GuildRaidLockdownFeedbackActionSheet ===

// Module 11310 (GuildRaidLockdownFeedbackActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let closure_8 = createStyles.createStyles({ container: { display: "flex", gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default function GuildRaidLockdownFeedbackActionSheet(guildId) {
  guildId = guildId.guildId;
  let first1;
  noop = undefined;
  const tmp2 = first1(noop.useState([]), 2);
  const raid_lockdown_feedback_type = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = first1(noop.useState(), 2);
  first1 = tmp3[0];
  noop = tmp3[1];
  let obj = { text: null, value: null };
  const intl = guildId(1115).intl;
  obj.text = intl.string(guildId(1115).t["//3pvi"]);
  obj.value = guildId(6938).RaidLockdownFeedbackType.DM_SPAM;
  let items = [obj, , , , , ];
  let obj2 = { text: null, value: null };
  const intl2 = guildId(1115).intl;
  obj2.text = intl2.string(guildId(1115).t.SdVsip);
  obj2.value = guildId(6938).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj2;
  const obj3 = { text: null, value: null };
  const intl3 = guildId(1115).intl;
  obj3.text = intl3.string(guildId(1115).t.uTiSVL);
  obj3.value = guildId(6938).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj3;
  const obj4 = { text: null, value: null };
  const intl4 = guildId(1115).intl;
  obj4.text = intl4.string(guildId(1115).t.GQczU8);
  obj4.value = guildId(6938).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj4;
  const obj5 = { text: null, value: null };
  const intl5 = guildId(1115).intl;
  obj5.text = intl5.string(guildId(1115).t.AAgqy3);
  obj5.value = guildId(6938).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj5;
  const obj6 = { text: null, value: null };
  const intl6 = guildId(1115).intl;
  obj6.text = intl6.string(guildId(1115).t.ryPKb7);
  obj6.value = guildId(6938).RaidLockdownFeedbackType.OTHER;
  items[5] = obj6;
  const obj7 = { startExpanded: true, header: null, children: null };
  const obj8 = { title: null };
  const intl7 = guildId(1115).intl;
  obj8.title = intl7.string(guildId(1115).t.f5hd9P);
  obj7.header = closure_6(guildId(6570).BottomSheetTitleHeader, obj8);
  const obj9 = { style: closure_8().container, children: null };
  const tmp = closure_8();
  const tmp9 = raid_lockdown_feedback_type(5890);
  const items1 = [
    closure_6(guildId(5999).TableRowGroup, {
      hasIcons: false,
      children: items.map((label) => {
        value = label.value;
        guildId = value;
        return closure_1_6(guildId(closure_2[12]).TableCheckboxRow, {
          onPress() {
            closure_0 = value;
            closure_2(first.includes(value) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
              return items;
            }));
          },
          checked: first.includes(value),
          label: label.text
        }, value);
      })
    }),
  ,

  ];
  let hasItem = raid_lockdown_feedback_type.includes(guildId(6938).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj11 = { autoComplete: "off", value: first1, placeholder: null, onChange: null };
    const intl8 = tmp5(1115).intl;
    obj11.placeholder = intl8.string(tmp5(1115).t["PAM+JR"]);
    obj11.onChange = function onChange(arg0) {
      closure_4(arg0);
    };
    hasItem = closure_6(tmp5(6506).TextArea, obj11);
  }
  items1[1] = hasItem;
  const obj12 = {
    onPress() {
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId });
      const obj2 = { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: null
  };
  const intl9 = tmp5(1115).intl;
  obj12.text = intl9.string(guildId(1115).t.nAt0rE);
  items1[2] = closure_6(guildId(5281).Button, obj12);
  obj9.children = items1;
  obj7.children = closure_7(tmp9, obj9);
  return closure_6(guildId(6618).ActionSheet, obj7);
};