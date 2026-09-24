// === Module 16531: CategoryChannel ===

// Module 16531 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16532 */;
import ThreadChannelDefault from "ThreadChannel" /* 16539 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16557 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;