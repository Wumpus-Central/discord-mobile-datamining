// === Module 10004: EmojiPickerListRow ===

// Module 10004 (EmojiPickerListRow)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import native from "native" /* 1188 */;
import PlatformUtils2 from "PlatformUtils" /* 1376 */;
import shared from "shared" /* 5016 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Pressables from "Pressables" /* 6974 */;
import _modDef7296 from "module_7296" /* 7296 */;
import LockIcon from "LockIcon" /* 8659 */;
import getEmojiItemUrlDefault from "getEmojiItemUrl" /* 10005 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 10006 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;

require = fn;
function EmojiItemLockedOverlay() {
  const tmp = closure_9();
  const obj = { style: tmp.lockContainer, children: React5(LockIcon.LockIcon, { style: tmp.lock }) };
  return React5(React3, obj);
}
class EmojiItem {
  constructor(arg0) {
    emoji = global.emoji;
    ({ category, disabled, onPressEmoji, onLongPressEmoji } = global);
    ({ animateEmoji, isSectionNitroLocked } = global);
    tmp = closure_9();
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp4 = closure_1(closure_2[11])(emoji, animateEmoji, IMAGE_SIZE);
    if (disabled) {
      disabled = !isSectionNitroLocked;
    }
    tmp6 = closure_0;
    tmp5 = jsxs;
    obj = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: null, onPress: null, onLongPress: null, children: null };
    items = [, ];
    items[0] = tmp.surrogatesFrame;
    disabledOverlay = disabled;
    if (disabled) {
      disabledOverlay = tmp.disabledOverlay;
    }
    items[1] = disabledOverlay;
    obj.style = items;
    obj.onPress = function onPress() {
      return dependencyMap(emoji, importDefault);
    };
    obj.onLongPress = function onLongPress() {
      return closure_1_3(emoji);
    };
    if (null != emoji.id) {
      tmp11 = jsx;
      obj1 = { resizeMode: "contain", style: null, placeholder: null, source: null, usesSmallCache: true };
      obj1.style = tmp.image;
      tmp2Result = tmp2(tmp3[13]);
      tmp6Result = tmp6(tmp3[14]);
      tmp13 = closure_4;
      if (tmp6Result.isThemeDark(closure_4.theme)) {
        tmp3 = tmp3[15];
        tmp2Result1 = tmp2(tmp3);
      } else {
        tmp2Result1 = tmp2(tmp3[16]);
      }
      obj1.placeholder = tmp2Result1;
      obj6 = { uri: null };
      obj6.uri = tmp4;
      obj1.source = obj6;
      tmp11Result = tmp11(tmp2Result, obj1);
      tmp16 = tmp11;
    } else {
      tmp7 = jsx;
      obj7 = { allowFontScaling: false, style: null, children: null };
      obj7.style = tmp.surrogates;
      obj7.children = emoji.surrogates;
      tmp8 = jsx(tmp6(tmp3[17]).LegacyText, obj7);
      tmp9 = jsx;
      tmp10 = tmp8;
      items1 = [, ];
      items1[0] = tmp8;
      if (disabled) {
        tmp17 = EmojiItemLockedOverlay;
        disabled = tmp7(EmojiItemLockedOverlay, {});
      }
      items1[1] = disabled;
      obj.children = items1;
      return tmp5(closure_0(tmp3[12]).PressableOpacity, obj);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const EmojiPickerListConstants = fn(9921);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = fn(1229).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, surrogates: null, row: null, lockContainer: null, lock: null };
const PlatformUtils = fn(1376);
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.surrogates = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj.row = { height: EmojiPickerListConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj6 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
let obj4 = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
const obj8 = _modDef671("#000000");
obj6.backgroundColor = _modDef671("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.lockContainer = obj6;
obj.lock = { width: 16, height: 16, tintColor: "white" };
const React7 = createStyles.createStyles(obj);
let closure_12 = noop.memo(function EmojiPickerListRow(emojis) {
  emojis = emojis.emojis;
  ({ emojisDisabled, category: importDefault, rowSize, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
      } else {
        let id = tmp4.id;
        if (id == null) {
          id = null;
        }
        let obj = { id, name: null, url: null, animated: null, disabled: null };
        let str = tmp4.name;
        if (str == null) {
          str = "";
        }
        obj.name = str;
        obj.url = getEmojiItemUrlDefault(tmp4, animateEmoji, IMAGE_SIZE);
        obj.animated = true === tmp4.animated && animateEmoji;
        let tmp10 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        obj.disabled = tmp10;
        let arr3 = items.push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj2 = {
    style: closure_9().row,
    rowData: { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked },
    onPressEmoji(arg0) {
      const nativeEvent = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        dependencyMap(found, importDefault);
      }
    },
    onLongPressEmoji(callback) {
      const nativeEvent = callback;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        closure_1_3(found);
      }
    }
  };
  return React5(EmojiPickerListRowViewDefault, obj2);
});
let closure_13 = noop.memo(function EmojiPickerListRow(arg0) {
  ({ emojisDisabled, rowSize } = arg0);
  ({ emojis, category, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp = closure_9();
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      if (undefined === tmp4) {
        let obj2 = { style: tmp.image };
        let arr = items.push(React5(React3, obj2, sum));
      } else {
        let obj = { emoji: tmp4, category, animateEmoji, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        let hasItem = null != tmp4.id;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        obj.disabled = hasItem;
        obj.onPressEmoji = onPressEmoji;
        obj.onLongPressEmoji = onLongPressEmoji;
        obj.isSectionNitroLocked = isSectionNitroLocked;
        let arr3 = items.push(React5(EmojiItem, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  return React5(React3, { style: tmp.row, children: items });
});
const alphaResult = _modDef671("#000000").alpha(0.2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export { EmojiItem };
export const EmojiPickerListRow = noop.memo(function EmojiPickerListRow(nativeRow) {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    nativeRow = PlatformUtils2.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const merged1 = Object.assign(merged);
  return React5(nativeRow ? closure_12 : closure_13, {});
});