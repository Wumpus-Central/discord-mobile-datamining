// discord_app/modules/forums/native/posts/list/ForumPostListBody.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import GameInvitesChannelUtils from "../../../../game_invite_channels/GameInvitesChannelUtils.tsx";
import ForumConstants from "../../../ForumConstants.tsx";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostMedia from "../ForumPostMedia.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostNewTagDefault from "../ForumPostNewTag.tsx";
import ForumPostTitleDefault from "../ForumPostTitle.tsx";
import ForumPostMessageContentDefault from "../ForumPostMessageContent.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  body: { display: "flex", flexDirection: "row", alignItems: "flex-start" },
  contentContainer: { flex: 1 },
  thumbnailContainer: { marginLeft: 12 },
  details: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  newTagContainer: { marginEnd: 8 },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let containerStyle;
      let firstMessage;
      let firstMessageLoaded;
      let hasUnreads;
      let id1;
      let isEmbed;
      let isLocalDeviceMedia;
      let isNew;
      let items;
      let items1;
      let items2;
      let media;
      let messageContent;
      let senderModifier;
      let thread;
      const obj = react2;
      const cResult = obj.c(42);
      ({
        containerStyle,
        thread,
        firstMessage,
        hasUnreads,
        isNew,
        firstMessageLoaded,
        messageContent,
        media,
        isEmbed,
        isLocalDeviceMedia,
        senderModifier,
      } = arg0);
      const tmp4 = closure_7();
      const obj2 = GameInvitesChannelUtils;
      const isGameInvitesPost = obj2.useIsGameInvitesPost(thread);
      if (cResult[0] === containerStyle) {
        let tmp6;
        if (cResult[1] === tmp4.body) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === isNew) {
          let tmp7;
          if (cResult[4] === tmp4.newTagContainer) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === hasUnreads) {
            let tmp11;
            let tmp12;
            if (cResult[7] === thread) {
              tmp11 = cResult[8];
              tmp12 = cResult[9];
            }
            if (cResult[10] === tmp4.details) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp11) {
                  let tmp18;
                  if (cResult[13] === tmp12) {
                    tmp18 = cResult[14];
                  }
                  if (cResult[15] === hasUnreads) {
                    if (cResult[16] === isGameInvitesPost) {
                      let tmp22;
                      if (cResult[17] === thread) {
                        tmp22 = cResult[18];
                      }
                      if (cResult[19] === firstMessage) {
                        if (cResult[20] === firstMessageLoaded) {
                          if (cResult[21] === hasUnreads) {
                            if (cResult[22] === messageContent) {
                              let tmp26;
                              if (cResult[23] === senderModifier) {
                                tmp26 = cResult[24];
                              }
                              if (cResult[25] === tmp4.contentContainer) {
                                if (cResult[26] === tmp18) {
                                  if (cResult[27] === tmp22) {
                                    let tmp30;
                                    if (cResult[28] === tmp26) {
                                      tmp30 = cResult[29];
                                    }
                                    let blocked;
                                    const tmp34 = cResult[30];
                                    if (firstMessage != null) {
                                      blocked = firstMessage.blocked;
                                    }
                                    if (tmp34 === blocked) {
                                      let id;
                                      const tmp37 = cResult[31];
                                      if (firstMessage != null) {
                                        id = firstMessage.id;
                                      }
                                      if (tmp37 === id) {
                                        if (cResult[32] === isEmbed) {
                                          if (cResult[33] === isLocalDeviceMedia) {
                                            if (cResult[34] === media) {
                                              if (cResult[35] === tmp4.thumbnailContainer) {
                                                let tmp39;
                                                if (cResult[36] === thread) {
                                                  tmp39 = cResult[37];
                                                }
                                                if (cResult[38] === tmp6) {
                                                  if (cResult[39] === tmp30) {
                                                    let tmp46;
                                                    if (cResult[40] === tmp39) {
                                                      tmp46 = cResult[41];
                                                    }
                                                    return tmp46;
                                                  }
                                                }
                                                const obj3 = { style: tmp6, children: items };
                                                items = [tmp30, tmp39];
                                                const tmp49 = metroRequire(View, obj3);
                                                cResult[38] = tmp6;
                                                cResult[39] = tmp30;
                                                cResult[40] = tmp39;
                                                cResult[41] = tmp49;
                                                tmp46 = tmp49;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    let blocked1;
                                    if (firstMessage != null) {
                                      blocked1 = firstMessage.blocked;
                                    }
                                    let tmp42Result = null;
                                    if (!blocked1) {
                                      tmp42Result = null;
                                      if (null != media) {
                                        const obj4 = {
                                          channel: thread,
                                          media,
                                          isEmbed,
                                          isLocalDeviceMedia,
                                          firstMessageId: id1,
                                          containerStyle: tmp4.thumbnailContainer,
                                        };
                                        id1 = undefined;
                                        const ForumPostMediaThumbnail = ForumPostMedia.ForumPostMediaThumbnail;
                                        if (firstMessage != null) {
                                          id1 = firstMessage.id;
                                        }
                                        tmp42Result = hasOwnProperty(ForumPostMediaThumbnail, obj4);
                                      }
                                    }
                                    let blocked2;
                                    if (firstMessage != null) {
                                      blocked2 = firstMessage.blocked;
                                    }
                                    cResult[30] = blocked2;
                                    let id2;
                                    if (firstMessage != null) {
                                      id2 = firstMessage.id;
                                    }
                                    cResult[31] = id2;
                                    cResult[32] = isEmbed;
                                    cResult[33] = isLocalDeviceMedia;
                                    cResult[34] = media;
                                    cResult[35] = tmp4.thumbnailContainer;
                                    cResult[36] = thread;
                                    cResult[37] = tmp42Result;
                                    tmp39 = tmp42Result;
                                  }
                                }
                              }
                              const obj5 = { style: tmp4.contentContainer, children: items1 };
                              items1 = [tmp18, tmp22, tmp26];
                              const tmp33 = metroRequire(View, obj5);
                              cResult[25] = tmp4.contentContainer;
                              cResult[26] = tmp18;
                              cResult[27] = tmp22;
                              cResult[28] = tmp26;
                              cResult[29] = tmp33;
                              tmp30 = tmp33;
                            }
                          }
                        }
                      }
                      const obj6 = {
                        messageContent,
                        message: firstMessage,
                        isMessageDeleted: false,
                        messageLoaded: firstMessageLoaded,
                        hasUnreads,
                        senderModifier,
                      };
                      const tmp29 = hasOwnProperty(ForumPostMessageContentDefault, obj6);
                      cResult[19] = firstMessage;
                      cResult[20] = firstMessageLoaded;
                      cResult[21] = hasUnreads;
                      cResult[22] = messageContent;
                      cResult[23] = senderModifier;
                      cResult[24] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                  let tmp23 = !isGameInvitesPost;
                  if (tmp23) {
                    const obj7 = { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads };
                    tmp23 = hasOwnProperty(ForumPostTitleDefault, obj7);
                  }
                  cResult[15] = hasUnreads;
                  cResult[16] = isGameInvitesPost;
                  cResult[17] = thread;
                  cResult[18] = tmp23;
                  tmp22 = tmp23;
                }
              }
            }
            const obj8 = { style: tmp4.details, children: items2 };
            items2 = [tmp7, tmp11, tmp12];
            const tmp21 = metroRequire(View, obj8);
            cResult[10] = tmp4.details;
            cResult[11] = tmp7;
            cResult[12] = tmp11;
            cResult[13] = tmp12;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          }
          const obj9 = { thread, hasUnreads };
          const tmp14 = hasOwnProperty(ForumPostUsername.ForumPostAuthor, obj9);
          const obj10 = { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO };
          const tmp17 = hasOwnProperty(ForumPostTimestampDefault, obj10);
          cResult[6] = hasUnreads;
          cResult[7] = thread;
          cResult[8] = tmp14;
          cResult[9] = tmp17;
          tmp12 = tmp17;
          tmp11 = tmp14;
        }
        let tmp8 = isNew;
        if (tmp8) {
          const obj11 = { containerStyle: tmp4.newTagContainer };
          tmp8 = hasOwnProperty(ForumPostNewTagDefault, obj11);
        }
        cResult[3] = isNew;
        cResult[4] = tmp4.newTagContainer;
        cResult[5] = tmp8;
        tmp7 = tmp8;
      }
      const items3 = [tmp4.body, containerStyle];
      cResult[0] = containerStyle;
      cResult[1] = tmp4.body;
      cResult[2] = items3;
      tmp6 = items3;
    }
  : (arg0) => {
      let containerStyle;
      let firstMessage;
      let firstMessageLoaded;
      let hasUnreads;
      let id;
      let isEmbed;
      let isLocalDeviceMedia;
      let isNew;
      let items;
      let items1;
      let items2;
      let items3;
      let media;
      let messageContent;
      let senderModifier;
      let thread;
      ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
      ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
      const tmp = closure_7();
      const obj = GameInvitesChannelUtils;
      const isGameInvitesPost = obj.useIsGameInvitesPost(thread);
      const obj2 = { style: items, children: items3 };
      items = [tmp.body, containerStyle];
      const obj3 = { style: tmp.contentContainer, children: items2 };
      const obj4 = { style: tmp.details, children: items1 };
      if (isNew) {
        const obj5 = { containerStyle: tmp.newTagContainer };
        isNew = hasOwnProperty(ForumPostNewTagDefault, obj5);
      }
      items1 = [isNew, hasOwnProperty(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads })];
      const obj6 = { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO };
      items1[2] = hasOwnProperty(ForumPostTimestampDefault, obj6);
      items2 = [metroRequire(View, obj4), ,];
      let tmp9Result = !isGameInvitesPost;
      if (tmp9Result) {
        const obj7 = { title: thread.name, lineClamp: 2, ellipsizeMode: "tail", hasUnreads };
        tmp9Result = hasOwnProperty(ForumPostTitleDefault, obj7);
      }
      items2[1] = tmp9Result;
      items2[2] = hasOwnProperty(ForumPostMessageContentDefault, {
        messageContent,
        message: firstMessage,
        isMessageDeleted: false,
        messageLoaded: firstMessageLoaded,
        hasUnreads,
        senderModifier,
      });
      items3 = [metroRequire(View, obj3)];
      let blocked;
      if (firstMessage != null) {
        blocked = firstMessage.blocked;
      }
      let tmp9Result2 = null;
      if (!blocked) {
        tmp9Result2 = null;
        if (null != media) {
          const obj8 = {
            channel: thread,
            media,
            isEmbed,
            isLocalDeviceMedia,
            firstMessageId: id,
            containerStyle: tmp.thumbnailContainer,
          };
          id = undefined;
          const ForumPostMediaThumbnail = ForumPostMedia.ForumPostMediaThumbnail;
          if (firstMessage != null) {
            id = firstMessage.id;
          }
          tmp9Result2 = hasOwnProperty(ForumPostMediaThumbnail, obj8);
        }
      }
      items3[1] = tmp9Result2;
      return metroRequire(View, obj2);
    };
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default tmp4;
