// === Module 9181: ActivityEmoji ===

// Module 9181 (ActivityEmoji)
import EmojiDefault from "Emoji" /* 5553 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
let closure_5 = createCacheKey.createStyles({ emoji: { flexShrink: 0, width: "100%", height: "100%" }, text: { textAlign: "center", fontFamily: "System" } });
const result = require("set").fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

export default function ActivityEmoji(emoji) {
  emoji = emoji.emoji;
  ({ size, style, withPlaceholder } = emoji);
  if (withPlaceholder === undefined) {
    withPlaceholder = false;
  }
  let flag = emoji.animate;
  if (flag === undefined) {
    flag = true;
  }
  importDefault = undefined;
  const tmp = callback();
  let ReactionIcon = emoji;
  let obj = dependencyMap;
  const AnimateEmoji = emoji(4136).AnimateEmoji;
  let animated;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    animated = emoji.animated;
  }
  if (animated) {
    animated = setting;
  }
  if (animated) {
    animated = flag;
  }
  const BooleanResult = Boolean(animated);
  importDefault = BooleanResult;
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  const items = [id, BooleanResult];
  const memo = React.useMemo(() => {
    let id;
    if (emoji != null) {
      id = tmp.id;
    }
    if (null != id) {
      let obj = _undefined(closure_1_2[4]);
      obj = { id: null, size: 48, animated: null };
      obj[0] = tmp.id;
      obj[2] = _undefined;
      return obj.getEmojiURL(obj);
    }
  }, items);
  if (null == emoji) {
    if (!withPlaceholder) {
      return null;
    }
  }
  if (null == emoji) {
    ReactionIcon = ReactionIcon(8196).ReactionIcon;
    obj = { style: null, size: "sm" };
    obj[0] = style;
    <ReactionIcon style={null} size="sm" />;
  } else {
    obj = { src: null, name: null, style: null, textEmojiStyle: null, fastImageStyle: null, adjustsFontSizeToFit: true };
    obj[0] = memo;
    obj[1] = emoji.name;
    const items1 = [style, ];
    obj = { width: null, height: null };
    obj[0] = size;
    obj[1] = size;
    items1[1] = obj;
    obj[2] = items1;
    const items2 = [, , ];
    ({ emoji: arr3[0], text: arr3[1] } = tmp);
    obj1 = { fontSize: null };
    obj1[0] = size;
    items2[2] = obj1;
    obj[3] = items2;
    obj[4] = tmp.emoji;
    jsx(EmojiDefault, { width: null, height: null });
  }
};