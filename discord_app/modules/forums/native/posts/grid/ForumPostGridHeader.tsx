// === Module 11797: ForumPostGridHeader ===

// Module 11797 (ForumPostGridHeader)
import noopAll from "noop" /* 19 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 11798 */;
import ForumPostUsername from "ForumPostUsername" /* 11800 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 11809 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 11811 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET" /* 6128 */;
import { ChannelFlags } from "set" /* 1393 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.details, children: null };
  if (hasFlagResult) {
    obj = { containerStyle: null };
    obj[0] = tmp.pinIcon;
    hasFlagResult = callback(ForumPostPinIconDefault, obj);
  }
  const items = [hasFlagResult, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = tmp8(tmp10(11810), {});
  }
  items[3] = isNew;
  obj[1] = items;
  const items1 = [closure_7(View, obj), callback(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj[1] = items1;
  return closure_7(View, obj);
};