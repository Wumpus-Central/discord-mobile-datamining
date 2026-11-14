// === Module 11300: StandardEmojiContent ===

// Module 11300 (StandardEmojiContent)
import nativeDefault from "native" /* 575 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5252 */;
import EmojiUtilsDefault from "EmojiUtils" /* 5256 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import useSharedMessageEmojiStyles from "useSharedMessageEmojiStyles" /* 11301 */;
import EmojiActionCreators from "EmojiActionCreators" /* 11305 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;

require = fn;
function Emoji(surrogate) {
  surrogate = surrogate.surrogate;
  const obj = {};
  const merged = Object.assign(closure_9());
  const merged1 = Object.assign(useSharedMessageEmojiStyles.useSharedMessageEmojiStyles());
  const uRL = EmojiUtilsDefault.getURL(surrogate);
  if ("" !== uRL) {
    const obj4 = { style: obj.emojiIcon, resizeMode: "contain", source: null };
    const obj5 = { uri: uRL };
    obj4.source = obj5;
    let tmp9 = timestampProducer(FastImageDefault, obj4);
  } else {
    const obj6 = { style: obj.emojiWrapper, children: null };
    const obj7 = { style: obj.emojiSurrogate, variant: "body-md/medium", children: surrogate };
    obj6.children = timestampProducer(Text_Text.Text, obj7);
    tmp9 = timestampProducer(View, obj6);
  }
  return tmp9;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5306);
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
  items = [emojiNode.surrogate];
  const memo = noop.useMemo(() => UnicodeEmojisDefault.convertSurrogateToBase(emojiNode.surrogate), items);
  const obj3 = emojiNode(isFavoriteEmoji[10]);
  isFavoriteEmoji = emojiNode(isFavoriteEmoji[12]).useIsFavoriteEmoji(guildId, memo);
  const obj5 = { style: obj.emojiContainer, children: null };
  const obj4 = emojiNode(isFavoriteEmoji[12]);
  const obj6 = { surrogate: emojiNode.surrogate };
  const items1 = [closure_6(Emoji, obj6), ];
  const obj7 = { style: obj.emojiDescriptionWrapper, children: null };
  const items2 = [closure_6(emojiNode(isFavoriteEmoji[9]).Text, { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: memo(isFavoriteEmoji[13])(emojiNode.content) }), ];
  const obj8 = { variant: "body-sm/medium", children: null };
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