// === Module 10470: StandardEmojiContent ===

// Module 10470 (StandardEmojiContent)
import nativeDefault from "native" /* 576 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4290 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4294 */;
import Text_Text from "Text/Text" /* 4634 */;
import FastImageDefault from "FastImage" /* 5673 */;
import useSharedMessageEmojiStyles from "useSharedMessageEmojiStyles" /* 10471 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10476 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;

require = fn;
function Emoji(surrogate) {
  surrogate = surrogate.surrogate;
  const obj = {};
  const merged = Object.assign(closure_9());
  const merged1 = Object.assign(useSharedMessageEmojiStyles.useSharedMessageEmojiStyles());
  const uRL = EmojiUtilsDefault.getURL(surrogate);
  const obj4 = { style: obj.emojiWrapper, children: null };
  if ("" !== uRL) {
    const obj5 = { style: obj.emojiIcon, resizeMode: "contain", source: null };
    const obj6 = { uri: uRL };
    obj5.source = obj6;
    let tmp7Result = timestampProducer(FastImageDefault, obj5);
  } else {
    const obj7 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
    tmp7Result = timestampProducer(Text_Text.Text, obj7);
  }
  obj4.children = tmp7Result;
  return timestampProducer(View, obj4);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { emojiSurrogate: { lineHeight: 48, fontSize: 40, margin: 8 }, ctaContainer: { paddingTop: nativeDefault.space.PX_4 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default function StandardEmojiContent(nonce) {
  const emojiNode = nonce.emojiNode;
  let isFavoriteEmoji;
  let obj = {};
  const merged = Object.assign(closure_9());
  const merged1 = Object.assign(emojiNode(isFavoriteEmoji[6]).useSharedMessageEmojiStyles());
  const guildId = SelectedGuildStore.getGuildId();
  const obj2 = emojiNode(isFavoriteEmoji[6]);
  const trackOpenPopout = emojiNode(isFavoriteEmoji[10]).useTrackOpenPopout({ currentGuildId: guildId, nonce: nonce.nonce });
  const items = [emojiNode.surrogate];
  const memo = noop.useMemo(() => UnicodeEmojisDefault.convertSurrogateToBase(emojiNode.surrogate), items);
  const obj3 = emojiNode(isFavoriteEmoji[10]);
  isFavoriteEmoji = emojiNode(isFavoriteEmoji[12]).useIsFavoriteEmoji(guildId, memo);
  const obj5 = { style: obj.emojiContainer, children: null };
  const obj4 = emojiNode(isFavoriteEmoji[12]);
  const obj6 = { surrogate: emojiNode.surrogate };
  const items1 = [closure_6(Emoji, obj6), ];
  const obj7 = { style: obj.emojiDescriptionWrapper, children: null };
  const items2 = [closure_6(emojiNode(isFavoriteEmoji[9]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: memo(isFavoriteEmoji[13])(emojiNode.content) }), ];
  const obj8 = { variant: "text-sm/medium", children: null };
  const intl = emojiNode(isFavoriteEmoji[14]).intl;
  obj8.children = intl.string(emojiNode(isFavoriteEmoji[14]).t.sXdH8c);
  items2[1] = closure_6(emojiNode(isFavoriteEmoji[9]).Text, obj8);
  obj7.children = items2;
  items1[1] = closure_7(View, obj7);
  obj5.children = items1;
  const items3 = [closure_7(View, obj5), closure_6(emojiNode(isFavoriteEmoji[15]).FormDivider, { style: obj.divider }), ];
  const obj10 = { style: obj.ctaContainer, children: null };
  const intl2 = emojiNode(isFavoriteEmoji[14]).intl;
  const string = intl2.string;
  const t = emojiNode(isFavoriteEmoji[14]).t;
  if (isFavoriteEmoji) {
    let stringResult = string(t.Ay49KA);
  } else {
    stringResult = string(t.nNsr67);
  }
  const obj11 = { text: stringResult, variant: null, onPress: null };
  let str = "primary";
  if (isFavoriteEmoji) {
    str = "tertiary";
  }
  const obj12 = { children: null };
  obj11.variant = str;
  obj11.onPress = function onPress() {
    const obj = EmojiActionCreators;
    if (isFavoriteEmoji) {
      obj.unfavoriteEmoji(memo);
    } else {
      obj.favoriteEmoji(memo);
    }
  };
  obj10.children = closure_6(emojiNode(isFavoriteEmoji[16]).Button, obj11);
  items3[2] = closure_6(View, obj10);
  obj12.children = items3;
  return closure_7(closure_8, obj12);
};