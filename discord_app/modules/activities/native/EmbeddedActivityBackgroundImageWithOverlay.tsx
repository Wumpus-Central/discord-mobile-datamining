// discord_app/modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useEmbeddedActivityBackgroundDefault from "../utils/useEmbeddedActivityBackground.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { overlay: { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK } };
let closure_9 = createStyles.createStyles(obj2);
const names = ["embedded_background"];
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
      let str = "contain";
      if (undefined !== resizeMode) {
        str = resizeMode;
      }
      const tmp3 = closure_9();
      [tmp5, require] = noop.useState(false);
      let str2;
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
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      const url = useEmbeddedActivityBackgroundDefault(tmp6).url;
      if (cResult[2] !== url) {
        const obj3 = { uri: tmp8 };
        cResult[2] = tmp8;
        cResult[3] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        if (cResult[5] === url) {
          if (cResult[6] === borderRadius) {
            if (cResult[7] === dimensionsStyle) {
              if (cResult[8] === tmp5) {
                if (cResult[9] === str) {
                  if (cResult[10] === tmp3) {
                    let tmp10 = cResult[11];
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
            const obj4 = {
              resizeMode: str,
              source: tmp9,
              style: null,
              imageStyle: null,
              onError: null,
              children: null,
            };
            let absoluteFillObject = dimensionsStyle;
            if (dimensionsStyle == null) {
              absoluteFillObject = React5.absoluteFillObject;
            }
            obj4.style = absoluteFillObject;
            const obj5 = { borderRadius };
            obj4.imageStyle = obj5;
            obj4.onError = function onError() {
              return require(true);
            };
            const obj6 = { style: null };
            const items = [tmp3.overlay];
            const obj7 = { borderRadius };
            items[1] = obj7;
            obj6.style = items;
            obj4.children = <timestampProducer style={null} />;
            tmp14Result = (
              <hasOwnProperty resizeMode={str} source={tmp9} style={null} imageStyle={null} onError={null}>
                {null}
              </hasOwnProperty>
            );
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
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : (arg0) => {
      ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
      if (resizeMode === undefined) {
        resizeMode = "contain";
      }
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      closure_0 = tmp2[1];
      let str;
      const tmp = closure_9();
      if (application != null) {
        str = application.id;
      }
      if (str == null) {
        str = "";
      }
      const url = useEmbeddedActivityBackgroundDefault({ applicationId: str, names, size: 1024 }).url;
      let tmp7Result = null;
      if (!tmp2[0]) {
        tmp7Result = null;
        if (null != url) {
          tmp7Result = null;
          if ("" !== url) {
            const obj2 = { resizeMode, source: null, style: null, imageStyle: null, onError: null, children: null };
            const obj3 = { uri: url };
            obj2.source = obj3;
            if (dimensionsStyle == null) {
              dimensionsStyle = React5.absoluteFillObject;
            }
            obj2.style = dimensionsStyle;
            const obj4 = { borderRadius };
            obj2.imageStyle = obj4;
            obj2.onError = function onError() {
              return closure_0(true);
            };
            const obj5 = { style: null };
            const items = [tmp.overlay];
            const obj6 = { borderRadius };
            items[1] = obj6;
            obj5.style = items;
            obj2.children = <timestampProducer style={null} />;
            tmp7Result = (
              <hasOwnProperty resizeMode={resizeMode} source={null} style={null} imageStyle={null} onError={null}>
                {null}
              </hasOwnProperty>
            );
          }
        }
      }
      return tmp7Result;
    };
