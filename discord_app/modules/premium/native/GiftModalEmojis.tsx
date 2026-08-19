// discord_app/modules/premium/native/GiftModalEmojis.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

noopAll;
let items = [[100, 0, -40], [120, 40, -10], [100, 80, 10], [180, 20, 20], [140, 95, 15], [250, 0, 0], [250, 80, -20], [400, 90, 10], [400, 20, -20], [410, 0, 40]];
let closure_6 = createCacheKey.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
const result = require("obj132").fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default function _default(emojiName) {
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  let obj = emojiName(flag[5]);
  const uRL = obj.getURL(emojiName);
  obj = {
    style: callback().emojisContainer,
    children: items.map((item, index) => {
      [tmp2, tmp3, tmp4] = callback(item, 3);
      let obj = { position: "absolute", top: null, left: null, transform: null };
      const tmp = callback(item, 3);
      obj[1] = "" + tmp2 + "%";
      obj[2] = "" + tmp3 + "%";
      obj = { rotate: "" + tmp4 + "deg" };
      items = [obj, ];
      let num = 1;
      if (flag) {
        const _Math = Math;
        num = 1.5 * Math.random() + 0.5;
      }
      items[1] = { scale: num };
      obj[3] = items;
      obj[2] = obj;
      return jsx(emojiName(flag[6]), { rotate: "" + tmp4 + "deg" }, "" + index + "-" + emojiName);
    })
  };
  return <View style={callback().emojisContainer}>{items.map((item, index) => {
    [tmp2, tmp3, tmp4] = callback(item, 3);
    let obj = { position: "absolute", top: null, left: null, transform: null };
    const tmp = callback(item, 3);
    obj[1] = "" + tmp2 + "%";
    obj[2] = "" + tmp3 + "%";
    obj = { rotate: "" + tmp4 + "deg" };
    items = [obj, ];
    let num = 1;
    if (flag) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    items[1] = { scale: num };
    obj[3] = items;
    obj[2] = obj;
    return jsx(emojiName(flag[6]), { rotate: "" + tmp4 + "deg" }, "" + index + "-" + emojiName);
  })}</View>;
};