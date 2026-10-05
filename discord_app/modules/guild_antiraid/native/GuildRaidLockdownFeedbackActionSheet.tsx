// === Module 11443: GuildRaidLockdownFeedbackActionSheet ===

// Module 11443 (GuildRaidLockdownFeedbackActionSheet)
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, guildId, value;

let metroImportDefault;
let metroRequire;
let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { display: "flex", gap: 24 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_2;
  let closure_4;
  let first;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let tmp20;
  let obj = guildId(576);
  const cResult = obj.c(44);
  guildId = guildId.guildId;
  closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmp6 = first2(react.useState(first), 2);
  const first1 = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp7 = first2(react.useState(), 2);
  first2 = tmp7[0];
  react = tmp7[1];
  if (cResult[1] === guildId) {
    if (cResult[2] === first1) {
      if (cResult[3] === first2) {
        if (cResult[22] === tmp9) {
          if (cResult[23] === tmp14) {
            let tmp21;
            if (cResult[24] === tmp15) {
              tmp21 = cResult[25];
            }
            if (cResult[26] === tmp13) {
              if (cResult[27] === first1) {
                let tmp24;
                let tmp27;
                let tmp29;
                if (cResult[28] === first2) {
                  tmp24 = cResult[29];
                }
                const _Symbol = Symbol;
                if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl8 = tmp(1126).intl;
                  const stringResult = intl8.string(guildId(1126).t.nAt0rE);
                  cResult[30] = stringResult;
                  tmp27 = stringResult;
                } else {
                  tmp27 = cResult[30];
                }
                if (cResult[31] !== tmp12) {
                  let obj2 = { onPress: tmp12, text: tmp27 };
                  const tmp31 = closure_6(guildId(5594).Button, obj2);
                  cResult[31] = tmp12;
                  cResult[32] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[32];
                }
                if (cResult[33] === tmp10) {
                  if (cResult[34] === tmp29) {
                    if (cResult[35] === tmp16) {
                      if (cResult[36] === tmp21) {
                        let tmp32;
                        if (cResult[37] === tmp24) {
                          tmp32 = cResult[38];
                        }
                        if (cResult[39] === tmp11) {
                          if (cResult[40] === tmp32) {
                            if (cResult[41] === tmp17) {
                              let tmp35;
                              if (cResult[42] === tmp18) {
                                tmp35 = cResult[43];
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
                const obj4 = { style: tmp16, children: items1 };
                items1 = [tmp21, tmp24, tmp29];
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
            let hasItem = first1.includes(tmp(7027).RaidLockdownFeedbackType.OTHER);
            if (hasItem) {
              const obj5 = { autoComplete: "off", value: first2, placeholder: intl7.string(guildId(1126).t["PAM+JR"]), onChange: tmp13 };
              const TextArea = tmp(6580).TextArea;
              intl7 = tmp(1126).intl;
              hasItem = closure_6(TextArea, obj5);
            }
            cResult[26] = tmp13;
            cResult[27] = first1;
            cResult[28] = first2;
            cResult[29] = hasItem;
            tmp24 = hasItem;
          }
        }
        const obj6 = { hasIcons: tmp14, children: tmp15 };
        const tmp23 = closure_6(tmp9, obj6);
        cResult[22] = tmp9;
        cResult[23] = tmp14;
        cResult[24] = tmp15;
        cResult[25] = tmp23;
        tmp21 = tmp23;
      }
    }
  }
  const obj7 = { text: intl.string(guildId(1126).t["//3pvi"]), value: guildId(7027).RaidLockdownFeedbackType.DM_SPAM };
  intl = tmp(1126).intl;
  const items2 = [obj7, , , , , ];
  const obj8 = { text: intl2.string(guildId(1126).t.SdVsip), value: guildId(7027).RaidLockdownFeedbackType.MENTION_SPAM };
  intl2 = tmp(1126).intl;
  items2[1] = obj8;
  const obj9 = { text: intl3.string(guildId(1126).t.uTiSVL), value: guildId(7027).RaidLockdownFeedbackType.CHANNEL_SPAM };
  intl3 = tmp(1126).intl;
  items2[2] = obj9;
  const obj10 = { text: intl4.string(guildId(1126).t.GQczU8), value: guildId(7027).RaidLockdownFeedbackType.SUS_NEW_MEMBERS };
  intl4 = tmp(1126).intl;
  items2[3] = obj10;
  const obj11 = { text: intl5.string(guildId(1126).t.AAgqy3), value: guildId(7027).RaidLockdownFeedbackType.CHANGING_SETTINGS };
  intl5 = tmp(1126).intl;
  items2[4] = obj11;
  const obj12 = { text: intl6.string(guildId(1126).t.ryPKb7), value: guildId(7027).RaidLockdownFeedbackType.OTHER };
  intl6 = tmp(1126).intl;
  items2[5] = obj12;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        closure_4(arg0);
      }
    }
    cResult[15] = U;
  } else {
    class U {
      constructor(arg0) {
        closure_4(arg0);
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor() {
        const obj = first1(closure_2[9]);
        obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
      }
    }
    cResult[16] = W;
    tmp20 = W;
  } else {
    class W {
      constructor() {
        const obj = first1(closure_2[9]);
        obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
      }
    }
  }
  W = tmp20;
  if (cResult[17] === guildId) {
    class W {
      constructor() {
        const obj = first1(closure_2[9]);
        obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
      }
    }
  }
  const fn = function j() {
    const obj = AppAnalyticsUtils;
    const obj2 = { raid_lockdown_feedback_type: first1, raid_lockdown_feedback_other_reason: first2, guild_id: guildId };
    obj.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, obj2);
    W();
  };
  cResult[17] = guildId;
  cResult[18] = first1;
  cResult[19] = first2;
  cResult[20] = fn;
}) : ((guildId) => {
  let BottomSheetTitleHeader;
  let closure_2;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let obj8;
  let obj9;
  let tmp9;
  guildId = guildId.guildId;
  let first1;
  react = undefined;
  const tmp = closure_8();
  const tmp2 = first1(react.useState([]), 2);
  const raid_lockdown_feedback_type = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = first1(react.useState(), 2);
  first1 = tmp3[0];
  react = tmp3[1];
  let obj = { text: intl.string(guildId(1126).t["//3pvi"]), value: guildId(7027).RaidLockdownFeedbackType.DM_SPAM };
  intl = guildId(1126).intl;
  let items = [obj, , , , , ];
  let obj2 = { text: intl2.string(guildId(1126).t.SdVsip), value: guildId(7027).RaidLockdownFeedbackType.MENTION_SPAM };
  intl2 = guildId(1126).intl;
  items[1] = obj2;
  let obj3 = { text: intl3.string(guildId(1126).t.uTiSVL), value: guildId(7027).RaidLockdownFeedbackType.CHANNEL_SPAM };
  intl3 = guildId(1126).intl;
  items[2] = obj3;
  const obj4 = { text: intl4.string(guildId(1126).t.GQczU8), value: guildId(7027).RaidLockdownFeedbackType.SUS_NEW_MEMBERS };
  intl4 = guildId(1126).intl;
  items[3] = obj4;
  const obj5 = { text: intl5.string(guildId(1126).t.AAgqy3), value: guildId(7027).RaidLockdownFeedbackType.CHANGING_SETTINGS };
  intl5 = guildId(1126).intl;
  items[4] = obj5;
  const obj6 = { text: intl6.string(guildId(1126).t.ryPKb7), value: guildId(7027).RaidLockdownFeedbackType.OTHER };
  intl6 = guildId(1126).intl;
  items[5] = obj6;
  const obj7 = { startExpanded: true, header: closure_6(BottomSheetTitleHeader, obj8), children: closure_7(tmp9, obj9) };
  const ActionSheet = guildId(6701).ActionSheet;
  obj8 = { title: intl7.string(guildId(1126).t.f5hd9P) };
  BottomSheetTitleHeader = guildId(6644).BottomSheetTitleHeader;
  intl7 = guildId(1126).intl;
  obj9 = { style: tmp.container, children: items1 };
  const obj10 = {
    hasIcons: false,
    children: items.map((value) => {
      value = value.value;
      guildId = value;
      const text = value.text;
      const obj = {
        onPress() {
          let closure_0 = guildId;
          closure_2(first.includes(guildId) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
            return items;
          }));
        },
        checked: first.includes(value),
        label: text
      };
      const TableCheckboxRow = guildId(closure_2[15]).TableCheckboxRow;
      return closure_1_6(TableCheckboxRow, obj, value);
    })
  };
  tmp9 = raid_lockdown_feedback_type(6537);
  const TableRowGroup = guildId(6074).TableRowGroup;
  items1 = [closure_6(TableRowGroup, obj10), , ];
  let hasItem = raid_lockdown_feedback_type.includes(guildId(7027).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj11 = {
      autoComplete: "off",
      value: first1,
      placeholder: intl8.string(guildId(1126).t["PAM+JR"]),
      onChange(arg0) {
          closure_4(arg0);
        }
    };
    const TextArea = tmp5(6580).TextArea;
    intl8 = tmp5(1126).intl;
    hasItem = closure_6(TextArea, obj11);
  }
  items1[1] = hasItem;
  const obj12 = {
    onPress() {
      const obj = AppAnalyticsUtils;
      const obj2 = { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: intl9.string(guildId(1126).t.nAt0rE)
  };
  const Button = tmp5(5594).Button;
  intl9 = tmp5(1126).intl;
  items1[2] = closure_6(Button, obj12);
  return closure_6(ActionSheet, obj7);
});
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default tmp3;