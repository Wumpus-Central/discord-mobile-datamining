// === Module 5006: VideoCodecUtils ===

// Module 5006 (VideoCodecUtils)
import Constants from "Constants" /* 4915 */;
import size from "module_2" /* 2 */;

let encode, set;

const f89883 = (name) => name.name;
const f89885 = (codec) => {
  codec = codec.codec;
  let str = "AV1";
  if ("AV1X" !== codec) {
    str = codec;
  }
  return { name: str, encode: codec.encode, decode: codec.decode };
};
const ExperimentFlags = Constants.ExperimentFlags;
let items = [{ name: "H264", encode: true, decode: true }, { name: "VP8", encode: true, decode: true }];
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx");

export const filterParsedVideoCodecs = function filterParsedVideoCodecs(parseNativeCodecsResult, experimentCodecs, arg2) {
  let closure_0 = parseNativeCodecsResult;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  items = undefined;
  const combined = experimentCodecs.concat(items);
  items = [];
  const item = combined.forEach((encode) => {
    let closure_0 = encode;
    const found = mapped.find((name) => name.name === name.name);
    if (null != found) {
      const obj = { name: null, encode, decode: found.decode && encode.decode };
      ({ name: obj.name, encode } = found);
      const push = items.push;
      if (encode) {
        encode = encode.encode;
      }
      push(obj);
    }
  });
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set(items.map(f89883));
    const item1 = parseNativeCodecsResult.forEach((name) => {
      if (!set.has(name.name)) {
        const obj = { name: null, encode: false, decode: null };
        ({ name: obj.name, decode: obj.decode } = name);
        items.push(obj);
      }
    });
  }
  return items;
};
export const getExperimentCodecs = function getExperimentCodecs(experimentFlags) {
  const hasItem = experimentFlags.has(ExperimentFlags.SIGNAL_AV1_ENCODE);
  const hasItem1 = experimentFlags.has(ExperimentFlags.SIGNAL_AV1_DECODE);
  items = [];
  const tmp4 = hasItem || hasItem1;
  if (tmp4) {
    const obj = { name: "AV1", encode: hasItem, decode: hasItem1 };
    items.push(obj);
  }
  const tmp6 = !experimentFlags.has(ExperimentFlags.H265_DISABLE_ENCODE);
  const obj2 = { name: "H265", encode: tmp6, decode: experimentFlags.has(ExperimentFlags.H265_HARDWARE_DECODE_AVAILABLE) };
  items.push(obj2);
  return items;
};
export const filterVideoCodecs = function filterVideoCodecs(arg0, arr) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const parsed = JSON.parse(arg0);
  const mapped = parsed.map(f89885);
  if (flag === undefined) {
    flag = false;
  }
  items = undefined;
  set = undefined;
  const combined = arr.concat(items);
  items = [];
  const item = combined.forEach((encode) => {
    let closure_0 = encode;
    const found = mapped.find((name) => name.name === name.name);
    if (null != found) {
      const obj = { name: null, encode, decode: found.decode && encode.decode };
      ({ name: obj.name, encode } = found);
      const push = items.push;
      if (encode) {
        encode = encode.encode;
      }
      push(obj);
    }
  });
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(items.map(f89883));
    const item1 = mapped.forEach((name) => {
      if (!set.has(name.name)) {
        const obj = { name: null, encode: false, decode: null };
        ({ name: obj.name, decode: obj.decode } = name);
        items.push(obj);
      }
    });
  }
  return items;
};
export const parseNativeCodecs = function parseNativeCodecs(arg0) {
  const parsed = JSON.parse(arg0);
  return parsed.map(f89885);
};
export function codecNameToPayloadName(name) {
  let str = "AV1X";
  if ("AV1" !== name) {
    str = name;
  }
  return str;
}