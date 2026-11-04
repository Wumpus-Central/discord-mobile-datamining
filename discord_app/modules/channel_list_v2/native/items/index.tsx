// === Module 18404: CategoryChannel ===

// Module 18404 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18405 */;
import ThreadChannelDefault from "ThreadChannel" /* 18412 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18430 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;