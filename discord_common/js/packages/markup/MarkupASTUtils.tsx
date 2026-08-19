// discord_common/js/packages/markup/MarkupASTUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

function collectAst(content) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  if (Array.isArray(content)) {
    const item = content.forEach((item, index) => {
      let items = items1;
      if (items1 === undefined) {
        items = [];
      }
      items1 = items;
      if (Array.isArray(item)) {
        item = item.forEach((item, index) => {
          let items = items1;
          if (items1 === undefined) {
            items = [];
          }
          items1 = items;
          if (Array.isArray(item)) {
            item = item.forEach((item, index) => {
              let items = items1;
              if (items1 === undefined) {
                items = [];
              }
              items1 = items;
              if (Array.isArray(item)) {
                item = item.forEach((item, index) => {
                  let items = items1;
                  if (items1 === undefined) {
                    items = [];
                  }
                  items1 = items;
                  if (Array.isArray(item)) {
                    item = item.forEach(() => { ... });
                  } else if (typeof item.content === "string") {
                    items.push(item.content);
                  } else if (null != item.content) {
                    let content = item.content;
                    items1 = items;
                    if (items === undefined) {
                      items1 = [];
                    }
                    let _Array = Array;
                    if (Array.isArray(content)) {
                      let item1 = content.forEach(() => { ... });
                    } else if (typeof content.content === "string") {
                      items1.push(content.content);
                    } else if (null != content.content) {
                      closure_1_0(content.content, items1);
                    }
                  }
                  return items;
                });
              } else if (typeof item.content === "string") {
                items.push(item.content);
              } else if (null != item.content) {
                let content = item.content;
                items1 = items;
                if (items === undefined) {
                  items1 = [];
                }
                let _Array = Array;
                if (Array.isArray(content)) {
                  let item1 = content.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof content.content === "string") {
                  items1.push(content.content);
                } else if (null != content.content) {
                  closure_1_0(content.content, items1);
                }
              }
              return items;
            });
          } else if (typeof item.content === "string") {
            items.push(item.content);
          } else if (null != item.content) {
            let content = item.content;
            items1 = items;
            if (items === undefined) {
              items1 = [];
            }
            let _Array = Array;
            if (Array.isArray(content)) {
              let item1 = content.forEach((item, index) => {
                let items = items1;
                if (items1 === undefined) {
                  items = [];
                }
                items1 = items;
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof item.content === "string") {
                  items.push(item.content);
                } else if (null != item.content) {
                  let content = item.content;
                  items1 = items;
                  if (items === undefined) {
                    items1 = [];
                  }
                  let _Array = Array;
                  if (Array.isArray(content)) {
                    let item1 = content.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof content.content === "string") {
                    items1.push(content.content);
                  } else if (null != content.content) {
                    closure_1_0(content.content, items1);
                  }
                }
                return items;
              });
            } else if (typeof content.content === "string") {
              items1.push(content.content);
            } else if (null != content.content) {
              closure_1_0(content.content, items1);
            }
          }
          return items;
        });
      } else if (typeof item.content === "string") {
        items.push(item.content);
      } else if (null != item.content) {
        let content = item.content;
        items1 = items;
        if (items === undefined) {
          items1 = [];
        }
        let _Array = Array;
        if (Array.isArray(content)) {
          let item1 = content.forEach((item, index) => {
            let items = items1;
            if (items1 === undefined) {
              items = [];
            }
            items1 = items;
            if (Array.isArray(item)) {
              item = item.forEach((item, index) => {
                let items = items1;
                if (items1 === undefined) {
                  items = [];
                }
                items1 = items;
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof item.content === "string") {
                  items.push(item.content);
                } else if (null != item.content) {
                  let content = item.content;
                  items1 = items;
                  if (items === undefined) {
                    items1 = [];
                  }
                  let _Array = Array;
                  if (Array.isArray(content)) {
                    let item1 = content.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof content.content === "string") {
                    items1.push(content.content);
                  } else if (null != content.content) {
                    closure_1_0(content.content, items1);
                  }
                }
                return items;
              });
            } else if (typeof item.content === "string") {
              items.push(item.content);
            } else if (null != item.content) {
              let content = item.content;
              items1 = items;
              if (items === undefined) {
                items1 = [];
              }
              let _Array = Array;
              if (Array.isArray(content)) {
                let item1 = content.forEach((item, index) => {
                  let items = items1;
                  if (items1 === undefined) {
                    items = [];
                  }
                  items1 = items;
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof item.content === "string") {
                    items.push(item.content);
                  } else if (null != item.content) {
                    let content = item.content;
                    items1 = items;
                    if (items === undefined) {
                      items1 = [];
                    }
                    let _Array = Array;
                    if (Array.isArray(content)) {
                      let item1 = content.forEach((item, index) => {
                        let items = items1;
                        if (items1 === undefined) {
                          items = [];
                        }
                        items1 = items;
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else if (typeof item.content === "string") {
                          items.push(item.content);
                        } else if (null != item.content) {
                          let content = item.content;
                          items1 = items;
                          if (items === undefined) {
                            items1 = [];
                          }
                          let _Array = Array;
                          if (Array.isArray(content)) {
                            let item1 = content.forEach(() => { ... });
                          } else if (typeof content.content === "string") {
                            items1.push(content.content);
                          } else if (null != content.content) {
                            closure_1_0(content.content, items1);
                          }
                        }
                        return items;
                      });
                    } else if (typeof content.content === "string") {
                      items1.push(content.content);
                    } else if (null != content.content) {
                      closure_1_0(content.content, items1);
                    }
                  }
                  return items;
                });
              } else if (typeof content.content === "string") {
                items1.push(content.content);
              } else if (null != content.content) {
                closure_1_0(content.content, items1);
              }
            }
            return items;
          });
        } else if (typeof content.content === "string") {
          items1.push(content.content);
        } else if (null != content.content) {
          closure_1_0(content.content, items1);
        }
      }
      return items;
    });
  } else if (typeof content.content === "string") {
    items.push(content.content);
  } else if (null != content.content) {
    items(content.content, items);
  }
  return items;
}
let closure_1 = {};
const prototype = function MarkupParserNodeTypeError(arg0) {
  let _Array;
  let tmp8;
  let tmp9;
  let set = new Set();
  const items = [arg0];
  if (items.length > 0) {
    do {
      let arr = items.pop();
      if (undefined !== arr) {
        let _Array2 = Array;
        if (Array.isArray(arr)) {
          let push3 = items.push;
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
          tmp8 = items1;
          tmp9 = items;
          let applyResult = HermesBuiltin.apply(items1, items);
        } else {
          let addResult = set.add(arr.type);
          let isArray = "content" in arr;
          if (isArray) {
            _Array = Array;
            isArray = Array.isArray(arr.content);
          }
          if (isArray) {
            let push = items.push;
            let items2 = [];
            arraySpreadResult = HermesBuiltin.arraySpread(arr.content, 0);
            tmp8 = items2;
            tmp9 = items;
            let applyResult1 = HermesBuiltin.apply(items2, items);
          }
          let isArray1 = "items" in arr;
          if (isArray1) {
            _Array = Array;
            isArray1 = Array.isArray(arr.items);
          }
          if (isArray1) {
            let push2 = items.push;
            let items3 = [];
            let arraySpreadResult1 = HermesBuiltin.arraySpread(arr.items, 0);
            tmp8 = items3;
            tmp9 = items;
            let applyResult2 = HermesBuiltin.apply(items3, items);
          }
        }
      }
    } while (items.length > 0);
  }
  arr = Array.from(set);
  set = new set(prototype.getMessage(arr), tmp8, tmp9, _Array, tmp4, arr);
  // ThrowIfThisInitialized (0x7c)
  set.nodeTypes = arr;
  return set;
}.prototype;
class prototype extends Error {
}
prototype["getMessage"] = function getMessage(join) {
  return "MarkupParserNodeTypeError: Unknown AST node type in \"" + join.join(", ") + "\" caused rendering failure";
};
const result = obj132.fileFinishedImporting("../discord_common/js/packages/markup/MarkupASTUtils.tsx");
function flattenAst(isSlate, content, content) {
  closure_0 = isSlate;
  let tmp3 = content;
  if (content === undefined) {
    tmp3 = null;
  }
  if (Array.isArray(content)) {
    const items = [];
    for (let num3 = 0; num3 < length; num3 = num3 + 1) {
      let arr3 = flattenAst(isSlate, content[num3], tmp3);
      let _Array = Array;
      if (Array.isArray(arr3)) {
        let length2 = arr3.length;
        for (let num4 = 0; num4 < length2; num4 = num4 + 1) {
          let arr = items.push(arr3[num4]);
        }
      } else {
        arr = items.push(arr3);
      }
    }
    if (!isSlate.isSlate) {
      let num5 = 0;
      let tmp11 = null;
      if (0 < items.length) {
        do {
          let tmp12 = items[num5];
          let diff = num5;
          let tmp16 = tmp12;
          if (null != tmp11) {
            diff = num5;
            tmp16 = tmp12;
            if ("text" === tmp11.type) {
              diff = num5;
              tmp16 = tmp12;
              if (tmp11.type === tmp12.type) {
                diff = num5;
                tmp16 = tmp12;
                if (typeof tmp11.content === "string") {
                  diff = num5;
                  tmp16 = tmp12;
                  if (typeof tmp12.content === "string") {
                    tmp11.content = tmp11.content + tmp12.content;
                    let spliceResult = items.splice(num5, 1);
                    diff = num5 - 1;
                    tmp16 = tmp11;
                  }
                }
              }
            }
          }
          num5 = diff + 1;
          tmp11 = tmp16;
        } while (num5 < items.length);
      }
    }
    return items;
  } else {
    if (null != content.content) {
      content.content = flattenAst(isSlate, content.content, content);
    }
    if ("inlineCode" === content.type) {
      delete tmp2[tmp];
    }
    if ("list" === content.type) {
      const items1 = content.items;
      content.items = items1.map((item, index) => {
        let tmp = item;
        if (Array.isArray(item)) {
          tmp = flattenAst(closure_0, item, null);
        }
        return tmp;
      });
    }
    if (null != tmp3) {
      if (content.type === tmp3.type) {
        content = content.content;
      }
    }
    return content;
  }
}
function constrainAst(content, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { limit: 200, hasBailedAst: false };
  }
  if (Array.isArray(content)) {
    let num = 0;
    if (0 < length) {
      const ast = constrainAst(content[num], obj).ast;
      while (ast !== closure_1) {
        content[num] = ast;
        num = num + 1;
      }
      obj.hasBailedAst = true;
      content.length = num;
    }
    length = content.length;
  } else if ("text" !== content.type) {
    obj.limit = obj.limit - 1;
    if (obj.limit <= 0) {
      obj.hasBailedAst = true;
      obj = { ast: null, hasBailedAst: true };
      obj[0] = closure_1;
      return obj;
    } else {
      const _Array = Array;
      if (Array.isArray(content.content)) {
        content.content = constrainAst(content.content, obj).ast;
      }
      if ("list" === content.type) {
        const items = content.items;
        content.items = items.map((item, index) => constrainAst(item, obj).ast);
      }
    }
  }
  obj = { ast: content, hasBailedAst: obj.hasBailedAst };
  return obj;
}

export const NUM_MAX_AST_NODES = 200;
export const astToString = function astToString(applicationSubscriptionSystemMessageASTContent) {
  let items = [];
  if (Array.isArray(applicationSubscriptionSystemMessageASTContent)) {
    const item = applicationSubscriptionSystemMessageASTContent.forEach((item, index) => {
      let items = items1;
      if (items1 === undefined) {
        items = [];
      }
      items1 = items;
      if (Array.isArray(item)) {
        item = item.forEach((item, index) => {
          let items = items1;
          if (items1 === undefined) {
            items = [];
          }
          items1 = items;
          if (Array.isArray(item)) {
            item = item.forEach((item, index) => {
              let items = items1;
              if (items1 === undefined) {
                items = [];
              }
              items1 = items;
              if (Array.isArray(item)) {
                item = item.forEach((item, index) => {
                  let items = items1;
                  if (items1 === undefined) {
                    items = [];
                  }
                  items1 = items;
                  if (Array.isArray(item)) {
                    item = item.forEach(() => { ... });
                  } else if (typeof item.content === "string") {
                    items.push(item.content);
                  } else if (null != item.content) {
                    let content = item.content;
                    items1 = items;
                    if (items === undefined) {
                      items1 = [];
                    }
                    let _Array = Array;
                    if (Array.isArray(content)) {
                      let item1 = content.forEach(() => { ... });
                    } else if (typeof content.content === "string") {
                      items1.push(content.content);
                    } else if (null != content.content) {
                      closure_1_0(content.content, items1);
                    }
                  }
                  return items;
                });
              } else if (typeof item.content === "string") {
                items.push(item.content);
              } else if (null != item.content) {
                let content = item.content;
                items1 = items;
                if (items === undefined) {
                  items1 = [];
                }
                let _Array = Array;
                if (Array.isArray(content)) {
                  let item1 = content.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof content.content === "string") {
                  items1.push(content.content);
                } else if (null != content.content) {
                  closure_1_0(content.content, items1);
                }
              }
              return items;
            });
          } else if (typeof item.content === "string") {
            items.push(item.content);
          } else if (null != item.content) {
            let content = item.content;
            items1 = items;
            if (items === undefined) {
              items1 = [];
            }
            let _Array = Array;
            if (Array.isArray(content)) {
              let item1 = content.forEach((item, index) => {
                let items = items1;
                if (items1 === undefined) {
                  items = [];
                }
                items1 = items;
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof item.content === "string") {
                  items.push(item.content);
                } else if (null != item.content) {
                  let content = item.content;
                  items1 = items;
                  if (items === undefined) {
                    items1 = [];
                  }
                  let _Array = Array;
                  if (Array.isArray(content)) {
                    let item1 = content.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof content.content === "string") {
                    items1.push(content.content);
                  } else if (null != content.content) {
                    closure_1_0(content.content, items1);
                  }
                }
                return items;
              });
            } else if (typeof content.content === "string") {
              items1.push(content.content);
            } else if (null != content.content) {
              closure_1_0(content.content, items1);
            }
          }
          return items;
        });
      } else if (typeof item.content === "string") {
        items.push(item.content);
      } else if (null != item.content) {
        let content = item.content;
        items1 = items;
        if (items === undefined) {
          items1 = [];
        }
        let _Array = Array;
        if (Array.isArray(content)) {
          let item1 = content.forEach((item, index) => {
            let items = items1;
            if (items1 === undefined) {
              items = [];
            }
            items1 = items;
            if (Array.isArray(item)) {
              item = item.forEach((item, index) => {
                let items = items1;
                if (items1 === undefined) {
                  items = [];
                }
                items1 = items;
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof item.content === "string") {
                  items.push(item.content);
                } else if (null != item.content) {
                  let content = item.content;
                  items1 = items;
                  if (items === undefined) {
                    items1 = [];
                  }
                  let _Array = Array;
                  if (Array.isArray(content)) {
                    let item1 = content.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof content.content === "string") {
                    items1.push(content.content);
                  } else if (null != content.content) {
                    closure_1_0(content.content, items1);
                  }
                }
                return items;
              });
            } else if (typeof item.content === "string") {
              items.push(item.content);
            } else if (null != item.content) {
              let content = item.content;
              items1 = items;
              if (items === undefined) {
                items1 = [];
              }
              let _Array = Array;
              if (Array.isArray(content)) {
                let item1 = content.forEach((item, index) => {
                  let items = items1;
                  if (items1 === undefined) {
                    items = [];
                  }
                  items1 = items;
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof item.content === "string") {
                    items.push(item.content);
                  } else if (null != item.content) {
                    let content = item.content;
                    items1 = items;
                    if (items === undefined) {
                      items1 = [];
                    }
                    let _Array = Array;
                    if (Array.isArray(content)) {
                      let item1 = content.forEach((item, index) => {
                        let items = items1;
                        if (items1 === undefined) {
                          items = [];
                        }
                        items1 = items;
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else if (typeof item.content === "string") {
                          items.push(item.content);
                        } else if (null != item.content) {
                          let content = item.content;
                          items1 = items;
                          if (items === undefined) {
                            items1 = [];
                          }
                          let _Array = Array;
                          if (Array.isArray(content)) {
                            let item1 = content.forEach(() => { ... });
                          } else if (typeof content.content === "string") {
                            items1.push(content.content);
                          } else if (null != content.content) {
                            closure_1_0(content.content, items1);
                          }
                        }
                        return items;
                      });
                    } else if (typeof content.content === "string") {
                      items1.push(content.content);
                    } else if (null != content.content) {
                      closure_1_0(content.content, items1);
                    }
                  }
                  return items;
                });
              } else if (typeof content.content === "string") {
                items1.push(content.content);
              } else if (null != content.content) {
                closure_1_0(content.content, items1);
              }
            }
            return items;
          });
        } else if (typeof content.content === "string") {
          items1.push(content.content);
        } else if (null != content.content) {
          closure_1_0(content.content, items1);
        }
      }
      return items;
    });
  } else if (typeof applicationSubscriptionSystemMessageASTContent.content === "string") {
    items.push(applicationSubscriptionSystemMessageASTContent.content);
  } else if (null != applicationSubscriptionSystemMessageASTContent.content) {
    const content = applicationSubscriptionSystemMessageASTContent.content;
    items = undefined;
    const _Array = Array;
    if (Array.isArray(content)) {
      const item1 = content.forEach((item, index) => {
        let items = items1;
        if (items1 === undefined) {
          items = [];
        }
        items1 = items;
        if (Array.isArray(item)) {
          item = item.forEach((item, index) => {
            let items = items1;
            if (items1 === undefined) {
              items = [];
            }
            items1 = items;
            if (Array.isArray(item)) {
              item = item.forEach((item, index) => {
                let items = items1;
                if (items1 === undefined) {
                  items = [];
                }
                items1 = items;
                if (Array.isArray(item)) {
                  item = item.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach(() => { ... });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach(() => { ... });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof item.content === "string") {
                  items.push(item.content);
                } else if (null != item.content) {
                  let content = item.content;
                  items1 = items;
                  if (items === undefined) {
                    items1 = [];
                  }
                  let _Array = Array;
                  if (Array.isArray(content)) {
                    let item1 = content.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof content.content === "string") {
                    items1.push(content.content);
                  } else if (null != content.content) {
                    closure_1_0(content.content, items1);
                  }
                }
                return items;
              });
            } else if (typeof item.content === "string") {
              items.push(item.content);
            } else if (null != item.content) {
              let content = item.content;
              items1 = items;
              if (items === undefined) {
                items1 = [];
              }
              let _Array = Array;
              if (Array.isArray(content)) {
                let item1 = content.forEach((item, index) => {
                  let items = items1;
                  if (items1 === undefined) {
                    items = [];
                  }
                  items1 = items;
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof item.content === "string") {
                    items.push(item.content);
                  } else if (null != item.content) {
                    let content = item.content;
                    items1 = items;
                    if (items === undefined) {
                      items1 = [];
                    }
                    let _Array = Array;
                    if (Array.isArray(content)) {
                      let item1 = content.forEach((item, index) => {
                        let items = items1;
                        if (items1 === undefined) {
                          items = [];
                        }
                        items1 = items;
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else if (typeof item.content === "string") {
                          items.push(item.content);
                        } else if (null != item.content) {
                          let content = item.content;
                          items1 = items;
                          if (items === undefined) {
                            items1 = [];
                          }
                          let _Array = Array;
                          if (Array.isArray(content)) {
                            let item1 = content.forEach(() => { ... });
                          } else if (typeof content.content === "string") {
                            items1.push(content.content);
                          } else if (null != content.content) {
                            closure_1_0(content.content, items1);
                          }
                        }
                        return items;
                      });
                    } else if (typeof content.content === "string") {
                      items1.push(content.content);
                    } else if (null != content.content) {
                      closure_1_0(content.content, items1);
                    }
                  }
                  return items;
                });
              } else if (typeof content.content === "string") {
                items1.push(content.content);
              } else if (null != content.content) {
                closure_1_0(content.content, items1);
              }
            }
            return items;
          });
        } else if (typeof item.content === "string") {
          items.push(item.content);
        } else if (null != item.content) {
          let content = item.content;
          items1 = items;
          if (items === undefined) {
            items1 = [];
          }
          let _Array = Array;
          if (Array.isArray(content)) {
            let item1 = content.forEach((item, index) => {
              let items = items1;
              if (items1 === undefined) {
                items = [];
              }
              items1 = items;
              if (Array.isArray(item)) {
                item = item.forEach((item, index) => {
                  let items = items1;
                  if (items1 === undefined) {
                    items = [];
                  }
                  items1 = items;
                  if (Array.isArray(item)) {
                    item = item.forEach((item, index) => {
                      let items = items1;
                      if (items1 === undefined) {
                        items = [];
                      }
                      items1 = items;
                      if (Array.isArray(item)) {
                        item = item.forEach(() => { ... });
                      } else if (typeof item.content === "string") {
                        items.push(item.content);
                      } else if (null != item.content) {
                        let content = item.content;
                        items1 = items;
                        if (items === undefined) {
                          items1 = [];
                        }
                        let _Array = Array;
                        if (Array.isArray(content)) {
                          let item1 = content.forEach(() => { ... });
                        } else if (typeof content.content === "string") {
                          items1.push(content.content);
                        } else if (null != content.content) {
                          closure_1_0(content.content, items1);
                        }
                      }
                      return items;
                    });
                  } else if (typeof item.content === "string") {
                    items.push(item.content);
                  } else if (null != item.content) {
                    let content = item.content;
                    items1 = items;
                    if (items === undefined) {
                      items1 = [];
                    }
                    let _Array = Array;
                    if (Array.isArray(content)) {
                      let item1 = content.forEach((item, index) => {
                        let items = items1;
                        if (items1 === undefined) {
                          items = [];
                        }
                        items1 = items;
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else if (typeof item.content === "string") {
                          items.push(item.content);
                        } else if (null != item.content) {
                          let content = item.content;
                          items1 = items;
                          if (items === undefined) {
                            items1 = [];
                          }
                          let _Array = Array;
                          if (Array.isArray(content)) {
                            let item1 = content.forEach(() => { ... });
                          } else if (typeof content.content === "string") {
                            items1.push(content.content);
                          } else if (null != content.content) {
                            closure_1_0(content.content, items1);
                          }
                        }
                        return items;
                      });
                    } else if (typeof content.content === "string") {
                      items1.push(content.content);
                    } else if (null != content.content) {
                      closure_1_0(content.content, items1);
                    }
                  }
                  return items;
                });
              } else if (typeof item.content === "string") {
                items.push(item.content);
              } else if (null != item.content) {
                let content = item.content;
                items1 = items;
                if (items === undefined) {
                  items1 = [];
                }
                let _Array = Array;
                if (Array.isArray(content)) {
                  let item1 = content.forEach((item, index) => {
                    let items = items1;
                    if (items1 === undefined) {
                      items = [];
                    }
                    items1 = items;
                    if (Array.isArray(item)) {
                      item = item.forEach((item, index) => {
                        let items = items1;
                        if (items1 === undefined) {
                          items = [];
                        }
                        items1 = items;
                        if (Array.isArray(item)) {
                          item = item.forEach(() => { ... });
                        } else if (typeof item.content === "string") {
                          items.push(item.content);
                        } else if (null != item.content) {
                          let content = item.content;
                          items1 = items;
                          if (items === undefined) {
                            items1 = [];
                          }
                          let _Array = Array;
                          if (Array.isArray(content)) {
                            let item1 = content.forEach(() => { ... });
                          } else if (typeof content.content === "string") {
                            items1.push(content.content);
                          } else if (null != content.content) {
                            closure_1_0(content.content, items1);
                          }
                        }
                        return items;
                      });
                    } else if (typeof item.content === "string") {
                      items.push(item.content);
                    } else if (null != item.content) {
                      let content = item.content;
                      items1 = items;
                      if (items === undefined) {
                        items1 = [];
                      }
                      let _Array = Array;
                      if (Array.isArray(content)) {
                        let item1 = content.forEach((item, index) => {
                          let items = items1;
                          if (items1 === undefined) {
                            items = [];
                          }
                          items1 = items;
                          if (Array.isArray(item)) {
                            item = item.forEach(() => { ... });
                          } else if (typeof item.content === "string") {
                            items.push(item.content);
                          } else if (null != item.content) {
                            let content = item.content;
                            items1 = items;
                            if (items === undefined) {
                              items1 = [];
                            }
                            let _Array = Array;
                            if (Array.isArray(content)) {
                              let item1 = content.forEach(() => { ... });
                            } else if (typeof content.content === "string") {
                              items1.push(content.content);
                            } else if (null != content.content) {
                              closure_1_0(content.content, items1);
                            }
                          }
                          return items;
                        });
                      } else if (typeof content.content === "string") {
                        items1.push(content.content);
                      } else if (null != content.content) {
                        closure_1_0(content.content, items1);
                      }
                    }
                    return items;
                  });
                } else if (typeof content.content === "string") {
                  items1.push(content.content);
                } else if (null != content.content) {
                  closure_1_0(content.content, items1);
                }
              }
              return items;
            });
          } else if (typeof content.content === "string") {
            items1.push(content.content);
          } else if (null != content.content) {
            closure_1_0(content.content, items1);
          }
        }
        return items;
      });
    } else if (typeof content.content === "string") {
      items.push(content.content);
    } else if (null != content.content) {
      items(content.content, items);
    }
  }
  return items.join("");
};
export { flattenAst };
export { constrainAst };
export const getIndexedAST = function getIndexedAST(arr) {
  closure_0 = arr;
  closure_1 = arg1;
  c2 = 0;
  return arr.map((item, index) => {
    let num = 0;
    if (0 !== c2) {
      num = content2[tmp - 1].endIndex;
    }
    c2 = c2 + 1;
    let type = item.type;
    if ("spoiler" !== type) {
      if ("u" !== type) {
        if ("s" !== type) {
          if ("strong" !== type) {
            if ("em" !== type) {
              if ("customEmoji" !== type) {
                if ("emoji" !== type) {
                  if ("inlineCode" !== type) {
                    if ("text" === type) {
                      item.startIndex = startIndex + num;
                      item.endIndex = item.startIndex + item.content.length;
                      return item;
                    } else {
                      item.startIndex = startIndex + num;
                      let content = item.content;
                      content2 = content;
                      startIndex = item.startIndex;
                      c2 = 0;
                      let mapped = content.map((item, index) => {
                        let num = 0;
                        if (0 !== c2) {
                          num = content2[tmp - 1].endIndex;
                        }
                        c2 = c2 + 1;
                        let type = item.type;
                        if ("spoiler" !== type) {
                          if ("u" !== type) {
                            if ("s" !== type) {
                              if ("strong" !== type) {
                                if ("em" !== type) {
                                  if ("customEmoji" !== type) {
                                    if ("emoji" !== type) {
                                      if ("inlineCode" !== type) {
                                        if ("text" === type) {
                                          item.startIndex = startIndex + num;
                                          item.endIndex = item.startIndex + item.content.length;
                                          return item;
                                        } else {
                                          item.startIndex = startIndex + num;
                                          let content = item.content;
                                          content2 = content;
                                          startIndex = item.startIndex;
                                          c2 = 0;
                                          let mapped = content.map((item, index) => {
                                            let num = 0;
                                            if (0 !== c2) {
                                              num = content2[tmp - 1].endIndex;
                                            }
                                            c2 = c2 + 1;
                                            let type = item.type;
                                            if ("spoiler" !== type) {
                                              if ("u" !== type) {
                                                if ("s" !== type) {
                                                  if ("strong" !== type) {
                                                    if ("em" !== type) {
                                                      if ("customEmoji" !== type) {
                                                        if ("emoji" !== type) {
                                                          if ("inlineCode" !== type) {
                                                            if ("text" === type) {
                                                              item.startIndex = startIndex + num;
                                                              item.endIndex = item.startIndex + item.content.length;
                                                              return item;
                                                            } else {
                                                              item.startIndex = startIndex + num;
                                                              let content = item.content;
                                                              content2 = content;
                                                              startIndex = item.startIndex;
                                                              c2 = 0;
                                                              let mapped = content.map((item, index) => {
                                                                let num = 0;
                                                                if (0 !== c2) {
                                                                  num = content2[tmp - 1].endIndex;
                                                                }
                                                                c2 = c2 + 1;
                                                                let type = item.type;
                                                                if ("spoiler" !== type) {
                                                                  if ("u" !== type) {
                                                                    if ("s" !== type) {
                                                                      if ("strong" !== type) {
                                                                        if ("em" !== type) {
                                                                          if ("customEmoji" !== type) {
                                                                            if ("emoji" !== type) {
                                                                              if ("inlineCode" !== type) {
                                                                                if ("text" === type) {
                                                                                  item.startIndex = startIndex + num;
                                                                                  item.endIndex = item.startIndex + item.content.length;
                                                                                  return item;
                                                                                } else {
                                                                                  item.startIndex = startIndex + num;
                                                                                  let content = item.content;
                                                                                  content2 = content;
                                                                                  startIndex = item.startIndex;
                                                                                  c2 = 0;
                                                                                  let mapped = content.map(() => { ... });
                                                                                  item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                                  return item;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        item.startIndex = startIndex + num;
                                                                        let content1 = item.content;
                                                                        content2 = content1;
                                                                        startIndex = item.startIndex + 1;
                                                                        c2 = 0;
                                                                        let mapped1 = content1.map(() => { ... });
                                                                        item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                                        return item;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                item.startIndex = startIndex + num;
                                                                content2 = item.content;
                                                                startIndex = item.startIndex + 2;
                                                                c2 = 0;
                                                                let mapped2 = content2.map(() => { ... });
                                                                item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                                                return item;
                                                              });
                                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    item.startIndex = startIndex + num;
                                                    let content1 = item.content;
                                                    content2 = content1;
                                                    startIndex = item.startIndex + 1;
                                                    c2 = 0;
                                                    let mapped1 = content1.map((item, index) => {
                                                      let num = 0;
                                                      if (0 !== c2) {
                                                        num = content2[tmp - 1].endIndex;
                                                      }
                                                      c2 = c2 + 1;
                                                      let type = item.type;
                                                      if ("spoiler" !== type) {
                                                        if ("u" !== type) {
                                                          if ("s" !== type) {
                                                            if ("strong" !== type) {
                                                              if ("em" !== type) {
                                                                if ("customEmoji" !== type) {
                                                                  if ("emoji" !== type) {
                                                                    if ("inlineCode" !== type) {
                                                                      if ("text" === type) {
                                                                        item.startIndex = startIndex + num;
                                                                        item.endIndex = item.startIndex + item.content.length;
                                                                        return item;
                                                                      } else {
                                                                        item.startIndex = startIndex + num;
                                                                        let content = item.content;
                                                                        content2 = content;
                                                                        startIndex = item.startIndex;
                                                                        c2 = 0;
                                                                        let mapped = content.map(() => { ... });
                                                                        item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                        return item;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              item.startIndex = startIndex + num;
                                                              let content1 = item.content;
                                                              content2 = content1;
                                                              startIndex = item.startIndex + 1;
                                                              c2 = 0;
                                                              let mapped1 = content1.map(() => { ... });
                                                              item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      item.startIndex = startIndex + num;
                                                      content2 = item.content;
                                                      startIndex = item.startIndex + 2;
                                                      c2 = 0;
                                                      let mapped2 = content2.map(() => { ... });
                                                      item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                                      return item;
                                                    });
                                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            content2 = item.content;
                                            startIndex = item.startIndex + 2;
                                            c2 = 0;
                                            let mapped2 = content2.map((item, index) => {
                                              let num = 0;
                                              if (0 !== c2) {
                                                num = content2[tmp - 1].endIndex;
                                              }
                                              c2 = c2 + 1;
                                              let type = item.type;
                                              if ("spoiler" !== type) {
                                                if ("u" !== type) {
                                                  if ("s" !== type) {
                                                    if ("strong" !== type) {
                                                      if ("em" !== type) {
                                                        if ("customEmoji" !== type) {
                                                          if ("emoji" !== type) {
                                                            if ("inlineCode" !== type) {
                                                              if ("text" === type) {
                                                                item.startIndex = startIndex + num;
                                                                item.endIndex = item.startIndex + item.content.length;
                                                                return item;
                                                              } else {
                                                                item.startIndex = startIndex + num;
                                                                let content = item.content;
                                                                content2 = content;
                                                                startIndex = item.startIndex;
                                                                c2 = 0;
                                                                let mapped = content.map(() => { ... });
                                                                item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                return item;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      item.startIndex = startIndex + num;
                                                      let content1 = item.content;
                                                      content2 = content1;
                                                      startIndex = item.startIndex + 1;
                                                      c2 = 0;
                                                      let mapped1 = content1.map(() => { ... });
                                                      item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                              item.startIndex = startIndex + num;
                                              content2 = item.content;
                                              startIndex = item.startIndex + 2;
                                              c2 = 0;
                                              let mapped2 = content2.map(() => { ... });
                                              item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                              return item;
                                            });
                                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                            return item;
                                          });
                                          item.endIndex = mapped[mapped.length - 1].endIndex;
                                          return item;
                                        }
                                      }
                                    }
                                  }
                                }
                                item.startIndex = startIndex + num;
                                let content1 = item.content;
                                content2 = content1;
                                startIndex = item.startIndex + 1;
                                c2 = 0;
                                let mapped1 = content1.map((item, index) => {
                                  let num = 0;
                                  if (0 !== c2) {
                                    num = content2[tmp - 1].endIndex;
                                  }
                                  c2 = c2 + 1;
                                  let type = item.type;
                                  if ("spoiler" !== type) {
                                    if ("u" !== type) {
                                      if ("s" !== type) {
                                        if ("strong" !== type) {
                                          if ("em" !== type) {
                                            if ("customEmoji" !== type) {
                                              if ("emoji" !== type) {
                                                if ("inlineCode" !== type) {
                                                  if ("text" === type) {
                                                    item.startIndex = startIndex + num;
                                                    item.endIndex = item.startIndex + item.content.length;
                                                    return item;
                                                  } else {
                                                    item.startIndex = startIndex + num;
                                                    let content = item.content;
                                                    content2 = content;
                                                    startIndex = item.startIndex;
                                                    c2 = 0;
                                                    let mapped = content.map((item, index) => {
                                                      let num = 0;
                                                      if (0 !== c2) {
                                                        num = content2[tmp - 1].endIndex;
                                                      }
                                                      c2 = c2 + 1;
                                                      let type = item.type;
                                                      if ("spoiler" !== type) {
                                                        if ("u" !== type) {
                                                          if ("s" !== type) {
                                                            if ("strong" !== type) {
                                                              if ("em" !== type) {
                                                                if ("customEmoji" !== type) {
                                                                  if ("emoji" !== type) {
                                                                    if ("inlineCode" !== type) {
                                                                      if ("text" === type) {
                                                                        item.startIndex = startIndex + num;
                                                                        item.endIndex = item.startIndex + item.content.length;
                                                                        return item;
                                                                      } else {
                                                                        item.startIndex = startIndex + num;
                                                                        let content = item.content;
                                                                        content2 = content;
                                                                        startIndex = item.startIndex;
                                                                        c2 = 0;
                                                                        let mapped = content.map(() => { ... });
                                                                        item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                        return item;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              item.startIndex = startIndex + num;
                                                              let content1 = item.content;
                                                              content2 = content1;
                                                              startIndex = item.startIndex + 1;
                                                              c2 = 0;
                                                              let mapped1 = content1.map(() => { ... });
                                                              item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      item.startIndex = startIndex + num;
                                                      content2 = item.content;
                                                      startIndex = item.startIndex + 2;
                                                      c2 = 0;
                                                      let mapped2 = content2.map(() => { ... });
                                                      item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                                      return item;
                                                    });
                                                    item.endIndex = mapped[mapped.length - 1].endIndex;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          item.startIndex = startIndex + num;
                                          let content1 = item.content;
                                          content2 = content1;
                                          startIndex = item.startIndex + 1;
                                          c2 = 0;
                                          let mapped1 = content1.map((item, index) => {
                                            let num = 0;
                                            if (0 !== c2) {
                                              num = content2[tmp - 1].endIndex;
                                            }
                                            c2 = c2 + 1;
                                            let type = item.type;
                                            if ("spoiler" !== type) {
                                              if ("u" !== type) {
                                                if ("s" !== type) {
                                                  if ("strong" !== type) {
                                                    if ("em" !== type) {
                                                      if ("customEmoji" !== type) {
                                                        if ("emoji" !== type) {
                                                          if ("inlineCode" !== type) {
                                                            if ("text" === type) {
                                                              item.startIndex = startIndex + num;
                                                              item.endIndex = item.startIndex + item.content.length;
                                                              return item;
                                                            } else {
                                                              item.startIndex = startIndex + num;
                                                              let content = item.content;
                                                              content2 = content;
                                                              startIndex = item.startIndex;
                                                              c2 = 0;
                                                              let mapped = content.map(() => { ... });
                                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    item.startIndex = startIndex + num;
                                                    let content1 = item.content;
                                                    content2 = content1;
                                                    startIndex = item.startIndex + 1;
                                                    c2 = 0;
                                                    let mapped1 = content1.map(() => { ... });
                                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            content2 = item.content;
                                            startIndex = item.startIndex + 2;
                                            c2 = 0;
                                            let mapped2 = content2.map(() => { ... });
                                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                            return item;
                                          });
                                          item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                          return item;
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  content2 = item.content;
                                  startIndex = item.startIndex + 2;
                                  c2 = 0;
                                  let mapped2 = content2.map((item, index) => {
                                    let num = 0;
                                    if (0 !== c2) {
                                      num = content2[tmp - 1].endIndex;
                                    }
                                    c2 = c2 + 1;
                                    let type = item.type;
                                    if ("spoiler" !== type) {
                                      if ("u" !== type) {
                                        if ("s" !== type) {
                                          if ("strong" !== type) {
                                            if ("em" !== type) {
                                              if ("customEmoji" !== type) {
                                                if ("emoji" !== type) {
                                                  if ("inlineCode" !== type) {
                                                    if ("text" === type) {
                                                      item.startIndex = startIndex + num;
                                                      item.endIndex = item.startIndex + item.content.length;
                                                      return item;
                                                    } else {
                                                      item.startIndex = startIndex + num;
                                                      let content = item.content;
                                                      content2 = content;
                                                      startIndex = item.startIndex;
                                                      c2 = 0;
                                                      let mapped = content.map(() => { ... });
                                                      item.endIndex = mapped[mapped.length - 1].endIndex;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            let content1 = item.content;
                                            content2 = content1;
                                            startIndex = item.startIndex + 1;
                                            c2 = 0;
                                            let mapped1 = content1.map(() => { ... });
                                            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    content2 = item.content;
                                    startIndex = item.startIndex + 2;
                                    c2 = 0;
                                    let mapped2 = content2.map(() => { ... });
                                    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                    return item;
                                  });
                                  item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                  return item;
                                });
                                item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                return item;
                              }
                            }
                          }
                        }
                        item.startIndex = startIndex + num;
                        content2 = item.content;
                        startIndex = item.startIndex + 2;
                        c2 = 0;
                        let mapped2 = content2.map((item, index) => {
                          let num = 0;
                          if (0 !== c2) {
                            num = content2[tmp - 1].endIndex;
                          }
                          c2 = c2 + 1;
                          let type = item.type;
                          if ("spoiler" !== type) {
                            if ("u" !== type) {
                              if ("s" !== type) {
                                if ("strong" !== type) {
                                  if ("em" !== type) {
                                    if ("customEmoji" !== type) {
                                      if ("emoji" !== type) {
                                        if ("inlineCode" !== type) {
                                          if ("text" === type) {
                                            item.startIndex = startIndex + num;
                                            item.endIndex = item.startIndex + item.content.length;
                                            return item;
                                          } else {
                                            item.startIndex = startIndex + num;
                                            let content = item.content;
                                            content2 = content;
                                            startIndex = item.startIndex;
                                            c2 = 0;
                                            let mapped = content.map((item, index) => {
                                              let num = 0;
                                              if (0 !== c2) {
                                                num = content2[tmp - 1].endIndex;
                                              }
                                              c2 = c2 + 1;
                                              let type = item.type;
                                              if ("spoiler" !== type) {
                                                if ("u" !== type) {
                                                  if ("s" !== type) {
                                                    if ("strong" !== type) {
                                                      if ("em" !== type) {
                                                        if ("customEmoji" !== type) {
                                                          if ("emoji" !== type) {
                                                            if ("inlineCode" !== type) {
                                                              if ("text" === type) {
                                                                item.startIndex = startIndex + num;
                                                                item.endIndex = item.startIndex + item.content.length;
                                                                return item;
                                                              } else {
                                                                item.startIndex = startIndex + num;
                                                                let content = item.content;
                                                                content2 = content;
                                                                startIndex = item.startIndex;
                                                                c2 = 0;
                                                                let mapped = content.map(() => { ... });
                                                                item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                return item;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      item.startIndex = startIndex + num;
                                                      let content1 = item.content;
                                                      content2 = content1;
                                                      startIndex = item.startIndex + 1;
                                                      c2 = 0;
                                                      let mapped1 = content1.map(() => { ... });
                                                      item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                              item.startIndex = startIndex + num;
                                              content2 = item.content;
                                              startIndex = item.startIndex + 2;
                                              c2 = 0;
                                              let mapped2 = content2.map(() => { ... });
                                              item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                              return item;
                                            });
                                            item.endIndex = mapped[mapped.length - 1].endIndex;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  let content1 = item.content;
                                  content2 = content1;
                                  startIndex = item.startIndex + 1;
                                  c2 = 0;
                                  let mapped1 = content1.map((item, index) => {
                                    let num = 0;
                                    if (0 !== c2) {
                                      num = content2[tmp - 1].endIndex;
                                    }
                                    c2 = c2 + 1;
                                    let type = item.type;
                                    if ("spoiler" !== type) {
                                      if ("u" !== type) {
                                        if ("s" !== type) {
                                          if ("strong" !== type) {
                                            if ("em" !== type) {
                                              if ("customEmoji" !== type) {
                                                if ("emoji" !== type) {
                                                  if ("inlineCode" !== type) {
                                                    if ("text" === type) {
                                                      item.startIndex = startIndex + num;
                                                      item.endIndex = item.startIndex + item.content.length;
                                                      return item;
                                                    } else {
                                                      item.startIndex = startIndex + num;
                                                      let content = item.content;
                                                      content2 = content;
                                                      startIndex = item.startIndex;
                                                      c2 = 0;
                                                      let mapped = content.map(() => { ... });
                                                      item.endIndex = mapped[mapped.length - 1].endIndex;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            let content1 = item.content;
                                            content2 = content1;
                                            startIndex = item.startIndex + 1;
                                            c2 = 0;
                                            let mapped1 = content1.map(() => { ... });
                                            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    content2 = item.content;
                                    startIndex = item.startIndex + 2;
                                    c2 = 0;
                                    let mapped2 = content2.map(() => { ... });
                                    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                    return item;
                                  });
                                  item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                  return item;
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          content2 = item.content;
                          startIndex = item.startIndex + 2;
                          c2 = 0;
                          let mapped2 = content2.map((item, index) => {
                            let num = 0;
                            if (0 !== c2) {
                              num = content2[tmp - 1].endIndex;
                            }
                            c2 = c2 + 1;
                            let type = item.type;
                            if ("spoiler" !== type) {
                              if ("u" !== type) {
                                if ("s" !== type) {
                                  if ("strong" !== type) {
                                    if ("em" !== type) {
                                      if ("customEmoji" !== type) {
                                        if ("emoji" !== type) {
                                          if ("inlineCode" !== type) {
                                            if ("text" === type) {
                                              item.startIndex = startIndex + num;
                                              item.endIndex = item.startIndex + item.content.length;
                                              return item;
                                            } else {
                                              item.startIndex = startIndex + num;
                                              let content = item.content;
                                              content2 = content;
                                              startIndex = item.startIndex;
                                              c2 = 0;
                                              let mapped = content.map(() => { ... });
                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                              return item;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    let content1 = item.content;
                                    content2 = content1;
                                    startIndex = item.startIndex + 1;
                                    c2 = 0;
                                    let mapped1 = content1.map(() => { ... });
                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                    return item;
                                  }
                                }
                              }
                            }
                            item.startIndex = startIndex + num;
                            content2 = item.content;
                            startIndex = item.startIndex + 2;
                            c2 = 0;
                            let mapped2 = content2.map(() => { ... });
                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                            return item;
                          });
                          item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                          return item;
                        });
                        item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                        return item;
                      });
                      item.endIndex = mapped[mapped.length - 1].endIndex;
                      return item;
                    }
                  }
                }
              }
            }
            item.startIndex = startIndex + num;
            let content1 = item.content;
            content2 = content1;
            startIndex = item.startIndex + 1;
            c2 = 0;
            let mapped1 = content1.map((item, index) => {
              let num = 0;
              if (0 !== c2) {
                num = content2[tmp - 1].endIndex;
              }
              c2 = c2 + 1;
              let type = item.type;
              if ("spoiler" !== type) {
                if ("u" !== type) {
                  if ("s" !== type) {
                    if ("strong" !== type) {
                      if ("em" !== type) {
                        if ("customEmoji" !== type) {
                          if ("emoji" !== type) {
                            if ("inlineCode" !== type) {
                              if ("text" === type) {
                                item.startIndex = startIndex + num;
                                item.endIndex = item.startIndex + item.content.length;
                                return item;
                              } else {
                                item.startIndex = startIndex + num;
                                let content = item.content;
                                content2 = content;
                                startIndex = item.startIndex;
                                c2 = 0;
                                let mapped = content.map((item, index) => {
                                  let num = 0;
                                  if (0 !== c2) {
                                    num = content2[tmp - 1].endIndex;
                                  }
                                  c2 = c2 + 1;
                                  let type = item.type;
                                  if ("spoiler" !== type) {
                                    if ("u" !== type) {
                                      if ("s" !== type) {
                                        if ("strong" !== type) {
                                          if ("em" !== type) {
                                            if ("customEmoji" !== type) {
                                              if ("emoji" !== type) {
                                                if ("inlineCode" !== type) {
                                                  if ("text" === type) {
                                                    item.startIndex = startIndex + num;
                                                    item.endIndex = item.startIndex + item.content.length;
                                                    return item;
                                                  } else {
                                                    item.startIndex = startIndex + num;
                                                    let content = item.content;
                                                    content2 = content;
                                                    startIndex = item.startIndex;
                                                    c2 = 0;
                                                    let mapped = content.map((item, index) => {
                                                      let num = 0;
                                                      if (0 !== c2) {
                                                        num = content2[tmp - 1].endIndex;
                                                      }
                                                      c2 = c2 + 1;
                                                      let type = item.type;
                                                      if ("spoiler" !== type) {
                                                        if ("u" !== type) {
                                                          if ("s" !== type) {
                                                            if ("strong" !== type) {
                                                              if ("em" !== type) {
                                                                if ("customEmoji" !== type) {
                                                                  if ("emoji" !== type) {
                                                                    if ("inlineCode" !== type) {
                                                                      if ("text" === type) {
                                                                        item.startIndex = startIndex + num;
                                                                        item.endIndex = item.startIndex + item.content.length;
                                                                        return item;
                                                                      } else {
                                                                        item.startIndex = startIndex + num;
                                                                        let content = item.content;
                                                                        content2 = content;
                                                                        startIndex = item.startIndex;
                                                                        c2 = 0;
                                                                        let mapped = content.map(() => { ... });
                                                                        item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                        return item;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              item.startIndex = startIndex + num;
                                                              let content1 = item.content;
                                                              content2 = content1;
                                                              startIndex = item.startIndex + 1;
                                                              c2 = 0;
                                                              let mapped1 = content1.map(() => { ... });
                                                              item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      item.startIndex = startIndex + num;
                                                      content2 = item.content;
                                                      startIndex = item.startIndex + 2;
                                                      c2 = 0;
                                                      let mapped2 = content2.map(() => { ... });
                                                      item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                                      return item;
                                                    });
                                                    item.endIndex = mapped[mapped.length - 1].endIndex;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          item.startIndex = startIndex + num;
                                          let content1 = item.content;
                                          content2 = content1;
                                          startIndex = item.startIndex + 1;
                                          c2 = 0;
                                          let mapped1 = content1.map((item, index) => {
                                            let num = 0;
                                            if (0 !== c2) {
                                              num = content2[tmp - 1].endIndex;
                                            }
                                            c2 = c2 + 1;
                                            let type = item.type;
                                            if ("spoiler" !== type) {
                                              if ("u" !== type) {
                                                if ("s" !== type) {
                                                  if ("strong" !== type) {
                                                    if ("em" !== type) {
                                                      if ("customEmoji" !== type) {
                                                        if ("emoji" !== type) {
                                                          if ("inlineCode" !== type) {
                                                            if ("text" === type) {
                                                              item.startIndex = startIndex + num;
                                                              item.endIndex = item.startIndex + item.content.length;
                                                              return item;
                                                            } else {
                                                              item.startIndex = startIndex + num;
                                                              let content = item.content;
                                                              content2 = content;
                                                              startIndex = item.startIndex;
                                                              c2 = 0;
                                                              let mapped = content.map(() => { ... });
                                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    item.startIndex = startIndex + num;
                                                    let content1 = item.content;
                                                    content2 = content1;
                                                    startIndex = item.startIndex + 1;
                                                    c2 = 0;
                                                    let mapped1 = content1.map(() => { ... });
                                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            content2 = item.content;
                                            startIndex = item.startIndex + 2;
                                            c2 = 0;
                                            let mapped2 = content2.map(() => { ... });
                                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                            return item;
                                          });
                                          item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                          return item;
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  content2 = item.content;
                                  startIndex = item.startIndex + 2;
                                  c2 = 0;
                                  let mapped2 = content2.map((item, index) => {
                                    let num = 0;
                                    if (0 !== c2) {
                                      num = content2[tmp - 1].endIndex;
                                    }
                                    c2 = c2 + 1;
                                    let type = item.type;
                                    if ("spoiler" !== type) {
                                      if ("u" !== type) {
                                        if ("s" !== type) {
                                          if ("strong" !== type) {
                                            if ("em" !== type) {
                                              if ("customEmoji" !== type) {
                                                if ("emoji" !== type) {
                                                  if ("inlineCode" !== type) {
                                                    if ("text" === type) {
                                                      item.startIndex = startIndex + num;
                                                      item.endIndex = item.startIndex + item.content.length;
                                                      return item;
                                                    } else {
                                                      item.startIndex = startIndex + num;
                                                      let content = item.content;
                                                      content2 = content;
                                                      startIndex = item.startIndex;
                                                      c2 = 0;
                                                      let mapped = content.map(() => { ... });
                                                      item.endIndex = mapped[mapped.length - 1].endIndex;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            let content1 = item.content;
                                            content2 = content1;
                                            startIndex = item.startIndex + 1;
                                            c2 = 0;
                                            let mapped1 = content1.map(() => { ... });
                                            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    content2 = item.content;
                                    startIndex = item.startIndex + 2;
                                    c2 = 0;
                                    let mapped2 = content2.map(() => { ... });
                                    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                    return item;
                                  });
                                  item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                  return item;
                                });
                                item.endIndex = mapped[mapped.length - 1].endIndex;
                                return item;
                              }
                            }
                          }
                        }
                      }
                      item.startIndex = startIndex + num;
                      let content1 = item.content;
                      content2 = content1;
                      startIndex = item.startIndex + 1;
                      c2 = 0;
                      let mapped1 = content1.map((item, index) => {
                        let num = 0;
                        if (0 !== c2) {
                          num = content2[tmp - 1].endIndex;
                        }
                        c2 = c2 + 1;
                        let type = item.type;
                        if ("spoiler" !== type) {
                          if ("u" !== type) {
                            if ("s" !== type) {
                              if ("strong" !== type) {
                                if ("em" !== type) {
                                  if ("customEmoji" !== type) {
                                    if ("emoji" !== type) {
                                      if ("inlineCode" !== type) {
                                        if ("text" === type) {
                                          item.startIndex = startIndex + num;
                                          item.endIndex = item.startIndex + item.content.length;
                                          return item;
                                        } else {
                                          item.startIndex = startIndex + num;
                                          let content = item.content;
                                          content2 = content;
                                          startIndex = item.startIndex;
                                          c2 = 0;
                                          let mapped = content.map((item, index) => {
                                            let num = 0;
                                            if (0 !== c2) {
                                              num = content2[tmp - 1].endIndex;
                                            }
                                            c2 = c2 + 1;
                                            let type = item.type;
                                            if ("spoiler" !== type) {
                                              if ("u" !== type) {
                                                if ("s" !== type) {
                                                  if ("strong" !== type) {
                                                    if ("em" !== type) {
                                                      if ("customEmoji" !== type) {
                                                        if ("emoji" !== type) {
                                                          if ("inlineCode" !== type) {
                                                            if ("text" === type) {
                                                              item.startIndex = startIndex + num;
                                                              item.endIndex = item.startIndex + item.content.length;
                                                              return item;
                                                            } else {
                                                              item.startIndex = startIndex + num;
                                                              let content = item.content;
                                                              content2 = content;
                                                              startIndex = item.startIndex;
                                                              c2 = 0;
                                                              let mapped = content.map(() => { ... });
                                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                                              return item;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    item.startIndex = startIndex + num;
                                                    let content1 = item.content;
                                                    content2 = content1;
                                                    startIndex = item.startIndex + 1;
                                                    c2 = 0;
                                                    let mapped1 = content1.map(() => { ... });
                                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            content2 = item.content;
                                            startIndex = item.startIndex + 2;
                                            c2 = 0;
                                            let mapped2 = content2.map(() => { ... });
                                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                            return item;
                                          });
                                          item.endIndex = mapped[mapped.length - 1].endIndex;
                                          return item;
                                        }
                                      }
                                    }
                                  }
                                }
                                item.startIndex = startIndex + num;
                                let content1 = item.content;
                                content2 = content1;
                                startIndex = item.startIndex + 1;
                                c2 = 0;
                                let mapped1 = content1.map((item, index) => {
                                  let num = 0;
                                  if (0 !== c2) {
                                    num = content2[tmp - 1].endIndex;
                                  }
                                  c2 = c2 + 1;
                                  let type = item.type;
                                  if ("spoiler" !== type) {
                                    if ("u" !== type) {
                                      if ("s" !== type) {
                                        if ("strong" !== type) {
                                          if ("em" !== type) {
                                            if ("customEmoji" !== type) {
                                              if ("emoji" !== type) {
                                                if ("inlineCode" !== type) {
                                                  if ("text" === type) {
                                                    item.startIndex = startIndex + num;
                                                    item.endIndex = item.startIndex + item.content.length;
                                                    return item;
                                                  } else {
                                                    item.startIndex = startIndex + num;
                                                    let content = item.content;
                                                    content2 = content;
                                                    startIndex = item.startIndex;
                                                    c2 = 0;
                                                    let mapped = content.map(() => { ... });
                                                    item.endIndex = mapped[mapped.length - 1].endIndex;
                                                    return item;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          item.startIndex = startIndex + num;
                                          let content1 = item.content;
                                          content2 = content1;
                                          startIndex = item.startIndex + 1;
                                          c2 = 0;
                                          let mapped1 = content1.map(() => { ... });
                                          item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                          return item;
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  content2 = item.content;
                                  startIndex = item.startIndex + 2;
                                  c2 = 0;
                                  let mapped2 = content2.map(() => { ... });
                                  item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                  return item;
                                });
                                item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                return item;
                              }
                            }
                          }
                        }
                        item.startIndex = startIndex + num;
                        content2 = item.content;
                        startIndex = item.startIndex + 2;
                        c2 = 0;
                        let mapped2 = content2.map((item, index) => {
                          let num = 0;
                          if (0 !== c2) {
                            num = content2[tmp - 1].endIndex;
                          }
                          c2 = c2 + 1;
                          let type = item.type;
                          if ("spoiler" !== type) {
                            if ("u" !== type) {
                              if ("s" !== type) {
                                if ("strong" !== type) {
                                  if ("em" !== type) {
                                    if ("customEmoji" !== type) {
                                      if ("emoji" !== type) {
                                        if ("inlineCode" !== type) {
                                          if ("text" === type) {
                                            item.startIndex = startIndex + num;
                                            item.endIndex = item.startIndex + item.content.length;
                                            return item;
                                          } else {
                                            item.startIndex = startIndex + num;
                                            let content = item.content;
                                            content2 = content;
                                            startIndex = item.startIndex;
                                            c2 = 0;
                                            let mapped = content.map(() => { ... });
                                            item.endIndex = mapped[mapped.length - 1].endIndex;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  let content1 = item.content;
                                  content2 = content1;
                                  startIndex = item.startIndex + 1;
                                  c2 = 0;
                                  let mapped1 = content1.map(() => { ... });
                                  item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                  return item;
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          content2 = item.content;
                          startIndex = item.startIndex + 2;
                          c2 = 0;
                          let mapped2 = content2.map(() => { ... });
                          item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                          return item;
                        });
                        item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                        return item;
                      });
                      item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                      return item;
                    }
                  }
                }
              }
              item.startIndex = startIndex + num;
              content2 = item.content;
              startIndex = item.startIndex + 2;
              c2 = 0;
              let mapped2 = content2.map((item, index) => {
                let num = 0;
                if (0 !== c2) {
                  num = content2[tmp - 1].endIndex;
                }
                c2 = c2 + 1;
                let type = item.type;
                if ("spoiler" !== type) {
                  if ("u" !== type) {
                    if ("s" !== type) {
                      if ("strong" !== type) {
                        if ("em" !== type) {
                          if ("customEmoji" !== type) {
                            if ("emoji" !== type) {
                              if ("inlineCode" !== type) {
                                if ("text" === type) {
                                  item.startIndex = startIndex + num;
                                  item.endIndex = item.startIndex + item.content.length;
                                  return item;
                                } else {
                                  item.startIndex = startIndex + num;
                                  let content = item.content;
                                  content2 = content;
                                  startIndex = item.startIndex;
                                  c2 = 0;
                                  let mapped = content.map((item, index) => {
                                    let num = 0;
                                    if (0 !== c2) {
                                      num = content2[tmp - 1].endIndex;
                                    }
                                    c2 = c2 + 1;
                                    let type = item.type;
                                    if ("spoiler" !== type) {
                                      if ("u" !== type) {
                                        if ("s" !== type) {
                                          if ("strong" !== type) {
                                            if ("em" !== type) {
                                              if ("customEmoji" !== type) {
                                                if ("emoji" !== type) {
                                                  if ("inlineCode" !== type) {
                                                    if ("text" === type) {
                                                      item.startIndex = startIndex + num;
                                                      item.endIndex = item.startIndex + item.content.length;
                                                      return item;
                                                    } else {
                                                      item.startIndex = startIndex + num;
                                                      let content = item.content;
                                                      content2 = content;
                                                      startIndex = item.startIndex;
                                                      c2 = 0;
                                                      let mapped = content.map(() => { ... });
                                                      item.endIndex = mapped[mapped.length - 1].endIndex;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            let content1 = item.content;
                                            content2 = content1;
                                            startIndex = item.startIndex + 1;
                                            c2 = 0;
                                            let mapped1 = content1.map(() => { ... });
                                            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    content2 = item.content;
                                    startIndex = item.startIndex + 2;
                                    c2 = 0;
                                    let mapped2 = content2.map(() => { ... });
                                    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                    return item;
                                  });
                                  item.endIndex = mapped[mapped.length - 1].endIndex;
                                  return item;
                                }
                              }
                            }
                          }
                        }
                        item.startIndex = startIndex + num;
                        let content1 = item.content;
                        content2 = content1;
                        startIndex = item.startIndex + 1;
                        c2 = 0;
                        let mapped1 = content1.map((item, index) => {
                          let num = 0;
                          if (0 !== c2) {
                            num = content2[tmp - 1].endIndex;
                          }
                          c2 = c2 + 1;
                          let type = item.type;
                          if ("spoiler" !== type) {
                            if ("u" !== type) {
                              if ("s" !== type) {
                                if ("strong" !== type) {
                                  if ("em" !== type) {
                                    if ("customEmoji" !== type) {
                                      if ("emoji" !== type) {
                                        if ("inlineCode" !== type) {
                                          if ("text" === type) {
                                            item.startIndex = startIndex + num;
                                            item.endIndex = item.startIndex + item.content.length;
                                            return item;
                                          } else {
                                            item.startIndex = startIndex + num;
                                            let content = item.content;
                                            content2 = content;
                                            startIndex = item.startIndex;
                                            c2 = 0;
                                            let mapped = content.map(() => { ... });
                                            item.endIndex = mapped[mapped.length - 1].endIndex;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  let content1 = item.content;
                                  content2 = content1;
                                  startIndex = item.startIndex + 1;
                                  c2 = 0;
                                  let mapped1 = content1.map(() => { ... });
                                  item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                  return item;
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          content2 = item.content;
                          startIndex = item.startIndex + 2;
                          c2 = 0;
                          let mapped2 = content2.map(() => { ... });
                          item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                          return item;
                        });
                        item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                        return item;
                      }
                    }
                  }
                }
                item.startIndex = startIndex + num;
                content2 = item.content;
                startIndex = item.startIndex + 2;
                c2 = 0;
                let mapped2 = content2.map((item, index) => {
                  let num = 0;
                  if (0 !== c2) {
                    num = content2[tmp - 1].endIndex;
                  }
                  c2 = c2 + 1;
                  let type = item.type;
                  if ("spoiler" !== type) {
                    if ("u" !== type) {
                      if ("s" !== type) {
                        if ("strong" !== type) {
                          if ("em" !== type) {
                            if ("customEmoji" !== type) {
                              if ("emoji" !== type) {
                                if ("inlineCode" !== type) {
                                  if ("text" === type) {
                                    item.startIndex = startIndex + num;
                                    item.endIndex = item.startIndex + item.content.length;
                                    return item;
                                  } else {
                                    item.startIndex = startIndex + num;
                                    let content = item.content;
                                    content2 = content;
                                    startIndex = item.startIndex;
                                    c2 = 0;
                                    let mapped = content.map(() => { ... });
                                    item.endIndex = mapped[mapped.length - 1].endIndex;
                                    return item;
                                  }
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          let content1 = item.content;
                          content2 = content1;
                          startIndex = item.startIndex + 1;
                          c2 = 0;
                          let mapped1 = content1.map(() => { ... });
                          item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                          return item;
                        }
                      }
                    }
                  }
                  item.startIndex = startIndex + num;
                  content2 = item.content;
                  startIndex = item.startIndex + 2;
                  c2 = 0;
                  let mapped2 = content2.map(() => { ... });
                  item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                  return item;
                });
                item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                return item;
              });
              item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
              return item;
            });
            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
            return item;
          }
        }
      }
    }
    item.startIndex = startIndex + num;
    content2 = item.content;
    startIndex = item.startIndex + 2;
    c2 = 0;
    let mapped2 = content2.map((item, index) => {
      let num = 0;
      if (0 !== c2) {
        num = content2[tmp - 1].endIndex;
      }
      c2 = c2 + 1;
      let type = item.type;
      if ("spoiler" !== type) {
        if ("u" !== type) {
          if ("s" !== type) {
            if ("strong" !== type) {
              if ("em" !== type) {
                if ("customEmoji" !== type) {
                  if ("emoji" !== type) {
                    if ("inlineCode" !== type) {
                      if ("text" === type) {
                        item.startIndex = startIndex + num;
                        item.endIndex = item.startIndex + item.content.length;
                        return item;
                      } else {
                        item.startIndex = startIndex + num;
                        let content = item.content;
                        content2 = content;
                        startIndex = item.startIndex;
                        c2 = 0;
                        let mapped = content.map((item, index) => {
                          let num = 0;
                          if (0 !== c2) {
                            num = content2[tmp - 1].endIndex;
                          }
                          c2 = c2 + 1;
                          let type = item.type;
                          if ("spoiler" !== type) {
                            if ("u" !== type) {
                              if ("s" !== type) {
                                if ("strong" !== type) {
                                  if ("em" !== type) {
                                    if ("customEmoji" !== type) {
                                      if ("emoji" !== type) {
                                        if ("inlineCode" !== type) {
                                          if ("text" === type) {
                                            item.startIndex = startIndex + num;
                                            item.endIndex = item.startIndex + item.content.length;
                                            return item;
                                          } else {
                                            item.startIndex = startIndex + num;
                                            let content = item.content;
                                            content2 = content;
                                            startIndex = item.startIndex;
                                            c2 = 0;
                                            let mapped = content.map((item, index) => {
                                              let num = 0;
                                              if (0 !== c2) {
                                                num = content2[tmp - 1].endIndex;
                                              }
                                              c2 = c2 + 1;
                                              let type = item.type;
                                              if ("spoiler" !== type) {
                                                if ("u" !== type) {
                                                  if ("s" !== type) {
                                                    if ("strong" !== type) {
                                                      if ("em" !== type) {
                                                        if ("customEmoji" !== type) {
                                                          if ("emoji" !== type) {
                                                            if ("inlineCode" !== type) {
                                                              if ("text" === type) {
                                                                item.startIndex = startIndex + num;
                                                                item.endIndex = item.startIndex + item.content.length;
                                                                return item;
                                                              } else {
                                                                item.startIndex = startIndex + num;
                                                                let content = item.content;
                                                                content2 = content;
                                                                startIndex = item.startIndex;
                                                                c2 = 0;
                                                                let mapped = content.map(() => { ... });
                                                                item.endIndex = mapped[mapped.length - 1].endIndex;
                                                                return item;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      item.startIndex = startIndex + num;
                                                      let content1 = item.content;
                                                      content2 = content1;
                                                      startIndex = item.startIndex + 1;
                                                      c2 = 0;
                                                      let mapped1 = content1.map(() => { ... });
                                                      item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                              item.startIndex = startIndex + num;
                                              content2 = item.content;
                                              startIndex = item.startIndex + 2;
                                              c2 = 0;
                                              let mapped2 = content2.map(() => { ... });
                                              item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                              return item;
                                            });
                                            item.endIndex = mapped[mapped.length - 1].endIndex;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  let content1 = item.content;
                                  content2 = content1;
                                  startIndex = item.startIndex + 1;
                                  c2 = 0;
                                  let mapped1 = content1.map((item, index) => {
                                    let num = 0;
                                    if (0 !== c2) {
                                      num = content2[tmp - 1].endIndex;
                                    }
                                    c2 = c2 + 1;
                                    let type = item.type;
                                    if ("spoiler" !== type) {
                                      if ("u" !== type) {
                                        if ("s" !== type) {
                                          if ("strong" !== type) {
                                            if ("em" !== type) {
                                              if ("customEmoji" !== type) {
                                                if ("emoji" !== type) {
                                                  if ("inlineCode" !== type) {
                                                    if ("text" === type) {
                                                      item.startIndex = startIndex + num;
                                                      item.endIndex = item.startIndex + item.content.length;
                                                      return item;
                                                    } else {
                                                      item.startIndex = startIndex + num;
                                                      let content = item.content;
                                                      content2 = content;
                                                      startIndex = item.startIndex;
                                                      c2 = 0;
                                                      let mapped = content.map(() => { ... });
                                                      item.endIndex = mapped[mapped.length - 1].endIndex;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            let content1 = item.content;
                                            content2 = content1;
                                            startIndex = item.startIndex + 1;
                                            c2 = 0;
                                            let mapped1 = content1.map(() => { ... });
                                            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    content2 = item.content;
                                    startIndex = item.startIndex + 2;
                                    c2 = 0;
                                    let mapped2 = content2.map(() => { ... });
                                    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                    return item;
                                  });
                                  item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                  return item;
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          content2 = item.content;
                          startIndex = item.startIndex + 2;
                          c2 = 0;
                          let mapped2 = content2.map((item, index) => {
                            let num = 0;
                            if (0 !== c2) {
                              num = content2[tmp - 1].endIndex;
                            }
                            c2 = c2 + 1;
                            let type = item.type;
                            if ("spoiler" !== type) {
                              if ("u" !== type) {
                                if ("s" !== type) {
                                  if ("strong" !== type) {
                                    if ("em" !== type) {
                                      if ("customEmoji" !== type) {
                                        if ("emoji" !== type) {
                                          if ("inlineCode" !== type) {
                                            if ("text" === type) {
                                              item.startIndex = startIndex + num;
                                              item.endIndex = item.startIndex + item.content.length;
                                              return item;
                                            } else {
                                              item.startIndex = startIndex + num;
                                              let content = item.content;
                                              content2 = content;
                                              startIndex = item.startIndex;
                                              c2 = 0;
                                              let mapped = content.map(() => { ... });
                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                              return item;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    let content1 = item.content;
                                    content2 = content1;
                                    startIndex = item.startIndex + 1;
                                    c2 = 0;
                                    let mapped1 = content1.map(() => { ... });
                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                    return item;
                                  }
                                }
                              }
                            }
                            item.startIndex = startIndex + num;
                            content2 = item.content;
                            startIndex = item.startIndex + 2;
                            c2 = 0;
                            let mapped2 = content2.map(() => { ... });
                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                            return item;
                          });
                          item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                          return item;
                        });
                        item.endIndex = mapped[mapped.length - 1].endIndex;
                        return item;
                      }
                    }
                  }
                }
              }
              item.startIndex = startIndex + num;
              let content1 = item.content;
              content2 = content1;
              startIndex = item.startIndex + 1;
              c2 = 0;
              let mapped1 = content1.map((item, index) => {
                let num = 0;
                if (0 !== c2) {
                  num = content2[tmp - 1].endIndex;
                }
                c2 = c2 + 1;
                let type = item.type;
                if ("spoiler" !== type) {
                  if ("u" !== type) {
                    if ("s" !== type) {
                      if ("strong" !== type) {
                        if ("em" !== type) {
                          if ("customEmoji" !== type) {
                            if ("emoji" !== type) {
                              if ("inlineCode" !== type) {
                                if ("text" === type) {
                                  item.startIndex = startIndex + num;
                                  item.endIndex = item.startIndex + item.content.length;
                                  return item;
                                } else {
                                  item.startIndex = startIndex + num;
                                  let content = item.content;
                                  content2 = content;
                                  startIndex = item.startIndex;
                                  c2 = 0;
                                  let mapped = content.map((item, index) => {
                                    let num = 0;
                                    if (0 !== c2) {
                                      num = content2[tmp - 1].endIndex;
                                    }
                                    c2 = c2 + 1;
                                    let type = item.type;
                                    if ("spoiler" !== type) {
                                      if ("u" !== type) {
                                        if ("s" !== type) {
                                          if ("strong" !== type) {
                                            if ("em" !== type) {
                                              if ("customEmoji" !== type) {
                                                if ("emoji" !== type) {
                                                  if ("inlineCode" !== type) {
                                                    if ("text" === type) {
                                                      item.startIndex = startIndex + num;
                                                      item.endIndex = item.startIndex + item.content.length;
                                                      return item;
                                                    } else {
                                                      item.startIndex = startIndex + num;
                                                      let content = item.content;
                                                      content2 = content;
                                                      startIndex = item.startIndex;
                                                      c2 = 0;
                                                      let mapped = content.map(() => { ... });
                                                      item.endIndex = mapped[mapped.length - 1].endIndex;
                                                      return item;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            item.startIndex = startIndex + num;
                                            let content1 = item.content;
                                            content2 = content1;
                                            startIndex = item.startIndex + 1;
                                            c2 = 0;
                                            let mapped1 = content1.map(() => { ... });
                                            item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    content2 = item.content;
                                    startIndex = item.startIndex + 2;
                                    c2 = 0;
                                    let mapped2 = content2.map(() => { ... });
                                    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                                    return item;
                                  });
                                  item.endIndex = mapped[mapped.length - 1].endIndex;
                                  return item;
                                }
                              }
                            }
                          }
                        }
                        item.startIndex = startIndex + num;
                        let content1 = item.content;
                        content2 = content1;
                        startIndex = item.startIndex + 1;
                        c2 = 0;
                        let mapped1 = content1.map((item, index) => {
                          let num = 0;
                          if (0 !== c2) {
                            num = content2[tmp - 1].endIndex;
                          }
                          c2 = c2 + 1;
                          let type = item.type;
                          if ("spoiler" !== type) {
                            if ("u" !== type) {
                              if ("s" !== type) {
                                if ("strong" !== type) {
                                  if ("em" !== type) {
                                    if ("customEmoji" !== type) {
                                      if ("emoji" !== type) {
                                        if ("inlineCode" !== type) {
                                          if ("text" === type) {
                                            item.startIndex = startIndex + num;
                                            item.endIndex = item.startIndex + item.content.length;
                                            return item;
                                          } else {
                                            item.startIndex = startIndex + num;
                                            let content = item.content;
                                            content2 = content;
                                            startIndex = item.startIndex;
                                            c2 = 0;
                                            let mapped = content.map(() => { ... });
                                            item.endIndex = mapped[mapped.length - 1].endIndex;
                                            return item;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  item.startIndex = startIndex + num;
                                  let content1 = item.content;
                                  content2 = content1;
                                  startIndex = item.startIndex + 1;
                                  c2 = 0;
                                  let mapped1 = content1.map(() => { ... });
                                  item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                  return item;
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          content2 = item.content;
                          startIndex = item.startIndex + 2;
                          c2 = 0;
                          let mapped2 = content2.map(() => { ... });
                          item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                          return item;
                        });
                        item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                        return item;
                      }
                    }
                  }
                }
                item.startIndex = startIndex + num;
                content2 = item.content;
                startIndex = item.startIndex + 2;
                c2 = 0;
                let mapped2 = content2.map((item, index) => {
                  let num = 0;
                  if (0 !== c2) {
                    num = content2[tmp - 1].endIndex;
                  }
                  c2 = c2 + 1;
                  let type = item.type;
                  if ("spoiler" !== type) {
                    if ("u" !== type) {
                      if ("s" !== type) {
                        if ("strong" !== type) {
                          if ("em" !== type) {
                            if ("customEmoji" !== type) {
                              if ("emoji" !== type) {
                                if ("inlineCode" !== type) {
                                  if ("text" === type) {
                                    item.startIndex = startIndex + num;
                                    item.endIndex = item.startIndex + item.content.length;
                                    return item;
                                  } else {
                                    item.startIndex = startIndex + num;
                                    let content = item.content;
                                    content2 = content;
                                    startIndex = item.startIndex;
                                    c2 = 0;
                                    let mapped = content.map(() => { ... });
                                    item.endIndex = mapped[mapped.length - 1].endIndex;
                                    return item;
                                  }
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          let content1 = item.content;
                          content2 = content1;
                          startIndex = item.startIndex + 1;
                          c2 = 0;
                          let mapped1 = content1.map(() => { ... });
                          item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                          return item;
                        }
                      }
                    }
                  }
                  item.startIndex = startIndex + num;
                  content2 = item.content;
                  startIndex = item.startIndex + 2;
                  c2 = 0;
                  let mapped2 = content2.map(() => { ... });
                  item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                  return item;
                });
                item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                return item;
              });
              item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
              return item;
            }
          }
        }
      }
      item.startIndex = startIndex + num;
      content2 = item.content;
      startIndex = item.startIndex + 2;
      c2 = 0;
      let mapped2 = content2.map((item, index) => {
        let num = 0;
        if (0 !== c2) {
          num = content2[tmp - 1].endIndex;
        }
        c2 = c2 + 1;
        let type = item.type;
        if ("spoiler" !== type) {
          if ("u" !== type) {
            if ("s" !== type) {
              if ("strong" !== type) {
                if ("em" !== type) {
                  if ("customEmoji" !== type) {
                    if ("emoji" !== type) {
                      if ("inlineCode" !== type) {
                        if ("text" === type) {
                          item.startIndex = startIndex + num;
                          item.endIndex = item.startIndex + item.content.length;
                          return item;
                        } else {
                          item.startIndex = startIndex + num;
                          let content = item.content;
                          content2 = content;
                          startIndex = item.startIndex;
                          c2 = 0;
                          let mapped = content.map((item, index) => {
                            let num = 0;
                            if (0 !== c2) {
                              num = content2[tmp - 1].endIndex;
                            }
                            c2 = c2 + 1;
                            let type = item.type;
                            if ("spoiler" !== type) {
                              if ("u" !== type) {
                                if ("s" !== type) {
                                  if ("strong" !== type) {
                                    if ("em" !== type) {
                                      if ("customEmoji" !== type) {
                                        if ("emoji" !== type) {
                                          if ("inlineCode" !== type) {
                                            if ("text" === type) {
                                              item.startIndex = startIndex + num;
                                              item.endIndex = item.startIndex + item.content.length;
                                              return item;
                                            } else {
                                              item.startIndex = startIndex + num;
                                              let content = item.content;
                                              content2 = content;
                                              startIndex = item.startIndex;
                                              c2 = 0;
                                              let mapped = content.map(() => { ... });
                                              item.endIndex = mapped[mapped.length - 1].endIndex;
                                              return item;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    item.startIndex = startIndex + num;
                                    let content1 = item.content;
                                    content2 = content1;
                                    startIndex = item.startIndex + 1;
                                    c2 = 0;
                                    let mapped1 = content1.map(() => { ... });
                                    item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                                    return item;
                                  }
                                }
                              }
                            }
                            item.startIndex = startIndex + num;
                            content2 = item.content;
                            startIndex = item.startIndex + 2;
                            c2 = 0;
                            let mapped2 = content2.map(() => { ... });
                            item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                            return item;
                          });
                          item.endIndex = mapped[mapped.length - 1].endIndex;
                          return item;
                        }
                      }
                    }
                  }
                }
                item.startIndex = startIndex + num;
                let content1 = item.content;
                content2 = content1;
                startIndex = item.startIndex + 1;
                c2 = 0;
                let mapped1 = content1.map((item, index) => {
                  let num = 0;
                  if (0 !== c2) {
                    num = content2[tmp - 1].endIndex;
                  }
                  c2 = c2 + 1;
                  let type = item.type;
                  if ("spoiler" !== type) {
                    if ("u" !== type) {
                      if ("s" !== type) {
                        if ("strong" !== type) {
                          if ("em" !== type) {
                            if ("customEmoji" !== type) {
                              if ("emoji" !== type) {
                                if ("inlineCode" !== type) {
                                  if ("text" === type) {
                                    item.startIndex = startIndex + num;
                                    item.endIndex = item.startIndex + item.content.length;
                                    return item;
                                  } else {
                                    item.startIndex = startIndex + num;
                                    let content = item.content;
                                    content2 = content;
                                    startIndex = item.startIndex;
                                    c2 = 0;
                                    let mapped = content.map(() => { ... });
                                    item.endIndex = mapped[mapped.length - 1].endIndex;
                                    return item;
                                  }
                                }
                              }
                            }
                          }
                          item.startIndex = startIndex + num;
                          let content1 = item.content;
                          content2 = content1;
                          startIndex = item.startIndex + 1;
                          c2 = 0;
                          let mapped1 = content1.map(() => { ... });
                          item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                          return item;
                        }
                      }
                    }
                  }
                  item.startIndex = startIndex + num;
                  content2 = item.content;
                  startIndex = item.startIndex + 2;
                  c2 = 0;
                  let mapped2 = content2.map(() => { ... });
                  item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
                  return item;
                });
                item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                return item;
              }
            }
          }
        }
        item.startIndex = startIndex + num;
        content2 = item.content;
        startIndex = item.startIndex + 2;
        c2 = 0;
        let mapped2 = content2.map((item, index) => {
          let num = 0;
          if (0 !== c2) {
            num = content2[tmp - 1].endIndex;
          }
          c2 = c2 + 1;
          let type = item.type;
          if ("spoiler" !== type) {
            if ("u" !== type) {
              if ("s" !== type) {
                if ("strong" !== type) {
                  if ("em" !== type) {
                    if ("customEmoji" !== type) {
                      if ("emoji" !== type) {
                        if ("inlineCode" !== type) {
                          if ("text" === type) {
                            item.startIndex = startIndex + num;
                            item.endIndex = item.startIndex + item.content.length;
                            return item;
                          } else {
                            item.startIndex = startIndex + num;
                            let content = item.content;
                            content2 = content;
                            startIndex = item.startIndex;
                            c2 = 0;
                            let mapped = content.map(() => { ... });
                            item.endIndex = mapped[mapped.length - 1].endIndex;
                            return item;
                          }
                        }
                      }
                    }
                  }
                  item.startIndex = startIndex + num;
                  let content1 = item.content;
                  content2 = content1;
                  startIndex = item.startIndex + 1;
                  c2 = 0;
                  let mapped1 = content1.map(() => { ... });
                  item.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
                  return item;
                }
              }
            }
          }
          item.startIndex = startIndex + num;
          content2 = item.content;
          startIndex = item.startIndex + 2;
          c2 = 0;
          let mapped2 = content2.map(() => { ... });
          item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
          return item;
        });
        item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
        return item;
      });
      item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
      return item;
    });
    item.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
    return item;
  });
};
export const MarkupParserNodeTypeError = prototype;