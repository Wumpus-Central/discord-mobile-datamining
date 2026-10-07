// === Module 11456: GuildRaidLockdownFeedbackActionSheet ===

// Module 11456 (GuildRaidLockdownFeedbackActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ container: { display: "flex", gap: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(44);
  guildId = guildId.guildId;
  const obj = guildId(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  const tmp6 = first2(noop.useState(first), 2);
  const first1 = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp7 = first2(noop.useState(), 2);
  first2 = tmp7[0];
  noop = tmp7[1];
  if (cResult[1] === guildId) {
    if (cResult[2] === first1) {
      if (cResult[3] === first2) {
        if (cResult[4] === tmp4.container) {
          if (cResult[22] === cResult[5]) {
            if (cResult[23] === tmp14) {
              if (cResult[24] === tmp15) {
                let tmp21 = cResult[25];
              }
              if (cResult[26] === tmp13) {
                if (cResult[27] === first1) {
                  if (cResult[28] === first2) {
                    let tmp24 = cResult[29];
                  }
                  const _Symbol = Symbol;
                  if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl8 = tmp(1126).intl;
                    const stringResult = intl8.string(tmp(1126).t.nAt0rE);
                    cResult[30] = stringResult;
                    let tmp27 = stringResult;
                  } else {
                    tmp27 = cResult[30];
                  }
                  if (cResult[31] !== tmp12) {
                    const obj2 = { onPress: tmp12, text: tmp27 };
                    const tmp31 = closure_6(tmp(5601).Button, obj2);
                    cResult[31] = tmp12;
                    cResult[32] = tmp31;
                    let tmp29 = tmp31;
                  } else {
                    tmp29 = cResult[32];
                  }
                  if (cResult[33] === tmp10) {
                    if (cResult[34] === tmp29) {
                      if (cResult[35] === tmp16) {
                        if (cResult[36] === tmp21) {
                          if (cResult[37] === tmp24) {
                            let tmp32 = cResult[38];
                          }
                          if (cResult[39] === tmp11) {
                            if (cResult[40] === tmp32) {
                              if (cResult[41] === tmp17) {
                                if (cResult[42] === tmp18) {
                                  let tmp35 = cResult[43];
                                }
                                return tmp35;
                              }
                            }
                          }
                          const obj3 = { startExpanded: tmp17, header: tmp18, children: tmp32 };
                          const tmp37 = closure_6(tmp11, obj3);
                          cResult[39] = tmp11;
                          cResult[40] = tmp32;
                          cResult[41] = tmp17;
                          cResult[42] = tmp18;
                          cResult[43] = tmp37;
                          tmp35 = tmp37;
                        }
                      }
                    }
                  }
                  const obj4 = { style: tmp16, children: null };
                  const items1 = [tmp21, tmp24, tmp29];
                  obj4.children = items1;
                  const tmp34 = closure_7(tmp10, obj4);
                  cResult[33] = tmp10;
                  cResult[34] = tmp29;
                  cResult[35] = tmp16;
                  cResult[36] = tmp21;
                  cResult[37] = tmp24;
                  cResult[38] = tmp34;
                  tmp32 = tmp34;
                }
              }
              let hasItem = first1.includes(tmp(7040).RaidLockdownFeedbackType.OTHER);
              if (hasItem) {
                const obj5 = { autoComplete: "off", value: first2, placeholder: null, onChange: null };
                const intl7 = tmp(1126).intl;
                obj5.placeholder = intl7.string(tmp(1126).t["PAM+JR"]);
                obj5.onChange = tmp13;
                hasItem = closure_6(tmp(6587).TextArea, obj5);
              }
              cResult[26] = tmp13;
              cResult[27] = first1;
              cResult[28] = first2;
              cResult[29] = hasItem;
              tmp24 = hasItem;
            }
          }
          const obj6 = { hasIcons: cResult[10], children: cResult[11] };
          const tmp23 = closure_6(cResult[5], obj6);
          cResult[22] = cResult[5];
          cResult[23] = cResult[10];
          cResult[24] = cResult[11];
          cResult[25] = tmp23;
          tmp21 = tmp23;
        }
      }
    }
  }
  const obj7 = { text: null, value: null };
  const intl = tmp(1126).intl;
  obj7.text = intl.string(guildId(1126).t["//3pvi"]);
  obj7.value = guildId(7040).RaidLockdownFeedbackType.DM_SPAM;
  const items2 = [obj7, , , , , ];
  const obj8 = { text: null, value: null };
  const intl2 = tmp(1126).intl;
  obj8.text = intl2.string(guildId(1126).t.SdVsip);
  obj8.value = guildId(7040).RaidLockdownFeedbackType.MENTION_SPAM;
  items2[1] = obj8;
  const obj9 = { text: null, value: null };
  const intl3 = tmp(1126).intl;
  obj9.text = intl3.string(guildId(1126).t.uTiSVL);
  obj9.value = guildId(7040).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items2[2] = obj9;
  const obj10 = { text: null, value: null };
  const intl4 = tmp(1126).intl;
  obj10.text = intl4.string(guildId(1126).t.GQczU8);
  obj10.value = guildId(7040).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items2[3] = obj10;
  const obj11 = { text: null, value: null };
  const intl5 = tmp(1126).intl;
  obj11.text = intl5.string(guildId(1126).t.AAgqy3);
  obj11.value = guildId(7040).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items2[4] = obj11;
  const obj12 = { text: null, value: null };
  const intl6 = tmp(1126).intl;
  obj12.text = intl6.string(guildId(1126).t.ryPKb7);
  obj12.value = guildId(7040).RaidLockdownFeedbackType.OTHER;
  items2[5] = obj12;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        tmp = closure_4(guildId);
        return;
      }
    }
    cResult[15] = U;
  } else {
    class U {
      constructor(arg0) {
        tmp = closure_4(guildId);
        return;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
        return;
      }
    }
    cResult[16] = W;
    const tmp20 = W;
  } else {
    class W {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
        return;
      }
    }
  }
  W = tmp20;
  if (cResult[17] === guildId) {
    class W {
      constructor() {
        obj = closure_1(closure_2[9]);
        hideActionSheetResult = obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
        return;
      }
    }
  }
  const fn = function j() {
    AppAnalyticsUtils.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, { raid_lockdown_feedback_type: first1, raid_lockdown_feedback_other_reason: first2, guild_id: guildId });
    W();
  };
  cResult[17] = guildId;
  cResult[18] = first1;
  cResult[19] = first2;
  cResult[20] = fn;
  tmp4 = closure_8();
}) : ((guildId) => {
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
  obj.value = guildId(7040).RaidLockdownFeedbackType.DM_SPAM;
  let items = [obj, , , , , ];
  let obj2 = { text: null, value: null };
  const intl2 = guildId(1126).intl;
  obj2.text = intl2.string(guildId(1126).t.SdVsip);
  obj2.value = guildId(7040).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj2;
  const obj3 = { text: null, value: null };
  const intl3 = guildId(1126).intl;
  obj3.text = intl3.string(guildId(1126).t.uTiSVL);
  obj3.value = guildId(7040).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj3;
  const obj4 = { text: null, value: null };
  const intl4 = guildId(1126).intl;
  obj4.text = intl4.string(guildId(1126).t.GQczU8);
  obj4.value = guildId(7040).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj4;
  const obj5 = { text: null, value: null };
  const intl5 = guildId(1126).intl;
  obj5.text = intl5.string(guildId(1126).t.AAgqy3);
  obj5.value = guildId(7040).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj5;
  const obj6 = { text: null, value: null };
  const intl6 = guildId(1126).intl;
  obj6.text = intl6.string(guildId(1126).t.ryPKb7);
  obj6.value = guildId(7040).RaidLockdownFeedbackType.OTHER;
  items[5] = obj6;
  const obj7 = { startExpanded: true, header: null, children: null };
  const obj8 = { title: null };
  const intl7 = guildId(1126).intl;
  obj8.title = intl7.string(guildId(1126).t.f5hd9P);
  obj7.header = closure_6(guildId(6651).BottomSheetTitleHeader, obj8);
  const obj9 = { style: closure_8().container, children: null };
  const tmp = closure_8();
  const tmp9 = raid_lockdown_feedback_type(6544);
  const items1 = [
    closure_6(guildId(6081).TableRowGroup, {
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
  let hasItem = raid_lockdown_feedback_type.includes(guildId(7040).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj11 = { autoComplete: "off", value: first1, placeholder: null, onChange: null };
    const intl8 = tmp5(1126).intl;
    obj11.placeholder = intl8.string(tmp5(1126).t["PAM+JR"]);
    obj11.onChange = function onChange(arg0) {
      closure_4(arg0);
    };
    hasItem = closure_6(tmp5(6587).TextArea, obj11);
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
  const intl9 = tmp5(1126).intl;
  obj12.text = intl9.string(guildId(1126).t.nAt0rE);
  items1[2] = closure_6(guildId(5601).Button, obj12);
  obj9.children = items1;
  obj7.children = closure_7(tmp9, obj9);
  return closure_6(guildId(6708).ActionSheet, obj7);
});