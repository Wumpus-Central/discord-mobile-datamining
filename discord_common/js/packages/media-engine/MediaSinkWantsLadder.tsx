// === Module 4960: MediaSinkWantsLadder ===

// Module 4960 (MediaSinkWantsLadder)
import Constants from "Constants" /* 4915 */;
import size_mod from "module_2" /* 2 */;

let set;

let _window;
let c2;
let c3;
let map;
({ defaultVideoQualityOptions: _window, VIDEO_QUALITY_FRAMERATE: map, VIDEO_QUALITY_FRAMERATE_MUTED_2: c2, VIDEO_QUALITY_FRAMERATE_MUTED: c3 } = Constants);
class MediaSinkWantsLadder {
  constructor(arg0) {
    let height;
    let width;
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = React;
    }
    ({ width, height } = tmp.videoBudget);
    if (width > 0) {
      if (height > 0) {
        const obj = Object.create(new.target.prototype);
        obj.pixelBudget = width * height;
        obj.ladder = MediaSinkWantsLadder.calculateLadder(obj.pixelBudget);
        obj.orderedLadder = MediaSinkWantsLadder.calculateOrderedLadder(obj.ladder);
        return obj;
      }
    }
    const error = new Error("Invalid argument");
    throw error;
  }
  getMaxSinkValue(videoParticipantCount, arg1) {
    let pixelCount;
    let wantValue2;
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    if (videoParticipantCount < 0) {
      const _Error = Error;
      const self = this;
      const self2 = this;
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
        if (pixelCount * videoParticipantCount > tmp.pixelBudget) {
          obj.return();
          break;
        } else {
          wantValue = wantValue2;
          continue;
        }
        break;
      }
    }
  }
  getResolution(arg0) {
    let tmp2 = null;
    const orderedLadder = this.orderedLadder;
    for (const item10010 of orderedLadder) {
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
      size = { width: null, height: null, budgetPortion: null, mutedFramerate: null, framerate: null };
      ({ width: obj2.width, height: obj2.height, budgetPortion: obj2.budgetPortion, mutedFramerate: obj2.mutedFramerate, framerate: obj2.framerate } = first);
      return size;
    }
  }
  static calculateLadder(pixelBudget) {
    let budgetPortion;
    let height;
    let width;
    set = new Set([0, 4, 8, 10]);
    const items = [];
    let num = 1;
    do {
      let result = 16 * num / 9;
      if (set.has(result % 16)) {
        if (set.has(num % 16)) {
          let result1 = result * num;
          size = { pixelCount: result1, width: result, height: num, budgetPortion: result1 / pixelBudget, wantValue: 0 };
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
        let size1 = { width, height, budgetPortion, mutedFramerate: MediaSinkWantsLadder.getMutedFramerate(num2), framerate: map };
        ({}[num2]) = size1;
        diff = num2 - 10;
        tmp5 = width;
      }
      num3 = num3 + 1;
      num2 = diff;
      num4 = tmp5;
    } while (num3 <= 25);
  }
  static getMutedFramerate(arg0) {
    return arg0 <= 20 ? React2 : _false;
  }
  static calculateOrderedLadder(ladder) {
    const items = [];
    const keys = Object.keys(ladder);
    const mapped = keys.map((item) => Number(item));
    const sorted = mapped.sort((arg0, arg1) => arg0 - arg1);
    const iter = sorted[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (0 !== nextResult) {
        size = ladder[tmp3];
        let obj = { pixelCount: size.width * size.height, wantValue: tmp3 };
        let push = items.push;
        let merged = Object.assign(size);
        let arr = push(obj);
      }
      continue;
    }
    return items;
  }
}
const prototype = MediaSinkWantsLadder.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/MediaSinkWantsLadder.tsx");

export { MediaSinkWantsLadder };