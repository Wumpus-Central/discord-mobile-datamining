// === Module 11178: ForumPostGridHeader ===

// Module 11178 (ForumPostGridHeader)
import noopAll from "noop" /* 19 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 11179 */;
import ForumPostUsername from "ForumPostUsername" /* 11181 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 11190 */;
import ForumPostNewTagDefault from "ForumPostNewTag" /* 11191 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 11192 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET" /* 7273 */;
import { ChannelFlags } from "set" /* 1398 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = require("obj132").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.details, children: null };
  if (hasFlagResult) {
    obj = { containerStyle: null };
    obj[0] = tmp.pinIcon;
    hasFlagResult = callback(ForumPostPinIconDefault, obj);
  }
  const items = [hasFlagResult, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = callback(ForumPostNewTagDefault, {});
  }
  items[3] = isNew;
  obj[1] = items;
  const items1 = [callback(View, obj), callback(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj[1] = items1;
  return callback(View, obj);
};