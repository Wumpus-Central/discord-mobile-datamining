// discord_app/modules/messages/native/renderer/RowGenerator.tsx
import applyDefault from "../../../../../_runtime/00012_apply.js";
import isDiscordFrontendDevelopment from "../../../../utils/GlobalUtils.tsx";
import generateBlockedGroupRowData from "rows/BlockedGroup.tsx";
import generateMessageRowData from "MessageWithContent.tsx";
import generateSeparatorRowData from "rows/Separator.tsx";
import generateLoadingRowData from "rows/Loading.tsx";
import closure_3 from "../../../user_settings/ThemeStore.tsx";
import Changeset from "RowGeneratorConstants.tsx";

require = arg1;
({ RowType: c4, SeparatorType: c5, LoadingType: closure_6 } = Changeset);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
const merged = Object.assign(require("UserOption").DEFAULT_OPTIONS);
class RowManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = closure_7;
    return obj;
  }
}
const prototype = RowManager.prototype;
prototype["setOptions"] = function setOptions(arg0) {
  obj = applyDefault;
  this.options = obj.merge({}, obj, this.options, arg0);
};
prototype["generate"] = function generate(rowType) {
  const self = this;
  rowType = rowType.rowType;
  let theme = this.options.forcedTheme;
  if (theme == null) {
    theme = theme.theme;
  }
  if (constants.BLOCKED_GROUP !== rowType) {
    if (tmp2.IGNORED_GROUP !== rowType) {
      if (tmp2.SUSPENDED_USER_GROUP !== rowType) {
        if (tmp2.MESSAGE === rowType) {
          return generateMessageRowData.generateMessageRowData(rowType, self.options, theme);
        } else {
          if (constants2.DAY !== rowType) {
            if (tmp12.UNREAD !== rowType) {
              if (tmp12.SUMMARY !== rowType) {
                if (constants3.LOAD_BEFORE !== rowType) {
                  if (constants3.LOAD_AFTER !== rowType) {
                    isDiscordFrontendDevelopment.assertNever(rowType);
                  }
                }
                return generateLoadingRowData.generateLoadingRowData(rowType, theme);
              }
            }
          }
          return generateSeparatorRowData.generateSeparatorRowData(rowType, theme);
        }
      }
    }
  }
  return generateBlockedGroupRowData.generateBlockedGroupRowData(rowType, theme, self);
};
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;