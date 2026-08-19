// === Module 15898: getLinkNodeAtIndex ===

// Module 15898 (getLinkNodeAtIndex)
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleReaction from "handleReaction" /* 4971 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8507 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function getLinkNodeAtIndex(content, closure_1, fn) {
  closure_0 = closure_1;
  closure_1 = fn;
  if (Array.isArray(content)) {
    const item = content.forEach((item, index) => {
      if (Array.isArray(item)) {
        item = item.forEach((item, index) => {
          if (Array.isArray(item)) {
            item = item.forEach((item, index) => {
              if (Array.isArray(item)) {
                item = item.forEach((item, index) => {
                  if (Array.isArray(item)) {
                    item = item.forEach(() => { ... });
                  } else {
                    if ("link" !== item.type) {
                      if ("channelMention" !== item.type) {
                        if (null != item.content) {
                          const content = item.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach(() => { ... });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  closure_1_14(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              closure_1_14(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(item);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(item)) {
                        const item2 = item.forEach(() => { ... });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              closure_1_14(item.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(item);
                        } else {
                          closure_1_14(item, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return item;
                });
              } else {
                if ("link" !== item.type) {
                  if ("channelMention" !== item.type) {
                    if (null != item.content) {
                      const content = item.content;
                      closure_0 = tmp;
                      closure_1 = tmp2;
                      const _Array = Array;
                      if (Array.isArray(content)) {
                        const item1 = content.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== content.type) {
                          if ("channelMention" !== content.type) {
                            if (null != content.content) {
                              closure_1_14(content.content, tmp, tmp2);
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(content);
                        } else {
                          closure_1_14(content, tmp - 1, tmp2);
                        }
                      }
                    }
                  }
                }
                if (0 === tmp) {
                  tmp2(item);
                } else {
                  diff = tmp - 1;
                  closure_0 = diff;
                  closure_1 = tmp2;
                  const _Array2 = Array;
                  if (Array.isArray(item)) {
                    const item2 = item.forEach((item, index) => {
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              const content = item.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach(() => { ... });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      closure_1_14(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  closure_1_14(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(item);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(item)) {
                            const item2 = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  closure_1_14(item.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(item);
                            } else {
                              closure_1_14(item, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return item;
                    });
                  } else {
                    if ("link" !== item.type) {
                      if ("channelMention" !== item.type) {
                        if (null != item.content) {
                          closure_1_14(item.content, diff, tmp2);
                        }
                      }
                    }
                    if (0 === diff) {
                      tmp2(item);
                    } else {
                      closure_1_14(item, diff - 1, tmp2);
                    }
                  }
                }
              }
              return item;
            });
          } else {
            if ("link" !== item.type) {
              if ("channelMention" !== item.type) {
                if (null != item.content) {
                  const content = item.content;
                  closure_0 = tmp;
                  closure_1 = tmp2;
                  const _Array = Array;
                  if (Array.isArray(content)) {
                    const item1 = content.forEach((item, index) => {
                      if (Array.isArray(item)) {
                        item = item.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              const content = item.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach((item, index) => {
                                  if (Array.isArray(item)) {
                                    item = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          const content = item.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  closure_1_14(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              closure_1_14(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(item);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(item)) {
                                        const item2 = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              closure_1_14(item.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(item);
                                        } else {
                                          closure_1_14(item, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return item;
                                });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      closure_1_14(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  closure_1_14(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(item);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(item)) {
                            const item2 = item.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  closure_1_14(item.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(item);
                            } else {
                              closure_1_14(item, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return item;
                    });
                  } else {
                    if ("link" !== content.type) {
                      if ("channelMention" !== content.type) {
                        if (null != content.content) {
                          closure_1_14(content.content, tmp, tmp2);
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(content);
                    } else {
                      closure_1_14(content, tmp - 1, tmp2);
                    }
                  }
                }
              }
            }
            if (0 === tmp) {
              tmp2(item);
            } else {
              diff = tmp - 1;
              closure_0 = diff;
              closure_1 = tmp2;
              const _Array2 = Array;
              if (Array.isArray(item)) {
                const item2 = item.forEach((item, index) => {
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              const content = item.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach(() => { ... });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      closure_1_14(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  closure_1_14(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(item);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(item)) {
                            const item2 = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  closure_1_14(item.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(item);
                            } else {
                              closure_1_14(item, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return item;
                    });
                  } else {
                    if ("link" !== item.type) {
                      if ("channelMention" !== item.type) {
                        if (null != item.content) {
                          const content = item.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  closure_1_14(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              closure_1_14(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(item);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(item)) {
                        const item2 = item.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              closure_1_14(item.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(item);
                        } else {
                          closure_1_14(item, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return item;
                });
              } else {
                if ("link" !== item.type) {
                  if ("channelMention" !== item.type) {
                    if (null != item.content) {
                      closure_1_14(item.content, diff, tmp2);
                    }
                  }
                }
                if (0 === diff) {
                  tmp2(item);
                } else {
                  closure_1_14(item, diff - 1, tmp2);
                }
              }
            }
          }
          return item;
        });
      } else {
        if ("link" !== item.type) {
          if ("channelMention" !== item.type) {
            if (null != item.content) {
              const content = item.content;
              closure_0 = tmp;
              closure_1 = tmp2;
              const _Array = Array;
              if (Array.isArray(content)) {
                const item1 = content.forEach((item, index) => {
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      if (Array.isArray(item)) {
                        item = item.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              const content = item.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach((item, index) => {
                                  if (Array.isArray(item)) {
                                    item = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          const content = item.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  closure_1_14(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              closure_1_14(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(item);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(item)) {
                                        const item2 = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              closure_1_14(item.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(item);
                                        } else {
                                          closure_1_14(item, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return item;
                                });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      closure_1_14(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  closure_1_14(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(item);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(item)) {
                            const item2 = item.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  closure_1_14(item.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(item);
                            } else {
                              closure_1_14(item, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return item;
                    });
                  } else {
                    if ("link" !== item.type) {
                      if ("channelMention" !== item.type) {
                        if (null != item.content) {
                          const content = item.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach((item, index) => {
                                  if (Array.isArray(item)) {
                                    item = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          const content = item.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  closure_1_14(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              closure_1_14(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(item);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(item)) {
                                        const item2 = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              closure_1_14(item.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(item);
                                        } else {
                                          closure_1_14(item, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return item;
                                });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach((item, index) => {
                                          if (Array.isArray(item)) {
                                            item = item.forEach(() => { ... });
                                          } else {
                                            if ("link" !== item.type) {
                                              if ("channelMention" !== item.type) {
                                                if (null != item.content) {
                                                  const content = item.content;
                                                  closure_0 = tmp;
                                                  closure_1 = tmp2;
                                                  const _Array = Array;
                                                  if (Array.isArray(content)) {
                                                    const item1 = content.forEach(() => { ... });
                                                  } else {
                                                    if ("link" !== content.type) {
                                                      if ("channelMention" !== content.type) {
                                                        if (null != content.content) {
                                                          closure_1_14(content.content, tmp, tmp2);
                                                        }
                                                      }
                                                    }
                                                    if (0 === tmp) {
                                                      tmp2(content);
                                                    } else {
                                                      closure_1_14(content, tmp - 1, tmp2);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(item);
                                            } else {
                                              diff = tmp - 1;
                                              closure_0 = diff;
                                              closure_1 = tmp2;
                                              const _Array2 = Array;
                                              if (Array.isArray(item)) {
                                                const item2 = item.forEach(() => { ... });
                                              } else {
                                                if ("link" !== item.type) {
                                                  if ("channelMention" !== item.type) {
                                                    if (null != item.content) {
                                                      closure_1_14(item.content, diff, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === diff) {
                                                  tmp2(item);
                                                } else {
                                                  closure_1_14(item, diff - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                          return item;
                                        });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach((item, index) => {
                                      if (Array.isArray(item)) {
                                        item = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              const content = item.content;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              const _Array = Array;
                                              if (Array.isArray(content)) {
                                                const item1 = content.forEach(() => { ... });
                                              } else {
                                                if ("link" !== content.type) {
                                                  if ("channelMention" !== content.type) {
                                                    if (null != content.content) {
                                                      closure_1_14(content.content, tmp, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === tmp) {
                                                  tmp2(content);
                                                } else {
                                                  closure_1_14(content, tmp - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(item);
                                        } else {
                                          diff = tmp - 1;
                                          closure_0 = diff;
                                          closure_1 = tmp2;
                                          const _Array2 = Array;
                                          if (Array.isArray(item)) {
                                            const item2 = item.forEach(() => { ... });
                                          } else {
                                            if ("link" !== item.type) {
                                              if ("channelMention" !== item.type) {
                                                if (null != item.content) {
                                                  closure_1_14(item.content, diff, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === diff) {
                                              tmp2(item);
                                            } else {
                                              closure_1_14(item, diff - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                      return item;
                                    });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  closure_1_14(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              closure_1_14(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(item);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(item)) {
                        const item2 = item.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach((item, index) => {
                                      if (Array.isArray(item)) {
                                        item = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              const content = item.content;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              const _Array = Array;
                                              if (Array.isArray(content)) {
                                                const item1 = content.forEach(() => { ... });
                                              } else {
                                                if ("link" !== content.type) {
                                                  if ("channelMention" !== content.type) {
                                                    if (null != content.content) {
                                                      closure_1_14(content.content, tmp, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === tmp) {
                                                  tmp2(content);
                                                } else {
                                                  closure_1_14(content, tmp - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(item);
                                        } else {
                                          diff = tmp - 1;
                                          closure_0 = diff;
                                          closure_1 = tmp2;
                                          const _Array2 = Array;
                                          if (Array.isArray(item)) {
                                            const item2 = item.forEach(() => { ... });
                                          } else {
                                            if ("link" !== item.type) {
                                              if ("channelMention" !== item.type) {
                                                if (null != item.content) {
                                                  closure_1_14(item.content, diff, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === diff) {
                                              tmp2(item);
                                            } else {
                                              closure_1_14(item, diff - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                      return item;
                                    });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach((item, index) => {
                                  if (Array.isArray(item)) {
                                    item = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          const content = item.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  closure_1_14(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              closure_1_14(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(item);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(item)) {
                                        const item2 = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              closure_1_14(item.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(item);
                                        } else {
                                          closure_1_14(item, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return item;
                                });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              closure_1_14(item.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(item);
                        } else {
                          closure_1_14(item, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return item;
                });
              } else {
                if ("link" !== content.type) {
                  if ("channelMention" !== content.type) {
                    if (null != content.content) {
                      closure_1_14(content.content, tmp, tmp2);
                    }
                  }
                }
                if (0 === tmp) {
                  tmp2(content);
                } else {
                  closure_1_14(content, tmp - 1, tmp2);
                }
              }
            }
          }
        }
        if (0 === tmp) {
          tmp2(item);
        } else {
          diff = tmp - 1;
          closure_0 = diff;
          closure_1 = tmp2;
          const _Array2 = Array;
          if (Array.isArray(item)) {
            const item2 = item.forEach((item, index) => {
              if (Array.isArray(item)) {
                item = item.forEach((item, index) => {
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              const content = item.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach(() => { ... });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      closure_1_14(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  closure_1_14(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(item);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(item)) {
                            const item2 = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  closure_1_14(item.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(item);
                            } else {
                              closure_1_14(item, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return item;
                    });
                  } else {
                    if ("link" !== item.type) {
                      if ("channelMention" !== item.type) {
                        if (null != item.content) {
                          const content = item.content;
                          closure_0 = tmp;
                          closure_1 = tmp2;
                          const _Array = Array;
                          if (Array.isArray(content)) {
                            const item1 = content.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== content.type) {
                              if ("channelMention" !== content.type) {
                                if (null != content.content) {
                                  closure_1_14(content.content, tmp, tmp2);
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(content);
                            } else {
                              closure_1_14(content, tmp - 1, tmp2);
                            }
                          }
                        }
                      }
                    }
                    if (0 === tmp) {
                      tmp2(item);
                    } else {
                      diff = tmp - 1;
                      closure_0 = diff;
                      closure_1 = tmp2;
                      const _Array2 = Array;
                      if (Array.isArray(item)) {
                        const item2 = item.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              closure_1_14(item.content, diff, tmp2);
                            }
                          }
                        }
                        if (0 === diff) {
                          tmp2(item);
                        } else {
                          closure_1_14(item, diff - 1, tmp2);
                        }
                      }
                    }
                  }
                  return item;
                });
              } else {
                if ("link" !== item.type) {
                  if ("channelMention" !== item.type) {
                    if (null != item.content) {
                      const content = item.content;
                      closure_0 = tmp;
                      closure_1 = tmp2;
                      const _Array = Array;
                      if (Array.isArray(content)) {
                        const item1 = content.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach((item, index) => {
                                      if (Array.isArray(item)) {
                                        item = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              const content = item.content;
                                              closure_0 = tmp;
                                              closure_1 = tmp2;
                                              const _Array = Array;
                                              if (Array.isArray(content)) {
                                                const item1 = content.forEach(() => { ... });
                                              } else {
                                                if ("link" !== content.type) {
                                                  if ("channelMention" !== content.type) {
                                                    if (null != content.content) {
                                                      closure_1_14(content.content, tmp, tmp2);
                                                    }
                                                  }
                                                }
                                                if (0 === tmp) {
                                                  tmp2(content);
                                                } else {
                                                  closure_1_14(content, tmp - 1, tmp2);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(item);
                                        } else {
                                          diff = tmp - 1;
                                          closure_0 = diff;
                                          closure_1 = tmp2;
                                          const _Array2 = Array;
                                          if (Array.isArray(item)) {
                                            const item2 = item.forEach(() => { ... });
                                          } else {
                                            if ("link" !== item.type) {
                                              if ("channelMention" !== item.type) {
                                                if (null != item.content) {
                                                  closure_1_14(item.content, diff, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === diff) {
                                              tmp2(item);
                                            } else {
                                              closure_1_14(item, diff - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                      return item;
                                    });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach((item, index) => {
                                  if (Array.isArray(item)) {
                                    item = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          const content = item.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  closure_1_14(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              closure_1_14(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(item);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(item)) {
                                        const item2 = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              closure_1_14(item.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(item);
                                        } else {
                                          closure_1_14(item, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return item;
                                });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== content.type) {
                          if ("channelMention" !== content.type) {
                            if (null != content.content) {
                              closure_1_14(content.content, tmp, tmp2);
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(content);
                        } else {
                          closure_1_14(content, tmp - 1, tmp2);
                        }
                      }
                    }
                  }
                }
                if (0 === tmp) {
                  tmp2(item);
                } else {
                  diff = tmp - 1;
                  closure_0 = diff;
                  closure_1 = tmp2;
                  const _Array2 = Array;
                  if (Array.isArray(item)) {
                    const item2 = item.forEach((item, index) => {
                      if (Array.isArray(item)) {
                        item = item.forEach((item, index) => {
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  const content = item.content;
                                  closure_0 = tmp;
                                  closure_1 = tmp2;
                                  const _Array = Array;
                                  if (Array.isArray(content)) {
                                    const item1 = content.forEach(() => { ... });
                                  } else {
                                    if ("link" !== content.type) {
                                      if ("channelMention" !== content.type) {
                                        if (null != content.content) {
                                          closure_1_14(content.content, tmp, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(content);
                                    } else {
                                      closure_1_14(content, tmp - 1, tmp2);
                                    }
                                  }
                                }
                              }
                            }
                            if (0 === tmp) {
                              tmp2(item);
                            } else {
                              diff = tmp - 1;
                              closure_0 = diff;
                              closure_1 = tmp2;
                              const _Array2 = Array;
                              if (Array.isArray(item)) {
                                const item2 = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      closure_1_14(item.content, diff, tmp2);
                                    }
                                  }
                                }
                                if (0 === diff) {
                                  tmp2(item);
                                } else {
                                  closure_1_14(item, diff - 1, tmp2);
                                }
                              }
                            }
                          }
                          return item;
                        });
                      } else {
                        if ("link" !== item.type) {
                          if ("channelMention" !== item.type) {
                            if (null != item.content) {
                              const content = item.content;
                              closure_0 = tmp;
                              closure_1 = tmp2;
                              const _Array = Array;
                              if (Array.isArray(content)) {
                                const item1 = content.forEach((item, index) => {
                                  if (Array.isArray(item)) {
                                    item = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          const content = item.content;
                                          closure_0 = tmp;
                                          closure_1 = tmp2;
                                          const _Array = Array;
                                          if (Array.isArray(content)) {
                                            const item1 = content.forEach(() => { ... });
                                          } else {
                                            if ("link" !== content.type) {
                                              if ("channelMention" !== content.type) {
                                                if (null != content.content) {
                                                  closure_1_14(content.content, tmp, tmp2);
                                                }
                                              }
                                            }
                                            if (0 === tmp) {
                                              tmp2(content);
                                            } else {
                                              closure_1_14(content, tmp - 1, tmp2);
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (0 === tmp) {
                                      tmp2(item);
                                    } else {
                                      diff = tmp - 1;
                                      closure_0 = diff;
                                      closure_1 = tmp2;
                                      const _Array2 = Array;
                                      if (Array.isArray(item)) {
                                        const item2 = item.forEach(() => { ... });
                                      } else {
                                        if ("link" !== item.type) {
                                          if ("channelMention" !== item.type) {
                                            if (null != item.content) {
                                              closure_1_14(item.content, diff, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === diff) {
                                          tmp2(item);
                                        } else {
                                          closure_1_14(item, diff - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                  return item;
                                });
                              } else {
                                if ("link" !== content.type) {
                                  if ("channelMention" !== content.type) {
                                    if (null != content.content) {
                                      closure_1_14(content.content, tmp, tmp2);
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(content);
                                } else {
                                  closure_1_14(content, tmp - 1, tmp2);
                                }
                              }
                            }
                          }
                        }
                        if (0 === tmp) {
                          tmp2(item);
                        } else {
                          diff = tmp - 1;
                          closure_0 = diff;
                          closure_1 = tmp2;
                          const _Array2 = Array;
                          if (Array.isArray(item)) {
                            const item2 = item.forEach((item, index) => {
                              if (Array.isArray(item)) {
                                item = item.forEach(() => { ... });
                              } else {
                                if ("link" !== item.type) {
                                  if ("channelMention" !== item.type) {
                                    if (null != item.content) {
                                      const content = item.content;
                                      closure_0 = tmp;
                                      closure_1 = tmp2;
                                      const _Array = Array;
                                      if (Array.isArray(content)) {
                                        const item1 = content.forEach(() => { ... });
                                      } else {
                                        if ("link" !== content.type) {
                                          if ("channelMention" !== content.type) {
                                            if (null != content.content) {
                                              closure_1_14(content.content, tmp, tmp2);
                                            }
                                          }
                                        }
                                        if (0 === tmp) {
                                          tmp2(content);
                                        } else {
                                          closure_1_14(content, tmp - 1, tmp2);
                                        }
                                      }
                                    }
                                  }
                                }
                                if (0 === tmp) {
                                  tmp2(item);
                                } else {
                                  diff = tmp - 1;
                                  closure_0 = diff;
                                  closure_1 = tmp2;
                                  const _Array2 = Array;
                                  if (Array.isArray(item)) {
                                    const item2 = item.forEach(() => { ... });
                                  } else {
                                    if ("link" !== item.type) {
                                      if ("channelMention" !== item.type) {
                                        if (null != item.content) {
                                          closure_1_14(item.content, diff, tmp2);
                                        }
                                      }
                                    }
                                    if (0 === diff) {
                                      tmp2(item);
                                    } else {
                                      closure_1_14(item, diff - 1, tmp2);
                                    }
                                  }
                                }
                              }
                              return item;
                            });
                          } else {
                            if ("link" !== item.type) {
                              if ("channelMention" !== item.type) {
                                if (null != item.content) {
                                  closure_1_14(item.content, diff, tmp2);
                                }
                              }
                            }
                            if (0 === diff) {
                              tmp2(item);
                            } else {
                              closure_1_14(item, diff - 1, tmp2);
                            }
                          }
                        }
                      }
                      return item;
                    });
                  } else {
                    if ("link" !== item.type) {
                      if ("channelMention" !== item.type) {
                        if (null != item.content) {
                          closure_1_14(item.content, diff, tmp2);
                        }
                      }
                    }
                    if (0 === diff) {
                      tmp2(item);
                    } else {
                      closure_1_14(item, diff - 1, tmp2);
                    }
                  }
                }
              }
              return item;
            });
          } else {
            if ("link" !== item.type) {
              if ("channelMention" !== item.type) {
                if (null != item.content) {
                  closure_1_14(item.content, diff, tmp2);
                }
              }
            }
            if (0 === diff) {
              tmp2(item);
            } else {
              closure_1_14(item, diff - 1, tmp2);
            }
          }
        }
      }
      return item;
    });
  } else {
    if ("link" !== content.type) {
      if ("channelMention" !== content.type) {
        if (null != content.content) {
          getLinkNodeAtIndex(content.content, closure_1, fn);
        }
      }
    }
    if (0 === closure_1) {
      fn(content);
    } else {
      getLinkNodeAtIndex(content, closure_1 - 1, fn);
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
  const tmp = callback2();
  closure_7 = tmp;
  let obj = author(channelId[8]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getMessage(messageId));
  obj1 = author(channelId[8]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.getChannel(channelId));
  const tmp6 = messageId(onPressSearchLink.useState(null), 2);
  const first = tmp6[0];
  const items2 = [linkIndex];
  const callback = onPressSearchLink.useCallback((type) => {
    author = closure_1;
    closure_1 = callback;
    if (Array.isArray(type)) {
      let item = type.forEach((item, index) => {
        if (Array.isArray(item)) {
          item = item.forEach((item, index) => {
            if (Array.isArray(item)) {
              item = item.forEach((item, index) => {
                if (Array.isArray(item)) {
                  item = item.forEach(() => { ... });
                } else {
                  if ("link" !== item.type) {
                    if ("channelMention" !== item.type) {
                      if (null != item.content) {
                        const content = item.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach(() => { ... });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                closure_1_14(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            closure_1_14(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(item);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(item)) {
                      const item2 = item.forEach(() => { ... });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            closure_1_14(item.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(item);
                      } else {
                        closure_1_14(item, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return item;
              });
            } else {
              if ("link" !== item.type) {
                if ("channelMention" !== item.type) {
                  if (null != item.content) {
                    const content = item.content;
                    closure_0 = tmp;
                    closure_1 = tmp2;
                    const _Array = Array;
                    if (Array.isArray(content)) {
                      const item1 = content.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== content.type) {
                        if ("channelMention" !== content.type) {
                          if (null != content.content) {
                            closure_1_14(content.content, tmp, tmp2);
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(content);
                      } else {
                        closure_1_14(content, tmp - 1, tmp2);
                      }
                    }
                  }
                }
              }
              if (0 === tmp) {
                tmp2(item);
              } else {
                diff = tmp - 1;
                closure_0 = diff;
                closure_1 = tmp2;
                const _Array2 = Array;
                if (Array.isArray(item)) {
                  const item2 = item.forEach((item, index) => {
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            const content = item.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach(() => { ... });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    closure_1_14(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                closure_1_14(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(item);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(item)) {
                          const item2 = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                closure_1_14(item.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(item);
                          } else {
                            closure_1_14(item, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return item;
                  });
                } else {
                  if ("link" !== item.type) {
                    if ("channelMention" !== item.type) {
                      if (null != item.content) {
                        closure_1_14(item.content, diff, tmp2);
                      }
                    }
                  }
                  if (0 === diff) {
                    tmp2(item);
                  } else {
                    closure_1_14(item, diff - 1, tmp2);
                  }
                }
              }
            }
            return item;
          });
        } else {
          if ("link" !== item.type) {
            if ("channelMention" !== item.type) {
              if (null != item.content) {
                const content = item.content;
                closure_0 = tmp;
                closure_1 = tmp2;
                const _Array = Array;
                if (Array.isArray(content)) {
                  const item1 = content.forEach((item, index) => {
                    if (Array.isArray(item)) {
                      item = item.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            const content = item.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach((item, index) => {
                                if (Array.isArray(item)) {
                                  item = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        const content = item.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                closure_1_14(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            closure_1_14(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(item);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(item)) {
                                      const item2 = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            closure_1_14(item.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(item);
                                      } else {
                                        closure_1_14(item, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return item;
                              });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    closure_1_14(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                closure_1_14(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(item);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(item)) {
                          const item2 = item.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                closure_1_14(item.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(item);
                          } else {
                            closure_1_14(item, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return item;
                  });
                } else {
                  if ("link" !== content.type) {
                    if ("channelMention" !== content.type) {
                      if (null != content.content) {
                        closure_1_14(content.content, tmp, tmp2);
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(content);
                  } else {
                    closure_1_14(content, tmp - 1, tmp2);
                  }
                }
              }
            }
          }
          if (0 === tmp) {
            tmp2(item);
          } else {
            diff = tmp - 1;
            closure_0 = diff;
            closure_1 = tmp2;
            const _Array2 = Array;
            if (Array.isArray(item)) {
              const item2 = item.forEach((item, index) => {
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            const content = item.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach(() => { ... });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    closure_1_14(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                closure_1_14(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(item);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(item)) {
                          const item2 = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                closure_1_14(item.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(item);
                          } else {
                            closure_1_14(item, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return item;
                  });
                } else {
                  if ("link" !== item.type) {
                    if ("channelMention" !== item.type) {
                      if (null != item.content) {
                        const content = item.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                closure_1_14(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            closure_1_14(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(item);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(item)) {
                      const item2 = item.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            closure_1_14(item.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(item);
                      } else {
                        closure_1_14(item, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return item;
              });
            } else {
              if ("link" !== item.type) {
                if ("channelMention" !== item.type) {
                  if (null != item.content) {
                    closure_1_14(item.content, diff, tmp2);
                  }
                }
              }
              if (0 === diff) {
                tmp2(item);
              } else {
                closure_1_14(item, diff - 1, tmp2);
              }
            }
          }
        }
        return item;
      });
    } else {
      if ("link" !== type.type) {
        if ("channelMention" !== type.type) {
          if (null != type.content) {
            let content = type.content;
            author = tmp;
            closure_1 = callback;
            let _Array = Array;
            if (Array.isArray(content)) {
              let item1 = content.forEach((item, index) => {
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    if (Array.isArray(item)) {
                      item = item.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            const content = item.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach((item, index) => {
                                if (Array.isArray(item)) {
                                  item = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        const content = item.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                closure_1_14(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            closure_1_14(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(item);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(item)) {
                                      const item2 = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            closure_1_14(item.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(item);
                                      } else {
                                        closure_1_14(item, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return item;
                              });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    closure_1_14(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                closure_1_14(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(item);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(item)) {
                          const item2 = item.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                closure_1_14(item.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(item);
                          } else {
                            closure_1_14(item, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return item;
                  });
                } else {
                  if ("link" !== item.type) {
                    if ("channelMention" !== item.type) {
                      if (null != item.content) {
                        const content = item.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach((item, index) => {
                                if (Array.isArray(item)) {
                                  item = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        const content = item.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                closure_1_14(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            closure_1_14(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(item);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(item)) {
                                      const item2 = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            closure_1_14(item.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(item);
                                      } else {
                                        closure_1_14(item, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return item;
                              });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach((item, index) => {
                                        if (Array.isArray(item)) {
                                          item = item.forEach(() => { ... });
                                        } else {
                                          if ("link" !== item.type) {
                                            if ("channelMention" !== item.type) {
                                              if (null != item.content) {
                                                const content = item.content;
                                                closure_0 = tmp;
                                                closure_1 = tmp2;
                                                const _Array = Array;
                                                if (Array.isArray(content)) {
                                                  const item1 = content.forEach(() => { ... });
                                                } else {
                                                  if ("link" !== content.type) {
                                                    if ("channelMention" !== content.type) {
                                                      if (null != content.content) {
                                                        closure_1_14(content.content, tmp, tmp2);
                                                      }
                                                    }
                                                  }
                                                  if (0 === tmp) {
                                                    tmp2(content);
                                                  } else {
                                                    closure_1_14(content, tmp - 1, tmp2);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(item);
                                          } else {
                                            diff = tmp - 1;
                                            closure_0 = diff;
                                            closure_1 = tmp2;
                                            const _Array2 = Array;
                                            if (Array.isArray(item)) {
                                              const item2 = item.forEach(() => { ... });
                                            } else {
                                              if ("link" !== item.type) {
                                                if ("channelMention" !== item.type) {
                                                  if (null != item.content) {
                                                    closure_1_14(item.content, diff, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === diff) {
                                                tmp2(item);
                                              } else {
                                                closure_1_14(item, diff - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                        return item;
                                      });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach((item, index) => {
                                    if (Array.isArray(item)) {
                                      item = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            const content = item.content;
                                            closure_0 = tmp;
                                            closure_1 = tmp2;
                                            const _Array = Array;
                                            if (Array.isArray(content)) {
                                              const item1 = content.forEach(() => { ... });
                                            } else {
                                              if ("link" !== content.type) {
                                                if ("channelMention" !== content.type) {
                                                  if (null != content.content) {
                                                    closure_1_14(content.content, tmp, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === tmp) {
                                                tmp2(content);
                                              } else {
                                                closure_1_14(content, tmp - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(item);
                                      } else {
                                        diff = tmp - 1;
                                        closure_0 = diff;
                                        closure_1 = tmp2;
                                        const _Array2 = Array;
                                        if (Array.isArray(item)) {
                                          const item2 = item.forEach(() => { ... });
                                        } else {
                                          if ("link" !== item.type) {
                                            if ("channelMention" !== item.type) {
                                              if (null != item.content) {
                                                closure_1_14(item.content, diff, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === diff) {
                                            tmp2(item);
                                          } else {
                                            closure_1_14(item, diff - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                    return item;
                                  });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                closure_1_14(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            closure_1_14(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(item);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(item)) {
                      const item2 = item.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach((item, index) => {
                                    if (Array.isArray(item)) {
                                      item = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            const content = item.content;
                                            closure_0 = tmp;
                                            closure_1 = tmp2;
                                            const _Array = Array;
                                            if (Array.isArray(content)) {
                                              const item1 = content.forEach(() => { ... });
                                            } else {
                                              if ("link" !== content.type) {
                                                if ("channelMention" !== content.type) {
                                                  if (null != content.content) {
                                                    closure_1_14(content.content, tmp, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === tmp) {
                                                tmp2(content);
                                              } else {
                                                closure_1_14(content, tmp - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(item);
                                      } else {
                                        diff = tmp - 1;
                                        closure_0 = diff;
                                        closure_1 = tmp2;
                                        const _Array2 = Array;
                                        if (Array.isArray(item)) {
                                          const item2 = item.forEach(() => { ... });
                                        } else {
                                          if ("link" !== item.type) {
                                            if ("channelMention" !== item.type) {
                                              if (null != item.content) {
                                                closure_1_14(item.content, diff, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === diff) {
                                            tmp2(item);
                                          } else {
                                            closure_1_14(item, diff - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                    return item;
                                  });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach((item, index) => {
                                if (Array.isArray(item)) {
                                  item = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        const content = item.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                closure_1_14(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            closure_1_14(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(item);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(item)) {
                                      const item2 = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            closure_1_14(item.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(item);
                                      } else {
                                        closure_1_14(item, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return item;
                              });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            closure_1_14(item.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(item);
                      } else {
                        closure_1_14(item, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return item;
              });
            } else {
              if ("link" !== content.type) {
                if ("channelMention" !== content.type) {
                  if (null != content.content) {
                    getLinkNodeAtIndex(content.content, tmp, callback);
                  }
                }
              }
              if (0 === tmp) {
                callback(content);
              } else {
                getLinkNodeAtIndex(content, tmp - 1, callback);
              }
            }
          }
        }
      }
      if (0 === tmp) {
        callback(type);
      } else {
        let diff = tmp - 1;
        author = diff;
        closure_1 = callback;
        let _Array2 = Array;
        if (Array.isArray(type)) {
          let item2 = type.forEach((item, index) => {
            if (Array.isArray(item)) {
              item = item.forEach((item, index) => {
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            const content = item.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach(() => { ... });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    closure_1_14(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                closure_1_14(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(item);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(item)) {
                          const item2 = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                closure_1_14(item.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(item);
                          } else {
                            closure_1_14(item, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return item;
                  });
                } else {
                  if ("link" !== item.type) {
                    if ("channelMention" !== item.type) {
                      if (null != item.content) {
                        const content = item.content;
                        closure_0 = tmp;
                        closure_1 = tmp2;
                        const _Array = Array;
                        if (Array.isArray(content)) {
                          const item1 = content.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== content.type) {
                            if ("channelMention" !== content.type) {
                              if (null != content.content) {
                                closure_1_14(content.content, tmp, tmp2);
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(content);
                          } else {
                            closure_1_14(content, tmp - 1, tmp2);
                          }
                        }
                      }
                    }
                  }
                  if (0 === tmp) {
                    tmp2(item);
                  } else {
                    diff = tmp - 1;
                    closure_0 = diff;
                    closure_1 = tmp2;
                    const _Array2 = Array;
                    if (Array.isArray(item)) {
                      const item2 = item.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            closure_1_14(item.content, diff, tmp2);
                          }
                        }
                      }
                      if (0 === diff) {
                        tmp2(item);
                      } else {
                        closure_1_14(item, diff - 1, tmp2);
                      }
                    }
                  }
                }
                return item;
              });
            } else {
              if ("link" !== item.type) {
                if ("channelMention" !== item.type) {
                  if (null != item.content) {
                    const content = item.content;
                    closure_0 = tmp;
                    closure_1 = tmp2;
                    const _Array = Array;
                    if (Array.isArray(content)) {
                      const item1 = content.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach((item, index) => {
                                    if (Array.isArray(item)) {
                                      item = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            const content = item.content;
                                            closure_0 = tmp;
                                            closure_1 = tmp2;
                                            const _Array = Array;
                                            if (Array.isArray(content)) {
                                              const item1 = content.forEach(() => { ... });
                                            } else {
                                              if ("link" !== content.type) {
                                                if ("channelMention" !== content.type) {
                                                  if (null != content.content) {
                                                    closure_1_14(content.content, tmp, tmp2);
                                                  }
                                                }
                                              }
                                              if (0 === tmp) {
                                                tmp2(content);
                                              } else {
                                                closure_1_14(content, tmp - 1, tmp2);
                                              }
                                            }
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(item);
                                      } else {
                                        diff = tmp - 1;
                                        closure_0 = diff;
                                        closure_1 = tmp2;
                                        const _Array2 = Array;
                                        if (Array.isArray(item)) {
                                          const item2 = item.forEach(() => { ... });
                                        } else {
                                          if ("link" !== item.type) {
                                            if ("channelMention" !== item.type) {
                                              if (null != item.content) {
                                                closure_1_14(item.content, diff, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === diff) {
                                            tmp2(item);
                                          } else {
                                            closure_1_14(item, diff - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                    return item;
                                  });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach((item, index) => {
                                if (Array.isArray(item)) {
                                  item = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        const content = item.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                closure_1_14(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            closure_1_14(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(item);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(item)) {
                                      const item2 = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            closure_1_14(item.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(item);
                                      } else {
                                        closure_1_14(item, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return item;
                              });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== content.type) {
                        if ("channelMention" !== content.type) {
                          if (null != content.content) {
                            closure_1_14(content.content, tmp, tmp2);
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(content);
                      } else {
                        closure_1_14(content, tmp - 1, tmp2);
                      }
                    }
                  }
                }
              }
              if (0 === tmp) {
                tmp2(item);
              } else {
                diff = tmp - 1;
                closure_0 = diff;
                closure_1 = tmp2;
                const _Array2 = Array;
                if (Array.isArray(item)) {
                  const item2 = item.forEach((item, index) => {
                    if (Array.isArray(item)) {
                      item = item.forEach((item, index) => {
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                const content = item.content;
                                closure_0 = tmp;
                                closure_1 = tmp2;
                                const _Array = Array;
                                if (Array.isArray(content)) {
                                  const item1 = content.forEach(() => { ... });
                                } else {
                                  if ("link" !== content.type) {
                                    if ("channelMention" !== content.type) {
                                      if (null != content.content) {
                                        closure_1_14(content.content, tmp, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(content);
                                  } else {
                                    closure_1_14(content, tmp - 1, tmp2);
                                  }
                                }
                              }
                            }
                          }
                          if (0 === tmp) {
                            tmp2(item);
                          } else {
                            diff = tmp - 1;
                            closure_0 = diff;
                            closure_1 = tmp2;
                            const _Array2 = Array;
                            if (Array.isArray(item)) {
                              const item2 = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    closure_1_14(item.content, diff, tmp2);
                                  }
                                }
                              }
                              if (0 === diff) {
                                tmp2(item);
                              } else {
                                closure_1_14(item, diff - 1, tmp2);
                              }
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      if ("link" !== item.type) {
                        if ("channelMention" !== item.type) {
                          if (null != item.content) {
                            const content = item.content;
                            closure_0 = tmp;
                            closure_1 = tmp2;
                            const _Array = Array;
                            if (Array.isArray(content)) {
                              const item1 = content.forEach((item, index) => {
                                if (Array.isArray(item)) {
                                  item = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        const content = item.content;
                                        closure_0 = tmp;
                                        closure_1 = tmp2;
                                        const _Array = Array;
                                        if (Array.isArray(content)) {
                                          const item1 = content.forEach(() => { ... });
                                        } else {
                                          if ("link" !== content.type) {
                                            if ("channelMention" !== content.type) {
                                              if (null != content.content) {
                                                closure_1_14(content.content, tmp, tmp2);
                                              }
                                            }
                                          }
                                          if (0 === tmp) {
                                            tmp2(content);
                                          } else {
                                            closure_1_14(content, tmp - 1, tmp2);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (0 === tmp) {
                                    tmp2(item);
                                  } else {
                                    diff = tmp - 1;
                                    closure_0 = diff;
                                    closure_1 = tmp2;
                                    const _Array2 = Array;
                                    if (Array.isArray(item)) {
                                      const item2 = item.forEach(() => { ... });
                                    } else {
                                      if ("link" !== item.type) {
                                        if ("channelMention" !== item.type) {
                                          if (null != item.content) {
                                            closure_1_14(item.content, diff, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === diff) {
                                        tmp2(item);
                                      } else {
                                        closure_1_14(item, diff - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                                return item;
                              });
                            } else {
                              if ("link" !== content.type) {
                                if ("channelMention" !== content.type) {
                                  if (null != content.content) {
                                    closure_1_14(content.content, tmp, tmp2);
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(content);
                              } else {
                                closure_1_14(content, tmp - 1, tmp2);
                              }
                            }
                          }
                        }
                      }
                      if (0 === tmp) {
                        tmp2(item);
                      } else {
                        diff = tmp - 1;
                        closure_0 = diff;
                        closure_1 = tmp2;
                        const _Array2 = Array;
                        if (Array.isArray(item)) {
                          const item2 = item.forEach((item, index) => {
                            if (Array.isArray(item)) {
                              item = item.forEach(() => { ... });
                            } else {
                              if ("link" !== item.type) {
                                if ("channelMention" !== item.type) {
                                  if (null != item.content) {
                                    const content = item.content;
                                    closure_0 = tmp;
                                    closure_1 = tmp2;
                                    const _Array = Array;
                                    if (Array.isArray(content)) {
                                      const item1 = content.forEach(() => { ... });
                                    } else {
                                      if ("link" !== content.type) {
                                        if ("channelMention" !== content.type) {
                                          if (null != content.content) {
                                            closure_1_14(content.content, tmp, tmp2);
                                          }
                                        }
                                      }
                                      if (0 === tmp) {
                                        tmp2(content);
                                      } else {
                                        closure_1_14(content, tmp - 1, tmp2);
                                      }
                                    }
                                  }
                                }
                              }
                              if (0 === tmp) {
                                tmp2(item);
                              } else {
                                diff = tmp - 1;
                                closure_0 = diff;
                                closure_1 = tmp2;
                                const _Array2 = Array;
                                if (Array.isArray(item)) {
                                  const item2 = item.forEach(() => { ... });
                                } else {
                                  if ("link" !== item.type) {
                                    if ("channelMention" !== item.type) {
                                      if (null != item.content) {
                                        closure_1_14(item.content, diff, tmp2);
                                      }
                                    }
                                  }
                                  if (0 === diff) {
                                    tmp2(item);
                                  } else {
                                    closure_1_14(item, diff - 1, tmp2);
                                  }
                                }
                              }
                            }
                            return item;
                          });
                        } else {
                          if ("link" !== item.type) {
                            if ("channelMention" !== item.type) {
                              if (null != item.content) {
                                closure_1_14(item.content, diff, tmp2);
                              }
                            }
                          }
                          if (0 === diff) {
                            tmp2(item);
                          } else {
                            closure_1_14(item, diff - 1, tmp2);
                          }
                        }
                      }
                    }
                    return item;
                  });
                } else {
                  if ("link" !== item.type) {
                    if ("channelMention" !== item.type) {
                      if (null != item.content) {
                        closure_1_14(item.content, diff, tmp2);
                      }
                    }
                  }
                  if (0 === diff) {
                    tmp2(item);
                  } else {
                    closure_1_14(item, diff - 1, tmp2);
                  }
                }
              }
            }
            return item;
          });
        } else {
          if ("link" !== type.type) {
            if ("channelMention" !== type.type) {
              if (null != type.content) {
                getLinkNodeAtIndex(type.content, diff, callback);
              }
            }
          }
          if (0 === diff) {
            callback(type);
          } else {
            getLinkNodeAtIndex(type, diff - 1, callback);
          }
        }
      }
    }
    return type;
  }, items2);
  const items3 = [stateFromStores, callback];
  const items4 = [first, tmp.tapToSee];
  const memo = onPressSearchLink.useMemo(() => {
    if (null == stateFromStores) {
      const intl = author(channelId[9]).intl;
      return intl.string(author(channelId[9]).t.mE3KJN);
    } else {
      author(channelId[10]);
      let obj = { postProcessor: null };
      obj[0] = callback;
      obj = { pointerEvents: "none", children: null };
      obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
      obj1[3] = obj.renderMessageMarkupWithParser(author(channelId[11]).NativeSearchResultLinkPreviewParser, tmp, obj).content;
      obj[1] = callback(author(channelId[12]).Text, obj1);
      return callback(onPressGuildVoiceChannelMention, obj);
    }
  }, items3);
  let target;
  const memo1 = onPressSearchLink.useMemo(() => {
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            let obj = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: null };
            obj[3] = first.target;
            return callback(author(channelId[12]).Text, obj);
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
        obj = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: null };
        obj[3] = first.originalLink;
        return callback(author(channelId[12]).Text, obj);
      }
    }
    obj = { variant: "text-xs/normal", color: "interactive-text-default", lineClamp: 1, style: store.tapToSee, children: null };
    const intl = author(channelId[9]).intl;
    obj[4] = intl.string(author(channelId[9]).t.q2IIoP);
    return callback(author(channelId[12]).Text, obj);
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
      return callback(author(channelId[13]).ChatIcon, { size: "lg" });
    } else if ("link" === type) {
      return callback(author(channelId[14]).getUrlIcon(first.target), { size: "lg" });
    } else {
      return callback(author(channelId[15]).LinkIcon, { size: "lg" });
    }
  }, items5);
  const items7 = [author, ];
  let guild_id;
  const callback1 = obj3.useCallback(() => {
    if (null == first) {
      let obj = { channelId: null, messageId: null };
      obj[0] = channelId;
      obj[1] = messageId;
      onPress(obj);
    } else if ("link" === first.type) {
      obj = { url: null, trusted: null, messageId: null, channelId: null };
      obj[0] = first.target;
      obj[1] = author(channelId[16]).isLinkTrusted(first);
      obj[2] = messageId;
      obj[3] = channelId;
      onPressSearchLink(obj);
      const obj4 = author(channelId[16]);
    } else if ("channelMention" === first.type) {
      channelId = first.channelId;
      const channel = store.getChannel(channelId);
      let isGuildVocalResult;
      if (channel != null) {
        isGuildVocalResult = channel.isGuildVocal();
      }
      if (isGuildVocalResult) {
        obj1 = { channelId: null, messageId: null, mentionedChannelId: null };
        obj1[0] = channelId;
        obj1[1] = messageId;
        obj1[2] = channelId;
        onPressGuildVoiceChannelMention(obj1);
      } else {
        obj = { url: null, trusted: true, messageId: null, channelId: null };
        obj[0] = first.originalLink;
        obj[2] = messageId;
        obj[3] = channelId;
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
  callback2 = obj3.useCallback(() => {
    onPress({ channelId, messageId });
  }, items8);
  obj = { thumbnail: callback(onPressGuildVoiceChannelMention, { style: items9, children: memo2 }) };
  items9 = [tmp.iconContainer, imageStyle];
  const items10 = [callback(author(channelId[17]).SearchListCardThumbnail, obj), callback(author(channelId[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  obj1 = { onPress: callback2, children: callback(tmp2(tmp3[17]).SearchListCardFooter, { author, avatarSource: memo3, channel: stateFromStores1 }) };
  items10[2] = callback(author(channelId[18]).PressableHighlight, obj1);
  obj[2] = items10;
  return callback(author(channelId[17]).SearchListCardContainer, obj);
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
  const tmp = callback2();
  closure_8 = tmp;
  let obj = embed(author[8]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => message.getMessage(messageId));
  obj1 = embed(author[8]);
  const items1 = [imageStyle];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => imageStyle.getChannel(channelId));
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
  const memo = messageId.useMemo(() => url(embed(author[19]).SearchEmbedMediaImage, {
    messageId,
    channelId,
    authorId: author.id,
    sources,
    embed,
    containerStyle: imageStyle,
    renderFallback() {
      const items = [iconContainer.iconContainer, closure_7];
      return url(onPressSearchLink, { style: items, children: url(embed(author[15]).LinkIcon, { size: "md" }) });
    },
    scale,
    containerHeight: imageStyle.height + stateFromStores1,
    containerWidth: imageStyle.width + stateFromStores1
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
    sources(author[20])(null != url, "[LinkGridItem] Embed url cannot be null");
    const obj = { url, trusted: embed(author[21]).isLinkTrusted(url, url2), messageId, channelId };
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
  obj[1] = url(embed(author[12]).Text, { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: url });
  items6[1] = url(embed(author[17]).SearchListCardContent, obj);
  obj1 = { onPress: callback1, children: tmp13(tmp2(tmp3[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) };
  items6[2] = url(embed(author[18]).PressableHighlight, obj1);
  obj[2] = items6;
  return url2(embed(author[17]).SearchListCardContainer, obj);
}
let c4 = importAllResult;
({ View: c5, useWindowDimensions: closure_6 } = get_ActivityIndicator);
({ FILE_OR_LINK_IMAGE_BUFFER: c9, SearchLinkTypes: c10 } = MessageEmbedTypes);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles({ iconContainer: { alignItems: "center", justifyContent: "center" }, tapToSee: { fontStyle: "italic" } });
const memoResult = importAllResult.memo(function LinkGridItem(arg0) {
  ({ data, onPressSearchLink, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    let obj = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ embed: obj2[0], sources: obj2[1], messageId: obj2[2], channelId: obj2[3], author: obj2[4], linkIndex: obj2[5] } = data);
    obj[6] = onPressSearchLink;
    obj[7] = onPress;
    obj[8] = imageStyle;
    obj[9] = containerStyle;
    return callback(LinkEmbedGridItem, obj);
  } else if (tmp2.TEXT === type) {
    obj = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink: null, onPressGuildVoiceChannelMention: null, onPress: null, imageStyle: null, containerStyle: null };
    ({ messageId: obj[0], channelId: obj[1], author: obj[2], linkIndex: obj[3] } = data);
    obj[4] = onPressSearchLink;
    obj[5] = tmp;
    obj[6] = onPress;
    obj[7] = imageStyle;
    obj[8] = containerStyle;
    return callback(LinkParsedGridItem, obj);
  } else {
    return null;
  }
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default memoResult;