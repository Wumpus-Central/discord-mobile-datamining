// === Module 12274: ForumPostList ===

// Module 12274 (ForumPostList)
import ForumTagHooks from "ForumTagHooks" /* 7517 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 12256 */;
import ForumPostAppliedTags from "ForumPostAppliedTags" /* 12266 */;
import ForumPostListBodyDefault from "ForumPostListBody" /* 12275 */;
import ForumPostListFooterDefault from "ForumPostListFooter" /* 12278 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ChannelFlags = fn(2048).ChannelFlags;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4756);
let closure_9 = createStyles.createStyles({ header: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 8 }, content: { flex: 1, marginBottom: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = closure_9();
  const tmp4 = _slicedToArray(ForumTagHooks.useSomeAppliedTags(thread, 2), 2);
  const first = tmp4[0];
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  const obj2 = { style: tmp.content, children: null };
  let tmp6Result = hasFlagResult;
  if (!hasFlagResult) {
    tmp6Result = 0 !== first.length;
  }
  if (tmp6Result) {
    const obj3 = { style: tmp.header, children: null };
    let tmp10 = hasFlagResult;
    if (hasFlagResult) {
      tmp10 = timestampProducer(ForumPostPinIconDefault, {});
    }
    const items = [tmp10, ];
    let tmp13 = 0 !== first.length;
    if (tmp13) {
      const obj4 = { appliedTags: first, additionalTagsCount: tmp4[1], hasUnreads };
      tmp13 = timestampProducer(ForumPostAppliedTags.ForumPostAppliedTagPills, obj4);
    }
    items[1] = tmp13;
    obj3.children = items;
    tmp6Result = React5(View, obj3);
  }
  const obj5 = { children: null };
  const items1 = [tmp6Result, timestampProducer(ForumPostListBodyDefault, { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  obj2.children = items1;
  const items2 = [React5(View, obj2), timestampProducer(ForumPostListFooterDefault, { thread, firstMessage, hasUnreads, parentChannel })];
  obj5.children = items2;
  return React5(React6, obj5);
};