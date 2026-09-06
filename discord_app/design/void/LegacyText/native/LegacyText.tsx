// === Module 8612: LegacyText/LegacyText ===

// Module 8612 (LegacyText/LegacyText)
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8613 */;
import noop from "module_19" /* 19 */;

require = fn;
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ text: { fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
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
  return <Text ref={arg1} />;
});