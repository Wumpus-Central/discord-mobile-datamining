// === Module 14270: TagGroup ===

// Module 14270 (TagGroup)
import nativeDefault from "native" /* 587 */;
import Tag from "Tag" /* 14273 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { group: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 }, inline: { flexWrap: "nowrap", flexShrink: 1, overflow: "hidden" } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGroup.native.tsx");

export const TagGroup = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = str2(str[6]).c(19);
  ({ label, items, layout, size, variant } = arg0);
  str = "default";
  str2 = "default";
  if (undefined !== layout) {
    str2 = layout;
  }
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] === str2) {
    if (cResult[1] === size) {
      let tmp4 = cResult[2];
    }
    size = tmp4;
    const tmp7 = closure_4();
    if (cResult[3] === tmp7.group) {
      if (cResult[4] === tmp8) {
        let tmp9 = cResult[5];
      }
      if (cResult[6] === items) {
        if (cResult[7] === str2) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === str) {
              if (cResult[15] === label) {
                if (cResult[16] === tmp9) {
                  if (cResult[17] === tmp10) {
                    let tmp14 = cResult[18];
                  }
                  return tmp14;
                }
              }
              const obj2 = { style: tmp9, accessibilityRole: "list", accessibilityLabel: label, children: cResult[10] };
              const tmp17 = <size style={tmp9} accessibilityRole="list" accessibilityLabel={label}>{cResult[10]}</size>;
              cResult[15] = label;
              cResult[16] = tmp9;
              cResult[17] = cResult[10];
              cResult[18] = tmp17;
              tmp14 = tmp17;
            }
          }
        }
      }
      if (cResult[11] === str2) {
        if (cResult[12] === tmp4) {
          if (cResult[13] === str) {
            let tmp11 = cResult[14];
          }
          const mapped = items.map(tmp11);
          cResult[6] = items;
          cResult[7] = str2;
          cResult[8] = tmp4;
          cResult[9] = str;
          cResult[10] = mapped;
        }
      }
      const fn = function h(item) {
        return jsx(Tag.Tag, { item, size, variant: str, inline: "inline" === str2 }, item.id);
      };
      cResult[11] = str2;
      cResult[12] = tmp4;
      cResult[13] = str;
      cResult[14] = fn;
      tmp11 = fn;
    }
    const items1 = [tmp7.group, "inline" === str2 && tmp7.inline];
    cResult[3] = tmp7.group;
    cResult[4] = "inline" === str2 && tmp7.inline;
    cResult[5] = items1;
    tmp9 = items1;
  }
  let defaultTagGroupSize = size;
  if (size == null) {
    defaultTagGroupSize = tmp(tmp2[7]).getDefaultTagGroupSize(str2);
    const tmpResult = tmp(tmp2[7]);
  }
  cResult[0] = str2;
  cResult[1] = size;
  cResult[2] = defaultTagGroupSize;
  tmp4 = defaultTagGroupSize;
  const obj = str2(str[6]);
  tmp = str2;
  tmp2 = str;
}) : ((accessibilityLabel) => {
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
    size = layout(variant[7]).getDefaultTagGroupSize(layout);
    const obj = layout(variant[7]);
  }
  const tmp3 = closure_4();
  const items1 = [tmp3.group, ];
  let inline = "inline" === layout;
  if (inline) {
    inline = tmp3.inline;
  }
  items1[1] = inline;
  return <size style={items1} accessibilityRole="list" accessibilityLabel={accessibilityLabel.label}>{items.map((item) => jsx(Tag.Tag, { item, size, variant, inline: "inline" === layout }, item.id))}</size>;
});