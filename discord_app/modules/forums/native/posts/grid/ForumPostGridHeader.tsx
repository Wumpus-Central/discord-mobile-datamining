// === Module 12002: ForumPostGridHeader ===

// Module 12002 (ForumPostGridHeader)
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 12003 */;
import ForumPostUsername from "ForumPostUsername" /* 12005 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 12014 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 12016 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(7273).ForumTimestampFormats;
const ChannelFlags = fn(1964).ChannelFlags;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = closure_8();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.details, children: null };
  if (hasFlagResult) {
    obj = { containerStyle: tmp.pinIcon };
    hasFlagResult = timestampProducer(ForumPostPinIconDefault, obj);
  }
  const items = [hasFlagResult, timestampProducer(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), timestampProducer(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = tmp8(tmp10(12015), {});
  }
  items[3] = isNew;
  obj.children = items;
  const items1 = [React5(View, obj), timestampProducer(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj.children = items1;
  return React5(View, obj);
};