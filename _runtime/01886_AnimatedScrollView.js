// === Module 1886: AnimatedScrollView ===

// Module 1886 (AnimatedScrollView)
import _mod1887 from "module_1887" /* 1887 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1823);
let closure_3 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).ScrollView);

export function AnimatedScrollView(arg0) {
  ({ scrollViewOffset, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ scrollViewOffset: 0, ref: 0 }));
  if (null === ref) {
    ref = _mod1887.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const scrollOffset = _mod1887.useScrollOffset(ref, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in merged)) {
    merged.scrollEventThrottle = 1;
  }
  const merged1 = Object.assign(merged);
  return <closure_3 ref={ref} />;
}