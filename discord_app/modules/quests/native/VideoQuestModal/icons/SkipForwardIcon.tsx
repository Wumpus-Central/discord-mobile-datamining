// === Module 15298: SkipForwardIcon ===

// Module 15298 (SkipForwardIcon)
import c from "c" /* 576 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
let closure_3 = ["width", "height", "color", "ref"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SkipForwardIcon(arg0) {
  const cResult = c.c(18);
  if (cResult[0] !== arg0) {
    ({ width, height, color, ref } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    cResult[2] = ref;
    cResult[3] = width;
    cResult[4] = height;
    cResult[5] = color;
    let tmp8 = color;
    let tmp7 = height;
    let tmp6 = width;
    let tmp5 = ref;
    let tmp4 = tmp11;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  let num7 = 24;
  let num8 = 24;
  if (undefined !== tmp6) {
    num8 = tmp6;
  }
  if (undefined !== tmp7) {
    num7 = tmp7;
  }
  let str = "currentColor";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  if (cResult[6] !== str) {
    const obj2 = { d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z", fill: str, fillRule: "nonzero", transform: "translate(-24.102 -30.774) scale(.19361)" };
    const tmp16 = hasOwnProperty(inlineStyles.Path, obj2);
    const obj3 = { d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z", fill: str, transform: "matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)" };
    const tmp17 = hasOwnProperty(inlineStyles.Path, obj3);
    const obj4 = { d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z", fill: str, transform: "matrix(.0222 .01458 -.04451 .06777 28.52 -8.53)" };
    const tmp18 = hasOwnProperty(inlineStyles.Path, obj4);
    cResult[6] = str;
    cResult[7] = tmp16;
    cResult[8] = tmp17;
    cResult[9] = tmp18;
    let tmp14 = tmp18;
    let tmp13 = tmp17;
    let tmp12 = tmp16;
  } else {
    tmp12 = cResult[7];
    tmp13 = cResult[8];
    tmp14 = cResult[9];
  }
  if (cResult[10] === num7) {
    if (cResult[11] === tmp4) {
      if (cResult[12] === tmp5) {
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === num8) {
                let tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
        }
      }
    }
  }
  const obj5 = {};
  const merged = Object.assign(tmp4);
  obj5.width = num8;
  obj5.height = num7;
  obj5.viewBox = "0 0 32 32";
  obj5.fill = "none";
  obj5.ref = tmp5;
  const items = [tmp12, tmp13, tmp14];
  obj5.children = items;
  const tmp22 = timestampProducer(inlineStylesDefault, obj5);
  cResult[10] = num7;
  cResult[11] = tmp4;
  cResult[12] = tmp5;
  cResult[13] = tmp12;
  cResult[14] = tmp13;
  cResult[15] = tmp14;
  cResult[16] = num8;
  cResult[17] = tmp22;
  tmp19 = tmp22;
}) : (function SkipForwardIcon(width) {
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
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, color: 0, ref: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 32 32";
  obj.fill = "none";
  obj.ref = width.ref;
  const items = [hasOwnProperty(inlineStyles.Path, { d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z", fill: str, fillRule: "nonzero", transform: "translate(-24.102 -30.774) scale(.19361)" }), hasOwnProperty(inlineStyles.Path, { d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z", fill: str, transform: "matrix(.0886 .03775 -.03775 .0886 14.284 -4.317)" }), hasOwnProperty(inlineStyles.Path, { d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z", fill: str, transform: "matrix(.0222 .01458 -.04451 .06777 28.52 -8.53)" })];
  obj.children = items;
  return timestampProducer(inlineStylesDefault, obj);
});
tmp4.displayName = "SkipForwardIcon";
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/icons/SkipForwardIcon.tsx");

export const SkipForwardIcon = tmp4;