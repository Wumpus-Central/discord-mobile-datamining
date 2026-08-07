// discord_app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
import importAllResult from "set";
import get_ActivityIndicator from "Button";
import handleThemeChange from "handleThemeChange";
import IMAGE_SIZE from "IMAGE_SIZE";
import { PADDING_VERTICAL } from "ExpressionPickerViewType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "handleThemeChange";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { LockIcon } from "../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { set } from "../../../../utils/PlatformUtils.tsx";
import { View } from "EmojiPickerListRowView.tsx";

let StyleSheet;
let c3;
let error;
let metroImportAll;
const require = arg1;
function EmojiItemLockedOverlay() {
  const tmp = callback2();
  obj = { style: tmp.lockContainer, children: callback(LockIcon.LockIcon, obj) };
  obj = { style: tmp.lock };
  return callback(closure_3, obj);
}
function EmojiItem(emoji) {
  let animateEmoji;
  let closure_3;
  let dependencyMap;
  let disabled;
  let importDefault;
  emoji = emoji.emoji;
  ({ category: importDefault, disabled, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3, animateEmoji } = emoji);
  const tmp = callback2();
  if (null == emoji.id) {
    let str = emoji.url;
    if (str == null) {
      str = "";
    }
    let emojiURL = str;
  } else {
    let obj = getAvatarURL;
    obj = { id: null, animated: null, size: null };
    obj[0] = emoji.id;
    if (animateEmoji) {
      animateEmoji = emoji.animated;
    }
    obj[1] = animateEmoji;
    obj[2] = IMAGE_SIZE;
    emojiURL = obj.getEmojiURL(obj);
  }
  if (disabled) {
    disabled = !emoji.isSectionNitroLocked;
  }
  let tmp8 = dependencyMap;
  obj = { accessibilityRole: "button", accessibilityLabel: emoji.name, style: null, onPress: null, onLongPress: null, children: null };
  const items = [tmp.surrogatesFrame, ];
  let disabledOverlay = disabled;
  if (disabled) {
    disabledOverlay = tmp.disabledOverlay;
  }
  items[1] = disabledOverlay;
  obj[2] = items;
  obj[3] = function onPress() {
    return callback(emoji, closure_1);
  };
  obj[4] = function onLongPress() {
    return callback2(emoji);
  };
  if (null != emoji.id) {
    const obj1 = { resizeMode: "contain", style: null, placeholder: null, source: null, usesSmallCache: true };
    obj1[1] = tmp.image;
    const tmp15 = preload;
    if (tmp7Result.isThemeDark(theme.theme)) {
      tmp8 = 5360;
      let tmp14Result = tmp14(tmp8);
    } else {
      tmp14Result = tmp14(5361);
    }
    obj1[2] = tmp14Result;
    const obj2 = { uri: null };
    obj2[0] = emojiURL;
    obj1[3] = obj2;
    callback(tmp15, obj1);
    tmp7Result = tmp7(4147);
  } else {
    const obj3 = { allowFontScaling: false, style: null, children: null };
    obj3[1] = tmp.surrogates;
    obj3[2] = emoji.surrogates;
    const tmp10 = callback(tmp7(1297).LegacyText, obj3);
    const items1 = [tmp10, ];
    if (disabled) {
      disabled = callback(EmojiItemLockedOverlay, {});
    }
    items1[1] = disabled;
    obj[5] = items1;
    return closure_8(emoji(4844).PressableOpacity, obj);
  }
}
({ View: c3, StyleSheet } = get_ActivityIndicator);
IMAGE_SIZE = IMAGE_SIZE.IMAGE_SIZE;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { image: { height: IMAGE_SIZE, width: IMAGE_SIZE }, surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" }, disabledOverlay: null, surrogates: null, row: null, lockContainer: null, lock: null };
obj = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
obj[2] = obj;
let num = 28;
if (set.isAndroid()) {
  num = 26;
}
createCacheKey = { fontSize: num, color: require("Themes").colors.TEXT_DEFAULT };
obj[3] = createCacheKey;
obj[4] = { height: IMAGE_SIZE.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj2 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
const obj8 = require("n")("#000000");
obj2[0] = require("n")("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[5] = obj2;
obj[6] = { width: 16, height: 16, tintColor: "white" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo((emojis) => {
  let animateEmoji;
  let closure_3;
  let containerWidth;
  let dependencyMap;
  let emojisDisabled;
  let importDefault;
  let isSectionNitroLocked;
  let row;
  let rowSize;
  emojis = emojis.emojis;
  ({ emojisDisabled, category: importDefault, rowSize, onPressEmoji: dependencyMap, onLongPressEmoji: closure_3, animateEmoji } = emojis);
  ({ containerWidth, row, isSectionNitroLocked } = emojis);
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      let tmp5 = sum;
      if (undefined === tmp4) {
        let arr = items.push({ id: null, name: "", url: "", animated: false, disabled: false });
      } else {
        let id = tmp4.id;
        if (id == null) {
          id = null;
        }
        let obj = { id: null, name: null, url: null, animated: null, disabled: null };
        obj[0] = id;
        let str = tmp4.name;
        if (str == null) {
          str = "";
        }
        obj[1] = str;
        if (null == tmp4.id) {
          let str2 = tmp4.url;
          if (str2 == null) {
            str2 = "";
          }
          let emojiURL = str2;
        } else {
          let tmp7 = importDefault;
          let tmp8 = dependencyMap;
          let obj1 = getAvatarURL;
          obj = { id: null, animated: null, size: null };
          obj[0] = tmp4.id;
          let animated = animateEmoji;
          if (animateEmoji) {
            animated = tmp4.animated;
          }
          obj[1] = animated;
          let tmp9 = IMAGE_SIZE;
          obj[2] = IMAGE_SIZE;
          emojiURL = obj1.getEmojiURL(obj);
        }
        obj[2] = emojiURL;
        obj[3] = true === tmp4.animated && animateEmoji;
        let tmp11 = null != tmp4.id && emojisDisabled.has(tmp4.id);
        obj[4] = tmp11;
        arr = items.push(obj);
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  obj = {
    style: callback2().row,
    rowData: obj1,
    onPressEmoji(arg0) {
      const emojis = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        callback(found, closure_1);
      }
    },
    onLongPressEmoji(PremiumSearchUpsell, arg1) {
      const emojis = PremiumSearchUpsell;
      const found = emojis.find((name) => name.name === PremiumSearchUpsell.nativeEvent.emojiName);
      if (null != found) {
        callback2(found);
      }
    }
  };
  obj1 = { rowContentWidth: containerWidth, rowContentPaddingVertical: PADDING_VERTICAL, itemSize: IMAGE_SIZE, items, isSectionNitroLocked };
  return callback(View, obj);
});
let closure_13 = importAllResult.memo((arg0) => {
  let animateEmoji;
  let category;
  let emojis;
  let emojisDisabled;
  let isSectionNitroLocked;
  let onLongPressEmoji;
  let onPressEmoji;
  let row;
  let rowSize;
  ({ emojisDisabled, rowSize } = arg0);
  ({ emojis, category, row, onPressEmoji, onLongPressEmoji, animateEmoji, isSectionNitroLocked } = arg0);
  const tmp = callback2();
  const items = [];
  const result = row * rowSize;
  let sum = result;
  if (result < result + rowSize) {
    do {
      let tmp4 = emojis[sum];
      let tmp5 = sum;
      if (undefined === tmp4) {
        let tmp10 = callback;
        let tmp11 = closure_3;
        let obj = { style: null };
        obj[0] = tmp.image;
        let arr = items.push(callback(closure_3, obj, sum));
      } else {
        obj = { emoji: null, category: null, animateEmoji: null, disabled: null, onPressEmoji: null, onLongPressEmoji: null, isSectionNitroLocked: null };
        obj[0] = tmp4;
        obj[1] = category;
        obj[2] = animateEmoji;
        let hasItem = null != tmp4.id;
        let tmp6 = callback;
        let tmp7 = EmojiItem;
        if (hasItem) {
          hasItem = emojisDisabled.has(tmp4.id);
        }
        obj[3] = hasItem;
        obj[4] = onPressEmoji;
        obj[5] = onLongPressEmoji;
        obj[6] = isSectionNitroLocked;
        arr = items.push(tmp6(tmp7, obj, sum));
      }
      sum = sum + 1;
    } while (sum < result + rowSize);
  }
  obj = { style: tmp.row, children: items };
  return callback(closure_3, obj);
});
const alphaResult = require("n")("#000000").alpha(0.2);
let result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export const EmojiPickerListRow = importAllResult.memo((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    let obj = set;
    nativeRow = obj.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.create(null));
  obj = {};
  const merged1 = Object.assign(merged);
  return closure_7(nativeRow ? closure_12 : closure_13, obj);
});