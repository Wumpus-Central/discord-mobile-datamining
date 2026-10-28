// === Module 14826: getRequestToStreamCTAAndIsDisabled ===

// Module 14826 (getRequestToStreamCTAAndIsDisabled)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1125 */;
import _modDef3025 from "module_3025" /* 3025 */;
import isInviteActive from "isInviteActive" /* 11388 */;
import useCanFulfillStreamRequest from "useCanFulfillStreamRequest" /* 12773 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id, arg1) {
  const tmp3 = _slicedToArray(useCanFulfillStreamRequest.canFulfillStreamRequest(id, true), 2);
  id = AuthenticationStore.getId();
  const sum = SnowflakeUtilsDefault.extractTimestamp(id.id) + isInviteActive.EMBED_LIFETIME;
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
  const intl = util.intl;
  const string = intl.string;
  const tmp10 = _modDef3025;
  if (arg1) {
    let stringResult = string(tmp10.K0spYL);
  } else {
    stringResult = string(tmp10["5+172e"]);
  }
  if (tmp9) {
    const intl6 = util.intl;
    let text = intl6.string(_modDef3025.u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = util.intl;
    text = intl5.string(_modDef3025["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = util.intl;
        text = intl4.string(_modDef3025.P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = util.intl;
        text = intl3.string(_modDef3025["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = util.intl;
        text = intl2.string(_modDef3025.qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = util.intl;
          text = intl7.string(_modDef3025["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
};