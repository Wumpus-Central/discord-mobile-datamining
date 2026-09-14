// === Module 12143: ForumPostAppliedTags ===

// Module 12143 (ForumPostAppliedTags)
import nativeDefault from "native" /* 576 */;
import AppliedForumTag from "AppliedForumTag" /* 10756 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, tag: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, tagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, dot: null };
let size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
obj2.dot = size;
let closure_6 = createStyles.createStyles(obj2);
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
  const obj = { style: null, children: null };
  const items = [additionalTagsCount.containerStyle, tmp.pillTagsContainer];
  obj.style = items;
  const items1 = [appliedTags.map((tag) => React3(AppliedForumTag.AppliedForumTagPill, { tag, containerStyle: tag.tag, hasUnreads }, tag.id)), ];
  let tmp4 = num > 0;
  if (tmp4) {
    const obj2 = { tag: null, containerStyle: null, hasUnreads: null };
    const obj3 = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj3.name = "+" + num;
    obj2.tag = obj3;
    obj2.containerStyle = tmp.tag;
    obj2.hasUnreads = hasUnreads;
    tmp4 = closure_3(hasUnreads(10756).AppliedForumTagPill, obj2);
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
  const obj = { style: null, children: null };
  const items = [appliedTags.containerStyle, tmp.tagsContainer];
  obj.style = items;
  const items1 = [
    appliedTags.map((tag, index) => {
      const children = [React3(AppliedForumTag.AppliedForumTag, { tag, hasUnreads }, tag.id), ];
      let tmp3Result = index !== appliedTags.length - 1;
      if (tmp3Result) {
        const obj2 = { style: dot.dot };
        tmp3Result = React3(View, obj2);
      }
      children[1] = tmp3Result;
      return React4(hasOwnProperty, { children });
    }),

  ];
  let tmp2Result = num > 0;
  if (tmp2Result) {
    let obj2 = { children: null };
    const obj3 = { style: tmp.dot };
    const items2 = [closure_3(tmp3, obj3), ];
    const obj4 = { tag: null, hasUnreads: null };
    const obj5 = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj5.name = "+" + num;
    obj4.tag = obj5;
    obj4.hasUnreads = hasUnreads;
    items2[1] = closure_3(appliedTags(hasUnreads[5]).AppliedForumTag, obj4);
    obj2.children = items2;
    tmp2Result = closure_4(closure_5, obj2);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  return closure_4(dot, obj);
};