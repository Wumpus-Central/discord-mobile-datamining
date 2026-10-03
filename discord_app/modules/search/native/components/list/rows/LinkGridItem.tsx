// discord_app/modules/search/native/components/list/rows/LinkGridItem.tsx
import _modDef38 from "../../../../../../../_runtime/metro/00038__.js";
import c from "../../../../../../../_runtime/00576_c.js";
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
  const items = [stateFromStores];
  stateFromStores = author(channelId[8]).useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj = author(channelId[8]);
  const items1 = [tapToSee];
  const stateFromStores1 = author(channelId[8]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
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
      const obj2 = { postProcessor };
      const obj3 = { pointerEvents: "none", children: null };
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: renderMessageMarkup.renderMessageMarkupWithParser(SearchResultLinkPreviewMarkup.NativeSearchResultLinkPreviewParser, tmp, obj2).content };
      obj3.children = closure_2_11(Text_Text.Text, obj4);
      return closure_2_11(hasOwnProperty, obj3);
    }
  }, items3);
  let target;
  const memo1 = onPressSearchLink.useMemo(() => {
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            const obj2 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.target };
            return closure_2_11(Text_Text.Text, obj2);
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
        const obj3 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.originalLink };
        return closure_2_11(Text_Text.Text, obj3);
      }
    }
    const obj = { variant: "text-xs/normal", color: "interactive-text-default", lineClamp: 1, style: tapToSee.tapToSee, children: null };
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
  const callback1 = obj3.useCallback(() => {
    if (null == first) {
      const obj2 = { channelId, messageId };
      onPress(obj2);
    } else if ("link" === first.type) {
      const obj3 = { url: first.target, trusted: MarkupReactLinkUtils.isLinkTrusted(first), messageId, channelId };
      onPressSearchLink(obj3);
    } else if ("channelMention" === first.type) {
      channelId = first.channelId;
      const channel = ChannelStore.getChannel(channelId);
      let isGuildVocalResult;
      if (channel != null) {
        isGuildVocalResult = channel.isGuildVocal();
      }
      if (isGuildVocalResult) {
        const obj5 = { channelId, messageId, mentionedChannelId: channelId };
        onPressGuildVoiceChannelMention(obj5);
      } else {
        const obj = { url: first.originalLink, trusted: true, messageId, channelId };
        onPressSearchLink(obj);
      }
    }
  }, items6);
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items7[1] = guild_id;
  const items8 = [channelId, messageId, onPress];
  const memo3 = obj3.useMemo(() => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items7);
  const callback2 = obj3.useCallback(() => {
    onPress({ channelId, messageId });
  }, items8);
  let obj4 = { containerStyle, onPress: callback1, children: null };
  let obj5 = { thumbnail: null };
  const obj6 = { style: null, children: memo2 };
  const items9 = [tmp.iconContainer, imageStyle];
  obj6.style = items9;
  obj5.thumbnail = closure_11(onPressGuildVoiceChannelMention, obj6);
  const items10 = [closure_11(author(channelId[17]).SearchListCardThumbnail, obj5), closure_11(author(channelId[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  let obj2 = author(channelId[8]);
  items10[2] = closure_11(author(channelId[18]).PressableHighlight, { onPress: callback2, children: closure_11(author(channelId[17]).SearchListCardFooter, { author, avatarSource: memo3, channel: stateFromStores1 }) });
  obj4.children = items10;
  return postProcessor(author(channelId[17]).SearchListCardContainer, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, useWindowDimensions: metroRequire } = get_ActivityIndicator);
const SearchConstants = fn(7513);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_9, SearchLinkTypes: c10 } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({ iconContainer: { alignItems: "center", justifyContent: "center" }, tapToSee: { fontStyle: "italic" } });
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = author(messageId[20]).c(60);
  ({ embed, sources, author } = channelId);
  channelId = channelId.channelId;
  messageId = channelId.messageId;
  const onPressSearchLink = channelId.onPressSearchLink;
  const onPress = channelId.onPress;
  const imageStyle = channelId.imageStyle;
  const tmp4 = closure_13();
  iconContainer = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [url];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== messageId) {
    const fn = function l() {
      return SearchMessageStore.getMessage(messageId);
    };
    cResult[1] = messageId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = author(messageId[20]);
  const stateFromStores = author(messageId[8]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    const fn2 = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[4] = channelId;
    cResult[5] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = author(messageId[8]);
  stateFromStores1 = author(messageId[8]).useStateFromStores(tmp9, tmp11);
  const scale = iconContainer().scale;
  url = embed.url;
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
  if (cResult[6] === imageStyle) {
    if (cResult[7] === tmp4.iconContainer) {
      let tmp14 = cResult[8];
    }
    const sum = imageStyle.height + url2;
    const sum1 = imageStyle.width + url2;
    if (cResult[9] === author.id) {
      if (cResult[10] === channelId) {
        if (cResult[11] === embed) {
          if (cResult[12] === imageStyle) {
            if (cResult[13] === messageId) {
              if (cResult[14] === scale) {
                if (cResult[15] === sources) {
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === sum) {
                      if (cResult[18] === sum1) {
                        let tmp18 = cResult[19];
                      }
                      if (cResult[20] === author) {
                        let guild_id;
                        if (stateFromStores1 != null) {
                          guild_id = stateFromStores1.guild_id;
                        }
                        if (cResult[21] === guild_id) {
                          let tmp22 = cResult[22];
                        }
                        if (cResult[23] !== tmp22) {
                          const tmp22Result = tmp22();
                          cResult[23] = tmp22;
                          cResult[24] = tmp22Result;
                        }
                        if (cResult[25] === channelId) {
                          if (cResult[26] === url2) {
                            if (cResult[27] === url) {
                              if (cResult[28] === messageId) {
                                if (cResult[31] === channelId) {
                                  if (cResult[32] === messageId) {
                                    if (cResult[35] !== tmp18) {
                                      class D {
                                        constructor() {
                                          obj = { channelId, messageId };
                                          tmp = onPress(obj);
                                          return;
                                        }
                                      }
                                      const tmp30 = closure_11(author(tmp2[17]).SearchListCardThumbnail, { thumbnail: null });
                                      cResult[35] = tmp18;
                                      cResult[36] = tmp30;
                                      const obj2 = { thumbnail: null };
                                    }
                                    class D {
                                      constructor() {
                                        obj = { channelId, messageId };
                                        tmp = onPress(obj);
                                        return;
                                      }
                                    }
                                    if (null == stateFromStores) {
                                      const string = author(tmp2[9]).intl.string;
                                      class D {
                                        constructor() {
                                          obj = { channelId, messageId };
                                          tmp = onPress(obj);
                                          return;
                                        }
                                      }
                                    }
                                    cResult[37] = url2;
                                    cResult[38] = stateFromStores;
                                    cResult[39] = url2;
                                  }
                                }
                                class D {
                                  constructor() {
                                    obj = { channelId, messageId };
                                    tmp = onPress(obj);
                                    return;
                                  }
                                }
                                cResult[31] = channelId;
                                cResult[32] = messageId;
                                cResult[33] = onPress;
                                cResult[34] = D;
                              }
                            }
                          }
                        }
                        const fn4 = function q() {
                          _modDef38(null != url, "[LinkGridItem] Embed url cannot be null");
                          const obj = { url, trusted: MaskedLinkUtils.isLinkTrusted(url, url2), messageId, channelId };
                          onPressSearchLink(obj);
                        };
                        cResult[25] = channelId;
                        cResult[26] = url2;
                        cResult[27] = url;
                        cResult[28] = messageId;
                        cResult[29] = onPressSearchLink;
                        cResult[30] = fn4;
                      }
                      cResult[20] = author;
                      let guild_id1;
                      if (stateFromStores1 != null) {
                        guild_id1 = stateFromStores1.guild_id;
                      }
                      const fn3 = function j() {
                        let guild_id;
                        if (stateFromStores1 != null) {
                          guild_id = stateFromStores1.guild_id;
                        }
                        return author.getAvatarSource(guild_id);
                      };
                      cResult[21] = guild_id1;
                      cResult[22] = fn3;
                      tmp22 = fn3;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj3 = { messageId, channelId, authorId: author.id, sources, embed, containerStyle: imageStyle, renderFallback: tmp14, scale, containerHeight: sum, containerWidth: sum1 };
    const tmp20 = closure_11(author(tmp2[21]).SearchEmbedMediaImage, obj3);
    cResult[9] = author.id;
    cResult[10] = channelId;
    cResult[11] = embed;
    cResult[12] = imageStyle;
    cResult[13] = messageId;
    cResult[14] = scale;
    cResult[15] = sources;
    cResult[16] = tmp14;
    cResult[17] = sum;
    cResult[18] = sum1;
    cResult[19] = tmp20;
    tmp18 = tmp20;
  }
  class G {
    constructor() {
      obj = { style: null, children: jsx(closure_0(closure_2[15]).LinkIcon, { size: "md" }) };
      items = [, ];
      items[0] = closure_6.iconContainer;
      items[1] = imageStyle;
      obj.style = items;
      return jsx(View, obj);
    }
  }
  cResult[6] = imageStyle;
  cResult[7] = tmp4.iconContainer;
  cResult[8] = G;
  tmp14 = G;
  const tmpResult2 = author(messageId[8]);
}) : ((containerStyle) => {
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
  let items = [closure_8];
  const stateFromStores = embed(author[8]).useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj = embed(author[8]);
  const items1 = [imageStyle];
  const stateFromStores1 = embed(author[8]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
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
    containerHeight: imageStyle.height + options,
    containerWidth: imageStyle.width + options
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
  const obj4 = { containerStyle: containerStyle.containerStyle, onPress: callback, children: null };
  const items6 = [url(embed(author[17]).SearchListCardThumbnail, { thumbnail: memo }), , ];
  if (null == stateFromStores) {
    const intl = tmp2(tmp3[9]).intl;
    url2 = intl.string(tmp2(tmp3[9]).t.mE3KJN);
  }
  const obj5 = { label: url2, subLabel: null };
  if (url == null) {
    const intl2 = tmp2(tmp3[9]).intl;
    url = intl2.string(tmp2(tmp3[9]).t.q2IIoP);
  }
  obj5.subLabel = url(embed(author[12]).Text, { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: url });
  items6[1] = url(embed(author[17]).SearchListCardContent, obj5);
  const obj2 = embed(author[8]);
  const tmp12 = url2;
  items6[2] = url(embed(author[18]).PressableHighlight, { onPress: callback1, children: url(embed(author[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) });
  obj4.children = items6;
  return tmp12(embed(author[17]).SearchListCardContainer, obj4);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(21);
  ({ data, onPressSearchLink, onPressGuildVoiceChannelMention, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    if (cResult[0] === containerStyle) {
      if (cResult[1] === data.author) {
        if (cResult[2] === data.channelId) {
          if (cResult[3] === data.embed) {
            if (cResult[4] === data.linkIndex) {
              if (cResult[5] === data.messageId) {
                if (cResult[6] === data.sources) {
                  if (cResult[7] === imageStyle) {
                    if (cResult[8] === onPress) {
                      if (cResult[9] === onPressSearchLink) {
                        let tmp8 = cResult[10];
                      }
                      return tmp8;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj5 = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ embed: obj3.embed, sources: obj3.sources, messageId: obj3.messageId, channelId: obj3.channelId, author: obj3.author, linkIndex: obj3.linkIndex } = data);
    obj5.onPressSearchLink = onPressSearchLink;
    obj5.onPress = onPress;
    obj5.imageStyle = imageStyle;
    obj5.containerStyle = containerStyle;
    const tmp11 = closure_1_11(closure_16, obj5);
    cResult[0] = containerStyle;
    cResult[1] = data.author;
    cResult[2] = data.channelId;
    cResult[3] = data.embed;
    cResult[4] = data.linkIndex;
    cResult[5] = data.messageId;
    cResult[6] = data.sources;
    cResult[7] = imageStyle;
    cResult[8] = onPress;
    cResult[9] = onPressSearchLink;
    cResult[10] = tmp11;
    tmp8 = tmp11;
  } else if (tmp2.TEXT === type) {
    if (cResult[11] === containerStyle) {
      if (cResult[12] === data.author) {
        if (cResult[13] === data.channelId) {
          if (cResult[14] === data.linkIndex) {
            if (cResult[15] === data.messageId) {
              if (cResult[16] === imageStyle) {
                if (cResult[17] === onPress) {
                  if (cResult[18] === onPressGuildVoiceChannelMention) {
                    if (cResult[19] === onPressSearchLink) {
                      let tmp4 = cResult[20];
                    }
                    return tmp4;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj6 = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPressGuildVoiceChannelMention: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    obj6.onPressSearchLink = onPressSearchLink;
    obj6.onPressGuildVoiceChannelMention = onPressGuildVoiceChannelMention;
    obj6.onPress = onPress;
    obj6.imageStyle = imageStyle;
    obj6.containerStyle = containerStyle;
    const tmp7 = closure_1_11(LinkParsedGridItem, obj6);
    cResult[11] = containerStyle;
    cResult[12] = data.author;
    cResult[13] = data.channelId;
    cResult[14] = data.linkIndex;
    cResult[15] = data.messageId;
    cResult[16] = imageStyle;
    cResult[17] = onPress;
    cResult[18] = onPressGuildVoiceChannelMention;
    cResult[19] = onPressSearchLink;
    cResult[20] = tmp7;
    tmp4 = tmp7;
  } else {
    return null;
  }
}) : ((arg0) => {
  ({ data, onPressSearchLink, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    const obj3 = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ embed: obj2.embed, sources: obj2.sources, messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    obj3.onPressSearchLink = onPressSearchLink;
    obj3.onPress = onPress;
    obj3.imageStyle = imageStyle;
    obj3.containerStyle = containerStyle;
    return closure_1_11(closure_16, obj3);
  } else if (tmp2.TEXT === type) {
    const obj = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPressGuildVoiceChannelMention: null, onPress: null, imageStyle: null, containerStyle: null };
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
}));