// === Module 12040: ChannelAutocompleteEmojiUpsell ===

// Module 12040 (ChannelAutocompleteEmojiUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import FastImageDefault from "FastImage" /* 5981 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, results;

let hasOwnProperty;
let metroRequire;
let size;
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, title: { lineHeight: 16, flex: 1 }, emojis: { height: 28 }, emojiWrapper: size, emoji: { width: 16, height: 16 } };
size = { position: "absolute", width: 28, height: 28, padding: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderRadius: 14, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((results) => {
  let arr2;
  let closure_0;
  let items;
  let title;
  let tmp5;
  let upsell;
  let obj = require("react");
  const cResult = obj.c(25);
  results = results.results;
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] === results) {
    if (cResult[1] === tmp4.emoji) {
      let tmp9;
      if (cResult[2] === tmp4.emojiWrapper) {
        arr2 = cResult[3];
        tmp5 = cResult[4];
      }
      const result = 24 * arr2.length;
      ({ upsell, title } = tmp4);
      if (cResult[8] !== results.length) {
        const intl = tmp(1126).intl;
        let obj2 = { count: results.length };
        const formatResult = intl.format(require("intl").t.uEky42, obj2);
        cResult[8] = results.length;
        cResult[9] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[9];
      }
      if (cResult[10] === tmp4.title) {
        let tmp11;
        let tmp15;
        if (cResult[11] === tmp9) {
          tmp11 = cResult[12];
        }
        const sum = result + 16;
        if (cResult[13] !== sum) {
          let obj3 = { width: sum };
          cResult[13] = sum;
          cResult[14] = obj3;
          tmp15 = obj3;
        } else {
          tmp15 = cResult[14];
        }
        if (cResult[15] === tmp4.emojis) {
          let tmp16;
          if (cResult[16] === tmp15) {
            tmp16 = cResult[17];
          }
          if (cResult[18] === tmp5) {
            let tmp17;
            if (cResult[19] === tmp16) {
              tmp17 = cResult[20];
            }
            if (cResult[21] === tmp4.upsell) {
              if (cResult[22] === tmp11) {
                let tmp21;
                if (cResult[23] === tmp17) {
                  tmp21 = cResult[24];
                }
                return tmp21;
              }
            }
            let obj4 = { style: upsell, children: items };
            items = [tmp11, tmp17];
            const tmp24 = closure_6(View, obj4);
            cResult[21] = tmp4.upsell;
            cResult[22] = tmp11;
            cResult[23] = tmp17;
            cResult[24] = tmp24;
            tmp21 = tmp24;
          }
          const obj5 = { style: tmp16, children: tmp5 };
          const tmp20 = closure_5(View, obj5);
          cResult[18] = tmp5;
          cResult[19] = tmp16;
          cResult[20] = tmp20;
          tmp17 = tmp20;
        }
        const items1 = [tmp4.emojis, tmp15];
        cResult[15] = tmp4.emojis;
        cResult[16] = tmp15;
        cResult[17] = items1;
        tmp16 = items1;
      }
      const obj6 = { style: title, accessibilityRole: "header", variant: "text-sm/medium", children: tmp9 };
      const tmp13 = closure_5(require("Text/Text").Text, obj6);
      cResult[10] = tmp4.title;
      cResult[11] = tmp9;
      cResult[12] = tmp13;
      tmp11 = tmp13;
    }
  }
  const substr = results.slice(0, 3);
  if (cResult[5] === tmp4.emoji) {
    let tmp6;
    if (cResult[6] === tmp4.emojiWrapper) {
      tmp6 = cResult[7];
    }
    const mapped = substr.map(tmp6);
    cResult[0] = results;
    cResult[1] = tmp4.emoji;
    cResult[2] = tmp4.emojiWrapper;
    cResult[3] = substr;
    cResult[4] = mapped;
    tmp5 = mapped;
    arr2 = substr;
  }
  const fn = function h(id, arg1) {
    let items;
    let obj3;
    let tmp5;
    let url;
    const obj = { style: items, children: hasOwnProperty(tmp5, obj3) };
    items = [closure_0.emojiWrapper, ];
    const obj2 = { left: 24 * arg1 };
    items[1] = obj2;
    obj3 = { style: closure_0.emoji, source: { uri: url } };
    tmp5 = FastImageDefault;
    if (null != id.id) {
      const obj4 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj5.id, animated: obj5.animated } = id);
      const tmp3Result = AvatarUtilsDefault;
      url = tmp3Result.getEmojiURL(obj4);
    } else {
      url = id.url;
    }
    return hasOwnProperty(View, obj, id.id);
  };
  cResult[5] = tmp4.emoji;
  cResult[6] = tmp4.emojiWrapper;
  cResult[7] = fn;
  tmp6 = fn;
}) : ((results) => {
  let closure_0;
  let intl;
  let items;
  let items1;
  let obj3;
  results = results.results;
  const tmp = closure_7();
  _require = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell, children: items };
  const mapped = substr.map((id, index) => {
    let items;
    let obj3;
    let tmp5;
    let url;
    const obj = { style: items, children: hasOwnProperty(tmp5, obj3) };
    items = [closure_0.emojiWrapper, ];
    const obj2 = { left: 24 * index };
    items[1] = obj2;
    obj3 = { style: closure_0.emoji, source: { uri: url } };
    tmp5 = FastImageDefault;
    if (null != id.id) {
      const obj4 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj5.id, animated: obj5.animated } = id);
      const tmp3Result = AvatarUtilsDefault;
      url = tmp3Result.getEmojiURL(obj4);
    } else {
      url = id.url;
    }
    return hasOwnProperty(View, obj, id.id);
  });
  const result = 24 * substr.length;
  let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", children: intl.format(require("intl").t.uEky42, obj3) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj3 = { count: results.length };
  items = [closure_5(Text, obj2), ];
  let obj4 = { style: items1, children: mapped };
  items1 = [tmp.emojis, ];
  const obj5 = { width: result + 16 };
  items1[1] = obj5;
  items[1] = closure_5(View, obj4);
  return closure_6(View, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default tmp4;