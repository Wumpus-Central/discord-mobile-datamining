// discord_app/design/components/Illustration/native/redesign/generated/SearchEmpty.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(8639);
    },
    darker() {
      return callback(8640);
    },
    light() {
      return callback(8641);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSearchEmptySource = function useSearchEmptySource() {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8639);
    },
    darker() {
      return callback(8640);
    },
    light() {
      return callback(8641);
    }
  };
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SearchEmpty = function SearchEmpty(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(8639);
    },
    darker() {
      return callback(8640);
    },
    light() {
      return callback(8641);
    }
  };
  obj = {};
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};