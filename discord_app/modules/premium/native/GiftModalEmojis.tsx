// discord_app/modules/premium/native/GiftModalEmojis.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let items = [[100, 0, -40], [120, 40, -10], [100, 80, 10], [180, 20, 20], [140, 95, 15], [250, 0, 0], [250, 80, -20], [400, 90, 10], [400, 20, -20], [410, 0, 40]];
let closure_6 = createCacheKey.createStyles({ emojisContainer: { alignItems: "center", justifyContent: "center", height: 250, width: "100%", position: "absolute", zIndex: 1, paddingBottom: 210 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default function _default(emojiName) {
  emojiName = emojiName.emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  let uRL;
  let obj = emojiName(flag[5]);
  uRL = obj.getURL(emojiName);
  obj = {
    style: callback().emojisContainer,
    children: items.map((arg0, arg1) => {
      let tmp2;
      let tmp3;
      let tmp4;
      [tmp2, tmp3, tmp4] = callback(arg0, 3);
      let obj = { src: callback, name: emojiName, style: null, forceTextEmoji: true };
      obj = { position: "absolute", top: null, left: null, transform: null };
      const tmp = callback(arg0, 3);
      const tmp5 = outer1_4;
      obj[1] = "" + tmp2 + "%";
      obj[2] = "" + tmp3 + "%";
      obj = { rotate: "" + tmp4 + "deg" };
      const items = [obj, ];
      let num = 1;
      if (flag) {
        const _Math = Math;
        num = 1.5 * Math.random() + 0.5;
      }
      items[1] = { scale: num };
      obj[3] = items;
      obj[2] = obj;
      return tmp5(emojiName(flag[6]), obj, "" + arg1 + "-" + emojiName);
    })
  };
  return <View style={callback().emojisContainer}>{items.map((arg0, arg1) => {
    let tmp2;
    let tmp3;
    let tmp4;
    [tmp2, tmp3, tmp4] = callback(arg0, 3);
    let obj = { src: callback, name: emojiName, style: null, forceTextEmoji: true };
    obj = { position: "absolute", top: null, left: null, transform: null };
    const tmp = callback(arg0, 3);
    const tmp5 = outer1_4;
    obj[1] = "" + tmp2 + "%";
    obj[2] = "" + tmp3 + "%";
    obj = { rotate: "" + tmp4 + "deg" };
    const items = [obj, ];
    let num = 1;
    if (flag) {
      const _Math = Math;
      num = 1.5 * Math.random() + 0.5;
    }
    items[1] = { scale: num };
    obj[3] = items;
    obj[2] = obj;
    return tmp5(emojiName(flag[6]), obj, "" + arg1 + "-" + emojiName);
  })}</View>;
};