// === Module 14198: AnnouncementMarkup ===

// Module 14198 (AnnouncementMarkup)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import _modDef2069 from "module_2069" /* 2069 */;
import CustomMarkup from "CustomMarkup" /* 6119 */;
import Spoiler from "Spoiler" /* 6122 */;
import MarkupUtilsDefault from "MarkupUtils" /* 7067 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 14203 */;
import noop from "module_19" /* 19 */;
import apply_mod from "apply" /* 12 */;

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1379);
let apply = apply_mod;
let closure_6 = apply.once(() => CustomMarkup.createRules({}));
let apply = apply_mod;
let closure_7 = apply.once(() => MarkupUtilsDefault.reactParserFor(closure_6()));
let apply = apply_mod;
let closure_8 = apply.once(() => _modDef2069.outputFor(closure_6(), "react"));
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/AnnouncementMarkup.tsx");

export default function AnnouncementMarkup(content) {
  content = content.content;
  const guildId = content.guildId;
  const channelId = content.channelId;
  const enabled = content(channelId[7]).useNativeMarkdown({ location: "GameProfileAnnouncements" }).enabled;
  items = [content, guildId, channelId, enabled];
  return enabled.useMemo(() => {
    const obj = { guildId, channelId, mentionPillOffsetY: num };
    if (enabled) {
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2.allowGameMentions = true;
      obj2.allowLinks = true;
      obj2.allowHeading = true;
      obj2.allowList = true;
      obj2.formatInline = true;
      try {
        const tmp15 = parseNativeMarkupDefault(content, true, obj2);
        const obj3 = { children: closure_8()(parseNativeMarkupDefault(content, true, obj2), obj2) };
        return jsx(Spoiler.SpoilerRevealProvider, { children: closure_8()(parseNativeMarkupDefault(content, true, obj2), obj2) }, content);
      } catch (tmp22) {
        SentryUtilsDefault.captureException(tmp22);
        return closure_7()(content, tmp, tmp2);
      }
    } else {
      return closure_7()(content, true, obj);
    }
  }, items);
};