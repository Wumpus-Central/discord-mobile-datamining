// discord_app/modules/quests/native/VideoQuestModal/icons/SkipForwardIcon.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../../_runtime/08169_inlineStyles.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

let hasOwnProperty;
let metroRequire;
let closure_3 = ["width", "height", "color"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let color;
        let height;
        let items;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let width;
        const obj = react2;
        const cResult = obj.c(17);
        if (cResult[0] !== arg0) {
          ({ width, height, color } = arg0);
          const tmp10 = _objectWithoutProperties(arg0, closure_3);
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
            d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z",
            fill: str,
            fillRule: "nonzero",
            transform: "translate(-24.102 -30.774) scale(.19361)",
          };
          const tmp15 = hasOwnProperty(inlineStyles.Path, obj2);
          const obj3 = {
            d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z",
            fill: str,
            transform: "matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)",
          };
          const tmp16 = hasOwnProperty(inlineStyles.Path, obj3);
          const obj4 = {
            d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z",
            fill: str,
            transform: "matrix(.0222 .01458 -.04451 .06777 28.52 -8.53)",
          };
          const tmp17 = hasOwnProperty(inlineStyles.Path, obj4);
          cResult[5] = str;
          cResult[6] = tmp15;
          cResult[7] = tmp16;
          cResult[8] = tmp17;
          tmp13 = tmp17;
          tmp12 = tmp16;
          tmp11 = tmp15;
        } else {
          tmp11 = cResult[6];
          tmp12 = cResult[7];
          tmp13 = cResult[8];
        }
        if (cResult[9] === num6) {
          if (cResult[10] === tmp4) {
            if (cResult[11] === ref) {
              if (cResult[12] === tmp11) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === tmp13) {
                    let tmp18;
                    if (cResult[15] === num7) {
                      tmp18 = cResult[16];
                    }
                    return tmp18;
                  }
                }
              }
            }
          }
        }
        const obj5 = { width: num7, height: num6, viewBox: "0 0 32 32", fill: "none", ref, children: items };
        const tmp19 = inlineStylesDefault;
        const merged = Object.assign(tmp4);
        items = [tmp11, tmp12, tmp13];
        const tmp21 = metroRequire(tmp19, obj5);
        cResult[9] = num6;
        cResult[10] = tmp4;
        cResult[11] = ref;
        cResult[12] = tmp11;
        cResult[13] = tmp12;
        cResult[14] = tmp13;
        cResult[15] = num7;
        cResult[16] = tmp21;
        tmp18 = tmp21;
      }
    : (width, ref) => {
        let items;
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
        const obj = { width: num, height: num2, viewBox: "0 0 32 32", fill: "none", ref, children: items };
        const tmp2 = inlineStylesDefault;
        const merged1 = Object.assign(merged);
        items = [
          hasOwnProperty(inlineStyles.Path, {
            d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z",
            fill: str,
            fillRule: "nonzero",
            transform: "translate(-24.102 -30.774) scale(.19361)",
          }),
          hasOwnProperty(inlineStyles.Path, {
            d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z",
            fill: str,
            transform: "matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)",
          }),
          hasOwnProperty(inlineStyles.Path, {
            d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z",
            fill: str,
            transform: "matrix(.0222 .01458 -.04451 .06777 28.52 -8.53)",
          }),
        ];
        return metroRequire(tmp2, obj);
      },
);
forwardRefResult.displayName = "SkipForwardIcon";
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/icons/SkipForwardIcon.tsx");

export const SkipForwardIcon = forwardRefResult;
