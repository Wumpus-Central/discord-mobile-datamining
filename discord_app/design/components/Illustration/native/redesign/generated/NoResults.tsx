// discord_app/design/components/Illustration/native/redesign/generated/NoResults.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod7697 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export function getNoResultsSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/08099__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08100__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08101__.js");
    },
  });
}
export function useNoResultsSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/08099__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08100__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08101__.js");
    },
  });
}
export function NoResults(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/08099__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08100__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08101__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/08099__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08100__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08101__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
