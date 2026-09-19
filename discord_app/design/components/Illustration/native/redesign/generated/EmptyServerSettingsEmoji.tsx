// discord_app/design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx
import shared from "../../../../../shared.tsx";
import _mod8501 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx",
);

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17994__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17995__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17996__.js");
    },
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17994__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17995__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17996__.js");
    },
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/17994__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17995__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17996__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
