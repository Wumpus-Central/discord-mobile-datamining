// discord_app/design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8798 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx",
);

export function getGuildSubscriptionRemovalSource(theme) {
  return _mod8798.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15467__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15468__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15469__.js");
    },
  });
}
export function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15467__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15468__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15469__.js");
    },
  });
}
export function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const illustrationSource = _mod8798.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15467__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15468__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15469__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/15467__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15468__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15469__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
