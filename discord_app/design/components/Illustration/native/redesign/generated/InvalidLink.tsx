// discord_app/design/components/Illustration/native/redesign/generated/InvalidLink.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(10438);
    },
    darker() {
      return callback(11201);
    },
    light() {
      return callback(10439);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10438);
    },
    darker() {
      return callback(11201);
    },
    light() {
      return callback(10439);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10438);
    },
    darker() {
      return callback(11201);
    },
    light() {
      return callback(10439);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};