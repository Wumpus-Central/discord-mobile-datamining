// _runtime/01063_lazyLoadFeedbackIntegration.js
import _mod682 from "metro/00682__.js";

require = arg1;
const dependencyMap = arg6;
const AutoInjectMobileFeedback = "AutoInjectMobileFeedback";
const AutoInjectMobileFeedbackButton = "AutoInjectMobileFeedbackButton";
const AutoInjectMobileScreenshotButton = "AutoInjectMobileScreenshotButton";

export const lazyLoadFeedbackIntegration = function lazyLoadFeedbackIntegration() {
  const client = _mod682.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(tmp(998).MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    let tmpResult = tmp(682);
    const client1 = tmpResult.getClient();
    integrationByName = null === client1;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    tmpResult = tmp(998);
    obj3.addIntegration(tmpResult.feedbackIntegration());
  }
};
export const AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
export const lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  let obj = _mod682;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedback);
    }
  }
  if (!integrationByName) {
    const client1 = _mod682.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod682;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: AutoInjectMobileFeedback };
    obj3.addIntegration(obj);
  }
};
export const AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
export const lazyLoadAutoInjectFeedbackButtonIntegration = function lazyLoadAutoInjectFeedbackButtonIntegration() {
  let obj = _mod682;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedbackButton);
    }
  }
  if (!integrationByName) {
    const client1 = _mod682.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod682;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: AutoInjectMobileFeedbackButton };
    obj3.addIntegration(obj);
  }
};
export const AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
export const lazyLoadAutoInjectScreenshotButtonIntegration = function lazyLoadAutoInjectScreenshotButtonIntegration() {
  let obj = _mod682;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileScreenshotButton);
    }
  }
  if (!integrationByName) {
    const client1 = _mod682.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod682;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj = { name: AutoInjectMobileScreenshotButton };
    obj3.addIntegration(obj);
  }
};
