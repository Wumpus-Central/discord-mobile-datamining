// === Module 4629: getMaxSinkValue ===

// Module 4629 (getMaxSinkValue)
import set2 from "set" /* 2 */;
import DesktopSources from "DesktopSources" /* 4585 */;

({ defaultVideoQualityOptions: c0, VIDEO_QUALITY_FRAMERATE: closure_1, VIDEO_QUALITY_FRAMERATE_MUTED_2: obj1, VIDEO_QUALITY_FRAMERATE_MUTED: c3 } = DesktopSources);
let MediaSinkWantsLadder;
class MediaSinkWantsLadder {
  constructor() {
    tmp = global;
    if (global === undefined) {
      tmp = closure_0;
    }
    ({ width, height } = tmp.videoBudget);
    if (width > 0) {
      if (height > 0) {
        obj = Object.create(new.target.prototype);
        obj.pixelBudget = width * height;
        tmp3 = MediaSinkWantsLadder;
        obj.ladder = MediaSinkWantsLadder.calculateLadder(obj.pixelBudget);
        obj.orderedLadder = MediaSinkWantsLadder.calculateOrderedLadder(obj.ladder);
        return obj;
      }
    }
    error = new Error("Invalid argument");
    throw error;
  }
}
const prototype = MediaSinkWantsLadder.prototype;
prototype["getMaxSinkValue"] = function getMaxSinkValue(videoParticipantCount, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  if (videoParticipantCount < 0) {
    const _Error = Error;
    error = new Error("getMaxSinkValue: Requested " + videoParticipantCount);
    throw error;
  } else {
    let wantValue = this.orderedLadder[0].wantValue;
    const orderedLadder = this.orderedLadder;
    for (const item10015 of orderedLadder) {
      ({ pixelCount, wantValue: wantValue2 } = item10015);
      if (num > 0) {
        let tmp4 = pixelCount;
        if (num < pixelCount) {
          wantValue = wantValue2;
          let tmp7 = obj;
          obj.return();
          break;
        }
        return wantValue;
      }
      let tmp5 = pixelCount;
      if (pixelCount * arg0 > tmp.pixelBudget) {
        let tmp6 = obj;
        obj.return();
        break;
      } else {
        wantValue = wantValue2;
        continue;
      }
      break;
    }
  }
};
prototype["getResolution"] = function getResolution(arg0) {
  let tmp2 = null;
  for (const item10010 of tmp3) {
    let tmp4 = item10010;
    if (arg0 >= item10010.wantValue) {
      tmp2 = item10010;
      continue;
    } else {
      let tmp5 = obj;
      obj.return();
      break;
    }
    let first = tmp2;
    if (tmp2 == null) {
      first = tmp.orderedLadder[0];
    }
    let obj = { width: null, height: null, budgetPortion: null, mutedFramerate: null, framerate: null };
    let tmp7 = first;
    ({ width: obj2[0], height: obj2[1], budgetPortion: obj2[2], mutedFramerate: obj2[3], framerate: obj2[4] } = first);
    return obj;
  }
};
MediaSinkWantsLadder["calculateLadder"] = function calculateLadder(pixelBudget) {
  const set = new Set([0, 4, 8, 10]);
  const items = [];
  let num = 1;
  do {
    let result = 16 * num / 9;
    let tmp2 = num;
    if (set.has(result % 16)) {
      if (set.has(num % 16)) {
        let result1 = result * num;
        let obj = { pixelCount: null, width: null, height: null, budgetPortion: null, wantValue: 0 };
        obj[0] = result1;
        obj[1] = result;
        obj[2] = num;
        obj[3] = result1 / pixelBudget;
        let arr = items.push(obj);
      }
    }
    num = num + 1;
  } while (num < 4096);
  let num2 = 100;
  let num3 = 1;
  let num4 = 0;
  width = 0;
  height = 0;
  budgetPortion = 0;
  const iter = items[Symbol.iterator]();
  let tmp5 = num4;
  do {
    let tmp6 = items;
    let nextResult = iter.next();
    let tmp8 = iter;
    while (iter !== undefined) {
      let tmp9 = nextResult;
      if (nextResult.pixelCount * num3 > pixelBudget) {
        let tmp11 = iter;
        iter.return();
        break;
      } else {
        let tmp10 = nextResult;
        ({ width, height, budgetPortion } = tmp9);
        continue;
      }
      continue;
    }
    let tmp12 = width;
    let diff = num2;
    if (tmp5 !== width) {
      let tmp14 = MediaSinkWantsLadder;
      obj = { width: null, height: null, budgetPortion: null, mutedFramerate: null, framerate: null };
      let tmp15 = width;
      obj[0] = width;
      let tmp16 = height;
      obj[1] = height;
      let tmp17 = budgetPortion;
      obj[2] = budgetPortion;
      obj[3] = MediaSinkWantsLadder.getMutedFramerate(num2);
      let tmp18 = closure_1;
      obj[4] = closure_1;
      {}[num2] = obj;
      diff = num2 - 10;
      tmp5 = width;
    }
    num3 = num3 + 1;
    num2 = diff;
    num4 = tmp5;
  } while (num3 <= 25);
};
MediaSinkWantsLadder["getMutedFramerate"] = function getMutedFramerate(arg0) {
  return arg0 <= 20 ? closure_2 : closure_3;
};
MediaSinkWantsLadder["calculateOrderedLadder"] = function calculateOrderedLadder(ladder) {
  const items = [];
  const keys = Object.keys(ladder);
  const mapped = keys.map((arg0) => Number(arg0));
  const sorted = mapped.sort((arg0, arg1) => arg0 - arg1);
  const iter = sorted[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (0 !== nextResult) {
      let tmp4 = nextResult;
      let size = ladder[tmp3];
      let obj = { pixelCount: null, wantValue: null };
      obj[0] = size.width * size.height;
      obj[1] = tmp3;
      let tmp5 = obj;
      let tmp6 = size;
      let merged = Object.assign(size);
      let arr = items.push(obj);
    }
    continue;
  }
  return items;
};
let result = set2.fileFinishedImporting("../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx");

export { MediaSinkWantsLadder };