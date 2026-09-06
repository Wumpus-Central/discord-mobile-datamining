// discord_app/modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2882 from "../RequestToStream.messages.js";
import isInviteActive from "../../activities/utils/isInviteActive.tsx";
import useCanFulfillStreamRequest from "../useCanFulfillStreamRequest.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  const tmp3 = _slicedToArray(useCanFulfillStreamRequest.canFulfillStreamRequest(id, true), 2);
  id = AuthenticationStore.getId();
  const sum = SnowflakeUtilsDefault.extractTimestamp(id.id) + isInviteActive.EMBED_LIFETIME;
  const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
  const intl = util.intl;
  const stringResult = intl.string(_modDef2882["5+172e"]);
  if (tmp9) {
    const intl6 = util.intl;
    let text = intl6.string(_modDef2882.u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = util.intl;
    text = intl5.string(_modDef2882["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = util.intl;
        text = intl4.string(_modDef2882.P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = util.intl;
        text = intl3.string(_modDef2882["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = util.intl;
        text = intl2.string(_modDef2882.qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = util.intl;
          text = intl7.string(_modDef2882["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
}
