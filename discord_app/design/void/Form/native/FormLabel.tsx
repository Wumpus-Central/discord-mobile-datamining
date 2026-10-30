// discord_app/design/void/Form/native/FormLabel.tsx
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormLabel.tsx");

export default function FormLabel(children) {
  let lineClamp = children.numberOfLines;
  if (lineClamp === undefined) {
    lineClamp = 0;
  }
  ({ color, style, accessible } = children);
  if (color === undefined) {
    color = "mobile-text-heading-primary";
  }
  return jsx(Text_Text.Text, {
    variant: "heading-md/semibold",
    color,
    lineClamp,
    style,
    maxFontSizeMultiplier: 2,
    accessible,
    children: children.text,
  });
}
