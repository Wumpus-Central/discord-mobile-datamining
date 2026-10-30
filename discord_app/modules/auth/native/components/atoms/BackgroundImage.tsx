// === Module 7136: BackgroundImage ===

// Module 7136 (BackgroundImage)
import shared from "shared" /* 5016 */;
import _modDef7138 from "module_7138" /* 7138 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/BackgroundImage.tsx");

export default function BackgroundImage(backgroundImageSource) {
  backgroundImageSource = backgroundImageSource.backgroundImageSource;
  let flag = backgroundImageSource.backgroundImageCover;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = flag(5248)();
  dependencyMap = tmp;
  let items = [backgroundImageSource, flag, tmp];
  let obj = { style: absoluteFill.absoluteFill, children: null };
  const memo = noop.useMemo(() => {
    const items = [hasOwnProperty.absoluteFill, ];
    const obj = { style: items, source: null };
    items[1] = flag ? { width: "100%", height: "100%" } : { width: "100%" };
    if (null != backgroundImageSource) {
      obj.source = backgroundImageSource;
      return obj;
    } else {
      let tmp2 = dependencyMap;
      if (obj2.isThemeDark(closure_2)) {
        tmp2 = 7137;
        let tmp4Result = importDefault(tmp2);
      } else {
        tmp4Result = _modDef7138;
      }
      obj2 = shared;
    }
  }, items);
  const merged = Object.assign(memo);
  obj.children = jsx(flag(5712), {});
  return <closure_4 style={absoluteFill.absoluteFill}>{null}</closure_4>;
};