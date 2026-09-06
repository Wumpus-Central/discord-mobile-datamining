// discord_app/modules/forums/native/posts/ForumPostAppliedTags.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppliedForumTag from "../AppliedForumTag.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  tag: null,
  tagsContainer: null,
  dot: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.tag = createStyles;
createStyles.tagsContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
let size = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  height: 4,
  width: 4,
  borderRadius: 10,
  marginHorizontal: 8,
};
createStyles.dot = size;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = function ForumPostAppliedTagPills(additionalTagsCount) {
  ({ appliedTags, hasUnreads } = additionalTagsCount);
  let num = additionalTagsCount.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  const tmp = closure_6();
  dependencyMap = tmp;
  let obj = { style: null, children: null };
  const items = [additionalTagsCount.containerStyle, tmp.pillTagsContainer];
  obj.style = items;
  const items1 = [
    appliedTags.map((tag) =>
      React3(AppliedForumTag.AppliedForumTagPill, { tag, containerStyle: tag.tag, hasUnreads }, tag.id),
    ),
  ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = { tag: null, containerStyle: null, hasUnreads: null };
    obj = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj.name = "+" + num;
    obj.tag = obj;
    obj.containerStyle = tmp.tag;
    obj.hasUnreads = hasUnreads;
    tmp4 = closure_3(hasUnreads(10627).AppliedForumTagPill, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return closure_4(View, obj);
};
export const ForumPostAppliedTags = function ForumPostAppliedTags(appliedTags) {
  appliedTags = appliedTags.appliedTags;
  const hasUnreads = appliedTags.hasUnreads;
  let num = appliedTags.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  const tmp = closure_6();
  const dot = tmp;
  let obj = { style: null, children: null };
  const items = [appliedTags.containerStyle, tmp.tagsContainer];
  obj.style = items;
  const items1 = [
    appliedTags.map((tag, index) => {
      let obj = { tag, hasUnreads };
      const children = [React3(AppliedForumTag.AppliedForumTag, obj, tag.id)];
      let tmp3Result = index !== appliedTags.length - 1;
      if (tmp3Result) {
        obj = { style: dot.dot };
        tmp3Result = React3(View, obj);
      }
      children[1] = tmp3Result;
      return React4(hasOwnProperty, { children });
    }),
  ];
  let tmp2Result = num > 0;
  if (tmp2Result) {
    obj = { children: null };
    obj = { style: tmp.dot };
    const items2 = [closure_3(tmp3, obj)];
    const obj1 = { tag: null, hasUnreads: null };
    const obj2 = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj2.name = "+" + num;
    obj1.tag = obj2;
    obj1.hasUnreads = hasUnreads;
    items2[1] = closure_3(appliedTags(hasUnreads[5]).AppliedForumTag, obj1);
    obj.children = items2;
    tmp2Result = closure_4(closure_5, obj);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  return closure_4(dot, obj);
};
