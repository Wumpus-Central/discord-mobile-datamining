// === Module 11627: ForumPostAppliedTags ===

// Module 11627 (ForumPostAppliedTags)
import nativeDefault from "native" /* 587 */;
import AppliedForumTag from "AppliedForumTag" /* 10356 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, tag: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, tagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, dot: null };
let size = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 4, width: 4, borderRadius: 10, marginHorizontal: 8 };
obj2.dot = size;
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = hasUnreads(576).c(18);
  ({ appliedTags, hasUnreads } = arg0);
  ({ additionalTagsCount, containerStyle } = arg0);
  let num = 0;
  if (undefined !== additionalTagsCount) {
    num = additionalTagsCount;
  }
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.pillTagsContainer) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === appliedTags) {
      if (cResult[4] === hasUnreads) {
        if (cResult[5] === tmp4.tag) {
          if (cResult[10] === num) {
            if (cResult[11] === hasUnreads) {
              if (cResult[12] === tmp4.tag) {
                let tmp10 = cResult[13];
              }
              if (cResult[14] === tmp5) {
                if (cResult[15] === tmp6) {
                  if (cResult[16] === tmp10) {
                    let tmp14 = cResult[17];
                  }
                  return tmp14;
                }
              }
              const obj2 = { style: tmp5, children: null };
              const items = [tmp6, tmp10];
              obj2.children = items;
              const tmp17 = closure_4(View, obj2);
              cResult[14] = tmp5;
              cResult[15] = tmp6;
              cResult[16] = tmp10;
              cResult[17] = tmp17;
              tmp14 = tmp17;
            }
          }
          let tmp11 = num > 0;
          if (tmp11) {
            const obj3 = { tag: null, containerStyle: null, hasUnreads: null };
            const obj4 = { id: "-1", name: null };
            const _HermesInternal = HermesInternal;
            obj4.name = "+" + num;
            obj3.tag = obj4;
            obj3.containerStyle = tmp4.tag;
            obj3.hasUnreads = hasUnreads;
            tmp11 = closure_3(hasUnreads(10356).AppliedForumTagPill, obj3);
          }
          cResult[10] = num;
          cResult[11] = hasUnreads;
          cResult[12] = tmp4.tag;
          cResult[13] = tmp11;
          tmp10 = tmp11;
        }
      }
    }
    if (cResult[7] === hasUnreads) {
      if (cResult[8] === tmp4.tag) {
        let tmp7 = cResult[9];
      }
      const mapped = appliedTags.map(tmp7);
      cResult[3] = appliedTags;
      cResult[4] = hasUnreads;
      appliedTags = tmp4.tag;
      cResult[5] = appliedTags;
      cResult[6] = mapped;
    }
    const fn = function u(tag) {
      return React3(AppliedForumTag.AppliedForumTagPill, { tag, containerStyle: tag.tag, hasUnreads }, tag.id);
    };
    cResult[7] = hasUnreads;
    cResult[8] = tmp4.tag;
    cResult[9] = fn;
    tmp7 = fn;
  }
  const items1 = [containerStyle, tmp4.pillTagsContainer];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.pillTagsContainer;
  cResult[2] = items1;
  tmp5 = items1;
  const obj = hasUnreads(576);
}) : ((additionalTagsCount) => {
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
    tmp4 = closure_3(hasUnreads(10356).AppliedForumTagPill, obj2);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return closure_4(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = tmp4;
export const ForumPostAppliedTags = ReactCompilerGating.isReactCompilerEnabled() ? ((appliedTags) => {
  const cResult = appliedTags(hasUnreads[6]).c(19);
  appliedTags = appliedTags.appliedTags;
  hasUnreads = appliedTags.hasUnreads;
  ({ additionalTagsCount, containerStyle } = appliedTags);
  let num = 0;
  if (undefined !== additionalTagsCount) {
    num = additionalTagsCount;
  }
  const tmp4 = closure_6();
  const dot = tmp4;
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.tagsContainer) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === appliedTags) {
      if (cResult[4] === hasUnreads) {
        if (cResult[5] === tmp4.dot) {
          if (cResult[11] === num) {
            if (cResult[12] === hasUnreads) {
              if (cResult[13] === tmp4.dot) {
                let tmp10 = cResult[14];
              }
              if (cResult[15] === tmp5) {
                if (cResult[16] === tmp6) {
                  if (cResult[17] === tmp10) {
                    let tmp17 = cResult[18];
                  }
                  return tmp17;
                }
              }
              let obj2 = { style: tmp5, children: null };
              const items = [tmp6, tmp10];
              obj2.children = items;
              const tmp20 = closure_4(dot, obj2);
              cResult[15] = tmp5;
              cResult[16] = tmp6;
              cResult[17] = tmp10;
              cResult[18] = tmp20;
              tmp17 = tmp20;
            }
          }
          let tmp11 = num > 0;
          if (tmp11) {
            const obj3 = { children: null };
            const obj4 = { style: tmp4.dot };
            const items1 = [closure_3(dot, obj4), ];
            const obj5 = { tag: null, hasUnreads: null };
            const obj6 = { id: "-1", name: null };
            const _HermesInternal = HermesInternal;
            obj6.name = "+" + num;
            obj5.tag = obj6;
            obj5.hasUnreads = hasUnreads;
            items1[1] = closure_3(tmp(tmp2[7]).AppliedForumTag, obj5);
            obj3.children = items1;
            tmp11 = closure_4(closure_5, obj3);
          }
          cResult[11] = num;
          cResult[12] = hasUnreads;
          cResult[13] = tmp4.dot;
          cResult[14] = tmp11;
          tmp10 = tmp11;
        }
      }
    }
    if (cResult[7] === appliedTags.length) {
      if (cResult[8] === hasUnreads) {
        if (cResult[9] === tmp4.dot) {
          let tmp7 = cResult[10];
        }
        const mapped = appliedTags.map(tmp7);
        cResult[3] = appliedTags;
        cResult[4] = hasUnreads;
        appliedTags = tmp4.dot;
        cResult[5] = appliedTags;
        cResult[6] = mapped;
      }
    }
    const fn = function h(tag, arg1) {
      const children = [React3(AppliedForumTag.AppliedForumTag, { tag, hasUnreads }, tag.id), ];
      let tmp3Result = arg1 !== appliedTags.length - 1;
      if (tmp3Result) {
        const obj2 = { style: dot.dot };
        tmp3Result = React3(View, obj2);
      }
      children[1] = tmp3Result;
      return React4(hasOwnProperty, { children });
    };
    cResult[7] = appliedTags.length;
    cResult[8] = hasUnreads;
    cResult[9] = tmp4.dot;
    cResult[10] = fn;
    tmp7 = fn;
  }
  const items2 = [containerStyle, tmp4.tagsContainer];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.tagsContainer;
  cResult[2] = items2;
  tmp5 = items2;
  const obj = appliedTags(hasUnreads[6]);
  tmp = appliedTags;
  tmp2 = hasUnreads;
}) : ((appliedTags) => {
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
    items2[1] = closure_3(appliedTags(hasUnreads[7]).AppliedForumTag, obj4);
    obj2.children = items2;
    tmp2Result = closure_4(closure_5, obj2);
  }
  items1[1] = tmp2Result;
  obj.children = items1;
  return closure_4(dot, obj);
});