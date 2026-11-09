// === Module 8448: RowGenerator ===

// Module 8448 (RowGenerator)
import applyDefault from "apply" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import BlockedGroup from "BlockedGroup" /* 8451 */;
import MessageWithContent from "MessageWithContent" /* 8453 */;
import Separator from "Separator" /* 15438 */;
import Loading from "Loading" /* 15439 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const RowGeneratorConstants = fn(8449);
({ RowType: closure_4, SeparatorType: hasOwnProperty, LoadingType: closure_6 } = RowGeneratorConstants);
let obj = { constrainedWidth: 0, animatingStickerMessageId: null, forcedTheme: null, shouldObscureSpoiler: true, shouldDisableInteractiveComponents: true };
let merged = Object.assign(fn(8450).DEFAULT_OPTIONS);
class RowManager {
  constructor() {
    merged = Object.assign({ options: null });
    merged[0] = closure_7;
    return merged;
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
    theme = ThemeStore.theme;
  }
  if (constants.BLOCKED_GROUP !== rowType) {
    if (constants.IGNORED_GROUP !== rowType) {
      if (constants.SUSPENDED_USER_GROUP !== rowType) {
        if (constants.MESSAGE === rowType) {
          return MessageWithContent.generateMessageRowData(rowType, self.options, theme);
        } else {
          if (constants2.DAY !== rowType) {
            if (constants2.UNREAD !== rowType) {
              if (constants2.SUMMARY !== rowType) {
                if (constants2.CONVERSATION !== rowType) {
                  if (constants3.LOAD_BEFORE !== rowType) {
                    if (constants3.LOAD_AFTER !== rowType) {
                      GlobalUtils.assertNever(rowType);
                    }
                  }
                  return Loading.generateLoadingRowData(rowType, theme);
                }
              }
            }
          }
          return Separator.generateSeparatorRowData(rowType, theme);
        }
      }
    }
  }
  return BlockedGroup.generateBlockedGroupRowData(rowType, theme, self);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGenerator.tsx");

export default RowManager;