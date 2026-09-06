// discord_app/design/components/Illustration/native/redesign/generated/InvalidLink.tsx
import shared from "../../../../../shared.tsx";
import _mod8233 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/11454__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11797__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11455__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/11454__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11797__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11455__.js");
    },
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/11454__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/11797__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/11455__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
