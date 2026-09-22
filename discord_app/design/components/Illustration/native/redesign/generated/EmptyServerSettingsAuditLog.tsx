// discord_app/design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx
import shared from "../../../../../shared.tsx";
import _mod8506 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx",
);

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8506.getIllustrationSource(theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18004__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18005__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18006__.js");
    },
  });
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18004__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18005__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18006__.js");
    },
  });
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("../../../../../../../_runtime/metro/18004__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/18005__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/18006__.js");
    },
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
