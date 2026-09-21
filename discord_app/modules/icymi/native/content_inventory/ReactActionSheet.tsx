// discord_app/modules/icymi/native/content_inventory/ReactActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import MessageReactionsTypes from "../../../messages/MessageReactionsTypes.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import openEmojiPickerActionSheet from "../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import ICYMIContext from "../ICYMIContext.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function AddEmojiButton(channel) {
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const items = [channel, onPressEmoji, onOpenPicker];
  const callback = noop.useCallback(() => {
    onOpenPicker();
    const obj = openEmojiPickerActionSheet;
    const result = obj.openEmojiPickerActionSheet({
      pickerIntention: EmojiIntention.REACTION,
      autoFocus: false,
      startExpanded: false,
      onPressEmoji,
      channel,
      reactionType: MessageReactionsTypes.ReactionTypes.NORMAL,
    });
  }, items);
  let obj = {
    onPress: callback,
    style: null,
    accessible: true,
    accessibilityLabel: null,
    disabled: null,
    children: null,
  };
  const items1 = [closure_12().emoji];
  obj.style = items1;
  const intl = channel(onPressEmoji[7]).intl;
  obj.accessibilityLabel = intl.string(channel(onPressEmoji[7]).t.lfIHs4);
  obj.disabled = channel.disabled;
  obj.children = closure_9(channel(onPressEmoji[13]).ReactionIcon, { size: "md" });
  return closure_9(channel(onPressEmoji[12]).PressableHighlight, obj);
}
function ReactActionSheetBase(content) {
  content = content.content;
  _require = content;
  const onPressEmoji = content.onPressEmoji;
  const sendMessage = content.sendMessage;
  let loading;
  noop = undefined;
  let first1;
  closure_8 = undefined;
  let ref;
  c10 = undefined;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = width();
  asyncGeneratorStep = tmp;
  const tmp3 = loading(noop.useState(false), 2);
  loading = tmp3[0];
  noop = tmp3[1];
  let str = "unknown";
  let hotwheels_gaming_activity = "unknown";
  const intl = require("util").intl;
  const content_type = content.content_type;
  if (require("ContentInventoryEntryType").ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp5(tmp6[14]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let stringResult1 = stringResult;
      if (tmp5(tmp6[14]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl2 = tmp5(tmp6[7]).intl;
        stringResult1 = intl2.string(tmp5(tmp6[7]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    const tmp2Result = tmp2(obj.useState(""), 2);
    first1 = tmp2Result[0];
    closure_8 = tmp10;
    ref = obj.useRef(null);
    [tmp14, c10] = tmp2(obj.useState(null), 2);
    const effect = obj.useEffect(() => {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let nextPromise;
        if (current != null) {
          const capture = current.capture;
          if (capture != null) {
            nextPromise = capture().then((result) => closure_1_10(result));
            const captureResult = capture();
          }
        }
        return nextPromise;
      }, 500);
    }, []);
    let items = [content.id, str, first1, sendMessage];
    const callback = obj.useCallback(
      asyncGeneratorStep(async () => {
        if (dependencyMap === 2) {
          dependencyMap = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            dependencyMap = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_5(true);
                v1(8622).itemInteracted(tmp4.id, hotwheels_gaming_activity, "press_reply_send");
                const obj5 = v1(8622);
                const obj4 = {
                  itemId: tmp4.id,
                  itemType: hotwheels_gaming_activity,
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "reply_button",
                    actionIntentType: "reply",
                    actionDestinationType: null,
                  },
                };
                v1(8622).feedItemActioned(obj4);
                v1 = 1;
                dependencyMap = 1;
                const obj7 = { value: sendMessage(first1), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_5(false);
              closure_128_8("");
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
    _require = asyncGeneratorStep(async (arg0) => {
      const user = arg0;
      c2 = 0;
      c3 = 0;
      return (async (arg0) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1_5(true);
                onPressEmoji(sendMessage[15]).itemInteracted(user.id, itemType, "press_emoji_send");
                const obj5 = onPressEmoji(sendMessage[15]);
                const obj4 = {
                  itemId: user.id,
                  itemType,
                  actionParameters: {
                    actionGestureType: "press",
                    actionTargetElement: "reaction_picker_button",
                    actionIntentType: "open",
                    actionDestinationType: null,
                  },
                };
                onPressEmoji(sendMessage[15]).feedItemActioned(obj4);
                c2 = 1;
                c3 = 1;
                const obj7 = { value: tmp2(user), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
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
    const tmp2Result2 = tmp2(obj.useState(null), 2);
    const frequentlyUsedReactionEmojis = tmp5(tmp6[16]).useFrequentlyUsedReactionEmojis(null);
    const tmp5Result = tmp5(tmp6[16]);
    const tmp20 = onPressEmoji(tmp6[17])();
    const clientThemesOverride = tmp5(tmp6[18]).useClientThemesOverride();
    width = onPressEmoji(tmp6[19])().width;
    const items2 = [width];
    const memo = obj.useMemo(() => Math.floor(Math.min(width, ACTION_SHEET_MAX_WIDTH) / 52), items2);
    let obj2 = { header: null, children: null };
    let obj3 = { style: tmp.header, children: null };
    let obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
    obj3.children = ref(tmp5(tmp6[21]).Text, obj4);
    obj2.header = ref(hotwheels_gaming_activity, obj3);
    let obj5 = { style: tmp.container, children: null };
    const items3 = [tmp.preview];
    loading = null;
    if (null == tmp14) {
      loading = tmp.loading;
    }
    let obj6 = { style: null, children: null };
    items3[1] = loading;
    obj6.style = items3;
    let obj7 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
    const obj8 = { style: tmp.base, children: null };
    const tmp5Result3 = tmp5(tmp6[18]);
    const obj9 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
    const obj10 = { dark: null, light: null };
    const tmp19Result = onPressEmoji(tmp6[22]);
    obj10.dark = tmp5(tmp6[24]).OverlayOpacity.LEVEL_7;
    obj10.light = tmp5(tmp6[24]).OverlayOpacity.LEVEL_8;
    obj9.mixAmount = obj10;
    const items4 = [ref(onPressEmoji(tmp6[23]), obj9)];
    const obj11 = { gradient: tmp20, children: null };
    let obj12 = { style: null, children: null };
    const items5 = [tmp.contentContainer, clientThemesOverride];
    obj12.style = items5;
    const obj13 = { content, renderForScreenshot: true };
    obj12.children = ref(onPressEmoji(tmp6[26]), obj13);
    obj11.children = ref(hotwheels_gaming_activity, obj12);
    items4[1] = ref(tmp5(tmp6[25]).ThemeContextProvider, obj11);
    obj8.children = items4;
    obj7.children = c10(hotwheels_gaming_activity, obj8);
    obj6.children = ref(tmp19Result, obj7);
    const items6 = [ref(hotwheels_gaming_activity, obj6)];
    if (null != tmp14) {
      const items7 = [tmp.emojis];
      let submitting = null;
      if (loading) {
        submitting = tmp.submitting;
      }
      const obj14 = { children: null };
      const obj15 = { style: null, children: null };
      items7[1] = submitting;
      obj15.style = items7;
      const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
      const items8 = [
        substr.map((id) => {
          closure_0 = id;
          if (null != id.id) {
            const obj = {
              onPress() {
                return callback1(closure_0);
              },
              style: closure_3.emoji,
              disabled,
              children: null,
            };
            const obj2 = { style: null, source: null };
            const items = [,];
            ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
            obj2.style = items;
            const obj3 = { uri: null };
            const tmp9 = onPressEmoji(sendMessage[27]);
            ({ id: obj5.id, animated: obj5.animated } = id);
            obj3.uri = onPressEmoji(sendMessage[28]).getEmojiURL({ id: null, animated: null, size: 48 });
            obj2.source = obj3;
            obj.children = ref(tmp9, obj2);
            let tmp11 = ref(closure_0(sendMessage[12]).PressableHighlight, obj, id.id);
            const obj4 = onPressEmoji(sendMessage[28]);
            const obj6 = { id: null, animated: null, size: 48 };
          } else {
            const obj7 = {
              onPress() {
                return callback1(closure_0);
              },
              style: closure_3.emoji,
              disabled,
              children: null,
            };
            const obj12 = {
              variant: "text-md/medium",
              color: "interactive-text-default",
              style: null,
              allowFontScaling: false,
              children: null,
            };
            const items1 = [,];
            ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
            obj12.style = items1;
            obj12.children = id.surrogates;
            obj7.children = ref(closure_0(sendMessage[21]).Text, obj12);
            tmp11 = ref(closure_0(sendMessage[12]).PressableHighlight, obj7, id.surrogates);
          }
          return tmp11;
        }),
      ];
      const obj16 = {
        onOpenPicker() {
          ICYMIActionCreatorsDefault.itemInteracted(
            closure_0.id,
            hotwheels_gaming_activity,
            "press_reply_reaction_picker",
          );
          ICYMIActionCreatorsDefault.feedItemActioned({
            itemId: closure_0.id,
            itemType: hotwheels_gaming_activity,
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "reaction_picker_button",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          });
        },
        channel,
        onPressEmoji: callback1,
        disabled: loading,
      };
      items8[1] = tmp23(AddEmojiButton, obj16);
      obj15.children = items8;
      const items9 = [tmp25(tmp24, obj15)];
      const obj17 = { style: tmp.inputRow, children: null };
      const obj18 = {
        containerStyle: tmp.input,
        grow: true,
        round: true,
        placeholder: null,
        value: null,
        onChange: null,
        disabled: null,
      };
      const intl4 = tmp5(tmp6[7]).intl;
      const obj19 = { username: tmp5(tmp6[30]).getName(author) };
      obj18.placeholder = intl4.formatToPlainString(tmp5(tmp6[7]).t.m3dK5W, obj19);
      obj18.value = first1;
      obj18.onChange = tmp10;
      obj18.disabled = loading;
      const items10 = [tmp23(tmp5(tmp6[29]).TextInput, obj18)];
      const obj20 = { accessibilityLabel: null, icon: null, size: "md", onPress: null, disabled: null, loading: null };
      const intl5 = tmp5(tmp6[7]).intl;
      obj20.accessibilityLabel = intl5.string(tmp5(tmp6[7]).t.oeb1vg);
      const obj21 = { size: "md", color: tmp19(tmp6[9]).unsafe_rawColors.WHITE };
      obj20.icon = tmp23(tmp5(tmp6[32]).SendMessageIcon, obj21);
      obj20.onPress = callback;
      obj20.disabled = 0 === first1.length;
      obj20.loading = loading;
      items10[1] = tmp23(tmp5(tmp6[31]).IconButton, obj20);
      obj17.children = items10;
      items9[1] = tmp25(tmp24, obj17);
      obj14.children = items9;
      let tmp23Result = tmp25(callback1, obj14);
      const tmp5Result4 = tmp5(tmp6[30]);
    } else {
      tmp23Result = tmp23(tmp19(tmp6[33]), {});
    }
    items6[1] = tmp23Result;
    obj5.children = items6;
    obj2.children = c10(hotwheels_gaming_activity, obj5);
    return ref(tmp5(tmp6[20]).ActionSheet, obj2);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl3 = tmp5(tmp6[7]).intl;
  stringResult1 = intl3.string(tmp5(tmp6[7]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
  stringResult = intl.string(require("util").t["5IEsGx"]);
}
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7396).ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = fn(1375).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  header: { width: "100%", display: "flex", alignItems: "center", padding: 8 },
  container: { gap: 12 },
  preview: {
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_STRONG,
  },
  loading: { opacity: 0.5 },
  base: { position: "relative" },
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
let obj3 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.inputRow = { flexDirection: "row", alignItems: "center", gap: 8 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.input = { flex: 1, borderRadius: nativeDefault.radii.round };
obj2.emojis = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.submitting = { opacity: 0.6 };
let obj5 = { flex: 1, borderRadius: nativeDefault.radii.round };
obj2.emoji = {
  padding: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
};
obj2.defaultEmoji = { width: 24, height: 24 };
obj2.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj2.emojiText = { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default function ReactActionSheet(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const obj = { children: null };
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj.children = React7(ReactActionSheetBase, obj2);
    return React7(ICYMIContext.ICYMIContextProvider, obj);
  }
}
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  ({ username, status, emojiStr, attachments, isForward } = reply);
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (isForward) {
    const obj2 = { username };
    let formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj2);
    let tmp5 = require;
  } else {
    const obj = { username };
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
    tmp5 = require;
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = tmp5(1115).intl;
      const obj3 = { attachmentsCount: attachments.length };
      const _HermesInternal2 = HermesInternal;
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1115).t["JiNPo+"], obj3) + "*");
    }
  }
  items.push(reply.reply);
  return items.join("\n");
};
