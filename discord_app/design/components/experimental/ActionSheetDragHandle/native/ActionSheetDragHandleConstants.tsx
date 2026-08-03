const PX_4 = require("Themes").space.PX_4;
const PX_8 = require("Themes").space.PX_8;
const sum = 2 * PX_8 + PX_4;
const result = require("set").fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandleConstants.tsx");

export const DRAG_HANDLE_BAR_HEIGHT = PX_4;
export const DRAG_HANDLE_PADDING = PX_8;
export const DRAG_HANDLE_HEIGHT = sum;