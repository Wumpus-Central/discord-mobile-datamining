// discord_app/design/components/Illustration/native/redesign/generated/Blocked.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(14058);
    },
    darker() {
      return callback(14059);
    },
    light() {
      return callback(14060);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14058);
    },
    darker() {
      return callback(14059);
    },
    light() {
      return callback(14060);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14058);
    },
    darker() {
      return callback(14059);
    },
    light() {
      return callback(14060);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};