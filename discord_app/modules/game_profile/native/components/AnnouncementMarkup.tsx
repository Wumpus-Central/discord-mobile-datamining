// discord_app/modules/game_profile/native/components/AnnouncementMarkup.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import _modDef2068 from "../../../../../_runtime/metro/02068__.js";
import CustomMarkup from "../../../markup/CustomMarkup.native.tsx";
import Spoiler from "../../../markup/native/Spoiler.tsx";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import parseNativeMarkupDefault from "../../../markup_v2/native/parseNativeMarkup.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import apply_mod from "../../../../../_runtime/00012_apply.js";

require = fn;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1378);
let apply = apply_mod;
let closure_6 = apply.once(() => CustomMarkup.createRules({}));
let apply = apply_mod;
let closure_7 = apply.once(() => MarkupUtilsDefault.reactParserFor(closure_6()));
let apply = apply_mod;
let closure_8 = apply.once(() => _modDef2068.outputFor(closure_6(), "react"));
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
        return jsx(
          Spoiler.SpoilerRevealProvider,
          { children: closure_8()(parseNativeMarkupDefault(content, true, obj2), obj2) },
          content,
        );
      } catch (tmp22) {
        SentryUtilsDefault.captureException(tmp22);
        return closure_7()(content, tmp, tmp2);
      }
    } else {
      return closure_7()(content, true, obj);
    }
  }, items);
}
