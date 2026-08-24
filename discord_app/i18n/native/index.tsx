// discord_app/i18n/native/index.tsx
import set from "../../../_runtime/00002_set.js";
import getMessage from "../../../discord_common/js/packages/i18n/index.tsx";
import I18nLinkDefault from "updateRules.tsx";

getMessage.setUpdateRules(I18nLinkDefault);
const result = set.fileFinishedImporting("i18n/native/index.tsx");