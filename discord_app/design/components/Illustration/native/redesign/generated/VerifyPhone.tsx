// discord_app/design/components/Illustration/native/redesign/generated/VerifyPhone.tsx
import shared from "../../../../../shared.tsx";
import _mod8349 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17626__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17627__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17628__.js");
    },
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17626__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17627__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17628__.js");
    },
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17626__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17627__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17628__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
