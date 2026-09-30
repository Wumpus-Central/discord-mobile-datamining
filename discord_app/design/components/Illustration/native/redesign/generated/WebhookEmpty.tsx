// discord_app/design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod7874 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/16892__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/16893__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/16894__.js");
    },
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/16892__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/16893__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/16894__.js");
    },
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/16892__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/16893__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/16894__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
