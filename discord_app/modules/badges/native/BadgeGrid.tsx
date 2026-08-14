// discord_app/modules/badges/native/BadgeGrid.tsx
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";

const PX_16 = require("Themes").space.PX_16;
const result = require("set").fileFinishedImporting("modules/badges/native/BadgeGrid.tsx");

export const BADGE_GRID_COLUMNS = 3;
export const BADGE_GRID_GAP = PX_16;
export const BADGE_TILE_ICON_SIZE = 60;
export const getBadgeTileSize = function getBadgeTileSize(width) {
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  return (bound - 2 * Themes.space.PX_16 - 2 * PX_16) / 3;
};