// discord_app/modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../RequestToStream.messages.js";
import result2 from "../../activities/utils/isInviteActive.tsx";
import canFulfillStreamRequest from "../useCanFulfillStreamRequest.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../stores/AuthenticationStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/request_to_stream/native/getRequestToStreamCTAAndIsDisabled.tsx",
);

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
    const intl6 = tmp(1114).intl;
    let text = intl6.string(tmp6(2882).u4QmWl);
    let isDisabled = true;
  } else if (id.author.id === id) {
    const intl5 = tmp(1114).intl;
    text = intl5.string(tmp6(2882)["8HU1M2"]);
    isDisabled = true;
  } else {
    isDisabled = false;
    text = stringResult;
    if (!tmp3[0]) {
      if (tmp(11766).StreamRequestUnfulfillableReason.ALREADY_STREAMING === tmp4) {
        const intl4 = tmp(1114).intl;
        text = intl4.string(tmp6(2882).P0wwmM);
        isDisabled = true;
      } else if (tmp(11766).StreamRequestUnfulfillableReason.NOT_RUNNING_GAME === tmp4) {
        const intl3 = tmp(1114).intl;
        text = intl3.string(tmp6(2882)["43zohO"]);
        isDisabled = true;
      } else if (tmp(11766).StreamRequestUnfulfillableReason.NOT_IN_VOICE_CHANNEL === tmp4) {
        const intl2 = tmp(1114).intl;
        text = intl2.string(tmp6(2882).qRXats);
        isDisabled = true;
      } else {
        isDisabled = false;
        text = stringResult;
        if (tmp(11766).StreamRequestUnfulfillableReason.NO_PERMISSION === tmp4) {
          const intl7 = tmp(1114).intl;
          text = intl7.string(tmp6(2882)["fac+eE"]);
          isDisabled = true;
        }
      }
    }
  }
  return { text, isDisabled };
}
