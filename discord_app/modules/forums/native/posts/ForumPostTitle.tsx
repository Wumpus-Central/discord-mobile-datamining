// === Module 12016: ForumPostTitle ===

// Module 12016 (ForumPostTitle)
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let PlatformUtils = fn(1116);
let createStyles = null;
if (PlatformUtils.isIOS()) {
  createStyles = { lineHeight: 22 };
}
createStyles = { title: null };
PlatformUtils = { marginBottom: 6 };
createStyles = Object.assign(createStyles);
createStyles.title = PlatformUtils;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const tmp = closure_3();
  return jsx(Text_Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: closure_3().title, onTextLayout, children: title });
};