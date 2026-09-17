// discord_app/design/components/Illustration/native/redesign/generated/StreamEnded.tsx
import shared from "../../../../../shared.tsx";
import _mod8380 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8380.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09753__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09754__.js");
    },
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09753__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09754__.js");
    },
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8380.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/09753__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/09754__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
