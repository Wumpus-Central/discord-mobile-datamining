// _runtime/metro/00877__.js
let items = [];
let num = 0;
do {
  items[num] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[num];
  num = num + 1;
} while (num < 64);

export const base64StringFromByteArray = function base64StringFromByteArray(arr2) {
  let sum;
  const result = length % 3;
  items = [];
  const diff = length - result;
  let num = 0;
  if (0 < diff) {
    do {
      sum = num + 16383;
      let sum2 = num;
      let tmp5 = sum;
      if (diff < sum) {
        tmp5 = diff;
      }
      let items1 = [];
      if (sum2 < tmp5) {
        do {
          let sum1 = ((arr2[sum2] << 16) & 16711680) + ((arr2[sum2 + 1] << 8) & 65280) + (255 & arr2[sum2 + 2]);
          let arr = items1.push(
            items[(sum1 >> 18) & 63] + items[(sum1 >> 12) & 63] + items[(sum1 >> 6) & 63] + items[63 & sum1],
          );
          sum2 = sum2 + 3;
        } while (sum2 < tmp5);
      }
      arr = items.push(items1.join(""));
      num = sum;
    } while (sum < diff);
  }
  if (1 === result) {
    const _HermesInternal = HermesInternal;
    items.push("" + items[arr2[length - 1] >> 2] + items[(arr2[length - 1] << 4) & 63] + "==");
  } else if (2 === result) {
    const sum3 = (arr2[length - 2] << 8) + arr2[length - 1];
    const _HermesInternal2 = HermesInternal;
    arr2 = items.push("" + items[sum3 >> 10] + items[(sum3 >> 4) & 63] + items[(sum3 << 2) & 63] + "=");
  }
  return items.join("");
};
