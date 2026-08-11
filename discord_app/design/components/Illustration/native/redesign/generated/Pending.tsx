// discord_app/design/components/Illustration/native/redesign/generated/Pending.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(15978);
    },
    darker() {
      return callback(15979);
    },
    light() {
      return callback(15980);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15978);
    },
    darker() {
      return callback(15979);
    },
    light() {
      return callback(15980);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(15978);
    },
    darker() {
      return callback(15979);
    },
    light() {
      return callback(15980);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};