// === Module 12021: ForumPostList ===

// Module 12021 (ForumPostList)
import ForumTagHooks from "ForumTagHooks" /* 7275 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 12003 */;
import ForumPostAppliedTags from "ForumPostAppliedTags" /* 12013 */;
import ForumPostListBodyDefault from "ForumPostListBody" /* 12022 */;
import ForumPostListFooterDefault from "ForumPostListFooter" /* 12025 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ChannelFlags = fn(1964).ChannelFlags;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, content: { flex: 1, marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = closure_9();
  let obj = ForumTagHooks;
  const tmp4 = _slicedToArray(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp4[0];
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  obj = { style: tmp.content, children: null };
  let tmp6Result = hasFlagResult;
  if (!hasFlagResult) {
    tmp6Result = 0 !== first.length;
  }
  if (tmp6Result) {
    obj = { style: tmp.header, children: null };
    let tmp10 = hasFlagResult;
    if (hasFlagResult) {
      tmp10 = timestampProducer(ForumPostPinIconDefault, {});
    }
    const items = [tmp10, ];
    let tmp13 = 0 !== first.length;
    if (tmp13) {
      const obj1 = { appliedTags: first, additionalTagsCount: tmp4[1], hasUnreads };
      tmp13 = timestampProducer(ForumPostAppliedTags.ForumPostAppliedTagPills, obj1);
    }
    items[1] = tmp13;
    obj.children = items;
    tmp6Result = tmp6(tmp8, obj);
  }
  const obj2 = { children: null };
  const items1 = [tmp6Result, timestampProducer(ForumPostListBodyDefault, { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  obj.children = items1;
  const items2 = [React5(View, obj), timestampProducer(ForumPostListFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  obj2.children = items2;
  return React5(React6, obj2);
};