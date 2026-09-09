// discord_app/design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx
import shared from "../../../../../shared.tsx";
import _mod8259 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx",
);

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13531__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13532__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13533__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13531__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13532__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13533__.js");
    },
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13531__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13532__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13533__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
