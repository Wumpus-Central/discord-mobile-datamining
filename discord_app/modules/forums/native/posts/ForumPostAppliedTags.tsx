// discord_app/modules/forums/native/posts/ForumPostAppliedTags.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AppliedForumTag2 from "../AppliedForumTag.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  pillTagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  tag: obj2,
  tagsContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  dot: size,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = {
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  height: 4,
  width: 4,
  borderRadius: 10,
  marginHorizontal: 8,
};
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let additionalTagsCount;
      let appliedTags;
      let containerStyle;
      let hasUnreads;
      let items;
      let obj4;
      let tag;
      let obj = hasUnreads(576);
      const cResult = obj.c(18);
      ({ appliedTags, hasUnreads } = arg0);
      ({ additionalTagsCount, containerStyle } = arg0);
      let num = 0;
      if (undefined !== additionalTagsCount) {
        num = additionalTagsCount;
      }
      const tmp4 = closure_6();
      dependencyMap = tmp4;
      if (cResult[0] === containerStyle) {
        let tmp5;
        let tmp6;
        if (cResult[1] === tmp4.pillTagsContainer) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === appliedTags) {
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === tmp4.tag) {
              tmp6 = cResult[6];
            }
            if (cResult[10] === num) {
              if (cResult[11] === hasUnreads) {
                let tmp9;
                if (cResult[12] === tmp4.tag) {
                  tmp9 = cResult[13];
                }
                if (cResult[14] === tmp5) {
                  if (cResult[15] === tmp6) {
                    let tmp13;
                    if (cResult[16] === tmp9) {
                      tmp13 = cResult[17];
                    }
                    return tmp13;
                  }
                }
                const obj2 = { style: tmp5, children: items };
                items = [tmp6, tmp9];
                const tmp16 = closure_4(View, obj2);
                cResult[14] = tmp5;
                cResult[15] = tmp6;
                cResult[16] = tmp9;
                cResult[17] = tmp16;
                tmp13 = tmp16;
              }
            }
            let tmp10 = num > 0;
            if (tmp10) {
              const obj3 = { tag: obj4, containerStyle: tmp4.tag, hasUnreads };
              const _HermesInternal = HermesInternal;
              obj4 = { id: "-1", name: "+" + num };
              const AppliedForumTagPill = hasUnreads(10369).AppliedForumTagPill;
              tmp10 = closure_3(AppliedForumTagPill, obj3);
            }
            cResult[10] = num;
            cResult[11] = hasUnreads;
            cResult[12] = tmp4.tag;
            cResult[13] = tmp10;
            tmp9 = tmp10;
          }
        }
        if (cResult[7] === hasUnreads) {
          let tmp7;
          if (cResult[8] === tmp4.tag) {
            tmp7 = cResult[9];
          }
          const mapped = appliedTags.map(tmp7);
          cResult[3] = appliedTags;
          cResult[4] = hasUnreads;
          cResult[5] = tmp4.tag;
          cResult[6] = mapped;
          tmp6 = mapped;
        }
        const fn = function u(tag) {
          const obj = { tag, containerStyle: tag.tag, hasUnreads };
          return _false(AppliedForumTag2.AppliedForumTagPill, obj, tag.id);
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
    }
  : (additionalTagsCount) => {
      let appliedTags;
      let hasUnreads;
      let items;
      let items1;
      let obj3;
      let tag;
      ({ appliedTags, hasUnreads } = additionalTagsCount);
      let num = additionalTagsCount.additionalTagsCount;
      if (num === undefined) {
        num = 0;
      }
      const containerStyle = additionalTagsCount.containerStyle;
      const tmp = closure_6();
      dependencyMap = tmp;
      let obj = { style: items, children: items1 };
      items = [containerStyle, tmp.pillTagsContainer];
      items1 = [
        appliedTags.map((tag) => {
          const obj = { tag, containerStyle: tag.tag, hasUnreads };
          return _false(AppliedForumTag2.AppliedForumTagPill, obj, tag.id);
        }),
      ];
      let tmp4 = num > 0;
      if (tmp4) {
        const obj2 = { tag: obj3, containerStyle: tmp.tag, hasUnreads };
        const _HermesInternal = HermesInternal;
        obj3 = { id: "-1", name: "+" + num };
        const AppliedForumTagPill = hasUnreads(10369).AppliedForumTagPill;
        tmp4 = closure_3(AppliedForumTagPill, obj2);
      }
      items1[1] = tmp4;
      return closure_4(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (appliedTags) => {
      let additionalTagsCount;
      let containerStyle;
      let hasUnreads;
      let items;
      let items1;
      let obj6;
      let obj = appliedTags(hasUnreads[6]);
      const cResult = obj.c(19);
      const tmp = appliedTags;
      appliedTags = appliedTags.appliedTags;
      const tmp2 = hasUnreads;
      hasUnreads = appliedTags.hasUnreads;
      ({ additionalTagsCount, containerStyle } = appliedTags);
      let num = 0;
      if (undefined !== additionalTagsCount) {
        num = additionalTagsCount;
      }
      const tmp4 = closure_6();
      const dot = tmp4;
      if (cResult[0] === containerStyle) {
        let tmp5;
        let tmp6;
        if (cResult[1] === tmp4.tagsContainer) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === appliedTags) {
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === tmp4.dot) {
              tmp6 = cResult[6];
            }
            if (cResult[11] === num) {
              if (cResult[12] === hasUnreads) {
                let tmp9;
                if (cResult[13] === tmp4.dot) {
                  tmp9 = cResult[14];
                }
                if (cResult[15] === tmp5) {
                  if (cResult[16] === tmp6) {
                    let tmp16;
                    if (cResult[17] === tmp9) {
                      tmp16 = cResult[18];
                    }
                    return tmp16;
                  }
                }
                let obj2 = { style: tmp5, children: items };
                items = [tmp6, tmp9];
                const tmp19 = closure_4(dot, obj2);
                cResult[15] = tmp5;
                cResult[16] = tmp6;
                cResult[17] = tmp9;
                cResult[18] = tmp19;
                tmp16 = tmp19;
              }
            }
            let tmp10 = num > 0;
            if (tmp10) {
              const obj3 = { children: items1 };
              const obj4 = { style: tmp4.dot };
              items1 = [closure_3(dot, obj4)];
              const obj5 = { tag: obj6, hasUnreads };
              const _HermesInternal = HermesInternal;
              obj6 = { id: "-1", name: "+" + num };
              const AppliedForumTag = tmp(tmp2[7]).AppliedForumTag;
              items1[1] = closure_3(AppliedForumTag, obj5);
              tmp10 = closure_4(closure_5, obj3);
            }
            cResult[11] = num;
            cResult[12] = hasUnreads;
            cResult[13] = tmp4.dot;
            cResult[14] = tmp10;
            tmp9 = tmp10;
          }
        }
        if (cResult[7] === appliedTags.length) {
          if (cResult[8] === hasUnreads) {
            let tmp7;
            if (cResult[9] === tmp4.dot) {
              tmp7 = cResult[10];
            }
            const mapped = appliedTags.map(tmp7);
            cResult[3] = appliedTags;
            cResult[4] = hasUnreads;
            cResult[5] = tmp4.dot;
            cResult[6] = mapped;
            tmp6 = mapped;
          }
        }
        const fn = function h(tag, arg1) {
          const children = [,];
          const obj = { tag, hasUnreads };
          children[0] = _false(AppliedForumTag2.AppliedForumTag, obj, tag.id);
          let tmp3Result = arg1 !== appliedTags.length - 1;
          if (tmp3Result) {
            const obj2 = { style: dot.dot };
            tmp3Result = _false(View, obj2);
          }
          children[1] = tmp3Result;
          return React3(hasOwnProperty, { children });
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
    }
  : (appliedTags) => {
      let items;
      let items1;
      let items2;
      let obj5;
      appliedTags = appliedTags.appliedTags;
      const hasUnreads = appliedTags.hasUnreads;
      let num = appliedTags.additionalTagsCount;
      if (num === undefined) {
        num = 0;
      }
      const containerStyle = appliedTags.containerStyle;
      const tmp = closure_6();
      const dot = tmp;
      let obj = { style: items, children: items1 };
      items = [containerStyle, tmp.tagsContainer];
      items1 = [
        appliedTags.map((tag, index) => {
          const children = [,];
          const obj = { tag, hasUnreads };
          children[0] = _false(AppliedForumTag2.AppliedForumTag, obj, tag.id);
          let tmp3Result = index !== appliedTags.length - 1;
          if (tmp3Result) {
            const obj2 = { style: dot.dot };
            tmp3Result = _false(View, obj2);
          }
          children[1] = tmp3Result;
          return React3(hasOwnProperty, { children });
        }),
      ];
      let tmp2Result = num > 0;
      if (tmp2Result) {
        let obj2 = { children: items2 };
        const obj3 = { style: tmp.dot };
        items2 = [closure_3(dot, obj3)];
        const obj4 = { tag: obj5, hasUnreads };
        const _HermesInternal = HermesInternal;
        obj5 = { id: "-1", name: "+" + num };
        const AppliedForumTag = appliedTags(hasUnreads[7]).AppliedForumTag;
        items2[1] = closure_3(AppliedForumTag, obj4);
        tmp2Result = closure_4(closure_5, obj2);
      }
      items1[1] = tmp2Result;
      return closure_4(dot, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostAppliedTags.tsx");

export const ForumPostAppliedTagPills = tmp5;
export const ForumPostAppliedTags = tmp6;
