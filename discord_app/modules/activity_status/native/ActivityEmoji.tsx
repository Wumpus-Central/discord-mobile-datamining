// discord_app/modules/activity_status/native/ActivityEmoji.tsx
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let closure_5 = createCacheKey.createStyles({ emoji: { flexShrink: 0, width: "100%", height: "100%" }, text: { textAlign: "center", fontFamily: "System" } });
const result = require("obj132").fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

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
  const AnimateEmoji = emoji(4066).AnimateEmoji;
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
      id = emoji.id;
    }
    if (null != id) {
      _undefined(dependencyMap[4]);
      const obj = { id: null, size: 48, animated: null };
      obj[0] = emoji.id;
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
    ReactionIcon = ReactionIcon(7939).ReactionIcon;
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