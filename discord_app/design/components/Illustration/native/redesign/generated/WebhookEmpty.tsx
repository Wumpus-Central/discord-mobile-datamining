// discord_app/design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod8502 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17315__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17316__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17317__.js");
    },
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17315__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17316__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17317__.js");
    },
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17315__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17316__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17317__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
