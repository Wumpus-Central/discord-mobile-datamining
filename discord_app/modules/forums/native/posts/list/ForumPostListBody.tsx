// discord_app/modules/forums/native/posts/list/ForumPostListBody.tsx
import c from "../../../../../../_runtime/00576_c.js";
import GameInvitesChannelUtils from "../../../../game_invite_channels/GameInvitesChannelUtils.tsx";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostMedia from "../ForumPostMedia.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostNewTagDefault from "../ForumPostNewTag.tsx";
import ForumPostTitleDefault from "../ForumPostTitle.tsx";
import ForumPostMessageContentDefault from "../ForumPostMessageContent.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(6961).ForumTimestampFormats;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({
  body: { display: "flex", flexDirection: "row", alignItems: "flex-start" },
  contentContainer: { flex: 1 },
  thumbnailContainer: { marginLeft: 12 },
  details: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  newTagContainer: { marginEnd: 8 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListBody.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostListBody(arg0) {
      const cResult = c.c(42);
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
      const isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
      if (cResult[0] === containerStyle) {
        if (cResult[1] === tmp4.body) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === isNew) {
          if (cResult[4] === tmp4.newTagContainer) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === hasUnreads) {
            if (cResult[7] === thread) {
              let tmp11 = cResult[8];
              let tmp12 = cResult[9];
            }
            if (cResult[10] === tmp4.details) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp11) {
                  if (cResult[13] === tmp12) {
                    let tmp18 = cResult[14];
                  }
                  if (cResult[15] === hasUnreads) {
                    if (cResult[16] === isGameInvitesPost) {
                      if (cResult[17] === thread) {
                        let tmp22 = cResult[18];
                      }
                      if (cResult[19] === firstMessage) {
                        if (cResult[20] === firstMessageLoaded) {
                          if (cResult[21] === hasUnreads) {
                            if (cResult[22] === messageContent) {
                              if (cResult[23] === senderModifier) {
                                let tmp26 = cResult[24];
                              }
                              if (cResult[25] === tmp4.contentContainer) {
                                if (cResult[26] === tmp18) {
                                  if (cResult[27] === tmp22) {
                                    if (cResult[28] === tmp26) {
                                      let tmp30 = cResult[29];
                                    }
                                    let blocked;
                                    if (firstMessage != null) {
                                      blocked = firstMessage.blocked;
                                    }
                                    if (cResult[30] === blocked) {
                                      let id;
                                      if (firstMessage != null) {
                                        id = firstMessage.id;
                                      }
                                      if (cResult[31] === id) {
                                        if (cResult[32] === isEmbed) {
                                          if (cResult[33] === isLocalDeviceMedia) {
                                            if (cResult[34] === media) {
                                              if (cResult[35] === tmp4.thumbnailContainer) {
                                                if (cResult[36] === thread) {
                                                  let tmp37 = cResult[37];
                                                }
                                                if (cResult[38] === tmp6) {
                                                  if (cResult[39] === tmp30) {
                                                    if (cResult[40] === tmp37) {
                                                      let tmp44 = cResult[41];
                                                    }
                                                    return tmp44;
                                                  }
                                                }
                                                const obj3 = { style: tmp6, children: null };
                                                const items = [tmp30, tmp37];
                                                obj3.children = items;
                                                const tmp47 = timestampProducer(View, obj3);
                                                cResult[38] = tmp6;
                                                cResult[39] = tmp30;
                                                cResult[40] = tmp37;
                                                cResult[41] = tmp47;
                                                tmp44 = tmp47;
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
                                    let tmp40Result = null;
                                    if (!blocked1) {
                                      tmp40Result = null;
                                      if (null != media) {
                                        const obj4 = {
                                          channel: thread,
                                          media,
                                          isEmbed,
                                          isLocalDeviceMedia,
                                          firstMessageId: null,
                                          containerStyle: null,
                                        };
                                        let id1;
                                        if (firstMessage != null) {
                                          id1 = firstMessage.id;
                                        }
                                        obj4.firstMessageId = id1;
                                        obj4.containerStyle = tmp4.thumbnailContainer;
                                        tmp40Result = hasOwnProperty(ForumPostMedia.ForumPostMediaThumbnail, obj4);
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
                                    cResult[37] = tmp40Result;
                                    tmp37 = tmp40Result;
                                  }
                                }
                              }
                              const obj5 = { style: tmp4.contentContainer, children: null };
                              const items1 = [tmp18, tmp22, tmp26];
                              obj5.children = items1;
                              const tmp33 = timestampProducer(View, obj5);
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
                  if (!isGameInvitesPost) {
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
            const obj8 = { style: tmp4.details, children: null };
            const items2 = [tmp7, tmp11, tmp12];
            obj8.children = items2;
            const tmp21 = timestampProducer(View, obj8);
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
        if (isNew) {
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
  : function ForumPostListBody(arg0) {
      ({ thread, firstMessage, hasUnreads, isNew, media } = arg0);
      ({ containerStyle, firstMessageLoaded, messageContent, isEmbed, isLocalDeviceMedia, senderModifier } = arg0);
      const tmp = closure_7();
      const isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
      const obj2 = { style: null, children: null };
      const items = [tmp.body, containerStyle];
      obj2.style = items;
      const obj3 = { style: tmp.contentContainer, children: null };
      const obj4 = { style: tmp.details, children: null };
      if (isNew) {
        const obj5 = { containerStyle: tmp.newTagContainer };
        isNew = hasOwnProperty(ForumPostNewTagDefault, obj5);
      }
      const items1 = [
        isNew,
        hasOwnProperty(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }),
        hasOwnProperty(ForumPostTimestampDefault, {
          thread,
          hasUnreads,
          format: ForumTimestampFormats.POSTED_DURATION_AGO,
        }),
      ];
      obj4.children = items1;
      const items2 = [timestampProducer(View, obj4), ,];
      let tmp9Result = !isGameInvitesPost;
      if (!isGameInvitesPost) {
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
      obj3.children = items2;
      const items3 = [timestampProducer(View, obj3)];
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
            firstMessageId: null,
            containerStyle: null,
          };
          let id;
          if (firstMessage != null) {
            id = firstMessage.id;
          }
          obj8.firstMessageId = id;
          obj8.containerStyle = tmp.thumbnailContainer;
          tmp9Result2 = hasOwnProperty(ForumPostMedia.ForumPostMediaThumbnail, obj8);
        }
      }
      items3[1] = tmp9Result2;
      obj2.children = items3;
      return timestampProducer(View, obj2);
    };
