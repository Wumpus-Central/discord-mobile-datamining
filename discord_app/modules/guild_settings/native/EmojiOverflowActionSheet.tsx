// discord_app/modules/guild_settings/native/EmojiOverflowActionSheet.tsx
import noopAll from "noop" /* 19 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ header: { paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 16 }, emojiImage: { width: 30, height: 30, resizeMode: "contain" } });
const result = require("set").fileFinishedImporting("modules/guild_settings/native/EmojiOverflowActionSheet.tsx");

export default function EmojiOverflowActionSheet(emoji) {
  emoji = emoji.emoji;
  ({ guildId: importAll, onSelectRolesForEmoji } = emoji);
  ({ onEdit: closure_3, onClose } = emoji);
  const tmp = callback4();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.emojiImage, source: null };
  obj = { uri: null };
  let obj3 = importAll(onSelectRolesForEmoji[6]);
  obj[0] = obj3.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj[1] = obj;
  const items = [callback2(onClose, obj), callback2(emoji(onSelectRolesForEmoji[7]).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: ":" + emoji.name + ":" })];
  obj[1] = items;
  const items1 = [callback3(closure_5, obj), ];
  obj3 = { icon: callback2(emoji(onSelectRolesForEmoji[10]).TrashIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  let obj4 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  let intl = emoji(onSelectRolesForEmoji[11]).intl;
  obj4[2] = intl.string(emoji(onSelectRolesForEmoji[11]).t.oyYWHE);
  obj3[1] = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj4);
  obj3[2] = function onPress() {
    emoji(onSelectRolesForEmoji[12]).deleteEmoji(closure_1, emoji.id);
    onClose();
  };
  const items2 = [callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj3), , , ];
  const obj5 = { icon: callback2(emoji(onSelectRolesForEmoji[13]).PencilIcon, {}), label: null, onPress: null };
  let obj6 = { variant: "text-md/semibold", children: null };
  const intl2 = emoji(onSelectRolesForEmoji[11]).intl;
  obj6[1] = intl2.string(emoji(onSelectRolesForEmoji[11]).t.bt75uw);
  obj5[1] = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj6);
  obj5[2] = function onPress() {
    callback();
    onClose();
  };
  items2[1] = callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj5);
  let tmp5Result = null;
  if (null != onSelectRolesForEmoji) {
    const obj7 = { icon: null, label: null, onPress: null };
    obj7[0] = tmp5(tmp3(tmp4[13]).PencilIcon, {});
    const obj8 = { variant: "text-md/semibold", children: null };
    const intl3 = tmp3(tmp4[11]).intl;
    obj8[1] = intl3.string(tmp3(tmp4[11]).t["+riKdA"]);
    obj7[1] = tmp5(tmp3(tmp4[7]).Text, obj8);
    obj7[2] = callback(function*() {
      closure_2 = tmp3;
      let v0 = 1;
      yield closure_1_2(closure_1_0);
      if (1 === tmp7) {
        v0 = 0;
        closure_1 = closure_3;
        if (closure_1 instanceof closure_1_0(closure_1_2[14]).APIError) {
          const anyErrorMessage = closure_1_1.getAnyErrorMessage();
          let id = anyErrorMessage;
          if (anyErrorMessage == null) {
            const intl = closure_1_0(closure_1_2[11]).intl;
            id = intl.string(closure_1_0(closure_1_2[11]).t.R0RpRX);
          }
          closure_1_0(closure_1_2[15]).presentError(id);
          const obj6 = closure_1_0(closure_1_2[15]);
        }
        v0();
        c6 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 0;
          c6 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          id = arg1;
          obj1 = closure_1_0(closure_1_2[12]);
          const obj3 = { guildId: null, emojiId: null, roles: null };
          obj3[0] = closure_1;
          obj3[1] = id.id;
          obj3[2] = id;
          c5 = 3;
          c6 = 1;
          const obj4 = { value: null, done: false };
          obj4[0] = obj1.updateEmoji(obj3);
          return obj4;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        v0 = 0;
      }
      v0 = 0;
      return arg1;
    });
    tmp5Result = tmp5(tmp3(tmp4[9]).TableRow, obj7);
  }
  const obj9 = { children: null };
  const obj10 = { hasIcons: true, children: null };
  items2[2] = tmp5Result;
  const obj11 = { icon: callback2(emoji(onSelectRolesForEmoji[16]).XSmallIcon, {}), label: null, onPress: null };
  const obj12 = { variant: "text-md/semibold", children: null };
  const intl4 = tmp3(tmp4[11]).intl;
  obj12[1] = intl4.string(emoji(onSelectRolesForEmoji[11]).t["ETE/oC"]);
  obj11[1] = callback2(emoji(onSelectRolesForEmoji[7]).Text, obj12);
  obj11[2] = onClose;
  items2[3] = callback2(emoji(onSelectRolesForEmoji[9]).TableRow, obj11);
  obj10[1] = items2;
  items1[1] = callback3(emoji(onSelectRolesForEmoji[8]).TableRowGroup, obj10);
  obj9[0] = items1;
  return callback3(emoji(onSelectRolesForEmoji[5]).ActionSheet, obj9);
};