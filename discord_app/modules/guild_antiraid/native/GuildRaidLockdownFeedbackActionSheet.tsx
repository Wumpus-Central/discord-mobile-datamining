// === Module 11392: GuildRaidLockdownFeedbackActionSheet ===

// Module 11392 (GuildRaidLockdownFeedbackActionSheet)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { display: "flex", gap: 24 } });
const result = require("set").fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default function GuildRaidLockdownFeedbackActionSheet(guildId) {
  guildId = guildId.guildId;
  let first;
  dependencyMap = undefined;
  let first1;
  let React;
  const tmp2 = first1(React.useState([]), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = first1(React.useState(), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  let obj = { text: null, value: null };
  const intl = guildId(1236).intl;
  obj[0] = intl.string(guildId(1236).t["//3pvi"]);
  obj[1] = guildId(7124).RaidLockdownFeedbackType.DM_SPAM;
  let items = [obj, , , , , ];
  obj = { text: null, value: null };
  const intl2 = guildId(1236).intl;
  obj[0] = intl2.string(guildId(1236).t.SdVsip);
  obj[1] = guildId(7124).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj;
  obj1 = { text: null, value: null };
  const intl3 = guildId(1236).intl;
  obj1[0] = intl3.string(guildId(1236).t.uTiSVL);
  obj1[1] = guildId(7124).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj1;
  const obj2 = { text: null, value: null };
  const intl4 = guildId(1236).intl;
  obj2[0] = intl4.string(guildId(1236).t.GQczU8);
  obj2[1] = guildId(7124).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj2;
  const obj3 = { text: null, value: null };
  const intl5 = guildId(1236).intl;
  obj3[0] = intl5.string(guildId(1236).t.AAgqy3);
  obj3[1] = guildId(7124).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj3;
  const obj4 = { text: null, value: null };
  const intl6 = guildId(1236).intl;
  obj4[0] = intl6.string(guildId(1236).t.ryPKb7);
  obj4[1] = guildId(7124).RaidLockdownFeedbackType.OTHER;
  items[5] = obj4;
  const obj5 = { startExpanded: true, header: null, children: null };
  const obj6 = { title: null };
  const intl7 = guildId(1236).intl;
  obj6[0] = intl7.string(guildId(1236).t.f5hd9P);
  obj5[1] = callback(guildId(5502).BottomSheetTitleHeader, obj6);
  const obj7 = { style: callback2().container, children: null };
  const tmp = callback2();
  const tmp8 = closure_7;
  const tmp9 = first(5930);
  const items1 = [
    callback(guildId(5873).TableRowGroup, {
      hasIcons: false,
      children: items.map((label) => {
        const value = label.value;
        guildId = value;
        return closure_1_6(guildId(8605).TableCheckboxRow, {
          onPress() {
            closure_1_2(closure_1_1.includes(closure_0) ? ((arr) => arr.filter((arg0) => arg0 !== closure_0)) : ((arg0) => {
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
  let hasItem = first.includes(guildId(7124).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj9 = { autoComplete: "off", value: null, placeholder: null, onChange: null };
    obj9[1] = first1;
    const intl8 = tmp5(1236).intl;
    obj9[2] = intl8.string(tmp5(1236).t["PAM+JR"]);
    obj9[3] = function onChange(arg0) {
      callback(arg0);
    };
    hasItem = tmp7(tmp5(8127).TextArea, obj9);
  }
  items1[1] = hasItem;
  const obj10 = {
    onPress() {
      let obj = guildId(4588);
      obj = { raid_lockdown_feedback_type: first, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(closure_1_5.GUILD_RAID_LOCKDOWN_FEEDBACK, obj);
      first(4347).hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: null
  };
  const intl9 = tmp5(1236).intl;
  obj10[1] = intl9.string(guildId(1236).t.nAt0rE);
  items1[2] = callback(guildId(4815).Button, obj10);
  obj7[1] = items1;
  obj5[2] = tmp8(tmp9, obj7);
  return callback(guildId(5870).ActionSheet, obj5);
};