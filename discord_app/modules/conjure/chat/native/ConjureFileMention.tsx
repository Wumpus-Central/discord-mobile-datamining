// discord_app/modules/conjure/chat/native/ConjureFileMention.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { chip: null, thumbnail: null, name: null };
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: 2,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  transform: null,
};
let items = [{ translateY: nativeDefault.space.PX_4 }];
obj3.transform = items;
obj2.chip = obj3;
let size = {
  width: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xs,
};
obj2.thumbnail = size;
let obj4 = { translateY: nativeDefault.space.PX_4 };
obj2.name = { color: nativeDefault.colors.MENTION_FOREGROUND };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureFileMention.tsx");

export default function ConjureFileMention(variant) {
  let str = variant.variant;
  if (str === undefined) {
    str = "text-md/normal";
  }
  let context;
  const tmp = closure_9();
  context = noop.useContext(context(12286).ConjureFileMentionProjectContext);
  const conjureStoredAttachment = context(12288).useConjureStoredAttachment(context, variant.attachmentId);
  const obj2 = { style: tmp.chip, children: null };
  let obj3 = { projectId: context, file: conjureStoredAttachment, style: tmp.thumbnail, iconColor: null };
  let obj = context(12288);
  obj3.iconColor = conjureStoredAttachment(587).colors.MENTION_FOREGROUND;
  let items = [closure_7(conjureStoredAttachment(12291), obj3)];
  let obj4 = { variant: str, style: tmp.name, children: null };
  let name;
  if (conjureStoredAttachment != null) {
    name = conjureStoredAttachment.name;
  }
  if (name == null) {
    const intl = tmp2(1125).intl;
    name = intl.string(tmp9(3864).ff9Q4C);
  }
  obj4.children = name;
  items[1] = closure_7(context(5271).Text, obj4);
  obj2.children = items;
  const tmp6Result = closure_8(closure_6, obj2);
  let tmp8Result = tmp6Result;
  if (null != context) {
    tmp8Result = tmp6Result;
    if (null != conjureStoredAttachment) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = tmp2(12260).CONJURE_VIEWABLE_IMAGE_TYPES;
      tmp8Result = tmp6Result;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(conjureStoredAttachment.content_type)) {
        let obj5 = {
          onPress: asyncGeneratorStep(async () => {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === paths) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_1 = tmp5;
                    closure_128_0 = undefined;
                    paths = 1;
                    c3 = 1;
                    const obj5 = { value: tmp2(paths[14])(paths[13], paths.paths), done: false };
                    return obj5;
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    closure_128_0 = value.openConjureNativeImages;
                    ({ id: obj2.id, name: obj2.alt } = closure_129_1);
                    const items = [{ id: null, alt: null }];
                    paths = 2;
                    c3 = 1;
                    const obj13 = { value: closure_128_0(closure_129_0, items, 0), done: false };
                    return obj13;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp13) {
                c3 = tmp;
                throw tmp13;
              }
            }
          }),
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl2 = tmp2(1125).intl;
        let obj6 = { name: conjureStoredAttachment.name };
        obj5.accessibilityLabel = intl2.formatToPlainString(tmp9(3864).GtNukg, obj6);
        obj5.children = tmp6Result;
        tmp8Result = closure_7(closure_5, obj5);
      }
    }
  }
  return tmp8Result;
}
