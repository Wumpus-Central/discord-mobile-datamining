// discord_app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import nDefault from "../../../../../_runtime/00672_n.js";
import set2 from "../../../../utils/PlatformUtils.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import LockIcon from "../../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import ViewDefault from "EmojiPickerListRowView.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../user_settings/ThemeStore.tsx";
import IMAGE_SIZE from "EmojiPickerListConstants.tsx";
import { PADDING_VERTICAL } from "../../../expression_picker/ExpressionPickerConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../../utils/PlatformUtils.tsx";

require = arg1;
function EmojiItemLockedOverlay() {
  const tmp = callback2();
  obj = { style: tmp.lockContainer, children: callback(LockIcon.LockIcon, obj) };
  obj = { style: tmp.lock };
  return callback(closure_3, obj);
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
      tmp2 = category;
      tmp3 = onPressEmoji;
      obj = require("getAvatarURL");
      obj = { id: null, animated: null, size: null };
      obj[0] = emoji.id;
      if (animateEmoji) {
        animateEmoji = emoji.animated;
      }
      obj[1] = animateEmoji;
      tmp4 = IMAGE_SIZE;
      obj[2] = IMAGE_SIZE;
      emojiURL = obj.getEmojiURL(obj);
    }
    if (disabled) {
      disabled = !global.isSectionNitroLocked;
    }
    tmp7 = emoji;
    tmp8 = onPressEmoji;
    tmp6 = jsxs;
    obj1 = {
      accessibilityRole: "button",
      accessibilityLabel: emoji.name,
      style: null,
      onPress: null,
      onLongPress: null,
      children: null,
    };
    items = [,];
    items[0] = tmp.surrogatesFrame;
    disabledOverlay = disabled;
    if (disabled) {
      disabledOverlay = tmp.disabledOverlay;
    }
    items[1] = disabledOverlay;
    obj1[2] = items;
    obj1[3] = function onPress() {
      return callback(emoji, closure_1);
    };
    obj1[4] = function onLongPress() {
      return callback2(emoji);
    };
    if (null != emoji.id) {
      tmp13 = jsx;
      tmp14 = category;
      obj2 = { resizeMode: "contain", style: null, placeholder: null, source: null, usesSmallCache: true };
      obj2[1] = tmp.image;
      tmp15 = require("preload");
      tmp7Result = require("AccessibilityAnnouncer");
      tmp16 = closure_4;
      if (tmp7Result.isThemeDark(closure_4.theme)) {
        tmp8 = tmp8[15];
        tmp14Result = tmp14(tmp8);
      } else {
        tmp14Result = require("registerAsset");
      }
      obj2[2] = tmp14Result;
      obj3 = { uri: null };
      obj3[0] = emojiURL;
      obj2[3] = obj3;
      tmp13Result = tmp13(tmp15, obj2);
      tmp19 = tmp13;
    } else {
      tmp9 = jsx;
      obj4 = { allowFontScaling: false, style: null, children: null };
      obj4[1] = tmp.surrogates;
      obj4[2] = emoji.surrogates;
      tmp10 = jsx(require("Button").LegacyText, obj4);
      tmp11 = jsx;
      tmp12 = tmp10;
      items1 = [,];
      items1[0] = tmp10;
      if (disabled) {
        tmp20 = EmojiItemLockedOverlay;
        disabled = tmp9(EmojiItemLockedOverlay, {});
      }
      items1[1] = disabled;
      obj1[5] = items1;
      return tmp6(require("PressableBase").PressableOpacity, obj1);
    }
    return;
  }
}
({ View: c3, StyleSheet } = get_ActivityIndicator);
IMAGE_SIZE = IMAGE_SIZE.IMAGE_SIZE;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = {
  image: { height: IMAGE_SIZE, width: IMAGE_SIZE },
  surrogatesFrame: { height: IMAGE_SIZE, width: IMAGE_SIZE, alignItems: "center", justifyContent: "center" },
  disabledOverlay: null,
  surrogates: null,
  row: null,
  lockContainer: null,
  lock: null,
};
obj = { borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[2] = obj;
let num = 28;
if (set.isAndroid()) {
  num = 26;
}
createCacheKey = { fontSize: num, color: ThemesDefault.colors.TEXT_DEFAULT };
obj[3] = createCacheKey;
obj[4] = { height: IMAGE_SIZE.ROW_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj2 = { backgroundColor: null, alignItems: "center", justifyContent: "center" };
const obj8 = nDefault("#000000");
obj2[0] = nDefault("#000000").alpha(0.2).hex();
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj[5] = obj2;
obj[6] = { width: 16, height: 16, tintColor: "white" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo((emojis) => {
  emojis = emojis.emojis;
  ({
    emojisDisabled,
    category: importDefault,
    rowSize,
    onPressEmoji: dependencyMap,
    onLongPressEmoji: closure_3,
    animateEmoji,
  } = emojis);
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
          obj1 = getAvatarURLDefault;
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
      emojis = arg0;
      const found = emojis.find((name) => name.name === nativeEvent.nativeEvent.emojiName);
      if (null != found) {
        callback(found, closure_1);
      }
    },
    onLongPressEmoji(PremiumSearchUpsell, arg1) {
      emojis = PremiumSearchUpsell;
      const found = emojis.find((name) => name.name === PremiumSearchUpsell.nativeEvent.emojiName);
      if (null != found) {
        callback2(found);
      }
    },
  };
  obj1 = {
    rowContentWidth: containerWidth,
    rowContentPaddingVertical: PADDING_VERTICAL,
    itemSize: IMAGE_SIZE,
    items,
    isSectionNitroLocked,
  };
  return callback(ViewDefault, obj);
});
let closure_13 = importAllResult.memo((arg0) => {
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
        obj = {
          emoji: null,
          category: null,
          animateEmoji: null,
          disabled: null,
          onPressEmoji: null,
          onLongPressEmoji: null,
          isSectionNitroLocked: null,
        };
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
const alphaResult = nDefault("#000000").alpha(0.2);
let result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRow.tsx");

export { EmojiItem };
export const EmojiPickerListRow = importAllResult.memo((nativeRow) => {
  nativeRow = nativeRow.nativeRow;
  if (nativeRow === undefined) {
    let obj = set2;
    nativeRow = obj.isAndroid();
  }
  const merged = Object.assign(nativeRow, Object.create(null));
  obj = {};
  const merged1 = Object.assign(merged);
  return closure_7(nativeRow ? closure_12 : closure_13, obj);
});
