// discord_app/modules/conversations/components/native/ConversationPreviewMessage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import RowGeneratorTypes from "../../../messages/native/renderer/RowGeneratorTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

require = fn;
function modifyRow(arg0) {
  arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({ renderReplies: false, renderReactions: false });
const createStyles = fn(4896);
let obj3 = { container: { gap: nativeDefault.space.PX_4 }, header: null, authorRow: null, headerTimestamp: null };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj3.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj3.authorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj3.headerTimestamp = { flex: 1 };
let closure_11 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      rowGenerator = message(576);
      const cResult = rowGenerator.c(41);
      message = message.message;
      const guildId = message.guildId;
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
      const stateFromStores = message(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore];
        cResult[2] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[4] === message.author.id) {
          let tmp11 = cResult[5];
          let tmp12 = cResult[6];
        }
        const stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp11, tmp12);
        const tmpResult6 = tmp(504);
        const name = tmp(5048).useName(guildId, message.channelId, message.author);
        if (cResult[7] === stateFromStores1) {
          if (cResult[8] === stateFromStores) {
            let colorStrings;
            if (stateFromStores1 != null) {
              colorStrings = stateFromStores1.colorStrings;
            }
            const processColorStringsArray = tmp(7631).useProcessColorStringsArray(colorStrings);
            const tmpResult9 = tmp(7631);
            const isRoleStyleAndRoleColorsEligibleForERC = tmpResult9.useIsRoleStyleAndRoleColorsEligibleForERC(
              guildId,
              message.author.id,
              stateFromStores,
              processColorStringsArray,
            );
            const TimestampHourCycle = tmp(2028).TimestampHourCycle;
            const setting = TimestampHourCycle.useSetting();
            if (cResult[10] === setting) {
              if (cResult[11] === message.timestamp) {
                let tmp28 = cResult[12];
              }
              if (cResult[13] === guildId) {
                if (cResult[14] === message.author) {
                  let tmp30 = cResult[15];
                }
                if (cResult[16] === stateFromStores1) {
                  if (cResult[17] === stateFromStores) {
                    let tmp33 = cResult[18];
                  }
                  let tmp37;
                  if (isRoleStyleAndRoleColorsEligibleForERC) {
                    tmp37 = processColorStringsArray;
                  }
                  if (cResult[19] === tmp15) {
                    if (cResult[20] === name) {
                      if (cResult[21] === tmp37) {
                        let tmp38 = cResult[22];
                      }
                      if (cResult[23] === tmp4.authorRow) {
                        if (cResult[24] === tmp38) {
                          if (cResult[25] === tmp33) {
                            let tmp41 = cResult[26];
                          }
                          if (cResult[27] === tmp4.headerTimestamp) {
                            if (cResult[28] === tmp28) {
                              let tmp45 = cResult[29];
                            }
                            if (cResult[30] === tmp4.header) {
                              if (cResult[31] === tmp41) {
                                if (cResult[32] === tmp45) {
                                  if (cResult[33] === tmp30) {
                                    let tmp48 = cResult[34];
                                  }
                                  if (cResult[35] !== message) {
                                    const obj2 = {
                                      pointerEvents: "none",
                                      horizontalOffset: 0,
                                      modifyRow,
                                      message,
                                      rowGenerator,
                                    };
                                    const tmp57 = closure_7(guildId(8336), obj2);
                                    cResult[35] = message;
                                    cResult[36] = tmp57;
                                    let tmp52 = tmp57;
                                  } else {
                                    tmp52 = cResult[36];
                                  }
                                  if (cResult[37] === tmp4.container) {
                                    if (cResult[38] === tmp48) {
                                      if (cResult[39] === tmp52) {
                                        let tmp58 = cResult[40];
                                      }
                                      return tmp58;
                                    }
                                  }
                                  const obj3 = { style: tmp4.container, children: null };
                                  const items2 = [tmp48, tmp52];
                                  obj3.children = items2;
                                  const tmp61 = closure_8(View, obj3);
                                  cResult[37] = tmp4.container;
                                  cResult[38] = tmp48;
                                  cResult[39] = tmp52;
                                  cResult[40] = tmp61;
                                  tmp58 = tmp61;
                                }
                              }
                            }
                            const obj4 = { style: tmp4.header, children: null };
                            const items3 = [tmp30, tmp41, tmp45];
                            obj4.children = items3;
                            const tmp51 = closure_8(View, obj4);
                            cResult[30] = tmp4.header;
                            cResult[31] = tmp41;
                            cResult[32] = tmp45;
                            cResult[33] = tmp30;
                            cResult[34] = tmp51;
                            tmp48 = tmp51;
                          }
                          const obj5 = {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            lineClamp: 1,
                            style: tmp4.headerTimestamp,
                            children: tmp28,
                          };
                          const tmp47 = closure_7(tmp(4892).Text, obj5);
                          cResult[27] = tmp4.headerTimestamp;
                          cResult[28] = tmp28;
                          cResult[29] = tmp47;
                          tmp45 = tmp47;
                        }
                      }
                      const obj6 = { style: tmp4.authorRow, children: null };
                      const items4 = [tmp33, tmp38];
                      obj6.children = items4;
                      const tmp44 = closure_8(View, obj6);
                      cResult[23] = tmp4.authorRow;
                      cResult[24] = tmp38;
                      cResult[25] = tmp33;
                      cResult[26] = tmp44;
                      tmp41 = tmp44;
                    }
                  }
                  const obj7 = {
                    variant: "text-md/medium",
                    lineClamp: 1,
                    style: tmp15,
                    gradientColors: tmp37,
                    children: name,
                  };
                  const tmp40 = closure_7(tmp(4892).Text, obj7);
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
                  ({ colorString: obj11.color, colorStrings: obj11.colors } = stateFromStores1);
                  tmp34 = closure_7(tmp(1188).RoleDot, { size: "small", color: null, colors: null });
                  const obj8 = { size: "small", color: null, colors: null };
                }
                cResult[16] = stateFromStores1;
                cResult[17] = stateFromStores;
                cResult[18] = tmp34;
                tmp33 = tmp34;
              }
              const obj9 = { user: message.author, guildId, size: tmp(1188).AvatarSizes.XXSMALL };
              const tmp32 = closure_7(tmp(1188).Avatar, obj9);
              cResult[13] = guildId;
              cResult[14] = message.author;
              cResult[15] = tmp32;
              tmp30 = tmp32;
            }
            const tmpResult8 = tmp(7631);
            const calendarFormatResult = tmp(4558).calendarFormat(message.timestamp, true, setting);
            cResult[10] = setting;
            cResult[11] = message.timestamp;
            cResult[12] = calendarFormatResult;
            tmp28 = calendarFormatResult;
            const tmpResult10 = tmp(4558);
          }
        }
        if ("username" !== stateFromStores) {
          let obj10 = {};
          cResult[7] = stateFromStores1;
          cResult[8] = stateFromStores;
          cResult[9] = obj10;
        } else {
          let colorString1;
          if (stateFromStores1 != null) {
            colorString1 = stateFromStores1.colorString;
          }
        }
        const obj12 = { color: stateFromStores1.colorString };
        obj10 = obj12;
        const tmpResult7 = tmp(5048);
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
      const tmpResult = message(504);
    }
  : (message) => {
      message = message.message;
      const guildId = message.guildId;
      let setting;
      const tmp = closure_11();
      rowGenerator = message(setting[11]);
      const items = [AccessibilityStore];
      const stateFromStores = rowGenerator.useStateFromStores(items, () => roleStyle.roleStyle);
      const items1 = [GuildMemberStore];
      const items2 = [guildId, message.author.id];
      const stateFromStores1 = message(setting[11]).useStateFromStores(
        items1,
        () => GuildMemberStore.getMember(guildId, message.author.id),
        items2,
      );
      message(setting[12]);
      if ("username" === stateFromStores) {
        let colorString;
        if (stateFromStores1 != null) {
          colorString = stateFromStores1.colorString;
        }
        if (null != colorString) {
          const obj3 = { color: stateFromStores1.colorString };
        }
        let colorStrings;
        if (stateFromStores1 != null) {
          colorStrings = stateFromStores1.colorStrings;
        }
        const processColorStringsArray = tmp2(tmp3[13]).useProcessColorStringsArray(colorStrings);
        const tmp2Result2 = tmp2(tmp3[13]);
        const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result2.useIsRoleStyleAndRoleColorsEligibleForERC(
          guildId,
          message.author.id,
          stateFromStores,
          processColorStringsArray,
        );
        const TimestampHourCycle = tmp2(tmp3[14]).TimestampHourCycle;
        setting = TimestampHourCycle.useSetting();
        const items3 = [message.timestamp, setting];
        const obj4 = { style: tmp.container, children: null };
        const obj5 = { style: tmp.header, children: null };
        const memo = noop.useMemo(() => DateUtils.calendarFormat(message.timestamp, true, setting), items3);
        const obj6 = { user: message.author, guildId, size: tmp2(tmp3[16]).AvatarSizes.XXSMALL };
        const items4 = [closure_7(tmp2(tmp3[16]).Avatar, obj6), ,];
        const obj7 = { style: tmp.authorRow, children: null };
        let tmp24Result = "dot" === stateFromStores;
        if (tmp24Result) {
          let colorString1;
          if (stateFromStores1 != null) {
            colorString1 = stateFromStores1.colorString;
          }
          tmp24Result = null != colorString1;
        }
        if (tmp24Result) {
          ({ colorString: obj10.color, colorStrings: obj10.colors } = stateFromStores1);
          tmp24Result = closure_7(tmp2(tmp3[16]).RoleDot, { size: "small", color: null, colors: null });
          const obj8 = { size: "small", color: null, colors: null };
        }
        const items5 = [tmp24Result];
        const obj9 = { variant: "text-md/medium", lineClamp: 1, style: {}, gradientColors: null, children: null };
        let tmp27;
        if (isRoleStyleAndRoleColorsEligibleForERC) {
          tmp27 = processColorStringsArray;
        }
        obj9.gradientColors = tmp27;
        obj9.children = tmp7;
        items5[1] = closure_7(tmp2(tmp3[17]).Text, obj9);
        obj7.children = items5;
        items4[1] = closure_8(View, obj7);
        const obj11 = {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 1,
          style: tmp.headerTimestamp,
          children: memo,
        };
        items4[2] = closure_7(tmp2(tmp3[17]).Text, obj11);
        obj5.children = items4;
        const items6 = [closure_8(View, obj5)];
        const obj12 = { pointerEvents: "none", horizontalOffset: 0, modifyRow, message, rowGenerator };
        items6[1] = closure_7(guildId(tmp3[18]), obj12);
        obj4.children = items6;
        return closure_8(View, obj4);
      }
      const obj2 = message(setting[11]);
    };
