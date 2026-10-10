// discord_app/design/components/TagGroup/native/Tag.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import TagGroupTypes from "TagGroupTypes.native.tsx";
import TagGraphic from "TagGraphic.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  const obj = { tag: null, inline: null, label: null };
  const obj2 = {
    flexDirection: "row",
    alignItems: "center",
    gap: TagGroupTypes.getTagGap(arg0),
    minHeight: null,
    paddingVertical: null,
    paddingHorizontal: null,
    borderWidth: null,
    borderRadius: null,
    borderColor: null,
    backgroundColor: null,
  };
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/Tag.native.tsx");

export const Tag = ReactCompilerGating.isReactCompilerEnabled()
  ? function Tag(variant) {
      const cResult = c.c(16);
      ({ item, size, inline } = variant);
      const tmp4 = closure_6(size, variant.variant);
      if (inline) {
        inline = tmp4.inline;
      }
      if (cResult[0] === tmp4.tag) {
        if (cResult[1] === inline) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === item.icon) {
          if (cResult[4] === size) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] !== size) {
            const tagTextVariant = TagGroupTypes.getTagTextVariant(size);
            cResult[6] = size;
            cResult[7] = tagTextVariant;
            let tmp9 = tagTextVariant;
            const tmpResult = TagGroupTypes;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === item.label) {
            if (cResult[9] === tmp4.label) {
              if (cResult[10] === tmp9) {
                let tmp11 = cResult[11];
              }
              if (cResult[12] === tmp5) {
                if (cResult[13] === tmp6) {
                  if (cResult[14] === tmp11) {
                    let tmp14 = cResult[15];
                  }
                  return tmp14;
                }
              }
              const obj2 = { style: tmp5, children: null };
              const items = [tmp6, tmp11];
              obj2.children = items;
              const tmp17 = hasOwnProperty(View, obj2);
              cResult[12] = tmp5;
              cResult[13] = tmp6;
              cResult[14] = tmp11;
              cResult[15] = tmp17;
              tmp14 = tmp17;
            }
          }
          const obj3 = { color: "none", variant: tmp9, style: tmp4.label, lineClamp: 1, children: item.label };
          const tmp13 = React4(Text_Text.Text, obj3);
          cResult[8] = item.label;
          cResult[9] = tmp4.label;
          cResult[10] = tmp9;
          cResult[11] = tmp13;
          tmp11 = tmp13;
        }
        let tmp7 = null;
        if (null != item.icon) {
          const obj4 = { graphic: item.icon, size };
          tmp7 = React4(TagGraphic.TagGraphic, obj4);
        }
        cResult[3] = item.icon;
        cResult[4] = size;
        cResult[5] = tmp7;
        tmp6 = tmp7;
      }
      const items1 = [tmp4.tag, inline];
      cResult[0] = tmp4.tag;
      cResult[1] = inline;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : function Tag(variant) {
      ({ item, size, inline } = variant);
      const tmp = closure_6(size, variant.variant);
      const items = [tmp.tag];
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
      const items1 = [tmp4];
      const obj3 = {
        color: "none",
        variant: TagGroupTypes.getTagTextVariant(size),
        style: tmp.label,
        lineClamp: 1,
        children: item.label,
      };
      items1[1] = React4(Text_Text.Text, obj3);
      obj.children = items1;
      return hasOwnProperty(View, obj);
    };
