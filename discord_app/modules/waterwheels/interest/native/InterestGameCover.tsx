// discord_app/modules/waterwheels/interest/native/InterestGameCover.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { cover: null, image: null, name: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_MOD_SUBTLE;
obj2.cover = obj3;
obj2.image = StyleSheet.absoluteFillObject;
const rect = {
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  padding: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj2.name = rect;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default function InterestGameCover(game) {
  game = game.game;
  const tmp = closure_7();
  const rounded = Math.ceil(game.width * React3.get());
  let coverURL = game.getCoverURL(rounded);
  if (coverURL == null) {
    coverURL = game.getIconURL(rounded);
  }
  const obj = { accessible: false, pointerEvents: "none", style: tmp.cover, children: null };
  let tmp6 = null != coverURL;
  if (tmp6) {
    const obj2 = { source: null, style: null, resizeMode: "cover" };
    const obj3 = { uri: coverURL };
    obj2.source = obj3;
    obj2.style = tmp.image;
    tmp6 = hasOwnProperty(FastImageDefault, obj2);
  }
  const items = [tmp6];
  let tmp10 = null == coverURL;
  if (tmp10) {
    const obj4 = { style: tmp.name, children: null };
    const obj5 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 2, children: game.name };
    obj4.children = hasOwnProperty(Text_Text.Text, obj5);
    tmp10 = hasOwnProperty(React4, obj4);
  }
  items[1] = tmp10;
  obj.children = items;
  return timestampProducer(React4, obj);
}
