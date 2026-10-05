// discord_app/modules/forums/native/posts/list/ForumPostList.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import ChannelConstants from "../../../../channel/ChannelConstants.tsx";
import ForumTagHooks from "../../../ForumTagHooks.tsx";
import ForumPostPinIconDefault from "../ForumPostPinIcon.tsx";
import ForumPostAppliedTags from "../ForumPostAppliedTags.tsx";
import ForumPostListBodyDefault from "ForumPostListBody.tsx";
import ForumPostListFooterDefault from "ForumPostListFooter.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ChannelFlags = ChannelConstants.ChannelFlags;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({
  header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 },
  content: { flex: 1, marginBottom: 12 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let arr;
      let firstMessage;
      let firstMessageLoaded;
      let hasUnreads;
      let isEmbed;
      let isLocalDeviceMedia;
      let isNew;
      let items;
      let items1;
      let items2;
      let media;
      let messageContent;
      let parentChannel;
      let senderModifier;
      let thread;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(31);
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
      const obj2 = ForumTagHooks;
      [arr, tmp6] = obj2.useSomeAppliedTags(thread, 2);
      _slicedToArray(obj2.useSomeAppliedTags(thread, 2), 2);
      if (cResult[0] !== thread) {
        const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
        cResult[0] = thread;
        cResult[1] = hasFlagResult;
        tmp7 = hasFlagResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp6) {
        if (cResult[3] === arr) {
          if (cResult[4] === hasUnreads) {
            if (cResult[5] === tmp7) {
              let tmp10;
              if (cResult[6] === tmp4.header) {
                tmp10 = cResult[7];
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
                                let tmp19;
                                if (cResult[17] === thread) {
                                  tmp19 = cResult[18];
                                }
                                if (cResult[19] === tmp4.content) {
                                  if (cResult[20] === tmp10) {
                                    let tmp23;
                                    if (cResult[21] === tmp19) {
                                      tmp23 = cResult[22];
                                    }
                                    if (cResult[23] === firstMessage) {
                                      if (cResult[24] === hasUnreads) {
                                        if (cResult[25] === parentChannel) {
                                          let tmp27;
                                          if (cResult[26] === thread) {
                                            tmp27 = cResult[27];
                                          }
                                          if (cResult[28] === tmp23) {
                                            let tmp31;
                                            if (cResult[29] === tmp27) {
                                              tmp31 = cResult[30];
                                            }
                                            return tmp31;
                                          }
                                          const obj3 = { children: items };
                                          items = [tmp23, tmp27];
                                          const tmp34 = metroImportDefault(metroImportAll, obj3);
                                          cResult[28] = tmp23;
                                          cResult[29] = tmp27;
                                          cResult[30] = tmp34;
                                          tmp31 = tmp34;
                                        }
                                      }
                                    }
                                    const obj4 = { thread, firstMessage, hasUnreads, parentChannel };
                                    const tmp30 = metroRequire(ForumPostListFooterDefault, obj4);
                                    cResult[23] = firstMessage;
                                    cResult[24] = hasUnreads;
                                    cResult[25] = parentChannel;
                                    cResult[26] = thread;
                                    cResult[27] = tmp30;
                                    tmp27 = tmp30;
                                  }
                                }
                                const obj5 = { style: tmp4.content, children: items1 };
                                items1 = [tmp10, tmp19];
                                const tmp26 = metroImportDefault(View, obj5);
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
              const tmp22 = metroRequire(ForumPostListBodyDefault, obj6);
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
      let tmp12Result = tmp7 || 0 !== arr.length;
      if (tmp12Result) {
        const obj7 = { style: tmp4.header, children: items2 };
        items2 = [tmp7 && metroRequire(ForumPostPinIconDefault, {})];
        let tmp17 = 0 !== arr.length;
        const tmp14 = tmp7 && metroRequire(ForumPostPinIconDefault, {});
        if (tmp17) {
          const obj8 = { appliedTags: arr, additionalTagsCount: tmp6, hasUnreads };
          tmp17 = metroRequire(ForumPostAppliedTags.ForumPostAppliedTagPills, obj8);
        }
        items2[1] = tmp17;
        tmp12Result = metroImportDefault(View, obj7);
      }
      cResult[2] = tmp6;
      cResult[3] = arr;
      cResult[4] = hasUnreads;
      cResult[5] = tmp7;
      cResult[6] = tmp4.header;
      cResult[7] = tmp12Result;
      tmp10 = tmp12Result;
    }
  : (arg0) => {
      let first;
      let firstMessage;
      let firstMessageLoaded;
      let hasUnreads;
      let isEmbed;
      let isLocalDeviceMedia;
      let isNew;
      let items;
      let items1;
      let items2;
      let media;
      let messageContent;
      let parentChannel;
      let senderModifier;
      let thread;
      let tmp5;
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
      const obj = ForumTagHooks;
      [first, tmp5] = obj.useSomeAppliedTags(thread, 2);
      const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
      let tmp7Result = hasFlagResult || 0 !== first.length;
      const obj2 = { style: tmp.content, children: items1 };
      if (tmp7Result) {
        const obj3 = { style: tmp.header, children: items };
        items = [hasFlagResult && metroRequire(ForumPostPinIconDefault, {})];
        let tmp14 = 0 !== first.length;
        const tmp11 = hasFlagResult && metroRequire(ForumPostPinIconDefault, {});
        if (tmp14) {
          const obj4 = { appliedTags: first, additionalTagsCount: tmp5, hasUnreads };
          tmp14 = metroRequire(ForumPostAppliedTags.ForumPostAppliedTagPills, obj4);
        }
        items[1] = tmp14;
        tmp7Result = metroImportDefault(View, obj3);
      }
      const obj5 = { children: items2 };
      items1 = [
        tmp7Result,
        metroRequire(ForumPostListBodyDefault, {
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
      items2 = [
        metroImportDefault(View, obj2),
        metroRequire(ForumPostListFooterDefault, { thread, firstMessage, hasUnreads, parentChannel }),
      ];
      return metroImportDefault(metroImportAll, obj5);
    };
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default tmp4;
