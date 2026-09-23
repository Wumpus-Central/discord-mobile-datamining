// discord_app/design/components/Illustration/native/redesign/generated/InvalidLink.tsx
import shared from "../../../../../shared.tsx";
import _mod8577 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11797__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12132__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11798__.js");
    },
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11797__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12132__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11798__.js");
    },
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/11797__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/12132__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11798__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
