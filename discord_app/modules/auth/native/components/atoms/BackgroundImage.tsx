// === Module 6975: BackgroundImage ===

// Module 6975 (BackgroundImage)
import shared from "shared" /* 4411 */;
import _modDef6977 from "module_6977" /* 6977 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = flag(4495)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj = { style: absoluteFill.absoluteFill, children: null };
  obj = {};
  const merged = Object.assign(noop.useMemo(() => {
    const items = [timestampProducer.absoluteFill, ];
    const obj = { style: items, source: null };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    if (null != backgroundImageSource) {
      obj.source = backgroundImageSource;
      return obj;
    } else {
      let tmp2 = dependencyMap;
      if (obj2.isThemeDark(closure_2)) {
        tmp2 = 6976;
        let tmp4Result = importDefault(tmp2);
      } else {
        tmp4Result = _modDef6977;
      }
      obj2 = shared;
    }
  }, items));
  obj.children = <closure_4 />;
  return <closure_5 />;
};