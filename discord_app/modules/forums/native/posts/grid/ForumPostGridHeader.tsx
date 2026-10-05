// === Module 11616: ForumPostGridHeader ===

// Module 11616 (ForumPostGridHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ForumConstants from "ForumConstants" /* 6776 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 11617 */;
import ForumPostUsername from "ForumPostUsername" /* 11619 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 11628 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 11629 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 11630 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
const ChannelFlags = ChannelConstants.ChannelFlags;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let hasUnreads;
  let isNew;
  let items;
  let items1;
  let thread;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(27);
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== thread) {
    const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
    cResult[0] = thread;
    cResult[1] = hasFlagResult;
    tmp5 = hasFlagResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp8;
    if (cResult[3] === tmp4.pinIcon) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === hasUnreads) {
      let tmp12;
      if (cResult[6] === thread) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === hasUnreads) {
        if (cResult[9] === tmp4.timestampText) {
          let tmp15;
          let tmp20;
          if (cResult[10] === thread) {
            tmp15 = cResult[11];
          }
          if (cResult[12] !== isNew) {
            const tmp21 = isNew && metroRequire(ForumPostNewTagDefault, {});
            cResult[12] = isNew;
            cResult[13] = tmp21;
            tmp20 = tmp21;
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] === tmp4.details) {
            if (cResult[15] === tmp8) {
              if (cResult[16] === tmp12) {
                if (cResult[17] === tmp15) {
                  let tmp24;
                  if (cResult[18] === tmp20) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === hasUnreads) {
                    let tmp28;
                    if (cResult[21] === thread.name) {
                      tmp28 = cResult[22];
                    }
                    if (cResult[23] === tmp4.container) {
                      if (cResult[24] === tmp24) {
                        let tmp32;
                        if (cResult[25] === tmp28) {
                          tmp32 = cResult[26];
                        }
                        return tmp32;
                      }
                    }
                    const obj2 = { style: tmp4.container, children: items };
                    items = [tmp24, tmp28];
                    const tmp35 = metroImportDefault(View, obj2);
                    cResult[23] = tmp4.container;
                    cResult[24] = tmp24;
                    cResult[25] = tmp28;
                    cResult[26] = tmp35;
                    tmp32 = tmp35;
                  }
                  const obj3 = { title: thread.name, hasUnreads };
                  const tmp31 = metroRequire(ForumPostTitleDefault, obj3);
                  cResult[20] = hasUnreads;
                  cResult[21] = thread.name;
                  cResult[22] = tmp31;
                  tmp28 = tmp31;
                }
              }
            }
          }
          const obj4 = { style: tmp4.details, children: items1 };
          items1 = [tmp8, tmp12, tmp15, tmp20];
          const tmp27 = metroImportDefault(View, obj4);
          cResult[14] = tmp4.details;
          cResult[15] = tmp8;
          cResult[16] = tmp12;
          cResult[17] = tmp15;
          cResult[18] = tmp20;
          cResult[19] = tmp27;
          tmp24 = tmp27;
        }
      }
      const obj5 = { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp4.timestampText };
      const tmp19 = metroRequire(ForumPostTimestampDefault, obj5);
      cResult[8] = hasUnreads;
      cResult[9] = tmp4.timestampText;
      cResult[10] = thread;
      cResult[11] = tmp19;
      tmp15 = tmp19;
    }
    const obj6 = { thread, hasUnreads };
    const tmp14 = metroRequire(ForumPostUsername.ForumPostAuthor, obj6);
    cResult[5] = hasUnreads;
    cResult[6] = thread;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  let tmp9 = tmp5;
  if (tmp9) {
    const obj7 = { containerStyle: tmp4.pinIcon };
    tmp9 = metroRequire(ForumPostPinIconDefault, obj7);
  }
  cResult[2] = tmp5;
  cResult[3] = tmp4.pinIcon;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let hasUnreads;
  let isNew;
  let items;
  let items1;
  let thread;
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = closure_8();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.details, children: items };
  if (hasFlagResult) {
    const obj3 = { containerStyle: tmp.pinIcon };
    hasFlagResult = metroRequire(ForumPostPinIconDefault, obj3);
  }
  items = [hasFlagResult, metroRequire(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), , ];
  const obj4 = { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText };
  items[2] = metroRequire(ForumPostTimestampDefault, obj4);
  if (isNew) {
    isNew = metroRequire(ForumPostNewTagDefault, {});
  }
  items[3] = isNew;
  items1 = [metroImportDefault(View, obj2), ];
  const obj5 = { title: thread.name, hasUnreads };
  items1[1] = metroRequire(ForumPostTitleDefault, obj5);
  return metroImportDefault(View, obj);
});
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default tmp4;