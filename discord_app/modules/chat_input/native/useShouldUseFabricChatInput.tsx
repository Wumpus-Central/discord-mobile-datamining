// discord_app/modules/chat_input/native/useShouldUseFabricChatInput.tsx
const chat_input = "chat_input";
const result = require("apexExperiment").fileFinishedImporting("modules/chat_input/native/useShouldUseFabricChatInput.tsx");

export const useShouldUseFabricChatInput = function useShouldUseFabricChatInput() {
  importDefault(11292);
  if (null != closure_3) {
    let isAndroidResult = closure_3;
  } else {
    isAndroidResult = require(500) /* set */.isAndroid();
    if (!isAndroidResult) {
      const tmp4Result = tmp4(4149);
      isAndroidResult = tmp4(4149).isIosFabric() && tmp3;
      const tmp6 = tmp4(4149).isIosFabric() && tmp3;
    }
    closure_3 = isAndroidResult;
    const obj = require(500) /* set */;
    tmp4 = require;
  }
  return isAndroidResult;
};
export const shouldUseFabricChatInput = function shouldUseFabricChatInput() {
  if (null != closure_3) {
    let isAndroidResult = closure_3;
  } else {
    isAndroidResult = require(500) /* set */.isAndroid();
    let enabled = !isAndroidResult;
    if (!isAndroidResult) {
      let obj = importDefault(11292);
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
        tmp6Result = tmp6(4149);
        isAndroidResult = tmp6Result.isIosFabric() && enabled;
        const tmp5 = tmp6Result.isIosFabric() && enabled;
      }
      closure_3 = isAndroidResult;
    }
    const obj5 = require(500) /* set */;
  }
  return isAndroidResult;
};