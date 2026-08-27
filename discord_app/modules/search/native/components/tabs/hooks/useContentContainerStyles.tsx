// === Module 16182: styles ===

// Module 16182 (styles)
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7555 */;
import createCacheKey from "createCacheKey" /* 4445 */;

({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = MessageEmbedTypes);
const styles = createCacheKey.createStyles({ filesOrLinksContentContainer: { paddingTop: SEARCH_LIST_HORIZONTAL_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, mediaContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - SEARCH_ROW_TAP_STATE_PADDING }, membersContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING } });
const result = set.fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;