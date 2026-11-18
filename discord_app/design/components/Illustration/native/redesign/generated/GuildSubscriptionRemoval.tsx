// discord_app/design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod7697 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx",
);

export function getGuildSubscriptionRemovalSource(theme) {
  return _mod7697.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14750__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14751__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14752__.js");
    },
  });
}
export function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14750__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14751__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14752__.js");
    },
  });
}
export function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const illustrationSource = _mod7697.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/14750__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14751__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14752__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/14750__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/14751__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/14752__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
