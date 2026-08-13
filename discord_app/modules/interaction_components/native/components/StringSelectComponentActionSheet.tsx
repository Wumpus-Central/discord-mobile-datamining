// discord_app/modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { selectionOptionItemWithDescription: { minHeight: 64 }, selectionOptionItemDescription: { marginTop: 2 }, emojiWrapper: null, textEmoji: null, fastImageEmoji: null };
createCacheKey = { flexShrink: 0, borderRadius: require("Themes").radii.xs, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { fontSize: 16, color: "#000000" };
createCacheKey[4] = { width: 24, height: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx");

export default function StringSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let containerId;
  let labelComponent;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  let onSubmit = selectionActionComponent.onSubmit;
  let dependencyMap;
  let first;
  let React;
  let memo;
  let callback;
  ({ labelComponent, channelId, containerId, allowEmpty } = selectionActionComponent);
  let tmp = callback();
  dependencyMap = tmp;
  let obj = selectionActionComponent(8270);
  let tmp3 = first(React.useState(new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId))), 2);
  first = tmp3[0];
  React = tmp3[1];
  let items = [selectionActionComponent];
  memo = React.useMemo(() => selectionActionComponent.maxValues > 1, items);
  const items1 = [onSubmit];
  callback = React.useCallback((values) => {
    onSubmit({ type: selectionActionComponent(_undefined[6]).ComponentType.STRING_SELECT, values });
    const obj = { type: selectionActionComponent(_undefined[6]).ComponentType.STRING_SELECT, values };
    onSubmit(_undefined[7]).hideActionSheet();
  }, items1);
  const items2 = [first, memo, selectionActionComponent, callback];
  const items3 = [selectionActionComponent];
  const callback1 = React.useCallback((arg0, value) => {
    const selectionActionComponent = value;
    const hasItem = first.has(value.value);
    let tmp3 = !hasItem;
    const onSubmit = tmp3;
    if (memo) {
      if (!hasItem) {
        tmp3 = first.size >= selectionActionComponent.maxValues;
      }
      if (!tmp3) {
        callback((items) => {
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
      const tmp4 = callback;
    }
  }, items2);
  let selectionOptionItemWithDescription = React.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((description) => null != description.description);
  }, items3);
  const items4 = [selectionActionComponent];
  const memo1 = React.useMemo(() => {
    const options = selectionActionComponent.options;
    return options.some((emoji) => null != emoji.emoji);
  }, items4);
  obj = {
    onPressOptionItem: callback1,
    renderIcon(emoji) {
      let tmp = null;
      if (null != emoji.emoji) {
        const obj = { src: null, name: null, style: null, textEmojiStyle: null, fastImageStyle: null };
        obj[0] = emoji.emoji.src;
        obj[1] = emoji.emoji.name;
        ({ emojiWrapper: obj[2], textEmoji: obj[3], fastImageEmoji: obj[4] } = _undefined);
        tmp = memo(onSubmit(_undefined[9]), obj);
      }
      return tmp;
    },
    skipIcon: !memo1,
    renderDescription(description) {
      let tmp = null;
      if (null != description.description) {
        tmp = null;
        if ("" !== description.description) {
          const obj = { style: null, variant: "text-xs/medium", color: "text-default", children: null };
          obj[0] = _undefined.selectionOptionItemDescription;
          obj[3] = description.description;
          tmp = memo(selectionActionComponent(_undefined[10]).Text, obj);
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
    allowEmpty: null
  };
  let set = new Set(obj.getInitialStringSelectOptions(selectionActionComponent, containerId));
  const tmp9 = memo;
  if (selectionOptionItemWithDescription) {
    selectionOptionItemWithDescription = tmp.selectionOptionItemWithDescription;
  }
  const items5 = [selectionOptionItemWithDescription];
  obj[7] = items5;
  obj[8] = first.size;
  obj[9] = function isSelected(value) {
    return first.has(value.value);
  };
  obj[10] = function submitSelection() {
    const items = [...first];
    return callback(items);
  };
  obj[11] = function itemAccessibilityLabel(emoji) {
    const intl = selectionActionComponent(_undefined[11]).intl;
    emoji = emoji.emoji;
    let name;
    if (emoji != null) {
      name = emoji.name;
    }
    return intl.formatToPlainString(selectionActionComponent(_undefined[11]).t.ZbrH2f, { emojiName: name, optionName: emoji.label, optionDescription: emoji.description });
  };
  obj[12] = channelId;
  obj[13] = allowEmpty;
  return tmp9(onSubmit(11271), obj);
};