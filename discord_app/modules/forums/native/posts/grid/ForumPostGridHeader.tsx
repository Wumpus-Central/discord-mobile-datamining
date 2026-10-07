// discord_app/modules/forums/native/posts/grid/ForumPostGridHeader.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ForumPostPinIconDefault from "../ForumPostPinIcon.tsx";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostNewTagDefault from "../ForumPostNewTag.tsx";
import ForumPostTitleDefault from "../ForumPostTitle.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(6786).ForumTimestampFormats;
const ChannelFlags = fn(2058).ChannelFlags;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({
  pinIcon: { marginEnd: 8 },
  container: { display: "flex", flexDirection: "column", marginBottom: 4 },
  details: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  timestampText: { flex: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(27);
      ({ thread, hasUnreads, isNew } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] !== thread) {
        const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
        cResult[0] = thread;
        cResult[1] = hasFlagResult;
        let tmp5 = hasFlagResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp4.pinIcon) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === hasUnreads) {
          if (cResult[6] === thread) {
            let tmp12 = cResult[7];
          }
          if (cResult[8] === hasUnreads) {
            if (cResult[9] === tmp4.timestampText) {
              if (cResult[10] === thread) {
                let tmp15 = cResult[11];
              }
              if (cResult[12] !== isNew) {
                let tmp21 = isNew;
                if (isNew) {
                  tmp21 = timestampProducer(ForumPostNewTagDefault, {});
                }
                cResult[12] = isNew;
                cResult[13] = tmp21;
                let tmp20 = tmp21;
              } else {
                tmp20 = cResult[13];
              }
              if (cResult[14] === tmp4.details) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp12) {
                    if (cResult[17] === tmp15) {
                      if (cResult[18] === tmp20) {
                        let tmp24 = cResult[19];
                      }
                      if (cResult[20] === hasUnreads) {
                        if (cResult[21] === thread.name) {
                          let tmp28 = cResult[22];
                        }
                        if (cResult[23] === tmp4.container) {
                          if (cResult[24] === tmp24) {
                            if (cResult[25] === tmp28) {
                              let tmp32 = cResult[26];
                            }
                            return tmp32;
                          }
                        }
                        const obj2 = { style: tmp4.container, children: null };
                        const items = [tmp24, tmp28];
                        obj2.children = items;
                        const tmp35 = React5(View, obj2);
                        cResult[23] = tmp4.container;
                        cResult[24] = tmp24;
                        cResult[25] = tmp28;
                        cResult[26] = tmp35;
                        tmp32 = tmp35;
                      }
                      const obj3 = { title: thread.name, hasUnreads };
                      const tmp31 = timestampProducer(ForumPostTitleDefault, obj3);
                      cResult[20] = hasUnreads;
                      cResult[21] = thread.name;
                      cResult[22] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                }
              }
              const obj4 = { style: tmp4.details, children: null };
              const items1 = [tmp8, tmp12, tmp15, tmp20];
              obj4.children = items1;
              const tmp27 = React5(View, obj4);
              cResult[14] = tmp4.details;
              cResult[15] = tmp8;
              cResult[16] = tmp12;
              cResult[17] = tmp15;
              cResult[18] = tmp20;
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
          }
          const obj5 = {
            thread,
            hasUnreads,
            format: ForumTimestampFormats.POSTED_DURATION_AGO,
            textStyle: tmp4.timestampText,
          };
          const tmp19 = timestampProducer(ForumPostTimestampDefault, obj5);
          cResult[8] = hasUnreads;
          cResult[9] = tmp4.timestampText;
          cResult[10] = thread;
          cResult[11] = tmp19;
          tmp15 = tmp19;
        }
        const obj6 = { thread, hasUnreads };
        const tmp14 = timestampProducer(ForumPostUsername.ForumPostAuthor, obj6);
        cResult[5] = hasUnreads;
        cResult[6] = thread;
        cResult[7] = tmp14;
        tmp12 = tmp14;
      }
      let tmp9 = tmp5;
      if (tmp5) {
        const obj7 = { containerStyle: tmp4.pinIcon };
        tmp9 = timestampProducer(ForumPostPinIconDefault, obj7);
      }
      cResult[2] = tmp5;
      cResult[3] = tmp4.pinIcon;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      ({ thread, hasUnreads, isNew } = arg0);
      const tmp = closure_8();
      let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.details, children: null };
      if (hasFlagResult) {
        const obj3 = { containerStyle: tmp.pinIcon };
        hasFlagResult = timestampProducer(ForumPostPinIconDefault, obj3);
      }
      const items = [
        hasFlagResult,
        timestampProducer(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }),
        timestampProducer(ForumPostTimestampDefault, {
          thread,
          hasUnreads,
          format: ForumTimestampFormats.POSTED_DURATION_AGO,
          textStyle: tmp.timestampText,
        }),
      ];
      if (isNew) {
        isNew = timestampProducer(ForumPostNewTagDefault, {});
      }
      items[3] = isNew;
      obj2.children = items;
      const items1 = [React5(View, obj2), timestampProducer(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
      obj.children = items1;
      return React5(View, obj);
    };
