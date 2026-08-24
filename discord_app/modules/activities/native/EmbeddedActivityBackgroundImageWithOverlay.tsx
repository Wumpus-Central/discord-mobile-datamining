// === Module 12479: EmbeddedActivityBackgroundImageWithOverlay ===

// Module 12479 (EmbeddedActivityBackgroundImageWithOverlay)
import ThemesDefault from "Themes" /* 712 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11231 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

({ ImageBackground: c4, View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
createCacheKey = { overlay: null };
createCacheKey = { flex: 1, opacity: 0.6, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = ["embedded_background"];
const result = require("set").fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  importDefault = undefined;
  const tmp2 = callback(React.useState(false), 2);
  importDefault = tmp2[1];
  let str;
  const tmp = callback2();
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let obj = { applicationId: str, names: closure_9, size: 1024 };
  const url = useEmbeddedActivityBackgroundDefault(obj).url;
  let tmp7Result = null;
  if (!tmp2[0]) {
    tmp7Result = null;
    if (null != url) {
      tmp7Result = null;
      if ("" !== url) {
        obj = { resizeMode: null, source: null, style: null, imageStyle: null, onError: null, children: null };
        obj[0] = resizeMode;
        obj = { uri: null };
        obj[0] = url;
        obj[1] = obj;
        if (dimensionsStyle == null) {
          dimensionsStyle = absoluteFillObject.absoluteFillObject;
        }
        obj[2] = dimensionsStyle;
        obj1 = { borderRadius: null };
        obj1[0] = borderRadius;
        obj[3] = obj1;
        obj[4] = function onError() {
          return callback(true);
        };
        const obj2 = { style: null };
        const items = [tmp.overlay, ];
        const obj3 = { borderRadius: null };
        obj3[0] = borderRadius;
        items[1] = obj3;
        obj2[0] = items;
        obj[5] = <closure_5 style={null} />;
        tmp7Result = tmp7(closure_4, obj);
        const tmp8 = closure_4;
      }
    }
  }
  return tmp7Result;
};