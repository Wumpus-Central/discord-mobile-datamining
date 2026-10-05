// discord_app/design/components/TagGroup/native/Tag.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import TagGroupTypes from "TagGroupTypes.native.tsx";
import TagGraphic from "TagGraphic.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  const obj = {
    tag: obj2,
    inline: { flexShrink: 1, minWidth: 0 },
    label: { flexShrink: 1, color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT },
  };
  obj2 = {
    flexDirection: "row",
    alignItems: "center",
    gap: obj3.getTagGap(arg0),
    minHeight: obj4.getTagMinHeight(arg0),
    paddingVertical: obj5.getTagVerticalPadding(arg0),
    paddingHorizontal: obj6.getTagHorizontalPadding(arg0),
    borderWidth: TagGroupTypes.TAG_BORDER_WIDTH,
    borderRadius: obj7.getTagBorderRadius(arg0, arg1),
    borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
    backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  };
  obj3 = TagGroupTypes;
  obj4 = TagGroupTypes;
  obj5 = TagGroupTypes;
  obj6 = TagGroupTypes;
  obj7 = TagGroupTypes;
  ({ flexShrink: 1, color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (variant) => {
      let inline;
      let item;
      let items;
      const obj = react2;
      const cResult = obj.c(16);
      ({ item, size, inline } = variant);
      const tmp4 = closure_6(size, variant.variant);
      if (inline) {
        inline = tmp4.inline;
      }
      if (cResult[0] === tmp4.tag) {
        let tmp5;
        if (cResult[1] === inline) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === item.icon) {
          let tmp6;
          let tmp9;
          if (cResult[4] === size) {
            tmp6 = cResult[5];
          }
          if (cResult[6] !== size) {
            const tmpResult = TagGroupTypes;
            const tagTextVariant = tmpResult.getTagTextVariant(size);
            cResult[6] = size;
            cResult[7] = tagTextVariant;
            tmp9 = tagTextVariant;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === item.label) {
            if (cResult[9] === tmp4.label) {
              let tmp11;
              if (cResult[10] === tmp9) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp5) {
                if (cResult[13] === tmp6) {
                  let tmp14;
                  if (cResult[14] === tmp11) {
                    tmp14 = cResult[15];
                  }
                  return tmp14;
                }
              }
              const obj2 = { style: tmp5, children: items };
              items = [tmp6, tmp11];
              const tmp17 = hasOwnProperty(View, obj2);
              cResult[12] = tmp5;
              cResult[13] = tmp6;
              cResult[14] = tmp11;
              cResult[15] = tmp17;
              tmp14 = tmp17;
            }
          }
          const obj3 = { color: "none", variant: tmp9, style: tmp4.label, lineClamp: 1, children: item.label };
          const tmp13 = React3(Text_Text.Text, obj3);
          cResult[8] = item.label;
          cResult[9] = tmp4.label;
          cResult[10] = tmp9;
          cResult[11] = tmp13;
          tmp11 = tmp13;
        }
        let tmp7 = null;
        if (null != item.icon) {
          const obj4 = { graphic: item.icon, size };
          tmp7 = React3(TagGraphic.TagGraphic, obj4);
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
  : (variant) => {
      let inline;
      let item;
      let items1;
      let obj4;
      ({ item, size, inline } = variant);
      const tmp = closure_6(size, variant.variant);
      const items = [tmp.tag];
      if (inline) {
        inline = tmp.inline;
      }
      const obj = { style: items, children: items1 };
      items[1] = inline;
      let tmp4 = null;
      if (null != item.icon) {
        const obj2 = { graphic: item.icon, size };
        tmp4 = React3(TagGraphic.TagGraphic, obj2);
      }
      items1 = [tmp4];
      const obj3 = {
        color: "none",
        variant: obj4.getTagTextVariant(size),
        style: tmp.label,
        lineClamp: 1,
        children: item.label,
      };
      const Text = Text_Text.Text;
      obj4 = TagGroupTypes;
      items1[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("design/components/TagGroup/native/Tag.native.tsx");

export const Tag = tmp4;
