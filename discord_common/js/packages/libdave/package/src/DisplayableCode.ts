// === Module 9848: generateDisplayableCode ===

// Module 9848 (generateDisplayableCode)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/DisplayableCode.ts");

export const generateDisplayableCode = function generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize) {
  if (toByteArrayResult.byteLength < desiredLength) {
    const _Error4 = Error;
    error = new Error("data.byteLength must be greater than or equal to desiredLength");
    throw error;
  } else if (desiredLength % chunkSize != 0) {
    const _Error3 = Error;
    const error1 = new Error("desiredLength must be a multiple of groupSize");
    throw error1;
  } else if (chunkSize > 8) {
    const _Error2 = Error;
    const error2 = new Error("groupSize must be less than or equal to 8");
    throw error2;
  } else {
    const _BigInt3 = BigInt;
    let str2 = "";
    const bigint = 8n;
    let num = 0;
    let str3 = "";
    if (0 < desiredLength) {
      while (true) {
        let _BigInt = BigInt;
        let BigIntResult = BigInt(0);
        let tmp2 = num;
        let tmp3 = str2;
        let tmp4 = BigIntResult;
        let diff = chunkSize;
        if (chunkSize > 0) {
          let tmp6 = toByteArrayResult[num + (chunkSize - diff)];
          let tmp7 = diff;
          let tmp8 = BigIntResult;
          while (undefined !== tmp6) {
            let _BigInt2 = BigInt;
            let tmp9 = BigIntResult << 8n;
            BigIntResult = tmp9 | BigInt(tmp6);
            diff = diff - 1;
            tmp4 = BigIntResult;
            continue;
          }
          let _Error = Error;
          let tmp10 = new.target;
          let str4 = "Out of bounds access from data array";
          let tmp11 = new.target;
          let error3 = new Error("Out of bounds access from data array");
          let tmp13 = error3;
          throw error3;
        }
        let str = tmp4 % tmp32;
        str = str.toString();
        str2 = str2 + str.padStart(chunkSize, "0");
        num = num + chunkSize;
        str3 = str2;
      }
    }
    return str3;
  }
};