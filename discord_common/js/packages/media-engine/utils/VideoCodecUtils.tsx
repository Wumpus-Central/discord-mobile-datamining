// discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
import Constants from "../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ExperimentFlags = Constants.ExperimentFlags;
let items = [
  { name: "H264", encode: true, decode: true },
  { name: "VP8", encode: true, decode: true },
];
const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx");

export const filterParsedVideoCodecs = function filterParsedVideoCodecs(
  parseNativeCodecsResult,
  experimentCodecs,
  arg2,
) {
  closure_0 = parseNativeCodecsResult;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  items = undefined;
  let set;
  const combined = experimentCodecs.concat(items);
  items = [];
  const item = combined.forEach((encode) => {
    const found = mapped.find((name) => encode.name === name.name);
    if (null != found) {
      const obj = { name: null, encode: null, decode: null };
      ({ name: obj.name, encode } = found);
      if (encode) {
        encode = encode.encode;
      }
      obj.encode = encode;
      obj.decode = found.decode && encode.decode;
      items.push(obj);
    }
  });
  if (flag) {
    const _Set = Set;
    set = new Set(items.map((name) => name.name));
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
  let tmp4 = hasItem;
  if (!hasItem) {
    tmp4 = hasItem1;
  }
  items = [];
  if (tmp4) {
    const obj = { name: "AV1", encode: hasItem, decode: hasItem1 };
    items.push(obj);
  }
  let hasItem2;
  if (experimentFlags != null) {
    hasItem2 = experimentFlags.has(ExperimentFlags.H265_HARDWARE_ONLY);
  }
  let tmp8 = !hasItem2;
  if (hasItem2) {
    let hasItem3;
    if (experimentFlags != null) {
      hasItem3 = experimentFlags.has(ExperimentFlags.H265_HARDWARE_DECODE_AVAILABLE);
    }
    tmp8 = hasItem3;
  }
  items.push({ name: "H265", encode: !experimentFlags.has(ExperimentFlags.H265_DISABLE_ENCODE), decode: tmp8 });
  return items;
};
export const filterVideoCodecs = function filterVideoCodecs(arg0, arr) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const parsed = JSON.parse(arg0);
  const mapped = parsed.map((codec) => {
    codec = codec.codec;
    let str = "AV1";
    if ("AV1X" !== codec) {
      str = codec;
    }
    return { name: str, encode: codec.encode, decode: codec.decode };
  });
  if (flag === undefined) {
    flag = false;
  }
  items = undefined;
  let set;
  const combined = arr.concat(items);
  items = [];
  const item = combined.forEach((encode) => {
    const found = mapped.find((name) => encode.name === name.name);
    if (null != found) {
      const obj = { name: null, encode: null, decode: null };
      ({ name: obj.name, encode } = found);
      if (encode) {
        encode = encode.encode;
      }
      obj.encode = encode;
      obj.decode = found.decode && encode.decode;
      items.push(obj);
    }
  });
  if (flag) {
    const _Set = Set;
    set = new Set(items.map((name) => name.name));
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
  return parsed.map((codec) => {
    codec = codec.codec;
    let str = "AV1";
    if ("AV1X" !== codec) {
      str = codec;
    }
    return { name: str, encode: codec.encode, decode: codec.decode };
  });
};
export function codecNameToPayloadName(name) {
  let str = "AV1X";
  if ("AV1" !== name) {
    str = name;
  }
  return str;
}
