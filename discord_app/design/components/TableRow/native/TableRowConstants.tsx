import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let StyleSheet;
({ Platform, StyleSheet } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRowConstants.tsx");

export const TABLE_ROW_HEIGHT = 60;
export const TABLE_ROW_CONTENT_HEIGHT = 36;
export const TABLE_ROW_ICON_SIZE = 32;
export const TABLE_ROW_PADDING = 12;
export const TABLE_ROW_DIVIDER_PADDING = 56;
export const TABLE_DIVIDER_WIDTH = 1;
export function getTableDividerWidth(arg0) {
  return 1;
}