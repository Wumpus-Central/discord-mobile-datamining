// === Module 18448: CategoryChannel ===

// Module 18448 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18449 */;
import ThreadChannelDefault from "ThreadChannel" /* 18456 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18474 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;