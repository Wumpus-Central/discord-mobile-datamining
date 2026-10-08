// discord_app/modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const Fonts = fn(1085).Fonts;
const EmojiIntention = fn(1392).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
  placeholder: null,
  text: null,
};
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

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormEmojiPicker(onChange) {
      const cResult = guildId(576).c(26);
      ({ emoji, guildId } = onChange);
      onChange = onChange.onChange;
      ({ emojiId, emojiName } = emoji);
      const tmp4 = closure_6();
      const tmp6 = onChange(13950)();
      if (cResult[0] === emojiId) {
        if (cResult[1] === emojiName) {
          let tmp7 = cResult[2];
        }
        const emojiByIdOrName = guildId(15336).useEmojiByIdOrName(guildId, tmp7);
        if (cResult[3] === tmp7) {
          if (cResult[4] === guildId) {
            if (cResult[6] === guildId) {
              if (cResult[7] === onChange) {
                let tmp18 = cResult[8];
              }
              if (cResult[9] === tmp6.textInput) {
                if (cResult[10] === tmp4.container) {
                  let tmp19 = cResult[11];
                }
                const tmp21 = null != emojiByIdOrName ? tmp4.text : tmp4.placeholder;
                if (cResult[12] === tmp4.content) {
                  if (cResult[13] === tmp21) {
                    let tmp22 = cResult[14];
                  }
                  if (cResult[15] !== emojiByIdOrName) {
                    if (null != emojiByIdOrName) {
                      let allEmojiNamesString = guildId(4725).getAllEmojiNamesString(emojiByIdOrName);
                      const tmpResult2 = guildId(4725);
                    } else {
                      const intl = guildId(1126).intl;
                      allEmojiNamesString = intl.string(guildId(1126).t.gXAN3P);
                    }
                    cResult[15] = emojiByIdOrName;
                    cResult[16] = allEmojiNamesString;
                  } else {
                    if (cResult[17] === tmp22) {
                      if (cResult[18] === tmp23) {
                        let tmp26 = cResult[19];
                      }
                      const _Symbol = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        let obj2 = { size: guildId(1200).Icon.Sizes.MEDIUM, source: tmp5(10808) };
                        const tmp32 = closure_4(guildId(1200).Icon, obj2);
                        cResult[20] = tmp32;
                        let tmp30 = tmp32;
                      } else {
                        tmp30 = cResult[20];
                      }
                      if (cResult[21] === tmp11) {
                        if (cResult[22] === tmp18) {
                          if (cResult[23] === tmp19) {
                            if (cResult[24] === tmp26) {
                              let tmp33 = cResult[25];
                            }
                            return tmp33;
                          }
                        }
                      }
                      const obj3 = { style: tmp19, accessibilityRole: "link", onPress: tmp18, children: null };
                      const items = [tmp11, tmp26, tmp30];
                      obj3.children = items;
                      const tmp35 = closure_5(tmp5(7013), obj3);
                      cResult[21] = tmp11;
                      cResult[22] = tmp18;
                      cResult[23] = tmp19;
                      cResult[24] = tmp26;
                      cResult[25] = tmp35;
                      tmp33 = tmp35;
                    }
                    const obj4 = { style: tmp22, children: cResult[16] };
                    const tmp28 = closure_4(guildId(1200).LegacyText, obj4);
                    cResult[17] = tmp22;
                    cResult[18] = cResult[16];
                    cResult[19] = tmp28;
                    tmp26 = tmp28;
                  }
                }
                const items1 = [tmp4.content, tmp21];
                cResult[12] = tmp4.content;
                cResult[13] = tmp21;
                cResult[14] = items1;
                tmp22 = items1;
              }
              const items2 = [tmp4.container, tmp6.textInput];
              cResult[9] = tmp6.textInput;
              cResult[10] = tmp4.container;
              cResult[11] = items2;
              tmp19 = items2;
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
                pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
              });
            }
            cResult[6] = guildId;
            cResult[7] = onChange;
            cResult[8] = handleSelectEmoji;
            tmp18 = handleSelectEmoji;
          }
        }
        if (null != tmp7) {
          const obj5 = { guildId, id: tmp7 };
          let tmp15 = closure_4(tmp5(15335), obj5);
        } else {
          const obj6 = { resizeMode: "contain", source: tmp5(18286) };
          tmp15 = closure_4(tmp5(6164), obj6);
          const tmp5Result = tmp5(6164);
        }
        cResult[3] = tmp7;
        cResult[4] = guildId;
        cResult[5] = tmp15;
        const tmpResult = guildId(15336);
      }
      let result = emojiId;
      if (emojiId == null) {
        let str = emojiName;
        if (emojiName == null) {
          str = "";
        }
        result = tmp5(4721).convertSurrogateToName(str, false);
        const tmp5Result2 = tmp5(4721);
      }
      cResult[0] = emojiId;
      cResult[1] = emojiName;
      cResult[2] = result;
      tmp7 = result;
      let obj = guildId(576);
    }
  : function FormEmojiPicker(emoji) {
      ({ emojiId, emojiName } = emoji.emoji);
      const guildId = emoji.guildId;
      const onChange = emoji.onChange;
      const tmp = closure_6();
      if (emojiId == null) {
        if (emojiName == null) {
          emojiName = "";
        }
        emojiId = tmp2(4721).convertSurrogateToName(emojiName, false);
        const tmp2Result = tmp2(4721);
      }
      const tmp4 = onChange(13950)();
      const emojiByIdOrName = guildId(15336).useEmojiByIdOrName(guildId, emojiId);
      if (null != emojiId) {
        let obj = { guildId, id: emojiId };
        let tmp9 = closure_4(tmp2(15335), obj);
        let tmp10 = closure_4;
      } else {
        const obj3 = { resizeMode: "contain", source: tmp2(18286) };
        tmp9 = closure_4(tmp2(6164), obj3);
        tmp10 = closure_4;
        const tmp2Result3 = tmp2(6164);
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
            pickerIntention: EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
          });
        },
        children: null,
      };
      const items = [tmp.container, tmp4.textInput];
      obj4.style = items;
      const items1 = [tmp9, ,];
      let obj2 = guildId(15336);
      const items2 = [tmp.content];
      const obj5 = { style: items2, children: null };
      items2[1] = null != emojiByIdOrName ? tmp.text : tmp.placeholder;
      if (null != emojiByIdOrName) {
        let allEmojiNamesString = tmp5(4725).getAllEmojiNamesString(emojiByIdOrName);
        const tmp5Result = tmp5(4725);
      } else {
        const intl = tmp5(1126).intl;
        allEmojiNamesString = intl.string(tmp5(1126).t.gXAN3P);
      }
      obj5.children = allEmojiNamesString;
      items1[1] = tmp10(guildId(1200).LegacyText, obj5);
      const tmp2Result4 = onChange(7013);
      items1[2] = tmp10(guildId(1200).Icon, { size: guildId(1200).Icon.Sizes.MEDIUM, source: onChange(10808) });
      obj4.children = items1;
      return closure_5(tmp2Result4, obj4);
    };
