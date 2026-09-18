// discord_app/modules/guild_settings/native/EmojiOverflowActionSheet.tsx
import EmojiActionCreators from "../../../actions/EmojiActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let closure_8 = createStyles.createStyles({
  header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 },
  emojiImage: { width: 30, height: 30, resizeMode: "contain" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default function EmojiOverflowActionSheet(emoji) {
  emoji = emoji.emoji;
  ({ guildId: importAll, onSelectRolesForEmoji } = emoji);
  ({ onEdit: asyncGeneratorStep, onClose } = emoji);
  const tmp = closure_8();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.emojiImage, source: null };
  const obj3 = { uri: require("AvatarUtils").getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 }) };
  obj2.source = obj3;
  const items = [closure_6(onClose, obj2)];
  const obj4 = require("AvatarUtils");
  const obj5 = { id: emoji.id, animated: emoji.animated, size: 48 };
  items[1] = closure_6(emoji(onSelectRolesForEmoji[7]).Text, {
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: ":" + emoji.name + ":",
  });
  obj.children = items;
  const items1 = [closure_7(closure_5, obj)];
  const obj7 = {
    icon: closure_6(emoji(onSelectRolesForEmoji[10]).TrashIcon, { color: "text-feedback-critical" }),
    label: null,
    onPress: null,
  };
  const obj8 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  let intl = emoji(onSelectRolesForEmoji[11]).intl;
  obj8.children = intl.string(emoji(onSelectRolesForEmoji[11]).t.oyYWHE);
  obj7.label = closure_6(emoji(onSelectRolesForEmoji[7]).Text, obj8);
  obj7.onPress = function onPress() {
    EmojiActionCreators.deleteEmoji(importAll, emoji.id);
    onClose();
  };
  const items2 = [closure_6(emoji(onSelectRolesForEmoji[9]).TableRow, obj7), , ,];
  const obj9 = { icon: closure_6(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}), label: null, onPress: null };
  const obj10 = { variant: "text-md/semibold", children: null };
  const intl2 = emoji(onSelectRolesForEmoji[11]).intl;
  obj10.children = intl2.string(emoji(onSelectRolesForEmoji[11]).t.bt75uw);
  obj9.label = closure_6(emoji(onSelectRolesForEmoji[7]).Text, obj10);
  obj9.onPress = function onPress() {
    asyncGeneratorStep();
    onClose();
  };
  items2[1] = closure_6(emoji(onSelectRolesForEmoji[9]).TableRow, obj9);
  let tmp5Result = null;
  if (null != onSelectRolesForEmoji) {
    const obj11 = { icon: closure_6(tmp3(onSelectRolesForEmoji[13]).PencilIcon, {}), label: null, onPress: null };
    const obj12 = { variant: "text-md/semibold", children: null };
    const intl3 = tmp3(onSelectRolesForEmoji[11]).intl;
    obj12.children = intl3.string(tmp3(onSelectRolesForEmoji[11]).t["+riKdA"]);
    obj11.label = closure_6(tmp3(onSelectRolesForEmoji[7]).Text, obj12);
    obj11.onPress = asyncGeneratorStep(async () => {
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
          return {
            value: emoji(tmp3[12]).updateEmoji({
              guildId: closure_130_1,
              emojiId: closure_130_0.id,
              roles: closure_129_0,
            }),
            done: false,
          };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c4 = 0;
      }
      return value;
    });
    tmp5Result = closure_6(tmp3(onSelectRolesForEmoji[9]).TableRow, obj11);
  }
  const obj13 = { children: null };
  const obj14 = { hasIcons: true, children: null };
  items2[2] = tmp5Result;
  const obj15 = { icon: closure_6(emoji(onSelectRolesForEmoji[16]).XSmallIcon, {}), label: null, onPress: null };
  const obj16 = { variant: "text-md/semibold", children: null };
  const intl4 = tmp3(onSelectRolesForEmoji[11]).intl;
  obj16.children = intl4.string(emoji(onSelectRolesForEmoji[11]).t["ETE/oC"]);
  obj15.label = closure_6(emoji(onSelectRolesForEmoji[7]).Text, obj16);
  obj15.onPress = onClose;
  items2[3] = closure_6(emoji(onSelectRolesForEmoji[9]).TableRow, obj15);
  obj14.children = items2;
  items1[1] = closure_7(emoji(onSelectRolesForEmoji[8]).TableRowGroup, obj14);
  obj13.children = items1;
  return closure_7(emoji(onSelectRolesForEmoji[5]).ActionSheet, obj13);
}
