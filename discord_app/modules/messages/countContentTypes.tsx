// === Module 9573: countContentTypes ===

// Module 9573 (countContentTypes)
const result = require("set").fileFinishedImporting("modules/messages/countContentTypes.tsx");

export default function countContentTypes(content) {
  let num = 0;
  if ("" !== content.content) {
    num = 1;
  }
  let sum = num;
  if (null != content.activity) {
    sum = num + 1;
  }
  let sum1 = sum;
  if (tmp2) {
    sum1 = sum + 1;
  }
  let sum2 = sum1;
  if (content.components.length > 0) {
    sum2 = sum1 + 1;
  }
  let sum3 = sum2;
  if (content.messageSnapshots.length > 0) {
    sum3 = sum2 + 1;
  }
  let sum4 = sum3;
  if (null != content.poll) {
    sum4 = sum3 + 1;
  }
  return sum4;
};