// discord_app/design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx
import shared from "../../../../../shared.tsx";
import _mod8317 from "../../index.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx",
);

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17641__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17642__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17643__.js");
    },
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17641__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17642__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17643__.js");
    },
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = {
    dark() {
      return require("../../../../../../../_runtime/metro/17641__.js");
    },
    darker() {
      return require("../../../../../../../_runtime/metro/17642__.js");
    },
    light() {
      return require("../../../../../../../_runtime/metro/17643__.js");
    },
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
