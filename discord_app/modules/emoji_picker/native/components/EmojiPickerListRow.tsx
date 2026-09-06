// === Module 10310: EmojiPickerListRow ===

// Module 10310 (EmojiPickerListRow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import PlatformUtils2 from "PlatformUtils" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import LockIcon from "LockIcon" /* 5095 */;
import Pressables from "Pressables" /* 5123 */;
import FastImageDefault from "FastImage" /* 5587 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 10311 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
function EmojiItemLockedOverlay() {
  const tmp = closure_9();
  let obj = { style: tmp.lockContainer, children: null };
  obj = { style: tmp.lock };
  obj.children = React5(LockIcon.LockIcon, obj);
  return React5(React3, obj);
}
class EmojiItem {
  constructor(arg0) {
    emoji = global.emoji;
    ({ category, disabled, onPressEmoji, onLongPressEmoji, animateEmoji } = global);
    tmp = closure_9();
    if (null == emoji.id) {
      str = emoji.url;
      if (str == null) {
        str = "";
      }
      emojiURL = str;
    } else {
      tmp2 = closure_1;
      tmp3 = closure_2;
      obj = closure_1(closure_2[10]);
      obj = { id: null, animated: null, size: null };
      obj.id = emoji.id;
      if (animateEmoji) {
        animateEmoji = emoji.animated;
      }
      obj.animated = animateEmoji;
      tmp4 = IMAGE_SIZE;
      obj.size = IMAGE_SIZE;
      emojiURL = obj.getEmojiURL(obj);
    }
    if (disabled) {
      disabled = !global.isSectionNitroLocked;
    }
    tmp7 = closure_0;
    tmp8 = closure_2;
    tmp6 = jsxs;
    obj1 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: null, onPress: null, onLongPress: null, children: null };
    items = [, ];
    items[0] = tmp.surrogatesFrame;
    disabledOverlay = disabled;
    if (disabled) {
      disabledOverlay = tmp.disabledOverlay;
    }
    items[1] = disabledOverlay;
    obj1.style = items;
    obj1.onPress = function onPress() {
      return dependencyMap(emoji, importDefault);
    };
    obj1.onLongPress = function onLongPress() {
      return closure_1_3(emoji);
    };
    if (null != emoji.id) {
      tmp13 = jsx;
      tmp14 = closure_1;
      obj2 = { resizeMode: "contain", style: null, placeholder: null, source: null, usesSmallCache: true };
      obj2.style = tmp.image;
      tmp15 = closure_1(tmp8[13]);
      tmp7Result = tmp7(tmp8[14]);
      tmp16 = closure_4;
      if (tmp7Result.isThemeDark(closure_4.theme)) {
        tmp8 = tmp8[15];
        tmp14Result = tmp14(tmp8);
      } else {
        tmp14Result = tmp14(tmp8[16]);
      }
      obj2.placeholder = tmp14Result;
      obj3 = { uri: null };
      obj3.uri = emojiURL;
      obj2.source = obj3;
      tmp13Result = tmp13(tmp15, obj2);
      tmp19 = tmp13;
    } else {
      tmp9 = jsx;
      obj4 = { allowFontScaling: false, style: null, children: null };
      obj4.style = tmp.surrogates;
      obj4.children = emoji.surrogates;
      tmp10 = jsx(tmp7(tmp8[17]).LegacyText, obj4);
      tmp11 = jsx;
      tmp12 = tmp10;
      items1 = [, ];
      items1[0] = tmp10;
      if (disabled) {
        tmp20 = EmojiItemLockedOverlay;
        disabled = tmp9(EmojiItemLockedOverlay, {});
      }
      items1[1] = disabled;
      obj1.children = items1;
      return tmp6(closure_0(closure_2[12]).PressableOpacity, obj1);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const EmojiPickerListConstants = fn(10290);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = fn(1219).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4560);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: null, surrogates: null, row: null, lockContainer: null, lock: null };
obj = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.disabledOverlay = obj;
const PlatformUtils = fn(1115);
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
createStyles = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj.surrogates = createStyles;
obj.row = { height: EmojiPickerListConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj2 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
const obj8 = _modDef672("#000000");
obj2.backgroundColor = _modDef672("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.lockContainer = obj2;
obj.lock = { width: 16, height: 16, tintColor: "white" };
const React7 = createStyles.createStyles(obj);
let closure_12 = noop.memo((emojis) => {
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
        if (null == tmp4.id) {
          let str2 = tmp4.url;
          if (str2 == null) {
            str2 = "";
          }
          let emojiURL = str2;
        } else {
          let obj1 = AvatarUtilsDefault;
          obj = { id: tmp4.id, animated: null, size: null };
          let animated = animateEmoji;
          if (animateEmoji) {
            animated = tmp4.animated;
          }
          obj.animated = animated;
          obj.size = IMAGE_SIZE;
          emojiURL = obj1.getEmojiURL(obj);
        }
        obj.url = emojiURL;
        obj.animated = true === tmp4.animated && animateEmoji;
        let tmp11 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        obj.disabled = tmp11;
        arr = items.push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  obj = {
    style: closure_9().row,
    rowData: null,
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
  obj1 = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  obj.rowData = obj1;
  return React5(EmojiPickerListRowViewDefault, obj);
});
let closure_13 = noop.memo((arg0) => {
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
        let obj = { style: tmp.image };
        let arr = items.push(React5(React3, obj, sum));
      } else {
        obj = { emoji: tmp4, category, animateEmoji, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        let hasItem = null != tmp4.id;
        let tmp6 = React5;
        let tmp7 = EmojiItem;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        obj.disabled = hasItem;
        obj.onPressEmoji = onPressEmoji;
        obj.onLongPressEmoji = onLongPressEmoji;
        obj.isSectionNitroLocked = isSectionNitroLocked;
        arr = items.push(tmp6(tmp7, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  obj = { style: tmp.row, children: items };
  return React5(React3, obj);
});
const alphaResult = _modDef672("#000000").alpha(0.2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export { EmojiItem };
export const EmojiPickerListRow = noop.memo((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    let obj = PlatformUtils2;
    nativeRow = obj.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  obj = {};
  const merged1 = Object.assign(merged);
  return React5(nativeRow ? closure_12 : closure_13, obj);
});