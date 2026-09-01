// === Module 12906: getRequestToStreamCTAAndIsDisabled ===

// Module 12906 (getRequestToStreamCTAAndIsDisabled)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2855 */;
import result2 from "result" /* 11326 */;
import canFulfillStreamRequest from "canFulfillStreamRequest" /* 11333 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "fetchFingerprint" /* 1218 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  const tmp3 = callback(canFulfillStreamRequest.canFulfillStreamRequest(id, true), 2);
  id = id.getId();
  const obj = canFulfillStreamRequest;
  const obj2 = DISCORD_EPOCHDefault;
  const sum = DISCORD_EPOCHDefault.extractTimestamp(id.id) + result2.EMBED_LIFETIME;
  const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id.id);
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(messagesProxyDefault["5+172e"]);
  if (tmp9) {
    const intl6 = tmp(1236).intl;
    let text = intl6.string(tmp6(2855).u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1236).intl;
    text = intl5.string(tmp6(2855)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (tmp(11333).StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = tmp(1236).intl;
        text = intl4.string(tmp6(2855).P0wwmM);
        isDisabled = true;
      } else if (tmp(11333).StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = tmp(1236).intl;
        text = intl3.string(tmp6(2855)["43zohO"]);
        isDisabled = true;
      } else if (tmp(11333).StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = tmp(1236).intl;
        text = intl2.string(tmp6(2855).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (tmp(11333).StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = tmp(1236).intl;
          text = intl7.string(tmp6(2855)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};