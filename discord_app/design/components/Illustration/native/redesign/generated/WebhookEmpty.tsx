// discord_app/design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod8233 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/16847__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/16848__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/16849__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/16847__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/16848__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/16849__.js");
    },
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/16847__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/16848__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/16849__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
