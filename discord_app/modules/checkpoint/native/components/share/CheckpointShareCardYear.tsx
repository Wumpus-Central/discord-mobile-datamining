// discord_app/modules/checkpoint/native/components/share/CheckpointShareCardYear.tsx
import c from "../../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../../_runtime/08017_inlineStyles.js";
import CheckpointShareCardContext from "CheckpointShareCardContext.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardYear.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointShareCardYear(arg0) {
      const cResult = c.c(6);
      ({ path, x } = arg0);
      const primaryBackgroundColor = noop.useContext(
        CheckpointShareCardContext.CheckpointShareCardColorsContext,
      ).primaryBackgroundColor;
      if (cResult[0] === path) {
        if (cResult[1] === primaryBackgroundColor) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === tmp4) {
          if (cResult[4] === x) {
            let tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj2 = { style: StyleSheet.absoluteFill, children: null };
        const obj3 = { x, children: tmp4 };
        obj2.children = jsx(inlineStyles.G, { x, children: tmp4 });
        const tmp11 = jsx(inlineStylesDefault, { style: StyleSheet.absoluteFill, children: null });
        cResult[3] = tmp4;
        cResult[4] = x;
        cResult[5] = tmp11;
        tmp6 = tmp11;
      }
      const tmp5 = jsx(inlineStyles.Path, { d: path, fill: primaryBackgroundColor });
      cResult[0] = path;
      cResult[1] = primaryBackgroundColor;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : function CheckpointShareCardYear(arg0) {
      ({ path, x } = arg0);
      const obj = { style: StyleSheet.absoluteFill, children: null };
      obj.children = jsx(inlineStyles.G, {
        x,
        children: jsx(inlineStyles.Path, {
          d: path,
          fill: noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).primaryBackgroundColor,
        }),
      });
      return <tmp style={StyleSheet.absoluteFill}>{null}</tmp>;
    };
export const YEAR_WIDTH = 44;
export const YEAR_PATH =
  "M6.25,18.75L0,18.75L0,0L18.7187,0L18.7187,6.25L24.9687,6.25L24.9687,12.5L37.4687,12.5L37.4687,0L43.7187,0L43.7187,12.5L37.4687,12.5L37.4687,18.75L24.9687,18.75L24.9687,12.5L18.7187,12.5L18.7187,6.25L6.25,6.25L6.25,18.75ZM6.25,29.97L6.25,23.72L37.5,23.72L37.5,29.97L43.75,29.97L43.75,42.47L37.5,42.47L37.5,48.72L6.25,48.72L6.25,42.47L0,42.47L0,29.97L6.25,29.97ZM6.25,29.97L6.25,42.47L37.5,42.47L37.5,29.97L6.25,29.97ZM6.25,72.44L0,72.44L0,53.69L18.7187,53.69L18.7187,59.94L24.9687,59.94L24.9687,66.19L37.4687,66.19L37.4687,53.69L43.7187,53.69L43.7187,66.19L37.4687,66.19L37.4687,72.44L24.9687,72.44L24.9687,66.19L18.7187,66.19L18.7187,59.94L6.25,59.94L6.25,72.44ZM43.75,96.16L37.5,96.16L37.5,83.66L25,83.66L25,96.16L18.75,96.16L18.75,102.41L6.25,102.41L6.25,96.16L0,96.16L0,83.66L6.25,83.66L6.25,77.41L37.5,77.41L37.5,83.66L43.75,83.66L43.75,96.16ZM6.25,83.66L6.25,96.16L18.75,96.16L18.75,83.66L6.25,83.66Z";
export const SHORT_YEAR_PATH =
  "M6.25,18.75L0,18.75L0,0L18.7187,0L18.7187,6.25L24.9687,6.25L24.9687,12.5L37.4687,12.5L37.4687,0L43.7187,0L43.7187,12.5L37.4687,12.5L37.4687,18.75L24.9687,18.75L24.9687,12.5L18.7187,12.5L18.7187,6.25L6.25,6.25L6.25,18.75ZM43.75,42.47L37.5,42.47L37.5,29.97L25,29.97L25,42.47L18.75,42.47L18.75,48.72L6.25,48.72L6.25,42.47L0,42.47L0,29.97L6.25,29.97L6.25,23.72L37.5,23.72L37.5,29.97L43.75,29.97L43.75,42.47ZM6.25,29.97L6.25,42.47L18.75,42.47L18.75,29.97L6.25,29.97Z";
