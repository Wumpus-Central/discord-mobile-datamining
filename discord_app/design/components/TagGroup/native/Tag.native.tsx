// === Module 13982: Tag ===

// Module 13982 (Tag)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import TagGroupTypes from "TagGroupTypes" /* 13980 */;
import TagGraphic from "TagGraphic" /* 13983 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  const obj = { tag: null, inline: null, label: null };
  const obj2 = { flexDirection: "row", alignItems: "center", gap: TagGroupTypes.getTagGap(arg0), minHeight: null, paddingVertical: null, paddingHorizontal: null, borderWidth: null, borderRadius: null, borderColor: null, backgroundColor: null };
  obj2.minHeight = TagGroupTypes.getTagMinHeight(arg0);
  obj2.paddingVertical = TagGroupTypes.getTagVerticalPadding(arg0);
  obj2.paddingHorizontal = TagGroupTypes.getTagHorizontalPadding(arg0);
  obj2.borderWidth = TagGroupTypes.TAG_BORDER_WIDTH;
  obj2.borderRadius = TagGroupTypes.getTagBorderRadius(arg0, arg1);
  obj2.borderColor = nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT;
  obj2.backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  obj.tag = obj2;
  obj.inline = { flexShrink: 1, minWidth: 0 };
  obj.label = { flexShrink: 1, color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/Tag.native.tsx");

export const Tag = function Tag(variant) {
  ({ item, size, inline } = variant);
  const tmp = closure_6(size, variant.variant);
  const items = [tmp.tag, ];
  if (inline) {
    inline = tmp.inline;
  }
  const obj = { style: items, children: null };
  items[1] = inline;
  let tmp4 = null;
  if (null != item.icon) {
    const obj2 = { graphic: item.icon, size };
    tmp4 = React4(TagGraphic.TagGraphic, obj2);
  }
  const items1 = [tmp4, ];
  const obj3 = { color: "none", variant: TagGroupTypes.getTagTextVariant(size), style: tmp.label, lineClamp: 1, children: item.label };
  items1[1] = React4(Text_Text.Text, obj3);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};