// discord_app/design/components/Illustration/native/redesign/generated/InviteEmpty.tsx
import shared from "../../../../../shared.tsx";
import _mod8233 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/10950__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17648__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10949__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/10950__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17648__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10949__.js");
    },
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InviteEmpty = function InviteEmpty(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/10950__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17648__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/10949__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
