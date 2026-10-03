// discord_app/modules/forums/native/posts/grid/ForumPostGridBody.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ForumPostMediaUtils from "../../../ForumPostMediaUtils.tsx";
import _modDef11042 from "../../../../../../_runtime/metro/11042__.js";
import _modDef11621 from "../../../../../../_runtime/metro/11621__.js";
import _modDef11622 from "../../../../../../_runtime/metro/11622__.js";
import ForumPostMedia from "../ForumPostMedia.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 225;
let c9 = 192;
const createStyles = fn(4890);
let obj2 = {
  gifIcon: null,
  container: null,
  wideAspectRatioContainer: null,
  mediaIconContainer: null,
  headerLeftContainer: null,
  footerLeftContainer: null,
  footerRightContainer: null,
  extraMediaCountContainer: null,
  extraMediaCount: null,
  grid: null,
  wideAspectRatioGrid: null,
  column: null,
  columnSpacer: null,
  rowSpacer: null,
  icon: null,
};
let size = {
  height: 20,
  width: 33,
  backgroundColor: "black",
  borderRadius: nativeDefault.radii.xs,
  resizeMode: "cover",
};
obj2.gifIcon = size;
obj2.container = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
obj2.wideAspectRatioContainer = { height: 192 };
obj2.mediaIconContainer = { paddingLeft: 6 };
obj2.headerLeftContainer = { flexDirection: "row", position: "absolute", top: 4, left: 4 };
obj2.footerLeftContainer = {
  flexDirection: "row",
  position: "absolute",
  bottom: 4,
  left: 4,
  alignItems: "center",
  justifyContent: "flex-start",
};
obj2.footerRightContainer = {
  position: "absolute",
  bottom: 4,
  right: 4,
  alignItems: "center",
  justifyContent: "flex-start",
};
let obj3 = { position: "relative", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 225 };
obj2.extraMediaCountContainer = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 24,
  paddingHorizontal: 8,
  borderRadius: 20,
};
obj2.extraMediaCount = { marginLeft: 2 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  height: 24,
  paddingHorizontal: 8,
  borderRadius: 20,
};
obj2.grid = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.wideAspectRatioGrid = { height: 192 };
obj2.column = { flex: 1, flexDirection: "column" };
obj2.columnSpacer = { flex: 0, width: 2, height: "100%" };
obj2.rowSpacer = { flex: 0, height: 2, width: "100%" };
let obj5 = { height: 225, flexDirection: "row", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.icon = { color: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp4 = closure_10();
      if (cResult[0] !== tmp4.gifIcon) {
        const obj2 = { size: native.Icon.Sizes.CUSTOM, source: _modDef11621, disableColor: true, style: tmp4.gifIcon };
        const tmp8 = timestampProducer(native.Icon, obj2);
        cResult[0] = tmp4.gifIcon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = closure_10();
      return timestampProducer(native.Icon, {
        size: native.Icon.Sizes.CUSTOM,
        source: _modDef11621,
        disableColor: true,
        style: closure_10().gifIcon,
      });
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: native.Icon.Sizes.SMALL_20, source: _modDef11622, disableColor: true };
        const tmp7 = timestampProducer(native.Icon, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      timestampProducer(native.Icon, { size: native.Icon.Sizes.SMALL_20, source: _modDef11622, disableColor: true });
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (extraMediaCount) => {
      const cResult = c.c(9);
      const tmp4 = closure_10();
      if (cResult[0] !== tmp4.icon.color) {
        const obj2 = { source: _modDef11042, color: tmp4.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
        const tmp8 = timestampProducer(native.Icon, obj2);
        cResult[0] = tmp4.icon.color;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      const combined = "+" + extraMediaCount.extraMediaCount;
      if (cResult[2] === tmp4.extraMediaCount) {
        if (cResult[3] === combined) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] === tmp4.extraMediaCountContainer) {
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp10) {
              let tmp12 = cResult[8];
            }
            return tmp12;
          }
        }
        const obj3 = { style: tmp4.extraMediaCountContainer, children: null };
        items = [tmp5, tmp10];
        obj3.children = items;
        const tmp15 = React5(View, obj3);
        cResult[5] = tmp4.extraMediaCountContainer;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        cResult[8] = tmp15;
        tmp12 = tmp15;
      }
      const tmp11 = timestampProducer(Text_Text.Text, {
        style: tmp4.extraMediaCount,
        lineClamp: 1,
        variant: "text-xs/normal",
        color: "text-default",
        children: combined,
      });
      cResult[2] = tmp4.extraMediaCount;
      cResult[3] = combined;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const obj4 = {
        style: tmp4.extraMediaCount,
        lineClamp: 1,
        variant: "text-xs/normal",
        color: "text-default",
        children: combined,
      };
    }
  : (extraMediaCount) => {
      const tmp = closure_10();
      const obj = { style: tmp.extraMediaCountContainer, children: null };
      items = [
        timestampProducer(native.Icon, {
          source: _modDef11042,
          color: tmp.icon.color,
          size: native.Icon.Sizes.REFRESH_SMALL_16,
        }),
      ];
      const obj2 = { source: _modDef11042, color: tmp.icon.color, size: native.Icon.Sizes.REFRESH_SMALL_16 };
      items[1] = timestampProducer(Text_Text.Text, {
        style: tmp.extraMediaCount,
        lineClamp: 1,
        variant: "text-xs/normal",
        color: "text-default",
        children: "+" + extraMediaCount.extraMediaCount,
      });
      obj.children = items;
      return React5(View, obj);
    };
let items = [
  [0, 3],
  [1, 2],
];
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(16);
      width = require("useWindowDimensions")().width;
      const bound = Math.min(arg0.length, 2);
      if (cResult[0] === arg0) {
        if (cResult[1] === bound) {
          const arr = cResult[2];
          const tmp6 = arg1 ? c9 : c8;
          closure_4 = tmp6;
          if (cResult[6] === width) {
            if (cResult[7] === tmp6) {
              if (cResult[8] === arr) {
                if (cResult[9] === arg1) {
                  return cResult[10];
                }
              }
            }
          }
          if (cResult[11] === width) {
            if (cResult[12] === tmp6) {
              if (cResult[13] === arr.length) {
                if (cResult[14] === arg1) {
                  let tmp7 = cResult[15];
                }
                let mapped = arr.map(tmp7);
                cResult[6] = width;
                cResult[7] = tmp6;
                cResult[8] = arr;
                cResult[9] = arg1;
                cResult[10] = mapped;
              }
            }
          }
          const fn3 = function x(arr) {
            arr.filter(closure_0(width[14]).isNotNullish).length;
            return arr.map((media) => {
              const diff = (width - 48) / length - (2 * (length - 1)) / length;
              const obj = { media, targetWidth: diff, targetHeight: null };
              if (closure_1) {
                if (length < 2) {
                  let result = diff / 1.7777777777777777;
                }
                obj.targetHeight = result;
                return obj;
              }
              result = closure_4 / length - (2 * (length - 1)) / length;
            });
          };
          cResult[11] = width;
          cResult[12] = tmp6;
          cResult[13] = arr.length;
          cResult[14] = arg1;
          cResult[15] = fn3;
          tmp7 = fn3;
        }
      }
      if (cResult[3] !== arg0) {
        const fn = function l(arr) {
          const mapped = arr.map((item) => closure_1_0[item]);
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        cResult[3] = arg0;
        cResult[4] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function c(arg0) {
          return arg0.length > 0;
        };
        cResult[5] = fn2;
        let tmp4 = fn2;
      } else {
        tmp4 = cResult[5];
      }
      const substr = items.slice(0, bound);
      const mapped1 = substr.map(tmp3);
      const found = mapped1.filter(tmp4);
      cResult[0] = arg0;
      cResult[1] = bound;
      cResult[2] = found;
    }
  : (arg0, arg1) => {
      importDefault = arg1;
      width = require("useWindowDimensions")().width;
      items = [arg0];
      const memo = noop.useMemo(() => {
        const substr = items.slice(0, Math.min(length.length, 2));
        let mapped = substr.map((arr) => {
          const mapped = arr.map((item) => closure_1_0[item]);
          return mapped.filter(closure_0(width[14]).isNotNullish);
        });
        return mapped.filter((item) => item.length > 0);
      }, items);
      const items1 = [width, memo, arg1];
      return noop.useMemo(() => {
        closure_0 = closure_1 ? closure_1_9 : closure_1_8;
        return memo.map((arr) => {
          length = arr.filter(closure_0(width[14]).isNotNullish).length;
          length = length.length;
          return arr.map((media) => {
            const diff = (width - 48) / length - (2 * (length - 1)) / length;
            const obj = { media, targetWidth: diff, targetHeight: null };
            if (closure_1) {
              if (length < 2) {
                let result = diff / 1.7777777777777777;
              }
              obj.targetHeight = result;
              return obj;
            }
            result = closure_0 / length - (2 * (length - 1)) / length;
          });
        });
      }, items1);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = thread(576).c(14);
      ({ column, thread } = arg0);
      let rowSpacer = closure_10();
      if (cResult[0] === column) {
        if (cResult[1] === rowSpacer.column) {
          if (cResult[2] === rowSpacer.rowSpacer) {
            if (cResult[3] === thread) {
              if (cResult[10] === cResult[4]) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === tmp6) {
                    let tmp13 = cResult[13];
                  }
                  return tmp13;
                }
              }
              let obj2 = { style: cResult[5], children: cResult[6] };
              const tmp15 = closure_6(cResult[4], obj2);
              cResult[10] = cResult[4];
              cResult[11] = cResult[5];
              cResult[12] = cResult[6];
              cResult[13] = tmp15;
              tmp13 = tmp15;
            }
          }
        }
      }
      const found = column.filter(thread(1375).isNotNullish);
      const column2 = rowSpacer.column;
      if (cResult[7] === rowSpacer.rowSpacer) {
        if (cResult[8] === thread) {
          let tmp8 = cResult[9];
        }
        const mapped = found.map(tmp8);
        cResult[0] = column;
        column = rowSpacer.column;
        cResult[1] = column;
        rowSpacer = rowSpacer.rowSpacer;
        cResult[2] = rowSpacer;
        cResult[3] = thread;
        cResult[4] = View;
        cResult[5] = column2;
        cResult[6] = mapped;
      }
      const fn = function y(media, arg1) {
        let tmp2 = arg1 > 0;
        if (tmp2) {
          const obj = { style: rowSpacer.rowSpacer };
          tmp2 = timestampProducer(View, obj);
        }
        const obj2 = { children: null };
        items = [
          tmp2,
          timestampProducer(ForumPostMedia.ForumPostGridMedia, {
            channel: thread,
            media: media.media,
            targetWidth: media.targetWidth,
            targetHeight: media.targetHeight,
          }),
        ];
        obj2.children = items;
        return React5(noop.Fragment, obj2, "" + thread.id + "-" + arg1);
      };
      cResult[7] = rowSpacer.rowSpacer;
      cResult[8] = thread;
      cResult[9] = fn;
      tmp8 = fn;
      let obj = thread(576);
    }
  : (arg0) => {
      ({ column, thread: require } = arg0);
      const tmp = closure_10();
      const rowSpacer = tmp;
      const found = column.filter(GlobalUtils.isNotNullish);
      return closure_6(View, {
        style: tmp.column,
        children: found.map((media, index) => {
          let tmp2 = index > 0;
          if (tmp2) {
            const obj = { style: rowSpacer.rowSpacer };
            tmp2 = timestampProducer(View, obj);
          }
          const obj2 = { children: null };
          items = [
            tmp2,
            timestampProducer(ForumPostMedia.ForumPostGridMedia, {
              channel,
              media: media.media,
              targetWidth: media.targetWidth,
              targetHeight: media.targetHeight,
            }),
          ];
          obj2.children = items;
          return React5(noop.Fragment, obj2, "" + channel.id + "-" + index);
        }),
      });
    };
ReactCompilerGating = fn(558);
let obj6 = { color: nativeDefault.colors.TEXT_SUBTLE };
size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridBody.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (thread) => {
      const cResult = thread(576).c(42);
      thread = thread.thread;
      ({ hasUnreads, media } = thread);
      const tmp4 = closure_10();
      let columnSpacer = tmp4;
      let obj = thread(576);
      let obj2 = thread(6778);
      [arr, tmp6] = thread(6778).useSomeAppliedTags(thread, 2);
      if (cResult[0] !== media) {
        const substr = media.slice(0, 4);
        cResult[0] = media;
        cResult[1] = substr;
        let tmp8 = substr;
      } else {
        tmp8 = cResult[1];
      }
      const bound = Math.max(0, media.length - 4);
      if (cResult[2] !== thread) {
        const isMediaPostResult = thread.isMediaPost();
        cResult[2] = thread;
        cResult[3] = isMediaPostResult;
        let tmp11 = isMediaPostResult;
      } else {
        tmp11 = cResult[3];
      }
      columnSpacer = closure_15(tmp8, tmp11);
      let wideAspectRatioGrid = tmp11;
      if (cResult[4] !== media) {
        const result = tmp(7540).messageContainsGifOrVideo(media);
        cResult[4] = media;
        cResult[5] = result;
        let tmp13 = result;
        const tmpResult = tmp(7540);
      } else {
        tmp13 = cResult[5];
      }
      ({ containsVideo, containsGif } = tmp13);
      let wideAspectRatioContainer = wideAspectRatioGrid;
      if (wideAspectRatioGrid) {
        wideAspectRatioContainer = tmp4.wideAspectRatioContainer;
      }
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === wideAspectRatioContainer) {
          let tmp15 = cResult[8];
        }
        if (wideAspectRatioGrid) {
          wideAspectRatioGrid = tmp4.wideAspectRatioGrid;
        }
        if (cResult[9] === tmp4.grid) {
          if (cResult[10] === wideAspectRatioGrid) {
            let tmp16 = cResult[11];
          }
          if (cResult[12] === columnSpacer) {
            if (cResult[13] === tmp4.columnSpacer) {
              if (cResult[14] === thread) {
                if (cResult[19] === tmp16) {
                  if (cResult[20] === tmp17) {
                    let tmp21 = cResult[21];
                  }
                  if (cResult[22] === tmp6) {
                    if (cResult[23] === arr) {
                      if (cResult[24] === tmp7) {
                        if (cResult[25] === hasUnreads) {
                          if (cResult[26] === tmp4.footerLeftContainer) {
                            let tmp25 = cResult[27];
                          }
                          if (cResult[28] === containsGif) {
                            if (cResult[29] === containsVideo) {
                              if (cResult[30] === tmp4.headerLeftContainer) {
                                if (cResult[31] === tmp4.mediaIconContainer) {
                                  let tmp29 = cResult[32];
                                }
                                if (cResult[33] === bound) {
                                  if (cResult[34] === tmp4.footerRightContainer) {
                                    let tmp39 = cResult[35];
                                  }
                                  if (cResult[36] === tmp25) {
                                    if (cResult[37] === tmp29) {
                                      if (cResult[38] === tmp39) {
                                        if (cResult[39] === tmp15) {
                                          if (cResult[40] === tmp21) {
                                            let tmp44 = cResult[41];
                                          }
                                          return tmp44;
                                        }
                                      }
                                    }
                                  }
                                  const obj3 = { style: tmp15, children: null };
                                  items = [tmp21, tmp25, tmp29, tmp39];
                                  obj3.children = items;
                                  const tmp47 = closure_7(View, obj3);
                                  cResult[36] = tmp25;
                                  cResult[37] = tmp29;
                                  cResult[38] = tmp39;
                                  cResult[39] = tmp15;
                                  cResult[40] = tmp21;
                                  cResult[41] = tmp47;
                                  tmp44 = tmp47;
                                }
                                let tmp40 = 0 !== bound;
                                if (tmp40) {
                                  const obj4 = { style: tmp4.footerRightContainer, children: null };
                                  const obj5 = { extraMediaCount: bound };
                                  obj4.children = closure_6(closure_13, obj5);
                                  tmp40 = closure_6(View, obj4);
                                }
                                cResult[33] = bound;
                                cResult[34] = tmp4.footerRightContainer;
                                cResult[35] = tmp40;
                                tmp39 = tmp40;
                              }
                            }
                          }
                          let tmp31Result = containsGif;
                          if (!containsGif) {
                            tmp31Result = containsVideo;
                          }
                          if (tmp31Result) {
                            const obj6 = { style: tmp4.headerLeftContainer, children: null };
                            let tmp33 = containsGif;
                            if (containsGif) {
                              const obj7 = { style: tmp4.mediaIconContainer, children: closure_6(closure_11, {}) };
                              tmp33 = closure_6(View, obj7);
                            }
                            const items1 = [tmp33];
                            let tmp36 = containsVideo;
                            if (containsVideo) {
                              const obj8 = { style: tmp4.mediaIconContainer, children: closure_6(closure_12, {}) };
                              tmp36 = closure_6(View, obj8);
                            }
                            items1[1] = tmp36;
                            obj6.children = items1;
                            tmp31Result = closure_7(View, obj6);
                          }
                          cResult[28] = containsGif;
                          cResult[29] = containsVideo;
                          cResult[30] = tmp4.headerLeftContainer;
                          cResult[31] = tmp4.mediaIconContainer;
                          cResult[32] = tmp31Result;
                          tmp29 = tmp31Result;
                        }
                      }
                    }
                  }
                  let tmp26 = tmp7;
                  if (tmp7) {
                    const obj9 = { style: tmp4.footerLeftContainer, children: null };
                    const obj10 = { appliedTags: arr, additionalTagsCount: tmp6, hasUnreads };
                    obj9.children = closure_6(tmp(11627).ForumPostAppliedTagPills, obj10);
                    tmp26 = closure_6(View, obj9);
                  }
                  cResult[22] = tmp6;
                  cResult[23] = arr;
                  cResult[24] = tmp7;
                  cResult[25] = hasUnreads;
                  cResult[26] = tmp4.footerLeftContainer;
                  cResult[27] = tmp26;
                  tmp25 = tmp26;
                }
                const obj11 = { style: tmp16, children: cResult[15] };
                const tmp24 = closure_6(View, obj11);
                cResult[19] = tmp16;
                cResult[20] = cResult[15];
                cResult[21] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
          if (cResult[16] === tmp4.columnSpacer) {
            if (cResult[17] === thread) {
              let tmp18 = cResult[18];
            }
            const mapped = columnSpacer.map(tmp18);
            cResult[12] = columnSpacer;
            columnSpacer = tmp4.columnSpacer;
            cResult[13] = columnSpacer;
            cResult[14] = thread;
            cResult[15] = mapped;
          }
          const fn = function j(column, arg1) {
            let tmp2 = arg1 > 0;
            if (tmp2) {
              const obj = { style: columnSpacer.columnSpacer };
              tmp2 = timestampProducer(View, obj);
            }
            const obj2 = { children: null };
            items = [tmp2, timestampProducer(closure_16, { column, thread })];
            obj2.children = items;
            return React5(noop.Fragment, obj2, "" + column + "-" + arg1);
          };
          cResult[16] = tmp4.columnSpacer;
          cResult[17] = thread;
          cResult[18] = fn;
          tmp18 = fn;
        }
        const items2 = [tmp4.grid, wideAspectRatioGrid];
        cResult[9] = tmp4.grid;
        cResult[10] = wideAspectRatioGrid;
        cResult[11] = items2;
        tmp16 = items2;
      }
      const items3 = [tmp4.container, wideAspectRatioContainer];
      cResult[6] = tmp4.container;
      cResult[7] = wideAspectRatioContainer;
      cResult[8] = items3;
      tmp15 = items3;
      const tmp5 = _slicedToArray(thread(6778).useSomeAppliedTags(thread, 2), 2);
    }
  : (thread) => {
      thread = thread.thread;
      const media = thread.media;
      const tmp = closure_10();
      dependencyMap = tmp;
      const tmp4 = _slicedToArray(thread(6778).useSomeAppliedTags(thread, 2), 2);
      const first = tmp4[0];
      let tmp12Result = first.length > 0;
      items = [media];
      const memo = noop.useMemo(() => media.slice(0, 4), items);
      const bound = Math.max(0, media.length - 4);
      const isMediaPostResult = thread.isMediaPost();
      let obj = thread(6778);
      let tmp2 = thread;
      const items1 = [media];
      const memo1 = noop.useMemo(() => ForumPostMediaUtils.messageContainsGifOrVideo(media), items1);
      ({ containsVideo, containsGif } = memo1);
      const items2 = [tmp.container];
      let wideAspectRatioContainer = isMediaPostResult;
      if (isMediaPostResult) {
        wideAspectRatioContainer = tmp.wideAspectRatioContainer;
      }
      let obj2 = { style: items2, children: null };
      items2[1] = wideAspectRatioContainer;
      const items3 = [tmp.grid];
      let wideAspectRatioGrid = isMediaPostResult;
      if (isMediaPostResult) {
        wideAspectRatioGrid = tmp.wideAspectRatioGrid;
      }
      const arr4 = closure_15(memo, isMediaPostResult);
      items3[1] = wideAspectRatioGrid;
      const items4 = [
        closure_6(View, {
          style: items3,
          children: closure_15(memo, isMediaPostResult).map((column, index) => {
            let tmp2 = index > 0;
            if (tmp2) {
              const obj = { style: columnSpacer.columnSpacer };
              tmp2 = timestampProducer(View, obj);
            }
            const obj2 = { children: null };
            items = [tmp2, timestampProducer(closure_16, { column, thread })];
            obj2.children = items;
            return React5(noop.Fragment, obj2, "" + column + "-" + index);
          }),
        }),
        ,
        ,
      ];
      if (tmp12Result) {
        const obj4 = { style: tmp.footerLeftContainer, children: null };
        const obj5 = { appliedTags: first, additionalTagsCount: tmp4[1], hasUnreads: thread.hasUnreads };
        obj4.children = closure_6(tmp2(11627).ForumPostAppliedTagPills, obj5);
        tmp12Result = closure_6(View, obj4);
      }
      items4[1] = tmp12Result;
      let tmp10Result = containsGif;
      if (!containsGif) {
        tmp10Result = containsVideo;
      }
      if (tmp10Result) {
        const obj6 = { style: tmp.headerLeftContainer, children: null };
        if (containsGif) {
          const obj7 = { style: tmp.mediaIconContainer, children: closure_6(closure_11, {}) };
          containsGif = closure_6(View, obj7);
        }
        const items5 = [containsGif];
        if (containsVideo) {
          const obj8 = { style: tmp.mediaIconContainer, children: closure_6(closure_12, {}) };
          containsVideo = closure_6(View, obj8);
        }
        items5[1] = containsVideo;
        obj6.children = items5;
        tmp10Result = closure_7(View, obj6);
      }
      items4[2] = tmp10Result;
      let tmp12Result2 = 0 !== bound;
      if (tmp12Result2) {
        const obj9 = { style: tmp.footerRightContainer, children: null };
        const obj10 = { extraMediaCount: bound };
        obj9.children = closure_6(closure_13, obj10);
        tmp12Result2 = closure_6(View, obj9);
      }
      items4[3] = tmp12Result2;
      obj2.children = items4;
      return closure_7(View, obj2);
    };
export const GRID_HORIZONTAL_PADDING = 48;
