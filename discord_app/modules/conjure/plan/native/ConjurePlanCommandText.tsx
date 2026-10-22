// === Module 12401: ConjurePlanCommandText ===

// Module 12401 (ConjurePlanCommandText)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5220 */;
import noop from "module_19" /* 19 */;

require = fn;
const COMMAND_SENTINEL = fn(5971).COMMAND_SENTINEL;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
let obj2 = { mention: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND } };
let closure_5 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandMention(arg0) {
  const cResult = c.c(4);
  ({ name, prefix, size } = arg0);
  if (undefined === prefix) {
    prefix = COMMAND_SENTINEL;
  }
  const tmp4 = closure_5();
  const combined = "" + size + "/bold";
  let combined1 = name;
  if ("" !== prefix) {
    const _HermesInternal = HermesInternal;
    combined1 = "" + prefix + "\u2060" + name;
  }
  if (cResult[0] === tmp4.mention) {
    if (cResult[1] === combined) {
      if (cResult[2] === combined1) {
        let tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(Text_Text.Text, { variant: combined, color: "none", style: tmp4.mention, children: combined1 });
  cResult[0] = tmp4.mention;
  cResult[1] = combined;
  cResult[2] = combined1;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj2 = { variant: combined, color: "none", style: tmp4.mention, children: combined1 };
}) : (function ConjurePlanCommandMention(size) {
  ({ name, prefix } = size);
  if (prefix === undefined) {
    prefix = COMMAND_SENTINEL;
  }
  const obj = { variant: "" + size.size + "/bold", color: "none", style: closure_5().mention, children: null };
  let combined = name;
  if ("" !== prefix) {
    const _HermesInternal = HermesInternal;
    combined = "" + prefix + "\u2060" + name;
  }
  obj.children = combined;
  return jsx(Text_Text.Text, { variant: "" + size.size + "/bold", color: "none", style: closure_5().mention, children: null });
});
let closure_6 = tmp2;
fn(558);
const obj3 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandText(arg0) {
  const cResult = size(576).c(4);
  ({ text, size, commandNames } = arg0);
  const obj = size(576);
  const conjurePlanCommandPattern = size(12384).useConjurePlanCommandPattern(commandNames);
  if (cResult[0] === conjurePlanCommandPattern) {
    if (cResult[1] === size) {
      if (cResult[2] === text) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const obj2 = size(12384);
  const result = size(12384).splitConjurePlanCommandText(text, conjurePlanCommandPattern);
  let mapped = text;
  if (null != result) {
    mapped = result.map((kind) => {
      if ("command" === kind.kind) {
        const obj = { name: kind.name, size };
        let text = closure_2_4(closure_2_6, obj, kind.start);
      } else {
        text = kind.text;
      }
      return text;
    });
  }
  cResult[0] = conjurePlanCommandPattern;
  cResult[1] = size;
  cResult[2] = text;
  cResult[3] = mapped;
  tmp5 = mapped;
  const tmpResult = size(12384);
}) : (function ConjurePlanCommandText(text) {
  text = text.text;
  ({ commandNames, size } = text);
  const conjurePlanCommandPattern = size(12384).useConjurePlanCommandPattern(commandNames);
  const obj = size(12384);
  const result = size(12384).splitConjurePlanCommandText(text, conjurePlanCommandPattern);
  if (null != result) {
    text = result.map((kind) => {
      if ("command" === kind.kind) {
        const obj = { name: kind.name, size };
        let text = closure_2_4(closure_2_6, obj, kind.start);
      } else {
        text = kind.text;
      }
      return text;
    });
  }
  return text;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandText.tsx");

export const ConjurePlanCommandMention = tmp2;
export const ConjurePlanCommandText = tmp3;
export const ConjurePlanCommandMarkup = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanCommandMarkup(arg0) {
  const cResult = conjurePlanCommandPattern(size[6]).c(4);
  ({ markup, size, commandNames } = arg0);
  const obj = conjurePlanCommandPattern(size[6]);
  conjurePlanCommandPattern = conjurePlanCommandPattern(size[8]).useConjurePlanCommandPattern(commandNames);
  if (cResult[0] === markup) {
    if (cResult[1] === conjurePlanCommandPattern) {
      if (cResult[2] === size) {
        let tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  let mapped = markup;
  if (null != conjurePlanCommandPattern) {
    const Children = noop.Children;
    mapped = Children.map(markup, (label) => {
      let mapped = label;
      if (typeof label === "string") {
        size = closure_1;
        const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
        if (null != result) {
          mapped = result.map((kind) => {
            if ("command" === kind.kind) {
              const obj = { name: kind.name, size };
              let text = closure_2_4(closure_2_6, obj, kind.start);
            } else {
              text = kind.text;
            }
            return text;
          });
        }
        let cloneElementResult = mapped;
        let obj = markup(size[8]);
      } else {
        cloneElementResult = mapped;
        if (conjurePlanCommandPattern.isValidElement(mapped)) {
          cloneElementResult = mapped;
          if (null != mapped.props.children) {
            ({ Children, cloneElement } = conjurePlanCommandPattern);
            cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (label) => {
              let mapped = label;
              if (typeof label === "string") {
                size = closure_1;
                const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
                if (null != result) {
                  mapped = result.map((kind) => {
                    if ("command" === kind.kind) {
                      const obj = { name: kind.name, size };
                      let text = closure_2_4(closure_2_6, obj, kind.start);
                    } else {
                      text = kind.text;
                    }
                    return text;
                  });
                }
                let cloneElementResult = mapped;
                let obj = markup(size[8]);
              } else {
                cloneElementResult = mapped;
                if (conjurePlanCommandPattern.isValidElement(mapped)) {
                  cloneElementResult = mapped;
                  if (null != mapped.props.children) {
                    ({ Children, cloneElement } = conjurePlanCommandPattern);
                    cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (label) => {
                      let mapped = label;
                      if (typeof label === "string") {
                        size = closure_1;
                        const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
                        if (null != result) {
                          mapped = result.map((kind) => {
                            if ("command" === kind.kind) {
                              const obj = { name: kind.name, size };
                              let text = closure_2_4(closure_2_6, obj, kind.start);
                            } else {
                              text = kind.text;
                            }
                            return text;
                          });
                        }
                        let cloneElementResult = mapped;
                        let obj = markup(size[8]);
                      } else {
                        cloneElementResult = mapped;
                        if (conjurePlanCommandPattern.isValidElement(mapped)) {
                          cloneElementResult = mapped;
                          if (null != mapped.props.children) {
                            ({ Children, cloneElement } = conjurePlanCommandPattern);
                            cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (label) => {
                              let mapped = label;
                              if (typeof label === "string") {
                                size = closure_1;
                                const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
                                if (null != result) {
                                  mapped = result.map(() => { ... });
                                }
                                let cloneElementResult = mapped;
                                let obj = markup(size[8]);
                              } else {
                                cloneElementResult = mapped;
                                if (conjurePlanCommandPattern.isValidElement(mapped)) {
                                  cloneElementResult = mapped;
                                  if (null != mapped.props.children) {
                                    ({ Children, cloneElement } = conjurePlanCommandPattern);
                                    cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, () => { ... }));
                                  }
                                }
                              }
                              return cloneElementResult;
                            }));
                          }
                        }
                      }
                      return cloneElementResult;
                    }));
                  }
                }
              }
              return cloneElementResult;
            }));
          }
        }
      }
      return cloneElementResult;
    });
  }
  cResult[0] = markup;
  cResult[1] = conjurePlanCommandPattern;
  cResult[2] = size;
  cResult[3] = mapped;
  tmp3 = mapped;
  const obj2 = conjurePlanCommandPattern(size[8]);
}) : (function ConjurePlanCommandMarkup(markup) {
  markup = markup.markup;
  let size = markup.size;
  const conjurePlanCommandPattern = markup(size[8]).useConjurePlanCommandPattern(markup.commandNames);
  const items = [markup, conjurePlanCommandPattern, size];
  return conjurePlanCommandPattern.useMemo(() => {
    if (null == conjurePlanCommandPattern) {
      let mapped = markup;
    } else {
      markup = tmp;
      closure_1 = size;
      const Children = noop.Children;
      mapped = Children.map(markup, (label) => {
        let mapped = label;
        if (typeof label === "string") {
          size = closure_1;
          const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
          if (null != result) {
            mapped = result.map((kind) => {
              if ("command" === kind.kind) {
                const obj = { name: kind.name, size };
                let text = closure_2_4(closure_2_6, obj, kind.start);
              } else {
                text = kind.text;
              }
              return text;
            });
          }
          let cloneElementResult = mapped;
          let obj = markup(size[8]);
        } else {
          cloneElementResult = mapped;
          if (conjurePlanCommandPattern.isValidElement(mapped)) {
            cloneElementResult = mapped;
            if (null != mapped.props.children) {
              ({ Children, cloneElement } = conjurePlanCommandPattern);
              cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (label) => {
                let mapped = label;
                if (typeof label === "string") {
                  size = closure_1;
                  const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
                  if (null != result) {
                    mapped = result.map((kind) => {
                      if ("command" === kind.kind) {
                        const obj = { name: kind.name, size };
                        let text = closure_2_4(closure_2_6, obj, kind.start);
                      } else {
                        text = kind.text;
                      }
                      return text;
                    });
                  }
                  let cloneElementResult = mapped;
                  let obj = markup(size[8]);
                } else {
                  cloneElementResult = mapped;
                  if (conjurePlanCommandPattern.isValidElement(mapped)) {
                    cloneElementResult = mapped;
                    if (null != mapped.props.children) {
                      ({ Children, cloneElement } = conjurePlanCommandPattern);
                      cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (label) => {
                        let mapped = label;
                        if (typeof label === "string") {
                          size = closure_1;
                          const result = markup(size[8]).splitConjurePlanCommandText(mapped, size);
                          if (null != result) {
                            mapped = result.map(() => { ... });
                          }
                          let cloneElementResult = mapped;
                          let obj = markup(size[8]);
                        } else {
                          cloneElementResult = mapped;
                          if (conjurePlanCommandPattern.isValidElement(mapped)) {
                            cloneElementResult = mapped;
                            if (null != mapped.props.children) {
                              ({ Children, cloneElement } = conjurePlanCommandPattern);
                              cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, () => { ... }));
                            }
                          }
                        }
                        return cloneElementResult;
                      }));
                    }
                  }
                }
                return cloneElementResult;
              }));
            }
          }
        }
        return cloneElementResult;
      });
    }
    return mapped;
  }, items);
});