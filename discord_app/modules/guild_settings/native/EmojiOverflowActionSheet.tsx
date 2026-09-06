// === Module 17566: EmojiOverflowActionSheet ===

// Module 17566 (EmojiOverflowActionSheet)
import EmojiActionCreators from "EmojiActionCreators" /* 10336 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 }, emojiImage: { width: 30, height: 30, resizeMode: "contain" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default function EmojiOverflowActionSheet(emoji) {
  emoji = emoji.emoji;
  ({ guildId: importAll, onSelectRolesForEmoji } = emoji);
  ({ onEdit: asyncGeneratorStep, onClose } = emoji);
  const tmp = closure_8();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.emojiImage, source: null };
  obj = { uri: null };
  let obj3 = require("AvatarUtils");
  obj.uri = obj3.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj.source = obj;
  const items = [closure_6(onClose, obj), closure_6(emoji(onSelectRolesForEmoji[7]).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: ":" + emoji.name + ":" })];
  obj.children = items;
  const items1 = [closure_7(closure_5, obj), ];
  obj3 = { icon: closure_6(emoji(onSelectRolesForEmoji[10]).TrashIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  const obj4 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  let intl = emoji(onSelectRolesForEmoji[11]).intl;
  obj4.children = intl.string(emoji(onSelectRolesForEmoji[11]).t.oyYWHE);
  obj3.label = closure_6(emoji(onSelectRolesForEmoji[7]).Text, obj4);
  obj3.onPress = function onPress() {
    EmojiActionCreators.deleteEmoji(importAll, emoji.id);
    onClose();
  };
  const items2 = [closure_6(emoji(onSelectRolesForEmoji[9]).TableRow, obj3), , , ];
  const obj5 = { icon: closure_6(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}), label: null, onPress: null };
  const obj6 = { variant: "text-md/semibold", children: null };
  const intl2 = emoji(onSelectRolesForEmoji[11]).intl;
  obj6.children = intl2.string(emoji(onSelectRolesForEmoji[11]).t.bt75uw);
  obj5.label = closure_6(emoji(onSelectRolesForEmoji[7]).Text, obj6);
  obj5.onPress = function onPress() {
    asyncGeneratorStep();
    onClose();
  };
  items2[1] = closure_6(emoji(onSelectRolesForEmoji[9]).TableRow, obj5);
  let tmp5Result = null;
  if (null != onSelectRolesForEmoji) {
    const obj7 = { icon: tmp5(tmp3(tmp4[13]).PencilIcon, {}), label: null, onPress: null };
    const obj8 = { variant: "text-md/semibold", children: null };
    const intl3 = tmp3(tmp4[11]).intl;
    obj8.children = intl3.string(tmp3(tmp4[11]).t["+riKdA"]);
    obj7.label = tmp5(tmp3(tmp4[7]).Text, obj8);
    obj7.onPress = asyncGeneratorStep(async (arg0, value) => {
      await onSelectRolesForEmoji(emoji);
      if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        if (closure_129_1 instanceof emoji(tmp3[14]).APIError) {
          const anyErrorMessage = closure_129_1.getAnyErrorMessage();
          emoji = anyErrorMessage;
          if (anyErrorMessage == null) {
            const intl = emoji(tmp3[11]).intl;
            emoji = intl.string(emoji(tmp3[11]).t.R0RpRX);
          }
          emoji(tmp3[15]).presentError(emoji);
          emoji(tmp3[15]);
        }
        closure_130_4();
        c6 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          return { value, done: true };
        } else {
          closure_129_0 = value;
          c5 = 3;
          c6 = 1;
          emoji(tmp3[12]);
          return { value: emoji(tmp3[12]).updateEmoji({ guildId: closure_130_1, emojiId: closure_130_0.id, roles: closure_129_0 }), done: false };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      return value;
    });
    tmp5Result = tmp5(tmp3(tmp4[9]).TableRow, obj7);
  }
  const obj9 = { children: null };
  const obj10 = { hasIcons: true, children: null };
  items2[2] = tmp5Result;
  const obj11 = { icon: closure_6(emoji(onSelectRolesForEmoji[16]).XSmallIcon, {}), label: null, onPress: null };
  const obj12 = { variant: "text-md/semibold", children: null };
  const intl4 = tmp3(tmp4[11]).intl;
  obj12.children = intl4.string(emoji(onSelectRolesForEmoji[11]).t["ETE/oC"]);
  obj11.label = closure_6(emoji(onSelectRolesForEmoji[7]).Text, obj12);
  obj11.onPress = onClose;
  items2[3] = closure_6(emoji(onSelectRolesForEmoji[9]).TableRow, obj11);
  obj10.children = items2;
  items1[1] = closure_7(emoji(onSelectRolesForEmoji[8]).TableRowGroup, obj10);
  obj9.children = items1;
  return closure_7(emoji(onSelectRolesForEmoji[5]).ActionSheet, obj9);
};