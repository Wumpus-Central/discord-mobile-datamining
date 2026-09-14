// _runtime/01063_lazyLoadFeedbackIntegration.js
import _mod682 from "metro/00682__.js";
import _getClientIntegration from "00998__getClientIntegration.js";

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
      integrationByName = client.getIntegrationByName(_getClientIntegration.MOBILE_FEEDBACK_INTEGRATION_NAME);
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
    obj3.addIntegration(_getClientIntegration.feedbackIntegration());
    const tmpResult2 = _getClientIntegration;
  }
};
export const AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
export const lazyLoadAutoInjectFeedbackIntegration = function lazyLoadAutoInjectFeedbackIntegration() {
  const client = _mod682.getClient();
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
    const obj2 = { name: AutoInjectMobileFeedback };
    obj3.addIntegration(obj2);
  }
};
export const AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
export const lazyLoadAutoInjectFeedbackButtonIntegration = function lazyLoadAutoInjectFeedbackButtonIntegration() {
  const client = _mod682.getClient();
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
    const obj2 = { name: AutoInjectMobileFeedbackButton };
    obj3.addIntegration(obj2);
  }
};
export const AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
export const lazyLoadAutoInjectScreenshotButtonIntegration = function lazyLoadAutoInjectScreenshotButtonIntegration() {
  const client = _mod682.getClient();
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
    const obj2 = { name: AutoInjectMobileScreenshotButton };
    obj3.addIntegration(obj2);
  }
};
