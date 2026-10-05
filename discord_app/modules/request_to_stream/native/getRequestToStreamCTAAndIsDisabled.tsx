// discord_app/modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import intl8 from "../../../intl/index.native.tsx";
import _modDef2979 from "../RequestToStream.messages.js";
import isInviteActive from "../../activities/utils/isInviteActive.tsx";
import useCanFulfillStreamRequest from "../useCanFulfillStreamRequest.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx");

export default function getRequestToStreamCTAAndIsDisabled(id) {
  let isDisabled;
  let text;
  const obj = useCanFulfillStreamRequest;
  const tmp3 = _slicedToArray(obj.canFulfillStreamRequest(id, true), 2);
  const first = tmp3[0];
  id = AuthenticationStore.getId();
  const obj2 = SnowflakeUtilsDefault;
  const extractTimestampResult = obj2.extractTimestamp(id.id);
  const sum = extractTimestampResult + isInviteActive.EMBED_LIFETIME;
  const tmp10 = sum < Date.now();
  const intl = intl8.intl;
  const stringResult = intl.string(_modDef2979["5+172e"]);
  if (tmp10) {
    const intl6 = intl8.intl;
    text = intl6.string(_modDef2979.u4QmWl);
    isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = intl8.intl;
    text = intl5.string(_modDef2979["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!first) {
      if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp3[1]) {
        const intl4 = intl8.intl;
        text = intl4.string(_modDef2979.P0wwmM);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp3[1]) {
        const intl3 = intl8.intl;
        text = intl3.string(_modDef2979["43zohO"]);
        isDisabled = true;
      } else if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp3[1]) {
        const intl2 = intl8.intl;
        text = intl2.string(_modDef2979.qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (useCanFulfillStreamRequest.StreamRequestUnfulfillableReason.NO_PERMISSION === tmp3[1]) {
          const intl7 = intl8.intl;
          text = intl7.string(_modDef2979["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
}
