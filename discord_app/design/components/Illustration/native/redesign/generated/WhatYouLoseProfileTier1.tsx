// discord_app/design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx
import shared from "../../../../../shared.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import _mod8952 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx",
);

export function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8952.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15508__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15509__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15510__.js");
    },
  });
}
export function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15508__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15509__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15510__.js");
    },
  });
}
export function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const illustrationSource = _mod8952.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/15508__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15509__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15510__.js");
    },
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("../../../../../../../_runtime/metro/15508__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/15509__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/15510__.js");
    },
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}
