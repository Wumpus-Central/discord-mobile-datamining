// discord_app/modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  title: { lineHeight: 16, flex: 1 },
  emojis: { height: 28 },
  emojiWrapper: null,
  emoji: null,
};
let size = {
  position: "absolute",
  width: 28,
  height: 28,
  padding: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderWidth: 2,
  borderRadius: 14,
  borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
obj2.emojiWrapper = size;
obj2.emoji = { width: 16, height: 16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelAutocompleteEmojiUpsell(results) {
      const cResult = require("c").c(25);
      results = results.results;
      const tmp4 = closure_7();
      _require = tmp4;
      if (cResult[0] === results) {
        if (cResult[1] === tmp4.emoji) {
          if (cResult[2] === tmp4.emojiWrapper) {
            const result = 24 * cResult[3].length;
            ({ upsell, title } = tmp4);
            if (cResult[8] !== results.length) {
              const intl = tmp(1126).intl;
              const obj2 = { count: results.length };
              const formatResult = intl.format(tmp(1126).t.uEky42, obj2);
              cResult[8] = results.length;
              cResult[9] = formatResult;
              let tmp11 = formatResult;
            } else {
              tmp11 = cResult[9];
            }
            if (cResult[10] === tmp4.title) {
              if (cResult[11] === tmp11) {
                let tmp13 = cResult[12];
              }
              const sum = result + 16;
              if (cResult[13] !== sum) {
                let obj3 = { width: sum };
                cResult[13] = sum;
                cResult[14] = obj3;
                let tmp17 = obj3;
              } else {
                tmp17 = cResult[14];
              }
              if (cResult[15] === tmp4.emojis) {
                if (cResult[16] === tmp17) {
                  let tmp18 = cResult[17];
                }
                if (cResult[18] === tmp5) {
                  if (cResult[19] === tmp18) {
                    let tmp19 = cResult[20];
                  }
                  if (cResult[21] === tmp4.upsell) {
                    if (cResult[22] === tmp13) {
                      if (cResult[23] === tmp19) {
                        let tmp23 = cResult[24];
                      }
                      return tmp23;
                    }
                  }
                  let obj4 = { style: upsell, children: null };
                  let items = [tmp13, tmp19];
                  obj4.children = items;
                  const tmp26 = closure_6(View, obj4);
                  cResult[21] = tmp4.upsell;
                  cResult[22] = tmp13;
                  cResult[23] = tmp19;
                  cResult[24] = tmp26;
                  tmp23 = tmp26;
                }
                const obj5 = { style: tmp18, children: tmp5 };
                const tmp22 = closure_5(View, obj5);
                cResult[18] = tmp5;
                cResult[19] = tmp18;
                cResult[20] = tmp22;
                tmp19 = tmp22;
              }
              const items1 = [tmp4.emojis, tmp17];
              cResult[15] = tmp4.emojis;
              cResult[16] = tmp17;
              cResult[17] = items1;
              tmp18 = items1;
            }
            const obj6 = { style: title, accessibilityRole: "header", variant: "text-sm/medium", children: tmp11 };
            const tmp15 = closure_5(tmp(5087).Text, obj6);
            cResult[10] = tmp4.title;
            cResult[11] = tmp11;
            cResult[12] = tmp15;
            tmp13 = tmp15;
          }
        }
      }
      let num = 3;
      let num2 = 0;
      const substr = results.slice(0, 3);
      if (cResult[5] === tmp4.emoji) {
        if (cResult[6] === tmp4.emojiWrapper) {
          let tmp6 = cResult[7];
        }
        const mapped = substr.map(tmp6);
        cResult[num2] = results;
        cResult[1] = tmp4.emoji;
        num2 = 2;
        cResult[2] = tmp4.emojiWrapper;
        cResult[num] = substr;
        num = 4;
        cResult[4] = mapped;
      }
      const fn = function h(id, arg1) {
        const obj = { style: null, children: null };
        const items = [closure_0.emojiWrapper, { left: 24 * arg1 }];
        obj.style = items;
        const obj3 = { style: closure_0.emoji, source: null };
        if (null != id.id) {
          const obj4 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = id);
          obj4.size = EMOJI_URL_BASE_SIZE;
          let url = AvatarUtilsDefault.getEmojiURL(obj4);
          const tmp3Result = AvatarUtilsDefault;
        } else {
          url = id.url;
        }
        obj3.source = { uri: url };
        obj.children = hasOwnProperty(FastImageDefault, obj3);
        return hasOwnProperty(View, obj, id.id);
      };
      cResult[5] = tmp4.emoji;
      cResult[6] = tmp4.emojiWrapper;
      cResult[7] = fn;
      tmp6 = fn;
      let obj = require("c");
    }
  : function ChannelAutocompleteEmojiUpsell(results) {
      results = results.results;
      const tmp = closure_7();
      _require = tmp;
      const substr = results.slice(0, 3);
      let obj = { style: tmp.upsell, children: null };
      const mapped = substr.map((id, index) => {
        const obj = { style: null, children: null };
        const items = [closure_0.emojiWrapper, { left: 24 * index }];
        obj.style = items;
        const obj3 = { style: closure_0.emoji, source: null };
        if (null != id.id) {
          const obj4 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = id);
          obj4.size = EMOJI_URL_BASE_SIZE;
          let url = AvatarUtilsDefault.getEmojiURL(obj4);
          const tmp3Result = AvatarUtilsDefault;
        } else {
          url = id.url;
        }
        obj3.source = { uri: url };
        obj.children = hasOwnProperty(FastImageDefault, obj3);
        return hasOwnProperty(View, obj, id.id);
      });
      const result = 24 * substr.length;
      const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", children: null };
      const intl = require("util").intl;
      obj2.children = intl.format(require("util").t.uEky42, { count: results.length });
      let items = [closure_5(require("Text/Text").Text, obj2)];
      let obj4 = { style: null, children: mapped };
      const items1 = [tmp.emojis, { width: result + 16 }];
      obj4.style = items1;
      items[1] = closure_5(View, obj4);
      obj.children = items;
      return closure_6(View, obj);
    };
