// _runtime/01884_AnimatedScrollView.js
import _mod1885 from "metro/01885__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1821);
let closure_3 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).ScrollView);

export function AnimatedScrollView(arg0) {
  ({ scrollViewOffset, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ scrollViewOffset: 0, ref: 0 }));
  if (null === ref) {
    ref = _mod1885.useAnimatedRef();
  }
  if (scrollViewOffset) {
    const scrollOffset = _mod1885.useScrollOffset(ref, scrollViewOffset);
  }
  if (!("scrollEventThrottle" in merged)) {
    merged.scrollEventThrottle = 1;
  }
  const merged1 = Object.assign(merged);
  return <closure_3 ref={ref} />;
}
