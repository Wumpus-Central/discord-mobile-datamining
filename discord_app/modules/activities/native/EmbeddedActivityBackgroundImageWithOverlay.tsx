// discord_app/modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useEmbeddedActivityBackgroundDefault from "../utils/useEmbeddedActivityBackground.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ ImageBackground: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { overlay: { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK } };
let closure_8 = createStyles.createStyles(obj2);
const names = ["embedded_background"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp2[1];
  let str;
  const tmp = closure_8();
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
          dimensionsStyle = absoluteFillObject.absoluteFillObject;
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
        obj2.children = <hasOwnProperty style={null} />;
        tmp7Result = (
          <React4 resizeMode={resizeMode} source={null} style={null} imageStyle={null} onError={null}>
            {null}
          </React4>
        );
      }
    }
  }
  return tmp7Result;
}
