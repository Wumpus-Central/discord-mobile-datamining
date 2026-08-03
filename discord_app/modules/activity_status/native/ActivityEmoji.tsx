import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ emoji: { flexShrink: 0, width: "100%", height: "100%" }, text: { textAlign: "center", fontFamily: "System" } });
const result = require("createCacheKey").fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

export default function ActivityEmoji(emoji) {
  let size;
  let style;
  let withPlaceholder;
  emoji = emoji.emoji;
  ({ size, style, withPlaceholder } = emoji);
  if (withPlaceholder === undefined) {
    withPlaceholder = false;
  }
  let flag = emoji.animate;
  if (flag === undefined) {
    flag = true;
  }
  let importDefault;
  const tmp = callback();
  let ReactionIcon = emoji;
  let obj = dependencyMap;
  const AnimateEmoji = emoji(3866).AnimateEmoji;
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
      let obj = _undefined(outer1_2[4]);
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
    ReactionIcon = ReactionIcon(6579).ReactionIcon;
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
    const obj1 = { fontSize: null };
    obj1[0] = size;
    items2[2] = obj1;
    obj[3] = items2;
    obj[4] = tmp.emoji;
    jsx(importDefault(5210), { width: null, height: null });
  }
};