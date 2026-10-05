// === Module 17952: FormEmojiPicker ===

// Module 17952 (FormEmojiPicker)
import nativeDefault from "native" /* 587 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9866 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5915 */;

require = fn;
const Fonts = fn(1085).Fonts;
const EmojiIntention = fn(1380).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj2.placeholder = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.text = {};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  const cResult = guildId(576).c(26);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  const tmp4 = closure_6();
  const tmp6 = onChange(13710)();
  if (cResult[0] === emojiId) {
    if (cResult[1] === emojiName) {
      let tmp7 = cResult[2];
    }
    const emojiByIdOrName = guildId(15059).useEmojiByIdOrName(guildId, tmp7);
    if (cResult[3] === tmp7) {
      if (cResult[4] === guildId) {
        if (cResult[6] === guildId) {
          if (cResult[7] === onChange) {
            let tmp20 = cResult[8];
          }
          if (cResult[9] === tmp6.textInput) {
            if (cResult[10] === tmp4.container) {
              let tmp21 = cResult[11];
            }
            class N {
              constructor() {
                obj = closure_0(closure_2[15]);
                obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                result = obj.openEmojiPickerActionSheet(obj1);
                return;
              }
            }
            if (cResult[12] === tmp4.content) {
              if (cResult[13] === tmp24) {
                let tmp25 = cResult[14];
              }
              if (cResult[15] !== emojiByIdOrName) {
                if (null != emojiByIdOrName) {
                  const allEmojiNamesString = guildId(4527).getAllEmojiNamesString(emojiByIdOrName);
                  const tmpResult2 = guildId(4527);
                } else {
                  const string = guildId(1126).intl.string;
                  class N {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                      result = obj.openEmojiPickerActionSheet(obj1);
                      return;
                    }
                  }
                }
                class N {
                  constructor() {
                    obj = closure_0(closure_2[15]);
                    obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                    result = obj.openEmojiPickerActionSheet(obj1);
                    return;
                  }
                }
                cResult[16] = allEmojiNamesString;
              } else {
                if (cResult[17] === tmp25) {
                  if (cResult[18] === tmp26) {
                    let tmp29 = cResult[19];
                  }
                  class N {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                      result = obj.openEmojiPickerActionSheet(obj1);
                      return;
                    }
                  }
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj2 = { size: null, source: null };
                    class N {
                      constructor() {
                        obj = closure_0(closure_2[15]);
                        obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                        result = obj.openEmojiPickerActionSheet(obj1);
                        return;
                      }
                    }
                    obj2.size = guildId(1188).Icon.Sizes.MEDIUM;
                    obj2.source = tmp5(9602);
                    const tmp35 = closure_4(tmp34, obj2);
                    cResult[20] = tmp35;
                    let tmp32 = tmp35;
                  } else {
                    tmp32 = cResult[20];
                  }
                  if (cResult[21] === tmp13) {
                    if (cResult[22] === tmp20) {
                      if (cResult[23] === tmp21) {
                        if (cResult[24] === tmp29) {
                          let tmp36 = cResult[25];
                        }
                        return tmp36;
                      }
                    }
                  }
                  const obj3 = { style: tmp21, accessibilityRole: "link", onPress: tmp20, children: null };
                  const items = [tmp13, tmp29, tmp32];
                  obj3.children = items;
                  const tmp38 = closure_5(tmp5(9442), obj3);
                  cResult[21] = tmp13;
                  cResult[22] = tmp20;
                  cResult[23] = tmp21;
                  cResult[24] = tmp29;
                  cResult[25] = tmp38;
                  tmp36 = tmp38;
                }
                class N {
                  constructor() {
                    obj = closure_0(closure_2[15]);
                    obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
                    result = obj.openEmojiPickerActionSheet(obj1);
                    return;
                  }
                }
                const obj4 = { style: tmp25, children: cResult[16] };
                const tmp30 = closure_4(guildId(1188).LegacyText, obj4);
                cResult[17] = tmp25;
                cResult[18] = cResult[16];
                cResult[19] = tmp30;
                tmp29 = tmp30;
              }
            }
            const items1 = [tmp4.content, tmp24];
            cResult[12] = tmp4.content;
            cResult[13] = tmp24;
            cResult[14] = items1;
            tmp25 = items1;
          }
          class N {
            constructor() {
              obj = closure_0(closure_2[15]);
              obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
              result = obj.openEmojiPickerActionSheet(obj1);
              return;
            }
          }
          tmp22[0] = tmp4.container;
          tmp22[1] = tmp6.textInput;
          cResult[9] = tmp6.textInput;
          cResult[10] = tmp4.container;
          cResult[11] = tmp22;
          tmp21 = tmp22;
        }
        class N {
          constructor() {
            obj = closure_0(closure_2[15]);
            obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
            result = obj.openEmojiPickerActionSheet(obj1);
            return;
          }
        }
        cResult[6] = guildId;
        cResult[7] = onChange;
        cResult[8] = N;
        tmp20 = N;
      }
    }
    if (null != tmp7) {
      const obj5 = { guildId: null, id: null };
      class N {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
          result = obj.openEmojiPickerActionSheet(obj1);
          return;
        }
      }
      obj5.id = tmp7;
      let tmp17 = closure_4(tmp5(15058), obj5);
    } else {
      const obj6 = { resizeMode: "contain", source: null };
      class N {
        constructor() {
          obj = closure_0(closure_2[15]);
          obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
          result = obj.openEmojiPickerActionSheet(obj1);
          return;
        }
      }
      obj6.source = tmp5(17953);
      tmp17 = closure_4(tmp16, obj6);
    }
    cResult[3] = tmp7;
    cResult[4] = guildId;
    cResult[5] = tmp17;
    const tmpResult = guildId(15059);
  }
  let tmp10Result = emojiId;
  if (emojiId == null) {
    tmp5(4523);
    let str = emojiName;
    class N {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { guildId, onPressEmoji() { ... }, pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI };
        result = obj.openEmojiPickerActionSheet(obj1);
        return;
      }
    }
    if (emojiName == null) {
      str = "";
    }
    tmp10Result = tmp10(str, false);
  }
  cResult[0] = emojiId;
  cResult[1] = emojiName;
  cResult[2] = tmp10Result;
  tmp7 = tmp10Result;
  let obj = guildId(576);
}) : ((emoji) => {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  const tmp = closure_6();
  if (emojiId == null) {
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp2(4523).convertSurrogateToName(emojiName, false);
    const tmp2Result = tmp2(4523);
  }
  const tmp4 = onChange(13710)();
  const emojiByIdOrName = guildId(15059).useEmojiByIdOrName(guildId, emojiId);
  if (null != emojiId) {
    let obj = { guildId, id: emojiId };
    let tmp9 = closure_4(tmp2(15058), obj);
    let tmp10 = closure_4;
  } else {
    const obj3 = { resizeMode: "contain", source: tmp2(17953) };
    tmp9 = closure_4(tmp2(5974), obj3);
    tmp10 = closure_4;
    const tmp2Result3 = tmp2(5974);
  }
  const obj4 = {
    style: null,
    accessibilityRole: "link",
    onPress() {
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
  const items1 = [tmp9, , ];
  let obj2 = guildId(15059);
  const items2 = [tmp.content, ];
  const obj5 = { style: items2, children: null };
  items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
  if (null != emojiByIdOrName) {
    let allEmojiNamesString = tmp5(4527).getAllEmojiNamesString(emojiByIdOrName);
    const tmp5Result = tmp5(4527);
  } else {
    const intl = tmp5(1126).intl;
    allEmojiNamesString = intl.string(tmp5(1126).t.gXAN3P);
  }
  obj5.children = allEmojiNamesString;
  items1[1] = tmp10(guildId(1188).LegacyText, obj5);
  const tmp2Result4 = onChange(9442);
  items1[2] = tmp10(guildId(1188).Icon, { size: guildId(1188).Icon.Sizes.MEDIUM, source: onChange(9602) });
  obj4.children = items1;
  return closure_5(tmp2Result4, obj4);
});