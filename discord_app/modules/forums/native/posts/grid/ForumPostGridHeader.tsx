// === Module 13490: ForumPostGridHeader ===

// Module 13490 (ForumPostGridHeader)
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 13491 */;
import ForumPostUsername from "ForumPostUsername" /* 13493 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 13502 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 13503 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 13504 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ForumTimestampFormats = fn(9007).ForumTimestampFormats;
const ChannelFlags = fn(5166).ChannelFlags;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5310);
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
  items = [hasFlagResult, timestampProducer(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), timestampProducer(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = timestampProducer(ForumPostNewTagDefault, {});
  }
  items[3] = isNew;
  obj2.children = items;
  const items1 = [metroImportDefault(View, obj2), timestampProducer(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj.children = items1;
  return metroImportDefault(View, obj);
};