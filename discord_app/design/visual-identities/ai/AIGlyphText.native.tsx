// discord_app/design/visual-identities/ai/AIGlyphText.native.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import useToken2 from "../../tokens/native/useToken.tsx";
import AIGlyphFont from "AIGlyphFont.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReanimatedRexport from "../../../modules/reanimated/ReanimatedRexport.tsx";
import createStyles from "../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const Text = react_native.Text;
const jsx = Fragment.jsx;
let closure_4 = ReanimatedRexport.createAnimatedComponent(Text);
let closure_5 = createStyles.createStyles((fontSize, color) => {
  const obj = {
    glyph: {
      color,
      fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE,
      fontSize,
      lineHeight: fontSize,
      textAlign: "center",
      includeFontPadding: false,
    },
  };
  ({
    color,
    fontFamily: AIGlyphFont.AI_GLYPH_FONT_FAMILY_NATIVE,
    fontSize,
    lineHeight: fontSize,
    textAlign: "center",
    includeFontPadding: false,
  });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (size) => {
      let allowFontScaling;
      let animated;
      let children;
      let color;
      let ellipsizeMode;
      let numberOfLines;
      let style;
      const obj = react2;
      const cResult = obj.c(10);
      ({ color, allowFontScaling, animated, numberOfLines, ellipsizeMode, style, children } = size);
      let str = "text-default";
      size = size.size;
      if (undefined !== color) {
        str = color;
      }
      let tmp6;
      const tmp4 = undefined !== animated && animated;
      const useToken = useToken2.useToken;
      useToken2;
      if ("none" !== str) {
        tmp6 = str;
      }
      const tmp7 = closure_5(size, useToken(tmp6));
      const tmp8 = tmp4 ? closure_4 : Text;
      if (cResult[0] === style) {
        let tmp9;
        if (cResult[1] === tmp7.glyph) {
          tmp9 = cResult[2];
        }
        if (cResult[3] === tmp8) {
          if (cResult[4] === allowFontScaling) {
            if (cResult[5] === children) {
              if (cResult[6] === ellipsizeMode) {
                if (cResult[7] === numberOfLines) {
                  let tmp10;
                  if (cResult[8] === tmp9) {
                    tmp10 = cResult[9];
                  }
                  return tmp10;
                }
              }
            }
          }
        }
        const tmp12 = (
          <tmp8
            style={tmp9}
            allowFontScaling={allowFontScaling}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
          >
            {children}
          </tmp8>
        );
        cResult[3] = tmp8;
        cResult[4] = allowFontScaling;
        cResult[5] = children;
        cResult[6] = ellipsizeMode;
        cResult[7] = numberOfLines;
        cResult[8] = tmp9;
        cResult[9] = tmp12;
        tmp10 = tmp12;
      }
      const items = [tmp7.glyph, style];
      cResult[0] = style;
      cResult[1] = tmp7.glyph;
      cResult[2] = items;
      tmp9 = items;
    }
  : (color) => {
      let allowFontScaling;
      let animated;
      let children;
      let ellipsizeMode;
      let numberOfLines;
      let style;
      let str = color.color;
      size = color.size;
      if (str === undefined) {
        str = "text-default";
      }
      ({ animated, allowFontScaling } = color);
      if (animated === undefined) {
        animated = false;
      }
      ({ numberOfLines, ellipsizeMode, style, children } = color);
      let tmp2;
      const useToken = useToken2.useToken;
      useToken2;
      if ("none" !== str) {
        tmp2 = str;
      }
      const items = [closure_5(size, useToken(tmp2)).glyph, style];
      return jsx(animated ? closure_4 : Text, {
        style: items,
        allowFontScaling,
        numberOfLines,
        ellipsizeMode,
        children,
      });
    };
let size = size_mod;
const result = size.fileFinishedImporting("design/visual-identities/ai/AIGlyphText.native.tsx");

export const AIGlyphText = tmp3;
