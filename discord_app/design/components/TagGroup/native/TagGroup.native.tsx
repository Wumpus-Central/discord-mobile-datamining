// === Module 14252: TagGroup ===

// Module 14252 (TagGroup)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Tag from "Tag" /* 14255 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { group: obj2, inline: { flexWrap: "nowrap", flexShrink: 1, overflow: "hidden" } };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let label;
  let layout;
  let str;
  let str2;
  let variant;
  const obj = str2(str[6]);
  const cResult = obj.c(19);
  ({ label, items, layout, size, variant } = arg0);
  const tmp2 = str;
  str = "default";
  const tmp = str2;
  str2 = "default";
  if (undefined !== layout) {
    str2 = layout;
  }
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] === str2) {
    let tmp4;
    if (cResult[1] === size) {
      tmp4 = cResult[2];
    }
    size = tmp4;
    const tmp7 = closure_4();
    if (cResult[3] === tmp7.group) {
      let tmp9;
      let tmp10;
      if (cResult[4] === ("inline" === str2 && tmp7.inline)) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === items) {
        if (cResult[7] === str2) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === str) {
              tmp10 = cResult[10];
            }
            if (cResult[15] === label) {
              if (cResult[16] === tmp9) {
                let tmp13;
                if (cResult[17] === tmp10) {
                  tmp13 = cResult[18];
                }
                return tmp13;
              }
            }
            const tmp16 = <size style={tmp9} accessibilityRole="list" accessibilityLabel={label}>{tmp10}</size>;
            cResult[15] = label;
            cResult[16] = tmp9;
            cResult[17] = tmp10;
            cResult[18] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
      if (cResult[11] === str2) {
        if (cResult[12] === tmp4) {
          let tmp11;
          if (cResult[13] === str) {
            tmp11 = cResult[14];
          }
          const mapped = items.map(tmp11);
          cResult[6] = items;
          cResult[7] = str2;
          cResult[8] = tmp4;
          cResult[9] = str;
          cResult[10] = mapped;
          tmp10 = mapped;
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
    const tmpResult = tmp(tmp2[7]);
    defaultTagGroupSize = tmpResult.getDefaultTagGroupSize(str2);
  }
  cResult[0] = str2;
  cResult[1] = size;
  cResult[2] = defaultTagGroupSize;
  tmp4 = defaultTagGroupSize;
}) : ((label) => {
  let items;
  let layout;
  let variant;
  ({ items, layout } = label);
  label = label.label;
  if (layout === undefined) {
    layout = "default";
  }
  ({ size, variant } = label);
  if (variant === undefined) {
    variant = "default";
  }
  size = undefined;
  if (size == null) {
    const obj = layout(variant[7]);
    size = obj.getDefaultTagGroupSize(layout);
  }
  const tmp3 = closure_4();
  const items1 = [tmp3.group, ];
  let inline = "inline" === layout;
  if (inline) {
    inline = tmp3.inline;
  }
  items1[1] = inline;
  return <tmp5 style={items1} accessibilityRole="list" accessibilityLabel={label}>{items.map((item) => jsx(Tag.Tag, { item, size, variant, inline: "inline" === layout }, item.id))}</tmp5>;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGroup.native.tsx");

export const TagGroup = tmp3;