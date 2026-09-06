// discord_app/modules/badges/native/BadgeGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const PX_16 = nativeDefault.space.PX_16;
const result = size.fileFinishedImporting("modules/badges/native/BadgeGrid.tsx");

export const BADGE_GRID_COLUMNS = 3;
export const BADGE_GRID_GAP = PX_16;
export const BADGE_TILE_ICON_SIZE = 60;
export const getBadgeTileSize = function getBadgeTileSize(width) {
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  return (bound - 2 * nativeDefault.space.PX_16 - 2 * PX_16) / 3;
};
