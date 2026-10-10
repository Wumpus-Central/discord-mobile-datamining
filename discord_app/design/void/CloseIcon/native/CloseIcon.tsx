// discord_app/design/void/CloseIcon/native/CloseIcon.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "color"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/CloseIcon/native/CloseIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Close(arg0) {
      const cResult = c.c(12);
      if (cResult[0] !== arg0) {
        ({ width, height, color } = arg0);
        const tmp10 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = tmp10;
        cResult[2] = width;
        cResult[3] = height;
        cResult[4] = color;
        let tmp7 = color;
        let tmp6 = height;
        let tmp5 = width;
        let tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      let num6 = 24;
      let num7 = 24;
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
        const obj2 = {
          fill: str,
          d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z",
        };
        const tmp13 = jsx(inlineStyles.Path, {
          fill: str,
          d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z",
        });
        cResult[5] = str;
        cResult[6] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === num6) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === tmp11) {
            if (cResult[10] === num7) {
              let tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
      }
      const obj3 = {};
      const merged = Object.assign(tmp4);
      obj3.width = num7;
      obj3.height = num6;
      obj3.viewBox = "0 0 24 24";
      obj3.children = tmp11;
      const tmp16 = jsx(inlineStyles.Svg, {});
      cResult[7] = num6;
      cResult[8] = tmp4;
      cResult[9] = tmp11;
      cResult[10] = num7;
      cResult[11] = tmp16;
      tmp14 = tmp16;
    }
  : function Close(width) {
      let num = width.width;
      if (num === undefined) {
        num = 24;
      }
      let num2 = width.height;
      if (num2 === undefined) {
        num2 = 24;
      }
      let str = width.color;
      if (str === undefined) {
        str = "currentColor";
      }
      const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0 }));
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.width = num;
      obj.height = num2;
      obj.viewBox = "0 0 24 24";
      obj.children = jsx(inlineStyles.Path, {
        fill: str,
        d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z",
      });
      return jsx(inlineStyles.Svg, {});
    };
