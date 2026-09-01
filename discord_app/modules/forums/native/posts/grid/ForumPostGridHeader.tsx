// discord_app/modules/forums/native/posts/grid/ForumPostGridHeader.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ForumPostPinIconDefault from "../ForumPostPinIcon.tsx";
import ForumPostUsername from "../ForumPostUsername.tsx";
import ForumPostTimestampDefault from "../ForumPostTimestamp.tsx";
import ForumPostTitleDefault from "../ForumPostTitle.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ForumTimestampFormats } from "../../../ForumConstants.tsx";
import { ChannelFlags } from "../../../../channel/ChannelConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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
    isNew = tmp8(tmp10(11587), {});
  }
  items[3] = isNew;
  obj[1] = items;
  const items1 = [closure_7(View, obj), callback(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj[1] = items1;
  return closure_7(View, obj);
};