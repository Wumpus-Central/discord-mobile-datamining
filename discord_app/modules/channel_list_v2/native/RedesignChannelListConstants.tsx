// discord_app/modules/channel_list_v2/native/RedesignChannelListConstants.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2 = "text-xs/medium";
let num = 20;
if (PlatformUtils.isIOS()) {
  num = 22;
}
let c4 = "text-sm/semibold";
let c5 = "text-sm/semibold";
const hairlineWidth = _mod17.StyleSheet.hairlineWidth;
const frozen = Object.freeze({ waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 25 });
const result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelListConstants.tsx");

export const CHANNEL_SUBTITLE_TEXT_VARIANT = "text-xs/medium";
export const CHANNEL_PADDING_VERTICAL = 8;
export const CHANNEL_TITLE_LINE_HEIGHT = num;
export const SEARCH_BAR_HEIGHT = 40;
export const SEARCH_BAR_MARGIN_BOTTOM = 8;
export const SEARCH_BAR_PADDING_VERTICAL = 12;
export const SEARCH_BAR_TEXT_VARIANT = "text-sm/semibold";
export const CATEGORY_NAME_TEXT_VARIANT = "text-sm/semibold";
export const PANEL_MARGIN = 8;
export const CHANNEL_MARGIN_VERTICAL = hairlineWidth;
export const CHANNEL_LIST_DESIGN_WIDTH = 375;
export const BANNER_MAX_HEIGHT_PERCENTAGE = 0.25;
export const MUTED_OPACITY_CONTENT = 0.24;
export const SUBTITLE_OPACITY_NORMAL = 0.8;
export const VOICE_USERS_HEIGHT = 36;
export const BORDER_BOTTOM_HEIGHT = 1;
export const STICKY_HEADER_VERTICAL_GAP = 8;
export const STICKY_HEADER_PADDING_TOP = 12;
export const STICKY_HEADER_PADDING_BOTTOM = 12;
export const STICKY_HEADER_PADDING_TOP_TABLET = 8;
export const STICKY_HEADER_MARGIN_BOTTOM = 8;
export const STICKY_HEADER_BLUR_AMOUNT = 0.6;
export const STICKY_BANNER_ASPECT_RATIO = 2.609375;
export const CATEGORY_MARGIN_TOP = 12;
export const CATEGORY_MARGIN_BOTTOM = 4;
export const CATEGORY_VERTICAL_PADDING = 4;
export const getScaledChannelSubtitleHeight = function getScaledChannelSubtitleHeight(fontScale) {
  return useScaledTextLineHeight.scaleTextLineHeight(c2, fontScale);
};
export const getScaledCategoryRowHeight = function getScaledCategoryRowHeight(fontScale) {
  return useScaledTextLineHeight.scaleTextLineHeight(c5, fontScale) + 8 + 4;
};
export const getScaledChannelRowHeight = function getScaledChannelRowHeight(arg0) {
  const sum = 8 + hairlineWidth;
  return 2 * sum + useScaledTextLineHeight.scaleLineHeight(num, arg0);
};
export const getScaledSearchBarHeight = function getScaledSearchBarHeight(fontScale) {
  return 24 + useScaledTextLineHeight.scaleTextLineHeight(c4, fontScale);
};
export const VIEWABILITY_CONFIG = frozen;
