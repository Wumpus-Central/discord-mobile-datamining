// === Module 12144: ForumPostGridHeader ===

// Module 12144 (ForumPostGridHeader)
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 12145 */;
import ForumPostUsername from "ForumPostUsername" /* 12147 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 12156 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 12157 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 12158 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(7383).ForumTimestampFormats;
const ChannelFlags = fn(1965).ChannelFlags;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let closure_8 = createStyles.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = closure_8();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.details, children: null };
  if (hasFlagResult) {
    const obj3 = { containerStyle: tmp.pinIcon };
    hasFlagResult = timestampProducer(ForumPostPinIconDefault, obj3);
  }
  const items = [hasFlagResult, timestampProducer(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), timestampProducer(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = timestampProducer(ForumPostNewTagDefault, {});
  }
  items[3] = isNew;
  obj2.children = items;
  const items1 = [React5(View, obj2), timestampProducer(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj.children = items1;
  return React5(View, obj);
};