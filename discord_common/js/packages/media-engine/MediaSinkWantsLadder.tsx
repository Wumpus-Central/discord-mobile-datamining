// discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({
  defaultVideoQualityOptions: closure_0,
  VIDEO_QUALITY_FRAMERATE: closure_1,
  VIDEO_QUALITY_FRAMERATE_MUTED_2: c2,
  VIDEO_QUALITY_FRAMERATE_MUTED: c3,
} = Constants);
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
    const error = new Error("getMaxSinkValue: Requested " + videoParticipantCount);
    throw error;
  } else {
    let wantValue = this.orderedLadder[0].wantValue;
    const orderedLadder = this.orderedLadder;
    for (const item10015 of orderedLadder) {
      ({ pixelCount, wantValue: wantValue2 } = item10015);
      if (num > 0) {
        if (num < pixelCount) {
          wantValue = wantValue2;
          obj.return();
          break;
        }
        return wantValue;
      }
      if (pixelCount * arg0 > tmp.pixelBudget) {
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
prototype["getResolution"] = function getResolution(localWant) {
  let tmp2 = null;
  for (const item10010 of tmp3) {
    if (arg0 >= item10010.wantValue) {
      tmp2 = item10010;
      continue;
    } else {
      obj.return();
      break;
    }
    let first = tmp2;
    if (tmp2 == null) {
      first = tmp.orderedLadder[0];
    }
    let size = { width: null, height: null, budgetPortion: null, mutedFramerate: null, framerate: null };
    ({
      width: obj2.width,
      height: obj2.height,
      budgetPortion: obj2.budgetPortion,
      mutedFramerate: obj2.mutedFramerate,
      framerate: obj2.framerate,
    } = first);
    return size;
  }
};
MediaSinkWantsLadder["calculateLadder"] = function calculateLadder(pixelBudget) {
  const set = new Set([0, 4, 8, 10]);
  const items = [];
  let num = 1;
  do {
    let result = (16 * num) / 9;
    if (set.has(result % 16)) {
      if (set.has(num % 16)) {
        let result1 = result * num;
        let size = {
          pixelCount: result1,
          width: result,
          height: num,
          budgetPortion: result1 / pixelBudget,
          wantValue: 0,
        };
        let arr = items.push(size);
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
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = nextResult;
      if (nextResult.pixelCount * num3 > pixelBudget) {
        iter.return();
        break;
      } else {
        ({ width, height, budgetPortion } = tmp9);
        continue;
      }
      continue;
    }
    let diff = num2;
    if (tmp5 !== width) {
      let size1 = { width: null, height: null, budgetPortion: null, mutedFramerate: null, framerate: null };
      size1.width = width;
      size1.height = height;
      size1.budgetPortion = budgetPortion;
      size1.mutedFramerate = MediaSinkWantsLadder.getMutedFramerate(num2);
      size1.framerate = framerate;
      {
      }
      [num2] = size1;
      diff = num2 - 10;
      tmp5 = width;
    }
    num3 = num3 + 1;
    num2 = diff;
    num4 = tmp5;
  } while (num3 <= 25);
};
MediaSinkWantsLadder["getMutedFramerate"] = function getMutedFramerate(arg0) {
  return arg0 <= 20 ? React2 : React3;
};
MediaSinkWantsLadder["calculateOrderedLadder"] = function calculateOrderedLadder(ladder) {
  const items = [];
  const keys = Object.keys(ladder);
  const mapped = keys.map((item) => Number(item));
  const sorted = mapped.sort((arg0, arg1) => arg0 - arg1);
  const iter = sorted[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (0 !== nextResult) {
      let size = ladder[tmp3];
      let obj = { pixelCount: size.width * size.height, wantValue: tmp3 };
      let merged = Object.assign(size);
      let arr = items.push(obj);
    }
    continue;
  }
  return items;
};
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx");

export { MediaSinkWantsLadder };
