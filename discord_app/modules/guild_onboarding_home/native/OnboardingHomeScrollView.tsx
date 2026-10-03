// discord_app/modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
const obj2 = { guildFeedBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(17);
      ({ guildId, headerOffset, scrollValue } = children);
      children = children.children;
      let num = 0;
      if (undefined !== headerOffset) {
        num = headerOffset;
      }
      const tmp3 = closure_6();
      closure_1 = noop.useRef(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          closure_1.current = false;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const items = [guildId];
        cResult[1] = guildId;
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      const effect = obj2.useEffect(first, tmp6);
      noop = obj2.useRef(true);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            current = null == closure_2.current;
            tmp = closure_2;
            if (!current) {
              tmp2 = closure_3;
              current = closure_3.current;
            }
            if (!current) {
              current2 = tmp.current;
              scrollToResult = current2.scrollTo({ animated: false, y: 0 });
            }
            closure_3.current = false;
            return;
          }
        }
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            current = null == closure_2.current;
            tmp = closure_2;
            if (!current) {
              tmp2 = closure_3;
              current = closure_3.current;
            }
            if (!current) {
              current2 = tmp.current;
              scrollToResult = current2.scrollTo({ animated: false, y: 0 });
            }
            closure_3.current = false;
            return;
          }
        }
      }
      if (cResult[4] !== guildId) {
        class I {
          constructor() {
            current = null == closure_2.current;
            tmp = closure_2;
            if (!current) {
              tmp2 = closure_3;
              current = closure_3.current;
            }
            if (!current) {
              current2 = tmp.current;
              scrollToResult = current2.scrollTo({ animated: false, y: 0 });
            }
            closure_3.current = false;
            return;
          }
        }
        tmp10[0] = guildId;
        cResult[4] = guildId;
        cResult[5] = tmp10;
      } else {
        class I {
          constructor() {
            current = null == closure_2.current;
            tmp = closure_2;
            if (!current) {
              tmp2 = closure_3;
              current = closure_3.current;
            }
            if (!current) {
              current2 = tmp.current;
              scrollToResult = current2.scrollTo({ animated: false, y: 0 });
            }
            closure_3.current = false;
            return;
          }
        }
      }
      const effect1 = obj2.useEffect(I, tmp10);
      const sum = 16 + useSafeAreaInsetsDefault().bottom;
      if (cResult[6] === num) {
        class I {
          constructor() {
            current = null == closure_2.current;
            tmp = closure_2;
            if (!current) {
              tmp2 = closure_3;
              current = closure_3.current;
            }
            if (!current) {
              current2 = tmp.current;
              scrollToResult = current2.scrollTo({ animated: false, y: 0 });
            }
            closure_3.current = false;
            return;
          }
        }
        if (cResult[9] !== scrollValue) {
          class C {
            constructor(arg0) {
              result = scrollValue.set(children.nativeEvent.contentOffset.y);
              return;
            }
          }
          cResult[9] = scrollValue;
          cResult[10] = C;
        } else {
          class C {
            constructor(arg0) {
              result = scrollValue.set(children.nativeEvent.contentOffset.y);
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              result = scrollValue.set(children.nativeEvent.contentOffset.y);
              return;
            }
          }
          cResult[11] = tmp16;
        } else {
          class C {
            constructor(arg0) {
              result = scrollValue.set(children.nativeEvent.contentOffset.y);
              return;
            }
          }
        }
        if (cResult[12] === children) {
          class C {
            constructor(arg0) {
              result = scrollValue.set(children.nativeEvent.contentOffset.y);
              return;
            }
          }
        }
        const obj3 = {
          ref,
          scrollIndicatorInsets: tmp16,
          onScroll: C,
          scrollEventThrottle: 16,
          style: tmp3.guildFeedBackground,
          contentContainerStyle: tmp13,
          children,
        };
        const tmp20 = (
          <ScrollView
            ref={ref}
            scrollIndicatorInsets={tmp16}
            onScroll={C}
            scrollEventThrottle={16}
            style={tmp3.guildFeedBackground}
            contentContainerStyle={tmp13}
          >
            {children}
          </ScrollView>
        );
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
      ref = noop.useRef(null);
    }
  : (children) => {
      ({ guildId, headerOffset } = children);
      if (headerOffset === undefined) {
        headerOffset = 0;
      }
      const scrollValue = children.scrollValue;
      closure_2 = noop.useRef(false);
      noop.useRef(null);
      const bottom = useSafeAreaInsetsDefault().bottom;
      const items = [guildId];
      const effect = noop.useEffect(() => {
        closure_2.current = false;
      }, items);
      const ref = noop.useRef(true);
      const items1 = [guildId];
      const effect1 = noop.useEffect(() => {
        let current = null == ref.current;
        if (!current) {
          current = ref.current;
        }
        if (!current) {
          const current2 = ref.current;
          current2.scrollTo({ animated: false, y: 0 });
        }
        ref.current = false;
      }, items1);
      const items2 = [bottom, headerOffset];
      const tmp = closure_6();
      return (
        <ScrollView
          ref={ref}
          scrollIndicatorInsets={{ right: 1 }}
          onScroll={function onScroll(nativeEvent) {
            const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={16}
          style={closure_6().guildFeedBackground}
          contentContainerStyle={noop.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2)}
        >
          {children.children}
        </ScrollView>
      );
    };
