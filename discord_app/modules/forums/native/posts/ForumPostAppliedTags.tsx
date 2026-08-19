// discord_app/modules/forums/native/posts/ForumPostAppliedTags.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c3, jsxs: c4, Fragment: c5 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = function ForumPostAppliedTagPills(additionalTagsCount) {
  ({ appliedTags, hasUnreads } = additionalTagsCount);
  let num = additionalTagsCount.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  const tmp = callback2();
  dependencyMap = tmp;
  let obj = { style: items, children: null };
  items = [additionalTagsCount.containerStyle, tmp.pillTagsContainer];
  const items1 = [appliedTags.map((item, index) => closure_1_3(hasUnreads(tag[5]).AppliedForumTagPill, { tag: item, containerStyle: tag.tag, hasUnreads }, item.id)), ];
  let tmp4 = num > 0;
  if (tmp4) {
    obj = { id: "-1", name: null };
    const _HermesInternal = HermesInternal;
    obj[1] = "+" + num;
    obj[0] = obj;
    obj[1] = tmp.tag;
    obj[2] = hasUnreads;
    tmp4 = callback(hasUnreads(10263).AppliedForumTagPill, obj);
  }
  items1[1] = tmp4;
  obj[1] = items1;
  return callback(View, obj);
};
export const ForumPostAppliedTags = function ForumPostAppliedTags(appliedTags) {
  appliedTags = appliedTags.appliedTags;
  const hasUnreads = appliedTags.hasUnreads;
  let num = appliedTags.additionalTagsCount;
  if (num === undefined) {
    num = 0;
  }
  const tmp = callback2();
  closure_2 = tmp;
  let obj = { style: items, children: null };
  items = [appliedTags.containerStyle, tmp.tagsContainer];
  const items1 = [
    appliedTags.map((item, index) => {
      let obj = { tag: item, hasUnreads };
      const children = [closure_1_3(appliedTags(hasUnreads[5]).AppliedForumTag, obj, item.id), ];
      let tmp3Result = index !== appliedTags.length - 1;
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
    tmp2Result = callback(closure_5, obj);
  }
  items1[1] = tmp2Result;
  obj[1] = items1;
  return callback(closure_2, obj);
};