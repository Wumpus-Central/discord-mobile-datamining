// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const SearchFilterAddLocations = fn(7877).SearchFilterAddLocations;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/SearchFilterButton.tsx",
);

export default noop.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let validOrderedFilterTokens;
  ({ onOpen, onClose } = searchContext);
  let obj = searchContext(validOrderedFilterTokens[3]);
  validOrderedFilterTokens = obj.useValidOrderedFilterTokens(searchContext);
  const items = [searchContext, validOrderedFilterTokens];
  const memo = noop.useMemo(
    () =>
      validOrderedFilterTokens.map((item) => {
        const obj = {
          label: searchContext(validOrderedFilterTokens[4]).getSearchTokenLabel(closure_1_0, item),
          IconComponent: null,
          action: null,
        };
        const obj2 = searchContext(validOrderedFilterTokens[4]);
        obj.IconComponent = searchContext(validOrderedFilterTokens[4]).getSearchTokenIcon(item);
        const obj3 = searchContext(validOrderedFilterTokens[4]);
        obj.action = searchContext(validOrderedFilterTokens[4]).getSearchTokenPressHandler(
          closure_1_0,
          item,
          constants.CONTEXT_MENU,
        );
        return obj;
      }),
    items,
  );
  obj = {
    items: memo,
    align: "below",
    title: null,
    ignoreKeyboardHide: true,
    onOpen: null,
    onClose: null,
    children: null,
  };
  let intl = searchContext(validOrderedFilterTokens[6]).intl;
  obj.title = intl.string(searchContext(validOrderedFilterTokens[6]).t.oYEmhB);
  obj.onOpen = onOpen;
  obj.onClose = onClose;
  obj.children = function children(ref) {
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = searchContext(validOrderedFilterTokens[6]).intl;
    obj.accessibilityLabel = intl.string(searchContext(validOrderedFilterTokens[6]).t.kP6oFy);
    obj.size = "md";
    obj.icon = jsx(searchContext(validOrderedFilterTokens[8]).FiltersHorizontalIcon, {
      size: "sm",
      color: "redesign-button-tertiary-text",
    });
    return jsx(searchContext(validOrderedFilterTokens[7]).IconButton, { ref: ref.ref });
  };
  return jsx(searchContext(validOrderedFilterTokens[5]).ContextMenu, {
    items: memo,
    align: "below",
    title: null,
    ignoreKeyboardHide: true,
    onOpen: null,
    onClose: null,
    children: null,
  });
});
