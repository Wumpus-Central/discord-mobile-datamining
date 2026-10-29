// === Module 1073: lazyLoadFeedbackIntegration ===

// Module 1073 (lazyLoadFeedbackIntegration)
import _mod693 from "module_693" /* 693 */;
import _getClientIntegration from "_getClientIntegration" /* 1007 */;

require = arg1;
const dependencyMap = arg6;
const AutoInjectMobileFeedback = "AutoInjectMobileFeedback";
const AutoInjectMobileFeedbackButton = "AutoInjectMobileFeedbackButton";
const AutoInjectMobileScreenshotButton = "AutoInjectMobileScreenshotButton";

export function lazyLoadFeedbackIntegration() {
  const client = _mod693.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(_getClientIntegration.MOBILE_FEEDBACK_INTEGRATION_NAME);
    }
  }
  if (!integrationByName) {
    const client1 = _mod693.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod693;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    obj3.addIntegration(_getClientIntegration.feedbackIntegration());
    const tmpResult2 = _getClientIntegration;
  }
}
export const AUTO_INJECT_FEEDBACK_INTEGRATION_NAME = "AutoInjectMobileFeedback";
export function lazyLoadAutoInjectFeedbackIntegration() {
  const client = _mod693.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedback);
    }
  }
  if (!integrationByName) {
    const client1 = _mod693.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod693;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileFeedback };
    obj3.addIntegration(obj2);
  }
}
export const AUTO_INJECT_FEEDBACK_BUTTON_INTEGRATION_NAME = "AutoInjectMobileFeedbackButton";
export function lazyLoadAutoInjectFeedbackButtonIntegration() {
  const client = _mod693.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileFeedbackButton);
    }
  }
  if (!integrationByName) {
    const client1 = _mod693.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod693;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileFeedbackButton };
    obj3.addIntegration(obj2);
  }
}
export const AUTO_INJECT_SCREENSHOT_BUTTON_INTEGRATION_NAME = "AutoInjectMobileScreenshotButton";
export function lazyLoadAutoInjectScreenshotButtonIntegration() {
  const client = _mod693.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(AutoInjectMobileScreenshotButton);
    }
  }
  if (!integrationByName) {
    const client1 = _mod693.getClient();
    integrationByName = null === client1;
    const tmpResult = _mod693;
  }
  if (!integrationByName) {
    integrationByName = undefined === obj3;
  }
  if (!integrationByName) {
    const obj2 = { name: AutoInjectMobileScreenshotButton };
    obj3.addIntegration(obj2);
  }
}