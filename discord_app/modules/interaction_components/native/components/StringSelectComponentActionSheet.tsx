// discord_app/modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../../../flow/Server.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = {
  selectionOptionItemWithDescription: { minHeight: 64 },
  selectionOptionItemDescription: { marginTop: 2 },
  emojiWrapper: null,
  textEmoji: null,
  fastImageEmoji: null,
};
createStyles = { flexShrink: 0, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.emojiWrapper = createStyles;
createStyles.textEmoji = { fontSize: 16, color: "#000000" };
createStyles.fastImageEmoji = { width: 24, height: 24 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx",
);

export default function StringSelectComponentActionSheet(selectionActionComponent) {
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onSubmit = selectionActionComponent.onSubmit;
  let first;
  noop = undefined;
  let callback;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  dependencyMap = tmp;
  let obj = selectionActionComponent(8119);
  let tmp3 = first(noop.useState(new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId))), 2);
  first = tmp3[0];
  noop = tmp3[1];
  let items = [selectionActionComponent];
  const memo = noop.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const items1 = [onSubmit];
  callback = noop.useCallback((values) => {
    onSubmit({ type: Server.ComponentType.STRING_SELECT, values });
    const obj = { type: Server.ComponentType.STRING_SELECT, values };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = noop.useCallback((arg0, value) => {
    const hasItem = first.has(value.value);
    let tmp3 = !hasItem;
    closure_1 = tmp3;
    if (memo) {
      if (!hasItem) {
        tmp3 = first.size >= selectionActionComponent.maxValues;
      }
      if (!tmp3) {
        closure_4((items) => {
          const set = new Set(items);
          if (closure_1) {
            set.add(value.value);
          } else {
            set.delete(value.value);
          }
          return set;
        });
      }
    } else {
      if (hasItem) {
        let items = [];
      } else {
        items = [value.value];
      }
      callback(items);
    }
  }, items2);
  let selectionOptionItemWithDescription = noop.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = noop.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  obj = {
    onPressOptionItem: callback1,
    renderIcon(emoji) {
      let tmp = null;
      if (null != emoji.emoji) {
        const obj = {
          src: emoji.emoji.src,
          name: emoji.emoji.name,
          style: null,
          textEmojiStyle: null,
          fastImageStyle: null,
        };
        ({ emojiWrapper: obj.style, textEmoji: obj.textEmojiStyle, fastImageEmoji: obj.fastImageStyle } = closure_2);
        tmp = jsx(EmojiDefault, {
          src: emoji.emoji.src,
          name: emoji.emoji.name,
          style: null,
          textEmojiStyle: null,
          fastImageStyle: null,
        });
      }
      return tmp;
    },
    skipIcon: !memo1,
    renderDescription(description) {
      let tmp = null;
      if (null != description.description) {
        tmp = null;
        if ("" !== description.description) {
          const obj = {
            style: closure_2.selectionOptionItemDescription,
            variant: "text-xs/medium",
            color: "text-default",
            children: description.description,
          };
          tmp = jsx(Text_Text.Text, {
            style: closure_2.selectionOptionItemDescription,
            variant: "text-xs/medium",
            color: "text-default",
            children: description.description,
          });
        }
      }
      return tmp;
    },
    selectionActionComponent,
    labelComponent,
    options: selectionActionComponent.options,
    itemStyle: null,
    selectedCount: null,
    isSelected: null,
    submitSelection: null,
    itemAccessibilityLabel: null,
    channelId: null,
    allowEmpty: null,
  };
  let set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  const items5 = [selectionOptionItemWithDescription];
  obj.itemStyle = items5;
  obj.selectedCount = first.size;
  obj.isSelected = function isSelected(value) {
    return first.has(value.value);
  };
  obj.submitSelection = function submitSelection() {
    const items = [...first];
    return callback(items);
  };
  obj.itemAccessibilityLabel = function itemAccessibilityLabel(emoji) {
    const intl = selectionActionComponent(closure_2[11]).intl;
    emoji = emoji.emoji;
    let name;
    if (emoji != null) {
      name = emoji.name;
    }
    return intl.formatToPlainString(selectionActionComponent(closure_2[11]).t.ZbrH2f, {
      emojiName: name,
      optionName: emoji.label,
      optionDescription: emoji.description,
    });
  };
  obj.channelId = channelId;
  obj.allowEmpty = allowEmpty;
  return tmp9(onSubmit(11822), obj);
}
