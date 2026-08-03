import handleThemeChange from "handleThemeChange";
import Changeset from "Changeset";

let c4;
let c5;
let closure_6;
const require = arg1;
({ RowType: c4, SeparatorType: c5, LoadingType: closure_6 } = Changeset);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
const merged = Object.assign(require("UserOption").DEFAULT_OPTIONS);
class RowManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = LoadingType;
    return obj;
  }
}
const prototype = RowManager.prototype;
prototype["setOptions"] = function setOptions(arg0) {
  const obj = importDefault(12);
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
          return require(7844) /* generateMessageRowData */.generateMessageRowData(rowType, self.options, theme);
        } else {
          if (constants2.DAY !== rowType) {
            if (tmp12.UNREAD !== rowType) {
              if (tmp12.SUMMARY !== rowType) {
                if (constants3.LOAD_BEFORE !== rowType) {
                  if (constants3.LOAD_AFTER !== rowType) {
                    require(1351) /* isDiscordFrontendDevelopment */.assertNever(rowType);
                  }
                }
                return require(12512) /* generateLoadingRowData */.generateLoadingRowData(rowType, theme);
              }
            }
          }
          return require(12511) /* generateSeparatorRowData */.generateSeparatorRowData(rowType, theme);
        }
      }
    }
  }
  return require(7842) /* generateBlockedGroupRowData */.generateBlockedGroupRowData(rowType, theme, self);
};
const result = require("UserOption").fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;