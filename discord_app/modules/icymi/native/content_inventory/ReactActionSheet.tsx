// discord_app/modules/icymi/native/content_inventory/ReactActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import context from "../ICYMIContext.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ACTION_SHEET_MAX_WIDTH } from "../../../action_sheet/native/ActionSheetConstants.tsx";
import { EmojiIntention } from "../../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function AddEmojiButton(channel) {
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const items = [channel, onPressEmoji, onOpenPicker];
  const callback = React.useCallback(() => {
    onOpenPicker();
    let obj = channel(onPressEmoji[10]);
    obj = {
      pickerIntention: closure_1_8.REACTION,
      autoFocus: false,
      startExpanded: false,
      onPressEmoji,
      channel,
      reactionType: channel(onPressEmoji[11]).ReactionTypes.NORMAL,
    };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  let obj = {
    onPress: callback,
    style: items1,
    accessible: true,
    accessibilityLabel: null,
    disabled: null,
    children: null,
  };
  items1 = [callback3().emoji];
  const intl = channel(onPressEmoji[7]).intl;
  obj[3] = intl.string(channel(onPressEmoji[7]).t.lfIHs4);
  obj[4] = channel.disabled;
  obj[5] = callback2(channel(onPressEmoji[13]).ReactionIcon, { size: "md" });
  return callback2(channel(onPressEmoji[12]).PressableHighlight, obj);
}
function ReactActionSheetBase(content) {
  content = content.content;
  let _require = content;
  const onPressEmoji = content.onPressEmoji;
  const sendMessage = content.sendMessage;
  let callback;
  let first;
  let React;
  let hotwheels_gaming_activity;
  let first1;
  closure_8 = undefined;
  let ref;
  c10 = undefined;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = width();
  callback = tmp;
  let obj = React;
  const tmp3 = first(React.useState(false), 2);
  first = tmp3[0];
  React = tmp3[1];
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  const intl = _require(sendMessage[7]).intl;
  const content_type = content.content_type;
  if (_require(sendMessage[14]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp5(tmp6[14]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let stringResult1 = stringResult;
      if (tmp5(tmp6[14]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl2 = tmp5(tmp6[7]).intl;
        stringResult1 = intl2.string(tmp5(tmp6[7]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    let tmp2Result = tmp2(obj.useState(""), 2);
    first1 = tmp2Result[0];
    closure_8 = tmp10;
    ref = obj.useRef(null);
    tmp2Result = tmp2(obj.useState(null), 2);
    [tmp14, c10] = tmp2Result;
    const effect = obj.useEffect(() => {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let nextPromise;
        if (current != null) {
          const capture = current.capture;
          if (capture != null) {
            nextPromise = capture().then((arg0) => callback(arg0));
            const captureResult = capture();
          }
        }
        return nextPromise;
      }, 500);
    }, []);
    let items = [content.id, str, first1, sendMessage];
    _require = undefined;
    callback = obj.useCallback(
      callback(function* () {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp4;
                closure_1_5(true);
                v0(8637).itemInteracted(closure_1_0.id, closure_1_6, "press_reply_send");
                const obj5 = v0(8637);
                obj1 = { itemId: null, itemType: null, actionParameters: null };
                obj1[0] = closure_1_0.id;
                obj1[1] = closure_1_6;
                obj1[2] = {
                  actionGestureType: "press",
                  actionTargetElement: "reply_button",
                  actionIntentType: "reply",
                  actionDestinationType: null,
                };
                v0(8637).feedItemActioned(obj1);
                v0 = 1;
                dependencyMap = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = dependencyMap(closure_1_7);
                return obj2;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              callback(false);
              callback2("");
              dependencyMap = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp10) {
            dependencyMap = tmp;
            throw tmp10;
          }
        }
      }),
      items,
    );
    _require = callback((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c3 = 0;
      return (function* (arg0) {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp2;
                closure_1_5(true);
                onPressEmoji(sendMessage[15]).itemInteracted(user.id, closure_1_6, "press_emoji_send");
                const obj5 = onPressEmoji(sendMessage[15]);
                obj1 = { itemId: null, itemType: null, actionParameters: null };
                obj1[0] = user.id;
                obj1[1] = closure_1_6;
                obj1[2] = {
                  actionGestureType: "press",
                  actionTargetElement: "reaction_picker_button",
                  actionIntentType: "open",
                  actionDestinationType: null,
                };
                onPressEmoji(sendMessage[15]).feedItemActioned(obj1);
                c2 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_1(user);
                return obj2;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1_5(false);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp9) {
            c3 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    let items1 = [content.id, str, onPressEmoji];
    callback1 = obj.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1);
    let tmp5Result = tmp5(tmp6[16]);
    const frequentlyUsedReactionEmojis = tmp5Result.useFrequentlyUsedReactionEmojis(null);
    tmp5Result = tmp5(tmp6[18]);
    const clientThemesOverride = tmp5Result.useClientThemesOverride();
    width = onPressEmoji(tmp6[19])().width;
    const items2 = [width];
    const memo = obj.useMemo(() => Math.floor(Math.min(width, first1) / 52), items2);
    obj = { header: null, children: null };
    obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = stringResult1;
    obj[1] = ref(tmp5(tmp6[21]).Text, obj1);
    obj[0] = ref(hotwheels_gaming_activity, obj);
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    const items3 = [tmp.preview];
    let loading = null;
    if (null == tmp14) {
      loading = tmp.loading;
    }
    let obj3 = { style: null, children: null };
    items3[1] = loading;
    obj3[0] = items3;
    const obj4 = { ref: null, options: null, children: null };
    obj4[0] = ref;
    obj4[1] = { fileName: "icymi_content", format: "png", quality: 1 };
    let obj5 = { style: null, children: null };
    obj5[0] = tmp.base;
    let tmp19Result = tmp19(tmp6[22]);
    const obj6 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
    const obj7 = { dark: null, light: null };
    tmp19Result = tmp19(tmp6[23]);
    obj7[0] = tmp5(tmp6[24]).OverlayOpacity.LEVEL_7;
    obj7[1] = tmp5(tmp6[24]).OverlayOpacity.LEVEL_8;
    obj6[4] = obj7;
    const items4 = [ref(tmp19Result, obj6)];
    const obj8 = { gradient: null, children: null };
    obj8[0] = onPressEmoji(tmp6[17])();
    const obj9 = { style: null, children: null };
    const items5 = [tmp.contentContainer, clientThemesOverride];
    obj9[0] = items5;
    const obj10 = { content: null, renderForScreenshot: true };
    obj10[0] = content;
    obj9[1] = ref(onPressEmoji(tmp6[26]), obj10);
    obj8[1] = ref(hotwheels_gaming_activity, obj9);
    items4[1] = ref(tmp5(tmp6[25]).ThemeContextProvider, obj8);
    obj5[1] = items4;
    obj4[2] = c10(hotwheels_gaming_activity, obj5);
    obj3[1] = ref(tmp19Result, obj4);
    const items6 = [ref(hotwheels_gaming_activity, obj3)];
    if (null != tmp14) {
      const items7 = [tmp.emojis];
      let submitting = null;
      if (first) {
        submitting = tmp.submitting;
      }
      const obj11 = { children: null };
      const obj12 = { style: null, children: null };
      items7[1] = submitting;
      obj12[0] = items7;
      const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
      const items8 = [
        substr.map((id) => {
          const lib = id;
          if (null != id.id) {
            let obj = { onPress: null, style: null, disabled: null, children: null };
            obj[0] = function onPress() {
              return closure_1_11(closure_0);
            };
            obj[1] = closure_3.emoji;
            obj[2] = first;
            obj = { style: null, source: null };
            const items = [,];
            ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
            obj[0] = items;
            obj = { uri: null };
            let obj3 = onPressEmoji(sendMessage[28]);
            ({ id: obj5[0], animated: obj5[1] } = id);
            obj[0] = obj3.getEmojiURL({ id: null, animated: null, size: 48 });
            obj[1] = obj;
            obj[3] = ref(onPressEmoji(sendMessage[27]), obj);
            let tmp11 = ref(lib(sendMessage[12]).PressableHighlight, obj, id.id);
            obj1 = { id: null, animated: null, size: 48 };
            const tmp9 = onPressEmoji(sendMessage[27]);
          } else {
            const obj2 = { onPress: null, style: null, disabled: null, children: null };
            obj2[0] = function onPress() {
              return closure_1_11(closure_0);
            };
            obj2[1] = closure_3.emoji;
            obj2[2] = first;
            obj3 = {
              variant: "text-md/medium",
              color: "interactive-text-default",
              style: null,
              allowFontScaling: false,
              children: null,
            };
            const items1 = [,];
            ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
            obj3[2] = items1;
            obj3[4] = id.surrogates;
            obj2[3] = ref(lib(sendMessage[21]).Text, obj3);
            tmp11 = ref(lib(sendMessage[12]).PressableHighlight, obj2, id.surrogates);
          }
          return tmp11;
        }),
      ];
      const obj13 = { onOpenPicker: null, channel: null, onPressEmoji: null, disabled: null };
      obj13[0] = function onOpenPicker() {
        let obj = onPressEmoji(sendMessage[15]);
        obj.itemInteracted(lib.id, hotwheels_gaming_activity, "press_reply_reaction_picker");
        obj = {
          itemId: lib.id,
          itemType: hotwheels_gaming_activity,
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "reaction_picker_button",
            actionIntentType: "open",
            actionDestinationType: null,
          },
        };
        onPressEmoji(sendMessage[15]).feedItemActioned(obj);
      };
      obj13[1] = channel;
      obj13[2] = callback1;
      obj13[3] = first;
      items8[1] = tmp23(AddEmojiButton, obj13);
      obj12[1] = items8;
      const items9 = [tmp25(tmp24, obj12)];
      const obj14 = { style: null, children: null };
      obj14[0] = tmp.inputRow;
      const obj15 = {
        containerStyle: null,
        grow: true,
        isRound: true,
        placeholder: null,
        value: null,
        onChange: null,
        isDisabled: null,
      };
      obj15[0] = tmp.input;
      const intl4 = tmp5(tmp6[7]).intl;
      const obj16 = { username: null };
      obj16[0] = tmp5(tmp6[30]).getName(author);
      obj15[3] = intl4.formatToPlainString(tmp5(tmp6[7]).t.m3dK5W, obj16);
      obj15[4] = first1;
      obj15[5] = tmp10;
      obj15[6] = first;
      const items10 = [tmp23(tmp5(tmp6[29]).TextInput, obj15)];
      const obj17 = { accessibilityLabel: null, icon: null, size: "md", onPress: null, disabled: null, loading: null };
      const intl5 = tmp5(tmp6[7]).intl;
      obj17[0] = intl5.string(tmp5(tmp6[7]).t.oeb1vg);
      const obj18 = { size: "md", color: null };
      obj18[1] = tmp19(tmp6[9]).unsafe_rawColors.WHITE;
      obj17[1] = tmp23(tmp5(tmp6[32]).SendMessageIcon, obj18);
      obj17[3] = callback;
      obj17[4] = 0 === first1.length;
      obj17[5] = first;
      items10[1] = tmp23(tmp5(tmp6[31]).IconButton, obj17);
      obj14[1] = items10;
      items9[1] = tmp25(tmp24, obj14);
      obj11[0] = items9;
      let tmp23Result = tmp25(callback1, obj11);
      const tmp30 = callback1;
      const tmp5Result1 = tmp5(tmp6[30]);
    } else {
      tmp23Result = tmp23(tmp19(tmp6[33]), {});
    }
    items6[1] = tmp23Result;
    obj2[1] = items6;
    obj[1] = c10(hotwheels_gaming_activity, obj2);
    return ref(tmp5(tmp6[20]).ActionSheet, obj);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl3 = tmp5(tmp6[7]).intl;
  stringResult1 = intl3.string(tmp5(tmp6[7]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = {
  header: { width: "100%", display: "flex", alignItems: "center", padding: 8 },
  container: { gap: 12 },
  preview: null,
  loading: null,
  base: null,
  contentContainer: null,
  inputRow: null,
  input: null,
  emojis: null,
  submitting: null,
  emoji: null,
  defaultEmoji: null,
  emojiImage: null,
  emojiText: null,
};
createCacheKey = {
  borderRadius: ThemesDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_STRONG,
};
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { opacity: 0.5 };
createCacheKey[4] = { position: "relative" };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", gap: 8 };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[7] = { flex: 1, borderRadius: ThemesDefault.radii.round };
createCacheKey[8] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[9] = { opacity: 0.6 };
let obj2 = { flex: 1, borderRadius: ThemesDefault.radii.round };
createCacheKey[10] = {
  padding: 8,
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
createCacheKey[11] = { width: 24, height: 24 };
createCacheKey[12] = { resizeMode: "contain", width: 24, height: 24 };
createCacheKey[13] = { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj3 = {
  padding: 8,
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
let result = require("set").fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default function ReactActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const merged = Object.assign(arg0, undefined);
    let obj = { children: null };
    obj = {};
    const merged1 = Object.assign(merged);
    obj[0] = callback2(ReactActionSheetBase, obj);
    return callback2(context.ICYMIContextProvider, obj);
  }
}
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  ({ username, status, emojiStr, attachments, isForward } = reply);
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = getSystemLocale.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = getSystemLocale.t;
  if (isForward) {
    let obj = { username: null };
    obj[0] = username;
    let formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj);
    let tmp5 = tmp;
  } else {
    obj = { username: null };
    obj[0] = username;
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
    tmp5 = tmp;
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = tmp5(1233).intl;
      obj = { attachmentsCount: null };
      obj[0] = attachments.length;
      const _HermesInternal2 = HermesInternal;
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1233).t["JiNPo+"], obj) + "*");
    }
  }
  items.push(reply.reply);
  return items.join("\n");
};
