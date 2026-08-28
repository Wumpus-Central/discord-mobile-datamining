// discord_app/design/components/Illustration/native/redesign/generated/Blocked.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import AccessibilityAnnouncer from "../../../../../shared.tsx";
import getIllustrationSource from "../../index.tsx";
import { Image } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(14342);
    },
    darker() {
      return callback(14343);
    },
    light() {
      return callback(14344);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14342);
    },
    darker() {
      return callback(14343);
    },
    light() {
      return callback(14344);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14342);
    },
    darker() {
      return callback(14343);
    },
    light() {
      return callback(14344);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};