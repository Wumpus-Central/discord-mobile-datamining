// discord_app/design/void/WarningCircle/native/WarningCircle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = ["width", "height", "color"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let color;
      let height;
      let tmp11;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let width;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== arg0) {
        ({ width, height, color } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = tmp10;
        cResult[2] = width;
        cResult[3] = height;
        cResult[4] = color;
        tmp7 = color;
        tmp6 = height;
        tmp5 = width;
        tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let num6 = 20;
      let num7 = 20;
      if (undefined !== tmp5) {
        num7 = tmp5;
      }
      if (undefined !== tmp6) {
        num6 = tmp6;
      }
      let str = "currentColor";
      if (undefined !== tmp7) {
        str = tmp7;
      }
      if (cResult[5] !== str) {
        const tmp13 = jsx(inlineStyles.Path, {
          d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z",
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: str,
        });
        cResult[5] = str;
        cResult[6] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === num6) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === tmp11) {
            let tmp14;
            if (cResult[10] === num7) {
              tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
      }
      const Svg = inlineStyles.Svg;
      const merged = Object.assign(tmp4);
      const tmp16 = (
        <Svg width={num7} height={num6} viewBox="0 0 20 20">
          {tmp11}
        </Svg>
      );
      cResult[7] = num6;
      cResult[8] = tmp4;
      cResult[9] = tmp11;
      cResult[10] = num7;
      cResult[11] = tmp16;
      tmp14 = tmp16;
    }
  : (width) => {
      let num = width.width;
      if (num === undefined) {
        num = 20;
      }
      let num2 = width.height;
      if (num2 === undefined) {
        num2 = 20;
      }
      let str = width.color;
      if (str === undefined) {
        str = "currentColor";
      }
      const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0 }));
      const Svg = inlineStyles.Svg;
      const merged1 = Object.assign(merged);
      return (
        <Svg width={num} height={num2} viewBox="0 0 20 20">
          {jsx(inlineStyles.Path, {
            d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z",
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: str,
          })}
        </Svg>
      );
    };
const result = size.fileFinishedImporting("design/void/WarningCircle/native/WarningCircle.tsx");

export default tmp3;
