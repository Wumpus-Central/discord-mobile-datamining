// === Module 16479: BadgeGrid ===

// Module 16479 (BadgeGrid)
import nativeDefault from "native" /* 575 */;

const PX_16 = nativeDefault.space.PX_16;
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeGrid.tsx");

export const BADGE_GRID_COLUMNS = 3;
export const BADGE_GRID_GAP = PX_16;
export const BADGE_TILE_ICON_SIZE = 48;
export function getBadgeTileSize(bottomSheetWidth) {
  return (bottomSheetWidth - 2 * nativeDefault.space.PX_16 - 2 * PX_16) / 3;
}