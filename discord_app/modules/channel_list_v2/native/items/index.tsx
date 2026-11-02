// === Module 18163: CategoryChannel ===

// Module 18163 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18164 */;
import ThreadChannelDefault from "ThreadChannel" /* 18171 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18189 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;