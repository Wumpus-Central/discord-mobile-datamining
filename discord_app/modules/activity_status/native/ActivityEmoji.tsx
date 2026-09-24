// discord_app/modules/activity_status/native/ActivityEmoji.tsx
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({
  emoji: { flexShrink: 0, width: "100%", height: "100%" },
  text: { textAlign: "center", fontFamily: "System" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityEmoji.tsx");

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
  const tmp = closure_5();
  let ReactionIcon = emoji;
  const AnimateEmoji = emoji(2020).AnimateEmoji;
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
  const memo = noop.useMemo(() => {
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    if (null != id) {
      const obj2 = { id: emoji.id, size: 48, animated };
      return AvatarUtilsDefault.getEmojiURL(obj2);
    }
  }, items);
  if (null == emoji) {
    if (!withPlaceholder) {
      return null;
    }
  }
  if (null == emoji) {
    ReactionIcon = ReactionIcon(9117).ReactionIcon;
    const obj = { style, size: "sm" };
    <ReactionIcon style={style} size="sm" />;
  } else {
    let obj2 = {
      src: memo,
      name: emoji.name,
      style: null,
      textEmojiStyle: null,
      fastImageStyle: null,
      adjustsFontSizeToFit: true,
    };
    const items1 = [style];
    const size1 = { width: size, height: size };
    items1[1] = size1;
    obj2.style = items1;
    const items2 = [, ,];
    ({ emoji: arr3[0], text: arr3[1] } = tmp);
    const obj3 = { fontSize: size };
    items2[2] = obj3;
    obj2.textEmojiStyle = items2;
    obj2.fastImageStyle = tmp.emoji;
    jsx(EmojiDefault, {
      src: memo,
      name: emoji.name,
      style: null,
      textEmojiStyle: null,
      fastImageStyle: null,
      adjustsFontSizeToFit: true,
    });
  }
}
