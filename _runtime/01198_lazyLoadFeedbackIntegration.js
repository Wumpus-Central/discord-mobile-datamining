// _runtime/01198_lazyLoadFeedbackIntegration.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
const AutoInjectMobileFeedback = "AutoInjectMobileFeedback";
const AutoInjectMobileFeedbackButton = "AutoInjectMobileFeedbackButton";
const AutoInjectMobileScreenshotButton = "AutoInjectMobileScreenshotButton";
arg5.lazyLoadFeedbackIntegration = function lazyLoadFeedbackIntegration() {
  const client = registerSpanErrorInstrumentation.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(tmp(1133).MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    let tmpResult = tmp(817);
    const client1 = tmpResult.getClient();
    integrationByName = null === client1;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    tmpResult = tmp(1133);
    obj3.addIntegration(tmpResult.feedbackIntegration());
  }
};
arg5.AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
arg5.lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedback);
    }
  }
  if (!integrationByName) {
    const client1 = registerSpanErrorInstrumentation.getClient();
    integrationByName = null === client1;
    const tmpResult = registerSpanErrorInstrumentation;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: null };
    obj[0] = AutoInjectMobileFeedback;
    obj3.addIntegration(obj);
  }
};
arg5.AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
arg5.lazyLoadAutoInjectFeedbackButtonIntegration = function lazyLoadAutoInjectFeedbackButtonIntegration() {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedbackButton);
    }
  }
  if (!integrationByName) {
    const client1 = registerSpanErrorInstrumentation.getClient();
    integrationByName = null === client1;
    const tmpResult = registerSpanErrorInstrumentation;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: null };
    obj[0] = AutoInjectMobileFeedbackButton;
    obj3.addIntegration(obj);
  }
};
arg5.AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
arg5.lazyLoadAutoInjectScreenshotButtonIntegration = function lazyLoadAutoInjectScreenshotButtonIntegration() {
  let obj = registerSpanErrorInstrumentation;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileScreenshotButton);
    }
  }
  if (!integrationByName) {
    const client1 = registerSpanErrorInstrumentation.getClient();
    integrationByName = null === client1;
    const tmpResult = registerSpanErrorInstrumentation;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: null };
    obj[0] = AutoInjectMobileScreenshotButton;
    obj3.addIntegration(obj);
  }
};