// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = {
  top: nativeDefault.space.PX_12,
  bottom: nativeDefault.space.PX_12,
  left: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
};
const createStyles = fn(5090);
let obj = {
  aboutSection: {
    borderRadius: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
  },
};
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = {
  borderRadius: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayAboutSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppStoreOverlayAboutSection(arg0) {
      const cResult = c.c(20);
      ({ description, onSeeMorePress } = arg0);
      closure_9();
      [tmp6, dependencyMap] = noop.useState(false);
      [first, closure_3] = noop.useState(null);
      if (cResult[0] !== first) {
        const fn = function c(nativeEvent) {
          if (null == first) {
            closure_3(nativeEvent.nativeEvent.lines.length > 3);
          }
        };
        cResult[0] = first;
        cResult[1] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== onSeeMorePress) {
        class X {
          constructor() {
            tmp = closure_1((arg0) => {
              if (!arg0) {
                if (onSeeMorePress != null) {
                  tmp();
                }
              }
              return !arg0;
            });
            return;
          }
        }
        cResult[2] = onSeeMorePress;
        cResult[3] = X;
      } else {
        class X {
          constructor() {
            tmp = closure_1((arg0) => {
              if (!arg0) {
                if (onSeeMorePress != null) {
                  tmp();
                }
              }
              return !arg0;
            });
            return;
          }
        }
      }
      if (cResult[4] !== tmp6) {
        class X {
          constructor() {
            tmp = closure_1((arg0) => {
              if (!arg0) {
                if (onSeeMorePress != null) {
                  tmp();
                }
              }
              return !arg0;
            });
            return;
          }
        }
        const t = util.t;
        const stringResult = obj2.string(tmp6 ? t["6MwJo/"] : t.lBeKY2);
        cResult[4] = tmp6;
        cResult[5] = stringResult;
      } else {
        class X {
          constructor() {
            tmp = closure_1((arg0) => {
              if (!arg0) {
                if (onSeeMorePress != null) {
                  tmp();
                }
              }
              return !arg0;
            });
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              tmp = closure_1((arg0) => {
                if (!arg0) {
                  if (onSeeMorePress != null) {
                    tmp();
                  }
                }
                return !arg0;
              });
              return;
            }
          }
          const obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = util.intl;
          obj3.children = intl.string(util.t.CI0vSJ);
          const tmp15 = timestampProducer(Text_Text.Text, obj3);
          cResult[6] = tmp15;
        } else {
          class X {
            constructor() {
              tmp = closure_1((arg0) => {
                if (!arg0) {
                  if (onSeeMorePress != null) {
                    tmp();
                  }
                }
                return !arg0;
              });
              return;
            }
          }
        }
        if (tmp6) {
          class X {
            constructor() {
              tmp = closure_1((arg0) => {
                if (!arg0) {
                  if (onSeeMorePress != null) {
                    tmp();
                  }
                }
                return !arg0;
              });
              return;
            }
          }
        } else {
          class X {
            constructor() {
              tmp = closure_1((arg0) => {
                if (!arg0) {
                  if (onSeeMorePress != null) {
                    tmp();
                  }
                }
                return !arg0;
              });
              return;
            }
          }
        }
        if (cResult[7] === description) {
          class X {
            constructor() {
              tmp = closure_1((arg0) => {
                if (!arg0) {
                  if (onSeeMorePress != null) {
                    tmp();
                  }
                }
                return !arg0;
              });
              return;
            }
          }
        }
        const obj4 = {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: tmp16,
          onTextLayout: tmp9,
          children: description,
        };
        const tmp19 = timestampProducer(Text_Text.Text, obj4);
        cResult[7] = description;
        cResult[8] = tmp9;
        cResult[9] = tmp16;
        cResult[10] = tmp19;
      }
      const tmp5 = _slicedToArray(noop.useState(false), 2);
    }
  : function AppStoreOverlayAboutSection(children) {
      const onSeeMorePress = children.onSeeMorePress;
      c1 = undefined;
      first = undefined;
      closure_3 = undefined;
      const tmp = closure_9();
      [tmp3, c1] = noop.useState(false);
      [first, closure_3] = noop.useState(null);
      const items = [first];
      const items1 = [onSeeMorePress];
      const callback = noop.useCallback((nativeEvent) => {
        if (null == first) {
          closure_3(nativeEvent.nativeEvent.lines.length > 3);
        }
      }, items);
      const callback1 = noop.useCallback(() => {
        _undefined((arg0) => {
          if (!arg0) {
            if (onSeeMorePress != null) {
              tmp();
            }
          }
          return !arg0;
        });
      }, items1);
      const intl = util.intl;
      const t = util.t;
      const stringResult = intl.string(tmp3 ? t["6MwJo/"] : t.lBeKY2);
      const obj = { style: tmp.aboutSection, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj2.children = intl2.string(util.t.CI0vSJ);
      const items2 = [
        timestampProducer(Text_Text.Text, obj2),
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: num,
          onTextLayout: callback,
          children: children.description,
        }),
      ];
      let tmp13Result = true === first;
      if (tmp13Result) {
        const obj3 = {
          hitSlop: rect,
          accessibilityRole: "button",
          accessibilityLabel: stringResult,
          accessibilityState: null,
          onPress: null,
          children: null,
        };
        const obj4 = { expanded: tmp3 };
        obj3.accessibilityState = obj4;
        obj3.onPress = callback1;
        const obj5 = { variant: "text-sm/medium", color: "text-link", children: stringResult };
        obj3.children = timestampProducer(Text_Text.Text, obj5);
        tmp13Result = timestampProducer(React4, obj3);
      }
      items2[2] = tmp13Result;
      obj.children = items2;
      return React5(hasOwnProperty, obj);
    };
