// === Module 9401: Emoji ===

// Module 9401 (Emoji)
import ThemesDefault from "Themes" /* 712 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4038 */;
import Text from "Text" /* 4734 */;
import preloadDefault from "preload" /* 5449 */;
import styles from "styles" /* 9402 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function Emoji(surrogate) {
  surrogate = surrogate.surrogate;
  let obj = {};
  const merged = Object.assign(callback3());
  obj1 = styles;
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  let obj2 = getEmojiUnavailableReasonDefault;
  const uRL = obj2.getURL(surrogate);
  obj = { style: obj.emojiWrapper, children: null };
  if ("" !== uRL) {
    obj = { style: null, resizeMode: "contain", source: null };
    obj[0] = obj.emojiIcon;
    obj1 = { uri: null };
    obj1[0] = uRL;
    obj[2] = obj1;
    let tmp7Result = callback(preloadDefault, obj);
  } else {
    obj2 = { style: null, variant: "text-md/medium", children: null };
    obj2[0] = obj.emojiSurrogate;
    obj2[2] = surrogate;
    tmp7Result = callback(Text.Text, obj2);
  }
  obj[1] = tmp7Result;
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
const createCacheKey = { paddingTop: ThemesDefault.space.PX_4 };
createCacheKey[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/messages/native/emoji/StandardEmojiContent.tsx");

export default function StandardEmojiContent(nonce) {
  const emojiNode = nonce.emojiNode;
  let isFavoriteEmoji;
  let obj = {};
  const merged = Object.assign(callback3());
  obj1 = emojiNode(isFavoriteEmoji[6]);
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  guildId = guildId.getGuildId();
  let obj2 = emojiNode(isFavoriteEmoji[10]);
  const trackOpenPopout = obj2.useTrackOpenPopout({ currentGuildId: guildId, nonce: nonce.nonce });
  const items = [emojiNode.surrogate];
  const memo = React.useMemo(() => memo(isFavoriteEmoji[11]).convertSurrogateToBase(emojiNode.surrogate), items);
  let obj3 = emojiNode(isFavoriteEmoji[12]);
  isFavoriteEmoji = obj3.useIsFavoriteEmoji(guildId, memo);
  obj = { surrogate: emojiNode.surrogate };
  const items1 = [callback(Emoji, obj), ];
  obj1 = { style: obj.emojiDescriptionWrapper, children: null };
  const items2 = [callback(emojiNode(isFavoriteEmoji[9]).Text, { variant: "text-md/bold", color: "mobile-text-heading-primary", children: memo(isFavoriteEmoji[13])(emojiNode.content) }), ];
  obj2 = { variant: "text-sm/medium", children: null };
  const intl = emojiNode(isFavoriteEmoji[14]).intl;
  obj2[1] = intl.string(emojiNode(isFavoriteEmoji[14]).t.sXdH8c);
  items2[1] = callback(emojiNode(isFavoriteEmoji[9]).Text, obj2);
  obj1[1] = items2;
  items1[1] = callback2(View, obj1);
  obj[1] = items1;
  const items3 = [callback2(View, obj), , ];
  obj3 = { style: obj.divider };
  items3[1] = callback(emojiNode(isFavoriteEmoji[15]).FormDivider, obj3);
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
  obj5[1] = str;
  obj5[2] = function onPress() {
    const obj = emojiNode(isFavoriteEmoji[17]);
    if (isFavoriteEmoji) {
      obj.unfavoriteEmoji(memo);
    } else {
      obj.favoriteEmoji(memo);
    }
  };
  obj4[1] = callback(emojiNode(isFavoriteEmoji[16]).Button, obj5);
  items3[2] = callback(View, obj4);
  obj6[0] = items3;
  return callback2(closure_8, obj6);
};