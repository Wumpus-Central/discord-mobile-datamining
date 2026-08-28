// === Module 7788: setOptions ===

// Module 7788 (setOptions)
import applyDefault from "apply" /* 12 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import generateBlockedGroupRowData from "generateBlockedGroupRowData" /* 7791 */;
import generateMessageRowData from "generateMessageRowData" /* 7793 */;
import generateSeparatorRowData from "generateSeparatorRowData" /* 12847 */;
import generateLoadingRowData from "generateLoadingRowData" /* 12848 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import Changeset from "Changeset" /* 7789 */;

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