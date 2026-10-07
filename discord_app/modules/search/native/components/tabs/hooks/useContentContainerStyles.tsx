// discord_app/modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx
import SearchConstants from "../../../../SearchConstants.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const styles = createStyles.createStyles({
  filesOrLinksContentContainer: {
    paddingTop: SEARCH_LIST_HORIZONTAL_PADDING,
    paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING,
  },
  mediaContentContainer: {
    paddingTop: SEARCH_LIST_SECTION_TOP_PADDING,
    paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING,
  },
  messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - SEARCH_ROW_TAP_STATE_PADDING },
  membersContentContainer: {
    paddingTop: SEARCH_LIST_SECTION_TOP_PADDING,
    paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING,
  },
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;
