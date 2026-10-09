// === Module 11346: GuildRaidLockdownFeedbackActionSheet ===

// Module 11346 (GuildRaidLockdownFeedbackActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({ container: { display: "flex", gap: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRaidLockdownFeedbackActionSheet(guildId) {
  const cResult = guildId(576).c(44);
  guildId = guildId.guildId;
  let container = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let num2 = 2;
  const tmp5 = first2(noop.useState(first), 2);
  const first1 = tmp5[0];
  dependencyMap = tmp5[1];
  const tmp6 = first2(noop.useState(), 2);
  first2 = tmp6[0];
  noop = tmp6[1];
  if (cResult[1] === guildId) {
    if (cResult[2] === first1) {
      if (cResult[3] === first2) {
        if (cResult[4] === container.container) {
          if (cResult[22] === cResult[5]) {
            if (cResult[23] === tmp13) {
              if (cResult[24] === tmp14) {
                let tmp35 = cResult[25];
              }
              if (cResult[26] === tmp12) {
                if (cResult[27] === first1) {
                  if (cResult[28] === first2) {
                    let tmp38 = cResult[29];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl9 = tmp(1126).intl;
                    const stringResult = intl9.string(tmp(1126).t.nAt0rE);
                    cResult[30] = stringResult;
                    let tmp41 = stringResult;
                  } else {
                    tmp41 = cResult[30];
                  }
                  if (cResult[31] !== tmp11) {
                    const obj2 = { onPress: tmp11, text: tmp41 };
                    const tmp45 = closure_6(tmp(5376).Button, obj2);
                    cResult[31] = tmp11;
                    cResult[32] = tmp45;
                    let tmp43 = tmp45;
                  } else {
                    tmp43 = cResult[32];
                  }
                  if (cResult[33] === tmp9) {
                    if (cResult[34] === tmp43) {
                      if (cResult[35] === tmp15) {
                        if (cResult[36] === tmp35) {
                          if (cResult[37] === tmp38) {
                            let tmp46 = cResult[38];
                          }
                          if (cResult[39] === tmp10) {
                            if (cResult[40] === tmp46) {
                              if (cResult[41] === tmp16) {
                                if (cResult[42] === tmp17) {
                                  let tmp49 = cResult[43];
                                }
                                return tmp49;
                              }
                            }
                          }
                          const obj3 = { startExpanded: tmp16, header: tmp17, children: tmp46 };
                          const tmp51 = closure_6(tmp10, obj3);
                          cResult[39] = tmp10;
                          cResult[40] = tmp46;
                          cResult[41] = tmp16;
                          cResult[42] = tmp17;
                          cResult[43] = tmp51;
                          tmp49 = tmp51;
                        }
                      }
                    }
                  }
                  const obj4 = { style: tmp15, children: null };
                  const items1 = [tmp35, tmp38, tmp43];
                  obj4.children = items1;
                  const tmp48 = closure_7(tmp9, obj4);
                  cResult[33] = tmp9;
                  cResult[34] = tmp43;
                  cResult[35] = tmp15;
                  cResult[36] = tmp35;
                  cResult[37] = tmp38;
                  cResult[38] = tmp48;
                  tmp46 = tmp48;
                }
              }
              let hasItem = first1.includes(tmp(7233).RaidLockdownFeedbackType.OTHER);
              if (hasItem) {
                const obj5 = { autoComplete: "off", value: first2, placeholder: null, onChange: null };
                const intl8 = tmp(1126).intl;
                obj5.placeholder = intl8.string(tmp(1126).t["PAM+JR"]);
                obj5.onChange = tmp12;
                hasItem = closure_6(tmp(6770).TextArea, obj5);
              }
              cResult[26] = tmp12;
              cResult[27] = first1;
              cResult[28] = first2;
              cResult[29] = hasItem;
              tmp38 = hasItem;
            }
          }
          const obj6 = { hasIcons: cResult[10], children: cResult[11] };
          const tmp37 = closure_6(cResult[5], obj6);
          cResult[22] = cResult[5];
          cResult[23] = cResult[10];
          cResult[24] = cResult[11];
          cResult[25] = tmp37;
          tmp35 = tmp37;
        }
      }
    }
  }
  const obj7 = { text: null, value: null };
  const intl = tmp(1126).intl;
  obj7.text = intl.string(guildId(1126).t["//3pvi"]);
  obj7.value = guildId(7233).RaidLockdownFeedbackType.DM_SPAM;
  const items2 = [obj7, , , , , ];
  const obj8 = { text: null, value: null };
  const intl2 = tmp(1126).intl;
  obj8.text = intl2.string(guildId(1126).t.SdVsip);
  obj8.value = guildId(7233).RaidLockdownFeedbackType.MENTION_SPAM;
  items2[1] = obj8;
  const obj9 = { text: null, value: null };
  const intl3 = tmp(1126).intl;
  obj9.text = intl3.string(guildId(1126).t.uTiSVL);
  obj9.value = guildId(7233).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items2[2] = obj9;
  const obj10 = { text: null, value: null };
  const intl4 = tmp(1126).intl;
  obj10.text = intl4.string(guildId(1126).t.GQczU8);
  obj10.value = guildId(7233).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items2[3] = obj10;
  const obj11 = { text: null, value: null };
  const intl5 = tmp(1126).intl;
  obj11.text = intl5.string(guildId(1126).t.AAgqy3);
  obj11.value = guildId(7233).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items2[4] = obj11;
  const obj12 = { text: null, value: null };
  const intl6 = tmp(1126).intl;
  obj12.text = intl6.string(guildId(1126).t.ryPKb7);
  obj12.value = guildId(7233).RaidLockdownFeedbackType.OTHER;
  items2[5] = obj12;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    function handleTextInputChange(arg0) {
      closure_4(arg0);
    }
    cResult[15] = handleTextInputChange;
    let tmp18 = handleTextInputChange;
  } else {
    tmp18 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    function handleClose() {
      first1(5055).hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    }
    cResult[16] = handleClose;
    let tmp19 = handleClose;
  } else {
    tmp19 = cResult[16];
  }
  closure_5 = tmp19;
  if (cResult[17] === guildId) {
    if (cResult[18] === first1) {
      if (cResult[19] === first2) {
        let tmp20 = cResult[20];
      }
      const ActionSheet = tmp(6892).ActionSheet;
      const _Symbol = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = { title: null };
        const intl7 = tmp(1126).intl;
        obj13.title = intl7.string(tmp(1126).t.f5hd9P);
        const tmp23 = closure_6(tmp(6835).BottomSheetTitleHeader, obj13);
        cResult[21] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[21];
      }
      const tmp25 = first1(6727);
      const container2 = container.container;
      const TableRowGroup = tmp(6269).TableRowGroup;
      const mapped = items2.map((label) => {
        value = label.value;
        guildId = value;
        return closure_1_6(guildId(6183).TableCheckboxRow, {
          onPress() {
            closure_0 = value;
            closure_2(first1.includes(value) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
              return items;
            }));
          },
          checked: first1.includes(value),
          label: label.text
        }, value);
      });
      cResult[1] = guildId;
      cResult[num2] = first1;
      cResult[3] = first2;
      container = container.container;
      cResult[4] = container;
      cResult[5] = TableRowGroup;
      cResult[6] = tmp25;
      cResult[7] = ActionSheet;
      cResult[8] = tmp20;
      cResult[9] = tmp18;
      cResult[10] = false;
      cResult[11] = mapped;
      cResult[12] = container2;
      cResult[13] = true;
      num2 = 14;
      cResult[14] = tmp21;
    }
  }
  function handleSubmit() {
    AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, { raid_lockdown_feedback_type: first1, raid_lockdown_feedback_other_reason: first2, guild_id: guildId });
    closure_5();
  }
  cResult[17] = guildId;
  cResult[18] = first1;
  cResult[19] = first2;
  cResult[20] = handleSubmit;
  tmp20 = handleSubmit;
  const obj = guildId(576);
}) : (function GuildRaidLockdownFeedbackActionSheet(guildId) {
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
  const intl = guildId(1126).intl;
  obj.text = intl.string(guildId(1126).t["//3pvi"]);
  obj.value = guildId(7233).RaidLockdownFeedbackType.DM_SPAM;
  let items = [obj, , , , , ];
  let obj2 = { text: null, value: null };
  const intl2 = guildId(1126).intl;
  obj2.text = intl2.string(guildId(1126).t.SdVsip);
  obj2.value = guildId(7233).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj2;
  const obj3 = { text: null, value: null };
  const intl3 = guildId(1126).intl;
  obj3.text = intl3.string(guildId(1126).t.uTiSVL);
  obj3.value = guildId(7233).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj3;
  const obj4 = { text: null, value: null };
  const intl4 = guildId(1126).intl;
  obj4.text = intl4.string(guildId(1126).t.GQczU8);
  obj4.value = guildId(7233).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj4;
  const obj5 = { text: null, value: null };
  const intl5 = guildId(1126).intl;
  obj5.text = intl5.string(guildId(1126).t.AAgqy3);
  obj5.value = guildId(7233).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj5;
  const obj6 = { text: null, value: null };
  const intl6 = guildId(1126).intl;
  obj6.text = intl6.string(guildId(1126).t.ryPKb7);
  obj6.value = guildId(7233).RaidLockdownFeedbackType.OTHER;
  items[5] = obj6;
  const obj7 = { startExpanded: true, header: null, children: null };
  const obj8 = { title: null };
  const intl7 = guildId(1126).intl;
  obj8.title = intl7.string(guildId(1126).t.f5hd9P);
  obj7.header = closure_6(guildId(6835).BottomSheetTitleHeader, obj8);
  const obj9 = { style: closure_8().container, children: null };
  const tmp = closure_8();
  const tmp9 = raid_lockdown_feedback_type(6727);
  const items1 = [
    closure_6(guildId(6269).TableRowGroup, {
      hasIcons: false,
      children: items.map((label) => {
        value = label.value;
        guildId = value;
        return closure_1_6(guildId(closure_2[15]).TableCheckboxRow, {
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
  let hasItem = raid_lockdown_feedback_type.includes(guildId(7233).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj11 = { autoComplete: "off", value: first1, placeholder: null, onChange: null };
    const intl8 = tmp5(1126).intl;
    obj11.placeholder = intl8.string(tmp5(1126).t["PAM+JR"]);
    obj11.onChange = function handleTextInputChange(arg0) {
      closure_4(arg0);
    };
    hasItem = closure_6(tmp5(6770).TextArea, obj11);
  }
  items1[1] = hasItem;
  const obj12 = {
    onPress: function handleSubmit() {
      AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId });
      const obj2 = { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: null
  };
  const intl9 = tmp5(1126).intl;
  obj12.text = intl9.string(guildId(1126).t.nAt0rE);
  items1[2] = closure_6(guildId(5376).Button, obj12);
  obj9.children = items1;
  obj7.children = closure_7(tmp9, obj9);
  return closure_6(guildId(6892).ActionSheet, obj7);
});