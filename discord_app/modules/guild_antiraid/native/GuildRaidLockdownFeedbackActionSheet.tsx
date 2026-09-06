// discord_app/modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
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
  const intl = guildId(1114).intl;
  obj.text = intl.string(guildId(1114).t["//3pvi"]);
  obj.value = guildId(7518).RaidLockdownFeedbackType.DM_SPAM;
  let items = [obj, , , , ,];
  obj = { text: null, value: null };
  const intl2 = guildId(1114).intl;
  obj.text = intl2.string(guildId(1114).t.SdVsip);
  obj.value = guildId(7518).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj;
  const obj1 = { text: null, value: null };
  const intl3 = guildId(1114).intl;
  obj1.text = intl3.string(guildId(1114).t.uTiSVL);
  obj1.value = guildId(7518).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj1;
  const obj2 = { text: null, value: null };
  const intl4 = guildId(1114).intl;
  obj2.text = intl4.string(guildId(1114).t.GQczU8);
  obj2.value = guildId(7518).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj2;
  const obj3 = { text: null, value: null };
  const intl5 = guildId(1114).intl;
  obj3.text = intl5.string(guildId(1114).t.AAgqy3);
  obj3.value = guildId(7518).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj3;
  const obj4 = { text: null, value: null };
  const intl6 = guildId(1114).intl;
  obj4.text = intl6.string(guildId(1114).t.ryPKb7);
  obj4.value = guildId(7518).RaidLockdownFeedbackType.OTHER;
  items[5] = obj4;
  const obj5 = { startExpanded: true, header: null, children: null };
  const obj6 = { title: null };
  const intl7 = guildId(1114).intl;
  obj6.title = intl7.string(guildId(1114).t.f5hd9P);
  obj5.header = closure_6(guildId(7149).BottomSheetTitleHeader, obj6);
  const obj7 = { style: closure_8().container, children: null };
  const tmp = closure_8();
  const tmp9 = raid_lockdown_feedback_type(5578);
  const items1 = [
    closure_6(guildId(5687).TableRowGroup, {
      hasIcons: false,
      children: items.map((label) => {
        value = label.value;
        guildId = value;
        return closure_1_6(
          guildId(closure_2[12]).TableCheckboxRow,
          {
            onPress() {
              closure_0 = value;
              closure_2(
                first.includes(value)
                  ? (arr) => arr.filter((item) => item !== closure_1_0)
                  : (arg0) => {
                      const items = [];
                      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
                      return items;
                    },
              );
            },
            checked: first.includes(value),
            label: label.text,
          },
          value,
        );
      }),
    }),
    ,
  ];
  let hasItem = raid_lockdown_feedback_type.includes(guildId(7518).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj9 = { autoComplete: "off", value: first1, placeholder: null, onChange: null };
    const intl8 = tmp5(1114).intl;
    obj9.placeholder = intl8.string(tmp5(1114).t["PAM+JR"]);
    obj9.onChange = function onChange(arg0) {
      closure_4(arg0);
    };
    hasItem = closure_6(tmp5(7085).TextArea, obj9);
  }
  items1[1] = hasItem;
  const obj10 = {
    onPress() {
      const obj = { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, obj);
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: null,
  };
  const intl9 = tmp5(1114).intl;
  obj10.text = intl9.string(guildId(1114).t.nAt0rE);
  items1[2] = closure_6(guildId(4975).Button, obj10);
  obj7.children = items1;
  obj5.children = closure_7(tmp9, obj7);
  return closure_6(guildId(7198).ActionSheet, obj5);
}
