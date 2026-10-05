// discord_app/modules/client_themes/images/native/SynchronizeIconNative.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let G3;
      let fill;
      let first;
      let iconStyles;
      let items;
      let items1;
      let obj4;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(7);
      ({ fill, iconStyles } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          id: "Frame_-_24px",
          children: _false(inlineStyles.Rect, { y: "0", fill: "none", width: "24", height: "24" }),
        };
        const G = inlineStyles.G;
        const tmp6 = _false(G, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== fill) {
        const obj3 = { id: "Filled_Icons", children: React3(G3, obj4) };
        const G2 = inlineStyles.G;
        obj4 = { children: items };
        G3 = inlineStyles.G;
        const obj5 = {
          fill,
          d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10\n\t\t\tC9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z",
        };
        items = [_false(inlineStyles.Path, obj5)];
        const obj6 = {
          fill,
          d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10\n\t\t\tc2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z",
        };
        items[1] = _false(inlineStyles.Path, obj6);
        const tmp10 = _false(G2, obj3);
        cResult[1] = fill;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === fill) {
        if (cResult[4] === iconStyles) {
          let tmp11;
          if (cResult[5] === tmp7) {
            tmp11 = cResult[6];
          }
          return tmp11;
        }
      }
      size = {
        style: iconStyles,
        x: "0px",
        y: "0px",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill,
        children: items1,
      };
      items1 = [first, tmp7];
      const tmp12 = React3(inlineStylesDefault, size);
      cResult[3] = fill;
      cResult[4] = iconStyles;
      cResult[5] = tmp7;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (iconStyles) => {
      let G3;
      let items;
      let items1;
      let obj3;
      const fill = iconStyles.fill;
      size = {
        style: iconStyles.iconStyles,
        x: "0px",
        y: "0px",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill,
        children: items,
      };
      const obj = {
        id: "Frame_-_24px",
        children: _false(inlineStyles.Rect, { y: "0", fill: "none", width: "24", height: "24" }),
      };
      const tmp = inlineStylesDefault;
      const G = inlineStyles.G;
      items = [_false(G, obj)];
      const obj2 = { id: "Filled_Icons", children: React3(G3, obj3) };
      const G2 = inlineStyles.G;
      obj3 = { children: items1 };
      G3 = inlineStyles.G;
      items1 = [
        _false(inlineStyles.Path, {
          fill,
          d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z",
        }),
        _false(inlineStyles.Path, {
          fill,
          d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z",
        }),
      ];
      items[1] = _false(G2, obj2);
      return React3(tmp, size);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/client_themes/images/native/SynchronizeIconNative.tsx");

export default tmp4;
