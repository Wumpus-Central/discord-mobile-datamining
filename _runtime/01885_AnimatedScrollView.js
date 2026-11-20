// === Module 1885: AnimatedScrollView ===

// Module 1885 (AnimatedScrollView)
import _mod1886 from "module_1886" /* 1886 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1822);
let closure_3 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).ScrollView);

export function AnimatedScrollView(arg0) {
  ({ scrollViewOffset, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ scrollViewOffset: 0, ref: 0 }));
  if (null === ref) {
    ref = _mod1886.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const scrollOffset = _mod1886.useScrollOffset(ref, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in merged)) {
    merged.scrollEventThrottle = 1;
  }
  const merged1 = Object.assign(merged);
  return <closure_3 ref={ref} />;
}