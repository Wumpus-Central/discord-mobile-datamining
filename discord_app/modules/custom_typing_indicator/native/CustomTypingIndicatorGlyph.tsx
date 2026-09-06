// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const result = require("set").fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx",
);

export default function CustomTypingIndicatorGlyph(config) {
  let map = config.config;
  const size = config.size;
  dependencyMap = undefined;
  let obj = dependencyMap;
  const tmp = callback();
  const tmp2 = map;
  dependencyMap = map(1392).getEffectiveCustomTypingIndicatorAnimation(map);
  const obj2 = map(1392);
  if (obj3.hasCustomTypingIndicatorEmojis(map.emojis)) {
    let items = [tmp.emojiRow];
    if (null == size) {
      let PX_4 = size(576).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    obj = { style: null, children: null };
    obj = { gap: null };
    obj[0] = PX_4;
    items[1] = obj;
    obj[0] = items;
    items = map.emojis;
    map = items.map;
    obj[1] = map((emoji, index) =>
      closure_1_4(size(table[7]), { emoji, index, emojiCount: map.emojis.length, animation: table, size }, index),
    );
    tmp3(View, obj);
    const tmp4 = View;
  } else {
    return tmp3(tmp2(1178).Ellipsis, {});
  }
}
