// discord_app/design/components/TagGroup/native/TagGroup.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Tag from "Tag.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
const obj2 = {
  group: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 },
  inline: { flexWrap: "nowrap", flexShrink: 1, overflow: "hidden" },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGroup.native.tsx");

export const TagGroup = function TagGroup(accessibilityLabel) {
  ({ items, layout } = accessibilityLabel);
  if (layout === undefined) {
    layout = "default";
  }
  ({ size, variant } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  size = undefined;
  if (size == null) {
    size = layout(variant[5]).getDefaultTagGroupSize(layout);
    const obj = layout(variant[5]);
  }
  const tmp3 = closure_4();
  const items1 = [tmp3.group];
  let inline = "inline" === layout;
  if (inline) {
    inline = tmp3.inline;
  }
  items1[1] = inline;
  return (
    <size style={items1} accessibilityRole="list" accessibilityLabel={accessibilityLabel.label}>
      {items.map((item) => jsx(Tag.Tag, { item, size, variant, inline: "inline" === layout }, item.id))}
    </size>
  );
};
