// discord_app/design/components/Icon/native/BaseIconImage.tsx
import c from "../../../../../_runtime/00576_c.js";
import useToken from "../../../tokens/native/useToken.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const dependencyMap = {
  xxs: { width: 12, height: 12 },
  xs: { width: 16, height: 16 },
  sm: { width: 18, height: 18 },
  md: { width: 24, height: 24 },
  lg: { width: 32, height: 32 },
  custom: { width: "Symbol", height: "current" },
  refresh_sm: { width: 18, height: 18 },
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/BaseIconImage.tsx");

export const BaseIconImage = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
      ({ source, size, color, resizeMode, style, accessible, accessibilityLabel } = arg0);
      const str = "md";
      const token = useToken.useToken(color);
      if (null != token) {
        if (cResult[0] !== token) {
          const obj2 = { tintColor: token };
          cResult[0] = token;
          cResult[1] = obj2;
        }
      } else {
        let tmp7;
        if (tmp6) {
          if (cResult[2] !== color) {
            const obj3 = { tintColor: color };
            cResult[2] = color;
            cResult[3] = obj3;
            let tmp8 = obj3;
          } else {
            tmp8 = cResult[3];
          }
          tmp7 = tmp8;
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === style) {
            if (cResult[6] === tmp7) {
              let tmp11 = cResult[7];
            }
            if (cResult[8] === accessibilityLabel) {
              if (cResult[9] === accessible) {
                if (cResult[10] === resizeMode) {
                  if (cResult[11] === source) {
                    if (cResult[12] === tmp11) {
                      let tmp12 = cResult[13];
                    }
                    return tmp12;
                  }
                }
              }
            }
            const obj4 = { fadeDuration: 0, source, resizeMode, style: tmp11, accessible, accessibilityLabel };
            const tmp15 = (
              <Image
                fadeDuration={0}
                source={source}
                resizeMode={resizeMode}
                style={tmp11}
                accessible={accessible}
                accessibilityLabel={accessibilityLabel}
              />
            );
            cResult[8] = accessibilityLabel;
            cResult[9] = accessible;
            cResult[10] = resizeMode;
            cResult[11] = source;
            cResult[12] = tmp11;
            cResult[13] = tmp15;
            tmp12 = tmp15;
          }
        }
        const items = [tmp5, tmp7, style];
        cResult[4] = tmp5;
        cResult[5] = style;
        cResult[6] = tmp7;
        cResult[7] = items;
        tmp11 = items;
        tmp6 = null != color && typeof color === "string";
      }
      const tmpResult = useToken;
    }
  : (size) => {
      let str = size.size;
      if (str === undefined) {
        str = "md";
      }
      const color = size.color;
      ({ resizeMode, style, accessible, accessibilityLabel } = size);
      const token = useToken.useToken(color);
      if (null != token) {
        const obj2 = { tintColor: token };
        let tmp3 = obj2;
      } else {
        if (tmp2) {
          const obj3 = { tintColor: color };
          tmp3 = obj3;
        }
        tmp2 = null != color && typeof color === "string";
      }
      const obj4 = { fadeDuration: 0, source: size.source, resizeMode, style: null, accessible, accessibilityLabel };
      const items = [dependencyMap[str], tmp3, style];
      obj4.style = items;
      return (
        <Image
          fadeDuration={0}
          source={size.source}
          resizeMode={resizeMode}
          style={null}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
        />
      );
    };
