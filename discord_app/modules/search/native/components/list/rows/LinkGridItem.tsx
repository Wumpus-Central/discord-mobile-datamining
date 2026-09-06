// discord_app/modules/search/native/components/list/rows/LinkGridItem.tsx
import _modDef38 from "../../../../../../../_runtime/metro/00038__.js";
import util from "../../../../../../intl/index.native.tsx";
import LinkIcon from "../../../../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import ChatIcon from "../../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import renderMessageMarkup from "../../../../../messages/renderMessageMarkup.tsx";
import MaskedLinkUtils from "../../../../../../utils/MaskedLinkUtils.tsx";
import MarkupReactLinkUtils from "../../../../../markup/MarkupReactLinkUtils.tsx";
import SearchPlatformUtils from "../../../SearchPlatformUtils.tsx";
import SearchMediaImage from "../SearchMediaImage.tsx";
import SearchResultLinkPreviewMarkup from "../../../SearchResultLinkPreviewMarkup.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import SearchMessageStore from "../../../../SearchMessageStore.tsx";

require = fn;
function getLinkNodeAtIndex(content, diff, fn) {
  closure_0 = diff;
  closure_1 = fn;
  if (Array.isArray(content)) {
    const item = content.forEach((type) => {
      closure_0 = diff;
      if (Array.isArray(type)) {
        const item = type.forEach((type) => {
          closure_0 = diff;
          if (Array.isArray(type)) {
            const item = type.forEach((type) => {
              closure_0 = diff;
              if (Array.isArray(type)) {
                const item = type.forEach((type) => {
                  closure_0 = diff;
                  if (Array.isArray(type)) {
                    const item = type.forEach(() => { ... });
                  } else {
                    if ("link" !== type.type) {
                      if ("channelMention" !== type.type) {
                        if (null != type.content) {
                          const content = type.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach(() => { ... });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(type);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(type)) {
                        const item2 = type.forEach(() => { ... });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              getLinkNodeAtIndex(type.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(type);
                        } else {
                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return type;
                });
              } else {
                if ("link" !== type.type) {
                  if ("channelMention" !== type.type) {
                    if (null != type.content) {
                      const content = type.content;
                      closure_0 = tmp;
                      closure_1 = tmp2;
                      const _Array = Array;
                      if (Array.isArray(content)) {
                        const item1 = content.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== content.type) {
                          if ("channelMention" !== content.type) {
                            if (null != content.content) {
                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(content);
                        } else {
                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                        }
                      }
                    }
                  }
                }
                if (0 === tmp) {
                  tmp2(type);
                } else {
                  diff = tmp - 1;
                  closure_0 = diff;
                  closure_1 = tmp2;
                  const _Array2 = Array;
                  if (Array.isArray(type)) {
                    const item2 = type.forEach((type) => {
                      closure_0 = diff;
                      if (Array.isArray(type)) {
                        const item = type.forEach(() => { ... });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              const content = type.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach(() => { ... });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(type);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(type)) {
                            const item2 = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(type);
                            } else {
                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return type;
                    });
                  } else {
                    if ("link" !== type.type) {
                      if ("channelMention" !== type.type) {
                        if (null != type.content) {
                          getLinkNodeAtIndex(type.content, diff, tmp2);
                        }
                      }
                    }
                    if (0 === diff) {
                      tmp2(type);
                    } else {
                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                    }
                  }
                }
              }
              return type;
            });
          } else {
            if ("link" !== type.type) {
              if ("channelMention" !== type.type) {
                if (null != type.content) {
                  const content = type.content;
                  closure_0 = tmp;
                  closure_1 = tmp2;
                  const _Array = Array;
                  if (Array.isArray(content)) {
                    const item1 = content.forEach((type) => {
                      closure_0 = diff;
                      if (Array.isArray(type)) {
                        const item = type.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              const content = type.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach((type) => {
                                  closure_0 = diff;
                                  if (Array.isArray(type)) {
                                    const item = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          const content = type.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(type);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(type)) {
                                        const item2 = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              getLinkNodeAtIndex(type.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(type);
                                        } else {
                                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return type;
                                });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(type);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(type)) {
                            const item2 = type.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(type);
                            } else {
                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return type;
                    });
                  } else {
                    if ("link" !== content.type) {
                      if ("channelMention" !== content.type) {
                        if (null != content.content) {
                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(content);
                    } else {
                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                    }
                  }
                }
              }
            }
            if (0 === tmp) {
              tmp2(type);
            } else {
              diff = tmp - 1;
              closure_0 = diff;
              closure_1 = tmp2;
              const _Array2 = Array;
              if (Array.isArray(type)) {
                const item2 = type.forEach((type) => {
                  closure_0 = diff;
                  if (Array.isArray(type)) {
                    const item = type.forEach((type) => {
                      closure_0 = diff;
                      if (Array.isArray(type)) {
                        const item = type.forEach(() => { ... });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              const content = type.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach(() => { ... });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(type);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(type)) {
                            const item2 = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(type);
                            } else {
                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return type;
                    });
                  } else {
                    if ("link" !== type.type) {
                      if ("channelMention" !== type.type) {
                        if (null != type.content) {
                          const content = type.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(type);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(type)) {
                        const item2 = type.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              getLinkNodeAtIndex(type.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(type);
                        } else {
                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return type;
                });
              } else {
                if ("link" !== type.type) {
                  if ("channelMention" !== type.type) {
                    if (null != type.content) {
                      getLinkNodeAtIndex(type.content, diff, tmp2);
                    }
                  }
                }
                if (0 === diff) {
                  tmp2(type);
                } else {
                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                }
              }
            }
          }
          return type;
        });
      } else {
        if ("link" !== type.type) {
          if ("channelMention" !== type.type) {
            if (null != type.content) {
              const content = type.content;
              closure_0 = tmp;
              closure_1 = tmp2;
              const _Array = Array;
              if (Array.isArray(content)) {
                const item1 = content.forEach((type) => {
                  closure_0 = diff;
                  if (Array.isArray(type)) {
                    const item = type.forEach((type) => {
                      closure_0 = diff;
                      if (Array.isArray(type)) {
                        const item = type.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              const content = type.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach((type) => {
                                  closure_0 = diff;
                                  if (Array.isArray(type)) {
                                    const item = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          const content = type.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(type);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(type)) {
                                        const item2 = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              getLinkNodeAtIndex(type.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(type);
                                        } else {
                                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return type;
                                });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(type);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(type)) {
                            const item2 = type.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(type);
                            } else {
                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return type;
                    });
                  } else {
                    if ("link" !== type.type) {
                      if ("channelMention" !== type.type) {
                        if (null != type.content) {
                          const content = type.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach((type) => {
                                  closure_0 = diff;
                                  if (Array.isArray(type)) {
                                    const item = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          const content = type.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(type);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(type)) {
                                        const item2 = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              getLinkNodeAtIndex(type.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(type);
                                        } else {
                                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return type;
                                });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach((type) => {
                                          closure_0 = diff;
                                          if (Array.isArray(type)) {
                                            const item = type.forEach(() => { ... });
                                          } else {
                                            if ("link" !== type.type) {
                                              if ("channelMention" !== type.type) {
                                                if (null != type.content) {
                                                  const content = type.content;
                                                  closure_0 = tmp;
                                                  closure_1 = tmp2;
                                                  const _Array = Array;
                                                  if (Array.isArray(content)) {
                                                    const item1 = content.forEach(() => { ... });
                                                  } else {
                                                    if ("link" !== content.type) {
                                                      if ("channelMention" !== content.type) {
                                                        if (null != content.content) {
                                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                        }
                                                      }
                                                    }
                                                    if (0 === tmp) {
                                                      tmp2(content);
                                                    } else {
                                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(type);
                                            } else {
                                              diff = tmp - 1;
                                              closure_0 = diff;
                                              closure_1 = tmp2;
                                              const _Array2 = Array;
                                              if (Array.isArray(type)) {
                                                const item2 = type.forEach(() => { ... });
                                              } else {
                                                if ("link" !== type.type) {
                                                  if ("channelMention" !== type.type) {
                                                    if (null != type.content) {
                                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === diff) {
                                                  tmp2(type);
                                                } else {
                                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                          return type;
                                        });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach((type) => {
                                      closure_0 = diff;
                                      if (Array.isArray(type)) {
                                        const item = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              const content = type.content;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              const _Array = Array;
                                              if (Array.isArray(content)) {
                                                const item1 = content.forEach(() => { ... });
                                              } else {
                                                if ("link" !== content.type) {
                                                  if ("channelMention" !== content.type) {
                                                    if (null != content.content) {
                                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === tmp) {
                                                  tmp2(content);
                                                } else {
                                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(type);
                                        } else {
                                          diff = tmp - 1;
                                          closure_0 = diff;
                                          closure_1 = tmp2;
                                          const _Array2 = Array;
                                          if (Array.isArray(type)) {
                                            const item2 = type.forEach(() => { ... });
                                          } else {
                                            if ("link" !== type.type) {
                                              if ("channelMention" !== type.type) {
                                                if (null != type.content) {
                                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === diff) {
                                              tmp2(type);
                                            } else {
                                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                      return type;
                                    });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(type);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(type)) {
                        const item2 = type.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach((type) => {
                                      closure_0 = diff;
                                      if (Array.isArray(type)) {
                                        const item = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              const content = type.content;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              const _Array = Array;
                                              if (Array.isArray(content)) {
                                                const item1 = content.forEach(() => { ... });
                                              } else {
                                                if ("link" !== content.type) {
                                                  if ("channelMention" !== content.type) {
                                                    if (null != content.content) {
                                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === tmp) {
                                                  tmp2(content);
                                                } else {
                                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(type);
                                        } else {
                                          diff = tmp - 1;
                                          closure_0 = diff;
                                          closure_1 = tmp2;
                                          const _Array2 = Array;
                                          if (Array.isArray(type)) {
                                            const item2 = type.forEach(() => { ... });
                                          } else {
                                            if ("link" !== type.type) {
                                              if ("channelMention" !== type.type) {
                                                if (null != type.content) {
                                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === diff) {
                                              tmp2(type);
                                            } else {
                                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                      return type;
                                    });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach((type) => {
                                  closure_0 = diff;
                                  if (Array.isArray(type)) {
                                    const item = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          const content = type.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(type);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(type)) {
                                        const item2 = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              getLinkNodeAtIndex(type.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(type);
                                        } else {
                                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return type;
                                });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              getLinkNodeAtIndex(type.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(type);
                        } else {
                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return type;
                });
              } else {
                if ("link" !== content.type) {
                  if ("channelMention" !== content.type) {
                    if (null != content.content) {
                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                    }
                  }
                }
                if (0 === tmp) {
                  tmp2(content);
                } else {
                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                }
              }
            }
          }
        }
        if (0 === tmp) {
          tmp2(type);
        } else {
          diff = tmp - 1;
          closure_0 = diff;
          closure_1 = tmp2;
          const _Array2 = Array;
          if (Array.isArray(type)) {
            const item2 = type.forEach((type) => {
              closure_0 = diff;
              if (Array.isArray(type)) {
                const item = type.forEach((type) => {
                  closure_0 = diff;
                  if (Array.isArray(type)) {
                    const item = type.forEach((type) => {
                      closure_0 = diff;
                      if (Array.isArray(type)) {
                        const item = type.forEach(() => { ... });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              const content = type.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach(() => { ... });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(type);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(type)) {
                            const item2 = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(type);
                            } else {
                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return type;
                    });
                  } else {
                    if ("link" !== type.type) {
                      if ("channelMention" !== type.type) {
                        if (null != type.content) {
                          const content = type.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(type);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(type)) {
                        const item2 = type.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              getLinkNodeAtIndex(type.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(type);
                        } else {
                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return type;
                });
              } else {
                if ("link" !== type.type) {
                  if ("channelMention" !== type.type) {
                    if (null != type.content) {
                      const content = type.content;
                      closure_0 = tmp;
                      closure_1 = tmp2;
                      const _Array = Array;
                      if (Array.isArray(content)) {
                        const item1 = content.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach((type) => {
                                      closure_0 = diff;
                                      if (Array.isArray(type)) {
                                        const item = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              const content = type.content;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              const _Array = Array;
                                              if (Array.isArray(content)) {
                                                const item1 = content.forEach(() => { ... });
                                              } else {
                                                if ("link" !== content.type) {
                                                  if ("channelMention" !== content.type) {
                                                    if (null != content.content) {
                                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === tmp) {
                                                  tmp2(content);
                                                } else {
                                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(type);
                                        } else {
                                          diff = tmp - 1;
                                          closure_0 = diff;
                                          closure_1 = tmp2;
                                          const _Array2 = Array;
                                          if (Array.isArray(type)) {
                                            const item2 = type.forEach(() => { ... });
                                          } else {
                                            if ("link" !== type.type) {
                                              if ("channelMention" !== type.type) {
                                                if (null != type.content) {
                                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === diff) {
                                              tmp2(type);
                                            } else {
                                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                      return type;
                                    });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach((type) => {
                                  closure_0 = diff;
                                  if (Array.isArray(type)) {
                                    const item = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          const content = type.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(type);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(type)) {
                                        const item2 = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              getLinkNodeAtIndex(type.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(type);
                                        } else {
                                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return type;
                                });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== content.type) {
                          if ("channelMention" !== content.type) {
                            if (null != content.content) {
                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(content);
                        } else {
                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                        }
                      }
                    }
                  }
                }
                if (0 === tmp) {
                  tmp2(type);
                } else {
                  diff = tmp - 1;
                  closure_0 = diff;
                  closure_1 = tmp2;
                  const _Array2 = Array;
                  if (Array.isArray(type)) {
                    const item2 = type.forEach((type) => {
                      closure_0 = diff;
                      if (Array.isArray(type)) {
                        const item = type.forEach((type) => {
                          closure_0 = diff;
                          if (Array.isArray(type)) {
                            const item = type.forEach(() => { ... });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  const content = type.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          getLinkNodeAtIndex(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(type);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(type)) {
                                const item2 = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      getLinkNodeAtIndex(type.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(type);
                                } else {
                                  getLinkNodeAtIndex(type, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return type;
                        });
                      } else {
                        if ("link" !== type.type) {
                          if ("channelMention" !== type.type) {
                            if (null != type.content) {
                              const content = type.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach((type) => {
                                  closure_0 = diff;
                                  if (Array.isArray(type)) {
                                    const item = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          const content = type.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(type);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(type)) {
                                        const item2 = type.forEach(() => { ... });
                                      } else {
                                        if ("link" !== type.type) {
                                          if ("channelMention" !== type.type) {
                                            if (null != type.content) {
                                              getLinkNodeAtIndex(type.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(type);
                                        } else {
                                          getLinkNodeAtIndex(type, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return type;
                                });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      getLinkNodeAtIndex(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(type);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(type)) {
                            const item2 = type.forEach((type) => {
                              closure_0 = diff;
                              if (Array.isArray(type)) {
                                const item = type.forEach(() => { ... });
                              } else {
                                if ("link" !== type.type) {
                                  if ("channelMention" !== type.type) {
                                    if (null != type.content) {
                                      const content = type.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              getLinkNodeAtIndex(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(type);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(type)) {
                                    const item2 = type.forEach(() => { ... });
                                  } else {
                                    if ("link" !== type.type) {
                                      if ("channelMention" !== type.type) {
                                        if (null != type.content) {
                                          getLinkNodeAtIndex(type.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(type);
                                    } else {
                                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return type;
                            });
                          } else {
                            if ("link" !== type.type) {
                              if ("channelMention" !== type.type) {
                                if (null != type.content) {
                                  getLinkNodeAtIndex(type.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(type);
                            } else {
                              getLinkNodeAtIndex(type, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return type;
                    });
                  } else {
                    if ("link" !== type.type) {
                      if ("channelMention" !== type.type) {
                        if (null != type.content) {
                          getLinkNodeAtIndex(type.content, diff, tmp2);
                        }
                      }
                    }
                    if (0 === diff) {
                      tmp2(type);
                    } else {
                      getLinkNodeAtIndex(type, diff - 1, tmp2);
                    }
                  }
                }
              }
              return type;
            });
          } else {
            if ("link" !== type.type) {
              if ("channelMention" !== type.type) {
                if (null != type.content) {
                  getLinkNodeAtIndex(type.content, diff, tmp2);
                }
              }
            }
            if (0 === diff) {
              tmp2(type);
            } else {
              getLinkNodeAtIndex(type, diff - 1, tmp2);
            }
          }
        }
      }
      return type;
    });
  } else {
    if ("link" !== content.type) {
      if ("channelMention" !== content.type) {
        if (null != content.content) {
          getLinkNodeAtIndex(content.content, diff, fn);
        }
      }
    }
    if (0 === diff) {
      fn(content);
    } else {
      getLinkNodeAtIndex(content, diff - 1, fn);
    }
  }
  return content;
}
function LinkParsedGridItem(author) {
  author = author.author;
  const linkIndex = author.linkIndex;
  let channelId = author.channelId;
  const messageId = author.messageId;
  const onPressSearchLink = author.onPressSearchLink;
  const onPressGuildVoiceChannelMention = author.onPressGuildVoiceChannelMention;
  const onPress = author.onPress;
  let stateFromStores;
  ({ imageStyle, containerStyle } = author);
  const tmp = closure_13();
  const tapToSee = tmp;
  let obj = author(channelId[8]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj1 = author(channelId[8]);
  const items1 = [tapToSee];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj2 = onPressSearchLink;
  const tmp6 = messageId(onPressSearchLink.useState(null), 2);
  const first = tmp6[0];
  closure_11 = tmp6[1];
  const items2 = [linkIndex];
  const postProcessor = onPressSearchLink.useCallback((type) => {
    author = linkIndex;
    closure_1 = closure_11;
    if (Array.isArray(type)) {
      let item = type.forEach((type) => {
        closure_0 = diff;
        if (Array.isArray(type)) {
          const item = type.forEach((type) => {
            closure_0 = diff;
            if (Array.isArray(type)) {
              const item = type.forEach((type) => {
                closure_0 = diff;
                if (Array.isArray(type)) {
                  const item = type.forEach(() => { ... });
                } else {
                  if ("link" !== type.type) {
                    if ("channelMention" !== type.type) {
                      if (null != type.content) {
                        const content = type.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach(() => { ... });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(type);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(type)) {
                      const item2 = type.forEach(() => { ... });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            getLinkNodeAtIndex(type.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(type);
                      } else {
                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return type;
              });
            } else {
              if ("link" !== type.type) {
                if ("channelMention" !== type.type) {
                  if (null != type.content) {
                    const content = type.content;
                    closure_0 = tmp;
                    closure_1 = tmp2;
                    const _Array = Array;
                    if (Array.isArray(content)) {
                      const item1 = content.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== content.type) {
                        if ("channelMention" !== content.type) {
                          if (null != content.content) {
                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(content);
                      } else {
                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                      }
                    }
                  }
                }
              }
              if (0 === tmp) {
                tmp2(type);
              } else {
                diff = tmp - 1;
                closure_0 = diff;
                closure_1 = tmp2;
                const _Array2 = Array;
                if (Array.isArray(type)) {
                  const item2 = type.forEach((type) => {
                    closure_0 = diff;
                    if (Array.isArray(type)) {
                      const item = type.forEach(() => { ... });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            const content = type.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach(() => { ... });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(type);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(type)) {
                          const item2 = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                getLinkNodeAtIndex(type.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(type);
                          } else {
                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return type;
                  });
                } else {
                  if ("link" !== type.type) {
                    if ("channelMention" !== type.type) {
                      if (null != type.content) {
                        getLinkNodeAtIndex(type.content, diff, tmp2);
                      }
                    }
                  }
                  if (0 === diff) {
                    tmp2(type);
                  } else {
                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                  }
                }
              }
            }
            return type;
          });
        } else {
          if ("link" !== type.type) {
            if ("channelMention" !== type.type) {
              if (null != type.content) {
                const content = type.content;
                closure_0 = tmp;
                closure_1 = tmp2;
                const _Array = Array;
                if (Array.isArray(content)) {
                  const item1 = content.forEach((type) => {
                    closure_0 = diff;
                    if (Array.isArray(type)) {
                      const item = type.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            const content = type.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach((type) => {
                                closure_0 = diff;
                                if (Array.isArray(type)) {
                                  const item = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        const content = type.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(type);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(type)) {
                                      const item2 = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            getLinkNodeAtIndex(type.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(type);
                                      } else {
                                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return type;
                              });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(type);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(type)) {
                          const item2 = type.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                getLinkNodeAtIndex(type.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(type);
                          } else {
                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return type;
                  });
                } else {
                  if ("link" !== content.type) {
                    if ("channelMention" !== content.type) {
                      if (null != content.content) {
                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(content);
                  } else {
                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                  }
                }
              }
            }
          }
          if (0 === tmp) {
            tmp2(type);
          } else {
            diff = tmp - 1;
            closure_0 = diff;
            closure_1 = tmp2;
            const _Array2 = Array;
            if (Array.isArray(type)) {
              const item2 = type.forEach((type) => {
                closure_0 = diff;
                if (Array.isArray(type)) {
                  const item = type.forEach((type) => {
                    closure_0 = diff;
                    if (Array.isArray(type)) {
                      const item = type.forEach(() => { ... });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            const content = type.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach(() => { ... });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(type);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(type)) {
                          const item2 = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                getLinkNodeAtIndex(type.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(type);
                          } else {
                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return type;
                  });
                } else {
                  if ("link" !== type.type) {
                    if ("channelMention" !== type.type) {
                      if (null != type.content) {
                        const content = type.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(type);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(type)) {
                      const item2 = type.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            getLinkNodeAtIndex(type.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(type);
                      } else {
                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return type;
              });
            } else {
              if ("link" !== type.type) {
                if ("channelMention" !== type.type) {
                  if (null != type.content) {
                    getLinkNodeAtIndex(type.content, diff, tmp2);
                  }
                }
              }
              if (0 === diff) {
                tmp2(type);
              } else {
                getLinkNodeAtIndex(type, diff - 1, tmp2);
              }
            }
          }
        }
        return type;
      });
    } else {
      if ("link" !== type.type) {
        if ("channelMention" !== type.type) {
          if (null != type.content) {
            let content = type.content;
            author = linkIndex;
            closure_1 = closure_11;
            let _Array = Array;
            if (Array.isArray(content)) {
              let item1 = content.forEach((type) => {
                closure_0 = diff;
                if (Array.isArray(type)) {
                  const item = type.forEach((type) => {
                    closure_0 = diff;
                    if (Array.isArray(type)) {
                      const item = type.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            const content = type.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach((type) => {
                                closure_0 = diff;
                                if (Array.isArray(type)) {
                                  const item = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        const content = type.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(type);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(type)) {
                                      const item2 = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            getLinkNodeAtIndex(type.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(type);
                                      } else {
                                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return type;
                              });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(type);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(type)) {
                          const item2 = type.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                getLinkNodeAtIndex(type.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(type);
                          } else {
                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return type;
                  });
                } else {
                  if ("link" !== type.type) {
                    if ("channelMention" !== type.type) {
                      if (null != type.content) {
                        const content = type.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach((type) => {
                                closure_0 = diff;
                                if (Array.isArray(type)) {
                                  const item = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        const content = type.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(type);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(type)) {
                                      const item2 = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            getLinkNodeAtIndex(type.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(type);
                                      } else {
                                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return type;
                              });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach((type) => {
                                        closure_0 = diff;
                                        if (Array.isArray(type)) {
                                          const item = type.forEach(() => { ... });
                                        } else {
                                          if ("link" !== type.type) {
                                            if ("channelMention" !== type.type) {
                                              if (null != type.content) {
                                                const content = type.content;
                                                closure_0 = tmp;
                                                closure_1 = tmp2;
                                                const _Array = Array;
                                                if (Array.isArray(content)) {
                                                  const item1 = content.forEach(() => { ... });
                                                } else {
                                                  if ("link" !== content.type) {
                                                    if ("channelMention" !== content.type) {
                                                      if (null != content.content) {
                                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                      }
                                                    }
                                                  }
                                                  if (0 === tmp) {
                                                    tmp2(content);
                                                  } else {
                                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(type);
                                          } else {
                                            diff = tmp - 1;
                                            closure_0 = diff;
                                            closure_1 = tmp2;
                                            const _Array2 = Array;
                                            if (Array.isArray(type)) {
                                              const item2 = type.forEach(() => { ... });
                                            } else {
                                              if ("link" !== type.type) {
                                                if ("channelMention" !== type.type) {
                                                  if (null != type.content) {
                                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === diff) {
                                                tmp2(type);
                                              } else {
                                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                        return type;
                                      });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach((type) => {
                                    closure_0 = diff;
                                    if (Array.isArray(type)) {
                                      const item = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            const content = type.content;
                                            closure_0 = tmp;
                                            closure_1 = tmp2;
                                            const _Array = Array;
                                            if (Array.isArray(content)) {
                                              const item1 = content.forEach(() => { ... });
                                            } else {
                                              if ("link" !== content.type) {
                                                if ("channelMention" !== content.type) {
                                                  if (null != content.content) {
                                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === tmp) {
                                                tmp2(content);
                                              } else {
                                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(type);
                                      } else {
                                        diff = tmp - 1;
                                        closure_0 = diff;
                                        closure_1 = tmp2;
                                        const _Array2 = Array;
                                        if (Array.isArray(type)) {
                                          const item2 = type.forEach(() => { ... });
                                        } else {
                                          if ("link" !== type.type) {
                                            if ("channelMention" !== type.type) {
                                              if (null != type.content) {
                                                getLinkNodeAtIndex(type.content, diff, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === diff) {
                                            tmp2(type);
                                          } else {
                                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                    return type;
                                  });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(type);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(type)) {
                      const item2 = type.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach((type) => {
                                    closure_0 = diff;
                                    if (Array.isArray(type)) {
                                      const item = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            const content = type.content;
                                            closure_0 = tmp;
                                            closure_1 = tmp2;
                                            const _Array = Array;
                                            if (Array.isArray(content)) {
                                              const item1 = content.forEach(() => { ... });
                                            } else {
                                              if ("link" !== content.type) {
                                                if ("channelMention" !== content.type) {
                                                  if (null != content.content) {
                                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === tmp) {
                                                tmp2(content);
                                              } else {
                                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(type);
                                      } else {
                                        diff = tmp - 1;
                                        closure_0 = diff;
                                        closure_1 = tmp2;
                                        const _Array2 = Array;
                                        if (Array.isArray(type)) {
                                          const item2 = type.forEach(() => { ... });
                                        } else {
                                          if ("link" !== type.type) {
                                            if ("channelMention" !== type.type) {
                                              if (null != type.content) {
                                                getLinkNodeAtIndex(type.content, diff, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === diff) {
                                            tmp2(type);
                                          } else {
                                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                    return type;
                                  });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach((type) => {
                                closure_0 = diff;
                                if (Array.isArray(type)) {
                                  const item = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        const content = type.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(type);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(type)) {
                                      const item2 = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            getLinkNodeAtIndex(type.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(type);
                                      } else {
                                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return type;
                              });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            getLinkNodeAtIndex(type.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(type);
                      } else {
                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return type;
              });
            } else {
              if ("link" !== content.type) {
                if ("channelMention" !== content.type) {
                  if (null != content.content) {
                    getLinkNodeAtIndex(content.content, linkIndex, closure_11);
                  }
                }
              }
              if (0 === linkIndex) {
                closure_11(content);
              } else {
                getLinkNodeAtIndex(content, linkIndex - 1, closure_11);
              }
            }
          }
        }
      }
      if (0 === linkIndex) {
        closure_11(type);
      } else {
        let diff = linkIndex - 1;
        author = diff;
        closure_1 = closure_11;
        let _Array2 = Array;
        if (Array.isArray(type)) {
          let item2 = type.forEach((type) => {
            closure_0 = diff;
            if (Array.isArray(type)) {
              const item = type.forEach((type) => {
                closure_0 = diff;
                if (Array.isArray(type)) {
                  const item = type.forEach((type) => {
                    closure_0 = diff;
                    if (Array.isArray(type)) {
                      const item = type.forEach(() => { ... });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            const content = type.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach(() => { ... });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(type);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(type)) {
                          const item2 = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                getLinkNodeAtIndex(type.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(type);
                          } else {
                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return type;
                  });
                } else {
                  if ("link" !== type.type) {
                    if ("channelMention" !== type.type) {
                      if (null != type.content) {
                        const content = type.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(type);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(type)) {
                      const item2 = type.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            getLinkNodeAtIndex(type.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(type);
                      } else {
                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return type;
              });
            } else {
              if ("link" !== type.type) {
                if ("channelMention" !== type.type) {
                  if (null != type.content) {
                    const content = type.content;
                    closure_0 = tmp;
                    closure_1 = tmp2;
                    const _Array = Array;
                    if (Array.isArray(content)) {
                      const item1 = content.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach((type) => {
                                    closure_0 = diff;
                                    if (Array.isArray(type)) {
                                      const item = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            const content = type.content;
                                            closure_0 = tmp;
                                            closure_1 = tmp2;
                                            const _Array = Array;
                                            if (Array.isArray(content)) {
                                              const item1 = content.forEach(() => { ... });
                                            } else {
                                              if ("link" !== content.type) {
                                                if ("channelMention" !== content.type) {
                                                  if (null != content.content) {
                                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === tmp) {
                                                tmp2(content);
                                              } else {
                                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(type);
                                      } else {
                                        diff = tmp - 1;
                                        closure_0 = diff;
                                        closure_1 = tmp2;
                                        const _Array2 = Array;
                                        if (Array.isArray(type)) {
                                          const item2 = type.forEach(() => { ... });
                                        } else {
                                          if ("link" !== type.type) {
                                            if ("channelMention" !== type.type) {
                                              if (null != type.content) {
                                                getLinkNodeAtIndex(type.content, diff, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === diff) {
                                            tmp2(type);
                                          } else {
                                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                    return type;
                                  });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach((type) => {
                                closure_0 = diff;
                                if (Array.isArray(type)) {
                                  const item = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        const content = type.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(type);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(type)) {
                                      const item2 = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            getLinkNodeAtIndex(type.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(type);
                                      } else {
                                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return type;
                              });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== content.type) {
                        if ("channelMention" !== content.type) {
                          if (null != content.content) {
                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(content);
                      } else {
                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                      }
                    }
                  }
                }
              }
              if (0 === tmp) {
                tmp2(type);
              } else {
                diff = tmp - 1;
                closure_0 = diff;
                closure_1 = tmp2;
                const _Array2 = Array;
                if (Array.isArray(type)) {
                  const item2 = type.forEach((type) => {
                    closure_0 = diff;
                    if (Array.isArray(type)) {
                      const item = type.forEach((type) => {
                        closure_0 = diff;
                        if (Array.isArray(type)) {
                          const item = type.forEach(() => { ... });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                const content = type.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        getLinkNodeAtIndex(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(type);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(type)) {
                              const item2 = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    getLinkNodeAtIndex(type.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(type);
                              } else {
                                getLinkNodeAtIndex(type, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return type;
                      });
                    } else {
                      if ("link" !== type.type) {
                        if ("channelMention" !== type.type) {
                          if (null != type.content) {
                            const content = type.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach((type) => {
                                closure_0 = diff;
                                if (Array.isArray(type)) {
                                  const item = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        const content = type.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                getLinkNodeAtIndex(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(type);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(type)) {
                                      const item2 = type.forEach(() => { ... });
                                    } else {
                                      if ("link" !== type.type) {
                                        if ("channelMention" !== type.type) {
                                          if (null != type.content) {
                                            getLinkNodeAtIndex(type.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(type);
                                      } else {
                                        getLinkNodeAtIndex(type, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return type;
                              });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                getLinkNodeAtIndex(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(type);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(type)) {
                          const item2 = type.forEach((type) => {
                            closure_0 = diff;
                            if (Array.isArray(type)) {
                              const item = type.forEach(() => { ... });
                            } else {
                              if ("link" !== type.type) {
                                if ("channelMention" !== type.type) {
                                  if (null != type.content) {
                                    const content = type.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            getLinkNodeAtIndex(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        getLinkNodeAtIndex(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(type);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(type)) {
                                  const item2 = type.forEach(() => { ... });
                                } else {
                                  if ("link" !== type.type) {
                                    if ("channelMention" !== type.type) {
                                      if (null != type.content) {
                                        getLinkNodeAtIndex(type.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(type);
                                  } else {
                                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return type;
                          });
                        } else {
                          if ("link" !== type.type) {
                            if ("channelMention" !== type.type) {
                              if (null != type.content) {
                                getLinkNodeAtIndex(type.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(type);
                          } else {
                            getLinkNodeAtIndex(type, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return type;
                  });
                } else {
                  if ("link" !== type.type) {
                    if ("channelMention" !== type.type) {
                      if (null != type.content) {
                        getLinkNodeAtIndex(type.content, diff, tmp2);
                      }
                    }
                  }
                  if (0 === diff) {
                    tmp2(type);
                  } else {
                    getLinkNodeAtIndex(type, diff - 1, tmp2);
                  }
                }
              }
            }
            return type;
          });
        } else {
          if ("link" !== type.type) {
            if ("channelMention" !== type.type) {
              if (null != type.content) {
                getLinkNodeAtIndex(type.content, diff, closure_11);
              }
            }
          }
          if (0 === diff) {
            closure_11(type);
          } else {
            getLinkNodeAtIndex(type, diff - 1, closure_11);
          }
        }
      }
    }
    return type;
  }, items2);
  const items3 = [stateFromStores, postProcessor];
  const items4 = [first, tmp.tapToSee];
  const memo = onPressSearchLink.useMemo(() => {
    if (null == stateFromStores) {
      const intl = util.intl;
      return intl.string(util.t.mE3KJN);
    } else {
      let obj = { postProcessor };
      obj = { pointerEvents: "none", children: null };
      const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: obj.renderMessageMarkupWithParser(SearchResultLinkPreviewMarkup.NativeSearchResultLinkPreviewParser, tmp, obj).content };
      obj.children = closure_2_11(Text_Text.Text, obj1);
      return closure_2_11(hasOwnProperty, obj);
    }
  }, items3);
  let target;
  const memo1 = onPressSearchLink.useMemo(() => {
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            let obj = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.target };
            return closure_2_11(Text_Text.Text, obj);
          }
        }
      }
    }
    if (null != first) {
      let type;
      if (first != null) {
        type = first.type;
      }
      if ("channelMention" === type) {
        obj = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.originalLink };
        return closure_2_11(Text_Text.Text, obj);
      }
    }
    obj = { variant: "text-xs/normal", color: "interactive-text-default", lineClamp: 1, style: tapToSee.tapToSee, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.q2IIoP);
    return closure_2_11(Text_Text.Text, obj);
  }, items4);
  if (first != null) {
    target = first.target;
  }
  const items5 = [target, ];
  let type;
  if (first != null) {
    type = first.type;
  }
  items5[1] = type;
  const items6 = [channelId, messageId, first, onPress, onPressGuildVoiceChannelMention, onPressSearchLink];
  const memo2 = onPressSearchLink.useMemo(() => {
    let type;
    if (first != null) {
      type = first.type;
    }
    if ("channelMention" === type) {
      return closure_2_11(ChatIcon.ChatIcon, { size: "lg" });
    } else if ("link" === type) {
      return closure_2_11(SearchPlatformUtils.getUrlIcon(first.target), { size: "lg" });
    } else {
      return closure_2_11(LinkIcon.LinkIcon, { size: "lg" });
    }
  }, items5);
  const items7 = [author, ];
  let guild_id;
  const callback1 = obj2.useCallback(() => {
    if (null == first) {
      let obj = { channelId, messageId };
      onPress(obj);
    } else if ("link" === first.type) {
      obj = { url: first.target, trusted: MarkupReactLinkUtils.isLinkTrusted(first), messageId, channelId };
      onPressSearchLink(obj);
    } else if ("channelMention" === first.type) {
      channelId = first.channelId;
      const channel = ChannelStore.getChannel(channelId);
      let isGuildVocalResult;
      if (channel != null) {
        isGuildVocalResult = channel.isGuildVocal();
      }
      if (isGuildVocalResult) {
        const obj1 = { channelId, messageId, mentionedChannelId: channelId };
        onPressGuildVoiceChannelMention(obj1);
      } else {
        obj = { url: first.originalLink, trusted: true, messageId, channelId };
        onPressSearchLink(obj);
      }
    }
  }, items6);
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items7[1] = guild_id;
  const items8 = [channelId, messageId, onPress];
  const memo3 = obj2.useMemo(() => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items7);
  const callback2 = obj2.useCallback(() => {
    onPress({ channelId, messageId });
  }, items8);
  obj = { containerStyle, onPress: callback1, children: null };
  obj = { thumbnail: null };
  obj1 = { style: null, children: memo2 };
  const items9 = [tmp.iconContainer, imageStyle];
  obj1.style = items9;
  obj.thumbnail = closure_11(onPressGuildVoiceChannelMention, obj1);
  const items10 = [closure_11(author(channelId[17]).SearchListCardThumbnail, obj), closure_11(author(channelId[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  obj2 = { onPress: callback2, children: closure_11(tmp2(tmp3[17]).SearchListCardFooter, { author, avatarSource: memo3, channel: stateFromStores1 }) };
  items10[2] = closure_11(author(channelId[18]).PressableHighlight, obj2);
  obj.children = items10;
  return postProcessor(author(channelId[17]).SearchListCardContainer, obj);
}
function LinkEmbedGridItem(containerStyle) {
  const embed = containerStyle.embed;
  const sources = containerStyle.sources;
  const author = containerStyle.author;
  const channelId = containerStyle.channelId;
  const messageId = containerStyle.messageId;
  const onPressSearchLink = containerStyle.onPressSearchLink;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  const tmp = closure_13();
  closure_8 = tmp;
  let obj = embed(author[8]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj1 = embed(author[8]);
  const items1 = [imageStyle];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const scale = onPress().scale;
  let url = embed.url;
  let url2 = embed.rawTitle;
  if (url2 == null) {
    const author2 = embed.author;
    let name;
    if (author2 != null) {
      name = author2.name;
    }
    url2 = name;
  }
  if (url2 == null) {
    url2 = embed.url;
  }
  const items2 = [author.id, channelId, embed, imageStyle, messageId, scale, sources, tmp.iconContainer];
  const items3 = [author, ];
  let guild_id;
  const memo = messageId.useMemo(() => closure_2_11(SearchMediaImage.SearchEmbedMediaImage, {
    messageId,
    channelId,
    authorId: author.id,
    sources,
    embed,
    containerStyle: imageStyle,
    renderFallback() {
      const obj = { style: null, children: url(embed(author[15]).LinkIcon, { size: "md" }) };
      const items = [iconContainer.iconContainer, imageStyle];
      obj.style = items;
      return url(onPressSearchLink, obj);
    },
    scale,
    containerHeight: imageStyle.height + React7,
    containerWidth: imageStyle.width + React7
  }), items2);
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items3[1] = guild_id;
  const items4 = [url, onPressSearchLink, url2, channelId, messageId];
  const memo1 = messageId.useMemo(() => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items3);
  const items5 = [channelId, messageId, onPress];
  const callback = obj3.useCallback(() => {
    _modDef38(null != url, "[LinkGridItem] Embed url cannot be null");
    const obj = { url, trusted: MaskedLinkUtils.isLinkTrusted(url, url2), messageId, channelId };
    onPressSearchLink(obj);
  }, items4);
  const callback1 = obj3.useCallback(() => {
    onPress({ channelId, messageId });
  }, items5);
  obj = { containerStyle: containerStyle.containerStyle, onPress: callback, children: null };
  const items6 = [url(embed(author[17]).SearchListCardThumbnail, { thumbnail: memo }), , ];
  if (null == stateFromStores) {
    const intl = tmp2(tmp3[9]).intl;
    url2 = intl.string(tmp2(tmp3[9]).t.mE3KJN);
  }
  obj = { label: url2, subLabel: null };
  if (url == null) {
    const intl2 = tmp2(tmp3[9]).intl;
    url = intl2.string(tmp2(tmp3[9]).t.q2IIoP);
  }
  obj.subLabel = url(embed(author[12]).Text, { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: url });
  items6[1] = url(embed(author[17]).SearchListCardContent, obj);
  obj1 = { onPress: callback1, children: tmp13(tmp2(tmp3[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) };
  items6[2] = url(embed(author[18]).PressableHighlight, obj1);
  obj.children = items6;
  return url2(embed(author[17]).SearchListCardContainer, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, useWindowDimensions: metroRequire } = get_ActivityIndicator);
const SearchConstants = fn(7878);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_9, SearchLinkTypes: c10 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ iconContainer: { alignItems: "center", justifyContent: "center" }, tapToSee: { fontStyle: "italic" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default noop.memo(function LinkGridItem(arg0) {
  ({ data, onPressSearchLink, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    let obj = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ embed: obj2.embed, sources: obj2.sources, messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    obj.onPressSearchLink = onPressSearchLink;
    obj.onPress = onPress;
    obj.imageStyle = imageStyle;
    obj.containerStyle = containerStyle;
    return closure_1_11(LinkEmbedGridItem, obj);
  } else if (tmp2.TEXT === type) {
    obj = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPressGuildVoiceChannelMention: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ messageId: obj.messageId, channelId: obj.channelId, author: obj.author, linkIndex: obj.linkIndex } = data);
    obj.onPressSearchLink = onPressSearchLink;
    obj.onPressGuildVoiceChannelMention = tmp;
    obj.onPress = onPress;
    obj.imageStyle = imageStyle;
    obj.containerStyle = containerStyle;
    return closure_1_11(LinkParsedGridItem, obj);
  } else {
    return null;
  }
});