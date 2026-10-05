// === Module 7590: ConversationPreviewMessage ===

// Module 7590 (ConversationPreviewMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DateUtils from "DateUtils" /* 4552 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7809 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let message;

let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
function modifyRow(arg0) {
  arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({ renderReplies: false, renderReactions: false });
let createStyles = createStyles_mod;
let obj2 = { container: obj3, header: obj4, authorRow: obj5, headerTimestamp: { flex: 1 } };
obj3 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj2);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let items2;
  let items3;
  let items4;
  let roleStyle;
  let tmp5;
  let tmp6;
  let tmp9;
  rowGenerator = message(576);
  const cResult = rowGenerator.c(41);
  message = message.message;
  const guildId = message.guildId;
  const channelId = message.channelId;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function p() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = message(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp11;
    let tmp12;
    let tmp15;
    if (cResult[4] === message.author.id) {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const tmpResult6 = message(504);
    const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, tmp11, tmp12);
    const tmpResult7 = message(5042);
    const name = tmpResult7.useName(guildId, channelId, message.author);
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === stateFromStores) {
        tmp15 = cResult[9];
      }
      let colorStrings;
      const useProcessColorStringsArray = message(7620).useProcessColorStringsArray;
      message(7620);
      if (stateFromStores1 != null) {
        colorStrings = stateFromStores1.colorStrings;
      }
      const processColorStringsArray = useProcessColorStringsArray(colorStrings);
      const tmpResult9 = message(7620);
      const isRoleStyleAndRoleColorsEligibleForERC = tmpResult9.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, message.author.id, stateFromStores, processColorStringsArray);
      const TimestampHourCycle = tmp(2028).TimestampHourCycle;
      const setting = TimestampHourCycle.useSetting();
      if (cResult[10] === setting) {
        let tmp28;
        if (cResult[11] === message.timestamp) {
          tmp28 = cResult[12];
        }
        if (cResult[13] === guildId) {
          let tmp30;
          if (cResult[14] === message.author) {
            tmp30 = cResult[15];
          }
          if (cResult[16] === stateFromStores1) {
            let tmp33;
            if (cResult[17] === stateFromStores) {
              tmp33 = cResult[18];
            }
            let tmp37;
            if (isRoleStyleAndRoleColorsEligibleForERC) {
              tmp37 = processColorStringsArray;
            }
            if (cResult[19] === tmp15) {
              if (cResult[20] === name) {
                let tmp38;
                if (cResult[21] === tmp37) {
                  tmp38 = cResult[22];
                }
                if (cResult[23] === tmp4.authorRow) {
                  if (cResult[24] === tmp38) {
                    let tmp41;
                    if (cResult[25] === tmp33) {
                      tmp41 = cResult[26];
                    }
                    if (cResult[27] === tmp4.headerTimestamp) {
                      let tmp45;
                      if (cResult[28] === tmp28) {
                        tmp45 = cResult[29];
                      }
                      if (cResult[30] === tmp4.header) {
                        if (cResult[31] === tmp41) {
                          if (cResult[32] === tmp45) {
                            let tmp48;
                            let tmp52;
                            if (cResult[33] === tmp30) {
                              tmp48 = cResult[34];
                            }
                            if (cResult[35] !== message) {
                              const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow, message, rowGenerator };
                              const tmp57 = closure_7(guildId(8303), obj2);
                              cResult[35] = message;
                              cResult[36] = tmp57;
                              tmp52 = tmp57;
                            } else {
                              tmp52 = cResult[36];
                            }
                            if (cResult[37] === tmp4.container) {
                              if (cResult[38] === tmp48) {
                                let tmp58;
                                if (cResult[39] === tmp52) {
                                  tmp58 = cResult[40];
                                }
                                return tmp58;
                              }
                            }
                            const obj3 = { style: tmp4.container, children: items2 };
                            items2 = [tmp48, tmp52];
                            const tmp61 = closure_8(View, obj3);
                            cResult[37] = tmp4.container;
                            cResult[38] = tmp48;
                            cResult[39] = tmp52;
                            cResult[40] = tmp61;
                            tmp58 = tmp61;
                          }
                        }
                      }
                      const obj4 = { style: tmp4.header, children: items3 };
                      items3 = [tmp30, tmp41, tmp45];
                      const tmp51 = closure_8(View, obj4);
                      cResult[30] = tmp4.header;
                      cResult[31] = tmp41;
                      cResult[32] = tmp45;
                      cResult[33] = tmp30;
                      cResult[34] = tmp51;
                      tmp48 = tmp51;
                    }
                    const obj5 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp4.headerTimestamp, children: tmp28 };
                    const tmp47 = closure_7(message(4886).Text, obj5);
                    cResult[27] = tmp4.headerTimestamp;
                    cResult[28] = tmp28;
                    cResult[29] = tmp47;
                    tmp45 = tmp47;
                  }
                }
                const obj6 = { style: tmp4.authorRow, children: items4 };
                items4 = [tmp33, tmp38];
                const tmp44 = closure_8(View, obj6);
                cResult[23] = tmp4.authorRow;
                cResult[24] = tmp38;
                cResult[25] = tmp33;
                cResult[26] = tmp44;
                tmp41 = tmp44;
              }
            }
            const obj7 = { variant: "text-md/medium", lineClamp: 1, style: tmp15, gradientColors: tmp37, children: name };
            const tmp40 = closure_7(message(4886).Text, obj7);
            cResult[19] = tmp15;
            cResult[20] = name;
            cResult[21] = tmp37;
            cResult[22] = tmp40;
            tmp38 = tmp40;
          }
          let tmp34 = "dot" === stateFromStores;
          if (tmp34) {
            let colorString;
            if (stateFromStores1 != null) {
              colorString = stateFromStores1.colorString;
            }
            tmp34 = null != colorString;
          }
          if (tmp34) {
            const obj8 = { size: "small", color: null, colors: null };
            ({ colorString: obj10.color, colorStrings: obj10.colors } = stateFromStores1);
            tmp34 = closure_7(tmp(1188).RoleDot, obj8);
          }
          cResult[16] = stateFromStores1;
          cResult[17] = stateFromStores;
          cResult[18] = tmp34;
          tmp33 = tmp34;
        }
        const obj9 = { user: message.author, guildId, size: message(1188).AvatarSizes.XXSMALL };
        const Avatar = tmp(1188).Avatar;
        const tmp32 = closure_7(Avatar, obj9);
        cResult[13] = guildId;
        cResult[14] = message.author;
        cResult[15] = tmp32;
        tmp30 = tmp32;
      }
      const tmpResult10 = message(4552);
      const calendarFormatResult = tmpResult10.calendarFormat(message.timestamp, true, setting);
      cResult[10] = setting;
      cResult[11] = message.timestamp;
      cResult[12] = calendarFormatResult;
      tmp28 = calendarFormatResult;
    }
    if ("username" === stateFromStores) {
      let obj12;
      let colorString1;
      if (stateFromStores1 != null) {
        colorString1 = stateFromStores1.colorString;
      }
      if (null != colorString1) {
        obj12 = { color: stateFromStores1.colorString };
        const obj11 = { color: stateFromStores1.colorString };
      }
      cResult[7] = stateFromStores1;
      cResult[8] = stateFromStores;
      cResult[9] = obj12;
      tmp15 = obj12;
    }
    obj12 = {};
  }
  const fn2 = function w() {
    return GuildMemberStore.getMember(guildId, message.author.id);
  };
  const items5 = [guildId, message.author.id];
  cResult[3] = guildId;
  cResult[4] = message.author.id;
  cResult[5] = fn2;
  cResult[6] = items5;
  tmp12 = items5;
  tmp11 = fn2;
}) : ((message) => {
  let items4;
  let items5;
  let items6;
  let roleStyle;
  let tmp28;
  message = message.message;
  const guildId = message.guildId;
  let setting;
  const tmp = closure_11();
  rowGenerator = message(setting[11]);
  const items = [AccessibilityStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => roleStyle.roleStyle);
  const items1 = [GuildMemberStore];
  const items2 = [guildId, message.author.id];
  const obj2 = message(setting[11]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildMemberStore.getMember(guildId, message.author.id), items2);
  message(setting[12]);
  if ("username" === stateFromStores) {
    let colorString;
    if (stateFromStores1 != null) {
      colorString = stateFromStores1.colorString;
    }
    let colorStrings;
    const useProcessColorStringsArray = message(setting[13]).useProcessColorStringsArray;
    message(setting[13]);
    if (stateFromStores1 != null) {
      colorStrings = stateFromStores1.colorStrings;
    }
    const processColorStringsArray = useProcessColorStringsArray(colorStrings);
    const tmp2Result2 = message(setting[13]);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result2.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, message.author.id, stateFromStores, processColorStringsArray);
    const TimestampHourCycle = tmp2(tmp3[14]).TimestampHourCycle;
    setting = TimestampHourCycle.useSetting();
    const items3 = [message.timestamp, setting];
    const obj4 = { style: tmp.container, children: items6 };
    const obj5 = { style: tmp.header, children: items4 };
    const memo = react.useMemo(() => {
      const obj = DateUtils;
      return obj.calendarFormat(message.timestamp, true, setting);
    }, items3);
    const obj6 = { user: message.author, guildId, size: message(setting[16]).AvatarSizes.XXSMALL };
    const Avatar = tmp2(tmp3[16]).Avatar;
    items4 = [closure_7(Avatar, obj6), , ];
    let tmp25Result = "dot" === stateFromStores;
    const obj7 = { style: tmp.authorRow, children: items5 };
    if (tmp25Result) {
      let colorString1;
      if (stateFromStores1 != null) {
        colorString1 = stateFromStores1.colorString;
      }
      tmp25Result = null != colorString1;
    }
    if (tmp25Result) {
      const obj8 = { size: "small", color: null, colors: null };
      ({ colorString: obj9.color, colorStrings: obj9.colors } = stateFromStores1);
      tmp25Result = closure_7(tmp2(tmp3[16]).RoleDot, obj8);
    }
    items5 = [tmp25Result, ];
    const obj10 = { variant: "text-md/medium", lineClamp: 1, style: {}, gradientColors: tmp28, children: tmp7 };
    tmp28 = undefined;
    const Text = tmp2(tmp3[17]).Text;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp28 = processColorStringsArray;
    }
    items5[1] = closure_7(Text, obj10);
    items4[1] = closure_8(View, obj7);
    const obj11 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.headerTimestamp, children: memo };
    items4[2] = closure_7(message(setting[17]).Text, obj11);
    items6 = [closure_8(View, obj5), ];
    const obj12 = { pointerEvents: "none", horizontalOffset: 0, modifyRow, message, rowGenerator };
    items6[1] = closure_7(guildId(setting[18]), obj12);
    return closure_8(View, obj4);
  }
});
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default tmp5;