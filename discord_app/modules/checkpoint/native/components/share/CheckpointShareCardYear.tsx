// === Module 13390: CheckpointShareCardYear ===

// Module 13390 (CheckpointShareCardYear)
import inlineStyles from "inlineStyles" /* 8023 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13391 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardYear.tsx");

export default function CheckpointShareCardYear(arg0) {
  ({ path, x } = arg0);
  const obj = { style: StyleSheet.absoluteFill, children: null };
  obj.children = jsx(inlineStyles.G, { x, children: jsx(inlineStyles.Path, { d: path, fill: noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).primaryBackgroundColor }) });
  return <tmp style={StyleSheet.absoluteFill}>{null}</tmp>;
};
export const YEAR_WIDTH = 44;
export const YEAR_PATH = "M6.25,18.75L0,18.75L0,0L18.7187,0L18.7187,6.25L24.9687,6.25L24.9687,12.5L37.4687,12.5L37.4687,0L43.7187,0L43.7187,12.5L37.4687,12.5L37.4687,18.75L24.9687,18.75L24.9687,12.5L18.7187,12.5L18.7187,6.25L6.25,6.25L6.25,18.75ZM6.25,29.97L6.25,23.72L37.5,23.72L37.5,29.97L43.75,29.97L43.75,42.47L37.5,42.47L37.5,48.72L6.25,48.72L6.25,42.47L0,42.47L0,29.97L6.25,29.97ZM6.25,29.97L6.25,42.47L37.5,42.47L37.5,29.97L6.25,29.97ZM6.25,72.44L0,72.44L0,53.69L18.7187,53.69L18.7187,59.94L24.9687,59.94L24.9687,66.19L37.4687,66.19L37.4687,53.69L43.7187,53.69L43.7187,66.19L37.4687,66.19L37.4687,72.44L24.9687,72.44L24.9687,66.19L18.7187,66.19L18.7187,59.94L6.25,59.94L6.25,72.44ZM43.75,96.16L37.5,96.16L37.5,83.66L25,83.66L25,96.16L18.75,96.16L18.75,102.41L6.25,102.41L6.25,96.16L0,96.16L0,83.66L6.25,83.66L6.25,77.41L37.5,77.41L37.5,83.66L43.75,83.66L43.75,96.16ZM6.25,83.66L6.25,96.16L18.75,96.16L18.75,83.66L6.25,83.66Z";
export const SHORT_YEAR_PATH = "M6.25,18.75L0,18.75L0,0L18.7187,0L18.7187,6.25L24.9687,6.25L24.9687,12.5L37.4687,12.5L37.4687,0L43.7187,0L43.7187,12.5L37.4687,12.5L37.4687,18.75L24.9687,18.75L24.9687,12.5L18.7187,12.5L18.7187,6.25L6.25,6.25L6.25,18.75ZM43.75,42.47L37.5,42.47L37.5,29.97L25,29.97L25,42.47L18.75,42.47L18.75,48.72L6.25,48.72L6.25,42.47L0,42.47L0,29.97L6.25,29.97L6.25,23.72L37.5,23.72L37.5,29.97L43.75,29.97L43.75,42.47ZM6.25,29.97L6.25,42.47L18.75,42.47L18.75,29.97L6.25,29.97Z";