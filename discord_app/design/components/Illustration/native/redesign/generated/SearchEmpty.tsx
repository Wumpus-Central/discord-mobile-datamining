// discord_app/design/components/Illustration/native/redesign/generated/SearchEmpty.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import AccessibilityAnnouncer from "../../../../../shared.tsx";
import getIllustrationSource from "../../index.tsx";
import { Image } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/SearchEmpty.tsx",
);

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9170);
    },
    darker() {
      return callback(9171);
    },
    light() {
      return callback(9172);
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9170);
    },
    darker() {
      return callback(9171);
    },
    light() {
      return callback(9172);
    },
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9170);
    },
    darker() {
      return callback(9171);
    },
    light() {
      return callback(9172);
    },
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
