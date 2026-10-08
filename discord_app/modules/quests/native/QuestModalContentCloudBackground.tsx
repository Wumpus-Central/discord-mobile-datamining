// discord_app/modules/quests/native/QuestModalContentCloudBackground.tsx
import c from "../../../../_runtime/00576_c.js";
import themes from "../../../design/utils/shared/themes.tsx";
import useTheme from "../../../hooks/useTheme.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  const obj2 = { wrapper: null, cloudsImage: null, cloudsImageLight: null, gradient: null, solidBackground: null };
  const merged1 = Object.assign(arg0 ? { top: "create" } : { bottom: "create" });
  obj.height = 380;
  obj.zIndex = 1;
  obj2.wrapper = obj;
  const obj3 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  const merged3 = Object.assign(arg0 ? { top: "create" } : { bottom: "create" });
  if (arg0) {
    let obj4 = {};
  } else {
    obj4 = { transform: null };
    items = [{ rotate: "180deg" }];
    obj4.transform = items;
  }
  const merged4 = Object.assign(obj4);
  obj3.width = "100%";
  obj2.cloudsImage = obj3;
  const obj5 = {};
  const merged5 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj5.bottom = undefined;
  obj5.width = "100%";
  obj2.cloudsImageLight = obj5;
  const obj6 = {};
  const merged6 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj6.opacity = 1;
  obj2.gradient = obj6;
  const merged7 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.solidBackground = {};
  return obj2;
});
let items = ["#292252FF", "#1E1F2200"];
const substr = items.slice();
let closure_9 = substr.reverse();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestModalContentCloudBackground(arg0) {
      const cResult = c.c(21);
      ({ align, style, imgStyle, resizeMode } = arg0);
      solidBackground = "bottom";
      if (undefined !== align) {
        solidBackground = align;
      }
      let str = "cover";
      if (undefined !== resizeMode) {
        str = resizeMode;
      }
      const tmp4 = closure_7("bottom" === solidBackground);
      const theme = useTheme.useTheme();
      if (cResult[0] !== theme) {
        const isThemeDarkResult = themes.isThemeDark(theme);
        cResult[0] = theme;
        cResult[1] = isThemeDarkResult;
        let tmp6 = isThemeDarkResult;
        const tmpResult2 = themes;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.wrapper) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === solidBackground) {
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp4.gradient) {
              if (cResult[8] === tmp4.solidBackground) {
                const tmp16 = tmp6 ? tmp4.cloudsImage : tmp4.cloudsImageLight;
                if (cResult[10] === imgStyle) {
                  if (cResult[11] === tmp16) {
                    let tmp17 = cResult[12];
                  }
                  const tmp18Result = importDefault(tmp6 ? 15209 : 15210);
                  if (cResult[13] === str) {
                    if (cResult[14] === tmp17) {
                      if (cResult[15] === tmp18Result) {
                        let tmp20 = cResult[16];
                      }
                      if (cResult[17] === tmp8) {
                        if (cResult[18] === tmp9) {
                          if (cResult[19] === tmp20) {
                            let tmp23 = cResult[20];
                          }
                          return tmp23;
                        }
                      }
                      const obj2 = { style: tmp8, children: null };
                      items = [tmp9, tmp20];
                      obj2.children = items;
                      const tmp26 = timestampProducer(React3, obj2);
                      cResult[17] = tmp8;
                      cResult[18] = tmp9;
                      cResult[19] = tmp20;
                      cResult[20] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                  const obj3 = { style: tmp17, source: tmp18Result, resizeMode: str };
                  const tmp22 = hasOwnProperty(FastImageDefault, obj3);
                  cResult[13] = str;
                  cResult[14] = tmp17;
                  cResult[15] = tmp18Result;
                  cResult[16] = tmp22;
                  tmp20 = tmp22;
                }
                const items1 = [tmp16, imgStyle];
                cResult[10] = imgStyle;
                cResult[11] = tmp16;
                cResult[12] = items1;
                tmp17 = items1;
              }
            }
          }
        }
        if (!tmp6) {
          const obj4 = { style: tmp4.solidBackground };
          const tmp10Result = hasOwnProperty(React3, obj4);
          cResult[5] = solidBackground;
          cResult[6] = tmp6;
          ({ gradient: tmp3[7], solidBackground } = tmp4);
          cResult[8] = solidBackground;
          cResult[9] = tmp10Result;
        }
        const obj5 = { colors: "top" === solidBackground ? items : closure_9, style: tmp4.gradient };
        hasOwnProperty(LinearGradientDefault, obj5);
      }
      const items2 = [tmp4.wrapper, style];
      cResult[2] = style;
      cResult[3] = tmp4.wrapper;
      cResult[4] = items2;
      tmp8 = items2;
      const tmpResult = useTheme;
    }
  : function QuestModalContentCloudBackground(align) {
      align = align.align;
      let str = "bottom";
      if (undefined !== align) {
        str = align;
      }
      const resizeMode = align.resizeMode;
      let str2 = "cover";
      ({ style, imgStyle } = align);
      if (undefined !== resizeMode) {
        str2 = resizeMode;
      }
      const tmp = closure_7("bottom" === str);
      const obj = themes;
      const isThemeDarkResult = obj.isThemeDark(useTheme.useTheme());
      const obj3 = { style: null, children: null };
      items = [tmp.wrapper, style];
      obj3.style = items;
      if (isThemeDarkResult) {
        const obj4 = { colors: "top" === str ? items : closure_9, style: tmp.gradient };
        hasOwnProperty(LinearGradientDefault, obj4);
      } else {
        const obj5 = { style: tmp.solidBackground };
        const items1 = [hasOwnProperty(React3, obj5)];
        const obj6 = { style: null, source: null, resizeMode: null };
        const items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
        obj6.style = items2;
        obj6.source = importDefault(isThemeDarkResult ? 15209 : 15210);
        obj6.resizeMode = str2;
        items1[1] = hasOwnProperty(FastImageDefault, obj6);
        obj3.children = items1;
        return tmp4(React3, obj3);
      }
    };
