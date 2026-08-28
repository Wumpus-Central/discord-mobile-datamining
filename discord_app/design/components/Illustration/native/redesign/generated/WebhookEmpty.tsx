// discord_app/design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import AccessibilityAnnouncer from "../../../../../shared.tsx";
import getIllustrationSource from "../../index.tsx";
import { Image } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16357);
    },
    darker() {
      return callback(16358);
    },
    light() {
      return callback(16359);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16357);
    },
    darker() {
      return callback(16358);
    },
    light() {
      return callback(16359);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16357);
    },
    darker() {
      return callback(16358);
    },
    light() {
      return callback(16359);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};