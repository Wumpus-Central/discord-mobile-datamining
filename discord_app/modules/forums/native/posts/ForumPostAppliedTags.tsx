// discord_app/modules/forums/native/posts/ForumPostAppliedTags.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppliedForumTag from "../AppliedForumTag.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  tag: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  tagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  dot: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  height: 4,
  width: 4,
  borderRadius: 10,
  marginHorizontal: 8,
};
obj2.dot = size;
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostAppliedTagPills(arg0) {
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
                tmp11 = closure_3(hasUnreads(9966).AppliedForumTagPill, obj3);
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
    }
  : function ForumPostAppliedTagPills(additionalTagsCount) {
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
      const items1 = [
        appliedTags.map((tag) =>
          React3(AppliedForumTag.AppliedForumTagPill, { tag, containerStyle: tag.tag, hasUnreads }, tag.id),
        ),
      ];
      let tmp4 = num > 0;
      if (tmp4) {
        const obj2 = { tag: null, containerStyle: null, hasUnreads: null };
        const obj3 = { id: "-1", name: null };
        const _HermesInternal = HermesInternal;
        obj3.name = "+" + num;
        obj2.tag = obj3;
        obj2.containerStyle = tmp.tag;
        obj2.hasUnreads = hasUnreads;
        tmp4 = closure_3(hasUnreads(9966).AppliedForumTagPill, obj2);
      }
      items1[1] = tmp4;
      obj.children = items1;
      return closure_4(View, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = tmp4;
export const ForumPostAppliedTags = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostAppliedTags(appliedTags) {
      const cResult = appliedTags(hasUnreads[6]).c(19);
      appliedTags = appliedTags.appliedTags;
      hasUnreads = appliedTags.hasUnreads;
      ({ additionalTagsCount, containerStyle } = appliedTags);
      let num = 0;
      if (undefined !== additionalTagsCount) {
        num = additionalTagsCount;
      }
      const tmp2 = closure_6();
      View = tmp2;
      if (cResult[0] === containerStyle) {
        if (cResult[1] === tmp2.tagsContainer) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === appliedTags) {
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === tmp2.dot) {
              if (cResult[11] === num) {
                if (cResult[12] === hasUnreads) {
                  if (cResult[13] === tmp2.dot) {
                    let tmp8 = cResult[14];
                  }
                  if (cResult[15] === tmp3) {
                    if (cResult[16] === tmp4) {
                      if (cResult[17] === tmp8) {
                        let tmp10 = cResult[18];
                      }
                      return tmp10;
                    }
                  }
                  class T {
                    constructor(arg0, arg1) {
                      tmp = jsxs;
                      tmp2 = Fragment;
                      tmp3 = jsx;
                      obj = { tag: appliedTags, hasUnreads };
                      items = [,];
                      items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
                      tmp3Result = arg1 !== appliedTags.length - 1;
                      if (tmp3Result) {
                        tmp5 = View;
                        obj1 = { style: null };
                        tmp6 = closure_2;
                        obj1.style = closure_2.dot;
                        tmp3Result = tmp3(View, obj1);
                      }
                      items[1] = tmp3Result;
                      return tmp(tmp2, { children: items });
                    }
                  }
                  let obj2 = { style: tmp3, children: null };
                  const items = [tmp4, tmp8];
                  obj2.children = items;
                  const tmp12 = closure_4(View, obj2);
                  cResult[15] = tmp3;
                  cResult[16] = tmp4;
                  cResult[17] = tmp8;
                  cResult[18] = tmp12;
                  tmp10 = tmp12;
                }
              }
              class T {
                constructor(arg0, arg1) {
                  tmp = jsxs;
                  tmp2 = Fragment;
                  tmp3 = jsx;
                  obj = { tag: appliedTags, hasUnreads };
                  items = [,];
                  items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
                  tmp3Result = arg1 !== appliedTags.length - 1;
                  if (tmp3Result) {
                    tmp5 = View;
                    obj1 = { style: null };
                    tmp6 = closure_2;
                    obj1.style = closure_2.dot;
                    tmp3Result = tmp3(View, obj1);
                  }
                  items[1] = tmp3Result;
                  return tmp(tmp2, { children: items });
                }
              }
              cResult[11] = num;
              cResult[12] = hasUnreads;
              cResult[13] = tmp2.dot;
              cResult[14] = num > 0;
              tmp8 = tmp9;
            }
          }
        }
        if (cResult[7] === appliedTags.length) {
          if (cResult[8] === hasUnreads) {
            if (cResult[9] === tmp2.dot) {
              let tmp5 = cResult[10];
            }
            const mapped = appliedTags.map(tmp5);
            class T {
              constructor(arg0, arg1) {
                tmp = jsxs;
                tmp2 = Fragment;
                tmp3 = jsx;
                obj = { tag: appliedTags, hasUnreads };
                items = [,];
                items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
                tmp3Result = arg1 !== appliedTags.length - 1;
                if (tmp3Result) {
                  tmp5 = View;
                  obj1 = { style: null };
                  tmp6 = closure_2;
                  obj1.style = closure_2.dot;
                  tmp3Result = tmp3(View, obj1);
                }
                items[1] = tmp3Result;
                return tmp(tmp2, { children: items });
              }
            }
            cResult[4] = hasUnreads;
            appliedTags = tmp2.dot;
            cResult[5] = appliedTags;
            cResult[6] = mapped;
          }
        }
        class T {
          constructor(arg0, arg1) {
            tmp = jsxs;
            tmp2 = Fragment;
            tmp3 = jsx;
            obj = { tag: appliedTags, hasUnreads };
            items = [,];
            items[0] = jsx(closure_0(closure_1[7]).AppliedForumTag, obj, appliedTags.id);
            tmp3Result = arg1 !== appliedTags.length - 1;
            if (tmp3Result) {
              tmp5 = View;
              obj1 = { style: null };
              tmp6 = closure_2;
              obj1.style = closure_2.dot;
              tmp3Result = tmp3(View, obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items });
          }
        }
        cResult[7] = appliedTags.length;
        cResult[8] = hasUnreads;
        cResult[9] = tmp2.dot;
        cResult[10] = T;
        tmp5 = T;
      }
      const items1 = [containerStyle, tmp2.tagsContainer];
      cResult[0] = containerStyle;
      cResult[1] = tmp2.tagsContainer;
      cResult[2] = items1;
      tmp3 = items1;
      const obj = appliedTags(hasUnreads[6]);
    }
  : function ForumPostAppliedTags(appliedTags) {
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
          const children = [React3(AppliedForumTag.AppliedForumTag, { tag, hasUnreads }, tag.id)];
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
        const items2 = [closure_3(tmp3, obj3)];
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
    };
