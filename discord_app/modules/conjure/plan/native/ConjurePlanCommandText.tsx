// discord_app/modules/conjure/plan/native/ConjurePlanCommandText.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class ConjurePlanCommandMention {
  constructor(arg0) {
    ({ name, prefix } = global);
    if (prefix === undefined) {
      prefix = COMMAND_SENTINEL;
    }
    tmp = closure_5();
    tmp2 = jsx;
    obj = { variant: "" + global.size + "/bold", color: "none", style: tmp.mention, children: null };
    combined = name;
    if ("" !== prefix) {
      _HermesInternal = HermesInternal;
      str = "\u2060";
      combined = "" + prefix + "\u2060" + name;
    }
    obj.children = combined;
    return tmp2(closure_0(closure_1[5]).Text, obj);
  }
}
const COMMAND_SENTINEL = fn(6031).COMMAND_SENTINEL;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { mention: { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND } };
const hasOwnProperty = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandText.tsx");

export { ConjurePlanCommandMention };
export function ConjurePlanCommandText(text) {
  text = text.text;
  ({ commandNames, size } = text);
  const conjurePlanCommandPattern = size(12693).useConjurePlanCommandPattern(commandNames);
  const obj = size(12693);
  const result = size(12693).splitConjurePlanCommandText(text, conjurePlanCommandPattern);
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
}
export function ConjurePlanCommandMarkup(markup) {
  markup = markup.markup;
  let size = markup.size;
  const conjurePlanCommandPattern = markup(size[6]).useConjurePlanCommandPattern(markup.commandNames);
  const items = [markup, conjurePlanCommandPattern, size];
  return conjurePlanCommandPattern.useMemo(() => {
    if (null == conjurePlanCommandPattern) {
      let mapped = markup;
    } else {
      markup = tmp;
      closure_1 = size;
      const Children = noop.Children;
      mapped = Children.map(markup, (icon) => {
        let mapped = icon;
        if (typeof icon === "string") {
          size = closure_1;
          const result = markup(size[6]).splitConjurePlanCommandText(mapped, size);
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
          let obj = markup(size[6]);
        } else {
          cloneElementResult = mapped;
          if (conjurePlanCommandPattern.isValidElement(mapped)) {
            cloneElementResult = mapped;
            if (null != mapped.props.children) {
              ({ Children, cloneElement } = conjurePlanCommandPattern);
              cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (icon) => {
                let mapped = icon;
                if (typeof icon === "string") {
                  size = closure_1;
                  const result = markup(size[6]).splitConjurePlanCommandText(mapped, size);
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
                  let obj = markup(size[6]);
                } else {
                  cloneElementResult = mapped;
                  if (conjurePlanCommandPattern.isValidElement(mapped)) {
                    cloneElementResult = mapped;
                    if (null != mapped.props.children) {
                      ({ Children, cloneElement } = conjurePlanCommandPattern);
                      cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, (icon) => {
                        let mapped = icon;
                        if (typeof icon === "string") {
                          size = closure_1;
                          const result = markup(size[6]).splitConjurePlanCommandText(mapped, size);
                          if (null != result) {
                            mapped = result.map(/* F102608 */ function() { ... });
                          }
                          let cloneElementResult = mapped;
                          let obj = markup(size[6]);
                        } else {
                          cloneElementResult = mapped;
                          if (conjurePlanCommandPattern.isValidElement(mapped)) {
                            cloneElementResult = mapped;
                            if (null != mapped.props.children) {
                              ({ Children, cloneElement } = conjurePlanCommandPattern);
                              cloneElementResult = cloneElement(mapped, undefined, Children.map(mapped.props.children, /* F102609 */ function() { ... }));
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
}