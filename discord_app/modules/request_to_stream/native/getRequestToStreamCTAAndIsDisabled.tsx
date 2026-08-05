// discord_app/modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("canFulfillStreamRequest").fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  const tmp3 = callback(require(11079) /* canFulfillStreamRequest */.canFulfillStreamRequest(id, true), 2);
  id = id.getId();
  const obj = require(11079) /* canFulfillStreamRequest */;
  const obj2 = importDefault(11);
  const sum = importDefault(11).extractTimestamp(id.id) + require(11067) /* result */.EMBED_LIFETIME;
  const extractTimestampResult = importDefault(11).extractTimestamp(id.id);
  const intl = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2739)["5+172e"]);
  if (tmp9) {
    const intl6 = tmp(1236).intl;
    let text = intl6.string(tmp6(2739).u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1236).intl;
    text = intl5.string(tmp6(2739)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (tmp(11079).StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = tmp(1236).intl;
        text = intl4.string(tmp6(2739).P0wwmM);
        isDisabled = true;
      } else if (tmp(11079).StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = tmp(1236).intl;
        text = intl3.string(tmp6(2739)["43zohO"]);
        isDisabled = true;
      } else if (tmp(11079).StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = tmp(1236).intl;
        text = intl2.string(tmp6(2739).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (tmp(11079).StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = tmp(1236).intl;
          text = intl7.string(tmp6(2739)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};