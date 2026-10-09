// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx
import SearchFilterUtils from "SearchFilterUtils.tsx";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const SearchFilterAddLocations = fn(9284).SearchFilterAddLocations;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SearchFilterButton(searchContext) {
        const cResult = searchContext(576).c(11);
        searchContext = searchContext.searchContext;
        ({ onOpen, onClose } = searchContext);
        let obj = searchContext(576);
        const validOrderedFilterTokens = searchContext(17248).useValidOrderedFilterTokens(searchContext);
        if (cResult[0] === searchContext) {
          if (cResult[1] === validOrderedFilterTokens) {
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.oYEmhB);
              cResult[5] = stringResult;
              let tmp9 = stringResult;
            } else {
              tmp9 = cResult[5];
            }
            const _Symbol2 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor(arg0) {
                  tmp = closure_1_3(searchContext, closure_1_2);
                  obj = { ref: searchContext.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "tertiary";
                  intl = searchContext(closure_1_1[8]).intl;
                  obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
                  obj.size = "md";
                  obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                    size: "sm",
                    color: "redesign-button-tertiary-text",
                  });
                  return closure_1_6(searchContext(closure_1_1[9]).IconButton, obj);
                }
              }
              cResult[6] = S;
            } else {
              class S {
                constructor(arg0) {
                  tmp = closure_1_3(searchContext, closure_1_2);
                  obj = { ref: searchContext.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "tertiary";
                  intl = searchContext(closure_1_1[8]).intl;
                  obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
                  obj.size = "md";
                  obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                    size: "sm",
                    color: "redesign-button-tertiary-text",
                  });
                  return closure_1_6(searchContext(closure_1_1[9]).IconButton, obj);
                }
              }
            }
            if (cResult[7] === cResult[2]) {
              class S {
                constructor(arg0) {
                  tmp = closure_1_3(searchContext, closure_1_2);
                  obj = { ref: searchContext.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "tertiary";
                  intl = searchContext(closure_1_1[8]).intl;
                  obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
                  obj.size = "md";
                  obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                    size: "sm",
                    color: "redesign-button-tertiary-text",
                  });
                  return closure_1_6(searchContext(closure_1_1[9]).IconButton, obj);
                }
              }
            }
            let obj3 = {
              items: cResult[2],
              align: "below",
              title: tmp9,
              ignoreKeyboardHide: true,
              onOpen,
              onClose,
              children: S,
            };
            const tmp14 = jsx(tmp(9335).ContextMenu, {
              items: cResult[2],
              align: "below",
              title: tmp9,
              ignoreKeyboardHide: true,
              onOpen,
              onClose,
              children: S,
            });
            cResult[7] = cResult[2];
            cResult[8] = onClose;
            cResult[9] = onOpen;
            cResult[10] = tmp14;
          }
        }
        if (cResult[3] !== searchContext) {
          class S {
            constructor(arg0) {
              tmp = closure_1_3(searchContext, closure_1_2);
              obj = { ref: searchContext.ref };
              merged = Object.assign(tmp);
              obj.variant = "tertiary";
              intl = searchContext(closure_1_1[8]).intl;
              obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
              obj.size = "md";
              obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                size: "sm",
                color: "redesign-button-tertiary-text",
              });
              return closure_1_6(searchContext(closure_1_1[9]).IconButton, obj);
            }
          }
          cResult[3] = searchContext;
          cResult[4] = tmp6;
        } else {
          class S {
            constructor(arg0) {
              tmp = closure_1_3(searchContext, closure_1_2);
              obj = { ref: searchContext.ref };
              merged = Object.assign(tmp);
              obj.variant = "tertiary";
              intl = searchContext(closure_1_1[8]).intl;
              obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
              obj.size = "md";
              obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                size: "sm",
                color: "redesign-button-tertiary-text",
              });
              return closure_1_6(searchContext(closure_1_1[9]).IconButton, obj);
            }
          }
        }
        const mapped = validOrderedFilterTokens.map(tmp6);
        cResult[0] = searchContext;
        cResult[1] = validOrderedFilterTokens;
        cResult[2] = mapped;
        let obj2 = searchContext(17248);
      }
    : function SearchFilterButton(searchContext) {
        searchContext = searchContext.searchContext;
        let validOrderedFilterTokens;
        ({ onOpen, onClose } = searchContext);
        validOrderedFilterTokens = searchContext(validOrderedFilterTokens[6]).useValidOrderedFilterTokens(
          searchContext,
        );
        const items = [searchContext, validOrderedFilterTokens];
        const memo = noop.useMemo(
          () =>
            validOrderedFilterTokens.map((item) => {
              const obj = {
                label: searchContext(validOrderedFilterTokens[7]).getSearchTokenLabel(closure_1_0, item),
                IconComponent: null,
                action: null,
              };
              const obj2 = searchContext(validOrderedFilterTokens[7]);
              obj.IconComponent = searchContext(validOrderedFilterTokens[7]).getSearchTokenIcon(item);
              const obj3 = searchContext(validOrderedFilterTokens[7]);
              obj.action = searchContext(validOrderedFilterTokens[7]).getSearchTokenPressHandler(
                closure_1_0,
                item,
                constants.CONTEXT_MENU,
              );
              return obj;
            }),
          items,
        );
        let obj2 = {
          items: memo,
          align: "below",
          title: null,
          ignoreKeyboardHide: true,
          onOpen: null,
          onClose: null,
          children: null,
        };
        let intl = searchContext(validOrderedFilterTokens[8]).intl;
        obj2.title = intl.string(searchContext(validOrderedFilterTokens[8]).t.oYEmhB);
        obj2.onOpen = onOpen;
        obj2.onClose = onClose;
        obj2.children = function children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.variant = "tertiary";
          const intl = searchContext(validOrderedFilterTokens[8]).intl;
          obj.accessibilityLabel = intl.string(searchContext(validOrderedFilterTokens[8]).t.kP6oFy);
          obj.size = "md";
          obj.icon = jsx(searchContext(validOrderedFilterTokens[10]).FiltersHorizontalIcon, {
            size: "sm",
            color: "redesign-button-tertiary-text",
          });
          return jsx(searchContext(validOrderedFilterTokens[9]).IconButton, { ref: ref.ref });
        };
        return jsx(searchContext(validOrderedFilterTokens[11]).ContextMenu, {
          items: memo,
          align: "below",
          title: null,
          ignoreKeyboardHide: true,
          onOpen: null,
          onClose: null,
          children: null,
        });
      },
);
