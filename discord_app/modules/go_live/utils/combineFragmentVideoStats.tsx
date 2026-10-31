// discord_app/modules/go_live/utils/combineFragmentVideoStats.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/combineFragmentVideoStats.tsx");

export default function combineFragmentVideoStats(arr) {
  if (1 === arr.length) {
    const obj = {
      duration: null,
      avg_bitrate: null,
      avg_fps: null,
      avg_resolution: null,
      inbound_bitrate_estimate_percentile99: null,
    };
    ({
      duration: obj.duration,
      avg_bitrate: obj.avg_bitrate,
      avg_fps: obj.avg_fps,
      avg_resolution: obj.avg_resolution,
      inbound_bitrate_estimate_percentile99: obj.inbound_bitrate_estimate_percentile99,
    } = _slicedToArray(arr, 1)[0]);
    return obj;
  } else {
    const reduced = arr.reduce((acc, duration_aggregation) => {
      let num = duration_aggregation.duration_aggregation;
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const mapped = arr.map(
      (inbound_bitrate_estimate_percentile99) =>
        inbound_bitrate_estimate_percentile99.inbound_bitrate_estimate_percentile99,
    );
    const found = mapped.filter((item) => null != item);
    const obj2 = {
      duration: arr.reduce((acc, duration) => {
        let num = duration.duration;
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0),
      avg_bitrate: null,
      avg_fps: null,
      avg_resolution: null,
      inbound_bitrate_estimate_percentile99: null,
    };
    let avg_resolution = "avg_bitrate";
    if (reduced <= 0) {
      let avg_bitrate = arr[arr.length - 1].avg_bitrate;
    } else {
      const _Math = Math;
      avg_bitrate = Math.round(
        arr.reduce((acc, duration_aggregation) => {
          let num = duration_aggregation[avg_resolution];
          if (num == null) {
            num = 0;
          }
          let num2 = duration_aggregation.duration_aggregation;
          if (num2 == null) {
            num2 = 0;
          }
          return acc + num * num2;
        }, 0) / reduced,
      );
    }
    obj2.avg_bitrate = avg_bitrate;
    avg_resolution = "avg_fps";
    if (reduced <= 0) {
      let avg_fps = arr[arr.length - 1].avg_fps;
    } else {
      const _Math2 = Math;
      avg_fps = Math.round(
        arr.reduce((acc, duration_aggregation) => {
          let num = duration_aggregation[avg_resolution];
          if (num == null) {
            num = 0;
          }
          let num2 = duration_aggregation.duration_aggregation;
          if (num2 == null) {
            num2 = 0;
          }
          return acc + num * num2;
        }, 0) / reduced,
      );
    }
    obj2.avg_fps = avg_fps;
    avg_resolution = "avg_resolution";
    if (reduced <= 0) {
      avg_resolution = arr[arr.length - 1].avg_resolution;
    } else {
      const _Math3 = Math;
      avg_resolution = Math.round(
        arr.reduce((acc, duration_aggregation) => {
          let num = duration_aggregation[avg_resolution];
          if (num == null) {
            num = 0;
          }
          let num2 = duration_aggregation.duration_aggregation;
          if (num2 == null) {
            num2 = 0;
          }
          return acc + num * num2;
        }, 0) / reduced,
      );
    }
    obj2.avg_resolution = avg_resolution;
    let applyResult;
    if (found.length > 0) {
      const _Math4 = Math;
      const items = [];
      HermesBuiltin.arraySpread(found, 0);
      const _Math5 = Math;
      applyResult = HermesBuiltin.apply(items, Math);
    }
    obj2.inbound_bitrate_estimate_percentile99 = applyResult;
    return obj2;
  }
}
