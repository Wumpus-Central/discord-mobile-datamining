// discord_app/design/components/Illustration/native/redesign/generated/VerifyPhone.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8898 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export function getVerifyPhoneSource(theme) {
  return _mod8898.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/19968__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19969__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19970__.js");
    },
  });
}
export function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/19968__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19969__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19970__.js");
    },
  });
}
export function VerifyPhone(arg0) {
  const obj = shared;
  const illustrationSource = _mod8898.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/19968__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19969__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19970__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/19968__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/19969__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/19970__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
