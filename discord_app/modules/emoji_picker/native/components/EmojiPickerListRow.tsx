// === Module 10655: EmojiPickerListRow ===

// Module 10655 (EmojiPickerListRow)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import native from "native" /* 1177 */;
import PlatformUtils2 from "PlatformUtils" /* 1364 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4680 */;
import LockIcon from "LockIcon" /* 5401 */;
import Pressables from "Pressables" /* 5427 */;
import FastImageDefault from "FastImage" /* 5892 */;
import _modDef7465 from "module_7465" /* 7465 */;
import EmojiPickerListRowViewDefault from "EmojiPickerListRowView" /* 10656 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
function EmojiItemLockedOverlay() {
  const tmp = closure_9();
  const obj = { style: tmp.lockContainer, children: React5(LockIcon.LockIcon, { style: tmp.lock }) };
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
      obj1 = { id: null, animated: null, size: null };
      obj1.id = emoji.id;
      if (animateEmoji) {
        animateEmoji = emoji.animated;
      }
      obj1.animated = animateEmoji;
      tmp4 = IMAGE_SIZE;
      obj1.size = IMAGE_SIZE;
      emojiURL = obj.getEmojiURL(obj1);
    }
    if (disabled) {
      disabled = !global.isSectionNitroLocked;
    }
    tmp7 = closure_0;
    tmp8 = closure_2;
    tmp6 = jsxs;
    obj8 = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: null, onPress: null, onLongPress: null, children: null };
    items = [, ];
    items[0] = tmp.surrogatesFrame;
    disabledOverlay = disabled;
    if (disabled) {
      disabledOverlay = tmp.disabledOverlay;
    }
    items[1] = disabledOverlay;
    obj8.style = items;
    obj8.onPress = function onPress() {
      return dependencyMap(emoji, importDefault);
    };
    obj8.onLongPress = function onLongPress() {
      return closure_1_3(emoji);
    };
    if (null != emoji.id) {
      tmp13 = jsx;
      tmp14 = closure_1;
      obj9 = { resizeMode: "contain", style: null, placeholder: null, source: null, usesSmallCache: true };
      obj9.style = tmp.image;
      tmp15 = closure_1(tmp8[13]);
      tmp7Result = tmp7(tmp8[14]);
      tmp16 = closure_4;
      if (tmp7Result.isThemeDark(closure_4.theme)) {
        tmp8 = tmp8[15];
        tmp14Result = tmp14(tmp8);
      } else {
        tmp14Result = tmp14(tmp8[16]);
      }
      obj9.placeholder = tmp14Result;
      obj10 = { uri: null };
      obj10.uri = emojiURL;
      obj9.source = obj10;
      tmp13Result = tmp13(tmp15, obj9);
      tmp19 = tmp13;
    } else {
      tmp9 = jsx;
      obj11 = { allowFontScaling: false, style: null, children: null };
      obj11.style = tmp.surrogates;
      obj11.children = emoji.surrogates;
      tmp10 = jsx(tmp7(tmp8[17]).LegacyText, obj11);
      tmp11 = jsx;
      tmp12 = tmp10;
      items1 = [, ];
      items1[0] = tmp10;
      if (disabled) {
        tmp20 = EmojiItemLockedOverlay;
        disabled = tmp9(EmojiItemLockedOverlay, {});
      }
      items1[1] = disabled;
      obj8.children = items1;
      return tmp6(closure_0(closure_2[12]).PressableOpacity, obj8);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const EmojiPickerListConstants = fn(10638);
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
const PADDING_VERTICAL = fn(1218).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, surrogates: null, row: null, lockContainer: null, lock: null };
const PlatformUtils = fn(1364);
let num = 28;
if (PlatformUtils.isAndroid()) {
  num = 26;
}
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.surrogates = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
obj.row = { height: EmojiPickerListConstants.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj6 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
let obj4 = { fontSize: num, color: nativeDefault.colors.TEXT_DEFAULT };
const obj8 = _modDef672("#000000");
obj6.backgroundColor = _modDef672("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.lockContainer = obj6;
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
          let obj2 = AvatarUtilsDefault;
          let obj3 = { id: tmp4.id, animated: null, size: null };
          let animated = animateEmoji;
          if (animateEmoji) {
            animated = tmp4.animated;
          }
          obj3.animated = animated;
          obj3.size = IMAGE_SIZE;
          emojiURL = obj2.getEmojiURL(obj3);
        }
        obj.url = emojiURL;
        obj.animated = true === tmp4.animated && animateEmoji;
        let tmp11 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        obj.disabled = tmp11;
        let arr3 = items.push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  const obj4 = {
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
  return React5(EmojiPickerListRowViewDefault, obj4);
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
const alphaResult = _modDef672("#000000").alpha(0.2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export { EmojiItem };
export const EmojiPickerListRow = noop.memo((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    nativeRow = PlatformUtils2.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.assign({ nativeRow: 0 }));
  const merged1 = Object.assign(merged);
  return React5(nativeRow ? closure_12 : closure_13, {});
});