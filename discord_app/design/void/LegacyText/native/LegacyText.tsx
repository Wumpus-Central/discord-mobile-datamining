// discord_app/design/void/LegacyText/native/LegacyText.tsx
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  text: { fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, includeFontPadding: false },
});
let obj = { text: { fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, includeFontPadding: false } };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default noop.forwardRef((arg0, ref) => {
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const obj = { ref };
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [closure_4().text, style, legacyTextMigrationHighlight];
  obj.style = items;
  obj.children = children;
  return <Text ref={ref} />;
});
