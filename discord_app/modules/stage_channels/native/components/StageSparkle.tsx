// === Module 9292: StageSparkle ===

// Module 9292 (StageSparkle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4589 */;
import FastImageDefault from "FastImage" /* 5974 */;
import AssetRegistryDefault from "AssetRegistry" /* 9293 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9294 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let theme;

let metroImportDefault;
let metroRequire;
let size;
let size1;
let closure_3 = ["theme"];
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: 88, height: 88, alignItems: "center", justifyContent: "center" }, iconContainer: size, iconStyle: size1, sparkles: { position: "absolute", top: 0 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 28, height: 56, width: 56, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
size1 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 32, width: 32 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let icon;
  let items;
  let style;
  const obj = react2;
  const cResult = obj.c(16);
  ({ style, IconComponent, icon } = arg0);
  if (undefined === icon) {
    icon = AssetRegistryDefault;
  }
  const tmp4 = closure_8();
  if (cResult[0] === style) {
    let tmp5;
    let tmp10;
    if (cResult[1] === tmp4.container) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === IconComponent) {
      if (cResult[4] === icon) {
        let tmp6;
        if (cResult[5] === tmp4.iconStyle) {
          tmp6 = cResult[6];
        }
        if (cResult[7] === tmp4.iconContainer) {
          let tmp13;
          let tmp17;
          if (cResult[8] === tmp6) {
            tmp13 = cResult[9];
          }
          if (cResult[10] !== tmp4.sparkles) {
            const obj2 = { style: tmp4.sparkles, source: AssetRegistryDefault2 };
            const tmp20 = FastImageDefault;
            const tmp21 = metroRequire(tmp20, obj2);
            cResult[10] = tmp4.sparkles;
            cResult[11] = tmp21;
            tmp17 = tmp21;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp5) {
            if (cResult[13] === tmp13) {
              let tmp22;
              if (cResult[14] === tmp17) {
                tmp22 = cResult[15];
              }
              return tmp22;
            }
          }
          const obj3 = { style: tmp5, children: items };
          items = [tmp13, tmp17];
          const tmp25 = metroImportDefault(View, obj3);
          cResult[12] = tmp5;
          cResult[13] = tmp13;
          cResult[14] = tmp17;
          cResult[15] = tmp25;
          tmp22 = tmp25;
        }
        const obj4 = { style: tmp4.iconContainer, children: tmp6 };
        const tmp16 = metroRequire(View, obj4);
        cResult[7] = tmp4.iconContainer;
        cResult[8] = tmp6;
        cResult[9] = tmp16;
        tmp13 = tmp16;
      }
    }
    if (null != IconComponent) {
      const obj5 = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
      tmp10 = metroRequire(IconComponent, obj5);
    } else {
      const obj6 = { source: icon, style: tmp4.iconStyle };
      tmp10 = metroRequire(FastImageDefault, obj6);
    }
    cResult[3] = IconComponent;
    cResult[4] = icon;
    cResult[5] = tmp4.iconStyle;
    cResult[6] = tmp10;
    tmp6 = tmp10;
  }
  const items1 = [tmp4.container, style];
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((style) => {
  let IconComponent;
  let icon;
  let items;
  let items1;
  let tmp10;
  let tmp6Result;
  ({ IconComponent, icon } = style);
  style = style.style;
  if (icon === undefined) {
    icon = AssetRegistryDefault;
  }
  const tmp3 = closure_8();
  const obj = { style: items, children: items1 };
  items = [tmp3.container, style];
  const obj2 = { style: tmp3.iconContainer, children: tmp6Result };
  if (null != IconComponent) {
    const obj3 = { size: "lg", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
    tmp6Result = metroRequire(IconComponent, obj3);
    tmp10 = importDefault;
  } else {
    const obj4 = { source: icon, style: tmp3.iconStyle };
    tmp6Result = metroRequire(FastImageDefault, obj4);
    tmp10 = importDefault;
  }
  items1 = [metroRequire(View, obj2), ];
  const obj5 = { style: tmp3.sparkles, source: tmp10(9294) };
  const tmp10Result = tmp10(5974);
  items1[1] = metroRequire(tmp10Result, obj5);
  return metroImportDefault(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  let tmp4;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== theme) {
    theme = theme.theme;
    const tmp8 = _objectWithoutProperties(theme, closure_3);
    cResult[0] = theme;
    cResult[1] = tmp8;
    cResult[2] = theme;
    tmp5 = theme;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (null != tmp5) {
    let tmp16;
    if (cResult[3] !== tmp4) {
      const obj2 = {};
      const merged = Object.assign(tmp4);
      const tmp22 = metroRequire(closure_9, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp22;
      tmp16 = tmp22;
    } else {
      tmp16 = cResult[4];
    }
    if (cResult[5] === tmp16) {
      let tmp23;
      if (cResult[6] === tmp5) {
        tmp23 = cResult[7];
      }
      tmp9 = tmp23;
    }
    const obj3 = { theme: tmp5, children: tmp16 };
    const tmp25 = metroRequire(native.ThemeContextProvider, obj3);
    cResult[5] = tmp16;
    cResult[6] = tmp5;
    cResult[7] = tmp25;
    tmp23 = tmp25;
  } else if (cResult[8] !== tmp4) {
    const obj4 = {};
    const merged1 = Object.assign(tmp4);
    const tmp15 = metroRequire(closure_9, obj4);
    cResult[8] = tmp4;
    cResult[9] = tmp15;
    tmp9 = tmp15;
  } else {
    tmp9 = cResult[9];
  }
  return tmp9;
}) : ((theme) => {
  let obj3;
  let tmp7;
  theme = theme.theme;
  const merged = Object.assign(theme, Object.assign({ theme: 0 }));
  if (null != theme) {
    const obj2 = { theme, children: metroRequire(closure_9, obj3) };
    obj3 = {};
    const ThemeContextProvider = native.ThemeContextProvider;
    const merged1 = Object.assign(merged);
    tmp7 = metroRequire(ThemeContextProvider, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    tmp7 = metroRequire(closure_9, obj);
  }
  return tmp7;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default tmp5;