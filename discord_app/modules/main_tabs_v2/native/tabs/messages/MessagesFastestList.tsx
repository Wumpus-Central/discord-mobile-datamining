// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import FastestListPropsPlaceholder from "../../../../fastest_list/props/FastestListPropsPlaceholder.tsx";
import FastestListItemTypeDefault from "../../../../fastest_list/FastestListItemType.tsx";
import MessagesItemChannel from "items/MessagesItemChannel.tsx";
import MessagesItemPlaceholderDefault from "items/MessagesItemPlaceholder.tsx";
import MessagesItemSuggestedFriend from "items/MessagesItemSuggestedFriend.tsx";
import useMessagesData from "useMessagesData.tsx";
import MessagesItemHappeningNow from "items/MessagesItemHappeningNow.tsx";
import MessagesItemEmptyState from "items/MessagesItemEmptyState.tsx";
import MessagesItemSeparator from "items/MessagesItemSeparator.tsx";
import MessagesItemSuggestedFriendsHeaderDefault from "items/MessagesItemSuggestedFriendsHeader.tsx";
import MessagesItemAddFriendsWidget from "items/MessagesItemAddFriendsWidget.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const MessagesItemSeparatorDefault = MessagesItemSeparator;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles(() => {
  const obj = { placeholder: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesFastestList.tsx");

export default noop.memo(
  noop.forwardRef(
    ReactCompilerGating.isReactCompilerEnabled()
      ? (listLeft, arg1) => {
          const cResult = listItemHeight(listLeft[5]).c(58);
          ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } = listLeft);
          ({ listItemSizes, listItemSuggestedFriendHeight } = listLeft);
          listLeft = listLeft.listLeft;
          const listRefHappeningNow = listLeft.listRefHappeningNow;
          const listTop = listLeft.listTop;
          ({ scrollIndicatorInsetBottom, scrollPosition } = listLeft);
          scrollPosition();
          const channels = data.channels;
          const channelFavorites = data.channelFavorites;
          const friendSuggestions = data.friendSuggestions;
          const renderHeader = data.renderHeader;
          const renderFooter = data.renderFooter;
          ({ sections, setAddedFriendSuggestions } = data);
          listRefHappeningNow.useRef(null);
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function c() {
              return {
                scrollToTop(arg0) {
                  const current = ref.current;
                  if (current != null) {
                    const obj = { section: 0, item: 0, animated: tmp };
                    current.scrollToLocation(obj);
                  }
                },
              };
            };
            const items = [];
            cResult[0] = fn;
            cResult[1] = items;
            tmp4 = fn;
            tmp5 = items;
          } else {
            [tmp4, tmp5] = cResult;
          }
          const imperativeHandle = listRefHappeningNow.useImperativeHandle(arg1, tmp4, tmp5);
          if (cResult[2] === channelFavorites) {
            if (cResult[3] === channels) {
              if (cResult[4] === friendSuggestions) {
                if (cResult[5] === listItemHeight) {
                  if (cResult[6] === listItemSuggestedFriendHeight) {
                    if (cResult[9] === listLeft) {
                      if (cResult[10] === listTop) {
                        if (cResult[11] === scrollPosition) {
                          let tmp8 = cResult[12];
                        }
                        const _Symbol = Symbol;
                        class L {
                          constructor(arg0, arg1, arg2) {
                            tmp = closure_2;
                            tmp2 = null;
                            if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                              tmp3 = arg2;
                              tmp4 = jsx;
                              tmp5 = closure_1;
                              obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                              tmp6 = scrollPosition;
                              obj.scrollPosition = scrollPosition;
                              obj.stickyAt = arg2;
                              tmp7 = listTop;
                              obj.stickyTop = listTop;
                              tmp8 = listLeft;
                              obj.stickyLeft = listLeft;
                              tmp2 = jsx(closure_1(tmp[11]), obj);
                            }
                            return tmp2;
                          }
                        }
                        if (tmp9 === Symbol.for("react.memo_cache_sentinel")) {
                          class N {
                            constructor(arg0) {
                              tmp = listItemHeight;
                              tmp2 = listLeft;
                              num = 0;
                              if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                                num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                              }
                              return num;
                            }
                          }
                          class L {
                            constructor(arg0, arg1, arg2) {
                              tmp = closure_2;
                              tmp2 = null;
                              if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                                tmp3 = arg2;
                                tmp4 = jsx;
                                tmp5 = closure_1;
                                obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                                tmp6 = scrollPosition;
                                obj.scrollPosition = scrollPosition;
                                obj.stickyAt = arg2;
                                tmp7 = listTop;
                                obj.stickyTop = listTop;
                                tmp8 = listLeft;
                                obj.stickyLeft = listLeft;
                                tmp2 = jsx(closure_1(tmp[11]), obj);
                              }
                              return tmp2;
                            }
                          }
                        } else {
                          class N {
                            constructor(arg0) {
                              tmp = listItemHeight;
                              tmp2 = listLeft;
                              num = 0;
                              if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                                num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                              }
                              return num;
                            }
                          }
                        }
                        if (cResult[14] !== tmp8) {
                          class N {
                            constructor(arg0) {
                              tmp = listItemHeight;
                              tmp2 = listLeft;
                              num = 0;
                              if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                                num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                              }
                              return num;
                            }
                          }
                          tmp12[0] = tmp8;
                          class L {
                            constructor(arg0, arg1, arg2) {
                              tmp = closure_2;
                              tmp2 = null;
                              if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                                tmp3 = arg2;
                                tmp4 = jsx;
                                tmp5 = closure_1;
                                obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                                tmp6 = scrollPosition;
                                obj.scrollPosition = scrollPosition;
                                obj.stickyAt = arg2;
                                tmp7 = listTop;
                                obj.stickyTop = listTop;
                                tmp8 = listLeft;
                                obj.stickyLeft = listLeft;
                                tmp2 = jsx(closure_1(tmp[11]), obj);
                              }
                              return tmp2;
                            }
                          }
                          cResult[14] = tmp8;
                          class X {
                            constructor() {
                              tmp3 = closure_2;
                              tmp = renderHeader;
                              tmp2 = closure_0;
                              if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                                tmp7 = jsx;
                                tmp8 = closure_1;
                                obj = { listRef: null };
                                tmp9 = listRefHappeningNow;
                                obj.listRef = listRefHappeningNow;
                                return jsx(closure_1(tmp3[12]), obj);
                              } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                return jsx(closure_1(tmp3[13]), {});
                              } else {
                                tmp4 = null;
                                return null;
                              }
                            }
                          }
                        } else {
                          class N {
                            constructor(arg0) {
                              tmp = listItemHeight;
                              tmp2 = listLeft;
                              num = 0;
                              if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                                num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                              }
                              return num;
                            }
                          }
                        }
                        if (cResult[16] === listRefHappeningNow) {
                          class N {
                            constructor(arg0) {
                              tmp = listItemHeight;
                              tmp2 = listLeft;
                              num = 0;
                              if (listLeft === listItemHeight(listLeft[6]).MessagesDataSections.SuggestedFriends) {
                                num = tmp(tmp2[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                              }
                              return num;
                            }
                          }
                          if (cResult[19] !== renderHeader) {
                            class B {
                              constructor() {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                tmp = renderHeader;
                                if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                                  tmp2Result = tmp2(tmp3[12]);
                                  return tmp2Result.getMessagesItemHappeningNowHeight();
                                } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                                  return tmp2(tmp3[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                                } else {
                                  num = 0;
                                  return 0;
                                }
                              }
                            }
                            class L {
                              constructor(arg0, arg1, arg2) {
                                tmp = closure_2;
                                tmp2 = null;
                                if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                                  tmp3 = arg2;
                                  tmp4 = jsx;
                                  tmp5 = closure_1;
                                  obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                                  tmp6 = scrollPosition;
                                  obj.scrollPosition = scrollPosition;
                                  obj.stickyAt = arg2;
                                  tmp7 = listTop;
                                  obj.stickyTop = listTop;
                                  tmp8 = listLeft;
                                  obj.stickyLeft = listLeft;
                                  tmp2 = jsx(closure_1(tmp[11]), obj);
                                }
                                return tmp2;
                              }
                            }
                            cResult[20] = B;
                          } else {
                            class B {
                              constructor() {
                                tmp2 = closure_0;
                                tmp3 = closure_2;
                                tmp = renderHeader;
                                if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                                  tmp2Result = tmp2(tmp3[12]);
                                  return tmp2Result.getMessagesItemHappeningNowHeight();
                                } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                                  return tmp2(tmp3[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                                } else {
                                  num = 0;
                                  return 0;
                                }
                              }
                            }
                          }
                          class L {
                            constructor(arg0, arg1, arg2) {
                              tmp = closure_2;
                              tmp2 = null;
                              if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                                tmp3 = arg2;
                                tmp4 = jsx;
                                tmp5 = closure_1;
                                obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                                tmp6 = scrollPosition;
                                obj.scrollPosition = scrollPosition;
                                obj.stickyAt = arg2;
                                tmp7 = listTop;
                                obj.stickyTop = listTop;
                                tmp8 = listLeft;
                                obj.stickyLeft = listLeft;
                                tmp2 = jsx(closure_1(tmp[11]), obj);
                              }
                              return tmp2;
                            }
                          }
                          let obj3 = { getComponent: X, getSize: B };
                          class X {
                            constructor() {
                              tmp3 = closure_2;
                              tmp = renderHeader;
                              tmp2 = closure_0;
                              if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                                tmp7 = jsx;
                                tmp8 = closure_1;
                                obj = { listRef: null };
                                tmp9 = listRefHappeningNow;
                                obj.listRef = listRefHappeningNow;
                                return jsx(closure_1(tmp3[12]), obj);
                              } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                return jsx(closure_1(tmp3[13]), {});
                              } else {
                                tmp4 = null;
                                return null;
                              }
                            }
                          }
                          cResult[21] = X;
                          cResult[22] = B;
                          cResult[23] = obj3;
                        }
                        class X {
                          constructor() {
                            tmp3 = closure_2;
                            tmp = renderHeader;
                            tmp2 = closure_0;
                            if (closure_0(closure_2[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                              tmp7 = jsx;
                              tmp8 = closure_1;
                              obj = { listRef: null };
                              tmp9 = listRefHappeningNow;
                              obj.listRef = listRefHappeningNow;
                              return jsx(closure_1(tmp3[12]), obj);
                            } else if (tmp2(tmp3[6]).MessagesDataHeader.EmptyState === tmp) {
                              tmp5 = jsx;
                              tmp6 = closure_1;
                              return jsx(closure_1(tmp3[13]), {});
                            } else {
                              tmp4 = null;
                              return null;
                            }
                          }
                        }
                        cResult[16] = listRefHappeningNow;
                        cResult[17] = renderHeader;
                        cResult[18] = X;
                      }
                    }
                    class L {
                      constructor(arg0, arg1, arg2) {
                        tmp = closure_2;
                        tmp2 = null;
                        if (listLeft === closure_0(closure_2[6]).MessagesDataSections.SuggestedFriends) {
                          tmp3 = arg2;
                          tmp4 = jsx;
                          tmp5 = closure_1;
                          obj = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                          tmp6 = scrollPosition;
                          obj.scrollPosition = scrollPosition;
                          obj.stickyAt = arg2;
                          tmp7 = listTop;
                          obj.stickyTop = listTop;
                          tmp8 = listLeft;
                          obj.stickyLeft = listLeft;
                          tmp2 = jsx(closure_1(tmp[11]), obj);
                        }
                        return tmp2;
                      }
                    }
                    cResult[9] = listLeft;
                    cResult[11] = scrollPosition;
                    cResult[12] = L;
                    tmp8 = L;
                  }
                }
              }
            }
          }
          const fn2 = function u(arg0, row) {
            if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
              const obj2 = { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row };
              return jsx(MessagesItemChannel.MessagesItemChannelFast, {
                channelId: channelFavorites[row].channelId,
                placeholderHeight: listItemHeight,
                row,
              });
            } else if (useMessagesData.MessagesDataSections.Channels === arg0) {
              const obj3 = { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row };
              return jsx(MessagesItemChannel.MessagesItemChannelFast, {
                channelId: channels[row].channelId,
                placeholderHeight: listItemHeight,
                row,
              });
            } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
              return jsx(MessagesItemSeparatorDefault, {});
            } else if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
              const obj4 = {
                suggestedFriend: friendSuggestions[row],
                onAddFriendSuggestions: setAddedFriendSuggestions,
              };
              const obj5 = { height: listItemSuggestedFriendHeight };
              const merged = Object.assign(obj4);
              return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendFast, {
                height: listItemSuggestedFriendHeight,
              });
            } else if (useMessagesData.MessagesDataSections.Placeholders === arg0) {
              const obj = { row, height: listItemHeight };
              return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
              throw error;
            }
          };
          cResult[2] = channelFavorites;
          cResult[3] = channels;
          cResult[4] = friendSuggestions;
          cResult[5] = listItemHeight;
          cResult[6] = listItemSuggestedFriendHeight;
          cResult[7] = setAddedFriendSuggestions;
          cResult[8] = fn2;
          let obj = listItemHeight(listLeft[5]);
        }
      : (listItemSizes, arg1) => {
          ({ data, listItemHeight } = listItemSizes);
          listItemSizes = listItemSizes.listItemSizes;
          const listItemSuggestedFriendHeight = listItemSizes.listItemSuggestedFriendHeight;
          const listLeft = listItemSizes.listLeft;
          const listRefHappeningNow = listItemSizes.listRefHappeningNow;
          const listTop = listItemSizes.listTop;
          const scrollPosition = listItemSizes.scrollPosition;
          ({ accessibilityLabel, handleScrollAnimated, insetEnd, scrollIndicatorInsetBottom } = listItemSizes);
          let tmp = listTop();
          closure_7 = tmp;
          const channels = data.channels;
          const channelFavorites = data.channelFavorites;
          const friendSuggestions = data.friendSuggestions;
          const renderHeader = data.renderHeader;
          const renderFooter = data.renderFooter;
          const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
          const ref = listLeft.useRef(null);
          const imperativeHandle = listLeft.useImperativeHandle(
            arg1,
            () => ({
              scrollToTop() {
                let flag = arg0;
                if (arg0 === undefined) {
                  flag = false;
                }
                const current = ref.current;
                if (current != null) {
                  const obj = { section: 0, item: 0, animated: flag };
                  current.scrollToLocation(obj);
                }
              },
            }),
            [],
          );
          const items = [
            channelFavorites,
            listItemHeight,
            channels,
            friendSuggestions,
            setAddedFriendSuggestions,
            listItemSuggestedFriendHeight,
          ];
          const items1 = [listTop, listLeft, scrollPosition];
          const callback = listLeft.useCallback((arg0, row) => {
            if (useMessagesData.MessagesDataSections.FavoriteChannels === arg0) {
              const obj2 = { channelId: channelFavorites[row].channelId, placeholderHeight: listItemHeight, row };
              return jsx(MessagesItemChannel.MessagesItemChannelFast, {
                channelId: channelFavorites[row].channelId,
                placeholderHeight: listItemHeight,
                row,
              });
            } else if (useMessagesData.MessagesDataSections.Channels === arg0) {
              const obj3 = { channelId: channels[row].channelId, placeholderHeight: listItemHeight, row };
              return jsx(MessagesItemChannel.MessagesItemChannelFast, {
                channelId: channels[row].channelId,
                placeholderHeight: listItemHeight,
                row,
              });
            } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
              return jsx(MessagesItemSeparatorDefault, {});
            } else if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
              const obj4 = {
                suggestedFriend: friendSuggestions[row],
                onAddFriendSuggestions: setAddedFriendSuggestions,
              };
              const obj5 = { height: listItemSuggestedFriendHeight };
              const merged = Object.assign(obj4);
              return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendFast, {
                height: listItemSuggestedFriendHeight,
              });
            } else if (useMessagesData.MessagesDataSections.Placeholders === arg0) {
              const obj = { row, height: listItemHeight };
              return jsx(MessagesItemPlaceholderDefault, { row, height: listItemHeight });
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
              throw error;
            }
          }, items);
          const memo = listLeft.useMemo(
            () => ({
              getComponent(arg0, arg1, stickyAt) {
                let tmp2 = null;
                if (arg0 === listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataSections.SuggestedFriends) {
                  const obj = { scrollPosition, stickyAt, stickyTop, stickyLeft };
                  tmp2 = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[11]), obj);
                }
                return tmp2;
              },
              getSize(arg0) {
                let num = 0;
                if (arg0 === listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataSections.SuggestedFriends) {
                  num = listItemHeight(listItemSuggestedFriendHeight[11]).MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                }
                return num;
              },
            }),
            items1,
          );
          const items2 = [renderHeader, listRefHappeningNow];
          const memo1 = listLeft.useMemo(
            () => ({
              getComponent() {
                if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                  const obj = { listRef };
                  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[12]), obj);
                } else if (
                  listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.EmptyState === renderHeader
                ) {
                  return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[13]), {});
                } else {
                  return null;
                }
              },
              getSize() {
                if (listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.HappeningNow === renderHeader) {
                  return listItemHeight(listItemSuggestedFriendHeight[12]).getMessagesItemHappeningNowHeight();
                } else if (
                  listItemHeight(listItemSuggestedFriendHeight[6]).MessagesDataHeader.EmptyState === renderHeader
                ) {
                  return listItemHeight(listItemSuggestedFriendHeight[13]).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
                } else {
                  return 0;
                }
              },
            }),
            items2,
          );
          const items3 = [renderFooter];
          const memo2 = listLeft.useMemo(
            () => ({
              getComponent() {
                let tmp = null;
                if (renderFooter) {
                  tmp = listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[14]), {});
                }
                return tmp;
              },
              getSize() {
                let num = 0;
                if (renderFooter) {
                  num = listItemHeight(listItemSuggestedFriendHeight[14]).MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT;
                }
                return num;
              },
            }),
            items3,
          );
          const items4 = [listItemHeight, listItemSuggestedFriendHeight];
          const items5 = [channels, channelFavorites];
          const callback1 = listLeft.useCallback((arg0) => {
            if (useMessagesData.MessagesDataSections.FavoriteChannels !== arg0) {
              if (useMessagesData.MessagesDataSections.Channels !== arg0) {
                if (useMessagesData.MessagesDataSections.Placeholders !== arg0) {
                  if (useMessagesData.MessagesDataSections.SuggestedFriends === arg0) {
                    return listItemSuggestedFriendHeight;
                  } else if (useMessagesData.MessagesDataSections.Separator === arg0) {
                    return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                  } else {
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const error = new Error("Invalid section " + arg0 + " in Messages renderItem");
                    throw error;
                  }
                }
              }
            }
            return listItemHeight;
          }, items4);
          const items6 = [tmp, listItemSizes];
          const callback2 = listLeft.useCallback((arg0, arg1, arg2) => {
            if (FastestListItemTypeDefault.SECTION_HEADER !== arg0) {
              if (FastestListItemTypeDefault.SECTION_FOOTER !== arg0) {
                if (FastestListItemTypeDefault.ITEM === arg0) {
                  if (useMessagesData.MessagesDataSections.FavoriteChannels === arg1) {
                    return channelFavorites[arg2].channelId;
                  } else if (useMessagesData.MessagesDataSections.Channels === arg1) {
                    return channels[arg2].channelId;
                  }
                }
              }
            }
          }, items5);
          const memo3 = listLeft.useMemo(() => {
            const obj = {
              listHeader: {
                type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
                colorHex: closure_7.placeholder.backgroundColor,
                shape: "rect",
                borderRadius: nativeDefault.radii.lg,
                paddingHorizontal: nativeDefault.space.PX_8,
                paddingVertical: nativeDefault.space.PX_4,
              },
              sectionItem: null,
            };
            const obj2 = {
              type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.SHAPE,
              colorHex: closure_7.placeholder.backgroundColor,
              shape: "rect",
              borderRadius: nativeDefault.radii.lg,
              paddingHorizontal: nativeDefault.space.PX_8,
              paddingVertical: nativeDefault.space.PX_4,
            };
            obj.sectionItem = {
              type: FastestListPropsPlaceholder.FastestListPropsPlaceholderType.FEED_ITEM,
              colorHex: closure_7.placeholder.backgroundColor,
              labelPadding: nativeDefault.space.PX_4,
              labelSize: listItemSizes.label,
              labelSecondarySize: listItemSizes.labelSecondary,
              padding: nativeDefault.space.PX_16,
              shape: "circle",
              shapeSize: listItemSizes.avatar,
            };
            return obj;
          }, items6);
          return listRefHappeningNow(listItemSizes(listItemSuggestedFriendHeight[17]), {
            insetEnd,
            accessibilityLabel,
            estimatedListSize: "windowSize",
            keyExtractor: callback2,
            itemSize: callback1,
            listId: "dm-messages-list",
            listFooterSize: memo2.getSize,
            listFooterAlwaysMounted: true,
            listHeaderSize: memo1.getSize,
            listHeaderAlwaysMounted: true,
            placeholderConfig: memo3,
            ref,
            renderItem: callback,
            renderListFooter: memo2.getComponent,
            renderListHeader: memo1.getComponent,
            renderSectionHeader: memo.getComponent,
            scrollIndicatorInsetEnd: scrollIndicatorInsetBottom,
            scrollReporting: "animatedCallbacks",
            scrollHandlerAnimated: handleScrollAnimated,
            sections: data.sections,
            sectionHeaderSize: memo.getSize,
          });
        },
  ),
);
