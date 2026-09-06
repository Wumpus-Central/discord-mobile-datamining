// discord_app/design/components/Illustration/native/redesign/generated/WumpTrash.tsx
import shared from "../../../../../shared.tsx";
import _mod8233 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/15979__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15980__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/15979__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15980__.js");
    },
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WumpTrash = function WumpTrash(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/15979__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15980__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
