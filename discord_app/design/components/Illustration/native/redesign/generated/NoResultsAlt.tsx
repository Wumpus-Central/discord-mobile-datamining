// discord_app/design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx
import shared from "../../../../../shared.tsx";
import _mod8296 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/09831__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09832__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07106__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/09831__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09832__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07106__.js");
    },
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/09831__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09832__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07106__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
