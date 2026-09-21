// discord_app/design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx
import shared from "../../../../../shared.tsx";
import _mod8502 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx",
);

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13768__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13769__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13770__.js");
    },
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13768__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13769__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13770__.js");
    },
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13768__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13769__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13770__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
