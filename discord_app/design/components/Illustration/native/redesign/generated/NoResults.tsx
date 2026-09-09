// discord_app/design/components/Illustration/native/redesign/generated/NoResults.tsx
import shared from "../../../../../shared.tsx";
import _mod8259 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/08260__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08261__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08262__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/08260__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08261__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08262__.js");
    },
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/08260__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/08261__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/08262__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
