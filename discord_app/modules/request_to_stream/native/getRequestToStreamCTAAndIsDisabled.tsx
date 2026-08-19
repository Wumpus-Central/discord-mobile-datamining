// === Module 12791: getRequestToStreamCTAAndIsDisabled ===

// Module 12791 (getRequestToStreamCTAAndIsDisabled)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2789 */;
import result2 from "result" /* 10917 */;
import canFulfillStreamRequest from "canFulfillStreamRequest" /* 10929 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  const tmp3 = callback(canFulfillStreamRequest.canFulfillStreamRequest(id, true), 2);
  id = id.getId();
  const sum = DISCORD_EPOCHDefault.extractTimestamp(id.id) + result2.EMBED_LIFETIME;
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id.id);
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(messagesProxyDefault["5+172e"]);
  if (tmp9) {
    const intl6 = getSystemLocale.intl;
    let text = intl6.string(messagesProxyDefault.u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = getSystemLocale.intl;
    text = intl5.string(messagesProxyDefault["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (canFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = getSystemLocale.intl;
        text = intl4.string(messagesProxyDefault.P0wwmM);
        isDisabled = true;
      } else if (canFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = getSystemLocale.intl;
        text = intl3.string(messagesProxyDefault["43zohO"]);
        isDisabled = true;
      } else if (canFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = getSystemLocale.intl;
        text = intl2.string(messagesProxyDefault.qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (canFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = getSystemLocale.intl;
          text = intl7.string(messagesProxyDefault["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};