// === Module 13714: resolveShareSendOutcome ===

// Module 13714 (resolveShareSendOutcome)
import formatResults from "formatResults" /* 10711 */;
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/share/native/resolveShareSendOutcome.tsx");

export const getShareUploadError = function getShareUploadError(uploadError) {
  uploadError = undefined;
  if (uploadError != null) {
    uploadError = uploadError.uploadError;
  }
  if (uploadError == null) {
    uploadError = null;
  }
  return uploadError;
};
export const pairDestinationsWithChannels = function pairDestinationsWithChannels(arr, value) {
  const items = [];
  const item = arr.forEach((destination, index) => {
    if (null != value[index]) {
      const obj = { destination, channelId: value[index] };
      items.push(obj);
    }
  });
  return items;
};
export const withoutSentDestinations = function withoutSentDestinations(arr, arr2) {
  if (0 === arr2.length) {
    const items = [];
    HermesBuiltin.arraySpread(items, arr, 0);
    return items;
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(arr2.map(set(10711).destinationKey));
    return arr.filter((item) => {
      const has = set.has;
      const obj = formatResults;
      return !has(obj.destinationKey(item));
    });
  }
};
export const resolveShareSendOutcome = function resolveShareSendOutcome(arr) {
  let tmp3;
  const found = arr.filter((status) => "sent" === status.status);
  const found1 = arr.filter((status) => "failed" === status.status);
  let tmp = null;
  if (0 === found.length) {
    const mapped = found1.map((uploadError) => uploadError.uploadError);
    let found2 = mapped.find((item) => null != item);
    if (found2 == null) {
      found2 = null;
    }
    tmp = found2;
  }
  const obj = { sentDestinations: found.map((destination) => destination.destination), failedDestinations: found1.map((destination) => destination.destination), transitionChannelId: tmp3, uploadErrorToAlert: tmp };
  tmp3 = null;
  if (0 === found1.length) {
    const first = found[0];
    let channelId;
    if (first != null) {
      channelId = first.channelId;
    }
    if (channelId == null) {
      channelId = null;
    }
    tmp3 = channelId;
  }
  return obj;
};