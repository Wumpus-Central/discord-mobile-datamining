// discord_app/modules/waterwheels/interest/native/InterestGameCover.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5004);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameCover.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function InterestGameCover(game) {
      const cResult = c.c(14);
      game = game.game;
      const tmp4 = closure_7();
      const rounded = Math.ceil(game.width * React3.get());
      if (cResult[0] === game) {
        if (cResult[1] === rounded) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.image) {
          if (cResult[4] === tmp6) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === game.name) {
            if (cResult[7] === tmp4.name) {
              if (cResult[8] === tmp6) {
                let tmp13 = cResult[9];
              }
              if (cResult[10] === tmp4.cover) {
                if (cResult[11] === tmp8) {
                  if (cResult[12] === tmp13) {
                    let tmp18 = cResult[13];
                  }
                  return tmp18;
                }
              }
              const obj2 = { accessible: false, pointerEvents: "none", style: tmp4.cover, children: null };
              const items = [tmp8, tmp13];
              obj2.children = items;
              const tmp21 = timestampProducer(React4, obj2);
              cResult[10] = tmp4.cover;
              cResult[11] = tmp8;
              cResult[12] = tmp13;
              cResult[13] = tmp21;
              tmp18 = tmp21;
            }
          }
          let tmp15 = null == tmp6;
          if (tmp15) {
            const obj3 = { style: tmp4.name, children: null };
            const obj4 = {
              variant: "text-xs/semibold",
              color: "mobile-text-heading-primary",
              lineClamp: 2,
              children: game.name,
            };
            obj3.children = hasOwnProperty(Text_Text.Text, obj4);
            tmp15 = hasOwnProperty(React4, obj3);
          }
          cResult[6] = game.name;
          cResult[7] = tmp4.name;
          cResult[8] = tmp6;
          cResult[9] = tmp15;
          tmp13 = tmp15;
        }
        let tmp10 = null != tmp6;
        if (tmp10) {
          const obj5 = { source: null, style: null, resizeMode: "cover" };
          const obj6 = { uri: tmp6 };
          obj5.source = obj6;
          obj5.style = tmp4.image;
          tmp10 = hasOwnProperty(FastImageDefault, obj5);
        }
        cResult[3] = tmp4.image;
        cResult[4] = tmp6;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      let coverURL = game.getCoverURL(rounded);
      if (coverURL == null) {
        coverURL = game.getIconURL(rounded);
      }
      cResult[0] = game;
      cResult[1] = rounded;
      cResult[2] = coverURL;
      tmp6 = coverURL;
    }
  : function InterestGameCover(game) {
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
        const obj5 = {
          variant: "text-xs/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 2,
          children: game.name,
        };
        obj4.children = hasOwnProperty(Text_Text.Text, obj5);
        tmp10 = hasOwnProperty(React4, obj4);
      }
      items[1] = tmp10;
      obj.children = items;
      return timestampProducer(React4, obj);
    };
