// discord_app/modules/forums/native/posts/grid/ForumPostGridHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import { ChannelFlags } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { ForumPostPinIcon } from "../ForumPostPinIcon.tsx";
import { ForumPostTimestamp } from "../ForumPostTimestamp.tsx";
import { ForumPostTitle } from "../ForumPostTitle.tsx";
import { ForumPostUsername } from "../ForumPostUsername.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = require("FORUM_GUIDELINES_ACTION_SHEET").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  let hasUnreads;
  let isNew;
  let thread;
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.details, children: null };
  if (hasFlagResult) {
    obj = { containerStyle: null };
    obj[0] = tmp.pinIcon;
    hasFlagResult = callback(ForumPostPinIcon, obj);
  }
  const items = [hasFlagResult, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestamp, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = tmp8(tmp10(11290), {});
  }
  items[3] = isNew;
  obj[1] = items;
  const items1 = [closure_7(View, obj), callback(ForumPostTitle, { title: thread.name, hasUnreads })];
  obj[1] = items1;
  return closure_7(View, obj);
};