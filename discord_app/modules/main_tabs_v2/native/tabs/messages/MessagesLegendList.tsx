// discord_app/modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx
import MessagesItemChannel from "items/MessagesItemChannel.tsx";
import MessagesItemPlaceholderDefault from "items/MessagesItemPlaceholder.tsx";
import MessagesItemSuggestedFriend from "items/MessagesItemSuggestedFriend.tsx";
import useMessagesData from "useMessagesData.tsx";
import MessagesItemHappeningNowDefault from "items/MessagesItemHappeningNow.tsx";
import MessagesItemEmptyStateDefault from "items/MessagesItemEmptyState.tsx";
import MessagesItemSeparator from "items/MessagesItemSeparator.tsx";
import MessagesItemSuggestedFriendsHeader from "items/MessagesItemSuggestedFriendsHeader.tsx";
import MessagesItemAddFriendsWidgetDefault from "items/MessagesItemAddFriendsWidget.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const MessagesItemSeparatorDefault = MessagesItemSeparator;
const MessagesItemSuggestedFriendsHeaderDefault = MessagesItemSuggestedFriendsHeader;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesLegendList.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MessagesLegendList(listItemSuggestedFriendHeight) {
        const cResult = listItemHeight(listLeft[3]).c(46);
        ({ accessibilityLabel, data, handleScrollAnimated, insetEnd, listItemHeight } = listItemSuggestedFriendHeight);
        listItemSuggestedFriendHeight = listItemSuggestedFriendHeight.listItemSuggestedFriendHeight;
        listLeft = listItemSuggestedFriendHeight.listLeft;
        ({ listRefHappeningNow, listTop } = listItemSuggestedFriendHeight);
        ({ recycleItems, scrollIndicatorInsetBottom, scrollPosition } = listItemSuggestedFriendHeight);
        const friendSuggestions = data.friendSuggestions;
        ({ renderHeader, renderFooter, setAddedFriendSuggestions } = data);
        let obj = listItemHeight(listLeft[3]);
        if (cResult[0] !== listItemHeight) {
          let obj3 = { listItemHeight };
          cResult[0] = listItemHeight;
          cResult[1] = obj3;
          let tmp5 = obj3;
        } else {
          tmp5 = cResult[1];
        }
        const tmp7 = listItemSuggestedFriendHeight(listLeft[4])(data, tmp5);
        ({ listData, friendsHeaderIndex, friendsHeaderOffset } = tmp7);
        const listHeaderHeight = tmp7.listHeaderHeight;
        if (cResult[2] !== listHeaderHeight) {
          const fn = function b() {
            return {
              scrollToTop(arg0) {
                const current = ref.current;
                if (current != null) {
                  const obj = { offset, animated: tmp };
                  current.scrollToOffset(obj);
                }
                tmp = undefined !== arg0 && arg0;
              },
            };
          };
          const items = [listHeaderHeight];
          cResult[2] = listHeaderHeight;
          cResult[3] = fn;
          cResult[4] = items;
          let tmp9 = items;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[3];
          tmp9 = cResult[4];
        }
        const imperativeHandle = listTop.useImperativeHandle(listItemSuggestedFriendHeight.ref, tmp8, tmp9);
        if (cResult[5] === friendSuggestions) {
          if (cResult[6] === friendsHeaderOffset) {
            if (cResult[7] === listItemHeight) {
              if (cResult[8] === listItemSuggestedFriendHeight) {
                if (cResult[9] === listLeft) {
                  if (cResult[10] === listTop) {
                    if (cResult[11] === scrollPosition) {
                      if (cResult[12] === setAddedFriendSuggestions) {
                        let tmp11 = cResult[13];
                      }
                      const _Symbol = Symbol;
                      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                        class O {
                          constructor(arg0) {
                            return listItemSuggestedFriendHeight.kind;
                          }
                        }
                        cResult[14] = O;
                      } else {
                        class O {
                          constructor(arg0) {
                            return listItemSuggestedFriendHeight.kind;
                          }
                        }
                      }
                      if (cResult[15] === listItemHeight) {
                        class O {
                          constructor(arg0) {
                            return listItemSuggestedFriendHeight.kind;
                          }
                        }
                        if (cResult[18] !== friendSuggestions) {
                          class B {
                            constructor(arg0) {
                              kind = listItemSuggestedFriendHeight.kind;
                              if ("favorite" === kind) {
                                tmp8 = globalThis;
                                _HermesInternal4 = HermesInternal;
                                str5 = "fav:";
                                return "fav:" + listItemSuggestedFriendHeight.channelId;
                              } else {
                                str6 = "channel";
                                if ("channel" === kind) {
                                  tmp7 = globalThis;
                                  _HermesInternal3 = HermesInternal;
                                  str4 = "ch:";
                                  return "ch:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str7 = "separator";
                                  if ("separator" === kind) {
                                    return "separator";
                                  } else {
                                    str8 = "friendsHeader";
                                    if ("friendsHeader" === kind) {
                                      return "friendsHeader";
                                    } else {
                                      str9 = "suggestedFriend";
                                      if ("suggestedFriend" === kind) {
                                        tmp2 = friendSuggestions;
                                        tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                        tmp4 = null;
                                        id = undefined;
                                        if (tmp3 != null) {
                                          id = tmp3.user.id;
                                        }
                                        if (id == null) {
                                          id = listItemSuggestedFriendHeight.row;
                                        }
                                        tmp6 = globalThis;
                                        _HermesInternal2 = HermesInternal;
                                        str3 = "sf:";
                                        return "sf:" + id;
                                      } else {
                                        str = "placeholder";
                                        if ("placeholder" === kind) {
                                          tmp = globalThis;
                                          _HermesInternal = HermesInternal;
                                          str2 = "placeholder:";
                                          return "placeholder:" + listItemSuggestedFriendHeight.row;
                                        } else {
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          cResult[18] = friendSuggestions;
                          cResult[19] = B;
                        } else {
                          class B {
                            constructor(arg0) {
                              kind = listItemSuggestedFriendHeight.kind;
                              if ("favorite" === kind) {
                                tmp8 = globalThis;
                                _HermesInternal4 = HermesInternal;
                                str5 = "fav:";
                                return "fav:" + listItemSuggestedFriendHeight.channelId;
                              } else {
                                str6 = "channel";
                                if ("channel" === kind) {
                                  tmp7 = globalThis;
                                  _HermesInternal3 = HermesInternal;
                                  str4 = "ch:";
                                  return "ch:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str7 = "separator";
                                  if ("separator" === kind) {
                                    return "separator";
                                  } else {
                                    str8 = "friendsHeader";
                                    if ("friendsHeader" === kind) {
                                      return "friendsHeader";
                                    } else {
                                      str9 = "suggestedFriend";
                                      if ("suggestedFriend" === kind) {
                                        tmp2 = friendSuggestions;
                                        tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                        tmp4 = null;
                                        id = undefined;
                                        if (tmp3 != null) {
                                          id = tmp3.user.id;
                                        }
                                        if (id == null) {
                                          id = listItemSuggestedFriendHeight.row;
                                        }
                                        tmp6 = globalThis;
                                        _HermesInternal2 = HermesInternal;
                                        str3 = "sf:";
                                        return "sf:" + id;
                                      } else {
                                        str = "placeholder";
                                        if ("placeholder" === kind) {
                                          tmp = globalThis;
                                          _HermesInternal = HermesInternal;
                                          str2 = "placeholder:";
                                          return "placeholder:" + listItemSuggestedFriendHeight.row;
                                        } else {
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (listItemHeight(tmp2[10]).MessagesDataHeader.HappeningNow === renderHeader) {
                          class B {
                            constructor(arg0) {
                              kind = listItemSuggestedFriendHeight.kind;
                              if ("favorite" === kind) {
                                tmp8 = globalThis;
                                _HermesInternal4 = HermesInternal;
                                str5 = "fav:";
                                return "fav:" + listItemSuggestedFriendHeight.channelId;
                              } else {
                                str6 = "channel";
                                if ("channel" === kind) {
                                  tmp7 = globalThis;
                                  _HermesInternal3 = HermesInternal;
                                  str4 = "ch:";
                                  return "ch:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str7 = "separator";
                                  if ("separator" === kind) {
                                    return "separator";
                                  } else {
                                    str8 = "friendsHeader";
                                    if ("friendsHeader" === kind) {
                                      return "friendsHeader";
                                    } else {
                                      str9 = "suggestedFriend";
                                      if ("suggestedFriend" === kind) {
                                        tmp2 = friendSuggestions;
                                        tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                        tmp4 = null;
                                        id = undefined;
                                        if (tmp3 != null) {
                                          id = tmp3.user.id;
                                        }
                                        if (id == null) {
                                          id = listItemSuggestedFriendHeight.row;
                                        }
                                        tmp6 = globalThis;
                                        _HermesInternal2 = HermesInternal;
                                        str3 = "sf:";
                                        return "sf:" + id;
                                      } else {
                                        str = "placeholder";
                                        if ("placeholder" === kind) {
                                          tmp = globalThis;
                                          _HermesInternal = HermesInternal;
                                          str2 = "placeholder:";
                                          return "placeholder:" + listItemSuggestedFriendHeight.row;
                                        } else {
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          class B {
                            constructor(arg0) {
                              kind = listItemSuggestedFriendHeight.kind;
                              if ("favorite" === kind) {
                                tmp8 = globalThis;
                                _HermesInternal4 = HermesInternal;
                                str5 = "fav:";
                                return "fav:" + listItemSuggestedFriendHeight.channelId;
                              } else {
                                str6 = "channel";
                                if ("channel" === kind) {
                                  tmp7 = globalThis;
                                  _HermesInternal3 = HermesInternal;
                                  str4 = "ch:";
                                  return "ch:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str7 = "separator";
                                  if ("separator" === kind) {
                                    return "separator";
                                  } else {
                                    str8 = "friendsHeader";
                                    if ("friendsHeader" === kind) {
                                      return "friendsHeader";
                                    } else {
                                      str9 = "suggestedFriend";
                                      if ("suggestedFriend" === kind) {
                                        tmp2 = friendSuggestions;
                                        tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                        tmp4 = null;
                                        id = undefined;
                                        if (tmp3 != null) {
                                          id = tmp3.user.id;
                                        }
                                        if (id == null) {
                                          id = listItemSuggestedFriendHeight.row;
                                        }
                                        tmp6 = globalThis;
                                        _HermesInternal2 = HermesInternal;
                                        str3 = "sf:";
                                        return "sf:" + id;
                                      } else {
                                        str = "placeholder";
                                        if ("placeholder" === kind) {
                                          tmp = globalThis;
                                          _HermesInternal = HermesInternal;
                                          str2 = "placeholder:";
                                          return "placeholder:" + listItemSuggestedFriendHeight.row;
                                        } else {
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (listItemHeight(tmp2[10]).MessagesDataHeader.EmptyState === renderHeader) {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                              class B {
                                constructor(arg0) {
                                  kind = listItemSuggestedFriendHeight.kind;
                                  if ("favorite" === kind) {
                                    tmp8 = globalThis;
                                    _HermesInternal4 = HermesInternal;
                                    str5 = "fav:";
                                    return "fav:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str6 = "channel";
                                    if ("channel" === kind) {
                                      tmp7 = globalThis;
                                      _HermesInternal3 = HermesInternal;
                                      str4 = "ch:";
                                      return "ch:" + listItemSuggestedFriendHeight.channelId;
                                    } else {
                                      str7 = "separator";
                                      if ("separator" === kind) {
                                        return "separator";
                                      } else {
                                        str8 = "friendsHeader";
                                        if ("friendsHeader" === kind) {
                                          return "friendsHeader";
                                        } else {
                                          str9 = "suggestedFriend";
                                          if ("suggestedFriend" === kind) {
                                            tmp2 = friendSuggestions;
                                            tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                            tmp4 = null;
                                            id = undefined;
                                            if (tmp3 != null) {
                                              id = tmp3.user.id;
                                            }
                                            if (id == null) {
                                              id = listItemSuggestedFriendHeight.row;
                                            }
                                            tmp6 = globalThis;
                                            _HermesInternal2 = HermesInternal;
                                            str3 = "sf:";
                                            return "sf:" + id;
                                          } else {
                                            str = "placeholder";
                                            if ("placeholder" === kind) {
                                              tmp = globalThis;
                                              _HermesInternal = HermesInternal;
                                              str2 = "placeholder:";
                                              return "placeholder:" + listItemSuggestedFriendHeight.row;
                                            } else {
                                              return;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const tmp18 = scrollPosition(tmp6(tmp2[12]), {});
                              cResult[22] = tmp18;
                            } else {
                              class B {
                                constructor(arg0) {
                                  kind = listItemSuggestedFriendHeight.kind;
                                  if ("favorite" === kind) {
                                    tmp8 = globalThis;
                                    _HermesInternal4 = HermesInternal;
                                    str5 = "fav:";
                                    return "fav:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str6 = "channel";
                                    if ("channel" === kind) {
                                      tmp7 = globalThis;
                                      _HermesInternal3 = HermesInternal;
                                      str4 = "ch:";
                                      return "ch:" + listItemSuggestedFriendHeight.channelId;
                                    } else {
                                      str7 = "separator";
                                      if ("separator" === kind) {
                                        return "separator";
                                      } else {
                                        str8 = "friendsHeader";
                                        if ("friendsHeader" === kind) {
                                          return "friendsHeader";
                                        } else {
                                          str9 = "suggestedFriend";
                                          if ("suggestedFriend" === kind) {
                                            tmp2 = friendSuggestions;
                                            tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                            tmp4 = null;
                                            id = undefined;
                                            if (tmp3 != null) {
                                              id = tmp3.user.id;
                                            }
                                            if (id == null) {
                                              id = listItemSuggestedFriendHeight.row;
                                            }
                                            tmp6 = globalThis;
                                            _HermesInternal2 = HermesInternal;
                                            str3 = "sf:";
                                            return "sf:" + id;
                                          } else {
                                            str = "placeholder";
                                            if ("placeholder" === kind) {
                                              tmp = globalThis;
                                              _HermesInternal = HermesInternal;
                                              str2 = "placeholder:";
                                              return "placeholder:" + listItemSuggestedFriendHeight.row;
                                            } else {
                                              return;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (cResult[23] !== renderFooter) {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (renderFooter) {
                              class B {
                                constructor(arg0) {
                                  kind = listItemSuggestedFriendHeight.kind;
                                  if ("favorite" === kind) {
                                    tmp8 = globalThis;
                                    _HermesInternal4 = HermesInternal;
                                    str5 = "fav:";
                                    return "fav:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str6 = "channel";
                                    if ("channel" === kind) {
                                      tmp7 = globalThis;
                                      _HermesInternal3 = HermesInternal;
                                      str4 = "ch:";
                                      return "ch:" + listItemSuggestedFriendHeight.channelId;
                                    } else {
                                      str7 = "separator";
                                      if ("separator" === kind) {
                                        return "separator";
                                      } else {
                                        str8 = "friendsHeader";
                                        if ("friendsHeader" === kind) {
                                          return "friendsHeader";
                                        } else {
                                          str9 = "suggestedFriend";
                                          if ("suggestedFriend" === kind) {
                                            tmp2 = friendSuggestions;
                                            tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                            tmp4 = null;
                                            id = undefined;
                                            if (tmp3 != null) {
                                              id = tmp3.user.id;
                                            }
                                            if (id == null) {
                                              id = listItemSuggestedFriendHeight.row;
                                            }
                                            tmp6 = globalThis;
                                            _HermesInternal2 = HermesInternal;
                                            str3 = "sf:";
                                            return "sf:" + id;
                                          } else {
                                            str = "placeholder";
                                            if ("placeholder" === kind) {
                                              tmp = globalThis;
                                              _HermesInternal = HermesInternal;
                                              str2 = "placeholder:";
                                              return "placeholder:" + listItemSuggestedFriendHeight.row;
                                            } else {
                                              return;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const tmp22 = scrollPosition(tmp6(tmp2[13]), {});
                            }
                            cResult[23] = renderFooter;
                            cResult[24] = tmp22;
                          } else {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (cResult[25] !== friendsHeaderIndex) {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (null != friendsHeaderIndex) {
                              class B {
                                constructor(arg0) {
                                  kind = listItemSuggestedFriendHeight.kind;
                                  if ("favorite" === kind) {
                                    tmp8 = globalThis;
                                    _HermesInternal4 = HermesInternal;
                                    str5 = "fav:";
                                    return "fav:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str6 = "channel";
                                    if ("channel" === kind) {
                                      tmp7 = globalThis;
                                      _HermesInternal3 = HermesInternal;
                                      str4 = "ch:";
                                      return "ch:" + listItemSuggestedFriendHeight.channelId;
                                    } else {
                                      str7 = "separator";
                                      if ("separator" === kind) {
                                        return "separator";
                                      } else {
                                        str8 = "friendsHeader";
                                        if ("friendsHeader" === kind) {
                                          return "friendsHeader";
                                        } else {
                                          str9 = "suggestedFriend";
                                          if ("suggestedFriend" === kind) {
                                            tmp2 = friendSuggestions;
                                            tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                            tmp4 = null;
                                            id = undefined;
                                            if (tmp3 != null) {
                                              id = tmp3.user.id;
                                            }
                                            if (id == null) {
                                              id = listItemSuggestedFriendHeight.row;
                                            }
                                            tmp6 = globalThis;
                                            _HermesInternal2 = HermesInternal;
                                            str3 = "sf:";
                                            return "sf:" + id;
                                          } else {
                                            str = "placeholder";
                                            if ("placeholder" === kind) {
                                              tmp = globalThis;
                                              _HermesInternal = HermesInternal;
                                              str2 = "placeholder:";
                                              return "placeholder:" + listItemSuggestedFriendHeight.row;
                                            } else {
                                              return;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              tmp25[0] = friendsHeaderIndex;
                            }
                            cResult[25] = friendsHeaderIndex;
                            cResult[26] = tmp25;
                          } else {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (cResult[27] !== insetEnd) {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            tmp27[0] = insetEnd;
                            cResult[27] = insetEnd;
                            cResult[28] = tmp27;
                          } else {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (cResult[29] !== scrollIndicatorInsetBottom) {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            tmp29[0] = scrollIndicatorInsetBottom;
                            cResult[29] = scrollIndicatorInsetBottom;
                            cResult[30] = tmp29;
                          } else {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (cResult[31] === accessibilityLabel) {
                            class B {
                              constructor(arg0) {
                                kind = listItemSuggestedFriendHeight.kind;
                                if ("favorite" === kind) {
                                  tmp8 = globalThis;
                                  _HermesInternal4 = HermesInternal;
                                  str5 = "fav:";
                                  return "fav:" + listItemSuggestedFriendHeight.channelId;
                                } else {
                                  str6 = "channel";
                                  if ("channel" === kind) {
                                    tmp7 = globalThis;
                                    _HermesInternal3 = HermesInternal;
                                    str4 = "ch:";
                                    return "ch:" + listItemSuggestedFriendHeight.channelId;
                                  } else {
                                    str7 = "separator";
                                    if ("separator" === kind) {
                                      return "separator";
                                    } else {
                                      str8 = "friendsHeader";
                                      if ("friendsHeader" === kind) {
                                        return "friendsHeader";
                                      } else {
                                        str9 = "suggestedFriend";
                                        if ("suggestedFriend" === kind) {
                                          tmp2 = friendSuggestions;
                                          tmp3 = friendSuggestions[listItemSuggestedFriendHeight.row];
                                          tmp4 = null;
                                          id = undefined;
                                          if (tmp3 != null) {
                                            id = tmp3.user.id;
                                          }
                                          if (id == null) {
                                            id = listItemSuggestedFriendHeight.row;
                                          }
                                          tmp6 = globalThis;
                                          _HermesInternal2 = HermesInternal;
                                          str3 = "sf:";
                                          return "sf:" + id;
                                        } else {
                                          str = "placeholder";
                                          if ("placeholder" === kind) {
                                            tmp = globalThis;
                                            _HermesInternal = HermesInternal;
                                            str2 = "placeholder:";
                                            return "placeholder:" + listItemSuggestedFriendHeight.row;
                                          } else {
                                            return;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          const obj4 = {
                            ref,
                            accessibilityLabel,
                            contentContainerStyle: tmp27,
                            data: listData,
                            estimatedHeaderSize: listHeaderHeight,
                            estimatedItemSize: listItemHeight,
                            getFixedItemSize: tmp14,
                            getItemType: O,
                            keyExtractor: B,
                            ListFooterComponent: tmp21,
                            ListHeaderComponent: tmp16,
                            onScroll: handleScrollAnimated,
                            recycleItems,
                            renderItem: tmp11,
                            scrollIndicatorInsets: tmp29,
                            stickyHeaderIndices: tmp25,
                          };
                          const tmp32 = scrollPosition(listItemHeight(tmp2[14]).AnimatedLegendList, obj4);
                          cResult[31] = accessibilityLabel;
                          cResult[32] = tmp27;
                          cResult[33] = tmp14;
                          cResult[34] = handleScrollAnimated;
                          cResult[35] = B;
                          cResult[36] = listData;
                          cResult[37] = tmp21;
                          cResult[38] = tmp16;
                          cResult[39] = listHeaderHeight;
                          cResult[40] = listItemHeight;
                          class R {
                            constructor(arg0) {
                              item = listItemSuggestedFriendHeight.item;
                              kind = item.kind;
                              if ("favorite" !== kind) {
                                str2 = "channel";
                                if ("channel" !== kind) {
                                  str3 = "separator";
                                  if ("separator" === kind) {
                                    tmp18 = jsx;
                                    tmp19 = closure_1;
                                    tmp20 = closure_2;
                                    return jsx(closure_1(closure_2[6]), {});
                                  } else {
                                    str4 = "friendsHeader";
                                    if ("friendsHeader" === kind) {
                                      tmp11 = jsx;
                                      tmp12 = closure_1;
                                      tmp13 = closure_2;
                                      obj1 = {
                                        scrollPosition: null,
                                        stickyAt: null,
                                        stickyTop: null,
                                        stickyLeft: null,
                                      };
                                      tmp14 = scrollPosition;
                                      obj1.scrollPosition = scrollPosition;
                                      tmp15 = friendsHeaderOffset;
                                      obj1.stickyAt = friendsHeaderOffset;
                                      tmp16 = listTop;
                                      obj1.stickyTop = listTop;
                                      tmp17 = listLeft;
                                      obj1.stickyLeft = listLeft;
                                      return jsx(closure_1(closure_2[7]), obj1);
                                    } else {
                                      str5 = "suggestedFriend";
                                      if ("suggestedFriend" === kind) {
                                        tmp5 = jsx;
                                        tmp6 = closure_0;
                                        tmp7 = closure_2;
                                        obj5 = { height: null, suggestedFriend: null, onAddFriendSuggestions: null };
                                        tmp8 = closure_1;
                                        obj5.height = closure_1;
                                        tmp9 = friendSuggestions;
                                        obj5.suggestedFriend = friendSuggestions[item.row];
                                        tmp10 = setAddedFriendSuggestions;
                                        obj5.onAddFriendSuggestions = setAddedFriendSuggestions;
                                        return jsx(closure_0(closure_2[8]).MessagesItemSuggestedFriendLegend, obj5);
                                      } else {
                                        str = "placeholder";
                                        if ("placeholder" === kind) {
                                          tmp = jsx;
                                          tmp2 = closure_1;
                                          tmp3 = closure_2;
                                          obj = { row: null, height: null };
                                          obj.row = item.row;
                                          tmp4 = listItemHeight;
                                          obj.height = listItemHeight;
                                          return jsx(closure_1(closure_2[9]), obj);
                                        } else {
                                          return;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              obj6 = { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row };
                              return jsx(closure_0(closure_2[5]).MessagesItemChannelLegend, obj6);
                            }
                          }
                          cResult[42] = tmp11;
                          cResult[43] = tmp29;
                          cResult[44] = tmp25;
                          cResult[45] = tmp32;
                        }
                      }
                      const fn2 = function z(kind) {
                        kind = kind.kind;
                        if ("favorite" !== kind) {
                          if ("channel" !== kind) {
                            if ("placeholder" !== kind) {
                              if ("separator" === kind) {
                                return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                              } else if ("friendsHeader" === kind) {
                                return MessagesItemSuggestedFriendsHeader.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                              } else if ("suggestedFriend" === kind) {
                                return listItemSuggestedFriendHeight;
                              }
                            }
                          }
                        }
                        return listItemHeight;
                      };
                      cResult[15] = listItemHeight;
                      cResult[16] = listItemSuggestedFriendHeight;
                      cResult[17] = fn2;
                    }
                  }
                }
              }
            }
          }
        }
        class R {
          constructor(arg0) {
            item = listItemSuggestedFriendHeight.item;
            kind = item.kind;
            if ("favorite" !== kind) {
              str2 = "channel";
              if ("channel" !== kind) {
                str3 = "separator";
                if ("separator" === kind) {
                  tmp18 = jsx;
                  tmp19 = closure_1;
                  tmp20 = closure_2;
                  return jsx(closure_1(closure_2[6]), {});
                } else {
                  str4 = "friendsHeader";
                  if ("friendsHeader" === kind) {
                    tmp11 = jsx;
                    tmp12 = closure_1;
                    tmp13 = closure_2;
                    obj1 = { scrollPosition: null, stickyAt: null, stickyTop: null, stickyLeft: null };
                    tmp14 = scrollPosition;
                    obj1.scrollPosition = scrollPosition;
                    tmp15 = friendsHeaderOffset;
                    obj1.stickyAt = friendsHeaderOffset;
                    tmp16 = listTop;
                    obj1.stickyTop = listTop;
                    tmp17 = listLeft;
                    obj1.stickyLeft = listLeft;
                    return jsx(closure_1(closure_2[7]), obj1);
                  } else {
                    str5 = "suggestedFriend";
                    if ("suggestedFriend" === kind) {
                      tmp5 = jsx;
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj5 = { height: null, suggestedFriend: null, onAddFriendSuggestions: null };
                      tmp8 = closure_1;
                      obj5.height = closure_1;
                      tmp9 = friendSuggestions;
                      obj5.suggestedFriend = friendSuggestions[item.row];
                      tmp10 = setAddedFriendSuggestions;
                      obj5.onAddFriendSuggestions = setAddedFriendSuggestions;
                      return jsx(closure_0(closure_2[8]).MessagesItemSuggestedFriendLegend, obj5);
                    } else {
                      str = "placeholder";
                      if ("placeholder" === kind) {
                        tmp = jsx;
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = { row: null, height: null };
                        obj.row = item.row;
                        tmp4 = listItemHeight;
                        obj.height = listItemHeight;
                        return jsx(closure_1(closure_2[9]), obj);
                      } else {
                        return;
                      }
                    }
                  }
                }
              }
            }
            obj6 = { channelId: item.channelId, placeholderHeight: listItemHeight, row: item.row };
            return jsx(closure_0(closure_2[5]).MessagesItemChannelLegend, obj6);
          }
        }
        cResult[5] = friendSuggestions;
        cResult[6] = friendsHeaderOffset;
        cResult[7] = listItemHeight;
        cResult[8] = listItemSuggestedFriendHeight;
        cResult[9] = listLeft;
        cResult[10] = listTop;
        cResult[11] = scrollPosition;
        cResult[12] = setAddedFriendSuggestions;
        cResult[13] = R;
        tmp11 = R;
        ref = listTop.useRef(null);
      }
    : function MessagesLegendList(listItemHeight) {
        ({ data, insetEnd } = listItemHeight);
        const estimatedItemSize = listItemHeight.listItemHeight;
        const listItemSuggestedFriendHeight = listItemHeight.listItemSuggestedFriendHeight;
        const listLeft = listItemHeight.listLeft;
        const listRefHappeningNow = listItemHeight.listRefHappeningNow;
        const listTop = listItemHeight.listTop;
        const scrollIndicatorInsetBottom = listItemHeight.scrollIndicatorInsetBottom;
        const scrollPosition = listItemHeight.scrollPosition;
        const friendSuggestions = data.friendSuggestions;
        const renderHeader = data.renderHeader;
        const renderFooter = data.renderFooter;
        const setAddedFriendSuggestions = data.setAddedFriendSuggestions;
        ({ accessibilityLabel, handleScrollAnimated, recycleItems, ref } = listItemHeight);
        const ref2 = listLeft.useRef(null);
        const data2 = estimatedItemSize(listItemSuggestedFriendHeight[4])(data, { listItemHeight: estimatedItemSize });
        const friendsHeaderIndex = data2.friendsHeaderIndex;
        const friendsHeaderOffset = data2.friendsHeaderOffset;
        const estimatedHeaderSize = data2.listHeaderHeight;
        let items = [estimatedHeaderSize];
        const imperativeHandle = listLeft.useImperativeHandle(
          ref,
          () => ({
            scrollToTop() {
              let flag = arg0;
              if (arg0 === undefined) {
                flag = false;
              }
              const current = ref.current;
              if (current != null) {
                const obj = { offset, animated: flag };
                current.scrollToOffset(obj);
              }
            },
          }),
          items,
        );
        const items1 = [
          estimatedItemSize,
          scrollPosition,
          friendsHeaderOffset,
          listTop,
          listLeft,
          listItemSuggestedFriendHeight,
          friendSuggestions,
          setAddedFriendSuggestions,
        ];
        const renderItem = listLeft.useCallback((item) => {
          item = item.item;
          const kind = item.kind;
          if ("favorite" !== kind) {
            if ("channel" !== kind) {
              if ("separator" === kind) {
                return jsx(MessagesItemSeparatorDefault, {});
              } else if ("friendsHeader" === kind) {
                const obj2 = {
                  scrollPosition,
                  stickyAt: friendsHeaderOffset,
                  stickyTop: listTop,
                  stickyLeft: listLeft,
                };
                return jsx(MessagesItemSuggestedFriendsHeaderDefault, {
                  scrollPosition,
                  stickyAt: friendsHeaderOffset,
                  stickyTop: listTop,
                  stickyLeft: listLeft,
                });
              } else if ("suggestedFriend" === kind) {
                const obj3 = {
                  height: listItemSuggestedFriendHeight,
                  suggestedFriend: friendSuggestions[item.row],
                  onAddFriendSuggestions: setAddedFriendSuggestions,
                };
                return jsx(MessagesItemSuggestedFriend.MessagesItemSuggestedFriendLegend, {
                  height: listItemSuggestedFriendHeight,
                  suggestedFriend: friendSuggestions[item.row],
                  onAddFriendSuggestions: setAddedFriendSuggestions,
                });
              } else if ("placeholder" === kind) {
                const obj = { row: item.row, height: estimatedItemSize };
                return jsx(MessagesItemPlaceholderDefault, { row: item.row, height: estimatedItemSize });
              }
            }
          }
          return jsx(MessagesItemChannel.MessagesItemChannelLegend, {
            channelId: item.channelId,
            placeholderHeight: estimatedItemSize,
            row: item.row,
          });
        }, items1);
        const items2 = [estimatedItemSize, listItemSuggestedFriendHeight];
        const getItemType = listLeft.useCallback((kind) => kind.kind, []);
        const items3 = [friendSuggestions];
        const getFixedItemSize = listLeft.useCallback((kind) => {
          kind = kind.kind;
          if ("favorite" !== kind) {
            if ("channel" !== kind) {
              if ("placeholder" !== kind) {
                if ("separator" === kind) {
                  return MessagesItemSeparator.MESSAGES_ITEM_SEPERATOR_HEIGHT;
                } else if ("friendsHeader" === kind) {
                  return MessagesItemSuggestedFriendsHeader.MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT;
                } else if ("suggestedFriend" === kind) {
                  return listItemSuggestedFriendHeight;
                }
              }
            }
          }
          return estimatedItemSize;
        }, items2);
        const items4 = [renderHeader, listRefHappeningNow];
        const keyExtractor = listLeft.useCallback((kind) => {
          kind = kind.kind;
          if ("favorite" === kind) {
            const _HermesInternal4 = HermesInternal;
            return "fav:" + kind.channelId;
          } else if ("channel" === kind) {
            const _HermesInternal3 = HermesInternal;
            return "ch:" + kind.channelId;
          } else if ("separator" === kind) {
            return "separator";
          } else if ("friendsHeader" === kind) {
            return "friendsHeader";
          } else if ("suggestedFriend" === kind) {
            let id;
            if (friendSuggestions[kind.row] != null) {
              id = tmp3.user.id;
            }
            if (id == null) {
              id = kind.row;
            }
            const _HermesInternal2 = HermesInternal;
            return "sf:" + id;
          } else if ("placeholder" === kind) {
            const _HermesInternal = HermesInternal;
            return "placeholder:" + kind.row;
          }
        }, items3);
        const items5 = [renderFooter];
        const ListHeaderComponent = listLeft.useMemo(() => {
          if (useMessagesData.MessagesDataHeader.HappeningNow === renderHeader) {
            const obj = { listRef: listRefHappeningNow };
            return jsx(MessagesItemHappeningNowDefault, { listRef: listRefHappeningNow });
          } else if (useMessagesData.MessagesDataHeader.EmptyState === renderHeader) {
            return jsx(MessagesItemEmptyStateDefault, {});
          } else {
            return null;
          }
        }, items4);
        const items6 = [friendsHeaderIndex];
        const ListFooterComponent = listLeft.useMemo(() => {
          let tmp = null;
          if (renderFooter) {
            tmp = jsx(MessagesItemAddFriendsWidgetDefault, {});
          }
          return tmp;
        }, items5);
        const items7 = [insetEnd];
        const stickyHeaderIndices = listLeft.useMemo(() => {
          let tmp2;
          if (null != friendsHeaderIndex) {
            const items = [tmp];
            tmp2 = items;
          }
          return tmp2;
        }, items6);
        const items8 = [scrollIndicatorInsetBottom];
        const contentContainerStyle = listLeft.useMemo(() => ({ paddingBottom: insetEnd }), items7);
        const scrollIndicatorInsets = listLeft.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items8);
        return listRefHappeningNow(insetEnd(listItemSuggestedFriendHeight[14]).AnimatedLegendList, {
          ref: ref2,
          accessibilityLabel,
          contentContainerStyle,
          data: data2.listData,
          estimatedHeaderSize,
          estimatedItemSize,
          getFixedItemSize,
          getItemType,
          keyExtractor,
          ListFooterComponent,
          ListHeaderComponent,
          onScroll,
          recycleItems,
          renderItem,
          scrollIndicatorInsets,
          stickyHeaderIndices,
        });
      },
);
