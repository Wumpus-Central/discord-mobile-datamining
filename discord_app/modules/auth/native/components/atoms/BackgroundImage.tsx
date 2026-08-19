// === Module 8612: BackgroundImage ===

// Module 8612 (BackgroundImage)
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
({ Image: c4, View: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
const result = require("obj132").fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = flag(4310)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj = {};
  const merged = Object.assign(React.useMemo(() => {
    const items = [closure_1_6.absoluteFill, ];
    const obj = { style: items, source: null };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    if (null != backgroundImageSource) {
      obj[1] = backgroundImageSource;
      return obj;
    } else {
      let tmp2 = table;
      if (obj2.isThemeDark(table)) {
        tmp2 = tmp2[5];
        let tmp4Result = flag(tmp2);
      } else {
        tmp4Result = flag(tmp2[6]);
      }
      obj2 = backgroundImageSource(table[4]);
    }
  }, items));
  obj[1] = <closure_4 />;
  return <closure_5 />;
};