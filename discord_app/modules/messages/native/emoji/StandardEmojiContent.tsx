// discord_app/modules/messages/native/emoji/StandardEmojiContent.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import UnicodeEmojisDefault from "../../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useSharedMessageEmojiStyles from "useSharedMessageEmojiStyles.tsx";
import EmojiActionCreators from "../../../../actions/EmojiActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
function Emoji(surrogate) {
  surrogate = surrogate.surrogate;
  let obj = {};
  const merged = Object.assign(closure_9());
  let obj1 = useSharedMessageEmojiStyles;
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  let obj2 = EmojiUtilsDefault;
  const uRL = obj2.getURL(surrogate);
  obj = { style: obj.emojiWrapper, children: null };
  if ("" !== uRL) {
    obj = { style: null, resizeMode: "contain", source: null };
    obj.style = obj.emojiIcon;
    obj1 = { uri: uRL };
    obj.source = obj1;
    let tmp7Result = tmp7(FastImageDefault, obj);
  } else {
    obj2 = { style: obj.emojiSurrogate, variant: "text-md/medium", children: surrogate };
    tmp7Result = tmp7(Text_Text.Text, obj2);
  }
  obj.children = tmp7Result;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { emojiSurrogate: { lineHeight: 48, fontSize: 40, margin: 8 }, ctaContainer: null };
createStyles = { paddingTop: nativeDefault.space.PX_4 };
createStyles.ctaContainer = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default function StandardEmojiContent(nonce) {
  const emojiNode = nonce.emojiNode;
  let isFavoriteEmoji;
  let obj = {};
  const merged = Object.assign(closure_9());
  let obj1 = emojiNode(isFavoriteEmoji[6]);
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  const guildId = SelectedGuildStore.getGuildId();
  let obj2 = emojiNode(isFavoriteEmoji[10]);
  const trackOpenPopout = obj2.useTrackOpenPopout({ currentGuildId: guildId, nonce: nonce.nonce });
  const items = [emojiNode.surrogate];
  const memo = noop.useMemo(() => UnicodeEmojisDefault.convertSurrogateToBase(emojiNode.surrogate), items);
  let obj3 = emojiNode(isFavoriteEmoji[12]);
  isFavoriteEmoji = obj3.useIsFavoriteEmoji(guildId, memo);
  obj = { style: obj.emojiContainer, children: null };
  obj = { surrogate: emojiNode.surrogate };
  const items1 = [closure_6(Emoji, obj)];
  obj1 = { style: obj.emojiDescriptionWrapper, children: null };
  const items2 = [
    closure_6(emojiNode(isFavoriteEmoji[9]).Text, {
      variant: "text-md/bold",
      color: "mobile-text-heading-primary",
      children: memo(isFavoriteEmoji[13])(emojiNode.content),
    }),
  ];
  obj2 = { variant: "text-sm/medium", children: null };
  const intl = emojiNode(isFavoriteEmoji[14]).intl;
  obj2.children = intl.string(emojiNode(isFavoriteEmoji[14]).t.sXdH8c);
  items2[1] = closure_6(emojiNode(isFavoriteEmoji[9]).Text, obj2);
  obj1.children = items2;
  items1[1] = closure_7(View, obj1);
  obj.children = items1;
  const items3 = [closure_7(View, obj), ,];
  obj3 = { style: obj.divider };
  items3[1] = closure_6(emojiNode(isFavoriteEmoji[15]).FormDivider, obj3);
  const obj4 = { style: obj.ctaContainer, children: null };
  const intl2 = emojiNode(isFavoriteEmoji[14]).intl;
  const string = intl2.string;
  const t = emojiNode(isFavoriteEmoji[14]).t;
  if (isFavoriteEmoji) {
    let stringResult = string(t.Ay49KA);
  } else {
    stringResult = string(t.nNsr67);
  }
  const obj5 = { text: stringResult, variant: null, onPress: null };
  let str = "primary";
  if (isFavoriteEmoji) {
    str = "tertiary";
  }
  const obj6 = { children: null };
  obj5.variant = str;
  obj5.onPress = function onPress() {
    const obj = EmojiActionCreators;
    if (isFavoriteEmoji) {
      obj.unfavoriteEmoji(memo);
    } else {
      obj.favoriteEmoji(memo);
    }
  };
  obj4.children = closure_6(emojiNode(isFavoriteEmoji[16]).Button, obj5);
  items3[2] = closure_6(View, obj4);
  obj6.children = items3;
  return closure_7(closure_8, obj6);
}
