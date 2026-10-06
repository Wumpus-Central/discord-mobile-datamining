// === Module 9183: EmbeddedActivityBackgroundImageWithOverlay ===

// Module 9183 (EmbeddedActivityBackgroundImageWithOverlay)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9184 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ ImageBackground: hasOwnProperty, View: metroRequire, StyleSheet: metroImportDefault } = react_native);
const jsx = Fragment.jsx;
let obj = { overlay: obj2 };
obj2 = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
const names = ["embedded_background"];
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let borderRadius;
  let closure_129_0;
  let dimensionsStyle;
  let resizeMode;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(12);
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  let str = "contain";
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  const tmp3 = closure_9();
  [tmp5, closure_129_0] = react.useState(false);
  let str2;
  _slicedToArray(react.useState(false), 2);
  if (application != null) {
    str2 = application.id;
  }
  if (str2 == null) {
    str2 = "";
  }
  if (cResult[0] !== str2) {
    const obj2 = { applicationId: str2, names, size: 1024 };
    cResult[0] = str2;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const url = useEmbeddedActivityBackgroundDefault(tmp6).url;
  if (cResult[2] !== url) {
    const obj3 = { uri: url };
    cResult[2] = url;
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === url) {
      if (cResult[6] === borderRadius) {
        if (cResult[7] === dimensionsStyle) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === str) {
              let tmp10;
              if (cResult[10] === tmp3) {
                tmp10 = cResult[11];
              }
              return tmp10;
            }
          }
        }
      }
    }
  }
  let tmp14Result = null;
  if (!tmp5) {
    tmp14Result = null;
    if (null != url) {
      tmp14Result = null;
      if ("" !== url) {
        let absoluteFillObject = dimensionsStyle;
        if (dimensionsStyle == null) {
          absoluteFillObject = metroImportDefault.absoluteFillObject;
        }
        const items = [tmp3.overlay, ];
        const obj5 = { borderRadius };
        const obj7 = { borderRadius };
        items[1] = obj7;
        tmp14Result = <hasOwnProperty resizeMode={str} source={tmp9} style={absoluteFillObject} imageStyle={obj5} onError={function onError() {
          return closure_1_0(true);
        }}>{null}</hasOwnProperty>;
      }
    }
  }
  cResult[4] = tmp9;
  cResult[5] = url;
  cResult[6] = borderRadius;
  cResult[7] = dimensionsStyle;
  cResult[8] = tmp5;
  cResult[9] = str;
  cResult[10] = tmp3;
  cResult[11] = tmp14Result;
  tmp10 = tmp14Result;
}) : ((arg0) => {
  let application;
  let borderRadius;
  let closure_0;
  let dimensionsStyle;
  let first;
  let resizeMode;
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  closure_0 = undefined;
  const tmp = closure_9();
  [first, closure_0] = react.useState(false);
  let str;
  const tmp4 = useEmbeddedActivityBackgroundDefault;
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  const obj = { applicationId: str, names, size: 1024 };
  const url = tmp4(obj).url;
  let tmp8Result = null;
  if (!first) {
    tmp8Result = null;
    if (null != url) {
      tmp8Result = null;
      if ("" !== url) {
        const obj3 = { uri: url };
        if (dimensionsStyle == null) {
          dimensionsStyle = metroImportDefault.absoluteFillObject;
        }
        const items = [tmp.overlay, ];
        const obj4 = { borderRadius };
        const obj6 = { borderRadius };
        items[1] = obj6;
        tmp8Result = <hasOwnProperty resizeMode={resizeMode} source={obj3} style={dimensionsStyle} imageStyle={obj4} onError={function onError() {
          return closure_0(true);
        }}>{null}</hasOwnProperty>;
      }
    }
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default tmp3;