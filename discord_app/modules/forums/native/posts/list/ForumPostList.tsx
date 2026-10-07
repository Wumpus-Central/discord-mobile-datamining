// discord_app/modules/forums/native/posts/list/ForumPostList.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ForumTagHooks from "../../../ForumTagHooks.tsx";
import ForumPostPinIconDefault from "../ForumPostPinIcon.tsx";
import ForumPostAppliedTags from "../ForumPostAppliedTags.tsx";
import ForumPostListBodyDefault from "ForumPostListBody.tsx";
import ForumPostListFooterDefault from "ForumPostListFooter.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ChannelFlags = fn(2058).ChannelFlags;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({
  header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 },
  content: { flex: 1, marginBottom: 12 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(31);
      ({
        messageContent,
        firstMessage,
        firstMessageLoaded,
        hasUnreads,
        isNew,
        media,
        isEmbed,
        isLocalDeviceMedia,
        parentChannel,
        thread,
        senderModifier,
      } = arg0);
      const tmp4 = closure_9();
      [arr, tmp6] = ForumTagHooks.useSomeAppliedTags(thread, 2);
      if (cResult[0] !== thread) {
        const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
        cResult[0] = thread;
        cResult[1] = hasFlagResult;
        let tmp7 = hasFlagResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp6) {
        if (cResult[3] === arr) {
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === tmp7) {
              if (cResult[6] === tmp4.header) {
                let tmp10 = cResult[7];
              }
              if (cResult[8] === firstMessage) {
                if (cResult[9] === firstMessageLoaded) {
                  if (cResult[10] === hasUnreads) {
                    if (cResult[11] === isEmbed) {
                      if (cResult[12] === isLocalDeviceMedia) {
                        if (cResult[13] === isNew) {
                          if (cResult[14] === media) {
                            if (cResult[15] === messageContent) {
                              if (cResult[16] === senderModifier) {
                                if (cResult[17] === thread) {
                                  let tmp19 = cResult[18];
                                }
                                if (cResult[19] === tmp4.content) {
                                  if (cResult[20] === tmp10) {
                                    if (cResult[21] === tmp19) {
                                      let tmp23 = cResult[22];
                                    }
                                    if (cResult[23] === firstMessage) {
                                      if (cResult[24] === hasUnreads) {
                                        if (cResult[25] === parentChannel) {
                                          if (cResult[26] === thread) {
                                            let tmp27 = cResult[27];
                                          }
                                          if (cResult[28] === tmp23) {
                                            if (cResult[29] === tmp27) {
                                              let tmp31 = cResult[30];
                                            }
                                            return tmp31;
                                          }
                                          const obj3 = { children: null };
                                          const items = [tmp23, tmp27];
                                          obj3.children = items;
                                          const tmp34 = React5(closure_1_8, obj3);
                                          cResult[28] = tmp23;
                                          cResult[29] = tmp27;
                                          cResult[30] = tmp34;
                                          tmp31 = tmp34;
                                        }
                                      }
                                    }
                                    const obj4 = { thread, firstMessage, hasUnreads, parentChannel };
                                    const tmp30 = timestampProducer(ForumPostListFooterDefault, obj4);
                                    cResult[23] = firstMessage;
                                    cResult[24] = hasUnreads;
                                    cResult[25] = parentChannel;
                                    cResult[26] = thread;
                                    cResult[27] = tmp30;
                                    tmp27 = tmp30;
                                  }
                                }
                                const obj5 = { style: tmp4.content, children: null };
                                const items1 = [tmp10, tmp19];
                                obj5.children = items1;
                                const tmp26 = React5(View, obj5);
                                cResult[19] = tmp4.content;
                                cResult[20] = tmp10;
                                cResult[21] = tmp19;
                                cResult[22] = tmp26;
                                tmp23 = tmp26;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj6 = {
                thread,
                firstMessage,
                hasUnreads,
                isNew,
                messageContent,
                media,
                isEmbed,
                isLocalDeviceMedia,
                firstMessageLoaded,
                senderModifier,
              };
              const tmp22 = timestampProducer(ForumPostListBodyDefault, obj6);
              cResult[8] = firstMessage;
              cResult[9] = firstMessageLoaded;
              cResult[10] = hasUnreads;
              cResult[11] = isEmbed;
              cResult[12] = isLocalDeviceMedia;
              cResult[13] = isNew;
              cResult[14] = media;
              cResult[15] = messageContent;
              cResult[16] = senderModifier;
              cResult[17] = thread;
              cResult[18] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
      }
      let tmp12Result = tmp7;
      if (!tmp7) {
        tmp12Result = 0 !== arr.length;
      }
      if (tmp12Result) {
        const obj7 = { style: tmp4.header, children: null };
        let tmp14 = tmp7;
        if (tmp7) {
          tmp14 = timestampProducer(ForumPostPinIconDefault, {});
        }
        const items2 = [tmp14];
        let tmp17 = 0 !== arr.length;
        if (tmp17) {
          const obj8 = { appliedTags: arr, additionalTagsCount: tmp6, hasUnreads };
          tmp17 = timestampProducer(ForumPostAppliedTags.ForumPostAppliedTagPills, obj8);
        }
        items2[1] = tmp17;
        obj7.children = items2;
        tmp12Result = React5(View, obj7);
      }
      cResult[2] = tmp6;
      cResult[3] = arr;
      cResult[4] = hasUnreads;
      cResult[5] = tmp7;
      cResult[6] = tmp4.header;
      cResult[7] = tmp12Result;
      tmp10 = tmp12Result;
      const tmp5 = _slicedToArray(ForumTagHooks.useSomeAppliedTags(thread, 2), 2);
    }
  : (arg0) => {
      ({ firstMessage, hasUnreads, thread } = arg0);
      ({
        messageContent,
        firstMessageLoaded,
        isNew,
        media,
        isEmbed,
        isLocalDeviceMedia,
        parentChannel,
        senderModifier,
      } = arg0);
      const tmp = closure_9();
      const tmp4 = _slicedToArray(ForumTagHooks.useSomeAppliedTags(thread, 2), 2);
      const first = tmp4[0];
      const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
      const obj2 = { style: tmp.content, children: null };
      let tmp6Result = hasFlagResult;
      if (!hasFlagResult) {
        tmp6Result = 0 !== first.length;
      }
      if (tmp6Result) {
        const obj3 = { style: tmp.header, children: null };
        let tmp10 = hasFlagResult;
        if (hasFlagResult) {
          tmp10 = timestampProducer(ForumPostPinIconDefault, {});
        }
        const items = [tmp10];
        let tmp13 = 0 !== first.length;
        if (tmp13) {
          const obj4 = { appliedTags: first, additionalTagsCount: tmp4[1], hasUnreads };
          tmp13 = timestampProducer(ForumPostAppliedTags.ForumPostAppliedTagPills, obj4);
        }
        items[1] = tmp13;
        obj3.children = items;
        tmp6Result = React5(View, obj3);
      }
      const obj5 = { children: null };
      const items1 = [
        tmp6Result,
        timestampProducer(ForumPostListBodyDefault, {
          thread,
          firstMessage,
          hasUnreads,
          isNew,
          messageContent,
          media,
          isEmbed,
          isLocalDeviceMedia,
          firstMessageLoaded,
          senderModifier,
        }),
      ];
      obj2.children = items1;
      const items2 = [
        React5(View, obj2),
        timestampProducer(ForumPostListFooterDefault, { thread, firstMessage, hasUnreads, parentChannel }),
      ];
      obj5.children = items2;
      return React5(closure_1_8, obj5);
    };
