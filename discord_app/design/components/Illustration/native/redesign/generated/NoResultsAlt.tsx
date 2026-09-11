// discord_app/design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx
import shared from "../../../../../shared.tsx";
import _mod8317 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/09852__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09853__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07127__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/09852__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09853__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07127__.js");
    },
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/09852__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09853__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/07127__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
