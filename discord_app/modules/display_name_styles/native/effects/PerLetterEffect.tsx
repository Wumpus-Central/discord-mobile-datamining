// discord_app/modules/display_name_styles/native/effects/PerLetterEffect.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Text: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ container: { overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  let obj = { style: null, children: null };
  const items1 = [closure_7().container, containerStyle];
  obj.style = items1;
  const memo = noop.useMemo(() => {
    const regex = colors(11059)();
    closure_1 = 0;
    let obj = name(11060);
    return name(11060)
      .splitGraphemes(regex)
      .map((children, index) => {
        regex.lastIndex = 0;
        const tmp = regex.test(children) || 0 === children.trim().length;
        let tmp2;
        if (null != colors) {
          if (colors.length > 0) {
            if (!tmp) {
              tmp2 = colors[closure_1 % colors.length];
            }
          }
        }
        if (!tmp) {
          closure_1 = closure_1 + 1;
        }
        let tmp7;
        if (null != tmp2) {
          const obj = { color: tmp2 };
          tmp7 = obj;
        }
        return (
          <hasOwnProperty key={index} style={tmp7}>
            {children}
          </hasOwnProperty>
        );
      });
  }, items);
  const obj2 = {};
  const merged = Object.assign(textProps);
  obj2.textBreakStrategy = "simple";
  let accessibilityLabel = textProps.accessibilityLabel;
  if (accessibilityLabel == null) {
    accessibilityLabel = name;
  }
  obj2.accessibilityLabel = accessibilityLabel;
  const items2 = [textStyle, { lineHeight: "r" }];
  obj2.style = items2;
  obj2.children = memo;
  obj.children = jsx(name(4636).Text, {});
  return <closure_4 style={null}>{null}</closure_4>;
}
