// discord_app/i18n/native/index.tsx
import I18N from "../../../discord_common/js/packages/i18n/index.tsx";
import updateRulesDefault from "updateRules.tsx";
import size from "../../../_runtime/metro/00002__.js";

const updateRules = I18N.setUpdateRules(updateRulesDefault);
const result = size.fileFinishedImporting("i18n/native/index.tsx");
