// discord_app/modules/activity_status/native/ActivityEmoji.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({
  emoji: { flexShrink: 0, width: "100%", height: "100%" },
  text: { textAlign: "center", fontFamily: "System" },
});
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

export default function ActivityEmoji(emoji) {
  let style;
  let tmp9;
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
  importDefault = undefined;
  const tmp = closure_5();
  const AnimateEmoji = emoji(2028).AnimateEmoji;
  let animated;
  const setting = AnimateEmoji.useSetting();
  const _Boolean = Boolean;
  const tmp2 = emoji;
  if (emoji != null) {
    animated = emoji.animated;
  }
  if (animated) {
    animated = setting;
  }
  if (animated) {
    animated = flag;
  }
  const _BooleanResult = _Boolean(animated);
  importDefault = _BooleanResult;
  let id;
  if (emoji != null) {
    id = emoji.id;
  }
  const items = [id, _BooleanResult];
  if (null != emoji) {
    let tmp11;
    if (null == emoji) {
      tmp11 = jsx(tmp2(8444).ReactionIcon, { style, size: "sm" });
    } else {
      const items1 = [style];
      const size1 = { width: size, height: size };
      items1[1] = size1;
      const items2 = [, ,];
      ({ emoji: arr3[0], text: arr3[1] } = tmp);
      const obj3 = { fontSize: size };
      items2[2] = obj3;
      tmp11 = jsx(EmojiDefault, {
        src: tmp8,
        name: emoji.name,
        style: items1,
        textEmojiStyle: items2,
        fastImageStyle: tmp.emoji,
        adjustsFontSizeToFit: true,
      });
    }
    tmp9 = tmp11;
  } else {
    tmp9 = null;
  }
  return tmp9;
}
