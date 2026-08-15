// discord_app/modules/quests/native/VideoQuestModal/icons/SkipBackwardIcon.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../../_runtime/06571_inlineStyles.js";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("inlineStyles").fileFinishedImporting("modules/quests/native/VideoQuestModal/icons/SkipBackwardIcon.tsx");

export const SkipBackwardIcon = function SkipBackwardIcon(width) {
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
  const merged = Object.assign(width, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 32 32";
  obj.fill = "none";
  const items = [callback(inlineStyles.Path, { d: "M169.545 229.312v7.919l14.838-10.253v46.348h7.669v-55.434h-6.169l-16.338 11.42ZM225.979 274.576c13.087 0 21.34-11.003 21.34-28.842 0-17.756-8.253-29.093-21.34-29.093-13.004 0-21.173 11.254-21.173 29.009 0 17.923 8.169 28.926 21.173 28.926Zm0-7.335c-8.419 0-13.004-8.336-13.004-21.591 0-13.087 4.585-21.673 13.004-21.673 8.503 0 13.171 8.669 13.171 21.757 0 13.171-4.668 21.507-13.171 21.507Z", fill: str, fillRule: "nonzero", transform: "translate(-25.102 -30.774) scale(.19361)" }), callback(inlineStyles.Path, { d: "M137.108 31.459a160.22 160.22 0 0 0-30.316-2.894c-88.439 0-160.24 71.801-160.24 160.241 0 88.439 71.801 160.24 160.24 160.24 88.499 0 160.241-71.742 160.241-160.24h-31.365c0 71.176-57.699 128.876-128.876 128.876-71.128 0-128.876-57.748-128.876-128.876 0-71.129 57.748-128.877 128.876-128.877 8.183 0 16.347.78 24.382 2.328l5.934-30.798Z", fill: str, transform: "matrix(-.0886 .03775 .03775 .0886 17.716 -4.317)" }), callback(inlineStyles.Path, { d: "M144.616 190.007V96.608l197.822 69.184-197.822 69.185v-44.97Z", fill: str, transform: "matrix(-.0222 .01458 .04451 .06777 3.48 -8.53)" })];
  obj.children = items;
  return callback2(inlineStyles, obj);
};