// === Module 1074: lazyLoadFeedbackIntegration ===

// Module 1074 (lazyLoadFeedbackIntegration)
import _mod693 from "module_693" /* 693 */;
import MOBILE_FEEDBACK_INTEGRATION_NAME from "MOBILE_FEEDBACK_INTEGRATION_NAME" /* 1009 */;

const AutoInjectMobileFeedback = "AutoInjectMobileFeedback";
const AutoInjectMobileFeedbackButton = "AutoInjectMobileFeedbackButton";
const AutoInjectMobileScreenshotButton = "AutoInjectMobileScreenshotButton";

export const lazyLoadFeedbackIntegration = function lazyLoadFeedbackIntegration() {
  const obj = _mod693;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(MOBILE_FEEDBACK_INTEGRATION_NAME.MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    const tmpResult = _mod693;
    const client1 = tmpResult.getClient();
    integrationByName = null === client1;
  }
  if (!integrationByName) {
    integrationByName = undefined === tmp4;
  }
  if (!integrationByName) {
    const addIntegration = tmp4.addIntegration;
    const tmpResult2 = MOBILE_FEEDBACK_INTEGRATION_NAME;
    addIntegration(tmpResult2.feedbackIntegration());
  }
};
export const AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
export const lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  const obj = _mod693;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedback);
    }
  }
  if (!integrationByName) {
    const tmpResult = _mod693;
    const client1 = tmpResult.getClient();
    integrationByName = null === client1;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileFeedback };
    obj3.addIntegration(obj2);
  }
};
export const AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
export const lazyLoadAutoInjectFeedbackButtonIntegration = function lazyLoadAutoInjectFeedbackButtonIntegration() {
  const obj = _mod693;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedbackButton);
    }
  }
  if (!integrationByName) {
    const tmpResult = _mod693;
    const client1 = tmpResult.getClient();
    integrationByName = null === client1;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileFeedbackButton };
    obj3.addIntegration(obj2);
  }
};
export const AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
export const lazyLoadAutoInjectScreenshotButtonIntegration = function lazyLoadAutoInjectScreenshotButtonIntegration() {
  const obj = _mod693;
  const client = obj.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileScreenshotButton);
    }
  }
  if (!integrationByName) {
    const tmpResult = _mod693;
    const client1 = tmpResult.getClient();
    integrationByName = null === client1;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileScreenshotButton };
    obj3.addIntegration(obj2);
  }
};