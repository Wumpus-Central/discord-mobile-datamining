// discord_app/modules/stage_channels/native/components/StageSparkle.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef8644 from "../../../../../_runtime/metro/08644__.js";
import _modDef8645 from "../../../../../_runtime/metro/08645__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const native = ThemeContextProvider(4788);
require = fn;
let closure_3 = ["theme"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" },
  iconContainer: null,
  iconStyle: null,
  sparkles: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: 28,
  height: 56,
  width: 56,
  alignItems: "center",
  justifyContent: "center",
};
obj2.iconContainer = size;
const size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
obj2.iconStyle = size1;
obj2.sparkles = { position: "absolute", top: 0 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StageSparkleInner(arg0) {
      const cResult = c.c(16);
      ({ style, IconComponent, icon } = arg0);
      if (undefined === icon) {
        icon = _modDef8644;
      }
      const tmp4 = closure_8();
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === IconComponent) {
          if (cResult[4] === icon) {
            if (cResult[5] === tmp4.iconStyle) {
              if (cResult[7] === tmp4.iconContainer) {
                if (cResult[8] === tmp6) {
                  let tmp14 = cResult[9];
                }
                if (cResult[10] !== tmp4.sparkles) {
                  const obj2 = { style: tmp4.sparkles, source: _modDef8645 };
                  const tmp22 = timestampProducer(FastImageDefault, obj2);
                  cResult[10] = tmp4.sparkles;
                  cResult[11] = tmp22;
                  let tmp18 = tmp22;
                } else {
                  tmp18 = cResult[11];
                }
                if (cResult[12] === tmp5) {
                  if (cResult[13] === tmp14) {
                    if (cResult[14] === tmp18) {
                      let tmp23 = cResult[15];
                    }
                    return tmp23;
                  }
                }
                const obj3 = { style: tmp5, children: null };
                const items = [tmp14, tmp18];
                obj3.children = items;
                const tmp26 = React5(View, obj3);
                cResult[12] = tmp5;
                cResult[13] = tmp14;
                cResult[14] = tmp18;
                cResult[15] = tmp26;
                tmp23 = tmp26;
              }
              const obj4 = { style: tmp4.iconContainer, children: cResult[6] };
              const tmp17 = timestampProducer(View, obj4);
              cResult[7] = tmp4.iconContainer;
              cResult[8] = cResult[6];
              cResult[9] = tmp17;
              tmp14 = tmp17;
            }
          }
        }
        if (null != IconComponent) {
          const obj5 = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
          let tmp10 = timestampProducer(IconComponent, obj5);
        } else {
          const obj6 = { source: icon, style: tmp4.iconStyle };
          tmp10 = timestampProducer(FastImageDefault, obj6);
        }
        cResult[3] = IconComponent;
        cResult[4] = icon;
        icon = tmp4.iconStyle;
        cResult[5] = icon;
        cResult[6] = tmp10;
      }
      const items1 = [tmp4.container, style];
      cResult[0] = style;
      cResult[1] = tmp4.container;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : function StageSparkleInner(style) {
      ({ IconComponent, icon } = style);
      if (icon === undefined) {
        icon = _modDef8644;
      }
      const tmp3 = closure_8();
      const obj = { style: null, children: null };
      const items = [tmp3.container, style.style];
      obj.style = items;
      const obj2 = { style: tmp3.iconContainer, children: null };
      if (null != IconComponent) {
        const obj3 = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
        let tmp6Result = timestampProducer(IconComponent, obj3);
        let tmp10 = importDefault;
      } else {
        const obj4 = { source: icon, style: tmp3.iconStyle };
        tmp6Result = timestampProducer(FastImageDefault, obj4);
        tmp10 = importDefault;
      }
      obj2.children = tmp6Result;
      const items1 = [timestampProducer(View, obj2)];
      const obj5 = { style: tmp3.sparkles, source: tmp10(8645) };
      items1[1] = timestampProducer(tmp10(6163), obj5);
      obj.children = items1;
      return React5(View, obj);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StageSparkle(theme) {
      let ThemeContextProvider = require;
      let tmp = dependencyMap;
      const cResult = c.c(10);
      if (cResult[0] !== theme) {
        theme = theme.theme;
        const tmp7 = _objectWithoutProperties(theme, closure_3);
        cResult[0] = theme;
        cResult[1] = tmp7;
        cResult[2] = theme;
        let tmp4 = theme;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (null != tmp4) {
        if (cResult[3] !== tmp3) {
          const obj2 = {};
          const merged = Object.assign(tmp3);
          const tmp21 = timestampProducer(closure_9, obj2);
          cResult[3] = tmp3;
          cResult[4] = tmp21;
          let tmp15 = tmp21;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] === tmp15) {
        }
        ThemeContextProvider = native.ThemeContextProvider;
        const obj3 = { theme: tmp4, children: tmp15 };
        tmp = timestampProducer(ThemeContextProvider, obj3);
        cResult[5] = tmp15;
        cResult[6] = tmp4;
        cResult[7] = tmp;
      } else {
        if (cResult[8] !== tmp3) {
          const obj4 = {};
          const merged1 = Object.assign(tmp3);
          const tmp14 = timestampProducer(closure_9, obj4);
          cResult[8] = tmp3;
          cResult[9] = tmp14;
          let tmp8 = tmp14;
        } else {
          tmp8 = cResult[9];
        }
        return tmp8;
      }
    }
  : function StageSparkle(theme) {
      theme = theme.theme;
      const merged = Object.assign(theme, Object.assign({ theme: 0 }));
      if (null != theme) {
        const obj2 = { theme, children: null };
        const obj3 = {};
        const merged1 = Object.assign(merged);
        obj2.children = timestampProducer(closure_9, obj3);
        let tmp7 = timestampProducer(native.ThemeContextProvider, obj2);
      } else {
        const obj = {};
        const merged2 = Object.assign(merged);
        tmp7 = timestampProducer(closure_9, obj);
      }
      return tmp7;
    };
