// === Module 12013: ForumPostAppliedTagPills ===

// Module 12013 (ForumPostAppliedTagPills)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ jsx: c3, jsxs: c4, Fragment: c5 } = jsxProd);
createCacheKey = { pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, tag: null, tagsContainer: null, dot: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
const result = require("set").fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = function ForumPostAppliedTagPills(additionalTagsCount) {
  ({ appliedTags, hasUnreads } = additionalTagsCount);
  let num = additionalTagsCount.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  dependencyMap = undefined;
  const tmp = callback2();
  dependencyMap = tmp;
  let obj = { style: items, children: null };
  items = [additionalTagsCount.containerStyle, tmp.pillTagsContainer];
  const items1 = [appliedTags.map((id) => closure_1_3(hasUnreads(tag[5]).AppliedForumTagPill, { tag: id, containerStyle: tag.tag, hasUnreads }, id.id)), ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = { tag: null, containerStyle: null, hasUnreads: null };
    obj = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj[1] = "+" + num;
    obj[0] = obj;
    obj[1] = tmp.tag;
    obj[2] = hasUnreads;
    tmp4 = callback(hasUnreads(10627).AppliedForumTagPill, obj);
  }
  items1[1] = tmp4;
  obj[1] = items1;
  return closure_4(View, obj);
};
export const ForumPostAppliedTags = function ForumPostAppliedTags(appliedTags) {
  appliedTags = appliedTags.appliedTags;
  const hasUnreads = appliedTags.hasUnreads;
  let num = appliedTags.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  closure_2 = undefined;
  const tmp = callback2();
  closure_2 = tmp;
  let obj = { style: items, children: null };
  items = [appliedTags.containerStyle, tmp.tagsContainer];
  const items1 = [
    appliedTags.map((id) => {
      let obj = { tag: id, hasUnreads };
      const children = [closure_1_3(appliedTags(hasUnreads[5]).AppliedForumTag, obj, id.id), ];
      let tmp3Result = arg1 !== appliedTags.length - 1;
      if (tmp3Result) {
        obj = { style: null };
        obj[0] = dot.dot;
        tmp3Result = closure_1_3(dot, obj);
      }
      children[1] = tmp3Result;
      return closure_1_4(closure_1_5, { children });
    }),

  ];
  let tmp2Result = num > 0;
  if (tmp2Result) {
    obj = { children: null };
    obj = { style: null };
    obj[0] = tmp.dot;
    const items2 = [callback(tmp3, obj), ];
    obj1 = { tag: null, hasUnreads: null };
    const obj2 = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj2[1] = "+" + num;
    obj1[0] = obj2;
    obj1[1] = hasUnreads;
    items2[1] = callback(appliedTags(hasUnreads[5]).AppliedForumTag, obj1);
    obj[0] = items2;
    tmp2Result = tmp2(closure_5, obj);
  }
  items1[1] = tmp2Result;
  obj[1] = items1;
  return closure_4(closure_2, obj);
};