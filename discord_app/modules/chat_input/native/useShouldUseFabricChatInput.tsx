// discord_app/modules/chat_input/native/useShouldUseFabricChatInput.tsx
import { set } from "../../../utils/PlatformUtils.tsx";
import { apexExperiment } from "ChatInputFabricExperiment.tsx";
const chat_input = "chat_input";
const result = require("apexExperiment").fileFinishedImporting("modules/chat_input/native/useShouldUseFabricChatInput.tsx");

export const useShouldUseFabricChatInput = function useShouldUseFabricChatInput() {
  apexExperiment;
  if (null != closure_3) {
    let isAndroidResult = closure_3;
  } else {
    isAndroidResult = set.isAndroid();
    if (!isAndroidResult) {
      const tmp4Result = tmp4(4165);
      isAndroidResult = tmp4(4165).isIosFabric() && tmp3;
      const tmp6 = tmp4(4165).isIosFabric() && tmp3;
    }
    closure_3 = isAndroidResult;
    const obj = set;
    tmp4 = require;
  }
  return isAndroidResult;
};
export const shouldUseFabricChatInput = function shouldUseFabricChatInput() {
  if (null != closure_3) {
    let isAndroidResult = closure_3;
  } else {
    isAndroidResult = set.isAndroid();
    let enabled = !isAndroidResult;
    if (!isAndroidResult) {
      let obj = apexExperiment;
      obj = { location: null };
      obj[0] = chat_input;
      enabled = obj.getConfig(obj).enabled;
    }
    if (null != closure_3) {
      isAndroidResult = closure_3;
    } else {
      let tmp6Result = tmp6(500);
      isAndroidResult = tmp6Result.isAndroid();
      if (!isAndroidResult) {
        tmp6Result = tmp6(4165);
        isAndroidResult = tmp6Result.isIosFabric() && enabled;
        const tmp5 = tmp6Result.isIosFabric() && enabled;
      }
      closure_3 = isAndroidResult;
    }
    const obj5 = set;
  }
  return isAndroidResult;
};