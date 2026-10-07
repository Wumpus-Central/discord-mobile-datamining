// discord_app/modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx
import search_tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../../../user_settings/LocaleStore.tsx";

const require = fn;
const SearchConstants = fn(7524);
({ SearchTabs: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({
  header: { marginBottom: 16 },
  headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (searchContext) => {
      const cResult = searchContext(576).c(16);
      searchContext = searchContext.searchContext;
      const documentsIndexed = searchContext.documentsIndexed;
      const tab = searchContext.tab;
      const tmp4 = closure_7();
      const NumberResult = Number(documentsIndexed);
      if (cResult[0] !== NumberResult) {
        const toLocaleStringResult = NumberResult.toLocaleString(LocaleStore.locale);
        cResult[0] = NumberResult;
        cResult[1] = toLocaleStringResult;
        let tmp5 = toLocaleStringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (tab === constants.MESSAGES) {
        const headerMessages = tmp4.headerMessages;
      }
      if (cResult[2] === documentsIndexed) {
        if (cResult[3] === searchContext) {
          let tmp9 = cResult[4];
          let tmp10 = cResult[5];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        if (cResult[6] === headerMessages) {
          if (cResult[7] === tmp4.header) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] !== tmp5) {
            const intl = tmp(1126).intl;
            const obj2 = { count: tmp5 };
            const formatResult = intl.format(tmp(1126).t["4Y3O+O"], obj2);
            cResult[9] = tmp5;
            cResult[10] = formatResult;
            let tmp14 = formatResult;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] !== tmp14) {
            const obj3 = { variant: "heading-sm/normal", color: "interactive-text-default", children: tmp14 };
            const tmp18 = jsx(tmp(4892).Text, {
              variant: "heading-sm/normal",
              color: "interactive-text-default",
              children: tmp14,
            });
            cResult[11] = tmp14;
            cResult[12] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[12];
          }
          if (cResult[13] === tmp13) {
            if (cResult[14] === tmp16) {
              let tmp19 = cResult[15];
            }
            return tmp19;
          }
          const obj4 = { variant: "primary", border: "subtle", style: tmp13, children: tmp16 };
          const tmp21 = jsx(tmp(6002).Card, { variant: "primary", border: "subtle", style: tmp13, children: tmp16 });
          cResult[13] = tmp13;
          cResult[14] = tmp16;
          cResult[15] = tmp21;
          tmp19 = tmp21;
        }
        const items = [tmp4.header, headerMessages];
        cResult[6] = headerMessages;
        cResult[7] = tmp4.header;
        cResult[8] = items;
        tmp13 = items;
      }
      const fn = function b() {
        search_tracking_TrackingDefault.trackSearchIndexing({
          searchContext,
          isHistoricalIndexing: true,
          documentsIndexed,
        });
      };
      const items1 = [documentsIndexed, searchContext];
      cResult[2] = documentsIndexed;
      cResult[3] = searchContext;
      cResult[4] = fn;
      cResult[5] = items1;
      tmp10 = items1;
      tmp9 = fn;
      const obj = searchContext(576);
    }
  : (searchContext) => {
      searchContext = searchContext.searchContext;
      const documentsIndexed = searchContext.documentsIndexed;
      const tab = searchContext.tab;
      const tmp = closure_7();
      noop = tmp;
      const items = [documentsIndexed];
      const items1 = [tmp.headerMessages, tab];
      const memo = noop.useMemo(() => Number(documentsIndexed).toLocaleString(LocaleStore.locale), items);
      const items2 = [documentsIndexed, searchContext];
      const memo1 = noop.useMemo(() => {
        if (tab === constants.MESSAGES) {
          headerMessages = headerMessages.headerMessages;
        }
        return headerMessages;
      }, items1);
      const effect = noop.useEffect(() => {
        search_tracking_TrackingDefault.trackSearchIndexing({
          searchContext,
          isHistoricalIndexing: true,
          documentsIndexed,
        });
      }, items2);
      const obj = { variant: "primary", border: "subtle", style: null, children: null };
      const items3 = [tmp.header, memo1];
      obj.style = items3;
      const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", children: null };
      const intl = searchContext(tab[8]).intl;
      obj2.children = intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo });
      obj.children = jsx(searchContext(tab[9]).Text, {
        variant: "heading-sm/normal",
        color: "interactive-text-default",
        children: null,
      });
      return jsx(searchContext(tab[10]).Card, { variant: "primary", border: "subtle", style: null, children: null });
    };
