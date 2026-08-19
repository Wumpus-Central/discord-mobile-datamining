// === Module 8157: setOptions ===

// Module 8157 (setOptions)
import applyDefault from "apply" /* 12 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import generateBlockedGroupRowData from "generateBlockedGroupRowData" /* 8160 */;
import generateMessageRowData from "generateMessageRowData" /* 8162 */;
import generateSeparatorRowData from "generateSeparatorRowData" /* 12800 */;
import generateLoadingRowData from "generateLoadingRowData" /* 12801 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;
import Changeset from "Changeset" /* 8158 */;

require = fn;
({ RowType: c4, SeparatorType: c5, LoadingType: closure_6 } = Changeset);
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
    if (constants.IGNORED_GROUP !== rowType) {
      if (constants.SUSPENDED_USER_GROUP !== rowType) {
        if (constants.MESSAGE === rowType) {
          return generateMessageRowData.generateMessageRowData(rowType, self.options, theme);
        } else {
          if (constants2.DAY !== rowType) {
            if (constants2.UNREAD !== rowType) {
              if (constants2.SUMMARY !== rowType) {
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
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;