// discord_app/design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx
import shared from "../../../../../shared.tsx";
import _mod7671 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx",
);

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13144__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13145__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13146__.js");
    },
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13144__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13145__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13146__.js");
    },
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/13144__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/13145__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/13146__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
