// discord_app/design/components/Illustration/native/redesign/generated/Tier048Px.tsx
import shared from "../../../../../shared.tsx";
import _mod8233 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13509__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13510__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13511__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13509__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13510__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13511__.js");
    },
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/13509__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13510__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13511__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
