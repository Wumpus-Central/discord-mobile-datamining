// === Module 16523: OnboardingHomeScrollView ===

// Module 16523 (OnboardingHomeScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let react = react_mod;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let obj = { guildFeedBackground: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let first;
  let guildId;
  let headerOffset;
  let scrollValue;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(17);
  ({ guildId, headerOffset, scrollValue } = children);
  children = children.children;
  let num = 0;
  if (undefined !== headerOffset) {
    num = headerOffset;
  }
  const tmp3 = closure_6();
  let closure_1 = react.useRef(false);
  const ref = react.useRef(null);
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      closure_1.current = false;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const items = [guildId];
    cResult[1] = guildId;
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  const effect = obj2.useEffect(first, tmp6);
  react = obj2.useRef(true);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const current = null == ref.current || ref.current;
        if (!current) {
          const current2 = ref.current;
          current2.scrollTo({ animated: false, y: 0 });
        }
        ref.current = false;
      }
    }
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        const current = null == ref.current || ref.current;
        if (!current) {
          const current2 = ref.current;
          current2.scrollTo({ animated: false, y: 0 });
        }
        ref.current = false;
      }
    }
  }
  if (cResult[4] !== guildId) {
    class I {
      constructor() {
        const current = null == ref.current || ref.current;
        if (!current) {
          const current2 = ref.current;
          current2.scrollTo({ animated: false, y: 0 });
        }
        ref.current = false;
      }
    }
    tmp10[0] = guildId;
    cResult[4] = guildId;
    cResult[5] = tmp10;
  } else {
    class I {
      constructor() {
        const current = null == ref.current || ref.current;
        if (!current) {
          const current2 = ref.current;
          current2.scrollTo({ animated: false, y: 0 });
        }
        ref.current = false;
      }
    }
  }
  const effect1 = obj2.useEffect(I, tmp10);
  const sum = 16 + bottom;
  if (cResult[6] === num) {
    class I {
      constructor() {
        const current = null == ref.current || ref.current;
        if (!current) {
          const current2 = ref.current;
          current2.scrollTo({ animated: false, y: 0 });
        }
        ref.current = false;
      }
    }
    if (cResult[9] !== scrollValue) {
      class C {
        constructor(nativeEvent) {
          const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
      cResult[9] = scrollValue;
      cResult[10] = C;
    } else {
      class C {
        constructor(nativeEvent) {
          const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(nativeEvent) {
          const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
      cResult[11] = tmp16;
    } else {
      class C {
        constructor(nativeEvent) {
          const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    if (cResult[12] === children) {
      class C {
        constructor(nativeEvent) {
          const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
        }
      }
    }
    const tmp20 = <ScrollView ref={ref} scrollIndicatorInsets={tmp16} onScroll={C} scrollEventThrottle={16} style={tmp3.guildFeedBackground} contentContainerStyle={tmp13}>{children}</ScrollView>;
    cResult[12] = children;
    cResult[13] = tmp13;
    cResult[14] = C;
    cResult[15] = tmp3.guildFeedBackground;
    cResult[16] = tmp20;
  }
  const obj4 = { paddingBottom: sum, marginTop: num };
  cResult[6] = num;
  cResult[7] = sum;
  cResult[8] = obj4;
}) : ((scrollValue) => {
  let guildId;
  let headerOffset;
  ({ guildId, headerOffset } = scrollValue);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  scrollValue = scrollValue.scrollValue;
  const children = scrollValue.children;
  const tmp = closure_6();
  let closure_2 = react.useRef(false);
  const ref = react.useRef(null);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const items = [guildId];
  const effect = react.useEffect(() => {
    closure_2.current = false;
  }, items);
  let closure_5 = react.useRef(true);
  const items1 = [guildId];
  const effect1 = react.useEffect(() => {
    const current = null == ref.current || ref.current;
    if (!current) {
      const current2 = ref.current;
      current2.scrollTo({ animated: false, y: 0 });
    }
    ref.current = false;
  }, items1);
  const items2 = [bottom, headerOffset];
  return <ScrollView ref={ref} scrollIndicatorInsets={{ right: 1 }} onScroll={function onScroll(nativeEvent) {
    const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
  }} scrollEventThrottle={16} style={tmp.guildFeedBackground} contentContainerStyle={react.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2)}>{children}</ScrollView>;
});
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default tmp2;