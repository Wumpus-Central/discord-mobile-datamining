// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import TrackingConstants from "../../../tracking/TrackingConstants.tsx";
import SearchFilterUtils from "SearchFilterUtils.tsx";
import _objectWithoutProperties from "../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let searchContext;

let closure_2 = ["ref"];
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
const jsx = Fragment.jsx;
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (searchContext) => {
        let onClose;
        let onOpen;
        let tmp = searchContext;
        let obj = searchContext(576);
        const cResult = obj.c(11);
        searchContext = searchContext.searchContext;
        ({ onOpen, onClose } = searchContext);
        let obj2 = searchContext(16819);
        const validOrderedFilterTokens = obj2.useValidOrderedFilterTokens(searchContext);
        if (cResult[0] === searchContext) {
          let tmp4;
          let tmp9;
          if (cResult[1] === validOrderedFilterTokens) {
            tmp4 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.oYEmhB);
            cResult[5] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0) {
                ref = searchContext.ref;
                tmp = closure_1_3(searchContext, closure_1_2);
                obj = { ref };
                IconButton = searchContext(closure_1_1[9]).IconButton;
                merged = Object.assign(tmp);
                obj.variant = "tertiary";
                intl = searchContext(closure_1_1[8]).intl;
                obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
                obj.size = "md";
                obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                  size: "sm",
                  color: "redesign-button-tertiary-text",
                });
                return closure_1_6(IconButton, obj);
              }
            }
            cResult[6] = T;
          } else {
            class T {
              constructor(arg0) {
                ref = searchContext.ref;
                tmp = closure_1_3(searchContext, closure_1_2);
                obj = { ref };
                IconButton = searchContext(closure_1_1[9]).IconButton;
                merged = Object.assign(tmp);
                obj.variant = "tertiary";
                intl = searchContext(closure_1_1[8]).intl;
                obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
                obj.size = "md";
                obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                  size: "sm",
                  color: "redesign-button-tertiary-text",
                });
                return closure_1_6(IconButton, obj);
              }
            }
          }
          if (cResult[7] === tmp4) {
            class T {
              constructor(arg0) {
                ref = searchContext.ref;
                tmp = closure_1_3(searchContext, closure_1_2);
                obj = { ref };
                IconButton = searchContext(closure_1_1[9]).IconButton;
                merged = Object.assign(tmp);
                obj.variant = "tertiary";
                intl = searchContext(closure_1_1[8]).intl;
                obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
                obj.size = "md";
                obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                  size: "sm",
                  color: "redesign-button-tertiary-text",
                });
                return closure_1_6(IconButton, obj);
              }
            }
          }
          cResult[7] = tmp4;
          cResult[8] = onClose;
          cResult[9] = onOpen;
          cResult[10] = jsx(tmp(7590).ContextMenu, {
            items: tmp4,
            align: "below",
            title: tmp9,
            ignoreKeyboardHide: true,
            onOpen,
            onClose,
            children: T,
          });
          const tmp14 = jsx(tmp(7590).ContextMenu, {
            items: tmp4,
            align: "below",
            title: tmp9,
            ignoreKeyboardHide: true,
            onOpen,
            onClose,
            children: T,
          });
        }
        if (cResult[3] !== searchContext) {
          class T {
            constructor(arg0) {
              ref = searchContext.ref;
              tmp = closure_1_3(searchContext, closure_1_2);
              obj = { ref };
              IconButton = searchContext(closure_1_1[9]).IconButton;
              merged = Object.assign(tmp);
              obj.variant = "tertiary";
              intl = searchContext(closure_1_1[8]).intl;
              obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
              obj.size = "md";
              obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                size: "sm",
                color: "redesign-button-tertiary-text",
              });
              return closure_1_6(IconButton, obj);
            }
          }
          cResult[3] = searchContext;
          cResult[4] = tmp6;
        } else {
          class T {
            constructor(arg0) {
              ref = searchContext.ref;
              tmp = closure_1_3(searchContext, closure_1_2);
              obj = { ref };
              IconButton = searchContext(closure_1_1[9]).IconButton;
              merged = Object.assign(tmp);
              obj.variant = "tertiary";
              intl = searchContext(closure_1_1[8]).intl;
              obj.accessibilityLabel = intl.string(searchContext(closure_1_1[8]).t.kP6oFy);
              obj.size = "md";
              obj.icon = closure_1_6(searchContext(closure_1_1[10]).FiltersHorizontalIcon, {
                size: "sm",
                color: "redesign-button-tertiary-text",
              });
              return closure_1_6(IconButton, obj);
            }
          }
        }
        const mapped = validOrderedFilterTokens.map(tmp6);
        cResult[0] = searchContext;
        cResult[1] = validOrderedFilterTokens;
        cResult[2] = mapped;
        tmp4 = mapped;
      }
    : (searchContext) => {
        let onClose;
        let onOpen;
        searchContext = searchContext.searchContext;
        let validOrderedFilterTokens;
        ({ onOpen, onClose } = searchContext);
        let obj = searchContext(validOrderedFilterTokens[6]);
        validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
        const items = [searchContext, validOrderedFilterTokens];
        const memo = react.useMemo(
          () =>
            validOrderedFilterTokens.map((item) => {
              let obj2;
              let obj3;
              let obj4;
              const obj = {
                label: obj2.getSearchTokenLabel(closure_1_0, item),
                IconComponent: obj3.getSearchTokenIcon(item),
                action: obj4.getSearchTokenPressHandler(closure_1_0, item, constants.CONTEXT_MENU),
              };
              obj2 = searchContext(validOrderedFilterTokens[7]);
              obj3 = searchContext(validOrderedFilterTokens[7]);
              obj4 = searchContext(validOrderedFilterTokens[7]);
              return obj;
            }),
          items,
        );
        const ContextMenu = searchContext(validOrderedFilterTokens[11]).ContextMenu;
        let intl = searchContext(validOrderedFilterTokens[8]).intl;
        return (
          <ContextMenu
            items={memo}
            align="below"
            title={intl.string(searchContext(validOrderedFilterTokens[8]).t.oYEmhB)}
            ignoreKeyboardHide
            onOpen={onOpen}
            onClose={onClose}
          >
            {function children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const IconButton = searchContext(validOrderedFilterTokens[9]).IconButton;
              const merged1 = Object.assign(merged);
              const intl = searchContext(validOrderedFilterTokens[8]).intl;
              return (
                <IconButton
                  ref={ref.ref}
                  variant="tertiary"
                  accessibilityLabel={intl.string(searchContext(validOrderedFilterTokens[8]).t.kP6oFy)}
                  size="md"
                  icon={jsx(searchContext(validOrderedFilterTokens[10]).FiltersHorizontalIcon, {
                    size: "sm",
                    color: "redesign-button-tertiary-text",
                  })}
                />
              );
            }}
          </ContextMenu>
        );
      },
);
const result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx",
);

export default memoResult;
