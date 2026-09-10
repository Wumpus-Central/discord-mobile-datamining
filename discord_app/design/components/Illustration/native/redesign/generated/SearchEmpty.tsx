// discord_app/design/components/Illustration/native/redesign/generated/SearchEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod8296 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/10388__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10389__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10390__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/10388__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10389__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10390__.js");
    },
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/10388__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/10389__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10390__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
