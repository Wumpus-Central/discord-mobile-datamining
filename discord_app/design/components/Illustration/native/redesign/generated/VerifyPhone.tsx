// discord_app/design/components/Illustration/native/redesign/generated/VerifyPhone.tsx
import shared from "../../../../../shared.tsx";
import _mod8349 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17625__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17626__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17627__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17625__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17626__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17627__.js");
    },
  };
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17625__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17626__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17627__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
