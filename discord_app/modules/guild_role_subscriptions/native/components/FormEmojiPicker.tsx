// === Module 19847: FormEmojiPicker ===

// Module 19847 (FormEmojiPicker)
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9891 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const EmojiIntention = fn(1392).EmojiIntention;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormEmojiPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FormEmojiPicker(onChange) {
  const cResult = guildId(576).c(22);
  ({ emoji, guildId } = onChange);
  onChange = onChange.onChange;
  ({ emojiId, emojiName } = emoji);
  let tmp4 = onChange;
  const tmp5 = onChange(15640)();
  if (cResult[0] === emojiId) {
    if (cResult[1] === emojiName) {
      let tmp6 = cResult[2];
    }
    const emojiByIdOrName = guildId(17107).useEmojiByIdOrName(guildId, tmp6);
    if (cResult[3] !== emojiByIdOrName) {
      let allEmojiNamesString = null;
      if (null != emojiByIdOrName) {
        allEmojiNamesString = guildId(4955).getAllEmojiNamesString(emojiByIdOrName);
        const tmpResult2 = guildId(4955);
      }
      cResult[3] = emojiByIdOrName;
      cResult[4] = allEmojiNamesString;
      let tmp10 = allEmojiNamesString;
    } else {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = guildId(1125).intl;
      const stringResult = intl.string(guildId(1125).t.gXAN3P);
      cResult[5] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp6) {
      if (cResult[7] === guildId) {
        if (cResult[9] === guildId) {
          if (cResult[10] === onChange) {
            let tmp21 = cResult[11];
          }
          if (cResult[12] !== tmp10) {
            let tmp24 = tmp10;
            if (tmp10 == null) {
              let obj2 = { variant: "text-md/medium", color: "text-muted", children: tmp13 };
              tmp24 = jsx(guildId(5271).Text, { variant: "text-md/medium", color: "text-muted", children: tmp13 });
            }
            cResult[12] = tmp10;
            cResult[13] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[13];
          }
          if (tmp10 == null) {
            tmp10 = tmp13;
          }
          if (cResult[14] === tmp15) {
            if (cResult[15] === tmp21) {
              if (cResult[16] === tmp22) {
                if (cResult[17] === tmp10) {
                  let tmp27 = cResult[18];
                }
                if (cResult[19] === tmp5.inputContainer) {
                  if (cResult[20] === tmp27) {
                    let tmp30 = cResult[21];
                  }
                  return tmp30;
                }
                const obj3 = { style: tmp5.inputContainer, children: tmp27 };
                const tmp33 = <View style={tmp5.inputContainer}>{tmp27}</View>;
                cResult[19] = tmp5.inputContainer;
                cResult[20] = tmp27;
                cResult[21] = tmp33;
                tmp30 = tmp33;
              }
            }
          }
          const obj4 = { start: true, end: true, icon: tmp15, label: tmp22, accessibilityLabel: tmp10, arrow: true, onPress: tmp21 };
          const tmp29 = jsx(guildId(6963).TableRow, { start: true, end: true, icon: tmp15, label: tmp22, accessibilityLabel: tmp10, arrow: true, onPress: tmp21 });
          cResult[14] = tmp15;
          cResult[15] = tmp21;
          cResult[16] = tmp22;
          cResult[17] = tmp10;
          cResult[18] = tmp29;
          tmp27 = tmp29;
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
        cResult[9] = guildId;
        cResult[10] = onChange;
        cResult[11] = handleSelectEmoji;
        tmp21 = handleSelectEmoji;
      }
    }
    if (null != tmp6) {
      tmp4 = tmp4(17106);
      const obj5 = { guildId, id: tmp6 };
      let tmp18 = <tmp4 guildId={guildId} id={tmp6} />;
    } else {
      const obj6 = { IconComponent: guildId(9413).ReactionIcon };
      tmp18 = jsx(guildId(6963).TableRow.Icon, { IconComponent: guildId(9413).ReactionIcon });
    }
    cResult[6] = tmp6;
    cResult[7] = guildId;
    cResult[8] = tmp18;
    const tmpResult = guildId(17107);
  }
  let result = emojiId;
  if (emojiId == null) {
    let str = emojiName;
    if (emojiName == null) {
      str = "";
    }
    result = tmp4(4951).convertSurrogateToName(str, false);
    const tmp4Result = tmp4(4951);
  }
  cResult[0] = emojiId;
  cResult[1] = emojiName;
  cResult[2] = result;
  tmp6 = result;
  let obj = guildId(576);
}) : (function FormEmojiPicker(emoji) {
  ({ emojiId, emojiName } = emoji.emoji);
  const guildId = emoji.guildId;
  const onChange = emoji.onChange;
  if (emojiId == null) {
    if (emojiName == null) {
      emojiName = "";
    }
    emojiId = tmp(4951).convertSurrogateToName(emojiName, false);
    const tmpResult = tmp(4951);
  }
  const tmp3 = onChange(15640)();
  const emojiByIdOrName = guildId(17107).useEmojiByIdOrName(guildId, emojiId);
  let allEmojiNamesString = null;
  if (null != emojiByIdOrName) {
    allEmojiNamesString = tmp4(4955).getAllEmojiNamesString(emojiByIdOrName);
    const tmp4Result = tmp4(4955);
  }
  const intl = tmp4(1125).intl;
  const stringResult = intl.string(guildId(1125).t.gXAN3P);
  if (null != emojiId) {
    let obj = { guildId, id: emojiId };
    let tmp9 = jsx(tmp(17106), { guildId, id: emojiId });
    let tmp8 = jsx;
  } else {
    tmp8 = jsx;
    const obj3 = { IconComponent: tmp4(9413).ReactionIcon };
    tmp9 = jsx(tmp4(6963).TableRow.Icon, { IconComponent: tmp4(9413).ReactionIcon });
  }
  const obj4 = { style: tmp3.inputContainer, children: null };
  const obj5 = { start: true, end: true, icon: tmp9, label: null, accessibilityLabel: null, arrow: true, onPress: null };
  let tmp8Result = allEmojiNamesString;
  if (allEmojiNamesString == null) {
    const obj6 = { variant: "text-md/medium", color: "text-muted", children: stringResult };
    tmp8Result = tmp8(tmp4(5271).Text, obj6);
  }
  obj5.label = tmp8Result;
  if (allEmojiNamesString == null) {
    allEmojiNamesString = stringResult;
  }
  obj5.accessibilityLabel = allEmojiNamesString;
  obj5.onPress = function handleSelectEmoji() {
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
  };
  obj4.children = tmp8(guildId(6963).TableRow, obj5);
  return tmp8(View, obj4);
});