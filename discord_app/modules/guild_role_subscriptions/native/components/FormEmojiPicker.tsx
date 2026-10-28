// === Module 19614: FormEmojiPicker ===

// Module 19614 (FormEmojiPicker)
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9859 */;
import noop from "module_19" /* 19 */;

require = fn;
const EmojiIntention = fn(1392).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5004);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, emojiPickerIcon: { width: 20, height: 20 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormEmojiPicker(onChange) {
  const cResult = guildId(576).c(25);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  const tmp4 = closure_6();
  const tmp6 = onChange(15406)();
  if (cResult[0] === emojiId) {
    if (cResult[1] === emojiName) {
      let tmp7 = cResult[2];
    }
    const emojiByIdOrName = guildId(16869).useEmojiByIdOrName(guildId, tmp7);
    let emojiPickerIcon = tmp7;
    if (cResult[3] === tmp7) {
      if (cResult[4] === guildId) {
        if (cResult[5] === tmp4.emojiPickerIcon) {
          if (cResult[7] === guildId) {
            if (cResult[8] === onChange) {
              let tmp16 = cResult[9];
            }
            if (cResult[10] === tmp6.textInput) {
              if (cResult[11] === tmp4.container) {
                let tmp17 = cResult[12];
              }
              let str2 = "text-muted";
              if (null != emojiByIdOrName) {
                str2 = "text-default";
              }
              if (cResult[13] !== emojiByIdOrName) {
                if (null != emojiByIdOrName) {
                  let allEmojiNamesString = guildId(4954).getAllEmojiNamesString(emojiByIdOrName);
                  const tmpResult2 = guildId(4954);
                } else {
                  const intl = guildId(1125).intl;
                  allEmojiNamesString = intl.string(guildId(1125).t.gXAN3P);
                }
                cResult[13] = emojiByIdOrName;
                cResult[14] = allEmojiNamesString;
              } else {
                if (cResult[15] === tmp4.content) {
                  if (cResult[16] === str2) {
                    if (cResult[17] === tmp19) {
                      let tmp22 = cResult[18];
                    }
                    const _Symbol = Symbol;
                    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp28 = closure_4(guildId(7341).ChevronSmallRightIcon, { size: "md" });
                      cResult[19] = tmp28;
                      let tmp26 = tmp28;
                    } else {
                      tmp26 = cResult[19];
                    }
                    if (cResult[20] === tmp10) {
                      if (cResult[21] === tmp16) {
                        if (cResult[22] === tmp17) {
                          if (cResult[23] === tmp22) {
                            let tmp29 = cResult[24];
                          }
                          return tmp29;
                        }
                      }
                    }
                    let obj2 = { style: tmp17, accessibilityRole: "link", onPress: tmp16, children: null };
                    const items = [tmp10, tmp22, tmp26];
                    obj2.children = items;
                    const tmp31 = closure_5(tmp5(9074), obj2);
                    cResult[20] = tmp10;
                    cResult[21] = tmp16;
                    cResult[22] = tmp17;
                    cResult[23] = tmp22;
                    cResult[24] = tmp31;
                    tmp29 = tmp31;
                  }
                }
                const obj3 = { style: tmp4.content, variant: "text-md/medium", color: str2, children: cResult[14] };
                const tmp24 = closure_4(guildId(5270).Text, obj3);
                cResult[15] = tmp4.content;
                cResult[16] = str2;
                cResult[17] = cResult[14];
                cResult[18] = tmp24;
                tmp22 = tmp24;
              }
            }
            const items1 = [tmp4.container, tmp6.textInput];
            cResult[10] = tmp6.textInput;
            cResult[11] = tmp4.container;
            cResult[12] = items1;
            tmp17 = items1;
          }
          function handleSelectEmoji() {
            const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
              guildId,
              onPressEmoji(id) {
                if (null != id.id) {
                  if (onChange != null) {
                    const obj2 = { emojiId: id.id };
                    tmp3(obj2);
                  }
                } else if (null != id.optionallyDiverseSequence) {
                  if (onChange != null) {
                    const obj = { emojiName: id.optionallyDiverseSequence };
                    tmp(obj);
                  }
                }
              },
              pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI
            });
          }
          cResult[7] = guildId;
          cResult[8] = onChange;
          cResult[9] = handleSelectEmoji;
          tmp16 = handleSelectEmoji;
        }
      }
    }
    if (null != emojiPickerIcon) {
      const obj4 = { guildId, id: emojiPickerIcon };
      let tmp13 = closure_4(tmp5(16868), obj4);
    } else {
      const obj5 = { size: "custom", style: tmp4.emojiPickerIcon };
      tmp13 = closure_4(guildId(9381).ReactionIcon, obj5);
    }
    cResult[3] = emojiPickerIcon;
    cResult[4] = guildId;
    emojiPickerIcon = tmp4.emojiPickerIcon;
    cResult[5] = emojiPickerIcon;
    cResult[6] = tmp13;
    const tmpResult = guildId(16869);
  }
  let result = emojiId;
  if (emojiId == null) {
    let str = emojiName;
    if (emojiName == null) {
      str = "";
    }
    result = tmp5(4950).convertSurrogateToName(str, false);
    const tmp5Result = tmp5(4950);
  }
  cResult[0] = emojiId;
  cResult[1] = emojiName;
  cResult[2] = result;
  tmp7 = result;
  let obj = guildId(576);
}) : (function FormEmojiPicker(emoji) {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = closure_6();
  if (emojiId == null) {
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp2(4950).convertSurrogateToName(emojiName, false);
    const tmp2Result = tmp2(4950);
  }
  const tmp4 = onChange(15406)();
  const emojiByIdOrName = guildId(16869).useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj = { guildId, id: emojiId };
    let tmp8 = closure_4(tmp2(16868), obj);
    let tmp7 = closure_4;
  } else {
    tmp7 = closure_4;
    const obj3 = { size: "custom", style: tmp.emojiPickerIcon };
    tmp8 = closure_4(tmp5(9381).ReactionIcon, obj3);
  }
  const obj4 = {
    style: null,
    accessibilityRole: "link",
    onPress: function handleSelectEmoji() {
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({
        guildId,
        onPressEmoji(id) {
          if (null != id.id) {
            if (onChange != null) {
              const obj2 = { emojiId: id.id };
              tmp3(obj2);
            }
          } else if (null != id.optionallyDiverseSequence) {
            if (onChange != null) {
              const obj = { emojiName: id.optionallyDiverseSequence };
              tmp(obj);
            }
          }
        },
        pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI
      });
    },
    children: null
  };
  const items = [tmp.container, tmp4.textInput];
  obj4.style = items;
  const items1 = [tmp8, , ];
  let obj2 = guildId(16869);
  const obj5 = { style: tmp.content, variant: "text-md/medium", color: null, children: null };
  let str = "text-muted";
  if (null != emojiByIdOrName) {
    str = "text-default";
  }
  obj5.color = str;
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = tmp5(4954).getAllEmojiNamesString(emojiByIdOrName);
    const tmp5Result = tmp5(4954);
  } else {
    const intl = tmp5(1125).intl;
    allEmojiNamesString = intl.string(tmp5(1125).t.gXAN3P);
  }
  obj5.children = allEmojiNamesString;
  items1[1] = tmp7(guildId(5270).Text, obj5);
  items1[2] = tmp7(guildId(7341).ChevronSmallRightIcon, { size: "md" });
  obj4.children = items1;
  return closure_5(onChange(9074), obj4);
});