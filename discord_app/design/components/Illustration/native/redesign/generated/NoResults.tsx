// discord_app/design/components/Illustration/native/redesign/generated/NoResults.tsx
import shared from "../../../../../shared.tsx";
import _mod8581 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/08582__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08583__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08584__.js");
    },
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/08582__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08583__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08584__.js");
    },
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/08582__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08583__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08584__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
